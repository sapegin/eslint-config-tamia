var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;

describe('rules', function() {
	fs.readdirSync(path.resolve(__dirname, '../rules')).forEach(function(name) {
		it('should no throw when requring ' + name, function() {
			var func = function() {
				require('../rules/' + name);
			};
			expect(func).not.to.throw;
		});
	});
});
