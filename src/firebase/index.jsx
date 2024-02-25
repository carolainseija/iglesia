// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);