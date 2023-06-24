module.exports = {
	rules: {
		// Enforces return statements in callbacks of array’s methods
		'array-callback-return': 'error',
		// Treat var statements as if they were block scoped
		'block-scoped-var': 'error',
		// Require return statements to either always or never specify values
		'consistent-return': 'error',
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
		// Disallow using an async function as a Promise executor
		'no-async-promise-executor': 'error',
		// Disallow use of arguments.caller or arguments.callee
		'no-caller': 'error',
		// Disallow else after a return in an if
		'no-else-return': 'off',
		// Disallow use of eval()
		'no-eval': 'error',
		// Disallow adding to native types
		'no-extend-native': 'error',
		// Disallow unnecessary function binding
		'no-extra-bind': 'error',
		// Disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 'error',
		// Disallow the type conversions with shorter notations
		'no-implicit-coercion': [
			'error',
			{
				boolean: false,
				number: true,
				string: true,
			},
		],
		// Disallow use of eval()-like methods
		'no-implied-eval': 'error',
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
		// Disallow characters which are made with multiple code points in character class syntax
		'no-misleading-character-class': 'error',
		// Disallow use of multiline strings
		'no-multi-str': 'error',
		// Disallow use of new operator for Function object
		'no-new-func': 'error',
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
		// Disallow unnecessary catch clauses
		'no-useless-catch': 'error',
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
		// Disallow use of the with statement
		'no-with': 'error',
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
	},
};
