# eslint-config-tamia

[![npm](https://img.shields.io/npm/v/eslint-config-tamia.svg)](https://www.npmjs.com/package/eslint-config-tamia) [![Node.js CI status](https://github.com/tamiadev/eslint-config-tamia/workflows/Node.js%20CI/badge.svg)](https://github.com/tamiadev/eslint-config-tamia/actions)

This package provides [Tâmia’s](http://tamiadev.github.io/tamia/) `.eslintrc` as an extensible shared config. Based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

**Should be used with [Prettier](https://prettier.io/), has no own code style rules.**

## Usage

We export three ESLint configurations:

### eslint-config-tamia

Our default export contains all of our ESLint rules, including EcmaScript 6+. It requires `eslint`.

`npm install --save-dev eslint-config-tamia eslint`

`eslint.config.mjs`:

```js
import tamia from 'eslint-config-tamia';
export default [...tamia];
```

### eslint-config-tamia/react

Lints ES6+ and React. Uses `eslint-plugin-react`.

`npm install --save-dev eslint-config-tamia eslint`

`eslint.config.mjs`:

```js
import tamiaReact from 'eslint-config-tamia/react';
export default [...tamiaReact];
```

### eslint-config-tamia/typescript

Lints TypeScript. Uses `typescript-eslint`.

`npm install --save-dev eslint-config-tamia eslint`

`eslint.config.mjs`:

```js
import tamiaTypeScript from 'eslint-config-tamia/typescript';
export default [...tamiaTypeScript];
```

### eslint-config-tamia/typescript-react

Lints TypeScript and React. Uses `typescript-eslint` and `eslint-plugin-react`.

`npm install --save-dev eslint-config-tamia eslint`

`eslint.config.mjs`:

```js
import tamiaTypeScriptReact from 'eslint-config-tamia/typescript-react';
export default [...tamiaTypeScriptReact];
```

### eslint-config-tamia/legacy

Lints ES5 and below. Only requires `eslint`.

`npm install --save-dev eslint-config-tamia eslint`

`eslint.config.mjs`:

```js
import tamiaTypeScript from 'eslint-config-tamia/typescript';
export default [...tamiaTypeScript];
```

## Code style at a glance

- Tab indentation.
- Single-quotes.
- Semicolons.
- Declare variables just before their first usage.
- Multiple variable statements.
- Make `const`, not `var`.
- Use `===` and `!==` over `==` and `!=`.
- Return early.
- Limit line lengths to 80 chars.
- Prefer readability over religion.
- Use ES6.

Example:

```javascript
function eatFood(food) {
  if (!food.length) {
    return ['No food'];
  }

  return food.map(dish => `No ${dish.toLowerCase()}`);
}

const food = ['Pizza', 'Buger', 'Coffee'];
console.log(eatFood(food));
```

---

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
