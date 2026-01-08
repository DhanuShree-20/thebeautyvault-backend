const express = require('express');
const router = express.Router();
const { 
  getProducts, 
  getUniqueBrands, 
  getProductById 
} = require('../controllers/productController');

// Ensure the paths match your frontend API calls
router.get('/', getProducts);
router.get('/brands', getUniqueBrands);
router.get('/:id', getProductById);

module.exports = router;