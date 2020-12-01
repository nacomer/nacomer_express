const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

/* GET */
router.get("/:eventId", (req, res) => {
  db.event
    .findAll({
      attributes: [
        "id",
        "subject",
        "ownerId",
        "deadline",
        "start",
        "end",
        "maxpart",
        "minpart",
        "place",
        "description",
        "hobbyId",
      ],
      where: {
        id: req.params.eventId,
      },
      // logging:console.log,
      include: [
        {
          model: db.eventProperty,
          include: [
            {
              model: db.property,
              required: true,
              attributes: ["id", "name", "category"],
            },
          ],
          required: true,
        },
        {
          model: db.participant,
          required: true,
          include: [
            {
              model: db.user,
              required: true,
              attributes: ["id", "name", "googleId", "picture"],
            },
          ],
        },
      ],
    })
    .then((data2) => {
      // remove unnecessary entity
      const ret = {
        id: data2[0].id,
        subject: data2[0].subject,
        ownerId: data2[0].ownerId,
        deadline: data2[0].deadline,
        start: data2[0].start,
        end: data2[0].end,
        maxpart: data2[0].maxpart,
        minpart: data2[0].minpart,
        place: data2[0].place,
        description: data2[0].description,
        hobbyId: data2[0].hobbyId,
        properties: [],
        users: [],
      };
      for (let n1 in data2[0].eventProperties) {
        ret.properties.push(data2[0].eventProperties[n1].property);
      }
      for (let n2 in data2[0].participants) {
        ret.users.push(data2[0].participants[n2].user);
      }
      res.set({ "Access-Control-Allow-Origin": "*" }).send(ret).end();
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

router.get("/", (req, res) => {
  const userId = req.query.userId;
  if (userId !== undefined) {
    db.event
      .findAll({
        attributes: [
          "id",
          "subject",
          "ownerId",
          "deadline",
          "start",
          "end",
          "maxpart",
          "minpart",
          "place",
          "description",
          "hobbyId",
        ],
        // logging:console.log,
        include: [
          {
            model: db.eventProperty,
            include: [
              {
                model: db.property,
                required: true,
                attributes: ["id", "name", "category"],
              },
            ],
            required: true,
          },
          {
            model: db.participant,
            required: true,
            include: [
              {
                model: db.user,
                required: true,
                attributes: ["id", "name", "googleId", "picture"],
                where: {
                  id: userId,
                },
              },
            ],
          },
        ],
      })
      .then((data2) => {
        const ret = [];
        // remove unnecessary entity
        for (let num in data2) {
          const retTemp = {
            id: data2[num].id,
            subject: data2[num].subject,
            ownerId: data2[num].ownerId,
            deadline: data2[num].deadline,
            start: data2[num].start,
            end: data2[num].end,
            maxpart: data2[num].maxpart,
            minpart: data2[num].minpart,
            place: data2[num].place,
            description: data2[num].description,
            hobbyId: data2[num].hobbyId,
            properties: [],
            users: [],
          };
          for (let n1 in data2[num].eventProperties) {
            retTemp.properties.push(data2[num].eventProperties[n1].property);
          }
          for (let n2 in data2[num].participants) {
            retTemp.users.push(data2[num].participants[n2].user);
          }
          ret.push(retTemp);
        }
        res.set({ "Access-Control-Allow-Origin": "*" }).send(ret).end();
      })
      .catch((e) => {
        logger4js.debug(e);
        res.status(500).end();
      });
  } else {
    //  イベントidのみ全件取得
    db.event
      .findAll({
        raw: true,
        attributes: ["id"],
      })
      .then((data) => {
        res.set({ "Access-Control-Allow-Origin": "*" }).send(data).end();
      })
      .catch((e) => {
        logger4js.debug(e);
        res.status(500).end();
      });
  }
});

module.exports = router;
