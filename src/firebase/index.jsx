// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDfampmx807UrEYhYFgUMMJa_7-6mECbPw",
  authDomain: "iglesia-f485a.firebaseapp.com",
  projectId: "iglesia-f485a",
  storageBucket: "iglesia-f485a.appspot.com",
  messagingSenderId: "133587183223",
  appId: "1:133587183223:web:eb597f30428dfcac3e8872",
  measurementId: "G-SFX26TJMQN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)