// Import the functions you need from the SDKs you need

import { initializeApp,  getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCACS3YhCjKslY_NrrsLfXbGSHFGHBVre4",
  authDomain: "app-fluxo-financeiro.firebaseapp.com",
  projectId: "app-fluxo-financeiro",
  storageBucket: "app-fluxo-financeiro.firebasestorage.app",
  messagingSenderId: "278403335190",
  appId: "1:278403335190:web:6111698e59a4cb37056137"
};

// Initialize Firebase
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);