import Vue from 'vue';
Vue.directive('focus',{
	inserted:function(el){
		el.focus();
		el.setAttribute('value','自定义指令');
	},
	bind:(el)=>{
		console.log(el);
	}
})
Vue.directive('load-more',{
	bind:(el,binding)=>{
		let scrollEl= document.body;
		let screenH=window.innerHeight;//window可是高度
		let oldScrollTop =0;//执行binding.value函数时最大滚动距离
		let height;
		let timer;
		const loadMore=()=>{
			if(scrollEl.scrollTop+screenH>height-20){
				binding.value();//自定义指令绑定的内容
				oldScrollTop = scrollEl.scrollTop;
			}			
		}
		const moveEnd=()=>{
/*			timer=requestAnimationFrame(()=>{
				if(oldScrollTop!=scrollEl.scrollTop){
					oldScrollTop=scrollEl.scrollTop;
				}else{
					console.log('cancelAnimationFrame')
					cancelAnimationFrame(timer);
					height = scrollEl.clientHeight;
					loadMore();
				}				
			})*/
		}
		el.addEventListener('touchstart',()=>{
			height=scrollEl.offsetHeight;
		},false);
		el.addEventListener('touchmove',()=>{
/*			console.log(el.clientHeight)*/
			if(oldScrollTop<scrollEl.scrollTop){//避免:拖动页面不放且拖动距离小于上一次请求结束后的最大scrollTop，重复执行函数
				loadMore();
			}
		
		},false);
		el.addEventListener('touchend',()=>{
			moveEnd();
		},false)
	}
})
Vue.directive('refresh',{
	bind:(el,binding)=>{

	}
})
export {Vue};