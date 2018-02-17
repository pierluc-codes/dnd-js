<template>
    <font-awesome-icon :icon="icon" :class="style" />
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid'

export default {
  props: {
    reaction: {
      type: Boolean,
      required: true
    }
  },
   computed: {
    icon() {
        return this.reaction ? faCheck : faTimes
    },
    style() {
        return this.reaction ? "available" : "unavailable"
    }
   },
   components: {
    FontAwesomeIcon,
    faCheck,
    faTimes
   }
}
</script>
<style lang="scss" scoped>
.unavailable {
    color: red
}

.available {
    color: green
}
</style>