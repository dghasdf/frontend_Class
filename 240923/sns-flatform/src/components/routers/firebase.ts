import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwr4lF8mK_cFn61oB_ymsjzgWCq0pPQI4",
  authDomain: "sns-flatform01-8b9a2.firebaseapp.com",
  projectId: "sns-flatform01-8b9a2",
  storageBucket: "sns-flatform01-8b9a2.appspot.com",
  messagingSenderId: "1037788772077",
  appId: "1:1037788772077:web:d53acc91f0d1e2cfbafee4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

