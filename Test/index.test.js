import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import def from '../Src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '../', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('GenDiff - main function', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  expect(def(file1, file2)).toEqual({
    follow: false,
    host: 'hexlet.io',
    proxy: '123.234.53.22',
    timeout: 20,
    // 'timeout': 20,
    verbose: true,
  });
});

const file3 = getFixturePath('file3.json');
const file4 = getFixturePath('file4.json');

test('GenDiff - other case', () => {
  expect(def(file3, file4)).toEqual({
    age: 40,
    master: true,
    name: 'WilD',
    skils: 'JS, NODE.js',
    tools: 'VScode',
  });
});
