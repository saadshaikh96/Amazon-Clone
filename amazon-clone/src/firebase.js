// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMcMisyjvDADai2NoTkmt0x6oQCDfV-Ls",
  authDomain: "clone-90982.firebaseapp.com",
  projectId: "clone-90982",
  storageBucket: "clone-90982.appspot.com",
  messagingSenderId: "779052690616",
  appId: "1:779052690616:web:eafead7e0907fadcb9984d",
  measurementId: "G-FTN7HY5P7M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
