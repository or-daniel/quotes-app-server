import "dotenv/config";

export const config = {
  MONGO_URI: process.env.MONGO_URI || "",
  PORT: Number(process.env.PORT) || 3000,
  FAVQS_API: process.env.FAVQS_API || "",
  API_KEY: process.env.API_KEY || "",
};
