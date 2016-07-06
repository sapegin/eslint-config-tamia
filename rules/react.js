module.exports = {
	plugins: [
		'react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: '15.0',
		},
	},
	// View link below for react rules documentation
	// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
	rules: {
		// Prevent missing displayName in a React component definition
		'react/display-name': 0,
		// Forbid certain propTypes (any, array, object)
		'react/forbid-prop-types': 0,
		// Enforce boolean attributes notation in JSX
		'react/jsx-boolean-value': [2, 'never'],
		// Validate closing bracket location in JSX
		'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
		// Enforce or disallow spaces inside of curly braces in JSX attributes
		'react/jsx-curly-spacing': [0, 'never', {
			allowMultiline: true,
		}],
		// Disallow spaces around equal signs in JSX attributes
		'react/jsx-equals-spacing': [2, 'never'],
		// Enforce event handler naming conventions in JSX
		'react/jsx-handler-names': [2, {
			eventHandlerPrefix: 'handle',
			eventHandlerPropPrefix: 'on',
		}],
		// Validate JSX indentation
		'react/jsx-indent': [2, 'tab'],
		// Validate props indentation in JSX
		'react/jsx-indent-props': [2, 'tab'],
		// Validate JSX has key prop when in array or iterator
		'react/jsx-key': 0,
		// Limit maximum of props on a single line in JSX
		'react/jsx-max-props-per-line': [0, {
			maximum: 3,
		}],
		// Prevent usage of .bind() and arrow functions in JSX props
		'react/jsx-no-bind': 0,
		// Prevent duplicate props in JSX
		'react/jsx-no-duplicate-props': [0, {
			ignoreCase: false,
		}],
		// Prevent usage of unwrapped JSX strings
		'react/jsx-no-literals': 0,
		// Prevent usage of unsafe target='_blank'
		'react/jsx-no-target-blank': 2,
		// Disallow undeclared variables in JSX
		'react/jsx-no-undef': 2,
		// Enforce PascalCase for user-defined JSX components
		'react/jsx-pascal-case': 2,
		// Enforce propTypes declarations alphabetical sorting
		'react/jsx-sort-prop-types': 0,
		// Enforce props alphabetical sorting
		'react/jsx-sort-props': 0,
		// Validate spacing before closing bracket in JSX
		'react/jsx-space-before-closing': [2, 'always'],
		// Prevent React to be incorrectly marked as unused
		'react/jsx-uses-react': [2, {
			pragma: 'React',
		}],
		// Prevent variables used in JSX to be incorrectly marked as unused
		'react/jsx-uses-vars': 2,
		// Prevent usage of dangerous JSX properties
		'react/no-danger': 0,
		// Prevent usage of deprecated methods
		'react/no-deprecated': [1, {
			react: '0.14.0',
		}],
		// Prevent usage of setState in componentDidMount
		'react/no-did-mount-set-state': [2, 'allow-in-func'],
		// Prevent usage of setState in componentDidUpdate
		'react/no-did-update-set-state': [2, 'allow-in-func'],
		// Prevent direct mutation of this.state
		'react/no-direct-mutation-state': 0,
		// Prevent usage of isMounted
		'react/no-is-mounted': 2,
		// Prevent multiple component definition per file
		'react/no-multi-comp': [2, {
			ignoreStateless: true,
		}],
		// Prevent usage of setState
		'react/no-set-state': 0,
		// Prevent using string references
		'react/no-string-refs': 0,
		// Prevent usage of unknown DOM property
		'react/no-unknown-property': 2,
		// Require ES6 class declarations over React.createClass
		'react/prefer-es6-class': [2, 'always'],
		// Enforce stateless React Components to be written as a pure function
		'react/prefer-stateless-function': 2,
		// Prevent missing props validation in a React component definition
		'react/prop-types': [2, {
			ignore: [],
			customValidators: [],
		}],
		// Prevent missing React when using JSX
		'react/react-in-jsx-scope': 2,
		// Restrict file extensions that may be required
		'react/require-extension': 0,
		// Prevent extra closing tags for components without children
		'react/self-closing-comp': [2, {
			component: true,
			html: false,
		}],
		// Enforce component methods order
		'react/sort-comp': [2, {
			order: [
				'lifecycle',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'everything-else',
				'/^handle.+$/',
				'/^render.+$/',
				'render',
			],
		}],
		// Prevent missing parentheses around multilines JSX
		'react/wrap-multilines': [2, {
			declaration: true,
			assignment: true,
			return: true,
		}],
		// Restrict file extensions that may contain JSX
		'react/jsx-filename-extension': [2, {
			extensions: ['.js'],
		}],
		// Prevent usage of the return value of React.render
		'react/no-render-return-value': 2,
		// Prevent comments from being inserted as text nodes
		'react/no-comment-textnodes': 2,
	},
};
