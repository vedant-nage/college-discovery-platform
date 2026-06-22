import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  saveCollege,
  getSavedColleges
} from "../controllers/savedController.js";

const router = express.Router();

router.post(
  "/:collegeId",
  protect,
  saveCollege
);

router.get(
  "/",
  protect,
  getSavedColleges
);

export default router;