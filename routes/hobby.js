const express = require("express");
const router = express.Router();
const hobbyController = require("../controllers/hobby");
// const verifyToken = require("../middlewares/verifyToken");

router.get("/", hobbyController.getAllHobbies);

router.get("/:id", hobbyController.getHobby);

router.get("/:id/comment", hobbyController.getAllComments);

// router.post("/:id/comment", verifyToken, hobbyController.postComment);
router.post("/:id/comment", hobbyController.postComment);

module.exports = router;
