import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCOdGk2KbBIXzSlK6qZK4bYFesuaJQHfV0",
    authDomain: "ecom-db-oauth.firebaseapp.com",
    databaseURL: "https://ecom-db-oauth.firebaseio.com",
    projectId: "ecom-db-oauth",
    storageBucket: "ecom-db-oauth.appspot.com",
    messagingSenderId: "261301426458",
    appId: "1:261301426458:web:d16f1dedfa6b132ba1b4a3",
    measurementId: "G-0ZJXF8T1WK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const filestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;