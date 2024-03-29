// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHgjnc6lzFoKBf7ugs2Xyf-v0dTjyWtAY",
  authDomain: "eitans-portfolio.firebaseapp.com",
  projectId: "eitans-portfolio",
  storageBucket: "eitans-portfolio.appspot.com",
  messagingSenderId: "558341578334",
  appId: "1:558341578334:web:b83077346a43991fc49ecf",
  measurementId: "G-DMWDJNBX85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
