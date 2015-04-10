angular.module('relationfix.controllers.tasks', [
  'ngMaterial',
  'relationfix.services.task'
])

.controller('TasksCtrl', function($scope, Task) {

  Task.query()
  .then(function(tasks) {
    $scope.tasks = tasks
  });

});
