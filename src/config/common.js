export const formatDate=(date)=>{
	let year=date.getFullYear();
	let month=date.getMonth()+1;
	let dateDay=date.getDate();
	let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
	return year+"/"+month+"/"+dateDay+" "+hour+":"+minute+":"+second;
}