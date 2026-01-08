const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const { keyword, brand, price, rating, skinType, inStock, category, sort } = req.query;
    
    let conditions = [];

    // 1. Flexible Category/SubCategory Search
    if (category) {
      // Handles plural/singular (Soap vs Soaps) and hyphenated slugs
      const cleanCategory = category.replace(/-/g, ' ');
      const baseCategory = cleanCategory.endsWith('s') ? cleanCategory.slice(0, -1) : cleanCategory;

      conditions.push({
        $or: [
          { category: { $regex: baseCategory, $options: 'i' } },
          { subCategory: { $regex: baseCategory, $options: 'i' } },
          { name: { $regex: cleanCategory, $options: 'i' } }
        ]
      });
    }

    // 2. Keyword Search
    if (keyword) {
      conditions.push({
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { brand: { $regex: keyword, $options: 'i' } }
        ]
      });
    }

    // 3. Brand Filter (Safe check for split)
    if (brand && typeof brand === 'string' && brand.length > 0) {
      const brandArray = brand.split(',');
      conditions.push({ brand: { $in: brandArray } });
    }

    let query = conditions.length > 0 ? { $and: conditions } : {};

    // 4. Numeric & Status Filters
    if (price) query.price = { $lte: Number(price) };
    if (rating) query.rating = { $gte: Number(rating) };
    
    // SAFE CHECK: Prevents 500 error if skinType is empty
    if (skinType && typeof skinType === 'string' && skinType.length > 0) {
      query.skinType = { $in: skinType.split(',') };
    }
    
    if (inStock === 'true') query.countInStock = { $gt: 0 };

    // 5. Execute with Sorting
    let apiQuery = Product.find(query);
    if (sort === 'newest') apiQuery = apiQuery.sort({ createdAt: -1 });
    else if (sort === 'price_low') apiQuery = apiQuery.sort({ price: 1 });
    else if (sort === 'price_high') apiQuery = apiQuery.sort({ price: -1 });

    const products = await apiQuery;
    const availableBrands = await Product.distinct('brand', query);

    res.json({ products, availableBrands });
    
  } catch (error) {
    console.error("Product Controller Error:", error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

module.exports = { getProducts, getUniqueBrands: async (req, res) => { /* ... */ }, getProductById: async (req, res) => { /* ... */ } };