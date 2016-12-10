module.exports = {
	extends: [
		'eslint-config-tamia/legacy',
		'eslint-config-tamia/rules/es6',
		'eslint-config-tamia/rules/strict',
	].map(require.resolve),
	rules: {},
};
