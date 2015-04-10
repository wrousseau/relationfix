angular.module('relationfix', [
  'ui.router',
  'ngMaterial',
  'relationfix.controllers'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tasks', {
      url: '/tasks',
      templateUrl: 'views/tasks.html',
      controller: 'TasksCtrl',
      authenticate: true
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'views/forbidden.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: 'AuthLogoutCtrl'
    })
    .state('sign-up', {
      url: '/sign-up',
      templateUrl: 'views/sign-up-form.html',
      controller: 'SignUpCtrl',
    })
    .state('sign-up-success', {
      url: '/sign-up/success',
      templateUrl: 'views/sign-up-success.html'
    });
  $urlRouterProvider.otherwise('tasks');
}])

.run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function(event, next) {
    // redirect to login page if not logged in
    if (next.authenticate && !$rootScope.currentUser) {
      event.preventDefault(); //prevent current page from loading
      $state.go('forbidden');
    }
  });
}]);
