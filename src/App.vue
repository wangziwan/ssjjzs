
<template>
  <div id="app1">
<!--     <svg class="icon-all">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-all"></use>
    </svg> -->
    <transition name="router-fade" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
            
        </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <foot></foot>
  </div>
</template>

<script>
import SvgIcon from './components/svg-icon/SvgIcon.vue';
import foot from './components/foot'
export default {
  name: 'App',
  components:{
    foot
  },
  data(){
    return {
    }
  },
  mounted(){
  }
}
</script>

<style>

#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;*/
  color: #2c3e50;

}
</style>
