// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLln6gW8vu3g-IElTHrfE8fetMEwj5m3I",
  authDomain: "netflixgpt-8b9bb.firebaseapp.com",
  projectId: "netflixgpt-8b9bb",
  storageBucket: "netflixgpt-8b9bb.appspot.com",
  messagingSenderId: "183910023868",
  appId: "1:183910023868:web:ad07cc14df1f70764f06b9",
  measurementId: "G-J13ZY2R4G0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
