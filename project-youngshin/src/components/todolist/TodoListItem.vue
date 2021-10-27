<template>
  <div class="d-flex justify-content-between">
    <div>• <span @click="updateTodo" :class="{ isCompleted: todo.isCompleted}" id="todolist">{{ todo.title }}</span></div>   
    <div @click="deleteTodo" class="btn">x</div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    },
    idx: {
      type: Number,
    }
  },
  methods: {
    deleteTodo: function() {
      const todoItem = this.todo
      this.$store.dispatch('deleteTodo', todoItem)
    },
    updateTodo: function() {
      const todoItem = this.todo
      this.$store.dispatch('updateTodo', todoItem)
    }
  }
}
</script>

<style scoped>
.form-check-input:checked {
  background-color: #42b983;
  border-color: #42b983;
}

.isCompleted {
  text-decoration-line: line-through;
}

#todolist {
  cursor: pointer;
}
</style>