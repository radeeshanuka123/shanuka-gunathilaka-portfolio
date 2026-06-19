import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIB5zOn7-5mGKmA-lnzl0qPy2dFi5Ce1Y",
  authDomain: "portfolio-e54ec.firebaseapp.com",
  projectId: "portfolio-e54ec",
  storageBucket: "portfolio-e54ec.firebasestorage.app",
  messagingSenderId: "229629690447",
  appId: "1:229629690447:web:2e8d9e58b95307d3ee203a",
  measurementId: "G-NWRLJW42LZ"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
