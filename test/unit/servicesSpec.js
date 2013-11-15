'use strict';

describe('overlapGraph service', function() {
  describe('overlapGrapBuilder', function() {
    var overlapGraphService;

    beforeEach(module('overlapGraphServices'));

    beforeEach(inject(function($injector) {
      overlapGraphService = $injector.get('overlapGrapBuilder');
    }));

    it('an empty list should return an empty graph', function () {
      expect(overlapGraphService.build([])).toEqual([]);
    });

    it('READ1 should return an empty graph', function () {
      expect(overlapGraphService.build([{ name: 'READ1', sequence: 'AAACCCCCGGGTTTTT'}])).toEqual([]);
    });

    it('READ1, READ3 should return an READ3 -> READ1', function () {
      expect(overlapGraphService.build([
        { name: 'READ1', sequence: 'AAACCCCCGGGTTTTT'},
        { name: 'READ3', sequence: 'CCACCCCCGCCTAAAC'}
      ])).toEqual([
        { from: "READ3", to: "READ1" }
      ]);
    });

    it('READ3, READ1 should return an READ3 -> READ1', function () {
      expect(overlapGraphService.build([
        { name: 'READ3', sequence: 'CCACCCCCGCCTAAAC'},
        { name: 'READ1', sequence: 'AAACCCCCGGGTTTTT'}
      ])).toEqual([
        { from: "READ3", to: "READ1" }
      ]);
    });

    it('READ1, READ3, READ2 should return READ3 -> READ1, READ2 -> READ3', function () {
      expect(overlapGraphService.build([
        { name: 'READ1', sequence: 'AAACCCCCGGGTTTTT'},
        { name: 'READ3', sequence: 'CCACCCCCGCCTAAAC'},
        { name: 'READ2', sequence: 'AACCGCCCGGGCCCAC'}
      ])).toEqual([
        { from: "READ3", to: "READ1" },
        { from: "READ2", to: "READ3" }
      ]);
    });

  });
});
