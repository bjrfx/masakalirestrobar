// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2S67ECURsC_9J3INJS5nadO76P6cg-uQ",
  authDomain: "restobar-menu.firebaseapp.com",
  projectId: "restobar-menu",
  storageBucket: "restobar-menu.appspot.com",
  messagingSenderId: "233302086303",
  appId: "1:233302086303:web:4219f0babea971d226c8aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
const db = getFirestore(app);
export { db };