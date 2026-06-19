const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to my first express server");
});

// Fallback for undefined routes (404 Handler)
app.use((req, res, next) => {
    res.status(404).send("Route not found");
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start listening on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
