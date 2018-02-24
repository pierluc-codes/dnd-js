const firebase  = require("firebase")
require('firebase/firestore')

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "dnd-js.firebaseapp.com",
  databaseURL: "https://dnd-js.firebaseio.com",
  projectId: "dnd-js",
  storageBucket: "dnd-js.appspot.com",
  messagingSenderId: "1076195446824"
})

const firestore = firebaseApp.firestore()

module.exports = firestore