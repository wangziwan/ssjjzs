<template>
	<div>

		<ul class="content" v-load-more="loadMore">
			<li v-for="(content,index) in contents['strategy'+stra]">
				<div class="img">
					<img :src="content.image" alt="">	
				</div>
				
				<div class="info">
					<a @click="gotoAddress({path:`/detail/${content.id}`})">{{content.title}}</a>
					<span>{{content.date}}</span>					
				</div>
			</li>
		</ul>
		<footer v-show="preventRepeatReuqest">
			正在加载更多内容...
		</footer>
	</div>
</template>

<script>
	import {fetch} from '../../config/fetch.js';
	import {mapState,mapMutations} from 'vuex';
	export default {
		data(){
			return {
				contents:{
					strategy0:[],
					strategy1:[],
					strategy2:[],
					strategy3:[]
				},
				preventRepeatReuqest: false, //到达底部加载数据，防止重复加载

			}
		},
		computed:{
			...mapState(['strategyStatus'])
		},
		mounted(){
			//资讯内容加载
			console.log(this.$route.params);
			fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/strategy/${this.strategyStatus}`)
			.then((response)=>{
				this.contents['strategy'+this.strategyStatus]=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			})
		},
		watch:{
			"$route":(to,from)=>{
				if(/strategy/.test(to.path)){
					console.log(to.path);
					if(!!to.params.id){
						fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/strategy/${to.params.id}`)
						.then((response)=>{
							this.contents['strategy'+this.strategyStatus]=response.data.data;
						})
						.catch((response)=>{
							console.log(response);
						})
					}					
				}
			}			
		},
		methods:{
			loadMore(){
				if(this.preventRepeatReuqest){
					return;
				}
				this.preventRepeatReuqest=true;
				fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zuixinContent')
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
			padding:0.266667rem 0;
			margin:0 0.266667rem;
			border-bottom:1px solid #e2e2e2;
			display:flex;
			&.append{
				margin:0;
				background:#2a2c33;	
				border:0 none;
				& a{
					display:block;
					width:100%;
				}
				& img{
					display:block;
					width:100%;
					height:2.8rem;

				}
			}
			&:last-child{
				border:0 none;
			}
			& .img{
				flex:1;
				& img{
					width:100%;
				}
			}
			& .info{
				flex:3;
				padding:0 0 0 0.36rem;
				& a{
					line-height:0.48rem;
					font-size:0.4rem;
					display:block;
					color:#32393f;
					margin-bottom:0.32rem;
				}
				& span{
					color:#9ea3a6;

				}
			}
		}
	}
</style>