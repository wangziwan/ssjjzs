<template>
	<div class="setting">
		<child-title :title="title"></child-title>
		<ul>
			<li>
				<a>
					<span>头像</span>
					<img :src="userInfo.image" alt="">
				</a>
			</li>
			<li>
				<a @click="gotoAddress({path:'/setting/alterName'})">
					<span>昵称</span>
					<i>{{userInfo.name}}</i>
				</a>
			</li>
			<li>
				<a @click="gotoAddress({path:'/setting/alterTel'})">
					<span>手机号</span>
					<i>{{userInfo.tel}}</i>
				</a>
			</li>
			<li>
				<a @click="gotoAddress({path:'/setting/alterPwd'})">
					<span>修改密码</span>
					<i class="iconfont icon-detail"></i>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import childTitle from '../../components/childTitle.vue'
	import {mapState} from 'vuex'
	export default {
		components:{
			childTitle
		},
		computed:{
			...mapState(['userInfo'])
		},
		data(){
			return {
				title:'我的'
			}
		},
		methods:{
			gotoAddress(path){
				this.$router.push(path);
			}
		}
	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	.setting{
		& ul{
			& li{
				
				& a{
					display:block;
					width:100%;
					display:flex;
					box-sizing:border-box;
					border-bottom:1px solid #eaeaea;
					padding:0.28rem;
					align-items:center;
					font-size:0.4rem;
					& span{
						font-family:'黑体';
						color:#333;
						flex:1;
					}
					& i{
						font-style:normal;
						color:#999;
						font-size:0.36rem;
						flex:1;
						text-align:right;
					}
					& img{
						display:block;
						width:1.2rem;
						height:1.2rem;
						border-radius:50%;
					}
				}
			}
		}
	}
</style>