<template>
	<div class="detail">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>资讯详情</h1>
			<a class="iconfont" :class="[content.isCollect?'icon-collect_active':'icon-collect']"></a>
			<a class="iconfont icon-share"></a>
		</header>
		<div class="content">
			<h2>{{content.title}}</h2>
			<div class="info">
				<i>{{content.datetime}}</i>
				<i>{{content.from}}</i>
			</div>
			<div class="mainContent">
				{{content.content}}
			</div>
		</div>
		<div class="comment">
			<h3>评论</h3>
			<ul>
				<li v-for="item in comment.comment">
					<div class="userImg">
						<img :src="item.image" alt="">
					</div>
					
					<div>
						<p class="userName">{{item.name}}</p>
						<p class="userTime">{{item.datetime}}</p>
						<p class="userComment">{{item.csentence}}</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="below">
			<div class="commentInput">
				<input placeholder="我要评论" type="text" v-model="commentText">
				<i class="iconfont icon-write"></i>
			</div>
			
			<button @click="postComment">评论</button>
		</div>
	</div>
</template>
<script>
	import {fetch} from '../config/fetch.js';
	import {formatDate} from '../config/common.js'
	export default {
		data(){
			return {
				commentText:null,//评论栏input默认内容
				content:{},//资讯内容
				comment:{},//评论内容
			}
		},
		computed:{
			userInfo(){
				return this.$store.state.userInfo;
			}
		},
		mounted(){
			console.log(this.$route);
			//加载资讯内容
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/detail/'+this.$route.params.id+'/content')
			.then((response)=>{
				console.log(response.data.data)
				this.content=response.data.data;
			})
			.catch((reject)=>{
				console.log(reject);
			}),
			//加载评论
			fetch('POST','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/detail/'+this.$route.params.id+'/comment')
			.then((response)=>{
				console.log(response.data.data)
				this.comment=response.data.data;
			})
			.catch((reject)=>{
				console.log(reject);
			})
		},
		methods:{
			gotoBack(){
				this.$router.go(-1);
			},
			postComment(){
				let requestData={
					name:this.$store.state.userInfo.name,
					image:this.$store.state.userInfo.image,
					csentence:this.commentText,
					datetime:formatDate(new Date()),
				};
				this.comment.comment.push(requestData);
				this.commentText=null;//提交评论后清空input

/*				fetch('POST','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/detail/'+this.$route.params.id+'/comment')
				.then((response)=>{
					console.log(response.data.data)
					this.comment=response.data.data;
				})
				.catch((reject)=>{
					console.log(reject);
				})*/
			}
		}
	}
</script>
<style scoped lang="less">
	input{
		padding:0;
		margin:0;
		border:0 none;
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
			flex:7;
		}
	}
	.detail{
		background:#383a42;
		
		& .content,& .comment,& .below{
			background:#fff;
			padding:0.24rem;
		}
		& .content{
			& h2{
				font-size:0.48rem;
				line-height:0.56rem;
				color:#32393f;
			}
			& .info{
				padding:0.28rem 0;
				& i{
					font-size:0.32rem;
					line-height:0.4rem;
					color:#9ea3a6;
				}
			}
			& .mainContent{
				padding:0 0.16rem;
				color:#333;
				line-height:0.64rem;
				font-size:0.32rem;
				& img{
					display:block;
					margin:0.16rem 0;
					max-width:100%;
				}
			}
		}

		& .comment{
			padding-bottom:0.96rem;
			margin-top:0.28rem;
			& h3{
				font-size:0.4rem;
				font-weight:bold;
				color:#333;
				padding:0 0 0.28rem;
			}
			& li{
				padding:0.32rem 0;
				border-top:1px solid #ccc;
				display:flex;
				& .userImg{
					flex:1;
					& img{
						width:100%;
						border-radius:50%;
					}
				}
				& div{
					flex:9;
					& p{
						padding:0 0 0 0.16rem;
						&.userName{
							color:#000;
							font-weight:bold;

						}
						&.userTime{
							color:#999;
						}
						&.userComment{
							margin-top:0.28rem;
							color:#333;
						}
					}
				}
			}

		}
		& .below{
			position:fixed;
			bottom:0rem;
			left:0;
			width:100%;
			display:flex;
			box-sizing:border-box;
			& .commentInput{
				flex:9;
				position:relative;
				& input{
					display:block;
					box-sizing:border-box;
					padding:0 0 0 1rem;
					height:0.72rem;
					width:100%;
					border:1px solid #ddd;
					border-radius:0.36rem;
					
					font-size:0.32rem;
					&::-webkit-input-placeholder{
						color:#ccc;
					}
				}
				& i{
					position:absolute;
					width:0.48rem;
					height:0.48rem;
					left:0.32rem;
					top:0.12rem;
					color:#aaa;
					line-height:0.48rem;
				}
			}
			& button{
				flex:1;
				box-sizing:border-box;
				border:0 none;
				background:#fff;
				line-height:0.72rem;
				color:#999;
				font-size:0.4rem;
				padding-left:0.28rem;
			}
		}
	}
</style>