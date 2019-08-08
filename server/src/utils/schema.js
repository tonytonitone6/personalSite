import fs from 'fs';
import { join } from 'path';



export const loadTypeSchema = type => {
  return new Promise((resolve, reject) => {
    const pathToSchema = join(process.cwd(), `src/types/${type}/${type}.gql`);
    fs.readFile(pathToSchema, { encoding: 'utf-8'}, (err, schema) => {
      if (err) {
        return reject(err);
      }

      return resolve(schema);
    })

  })
}