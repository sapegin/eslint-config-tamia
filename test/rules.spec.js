var fs = require('fs');
var path = require('path');

describe('rules', function() {
	fs.readdirSync(path.resolve(__dirname, '../rules')).forEach(function(name) {
		if (!name.match(/\.js$/)) {
			return;
		}

		it('should no throw when requring ' + name, function() {
			var func = function() {
				require('../rules/' + name);
			};
			expect(func).not.toThrow();
		});
	});
});
