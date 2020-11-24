var express = require("express");
var router = express.Router();
const usersController = require("../controllers/users");

router.post("/login", usersController.getUser);

router.post("/register", usersController.postUser);

module.exports = router;
