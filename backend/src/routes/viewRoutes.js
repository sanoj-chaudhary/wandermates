var express = require('express');
var router = express.Router();
var ViewLoctionsController = require('../viewController/locations')

router.get('/locations', ViewLoctionsController.getLocations)
module.exports = router;