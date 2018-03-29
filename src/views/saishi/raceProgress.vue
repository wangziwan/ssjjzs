<template>
	<div class="progress">
		<ul>
			<li v-for='item in items' class="race">
				
				<div class="title">
					<span>{{item.date}}</span>
					<h4>{{item.title}}</h4>
				</div>
				<ol class="context">
					<li>
						<img :src="item.one.image" alt="">
						<p>{{item.one.name}}</p>
					</li>
					<li>
						<span>{{item.time}}</span>
						<i>{{item.race_status}}</i>
						<b>{{item.score}}</b>
					</li>
					<li>
						<img :src="item.two.image" alt="">
						<p>{{item.two.name}}</p>
					</li>
				</ol>
			</li>
		</ul>
	</div>
</template>
<script>
import {fetch} from '../../config/fetch'
	export default{
		data(){
			return {
				items:[{
					date:'05-25',
					title:'第一节生死狙击大赛',
					one:{
						image:'',
						name:''
					},
					two:{
						image:'',
						name:''
					},
					time:'12:00',
					race_status:'进行中',
					score:'2:1'
				}],
			}
		},
		mounted(){
			fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/race_progress')
			.then((response)=>{
				this.items=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			});
			
		}
	}
</script>
<style scoped lang='less'>
	.progress{
		background:#000;
	}
	.font(@font,@line){
		font-size:@font;
		line-height:@line;
	}
	.race{
		background:#fcfdfd;
		margin-bottom:0.28rem;
		text-align:center;
		& .title{
			background:#f6f6f6;
			display:flex;
			& span{
				flex:2;
				.font(12px,40px);
				color:#9ea3a6;
				[data-dpr='2'] &{
					.font(24px,80px);
				}
				[data-dpr='3'] &{
					.font(36px,120px);
				}
			}
			& h4{
				flex:6;
				.font(16px,40px);
				color:#333333;
				[data-dpr='2'] &{
					.font(32px,80px);
				}
				[data-dpr='3'] &{
					.font(48px,120px);
				}
			}
			&:after{
				content:"";
				flex:2;
			}
		}
		& .context{
			display:flex;
			text-align:center;
			padding:0.24rem 0 0.16rem;
			& li{
				flex:1;
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
					.font(12px,28px);
					margin-top:0.16rem;
					color:#333333;
					[data-dpr='2'] &{
						.font(24px,56px);
					}
					[data-dpr='3'] &{
						.font(36px,84px);
					}
				}
				& i{

					color:#666;
					margin:0 0.4rem;
					border:1px solid #666;
					border-radius:0.08rem;
					width:auto;
					.font(12px,28px);					
					[data-dpr='2'] &{
						.font(24px,56px);
					}
					[data-dpr='3'] &{
						.font(36px,84px);
					}
				}
				& b{
					.font(14px,28px);
					color:#f33;
					[data-dpr='2'] &{
						.font(28px,56px);
					}
					[data-dpr='3'] &{
						.font(42px,84px);
					}
				}
			}
		}
	}
</style>