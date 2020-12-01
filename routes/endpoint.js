const express = require("express");
const db = require("../models/index");
const router = express.Router();
const logger4js = require("../config/logger-init");

/* GET */
router.get("/", (req, res) => {
  db.event
    .findAll({
      attributes: ["id"],
      raw: true,
    })
    .then((data2) => {
      let ret = [];
      if (process.env.NODE_ENV == "production") {
        data2.forEach((record) => {
          ret.push("http://www.nacomer.tk/?eventid=" + record.id);
        });
        res.set({ "Access-Control-Allow-Origin": "*" }).send(ret).end();
      } else {
        data2.forEach((record) => {
          ret.push("http://localhost:3000/?eventid=" + record.id);
        });
        res.set({ "Access-Control-Allow-Origin": "*" }).send(ret).end();
      }
    })
    .catch((e) => {
      logger4js.debug(e);
      res.status(500).end();
    });
});

module.exports = router;
