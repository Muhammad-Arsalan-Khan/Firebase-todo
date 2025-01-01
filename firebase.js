import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFBZfxGKAqqByruB9ErLZzhstgIwzx_yk",
  authDomain: "my-first-firebase-projec-c24e3.firebaseapp.com",
  projectId: "my-first-firebase-projec-c24e3",
  storageBucket: "my-first-firebase-projec-c24e3.firebasestorage.app",
  messagingSenderId: "222737038297",
  appId: "1:222737038297:web:9bde3f530bb5ef89c9f7c8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc };
