var mongoose = require('mongoose');

var PoliceScheme = mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Police', PoliceScheme);
