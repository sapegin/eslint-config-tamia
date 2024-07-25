import legacy from './legacy.mjs';
import es6 from './rules/es6.mjs';
import strict from './rules/strict.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...legacy, ...es6, ...strict];
