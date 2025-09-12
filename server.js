// server.js
const http = require('http');

// Hardcoded secret (for testing vulnerability detection)
const DB_PASSWORD = "SuperSecretPassword123!";
const API_KEY = "AKIAIOSFODNN7EXAMPLE";

const port = 4000;
const server = http.createServer((req, res) => {
  res.end('Hello Gourav Kumar! Node.js app working fine!');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log("Database Password: " + DB_PASSWORD);
  console.log("API Key: " + API_KEY);
});

