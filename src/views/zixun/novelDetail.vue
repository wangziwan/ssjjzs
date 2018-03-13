<template>
	<div class="novelDetail">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>生死狙击</h1>
		</header>
		<div class="content">
			{{content}}
		</div>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js';
	export default {
		data(){
			return {
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
		& header{
			position:fixed;
			left:0;
			top:0;
			width:100%;
			height:1.32rem;
			background: url("../../../static/images/footer_bg.jpg") no-repeat center top;
			background-size: cover;
			font-size:0.48rem;
			line-height:1.32rem;
			color:#fff;
			text-align:center;
			display:flex;
			& a{
				flex:1;
				font-size:0.48rem;
				display:flex;
				justify-content:center;
				&.goBack{
					flex:2;
				}
			}
			& h1{
				flex:8;
			}
			&::after{
				content:"";
				flex:1;
			}
		}
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
