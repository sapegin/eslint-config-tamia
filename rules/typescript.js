module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/naming-convention': ['error', {
			"selector": "default",
			"format": ["camelCase"]
		},
		{
			"selector": "variableLike",
			"format": ["camelCase", "PascalCase", "UPPER_CASE"]
		},
		{
			"selector": "property",
			"format": ["camelCase", "PascalCase", "snake_case"]
		},
		{
			"selector": "typeLike",
			"format": ["PascalCase"]
		},
		{
			// React: dangerouslySetInnerHTML={{__html: '<div />'}}
			selector: 'property',
			filter: '^__html$',
			format: null,
		}],
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
	},
	overrides: [
		{
		  files: ['*.ts', '*.tsx'],
		  rules: {
			// Disable generic rules that conflict with TypeScript
			'camelcase': 'off',
			'no-array-constructor': 'off',
			'no-unused-vars': 'off',
			'no-unused-expressions': 'off',
			'no-use-before-define': 'off',

			//Checked by Typescript - ts(2378)
			'getter-return': 'off',
			// Checked by Typescript - ts(2300)
			'no-dupe-args': 'off',
			// Checked by Typescript - ts(1117)
			'no-dupe-keys': 'off',
			// Checked by Typescript - ts(7027)
			'no-unreachable': 'off',
			// Checked by Typescript - ts(2367)
			'valid-typeof': 'off',
			// Checked by Typescript - ts(2588)
			'no-const-assign': 'off',
			// Checked by Typescript - ts(2588)
			'no-new-symbol': 'off',
			// Checked by Typescript - ts(2376)
			'no-this-before-super': 'off',
			// This is checked by Typescript using the option `strictNullChecks`.
			'no-undef': 'off',
			// This is already checked by Typescript.
			'no-dupe-class-members': 'off',
			// This is already checked by Typescript.
			'no-redeclare': 'off',
		  },
		},
	  ],
};
