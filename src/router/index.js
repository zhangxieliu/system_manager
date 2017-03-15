import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import CompanyList from '@/components/CompanyList'
import CompanyCreate from '@/components/CompanyCreate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/company/list',
          name: 'CompanyList',
          component: CompanyList
        },
        {
          path: '/company/create',
          name: 'CompanyCreate',
          component: CompanyCreate
        }
      ]
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
