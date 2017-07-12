import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import CallLaraApi from '@/components/CallLaraApi'
import Table from '@/components/Table'
import ApiAdd from '@/components/ApiAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'apiAdd',
      component: ApiAdd
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/Table',
      name: 'table',
      component: Table
    }
  ]
})
