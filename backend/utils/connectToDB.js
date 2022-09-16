const mongoose = require("mongoose");

export function connectToDB() {
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
}
