const express = require("express");
const {
  getUser,
  createUser,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;
