// Import the functions you need from the SDKs you need
import   {useEffect, useState} from 'react';
import{ initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc4RnN_hc22MgG_NssDvS411CxGpYeSn0",
  authDomain: "odrexbes.firebaseapp.com",
  databaseURL: "https://odrexbes-default-rtdb.firebaseio.com",
  projectId: "odrexbes",
  storageBucket: "odrexbes.appspot.com",
  messagingSenderId: "949199171006",
  appId: "1:949199171006:web:6b26a381d30f3567da5def",
  measurementId: "G-S9L79KZS36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export function signUp(email, password){
return createUserWithEmailAndPassword(auth, email, password);
}
 export function useAuth(){
    const [ currentUser, setCurrentUser] = useState();
    useEffect(() =>{
   const unsub =   onAuthStateChanged(auth, user => setCurrentUser(user)); 
   return unsub;
    }, [])
return currentUser;
  } 

