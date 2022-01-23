import render from './modules/formatters/render.js';
import diff from './modules/diffCheck.js';

// const file1 = getFixturePath('fileDeep1.json');
// const file2 = getFixturePath('fileDeep2.json');
// const file5 = getFixturePath('file5.yml');
// const file6 = getFixturePath('file6.yml');


const genDiff = (file1, file2,  format) => { 
  const difirence = diff(file1, file2);
  render(difirence);
  return difirence;
};


export default genDiff;