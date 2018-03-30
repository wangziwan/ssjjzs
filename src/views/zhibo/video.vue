<template>
	<div class="video">
		<div class="top">
			<h2>最新视频</h2>
			<a @click="gotoAddress({path:'/zhibo/allVideo'})">查看更多视频&nbsp;&nbsp;<i>></i></a>
		</div>
<!-- 		<videos-list :option='options'></videos-list> -->
		<ul class="content">
			<li v-for="(content,index) in contents" v-if="index<=1">
				<a class="img">
					<img :src="content.image" alt="">	
				</a>
				<p class="title">主题：{{content.title}}</p>
				<div class="info">
					<span class="date">{{content.date}}</span>
					<div class="upper">
						<div class="text">
							<h6>{{content.name}}</h6>
							<i>{{content.fans}}名观众</i>	
						</div>
						<img class="avatar" :src="content.avatar" alt="">
					</div>
				</div>
			</li>
		</ul>
		<div class="top">
			<h2>主播列表</h2>
		</div>
		<ul class="anchor">
			<li v-for='item in items'>
				<img :src="item.image" alt="">
				<div>
					<h4>{{item.name}}主播</h4>
					<p>{{item.videos}}个视频</p>
					<span>{{item.hours}}个小时</span>
				</div>
				<a class="iconfont icon-detail" @click="gotoAddress({path:`/zhibo/anchor/${item.anchorId}`})"></a>
			</li>
		</ul>
	</div>
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
				contents:[],
				items:[]
			}
		},
		mounted(){
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zhibo/live')
			.then((response)=>{
				this.contents=response.data.data.slice(0,2);
			})
			.catch((response)=>{
				console.log(response);
			}),
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zhibo/videoAnchor')
			.then((response)=>{
				this.items=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			})
		},
		methods:{
			gotoAddress(path){
				this.$router.push(path);
			}
		}
	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	.top{
		display:flex;
		padding:0 0.28rem;
		background:#fcfdfd;
		border-bottom:1px solid #999;
		& h2{
			flex:1;
			color:#292c34;
			font-weight:bold;
			.font(16px,44px);
			[data-dpr='2'] &{
				.font(32px,88px);
			}
			[data-dpr='3'] &{
				.font(48px,132px);
			}
		}
		& a{
			text-align:right;
			flex:1;
			color:#999;
			.font(12px,44px);
			[data-dpr='2'] &{
				.font(24px,88px);
			}
			[data-dpr='3'] &{
				.font(36px,132px);
			}
		}
	}
	.content{
		width:100%;
		& li{
			width:100%;
			height:6.0rem;
			position:relative;
			& a.img{
				display:block;
				width:100%;
				& img{
					display:block;
					width:100%;
				}
			}			
			& p.title{
				position:absolute;
				left:0.28rem;
				top:0.24rem;
				color:#fff;
				font-weight:bold;
				.font(16px,26px);
				[data-dpr='2'] &{
					.font(32px,52px);
				}
				[data-dpr='3'] &{
					.font(48px,78px);
				}

			}
			& .info{
				position:absolute;
				left:0;
				bottom:0;
				width:100%;
				box-sizing:border-box;
				padding:0 0.28rem;
				background:rgba(48,54,69,0.9);
				display:flex;
				align-items:center;
				& .date{
					flex:1;
					text-align:left;
					color:#a0a0a0;
					.font(12px,16px);
					[data-dpr='2'] &{
						.font(24px,32px);
					}
					[data-dpr='3'] &{
						.font(36px,48px);
					}
				}
				& .upper{
					flex:1;
					text-align:right;
					display:flex;
					justify-content:flex-end;
					align-items:center;
					& .text{
						padding:0 0.16rem;
						text-align:center;
						& h6{
							color:#fff;
							.font(14px,18px);
							[data-dpr='2'] &{
								.font(28px,36px);
							}
							[data-dpr='3'] &{
								.font(42px,54px);
							}
						}
						& i{
							font-style:normal;
							color:#7a7a7a;
							.font(12px,14px);
							[data-dpr='2'] &{
								.font(24px,28px);
							}
							[data-dpr='3'] &{
								.font(36px,42px);
							}
						}
					}
					& .avatar{
						display:block;
						width:0.88rem;
						height:0.88rem;
						border-radius:50%;
						padding:0.16rem 0;
					}
				}
			}
		}
	}
	.anchor{
		& li{
			padding:0.16rem 0.28rem;
			display:flex;
			align-items:center;
			& img{
				width:1.6rem;
				height:1.6rem;
				border-radius:50%;
			}
			& div{
				padding-left:0.4rem;
				width:7.5rem;
				& h4{
					color:#32393f;
					.font(16px,22px);
					[data-dpr='2'] &{
						.font(32px,44px);
					}
					[data-dpr='3'] &{
						.font(48px,66px);
					}
				}
				& p{
					color:#666;
					.font(14px,20px);
					[data-dpr='2'] &{
						.font(28px,40px);
					}
					[data-dpr='3'] &{
						.font(42px,60px);
					}
				}
				& span{
					display:block;
					color:#a5a5a5;
					.font(12px,16px);
					[data-dpr='2'] &{
						.font(24px,32px);
					}
					[data-dpr='3'] &{
						.font(36px,48px);
					}
				}
			}
			& a{
				color:#a5a5a5;
				font-size:0.52rem;
			}
		}
	}
</style>