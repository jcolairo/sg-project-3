function MapController(MapFactory) {
  var controller = this;

  function init() {
    console.log('MapController', controller);
    controller.placeName = '1 castle yard';


  }
  controller.getPlaceDetails = function () {
    MapFactory.getAll(controller.placeName).then(
      (success) => {
        controller.placeName = '';
        controller.maps = success.data;
        console.log('Got maps:', success);
      },
      (error) => {
        console.warn('Could not get maps', error);
      }
    );
  };


}

MapController.$inject = ['MapFactory'];

angular
  .module('PoliceApp')
  .controller('MapController', MapController);
