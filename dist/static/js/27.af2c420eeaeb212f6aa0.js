webpackJsonp([27],{MYIo:function(t,e){},jJjD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("KOga"),i={components:{childTitle:n("JHw8").a},data:function(){return{title:"我的评论",contents:[{image:"",title:"媒体赛B组回顾",comments:[{image:"",name:"好帅",text:"会哦东很好",time:"2018-10-30 12:00:00"},{image:"",name:"好帅",text:"会哦东很好",time:"2018-10-30 12:00:00"}]}]}},mounted:function(){var t=this;Object(a.a)("get","me/comments").then(function(e){console.log(e.data.data),t.contents=e.data.data}).catch(function(t){console.log(t)})},methods:{gotoDetail:function(t){this.$router.push({path:"/detail/"+t})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("child-title",{attrs:{title:t.title}}),t._v(" "),n("ul",t._l(t.contents,function(e){return n("li",{on:{click:function(n){t.gotoDetail(e.id)}}},[n("div",{staticClass:"article"},[n("img",{attrs:{src:e.image,alt:""}}),t._v(" "),n("h5",[t._v(t._s(e.title))])]),t._v(" "),n("ol",{staticClass:"commentDetail"},t._l(e.comments,function(e){return n("li",[n("img",{attrs:{src:e.image,alt:""}}),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"top"},[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.time))])]),t._v(" "),n("p",[t._v(t._s(e.text))])])])}))])}))],1)},staticRenderFns:[]};var c=n("VU/8")(i,s,!1,function(t){n("MYIo")},"data-v-49eac546",null);e.default=c.exports}});
//# sourceMappingURL=27.af2c420eeaeb212f6aa0.js.map