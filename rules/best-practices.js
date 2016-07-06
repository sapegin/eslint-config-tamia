module.exports = {
	rules: {
		// Enforces getter/setter pairs in objects
		'accessor-pairs': 0,
		// Treat var statements as if they were block scoped
		'block-scoped-var': 2,
		// Specify the maximum cyclomatic complexity allowed in a program
		'complexity': [0, 11],
		// Require return statements to either always or never specify values
		'consistent-return': 2,
		// Require curly braces for all control statements
		'curly': [2, 'all'],
		// Require default case in switch statements
		'default-case': 2,
		// Encourages use of dot notation whenever possible
		'dot-notation': [2, {
			allowKeywords: true,
		}],
		// Enforces consistent newlines before or after dots
		'dot-location': 0,
		// Require the use of === and !==
		'eqeqeq': [2, 'allow-null'],
		// Make sure for-in loops have an if statement
		'guard-for-in': 0,
		// Disallow the use of alert, confirm, and prompt
		'no-alert': 1,
		// Disallow use of arguments.caller or arguments.callee
		'no-caller': 2,
		// Disallow division operators explicitly at beginning of regular expression
		'no-div-regex': 0,
		// Disallow else after a return in an if
		'no-else-return': 2,
		// Disallow comparisons to null without a type-checking operator
		'no-eq-null': 0,
		// Disallow use of eval()
		'no-eval': 2,
		// Disallow adding to native types
		'no-extend-native': 2,
		// Disallow unnecessary function binding
		'no-extra-bind': 2,
		// Disallow fallthrough of case statements
		'no-fallthrough': 0,
		// Disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 2,
		// Disallow the type conversions with shorter notations
		'no-implicit-coercion': [2, {
			boolean: false,
			number: true,
			string: true,
		}],
		// Disallow use of eval()-like methods
		'no-implied-eval': 2,
		// Disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 1,
		// Disallow usage of __iterator__ property
		'no-iterator': 2,
		// Disallow use of labels for anything other then loops and switches
		'no-labels': [2, {
			allowLoop: true,
			allowSwitch: true,
		}],
		// Disallow unnecessary nested blocks
		'no-lone-blocks': 2,
		// Disallow creation of functions within loops
		'no-loop-func': 2,
		// Disallow use of multiple spaces
		'no-multi-spaces': [1, {
			exceptions: {
				Property: false,
			},
		}],
		// Disallow use of multiline strings
		'no-multi-str': 2,
		// Disallow reassignments of native objects
		'no-native-reassign': 2,
		// Disallow use of new operator when not part of the assignment or comparison
		'no-new': 0,
		// Disallow use of new operator for Function object
		'no-new-func': 2,
		// Disallows creating new instances of String,Number, and Boolean
		'no-new-wrappers': 2,
		// Disallow use of (old style) octal literals
		'no-octal': 2,
		// Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
		'no-octal-escape': 2,
		// Disallow reassignment of function parameters
		'no-param-reassign': 0,
		// Disallow use of process.env
		'no-process-env': 0,
		// Disallow usage of __proto__ property
		'no-proto': 2,
		// Disallow declaring the same variable more then once
		'no-redeclare': 2,
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
		// Disallow usage of expressions in statement position
		'no-unused-expressions': 2,
		// Disallow unnecessary .call() and .apply()
		'no-useless-call': 0,
		// Disallow unnecessary escape usage
		'no-useless-escape': 1,
		// Disallow use of void operator
		'no-void': 2,
		// Disallow usage of configurable warning terms in comments: e.g. todo
		'no-warning-comments': 0,
		// Disallow use of the with statement
		'no-with': 1,
		// Require use of the second argument for parseInt()
		'radix': 2,
		// Requires to declare all vars on top of their containing scope
		'vars-on-top': 0,
		// Require immediate function invocation to be wrapped in parentheses
		'wrap-iife': [2, 'outside'],
		// Require or disallow Yoda conditions
		'yoda': [2, 'never', {
			exceptRange: true,
		}],
		// Disallow mixes of different operators
		'no-mixed-operators': 2,
	},
};
