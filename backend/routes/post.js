const express = require("express");
const { getPost, gmailSend } = require("../controllers/postController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", auth, getPost);
router.post("/email", gmailSend);

module.exports = router;
