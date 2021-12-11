import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyhUIG5Kwi4QKw6p-umuegjZQxL-asxYk",
    authDomain: "linkedin-clone-d158e.firebaseapp.com",
    projectId: "linkedin-clone-d158e",
    storageBucket: "linkedin-clone-d158e.appspot.com",
    messagingSenderId: "893449387757",
    appId: "1:893449387757:web:fbc9b465f60a91f2a916e4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth}