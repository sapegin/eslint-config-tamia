import { expect,test } from 'vitest';

test.each(['index', 'react', 'typescript', 'typescript-react'])(
	'does not throw when requiring %s.mjs',
	async (name) => {
		await expect(import(`../${name}.mjs`)).resolves.toBeDefined();
	}
);
