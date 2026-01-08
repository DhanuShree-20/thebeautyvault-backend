// backend/data/seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Change this from ./product to ./products
const beautyProducts = require('./products.js'); 
const Product = require('../models/productModel.js');

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // This clears the old data showing mrp: 0 in your console
    await Product.deleteMany(); 
    
    // This inserts the new data with categories and prices
    await Product.insertMany(beautyProducts);

    console.log('Data Imported Successfully! ✅');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();