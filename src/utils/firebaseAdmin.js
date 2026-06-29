const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require(
  "../config/spermscope-4ad57-firebase-adminsdk-fbsvc-9def87b0c3.json"
);

initializeApp({
  credential: cert(serviceAccount),
});