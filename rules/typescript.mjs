import tseslint from 'typescript-eslint';

// HACK: Recommended config applies many rules to all files which
// produces false positives, for examples, in CommonJS files

function findConfig(name) {
	return tseslint.configs.recommended.find((x) => x.name === name);
}

const baseConfig = findConfig('typescript-eslint/base');
const eslintRecommendedConfig = findConfig(
	'typescript-eslint/eslint-recommended'
);
const recommendedConfig = findConfig('typescript-eslint/recommended');

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		// Only apply to files with TypeScript
		files: ['**/*.{ts,tsx,astro}'],

		// Copy the basic options from the recommended config
		languageOptions: baseConfig.languageOptions,
		plugins: baseConfig.plugins,

		rules: {
			// Recommended rules
			...eslintRecommendedConfig.rules,
			...recommendedConfig.rules,

			// Disable generic rules that conflict with TypeScript
			// Most of them are disabled in typescript-eslint/eslint-recommended
			// config, but here are a few more
			camelcase: 'off',
			'no-array-constructor': 'off',
			'no-unused-vars': 'off',
			'no-unused-expressions': 'off',
			'no-use-before-define': 'off',
			'no-shadow': 'off',
			// Conflicts with TypeScript check for unreachable code
			'consistent-return': 'off',
			// Checked by TypeScript - ts(2367)
			'valid-typeof': 'off',

			// Enable a few more rules

			// Require that function overload signatures be consecutive
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			// Require consistently using either T[] or Array<T> for arrays
			'@typescript-eslint/array-type': 'error',
			// Enforce naming conventions for everything across a codebase
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
					// Null is a requirement
					// eslint-disable-next-line unicorn/no-null
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
					// Allow PascalCase for React components as function parameters
					format: ['camelCase', 'PascalCase'],
					// Allow _ for unused function arguments
					leadingUnderscore: 'allow',
				},
			],
			// Require explicit accessibility modifiers on class properties and methods
			'@typescript-eslint/explicit-member-accessibility': 'error',
			// Enforce consistent usage of type assertions
			'@typescript-eslint/consistent-type-assertions': 'error',
			// Disallow explicit type declarations for variables or parameters
			// initialized to a number, string, or boolean
			'@typescript-eslint/no-inferrable-types': 'error',
			// Disallow non-null assertions using the ! postfix operator
			'@typescript-eslint/no-non-null-assertion': 'error',
			// Disallow unused expressions
			'@typescript-eslint/no-unused-expressions': 'error',
			// Disallow variable declarations from shadowing variables declared
			// in the outer scope
			'@typescript-eslint/no-shadow': 'error',
		},
	},
];
