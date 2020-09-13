import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Error404 from '../views/Error404.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:  {layout: "main"},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta:  {layout: "main"},
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    meta:  {layout: "login"},
    component: Login
  },
  {
    path: '*',
    name: '404',
    meta:  {layout: "error"},
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
