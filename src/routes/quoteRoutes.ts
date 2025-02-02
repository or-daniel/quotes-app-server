import { Router } from "express";
import { fetchQuotes } from "../controllers/quoteController";
import { validateFetchQuotes } from "../middleware/quoteValidation";

const router: Router = Router();

router.get("/getQuotes", validateFetchQuotes, fetchQuotes);

export default router;
