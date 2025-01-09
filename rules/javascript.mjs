import globals from 'globals';
import js from '@eslint/js';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,mtsx,astro}'],
		languageOptions: {
			globals: {
				...globals.es2024,
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			// Enforces return statements in callbacks of array’s methods
			'array-callback-return': 'error',
			// Require curly braces for all control statements
			curly: ['error', 'all'],
			// Encourages use of dot notation whenever possible
			'dot-notation': [
				'error',
				{
					allowKeywords: true,
				},
			],
			// Require the use of === and !==
			eqeqeq: ['error', 'allow-null'],
			// Disallow the use of alert, confirm, and prompt
			'no-alert': 'error',
			// Disallow adding to native types
			'no-extend-native': 'error',
			// Disallow unnecessary function binding
			'no-extra-bind': 'error',
			// Disallow the type conversions with shorter notations
			'no-implicit-coercion': 'error',
			// Disallow usage of __iterator__ property
			'no-iterator': 'error',
			// Disallow use of labels for anything other then loops and switches
			'no-labels': [
				'error',
				{
					allowLoop: true,
					allowSwitch: true,
				},
			],
			// Disallow unnecessary nested blocks
			'no-lone-blocks': 'error',
			// Disallow creation of functions within loops
			'no-loop-func': 'error',
			// Disallow use of multiline strings
			'no-multi-str': 'error',
			// Disallows creating new instances of String, Number, and Boolean
			'no-new-wrappers': 'error',
			// Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
			'no-octal-escape': 'error',
			// Disallow usage of __proto__ property
			'no-proto': 'error',
			// Disallow use of assignment in return statement
			'no-return-assign': 'error',
			// Disallow use of `javascript:` urls.
			'no-script-url': 'error',
			// Disallow comparisons where both sides are exactly the same
			'no-self-compare': 'error',
			// Disallow use of comma operator
			'no-sequences': 'error',
			// Restrict what can be thrown as an exception
			'no-throw-literal': 'error',
			// Disallow unmodified conditions of loops
			'no-unmodified-loop-condition': 'error',
			// Disallow usage of expressions in statement position
			'no-unused-expressions': 'error',
			// Disallow unnecessary .call() and .apply()
			'no-useless-call': 'error',
			// Disallow unnecessary concatenation of literals or template literals
			'no-useless-concat': 'error',
			// Disallow redundant return statements
			'no-useless-return': 'error',
			// Disallow use of void operator
			'no-void': [
				'error',
				{
					allowAsStatement: true,
				},
			],
			// Disallow async functions which have no await expression
			'require-await': 'error',
			// Require or disallow Yoda conditions
			yoda: [
				'error',
				'never',
				{
					exceptRange: true,
				},
			],
			// Disallow duplicate imports
			'no-duplicate-imports': 'error',
			// Disallow unnecessary constructor
			'no-useless-constructor': 'error',
			// Disallow unnecessary computed property keys on objects
			'no-useless-computed-key': 'error',
			// Require let or const instead of var
			'no-var': 'error',
			// Require method and property shorthand syntax for object literals
			'object-shorthand': ['error', 'always'],
			// Suggest using of const declaration for variables that are never modified after declared
			'prefer-const': 'error',
			// Suggest using the spread operator instead of .apply()
			'prefer-spread': 'error',
			// Suggest using the rest parameters instead of arguments
			'prefer-rest-params': 'error',
			// Disallow renaming import, export, and destructured assignments to the same name
			'no-useless-rename': 'error',
			// Limits the number of parameters that can be used in the function declaration
			'max-params': [0, 5],
			// Strict is implied in ECMAScript modules
			strict: ['error', 'never'],
			// Require camel case names
			camelcase: [
				'error',
				{
					properties: 'never',
				},
			],
			// Disallow mixed 'LF' and 'CRLF' as linebreaks
			'linebreak-style': ['error', 'unix'],
			// Require a capital letter for constructors
			'new-cap': [
				'error',
				{
					newIsCap: true,
					capIsNew: false,
				},
			],
			// Disallow use of the Array constructor
			'no-array-constructor': 'error',
			// Disallow if as the only statement in an else block
			'no-lonely-if': 'error',
			// Disallow use of the Object constructor
			'no-new-object': 'error',
			// Disallow Use of Chained Assignment Expressions
			'no-multi-assign': 'error',
			// Disallow the use of Boolean literals in conditional expressions
			'no-unneeded-ternary': 'error',
			// Disallow use of undefined when initializing variables
			'no-undef-init': 'error',
			// Disallow variable declarations from shadowing variables declared in the outer scope
			'no-shadow': 'warn',
			// Allow just one var statement per variable
			'one-var': ['error', 'never'],
			// Disallow the Unicode Byte Order Mark (BOM)
			'unicode-bom': ['error', 'never'],
		},
	},
];
