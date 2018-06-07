import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Information from '@/views/information'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    }
  ]
})
