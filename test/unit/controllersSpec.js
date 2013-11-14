'use strict';

/* jasmine specs for controllers go here */
describe('overlapGraph controllers', function() {

  describe('overlapGraphCtrl', function(){
    var scope, ctrl;

    beforeEach(module('overlapGraph'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('OverlapGraphCtrl', {$scope:scope});
    }));

    it('should create "chains" model with 0 chains', function() {
      expect(scope.chains.length).toBe(0);
    });

    it('should add a new chain to model', function() {
      scope.addChain("a", "1234");
      expect(scope.chains.length).toBe(1);
    });

  });
});