import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export const parser = (data) => {
    const parseJson = (data) => JSON.parse(fs.readFileSync(data));
    const parseYml = (data) => yaml.load(fs.readFileSync(data));

    const format = path.extname(data);
 
  if (format === '.json') {
    return parseJson(data);
  } else if (format === '.yml') {
    return parseJson(data);
  }


}