<template>
  <nav class="action-bar-wrapper">
    <button @click="$emit('create')">Create</button>
  </nav>
</template>

<script>
export default {
  emits: ['create'],
}
</script>

<style scoped>
.action-bar-wrapper {
  padding: 1rem 2rem;
}
</style>
