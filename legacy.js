module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/legacy',
		'./rules/node',
		'./rules/style',
		'./rules/variables',
	].map(require.resolve),
	env: {
		browser: true,
		mocha: true,
		jest: true,
	},
	globals: {},
	rules: {},
};
