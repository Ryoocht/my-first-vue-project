/* DEFINE OUR ROUTING RULES */
import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '@/views/NotesView.vue'
import QuizesView from '@/views/QuizesView.vue'
import QuizView from '@/views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'notes',
      path: '/notes',
      component: NotesView
    },
    {
      name: 'quizes',
      path: '/',
      component: QuizesView
    },
    {
      name: 'quiz',
      path: '/quizes/:id',
      component: QuizView
    }
  ]
})

export default router
