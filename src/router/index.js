import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import books from '@/components/books'
import games from '@/components/games'
import watch from '@/components/watch'
import music from '@/components/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/games',
      name: 'games',
      component: games
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
