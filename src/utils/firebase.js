// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCk-6csSLaIx4RzK14AgfGGzpkIs586k5E",
  authDomain: "spotimy-2d679.firebaseapp.com",
  projectId: "spotimy-2d679",
  storageBucket: "spotimy-2d679.appspot.com",
  messagingSenderId: "206308091091",
  appId: "1:206308091091:web:210bbc3fb55431b0576026"
};

export const initFirebase = initializeApp(firebaseConfig);