import Axios from 'axios';
var fetch=function(method='GET',url='',data={},sucCb,failCb){
	return Axios({
		method: method,
		url: url,
		data: data
	})
	.then(sucCb)
	.catch(failCb);
}
export {
	fetch
}