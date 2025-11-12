import react from 'eslint-plugin-react';
import globals from 'globals';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		files: ['**/*.{js,jsx,mjs,cjs,tsx,mts,mtsx,spec.js,test.js}'],
		...react.configs.flat.recommended,
		languageOptions: {
			...react.configs.flat.recommended.languageOptions,
			globals: {
				...globals.es2024,
				...globals.browser,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		// View link below for react rules documentation
		// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
		rules: {
			// Enforce boolean attributes notation in JSX
			'react/jsx-boolean-value': ['error', 'never'],
			// Enforce event handler naming conventions in JSX
			'react/jsx-handler-names': [
				'error',
				{
					eventHandlerPrefix: 'handle',
					eventHandlerPropPrefix: 'on',
				},
			],
			// Validate JSX has key prop when in array or iterator
			'react/jsx-key': 'error',
			// Prevent usage of .bind() and arrow functions in JSX props
			'react/jsx-no-bind': [
				'error',
				{
					allowArrowFunctions: true,
				},
			],
			// Enforce PascalCase for user-defined JSX components
			'react/jsx-pascal-case': 'error',
			// Require ES6 class declarations over React.createClass
			'react/prefer-es6-class': ['error', 'always'],
			// Enforce stateless React Components to be written as a pure function
			'react/prefer-stateless-function': 'error',
			// Prevent extra closing tags for components without children
			'react/self-closing-comp': [
				'error',
				{
					component: true,
					html: false,
				},
			],
			// Prevent void DOM elements (e.g. <img />, <br />) from receiving children
			'react/void-dom-elements-no-children': 'error',
			// Enforce style prop value being an object
			'react/style-prop-object': 'error',
			// Prevent usage of setState in componentWillUpdate
			'react/no-will-update-set-state': 'error',
			// Prevents common typos
			'react/no-typos': 'error',
		},
	},
];
