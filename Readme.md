# eslint-config-tamia

[![npm](https://img.shields.io/npm/v/eslint-config-tamia.svg)](https://www.npmjs.com/package/eslint-config-tamia) [![Node.js CI status](https://github.com/sapegin/eslint-config-tamia/workflows/Node.js%20CI/badge.svg)](https://github.com/sapegin/eslint-config-tamia/actions)

This package provides a shared ESLint config that I use on all my projects.

**Should be used with [Prettier](https://prettier.io/), has no own code style rules.**

All presets include the following ESLint plugins:

- [@eslint-community/eslint-plugin-eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/)
- [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest)
- [eslint-plugin-washing-code](https://github.com/sapegin/eslint-plugin-washing-code)

## Usage

We export three ESLint configurations:

### eslint-config-tamia

Base set of rules for JavaScript.

`npm install --save-dev eslint eslint-config-tamia`

`eslint.config.mjs`:

```js
import tamia from 'eslint-config-tamia';
export default [...tamia];
```

### eslint-config-tamia/typescript

Lints TypeScript. Includes:

- [typescript-eslint](https://typescript-eslint.io/)

`npm install --save-dev eslint eslint-config-tamia`

`eslint.config.mjs`:

```js
import tamiaTypeScript from 'eslint-config-tamia/typescript';
export default [...tamiaTypeScript];
```

This config uses types for linting, so you need to have `tsconfig.json` that looks like this:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "strict": true
  },
  "include": ["src/*", "*.ts"]
}
```

### eslint-config-tamia/typescript-react

Lints TypeScript and React. Includes:

- [typescript-eslint](https://typescript-eslint.io/)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

`npm install --save-dev eslint eslint-config-tamia eslint-plugin-jsx-a11y`

`eslint.config.mjs`:

```js
import tamiaTypeScriptReact from 'eslint-config-tamia/typescript-react';
import jsxAccessibility from 'eslint-plugin-jsx-a11y';

export default [
  ...tamiaTypeScriptReact,
  jsxAccessibility.flatConfigs.strict
];
```

This config uses types for linting, so you need to have `tsconfig.json` that looks like this:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "esModuleInterop": true,
    "strict": true
  },
  "include": ["src/*", "*.ts"]
}
```

## Code style at a glance

- ~~Tab indentation.~~
- Single-quotes.
- Semicolons.
- Declare variables just before their first usage.
- Multiple variable statements over multiple variable in a single statement.
- Make `const`, not `var`.
- Use `===` and `!==` over `==` and `!=`.
- Return early.
- Limit line lengths to 80 chars.
- Prefer readability over religion.
- Use ES6.

Example:

```javascript
function eatFood(food) {
  if (food.length === 0) {
    return ['No food'];
  }

  return food.map(dish => `No ${dish.toLowerCase()}`);
}

const food = ['Pizza', 'Burger', 'Coffee'];
console.log(eatFood(food));
```

---

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
