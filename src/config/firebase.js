// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZiYzzzHVCHJSYOz38MBl7YCy38IDNw4E",
  authDomain: "nz-react-firestore.firebaseapp.com",
  projectId: "nz-react-firestore",
  storageBucket: "nz-react-firestore.appspot.com",
  messagingSenderId: "57249021627",
  appId: "1:57249021627:web:99e4e4b99c3f813f91739e",
  measurementId: "G-NV4RC8F34Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;