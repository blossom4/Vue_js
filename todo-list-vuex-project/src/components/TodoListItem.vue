<template>
  <div>
    <div class="content" style="margin-top: 10px;">
      <span @click="updateTodo" :class="{ completed: todo.completed }">{{ todo }}&nbsp;</span>
      <button @click="deleteTodo">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    deleteTodo: function() {
      const todoItem = this.todo
      this.$store.dispatch('deleteTodo', todoItem)
    },
    updateTodo: function() {
      const todoItem = this.todo
      this.$store.dispatch('updateTodo', todoItem)
      if (this.todo.completed == true) {
        console.log(this.todo)
      }
    }
  }
}
</script>

<style scoped>
  .content {
    cursor: pointer;
  }
  .completed{
    text-decoration-line: line-through;
  }
</style>