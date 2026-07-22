import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQNMh7p7KZ3ByOAPrRmSerbCBxsNIDfuw",
  authDomain: "johar-trails.firebaseapp.com",
  projectId: "johar-trails",
  storageBucket: "johar-trails.firebasestorage.app",
  messagingSenderId: "955849303449",
  appId: "1:955849303449:web:7b048f1710a7f123f85f08",
  measurementId: "G-BSZREDWLH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
