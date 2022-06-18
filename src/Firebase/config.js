import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBrbcuOO-qsvstryB3B4JQGj-BaLyhZETw",
    authDomain: "firechat-f7985.firebaseapp.com",
    projectId: "firechat-f7985",
    storageBucket: "firechat-f7985.appspot.com",
    messagingSenderId: "780689980613",
    appId: "1:780689980613:web:7c3255b73926f01a4cc4ac"
};

const Firebase = initializeApp(firebaseConfig);
export const db=getFirestore(Firebase)
export const auth=getAuth(Firebase)


