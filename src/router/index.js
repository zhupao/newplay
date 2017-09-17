import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '../components/homepage/Sidebar'
import LoginContent from '../components/logincon/Logincontent'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LoginContent',
      component: LoginContent
    },
    {
      path: '/index',
      name: 'Sidebar',
      component: Sidebar
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router
