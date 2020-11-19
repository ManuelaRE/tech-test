import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK4n3g3kw1EYTY3_jY9kxLk6DW-l4HgtE",
    authDomain: "tech-test-259dd.firebaseapp.com",
    databaseURL: "https://tech-test-259dd.firebaseio.com",
    projectId: "tech-test-259dd",
    storageBucket: "tech-test-259dd.appspot.com",
    messagingSenderId: "651287526838",
    appId: "1:651287526838:web:50b193a32e7574f29dd517"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
