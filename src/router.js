import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/App',
      name: 'App',
      component: App
    },
    {
      path: '/About/:name',
      name: 'About',
      component: About
    }
  ]
})