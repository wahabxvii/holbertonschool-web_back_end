const fs = require('fs');
const report = require('./_count');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      report(data);
      resolve();
    });
  });
}

module.exports = countStudents;
