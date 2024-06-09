import legacy from './rules/legacy';
import es6 from './rules/es6';
import strict from './rules/strict';
import react from './rules/react';

export default [
	legacy,
	es6,
	strict,
	react,
	{
		parserOptions: {
			ecmaVersion: 2020, // TODO: Upgrade?
			sourceType: 'module',
			requireConfigFile: false,
			babelOptions: {
				// TODO: Do we still need Babel to work with React?
				presets: ['@babel/preset-react'],
			},
		},
		rules: {},
	},
];
