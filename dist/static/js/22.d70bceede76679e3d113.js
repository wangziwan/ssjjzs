webpackJsonp([22],{"9jsu":function(t,e){},dF5J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("1tI/"),r=n.n(i),l=n("JHw8"),c=n("x6Ga"),o={components:{childTitle:l.a},data:function(){return{title:"修改手机号"}},mounted:function(){this.initBg()},methods:r()({},Object(c.b)(["ALTER_TEL"]),{initBg:function(){var t=document.documentElement.clientHeight,e=document.querySelector(".footer").clientHeight;document.querySelector(".alter").style.height=t-e+"px",document.querySelector(".alter").style.background="#2a2c33"},confirm:function(){var t=document.querySelector('input[name="tel"]').value;t&&(console.log(t),this.ALTER_TEL(t),this.$router.go(-1))}})},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alter"},[n("child-title",{attrs:{title:t.title}}),t._v(" "),n("form",[t._m(0),t._v(" "),n("button",{on:{click:function(e){return e.preventDefault(),t.confirm(e)}}},[t._v("确认")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"alterinput"},[e("li",[e("input",{attrs:{name:"tel",type:"number",placeholder:"输入绑定的手机号"}})]),this._v(" "),e("li",[e("input",{attrs:{name:"telCode",type:"text",placeholder:"输入验证码"}}),this._v(" "),e("a",[this._v("获取")])])])}]};var a=n("F6Qa")(o,u,!1,function(t){n("9jsu")},"data-v-4d7988d6",null);e.default=a.exports}});
//# sourceMappingURL=22.d70bceede76679e3d113.js.map