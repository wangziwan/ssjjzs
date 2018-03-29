<template>
		<list :option="options">
			
		</list>
	</div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import {fetch} from '../../config/fetch.js'
import list from '../../components/list'
export default{
	components:{
		list
	},
	data(){
		return {
			options:[]
		}
	},
	mounted(){
		fetch('GET','https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/zuixinContent')
		.then((response)=>{
			this.options=response.data.data;
		})
		.catch((response)=>{
			console.log(response);
		}); 
	}
}
</script>
