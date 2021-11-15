import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export const parser = (data) => {

    const format = path.extname(data);
 
  if (format === '.json') {
    const parseJson = (data) => JSON.parse(fs.readFileSync(data));
    return parseJson(data);
  } else if (format === '.yml') {
    const parseYml = (data) => yaml.load(fs.readFileSync(data));
    return parseYml(data);
  }

}