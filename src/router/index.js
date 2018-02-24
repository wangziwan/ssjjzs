import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zixun from '@/views/zx'
import zhanchang from '@/views/zc'
import saishi from '@/views/ss'
import zhibo from '@/views/zb'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/zixun',
      name: 'zixun',
      component: zixun
    },{
      path: '/zhanchang',
      name: 'zhanchang',
      component: zhanchang
    },{
      path: '/saishi',
      name: 'saishi',
      component: saishi
    },{
      path: '/zhibo',
      name: 'zhibo',
      component: zhibo
    }

  ]
})
