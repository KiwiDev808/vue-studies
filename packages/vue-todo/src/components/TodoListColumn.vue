<template>
  <section
    @dragover.prevent
    @dragenter.prevent
    @drop="$emit('item-dropped', $event)"
    class="todo-list-column-wrapper"
  >
    <h2>{{ label }}</h2>
    <section v-for="todo in todoList" :key="todo.id">
      <todo-card
        draggable
        @dragstart="dragFunc($event, todo)"
        :content="todo.content"
        :color="color"
        :priority="todo.priority"
      ></todo-card>
    </section>
  </section>
</template>

<script>
import TodoCard from './TodoCard.vue'

export default {
  emits: ['item-dropped'],
  components: {
    TodoCard,
  },
  props: {
    dragFunc: {
      required: true,
      type: Function,
    },
    label: {
      required: true,
      type: String,
    },
    todoList: {
      required: true,
      type: Array,
    },
    color: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
.todo-list-column-wrapper {
  flex: 1;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
}
</style>
