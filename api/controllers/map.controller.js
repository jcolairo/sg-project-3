var request = require('request');
var googleData = require('../config/google-data');

function getMaps(req, res) {
  var place = req.query.place || "";
  if (!place.length) {
    return res.status(500).json({message: "please provide a search term "})
  }

  var mapUrl = [
    googleData.GMS_API_BASE_URL,
    place.split(' ').join('+')
  ].join('')

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

function getPlaces(res, res) {
  request(`${googleData.GPS_API_BASE_URL}` + `${googleData.GPS_API_SEARCH}` + `${googleData.GPS_API_KEYCODE}`, function(error, res, body) {
    var placesJson;

    if (error) {
      console.warn('getPlaces: could not get places:', error);
      res.status(500).json({message: 'could not get places'});
      return;
    }
    placesJson = JSON.parse(body);
    console.log('maps:', placesJson);
    res.status(200).json(placesJson);
  })
}

module.exports = {
  getMaps: getMaps,
  getPlaces: getPlaces
};
