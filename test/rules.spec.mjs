import { test, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

for (const file of fs.readdirSync(path.resolve('./rules'))) {
	const { name, ext } = path.parse(file);
	if (ext !== '.mjs') {
		continue;
	}

	test(`does not throw when requiring ${file}`, async () => {
		const function_ = async () => {
			await import(`../rules/${name}.mjs`);
		};

		await expect(function_).not.toThrow();
	});
}
