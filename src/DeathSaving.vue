<template>
    <div> 
        <span>
            <font-awesome-icon icon="thumbs-up" />
            {{success}}
        </span>
        <span>
            <font-awesome-icon icon="thumbs-down" />
            {{failure}}            
        </span>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    deathSaving: {
      type: Object,
      required: false
    }
  },
  computed: {
      success() {
          return (this.deathSaving) ? this.deathSaving.success : 0
      },
      failure() {
          return (this.deathSaving) ? this.deathSaving.failure : 0
      }
  },
  components: {
      FontAwesomeIcon
  }
}
</script>