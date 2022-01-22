import _ from 'lodash';
import { parser as parse } from './fileParser.js';
// const dataOne = {
//   "host": "hexlet.io",
//   "timeout": 50,
//   "proxy": "123.234.53.22",
//   "follow": false
// };

// const dataTwo = {
//   "timeout": 20,
//   "verbose": true,
//   "host": "hexlet.io"
// }
const sort = (file) => Object.fromEntries(Object.entries(file).sort());

const diffCheck = (file1, file2) => {
const dataOne = sort(parse(file1));
const dataTwo = sort(parse(file2));

let result = {};

for (const key in dataOne) {
  if (_.has(dataTwo, key)) {
    if (dataOne[key] === dataTwo[key]) {
      // continue;
      result[key] = dataOne[key]; 
    } else if (dataOne[key] !== dataTwo[key]) {
      result[key] = dataOne[key];
      result[key] = dataTwo[key];
    }
  } else if (_.has(dataOne, key)) {
    result[key] = dataOne[key];
  }
}
for (const key in dataTwo) {
  if (!_.has(dataOne, key)) {
    result[key] = dataTwo[key];
  }
}
return result;
};

// console.log(diffCheck(dataOne, dataTwo));

export default diffCheck;