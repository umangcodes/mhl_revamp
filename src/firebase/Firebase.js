import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.apiKey ,
  authDomain: process.env.authDomain ,
  projectId: process.env.projectId ,
  storageBucket: process.env.storageBucket ,
  messagingSenderId: process.env.messagingSenderId ,
  appId: process.env.appId ,
  measurementId: process.env.measurementId 
};

console.log(process.env.REACT_APP_apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

console.log(db)
export default db