<template>
	<div class="collect">
		<child-title :title="title"></child-title>
		<list :option='option'></list>	
		
	</div>
	
</template>
<script>
	import list from '../../components/list.vue'
	import {fetch} from '../../config/fetch.js'
	import childTitle from '../../components/childTitle.vue'
	export default{
		components:{
			list,
			childTitle
		},
		data(){
			return {
				title:'我的收藏',
				option:[],
			}
		},
		mounted(){
			console.log(1111,this.contents);
			if(this.contents==false){
							//资讯内容加载
				fetch('GET','zuixinContent')
				.then((response)=>{
					this.option=response.data.data;
					this.contents=response.data.data;
				})
				.catch((response)=>{
					console.log(response);
				})
			}else{
				console.log('缓存');
				this.option=this.contents;
			}

		}
	}
</script>