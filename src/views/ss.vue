<template>
	<div class="saishi">
		<headTitle></headTitle>
		<ul class="saishi_tab">
			<li v-for='(item,index) in items'>
				<a @click="gotoAddress(item.url,index)" :class="{active:index==saishiStatus}">{{item.tab}}</a>
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
			return {
				items:[{
					tab:'赛程',
					url:'/saishi/race_progress'
				},{
					tab:'战报',
					url:'/saishi/battle_report'
				},{
					tab:'战队',
					url:'/saishi/battle_team'
				}]
			}
		},
		computed:{
			...mapState(['saishiStatus'])
		},
		mounted(){
			this.$router.push(this.items[this.saishiStatus].url);
		},
		methods: {
			...mapMutations([
				'RECORD_SAISHISTATUS'
			]),
			gotoAddress(url,index){
				this.RECORD_SAISHISTATUS(index);
				this.$router.push(url);
			}
		}
			
	}
</script>
<style scoped lang='less'>
	.saishi{
		padding-bottom: 1.32rem;
	}
	.saishi_tab{
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