webpackJsonp([13],{PGs7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("pBo4"),o=a.n(n),s=a("KOga"),i={components:{childTitle:a("JHw8").a},data:function(){return{title:"我的好友",contents:[]}},mounted:function(){var t=this;Object(s.a)("GET","nearby").then(function(e){t.contents=e.data.data}).catch(function(t){console.log(t)})},methods:{gotoBack:function(){this.$router.go(-1)},loadMore:function(){var t=this;this.preventRepeatReuqest||(this.preventRepeatReuqest=!0,Object(s.a)("GET","nearby").then(function(e){var a;(a=t.contents).push.apply(a,o()(e.data.data)),t.preventRepeatReuqest=!1}).catch(function(e){console.log(e),t.preventRepeatReuqest=!1}),console.log("loadmore"))}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend"},[a("child-title",{attrs:{title:t.title}}),t._v(" "),a("ul",{directives:[{name:"load-more",rawName:"v-load-more",value:t.loadMore,expression:"loadMore"}],staticClass:"content"},t._l(t.contents,function(e,n){return a("li",[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v(t._s(e.name))]),t._v(" "),a("span",[t._v(t._s(e.title))])]),t._v(" "),a("a",{attrs:{href:"javascript:void(0);"}},[t._v("聊天")])])}),0)],1)},staticRenderFns:[]};var r=a("F6Qa")(i,c,!1,function(t){a("eUS6")},"data-v-7adcabbb",null);e.default=r.exports},eUS6:function(t,e){}});
//# sourceMappingURL=13.877450d45b0196d6cc57.js.map