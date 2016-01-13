var expect = require('chai').expect;

describe('presets', function() {
	['index.js', 'legacy.js', 'react.js'].forEach(function(name) {
		it('should no throw when requring ' + name, function() {
			var func = function() {
				require('../' + name);
			};
			expect(func).not.to.throw;
		});
	});
});
