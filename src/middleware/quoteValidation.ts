import { query } from "express-validator";

export const validateFetchQuotes = [
  query("count")
    .optional()
    .isInt({ min: 1, max: 25 })
    .withMessage("Count must be a number between 1 and 50"),

  query("tag")
    .optional()
    .isString()
    .trim()
    .escape()
    .withMessage("Tag must be a valid string"),
];
