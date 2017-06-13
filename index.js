module.exports = {
	extends: ['./legacy', './rules/es6', './rules/strict'].map(require.resolve),
	rules: {},
};
