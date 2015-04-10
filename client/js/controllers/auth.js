angular.module('relationfix.controllers.auth', [
  'relationfix.services.auth'
])

.controller('AuthLoginCtrl', ['$rootScope', '$scope', 'AuthService', '$state', function($rootScope, $scope, AuthService, $state) {

  $scope.user = {
    email: 'foo@bar.com',
    password: 'foobar'
  };

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

.controller('SignUpController', ['$rootScope', '$scope', 'AuthService', '$state', function($rootScope, $scope, AuthService, $state) {

  $scope.user = {
    email: 'baz@qux.com',
    password: 'bazqux'
  };

  $rootScope.title = 'Sign Up';

  $scope.register = function() {
    AuthService.register($scope.user.email, $scope.user.password)
      .then(function() {
        $state.transitionTo('sign-up-success');
      });
  };

}]);
