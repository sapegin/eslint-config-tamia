module.exports = {
	plugins: ['react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings : {
		react: {
			version: 'detect'
		}
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
		'react/jsx-closing-bracket-location': 0,
		// Enforce or disallow spaces inside of curly braces in JSX attributes
		'react/jsx-curly-spacing': 0,
		// Disallow spaces around equal signs in JSX attributes
		'react/jsx-equals-spacing': 0,
		// Enforce event handler naming conventions in JSX
		'react/jsx-handler-names': [
			2,
			{
				eventHandlerPrefix: 'handle',
				eventHandlerPropPrefix: 'on',
			},
		],
		// Validate JSX indentation
		'react/jsx-indent': 0,
		// Validate props indentation in JSX
		'react/jsx-indent-props': 0,
		// Validate JSX has key prop when in array or iterator
		'react/jsx-key': 2,
		// Limit maximum of props on a single line in JSX
		'react/jsx-max-props-per-line': 0,
		// Prevent usage of .bind() and arrow functions in JSX props
		'react/jsx-no-bind': [
			2,
			{
				allowArrowFunctions: true
			}
		],
		// Prevent duplicate props in JSX
		'react/jsx-no-duplicate-props': [
			2,
			{
				ignoreCase: false,
			},
		],
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
		// Prevent React to be incorrectly marked as unused
		'react/jsx-uses-react': 2,
		// Prevent variables used in JSX to be incorrectly marked as unused
		'react/jsx-uses-vars': 2,
		// Prevent usage of dangerous JSX properties
		'react/no-danger': 0,
		// Prevent usage of deprecated methods
		'react/no-deprecated': 2,
		// Prevent usage of setState in componentDidMount
		'react/no-did-mount-set-state': 2,
		// Prevent usage of setState in componentDidUpdate
		'react/no-did-update-set-state': 2,
		// Prevent direct mutation of this.state
		'react/no-direct-mutation-state': 2,
		// Prevent usage of isMounted
		'react/no-is-mounted': 2,
		// Prevent multiple component definition per file
		'react/no-multi-comp': [
			2,
			{
				ignoreStateless: true,
			},
		],
		// Prevent usage of setState
		'react/no-set-state': 0,
		// Prevent using string references
		'react/no-string-refs': 2,
		// Prevent usage of unknown DOM property
		'react/no-unknown-property': 2,
		// Require ES6 class declarations over React.createClass
		'react/prefer-es6-class': [2, 'always'],
		// Enforce stateless React Components to be written as a pure function
		'react/prefer-stateless-function': 2,
		// Prevent missing props validation in a React component definition
		'react/prop-types': [
			2,
			{
				ignore: [],
				customValidators: [],
			},
		],
		// Prevent missing React when using JSX
		'react/react-in-jsx-scope': 2,
		// Prevent extra closing tags for components without children
		'react/self-closing-comp': [
			2,
			{
				component: true,
				html: false,
			},
		],
		// Enforce component methods order
		'react/sort-comp': [
			2,
			{
				order: [
					'static-variables',
					'instance-variables',
					'lifecycle',
					'everything-else',
					'render',
				],
				groups: {
					lifecycle: [
					  'constructor',
					  'getDefaultProps',
					  'getInitialState',
					  'getChildContext',
					  'getDerivedStateFromProps',
					  'componentWillMount',
					  'UNSAFE_componentWillMount',
					  'componentDidMount',
					  'componentWillReceiveProps',
					  'UNSAFE_componentWillReceiveProps',
					  'shouldComponentUpdate',
					  'componentWillUpdate',
					  'UNSAFE_componentWillUpdate',
					  'getSnapshotBeforeUpdate',
					  'componentDidUpdate',
					  'componentDidCatch',
					  'componentWillUnmount'
					]
				  }
			},
		],
		// Prevent missing parentheses around multilines JSX
		'react/jsx-wrap-multilines': 0,
		// Restrict file extensions that may contain JSX
		'react/jsx-filename-extension': 0,
		// Prevent usage of the return value of React.render
		'react/no-render-return-value': 2,
		// Prevent comments from being inserted as text nodes
		'react/jsx-no-comment-textnodes': 2,
		// Prevent usage of findDOMNode
		'react/no-find-dom-node': 2,
		// Prevent problem with children and props.dangerouslySetInnerHTML
		'react/no-danger-with-children': 2,
		// Prevent passing of children as props
		'react/no-children-prop': 2,
		// Prevent invalid characters from appearing in markup
		'react/no-unescaped-entities': 2,
		// Configure the position of the first property
		'react/jsx-first-prop-new-line': 0,
		// Validate whitespace in and around the JSX opening and closing brackets
		'react/jsx-tag-spacing': 0,
		// Prevent void DOM elements (e.g. <img />, <br />) from receiving children
		'react/void-dom-elements-no-children': 2,
		// Enforce style prop value being an object
		'react/style-prop-object': 2,
		// Prevent usage of setState in componentWillUpdate
		'react/no-will-update-set-state': 2,
		// Enforce all defaultProps have a corresponding non-required PropType
		'react/default-props-match-prop-types': 2,
		// Prevents common typos
		'react/no-typos': 2,
	},
};
