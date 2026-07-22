import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuPrOJQMxAs68hBS8iE0fkHXfKKTJae1w",
  authDomain: "johar-trails-mvp.firebaseapp.com",
  projectId: "johar-trails-mvp",
  storageBucket: "johar-trails-mvp.firebasestorage.app",
  messagingSenderId: "959436443582",
  appId: "1:959436443582:web:b097b4239790a6b4e2b3ef",
  measurementId: "G-DR047WC4G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
