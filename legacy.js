module.exports = {
	extends: [
		'eslint-config-tamia/rules/best-practices',
		'eslint-config-tamia/rules/errors',
		'eslint-config-tamia/rules/legacy',
		'eslint-config-tamia/rules/node',
		'eslint-config-tamia/rules/style',
		'eslint-config-tamia/rules/variables',
	].map(require.resolve),
	env: {
		browser: true,
		mocha: true,
		jest: true,
	},
	globals: {},
	rules: {},
};
