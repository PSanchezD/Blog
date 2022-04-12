// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyArvUHPh3vsTTeOdvT-8Cz21cx6NZEuNHA",
  authDomain: "blog-7dfdb.firebaseapp.com",
  projectId: "blog-7dfdb",
  storageBucket: "blog-7dfdb.appspot.com",
  messagingSenderId: "849523144841",
  appId: "1:849523144841:web:4899760631bc0d6d2f6e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
