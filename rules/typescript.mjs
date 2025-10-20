import tseslint from 'typescript-eslint';

// HACK: Recommended config applies many rules to all files which
// produces false positives, for examples, in CommonJS files

function findConfig(name) {
	return tseslint.configs.recommendedTypeChecked.find((x) => x.name === name);
}

const baseConfig = findConfig('typescript-eslint/base');
const eslintRecommendedConfig = findConfig(
	'typescript-eslint/eslint-recommended'
);
const recommendedTypeCheckedConfig = findConfig(
	'typescript-eslint/recommended-type-checked'
);

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		// Configure TypeScript parser
		files: ['**/*.{ts,tsx,mts,mtsx}'],

		// Extend default TypeScript options
		languageOptions: {
			...baseConfig.languageOptions,
			parserOptions: {
				// Enable type support for rule that use types
				projectService: true,
			},
		},
	},
	{
		// Only apply to files with TypeScript
		files: ['**/*.{ts,tsx,mts,mtsx,astro}'],

		plugins: baseConfig.plugins,

		rules: {
			// Recommended rules
			...eslintRecommendedConfig.rules,
			...recommendedTypeCheckedConfig.rules,

			// Disable generic rules that conflict with TypeScript
			// Most of them are disabled in typescript-eslint/eslint-recommended
			// config, but here are a few more
			camelcase: 'off',
			'dot-notation': 'off',
			'no-use-before-define': 'off',
			'no-shadow': 'off',
			// Conflicts with TypeScript check for unreachable code
			'consistent-return': 'off',
			// Checked by TypeScript - ts(2367)
			'valid-typeof': 'off',

			// Enable a few more rules

			// Require that function overload signatures be consecutive
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			// Consistently use T[] instead of Array<T> for arrays
			'@typescript-eslint/array-type': 'error',
			// Enforce specifying generic type arguments on constructor name of a
			// constructor call (new Map<string, number>())
			'@typescript-eslint/consistent-generic-constructors': 'error',
			// Require the Record type
			'@typescript-eslint/consistent-indexed-object-style': 'error',
			// Enforce consistent usage of type assertions (`value as Type` instead of
			// `<Type>value`)
			'@typescript-eslint/consistent-type-assertions': 'error',
			// Enforce type definitions to consistently use `interface`
			'@typescript-eslint/consistent-type-definitions': 'error',
			// Enforce consistent usage of type exports
			'@typescript-eslint/consistent-type-exports': 'error',
			// Enforce dot notation whenever possible
			'@typescript-eslint/dot-notation': 'error',
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
			// Disallow explicit type declarations for variables or parameters
			// initialized to a number, string, or boolean
			'@typescript-eslint/no-inferrable-types': 'error',
			// Disallow void type outside of generic or return types
			'@typescript-eslint/no-invalid-void-type': 'error',
			// Disallow the void operator except when used to discard a value
			'@typescript-eslint/no-meaningless-void-operator': 'error',
			// Disallow using the spread operator when it might cause unexpected behavior
			'@typescript-eslint/no-misused-spread': 'error',
			// Disallow enums from having both number and string members
			'@typescript-eslint/no-mixed-enums': 'error',
			// Disallow non-null assertions using the ! postfix operator
			'@typescript-eslint/no-non-null-assertion': 'error',
			// Disallow variable declarations from shadowing variables declared
			// in the outer scope
			'@typescript-eslint/no-shadow': 'error',
			// Disallow conditionals where the type is always truthy or always falsy
			'@typescript-eslint/no-unnecessary-condition': 'error',
			// Disallow unnecessary assignment of constructor property parameter
			'@typescript-eslint/no-unnecessary-parameter-property-assignment':
				'error',
			// Disallow unnecessary template expressions
			'@typescript-eslint/no-unnecessary-template-expression': 'error',
			// Disallow type arguments that are equal to the default
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',
			// Disallow conversion idioms when they do not change the type or value of
			// the expression
			'@typescript-eslint/no-unnecessary-type-conversion': 'error',
			// Prefer optional chaining (`x.?y`) instead of chained logical ANDs
			// (`x && x.y`)
			'@typescript-eslint/prefer-optional-chain': 'error',
			// Enforce using the nullish coalescing operator instead of logical
			// assignments or chaining
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			// Enforce using type parameter when calling `Array.reduce()` instead of
			// using a type assertion
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		},
	},
];
