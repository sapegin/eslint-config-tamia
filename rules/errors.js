module.exports = {
	// Most of possible error rules are inherited from eslint:recommended preset
	rules: {
		// Enforce “for” loop update clause moving the counter
		// in the right direction
		'for-direction': 2,
		// Disallow await inside of loops
		'no-await-in-loop': 2,
		// Disallow use of Object.prototypes builtins directly
		'no-prototype-builtins': 2,
	},
};
