import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseConfig = {
    apiKey: "AIzaSyAQ5-GKghZGqzYzDwSAasf0_t0xA0VhT_I",
    authDomain: "blog-8a9b4.firebaseapp.com",
    projectId: "blog-8a9b4",
    storageBucket: "blog-8a9b4.appspot.com",
    messagingSenderId: "121241287955",
    appId: "1:121241287955:web:74aa659a5f00a4ba7e2ee6",
    measurementId: "G-SSWX0DFN6F"
};

