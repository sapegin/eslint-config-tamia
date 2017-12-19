const modules = [
	'./rules/best-practices',
	'./rules/errors',
	'./rules/legacy',
	'./rules/node',
	'./rules/style',
	'./rules/variables',
].map(require.resolve);

module.exports = {
	extends: ['eslint:recommended'].concat(modules),
	env: {
		browser: true,
		jest: true,
	},
	globals: {},
	rules: {},
};
