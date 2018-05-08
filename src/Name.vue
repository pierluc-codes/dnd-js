<template>
    <span>{{name}}</span>
</template>

<script>
export default {
  props: {
    baseReference: {
      type: Object,
      required: true
    },
    specificName: {
      type: String,
      required: false
    }
  },
  computed: {
    name() {
      return this.specificName || this.player.name 
    }
  },
  firestore() {
    return {
      player: this.baseReference
    }
  }
}
</script>