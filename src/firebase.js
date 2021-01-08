import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDCGebnMxyteDnxoPNA8vVVTwJ0wwCz-ck",
    authDomain: "feereminder-90356.firebaseapp.com",
    projectId: "feereminder-90356",
    storageBucket: "feereminder-90356.appspot.com",
    messagingSenderId: "51003893715",
    appId: "1:51003893715:web:838fb1491e988b23ceb126"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

<<<<<<< HEAD
  let db = firebase.firestore();

  export {
      firebase, db
=======
  export {
      firebase,
>>>>>>> f72722b5068206c3f178987aa665124d47dae30b
  };