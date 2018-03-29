<template>
	<div class="list">
		<ul class="content" v-load-more="loadMore">
			<li v-for="(content,index) in contents">
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
		<footer v-show="preventRepeatReuqest">
			正在加载更多内容...
		</footer>
	</div>
</template>
<script>
	import {fetch} from '../config/fetch.js';
	import {mapState,mapMutations} from 'vuex';
	export default {
		data(){
			return {
				contents:[],
				preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
			}
		},
		props:['option'],
		watch:{
			option:function(newVal,oldVal){	
				this.contents=newVal;
			},
			/*contents:(newVal,oldVal)=>{
				this.contents=newVal;
			}*/
		},
		mounted(){
			console.log(this.option);
		},
		methods:{
			loadMore(){
				if(this.preventRepeatReuqest){
					return;
				}
				this.preventRepeatReuqest=true;
				fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zhibo/live')
				.then((response)=>{
					this.contents.push(...response.data.data);
					this.preventRepeatReuqest=false;
				})
				.catch((reject)=>{
					console.log(reject);
					this.preventRepeatReuqest=false;
				})
				console.log('loadmore')
			},
			gotoAddress(path,index){
        		this.$router.push(path);
        	}
		}
	}
</script>
<style scoped lang="less">
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	footer{
		width:100%;
		text-align:center;
		color:#666;
		font-size:0.32rem;
		line-height:0.6rem;
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
</style>