// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzayuboEI1guuLuXvu6UifcCgu-LReNjA",
    authDomain: "new-project-2-99db2.firebaseapp.com",
    projectId: "new-project-2-99db2",
    storageBucket: "new-project-2-99db2.firebasestorage.app",
    messagingSenderId: "157476813626",
    appId: "1:157476813626:web:d5e79ec7b3bd74454e2e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);