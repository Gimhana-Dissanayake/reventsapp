import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2bprRD5Jp-ME2uYIBofxV7gNcILb0BIA",
    authDomain: "social-network-app-b1b31.firebaseapp.com",
    databaseURL: "https://social-network-app-b1b31.firebaseio.com",
    projectId: "social-network-app-b1b31",
    storageBucket: "social-network-app-b1b31.appspot.com",
    messagingSenderId: "736753882562",
    appId: "1:736753882562:web:631522c6259715accb325b",
    measurementId: "G-SFMWDYL8LW"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;