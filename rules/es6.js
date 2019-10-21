module.exports = {
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		// Disallow duplicate imports
		'no-duplicate-imports': 2,
		// Disallow unnecessary constructor
		'no-useless-constructor': 2,
		// Disallow unnecessary computed property keys on objects
		'no-useless-computed-key': 2,
		// Require let or const instead of var
		'no-var': 2,
		// Require method and property shorthand syntax for object literals
		'object-shorthand': [2, 'always'],
		// Suggest using of const declaration for variables that are never modified after declared
		'prefer-const': 2,
		// Suggest using the spread operator instead of .apply()
		'prefer-spread': 2,
		// Suggest using the rest parameters instead of arguments
		'prefer-rest-params': 2,
		// Disallow renaming import, export, and destructured assignments to the same name
		'no-useless-rename': 2,
	},
};
