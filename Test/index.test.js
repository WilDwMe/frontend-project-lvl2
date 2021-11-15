import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import def from '../Src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '../', '__fixtures__', filename);
// const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

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

test('GenDiff - other case', () => {
  const file3 = getFixturePath('file3.json');
  const file4 = getFixturePath('file4.json');
  expect(def(file3, file4)).toEqual({
    age: 40,
    master: true,
    name: 'WilD',
    skils: 'JS, NODE.js',
    tools: 'VScode',
  });
});

test('GenDiff - Yaml case', () => {
  const file5 = getFixturePath('file5.yml');
  const file6 = getFixturePath('file6.yml');
  expect(def(file5, file6)).toEqual({
    follow: false,
    host: 'hexlet.io',
    proxy: '123.234.53.22',
    // timeout: 50
    timeout: 20,
    verbose: true,
  });
});

// test('GenDiff - Deep equal case', () => {
//   const file1 = getFixturePath('fileDeep1.json');
//   const file2 = getFixturePath('fileDeep2.json');
//   expect(def(file1, file2)).toEqual({
//     common: {
//       follow: false,
//       setting1: 'Value 1',
//       setting2: 200,
//       setting3: true,
//       // setting3: null,
//       setting4: 'blah blah',
//       setting5: {
//         key5: 'value5',
//       },
//       setting6: {
//         doge: {
//           // wow: ,
//           wow: 'so much',
//         },
//         key: 'value',
//         ops: 'vops',
//       },
//     },
//     group1: {
//       // baz: 'bas',
//       baz: 'bars',
//       foo: 'bar',
//       // nest: {
//       //   key: 'value',
//       // },
//       nest: 'str',
//     },
//     group2: {
//       abc: 12345,
//       deep: {
//         id: 45,
//       },
//     },
//     group3: {
//       deep: {
//         id: {
//           number: 45,
//         },
//       },
//       fee: 100500,
//     },
//   });
// });
// 