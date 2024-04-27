// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5k5H-88ZBkTXKVIVGFeMwY5HJYEPqZmg",
  authDomain: "blink-e8ac0.firebaseapp.com",
  projectId: "blink-e8ac0",
  storageBucket: "blink-e8ac0.appspot.com",
  messagingSenderId: "261637231192",
  appId: "1:261637231192:web:83f370ab6b3ebf18ec702d",
  measurementId: "G-PDYTQD6S80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {app,auth};
