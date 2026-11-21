const fs = require('fs');
const report = require('./_count');

function countStudents (path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  report(data);
}

module.exports = countStudents;
