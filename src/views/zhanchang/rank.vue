<template>
	<div class="rank">
		<header>
			<a class="iconfont icon-back" @click="gotoBack"></a>
			<h1>天梯排行</h1>
			<a class="mySeason" href="javascript:;">我的赛季</a>
		</header>
		<div class="info">
			<div class="img">
				<img :src="myInfo.image" alt="">	
			</div>
			<h3>{{myInfo.name}}</h3>
			<ul>
				<li>我的排名：<span>{{myInfo.rank}}</span></li>
				<li>超越了<span>{{myInfo.percent}}%</span>玩家</li>
			</ul>
		</div>
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th>排名</th>
						<th>昵称</th>
						<th>区服</th>
						<th>所属战队</th>
						<th>战绩</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in rank">
						<td>{{index+1}}</td>
						<td><img :src="item.image" alt="">{{item.name}}</td>
						<td>{{item.area}}</td>
						<td>{{item.team}}</td>
						<td>{{item.score}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js'
	export default{
		data(){
			return {
				myInfo:{

				},
				rank:[]
			}
		},
		mounted(){
			fetch('POST','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/myRank')
			.then((response)=>{
				console.log(response.data.data)
				this.myInfo=response.data.data;
			}),
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/rank')
			.then((response)=>{
				console.log(response.data.data)
				this.rank=response.data.data;
			})

		},
		methods:{
			gotoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
		height:@line;
		border-radius:@line/2;
	}
	.rank{
		width:100%;
		& .info{
			width:100%;
			background:url('../../../static/images/zhanchang/rankTopBg.jpg') no-repeat center top;
			background-size:100%;
			padding-bottom:0.68rem;
			& .img{
				width:20%;
				padding: 0.28rem 0;
				margin:0 auto;
				& img{
					display:block;
					width:100%;
					border-radius:50%;
				}				
			}
			& h3{
				color:#fff;
				text-align:center;
				.font(18px,30px);
				[data-dpr="2"] &{
					.font(36px,60px)
				}
				[data-dpr="3"] &{
					.font(54px,90px)
				}
			}
			& ul{
				display:flex;
				justify-content:space-between;
				& li{
					color:#516788;
					flex:1;
					box-sizing:border-box;
					.font(12px,20px);
					[data-dpr="2"] &{
						.font(24px,40px)
					}
					[data-dpr="3"] &{
						.font(36px,60px)
					}
					& span{
						color:#fcba08;
					}
					&:nth-child(1){
						text-align:right;
						padding-right:0.28rem;
					}
					&:nth-child(2){
						padding-left:0.28rem;
						text-align:left;
					}
				}
			}
		}
		& .table-responsive{
			min-height: .01%;
    		overflow-x: auto;
    		box-sizing:border-box;
			& .table{
			    width: 100%;
    			max-width: 100%;
				text-align:center;
			    border-spacing: 0;
    			border-collapse: collapse;
				& tr{
					display: table-row;
					height:1.16rem;
					border-bottom:1px solid #ccc;
					& th{
						text-align:center;
					}
					& td{
						.font(12px,42px);
						[data-dpr="2"] &{
							.font(24px,84px);
						}
						[data-dpr="3"] &{
							.font(36px,126px);
						}
						& img{
							vertical-align:middle;
							display:inline-block;
							width:0.68rem;
							height:0.68rem;
							border-radius:0.34rem;
						}
						&:nth-child(1){
							color:#030303;
						}
						&:nth-child(2){
							color:#aaa17e;
						}
						&:nth-child(5){
							color:#999;
						}					
					}
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
		align-items:center;
		& a{
			flex:2;
			font-size:0.48rem;
			display:flex;
			justify-content:center;
			&.goBack{
				flex:1;
			}
			&.mySeason{
				flex:2;
				background:#3a6ad7;
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
</style>