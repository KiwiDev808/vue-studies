<template>
  <button @click="emitClick()" class="create-post-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['click'],
  methods: {
    emitClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.create-post-btn {
  all: unset;
  cursor: pointer;
  position: fixed;
  top: calc(100vh - 7rem);
  right: calc(50vw - 33rem);
  color: white;
  font-size: 2.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50%;
  box-shadow: 1.5px 2px 3px rgb(69, 69, 69);
  background-color: rgba(25, 113, 7, 0.809);
}

.create-post-btn:active {
  box-shadow: inset 1px 0px 2px rgb(69, 69, 69);
}
</style>
