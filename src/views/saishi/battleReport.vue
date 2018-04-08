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
		fetch('GET','zuixinContent')
		.then((response)=>{
			this.options=response.data.data;
		})
		.catch((response)=>{
			console.log(response);
		}); 
	}
}
</script>
