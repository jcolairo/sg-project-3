function PoliceController(API_URL, $http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `${API_URL}/police`
      });
    },
    getOne: function(policeId) {
      return $http({
        method: 'GET',
        url: `${API_URL}/police/${policeId}`
      });
    },
    createOne: function()
  };
}
