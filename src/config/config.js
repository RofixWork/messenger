import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1zDOuibCZ32RFzbenioleXVTfASJMfOY",
    authDomain: "messenger-5154d.firebaseapp.com",
    databaseURL: "https://messenger-5154d.firebaseio.com",
    projectId: "messenger-5154d",
    storageBucket: "messenger-5154d.appspot.com",
    messagingSenderId: "30662737678",
    appId: "1:30662737678:web:dcef958d8045fe65a0215f",
    measurementId: "G-HH1675PB70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export  {db, auth};