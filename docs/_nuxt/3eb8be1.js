;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    359(t, n, e) {
      'use strict'
      e.r(n)
      const o = e(18)
      const r = (e(66), e(19), e(108))
      const l = Object(r.a)({
        setup() {
          const t = Object(r.c)(null)
          const n = Object(r.e)().$http
          return (
            Object(r.f)(
              Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n
                              .$get(
                                'https://jsonplaceholder.typicode.com/posts'
                              )
                              .then(function (t) {
                                return t.slice(0, 20)
                              })
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
            { posts: t }
          )
        },
      })
      const c = e(78)
      const component = Object(c.a)(
        l,
        function () {
          const t = this
          const n = t.$createElement
          const e = t._self._c || n
          return e('div', [
            t.posts
              ? e('div', [
                  e('h1', [t._v('Validationあり')]),
                  t._v(' '),
                  e(
                    'ul',
                    [
                      t._l(t.posts.slice(0, 10), function (n) {
                        return e(
                          'li',
                          { key: n.id },
                          [
                            e(
                              'n-link',
                              { attrs: { to: '/validated_posts/' + n.id } },
                              [
                                t._v(
                                  '\n          ' + t._s(n.title) + '\n        '
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      }),
                      t._v(' '),
                      e(
                        'li',
                        [
                          e(
                            'n-link',
                            { attrs: { to: '/validated_posts/9999' } },
                            [t._v('\n          存在しないリンク\n        ')]
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                  t._v(' '),
                  e('h1', [t._v('Validationなし')]),
                  t._v(' '),
                  e(
                    'ul',
                    [
                      t._l(t.posts.slice(11, 20), function (n) {
                        return e(
                          'li',
                          { key: n.id },
                          [
                            e(
                              'n-link',
                              { attrs: { to: '/no_validated_posts/' + n.id } },
                              [
                                t._v(
                                  '\n          ' + t._s(n.title) + '\n        '
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      }),
                      t._v(' '),
                      e(
                        'n-link',
                        { attrs: { to: '/no_validated_posts/9999' } },
                        [t._v('\n        存在しないリンク\n      ')]
                      ),
                    ],
                    2
                  ),
                ])
              : t._e(),
          ])
        },
        [],
        !1,
        null,
        null,
        null
      )
      n.default = component.exports
    },
  },
])
