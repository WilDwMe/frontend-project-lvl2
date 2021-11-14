import fs from 'fs';
import _ from 'lodash';

const def = (file1, file2) => {
  const fileOne = JSON.parse(fs.readFileSync(file1));
  const fileTwo = JSON.parse(fs.readFileSync(file2));

  const sortedOne = Object.fromEntries(Object.entries(fileOne).sort());
  const sortedTwo = Object.fromEntries(Object.entries(fileTwo).sort());

  let result = {};

  for (const key in sortedOne) {
    if (_.has(sortedTwo, key)) {
      if (sortedOne[key] === sortedTwo[key]) {
        result[key] = fileOne[key]; 
      } else if (sortedOne[key] !== sortedTwo[key]) {
        result[key] = sortedOne[key];
        result[key] = sortedTwo[key];
      }
    } else if (_.has(sortedOne, key)) {
      result[key] = sortedOne[key];
    }
  }
  for (const key in sortedTwo) {
    if (!_.has(sortedOne, key)) {
      result[key] = sortedTwo[key];
    }
  }
  return result;
};

export default def;