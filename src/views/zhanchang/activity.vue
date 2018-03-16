<template>
	<div class="activity">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>游戏活动</h1>
		</header>
		<list :option="options"></list>
	</div>
</template>
<script>
	import list from '../../components/list.vue'
	import {fetch} from '../../config/fetch.js'
	export default{
		components:{
			list
		},
		data(){
			return {
				options:[],
			}
		},
		mounted(){
			fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zuixinContent`)
			.then((response)=>{
				this.options=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			}); 
		},
		methods:{
			gotoBack(){
        		this.$router.go(-1);
        	},
		}
	}
</script>
<style scoped lang="less">
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
		height:@line;
		border-radius:@line/2;
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
	.activity{
		padding-bottom:1.32rem;
	}
</style>