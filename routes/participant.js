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
      },
    })
    .then((data) => {
      const userId = data.dataValues.id;
      const postObj = {
        userId: userId,
        eventId: req.body.eventId,
      };
      db.participant.create(postObj).then(() => {
        res.status(201).end();
      });
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

/* DELETE */
router.delete("/", (req, res) => {
  //  ユーザ取得
  db.user
    .findOne({
      attributes: ["id"],
      where: {
        googleId: req.headers["x-googleid"],
      },
    })
    .then((data) => {
      const userId = data.dataValues.id;
      const whereObj = {
        userId: userId,
        eventId: req.body.eventId,
      };
      db.participant
        .destroy({
          where: whereObj,
        })
        .then(() => {
          res.status(204).end();
        });
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
