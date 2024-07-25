import { test, expect } from 'vitest';

test.each(['index.mjs', 'react.mjs', 'typescript.mjs', 'typescript-react.mjs'])(
	'does not throw when requiring %s',
	(name) => {
		const function_ = async () => {
			await import(`../${name}`);
		};
		expect(function_).not.toThrow();
	}
);
