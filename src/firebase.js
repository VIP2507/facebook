import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCrmPXo1ChSlpuIJGH2ft2_BX7x379uscQ",
    authDomain: "facebook-7395b.firebaseapp.com",
    databaseURL: "https://facebook-7395b.firebaseio.com",
    projectId: "facebook-7395b",
    storageBucket: "facebook-7395b.appspot.com",
    messagingSenderId: "561480679922",
    appId: "1:561480679922:web:6d49365fdb022fb1402b6b",
    measurementId: "G-F9C7FTYYPE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;