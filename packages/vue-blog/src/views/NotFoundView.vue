<template>
  <div class="not-found-container">
    <header-item></header-item>
    <h2>Page Not Found</h2>
  </div>
</template>

<script>
import HeaderItem from '../components/HeaderItem.vue'

export default {
  name: 'NotFoundView',
  components: {
    HeaderItem,
  },
}
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  position: relative;
  text-align: center;
  border: 3px solid rgba(0, 0, 0, 0.051);
  border-radius: 1rem;
  color: #2c3e50;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}
</style>
