import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Home from '@/views/Home.vue'
import Movie from '@/views/Movie.vue'
import About from '@/views/About.vue'
import TodoList from '@/views/TodoList.vue'
import TheLunch from '@/views/TheLunch.vue'
import TheLotto from '@/views/TheLotto.vue'
import Youtube from '@/views/Youtube.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/lunch',
    name: 'Lunch',
    component: TheLunch
  },
  {
    path: '/lotto',
    name: 'Lotto',
    component: TheLotto
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
