Shared Oxlint and Oxfmt configuration, distributed as JSON presets.

## Layout

Each preset is a single JSON file at the repository root:

- `base.json` — JavaScript baseline (core rules, Unicorn, Vitest overrides).
- `typescript.json` — extends `base.json`, enables the `typescript` plugin and type-aware rules.
- `typescript-react.json` — extends `typescript.json`, enables `react` and `jsx-a11y` plugins.
- `typescript-react-tailwind.json` — extends `typescript-react.json`, enables the `oxlint-tailwindcss` JS plugin.
- `oxfmt.json` — Oxfmt formatter preset (import + Tailwind sorting included).

## Constraints

- `.oxlintrc.json` does not support extending from npm package names; only relative paths. Consumers using package-style imports must use `oxlint.config.ts`. Document both patterns in the Readme.
- `options.typeAware` and `options.typeCheck` only work in the consumer's **root** config file. Do not set them in extended presets — document instead that consumers must opt in themselves.
- Keep configs minimal: lean on `categories.correctness: "error"` and the built-in recommended sets; only override rules that diverge from those defaults.

## When adding rules

- If a rule belongs to a category already enabled via `categories`, do not re-declare it.
- Preserve plugin lists across extending presets — `plugins` is one of the fields that merges through `extends`, but listing it in each preset keeps the file self-describing.
- For overrides scoped to test or config files, use the `overrides` array.
