# eslint-config-tamia

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

See [Tâmia’s Javascript styleguide](https://github.com/tamiadev/styleguides/blob/master/JavaScript.md) and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
