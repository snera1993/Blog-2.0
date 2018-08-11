var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

/* GET archives page. */
router.get('/archives', function(req, res, next) {
  res.render('archives', { title: 'archives' });
});

module.exports = router;
