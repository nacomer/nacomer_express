const usersService = require("../services/users");

exports.getUser = async function (req, res) {
  try {
    const user = await usersService.getUser(req.body.name, req.body.password);
    if (user !== undefined) {
      user["Auth"] = "true";
    }
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.postUser = async function (req, res) {
  try {
    const user = await usersService.postUser(req.body);
    return res.status(201).json(user.id);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
