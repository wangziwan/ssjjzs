import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
const helloWorld = r => require.ensure([],() => r(require('@/components/HelloWorld')),'helloWorld');
const zixun = r => require.ensure([],() => r(require('@/views/zx')),'zixun');
const latest = r => require.ensure([],() => r(require('@/views/zixun/latest')),'latest');
const news = r => require.ensure([],() => r(require('@/views/zixun/news')),'news');
const novel = r => require.ensure([],() => r(require('@/views/zixun/novel')),'novel');
const novelList = r => require.ensure([],() => r(require('@/views/zixun/novelList')),'novelList');
const novelDetail = r => require.ensure([],() => r(require('@/views/zixun/novelDetail')),'novelDetail');
const comic = r => require.ensure([],() => r(require('@/views/zixun/comic')),'comic');
const comicList = r => require.ensure([],() => r(require('@/views/zixun/comicList')),'comicList');
const comicDetail = r => require.ensure([],() => r(require('@/views/zixun/comicDetail')),'comicDetail');
const detail = r => require.ensure([],() => r(require('@/views/detail')),'detail');
const zhanchang = r => require.ensure([],() => r(require('@/views/zc')),'zhanchang');
const saishi = r => require.ensure([],() => r(require('@/views/ss')),'saishi');
const zhibo = r => require.ensure([],() => r(require('@/views/zb')),'zhibo');
/*import zixun from '@/views/zx'
import latest from '@/views/zixun/latest'
import news from '@/views/zixun/news'
import novel from '@/views/zixun/novel'
import novelList from '@/views/zixun/novelList'
import novelDetail from '@/views/zixun/novelDetail'
import comic from '@/views/zixun/comic'
import comicList from '@/views/zixun/comicList'
import comicDetail from '@/views/zixun/comicDetail'
import detail from '@/views/detail'
import zhanchang from '@/views/zc'
import saishi from '@/views/ss'
import zhibo from '@/views/zb'*/
/*Vue.use(Router)*/

export default [{
    path:'/',
    component:App,
    children:[
      {
        path: '',
        component: helloWorld
      },{
        path: 'detail/:id',
        component: detail
      },{
        path: 'novel/:id/:chapterId/detail',
        component: novelDetail
      },{
        path: 'comic/:id/:chapterId/detail',
        component: comicDetail
      },{
        path: 'zixun',
        component: zixun,
        children:[{
          path:'latest',
          component:latest
        },{
          path:'news',
          component:news
        },{
          path:'novel',
          component:novel,
        },{
          path:'novel/:id',
          component:novelList,
        },{
          path:'comic',
          component:comic
        },{
          path:'comic/:id',
          component:comicList
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
