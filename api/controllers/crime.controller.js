var request = require('request');
var querystring = require('querystring');
var crimeData = require('../config/crime-data');

function getCrime(req, res) {
  var crime = req.query.crime || 'any';
  var lat = req.query.lat || '';
  var lng = req.query.lng || '';
  var date = req.query.date || '';

  if (!lat) {
    return res.status(400).json({message: 'missing lat property'});
  }
  if (!lng) {
    return res.status(400).json({message: 'missing lng property'});
  }

  // sample URL for finding all crime at a given lat/lng on a given date:
  // https://data.police.uk/api/crimes-street/all-crime?lat=51.5588662&lng=-0.311105&date=2016-12
  var params = {
    lat: lat,
    lng: lng,
    date: date || 'undefined'
  };
  var crimeName = crime.replace(' ', '-');
  var crimeUrl = `${crimeData.POL_API_BASE_URL}/${crimeName}?${querystring.stringify(params)}`;

  request(crimeUrl, function (error, response, body) {
    var crimeJson;

    if (error) {
      console.warn('getCrime: could not get crimes:', error);
      res.status(500).json({ message: 'could not get crimes'});
      return;
    }
    crimeJson = JSON.parse(body);
    res.status(200).json(crimeJson);
  });
}


module.exports = {
  getCrime: getCrime
};
