#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const rows = data.split('\n').map((row) => row.trim()).filter((row) => row !== '');
      const columns = rows[0].split(',');
      const students = rows.slice(1).map((row) => {
        const values = row.split(',');
        const student = {};
        columns.forEach((column, index) => {
          student[column] = values[index];
        });
        return student;
      });
      console.log(`Number of students: ${students.length}`);
      const fields = {};
      students.forEach((student) => {
        if (!student.field) {
          return;
        }
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });
      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
      resolve();
    });
  });
}

module.exports = countStudents;
