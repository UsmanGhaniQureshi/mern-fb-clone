const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Getting A User

const getUser = expressAsyncHandler(async (req, res) => {
  const user = req.user;
  res.json({ user });
});

// Creating a New User
const createUser = expressAsyncHandler(async (req, res) => {
  const { first_name, last_name, password, email } = req.body;

  if (!first_name || !last_name || !password) {
    throw new Error("Kindly fill the required fields");
  }

  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User Already Exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    first_name,
    last_name,
    user_name: first_name + " " + last_name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(newUser);

  res.json({ token });
});

//Login User

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

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

module.exports = {
  getUser,
  createUser,
  loginUser,
};
