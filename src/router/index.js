import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TrueFalseQuiz from '../components/true-false-quiz/Main.vue'
import MultipleChoiceQuiz from '../components/multiple-choice-quiz/Main.vue'
import RandomQuiz from '../components/random-quiz/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/true-false-quiz',
    name: 'TrueFalseQuiz',
    component: TrueFalseQuiz
  },
  {
    path: '/multiple-choice-quiz',
    name: 'MultipleChoiceQuiz',
    component: MultipleChoiceQuiz
  },
  {
    path: '/random-quiz',
    name: 'RandomQuiz',
    component: RandomQuiz
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
