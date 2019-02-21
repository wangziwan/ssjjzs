<template>
	<div class="login">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>登录</h1>
			<a class="register" @click="gotoAddress({path:'/register'})">注册</a>
		</header>
		<form>
			<ul class="input">
				<li>
					<input name='account' type="text" placeholder="输入帐号">
				</li>
				<li>
					<input name='pwd1' type="password" placeholder="输入密码">
					<a href="">忘记密码？</a>
				</li>
			</ul>
			<button @click.prevent="confirm">确认</button>
		</form>
		
	</div>
</template>
<script>
	export default{
		data(){
			return {
				title:'注册帐号',
			}
		},
		mounted(){
			this.initBg()
		},
		methods:{
			initBg(){
				var wH=document.documentElement.clientHeight;
				var tH=document.querySelector('.footer').clientHeight;
				document.querySelector('.login').style.height=(wH-tH)+'px';
				document.querySelector('.login').style.background='#2a2c33';
			},
			gotoAddress(path){
				this.$router.push(path);
			},
			gotoBack(){
				this.$router.go(-1);
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
		align-items:center;
		& a{
			flex:2;
			font-size:0.48rem;
			display:flex;
			justify-content:center;
			&.goBack{
				flex:1;
			}
			&.register{
				flex:2;
/* 				background:#3a6ad7; */
				color:#fff;
				margin-right:0.28rem;
				.font(12px,26px);
				[data-dpr="2"] &{
					.font(24px,52px)
				}
				[data-dpr="3"] &{
					.font(36px,78px)
				}
			}
		}

		& h1{
			flex:6;
		}
	}
	ul{
		margin:0.28rem;
		& li{
			width:100%;
			border-bottom:1px solid #eaeaea;
			position:relative;
			& input{
				display:block;
				border:0 none;
				background:#fff;
				width:100%;
				box-sizing:border-box;
				padding:0 0.36rem;
				color:#999;
				
				.font(14px,44px);
				[data-dpr='2'] &{
					.font(28px,88px);
				}
				[data-dpr='3'] &{
					.font(42px,132px);
				}
			}
			&:nth-child(1){				
				& input{
					border-radius:0.08rem 0.08rem 0 0;
				}
			}
			&:nth-child(2){
				background:#fff;
				display:flex;
				align-items:center;
				justify-content:space-between;
				& input{
					border:0 none;
					padding:0 0.4rem;
					box-sizing:border-box;
					border-radius:0 0 0.08rem 0.08rem;
					color:#999;
				}
				& a{
					width:2rem;
					text-align:center;
					color:#a9a9a9;
				}
			}
			& img{
				position:absolute;
				right:0.28rem;
				top:0.12rem;
				bottom:0.12rem;
				width:1.6rem;
				background:#aaa;
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