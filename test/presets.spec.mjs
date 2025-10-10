import { test, expect } from 'vitest';

test.each(['index', 'react', 'typescript', 'typescript-react'])(
	'does not throw when requiring %s.mjs',
	(name) => {
		const function_ = async () => {
			await import(`../${name}.mjs`);
		};

		expect(function_).not.toThrow();
	}
);
