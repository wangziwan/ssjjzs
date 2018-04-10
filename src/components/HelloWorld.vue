<template>
  <div class="hello">
    <h1>{{ msg }} <br /><router-link class="go" to="/zixun">go=></router-link></h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到生死狙击小助手开源项目'
    }
  },
  mounted(){
    setTimeout(this.gotoIndex,3000)
  },
  methods:{
    gotoIndex:function(){
      this.$router.push('/zixun');
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
