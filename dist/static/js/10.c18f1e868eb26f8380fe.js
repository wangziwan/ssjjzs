webpackJsonp([10],{"4WxF":function(t,e){},GwIj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("KOga"),s={data:function(){return{commentText:null,content:{},comment:{}}},computed:{userInfo:function(){return this.$store.state.userInfo}},mounted:function(){var t=this;console.log(this.$route),Object(o.a)("GET","detail/"+this.$route.params.id+"/content").then(function(e){console.log(e.data.data),t.content=e.data.data}).catch(function(t){console.log(t)}),Object(o.a)("POST","detail/"+this.$route.params.id+"/comment").then(function(e){console.log(e.data.data),t.comment=e.data.data}).catch(function(t){console.log(t)})},methods:{gotoBack:function(){this.$router.go(-1)},postComment:function(){var t,e={name:this.$store.state.userInfo.name,image:this.$store.state.userInfo.image,csentence:this.commentText,datetime:(t=new Date,t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds())};this.comment.comment.push(e),this.commentText=null}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("header",[n("a",{staticClass:"iconfont icon-back",on:{click:t.gotoBack}}),t._v(" "),n("h1",[t._v("资讯详情")]),t._v(" "),n("a",{staticClass:"iconfont",class:[t.content.isCollect?"icon-collect_active":"icon-collect"]}),t._v(" "),n("a",{staticClass:"iconfont icon-share"})]),t._v(" "),n("div",{staticClass:"content"},[n("h2",[t._v(t._s(t.content.title))]),t._v(" "),n("div",{staticClass:"info"},[n("i",[t._v(t._s(t.content.datetime))]),t._v(" "),n("i",[t._v(t._s(t.content.from))])]),t._v(" "),n("div",{staticClass:"mainContent"},[t._v("\n\t\t\t"+t._s(t.content.content)+"\n\t\t")])]),t._v(" "),n("div",{staticClass:"comment"},[n("h3",[t._v("评论")]),t._v(" "),n("ul",t._l(t.comment.comment,function(e){return n("li",[n("div",{staticClass:"userImg"},[n("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),n("div",[n("p",{staticClass:"userName"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"userTime"},[t._v(t._s(e.datetime))]),t._v(" "),n("p",{staticClass:"userComment"},[t._v(t._s(e.csentence))])])])}))]),t._v(" "),n("div",{staticClass:"below"},[n("div",{staticClass:"commentInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],attrs:{placeholder:"我要评论",type:"text"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),t._v(" "),n("i",{staticClass:"iconfont icon-write"})]),t._v(" "),n("button",{on:{click:t.postComment}},[t._v("评论")])])])},staticRenderFns:[]};var c=n("VU/8")(s,a,!1,function(t){n("4WxF")},"data-v-b098219c",null);e.default=c.exports}});
//# sourceMappingURL=10.c18f1e868eb26f8380fe.js.map