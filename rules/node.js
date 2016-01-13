module.exports = {
	env: {
		node: true,
	},
	rules: {
		// Enforce return after a callback
		'callback-return': 0,
		// Enforces error handling in callbacks (node environment)
		'handle-callback-err': 0,
		// Disallow mixing regular variable and require declarations
		'no-mixed-requires': [0, false],
		// Disallow use of new operator with the require function
		'no-new-require': 0,
		// Disallow string concatenation with __dirname and __filename
		'no-path-concat': 1,
		// Disallow process.exit()
		'no-process-exit': 0,
		// Restrict usage of specified node modules
		'no-restricted-modules': 0,
		// Disallow use of synchronous methods
		'no-sync': 0,
	},
};
