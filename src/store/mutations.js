import {
	RECORD_ZIXUNSTATUS,
	RECORD_STRATEGYSTATUS,
	RECORD_SAISHISTATUS,
	RECORD_ZHIBOSTATUS,
	ALTER_NICKNAME,
	ALTER_TEL,
	SHOWFOOT
}from './mutation-types.js';
export default {
	[RECORD_ZIXUNSTATUS](state,playload){
		state.zixunStatus = playload;
	},
	[RECORD_STRATEGYSTATUS](state,playload){
		state.strategyStatus = playload;
	},	
	[RECORD_SAISHISTATUS](state,playload){
		state.saishiStatus = playload;
	},
	[RECORD_ZHIBOSTATUS](state,playload){
		state.zhiboStatus=playload;
	},
	[ALTER_NICKNAME](state,playload){
		state.userInfo.name=playload;
	},
	[ALTER_TEL](state,playload){
		state.userInfo.tel=playload;
	},
	[SHOWFOOT](state,playload){
		state.showFoot=playload;
	}
}