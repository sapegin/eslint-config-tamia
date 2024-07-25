import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			// Reduces readability
			'unicorn/prefer-ternary': 'off',
			// Opinionated
			'unicorn/filename-case': 'off',
		},
	},
];
