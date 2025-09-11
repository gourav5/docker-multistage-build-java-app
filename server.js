// server.js
const http = require('http');

const port = 4000;
const server = http.createServer((req, res) => {
  res.end('Hello Gourav Kumar ! Welcome!');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

