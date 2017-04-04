var Police = require('../models/police.model');

// GET
function getAllCrimes(request, response) {
  Police.find(function(error, crime) {
    if (error) return response.json(error);
    response.json(crime);
  }).select('-__v');
}

// POST
function createCrimeSearch(request, response) {
  var crimeSearch = new crimeSearch(request.body);
  crimeSearch.save(function(error) {
    if(error) return response.json(error);
    response.json({crimeSearch: crimeSearch});
  });
}

// GET
function getCrime(request, response) {
  var crimeId = request.params.id;
  Police.findById({ _id: crimeId }, function (error, crime) {
    if(error) return response.json(error);
    response.json({ crime: crime });
  }).select('-__v');
}

// DELETE
function deleteCrimeSearch(request, response) {
  var crimeId = request.params.id;
  Police.deleteOne({ _id: crimeId }, function (error, crime) {
    if (error) return response.json(error);
    response.json({ crime: crime });
  });
}

//UPDATE
function updateCrimeSearch(request, response) {
  var crimeId = request.params.id;

  Police.findById({ _id: crimeId }, function (error, crime) {
    if(error) return response.json(crime);

    if(request.body.title !== undefined)

      crime.save(function(error) {
        if(error) return response.status(404).json(error);
        response.json({ crime: crime });
      });
  });
}

module.exports = {
  getAllCrimes: getAllCrimes,
  createCrimeSearch: createCrimeSearch,
  getCrime: getCrime,
  deleteCrimeSearch: deleteCrimeSearch,
  updateCrimeSearch: updateCrimeSearch
};
