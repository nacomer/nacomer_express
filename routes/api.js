const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

router.get('/hobby', apiController.getAllHobbies);

router.get('/hobby/:id', apiController.getHobby);

router.get('/hobby/:id/comment', apiController.getAllComments);

// router.get('/api/hobby/:id', function(req, res, next) {
//   Hobby.findAll({
//     where: {
//       id : req.params.id
//     }
//   }).then(hobbies => {
//     res.send(hobbies);
//   });
// });

// router.get('/api/hobby/:id/comment', function(req, res, next) {
//   Comment.findAll({
//     where: {
//       id : req.params.id
//     }
//   }).then(comment => {
//     res.send(comment);
//   });
// });

module.exports = router;
