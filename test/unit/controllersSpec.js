'use strict';

/* jasmine specs for controllers go here */
describe('overlapGraph controllers', function() {

  beforeEach(module('overlapGraphApp'));
  beforeEach(module('overlapGraphControllers'));
  beforeEach(module('overlapGraphServices'));

  describe('overlapGraphCtrl', function(){
    var scope, ctrl, overlapGraphBuilder;

    beforeEach(inject(function($controller) {
      scope = {};
      overlapGraphBuilder = {build: jasmine.createSpy()};
      ctrl = $controller('OverlapGraphCtrl', {$scope: scope, overlapGraphBuilder: overlapGraphBuilder });
    }));

    it('should create "chains" model with 0 chains', function() {
      expect(scope.chains.length).toBe(0);
    });

    it('should create an empty newChain model', function() {
      expect(scope.newChain).toEqual({ name: "", sequence: "" });
    });

    it('should create an empty graph model', function() {
      expect(scope.graph.length).toBe(0);
    });

    it('should add a new chain to model', function() {
      scope.addChain("a", "1234");
      expect(scope.chains.length).toBe(1);
    });

    it('can t add an empty chain to model', function() {
      scope.addChain("", "");
      expect(scope.chains.length).toBe(0);
    });

    it('should build and empty graph', function() {
      scope.buildGraph([]);
      expect(overlapGraphBuilder.build).toHaveBeenCalledWith([]);
    });

    it('should build and graph with 1 item', function() {
      overlapGraphBuilder.build = jasmine.createSpy().andReturn([{from: "A", to: "B"}]);
      scope.buildGraph([]);
      expect(scope.graph.length).toBe(1);
    });
  });
});
