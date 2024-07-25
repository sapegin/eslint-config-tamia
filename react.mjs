import legacy from './rules/legacy.mjs';
import es6 from './rules/es6.mjs';
import strict from './rules/strict.mjs';
import react from './rules/react.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	...legacy,
	...es6,
	...strict,
	...react,
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2024,
				sourceType: 'module',
				requireConfigFile: false,
			},
		},
		rules: {},
	},
];
