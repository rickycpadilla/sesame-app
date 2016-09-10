const firebase = require('firebase');

const firebaseConfig  = {
    apiKey: "AIzaSyClCUfeUyDVEaRXJMAU96mLoDzG2r92Juo",
    authDomain: "sesame-data.firebaseapp.com",
    databaseURL: "https://sesame-data.firebaseio.com",
    storageBucket: "sesame-data.appspot.com",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports = firebaseApp;
