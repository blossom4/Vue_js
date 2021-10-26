<template>
  <div id="app">
    
    <TodoForm/>
    <h4>완료O: {{ completedTodosCount }}</h4>
    <h4>완료X: {{ uncompletedTodosCount }}</h4>
    <TodoList/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  computed: {
    completedTodosCount: function() {
      return this.$store.getters.completedTodosCount
    },
    uncompletedTodosCount: function() {
      return this.$store.state.todos.length - this.$store.getters.completedTodosCount
    }
  },
}
</script>

<style>
@font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  font-family: 'NanumSquareRound';
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
