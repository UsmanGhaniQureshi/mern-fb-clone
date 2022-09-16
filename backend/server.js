const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 5000;
const options = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(options));

app.listen(PORT, () => console.log("Server Is Running", PORT));

app.use("/", (req, res) => res.send("Welcone"));
