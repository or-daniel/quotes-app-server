import axios from "axios";
import QuoteModel, { Quote } from "../models/Quote";
import { config } from "../config/config";

const FAVQS_API_URL = config.FAVQS_API;
const FAVQS_API_KEY = config.API_KEY;

export const getQuotes = async (
  count: number,
  filter?: string,
  type = "tag"
): Promise<Quote[]> => {
  try {
    const params = filter ? { filter, type, page: 1 } : { type, page: 1 };
    const response = await axios.get(`${FAVQS_API_URL}/quotes/`, {
      headers: {
        Authorization: `Token token="${FAVQS_API_KEY}"`,
        "Content-Type": "application/json",
      },
      params,
    });

    const reachedRateLimit =
      Number(response.headers["rate-limit-remaining"]) === 0;
    if (reachedRateLimit) {
      const randomQuotes = await QuoteModel.aggregate([
        { $sample: { size: count } },
      ]);
      return randomQuotes;
    }

    const fetchedQuotes = response.data.quotes;

    await insertQuotesToDB(fetchedQuotes);

    return fetchedQuotes.slice(0, count);
  } catch (error) {
    throw new Error("Error fetching quote from FavQs");
  }
};

const insertQuotesToDB = async (quotes: Quote[]) => {
  try {
    const existingIds = await QuoteModel.find({
      id: { $in: quotes.map((q: Quote) => q.id) },
    }).distinct("id");

    const newQuotes = quotes.filter((q: Quote) => !existingIds.includes(q.id));

    if (newQuotes.length > 0) {
      await QuoteModel.insertMany(newQuotes);
    }
  } catch (error) {
    console.error("Error inserting quotes to DB:", error);
  }
};
