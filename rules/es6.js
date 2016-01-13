module.exports = {
	env: {
		es6: false,
	},
	ecmaFeatures: {
		arrowFunctions: true,
		blockBindings: true,
		classes: true,
		defaultParams: true,
		destructuring: true,
		forOf: true,
		generators: false,
		modules: true,
		objectLiteralComputedProperties: true,
		objectLiteralDuplicateProperties: false,
		objectLiteralShorthandMethods: true,
		objectLiteralShorthandProperties: true,
		restParams: true,
		spread: true,
		superInFunctions: true,
		templateStrings: true,
		jsx: true,
	},
	rules: {
		// Require parens in arrow function arguments
		'arrow-parens': 0,
		// Require space before/after arrow function's arrow
		'arrow-spacing': [2, {
			before: true,
			after: true,
		}],
		// Verify super() callings in constructors
		'constructor-super': 0,
		// Enforce the spacing around the * in generator functions
		'generator-star-spacing': 0,
		// Disallow modifying variables of class declarations
		'no-class-assign': 0,
		// Disallow modifying variables that are declared using const
		'no-const-assign': 2,
		// Disallow to use this/super before super() calling in constructors.
		'no-this-before-super': 0,
		// Require let or const instead of var
		'no-var': 2,
		// Require method and property shorthand syntax for object literals
		'object-shorthand': [2, 'always'],
		// Suggest using of const declaration for variables that are never modified after declared
		'prefer-const': 0,
		// Suggest using the spread operator instead of .apply()
		'prefer-spread': 2,
		// Suggest using Reflect methods where applicable
		'prefer-reflect': 0,
		// Disallow generator functions that do not have yield
		'require-yield': 0,
	},
};
