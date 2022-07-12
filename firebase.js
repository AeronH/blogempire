// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBvo-Hi8P-_Mj-3JfXYTcawYy7wiWdGsm8",
  authDomain: "blogempire-61edd.firebaseapp.com",
  projectId: "blogempire-61edd",
  storageBucket: "blogempire-61edd.appspot.com",
  messagingSenderId: "363468979269",
  appId: "1:363468979269:web:34d7e7dcafb232f65d772c",
  measurementId: "G-2GQ5NGEKH2"
};

// Initialize Firebase
// export const app  = initializeApp(firebaseConfig);

let app; 

if (!getApps().length) {    
  app = initializeApp(firebaseConfig);
} else {     
  app = getApp(); 
}

export const db = getFirestore(app);






