import globals from 'globals';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			// Disallow string concatenation with __dirname and __filename
			'no-path-concat': 2,
		},
	},
];
