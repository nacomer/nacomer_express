const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

/* GET */
router.get("/:hobbyId", (req, res) => {
  db.hobby
    .findAll({
      // logging: true,
      where: { id: req.params.hobbyId },
      attributes: ["id", "name", "picture"],
      include: [
        {
          model: db.event,
          required: true,
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
        },
      ],
    })
    .then((data) => {
      res.set({ "Access-Control-Allow-Origin": "*" }).send(data[0]).end();
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
