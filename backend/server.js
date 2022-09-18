const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const { errorHandler } = require("./middlewares/errorhandler");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connection to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

// Routes Dynamically Added

readdirSync("./routes").map((r) =>
  app.use("/" + r.replace(".js", ""), require("./routes/" + r))
);

app.listen(PORT, () => console.log("Server Is Running", PORT));
// ReadDir returns array of the folder files with file extension, as extension not needed so it removed by using replace string method
app.use(errorHandler);
