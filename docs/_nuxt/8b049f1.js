(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(e,t,r){"use strict";r.r(t);var n=r(18),c=(r(66),r(169),r(108)),o=Object(c.a)({validate:function(e){var t=e.params;return console.log(/^\d+$/.test(t.id)&&Number(t.id)>0&&Number(t.id)<11),!!(/^\d+$/.test(t.id)&&Number(t.id)>0&&Number(t.id)<11)},setup:function(){var e=Object(c.c)(),t=Object(c.e)(),r=t.$http,o=t.params;return Object(c.f)(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$get("https://jsonplaceholder.typicode.com/posts/".concat(o.value.id));case 2:e.value=t.sent;case 3:case"end":return t.stop()}}),t)})))),{post:e}}}),d=r(78),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.$fetchState.pending?r("div",[r("p",[e._v("読込中")])]):e.$fetchState.error?r("div",[r("h1",[e._v("見つかりません")])]):r("div",[r("h1",[e._v(e._s(e.post.title))]),e._v(" "),r("pre",[e._v(e._s(e.post.body))]),e._v(" "),r("n-link",{attrs:{to:"/"}},[e._v("戻る")])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);