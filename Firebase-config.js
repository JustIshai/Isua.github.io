// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7fl4DUeMtrtQoODaEy1SOPCZVfx3E_s0",
  authDomain: "isua-8a295.firebaseapp.com",
  projectId: "isua-8a295",
  storageBucket: "isua-8a295.firebasestorage.app",
  messagingSenderId: "223322679526",
  appId: "1:223322679526:web:4f5909148879c73c563327",
  measurementId: "G-NM9EHF4BQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
