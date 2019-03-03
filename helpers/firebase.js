const fb = require('firebase-admin');
const { URL, CERT } = require('../config/firebase');

const FIREBASE = {};

FIREBASE.init = () => new Promise(async (resolve, reject) => {
  try {
    const connection = await fb.initializeApp({
      credential: fb.credential.cert(CERT),
      URL,
    });

    resolve(connection);
  } catch (err) {
    reject(err);
  }
});

module.exports = FIREBASE;
