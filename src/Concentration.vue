<template>
    <div>
        <div span v-if="concentration && concentration.name">
            <span class="tag is-info">{{ concentration.name }}</span>
        </div>
        <div v-else>-</div>
    </div>
</template>

<script>
export default {
  props: {
    concentration: {
      type: Object,
      required: false
    }
  }
}
</script>