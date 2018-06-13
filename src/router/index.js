import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Information from '@/views/information'
import Ticket from '@/views/ticket'
import Scenery from '@/views/scenery'
import About from '@/views/about'

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
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: Scenery
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
