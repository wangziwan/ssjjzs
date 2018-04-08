<template>
	<div class="comment">
		<child-title :title='title'></child-title>	
		<ul>
			<li v-for='content in contents' @click='gotoDetail(content.id)'>
				<div class="article">
					<img :src="content.image" alt="">
					<h5>{{content.title}}</h5>
				</div>
				<ol class="commentDetail">
					<li v-for='comment in content.comments'>
						<img :src="comment.image" alt="">
						<div class="right">
							<div class="top">
								<h4>{{comment.name}}</h4>
								<span>{{comment.time}}</span>
							</div>
							<p>{{comment.text}}</p>
						</div>
					</li>
				</ol>
			</li>
		</ul>
	</div>	
</template>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	.comment{
		padding-bottom:1.32rem;
		background:#000;
		& ul{
			&>li{
				background:#fff;
				padding:0 0.28rem;
				margin-bottom:21px;

				& .article{
					width:100%;
					border-bottom:1px solid #eaeaea;
					padding:0.4rem 0;
					display:flex;
					align-items:center;
					&>img{
						flex:0 0 2.16rem;
						height:1.4rem;
						margin-right:0.28rem;
					}
					&>h5{
						flex:3;
						color:#32393f;
						.font(14px,18px);
						[data-dpr='2'] &{
							.font(28px,36px);
						}
						[data-dpr='3'] &{
							.font(42px,54px);
						}
					}
				}
				& .commentDetail{
					width:100%;
					& li{
						display:flex;
						padding:0.16rem 0;
						align-items:center;
						& img{
							flex:0 0 0.88rem;
							height:0.88rem;
							border-radius:50%;
							margin-right:0.28rem;
						}
						& .right{
							flex:9;
							& .top{
								width:100%;
								display:flex;
								justify-content:space-between;
								& h4{
									color:#333;
									font-weight:bold;
									.font(14px,18px);
									[data-dpr='2'] &{
										.font(28px,36px);
									}
									[data-dpr='3'] &{
										.font(42px,54px);
									}
								}
								& span{
									color:#999;
									.font(14px,18px);
									[data-dpr='2'] &{
										.font(28px,36px);
									}
									[data-dpr='3'] &{
										.font(42px,54px);
									}
								}

							}
							& p{
								color:#333333;
								.font(12px,16px);
								[data-dpr='2'] &{
									.font(24px,32px);
								}
								[data-dpr='3'] &{
									.font(36px,48px);
								}
							}
						}
					}
				}
				
			}
		}
	}
</style>
<script>
	import {fetch} from '../../config/fetch.js'
	import childTitle from '../../components/childTitle.vue'
	export default{
		components:{
			childTitle
		},
		data(){
			return {
				title:'我的评论',
				contents:[{
					image:'',
					title:'媒体赛B组回顾',
					comments:[{
						image:'',
						name:'好帅',
						text:'会哦东很好',
						time:'2018-10-30 12:00:00'
					},{
						image:'',
						name:'好帅',
						text:'会哦东很好',
						time:'2018-10-30 12:00:00'
					}]
				}],
			}
		},
		mounted(){
			
			//加载评论
			fetch('get','me/comments')
			.then((response)=>{
				console.log(response.data.data)
				this.contents=response.data.data;
			})
			.catch((reject)=>{
				console.log(reject);
			})
		},
		methods:{
			gotoDetail(id){
				this.$router.push({path:`/detail/${id}`});
			}
		}
	}
</script>