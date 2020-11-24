const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

router.put("/:id", commentController.putComment);

router.delete("/:id", commentController.deleteComment);

module.exports = router;
