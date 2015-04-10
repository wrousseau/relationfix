angular.module('relationfix.controllers.tasks', ['lbServices'])

.controller('TasksCtrl', ['$rootScope', '$scope', 'Task', function($rootScope, $scope, Task) {

  $scope.tasks = Task.find();
  $rootScope.title = 'Tasks';

}]);
