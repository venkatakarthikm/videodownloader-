import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBuqC1mYN-dxAOXGf1EEiKY2eOyqE_5zeM",
    authDomain: "muzzybeats-724ba.firebaseapp.com",
    projectId: "muzzybeats-724ba",
    storageBucket: "muzzybeats-724ba.appspot.com", // Corrected storageBucket URL
    messagingSenderId: "1053052107895",
    appId: "1:1053052107895:web:3af3f12bbd0cb9171c9a72",
    measurementId: "G-DHZV44BY0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
