
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, addDoc, collection ,getDocs , doc, setDoc,updateDoc,serverTimestamp,arrayUnion, arrayRemove, deleteDoc,query,  orderBy,  onSnapshot,Timestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCE000wqk5sn8oyjUKSEmZFoBXmBmwzCCQ",
  authDomain: "hacthon-69a9f.firebaseapp.com",
  projectId: "hacthon-69a9f",
  storageBucket: "hacthon-69a9f.firebasestorage.app",
  messagingSenderId: "768014149975",
  appId: "1:768014149975:web:f34f273293149203ceb612",
  measurementId: "G-P3WLWSJV5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, 
    signInWithPopup, GoogleAuthProvider, db, addDoc, collection,getDocs , doc, setDoc,
    updateDoc ,serverTimestamp,arrayUnion, arrayRemove , deleteDoc,query,  orderBy,  onSnapshot,Timestamp};