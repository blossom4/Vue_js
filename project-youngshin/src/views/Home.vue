<template>
  <div class="d-flex justify-content-center">
    <div class="mt-5 mb-3 col-4">
      <div class="d-flex justify-content-between">
        <h3 class="">Todo List</h3>
        <p class="mt-2">진행률 {{ completedPercent }}%</p>
      </div>
      <TodoForm/>
      <TodoList/>
    </div>
  </div>
</template>

<script>
import TodoForm from '@/components/todolist/TodoForm'
import TodoList from '@/components/todolist/TodoList'

export default {
  name: 'Home',
  components: {
    TodoForm,
    TodoList,
  },
  computed: {
    completedCount: function() {
      return this.$store.getters.completedCount
    },
    todoCount: function() {
      return this.$store.state.todos.length
    },
    completedPercent: function() {
      if (this.$store.state.todos.length == 0) {
        return 0
      } 
      return Math.ceil((this.$store.getters.completedCount / this.$store.state.todos.length) * 100)
    }
  }
}
</script>

<style>

</style>