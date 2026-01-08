const Order = require('../models/orderModel');
const Razorpay = require('razorpay');
const crypto = require('crypto'); // Built-in Node module for verification

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// @desc    Create new order in MongoDB
// @route   POST /api/orders
// @access  Private
const addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    totalPrice,
    paymentMethod,
    paymentResult,
    razorpay_signature // Optional: for extra verification
  } = req.body;

  try {
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    // Double check that we have the user from middleware
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, user missing' });
    }

    const order = new Order({
      user: req.user._id,
      orderItems, // Already correctly mapped in CheckoutPage.jsx
      shippingAddress,
      totalPrice,
      paymentMethod,
      isPaid: paymentMethod === 'Razorpay',
      paidAt: paymentMethod === 'Razorpay' ? Date.now() : null,
      paymentResult,
      isDelivered: false
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error("Mongoose Order Save Error:", error.message);
    res.status(500).json({ message: "Order Saving Failed", error: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// @desc    Step 1: Create Razorpay Order ID for Frontend
// @route   POST /api/orders/razorpay
// @access  Private
const createRazorpayOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    res.status(500).json({ message: "Razorpay Order Error", error: error.message });
  }
};

// @desc    Step 2: Verify Razorpay Payment (Security Check)
// @route   POST /api/orders/verify
// @access  Private
const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    return res.status(200).json({ message: "Payment verified successfully" });
  } else {
    return res.status(400).json({ message: "Invalid signature sent!" });
  }
};

module.exports = {
  addOrderItems,
  getMyOrders,
  createRazorpayOrder,
  verifyPayment
};