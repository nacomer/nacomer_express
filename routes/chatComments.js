const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

/* POST */
router.post("/", (req, res) => {
  //  ユーザ取得
  db.user
    .findOne({
      attributes: ["id"],
      where: {
        googleId: req.headers["x-googleid"],
      }
    })
    .then((data) => {
      const userId = data.dataValues.id;
      const postObj = {
        participantsId: userId,
        eventId: req.body.eventId,
        comment: req.body.comment,
        date: new Date(),
      };
      db.chatComment.create(postObj).then(() => {
        res.status(201).end();
      });
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
