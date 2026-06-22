import mongoose from "mongoose";
import dotenv from "dotenv";

import College from "./src/models/College.js";

dotenv.config();

await mongoose.connect(
  process.env.MONGO_URI
);

await College.insertMany([
  
  {
    "name": "Bharati Vidyapeeth College of Engineering",
    "location": "Pune",
    "fees": 135000,
    "rating": 4.2,
    "courses": ["Computer Engineering", "Information Technology"],
    "placements": "82%"
  },
  {
    "name": "Modern College of Engineering",
    "location": "Pune",
    "fees": 120000,
    "rating": 4.1,
    "courses": ["Computer Engineering", "AI & ML"],
    "placements": "79%"
  },
  {
    "name": "JSPM Rajarshi Shahu College of Engineering",
    "location": "Pune",
    "fees": 118000,
    "rating": 4.0,
    "courses": ["Computer Engineering", "Data Science"],
    "placements": "77%"
  },
  {
    "name": "Cummins College of Engineering for Women",
    "location": "Pune",
    "fees": 150000,
    "rating": 4.5,
    "courses": ["Computer Engineering", "ENTC"],
    "placements": "91%"
  },
  {
    "name": "Army Institute of Technology",
    "location": "Pune",
    "fees": 170000,
    "rating": 4.6,
    "courses": ["Computer Engineering", "IT"],
    "placements": "94%"
  },
  {
    "name": "Indira College of Engineering and Management",
    "location": "Pune",
    "fees": 105000,
    "rating": 3.9,
    "courses": ["Computer Engineering"],
    "placements": "72%"
  },
  {
    "name": "Dr. D. Y. Patil Institute of Technology",
    "location": "Pune",
    "fees": 140000,
    "rating": 4.3,
    "courses": ["Computer Engineering", "AI & DS"],
    "placements": "86%"
  },
  {
    "name": "Zeal College of Engineering",
    "location": "Pune",
    "fees": 98000,
    "rating": 3.8,
    "courses": ["Computer Engineering", "IT"],
    "placements": "70%"
  }

]);

console.log("Data Seeded");

process.exit();