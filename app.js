const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const Log4js = require("log4js");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/config.js")[env];

Log4js.configure("./config/log-config.json");
const logger4js = Log4js.getLogger("console");
logger4js.level = config.loglevel || "ERROR";

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const hobbyRouter = require("./routes/hobby");
const commentRouter = require("./routes/comment");

const app = express();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  const logContent = {
    method: req.method,
    path: req.path,
    requestHeader: req.headers,
    requestQuery: req.query,
    requestBody: req.body,
  };
  logger4js.debug(logContent);
  next();
});

app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/api/hobby", hobbyRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
