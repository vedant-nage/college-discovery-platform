import mongoose from "mongoose";

const savedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("SavedCollege", savedSchema);