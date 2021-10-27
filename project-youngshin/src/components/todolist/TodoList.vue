<template>
  <div>
    <TodoListItem
      v-for="(todo, idx) in getAllTodos"
      :key="idx"
      :todo="todo"
      :idx="idx"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/todolist/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    getAllTodos: function() {
      return this.$store.state.todos
    },
    getCompletedTodos: function() {
      return this.$store.getters.completedTodos
    },
  }
}
</script>

<style>

</style>