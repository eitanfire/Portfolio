// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq2vmEY5EAgTOTCDBT0ws_ENPJvlH4N-k",
  authDomain: "portfolio-410323.firebaseapp.com",
  projectId: "portfolio-410323",
  storageBucket: "portfolio-410323.appspot.com",
  messagingSenderId: "1040435853331",
  appId: "1:1040435853331:web:9c516b7b17458fb366a7e6",
  measurementId: "G-74385ZSWSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
