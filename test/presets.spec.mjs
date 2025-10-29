import { test, expect } from 'vitest';

test.each(['index', 'react', 'typescript', 'typescript-react'])(
	'does not throw when requiring %s.mjs',
	async (name) => {
		const function_ = async () => {
			await import(`../${name}.mjs`);
		};

		await expect(function_).not.toThrow();
	}
);
