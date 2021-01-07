import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDffaMC1hsybzw7huk6xFG2xi5P4ttw-Sg",
    authDomain: "revents-course-298809.firebaseapp.com",
    projectId: "revents-course-298809",
    storageBucket: "revents-course-298809.appspot.com",
    messagingSenderId: "699517603377",
    appId: "1:699517603377:web:c052768abf1421a2754f10",
    databaseURL: "https://revents-course-298809-default-rtdb.europe-west1.firebasedatabase.app/"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;