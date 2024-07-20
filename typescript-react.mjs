import typescript from './rules/typescript.mjs';
import react from './rules/react.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	...typescript,
	...react,
	{
		rules: {
			// Disable generic rules that conflict with TypeScript
			'react/prop-types': 'off',
		},
	},
];
