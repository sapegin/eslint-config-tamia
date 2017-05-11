module.exports = {
	plugins: ['prettier'],
	rules: {
		// Format code with Prettier
		'prettier/prettier': [
			2,
			{
				printWidth: 100,
				singleQuote: true,
				trailingComma: 'es5',
				useTabs: true,
			},
		],
		// Enforce spacing inside array brackets
		'array-bracket-spacing': 0,
		// Enforce one true brace style
		'brace-style': 0,
		// Require camel case names
		camelcase: [
			2,
			{
				properties: 'never',
			},
		],
		// Enforce spacing before and after comma
		'comma-spacing': 0,
		// Enforce one true comma style
		'comma-style': 0,
		// Disallow padding inside computed properties
		'computed-property-spacing': 0,
		// Enforces consistent naming when capturing the current execution context
		'consistent-this': 0,
		// Enforce newline at the end of file, with no multiple empty lines
		'eol-last': 0,
		// Require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': 0,
		// Require function expressions to have a name
		'func-names': 0,
		// Enforces use of function declarations or expressions
		'func-style': 0,
		// This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		'id-length': 0,
		// Disallow specified identifiers
		'id-blacklist': [1, 'i', 'j'],
		// This option sets a specific tab width for your code
		indent: 0,
		// Specify whether double or single quotes should be used in JSX attributes
		'jsx-quotes': 0,
		// Enforces consistent spacing before and after keywords
		'keyword-spacing': 0,
		// Enforces spacing between keys and values in object literal properties
		'key-spacing': 0,
		// Enforces empty lines around comments
		'lines-around-comment': 0,
		// Disallow mixed 'LF' and 'CRLF' as linebreaks
		'linebreak-style': [2, 'unix'],
		// Specify the maximum length of a line in your program
		'max-len': 0,
		// Specify the maximum depth callbacks can be nested
		'max-nested-callbacks': 0,
		// Specify the maximum number of statements allowed per line
		'max-statements-per-line': 0,
		// Require a capital letter for constructors
		'new-cap': [
			2,
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		// Newline per chained method call
		'newline-per-chained-call': 0,
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
		'no-multiple-empty-lines': 0,
		// Disallow nested ternary expressions
		'no-nested-ternary': 2,
		// Disallow use of the Object constructor
		'no-new-object': 2,
		// Disallow the use of ternary operators
		'no-ternary': 0,
		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 0,
		// Disallow dangling underscores in identifiers
		'no-underscore-dangle': 0,
		// Disallow the use of Boolean literals in conditional expressions
		'no-unneeded-ternary': 2,
		// Disallow whitespace before properties
		'no-whitespace-before-property': 0,
		// Require padding inside curly braces
		'object-curly-spacing': 0,
		// Allow just one var statement per function
		'one-var': [2, 'never'],
		// Require assignment operator shorthand where possible or prohibit it entirely
		'operator-assignment': 0,
		// Enforce operators to be placed before or after line breaks
		'operator-linebreak': 0,
		// Enforce padding within blocks
		'padded-blocks': 0,
		// Require quotes around object literal property names
		'quote-props': 0,
		// specify whether double or single quotes should be used
		quotes: 0,
		// Require identifiers to match the provided regular expression
		'id-match': 0,
		// Enforce spacing before and after semicolons
		'semi-spacing': 0,
		// Require or disallow use of semicolons instead of ASI
		semi: 0,
		// sort variables within the same declaration block
		'sort-vars': 0,
		// Require or disallow space before blocks
		'space-before-blocks': 0,
		// Require or disallow space before function opening parenthesis
		'space-before-function-paren': 0,
		// Require or disallow spaces inside parentheses
		'space-in-parens': 0,
		// Require spaces around operators
		'space-infix-ops': 0,
		// Require or disallow spaces before/after unary operators
		'space-unary-ops': 0,
		// Require or disallow a space immediately following the // or /* in a comment
		'spaced-comment': 0,
		// Require regex literals to be wrapped in parentheses
		'wrap-regex': 0,
		// Enforce placing object properties on separate lines
		'object-property-newline': 0,
	},
};
