<template>
    <span><img :src="player.avatarUrl" /></span>
</template>

<script>
export default {
  props: {
    baseReference: {
      type: Object,
      required: true
    }
  },
  firestore() {
    return {
      player: this.baseReference
    }
  }
}
</script>