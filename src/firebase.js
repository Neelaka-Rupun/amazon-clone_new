import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsh7bp4rdZe5zWitTZGXDlAzOmyoIpQiQ",
    authDomain: "e-clone-50837.firebaseapp.com",
    projectId: "e-clone-50837",
    storageBucket: "e-clone-50837.appspot.com",
    messagingSenderId: "752638571878",
    appId: "1:752638571878:web:d129776601285c2b0184a7",
    measurementId: "G-LQSNMWJW9P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }