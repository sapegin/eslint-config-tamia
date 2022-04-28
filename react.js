module.exports = {
	extends: ['./legacy', './rules/es6', './rules/strict', './rules/react'].map(
		require.resolve
	),
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		requireConfigFile: false,
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
	},
	rules: {},
};
