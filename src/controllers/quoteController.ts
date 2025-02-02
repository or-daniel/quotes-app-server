import { Request, Response } from "express";
import { getQuotes } from "../services/quoteService";
import { validationResult } from "express-validator";

export const fetchQuotes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const count = parseInt(req.query.count as string) || 5;
    const tag = (req.query.tag as string) || "";
    const quotes = await getQuotes(count, tag);

    res.json({ quotes });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
