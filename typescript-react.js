module.exports = {
	extends: ['./typescript', './rules/react'].map(require.resolve),
	rules: {
		// Disable generic rules that conflict with TypeScript
		'react/prop-types': 'off',
	},
};
