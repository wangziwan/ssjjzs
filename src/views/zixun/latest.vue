<template>
	<div>
		<load v-show="loadFlag"></load>
		<div v-show="!loadFlag">
			<swiper-slider :options='option'></swiper-slider>
			<ul class="content" v-load-more="loadMore">
				<li v-for="(content,index) in contents" v-if="index<=3">
					<div class="img">
						<img :src="content.imgUrl" alt="">	
					</div>
					
					<div class="info">
						<a @click="gotoAddress({path:`/detail/${content.id}`})">{{content.title}}</a>
						<span>{{content.date}}</span>					
					</div>
				</li>
				<li v-for="(content,index) in adBanners" class="append"><img :src='content.imgUrl' alt=""></li>
				<li v-for="(content,index) in contents" v-if="index>3">
					<div class="img">
						<img :src="content.imgUrl" alt="">	
					</div>				
					<div class="info">
						<a @click="gotoAddress({path:`/detail/${content.id}`})">{{content.title}}</a>
						<span>{{content.date}}</span>					
					</div>
				</li>
			</ul>
			<footer v-show="preventRepeatReuqest">
				<svg v-show="haveData" class="icon-audio">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-audio"></use>
				</svg>
			</footer>
			<footer>
				<span v-show="!haveData">------我是有底线的-------</span>
			</footer>
		</div>
	</div>
</template>

<script>
	import load from '../../components/loading.vue';
	import swiperSlider from '../../components/SwiperSlide.vue';
	import {fetch} from '../../config/fetch.js';
	import Axios from 'axios';
	export default {
		components:{
			swiperSlider,
			load
		},
		data(){
			return {
				option:{
					baseUrl:'/detail/',
					slideArr:[]
				},//轮播图参数配置
				contents:[],//最新内容
				adBanners:[],
				preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
				haveData:true,
				loadFlag:true
			}
		},
		created(){
			fetch('get','zxLatest').then((res)=>{
				this.loadFlag = false;
				//资讯内容加载
				this.contents = res.data.zuixinContent;
				//轮播图数据
				this.option.slideArr = res.data.slide;
				this.adBanners = res.data.adBanner;
			}).catch((res)=>{
				console.log(res);
			})
		},
		mounted(){

		},
		methods:{
			loadMore(){
				console.log('loadmore!!')
				if(this.preventRepeatReuqest){
					return;
				}
				this.preventRepeatReuqest=true;
				fetch('get','zuixinContent').then((res)=>{
					if(res.data == [] || res.data == '') {
						this.haveData = false;
					} else {
						this.haveData = true;
						this.contents.push(...res.data);						
					}
					this.preventRepeatReuqest=false;				
				}).catch((reject)=>{
					this.preventRepeatReuqest=false;
				})
				
			},
        	gotoAddress(path,index){
        		this.$router.push(path);
        		this.activeId=index;
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