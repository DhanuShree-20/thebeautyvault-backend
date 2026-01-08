const admin = require('../config/firebaseAdmin');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decodedToken = await admin.auth().verifyIdToken(token);

      let user = await User.findOne({ email: decodedToken.email });

      if (!user) {
        console.log("Syncing new user to MongoDB...");
        // FIX: Added firebaseUid to the creation object
        user = await User.create({
          name: decodedToken.name || decodedToken.email.split('@')[0],
          email: decodedToken.email,
          firebaseUid: decodedToken.uid, // This matches your required schema field
          isAdmin: false
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error('FIREBASE AUTH ERROR:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };