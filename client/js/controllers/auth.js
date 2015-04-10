angular.module('relationfix.controllers.auth', [
  'ngMessages',
  'relationfix.services.auth'
])

.controller('AuthLoginCtrl', ['$rootScope', '$scope', 'AuthService', '$state', function($rootScope, $scope, AuthService, $state) {

  $scope.user = {};

  $rootScope.title = 'Log In';

  $scope.login = function() {
    AuthService.login($scope.user.email, $scope.user.password)
      .then(function() {
        $state.go('tasks');
      });
  };
}])

.controller('AuthLogoutCtrl', ['$rootScope', '$scope', 'AuthService', '$state', function($rootScope, $scope, AuthService, $state) {

  $rootScope.title = 'Log Out';

  AuthService.logout()
    .then(function() {
      $state.go('login');
    });

}])

.controller('RegisterCtrl', ['$rootScope', '$scope', 'AuthService', '$state', function($rootScope, $scope, AuthService, $state) {

  $scope.user = {};

  $rootScope.title = 'Register';

  $scope.register = function() {
    AuthService.register($scope.user)
      .then(function() {
        $state.transitionTo('sign-up-success');
      });
  };

}]);
