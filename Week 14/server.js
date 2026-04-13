// Import HTTP module
const http = require('http');

// Define port (change if needed)
const PORT = 3001;

// Create server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end("Welcome to Node.js Server");
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Handle error (very important)
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use. Try another port.`);
  } else {
    console.error('Server error:', err);
  }
});