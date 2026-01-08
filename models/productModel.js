const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: false },
    category: { type: String, required: true },
    // Add subCategory to support /category/hair-care/shampoo
    subCategory: { type: String, required: false }, 
    price: { type: Number, required: true, default: 0 },
    // Add mrp to show the crossed-out price in your UI
    mrp: { type: Number, required: false, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;