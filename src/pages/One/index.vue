<template>
  <h1>name:{{ name }}</h1>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const name = ref('One')
    return {
      name,
    }
  },
})
</script>

<style scoped>
</style>