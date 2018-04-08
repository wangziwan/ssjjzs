import Axios from 'axios';
const cdnUrl='https://www.easy-mock.com/mock/5a68269de91af545282b6be8/ssjjzs/';
/*
 * notMock 是否不走easyMock数据接口 
 * @param true：不走 | 默认 ：走
*/

var fetch=function(method='GET',url='',data={},sucCb,failCb,notMock=''){
	if(!notMock) {
		return Axios({
			method: method,
			url: cdnUrl + url,
			data: data
		})
		.then(sucCb)
		.catch(failCb);
	} else {
		return Axios({
			method: method,
			url: url,
			data: data
		})
		.then(sucCb)
		.catch(failCb);
	}
}
export {
	fetch
}