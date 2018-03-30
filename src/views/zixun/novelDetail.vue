<template>
	<div class="novelDetail">
		<child-title :title='title'></child-title>
		<div class="content">
			{{content}}
		</div>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js';
	import childTitle from '../../components/childTitle.vue'
	export default {
		components:{
			childTitle
		},
		data(){
			return {
				title:'生死狙击',
				content:null
			}
		},
		mounted(){
			//加载资讯内容
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/novel/'+this.$route.params.id+'/'+this.$route.params.chapterId)
			.then((response)=>{
				this.content=response.data.data;
			})
			.catch((reject)=>{
				console.log(reject);
			})
		},
		methods:{
			gotoBack(){
				this.$router.go(-1);
			},
		}
	}
</script>
<style scoped lang='less'>
	.novelDetail{
		& .content{
			padding:1.32rem 0.28rem 0;
			font-size:14px;
			line-height:24px;
		}
		[data-dpr="2"] & .content{
			font-size:28px;
			line-height:50px;
		}
		[data-dpr="3"] & .content{
			font-size:42px;
			line-height:72px;
		}
	}
</style>
