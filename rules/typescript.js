module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/camelcase': 'error',
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/interface-name-prefix': 'error',
		'@typescript-eslint/no-angle-bracket-type-assertion': 'error',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-object-literal-type-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-triple-slash-reference': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-interface': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',

		// Disable generic rules that conflict with TypeScript
		'valid-jsdoc': 'off',
		'camelcase': 'off',
		'no-array-constructor': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
	},
};
