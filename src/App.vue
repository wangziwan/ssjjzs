
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
    <foot></foot>
  </div>
</template>

<script>
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
@font-face {
  font-family: 'iconfont';  /* project id 577385 */
  src: url('//at.alicdn.com/t/font_577385_icenrap1c0pe3ik9.eot');
  src: url('//at.alicdn.com/t/font_577385_icenrap1c0pe3ik9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_577385_icenrap1c0pe3ik9.woff') format('woff'),
  url('//at.alicdn.com/t/font_577385_icenrap1c0pe3ik9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_577385_icenrap1c0pe3ik9.svg#iconfont') format('svg');
}
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;*/
  color: #2c3e50;
  padding-bottom: 1.32rem;

}
</style>
