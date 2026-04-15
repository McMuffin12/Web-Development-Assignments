
console.log("Hello, Node.js!");

const os = require('os');
 
console.log("Operating System:", os.platform());

const fs = require('fs');
 
fs.writeFileSync('message.txt', 'Hello from Node.js!');
console.log("File created successfully!");


const http = require('http');
 
const server = http.createServer((req, res) => {
  res.write("Welcome to Node.js Server\nHello " + os.userInfo().username);
  res.end();
});
 
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});