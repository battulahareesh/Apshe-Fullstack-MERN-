const express = require("express");
const router = express.Router(); // Create router

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts); // GET all

router.get("/:id", getProductById); // GET one

router.post("/", createProduct); // CREATE

router.put("/:id", updateProduct); // UPDATE

router.delete("/:id", deleteProduct); // DELETE

module.exports = router;
