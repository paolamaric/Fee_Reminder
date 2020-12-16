import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD5B1Jefoc03VvJk93kESkjoJFKWjoAs4k",
    authDomain: "fee-reminder-25b98.firebaseapp.com",
    projectId: "fee-reminder-25b98",
    storageBucket: "fee-reminder-25b98.appspot.com",
    messagingSenderId: "581418578674",
    appId: "1:581418578674:web:6ecd1cec0269e4c448566b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {
    firebase,
  }; 

