<template>
  <div class="hello">
    <h1>{{ msg }} (<span>{{time}}</span>s)<br /><router-link class="go" to="/zixun">跳过=></router-link></h1>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到生死狙击小助手开源项目',
      time:3
    }
  },
  mounted(){
    this.showFootFuc();
    this.timeLoad();
    if(flag) clearTimeout(flag);
    var flag = setTimeout(this.gotoIndex,3000);
  },
  methods:{
    ...mapMutations(['SHOWFOOT']),
    gotoIndex:function(){
      this.$router.push('/zixun');
      this.SHOWFOOT(true);
    },
    showFootFuc(){
      this.SHOWFOOT(false);
    },
    timeLoad(){
      if(flag) clearInterval(flag);
      var flag = setInterval(()=>{
        this.time--
      },1000);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
  font-size:0.5rem;
  margin-top:0.2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.go {
  font-size:1rem;
}
</style>
