import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import JobList from '@/components/JobList'
import CompanyCreate from '@/components/CompanyCreate'
import CompanyList from '@/components/company/CompanyList'
import JobAdd from '@/components/company/JobAdd'
import CompanyInfo from '@/components/company/CompanyInfo'

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
          path: '/company/job/add',
          name: 'JobAdd',
          component: JobAdd
        }
      ]
    }
  ]
})
