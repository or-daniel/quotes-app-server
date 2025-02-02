import { config } from "../config/config";
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    if (!config.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }
    await mongoose.connect(config.MONGO_URI);
  } catch (error) {
    throw error;
  }
};

export default connectDB;
