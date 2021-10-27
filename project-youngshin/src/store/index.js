import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Vue.js 복습', 
        isCompleted: false,
      },
      {
        title: '클라이밍 가기', 
        isCompleted: false,
      },
    ],
  },
  mutations: {
    CREATE_TODO: function(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO: function(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO: function(state, todoItem) {
      const todoStatus = todoItem.isCompleted
      const index = state.todos.indexOf(todoItem)
      state.todos[index].isCompleted = !todoStatus
    }
  },
  actions: {
    createTodo: function(context, todoItem) {
      context.commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
    },
    updateTodo: function(context, todoItem) {
      context.commit('UPDATE_TODO', todoItem)
    },
  },
  getters: {
    completedCount: function(state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted == true
      }).length
    },
    completedTodos: function(state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted == true
      })
    }
  },
  modules: {
  }
})
