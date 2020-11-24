const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

// router.get("/", apiController.getAllHobbies);

// router.get("/:id", apiController.getHobby);

// router.get("/:id/comment", commentController.getAllComments);

// router.post("/:id/comment", commentController.postComment);

router.put("/:id", commentController.putComment);

router.delete("/:id", commentController.deleteComment);

module.exports = router;
