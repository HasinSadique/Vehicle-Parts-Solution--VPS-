// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF8wxEAVnwDnKydYppOdlIRt6tSQLBBGU",
    authDomain: "parts-manufacturer-site.firebaseapp.com",
    projectId: "parts-manufacturer-site",
    storageBucket: "parts-manufacturer-site.appspot.com",
    messagingSenderId: "612053598277",
    appId: "1:612053598277:web:3819a1e93ecab77e44a32c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;