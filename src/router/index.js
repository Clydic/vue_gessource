import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewGameView from '@/views/NewGameView.vue'
import LoadGameView from '@/views/LoadGameView.vue'
import GameView from '@/views/GameView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/newgame',
      name: 'newgame',
      component: NewGameView
    },
    {
      path: '/loadgame',
      name: 'loadgame',
      component: LoadGameView
    },
    {
      path:'/game/:name',
      name:'game',
      component:GameView
    }
  ]
})

export default router
