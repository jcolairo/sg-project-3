function MapFactory($http) {
  return {
    getAll: function(placeName) {
      var placeString = placeName.split(' ').join('+');
      return $http({
        method: 'GET',
        url: `api/maps?place=${placeString}`
      });
    },
    getPlaces: function(googlePlaceName) {
      var googlePlaceString = googlePlaceName;
      return $http({
        method: 'GET',
        url: `api/place/details/json?placeid=${googlePlaceString}`
      });
    }
  };
}


angular
  .module('PoliceApp')
  .factory('MapFactory', MapFactory);
