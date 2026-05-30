import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': [
				'warn',
				{
					// Same as default order but without blank lines between each group
					groups: [
						[
							String.raw`^\u0000`,
							'^node:',
							String.raw`^@?\w`,
							'^',
							String.raw`^\.`,
						],
					],
				},
			],
			'simple-import-sort/exports': 'warn',
		},
	},
];
