webpackJsonp([21],{"2LOW":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("KOga"),r={data:function(){return{items:[{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]},{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]},{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]},{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]}]}},mounted:function(){var t=this;Object(a.a)("GET","armoury/all").then(function(e){console.log(e.data.data),t.items=e.data.data}).catch(function(t){console.log(t)})}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",t._l(t.items,function(e){return i("dd",[i("div",[i("h4",[t._v(t._s(e.title))])]),t._v(" "),i("ul",t._l(e.imgArr,function(e){return i("li",[i("img",{attrs:{src:e.image,alt:""}}),t._v(" "),i("p",[t._v(t._s(e.title))])])}))])}))},staticRenderFns:[]};var l=i("VU/8")(r,n,!1,function(t){i("4k3D")},"data-v-568df632",null);e.default=l.exports},"4k3D":function(t,e){}});
//# sourceMappingURL=21.2533cbb56aec7ef686cb.js.map