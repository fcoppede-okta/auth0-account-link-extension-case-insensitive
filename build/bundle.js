"use strict";
module.exports = (function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 0))
  );
})([
  function (e, n, t) {
    var r = t(1),
      o = t(2),
      i = t(10),
      a = t(5),
      s = r.createServer(function (e, n) {
        return (
          i.info("Starting Account Link Extension - Version:", "2.6.5"),
          i.info(" > WT_URL:", e("WT_URL")),
          i.info(" > PUBLIC_WT_URL:", e("PUBLIC_WT_URL")),
          o(e, n)
        );
      });
    e.exports = function (e, n, t) {
      (n.x_wt && n.x_wt.ectx && n.x_wt.ectx.PUBLIC_WT_URL) ||
        !1 ||
        a.setValue("PUBLIC_WT_URL", r.urlHelpers.getWebtaskUrl(n)),
        s(e, n, t);
    };
  },
  function (e, n) {
    e.exports = require("auth0-extension-hapi-tools@1.3.1");
  },
  function (e, n, t) {
    (function (n) {
      var r = t(3),
        o = t(4),
        i = o.FileStorageContext,
        a = o.WebtaskStorageContext,
        s = t(5),
        c = t(6),
        l = t(10),
        u = t(30).init,
        d = function (e) {
          e
            ? (l.error("Hapi initialization failed."), l.error(e))
            : l.info("Hapi initialization completed.");
        };
      e.exports = function (e, t, o) {
        return (
          s.setProvider(function (n) {
            return (
              e(n) ||
              Object({ NODE_ENV: "production", CLIENT_VERSION: "2.6.5" })[n]
            );
          }),
          u(t ? new a(t, { force: 1 }) : new i(r.join(n, "../data.json"))),
          c(o || d)
        );
      };
    }).call(this, "/");
  },
  function (e, n) {
    e.exports = require("path");
  },
  function (e, n) {
    e.exports = require("auth0-extension-tools@1.4.0");
  },
  function (e, n, t) {
    var r = t(4).config;
    e.exports = r();
  },
  function (e, n, t) {
    (function (n) {
      var r = t(3),
        o = t(7),
        i = t(8),
        a = t(9),
        s = t(5),
        c = t(10),
        l = t(12),
        u = t(71),
        d = t(72);
      e.exports = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
          p = new o.Server();
        return (
          p.connection({
            host: "localhost",
            port: s("PORT"),
            routes: {
              cors: !0,
              validate: {},
              files: { relativeTo: r.join(n, "../public") },
            },
          }),
          p.register([a, i], function () {}),
          p.route({
            method: "GET",
            path: "/js/{file*}",
            config: { auth: !1 },
            handler: { directory: { path: r.join(n, "../public/js") } },
          }),
          p.route({
            method: "GET",
            path: "/css/{file*}",
            config: { auth: !1 },
            handler: { directory: { path: r.join(n, "../public/css") } },
          }),
          p.register([d, t, l], function (n) {
            (c.debug = function () {
              for (
                var e = arguments.length, n = new Array(e), t = 0;
                t < e;
                t++
              )
                n[t] = arguments[t];
              p.log(["debug"], n.join(" "));
            }),
              (c.info = function () {
                for (
                  var e = arguments.length, n = new Array(e), t = 0;
                  t < e;
                  t++
                )
                  n[t] = arguments[t];
                p.log(["info"], n.join(" "));
              }),
              (c.error = function () {
                for (
                  var e = arguments.length, n = new Array(e), t = 0;
                  t < e;
                  t++
                )
                  n[t] = arguments[t];
                p.log(["error"], n.join(" "));
              }),
              n && e(n),
              e(null, p);
          }),
          p
        );
      };
    }).call(this, "/");
  },
  function (e, n) {
    e.exports = require("@auth0/hapi@13.5.1");
  },
  function (e, n) {
    e.exports = require("inert@4.0.1");
  },
  function (e, n) {
    e.exports = require("hapi-auth-jwt2@7.0.1");
  },
  function (e, n, t) {
    var r = t(11);
    r.emitErrs = !0;
    var o = new r.Logger({
      transports: [
        new r.transports.Console({
          timestamp: !0,
          level: "debug",
          handleExceptions: !0,
          json: !1,
          colorize: !0,
        }),
      ],
      exitOnError: !1,
    });
    e.exports = o;
  },
  function (e, n) {
    e.exports = require("winston@1.0.0");
  },
  function (e, n, t) {
    var r = t(13),
      o = t(47),
      i = t(50),
      a = t(51),
      s = t(53),
      c = t(58),
      l = t(60),
      u = t(61),
      d = t(62),
      p = t(66),
      h = t(68),
      f = function (e, n) {
        return n.route(e(n));
      },
      m = function (e, n, t) {
        f(r, e),
          f(o, e),
          f(i, e),
          f(a, e),
          f(s, e),
          f(d, e),
          f(p, e),
          f(h, e),
          f(c, e),
          f(l, e),
          f(u, e),
          t();
      };
    (m.attributes = { name: "routes" }), (e.exports = m);
  },
  function (e, n, t) {
    var r = t(14).decode,
      o = t(15),
      i = t(5),
      a = t(16),
      s = t(22),
      c = t(10),
      l = t(39),
      u = t(41),
      d = t(42),
      p = t(32).resolveLocale,
      h = t(34).getSettings;
    e.exports = function () {
      return {
        method: "GET",
        path: "/",
        config: { auth: !1 },
        handler: function (e, n) {
          if (o.isEmpty(e.query)) n.redirect(`${i("PUBLIC_WT_URL")}/admin`);
          else {
            var t,
              f = l("production" === i("NODE_ENV")),
              m = f.tag("link"),
              v = f.tag(i("CUSTOM_CSS"), !0),
              g = e.query,
              y = {};
            g.locale && (y.locale = g.locale),
              g.color && (y.color = `#${g.color}`),
              g.title && (y.title = g.title),
              g.logoPath && (y.logoPath = g.logoPath),
              ((t = g.child_token),
              new Promise(function (e, n) {
                try {
                  e(r(t));
                } catch (e) {
                  n(e);
                }
              }))
                .then(function (t) {
                  var r, o, i;
                  ((r = t),
                  (o = r.sub),
                  (i = r.email),
                  a(i).then(function (e) {
                    return {
                      currentUser: e.find(function (e) {
                        return e.user_id === o;
                      }),
                      matchingUsers: e
                        .filter(function (e) {
                          return e.user_id !== o;
                        })
                        .sort(function (e, n) {
                          return (
                            new Date(e.created_at) - new Date(n.created_at)
                          );
                        }),
                    };
                  }))
                    .then(function (e) {
                      var r = e.currentUser,
                        o = e.matchingUsers;
                      h().then(function (e) {
                        var i = (o[0] && o[0].user_metadata) || {},
                          a = "string" == typeof i.locale ? i.locale : e.locale;
                        p(a).then(function (e) {
                          var i = (o.length > 0 ? [o[0].identities[0]] : [])
                              .map(function (e) {
                                return e.provider;
                              })
                              .map(u),
                            c = d(i, e("or"));
                          n(
                            s({
                              dynamicSettings: y,
                              stylesheetTag: m,
                              currentUser: r,
                              matchingUsers: o,
                              customCSSTag: v,
                              locale: a,
                              identities: c,
                              params: g,
                              token: t,
                            })
                          );
                        });
                      });
                    })
                    .catch(function (r) {
                      var o = e.query.state;
                      c.error("An error was encountered: ", r),
                        c.info(
                          `Redirecting to failed link to /continue: ${t.iss}continue?state=${e.query.state}`
                        ),
                        n.redirect(`${t.iss}continue?state=${o}`);
                    });
                })
                .catch(function (e) {
                  c.error("An invalid token was provided", e),
                    s({
                      dynamicSettings: y,
                      stylesheetTag: m,
                      currentUser: null,
                      matchingUsers: [],
                      customCSSTag: v,
                    }).then(function (e) {
                      n(e).code(400);
                    });
                });
          }
        },
      };
    };
  },
  function (e, n) {
    e.exports = require("jsonwebtoken@7.1.9");
  },
  function (e, n) {
    e.exports = require("lodash@3.10.1");
  },
  function (e, n, t) {
    var r = t(17);
    e.exports = function (e) {
      return r({ path: "users-by-email", qs: { email: e } });
    };
  },
  function (e, n, t) {
    var r = t(18),
      o = t(19),
      i = ["path"];
    function a(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r);
      }
      return t;
    }
    var s = t(4).managementApi,
      c = t(21),
      l = t(5),
      u = t(10),
      d = {
        base: void 0,
        getBaseUrl() {
          return (
            this.base || (this.base = `https://${l("AUTH0_DOMAIN")}/api/v2`),
            this.base
          );
        },
        endpoint(e) {
          return `${this.getBaseUrl()}/${e}`;
        },
      };
    e.exports = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.path,
        t = o(e, i);
      return s
        .getAccessTokenCached(
          l("AUTH0_DOMAIN"),
          l("AUTH0_CLIENT_ID"),
          l("AUTH0_CLIENT_SECRET")
        )
        .then(function (e) {
          return new Promise(function (o, i) {
            c(
              (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? a(Object(t), !0).forEach(function (n) {
                        r(e, n, t[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : a(Object(t)).forEach(function (n) {
                        Object.defineProperty(
                          e,
                          n,
                          Object.getOwnPropertyDescriptor(t, n)
                        );
                      });
                }
                return e;
              })(
                {
                  url: d.endpoint(n),
                  headers: {
                    Authorization: `Bearer ${e}`,
                    Accept: "application/json",
                  },
                  json: !0,
                },
                t
              ),
              function (e, n, t) {
                e
                  ? i(e)
                  : n.statusCode < 200 || n.statusCode >= 300
                  ? (u.error("API call failed: ", n.status, t), i(new Error(t)))
                  : o(n.body);
              }
            );
          });
        });
    };
  },
  function (e, n) {
    (e.exports = function (e, n, t) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n, t) {
    var r = t(20);
    (e.exports = function (e, n) {
      if (null == e) return {};
      var t,
        o,
        i = r(e, n);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a.length; o++)
          (t = a[o]),
            n.indexOf(t) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, t) &&
                (i[t] = e[t]));
      }
      return i;
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function (e, n) {
      if (null == e) return {};
      var t,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    e.exports = require("request@2.81.0");
  },
  function (e, n, t) {
    var r = t(23),
      o = t(29),
      i = t(30).get,
      a = t(31),
      s = t(37),
      c = /\{\{\s*(.*?)\s*\}\}/g;
    e.exports = function (e) {
      var n = e.stylesheetTag,
        t = e.customCSSTag,
        l = e.currentUser,
        u = e.matchingUsers,
        d = e.dynamicSettings,
        p = e.identities,
        h = e.locale,
        f = e.params,
        m = e.token;
      return Promise.all([a(d, p, h), i().read()]).then(function (e) {
        var i = r(e, 2),
          a = i[0],
          d = i[1];
        return (function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e || "string" != typeof e)
            throw new Error("Invalid template provided");
          return e.replace(c, function (e, t) {
            return n[t] || "";
          });
        })(d.settings ? d.settings.template : o, {
          ExtensionCSS: n,
          CustomCSS: t,
          Auth0Widget: a,
          ExtensionScripts: s(l, u, f, m),
        });
      });
    };
  },
  function (e, n, t) {
    var r = t(24),
      o = t(25),
      i = t(26),
      a = t(28);
    (e.exports = function (e, n) {
      return r(e) || o(e, n) || i(e, n) || a();
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function (e) {
      if (Array.isArray(e)) return e;
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function (e, n) {
      var t =
        null == e
          ? null
          : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (null != t) {
        var r,
          o,
          i = [],
          a = !0,
          s = !1;
        try {
          for (
            t = t.call(e);
            !(a = (r = t.next()).done) &&
            (i.push(r.value), !n || i.length !== n);
            a = !0
          );
        } catch (e) {
          (s = !0), (o = e);
        } finally {
          try {
            a || null == t.return || t.return();
          } finally {
            if (s) throw o;
          }
        }
        return i;
      }
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n, t) {
    var r = t(27);
    (e.exports = function (e, n) {
      if (e) {
        if ("string" == typeof e) return r(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === t && e.constructor && (t = e.constructor.name),
          "Map" === t || "Set" === t
            ? Array.from(e)
            : "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            ? r(e, n)
            : void 0
        );
      }
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function (e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    e.exports =
      '\n<!doctype html>\n<html class="auth0-lock-html">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">\n    <meta name="author" content="Auth0">\n    <meta name="description" content="Easily link two accounts into one">\n    <title>Auth0 Account Linking Extension</title>\n    <link rel="shortcut icon" href="https://auth0.com/auth0-styleguide/img/favicon.png" />\n    {{ ExtensionCSS }}\n    {{ CustomCSS }}\n  </head>\n  <body>\n    \n    {{ Auth0Widget }}\n    {{ ExtensionScripts }}\n  </body>\n</html>\n';
  },
  function (e, n) {
    var t = null;
    (e.exports.init = function (e) {
      t = e;
    }),
      (e.exports.get = function () {
        if (!t) throw new Error("The DB has not been initialized.");
        return t;
      });
  },
  function (e, n, t) {
    var r = t(32).resolveLocale,
      o = t(34).getSettings,
      i = t(35),
      a = t(36),
      s = t(36).lockOutlineClass,
      c = new RegExp(/\{\{(\s+)?identities(\s+)?\}\}/);
    e.exports = function (e, n) {
      var t =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en";
      return o().then(function (o) {
        var l = Object.assign(o, e);
        return r(t).then(function (e) {
          return `\n            <div id="auth0-lock-container-1" class="auth0-lock-container">\n                <div class="auth0-lock auth0-lock-opened auth0-lock-with-tabs ${s(
            l.removeOverlay
          )}">\n                    ${a(l.removeOverlay)}\n                    <div class="auth0-lock-center">\n                        <form class="auth0-lock-widget">\n                        <div class="auth0-lock-widget-container">\n                            <div class="auth0-lock-cred-pane auth0-lock-quiet">\n                            <div class="auth0-lock-header">\n                                <div class="auth0-lock-header-bg auth0-lock-blur-support">\n                                <div class="auth0-lock-header-bg-blur"></div>\n                                <div class="auth0-lock-header-bg-solid"></div>\n                                </div>\n                                <div class="auth0-lock-header-welcome">\n                                  ${(function (
            e
          ) {
            return "" !== e.logoPath
              ? `<img src='${e.logoPath}' class="auth0-lock-header-logo" />`
              : `\n    <svg class="auth0-lock-header-logo" width="52.47px" height="58px" viewBox="0 0 151 172">\n        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="logo-grey-horizontal">\n                <g id="Group">\n                <g id="LogoBadge" fill-opacity="1" fill="rgb(234, 83, 35)">\n                    <path d="${i.badge}" id="Shape"></path>\n                </g>\n                </g>\n            </g>\n        </g>\n    </svg>`;
          })(
            l
          )}\n                                  <div class="auth0-lock-name">${(function (
            e,
            n
          ) {
            return "" !== e.title ? e.title : n("accountLinking");
          })(
            l,
            e
          )}</div>\n                                </div>\n                            </div>\n                            <div id="error-message" class="auth0-global-message auth0-global-message-error"></div>\n                            <div style="position: relative;">\n                                <span>\n                                <div class="">\n                                    <div style="visibility: inherit;">\n                                    <div class="auth0-lock-view-content">\n                                        <div style="position: relative;">\n                                        <div class="auth0-lock-body-content">\n                                            <div class="auth0-lock-content">\n                                            <div class="auth0-lock-form" id="content-container">\n                                                <div>\n                                                <p id="message">\n                                                    ${e("introduction")} ${e("identities").replace(c, n)}.\n                                                </p>\n                                                <p class="auth0-lock-alternative">\n                                                    <a class="auth0-lock-alternative-link" id="skip" href="#">\n                                                    ${e("skipAlternativeLink")}\n                                                    </a>\n                                                </p>\n                                                </div>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n                                    </div>\n                                    </div>\n                                </div>\n                                </span>\n                            </div>\n                            <div class="auth0-lock-actions">\n                                ${(function (
            e,
            n
          ) {
            var t = "";
            return (
              "" !== e.color && (t = `style="background-color: ${e.color}"`),
              `\n    <button class="auth0-lock-submit" ${t} type="button" id="link">\n      <span class="auth0-label-submit">\n        <span id="label-value">${n(
                "continue"
              )}</span>\n        <span>\n          <svg class="icon-text" width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Web/Submit/Active" transform="translate(-148.000000, -32.000000)" fill="#FFFFFF"><polygon id="Shape" points="148 33.4 149.4 32 155.4 38 149.4 44 148 42.6 152.6 38"></polygon></g></g></svg>\n        </span>\n      </span>\n    </button>`
            );
          })(
            l,
            e
          )}\n                            </div>\n                            </div>\n                        </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <script>\n                window.Auth0AccountLinkingExtension = window.Auth0AccountLinkingExtension || {};\n                window.Auth0AccountLinkingExtension.locale = {\n                    pageMismatchError: '${e("pageMismatchError")}',\n                    sameEmailAddressError: '${e("sameEmailAddressError")}'\n                }\n            <\/script>\n            `;
        });
      });
    };
  },
  function (e, n, t) {
    var r = t(33),
      o = t(34).getLocales,
      i = r,
      a = "(MISSING_LOCALE)";
    e.exports = {
      allLocales: i,
      resolveLocale: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "en",
          n = arguments.length > 1 ? arguments[1] : void 0;
        return ("object" == typeof n ? Promise.resolve(n) : o())
          .then(function (n) {
            return function (t) {
              return (n[e] || {})[t] || n.en[t] || i[e][t] || a;
            };
          })
          .catch(function () {
            return i;
          });
      },
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"en":{"_name":"English","pageMismatchError":"You seem to have reached this page in error. Please try logging in again","continue":"Continue","accountLinking":"Account Linking","introduction":"It looks like you have another account with the same email address. We recommend you link these accounts.","skipAlternativeLink":"I want to skip this and create a new account. (Not recommended)","sameEmailAddressError":"Accounts must have matching email addresses. Please try again.","identities":"You may sign in with {{identities}} to link accounts","or":"or"},"es":{"_name":"Spanish","pageMismatchError":"Parece que has llegado a esta página por error. Intenta iniciar sesión nuevamente","continue":"Continuar","accountLinking":"Vinculación de cuentas","introduction":"Parece que ya tienes otra cuenta con la misma dirección de correo electrónico. Recomendamos que vincules las cuentas.","skipAlternativeLink":"Quiero saltar esto y crear una nueva cuenta. (No recomendado)","sameEmailAddressError":"Las cuentas deben tener la misma dirección de correo electrónico. Por favor intenta nuevamente.","identities":"Puedes iniciar sesión con {{identities}} para vincular las cuentas","or":"o"},"ja":{"_name":"Japanease","pageMismatchError":"アクセスに失敗しました。もう一度ログインしてください。","continue":"続ける","accountLinking":"アカウントリンク","introduction":"同じメールアドレスのアカウントが見つかりました。これらのアカウントを統合することを推奨します。","skipAlternativeLink":"統合せずに新しいアカウントを作成する。 (非推奨)","sameEmailAddressError":"一致するメールアドレスが見つかりませんでした。もう一度ログインしてください。","identities":"統合すると{{identities}}でログインできるようになります。","or":"または"}}'
    );
  },
  function (e, n, t) {
    var r = t(30).get,
      o = t(33),
      i = "ok",
      a = {
        template: t(29),
        locale: "en",
        status: i,
        color: "#eb5424",
        title: "",
        logoPath: "",
        removeOverlay: !1,
      };
    e.exports = {
      STATUS_SUCCESSFUL: i,
      STATUS_ERRORED: "error",
      getSettings: function () {
        return r()
          .read()
          .then(function (e) {
            return e.settings || a;
          });
      },
      setSettings: function (e) {
        return r()
          .write({ settings: e })
          .then(function () {
            return { status: i };
          });
      },
      getLocales: function () {
        return r()
          .read()
          .then(function (e) {
            return e.locales || o;
          });
      },
      setLocales: function (e) {
        return r()
          .write({ locales: e })
          .then(function () {
            return { status: i };
          });
      },
    };
  },
  function (e, n) {
    e.exports = {
      text: "M246.517,0.11 C238.439,0.11 231.607,3.916 226.759,11.115 C221.94,18.271 219.393,28.26 219.393,40 C219.393,51.74 221.94,61.729 226.759,68.884 C231.607,76.084 238.439,79.889 246.517,79.889 C254.595,79.889 261.427,76.084 266.275,68.884 C271.093,61.729 273.64,51.74 273.64,40 C273.64,28.26 271.093,18.271 266.275,11.115 C261.427,3.916 254.595,0.11 246.517,0.11 L246.517,0.11 Z M246.517,70.005 C242.655,70.005 239.604,67.82 237.187,63.324 C234.268,57.893 232.66,49.61 232.66,40 C232.66,30.39 234.268,22.106 237.187,16.676 C239.604,12.18 242.655,9.994 246.517,9.994 C250.378,9.994 253.43,12.18 255.847,16.676 C258.766,22.106 260.373,30.389 260.373,40 C260.373,49.611 258.766,57.895 255.847,63.324 C253.43,67.82 250.378,70.005 246.517,70.005 L246.517,70.005 Z M71.45,29.172 L71.45,63.484 C71.45,72.53 78.81,79.889 87.856,79.889 C95.746,79.889 101.707,75.975 103.902,74.291 C104.024,74.197 104.184,74.169 104.331,74.216 C104.478,74.263 104.592,74.379 104.637,74.527 L105.961,78.86 L115.737,78.86 L115.737,29.172 L103.175,29.172 L103.175,66.326 C103.175,66.501 103.076,66.662 102.921,66.743 C100.559,67.961 95.899,70.006 91.231,70.006 C87.252,70.006 84.012,66.768 84.012,62.787 L84.012,29.172 L71.45,29.172 L71.45,29.172 Z M197.237,78.859 L209.8,78.859 L209.8,44.547 C209.8,35.501 202.44,28.141 193.394,28.141 C186.735,28.141 181.393,31.004 178.802,32.71 C178.657,32.805 178.473,32.813 178.322,32.731 C178.171,32.649 178.075,32.491 178.075,32.318 L178.075,1.141 L165.513,1.141 L165.513,78.859 L178.075,78.859 L178.075,41.704 C178.075,41.529 178.174,41.368 178.33,41.288 C180.691,40.069 185.352,38.025 190.019,38.025 C191.947,38.025 193.76,38.776 195.123,40.139 C196.486,41.502 197.236,43.316 197.236,45.243 L197.236,78.859 L197.237,78.859 Z M124.792,39.055 L132.438,39.055 C132.697,39.055 132.907,39.265 132.907,39.524 L132.907,66.858 C132.907,74.043 138.753,79.888 145.938,79.888 C148.543,79.888 151.113,79.512 153.585,78.77 L153.585,69.796 C152.143,69.923 150.485,70.005 149.313,70.005 C147.193,70.005 145.469,68.28 145.469,66.161 L145.469,39.523 C145.469,39.264 145.679,39.054 145.938,39.054 L153.585,39.054 L153.585,29.171 L145.938,29.171 C145.679,29.171 145.469,28.961 145.469,28.702 L145.469,12.295 L132.907,12.295 L132.907,28.702 C132.907,28.961 132.697,29.171 132.438,29.171 L124.792,29.171 L124.792,39.055 L124.792,39.055 Z M51.361,78.859 L64.429,78.859 L44.555,9.55 C42.962,3.992 37.811,0.11 32.029,0.11 C26.247,0.11 21.096,3.992 19.502,9.55 L-0.372,78.859 L12.697,78.859 L18.449,58.798 C18.507,58.597 18.691,58.459 18.9,58.459 L45.158,58.459 C45.367,58.459 45.552,58.597 45.609,58.798 L51.361,78.859 L51.361,78.859 Z M42.056,48.576 L22.004,48.576 C21.857,48.576 21.718,48.507 21.629,48.388 C21.541,48.272 21.513,48.119 21.553,47.978 L31.579,13.012 C31.637,12.811 31.821,12.673 32.03,12.673 C32.239,12.673 32.423,12.811 32.48,13.012 L42.507,47.978 C42.547,48.12 42.519,48.272 42.43,48.388 C42.342,48.507 42.203,48.576 42.056,48.576 L42.056,48.576 Z",
      badge:
        "M119.555,135.861 L102.705,83.997 L146.813,51.952 L92.291,51.952 L75.44,0.09 L75.435,0.076 L129.965,0.076 L146.82,51.947 L146.821,51.946 L146.835,51.938 C156.623,82.03 146.542,116.256 119.555,135.861 L119.555,135.861 Z M31.321,135.861 L31.307,135.871 L75.426,167.924 L119.555,135.862 L75.44,103.808 L31.321,135.861 L31.321,135.861 Z M4.052,51.939 L4.052,51.939 C-6.252,83.66 5.709,117.272 31.312,135.867 L31.316,135.851 L48.168,83.99 L4.07,51.951 L58.579,51.951 L75.431,0.089 L75.435,0.075 L20.902,0.075 L4.052,51.939 L4.052,51.939 Z",
    };
  },
  function (e, n, t) {
    var r = t(35);
    (e.exports = function () {
      return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        ? ""
        : `\n    <div class="auth0-lock-overlay">\n        <span class="auth0-lock-badge-bottom">\n        <a href="https://auth0.com/?utm_source=lock&amp;utm_campaign=badge&amp;utm_medium=widget" target="_blank" class="auth0-lock-badge">\n            <svg width="58px" height="21px" viewBox="0 0 462 168">\n            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                <g id="logo-grey-horizontal">\n                <g id="Group">\n                    <g id="LogoText" transform="translate(188.000000, 41.500000)" fill="#D0D2D3">\n                    <path d="${r.text}" id="Shape"></path>\n                    </g>\n                    <g id="LogoBadge" fill-opacity="0.4" fill="#FFFFFF">\n                    <path d="${r.badge}" id="Shape"></path>\n                    </g>\n                </g>\n                </g>\n            </g>\n            </svg>\n        </a>\n        </span>\n    </div>`;
    }),
      (e.exports.lockOutlineClass = function () {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          ? "auth0-lock-outlined"
          : "";
      });
  },
  function (e, n, t) {
    var r = t(38);
    e.exports = function (e, n, t, o) {
      return `\n<script type="text/javascript">\n  var currentUser = ${JSON.stringify(
        e
      )};\n  var matchingUsers = ${JSON.stringify(
        n
      )};\n  var bootstrapApp = ${r.toString()};\n\n  bootstrapApp(currentUser, matchingUsers, ${JSON.stringify(
        t
      )}, ${JSON.stringify(o)});\n<\/script>\n`;
    };
  },
  function (e, n) {
    e.exports = function (e, n, t, r) {
      try {
        !(function (e) {
          var r = document.getElementById("link"),
            o = document.getElementById("skip"),
            i = n
              .reduce(function (e, n) {
                return e.concat(n.identities);
              }, [])
              .map(function (e) {
                return e.connection;
              });
          r.addEventListener("click", function (n) {
            var r, o, a;
            (r = e.iss),
              (o = {
                client_id: t.client_id,
                redirect_uri: t.redirect_uri,
                response_type: t.response_type,
                response_mode: t.response_mode,
                scope: t.scope,
                state: t.original_state,
                nonce: t.nonce,
                audience: t.audience,
                link_account_token: t.child_token,
                prevent_sign_up: !0,
                connection: i[0],
              }),
              (a = c(o)
                .filter(function (e) {
                  return !!o[e];
                })
                .map(function (e) {
                  return e + "=" + encodeURIComponent(o[e]);
                })
                .join("&")),
              (window.location = r + "authorize?" + a);
          }),
            (function (e, n, t) {
              e.href = n + "continue?state=" + t;
            })(o, e.iss, t.state),
            "accountMismatch" === t.error_type &&
              ((a = document.getElementById("error-message")),
              (s =
                window.Auth0AccountLinkingExtension.locale
                  .sameEmailAddressError ||
                "Accounts must have matching email addresses. Please try again."),
              (a.innerHTML = s),
              (a.style.display = "block"));
          var a, s;
        })(r);
      } catch (e) {
        console.error(e),
          (o = document.getElementById("content-container")),
          document.getElementById("label-value"),
          (i = document.getElementById("link")),
          (o.innerHTML = ""),
          o.appendChild(
            s("div", {}, [
              s("p", {}, [
                ((a =
                  window.Auth0AccountLinkingExtension.locale
                    .pageMismatchError ||
                  "You seem to have reached this page in error. Please try logging in again"),
                document.createTextNode(a)),
              ]),
            ])
          ),
          (i.disabled = !0);
      }
      var o, i, a;
      function s(e, n, t) {
        var r,
          o = document.createElement(e),
          i = t || [],
          a = n || {};
        for (r in c(a)) o.setAttribute(r, a[r]);
        for (r in i) o.appendChild(i[r]);
        return o;
      }
      function c(e) {
        var n = [];
        for (var t in e) e.hasOwnProperty(t) && n.push(t);
        return n;
      }
    };
  },
  function (e, n, t) {
    var r = t(40).version;
    e.exports = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = e ? `${r}.min.css` : "css",
        t = function (t, r) {
          var o = (t || "").trim();
          return r
            ? o
            : o
            ? `${(function (e) {
                return e
                  ? "https://cdn.auth0.com/extensions/auth0-account-link/assets"
                  : "/css";
              })(e)}/${o}.${n}`
            : "";
        };
      return {
        link: t,
        tag: function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = t(e, n);
          return r ? `<link rel="stylesheet" href="${r}">` : "";
        },
      };
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"auth0-account-link-extension","version":"2.6.5","description":"Auth0 Account Link Extension","main":"index.js","engines":{"node":">=6.9"},"scripts":{"start":"node ./index.js","test":"nyc --all mocha test --recursive --timeout 5000","test:integration":"mocha integration --recursive --timeout 50000","lint":"eslint .","lint:fix":"eslint --fix .","serve:dev":"gulp run","client:build":"minify --clean --output dist/assets/link.$npm_package_version.min.css public/css/link.css && minify --clean --output dist/assets/admin.$npm_package_version.min.css public/css/admin.css","extension:build":"a0-ext build:server ./webtask.js ./dist && cp ./dist/auth0-account-link-extension.extension.$npm_package_version.js ./build/bundle.js","build":"yarn run client:build && yarn run extension:build"},"author":"Auth0","license":"MIT","auth0-extension":{"nodeTarget":"4.2.0","bundleModules":true,"externals":["auth0-extension-hapi-tools@1.3.1","auth0-extension-tools@1.4.0","auth0@2.8.0","bluebird@3.5.0","body-parser@1.12.4","boom@3.2.2","compression@1.4.4","debug@2.2.0","delegates@0.1.0","depd@1.0.1","destroy@1.0.3","ejs@2.3.1","express-jwt@3.1.0","express@4.12.4","hapi-auth-jwt2@7.0.1","@auth0/hapi@13.5.1","hoek@4.1.0","iconv-lite@0.4.10","inert@4.0.1","jade@1.10.0","joi@9.0.4","jsonwebtoken@7.1.9","jwks-rsa@1.1.1","lodash@3.10.1","lru-cache@2.6.4","lru-memoizer@1.10.0","mime-db@1.10.0","mime-types@2.0.12","moment@2.10.3","morgan@1.5.3","ms@0.7.1","nconf@0.8.4","node-uuid@1.4.3","open@0.0.5","qs@3.1.0","raw-body@2.1.0","read-all-stream@2.1.2","request@2.81.0","superagent@1.2.0","type-check@0.3.1","webtask-tools","winston@1.0.0","xml2js@0.4.8"]},"dependencies":{"@auth0/hapi":"13.5.1","auth0":"^2.8.0","auth0-extension-hapi-tools":"1.3.1","auth0-extension-tools":"1.4.0","boom":"3.2.2","hapi-auth-jwt2":"7.0.1","inert":"4.0.1","joi":"9.0.4","jsonwebtoken":"^8.1.0","jwks-rsa":"1.1.1","lodash":"^3.10.1","nconf":"^0.8.4","open":"^0.0.5","request":"^2.81.0","webtask-tools":"^3.2.0","winston":"1.0.0"},"devDependencies":{"auth0-extensions-cli":"^4.0.4","chai":"^4.1.0","eslint":"^4.3.0","eslint-config-auth0":"^11.0.0","eslint-config-auth0-base":"^13.0.0","eslint-plugin-import":"^2.7.0","eslint-plugin-jsx-a11y":"^6.0.2","eslint-plugin-react":"^7.1.0","gulp":"^3.9.1","gulp-nodemon":"^2.2.1","gulp-util":"^3.0.8","minifier":"^0.8.1","mocha":"^3.5.0","ngrok":"^2.2.15","nodemon":"^1.11.0","nyc":"^11.1.0","puppeteer":"^0.11.0"}}'
    );
  },
  function (e, n) {
    var t = {
      auth0: "Auth0",
      ad: "Active Directory",
      apple: "Apple",
      "google-oauth2": "Google",
      facebook: "Facebook",
      windowslive: "Microsoft",
      linkedin: "LinkedIn",
      github: "GitHub",
      dropbox: "Dropbox",
      bitbucket: "Bitbucket",
      paypal: "PayPal",
      "paypal-sandbox": "PayPal (Sandbox)",
      twitter: "Twitter",
      amazon: "Amazon",
      vkontakte: "VK",
      yandex: "Yandex",
      yahoo: "Yahoo!",
      thirtysevensignals: "37signals",
      box: "Box.com",
      salesforce: "SalesForce",
      "salesforce-sandbox": "SalesForce (Sandbox)",
      "salesforce-community": "SalesForce Community",
      fitbit: "Fitbit",
      baidu: "Baidu",
      renren: "Renren",
      weibo: "Weibo",
      aol: "AOL",
      shopify: "Shopify",
      wordpress: "WordPress",
      dwolla: "Dwolla",
      miicard: "MiiCard",
      yammer: "Yammer",
      soundcloud: "SoundCloud",
      instagram: "Instagram",
      thecity: "The City",
      "thecity-sandbox": "The City (Sandbox)",
      "planning-center": "Planning Center",
      evernote: "Evernote",
      "evernote-sandbox": "Evernote (Sandbox)",
      exact: "Exact.com",
      daccount: "NTT Docomo",
      sms: "SMS Code",
      email: "E-mail Code",
    };
    e.exports = function (e) {
      var n = t[e];
      return void 0 !== n ? n : e;
    };
  },
  function (e, n, t) {
    var r = t(43);
    e.exports = function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "and",
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        o = e ? r(e) : [];
      if (e.length <= 1) return o.join("");
      if (2 === e.length) return e.join(` ${n} `);
      var i = o.pop();
      return `${o.join(", ")}${t} ${n} ${i}`;
    };
  },
  function (e, n, t) {
    var r = t(44),
      o = t(45),
      i = t(26),
      a = t(46);
    (e.exports = function (e) {
      return r(e) || o(e) || i(e) || a();
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n, t) {
    var r = t(27);
    (e.exports = function (e) {
      if (Array.isArray(e)) return r(e);
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n) {
    (e.exports = function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n, t) {
    var r = t(48).install,
      o = t(5),
      i = t(10);
    e.exports = function (e) {
      return {
        method: "POST",
        path: "/.extensions/on-install",
        config: {
          auth: !1,
          pre: [
            e.handlers.validateHookToken("/.extensions/on-install"),
            e.handlers.managementClient,
          ],
        },
        handler: function (e, n) {
          i.info("Starting rule installation..."),
            r(e.pre.auth0.rules, {
              extensionURL: o("PUBLIC_WT_URL"),
              clientID: o("AUTH0_CLIENT_ID"),
              clientSecret: o("AUTH0_CLIENT_SECRET"),
            })
              .then(function () {
                return n().code(204);
              })
              .then(function () {
                i.info("Rule successfully installed");
              })
              .catch(function (e) {
                throw (i.error("Something went wrong, ", e), e);
              })
              .catch(function (e) {
                return n.error(e);
              });
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(18);
    function o(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r);
      }
      return t;
    }
    var i = t(49),
      a = "auth0-account-link-extension",
      s = function (e, n) {
        return function () {
          var t = (
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          ).find(function (e) {
            return e.name === a;
          });
          return t
            ? e.update({ id: t.id }, n)
            : e.create(
                (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? o(Object(t), !0).forEach(function (n) {
                          r(e, n, t[n]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : o(Object(t)).forEach(function (n) {
                          Object.defineProperty(
                            e,
                            n,
                            Object.getOwnPropertyDescriptor(t, n)
                          );
                        });
                  }
                  return e;
                })({ stage: "login_success" }, n)
              );
        };
      },
      c = function (e) {
        return function () {
          var n = (function (e) {
            return e.find(function (e) {
              return e.name === a;
            });
          })(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          );
          n && e.delete({ id: n.id });
        };
      };
    e.exports = {
      install: function (e, n) {
        var t = { name: a, script: i(n), enabled: !0 };
        return e.getAll().then(s(e, t));
      },
      uninstall: function (e) {
        return e.getAll().then(c(e));
      },
    };
  },
  function (e, n) {
    e.exports = function (e) {
      var n = e.extensionURL,
        t = void 0 === n ? "" : n,
        r = e.username,
        o = void 0 === r ? "Unknown" : r,
        i = e.clientID,
        a = void 0 === i ? "" : i,
        s = e.clientSecret,
        c = void 0 === s ? "" : s;
      return `function (user, context, callback) {\n  /**\n   * This rule has been automatically generated by\n   * ${o} at ${new Date().toISOString()}\n   */\n  var request = require('request@2.88.2');\n  var queryString = require('querystring');\n  var Promise = require('native-or-bluebird@1.2.0');\n  var jwt = require('jsonwebtoken@9.0.1');\n\n  var CONTINUE_PROTOCOL = 'redirect-callback';\n  var LOG_TAG = '[ACCOUNT_LINK]: ';\n  console.log(LOG_TAG, 'Entered Account Link Rule');\n\n  // 'query' can be undefined when using '/oauth/token' to log in\n  context.request.query = context.request.query || {};\n\n  var config = {\n    endpoints: {\n      linking: '${t.replace(
        /\/$/g,
        ""
      )}',\n      userApi: auth0.baseUrl + '/users',\n      usersByEmailApi: auth0.baseUrl + '/users'\n    },\n    token: {\n      clientId: '${a}',\n      clientSecret: '${c}',\n      issuer: auth0.domain\n    }\n  };\n\n  // If the user does not have an e-mail account,\n  // just continue the authentication flow.\n  // See auth0-extensions/auth0-account-link-extension#33\n  if (user.email === undefined) {\n    return callback(null, user, context);\n  }\n\n  createStrategy().then(callbackWithSuccess).catch(callbackWithFailure);\n\n  function createStrategy() {\n    if (shouldLink()) {\n      return linkAccounts();\n    } else if (shouldPrompt()) {\n      return promptUser();\n\n    }\n\n    return continueAuth();\n\n    function shouldLink() {\n      return !!context.request.query.link_account_token;\n    }\n\n    function shouldPrompt() {\n      return !insideRedirect() && !redirectingToContinue() && firstLogin();\n\n      // Check if we're inside a redirect\n      // in order to avoid a redirect loop\n      // TODO: May no longer be necessary\n      function insideRedirect() {\n        return context.request.query.redirect_uri &&\n          context.request.query.redirect_uri.indexOf(config.endpoints.linking) !== -1;\n      }\n\n      // Check if this is the first login of the user\n      // since merging already active accounts can be a\n      // destructive action\n      function firstLogin() {\n        return context.stats.loginsCount <= 1;\n      }\n\n      // Check if we're coming back from a redirect\n      // in order to avoid a redirect loop. User will\n      // be sent to /continue at this point. We need\n      // to assign them to their primary user if so.\n      function redirectingToContinue() {\n        return context.protocol === CONTINUE_PROTOCOL;\n      }\n    }\n  }\n\n  function verifyToken(token, secret) {\n    return new Promise(function(resolve, reject) {\n      jwt.verify(token, secret, function(err, decoded) {\n        if (err) {\n          return reject(err);\n        }\n\n        return resolve(decoded);\n      });\n    });\n  }\n\n  function linkAccounts() {\n    var secondAccountToken = context.request.query.link_account_token;\n\n    return verifyToken(secondAccountToken, config.token.clientSecret)\n      .then(function(decodedToken) {\n        // Redirect early if tokens are mismatched\n        if (user.email.toLowerCase() !== decodedToken.email.toLowerCase()) {\n          console.error(LOG_TAG, 'User: ', decodedToken.email, 'tried to link to account ', user.email);\n          context.redirect = {\n            url: buildRedirectUrl(secondAccountToken, context.request.query, 'accountMismatch')\n          };\n\n          return user;\n        }\n\n        var linkUri = config.endpoints.userApi+'/'+user.user_id+'/identities';\n        var headers = {\n          Authorization: 'Bearer ' + auth0.accessToken,\n          'Content-Type': 'application/json',\n          'Cache-Control': 'no-cache'\n        };\n\n        return apiCall({\n          method: 'GET',\n          url: config.endpoints.userApi+'/'+decodedToken.sub+'?fields=identities',\n          headers: headers\n        })\n          .then(function(secondaryUser) {\n            var provider = secondaryUser &&\n              secondaryUser.identities &&\n              secondaryUser.identities[0] &&\n              secondaryUser.identities[0].provider;\n\n            return apiCall({\n              method: 'POST',\n              url: linkUri,\n              headers,\n              json: { user_id: decodedToken.sub, provider: provider }\n            });\n          })\n          .then(function(_) {\n            // TODO: Ask about this\n            console.info(LOG_TAG, 'Successfully linked accounts for user: ', user.email);\n            return _;\n          });\n      });\n  }\n\n  function continueAuth() {\n    return Promise.resolve();\n  }\n\n  function promptUser() {\n    return searchUsersWithSameEmail().then(function transformUsers(users) {\n      \n      return users.filter(function(u) {\n        return u.user_id !== user.user_id;\n      }).map(function(user) {\n        return {\n          userId: user.user_id,\n          email: user.email,\n          picture: user.picture,\n          connections: user.identities.map(function(identity) {\n            return identity.connection;\n          })\n        };\n      });\n    }).then(function redirectToExtension(targetUsers) {\n      if (targetUsers.length > 0) {\n        context.redirect = {\n          url: buildRedirectUrl(createToken(config.token), context.request.query)\n        };\n      }\n    });\n  }\n\n  function callbackWithSuccess(_) {\n    callback(null, user, context);\n\n    return _;\n  }\n\n  function callbackWithFailure(err) {\n    console.error(LOG_TAG, err.message, err.stack);\n\n    callback(err, user, context);\n  }\n\n  function createToken(tokenInfo, targetUsers) {\n    var options = {\n      expiresIn: '5m',\n      audience: tokenInfo.clientId,\n      issuer: qualifyDomain(tokenInfo.issuer)\n    };\n\n    var userSub = {\n      sub: user.user_id,\n      email: user.email,\n      base: auth0.baseUrl\n    };\n\n    return jwt.sign(userSub, tokenInfo.clientSecret, options);\n  }\n\n  function searchUsersWithSameEmail() {\n    return apiCall({\n      url: config.endpoints.usersByEmailApi,\n      qs: {\n        q: 'email:' + user.email\n      }\n    });\n  }\n\n  // Consider moving this logic out of the rule and into the extension\n  function buildRedirectUrl(token, q, errorType) {\n    var params = {\n      child_token: token,\n      audience: q.audience,\n      client_id: q.client_id,\n      redirect_uri: q.redirect_uri,\n      scope: q.scope,\n      response_type: q.response_type,\n      response_mode: q.response_mode,\n      auth0Client: q.auth0Client,\n      original_state: q.original_state || q.state,\n      nonce: q.nonce,\n      error_type: errorType\n    };\n\n    return config.endpoints.linking + '?' + queryString.encode(params);\n  }\n\n  function qualifyDomain(domain) {\n    return 'https://'+domain+'/';\n  }\n\n  function apiCall(options) {\n    return new Promise(function(resolve, reject) {\n      var reqOptions = Object.assign({\n        url: options.url,\n        headers: {\n          Authorization: 'Bearer ' + auth0.accessToken,\n          Accept: 'application/json'\n        },\n        json: true\n      }, options);\n\n      request(reqOptions, function handleResponse(err, response, body) {\n        if (err) {\n          reject(err);\n        } else if (response.statusCode < 200 || response.statusCode >= 300) {\n          console.error(LOG_TAG, 'API call failed: ', body);\n          reject(new Error(body));\n        } else {\n          resolve(response.body);\n        }\n      });\n    });\n  }\n}`;
    };
  },
  function (e, n, t) {
    var r = t(48).uninstall,
      o = t(5),
      i = t(10);
    e.exports = function (e) {
      return {
        method: "DELETE",
        path: "/.extensions/on-uninstall",
        config: {
          auth: !1,
          pre: [
            e.handlers.validateHookToken("/.extensions/on-uninstall"),
            e.handlers.managementClient,
          ],
        },
        handler: function (e, n) {
          i.info("Starting uninstall..."),
            Promise.all([
              r(e.pre.auth0.rules),
              e.pre.auth0.deleteClient({ client_id: o("AUTH0_CLIENT_ID") }),
            ])
              .then(function () {
                return n().code(204);
              })
              .catch(function (e) {
                i.error(
                  "Something went wrong while uninstalling Account Link Extension: ",
                  e
                ),
                  n().code(204);
              });
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(52);
    e.exports = function () {
      return {
        method: "GET",
        path: "/meta",
        config: { auth: !1 },
        handler: function (e, n) {
          return n(r);
        },
      };
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"title":"Auth0 Account Link","name":"auth0-account-link","version":"2.6.5","preVersion":"2.6.3","author":"auth0","description":"This extension gives Auth0 customers the ability to allow their users to link their accounts","type":"application","logoUrl":"https://cdn.auth0.com/extensions/auth0-authz/assets/logo.svg","docsUrl":"https://auth0.com/docs/extensions/account-link","initialUrlPath":"/login","repository":"https://github.com/auth0-extensions/auth0-account-link-extension","keywords":["auth0","extension","account-link"],"secrets":{"CUSTOM_CSS":{"description":"Add custom styles to the linking page of the extension.","required":false,"example":"https://my.cdn.com/my-css.css"}},"auth0":{"createClient":true,"onUninstallPath":"/.extensions/on-uninstall","onInstallPath":"/.extensions/on-install","onUpdatePath":"/.extensions/on-install","scopes":"read:connections read:users read:rules create:rules update:rules delete:rules delete:clients"}}'
    );
  },
  function (e, n, t) {
    var r = t(54),
      o = t(5),
      i = t(39);
    e.exports = function () {
      return {
        method: "GET",
        path: "/admin",
        config: { auth: !1 },
        handler: function (e, n) {
          var t = i("production" === o("NODE_ENV"));
          n(r({ stylesheetTag: t.tag("admin"), baseURL: o("PUBLIC_WT_URL") }));
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(55),
      o = t(57);
    e.exports = function (e) {
      var n = e.stylesheetTag,
        t = e.baseURL;
      return `\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <base href="${t}"/>\n    <title>Auth0 Account Linking Extension Administrator</title>\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/theme/material.min.css">\n    ${n}\n</head>\n<body>\n\n${o(
        t
      )}\n\n<main class="container app-container">\n    <form action="">\n      <h2>Custom Hosted Page</h2>\n\n      <textarea name="html-code" id="code-editor"></textarea>\n\n      <h2>Widget Settings</h2>\n\n      <div class="alert" id="save-result">\n      </div>\n\n      <div class="form-group">\n        <label for="title">Title</label>\n        <input name="title" class="form-control" id="title_input" />\n      </div>\n\n      <div class="form-group">\n        <label for="logo_path">Logo Path</label>\n        <input name="logo_path" class="form-control" id="logo_path_input"/>\n      </div>\n\n      <div class="form-group">\n        <label for="color">Color</label>\n        <input name="color" class="form-control" id="color_input"/>\n      </div>\n\n      <div class="form-group">\n        <label for="locale">Language</label>\n        <select name="locale" class="form-control" id="available-locales"></select>\n      </div>\n\n      <div class="form-group">\n        <input type="checkbox" id="remove_overlay"/> Remove widget's overlay\n      </div>\n\n      <button class="btn btn-success" id="save-changes">Save changes</button>\n    </form>\n</main>\n\n\n${r}\n</body>\n</html>\n`;
    };
  },
  function (e, n, t) {
    var r = t(56);
    e.exports = `\n<script>\nvar JSONStringify = JSON.stringify;\nvar ObjectAssign = Object.assign;\n  \nfunction makeid() {\n    var text = "";\n    var possible = "abcdef0123456789";\n\n    for (var i = 0; i < 6; i++)\n        text += possible.charAt(Math.floor(Math.random() * possible.length));\n\n    return text;\n}\n<\/script>\n<script src="https://code.jquery.com/jquery.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/mode/xml/xml.js"><\/script>\n<script>(${r.toString()})()<\/script>`;
  },
  function (e, n) {
    e.exports = function () {
      var e = {},
        n = "",
        t = "Success! Your changes has been successfully saved.",
        r = "Oops! An error has ocurred while trying to save your changes.",
        o = "com.auth0.account_linking.admin_ui.session_token",
        i = $("base").attr("href"),
        a = $(".app-container"),
        s = $(".loading-state-container"),
        c = $(".avatar"),
        l = sessionStorage.getItem(o);
      function u() {
        window.location.href = i + "/login";
      }
      $.ajax({
        url: i + "/admin/user",
        headers: { Authorization: "Bearer " + l },
      })
        .done(function (e, n) {
          c.attr("src", e.avatar);
        })
        .error(function (e) {
          "Unauthorized" === e.statusText && u();
        });
      var d = window.location.pathname;
      return d.endsWith("/admin")
        ? (function () {
            var e = $("#title_input"),
              n = $("#logo_path_input"),
              c = $("#color_input"),
              d = $("#remove_overlay"),
              p = $("#available-locales"),
              h = $("#save-changes"),
              f = $("#save-result"),
              m = $("#logout-btn"),
              v = CodeMirror.fromTextArea(
                document.getElementById("code-editor"),
                {
                  lineNumbers: !0,
                  matchBrackets: !0,
                  tabMode: "indent",
                  theme: "material",
                  mode: "xml",
                  htmlMode: !0,
                }
              );
            function g(e) {
              e
                ? h.addClass("disabled").html("Saving changes...")
                : h.removeClass("disabled").html("Save changes");
            }
            function y(e, n) {
              f.removeClass("alert-danger"),
                f.removeClass("alert-success"),
                f.html(e),
                f.show(),
                n && n.error
                  ? f.addClass("alert-danger")
                  : f.addClass("alert-success"),
                setTimeout(function () {
                  f.html(""),
                    f.hide(),
                    n.error
                      ? f.removeClass("alert-danger")
                      : f.removeClass("alert-success");
                }, 1e4);
            }
            l || u(),
              v.setSize(null, 500),
              $.ajax({
                url: i + "/admin/settings",
                headers: { Authorization: "Bearer " + l },
              })
                .done(function (t) {
                  s.hide(),
                    a.show(),
                    (function (e, n) {
                      e.setValue(n.template.trim());
                    })(v, t),
                    (function (e) {
                      e.availableLocales.forEach(function (n) {
                        var t = e.locale === n.code ? "selected" : "";
                        p.append(
                          `<option value="${n.code}" ${t}>${n.name}</option>`
                        );
                      });
                    })(t),
                    e.val(t.title),
                    c.val(t.color),
                    n.val(t.logoPath),
                    d.prop("checked", t.removeOverlay || !1);
                })
                .error(function (e) {
                  "Unauthorized" === e.statusText && u();
                }),
              h.on("click", function (o) {
                o.preventDefault(),
                  g(!0),
                  $.ajax({
                    url: i + "/admin/settings",
                    method: "PUT",
                    data: {
                      template: v.getValue(),
                      locale: p.val(),
                      logoPath: n.val(),
                      color: c.val(),
                      title: e.val(),
                      removeOverlay: d.is(":checked"),
                    },
                    headers: { Authorization: "Bearer " + l },
                  })
                    .done(function (e, n) {
                      y("<h4>" + t + "</h4>"), g(!1);
                    })
                    .error(function (e) {
                      void 0 !== e.responseJSON.message
                        ? y(
                            "<h4>" +
                              r +
                              "</h4> <p>" +
                              e.responseJSON.message +
                              "</p>",
                            { error: !0 }
                          )
                        : y("<h4>" + r + "</h4>", { error: !0 }),
                        g(!1);
                    });
              }),
              m.on("click", function () {
                sessionStorage.removeItem(o), window.location.reload();
              }),
              $(window).bind("keydown", function (e) {
                if (e.ctrlKey || e.metaKey)
                  switch (String.fromCharCode(e.which).toLowerCase()) {
                    case "s":
                      e.preventDefault(), h.click();
                  }
              });
          })()
        : d.endsWith("/admin/locale")
        ? (function () {
            var t = $("#locale-menu"),
              r = ($("#locale-detail"), $("#locale-title")),
              o = $("#locale-management-table"),
              c = $("#locale-management-submit"),
              u = $("#add-new-locale"),
              d = $("#add-new-locale-name"),
              p = $("#add-new-locale-code"),
              h = $("#help-button"),
              f = $("#help-button-content");
            function m() {
              $.ajax({
                url: i + "/admin/locales",
                method: "PUT",
                contentType: "application/json",
                data: JSONStringify(e),
                processData: !1,
                headers: { Authorization: "Bearer " + l },
              })
                .done(function (e, n) {
                  toastr.success(
                    "You have successfully saved your locales.",
                    "Success!"
                  );
                })
                .error(function (e) {
                  void 0 !== e.responseJSON.message
                    ? toastr.error(e.responseJSON.message, "Error")
                    : toastr.error("Please try again later.", "Error");
                });
            }
            function v() {
              for (var i in (t.find("li").remove(), e))
                t.append(
                  `<li class="list-group-item" data-locale-name="${i}">${e[i]._name}</li>`
                );
              $(".list-group-item").on("click", function () {
                $(this).addClass("active"),
                  $(this).siblings().removeClass("active"),
                  (n = $(this).attr("data-locale-name")),
                  (function () {
                    var t = e[n];
                    for (var i in ($("tr:not(tr.header)").remove(),
                    r.html(t._name),
                    t))
                      "_name" !== i &&
                        o.append(
                          '<tr><td id="key">' +
                            i +
                            '</td><td><input class="form-control" value="' +
                            t[i] +
                            '" /></td>'
                        );
                  })();
              }),
                $("#locale-menu li")[0].click();
            }
            h.on("mouseover", function () {
              f.show(), f.animate({ opacity: 1, top: "-=20" }, 300);
            }),
              h.on("mouseleave", function () {
                setTimeout(function () {
                  f.animate({ opacity: 0, top: "+=20" }, 300, function () {
                    return f.hide();
                  });
                }, 300);
              }),
              $.ajax({
                url: i + "/admin/locales",
                method: "GET",
                headers: { Authorization: "Bearer " + l },
              })
                .done(function (n, t) {
                  s.hide(), a.show(), (e = n), v();
                })
                .error(function (e) {
                  s.hide(), alert(e);
                }),
              c.on("click", function () {
                var t = { _name: e[n]._name };
                o.find("tr").each(function () {
                  var e = $(this).find("#key").html(),
                    n = $(this).find("input").val();
                  t[e] = n;
                }),
                  (e[n] = t),
                  m();
              }),
              u.on("click", function (n) {
                n.preventDefault();
                var t = p.val(),
                  r = d.val();
                (e[t] = ObjectAssign({}, e.en, { _name: `${r} (Custom)` })),
                  v(),
                  d.val(""),
                  p.val("");
              }),
              $("#remove-locale-btn").on("click", function (t) {
                t.preventDefault(),
                  confirm("Are you sure?") && (delete e[n], v(), m());
              });
          })()
        : void 0;
    };
  },
  function (e, n) {
    e.exports = function (e) {
      return `\n<header class="site-header">\n <nav class="navbar navbar-default" role="navigation">\n    <div class="container">\n      <div class="navbar-header">\n        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>\n        </button>\n        <span>\n            <h1 class="navbar-brand"><a href="${e}/admin"><span>Auth0</span> <div class="product-name">Account Linking Extension</div></a></h1>\n        </span>\n      </div>\n      <div class="collapse navbar-collapse" id="navbar-collapse">\n        <ul class="nav navbar-nav navbar-left no-basic">\n        </ul>\n        <ul class="nav navbar-nav navbar-right">\n          <li class="dropdown"><span class="btn-dro" role="button" data-toggle="dropdown">\n            <img src="" alt="" class="avatar">\n            <i class="icon-budicon-460"></i></span>\n            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">\n              <li><a href="${e}/admin/locale" target="_blank">Manage locales</a></li>\n              <li><a href="https://github.com/auth0-extensions/auth0-account-link-extension/issues/new" target="_blank">Report an issue</a></li>\n              <li class="separator"></li>\n              <li><a href="#" id="logout-btn">Logout</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n\n<section class="loading-state-container">\n  <div class="spinner spinner-lg is-auth0">\n    <div class="circle"></div>\n  </div>\n</section>`;
    };
  },
  function (e, n, t) {
    var r = t(59),
      o = t(5),
      i = t(39);
    e.exports = function () {
      return {
        method: "GET",
        path: "/admin/locale",
        config: { auth: !1 },
        handler: function (e, n) {
          var t = i("production" === o("NODE_ENV"));
          n(r({ stylesheetTag: t.tag("admin"), baseURL: o("PUBLIC_WT_URL") }));
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(55),
      o = t(57);
    e.exports = function (e) {
      var n = e.stylesheetTag,
        t = e.baseURL;
      return `\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <base href="${t}"/>\n    <title>Auth0 Account Linking Extension Administrator</title>\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/theme/material.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />\n    ${n}\n</head>\n<body>\n\n${o(
        t
      )}\n\n<main class="container app-container">\n    <div class="row">\n        <div class="col-sm-4">\n            <div class=" list-group" id="locale-menu">\n            </div>\n            <div>\n                <h4>Add new locale \n    <span id="help-button">?</span>\n    <div class="help-container">\n        <div id="help-button-content">\n            <h5>Adding a new locale</h5>\n            <p>You can add custom locales for your users to use. You will need to specify the following data:</p>\n            <ul>\n                <li><strong>ISO Code</strong>: ISO 639-1 Complaint Locale Code. i.e.: es, en, pt.</li>\n                <li><strong>Name</strong>: A friendly name for the locale. i.e.: Spanish, English, Portuguese.</li>\n            </ul>\n        </div>\n    </div>\n</h4>\n                <div class="input-group">\n                    <input id="add-new-locale-code" class="add-new-locale-input form-control" placeholder="Code" />\n                    <input id="add-new-locale-name" class="add-new-locale-input form-control" placeholder="Name" />\n                    <span class="input-group-btn">\n                        <button id="add-new-locale" class="btn btn-primary" type="button">Add</button>\n                    </span>\n                </div>\n            </div>\n        </div>\n        \n        \n        <div class="col-sm-8" id="locale-detail">\n            <h2 id="locale-title"></h2>\n\n            <table id="locale-management-table" class="table table-striped">\n                    <th class="header" width="20%">Name</th>\n                    <th class="header" width="80%">Message</th>\n            </table>\n\n            <button id="locale-management-submit" class="btn btn-primary">Save changes</button>\n            \n            <hr/>\n            \n            <div class="panel panel-danger">\n                <div class="panel-heading">Remove locale</div>\n                <div class="panel-body">\n                    <p>Once removed, you cannot undo this change.</p>\n                    <a class="btn btn-danger" id="remove-locale-btn">Remove locale</a>\n                </div>\n            </p>\n        </div>\n    </div>\n</main>\n\n\n${r}\n</body>\n</html>\n`;
    };
  },
  function (e, n, t) {
    var r = t(34).getLocales;
    e.exports = function () {
      return {
        method: "GET",
        config: { auth: "jwt" },
        path: "/admin/locales",
        handler: function (e, n) {
          return r().then(n);
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(34).setLocales;
    e.exports = function () {
      return {
        method: "PUT",
        config: { auth: "jwt" },
        path: "/admin/locales",
        handler: function (e, n) {
          return r(e.payload).then(n);
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(63),
      o = t(18),
      i = t(65);
    function a(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r);
      }
      return t;
    }
    function s(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? a(Object(t), !0).forEach(function (n) {
              o(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : a(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    var c = t(34),
      l = c.getSettings,
      u = c.getLocales;
    e.exports = function () {
      return {
        method: "GET",
        config: { auth: "jwt" },
        path: "/admin/settings",
        handler: (function () {
          var e = i(
            r.mark(function e(n, t) {
              var o, i;
              return r.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), u();
                    case 2:
                      (o = e.sent),
                        (i = Object.keys(o).map(function (e) {
                          return { code: e, name: o[e]._name };
                        })),
                        l().then(function (e) {
                          t(s(s({}, e), {}, { availableLocales: i }));
                        });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })(),
      };
    };
  },
  function (e, n, t) {
    e.exports = t(64);
  },
  function (e, n, t) {
    var r = (function (e) {
      "use strict";
      var n,
        t = Object.prototype,
        r = t.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";
      function c(e, n, t) {
        return (
          Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[n]
        );
      }
      try {
        c({}, "");
      } catch (e) {
        c = function (e, n, t) {
          return (e[n] = t);
        };
      }
      function l(e, n, t, r) {
        var o = n && n.prototype instanceof v ? n : v,
          i = Object.create(o.prototype),
          a = new S(r || []);
        return (
          (i._invoke = (function (e, n, t) {
            var r = d;
            return function (o, i) {
              if (r === h) throw new Error("Generator is already running");
              if (r === f) {
                if ("throw" === o) throw i;
                return A();
              }
              for (t.method = o, t.arg = i; ; ) {
                var a = t.delegate;
                if (a) {
                  var s = O(a, t);
                  if (s) {
                    if (s === m) continue;
                    return s;
                  }
                }
                if ("next" === t.method) t.sent = t._sent = t.arg;
                else if ("throw" === t.method) {
                  if (r === d) throw ((r = f), t.arg);
                  t.dispatchException(t.arg);
                } else "return" === t.method && t.abrupt("return", t.arg);
                r = h;
                var c = u(e, n, t);
                if ("normal" === c.type) {
                  if (((r = t.done ? f : p), c.arg === m)) continue;
                  return { value: c.arg, done: t.done };
                }
                "throw" === c.type &&
                  ((r = f), (t.method = "throw"), (t.arg = c.arg));
              }
            };
          })(e, t, a)),
          i
        );
      }
      function u(e, n, t) {
        try {
          return { type: "normal", arg: e.call(n, t) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = l;
      var d = "suspendedStart",
        p = "suspendedYield",
        h = "executing",
        f = "completed",
        m = {};
      function v() {}
      function g() {}
      function y() {}
      var b = {};
      b[i] = function () {
        return this;
      };
      var x = Object.getPrototypeOf,
        k = x && x(x(T([])));
      k && k !== t && r.call(k, i) && (b = k);
      var w = (y.prototype = v.prototype = Object.create(b));
      function _(e) {
        ["next", "throw", "return"].forEach(function (n) {
          c(e, n, function (e) {
            return this._invoke(n, e);
          });
        });
      }
      function L(e, n) {
        var t;
        this._invoke = function (o, i) {
          function a() {
            return new n(function (t, a) {
              !(function t(o, i, a, s) {
                var c = u(e[o], e, i);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    d = l.value;
                  return d && "object" == typeof d && r.call(d, "__await")
                    ? n.resolve(d.__await).then(
                        function (e) {
                          t("next", e, a, s);
                        },
                        function (e) {
                          t("throw", e, a, s);
                        }
                      )
                    : n.resolve(d).then(
                        function (e) {
                          (l.value = e), a(l);
                        },
                        function (e) {
                          return t("throw", e, a, s);
                        }
                      );
                }
                s(c.arg);
              })(o, i, t, a);
            });
          }
          return (t = t ? t.then(a, a) : a());
        };
      }
      function O(e, t) {
        var r = e.iterator[t.method];
        if (r === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = n),
              O(e, t),
              "throw" === t.method)
            )
              return m;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return m;
        }
        var o = u(r, e.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), m;
        var i = o.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = n)),
              (t.delegate = null),
              m)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            m);
      }
      function j(e) {
        var n = { tryLoc: e[0] };
        1 in e && (n.catchLoc = e[1]),
          2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
          this.tryEntries.push(n);
      }
      function C(e) {
        var n = e.completion || {};
        (n.type = "normal"), delete n.arg, (e.completion = n);
      }
      function S(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(j, this),
          this.reset(!0);
      }
      function T(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              a = function t() {
                for (; ++o < e.length; )
                  if (r.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                return (t.value = n), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: A };
      }
      function A() {
        return { value: n, done: !0 };
      }
      return (
        (g.prototype = w.constructor = y),
        (y.constructor = g),
        (g.displayName = c(y, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var n = "function" == typeof e && e.constructor;
          return (
            !!n &&
            (n === g || "GeneratorFunction" === (n.displayName || n.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, y)
              : ((e.__proto__ = y), c(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(w)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        _(L.prototype),
        (L.prototype[a] = function () {
          return this;
        }),
        (e.AsyncIterator = L),
        (e.async = function (n, t, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new L(l(n, t, r, o), i);
          return e.isGeneratorFunction(t)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        _(w),
        c(w, s, "Generator"),
        (w[i] = function () {
          return this;
        }),
        (w.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var n = [];
          for (var t in e) n.push(t);
          return (
            n.reverse(),
            function t() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in e) return (t.value = r), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = T),
        (S.prototype = {
          constructor: S,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = n),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = n),
              this.tryEntries.forEach(C),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  r.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = n);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function o(r, o) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (t.next = r),
                o && ((t.method = "next"), (t.arg = n)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                s = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var c = r.call(a, "catchLoc"),
                  l = r.call(a, "finallyLoc");
                if (c && l) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (c) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, n) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var o = this.tryEntries[t];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= n &&
              n <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = e),
              (a.arg = n),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                : this.complete(a)
            );
          },
          complete: function (e, n) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && n && (this.next = n),
              m
            );
          },
          finish: function (e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var t = this.tryEntries[n];
              if (t.finallyLoc === e)
                return this.complete(t.completion, t.afterLoc), C(t), m;
            }
          },
          catch: function (e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var t = this.tryEntries[n];
              if (t.tryLoc === e) {
                var r = t.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  C(t);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: T(e), resultName: t, nextLoc: r }),
              "next" === this.method && (this.arg = n),
              m
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (e, n) {
    function t(e, n, t, r, o, i, a) {
      try {
        var s = e[i](a),
          c = s.value;
      } catch (e) {
        return void t(e);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    (e.exports = function (e) {
      return function () {
        var n = this,
          r = arguments;
        return new Promise(function (o, i) {
          var a = e.apply(n, r);
          function s(e) {
            t(a, o, i, s, c, "next", e);
          }
          function c(e) {
            t(a, o, i, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, n, t) {
    var r = t(67),
      o = t(34).setSettings,
      i =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      a = /^#[A-Fa-f0-9]{6}/;
    e.exports = function () {
      return {
        method: "PUT",
        config: {
          auth: "jwt",
          validate: {
            payload: {
              template: r.string().required(),
              locale: r.string().required(),
              title: r.string().required(),
              color: r.string().regex(a).required(),
              logoPath: r.string().regex(i).allow(""),
              removeOverlay: r.bool().default(!1),
            },
          },
        },
        path: "/admin/settings",
        handler: function (e, n) {
          o(e.payload).then(function (e) {
            n(e);
          });
        },
      };
    };
  },
  function (e, n) {
    e.exports = require("joi@9.0.4");
  },
  function (e, n, t) {
    var r = t(69);
    e.exports = function () {
      return {
        method: "GET",
        path: "/admin/user",
        config: { auth: "jwt" },
        handler: function (e, n) {
          n({
            email: e.auth.credentials.email,
            avatar: r(e.auth.credentials.email),
          });
        },
      };
    };
  },
  function (e, n, t) {
    var r = t(70);
    e.exports = function (e) {
      return `https://s.gravatar.com/avatar/${r
        .createHash("md5")
        .update(e)
        .digest(
          "hex"
        )}?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F${e.substr(
        0,
        2
      )}.png`;
    };
  },
  function (e, n) {
    e.exports = require("crypto");
  },
  function (e, n, t) {
    var r = t(1).handlers,
      o = t(5),
      i = t(10),
      a = function (e, n, t) {
        e.decorate("server", "handlers", {
          managementClient: r.managementApiClient({
            domain: o("AUTH0_DOMAIN"),
            clientId: o("AUTH0_CLIENT_ID"),
            clientSecret: o("AUTH0_CLIENT_SECRET"),
            logger: i.error,
          }),
          validateHookToken: r.validateHookToken(
            o("AUTH0_DOMAIN"),
            o("WT_URL"),
            o("EXTENSION_SECRET")
          ),
        }),
          t();
      };
    (a.attributes = { name: "handlers" }), (e.exports = a);
  },
  function (e, n, t) {
    var r = t(73),
      o = t(74),
      i = t(14),
      a = t(1),
      s = t(5),
      c = [{ value: "openid" }, { value: "profile" }];
    (e.exports.register = function (e, n, t) {
      var l = {
        dashboardAdmin: {
          key: s("EXTENSION_SECRET"),
          verifyOptions: {
            audience: "urn:api-account-linking",
            issuer: s("PUBLIC_WT_URL"),
            algorithms: ["HS256"],
          },
        },
        resourceServer: {
          key: o.hapiJwt2Key({
            cache: !0,
            rateLimit: !0,
            jwksRequestsPerMinute: 2,
            jwksUri: `https://${s("AUTH0_DOMAIN")}/.well-known/jwks.json`,
          }),
          verifyOptions: {
            audience: "urn:auth0-account-linking-api",
            issuer: `https://${s("AUTH0_DOMAIN")}/`,
            algorithms: ["RS256"],
          },
        },
      };
      e.auth.strategy("jwt", "jwt", {
        complete: !0,
        verifyFunc: function (e, n, t) {
          if (!e) return t(null, !1);
          var o = n.headers.authorization;
          if (o && 0 === o.indexOf("Bearer ")) {
            var a = o.split(" ")[1];
            if (
              e &&
              e.payload &&
              e.payload.iss === `https://${s("AUTH0_DOMAIN")}/`
            )
              return l.resourceServer.key(e, function (n, o) {
                return n
                  ? t(r.wrap(n), null, null)
                  : i.verify(
                      a,
                      o,
                      l.resourceServer.verifyOptions,
                      function (n) {
                        return n
                          ? t(
                              r.unauthorized("Invalid token", "Token"),
                              null,
                              null
                            )
                          : e.payload.gty &&
                            "client-credentials" !== e.payload.gty
                          ? t(
                              r.unauthorized("Invalid token", "Token"),
                              null,
                              null
                            )
                          : e.payload.sub.endsWith("@clients")
                          ? (e.payload.scope &&
                              "string" == typeof e.payload.scope &&
                              (e.payload.scope = e.payload.scope.split(" ")),
                            t(null, !0, e.payload))
                          : t(
                              r.unauthorized("Invalid token", "Token"),
                              null,
                              null
                            );
                      }
                    );
              });
            if (e && e.payload && e.payload.iss === s("PUBLIC_WT_URL"))
              return i.verify(
                a,
                l.dashboardAdmin.key,
                l.dashboardAdmin.verifyOptions,
                function (n) {
                  return n
                    ? t(r.unauthorized("Invalid token", "Token"), null, null)
                    : e.payload.access_token && e.payload.access_token.length
                    ? ((e.payload.scope = c.map(function (e) {
                        return e.value;
                      })),
                      t(null, !0, e.payload))
                    : t(r.unauthorized("Invalid token", "Token"), null, null);
                }
              );
          }
          return t(null, !1);
        },
      }),
        e.auth.default("jwt");
      var u = {
        register: a.plugins.dashboardAdminSession,
        options: {
          stateKey: "account-linking-admin-state",
          sessionStorageKey: "com.auth0.account_linking.admin_ui.session_token",
          rta: s("AUTH0_RTA").replace("https://", ""),
          domain: s("AUTH0_DOMAIN"),
          scopes: "",
          baseUrl: s("PUBLIC_WT_URL"),
          audience: "urn:api-account-linking",
          secret: s("EXTENSION_SECRET"),
          clientName: "auth0-account-link",
          onLoginSuccess: function (e, n, t) {
            return e
              ? ((e.scope = c.map(function (e) {
                  return e.value;
                })),
                t(null, !0, e))
              : t(null, !1);
          },
        },
      };
      e.register(u, function (e) {
        e && t(e), t();
      });
    }),
      (e.exports.register.attributes = { name: "auth" });
  },
  function (e, n) {
    e.exports = require("boom@3.2.2");
  },
  function (e, n) {
    e.exports = require("jwks-rsa@1.1.1");
  },
]);
