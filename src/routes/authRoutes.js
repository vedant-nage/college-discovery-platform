import express from "express";

import {
  register,
  login
} from "../controllers/authController.js";

import {
  registerValidation
} from "../validators/authValidator.js";

import validate from "../middleware/validate.js";

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  validate,
  register
);

router.post("/login", login);

export default router;