var request = require('request');
var googleData = require('../config/google-data');

function getMaps(req, res) {
  var place = req.query.place || '';
  if (!place.length) {
    return res.status(500).json({message: 'please provide a search term '});
  }

  var mapUrl = [
    googleData.GMS_API_BASE_URL,
    place.split(' ').join('+')
  ].join('');

  request(mapUrl, function (error, response, body) {
    var mapsJson;

    if (error) {
      console.warn('getMaps: could not get maps:', error);
      res.status(500).json({message: 'could not get maps'});
      return;
    }
    mapsJson = JSON.parse(body);
    // console.log('maps:', mapsJson);
    res.status(200).json(mapsJson.results);
  });
}

function getPlaces(req, res) {
  var place = req.query.place || '';
  if(!place.length) {
    return res.status(400).json({message: 'please provide a search term'});
  }

  var placeUrl = [ googleData.GPS_API_BASE_URL ];
  // var placeKey = [ googleData.GPS_API_KEY ];

  request(placeUrl, function(error, response, body) {
    var placesJson;

    if (error) {
      console.warn('getPlaces: could not get places:', error);
      res.status(500).json({message: 'could not get places'});
      return;
    }
    placesJson = JSON.parse(body);
    console.log('places:', placesJson);
    res.status(200).json(placesJson.results);
  });
}

module.exports = {
  getMaps: getMaps,
  getPlaces: getPlaces
};
