import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			// Require camelCase (getIt.ts) and PascalCase (Box.tsx) file names
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
				},
			],
			// Opinionated, sometimes you need it
			'unicorn/no-array-reduce': 'off',
			// This is too opinionated
			'unicorn/no-magic-array-flat-depth': 'off',
			// JavaScript and third-party libraries still rely too much on `null`
			'unicorn/no-null': 'off',
			// I don't need this
			'unicorn/no-process-exit': 'off',
			// Prefer reading a JSON file as a buffer
			'unicorn/prefer-json-parse-buffer': 'error',
			// Set.has() might be faster than Array.includes() but who cares
			// if the array is short. Set is less readable
			'unicorn/prefer-set-has': 'off',
			// Reduces readability
			'unicorn/prefer-ternary': 'off',
			// Disable abbreviation replacements because it breaks many
			// established naming conventions and often produces ugly code, like
			// `import { vars as variables } from '.'`
			'unicorn/prevent-abbreviations': 'off',
		},
	},
];
