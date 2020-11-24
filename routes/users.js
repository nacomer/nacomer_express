var express = require("express");
var router = express.Router();
const usersController = require("../controllers/users");

// /* GET users listing. */
// router.get("/", function (req, res) {
//   res.send("respond with a resource");
// });

router.post("/login", usersController.getUser);

router.post("/register", usersController.postUser);

module.exports = router;
