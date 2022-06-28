// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5HMhV08UmdiJD6ENXUOtmzIb8hmiO7mg",
  authDomain: "authentication-firebase-6d34c.firebaseapp.com",
  projectId: "authentication-firebase-6d34c",
  storageBucket: "authentication-firebase-6d34c.appspot.com",
  messagingSenderId: "188231046158",
  appId: "1:188231046158:web:a52f31fc145d6a1d01d85f",
  measurementId: "G-8QGJ5QPJZS",
};

// Initialize Firebase and services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
