const express = require('express');
const router = express.Router();
const { 
    addOrderItems, 
    getMyOrders, 
    createRazorpayOrder // Make sure this is imported
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// This must match the frontend call: /api/orders/razorpay
router.post('/razorpay', protect, createRazorpayOrder);

// Standard order routes
router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);

module.exports = router;