<template>
	<div class="alter">
		<child-title :title="title"></child-title>
		<form>
			<ul class="alterinput">
				<li>
					<input name='name' type="text" placeholder="修改昵称">
				</li>
			</ul>
			<button @click.prevent="confirm">确认</button>
		</form>
		
	</div>
	
</template>
<script>
	import childTitle from '../../components/childTitle.vue'
	import {mapState,mapMutations} from 'vuex'
	export default{
		components:{
			childTitle
		},
		data(){
			return {
				title:'修改昵称',
			}
		},
		mounted(){
			this.initBg()
		},
		methods:{
			...mapMutations(['ALTER_NICKNAME']),
			initBg(){
				var wH=document.documentElement.clientHeight;
				var tH=document.querySelector('.footer').clientHeight;
				document.querySelector('.alter').style.height=(wH-tH)+'px';
				document.querySelector('.alter').style.background='#2a2c33';
			},
			confirm(){
				//表单提交
				var name=document.querySelector('input').value;
				if(!!name){
					console.log(name);
					this.ALTER_NICKNAME(name);
					this.$router.go(-1);
				}
			}
		}
	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	ul{
		margin:0.28rem;
		& li{
			width:100%;
			& input{
				display:block;
				border:0 none;
				background:#fff;
				width:100%;
				box-sizing:border-box;
				padding:0 0.36rem;
				border-radius:0.08rem;
				color:#333;
				
				.font(14px,44px);
				[data-dpr='2'] &{
					.font(28px,88px);
				}
				[data-dpr='3'] &{
					.font(42px,132px);
				}
			}
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