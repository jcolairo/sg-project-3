/* global firebase */

function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAWwh9IVQ4T56nUL1CNPbV86ugyFuJygZs',
    authDomain: 'my-project-crime-1491325661420.firebaseapp.com',
    databaseURL: 'https://my-project-crime-1491325661420.firebaseio.com',
    projectId: 'my-project-crime-1491325661420',
    storageBucket: 'my-project-crime-1491325661420.appspot.com',
    messagingSenderId: '376051237711'
  };
  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}

AuthFactory.$inject = ['$firebaseAuth'];

angular
  .module('PoliceApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
