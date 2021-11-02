import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default new Vuex.Store({
  state: {
    // Movie State
    movies: [],
    message: 'Search for the Movie Title!',
    movieListLoading: false,
    selectMovie: null,
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
    videoListLoading: false,
  },
  mutations: {
    // Movie Mutations
    SEARCH_MOVIES(state, Search) {
      state.movies = Search
    },
    ADD_MOVIES(state, Search) {
      for (let i = 0; i < 10; i += 1) {
        state.movies.push(Search[i])
      }
    },
    GET_MOVIE_DETAIL(state, movieInfo) {
      state.selectMovie = movieInfo
    },
    RESET_MOVIES(state) {
      state.movies = []
    },
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
    // Movie Actions
    searchMovies(context, payload) {
      if (this.state.movieListLoading) {
        return
      }

      this.state.movieListLoading = true
      this.state.movies = []
      this.state.message = ''

      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'
      const pageLength = Math.ceil(number / 10)

      for (let page = 1; page < pageLength + 1; page += 1) {
        axios ({
          methods: 'get',
          url: `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`,
        })
          .then((res) => {
            if (page == 1) {
              context.commit('SEARCH_MOVIES', _.uniqBy(res.data.Search, 'imdbID'))
            } else {
              context.commit('ADD_MOVIES', _.uniqBy(res.data.Search, 'imdbID'))
            }
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            this.state.movieListLoading = false
          }) 
          
      }
    },
    getMovieDetail(context, payload) {
      const OMDB_API_KEY = '7035c60c'
      const { imdbID } = payload
      console.log(imdbID)
      axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`,
      })
        .then((res) => {
          console.log(res.data)
          context.commit('GET_MOVIE_DETAIL', res.data)
        })
    },
    // resetMovies(context) {

    // },
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
      if (this.state.videoListLoading) {
        return
      }
      this.state.videoListLoading = true
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
        })
        .finally(() => {
          this.state.videoListLoading = false
        })
    },
    selectVideo: function(context, video) {
      context.commit('SELECT_VIDEO', video)
    },
  },
  getters: {
    // Movie Getters
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    },
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
    videoURL: function(state) {
      if (state.selectVideo) {
        const videoId = state.selectVideo.id.videoId
        return `https://www.youtube.com/embed/${videoId}`
      }
    },
    videoTitle: function(state) {
      if (state.selectVideo) {
        return _.unescape(state.selectVideo.snippet.title) 
      }
    },
    videoDescription: function(state) {
      if (state.selectVideo) {
        return _.unescape(state.selectVideo.snippet.description)
      }
    },
    videoChannelTitle: function(state) {
      if (state.selectVideo) {
        return _.unescape(state.selectVideo.snippet.channelTitle)
      }
    },
    videoPublishedAt: function(state) {
      if (state.selectVideo) {
        return _.unescape(state.selectVideo.snippet.publishedAt).substring(0, 10)
      }
    },
  },
  modules: {
  }
})
