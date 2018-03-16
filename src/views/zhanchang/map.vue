<template>
	<div class="map">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>地图</h1>
		</header>
		<ul class="list">
			<li v-for="item in items">
				<a href='javascript:;' @click="gotoAddress({path:`/zhanchang/map/${item.id}`})">
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
	.map{
		padding-bottom:1.32rem;
		background:#343434;
		& ul.list{
			padding:0.4rem 0.28rem;
			display:flex;
			justify-content:space-between;
			flex-flow:row wrap;
			& li{
				width:100%;
				& img{
					display:block;
					width:100%;
				}
				& p{
					color:#fff;
					text-align:center;
					.font(16px,40px);
					[data-dpr="2"] &{
						.font(32px,80px)
					}
					[data-dpr="3"] &{
						.font(48px,120px)
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
</style>