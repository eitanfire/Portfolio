// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
