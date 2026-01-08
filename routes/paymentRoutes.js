const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

// Ensure your .env is loaded in server.js
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/razorpay-order', async (req, res) => {
  try {
    const options = {
      amount: Math.round(req.body.amount * 100), // Convert dollars to cents/paise
      currency: "INR",
      receipt: "receipt_" + Math.random(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Razorpay order creation failed" });
  }
});

module.exports = router;