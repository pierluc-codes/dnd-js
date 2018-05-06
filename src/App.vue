<template>
    <div class="container">
        <PlayerList :players="filteredCharacter" />
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
  computed: {
    filteredCharacter: function() {
      let characters = this.encounter.characters

      if (characters && characters.length > 0) {
        return characters
          .filter(player => player.show)
          .filter(player => player.initiative)
          .sort((left, right) => { 
            return parseInt(right.initiative) - parseInt(left.initiative)
          })
      }

      return []
    }
  },
  components: {
    PlayerList
  }
}
</script>

<style>

</style>