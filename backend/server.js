const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

app.listen(PORT, () => console.log("Server Is Running", PORT));
