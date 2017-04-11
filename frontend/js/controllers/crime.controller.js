function CrimeController(CrimeFactory, $state) {
  var controller = this;

  function init() {
    console.log('CrimeController', controller);
    controller.crimeName = '';
    controller.crimeLat = '';
    controller.crimeLng = '';
    controller.crimeDate = '';
    controller.showMap = false;
    controller.map = { center: { latitude: 51.45, longitude: -0.3}, zoom: 13};

    controller.getCrimeDetails = function (lat, lng) {
      controller.map.center = {
        latitude: lat,
        longitude: lng
      };
      CrimeFactory.getAllCrimes(
      controller.crimeName,
      lat,
      lng,
      controller.crimeDate
    ).then(
      (success) => {
        controller.crimes = success.data;
        controller.showMap = true;
        controller.markers;
        // controller.crimeName = success.data;
        console.log('Get crimes:', success.data);

      },
      (error) => {
        console.warn('Could not get crimes', error);
      }
    );
    };
  }
  init();
}
CrimeController.$inject = ['CrimeFactory', '$state'];

angular
  .module('PoliceApp')
  // .filter('unique', CrimeController)
  .controller('CrimeController', CrimeController);
