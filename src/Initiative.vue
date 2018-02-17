<template>
    <span>{{initiative}}</span>
</template>

<script>
export default {
  props: {
    initiative: {
      type: Number,
      required: true
    }
  }
}
</script>