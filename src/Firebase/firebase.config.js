// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOOPxF9PaHHMEWzw1zECeUiBDL7b5-ynw",
  authDomain: "dragon-news-93508.firebaseapp.com",
  projectId: "dragon-news-93508",
  storageBucket: "dragon-news-93508.appspot.com",
  messagingSenderId: "511625413897",
  appId: "1:511625413897:web:a70e79ef4b3b34b1af7fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;