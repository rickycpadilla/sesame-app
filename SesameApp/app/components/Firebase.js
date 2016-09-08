const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyD1V8752Wn_6GQSinDyL-9zLv1K641xbRo",
  authDomain: "sesameapp-1e3ef.firebaseapp.com",
  databaseURL: "https://sesameapp-1e3ef.firebaseio.com",
  storageBucket: "sesameapp-1e3ef.appspot.com",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports = firebaseApp;
