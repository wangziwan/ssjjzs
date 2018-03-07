<template>
	<div>
		<headTitle></headTitle>
		<ul class="zixun_tab">
			<li v-for='(item,index) in items'>
				<a @click="gotoAddress(item.url,index)" :class="{active:index==zixunStatus}">{{item.tab}}</a>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
import headTitle from '../components/head'
import {mapState,mapMutations} from 'vuex';
	export default{		
		components:{			
			headTitle,
		},
		data(){
			return{
				items:[{
					tab:'最新',
					url:'/zixun/latest'
				},{
					tab:'新闻',
					url:'/zixun/news'
				},{
					tab:'小说',
					url:'/zixun/novel'
				},{
					tab:'漫画',
					url:'/zixun/comic'					
				}],
				activeId:null
			}
		},
		mounted(){
			console.log(this.zixunStatus);
			this.$router.push(this.items[this.zixunStatus].url);
		},
		computed:{
			...mapState(['zixunStatus'])
		},
		methods: {
			...mapMutations([
				'RECORD_ZIXUNSTATUS'
			]),
        	gotoAddress(path,index){
        		this.RECORD_ZIXUNSTATUS(index);
        		this.$router.push(path);

        	}
        }
	}
</script>
<style scoped lang='less'>
	.zixun_tab{
		width: 100%;
		display: flex;
		background:#25262c;
		padding:0.16rem 0;
		& li{
			flex: 1;
			display: flex;
			justify-content:center;
			& a{
				display: flex;
				width: 80%;
				height:0.76rem;
				background:0 none;
				color:#eee;
				font-size:0.36rem;
				align-items:center;
				justify-content:center;
				&.active{
					background: url('../../static/images/zixun_tab_bg.png') no-repeat center top;
					background-size: contain;
				}
			}
		}
	}
</style>