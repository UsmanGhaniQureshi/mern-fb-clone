const expressAsyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { generateName } = require("../utils/generateName");
const { sendEmail } = require("../utils/mailer");

// ============================ Getting A User ===========================
const getUser = expressAsyncHandler(async (req, res) => {
  const user = req.user;
  res.json({ user });
});

// ====================== User Registration ===============================
const createUser = expressAsyncHandler(async (req, res) => {
  // Fields
  const {
    first_name,
    last_name,
    password,
    email,
    birth_Date,
    birth_Year,
    birth_Month,
  } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.json({
      errors: errors.array(),
    });
  }

  const user = await User.findOne({ email });
  if (user) throw new Error("User Already Exist");

  const username = await generateName(first_name + last_name);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    first_name,
    last_name,
    user_name: username,
    email,
    password: hashedPassword,
    birth_Date,
    birth_Month,
    birth_Year,
  });

  if (!newUser) {
    throw new Error("Something Went Wrong");
  }

  const token = generateToken(newUser);

  sendEmail(email);

  res.json({ token });
});

// ======================= User Login ===============================
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.json({
      errors: errors.array(),
    });
  }

  const userExist = await User.findOne({ email });

  if (!userExist) {
    throw new Error("User Not Exist");
  }

  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    const token = generateToken(userExist);
    res.json({ message: "Login SuccessFully" });
  }
  throw new Error("InValid Credentials");
});

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

// ==================== User Activation ==========================
const activateUser = expressAsyncHandler(async (req, res) => {
  const { usertoken } = req.params;

  const userID = jwt.verify(usertoken, process.env.JWT_SECRET_KEY);

  const user = await User.findById(userID);

  if (user) {
    user.verified = true;
  }
  await user.save();
});

module.exports = {
  activateUser,
  createUser,
  loginUser,
};
