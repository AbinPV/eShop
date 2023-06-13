import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxsmfSNNv8j6YkmxM6wmWXwaMWW_Dq9og",
    authDomain: "eshop-6eeef.firebaseapp.com",
    projectId: "eshop-6eeef",
    storageBucket: "eshop-6eeef.appspot.com",
    messagingSenderId: "676008082443",
    appId: "1:676008082443:web:80e5e9626b023bde3e5b0e",
    measurementId: "G-4PJ45C0HXG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };