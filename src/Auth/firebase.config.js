// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAFwj4TDNh9kdo1-eRDHgiO1nL7tQZPUs",
  authDomain: "mu-brand-shop.firebaseapp.com",
  projectId: "mu-brand-shop",
  storageBucket: "mu-brand-shop.appspot.com",
  messagingSenderId: "495534252568",
  appId: "1:495534252568:web:88fdd1b5b54b51f9de196d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
