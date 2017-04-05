var express = require('express');
var router = express.Router();
var request = require('request');


var mapController = require('../controllers/map.controller');

router.get('/api/maps', mapController.getMaps);


module.exports = router;
