const express = require("express");
const app = express();

// Parse JSON payload bodies before handling routes
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Dosa Junction");
});

app.get("/menu", (req, res) => {
    res.json([
        { item: "Masala Dosa", price: 80 },
        { item: "Paneer Dosa", price: 120 }
    ]);
});

app.get("/offers", (req, res) => {
    res.send("Today: 20% off on family pack dosa");
});

app.post("/order", (req, res) => {
    console.log("Order details received:", req.body); // Log request body data
    res.json({ message: "order received", order: req.body });
});

// Fallback for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start listening on port 7000
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
