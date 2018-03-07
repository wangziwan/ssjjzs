import Axios from 'axios';
var getData=function(method='GET',url='',data={},sucCb,failCb){
	return Axios({
		method: method,
		url: url,
		data: data
	})
	.then(sucCb)
	.catch(failCb);
}
export {
	getData
}