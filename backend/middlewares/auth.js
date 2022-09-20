const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = expressAsyncHandler(async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    const { user } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userExist = await User.findById(user._id);

    if (userExist) {
      req.user = userExist;
    } else throw new Error("Invalid Signature");
  } else throw new Error("No token Found");
  next();
});

module.exports = {
  auth,
};
