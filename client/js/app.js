angular.module('relationfix', [
  'ngRoute',
  'ngMaterial',
  'relationfix.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/tasks', {
    templateUrl: 'views/tasks.html',
    controller: 'TasksCtrl'
  })
  .otherwise({
    redirectTo: '/tasks'
  });
}]);
