<template>
    <div class="tag" v-bind:class="style">
        <span>{{ condition.name }}</span>
        <div v-if="condition.countdown">        
            <span>&nbsp;</span>
            <span>({{ condition.countdown }})</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    condition: {
      type: Object,
      required: true
    }
  },
  computed: {
    style() {
        if (this.condition.isPenalty) {
            return "is-danger"
        }

        if (this.condition.isBonus) {
            return "is-success"
        }
        
        return "is-info"
    }
   },
}
</script>