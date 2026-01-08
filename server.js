

const dotenv = require('dotenv');
dotenv.config(); // This must be at the top!
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
// 1. Import your Firebase Admin config (This handles initialization)
const admin = require('./config/firebaseAdmin'); 

// 2. Import Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');



// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// 3. API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handling Middleware (Optional but recommended)
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 10000;;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});