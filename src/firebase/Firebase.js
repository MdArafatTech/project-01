// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKgWXuOUdoU9bEr3PkgRbvoz8yGpej06I",
  authDomain: "project-01-ddc3c.firebaseapp.com",
  projectId: "project-01-ddc3c",
  storageBucket: "project-01-ddc3c.firebasestorage.app",
  messagingSenderId: "868344089268",
  appId: "1:868344089268:web:c0e9affa0bf3d87443a5e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
















