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
  const { firstName, lastName, password, email, date, year, month } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({
      errors: errors.array(),
    });
  }

  const emailExist = await User.findOne({ email });
  if (emailExist)
    throw new Error(`User with the email address ${email} already Exist`);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const userName = await generateName(firstName + lastName);

  let newUser;
  try {
    newUser = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      date: Number(date),
      month,
      year: Number(year),
    });
  } catch (error) {
    res.json({ error });
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
    res.json({
      error: "User Not exist",
    });
    return;
  }

  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    const { firstName, lastName, followers, email, friends, userName } =
      userExist;
    const token = generateToken(userExist);
    res.json({
      firstName,
      lastName,
      followers,
      email,
      friends,
      userName,
      token,
    });
  }
  res.json({
    error: "Invalid Credential",
  });
});

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

// ==================== User Activation ==========================
const activateUser = expressAsyncHandler(async (req, res) => {
  const { usertoken } = req.params;
  const { user } = jwt.verify(usertoken, process.env.JWT_SECRET_KEY);
  const updateUser = await User.findById(user._id);
  if (updateUser) {
    updateUser.isVerified = true;
  }
  await updateUser.save();
});

module.exports = {
  getUser,
  activateUser,
  createUser,
  loginUser,
};
