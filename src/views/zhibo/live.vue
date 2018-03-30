<template>
	<videos-list :option='options'></videos-list>
</template>
<script>
	import videosList from '../../components/videosList.vue'
	import {fetch} from '../../config/fetch.js'
	export default{
		components:{
			videosList
		},
		data(){
			return {
				options:[{
					image:'',
					title:'一将功成万骨枯',
					date:'2016-05-26',
					avatar:'',
					fans:2000,
					id:100000,
					name:'sak几个'
				}]
			}
		},
		mounted(){
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zhibo/live')
			.then((response)=>{
				this.options=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			})
		}
	}
</script>