import {
	RECORD_ZIXUNSTATUS,
}from './mutation-types.js';
export default {
	[RECORD_ZIXUNSTATUS](state,zixunStatus){
		state.zixunStatus = zixunStatus;
	}
}