<template>
    <div class="container">
        <PlayerList :players="encounter.characters" />
    </div>
</template>

<script>
import db from './FirebaseClient'
import PlayerList from "./PlayerList"

export default {
  firestore() {
    return {
      encounter: db.collection('encounters').doc('jyaAnXdhNU2GSQGAcgkg')
    }
  },
  components: {
    PlayerList
  }
}
</script>

<style>

</style>