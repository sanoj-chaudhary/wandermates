var express = require('express');
var router = express.Router();
var AuthController = require('./../controllers/auth')
var UserController = require('../controllers/users')

/* GET home page. */
router.post('/login', AuthController.login)
router.post('/create-user', UserController.addUsers);

module.exports = router;