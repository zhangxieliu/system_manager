import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Home from '@/components/Home'
import JobList from '@/components/JobList'
import CompanyCreate from '@/components/CompanyCreate'
import CompanyList from '@/components/company/CompanyList'
import JobCreate from '@/components/job/JobCreate'
import CompanyInfo from '@/components/company/CompanyInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/job/list',
          name: 'JobList',
          component: JobList
        },
        {
          path: '/company/create',
          name: 'CompanyCreate',
          component: CompanyCreate
        },
        {
          path: '/company/create/:objectId',
          name: 'CompanyInfo',
          component: CompanyInfo
        },
        {
          path: '/company/list',
          name: 'CompanyList',
          component: CompanyList
        },
        {
          path: '/job/create',
          name: 'JobCreate',
          component: JobCreate
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
