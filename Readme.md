# oxlint-config-raccoon

[![npm](https://img.shields.io/npm/v/oxlint-config-raccoon.svg)](https://www.npmjs.com/package/oxlint-config-raccoon) [![Node.js CI status](https://github.com/sapegin/oxlint-config-raccoon/workflows/Node.js%20CI/badge.svg)](https://github.com/sapegin/oxlint-config-raccoon/actions)

Shared [Oxlint](https://oxc.rs/docs/guide/usage/linter) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) configurations that I use on all my projects.

- All linter presets rely on Oxlint’s built-in plugins (`eslint`, `unicorn`, `vitest`, `import`, `jsdoc`, `promise`, `typescript`, `react`, and `jsx-a11y` where appropriate).
- Type-aware TypeScript rules are provided through [`oxlint-tsgolint`](https://github.com/oxc-project/tsgolint).
- Tailwind CSS support is opt-in through [`oxlint-tailwindcss`](https://github.com/sergioazoc/oxlint-tailwindcss). The formatter preset uses Oxfmt’s built-in import, `package.json`, and Tailwind class sorting.

## Presets

| Preset | Extends | Adds |
| --- | --- | --- |
| `oxlint-config-raccoon` / `oxlint-config-raccoon/base` | — | JavaScript baseline (core + Unicorn + Vitest) |
| `oxlint-config-raccoon/typescript` | `base` | `typescript` plugin and type-aware rules |
| `oxlint-config-raccoon/typescript-react` | `typescript` | `react` and `jsx-a11y` plugins |
| `oxlint-config-raccoon/typescript-react-tailwind` | `typescript-react` | `oxlint-tailwindcss` JS plugin |
| `oxlint-config-raccoon/oxfmt` | — | Oxfmt formatter preset |

## Installation

```sh
npm install --save-dev oxlint oxlint-tsgolint oxfmt oxlint-config-raccoon
```

For the Tailwind preset, also install:

```sh
npm install --save-dev oxlint-tailwindcss
```

## Usage

### Oxlint

Create `oxlint.config.ts`:

```ts
import config from 'oxlint-config-raccoon/typescript-react' with { type: 'json' };
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [config],
  options: {
    typeAware: true,
    typeCheck: true
  }
});
```

> [!IMPORTANT] `options.typeAware` and `options.typeCheck` are only honoured in the **root** config file, so the presets do not set them — you must enable type-aware linting yourself when extending the `typescript`, `typescript-react`, or `typescript-react-tailwind` presets.

> [!IMPORTANT] Type-aware linting requires `tsconfig.json` and TypeScript 7+ via [`typescript-go`](https://github.com/microsoft/typescript-go); some legacy options like `baseUrl` are not supported. See the [Oxlint type-aware guide](https://oxc.rs/docs/guide/usage/linter/type-aware.html).

### Oxfmt

Create `oxfmt.config.ts`:

```ts
import config from 'oxlint-config-raccoon/oxfmt' with { type: 'json' };
import { defineConfig } from 'oxfmt';

export default defineConfig(config);
```

### Tailwind CSS

The Tailwind lint preset targets **Tailwind CSS v4** (the constraint comes from `oxlint-tailwindcss`). Tell the plugin where to find your Tailwind entry point in your root config:

```ts
import config from 'oxlint-config-raccoon/typescript-react-tailwind' with { type: 'json' };
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [config],
  options: { typeAware: true },
  settings: {
    tailwindcss: {
      entryPoint: 'src/styles/app.css'
    }
  }
});
```

Class sorting is intentionally left to Oxfmt (`sortTailwindcss` in `oxfmt.json`) to avoid two tools fighting over the order.

## Code style at a glance

- Two-space indentation.
- Single quotes, semicolons, 80-char lines (enforced by Oxfmt).
- Declare variables just before their first use.
- One variable per `const`/`let` statement; no `var`.
- Strict equality (`===`, `!==`).
- Return early.

```js
function eatFood(food) {
  if (food.length === 0) {
    return ['No food'];
  }

  return food.map(dish => `No ${dish.toLowerCase()}`);
}

const food = ['Pizza', 'Burger', 'Coffee'];
console.log(eatFood(food));
```
