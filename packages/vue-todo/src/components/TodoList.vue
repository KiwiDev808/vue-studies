<template>
  <main class="todo-list-wrapper">
    <todo-list-column
      label="Todo"
      :todoList="notStartedTodos"
      :color="TODO_COLOR.TODO"
      @item-dropped="onDrop($event, TODO_STATUS.TODO)"
      @dragover.prevent
      @dragenter.prevent
      :dragFunc="startDrag"
    ></todo-list-column>
    <todo-list-column
      label="Doing"
      :todoList="onProgressTodos"
      :color="TODO_COLOR.DOING"
      @item-dropped="onDrop($event, TODO_STATUS.DOING)"
      @dragover.prevent
      @dragenter.prevent
      :dragFunc="startDrag"
    ></todo-list-column>
    <todo-list-column
      label="Done"
      :todoList="finishedTodos"
      :color="TODO_COLOR.DONE"
      @item-dropped="onDrop($event, TODO_STATUS.DONE)"
      @dragover.prevent
      @dragenter.prevent
      :dragFunc="startDrag"
    ></todo-list-column>
  </main>
</template>

<script>
import { TODO_COLOR, TODO_STATUS } from '@/constants/todo'
import TodoListColumn from './TodoListColumn.vue'

export default {
  props: {
    todoList: {
      required: true,
      type: Array,
    },
  },
  data: function () {
    return {
      TODO_COLOR,
      TODO_STATUS,
    }
  },
  components: {
    TodoListColumn,
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, status) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.todoList.find((item) => item.id == itemID)
      item.status = status
    },
  },
  computed: {
    notStartedTodos() {
      return this.todoList.filter((todo) => {
        return todo.status === TODO_STATUS.TODO
      })
    },
    onProgressTodos() {
      return this.todoList.filter((todo) => {
        return todo.status === TODO_STATUS.DOING
      })
    },
    finishedTodos() {
      return this.todoList.filter((todo) => {
        return todo.status === TODO_STATUS.DONE
      })
    },
  },
}
</script>

<style scoped>
.todo-list-wrapper {
  padding: 0 2rem;
  flex: 1;
  display: flex;
  justify-content: space-around;
}
</style>
