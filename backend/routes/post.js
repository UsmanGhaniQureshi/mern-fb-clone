const express = require("express");
const { getPost } = require("../controllers/postController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/",  getPost);

module.exports = router;
