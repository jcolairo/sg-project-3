var Police = require('../models/police.model');

// GET
function getAll(request, response) {
  Police.find(function(error, police) {
    if (error) return response.json(error);
    response.json(police);
  }).select('-__v');
}

module.exports = {
  getAll: getAll
};
