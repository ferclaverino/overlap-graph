'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Overlap graph App', function() {

  describe('Overlap graph view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });

    it('should add a chain', function() {
      expect(repeater('.chains tbody tr').count()).toBe(0);

      input('chainName').enter('a');
      input('chainSequence').enter('1234');
      element('form button').click();

      expect(repeater('.chains tbody tr').count()).toBe(1);
    });

  });
});
