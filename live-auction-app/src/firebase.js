// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9QrGNwA8paE0ZpfiR_dn9Sv21DysmoXA",
    authDomain: "bidbay-4fab7.firebaseapp.com",
    projectId: "bidbay-4fab7",
    storageBucket: "bidbay-4fab7.appspot.com",
    messagingSenderId: "992672602033",
    appId: "1:992672602033:web:8f4445a8d512db09b18f90",
    measurementId: "G-59EN630QV7"
};

const fbAuthProvider = new FacebookAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: only if you need analytics

// Initialize Firebase Auth
const auth = getAuth(app); 
// Initialize Firestore
const firestore = getFirestore(app);
// Initialize Storage
const storage = getStorage(app);

// Export Firestore and Auth for use in other files
export { auth, firestore, storage };  

export const signInWithFacebook = async () => {
    try {
        const auth = getAuth();
        const result = await signInWithPopup(auth, fbAuthProvider);
        console.log("User info: ", result.user);
        return result.user;
    } catch (error) {
        console.error("Error during Facebook login:", error);
    }
};