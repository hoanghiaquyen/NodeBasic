var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//configuration file router/users.js in router/index.js 
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/detail', function(req, res, next) {
  res.send('User detail');
});
module.exports = router;
