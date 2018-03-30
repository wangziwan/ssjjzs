<template>
	<dl class="novelList">
		<dt>
			<h1>目录</h1>
			<p>共<span>300</span>章</p>
		</dt>
		<dd v-for="item in items">
			<a @click="gotoAddress({path:`/comic/${$route.params.id}/${item.id}/detail`})">第{{item.id}}话</a>
			<p :class="{active:item.isRead==true}">{{item.isRead?"已看":"未读"}}</p>
		</dd>
	</dl>
</template>
<script>
	import {fetch} from '../../config/fetch.js'
	export default {
		data(){
			return {
				items:[]
			}
		},
		mounted(){
			console.log(this.$route.params.id)
			this.getContentStyle();
			this.getNovelList();
		},
		methods:{
			getNovelList(){
				fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/novelList/'+this.$route.params.id)
				.then((response)=>{
					this.items=response.data.data;
				})
				.catch((response)=>{
					console.log(response);
				})
			},
			getContentStyle(){//获得实际contentHeight
				document.querySelector('.novelList').style.minHeight=(
					window.innerHeight-
					document.querySelector('.footer').getBoundingClientRect().height-
					document.querySelector('h1').getBoundingClientRect().height-
					document.querySelector('.zixun_tab').getBoundingClientRect().height)+'px'
				;
			},
        	gotoAddress(path,index){
        		this.$router.push(path);
        	}
		}
	}
</script>
<style scoped lang="less">
	.novelList{
		background:#282a30;
		box-sizing:border-box;
		padding:0 0.28rem;
	}
	dt,dd{
		width:100%;
		line-height:1.2rem;
		height:1.2rem;
		display:flex;
		justify-content: space-between;
		border-bottom:1px solid #4a4d52;

		& h1{
			font-size:0.426667rem;
			color:#f6f6f6;
			padding:0 0.28rem;
			border-bottom:3px solid #1e4da1;
		}
		& p{
			color:#ccc;
			font-size:0.32rem;
			white-space: nowrap;
			&.active{
				color:#888;
			}
		}
		& a{
			overflow:hidden;
			padding-right:0.12rem;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size:14px;
			color:#cccccc;
		}
	}
	[data-dpr="2"] dd a{
		font-size:28px;
	}
	[data-dpr="3"] dd a{
		font-size:42px;
	}
</style>