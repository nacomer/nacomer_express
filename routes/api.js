const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

router.get('/hobby', apiController.getAllHobbies);

router.get('/hobby/:id', apiController.getHobby);

router.get('/hobby/:id/comment', apiController.getAllComments);

router.post('/hobby/:id/comment', apiController.postComment);

router.put('/comment/:id', apiController.putComment);

router.delete('/comment/:id', apiController.deleteComment);


module.exports = router;
