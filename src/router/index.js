import { createRouter, createWebHistory } from 'vue-router'
import home from './home'
import auth from './auth'
import profile from './profile'
import story from './story'
import friend from './friend'
import posts from './post'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...home, ...auth, ...profile, ...story, ...friend, ...posts]
})

export default router
