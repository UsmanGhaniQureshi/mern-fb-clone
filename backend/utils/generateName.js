const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const generateName = expressAsyncHandler(async (un) => {
  let isUniqueNameFound = false;
  let username = un;

  do {
    const userExist = await User.findOne({ user_name: username });
    if (!userExist) {
      isUniqueNameFound = true;
    } else {
      username += getRandomNumber();
      isUniqueNameFound = false;
    }
  } while (isUniqueNameFound);
  return username;
});

const getRandomNumber = () => {
  const time = new Date();
  return time.getMilliseconds().toString();
};

module.exports = {
  generateName,
};
