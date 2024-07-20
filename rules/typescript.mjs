import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	tseslint.configs.base,
	{
		rules: {
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': 'error',
			'@typescript-eslint/ban-types': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
					// HACK: allow importing Lodash as `_`
					leadingUnderscore: 'allow',
				},
				{
					selector: 'property',
					format: null,
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				{
					selector: 'enumMember',
					format: ['PascalCase', 'UPPER_CASE'],
				},
				{
					selector: 'parameter',
					format: ['camelCase'],
					// Allow _ for unused function arguments
					leadingUnderscore: 'allow',
				},
			],
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/consistent-type-assertions': 'error',
			'@typescript-eslint/no-array-constructor': 'error',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/triple-slash-reference': 'error',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-use-before-define': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
		},
		overrides: [
			{
				files: ['*.ts', '*.tsx', '*.astro'],
				rules: {
					// Disable generic rules that conflict with TypeScript
					camelcase: 'off',
					'no-array-constructor': 'off',
					'no-unused-vars': 'off',
					'no-unused-expressions': 'off',
					'no-use-before-define': 'off',
					'no-shadow': 'off',

					// Conflicts with TypeScript check for unreachable code
					'consistent-return': 'off',

					//Checked by TypeScript - ts(2378)
					'getter-return': 'off',
					// Checked by TypeScript - ts(2300)
					'no-dupe-args': 'off',
					// Checked by TypeScript - ts(1117)
					'no-dupe-keys': 'off',
					// Checked by TypeScript - ts(7027)
					'no-unreachable': 'off',
					// Checked by TypeScript - ts(2367)
					'valid-typeof': 'off',
					// Checked by TypeScript - ts(2588)
					'no-const-assign': 'off',
					// Checked by TypeScript - ts(2588)
					'no-new-symbol': 'off',
					// Checked by TypeScript - ts(2376)
					'no-this-before-super': 'off',
					// This is checked by TypeScript using the option `strictNullChecks`.
					'no-undef': 'off',
					// This is already checked by TypeScript.
					'no-dupe-class-members': 'off',
					// This is already checked by TypeScript.
					'no-redeclare': 'off',
				},
			},
		],
	},
];
