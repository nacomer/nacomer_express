const usersService = require("../services/users");
const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

exports.getUser = async function (req, res) {
  try {
    const user = await usersService.getUser(req.body.name, req.body.password);
    if (user !== null) {
      const payload = {
        userId: user.id,
      };
      const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);
      return res.status(200).json({
        isSuccess: true,
        token: token,
      });
    } else {
      return res.status(404).json({
        isSuccess: false,
        message: "ユーザーIDまたはパスワードが違います。",
      });
    }
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
