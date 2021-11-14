import fs from 'fs';
import _ from 'lodash';

const parseJson = (file) => JSON.parse(fs.readFileSync(file));
const sort = (file) => Object.fromEntries(Object.entries(file).sort());

const def = (file1, file2) => {
  const fileOne = parseJson(file1);
  const fileTwo =  parseJson(file2);

  const sortedOne = sort(fileOne);
  const sortedTwo = sort(fileTwo);

  let result = {};

  for (const key in sortedOne) {
    if (_.has(sortedTwo, key)) {
      if (sortedOne[key] === sortedTwo[key]) {
        // continue;
        result[key] = fileOne[key]; 
        console.log(`${key} : ${fileOne[key]}`);
      } else if (sortedOne[key] !== sortedTwo[key]) {
        result[key] = sortedOne[key];
        result[key] = sortedTwo[key];
        console.log(`- ${key} : ${sortedOne[key]}`);
        console.log(`+ ${key} : ${sortedTwo[key]}`);
      }
    } else if (_.has(sortedOne, key)) {
      result[key] = sortedOne[key];
      console.log(`- ${key} : ${sortedOne[key]}`);
    }
  }
  for (const key in sortedTwo) {
    if (!_.has(sortedOne, key)) {
      result[key] = sortedTwo[key];
      console.log(`+ ${key} : ${sortedTwo[key]}`);
    }
  }
  return result;
};

export default def;