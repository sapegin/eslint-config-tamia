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
			// Enforce padding around vitest functions
			'vitest/padding-around-all': 'warn',
		},
	},
];
