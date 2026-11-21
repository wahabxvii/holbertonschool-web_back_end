import { readFile } from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const rows = data.split('\n').filter((row) => row.length > 0);
    const headers = rows[0].split(',');
    const first = headers.indexOf('firstname');
    const field = headers.indexOf('field');
    const students = {};
    rows.slice(1).forEach((row) => {
      const columns = row.split(',');
      if (!columns[field]) {
        return;
      }
      if (!students[columns[field]]) {
        students[columns[field]] = [];
      }
      students[columns[field]].push(columns[first]);
    });
    resolve(students);
  });
});

export { readDatabase };
export default readDatabase;
