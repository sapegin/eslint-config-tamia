import javascript from './rules/javascript.mjs';
import misc from './rules/misc.mjs';
import typescript from './rules/typescript.mjs';
import unicorn from './rules/unicorn.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...javascript, ...typescript, ...unicorn, ...misc];
