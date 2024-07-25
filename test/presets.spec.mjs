import { test, expect } from 'vitest';

test.each([
	'index.mjs',
	'legacy.mjs',
	'react.mjs',
	'typescript.mjs',
	'typescript-react.mjs',
])('does not throw when requiring %s', (name) => {
	const func = async () => {
		await import(`../${name}`);
	};
	expect(func).not.toThrow();
});
