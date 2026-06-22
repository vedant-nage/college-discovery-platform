import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    name: String,

    location: String,

    fees: Number,

    rating: Number,

    courses: [String],

    placements: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model("College", collegeSchema);