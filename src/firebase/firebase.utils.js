import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDLa4qrqrKfzb7WhZX98vDOGbJeqer3SAk",
    authDomain: "shop-clothing-c15a2.firebaseapp.com",
    projectId: "shop-clothing-c15a2",
    storageBucket: "shop-clothing-c15a2.appspot.com",
    messagingSenderId: "720488786012",
    appId: "1:720488786012:web:c4f33da4fbe898beb05e99",
    measurementId: "G-E880G2HV8N"
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;