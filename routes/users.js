var express = require("express");
var router = express.Router();
const usersController = require("../controllers/users");
// const verifyToken = require("../middlewares/verifyToken");

router.post("/login", usersController.postUser);

// router.post("/register", usersController.postUser);

// router.get("/login", verifyToken, usersController.getLoginUser);

module.exports = router;
