module.exports = {
	// Code style should be handled by Prettier
	rules: {
		// Require camel case names
		camelcase: [
			2,
			{
				properties: "never"
			}
		],
		// Disallow mixed 'LF' and 'CRLF' as linebreaks
		"linebreak-style": [2, "unix"],
		// Require a capital letter for constructors
		"new-cap": [
			2,
			{
				newIsCap: true,
				capIsNew: false
			}
		],
		// Disallow use of the Array constructor
		"no-array-constructor": 2,
		// Disallow if as the only statement in an else block
		"no-lonely-if": 2,
		// Disallow use of the Object constructor
		"no-new-object": 2,
		// Disallow Use of Chained Assignment Expressions
		"no-multi-assign": 2,
		// Disallow the use of Boolean literals in conditional expressions
		"no-unneeded-ternary": 2,
		// Allow just one var statement per variable
		"one-var": [2, "never"],
		// Disallow the Unicode Byte Order Mark (BOM)
		"unicode-bom": [2, "never"],
		// Disallow mixed spaces and tabs (disabled because of Prettier)
		"no-mixed-spaces-and-tabs": 0
	}
};
