<template>
  <div>
    <div class="input-group mb-3">
      <input v-model="input" @keyup.enter="createTodo" type="text" class="form-control" placeholder="">
      <button @click="createTodo" class="btn btnG btn-outline-secondary" type="button" id="button-addon2">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function() {
    return {
      input: '',
    }
  },
  methods: {
    createTodo: function() {
      const todoItem = {
        title: this.input,
        isCompleted: false,
      }
      if (this.input.trim() != '') {
        todoItem.title = todoItem.title.trim()
        this.$store.dispatch('createTodo', todoItem)
      }
      this.input = ''
    }
  }
}
</script>

<style>

</style>