import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			// Prefer reading a JSON file as a buffer
			'prefer-json-parse-buffer': 'error',
			// Enforce better typography in strings
			'string-content': [
				'error',
				{
					patterns: {
						// Ellipsis: ... → …
						'\\.\\.\\.': '…',
						// Apostrophe: ' → ’
						"'": '’',
						// Fancy arrows: -> → →
						'->': '→',
						// Fancy quotes: " → “ or ”
						'"': {
							suggest: '“”',
							message: 'Please use `“` or `”` instead of `"`.',
						},
					},
				},
			],
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
			// Disable some abbreviation replacements
			'unicorn/prevent-abbreviations': [
				'warn',
				{
					replacements: {
						db: false, // Database is long, and db is very common
						arg: false,
						args: false, // arguments_
						env: false, // Environment is long, and env is very common
						fn: false, // function_
						func: {
							fn: true,
							function: false,
						},
						prev: false, // Prev/next pair is good
						prop: false, // Convention in React
						props: false, // Convention in React
						ref: false, // Convention in React
						refs: false, // Convention in React
						i: false, // Standard for `for` loops
						j: false, // Standard for `for` loops
					},
				},
			],
		},
	},
];
