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
const armoury = r => require.ensure([],() => r(require('@/views/zhanchang/armoury')),'armoury');
const armouryAll = r => require.ensure([],() => r(require('@/views/zhanchang/armouryAll')),'armouryAll');
const armouryChoose = r => require.ensure([],() => r(require('@/views/zhanchang/armouryChoose')),'armouryChoose');
const character = r => require.ensure([],() => r(require('@/views/zhanchang/character')),'character');
const characterDetail = r => require.ensure([],() => r(require('@/views/zhanchang/characterDetail')),'characterDetail');
const map = r => require.ensure([],() => r(require('@/views/zhanchang/map')),'map');
const mapDetail = r => require.ensure([],() => r(require('@/views/zhanchang/mapDetail')),'mapDetail');
const rank = r => require.ensure([],() => r(require('@/views/zhanchang/rank')),'rank');
const strategy = r => require.ensure([],() => r(require('@/views/zhanchang/strategy')),'strategy');
const strategies = r => require.ensure([],() => r(require('@/views/zhanchang/strategies')),'strategies');
/*const gsjj = r => require.ensure([],() => r(require('@/views/zhanchang/gsjj')),'gsjj');
const djjx = r => require.ensure([],() => r(require('@/views/zhanchang/djjx')),'djjx');
const wjxd = r => require.ensure([],() => r(require('@/views/zhanchang/wjxd')),'wjxd');*/
const nearby = r => require.ensure([],() => r(require('@/views/zhanchang/nearby')),'nearby');
const activity = r => require.ensure([],() => r(require('@/views/zhanchang/activity')),'activity');
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
          component:latest,
          meta:{keepAlive:true}
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
        path: 'zhanchang/armoury',
        component: armoury,
        children:[{
          path:'all',
          component:armouryAll
        },{
          path:'choose',
          component:armouryChoose
        }]
      },{
          path:'zhanchang/character',
          component:character
      },{
          path:'zhanchang/character/:id',
          component:characterDetail
      },{
          path:'zhanchang/map',
          component:map
      },{
          path:'zhanchang/map/:id',
          component:mapDetail
      },{
          path:'zhanchang/rank',
          component:rank
      },{
          path:'zhanchang/strategy',
          component:strategy,
/*          children:[{
            path:':id',
            component:strategies,
            meta:{keepAlive:true}
          }]*/
      },{
        path: '/zhanchang/nearby',
        component: nearby
      },{
        path: '/zhanchang/activity',
        component: activity
      },{
        path: 'saishi',
        component: saishi
      },{
        path: 'zhibo',
        component: zhibo
      }
    ]
  }]
