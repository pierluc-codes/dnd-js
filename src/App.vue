<template>
    <div class="container">
        <PlayerList :players="encounter.characters" />
    </div>
</template>

<script>
import firebase from "firebase";
import PlayerList from "./PlayerList";

require('firebase/firestore')

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0-wlv8Xn9-4qHvihVVAqmmu4XWDuk928",
  authDomain: "dnd-js.firebaseapp.com",
  databaseURL: "https://dnd-js.firebaseio.com",
  projectId: "dnd-js",
  storageBucket: "dnd-js.appspot.com",
  messagingSenderId: "1076195446824"
});

const firestore = firebaseApp.firestore();

export default {
  firestore() {
    return {
      encounter: firestore.collection('encounters').doc('jyaAnXdhNU2GSQGAcgkg')
    };
  },
  components: {
    PlayerList
  }
};
</script>

<style>

</style>