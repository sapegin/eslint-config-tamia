import typescript from './rules/typescript';
import react from './rules/react';

export default [
	typescript,
	react,
	{
		rules: {
			// Disable generic rules that conflict with TypeScript
			'react/prop-types': 'off',
		},
	},
];
