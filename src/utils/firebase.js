import firebase from "firebase";
import "firebase/auth";

/*const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzUx73FGlui4znMGTXPvH3-vItiEhBVfM",
  authDomain: "currencyexchange-de08f.firebaseapp.com",
  databaseURL: "https://currencyexchange-de08f.firebaseio.com",
  projectId: "currencyexchange-de08f",
  storageBucket: "currencyexchange-de08f.appspot.com",
  messagingSenderId: "861296601155",
  appId: "1:861296601155:web:46e53e38d898d87a7c4cf6",
  measurementId: "G-EGHCTSP8NK",
});*/

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export default firebaseApp;
