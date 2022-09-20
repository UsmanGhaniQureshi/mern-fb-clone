const express = require("express");
const {
  getUser,
  createUser,
  loginUser,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;
