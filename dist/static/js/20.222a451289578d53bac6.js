webpackJsonp([20],{XB6o:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),s=i.n(o),n=i("2Hch"),u=i("NYxO"),a=i("7y/R"),r={components:{headTitle:n.default,foot:a.a},data:function(){return{items:[{tab:"直播",url:"/zhibo/live"},{tab:"视频",url:"/zhibo/video"}]}},mounted:function(){console.log(this.zhiboStatus),this.$router.push(this.items[this.zhiboStatus].url)},computed:s()({},Object(u.c)(["zhiboStatus"])),methods:s()({},Object(u.b)(["RECORD_ZHIBOSTATUS"]),{gotoAddress:function(t,e){this.RECORD_ZHIBOSTATUS(e),this.$router.push(t)}})},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zhibo"},[i("headTitle"),t._v(" "),i("ul",{staticClass:"zhibo_tab"},t._l(t.items,function(e,o){return i("li",[i("a",{class:{active:o==t.zhiboStatus},on:{click:function(i){t.gotoAddress(e.url,o)}}},[t._v(t._s(e.tab))])])})),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(r,c,!1,function(t){i("bBjU")},"data-v-6eaf3ba4",null);e.default=l.exports},bBjU:function(t,e){}});
//# sourceMappingURL=20.222a451289578d53bac6.js.map