import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			// Prefer reading a JSON file as a buffer
			'unicorn/prefer-json-parse-buffer': 'error',
			// Reduces readability
			'unicorn/prefer-ternary': 'off',
			// Opinionated, doesn't allow Button.tsx
			'unicorn/filename-case': 'off',
			// Opinionated, sometimes you need it
			'unicorn/no-array-reduce': 'off',
			// Set.has() might be faster than Array.includes() but who cares
			// if the array is short. Set is less readable
			'unicorn/prefer-set-has': 'off',
			// I don't need this
			'unicorn/no-process-exit': 'off',
			// Disable abbreviation replacements because it breaks many
			// established naming conventions and often produces ugly code, like
			// `import { vars as variables } from '.'`
			'unicorn/prevent-abbreviations': 'off',
		},
	},
];
