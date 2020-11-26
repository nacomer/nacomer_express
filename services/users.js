const NacomerUser = require("../models").NacomerUser;

exports.getUser = async function (reqGoogleId) {
  const result = await NacomerUser.findAll({
    raw: true,
    where: {
      googleId: reqGoogleId,
    },
  });
  return result;
};

exports.postUser = async function (reqGoogleId, reqUserName, reqPicture) {
  const user = await NacomerUser.create({
    googleId: reqGoogleId,
    name: reqUserName,
    picture: reqPicture,
  });
  return user;
};
