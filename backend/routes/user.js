const express = require("express");
const { body } = require("express-validator");

const {
  getUser,
  createUser,
  loginUser,
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
  body("first_name")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isString()
    .withMessage("Must be a String"),
  body("last_name")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isString()
    .withMessage("Must be a String"),
  body("password")
    .notEmpty()
    .withMessage("Not be Empty")
    .isStrongPassword()
    .withMessage("Password Must be Strong"),
  body("birth_Date")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isNumeric()
    .withMessage("Must be A Number"),
  body("birth_Month")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isNumeric()
    .withMessage("Must be A Number"),
  body("birth_Year")
    .notEmpty()
    .withMessage("Can not be Empty")
    .isNumeric()
    .withMessage("Must be A Number"),
  createUser
);
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

module.exports = router;
