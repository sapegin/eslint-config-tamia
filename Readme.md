# eslint-config-tamia

[![Build Status](https://travis-ci.org/tamiadev/eslint-config-tamia.svg)](https://travis-ci.org/tamiadev/eslint-config-tamia)

This package provides [Tâmia’s](http://tamiadev.github.io/tamia/) `.eslintrc` as an extensible shared config. Based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Usage

We export three ESLint configurations for your usage.

### eslint-config-tamia

Our default export contains all of our ESLint rules, including EcmaScript 6+. It requires `eslint`.

`npm install --save-dev eslint-config-tamia eslint babel-eslint`

`.eslintrc`:

```json
{
  "extends": "tamia"
}
```

### eslint-config-tamia/react

Lints ES6+ but and React. Requires `eslint` and `eslint-plugin-react`.

`npm install --save-dev eslint-config-tamia eslint-plugin-react eslint babel-eslint`

`.eslintrc`:

```json
{
  "extends": "tamia/react"
}
```

### eslint-config-tamia/legacy

Lints ES5 and below. Only requires `eslint`.

`npm install --save-dev eslint-config-tamia eslint`

`.eslintrc`:

```json
{
  "extends": "tamia/legacy"
}
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
- Limit line lengths to 120 chars.
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

const food = [
  'Pizza',
  'Buger',
  'Coffee',
];
console.log(eatFood(food));
```

---

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
