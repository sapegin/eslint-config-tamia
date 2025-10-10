import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import deMorgan from 'eslint-plugin-de-morgan';

export default [
	// Disallows useless ESLint disable comments, etc.
	comments.recommended,
	// Enforces logical consistency by transforming negated boolean expressions
	// according to De Morgan’s laws
	deMorgan.configs.recommended,
	{
		rules: {},
	},
];
