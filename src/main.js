// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import directive from './config/directive'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
const router=new VueRouter({
	routes,
	scrollBehavior(to,from,savePosition) {
		if(savePosition) {
			return savePosition
		} else {
			if(from.meta.keepAlive) {
				from.meta.savePosition = documment.body.scrollTop;
			}
			return {x:0,y:to.meta.savePosition || 0}
		}
	}
})
new Vue({
  /*el: '#app',*/
  router,
  store
}).$mount('#app')
