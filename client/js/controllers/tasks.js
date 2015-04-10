angular.module('relationfix.controllers.tasks', ['lbServices'])

.controller('TasksCtrl', ['$scope', 'Task', function($scope, Task) {

  $scope.tasks = Task.find();

}]);
