const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    first_name: { type: String, required: [true, "First Name must Required"] },
    last_name: { type: String, required: [true, "First Name must Required"] },
    user_name: {
      type: String,
      required: [true, "First Name must Required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "First Name must Required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password Must require"] },
    mobile_number: Number,
    profile_image: String,
    cover_image: String,
    birth_Date: Number,
    birth_Month: Number,
    birth_Year: Number,

    friends: { type: Array, default: [] },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    gender: { type: String, enums: ["Male", "Female", "Others"] },
    martial_status: {
      type: String,
      enums: ["Single", "In a relationship", "Commited", "Divorced"],
    },

    bio: String,
    religion: String,
    political: String,
    hometown: String,
    city: String,
    highschool: String,
    college: String,
    workplace: String,
    hobbies: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
