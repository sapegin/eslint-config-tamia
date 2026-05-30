import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';

// Docs: https://github.com/Rel1cx/eslint-react

// Use type-checked recommended config
const recommendedPreset = eslintReact.configs['recommended-type-checked'];

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		// Only support TypeScript files
		files: ['**/*.{ts,tsx,mtsx}'],
		plugins: recommendedPreset.plugins,
		// Configure language/parsing options
		languageOptions: {
			// Use TypeScript ESLint parser for TypeScript files
			parser: tseslint.parser,
			parserOptions: {
				// Enable project service for better TypeScript integration
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// Include recommended rules
			...recommendedPreset.rules,

			// Enforces the use of shorthand syntax for boolean attributes
			'@eslint-react/jsx-shorthand-boolean': 'warn',
			// Enforce PascalCase for user-defined JSX components
			'@eslint-react/naming-convention/component-name': ['warn', 'PascalCase'],
		},
	},
];
