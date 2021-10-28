import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default new Vuex.Store({
  state: {
    // Todo List State
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
    // Youtube State
    searchVideoResult: [],
    emptyVideoResult: [],
    selectVideo: null,
  },
  mutations: {
    // Todo List Mutations
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
    },
    // Youtube Mutations
    SEARCH_VIDEO: function(state, videos) {
      state.searchVideoResult = videos
    },
    SELECT_VIDEO: function(state, video) {
      state.selectVideo = video
    },
  },
  actions: {
    // Todo List Actions
    createTodo: function(context, todoItem) {
      context.commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
    },
    updateTodo: function(context, todoItem) {
      context.commit('UPDATE_TODO', todoItem)
    },
    // Youtube Actions
    searchVideo: function(context, q) {
      const params = {
        part: 'snippet',
        key: API_KEY,
        type: 'video',
        q,
        maxResults: 8,
      }
      axios ({
        methods: 'get',
        url: API_URL,
        params,
      })
        .then((res) => {
          context.commit('SEARCH_VIDEO', res.data.items)
          console.log(res.data.items)
        })
    },
    selectVideo: function(context, video) {
      context.commit('SELECT_VIDEO', video)
    },
  },
  getters: {
    // Todo List Getters
    completedCount: function(state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted == true
      }).length
    },
    completedTodos: function(state) {
      return state.todos.filter((todo) => {
        return todo.isCompleted == true
      })
    },
    // Youtube Getters
    videoURL: function (state) {
      if (state.selectVideo) {
        const videoId = state.selectVideo.id.videoId
        return `https://www.youtube.com/embed/${videoId}`
      }
    },
    videoTitle: function (state) {
      if (state.selectVideo) {
        return _.unescape(state.selectVideo.snippet.title) 
      }
    },
    videoDescription: function (state) {
      if (state.selectVideo) {
        return _.unescape(state.selectVideo.snippet.description)
      }
    },
  },
  modules: {
  }
})
