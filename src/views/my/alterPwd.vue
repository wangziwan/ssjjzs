<template>
	<div class="alter">
		<child-title :title="title"></child-title>
		<form>
			<ul class="alterinput">
				<li>
					<input name='oldPwd' type="password" placeholder="输入旧密码">
				</li>
				<li>
					<input name='newPwd1' type="password" placeholder="输入新密码">
				</li>
				<li>
					<input name='newPwd2' type="password" placeholder="重新输入新密码">
				</li>
			</ul>
			<button @click.prevent="confirm">确认</button>
		</form>
		
	</div>
</template>
<script>
	import childTitle from '../../components/childTitle.vue'
	export default{
		components:{
			childTitle
		},
		data(){
			return {
				title:'修改密码',
			}
		},
		mounted(){
			this.initBg()
		},
		methods:{
			initBg(){
				var wH=document.documentElement.clientHeight;
				var tH=document.querySelector('.footer').clientHeight;
				document.querySelector('.alter').style.height=(wH-tH)+'px';
				document.querySelector('.alter').style.background='#2a2c33';
			},
			confirm(){
				//表单提交
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
			margin-bottom:0.32rem;
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