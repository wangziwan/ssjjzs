<template>
	<div>
		<headTitle />
		<ul>
			<li v-for='item in items'></li>
		</ul>
	</div>
</template>
<script>
import headTitle from '../components/head'
	export default{		
		components:{			
			headTitle
		},
		data(){
			return{
				items:[{

				}]
			}
		}
	}
</script>