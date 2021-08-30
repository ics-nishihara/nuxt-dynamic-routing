;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    357(t, e, n) {
      'use strict'
      n.r(e)
      const r = n(18)
      const c = (n(66), n(108))
      const o = Object(c.a)({
        setup() {
          const t = Object(c.c)()
          const e = Object(c.e)()
          const n = e.$http
          const o = e.params
          return (
            Object(c.f)(
              Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n.$get(
                              'https://jsonplaceholder.typicode.com/posts/'.concat(
                                o.value.id
                              )
                            )
                          )
                        case 2:
                          t.value = e.sent
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
            ),
            { post: t }
          )
        },
      })
      const v = n(78)
      const component = Object(v.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n('div', [
            t.$fetchState.pending
              ? n('div', [n('p', [t._v('読込中')])])
              : t.$fetchState.error
              ? n('div', [n('h1', [t._v('見つかりません')])])
              : n(
                  'div',
                  [
                    n('h1', [t._v(t._s(t.post.title))]),
                    t._v(' '),
                    n('pre', [t._v(t._s(t.post.body))]),
                    t._v(' '),
                    n('n-link', { attrs: { to: '/' } }, [t._v('戻る')]),
                  ],
                  1
                ),
          ])
        },
        [],
        !1,
        null,
        null,
        null
      )
      e.default = component.exports
    },
  },
])
