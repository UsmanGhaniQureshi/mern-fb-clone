const express = require("express");
const { body } = require("express-validator");

const {
  getUser,
  createUser,
  loginUser,
  activateUser,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getUser);
router.post(
  "/register",
  body("email")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isEmail()
    .withMessage("Invalid Email Address"),
  body("firstName")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isString()
    .withMessage("Must be a String"),
  body("lastName")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isString()
    .withMessage("Must be a String"),
  body("password")
    .notEmpty()
    .withMessage("Not be Empty")
    .isStrongPassword()
    .withMessage("Password Must be Strong"),
  body("date")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isNumeric()
    .withMessage("Must be A Number"),
  body("month")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isString()
    .withMessage("Must be A String"),
  body("year")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isNumeric()
    .withMessage("Must be A Number"),
  createUser
);

// Login
router.post(
  "/login",
  body("email")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isEmail()
    .withMessage("Invalid Email Address"),
  body("password").notEmpty().withMessage("Not be Empty"),
  loginUser
);

router.put("/activate/:usertoken", activateUser);
module.exports = router;
