import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import componentsA from '@/components/componentsA'
import componentsB from '@/components/componentsB'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'componentsA',
      component: componentsA
    },
    {
      path: '/componentsA',
      name: 'componentsA',
      component: componentsA
    },
    {
      path: '/componentsB',
      name: 'componentsB',
      component: componentsB
    }

  ]
})
