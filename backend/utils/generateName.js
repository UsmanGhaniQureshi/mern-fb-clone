const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const generateName = expressAsyncHandler(async (un) => {
  let uName = un.toLowerCase();
  let isUniqueNameFound = false;

  // Find that user name exist or not  if not exist then return the username straight from here.
  const user = await User.findOne({ userName: uName });
  if (!user) return uName.toLowerCase();
  else
    do {
      const userExist = await User.findOne({ userName: uName });
      if (!userExist) isUniqueNameFound = true;
      else {
        uName += getRandomNumber();
        console.log(uName);
        isUniqueNameFound = false;
      }
    } while (isUniqueNameFound);
  return uName;
});

const getRandomNumber = () => {
  const time = new Date();
  return time.getMilliseconds().toString();
};

module.exports = {
  generateName,
};
