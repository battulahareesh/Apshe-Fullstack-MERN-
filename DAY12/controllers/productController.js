const products = require("../data/products");

// GET ALL PRODUCTS
const getProducts = (req, res) => {
  res.status(200).json(products);
};

// GET PRODUCT BY ID
const getProductById = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid product ID format. ID must be a number."
    });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);
};

// CREATE PRODUCT
const createProduct = (req, res) => {
  const { name, price, category } = req.body;

  if (name === undefined || price === undefined || category === undefined) {
    return res.status(400).json({
      message: "All fields (name, price, category) are required"
    });
  }

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "Name must be a non-empty string"
    });
  }

  if (typeof price !== "number" || isNaN(price) || price < 0) {
    return res.status(400).json({
      message: "Price must be a non-negative number"
    });
  }

  if (typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
      message: "Category must be a non-empty string"
    });
  }

  const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

  const newProduct = {
    id: nextId,
    name: name.trim(),
    price,
    category: category.trim()
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

// UPDATE PRODUCT
const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid product ID format. ID must be a number."
    });
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price, category } = req.body;

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({
        message: "Name must be a non-empty string"
      });
    }
    product.name = name.trim();
  }

  if (price !== undefined) {
    if (typeof price !== "number" || isNaN(price) || price < 0) {
      return res.status(400).json({
        message: "Price must be a non-negative number"
      });
    }
    product.price = price;
  }

  if (category !== undefined) {
    if (typeof category !== "string" || category.trim() === "") {
      return res.status(400).json({
        message: "Category must be a non-empty string"
      });
    }
    product.category = category.trim();
  }

  res.status(200).json(product);
};

// DELETE PRODUCT
const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid product ID format. ID must be a number."
    });
  }

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    message: "Product deleted"
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
