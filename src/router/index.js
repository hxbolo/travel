import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../../src/page/home/Home'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    
    {
      path: '/home',
      component:Home
   }
  ]
})
