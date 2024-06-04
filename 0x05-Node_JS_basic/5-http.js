const http = require('http');

/**
 * @author Pablo West`
 * Creating a complex http server
 * that is assigned to the variable app
 * and listens to port 1245, and also return plan text
 */
const students = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
