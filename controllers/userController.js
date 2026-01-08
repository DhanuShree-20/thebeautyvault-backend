const User = require('../models/userModel');

// @desc    Sync Firebase user with MongoDB
// @route   POST /api/users/sync
const syncUser = async (req, res) => {
  const { uid, email, name } = req.user; // From Firebase Auth Middleware

  try {
    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      // If user doesn't exist in MongoDB, create them
      user = await User.create({
        firebaseUid: uid,
        name: name || 'New User',
        email: email,
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error syncing user data' });
  }
};

// @desc    Get user profile (Order history, etc)
const getUserProfile = async (req, res) => {
  const user = await User.findOne({ firebaseUid: req.user.uid });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { syncUser, getUserProfile };