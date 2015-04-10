angular.module('relationfix.controllers.tasks', [
  'ngMaterial'
])

.controller('TasksCtrl', function($scope) {

  $scope.tasks = [
    {
      "name": "First task",
      "description" : "It's great"
    },
    {
      "name": "Second task",
      "description" : "It's amazing"
    }
  ];

});
