const admin = require('firebase-admin');

let serviceAccount;

if (process.env.FIREBASE_PRIVATE_KEY) {
  // PRODUCTION: Use Environment Variables from Render
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // Fixes the newline formatting issue in environment variables
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  };
} else {
  // LOCAL: Use the JSON file
  try {
    serviceAccount = require('./serviceAccountKey.json');
  } catch (error) {
    console.warn("Warning: serviceAccountKey.json not found. Ensure Env Vars are set.");
  }
}

// Initialize if we have a serviceAccount and no app is already running
if (serviceAccount && !admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("Firebase Admin Initialized Successfully");
}

module.exports = admin;