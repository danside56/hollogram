import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '@/views/AccueilView.vue'
import RegisterView from '@/views/RegistreView.vue'
import LoginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AccueilView
    },
    {
      path: '/register',
      name: 'register',
      component : RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component : LoginView
    }
  ]
})

export default router
