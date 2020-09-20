import firebase from 'firebase'

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBf2pMFKiPtL3DweyjVKt68Xr8f018056c",
    authDomain: "messenger-web-app.firebaseapp.com",
    databaseURL: "https://messenger-web-app.firebaseio.com",
    projectId: "messenger-web-app",
    storageBucket: "messenger-web-app.appspot.com",
    messagingSenderId: "833919277874",
    appId: "1:833919277874:web:ce9d8cac89f0748f94952b",
    measurementId: "G-ZSLEG1G2D1"
  
});
const db =firebaseApp.firestore();

export default db;