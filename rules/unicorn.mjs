import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			// Reduces readability
			'unicorn/prefer-ternary': 'off',
			// Opinionated, doesn't allow Button.tsx
			'unicorn/filename-case': 'off',
			// Opinionated, sometimes you need it
			'unicorn/no-array-reduce': 'off',
		},
	},
];
