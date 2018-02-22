const http = require('http');
const readline = require ("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  rl.question ("dame algo",(x) => {
  (res.end(x))});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
