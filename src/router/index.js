import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import CoursesDashboard from '../components/CoursesDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/courses-dashboard',
    name: 'CoursesDashboard',
    component: CoursesDashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
