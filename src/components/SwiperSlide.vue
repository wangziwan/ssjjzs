<template>
	<div ref='swiperslide' class="slide swiper-container">
	    <ul class="swiper-wrapper">
	      <li class="swiper-slide" v-for="item in options.slideArr">
	      	<a @click="gotoAddress({path:`${options.baseUrl}${item.id}`})">
	      		<img :src="item.imgUrl" alt="">
	      		<p>{{item.title}}</p>
	      	</a>
	      </li>
	    </ul>
	    <!-- Add Pagination -->
    	<div class="swiper-pagination"></div>
  	</div>
</template>
<script>
  import '../../static/plugins/swiper/css/swiper.min.css';
  import swiper from '../../static/plugins/swiper/js/swiper.min.js';
  export default {
  	props:{
  		options:{
  			baseUrl:{
  				type:String
  			},
  			slideArr:{
  				type:Array
  			},
  			style:{
  				type:Object
  			}
  		}
  	},
  	mounted(){
  		//console.log(Swiper)
  		new swiper('.swiper-container',{
			pagination: {
				el: '.swiper-pagination',
			},
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
  		});

  		this.initStyle();
  		
  	},
  	methods:{
  		gotoAddress(path,index){
    		this.$router.push(path);
    		this.activeId=index;
    	},
    	initStyle(){
    		if(this.options.style){
    			this.$refs.swiperslide.style.maxWidth=this.options.style.width;
				this.$refs.swiperslide.style.maxHeight=this.options.style.height;
    		}
    	}
  	}
  }
</script>
<style scoped lang='less'>
	.swiper-slide>a{
		display: block;
		width: 100%;
		height: 100%;
		& img{
			display:block;
			width:100%;
		}
		& p{
			width:100%;
			font-size:0.36rem;
			line-height:30px;
			color:#fff;
			position:absolute;
			left:0.16rem;
			bottom:0.5rem;
			text-align:left;
		}
	}
</style>