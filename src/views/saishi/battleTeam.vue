<template>
	<div class="teamList">
		<ul>
			<li v-for="item in items">
				<div class="img">
					<img :src="item.image" alt="">
				</div>
				<div class="text">
					<h3>{{item.name}}</h3>
					<p>{{item.sentence}}</p>
				</div>
				<div class="info">
					<h6>胜率:{{item.percent}}%</h6>
					<a class="iconfont icon-detail" @click="gotoDetail(item.id)"></a>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import {fetch} from '../../config/fetch.js'
	export default {
		data(){
			return {
				items:[],
			}
		},
		mounted(){
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/battleTeam')
			.then((response)=>{
				console.log(response.data.data)
				this.items=response.data.data;
			})			
		},
		methods:{
			gotoDetail(id){
				this.$router.push({path:`/saishi/battle_team/${id}`})
			}
		}
	}
</script>
<style scoped lang='less'>
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	.teamList{
		& li{
			display:flex;
			padding:0.2rem;
			border:1px solid #eee;
			& .img{
				flex:1;
				align-items:center;
				& img{
					display: block;
					width:1.6rem;
					height:1.6rem;
					border-radius:0.8rem;					
				}
			}
			& .text{
				flex:2;
				& h3{
					color:#32393f;
					.font(16px,26px);
					[data-dpr='2'] &{
						.font(32px,52px);
					}
					[data-dpr='3'] &{
						.font(48px,78px);
					}
				}
				& p{
					color:#9ea3a6;
					.font(12px,24px);
					[data-dpr='2'] &{
						.font(24px,48px);
					}
					[data-dpr='3'] &{
						.font(36px,72px);
					}
				}
			}
			& .info{
				flex:1;
				text-align:right;
				& h6{
					color:#333;
					.font(12px,26px);
					[data-dpr='2'] &{
						.font(24px,52px);
					}
					[data-dpr='3'] &{
						.font(36px,78px);
					}
				}
				& a{
					display:block;
					.font(14px,26px);
					[data-dpr='2'] &{
						.font(28px,52px);
					}
					[data-dpr='3'] &{
						.font(42px,78px);
					}
				}
			}
		}
	}
</style>