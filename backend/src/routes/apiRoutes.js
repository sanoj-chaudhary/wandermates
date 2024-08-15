var express = require('express');
var router = express.Router();
var AuthController = require('./../controllers/auth')
var UserController = require('../controllers/users')
var Locations = require('../controllers/location')

/* GET home page. */
router.post('/login', AuthController.login)
router.post('/create-user', UserController.addUsers);


//location routes
router.get('/states', Locations.getState);
router.get('/cities', Locations.getCities);
router.get('/locations', Locations.getLocations);

module.exports = router;