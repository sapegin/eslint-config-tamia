module.exports = {
	rules: {
		// Disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 2,
		// Disallow use of undefined when initializing variables
		'no-undef-init': 2,
		// Disallow variable redeclaration
		'no-redeclare': 2,
		// Disallow variable declarations from shadowing variables declared in the outer scope
		'no-shadow': 1,
	},
};
