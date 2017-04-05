function PoliceFactory(API_URL, $http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `${API_URL}/crimes`
      });
    },
    getOne: function(crimeId) {
      return $http({
        method: 'GET',
        url: `${API_URL}/crimes/${crimeId}`
      });
    },
    createOne: function(newCrime) {
      return $http({
        method: 'POST',
        url: `${API_URL}/crimes`,
        data: newCrime
      });
    },
    deleteOne: function(crimeId) {
      return $http({
        method: 'DELETE',
        url: `${API_URL}/crimes/${crimeId}`
      });
    },
    updateOneCrime: function(crimeId) {
      return $http({
        method: 'PATCH',
        url: `${API_URL}/crimes/${crimeId}`
      });
    },
    editOneCrime: function(editCrime) {
      return $http({
        method: 'PATCH',
        url: `${API_URL}/crimes/${editCrime._id}`,
        data: editCrime
      });
    }
  };
}

angular
  .module('PoliceApp')
  .factory('PoliceFactory', PoliceFactory);
