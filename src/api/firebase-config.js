
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB5eVpn0KDfnM8xh56EbSboMw8cHNiLGns",
    authDomain: "marc-bourreau.firebaseapp.com",
    databaseURL: "https://marc-bourreau.firebaseio.com",
    projectId: "marc-bourreau",
    storageBucket: "marc-bourreau.appspot.com",
    messagingSenderId: "5851328299",
    appId: "1:5851328299:web:932b90206a2c58fe0d5f6e",
    measurementId: "G-WSQ29KKEC5"
  };

  // Initialize Firebase
const fire = firebase.initializeApp(config);
// firebase.analytics();

export default fire;