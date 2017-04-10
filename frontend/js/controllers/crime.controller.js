function CrimeController(CrimeFactory) {
  var controller = this;

  function init() {
    console.log('CrimeController', controller);
    controller.crimeName = '';
    controller.crimeLat = '';
    controller.crimeLng = '';
    controller.crimeDate = '';
  }
  controller.getCrimeDetails = function (lat, lng) {
    CrimeFactory.getAllCrimes(
      controller.crimeName,
      lat,
      lng,
      controller.crimeDate
    ).then(
      (success) => {
        controller.crimes = success.data;
        // controller.crimeName = success.data;
        console.log('Get crimes:', success.data);
      },
      (error) => {
        console.warn('Could not get crimes', error);
      }
    );
  };
  init();

}

CrimeController.$inject = ['CrimeFactory', '$state'];

angular
  .module('PoliceApp')
  // .filter('unique', CrimeController)
  .controller('CrimeController', CrimeController);
