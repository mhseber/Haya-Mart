// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqdgoUMFU7ED7kwQi03Qw_DZB-6gQEv3w",
  authDomain: "hayamart-4de59.firebaseapp.com",
  projectId: "hayamart-4de59",
  storageBucket: "hayamart-4de59.firebasestorage.app",
  messagingSenderId: "727315620700",
  appId: "1:727315620700:web:7a71049a811eb0aac69799",
  measurementId: "G-LQ2SYBF7DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;