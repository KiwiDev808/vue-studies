<template>
  <div class="app-container">
    <home-header></home-header>
    <action-bar @create="showModal = true"></action-bar>
    <todo-list :todo-list="todoList"></todo-list>
    <modal-form v-if="showModal" @close="showModal = false">
      <h2 slot="header">Create new todo</h2>
      <todo-form slot="body" @new-todo="createTodo"></todo-form
    ></modal-form>
  </div>
</template>

<script>
import ActionBar from '@/components/ActionBar.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import ModalForm from '@/components/ModalForm.vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

import { TODO_PRIORITY, TODO_STATUS } from '@/constants/todo'
export default {
  components: {
    HomeHeader,
    ActionBar,
    TodoList,
    TodoForm,
    ModalForm,
  },
  data: function () {
    return {
      showModal: false,
      todoList: [
        {
          id: 1,
          content: 'Some random title [todo]',
          status: TODO_STATUS.TODO,
          priority: TODO_PRIORITY.LOW,
        },
        {
          id: 2,
          content: 'Some random title [doing]',
          status: TODO_STATUS.DOING,
          priority: TODO_PRIORITY.LOW,
        },
        {
          id: 3,
          content: 'Some random title [done]',
          status: TODO_STATUS.DONE,
          priority: TODO_PRIORITY.LOW,
        },
      ],
    }
  },
  methods: {
    createTodo(todo) {
      this.todoList.push(todo)
      this.showModal = false
    },
  },
}
</script>

<style scoped>
.app-container {
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  min-height: calc(100vh - 1.5rem);
  border-radius: 2rem;
  margin: 0.75rem auto;
  background-color: var(--inner__background);
}
</style>
