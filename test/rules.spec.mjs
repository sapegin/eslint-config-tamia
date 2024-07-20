import { test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

fs.readdirSync(path.resolve(__dirname, '../rules')).forEach((name) => {
	if (!name.match(/\.mjs$/)) {
		return;
	}

	test(`does not throw when requiring ${name}`, () => {
		const func = async () => {
			await import(`../rules/${name}`);
		};

		expect(func).not.toThrow();
	});
});
