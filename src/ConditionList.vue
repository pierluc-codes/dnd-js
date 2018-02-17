<template>
    <div class="tags" v-if="conditions">
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
  components: {
    Condition,
  }
}
</script>