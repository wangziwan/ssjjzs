<template>
	<div class="character">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>角色</h1>
		</header>
		<div class="search">
			<div class="searchTop">
				<button @click="isShowMenu">分类检索</button>
				<input type="text" placeholder="输入角色名称">
			</div>
			<ul v-show="isShow">
				<li>
					<dl>
						<dt>类型</dt>
						<dd :class="{active:typesActiveId==index}" @click="choose(type.id,index)" v-for="(type,index) in types">
							{{type.title}}
						</dd>
					</dl>
				</li>
				
			</ul>
		</div>
		<ul class="list">
			<li v-for="item in items">
				<a href='javascript:;' @click="gotoAddress({path:`/zhanchang/character/${item.id}`})">
					<img :src="item.image" alt="">
					<p>{{item.title}}</p>
				</a>					
			</li>
		</ul>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js'
	export default {
		data(){
			return {
				isShow:false,
				typesActiveId:null,		
				types:[{
					title:'雷霆战警',
					id:0,
				},{
					title:'风暴联盟',
					id:1,					
				},{
					title:'变异体',
					id:2,					
				}],
				items:[]
			}
		},
		mounted(){
			//加载角色列表
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zhanchang/character')
			.then((response)=>{
				console.log(response.data.data)
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
			isShowMenu(){
				if(this.isShow){
					this.isShow=false;
				}else{
					this.isShow=true;
				}
			},
			choose(id,index){
				this.typesActiveId=index;
				fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zhanchang/character',{id:id})
				.then((response)=>{
					console.log(response.data.data)
					this.items=response.data.data;
				})
				.catch((reject)=>{
					console.log(reject);
				})
			},
			gotoAddress(path,index){
				console.log(path)
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
	.character{
		padding-bottom:1.32rem;
		& ul.list{
			padding:0.4rem 0.28rem;
			display:flex;
			justify-content:space-between;
			flex-flow:row wrap;
			& li{
				width:50%;
				box-sizing:border-box;
				margin-bottom:0.16rem;
				&:nth-child(odd){
					padding-right:0.16rem;
				}
				&:nth-child(even){
					padding-left:0.16rem;
				}
				& img{
					display:block;
					width:100%;
				}
				& p{
					color:#32393f;
					text-align:center;
					.font(14px,32px);
					[data-dpr="2"] &{
						.font(28px,64px)
					}
					[data-dpr="3"] &{
						.font(42px,96px)
					}
				}
			}
		}
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
	.search{
		background:#2a2c34;
		padding: 0 0.28rem;		
		& .searchTop{
			display:flex;
			padding:0.2rem 0 0.2rem;
			justify-content:space-between;
			text-align:center;
			line-height:0.8rem;
			& button{
				flex:2;
				height:0.8rem;				
				color:#fff;
				background:#559aea;
				border:0 none;
				border-radius:0.4rem;
				margin-right:0.28rem;
				[data-dpr="2"] &{
					font-size:24px;
				}
				[data-dpr="3"] &{
					font-size:36px;
				}
			}
			& input{
				flex:8;
				background:#3f4249;
				font-size:12px;
				border:0 none;
				border-radius:0.4rem;
				text-align:center;
				color:#fff;
				&::placeholder{
					color:#767b87;
					text-align:center;
				}
				[data-dpr="2"] &{
					font-size:24px;
				}
				[data-dpr="3"] &{
					font-size:36px;
				}
			}
		}
		& ul{
			padding:0.4rem 0 0.4rem;
		}
		& li{
			width:100%;
			padding-bottom:0.2rem;
			& dl{
				display:flex;
				height:0.64rem;
				line-height:0.64rem;
				font-size:14px;
				position:relative;
				[data-dpr="2"] &{
					font-size:28px;
				}
				[data-dpr="3"] &{
					font-size:42px;
				}
				& dt{
					padding-right:0.28rem;
					color:#fcba08;
				}
				& dd{
					padding:0 0.28rem;
					color:#b2b2b2;
					&.active{
						color:#fcba08;
					}
					& .submenu{
						width:100%;
						position:absolute;
						left:0.28rem;
						top:0.64rem;
						z-index:9;
						display:flex;
					}
				}
			}
		}

	}
</style>