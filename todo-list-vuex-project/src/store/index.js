import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
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
      const index = state.todos.indexOf(todoItem)
      let isCompleted = state.todos[index].completed
      state.todos[index].completed = !isCompleted
    },
  },
  actions: {
    // createTodo: function(context, todoItem) {
    //   context.commit('CREATE_TODO', todoItem)
    // }
    createTodo: function({ commit }, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodo: function({ commit }, todoItem) {
      commit('UPDATE_TODO', todoItem)
    },
  },
  getters: {
    completedTodosCount: function(state) {
      return state.todos.filter((todo) => {
        return todo.completed == true
      }).length
    }
  },
  modules: {
  }
})
