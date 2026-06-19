const express = require("express"); // Import Express
const productRoutes = require("./routes/productRoutes"); // Import routes

const app = express();

app.use(express.json()); // Parse JSON body

app.use("/api/v1/products", productRoutes); // Route prefix

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
