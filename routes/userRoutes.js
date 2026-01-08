const express = require('express');
const router = express.Router();
const { syncUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/users/sync
// Used right after a user logs in via Firebase on the frontend
router.post('/sync', protect, syncUser);

// @route   GET /api/users/profile
router.get('/profile', protect, getUserProfile);

module.exports = router;