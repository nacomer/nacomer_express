const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fetch = require("node-fetch");
const logger4js = require("./config/logger-init");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const chatCommentsRouter = require("./routes/chatComments");
const eventsRouter = require("./routes/events");
const participantRouter = require("./routes/participant");

const app = express();

app.use(cors());

// Authentication before api execution using Google OAuth2 API
app.use(async (req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    next();
    return;
  }
  let idToken;
  if (req.headers["x-auth-token"]) {
    idToken = req.headers["x-auth-token"];
  } else {
    next(createError(403));
    return;
  }
  const validatePath = "https://oauth2.googleapis.com/tokeninfo?id_token=";
  const path = validatePath + idToken;
  const authRes = await fetch(path);
  if (authRes.status === 200) {
    // in case of authentication valid
    next();
  } else {
    // in case of authentication invalid
    next(createError(403));
  }
});

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
app.use("/v1/login", loginRouter);
app.use("/v1/chatComments", chatCommentsRouter);
app.use("/v1/events", eventsRouter);
app.use("/v1/participant", participantRouter);

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
