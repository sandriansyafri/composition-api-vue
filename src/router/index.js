import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailPost from '../views/DetailPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    props: true,
    name: 'DetailPost',
    component: DetailPost,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
