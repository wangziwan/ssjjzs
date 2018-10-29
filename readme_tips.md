## import lib-flexible
实现原理:
1、通过屏幕的独立像素和设备的devicePixelRatio来动态改变html的font-size基准值
2、高倍屏下动态改变<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
解决痛点:
1、文本font-size问题
解：根据不同的dpr来设置不同的字体大小
2、背景图css-sprite
解：设置background-size值（以rem为单位）
3、1px问题
解：高倍屏下直接设置1px即可（因为已经通过meta标签进行缩放了），安卓端粗略写法可以通过transform: scaleY(0.5)来解决
## import fastclick
xxxxx

## mode: routerMode,
xxxxx

## strict: process.env.NODE_ENV !== 'production',   => main.js
xxxxx

## scrollBehavior (to, from, savedPosition) {       => main.js
xxxxx

## <keep-alive>  $route.meta.keepAlive      => App.vue
xxxx

## <transition name="router-fade" mode="out-in">      => App.vue
xxxx

## svgIcon     => App.vue
xxxx

## fetch axios
xxxxx

## promise
xxxx

## scss 
xxxx

## 大概念 ES6
xxxx

## 大概念 vue-router VueRouter router routes 
xxxx

## 大概念 Vuex Vuex.Store state getters mutations-types mutations actions
xxxx

## 配置编译环境和线上环境之间的切换
### baseUrl: 域名地址
### routerMode: 路由模式
### imgBaseUrl: 图片所在域名地址
xxx


