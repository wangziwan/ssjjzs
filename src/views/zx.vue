<template>
	<div>
		<headTitle />
		<ul>
			<li v-for='(item,index) in items'>
				<router-link :to="{ zxId: index}">{{$route.params.zxId}}</router-link>
			</li>
		</ul>
		<router-view />
		<foot/>
	</div>
</template>
<script>
import headTitle from '../components/head'
import foot from '../components/foot'
	export default{		
		components:{			
			headTitle,
			foot
		},
		data(){
			return{
				items:[{
					tab:'最新',
					zxId:0
				},{
					tab:'新闻',
					zxId:1
				},{
					tab:'小说',
					zxId:2
				},{
					tab:'漫画',
					zxId:3
				}]
			}
		}
	}
</script>