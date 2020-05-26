import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/app'
// Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyDiKRypJqY8il74uwCDFCN9tqrgJ0jbxaU",
    authDomain: "up-fis-db.firebaseapp.com",
    //databaseURL: "https://up-fis-db.firebaseio.com",
    projectId: "up-fis-db",
    //storageBucket: "up-fis-db.appspot.com",
    //messagingSenderId: "570385446358",
    //appId: "1:570385446358:web:e37c8351771d2a6ff4a077",
    //measurementId: "G-L6MHL5RS6F"
  });
  let db = firebase.firestore();
  db.settings({timestampsInSnapshots:true})
  // Initialize Firebase
  export default db;