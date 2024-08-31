var express = require('express');
var router = express.Router();
var ViewRouter = require('./viewRoutes')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wellcome to wandermates Admin'});
});

router.use('/admin', ViewRouter)
module.exports = router;
