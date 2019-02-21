<template>
	<div class="mapDetail">
		<child-title :title='title'></child-title>
		<div class="img">
			<img :src="item.img" alt="">
			<h4>{{item.title}}</h4>
		</div>
		<dl>
			<dt>介绍</dt>
			<dd>【地图背景】：{{item.desc.bg}}</dd>
			<dd>【地图模式】：{{item.desc.mode}}</dd>
		</dl>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js'
	import childTitle from '../../components/childTitle.vue'
	export default {
		components:{
			childTitle
		},
		data(){
			return {
				title:'地图',
				item:{
					img:'../../../static/images/zhanchang/character.jpg',
					title:'瑞秋',
					desc:{
						bg:'古武术“形意拳”传人，自幼习得传家绝学并勤加苦练，一直坚定着寻找失踪父亲的下落，逐渐成长起来的她开始展露锋芒。',
						mode:'支持爆破、死亡竞赛、个人战等模式'
					}
				}
			}
		},
		mounted(){

		},
		methods:{
			gotoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang='less'>
.font(@font,@line){
	font-size:@font;
	line-height:@line;
}
.mapDetail{
	padding-bottom:1.32rem;
	color:#333;	
	& .img{
		width:100%;
		box-sizing:border-box;
		padding:0.28rem;
		& img{
			display:block;
			width:100%;
		}
		& h4{
			
			text-align:center;
			.font(16px,32px);
			[data-dpr="2"] &{
				.font(32px,64px);
			}
			[data-dpr="3"] &{
				.font(48px,96px);
			}
		}
	}
	& dl{
		padding:0 0.28rem;
		& dt{
			.font(14px,20px);
			[data-dpr="2"] &{
				.font(28px,40px);
			}
			[data-dpr="3"] &{
				.font(42px,60px);
			}
		}
		& dd{
			.font(12px,22px);
			[data-dpr="2"] &{
				.font(24px,44px);
			}
			[data-dpr="3"] &{
				.font(36px,66px);
			}
		}
	}
	& ul{
		padding:0 0.28rem 0.28rem;
		& li{
			.font(12px,22px);
			[data-dpr="2"] &{
				.font(24px,44px);
			}
			[data-dpr="3"] &{
				.font(36px,66px);
			}
			& i{
				font-style:normal;
			}
		}
	}
}
</style>