import firebase from "firebase";


var firebaseConfig = {
   apiKey: "AIzaSyCR4MVz83zIqirTQmLk_P7OrPasYDYuNFU",
   authDomain: "todoapp-70481.firebaseapp.com",
   projectId: "todoapp-70481",
   storageBucket: "todoapp-70481.appspot.com",
   messagingSenderId: "178269542422",
   appId: "1:178269542422:web:1b87e2b6450bae7b35fd37"
 };
firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();

export default db;
