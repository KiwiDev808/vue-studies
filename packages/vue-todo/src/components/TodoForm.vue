<template>
  <form>
    <section>
      <label for="todoContent">Content</label>
      <input v-model="todoContent" id="todoContent" placeholder="Content" />

      <label for="todoPriority">Priority</label>
      <select v-model="todoPriority" id="todoPriority" placeholder="Priority">
        <option :value="TODO_PRIORITY.LOW">{{ TODO_PRIORITY.LOW }}</option>
        <option :value="TODO_PRIORITY.MEDIUM">
          {{ TODO_PRIORITY.MEDIUM }}
        </option>
        <option :value="TODO_PRIORITY.HIGH">{{ TODO_PRIORITY.HIGH }}</option>
      </select>
    </section>
    <button @click.prevent="createTodo">Criar</button>
  </form>
</template>
<script>
import { TODO_PRIORITY, TODO_STATUS } from '@/constants/todo'

export default {
  data() {
    return {
      todoContent: '',
      todoPriority: TODO_PRIORITY.LOW,
      TODO_PRIORITY,
    }
  },
  emits: ['newTodo'],
  methods: {
    createTodo: function () {
      const todo = {
        id: String(Math.trunc(Math.random() * 1000000)),
        content: this.todoContent,
        status: TODO_STATUS.TODO,
        priority: this.todoPriority,
      }
      this.$emit('new-todo', todo)
      this.resetForm()
    },
    resetForm: function () {
      this.todoContent = ''
    },
  },
}
</script>
