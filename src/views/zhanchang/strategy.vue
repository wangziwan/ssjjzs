<template>
	<div class="strategy">
		<child-title :title='title'></child-title>
		<ul class="strategy_tab">
			<li v-for='(item,index) in items'>
				<a @click="tab_getData(index)" :class="{active:index==strategyStatus}">{{item.tab}}</a>
			</li>
		</ul>
		<!-- <router-view></router-view> -->
		<list :option="options['strategy'+strategyStatus]">
			
		</list>
	</div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import {fetch} from '../../config/fetch.js'
import list from '../../components/list'
import childTitle from '../../components/childTitle'
	export default{
		components:{
			childTitle,
			list
		},
		data(){
			return{
				title:'游戏攻略',
				items:[{
					tab:'新手必看',
					url:'/zhanchang/strategy/0'
				},{
					tab:'高手进阶',
					url:'/zhanchang/strategy/1'
				},{
					tab:'独家解析',
					url:'/zhanchang/strategy/2'
				},{
					tab:'玩家心得',
					url:'/zhanchang/strategy/3'					
				}],
				options:{
					strategy0:[],
					strategy1:[],
					strategy2:[],
					strategy3:[]
				}
			}
		},
		mounted(){
			fetch('GET','strategy/'+this.strategyStatus)
			.then((response)=>{
				this.options['strategy'+this.strategyStatus]=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			}); 
		},
		computed:{
			...mapState(['strategyStatus'])
		},
		methods: {
			...mapMutations([
				'RECORD_STRATEGYSTATUS'
			]),
        	gotoBack(){
        		this.$router.go(-1);
        	},
        	tab_getData(index){
        		this.RECORD_STRATEGYSTATUS(index);
        		if(this.options['strategy'+index]==false){
        			fetch('GET','strategy/'+index)
					.then((response)=>{
						this.options['strategy'+index]=response.data.data;
					})
					.catch((response)=>{
						console.log(response);
					});
        		}					 	    		       
        	}
        }
	}
</script>
<style scoped lang='less'>
	.strategy{
		padding-bottom:1.32rem;
	}
	.strategy_tab{
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
					background: url('../../../static/images/zixun_tab_bg.png') no-repeat center top;
					background-size: contain;
				}
			}
		}
	}
</style>