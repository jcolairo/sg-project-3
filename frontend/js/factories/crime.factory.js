function CrimeFactory($http, $httpParamSerializer) {
  return {
    getAllCrimes: function(crimeName, crimeLat, crimeLng, crimeDate) {
      var params = {
        crime: crimeName,
        lat: crimeLat,
        lng: crimeLng,
        date: crimeDate
      };
      var queryString = $httpParamSerializer(params);

      console.log('queryString:', queryString);

      return $http({
        method: 'GET',
        url: `/api/crime/?${queryString}`
      });
    }
  };
}
CrimeFactory.$inject = ['$http', '$httpParamSerializer'];

angular
  .module('PoliceApp')
  .factory('CrimeFactory', CrimeFactory);
