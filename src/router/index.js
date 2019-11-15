import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cimema'
import mineRouter from './mine'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
    	path:'/*',
    	redirect:'/movie'
    }
  ]
})

export default router
