import {
	RECORD_ZIXUNSTATUS,
	RECORD_STRATEGYSTATUS
}from './mutation-types.js';
export default {
	[RECORD_ZIXUNSTATUS](state,payload){
		state.zixunStatus = payload;
	},
	[RECORD_STRATEGYSTATUS](state,payload){
		state.strategyStatus = payload;
	}
}