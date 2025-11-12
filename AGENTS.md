# ESLint config structure

This ESLint configuration is organized into modular rule files and preset configurations.

## Structure

### Rules directory (`rules/`)

Each file in the `rules/` directory contains a specific category of ESLint rules, such as:

- `javascript.mjs` - Core JavaScript rules
- `typescript.mjs` - TypeScript rules
- `react.mjs` - React-specific rules
- `unicorn.mjs` - eslint-plugin-unicorn rules
- `misc.mjs` - Miscellaneous rules

### Root config files (presets)

The root configuration files compose rules into presets for different project types:

- `index.mjs` - Base JavaScript configuration
- `react.mjs` - JavaScript + React
- `typescript.mjs` - JavaScript + TypeScript
- `typescript-react.mjs` - JavaScript + TypeScript + React

## Requirements for adding new rules

When adding a new rule category:

1. Create a new file in `rules/` (e.g., `rules/new-category.mjs`) or add it to `rules/misc.mjs` (if only recommended preset is used)
2. **IMPORTANT**: Add the new rule file to **ALL** root config files:
   - `index.mjs`
   - `react.mjs`
   - `typescript.mjs`
   - `typescript-react.mjs`

This ensures consistency across all presets and prevents configuration drift.
