import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import zixun from '@/views/zx'
import zuixin from '@/views/zixun/zuixin'
import xinwen from '@/views/zixun/xinwen'
import zhanchang from '@/views/zc'
import saishi from '@/views/ss'
import zhibo from '@/views/zb'
Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    component:App,
    children:[
      {
        path: '',
        name: 'HelloWorld',
        component: HelloWorld
      },{
        path: 'zixun',
        component: zixun,
        children:[{
          path:'zuixin',
          component:zuixin
        },{
          path:'xinwen',
          component:xinwen
        },{
          path:'zuixin',
          component:zuixin
        },{
          path:'zuixin',
          component:zuixin
        }]
      },{
        path: 'zhanchang',
        component: zhanchang
      },{
        path: 'saishi',
        component: saishi
      },{
        path: 'zhibo',
        component: zhibo
      }
    ]
  }]
})
