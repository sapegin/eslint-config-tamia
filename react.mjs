import javascript from './rules/javascript.mjs';
import react from './rules/react.mjs';
import unicorn from './rules/unicorn.mjs';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...javascript, ...react, ...unicorn];
