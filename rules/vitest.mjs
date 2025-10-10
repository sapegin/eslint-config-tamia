import vitest from '@vitest/eslint-plugin';

export default [
	{
		...vitest.configs.recommended,
		files: ['**/*.{spec,test}.*'],
		rules: {
			// Consistently use *.test.ts instead of .spec.ts
			'vitest/consistent-test-filename': [
				'error',
				{ pattern: String.raw`.*\.test\.[tj]sx?$` },
			],
			// Consistently use test() instead of it()
			'vitest/consistent-test-it': [
				'error',
				{ fn: 'test', withinDescribe: 'test' },
			],
			// Consistently use vi.* instead of vitest.*
			'vitest/consistent-vitest-vi': 'error',
			// Disallow focused tests such as test.only()
			'vitest/no-focused-tests': 'error',
			// Enforce padding around vitest functions (cannot use padding-around-all as
			// it include opinionated padding-around-expect-groups rule)
			'vitest/padding-around-after-all-blocks': 'warn',
			'vitest/padding-around-after-each-blocks': 'warn',
			'vitest/padding-around-before-all-blocks': 'warn',
			'vitest/padding-around-before-each-blocks': 'warn',
			'vitest/padding-around-describe-blocks)': 'warn',
			'vitest/padding-around-test-blocks)': 'warn',
		},
	},
];
