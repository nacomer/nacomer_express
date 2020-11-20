var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/debug', (req, res) => {
  res.send("this is debug!");
  res.status(200);
})

module.exports = router;
