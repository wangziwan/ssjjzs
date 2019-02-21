
<template>
  <div id="app1">
    <transition name="router-fade" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
            
        </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <foot v-show="showFootFlag"></foot>
  </div>
</template>

<script>
import SvgIcon from './components/svg-icon/SvgIcon.vue';
import foot from './components/foot';
export default {
  name: 'App',
  components:{
    foot
  },
  data(){
    return {
    }
  },
  computed:{
    showFootFlag(){
      return this.$store.state.showFoot
    }
  },
  mounted(){
    
  },
  methods:{
  }
}
</script>

<style lang="less">
a:hover{text-decoration:none;}
#app1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center;*/
    color: #2c3e50;
}

</style>
