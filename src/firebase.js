import firebase from 'firebase'

const firebaseApp =  firebase.initializeApp({
  //paste the firebase config inside the {} brackets here!!!!!
  
});
const db =firebaseApp.firestore();

export default db;
