import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAKw9HUEFKYaBc8zTafgZr4ZoOlL_U00v4",
    authDomain: "linkedin-dummy-116e9.firebaseapp.com",
    projectId: "linkedin-dummy-116e9",
    storageBucket: "linkedin-dummy-116e9.appspot.com",
    messagingSenderId: "398321328483",
    appId: "1:398321328483:web:28e4a5b571db8f5b217356"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;