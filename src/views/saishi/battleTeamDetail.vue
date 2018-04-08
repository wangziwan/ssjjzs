<template>
	<div class="teamDetail">
		<childTitle :title="title"></childTitle>
		<div class="team">
			<div class="img">
				<img :src="team.image" alt="">
			</div>
			<div class="text">
				<h3>{{team.name}}</h3>
				<p>{{team.sentence}}</p>
			</div>
		</div>
	
		<div class="member">
			<h4>战队阵容</h4>
				<ul>
					<li v-for='member in members'>
						<img :src="member.image" alt="">
						<p>{{member.job}}</p>
						<span>id:{{member.id}}</span>
						<i>{{member.character}}</i>
					</li>
				</ul>		
		</div>
		<div class="achievement">
			<h4>战队成绩</h4>
			<ul>
				<li v-for='achievement in achievements'>
					<ol class="context">
						<li>
							<img :src="achievement.one.image" alt="">
							<p>{{achievement.one.name}}</p>
						</li>
						<li>
							<span>VS</span>
							<i :class="achievement.result?'success':''">{{achievement.result?'胜利':'失败'}}</i>
							<b>{{achievement.raceName}}</b>
						</li>
						<li>
							<img :src="achievement.two.image" alt="">
							<p>{{achievement.two.name}}</p>
						</li>
					</ol>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import childTitle from '../../components/childTitle.vue'
import {fetch} from '../../config/fetch.js'
	export default{
		components:{
			childTitle
		},
		data(){
			return {
				title:'战队详情',
				team:{

				},
				members:[],
				achievements:[]
			}
		},
		mounted(){
			fetch('GET','saishi/battle_team/'+this.$route.params.id)
			.then((response)=>{
				this.team=response.data.data;
			})
			.then((reject)=>{
				console.log(reject);
			}),
			fetch('GET','saishi/members/'+this.$route.params.id)
			.then((response)=>{
				this.members=response.data.data;
			})
			.then((reject)=>{
				console.log(reject);
			}),
			fetch('GET','saishi/achievement/'+this.$route.params.id)
			.then((response)=>{
				this.achievements=response.data.data;
			})
			.then((reject)=>{
				console.log(reject);
			})
		}
	}
</script>
<style scoped lang='less'>
.font(@font,@line){
	font-size:@font;
	line-height:@line;
}
	.teamDetail{
		padding:0 0 1.32rem;
		background:#000;
		& .team{
			padding:0.28rem;
			background:#fff;
			border:1px solid #eee;
			display:flex;
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
				flex:3;
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
		}
		& .member{
			margin:0.2rem auto 0;
			background:#fff;
			& h4{
				color:#292c34;
				padding-left:0.28rem;
				border:1px solid #eee;
				.font(16px,44px);
				[data-dpr='2'] &{
					.font(32px,88px);
				}
				[data-dpr='3'] &{
					.font(48px,132px);
				}
			}
			& ul{
				width:auto;
				overflow:auto;
				padding: 0.4rem 0;
				box-sizing:border-box;
				display:flex;
				& li{
					padding:0 0.28rem;
					flex:0 0 1.94rem;			
					text-align:center;
					& img{
						display:block;
						width:1.6rem;
						height:1.6rem;
						border-radius:50%;
						margin:0 auto;
					}
					& p{
						color:#999;
						margin-top:0.16rem;
						.font(14px,18px);
						[data-dpr='2'] &{
							.font(28px,36px);
						}
						[data-dpr='3'] &{
							.font(42px,54px);
						}
					}
					& span,& i{
						font-style:normal;
						display:block;
						width:100%;
						color:#333;
						.font(12px,16px);
						[data-dpr='2'] &{
							.font(24px,32px);
						}
						[data-dpr='3'] &{
							.font(36px,48px);
						}
					}
				}
			}
		}
		& .achievement{
			margin:0.2rem auto 0;
			background:#fff;
			& h4{
				color:#292c34;
				padding-left:0.28rem;
				border:1px solid #eee;
				.font(16px,44px);
				[data-dpr='2'] &{
					.font(32px,88px);
				}
				[data-dpr='3'] &{
					.font(48px,132px);
				}
			}
			& ul{
				padding:0 0.28rem;
			}
			& .context{
				display:flex;
				padding:0.24rem 0 0.16rem;
				& li{
					flex:1;
					text-align:center;
					& img{
						width:1.6rem;
						height:1.6rem;
						margin-top:0.12rem;
						border-radius:0.8rem;
					}
					& p{
						marigin-top:0.16rem;
						.font(12px,20px);
						color:#333333;
						[data-dpr='2'] &{
							.font(24px,40px);
						}
						[data-dpr='3'] &{
							.font(36px,60px);
						}
					}
					& span,& i,& b{			
						display:block;
						font-style:normal;				
					}
					& span{
						font-family:Aparajita;
						font-style:italic;						
						margin-top:0.16rem;
						color:#f70f0f;
						.font(26px,28px);
						[data-dpr='2'] &{
							.font(52px,56px);
						}
						[data-dpr='3'] &{
							.font(78px,84px);
						}
					}
					& i{
						color:#fff;
						width:1.48rem;
						margin:0 auto;
						background:#999;
						.font(12px,28px);					
						[data-dpr='2'] &{
							.font(24px,56px);
						}
						[data-dpr='3'] &{
							.font(36px,84px);
						}
						&.success{
							background:#f1a900;
						}
					}
					& b{
						.font(12px,28px);
						color:#7a7a7a;
						[data-dpr='2'] &{
							.font(24px,56px);
						}
						[data-dpr='3'] &{
							.font(36px,84px);
						}
					}
				}
			}
		}
	}
</style>