const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Check if there are any initialized apps. If not, initialize.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("Firebase Admin Initialized Successfully");
} else {
  // If it already exists, just use the existing one
  admin.app(); 
}

module.exports = admin;