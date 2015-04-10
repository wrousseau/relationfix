angular.module('relationfix.services.task', ['ngResource'])

.factory('Task', function($resource, $q) {

  var resource = $resource('api/tasks/:id');

  var query = function() {
    var deferred = $q.defer();
    resource.query().$promise
    .then(function(response) {
      deferred.resolve(response);
    })
    .catch(function() {
      deferred.reject();
    })
    return deferred.promise;
  };

  return {
    query: query
  }
});
