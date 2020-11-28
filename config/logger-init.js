const Log4js = require("log4js");

Log4js.configure("./config/log-config.json");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.js")[env];

const logger4js = Log4js.getLogger("console");
logger4js.level = config.loglevel || "ERROR";

module.exports = logger4js;
