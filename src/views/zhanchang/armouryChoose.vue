<template>
	<dl>
		<dd v-for="item in items">
			<div>
				<h4>{{item.title}}</h4>
			</div>
			<ul>
				<li v-for="img in item.imgArr">
					<img :src="img.image" alt="">
					<p>{{img.title}}</p>
				</li>
			</ul>
		</dd>
	</dl>
</template>
<style scoped lang='less'>
.font(@font,@line){
	font-size:@font;
	line-height:@line;
}
dd{
	padding:0 0.28rem;
	background:#fff;
	& div{
		display:flex;
		justify-content:space-between;
		& h4{
			color:#292c34;
			.font(16px,42px);
			[data-dpr="2"] &{
				.font(32px,84px)
			}
			[data-dpr="3"] &{
				.font(48px,126px)
			}				
		}
		& a{
			color:#999999;
			.font(12px,42px);
			[data-dpr="2"] &{
				.font(24px,84px)
			}
			[data-dpr="3"] &{
				.font(36px,126px)
			}
		}
	}
	& ul{
		padding-top:0.4rem;
		border-top:1px solid #dbdbdd;
		border-bottom:1px solid #dbdbdd;
		display:flex;
		justify-content:space-between;
		flex-flow:row wrap;
		& li{
			width:50%;
			box-sizing:border-box;
			margin-bottom:0.16rem;
			&:nth-child(odd){
				padding-right:0.16rem;
			}
			&:nth-child(even){
				padding-left:0.16rem;
			}
			& img{
				display:block;
				width:100%;
			}
			& p{
				color:#32393f;
				text-align:center;
				.font(14px,32px);
				[data-dpr="2"] &{
					.font(28px,64px)
				}
				[data-dpr="3"] &{
					.font(42px,96px)
				}
			}
		}
	}
}
</style>
<script>
	import {fetch} from '../../config/fetch.js';
	export default {
		data(){
			return {
				items:[{
					title:'主武器',
					url:'http://www.baidu.com',
					imgArr:[{
						title:'ak-47',
						image:''
					}]
				},{
					title:'主武器',
					url:'http://www.baidu.com',
					imgArr:[{
						title:'ak-47',
						image:''
					}]
				},{
					title:'主武器',
					url:'http://www.baidu.com',
					imgArr:[{
						title:'ak-47',
						image:''
					}]
				},{
					title:'主武器',
					url:'http://www.baidu.com',
					imgArr:[{
						title:'ak-47',
						image:''
					}]
				}]
			}
		},
		mounted(){
			//加载简略武器列表
			fetch('GET','armoury/all')
			.then((response)=>{
				console.log(response.data.data)
				this.items=response.data.data;
			})
			.catch((reject)=>{
				console.log(reject);
			})
			
		},
	}
</script>