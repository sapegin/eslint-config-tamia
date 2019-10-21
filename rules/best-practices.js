module.exports = {
	rules: {
		// Enforces return statements in callbacks of array’s methods
		'array-callback-return': 2,
		// Treat var statements as if they were block scoped
		'block-scoped-var': 2,
		// Specify the maximum cyclomatic complexity allowed in a program
		complexity: [0, 11],
		// Require return statements to either always or never specify values
		'consistent-return': 2,
		// Require curly braces for all control statements
		curly: [2, 'all'],
		// Encourages use of dot notation whenever possible
		'dot-notation': [
			2,
			{
				allowKeywords: true,
			},
		],
		// Require the use of === and !==
		eqeqeq: [2, 'allow-null'],
		// Disallow the use of alert, confirm, and prompt
		'no-alert': 2,
		// Disallow using an async function as a Promise executor
		'no-async-promise-executor': 2,
		// Disallow use of arguments.caller or arguments.callee
		'no-caller': 2,
		// Disallow else after a return in an if
		'no-else-return': 0,
		// Disallow use of eval()
		'no-eval': 2,
		// Disallow adding to native types
		'no-extend-native': 2,
		// Disallow unnecessary function binding
		'no-extra-bind': 2,
		// Disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 2,
		// Disallow the type conversions with shorter notations
		'no-implicit-coercion': [
			2,
			{
				boolean: false,
				number: true,
				string: true,
			},
		],
		// Disallow use of eval()-like methods
		'no-implied-eval': 2,
		// Disallow usage of __iterator__ property
		'no-iterator': 2,
		// Disallow use of labels for anything other then loops and switches
		'no-labels': [
			2,
			{
				allowLoop: true,
				allowSwitch: true,
			},
		],
		// Disallow unnecessary nested blocks
		'no-lone-blocks': 2,
		// Disallow creation of functions within loops
		'no-loop-func': 2,
		// Disallow characters which are made with multiple code points in character class syntax
		'no-misleading-character-class': 2,
		// Disallow use of multiline strings
		'no-multi-str': 2,
		// Disallow use of new operator for Function object
		'no-new-func': 2,
		// Disallows creating new instances of String, Number, and Boolean
		'no-new-wrappers': 2,
		// Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
		'no-octal-escape': 2,
		// Disallow usage of __proto__ property
		'no-proto': 2,
		// Disallow use of assignment in return statement
		'no-return-assign': 2,
		// Disallow use of `javascript:` urls.
		'no-script-url': 2,
		// Disallow comparisons where both sides are exactly the same
		'no-self-compare': 2,
		// Disallow use of comma operator
		'no-sequences': 2,
		// Restrict what can be thrown as an exception
		'no-throw-literal': 2,
		// Disallow unmodified conditions of loops
		'no-unmodified-loop-condition': 2,
		// Disallow usage of expressions in statement position
		'no-unused-expressions': 2,
		// Disallow unnecessary .call() and .apply()
		'no-useless-call': 2,
		// Disallow unnecessary catch clauses
		'no-useless-catch': 2,
		// Disallow unnecessary concatenation of literals or template literals
		'no-useless-concat': 2,
		// Disallow redundant return statements
		'no-useless-return': 2,
		// Disallow use of void operator
		'no-void': 2,
		// Disallow use of the with statement
		'no-with': 2,
		// Disallow async functions which have no await expression
		'require-await': 2,
		// Require or disallow Yoda conditions
		yoda: [
			2,
			'never',
			{
				exceptRange: true,
			},
		],
	},
};
