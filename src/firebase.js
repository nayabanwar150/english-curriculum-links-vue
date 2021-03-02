import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBXgx1hNNQFpu41YkXl1mgqqf9Gbixt-E",
    authDomain: "english-curriculum.firebaseapp.com",
    projectId: "english-curriculum",
    storageBucket: "english-curriculum.appspot.com",
    messagingSenderId: "845080697323",
    appId: "1:845080697323:web:b19293cf3dd700f75661ae"
  };
  // Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const linksRef = db.ref("Links");
