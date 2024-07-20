import legacy from './rules/legacy.mjs';
import es6 from './rules/es6.mjs';
import strict from './rules/strict.mjs';
import typescript from './rules/typescript.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...legacy, ...es6, ...strict, ...typescript];
