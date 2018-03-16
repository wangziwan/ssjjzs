<template>
	<div class="zhanchang">
		<headTitle></headTitle>
		<ul>
			<li>
				<h4>游戏资料</h4>
				<ol>
					<li v-for="item in items.datum">
						<a href="javascript:;" @click="gotoAddress(item.url)">
							<img :src="item.icon" alt="">
							<p>{{item.title}}</p>
						</a>
					</li>
				</ol>
			</li>
			<li>
				<h4>游戏战友</h4>
				<ol>
					<li v-for="item in items.battleFriend">
						<a href="javascript:;" @click="gotoAddress(item.url)">
							<img :src="item.icon" alt="">
							<p>{{item.title}}</p>
						</a>
					</li>
				</ol>
			</li>
			<li>
				<h4>进入游戏</h4>
				<ol>
					<li v-for="item in items.intoGame">
						<a href="javascript:;" @click="gotoAddress(item.url)">
							<img :src="item.icon" alt="">
							<p>{{item.title}}</p>
						</a>
					</li>
				</ol>
			</li>
		</ul>
	</div>
</template>
<style scoped lang="less">
	.zhanchang{
		background:#2b2e35;
		& ul>li{
			background:#fff;
			margin-bottom:0.24rem;
			& h4{
				padding:0 0.28rem;
				color:#292c34;
				font-size:16px;
				line-height:42px;
			}
			[data-dpr="2"] & h4{
				font-size:32px;
				line-height:84px;
			}
			[data-dpr="3"] & h4{
				font-size:48px;
				line-height:126px;
			}
			& ol{
				display:flex;
				padding:0.36rem 0;
				background:#f3f3f3;
				& li{
					background:none;
					width:25%;
					& a{
						display:block;
						width:100%;
						& img{
							width:auto;
							display:block;
							margin: 0 auto;
						}
						& p{
							font-size:14px;
							color:#000;
							line-height:22px;
							text-align:center;
						}
						[data-dpr="2"] & p{
							font-size:28px;
							line-height:44px;
						}
						[data-dpr="3"] & p{
							font-size:42px;
							line-height:66px;
						}
					}

				}
			}
		}
	}
</style>
<script>
	import headTitle from '../components/head'
	export default{
		components:{
			headTitle
		},
		data(){
			return {
				items:{
					datum:[{
						icon:'../../static/images/zhanchang/icon_armoury.png',
						title:'枪械库',
						url:'/zhanchang/armoury'
					},{
						icon:'../../static/images/zhanchang/icon_character.png',
						title:'角色',
						url:'/zhanchang/character'
					},{
						icon:'../../static/images/zhanchang/icon_map.png',
						title:'地图',
						url:'/zhanchang/map'
					},{
						icon:'../../static/images/zhanchang/icon_strategy.png',
						title:'游戏攻略',
						url:'/zhanchang/strategy'
					}],
					battleFriend:[{
						icon:'../../static/images/zhanchang/icon_rank.png',
						title:'天梯排行',
						url:'/zhanchang/rank'
					},{
						icon:'../../static/images/zhanchang/icon_forum.png',
						title:'官方论坛',
						/*url:'/zhanchang/forum'*/
					},{
						icon:'../../static/images/zhanchang/icon_nearby.png',
						title:'附近战友',
						url:'/zhanchang/nearby'
					}],
					intoGame:[{
						icon:'../../static/images/zhanchang/icon_download.png',
						title:'游戏下载',
						/*url:'/zhanchang/download'*/
					},{
						icon:'../../static/images/zhanchang/icon_activity.png',
						title:'游戏活动',
						url:'/zhanchang/activity'
					}]
					
				}
			}
		},
		methods:{
        	gotoAddress(path,index){
        		//this.RECORD_ZIXUNSTATUS(index);
        		this.$router.push(path);

        	}
		}
	}
</script>
