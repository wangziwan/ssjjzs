<template>
	<div class="zhibo">
		<headTitle></headTitle>
		<ul class="zhibo_tab">
			<li v-for='(item,index) in items'>
				<a @click="gotoAddress(item.url,index)" :class="{active:index==zhiboStatus}">{{item.tab}}</a>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
import headTitle from '../components/head'
import {mapState,mapMutations} from 'vuex';
import foot from '../components/foot'
	export default{
		components:{
			headTitle,
			foot
		},
		data(){
			return{
				items:[{
					tab:'直播',
					url:'/zhibo/live'
				},{
					tab:'视频',
					url:'/zhibo/video'
				}],
			}
		},
		mounted(){
			console.log(this.zhiboStatus);
			this.$router.push(this.items[this.zhiboStatus].url);
		},
		computed:{
			...mapState(['zhiboStatus'])
		},
		methods: {
			...mapMutations([
				'RECORD_ZHIBOSTATUS'
			]),
        	gotoAddress(path,index){
        		this.RECORD_ZHIBOSTATUS(index);
        		this.$router.push(path);

        	}
        }
	}
</script>
<style scoped lang='less'>
	.zhibo{
		padding-bottom:1.32rem;
	}
	.zhibo_tab{
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