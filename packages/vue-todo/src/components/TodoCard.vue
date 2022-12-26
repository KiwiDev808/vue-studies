<template>
  <article
    draggable
    @dragstart="$emit('dragstart', $event)"
    class="todo-card"
    :style="cssProps"
  >
    <p>{{ content }}</p>

    <span class="todo-priority">{{ priority }}</span>
  </article>
</template>

<script>
import { TODO_PRIORITY_COLOR } from '@/constants/todo'
export default {
  props: {
    color: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    priority: {
      required: true,
      type: String,
    },
  },
  computed: {
    cssProps() {
      console.log(TODO_PRIORITY_COLOR[this.priority])
      return {
        '--card-bg': this.color,
        '--priority-color': TODO_PRIORITY_COLOR[this.priority],
      }
    },
  },
}
</script>

<style scoped>
.todo-card {
  position: relative;
  flex: 1;
  border-radius: 1.25rem;
  height: 150px;
  padding: 0.5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
}

.todo-priority {
  background: var(--priority-color);
  padding: 0.5rem 0.75rem;
  color: white;
  border: 1px solid rgba(97, 97, 97, 0.578);
  border-radius: 2rem;
  position: absolute;
  align-self: flex-end;
  right: 0.75rem;
}
</style>
