function CrimeController(CrimeFactory) {
  var controller = this;

  function init() {
    console.log('CrimeController', controller);
    controller.crimeName = '';
    controller.crimeLat = '';
    controller.crimeLng = '';
    controller.crimeDate = '';
    controller.map = { center: { latitude: 51.45, longitude: -0.3}, zoom: 15};
    controller.marker = {
      id: 0,
      coords: {
        latitude: 51.45,
        longitude: -0.3
      },
      options: { draggable: true },
      events: {
        dragend: function(marker, eventName, $log) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lng = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lng);

          controller.marker.options = {
            draggable: true,
            labelContent: 'lat: ' + controller.marker.coords.latitude + ' ' + 'lng: ' + controller.marker.coords.longitude,
            labelAnchor: '100 0',
            labelClass: 'marker-label'
          };
        }
      }
    };
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
  }
  init();
}
CrimeController.$inject = ['CrimeFactory', '$state'];

angular
  .module('PoliceApp')
  // .filter('unique', CrimeController)
  .controller('CrimeController', CrimeController);
