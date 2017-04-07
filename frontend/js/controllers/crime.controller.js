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
        console.log('Get crimes:', success.data);
      },
      (error) => {
        console.warn('Could not get crimes', error);
      }
    );
  };
  init();
}

CrimeController.$inject = ['CrimeFactory'];

angular
  .module('PoliceApp')
  .controller('CrimeController', CrimeController);
