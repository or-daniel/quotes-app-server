import express, { Application, Request, Response } from "express";
import connectDB from "./src/db/db";
import { config } from "./src/config/config";
import router from "./src/routes/quoteRoutes";
import cors from "cors";

const app: Application = express();
const PORT: number = config.PORT;

app.use(cors());

connectDB();

app.use(express.json());

app.use("/quotes", router);

app.get("/", (_req, res) => {
  res.send("root RUNNING APP...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
