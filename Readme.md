# eslint-config-tamia

[![Build Status](https://travis-ci.org/tamiadev/eslint-config-tamia.svg)](https://travis-ci.org/tamiadev/eslint-config-tamia)
[![npm](https://img.shields.io/npm/v/eslint-config-tamia.svg)](https://www.npmjs.com/package/eslint-config-tamia)

This package provides [Tâmia’s](http://tamiadev.github.io/tamia/) `.eslintrc` as an extensible shared config. Based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

**Should be used with [Prettier](https://prettier.io/), has no own code style rules.**

## Usage

We export three ESLint configurations:

### eslint-config-tamia

Our default export contains all of our ESLint rules, including EcmaScript 6+. It requires `eslint`.

`npm install --save-dev eslint-config-tamia eslint`

`.eslintrc`:

```json
{
  "extends": "tamia"
}
```

### eslint-config-tamia/react

Lints ES6+ and React. Requires `eslint` and `eslint-plugin-react`.

`npm install --save-dev eslint-config-tamia eslint-plugin-react eslint`

`.eslintrc`:

```json
{
  "extends": "tamia/react"
}
```

### eslint-config-tamia/typescript

Lints TypeScript. Requires `eslint` and `@typescript-eslint/eslint-plugin`.

`npm install --save-dev eslint-config-tamia @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint`

`.eslintrc`:

```json
{
  "extends": "tamia/typescript"
}
```

### eslint-config-tamia/typescript-react

Lints TypeScript and React. Requires `eslint`, `@typescript-eslint/eslint-plugin` and `eslint-plugin-react`.

`npm install --save-dev eslint-config-tamia @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint`

`.eslintrc`:

```json
{
  "extends": "tamia/typescript-react"
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
