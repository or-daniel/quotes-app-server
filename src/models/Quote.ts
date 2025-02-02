import mongoose, { Document, Schema } from "mongoose";

export interface Quote extends Document {
  id: number;
  body: string;
  author: string;
  tags?: string[];
}

const QuoteSchema: Schema = new Schema({
  id: { type: Number, unique: true, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], default: [] },
});

const QuoteModel = mongoose.model<Quote>("Quote", QuoteSchema);
export default QuoteModel;
