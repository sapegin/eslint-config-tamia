import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs.unopinionated,
	{
		rules: {
			// Prevents explicitly exporting `undefined` as a value:
			// - `return x.length > 0 x : undefined`
			'unicorn/no-useless-undefined': 'off',
			// This breaks a lot of code, like `typeof window` to detect that we're in
			// the browser
			'unicorn/prefer-global-this': 'off',
			// Set.has() might be faster than Array.includes() but who cares if the array
			// is short. Set is less readable
			'unicorn/prefer-set-has': 'off',
			// Ternaries often reduce readability
			'unicorn/prefer-ternary': 'off',
		},
	},
];
