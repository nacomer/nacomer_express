const express = require("express");
const router = express.Router();
const hobbyController = require("../controllers/hobby");

router.get("/", hobbyController.getAllHobbies);

router.get("/:id", hobbyController.getHobby);

router.get("/:id/comment", hobbyController.getAllComments);

router.post("/:id/comment", hobbyController.postComment);

// router.put("/comment/:id", apiController.putComment);

// router.delete("/comment/:id", apiController.deleteComment);

module.exports = router;
