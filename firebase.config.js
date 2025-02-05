// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  // authDomain: "new-edge-reality.firebaseapp.com",
  authDomain: "localhost:3000",
  projectId: "new-edge-reality",
  storageBucket: "new-edge-reality.firebasestorage.app",
  messagingSenderId: "53775616278",
  appId: "1:53775616278:web:5d9ec4963ef684472fe837",
  measurementId: "G-N2S4PVR894",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
