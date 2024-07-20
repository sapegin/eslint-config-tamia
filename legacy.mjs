import js from '@eslint/js';
import globals from 'globals';
import bestPractices from './rules/best-practices.mjs';
import errors from './rules/errors.mjs';
import legacy from './rules/legacy.mjs';
import node from './rules/node.mjs';
import style from './rules/style.mjs';
import variables from './rules/variables.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	js.configs.recommended,
	...bestPractices,
	...errors,
	...legacy,
	...node,
	...style,
	...variables,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
];
