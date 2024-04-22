// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDoc, collection, where, query } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getDatabase, set, ref } from "firebase/database";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfUfqwZEffLak9LkaONIgmer2t5Vmz9mI",
    authDomain: "project1-240ff.firebaseapp.com",
    projectId: "project1-240ff",
    storageBucket: "project1-240ff.appspot.com",
    messagingSenderId: "750957476008",
    appId: "1:750957476008:web:825b446a2fae610feb6a9d",
    measurementId: "G-M1V10WER19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const firestore = getFirestore(app);
