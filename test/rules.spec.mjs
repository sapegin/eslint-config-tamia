import { test, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

for (const name of fs.readdirSync(path.resolve('./rules'))) {
	if (!/\.mjs$/.test(name)) {
		continue;
	}

	test(`does not throw when requiring ${name}`, () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const function_ = async () => {
			await import(`../rules/${name}`);
		};

		expect(function_).not.toThrow();
	});
}
