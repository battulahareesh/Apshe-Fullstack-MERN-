const express = require("express");
const app = express();

app.use(express.json());

let items = [
  { id: 1, name: "masala dosa", price: 80 },
  { id: 2, name: "paneer dosa", price: 100 },
  { id: 3, name: "ghee podi dosa", price: 120 },
];

// READ - Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// READ - Get single item by ID
app.get("/items/:id", (req, res) => {
  const targetId = parseInt(req.params.id, 10);
  if (isNaN(targetId)) {
    return res.status(400).json({ error: "Invalid item ID format" });
  }

  const item = items.find(i => i.id === targetId);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});

// CREATE - Add a new item
app.post("/items", (req, res) => {
  const { name, price } = req.body;

  // Validate inputs
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Name must be a non-empty string" });
  }
  if (price === undefined || typeof price !== "number" || price <= 0) {
    return res.status(400).json({ error: "Price must be a positive number" });
  }

  // Robust ID generation to avoid duplicate collisions when items are deleted
  const nextId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;

  const newItem = {
    id: nextId,
    name: name.trim(),
    price: price,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// UPDATE - Update an existing item
app.put("/items/:id", (req, res) => {
  const targetId = parseInt(req.params.id, 10);
  if (isNaN(targetId)) {
    return res.status(400).json({ error: "Invalid item ID format" });
  }

  const item = items.find(i => i.id === targetId);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  // Prevent mutation of 'id' field and perform validations
  const { id, name, price } = req.body;

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Name must be a non-empty string" });
    }
    item.name = name.trim();
  }

  if (price !== undefined) {
    if (typeof price !== "number" || price <= 0) {
      return res.status(400).json({ error: "Price must be a positive number" });
    }
    item.price = price;
  }

  res.json(item);
});

// DELETE - Remove an item
app.delete("/items/:id", (req, res) => {
  const targetId = parseInt(req.params.id, 10);
  if (isNaN(targetId)) {
    return res.status(400).json({ error: "Invalid item ID format" });
  }

  const itemExists = items.some(i => i.id === targetId);
  if (!itemExists) {
    return res.status(404).json({ error: "Item not found" });
  }

  items = items.filter(i => i.id !== targetId);
  res.json({ message: "Deleted successfully" });
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

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
