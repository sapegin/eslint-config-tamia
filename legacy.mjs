import js from "@eslint/js";
import bestPractices from './rules/best-practices';
import errors from './rules/errors';
import legacy from './rules/legacy';
import node from './rules/node';
import style from './rules/style';
import variables from './rules/variables';

export default [
  js.configs.recommended,
  bestPractices,
  errors,
  legacy,
  node,
  style,
  variables,
  {
    env: {
      browser: true,
      jest: true,
    },
    globals: {},
    rules: {},
  }
];
