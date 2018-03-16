<template>
	<div class="nearby">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>附近战友</h1>
		</header>
		<div class="search">
			<input type="text" placeholder="搜索好友昵称">
		</div>
		<ul class="content" v-load-more="loadMore">
			<li v-for="(content,index) in contents">
				<div class="img">
					<img :src="content.image" alt="">	
				</div>				
				<div class="info">
					<h4>{{content.name}}</h4>
					<span>{{content.title}}</span>					
				</div>
				<a href="javascript:void(0);" :class="{active:content.addStatus}">{{content.addStatus?'已加':'添加'}}</a>
			</li>
		</ul>
	</div>

</template>
<script>
	import {fetch} from '../../config/fetch.js'
	export default{
		data(){
			return {
				contents:[]
			}
		},
		mounted(){
			fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/nearby`)
			.then((response)=>{
				this.contents=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			});
		},
		methods:{
			gotoBack(){
				this.$router.go(-1);
			},
			loadMore(){
				if(this.preventRepeatReuqest){
					return;
				}
				this.preventRepeatReuqest=true;
				fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/nearby')
				.then((response)=>{
					this.contents.push(...response.data.data);
					this.preventRepeatReuqest=false;
				})
				.catch((reject)=>{
					console.log(reject);
					this.preventRepeatReuqest=false;
				})
				console.log('loadmore')
			}
		}

	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
		height:@line;
		border-radius:@line/2;
	}
	header{
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
				flex:1;
			}
		}
		& h1{
			flex:6;
		}
		&:after{
			content:"";
			flex:1;
		}
	}
	.nearby{
		padding-bottom:1.32rem;
		& .search{
			width:100%;
			box-sizing:border-box;
			padding:0.24rem 0.28rem;
			background:#26272c;
			& input{
				width:100%;
				background:#3f4144;
				text-align:center;
				color:#fff;
				display:block;
				height:0.8rem;
				border:0 none;
				border-radius:0.4rem;
				&::placeholder{
					color:#767b87;
				}
			}
		}
	}
	.content{
		width:100%;
		& li{
			padding:0.266667rem 0;
			margin:0 0.266667rem;
			border-bottom:1px solid #e2e2e2;
			display:flex;
			align-items:center;
			&:last-child{
				border:0 none;
			}
			& .img{
				flex:1;
				& img{
					width:100%;
					border-radius:50%;
				}
			}
			& .info{
				flex:3;
				padding:0 0 0 0.36rem;
				& h4{
					color:#32393f;
					.font(16px,24px);
					[data-dpr="2"] &{
						.font(32px,48px);
					}
					[data-dpr="3"] &{
						.font(48px,72px);
					}
				}
				& span{
					color:#9ea3a6;
					.font(12px,20px);
					[data-dpr="2"] &{
						.font(24px,40px);
					}
					[data-dpr="3"] &{
						.font(36px,60px);
					}
				}
			}
			& a{
				display:block;
				padding:0.04rem 0.32rem;
				background:#315acb;
				color:#fff;
				.font(16px,24px);
				[data-dpr="2"] &{
					.font(32px,48px);
				}
				[data-dpr="3"] &{
					.font(48px,72px);
				}
				&.active{
					background:#999;
				}
			}
		}
	}
</style>