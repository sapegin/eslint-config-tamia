module.exports = {
	extends: ['./legacy', './rules/es6', './rules/strict', './rules/typescript'].map(require.resolve),
	rules: {},
};
