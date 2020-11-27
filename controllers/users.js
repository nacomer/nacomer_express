const usersService = require("../services/users");
// const jwt = require("jsonwebtoken");
// const config = require("../config/jwt.config");

exports.postUser = async function (req, res) {
  try {
    console.log("test1");
    console.log(req.body);
    const user = await usersService.getUser(req.body.googleId);
    console.log("test2");
    if (user.length !== 0) {
      res.status(200).end();
    } else {
      console.log(user);
      await usersService
        .postUser(req.body.googleId, req.body.userName, req.body.picture)
        .then(() => {
          res.status(201).end();
        });
    }
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

// exports.postUser = async function (req, res) {
//   try {
//     const user = await usersService.postUser(req.body);
//     return res.status(201).json(user.id);
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message });
//   }
// };

// exports.getLoginUser = async function (req, res) {
//   try {
//     return res.status(200).json({
//       userId: req.decoded.userId,
//       name: req.decoded.name,
//     });
//   } catch (e) {
//     return res.status(400).json({ status: 400, message: e.message });
//   }
// };
