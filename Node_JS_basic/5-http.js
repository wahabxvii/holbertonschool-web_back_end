#!/usr/bin/node
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2], (line) => res.write(`${line}\n`))
      .then(() => res.end())
      .catch((err) => res.end(err.message));
    return;
  }
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
