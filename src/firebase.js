// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZGutof8rde6szZwL9sczB9RxruzhtngA",
  authDomain: "rai-zone.firebaseapp.com",
  projectId: "rai-zone",
  storageBucket: "rai-zone.appspot.com",
  messagingSenderId: "1041497829096",
  appId: "1:1041497829096:web:aa2e53bae883ec7808235d",
  measurementId: "G-Z9EXRQ5QW8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
