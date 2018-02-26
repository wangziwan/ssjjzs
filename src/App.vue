
<template>
  <div id="app1">
    <!-- <img src="./assets/logo.png"> -->

    <router-view></router-view>

  </div>
</template>

<script>
import foot from './components/foot'
export default {
  name: 'App',
  components:{
    foot
  }
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
