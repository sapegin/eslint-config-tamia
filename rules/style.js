module.exports = {
	rules: {
		// Enforce spacing inside array brackets
		'array-bracket-spacing': [2, 'never'],
		// Enforce one true brace style
		'brace-style': [2, 'stroustrup', {
			allowSingleLine: false,
		}],
		// Require camel case names
		'camelcase': [2, {
			properties: 'never',
		}],
		// Enforce spacing before and after comma
		'comma-spacing': [2, {
			before: false,
			after: true,
		}],
		// Enforce one true comma style
		'comma-style': [2, 'last'],
		// Disallow padding inside computed properties
		'computed-property-spacing': [2, 'never'],
		// Enforces consistent naming when capturing the current execution context
		'consistent-this': 0,
		// Enforce newline at the end of file, with no multiple empty lines
		'eol-last': 2,
		// Require function expressions to have a name
		'func-names': 0,
		// Enforces use of function declarations or expressions
		'func-style': 0,
		// This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		'id-length': 0,
		// Disallow specified identifiers
		'id-blacklist': [1, 'i', 'j', 'l', 'k', 'v', 'e'],
		// This option sets a specific tab width for your code
		'indent': [2, 'tab', {
			SwitchCase: 1,
		}],
		// Specify whether double or single quotes should be used in JSX attributes
		'jsx-quotes': [2, 'prefer-double'],
		// Enforces consistent spacing before and after keywords
		'keyword-spacing': [2, {
			before: true,
			after: true,
		}],
		// Enforces spacing between keys and values in object literal properties
		'key-spacing': [2, {
			beforeColon: false,
			afterColon: true,
		}],
		// Enforces empty lines around comments
		'lines-around-comment': 0,
		// Disallow mixed 'LF' and 'CRLF' as linebreaks
		'linebreak-style': [2, 'unix'],
		// Specify the maximum length of a line in your program
		'max-len': [2, 125, 4, {
			ignoreUrls: true,
			ignoreComments: false,
		}],
		// Specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 0,
		// Specify the maximum number of statements allowed per line
		'max-statements-per-line': [1, {
			max: 1,
		}],
		// Require a capital letter for constructors
		'new-cap': [2, {
			newIsCap: true,
			capIsNew: false,
		}],
		// Newline per chained method call
		'newline-per-chained-call': [2, {
			ignoreChainWithDepth: 2,
		}],
		// Disallow the omission of parentheses when invoking a constructor with no arguments
		'new-parens': 2,
		// Allow/disallow an empty newline after var statement
		'newline-after-var': 0,
		// Disallow use of the Array constructor
		'no-array-constructor': 2,
		// Disallow use of the continue statement
		'no-continue': 0,
		// Disallow comments inline after code
		'no-inline-comments': 0,
		// Disallow if as the only statement in an else block
		'no-lonely-if': 2,
		// Disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 2,
		// Disallow multiple empty lines and only one newline at the end
		'no-multiple-empty-lines': [2, {
			max: 2,
			maxEOF: 1,
		}],
		// Disallow nested ternary expressions
		'no-nested-ternary': 2,
		// Disallow use of the Object constructor
		'no-new-object': 2,
		// Disallow space between function identifier and application
		'no-spaced-func': 2,
		// Disallow the use of ternary operators
		'no-ternary': 0,
		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 2,
		// Disallow dangling underscores in identifiers
		'no-underscore-dangle': 0,
		// Disallow the use of Boolean literals in conditional expressions
		'no-unneeded-ternary': 2,
		// Disallow whitespace before properties
		'no-whitespace-before-property': 2,
		// Require padding inside curly braces
		'object-curly-spacing': [2, 'always'],
		// Allow just one var statement per function
		'one-var': [2, 'never'],
		// Require assignment operator shorthand where possible or prohibit it entirely
		'operator-assignment': 0,
		// Enforce operators to be placed before or after line breaks
		'operator-linebreak': [2, 'after', {
			overrides: {
				'?': 'before',
				':': 'before',
			},
		}],
		// Enforce padding within blocks
		'padded-blocks': [2, 'never'],
		// Require quotes around object literal property names
		'quote-props': [2, 'consistent-as-needed'],
		// specify whether double or single quotes should be used
		'quotes': [2, 'single', 'avoid-escape'],
		// Require identifiers to match the provided regular expression
		'id-match': 0,
		// Enforce spacing before and after semicolons
		'semi-spacing': [2, {
			before: false,
			after: true,
		}],
		// Require or disallow use of semicolons instead of ASI
		'semi': [2, 'always'],
		// sort variables within the same declaration block
		'sort-vars': 0,
		// Require or disallow space before blocks
		'space-before-blocks': 2,
		// Require or disallow space before function opening parenthesis
		'space-before-function-paren': [2, {
			anonymous: 'never',
			named: 'never',
		}],
		// Require or disallow spaces inside parentheses
		'space-in-parens': [2, 'never'],
		// Require spaces around operators
		'space-infix-ops': 2,
		// Require or disallow spaces before/after unary operators
		'space-unary-ops': [2, {
			words: true,
			nonwords: false,
		}],
		// Require or disallow a space immediately following the // or /* in a comment
		'spaced-comment': [2, 'always'],
		// Require regex literals to be wrapped in parentheses
		'wrap-regex': 0,
		// Enforce placing object properties on separate lines
		'object-property-newline': 2,
	},
};
