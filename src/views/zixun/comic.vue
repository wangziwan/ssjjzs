<template>
	<div class="novel">
		<swiper-slider :options='option'></swiper-slider>		
	</div>

</template>
<script>
	import swiperSlider from '../../components/SwiperSlide.vue';
	import {getData} from '../../config/getData.js';
	export default {
		components:{
			swiperSlider
		},
		data(){
			return {
				option:{
					baseUrl:"/zixun/comic/",
					slideArr:[{
						image:"../../../static/images/novel1.jpg",
						title:"生死狙击漫画1",
						id:1,
					},{
						image:"../../../static/images/novel2.jpg",
						title:"生死狙击漫画2",
						id:2,
					}],
					style:{
						width:'8.0rem',
						height:'12.0rem'
					}
				},//轮播图参数配置

			}
		},
		mounted(){
			//轮播图数据
/*			getData('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/slide')
			.then((response)=>{
				this.option.slideArr=response.data.data;
			})
			.catch((response)=>{
				console.log(response);
			})*/
			this.getContentStyle();
		},
		methods:{
			getContentStyle(){//获得实际contentHeight
				document.querySelector('.novel').style.height=(
					window.innerHeight-
					document.querySelector('.footer').getBoundingClientRect().height-
					document.querySelector('h1').getBoundingClientRect().height-
					document.querySelector('.zixun_tab').getBoundingClientRect().height)+'px'
				;
			}
		}
	}
</script>
<style>
	.novel{
		background: #282a30;
	}
</style>