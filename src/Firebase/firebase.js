// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain:process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_ID,
  storageBucket: process.env.REACT_APP_BUCK,
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId:process.env.REACT_APP_APP
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const store = getFirestore(app)

export const auth = getAuth(app);
