import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCuBa1ZXqBtf8aVeA7gnroFPqofy68n8Hw",
    authDomain: "notesapp-b2439.firebaseapp.com",
    projectId: "notesapp-b2439",
    storageBucket: "notesapp-b2439.appspot.com",
    messagingSenderId: "833177102757",
    appId: "1:833177102757:web:e24d9cea7bace329aee04c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes")


export {db, notesCollection}