import SavedCollege from "../models/SavedCollege.js";

export const saveCollege = async (
  req,
  res
) => {
  const saved =
    await SavedCollege.create({
      userId: req.user.id,
      collegeId: req.params.collegeId
    });

  res.status(201).json(saved);
};

export const getSavedColleges =
  async (req, res) => {
    const colleges =
      await SavedCollege.find({
        userId: req.user.id
      }).populate("collegeId");

    res.json(colleges);
  };