function MapFactory($http) {
  return {
    getAll: function(placeName) {
      var placeString = placeName.split(' ').join('+')
      return $http({
        method: 'GET',
        url: `api/maps?place=${placeString}`
      });
    }
  };
}
angular
  .module('PoliceApp')
  .factory('MapFactory', MapFactory);
