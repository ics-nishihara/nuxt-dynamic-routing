(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{359:function(t,e,n){"use strict";n.r(e);var o=n(18),r=(n(66),n(19),n(108)),l=Object(r.a)({setup:function(){var t=Object(r.c)(null),e=Object(r.e)().$http;return Object(r.f)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$get("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.slice(0,20)}));case 2:t.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),{posts:t}}}),c=n(78),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.posts?n("div",[n("h1",[t._v("Validationあり")]),t._v(" "),n("ul",[t._l(t.posts.slice(0,10),(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:"/validated_posts/"+e.id}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),t._v(" "),n("li",[n("n-link",{attrs:{to:"/validated_posts/9999"}},[t._v(" 存在しないリンク ")])],1)],2),t._v(" "),n("h1",[t._v("Validationなし")]),t._v(" "),n("ul",[t._l(t.posts.slice(11,20),(function(e){return n("li",{key:e.id},[n("n-link",{attrs:{to:"/no_validated_posts/"+e.id}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),t._v(" "),n("li",[n("n-link",{attrs:{to:"/no_validated_posts/9999"}},[t._v(" 存在しないリンク ")])],1)],2)]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);