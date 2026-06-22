import express from "express";

import {
  createCollege,
  getColleges,
  getCollegeById,
  updateCollege,
  deleteCollege
} from "../controllers/collegeController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get(
  "/",
  getColleges
);

router.get(
  "/:id",
  getCollegeById
);

router.post(
  "/",
  protect,
  admin,
  createCollege
);

router.put(
  "/:id",
  protect,
  admin,
  updateCollege
);

router.delete(
  "/:id",
  protect,
  admin,
  deleteCollege
);

export default router;