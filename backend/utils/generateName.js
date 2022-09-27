const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const generateName = expressAsyncHandler(async (un) => {
  let isUniqueNameFound = false;
  let uName = un;

  do {
    const userExist = await User.findOne({ userName: uName });
    if (!userExist) {
      isUniqueNameFound = true;
      return uName;
    } else {
      uName += getRandomNumber();
      isUniqueNameFound = false;
    }
  } while (isUniqueNameFound);
});

const getRandomNumber = () => {
  const time = new Date();
  return time.getMilliseconds().toString();
};

module.exports = {
  generateName,
};
