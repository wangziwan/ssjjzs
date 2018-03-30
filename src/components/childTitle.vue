<template>
	<header>
		<a class="iconfont icon-back" @click="gotoBack"></a>
		<h1>{{title}}</h1>
	</header>
</template>
<script>
	export default{
		props:['title'],
		methods:{
			gotoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang="less">
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
			flex:2;
			font-size:0.48rem;
			display:flex;
			justify-content:center;
			&.goBack{
				flex:2;
			}
		}
		& h1{
			flex:6;
		}
		&:after{
			content:"";
			flex:2;
		}
	}	
</style>