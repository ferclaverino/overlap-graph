'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  describe('overlapGraphService', function() {
    var overlapGraphService;

    beforeEach(module('overlapGraphServices'));

    beforeEach(inject(function($injector) {
      overlapGraphService = $injector.get('overlapGrapBuilder');
    }));

    it('an empty list should return and empty graph', function () {
      expect(overlapGraphService.build([])).toEqual([]);
    });
  });
});
