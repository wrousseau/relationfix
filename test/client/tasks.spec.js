describe('TasksCtrl', function() {

  var scope;
  var ctrl;

  beforeEach(module('relationfix.controllers.tasks'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('TasksCtrl', {$scope: scope});
  }));

  it('should load tasks', function(){
    scope.title.should.equal('Tasks')
  });

});
