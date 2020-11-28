const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

/* GET */
router.get("/", (req, res) => {
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
            },
          ],
        },
      ],
    })
    .then((data2) => {
      // remove unnecessary entity
      const data3 = data2.map((record) => {
        const ret = {
          id: record.id,
          subject: record.subject,
          ownerId: record.ownerId,
          deadline: record.deadline,
          start: record.start,
          end: record.end,
          maxpart: record.maxpart,
          minpart: record.minpart,
          place: record.place,
          description: record.description,
          hobbyId: record.hobbyId,
          properties: [],
          users: [],
        };
        for (let n1 in record.eventProperties) {
          ret.properties.push(record.eventProperties[n1].property);
        }
        for (let n2 in record.participants) {
          ret.users.push(record.participants[n2].user);
        }
        return ret;
      });
      res.set({ "Access-Control-Allow-Origin": "*" }).send(data3).end();
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
