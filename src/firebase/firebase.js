// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh7uDOJPWo8w7n81lO0fhYTGe6xgKhqBA",
  authDomain: "react-next-shop-8a74e.firebaseapp.com",
  projectId: "react-next-shop-8a74e",
  storageBucket: "react-next-shop-8a74e.appspot.com",
  messagingSenderId: "128856932459",
  appId: "1:128856932459:web:faf91954d9762b2259712e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
