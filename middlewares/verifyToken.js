const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

function verifyToken(req, res, next) {
  // splitで半角スペースで分割して後ろ側がTokenになる
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, config.jwt.secret, function (error, decoded) {
      if (error) {
        return res.status(403).send({
          isSuccess: false,
          message: "トークンの認証に失敗しました。",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      isSuccess: false,
      message: "トークンがありません。",
    });
  }
}
module.exports = verifyToken;
