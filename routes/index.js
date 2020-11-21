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

module.exports = router;
