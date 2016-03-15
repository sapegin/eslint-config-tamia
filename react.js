module.exports = {
	extends: [
		'eslint-config-tamia/legacy',
		'eslint-config-tamia/rules/es6',
		'eslint-config-tamia/rules/strict',
		'eslint-config-tamia/rules/react',
	].map(require.resolve),
	parser: 'babel-eslint',
	rules: {},
};
