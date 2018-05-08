<template>
    <div class="tags" v-if="hasConditions">
        <Condition v-for="condition in conditions" v-bind:key="condition.id" :condition="condition" />
    </div>
    <div v-else>-</div>
</template>

<script>
import Condition from './Condition'

export default {
  props: {
    conditions: {
      type: Array,
      required: false
    }
  },
  computed: {
    hasConditions() {
        return this.conditions && this.conditions.length > 0
    }
  },
  components: {
    Condition,
  }
}
</script>