import imports from './rules/imports.mjs';
import javascript from './rules/javascript.mjs';
import misc from './rules/misc.mjs';
import unicorn from './rules/unicorn.mjs';
import vitest from './rules/vitest.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...javascript, ...unicorn, ...imports, ...vitest, ...misc];
