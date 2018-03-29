import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex);
const state={
	userInfo:{
		name:'psk',
		image:'http://www.w3cplus.com/sites/default/files/blogs/2015/1511/yiboqr.png',
		id:1231231231,
		score:1200,
		tel:15757164961,
		area:'电信一区',
		trench:'4399',
		loginStatus:true
	},//用户信息
	comments:{},//用户评论
	zixunStatus:0,
	strategyStatus:0,
	saishiStatus:0,
	zhiboStatus:0,
}
export default new Vuex.Store({
	state,
	actions,
	mutations
})