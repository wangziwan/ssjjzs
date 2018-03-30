<template>
	<div class="gameAccount">
		<child-title :title="title"></child-title>
		<div class="info">
			<p class="area" value='0'>区服</p>
			<span @click="optionStatus=!optionStatus">
				<i class="bottom_icon" v-if="optionStatus"></i>
				<i class="top_icon" v-else></i>
			</span>
		</div>
		<ul v-show="optionStatus">
			<li v-for="area in areas" @click="selectArea(area.areaId,area.name)">
				{{area.name}}
			</li>
		</ul>
		<div class="key">
			<input type="text" placeholder="秘钥">
			<a>不知道我的秘钥？</a>
		</div>
		<button @click.prevent="confirm">立即绑定</button>
	</div>
	

</template>
<script>
	import childTitle from '../../components/childTitle.vue'
	export default {
		components:{
			childTitle
		},
		data(){
			return {
				title:'游戏角色',
				optionStatus:true,
				areas:[{
					name:'生死一区',
					areaId:1
				},{
					name:'生死二区',
					areaId:2
				},{
					name:'生死三区',
					areaId:3
				},{
					name:'生死四区',
					areaId:4
				}]
			}
		},
		mounted(){
			this.initBg();
		},
		methods:{
			selectArea(id,name){
				document.querySelector('.area').innerHTML=name;
				document.querySelector('.area').setAttribute('value',id);
				this.optionStatus=!this.optionStatus;
			},
			initBg(){
				var wH=document.documentElement.clientHeight;
				var tH=document.querySelector('.footer').clientHeight;
				document.querySelector('.gameAccount').style.height=(wH-tH)+'px';
				document.querySelector('.gameAccount').style.background='#2a2c33';
			},
		}
	}
</script>
<style scoped lang="less">
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	.info{
		margin:0.56rem 0.28rem 0;
		display:flex;
		background:#fff;
		border-radius:10px 10px 0 0;
		& p{
			flex:4;
			color:#333;
			padding-left:0.4rem;
			font-weight:bold;
			.font(16px,44px);
			[data-dpr='2'] &{
				.font(32px,88px);
			}
			[data-dpr='3'] &{
				.font(48px,132px);
			}
		}
		& span{
			text-align:center;
			flex:1;
			display:flex;
			align-items:center;
			justify-content:center;	
			& .bottom_icon{
				width:0;
				height:0;
				border-width:0.16rem;
				border-style:solid;
				border-color:transparent transparent #b3b3b3;
			}
			& .top_icon{
				width:0;
				height:0;
				border-width:0.16rem;
				border-style:solid;
				border-color:#b3b3b3 transparent transparent;
			}
		}
	}
	ul{
		margin:0 0.28rem;
		& li{
			color:#333;
			padding-left:0.4rem;
			color:#666;
			background:#fff;
			border:1px solid #eaeaea;
			.font(16px,44px);
			[data-dpr='2'] &{
				.font(32px,88px);
			}
			[data-dpr='3'] &{
				.font(48px,132px);
			}
		}
	}
	.key{
		margin:0 0.28rem;
		background:#fff;
		display:flex;
		align-items:center;
		border-radius: 0 0 10px 10px;
		& input{
			border:0 none;
			flex:3;
			padding:0 0.4rem;
			box-sizing:border-box;
			border-radius: 0 0 0 10px;
			color:#999;
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
			flex:2;
			text-align:center;
			color:#a9a9a9;
		}
	}
	button{
		border:0 none;
		display:block;
		width:80%;
		height:0.96rem;
		color:#fff;
		font-size:0.4rem;
		font-family:'黑体';
		line-height:0.96rem;
		margin:0.4rem auto 0;
		background:url('../../../static/images/confirmBtn.png') center top no-repeat;
		background-size:contain;
	}
</style>