<template>
	<ul class="footer">
		<li v-for="item in items">
			<router-link :to="item.url">
				<img :src="item.icon_src" alt="">
				<p>{{item.title}}</p>
			</router-link>
		</li>
	</ul>

</template>
<script>
	export default {
		data(){
			return {
				items:[{
					url:'/zixun',
					icon_src:'../../static/images/footer_icon_zx.png',
					title:'资讯'
				},{
					url:'/zhanchang',
					icon_src:'../../static/images/footer_icon_zc.png',
					title:'战场'
				},{
					url:'/saishi',
					icon_src:'../../static/images/footer_icon_ss.png',
					title:'赛事'
				},{
					url:'/zhibo',
					icon_src:'../../static/images/footer_icon_zb.png',
					title:'直播'
				}]
			}
		}
	}
</script>
<style scoped>
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index:100;
		width: 100%;
		height: 1.32rem;
		background: url("../../static/images/footer_bg.jpg") no-repeat center top;
		background-size: cover;
		display: flex;

	}
		.footer li:not(:first-child){
			background:black;
		}
		.footer li{
			flex: 1;
			display: flex;
			justify-content: center;

		}
		.footer li img{
			display: block;
			width: 0.84rem;

		}
			.footer p{
				color: #fff;
				font-size: 22px;
			}
</style>