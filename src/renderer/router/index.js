import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/Dashboard/Dashboard').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings/Settings').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/About/About').default
    },
    {
      path: '/races',
      name: 'races',
      component: require('@/components/Races/Races').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
