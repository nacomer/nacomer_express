const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

router.post("/", (req, res) => {
  db.user
    .findAll({
      where: {
        googleId: req.headers["x-googleid"],
      },
      raw: true,
    })
    .then((data) => {
      if (data.length !== 0) {
        res.status(200).end();
      } else {
        const userObj = {
          googleId: req.headers["x-googleid"],
          userName: req.body.userName,
          picture: req.body.picture,
        };
        db.user.create(userObj).then(() => {
          res.status(201).end();
        });
      }
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
