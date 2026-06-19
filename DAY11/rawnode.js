const http = require("http");

// Create a raw HTTP server using Node's built-in http module
const server = http.createServer((req, res) => {
    // Handle GET requests to the root path
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to my first Node server");
    } else {
        // Fallback for any other paths or HTTP methods
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

// Start the server listening on port 3000
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
