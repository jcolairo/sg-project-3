function PoliceController($state, $stateParams, PoliceFactory) {
  var controller = this;

  controller.getCrime = function() {
    var crimeId = $stateParams.crimeId;

    PoliceFactory.getOne(crimeId).then(
      function success(response) {
        controller.selectedCrime = response.data;
      },
      function error(error) {
        console.log('Error getting crime:', error);
      }
    );
  };

  controller.reloadState = function() {
    PoliceFactory.getAll().then(
      function success(response) {
        controller.allCrimes = response.data;
      },
      function error(error) {
        console.warn('Error getting crimes:', error);
      }
    );
  };

  controller.addCrime = function() {
    PoliceFactory.createOne(controller.newCrime).then(
      function success() {
        controller.reloadState();
        $state.go('home');
      },
      function error(error) {
        console.warn('Error creating crime:', error);
      }
    );
  };

  controller.editCrime = function(crimeId) {
    $state.go('edit', { crimeId: crimeId });
  };

  controller.updatedCrime = function() {
    PoliceFactory.editONe(controller.selectedCrime.crime).then(
      function success() {
        controller.reloadState();
        $state.go('home');
      },
      function error(error) {
        console.warn('Error updating crime:', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedCrime = undefined;
    controller.allCrimes = [];
    controller.newCrime = {};
    // PoliceFactory.getAll().then(
    //   function success(response) {
    //     controller.allCrimes = response.data;
    //   },
    //   function error(error) {
    //     console.log('Error getting crimes:', error);
    //   }
    // );
  }
  init();

}

angular
  .module('PoliceApp')
  .controller('PoliceController', PoliceController);
