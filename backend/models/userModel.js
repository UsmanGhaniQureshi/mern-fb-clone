const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "First Name must Required"] },
    lastName: { type: String, required: [true, "Last Name must Required"] },
    userName: {
      type: String,
      required: [true, "User Name must Required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email must Required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password Must require"] },
    mobileNumber: Number,
    profileImage: String,
    cover_image: String,
    date: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },

    friends: { type: Array, default: [] },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    gender: { type: String, enums: ["male", "female", "custom"] },
    martialStatus: {
      type: String,
      enums: ["Single", "In a relationship", "Commited", "Divorced"],
    },

    isVerified: { type: Boolean, default: false },

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
