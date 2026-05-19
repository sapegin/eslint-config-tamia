import { spawnSync } from 'node:child_process';

import { expect, test } from 'vitest';

function run(command, args) {
  const result = spawnSync(command, args, { encoding: 'utf8' });
  if (result.error) {
    throw result.error;
  }
  return {
    status: result.status,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
  };
}

test.each([
  'base',
  'typescript',
  'typescript-react',
  'typescript-react-tailwind',
])('oxlint loads %s.json', name => {
  const { status, stdout, stderr } = run('npx', [
    'oxlint',
    '--print-config',
    '-c',
    `${name}.json`,
  ]);
  expect(
    status,
    `oxlint exited with ${status}\nstderr:\n${stderr}\nstdout:\n${stdout}`
  ).toBe(0);
});

test('oxfmt loads oxfmt.json', () => {
  const { status, stdout, stderr } = run('npx', [
    'oxfmt',
    '--check',
    '-c',
    'oxfmt.json',
    'package.json',
  ]);
  expect(
    status,
    `oxfmt exited with ${status}\nstderr:\n${stderr}\nstdout:\n${stdout}`
  ).toBe(0);
});
