<template>
	<div class="scoreMall">
		<child-title :title="title"></child-title>
		<div class="info">
			<div class="top">
				<a href="">规则</a>
				<div class="img">
					<img :src="userInfo.image" alt="">	
				</div>
				<a href="">签到</a>
			</div>
				
			<h3>{{userInfo.name?userInfo.name:'未登录'}}</h3>
			
			<ul v-if="userInfo.loginStatus">
				<li>ID：<span>{{userInfo.id}}</span></li>
				<li>积分：<span>{{userInfo.score}}</span></li>
			</ul>
		</div>
		<ul class="goodsList">
			<li v-for='item in items'>
				<img :src="item.image" alt="">
				<div class="goodsInfo">
					<h3>{{item.title}}</h3>
					<p>{{item.desc}}</p>
					<span><i>{{item.score}}</i>积分</span>
				</div>
				<button>兑换</button>
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	import childTitle from '../../components/childTitle.vue'
	import {fetch} from '../../config/fetch.js'
	export default{
		components:{
			childTitle
		},
		data(){
			return {
				title:'积分商城',
				items:[]
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		mounted(){
			fetch('GET','scoreMall')
			.then((response)=>{
				this.items=response.data.data;
			})
			.then((reject)=>{
				console.log(reject);
			})
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
	.scoreMall{
		width:100%;
		padding-bottom:1.32rem;
		& .info{
			width:100%;
			background:url('../../../static/images/zhanchang/rankTopBg.jpg') no-repeat center top;
			background-size:100%;
			padding-bottom:0.68rem;
			& .top{
				display:flex;
				justify-content:center;
				align-items:center;
				& a{
					width:1.32rem;
					height:1.32rem;
					border-radius:50%;
					display:flex;
					align-items:center;
					justify-content:center;
					color:#fff;
					&:nth-child(1){
						background:#333;
					}
					&:nth-child(3){
						background:#d89d0e;
					}
				}
				& .img{
					padding: 0.28rem 0;
					margin:0 1.32rem;
					width:2.12rem;
					height:2.12rem;
					& img{
						display:block;
						width:100%;
						height:100%;
						border-radius:50%;
					}
				}
				
			}
			& h3{
				color:#fff;
				text-align:center;
				.font(18px,30px);
				[data-dpr="2"] &{
					.font(36px,60px)
				}
				[data-dpr="3"] &{
					.font(54px,90px)
				}
			}
			& ul{
				display:flex;
				justify-content:space-between;
				& li{
					color:#516788;
					flex:1;
					box-sizing:border-box;
					.font(12px,20px);
					[data-dpr="2"] &{
						.font(24px,40px)
					}
					[data-dpr="3"] &{
						.font(36px,60px)
					}
					& span{
						color:#fcba08;
					}
					&:nth-child(1){
						text-align:right;
						padding-right:0.28rem;
					}
					&:nth-child(2){
						padding-left:0.28rem;
						text-align:left;
					}
				}
			}
		}
		& .goodsList{
			padding:0 0.28rem;
			& li{
				padding:0.28rem 0;
				border-bottom:1px solid #eaeaea;
				display:flex;
				justify-content:space-between;
				& img{
					width:3.08rem;
				}
				& .goodsInfo{
					width:4.0rem;
					& h3{
						font-size:0.4rem;
						color:#32393f;
						font-weight:bold;					
					}
					& p{
						font-size:0.32rem;
						color:#999;
					}
					& span{
						display:block;
						color:#999;
						.font(12px,16px);
						[data-dpr="2"] &{
							.font(24px,32px)
						}
						[data-dpr="3"] &{
							.font(36px,48px)
						}
						& i{
							color:#ee2828;
							.font(14px,16px);
							[data-dpr="2"] &{
								.font(28px,32px)
							}
							[data-dpr="3"] &{
								.font(42px,48px)
							}
						}
					}
				}
				& button{
					padding:0 0.4rem;
					border:1px solid #d89d0e;
					background:none;
					color:#d89d0e;
					.font(12px,24px);
					[data-dpr="2"] &{
						.font(24px,48px)
					}
					[data-dpr="3"] &{
						.font(36px,72px)
					}
				}
			}
		}
	}
	
</style>