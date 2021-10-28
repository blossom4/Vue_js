import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import TheLunch from '@/views/TheLunch.vue'
import TheLotto from '@/views/TheLotto.vue'
import Youtube from '@/views/Youtube.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
