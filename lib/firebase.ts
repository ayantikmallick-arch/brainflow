import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl5gfvzb0zRUBnYxzrrIabkhONMIKbgLY",
  authDomain: "brainflow-2f214.firebaseapp.com",
  projectId: "brainflow-2f214",
  storageBucket: "brainflow-2f214.firebasestorage.app",
  messagingSenderId: "229675362575",
  appId: "1:229675362575:web:1971f06397a813bef5b67a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);