import _ from 'lodash';
import { parser as parse } from '../Src/modules/parsers.js'


const sort = (file) => Object.fromEntries(Object.entries(file).sort());

const def = (file1, file2) => {

  const fileOne = parse(file1);
  const fileTwo =  parse(file2);

  const sortedOne = sort(fileOne);
  const sortedTwo = sort(fileTwo);

  let result = {};

  for (const key in sortedOne) {
    if (_.has(sortedTwo, key)) {
      if (sortedOne[key] === sortedTwo[key]) {
        // continue;
        result[key] = fileOne[key]; 
        // console.log(`${key} : ${fileOne[key]}`);
      } else if (sortedOne[key] !== sortedTwo[key]) {
        result[key] = sortedOne[key];
        result[key] = sortedTwo[key];
        // console.log(`- ${key} : ${sortedOne[key]}`);
        // console.log(`+ ${key} : ${sortedTwo[key]}`);
      }
    } else if (_.has(sortedOne, key)) {
      result[key] = sortedOne[key];
      // console.log(`- ${key} : ${sortedOne[key]}`);
    }
  }
  for (const key in sortedTwo) {
    if (!_.has(sortedOne, key)) {
      result[key] = sortedTwo[key];
      // console.log(`+ ${key} : ${sortedTwo[key]}`);
    }
  }
  return result;
};

export default def;