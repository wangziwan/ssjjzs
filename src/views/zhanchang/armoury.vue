<template>
	<div class="kind">
<!-- 		<header>
	<a class="iconfont icon-back" @click="gotoBack"></a>
	<h1>枪械库</h1>
</header> -->
		<child-title :title="title"></child-title>
		<div class="search">
			<div class="searchTop">
				<button @click="isShowMenu">分类检索</button>
				<input type="text" placeholder="输入武器名称">
			</div>
<!-- 			<div class="outDiv" style="height:160px;width:100%;background:#f00;position:relative;" @click="out">
	<div class="inDiv" style="height:80px;background:#000;width:100%;position:absolute;top:170px;left:0;" @click="aa"></div>
</div> -->
			<ul v-show="isShow">
				<li>
					<dl>
						<dt>类型</dt>
						<dd :class="{active:typesActiveId==index}" @click="gotoAddress('/zhanchang/armoury/choose',index,'type')" v-for="(type,index) in types">
							{{type.title}}
						</dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>属性</dt>
						<dd :class="{active:propertysActiveId==pIndex}" @click="gotoAddress('/zhanchang/armoury/choose',pIndex,'property')" v-for="(property,pIndex) in propertys">
							{{property.title}}
							<dl class="submenu" v-show="showSubMenu==pIndex">
								<dd :class="{active:subPropertysActiveId==sIndex}" @click.stop="gotoAddress('/zhanchang/armoury/choose',sIndex,'subProperty')" v-for="(item,sIndex) in property.subMenu">
									{{item.title}}
								</dd>
							</dl>
						</dd>
					</dl>
				</li>
				
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import childTitle from '../../components/childTitle'
	export default {
		components:{
			childTitle
		},
		data(){
			return {
				title:'枪械库',
				isShow:false,				
				typesActiveId:null,
				propertysActiveId:null,
				subPropertysActiveId:null,
				showSubMenu:null,		
				types:[{
					title:'黄金系列',
					id:0,
				},{
					title:'白银系列',
					id:1,					
				},{
					title:'荣耀系列',
					id:2,					
				}],
				propertys:[{
					title:'主武器',
					id:0,							
					subMenu:[{
						title:'步枪',
						id:0,
						
					},{
						title:'狙击枪',
						id:1,
						
					},{
						title:'冲锋枪',
						id:2,
						
					},{
						title:'机枪',
						id:3,
						
					},{
						title:'霰弹枪',
						id:4,
						
					}]
				},{
					title:'近战',
					id:1,									
				},{
					title:'手枪',
					id:2,
				},{
					title:'投掷',
					id:3,									
				}]
			}
		},
		mounted(){
			this.$router.push({path:'/zhanchang/armoury/all'});
/*				this.isShow=true;							
				this.propertysActiveId=0;
				this.subPropertysActiveId=0;
				this.showSubMenu=0;*/
		},
		methods:{
			gotoBack(){
				this.$router.push({path:'/zhanchang'});
			},
			isShowMenu(){
				if(this.isShow){
					this.isShow=false;
				}else{
					this.isShow=true;
				}
			},
			gotoAddress(path,index,param){				
				this[param+'sActiveId']=index;
				if(param=='property'){
					this.showSubMenu=index;	
				}
				var str='';
				var query={
					type:this.typesActiveId,
					property:this.propertysActiveId,
					subProperty:this.subPropertysActiveId
				};
				for(var i in query){
					if(query[i]==undefined){
						continue;
					}
					str+='&'+i+'='+query[i];
				}
				this.$router.push({path:path+'?'+str.slice(1)});
			}
		}
	}
</script>
<style scoped lang="less">
	.kind{
		padding-bottom:1.32rem;
	}
	.search{
		background:#2a2c34;
		padding: 0 0.28rem;		
		& .searchTop{
			display:flex;
			padding:0.2rem 0 0.2rem;
			justify-content:space-between;
			text-align:center;
			line-height:0.8rem;
			& button{
				flex:2;
				height:0.8rem;				
				color:#fff;
				background:#559aea;
				border:0 none;
				border-radius:0.4rem;
				margin-right:0.28rem;
				[data-dpr="2"] &{
					font-size:24px;
				}
				[data-dpr="3"] &{
					font-size:36px;
				}
			}
			& input{
				flex:8;
				background:#3f4249;
				font-size:12px;
				border:0 none;
				border-radius:0.4rem;
				text-align:center;
				color:#fff;
				&::placeholder{
					color:#767b87;
					text-align:center;
				}
				[data-dpr="2"] &{
					font-size:24px;
				}
				[data-dpr="3"] &{
					font-size:36px;
				}
			}
		}
		& ul{
			padding:0.4rem 0 0.4rem;
		}
		& li{
			width:100%;
			padding-bottom:0.2rem;
			& dl{
				display:flex;
				height:0.64rem;
				line-height:0.64rem;
				font-size:14px;
				position:relative;
				[data-dpr="2"] &{
					font-size:28px;
				}
				[data-dpr="3"] &{
					font-size:42px;
				}
				& dt{
					padding-right:0.28rem;
					color:#fcba08;
				}
				& dd{
					padding:0 0.28rem;
					color:#b2b2b2;
					&.active{
						color:#fcba08;
					}
					& .submenu{
						width:100%;
						position:absolute;
						left:0.28rem;
						top:0.64rem;
						z-index:9;
						display:flex;
					}
				}
			}
		}

	}
</style>