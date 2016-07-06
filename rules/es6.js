module.exports = {
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
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
		// Disallow arrow functions where they could be confused with comparisons
		'no-confusing-arrow': 2,
		// Disallow modifying variables that are declared using const
		'no-const-assign': 2,
		// Disallow duplicate imports
		'no-duplicate-imports': 2,
		// Disallow symbol constructor
		'no-new-symbol': 2,
		// Disallow to use this/super before super() calling in constructors
		'no-this-before-super': 0,
		// Disallow unnecessary constructor
		'no-useless-constructor': 2,
		// Disallow unnecessary computed property keys on objects
		'no-useless-computed-key': 2,
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
		// Suggest using the rest parameters instead of arguments
		'prefer-rest-params': 2,
		// Disallow generator functions that do not have yield
		'require-yield': 0,
		// Enforce usage of spacing in template strings
		'template-curly-spacing': [2, 'never'],
		// Disallow renaming import, export, and destructured assignments to the same name
		'no-useless-rename': 2,
		// Enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': [2, 'never'],
	},
};
