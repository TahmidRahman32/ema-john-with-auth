// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCvCvWli7UtxV8MIcZ4VQmvEGdCJwUS_Sc",
   authDomain: "ema-john-firebase-auth-701f6.firebaseapp.com",
   projectId: "ema-john-firebase-auth-701f6",
   storageBucket: "ema-john-firebase-auth-701f6.appspot.com",
   messagingSenderId: "1089062100253",
   appId: "1:1089062100253:web:c154259f3107c77d9c95f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;