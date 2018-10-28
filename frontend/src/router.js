import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Processes from './views/Processes.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/processes',
      name: 'processes',
      component: Processes,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ]
})
