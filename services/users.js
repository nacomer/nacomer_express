const NacomerUser = require("../models").NacomerUser;

exports.getUser = async function (reqName, reqPassword) {
  const result = await NacomerUser.findOne({
    raw: true,
    where: {
      name: reqName,
      password: reqPassword,
    },
    attributes: ["id", "name"],
  });
  return result;
};

exports.postUser = async function (req) {
  const user = await NacomerUser.create({
    name: req.name,
    password: req.password,
  });
  return user;
};
