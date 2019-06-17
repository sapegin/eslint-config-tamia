describe('presets', function() {
	['index.js', 'legacy.js', 'react.js', 'typescript.js', 'typescript-react.js'].forEach(function(name) {
		it('should no throw when requring ' + name, function() {
			var func = function() {
				require('../' + name);
			};
			expect(func).not.toThrow();
		});
	});
});
