import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../views/IndexPage.vue'
import TodoApp from '../components/TodoApp.vue'
import TimerApp from '../components/TimerApp.vue'

const routes = [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/todoapp',
      name: 'Todoapp',
      component: TodoApp
    },
    {
      path: '/timerapp',
      name: 'TimerApp',
      component: TimerApp
    }

  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router