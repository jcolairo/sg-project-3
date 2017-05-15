function AuthController($state, AuthFactory) {
  var controller = this;

  controller.createUser = function() {
    controller.error = null;
    AuthFactory.$createUserWithEmailAndPassword(controller.email, controller.password).then(
      (firebaseUser) => {
        console.log('firebaseUser:', firebaseUser);
        resetCredentials();
        $state.go('crime');
      },
      (error) => {
        controller.error = error;
        console.warn('could not create user with email and password:', error);
        resetCredentials();
      }
    );
  };

  controller.signIn = () => {
    controller.error = null;
    AuthFactory.$signInWithEmailAndPassword(controller.email, controller.password).then(
        () => {
          resetCredentials();
          $state.go('home');
        },
        (error) => {
          controller.error = error;
          console.warn('could not log in user with email and password:', error);
          resetCredentials();
        }
      );
  };

  controller.signOut = () => {
    AuthFactory.$signOut();
    $state.go('home');
  };

  function resetCredentials() {
    controller.email = null;
    controller.password = null;
  }

  function init() {
    controller.user = null;
    controller.error = null;
    controller.email = '';
    controller.password = '';
    AuthFactory.$onAuthStateChanged(function(user) {
      controller.user = user;
    });
  }

  init();
}

AuthController.$inject = ['$state', 'AuthFactory'];

angular
    .module('PoliceApp')
    .controller('AuthController', AuthController);
