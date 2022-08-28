import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACBBtTToEanAJKJ_86Mh9WSQsBMOlL5jY",
    authDomain: "book-crud-9dbac.firebaseapp.com",
    projectId: "book-crud-9dbac",
    storageBucket: "book-crud-9dbac.appspot.com",
    messagingSenderId: "316527445914",
    appId: "1:316527445914:web:0f9f3b351f076f579a1c23",
    measurementId: "G-K6W6XVBT9X"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);