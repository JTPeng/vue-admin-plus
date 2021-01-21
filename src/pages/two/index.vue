<template>
  <h1>{{ name }}</h1>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const name = ref('Two')
    return {
      name,
    }
  },
})
</script>

<style scoped>
</style>