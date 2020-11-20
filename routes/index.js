var express = require('express');
var router = express.Router();
const Hobby = require('../models').Hobby;
const Period = require('../models').Period;
const Comment = require('../models').Comment;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/debug', (req, res) => {
  res.send("this is debug!");
  res.status(200);
})

// router.get('/api/hobby', function(req, res, next) {
//   Hobby.findAll().then(hobbies => {
//     res.send(hobbies);
//   });
// });

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
