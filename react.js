module.exports = {
	extends: ['./legacy', './rules/es6', './rules/strict', './rules/react'].map(require.resolve),
	rules: {},
};
