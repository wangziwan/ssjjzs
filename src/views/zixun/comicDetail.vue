<template>
	<div class="comicDetail">
<!-- 		<header>
	<a class="iconfont icon-back" @click="gotoBack"></a>
	<h1>生死狙击</h1>
</header> -->
		<ul class="content">
			<li v-for="(item,index) in items">
				<img :src="item" alt="">
			</li>
		</ul>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js';
	export default {
		data(){
			return {
				items:[]
			}
		},
		mounted(){
			//加载资讯内容
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/comic/'+this.$route.params.id+'/'+this.$route.params.chapterId)
			.then((response)=>{
				this.items=response.data.data;
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
	.comicDetail{
		background:#000;
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
			padding:0.16rem 0.28rem 0;
			display:flex;
			justify-content:space-between;
			flex-flow:row wrap;
			& li{
				width:50%;
				padding-bottom:0.16rem;
				box-sizing:border-box;
				&:nth-child(odd){
					padding-right:0.08rem;
				}
				&:nth-child(even){
					padding-left:0.08rem;
				}
				& img{
					display:block;
					width:100%;
				}
			}
		}
	}
</style>
