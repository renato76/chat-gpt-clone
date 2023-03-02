// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBho4RdAJVr5rL8cvkTX8OnAK6uTM6DE8M",
  authDomain: "chatgpt-clone-ef90e.firebaseapp.com",
  projectId: "chatgpt-clone-ef90e",
  storageBucket: "chatgpt-clone-ef90e.appspot.com",
  messagingSenderId: "839169719636",
  appId: "1:839169719636:web:5238100dacb88ede7c1cc1",
  measurementId: "G-FS01J6WF22"
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }