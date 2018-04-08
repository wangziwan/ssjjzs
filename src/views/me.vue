<template>
	<div class="me">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>我的</h1>
			<a class="iconfont icon-setting" @click="gotoAddress({path:'/setting'})"></a>
		</header>
		<div class="info">
			<div class="img">
				<img :src="userInfo.image" alt="">	
			</div>
			<h3>{{userInfo.name?userInfo.name:'未登录'}}</h3>
			<ul v-if="userInfo.loginStatus">
				<li>ID：<span>{{userInfo.id}}</span></li>
				<li>积分：<span>{{userInfo.score}}</span></li>
			</ul>
		</div>
		<ul class="meList">
			<li>
				<i class="iconfont icon-character"></i>
				<a @click="gotoAddress({path:'/me/gameAccount'})">游戏角色</a>
			</li>
			<li>
				<i class="iconfont icon-exploit"></i>
				<a @click="gotoAddress({path:'/me/exploit'})">个人战绩</a>
			</li>
			<li>
				<i class="iconfont icon-friend"></i>
				<a @click="gotoAddress({path:'/me/friend'})">我的好友</a>
			</li>
			<li>
				<i class="iconfont icon-score"></i>
				<a @click="gotoAddress({path:'/me/scoreMall'})">积分商城</a>
			</li>
			<li>
				<i class="iconfont icon-comment"></i>
				<a @click="gotoAddress({path:'/me/comment'})">我的评论</a>
			</li>
			<li>
				<i class="iconfont icon-collect"></i>
				<a @click="gotoAddress({path:'/me/collect'})">我的收藏</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import {fetch} from '../config/fetch.js'
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				myInfo:{
				},
				rank:[]
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		mounted(){
			fetch('POST','myRank')
			.then((response)=>{
				console.log(response.data.data)
				this.myInfo=response.data.data;
			})
		},
		methods:{
			gotoBack(){
				this.$router.go(-1);
			},
			gotoAddress(path){
				if(/setting/i.test(path.path)){
					this.$router.push(path);
				}else{
					if(this.userInfo.loginStatus){
						this.$router.push(path);
					}else{
						this.$router.push({path:'/login'})
					}
				}
				
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
	.me{
		width:100%;
		& .info{
			width:100%;
			background:url('../../static/images/zhanchang/rankTopBg.jpg') no-repeat center top;
			background-size:100%;
			padding-bottom:0.68rem;
			& .img{
				width:20%;
				padding: 0.28rem 0;
				margin:0 auto;
				& img{
					display:block;
					width:100%;
					border-radius:50%;
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
	}
	header{
		width:100%;
		height:1.32rem;
		background: url("../../static/images/footer_bg.jpg") no-repeat center top;
		background-size: cover;
		font-size:0.48rem;
		line-height:1.32rem;
		color:#fff;
		text-align:center;
		display:flex;
		align-items:center;
		& a{
			flex:2;
			font-size:0.48rem;
			display:flex;
			justify-content:center;
			&.goBack{
				flex:1;
			}
			&.mySeason{
				flex:2;
				background:#3a6ad7;
				color:#fff;
				margin-right:0.28rem;
				.font(12px,26px);
				[data-dpr="2"] &{
					.font(24px,52px)
				}
				[data-dpr="3"] &{
					.font(36px,78px)
				}
			}
		}

		& h1{
			flex:6;
		}
	}
	.meList{
		border-top:1px solid #999;
		padding:0 0.28rem;
		& li{
			border-bottom:1px solid #999;
			display:flex;
			align-items:center;
			color:#333;
			& i{
				margin-right:0.16rem;
				.font(14px,44px);
				[data-dpr="2"] &{
					.font(28px,88px)
				}
				[data-dpr="3"] &{
					.font(42px,132px)
				}
			}
			& a{
				.font(14px,44px);
				[data-dpr="2"] &{
					.font(28px,88px)
				}
				[data-dpr="3"] &{
					.font(42px,132px)
				}
			}
		}
	}
</style>