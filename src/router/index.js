// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
//import zixun from '@/views/zx'
// import zuixin from '@/views/zixun/zuixin'
// import xinwen from '@/views/zixun/xinwen'
// import zhanchang from '@/views/zc'
// import saishi from '@/views/ss'
// import zhibo from '@/views/zb'
const helloWorld = r => require.ensure([],() => r(require('@/components/HelloWorld')),'helloWorld');
const zixun = r => require.ensure([],() => r(require('@/views/zx')),'zixun');
const zuixin = r => require.ensure([],() => r(require('@/views/zixun/xinwen')),'zuixin');
const xinwen = r => require.ensure([],() => r(require('@/views/zixun/xinwen')),'xinwen');
const zhanchang = r => require.ensure([],() => r(require('@/views/zc')),'zhanchang');
const saishi = r => require.ensure([],() => r(require('@/views/ss')),'saishi');
const zhibo = r => require.ensure([],() => r(require('@/views/zb')),'zhibo');

export default [{
    path:'/',
    component:App,
    children:[
      {
        path: '',
        name: 'HelloWorld',
        component: helloWorld
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

