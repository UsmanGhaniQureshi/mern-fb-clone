const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    first_name: { type: String, required: [true, "First Name must Required"] },
    last_name: { type: String, required: [true, "First Name must Required"] },
    user_name: { type: String, required: [true, "First Name must Required"] },
    email: {
      type: String,
      required: [true, "First Name must Required"],
      unique: true,
    },
    date_of_birth: String,
    friends: { type: Array },
    password: { type: String, required: [true, "Password Must require"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
