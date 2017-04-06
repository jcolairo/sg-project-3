var express = require('express');
var router = express.Router();

var mapController = require('../controllers/map.controller');
var crimeController = require('../controllers/crime.controller');

router.get('/api/maps', mapController.getMaps);
router.get('/api/place', mapController.getPlaces);
router.get('/api/crime', crimeController.getCrime);


module.exports = router;
