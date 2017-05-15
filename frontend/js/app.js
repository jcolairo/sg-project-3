function MainRouter ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/states/signup.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/states/login.html'
    })
    .state('auth-required', {
      url: '/authrequired',
      templateUrl: '/states/auth-required.html'
    })
    .state('map', {
      url: '/map',
      templateUrl: '/states/map.html'
    })
    .state('crime', {
      url: '/crime',
      templateUrl: '/states/crime.html',
      resolve: {
        currentAuth: [
          'AuthFactory',
          function (AuthFactory) {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('auth-required');
    }
  });
}
AuthCatcher.$inject = ['$rootScope', '$state'];

angular
  .module('PoliceApp', ['ui.router', 'firebase', 'uiGmapgoogle-maps'])
  .config(MainRouter)
  .run(AuthCatcher);
