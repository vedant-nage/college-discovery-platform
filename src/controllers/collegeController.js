import College from "../models/College.js";

export const createCollege = async (
  req,
  res
) => {
  const college =
    await College.create(req.body);

  res.status(201).json(college);
};

export const getColleges = async (
  req,
  res
) => {
  const page =
    Number(req.query.page) || 1;

  const limit =
    Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const query = {};

  if (req.query.location) {
    query.location =
      req.query.location;
  }

  if (req.query.minRating) {
    query.rating = {
      $gte: Number(
        req.query.minRating
      )
    };
  }

  if (req.query.search) {
    query.name = {
      $regex: req.query.search,
      $options: "i"
    };
  }

  let sort = {};

    if (req.query.sort === "fees") {
    sort.fees = 1;
    }

    if (req.query.sort === "rating") {
    sort.rating = -1;
    }

    const colleges =
    await College.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit);

  res.json(colleges);
};

export const getCollegeById =
  async (req, res) => {
    const college =
      await College.findById(
        req.params.id
      );

    if (!college)
      return res.status(404).json({
        message: "Not Found"
      });

    res.json(college);
  };

export const updateCollege =
  async (req, res) => {
    const college =
      await College.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(college);
  };

export const deleteCollege =
  async (req, res) => {
    await College.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted"
    });
  };