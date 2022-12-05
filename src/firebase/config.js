import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyBk6lSJTIVBqYpAcoZEZTit_TUNGn8mz1k",
  
    authDomain: "finance-tracker-c307e.firebaseapp.com",
  
    projectId: "finance-tracker-c307e",
  
    storageBucket: "finance-tracker-c307e.appspot.com",
  
    messagingSenderId: "966002101410",
  
    appId: "1:966002101410:web:13f1e18024b06698931bfb"
  
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }