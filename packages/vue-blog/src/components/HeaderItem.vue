<template>
  <header class="header-container">
    <img class="header-img" src="../assets/logo.png" alt="Vue logo" />
    <h1 class="header-title">Vue Blog</h1>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header-container {
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 1;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
  width: 100%;
  min-height: 45px;
  max-height: 45px;
  background-color: #c7c7c7b0;
}

.header-img {
  width: 40px;
}

.header-title {
  font-size: 3rem;
  padding-top: 1rem;
  margin: 0;
}
</style>
