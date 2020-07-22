import firebase, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

let newDatabaseEntry = {
  username: "",
  balance: {
    ZAR: 5000,
  },
  trades: [
    {
      id: 1,
      date: {
        day: 31,
        month: "June",
        year: 2020,
      },
      sold: {
        currency: "ZAR",
        amount: 5000,
      },
      bought: {
        currency: "USD",
        amount: 294.25,
      },
    },
    {
      id: 2,
      date: {
        day: 20,
        month: "June",
        year: 2020,
      },
      sold: {
        currency: "GBP",
        amount: 2000,
      },
      bought: {
        currency: "EUR",
        amount: 2210.94,
      },
    },
  ],
};

export const updateTradeHistory = (uid, newTrade) => {
  firestore().collection("users").doc(uid).update({
    trades: newTrade,
  });
};

export const createUserInDB = (uid, username) => {
  console.log("Print form Firebase");
  newDatabaseEntry.username = username;
  firestore().collection("users").doc(uid).set(newDatabaseEntry);
};

export default firebaseApp;
