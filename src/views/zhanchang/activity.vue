<template>
	<div class="activity">
		<child-title :title='title'></child-title>
		<list :option="options"></list>
	</div>
</template>
<script>
	import list from '../../components/list.vue'
	import {fetch} from '../../config/fetch.js'
	import childTitle from '../../components/childTitle'
	export default{
		components:{
			childTitle,
			list
		},
		data(){
			return {
				title:'游戏活动',
				options:[],
			}
		},
		mounted(){
			fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zuixinContent`)
			.then((response)=>{
				this.options=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			}); 
		},
		methods:{
			gotoBack(){
        		this.$router.go(-1);
        	},
		}
	}
</script>
<style scoped lang="less">
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
		height:@line;
		border-radius:@line/2;
	}

	.activity{
		padding-bottom:1.32rem;
	}
</style>