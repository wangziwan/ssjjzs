<template>
	<div class="strategy">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>游戏攻略</h1>
		</header>
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
	export default{
		components:{
			list
		},
		data(){
			return{
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
			fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/strategy/${this.strategyStatus}`)
			.then((response)=>{
				this.options['strategy'+this.strategyStatus]=response.data.data;
				console.log(this.options);
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
        	gotoAddress(path,index){
        		this.RECORD_STRATEGYSTATUS(index);
        		this.$router.push(path);
        	},
        	gotoBack(){
        		this.$router.go(-1);
        	},
        	tab_getData(index){
        		this.RECORD_STRATEGYSTATUS(index);
        		if(this.options['strategy'+index]==false){
        			fetch('GET',`https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/strategy/${index}`)
					.then((response)=>{
						this.options['strategy'+index]=response.data.data;
						console.log(this.options);
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
</style>