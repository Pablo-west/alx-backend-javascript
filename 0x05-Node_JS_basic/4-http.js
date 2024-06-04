const http = require('http');

/**
 * @author Pablo West
 * Creating a simple http server
 * that returns a message "Hello Holberton School!"
 */
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname);

module.exports = app;
