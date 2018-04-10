<template>
	<ul class="footer" v-show="showFoot">
		<li v-for="(item,index) in items">
			<a href='javascript:;' @click="gotoAddress(item.url,index)">
				<img :src="activeId==index?item.icon_hov_src:item.icon_src" alt="">
				<p :class="{active:index==activeId}">{{item.title}}</p>
			</a>
		</li>
	</ul>

</template>
<script>
	export default {
		data(){
			return {
				activeId:0,
				items:[{
					url:'/zixun',
					icon_hov_src:'static/images/footer_icon_hov_zx.png',
					icon_src:'static/images/footer_icon_zx.png',
					title:'资讯'
				},{
					url:'/zhanchang',
					icon_hov_src:'static/images/footer_icon_hov_zc.png',
					icon_src:'static/images/footer_icon_zc.png',
					title:'战场'
				},{
					url:'/saishi',
					icon_hov_src:'static/images/footer_icon_hov_ss.png',
					icon_src:'static/images/footer_icon_ss.png',
					title:'赛事'
				},{
					url:'/zhibo',
					icon_hov_src:'static/images/footer_icon_hov_zb.png',
					icon_src:'static/images/footer_icon_zb.png',
					title:'直播'
				},{
					url:'/me',
					icon_hov_src:'static/images/footer_icon_hov_wd.png',
					icon_src:'static/images/footer_icon_wd.png',
					title:'我的'
				}],
				activeId:null
			}
		},
		computed:{
			//判断当前页面是否需要显示底部导航
			showFoot:function(){
				if(/detail/i.test(this.$route.path)){
					return false;
				}else{
					return true;
				}
			}
		},
		methods: {
        	gotoAddress(path,index){
        		this.$router.push(path);
        		var path = this.$route.path;
        		this.activeId = index;
        	}
        },
        mounted(){
        	var path = this.$route.path;
        	if(path.indexOf('zixun') != -1) {
        		this.activeId = 0;
        	} else if(path.indexOf('zhanchang') != -1) {
        		this.activeId = 1;
        	} else if(path.indexOf('saishi') != -1) {
        		this.activeId = 2;
        	} else if(path.indexOf('zhibo') != -1) {
        		this.activeId = 3;
        	} else if(path.indexOf('me') != -1) {
        		this.activeId = 4;
        	}
        	console.log(':' + this.activeId)
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
		font-size: 12px;
		text-align: center;
	}
	[data-dpr="2"] .footer p{
		color: #fff;
		font-size: 24px;
		text-align: center;
	}
	[data-dpr="3"] .footer p{
		color: #fff;
		font-size: 36px;
		text-align: center;
	}
	.footer p.active{
		color: #fcb802;
	}
</style>