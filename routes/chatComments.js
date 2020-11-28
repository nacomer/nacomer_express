const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

/* GET */
router.get("/", (req, res) => {
  db.chatComment
    .findAll({
      where: { eventId: req.query.eventId },
      attributes: ["id", "participantId", "eventId", "comment", "date"],
      include: [
        {
          model: db.participant,
          include: [
            {
              model: db.user,
              required: true,
              attributes: ["id", "name", "googleId", "picture"],
              as: "user",
            },
          ],
          required: true,
        },
      ],
    })
    .then((data2) => {
      //remove participant entity
      const ret = data2.map((record) => {
        return {
          id: record.id,
          participantId: record.participantId,
          eventId: record.eventId,
          comment: record.comment,
          date: record.date,
          user: record.participant.user,
        };
      });
      res.set({ "Access-Control-Allow-Origin": "*" }).send(ret).end();
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

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
      db.participant
        .findOne({
          attributes: ["id"],
          where: {
            userId: userId,
            eventId: req.body.eventId,
          },
        })
        .then((data) => {
          const postObj = {
            participantId: data.dataValues.id,
            eventId: req.body.eventId,
            comment: req.body.comment,
            date: new Date(),
          };
          db.chatComment.create(postObj).then(() => {
            res.status(201).end();
          });
        });
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
