import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import collegeRoutes from "./routes/collegeRoutes.js";
import savedRoutes from "./routes/savedRoutes.js";

import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "College Discovery API Running"
  });
});
app.use("/api/auth", authRoutes);

app.use("/api/colleges", collegeRoutes);

app.use("/api/saved", savedRoutes);

app.use(errorHandler);

export default app;