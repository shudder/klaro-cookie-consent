!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.klaro = t() : e.klaro = t()
}(window, (function() {
    return function(e) {
        var t = {};
        function n(o) {
            if (t[o])
                return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var o = Object.create(null);
            if (n.r(o),
            Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var r in e)
                    n.d(o, r, function(t) {
                        return e[t]
                    }
                    .bind(null, r));
            return o
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 184)
    }([function(e, t, n) {
        var o = n(2)
          , r = n(26).f
          , i = n(20)
          , a = n(21)
          , c = n(64)
          , s = n(96)
          , l = n(55);
        e.exports = function(e, t) {
            var n, u, p, f, d, m = e.target, v = e.global, y = e.stat;
            if (n = v ? o : y ? o[m] || c(m, {}) : (o[m] || {}).prototype)
                for (u in t) {
                    if (f = t[u],
                    p = e.noTargetGet ? (d = r(n, u)) && d.value : n[u],
                    !l(v ? u : m + (y ? "." : "#") + u, e.forced) && void 0 !== p) {
                        if (typeof f == typeof p)
                            continue;
                        s(f, p)
                    }
                    (e.sham || p && p.sham) && i(f, "sham", !0),
                    a(n, u, f, e)
                }
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    , function(e, t, n) {
        (function(t) {
            var n = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
        }
        ).call(this, n(152))
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(66)
          , i = n(8)
          , a = n(52)
          , c = n(69)
          , s = n(102)
          , l = r("wks")
          , u = o.Symbol
          , p = s ? u : u && u.withoutSetter || a;
        e.exports = function(e) {
            return i(l, e) || (c && i(u, e) ? l[e] = u[e] : l[e] = p("Symbol." + e)),
            l[e]
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }
    , function(e, t, n) {
        var o = n(1);
        e.exports = !o((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    , function(e, t, n) {
        var o = n(4);
        e.exports = function(e) {
            if (!o(e))
                throw TypeError(String(e) + " is not an object");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(2)
          , i = n(33)
          , a = n(32)
          , c = n(5)
          , s = n(69)
          , l = n(102)
          , u = n(1)
          , p = n(8)
          , f = n(56)
          , d = n(4)
          , m = n(6)
          , v = n(24)
          , y = n(17)
          , h = n(50)
          , g = n(40)
          , b = n(42)
          , k = n(43)
          , _ = n(53)
          , w = n(155)
          , x = n(68)
          , S = n(26)
          , j = n(9)
          , O = n(48)
          , A = n(20)
          , P = n(21)
          , z = n(66)
          , E = n(51)
          , C = n(41)
          , D = n(52)
          , T = n(3)
          , R = n(104)
          , M = n(105)
          , I = n(44)
          , N = n(31)
          , q = n(57).forEach
          , U = E("hidden")
          , L = T("toPrimitive")
          , F = N.set
          , H = N.getterFor("Symbol")
          , B = Object.prototype
          , W = r.Symbol
          , K = i("JSON", "stringify")
          , V = S.f
          , $ = j.f
          , G = w.f
          , Z = O.f
          , Y = z("symbols")
          , X = z("op-symbols")
          , Q = z("string-to-symbol-registry")
          , J = z("symbol-to-string-registry")
          , ee = z("wks")
          , te = r.QObject
          , ne = !te || !te.prototype || !te.prototype.findChild
          , oe = c && u((function() {
            return 7 != b($({}, "a", {
                get: function() {
                    return $(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }
        )) ? function(e, t, n) {
            var o = V(B, t);
            o && delete B[t],
            $(e, t, n),
            o && e !== B && $(B, t, o)
        }
        : $
          , re = function(e, t) {
            var n = Y[e] = b(W.prototype);
            return F(n, {
                type: "Symbol",
                tag: e,
                description: t
            }),
            c || (n.description = t),
            n
        }
          , ie = l ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            return Object(e)instanceof W
        }
          , ae = function(e, t, n) {
            e === B && ae(X, t, n),
            m(e);
            var o = h(t, !0);
            return m(n),
            p(Y, o) ? (n.enumerable ? (p(e, U) && e[U][o] && (e[U][o] = !1),
            n = b(n, {
                enumerable: g(0, !1)
            })) : (p(e, U) || $(e, U, g(1, {})),
            e[U][o] = !0),
            oe(e, o, n)) : $(e, o, n)
        }
          , ce = function(e, t) {
            m(e);
            var n = y(t)
              , o = k(n).concat(pe(n));
            return q(o, (function(t) {
                c && !se.call(n, t) || ae(e, t, n[t])
            }
            )),
            e
        }
          , se = function(e) {
            var t = h(e, !0)
              , n = Z.call(this, t);
            return !(this === B && p(Y, t) && !p(X, t)) && (!(n || !p(this, t) || !p(Y, t) || p(this, U) && this[U][t]) || n)
        }
          , le = function(e, t) {
            var n = y(e)
              , o = h(t, !0);
            if (n !== B || !p(Y, o) || p(X, o)) {
                var r = V(n, o);
                return !r || !p(Y, o) || p(n, U) && n[U][o] || (r.enumerable = !0),
                r
            }
        }
          , ue = function(e) {
            var t = G(y(e))
              , n = [];
            return q(t, (function(e) {
                p(Y, e) || p(C, e) || n.push(e)
            }
            )),
            n
        }
          , pe = function(e) {
            var t = e === B
              , n = G(t ? X : y(e))
              , o = [];
            return q(n, (function(e) {
                !p(Y, e) || t && !p(B, e) || o.push(Y[e])
            }
            )),
            o
        };
        (s || (P((W = function() {
            if (this instanceof W)
                throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0
              , t = D(e)
              , n = function(e) {
                this === B && n.call(X, e),
                p(this, U) && p(this[U], t) && (this[U][t] = !1),
                oe(this, t, g(1, e))
            };
            return c && ne && oe(B, t, {
                configurable: !0,
                set: n
            }),
            re(t, e)
        }
        ).prototype, "toString", (function() {
            return H(this).tag
        }
        )),
        P(W, "withoutSetter", (function(e) {
            return re(D(e), e)
        }
        )),
        O.f = se,
        j.f = ae,
        S.f = le,
        _.f = w.f = ue,
        x.f = pe,
        R.f = function(e) {
            return re(T(e), e)
        }
        ,
        c && ($(W.prototype, "description", {
            configurable: !0,
            get: function() {
                return H(this).description
            }
        }),
        a || P(B, "propertyIsEnumerable", se, {
            unsafe: !0
        }))),
        o({
            global: !0,
            wrap: !0,
            forced: !s,
            sham: !s
        }, {
            Symbol: W
        }),
        q(k(ee), (function(e) {
            M(e)
        }
        )),
        o({
            target: "Symbol",
            stat: !0,
            forced: !s
        }, {
            for: function(e) {
                var t = String(e);
                if (p(Q, t))
                    return Q[t];
                var n = W(t);
                return Q[t] = n,
                J[n] = t,
                n
            },
            keyFor: function(e) {
                if (!ie(e))
                    throw TypeError(e + " is not a symbol");
                if (p(J, e))
                    return J[e]
            },
            useSetter: function() {
                ne = !0
            },
            useSimple: function() {
                ne = !1
            }
        }),
        o({
            target: "Object",
            stat: !0,
            forced: !s,
            sham: !c
        }, {
            create: function(e, t) {
                return void 0 === t ? b(e) : ce(b(e), t)
            },
            defineProperty: ae,
            defineProperties: ce,
            getOwnPropertyDescriptor: le
        }),
        o({
            target: "Object",
            stat: !0,
            forced: !s
        }, {
            getOwnPropertyNames: ue,
            getOwnPropertySymbols: pe
        }),
        o({
            target: "Object",
            stat: !0,
            forced: u((function() {
                x.f(1)
            }
            ))
        }, {
            getOwnPropertySymbols: function(e) {
                return x.f(v(e))
            }
        }),
        K) && o({
            target: "JSON",
            stat: !0,
            forced: !s || u((function() {
                var e = W();
                return "[null]" != K([e]) || "{}" != K({
                    a: e
                }) || "{}" != K(Object(e))
            }
            ))
        }, {
            stringify: function(e, t, n) {
                for (var o, r = [e], i = 1; arguments.length > i; )
                    r.push(arguments[i++]);
                if (o = t,
                (d(t) || void 0 !== e) && !ie(e))
                    return f(t) || (t = function(e, t) {
                        if ("function" == typeof o && (t = o.call(this, e, t)),
                        !ie(t))
                            return t
                    }
                    ),
                    r[1] = t,
                    K.apply(null, r)
            }
        });
        W.prototype[L] || A(W.prototype, L, W.prototype.valueOf),
        I(W, "Symbol"),
        C[U] = !0
    }
    , function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(94)
          , i = n(6)
          , a = n(50)
          , c = Object.defineProperty;
        t.f = o ? c : function(e, t, n) {
            if (i(e),
            t = a(t, !0),
            i(n),
            r)
                try {
                    return c(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(17)
          , r = n(113)
          , i = n(47)
          , a = n(31)
          , c = n(75)
          , s = a.set
          , l = a.getterFor("Array Iterator");
        e.exports = c(Array, "Array", (function(e, t) {
            s(this, {
                type: "Array Iterator",
                target: o(e),
                index: 0,
                kind: t
            })
        }
        ), (function() {
            var e = l(this)
              , t = e.target
              , n = e.kind
              , o = e.index++;
            return !t || o >= t.length ? (e.target = void 0,
            {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: o,
                done: !1
            } : "values" == n ? {
                value: t[o],
                done: !1
            } : {
                value: [o, t[o]],
                done: !1
            }
        }
        ), "values"),
        i.Arguments = i.Array,
        r("keys"),
        r("values"),
        r("entries")
    }
    , function(e, t, n) {
        var o = n(73)
          , r = n(21)
          , i = n(160);
        o || r(Object.prototype, "toString", i, {
            unsafe: !0
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(5)
          , i = n(2)
          , a = n(8)
          , c = n(4)
          , s = n(9).f
          , l = n(96)
          , u = i.Symbol;
        if (r && "function" == typeof u && (!("description"in u.prototype) || void 0 !== u().description)) {
            var p = {}
              , f = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
                  , t = this instanceof f ? new u(e) : void 0 === e ? u() : u(e);
                return "" === e && (p[t] = !0),
                t
            };
            l(f, u);
            var d = f.prototype = u.prototype;
            d.constructor = f;
            var m = d.toString
              , v = "Symbol(test)" == String(u("test"))
              , y = /^Symbol\((.*)\)[^)]+$/;
            s(d, "description", {
                configurable: !0,
                get: function() {
                    var e = c(this) ? this.valueOf() : this
                      , t = m.call(e);
                    if (a(p, e))
                        return "";
                    var n = v ? t.slice(7, -1) : t.replace(y, "$1");
                    return "" === n ? void 0 : n
                }
            }),
            o({
                global: !0,
                forced: !0
            }, {
                Symbol: f
            })
        }
    }
    , function(e, t, n) {
        n(105)("iterator")
    }
    , function(e, t, n) {
        "use strict";
        var o = n(21)
          , r = n(6)
          , i = n(1)
          , a = n(84)
          , c = RegExp.prototype
          , s = c.toString
          , l = i((function() {
            return "/a/b" != s.call({
                source: "a",
                flags: "b"
            })
        }
        ))
          , u = "toString" != s.name;
        (l || u) && o(RegExp.prototype, "toString", (function() {
            var e = r(this)
              , t = String(e.source)
              , n = e.flags;
            return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags"in c) ? a.call(e) : n)
        }
        ), {
            unsafe: !0
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(122).charAt
          , r = n(31)
          , i = n(75)
          , a = r.set
          , c = r.getterFor("String Iterator");
        i(String, "String", (function(e) {
            a(this, {
                type: "String Iterator",
                string: String(e),
                index: 0
            })
        }
        ), (function() {
            var e, t = c(this), n = t.string, r = t.index;
            return r >= n.length ? {
                value: void 0,
                done: !0
            } : (e = o(n, r),
            t.index += e.length,
            {
                value: e,
                done: !1
            })
        }
        ))
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(124)
          , i = n(10)
          , a = n(20)
          , c = n(3)
          , s = c("iterator")
          , l = c("toStringTag")
          , u = i.values;
        for (var p in r) {
            var f = o[p]
              , d = f && f.prototype;
            if (d) {
                if (d[s] !== u)
                    try {
                        a(d, s, u)
                    } catch (e) {
                        d[s] = u
                    }
                if (d[l] || a(d, l, p),
                r[p])
                    for (var m in i)
                        if (d[m] !== i[m])
                            try {
                                a(d, m, i[m])
                            } catch (e) {
                                d[m] = i[m]
                            }
            }
        }
    }
    , function(e, t, n) {
        var o = n(49)
          , r = n(23);
        e.exports = function(e) {
            return o(r(e))
        }
    }
    , function(e, t, n) {
        var o = n(54)
          , r = Math.min;
        e.exports = function(e) {
            return e > 0 ? r(o(e), 9007199254740991) : 0
        }
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(9).f
          , i = Function.prototype
          , a = i.toString
          , c = /^\s*function ([^ (]*)/;
        o && !("name"in i) && r(i, "name", {
            configurable: !0,
            get: function() {
                try {
                    return a.call(this).match(c)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(9)
          , i = n(40);
        e.exports = o ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(20)
          , i = n(8)
          , a = n(64)
          , c = n(65)
          , s = n(31)
          , l = s.get
          , u = s.enforce
          , p = String(String).split("String");
        (e.exports = function(e, t, n, c) {
            var s = !!c && !!c.unsafe
              , l = !!c && !!c.enumerable
              , f = !!c && !!c.noTargetGet;
            "function" == typeof n && ("string" != typeof t || i(n, "name") || r(n, "name", t),
            u(n).source = p.join("string" == typeof t ? t : "")),
            e !== o ? (s ? !f && e[t] && (l = !0) : delete e[t],
            l ? e[t] = n : r(e, t, n)) : l ? e[t] = n : a(t, n)
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && l(this).source || c(this)
        }
        ))
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(57).map
          , i = n(60)
          , a = n(46)
          , c = i("map")
          , s = a("map");
        o({
            target: "Array",
            proto: !0,
            forced: !c || !s
        }, {
            map: function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    , function(e, t) {
        e.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on " + e);
            return e
        }
    }
    , function(e, t, n) {
        var o = n(23);
        e.exports = function(e) {
            return Object(o(e))
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(4)
          , i = n(56)
          , a = n(101)
          , c = n(18)
          , s = n(17)
          , l = n(59)
          , u = n(3)
          , p = n(60)
          , f = n(46)
          , d = p("slice")
          , m = f("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        })
          , v = u("species")
          , y = [].slice
          , h = Math.max;
        o({
            target: "Array",
            proto: !0,
            forced: !d || !m
        }, {
            slice: function(e, t) {
                var n, o, u, p = s(this), f = c(p.length), d = a(e, f), m = a(void 0 === t ? f : t, f);
                if (i(p) && ("function" != typeof (n = p.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[v]) && (n = void 0) : n = void 0,
                n === Array || void 0 === n))
                    return y.call(p, d, m);
                for (o = new (void 0 === n ? Array : n)(h(m - d, 0)),
                u = 0; d < m; d++,
                u++)
                    d in p && l(o, u, p[d]);
                return o.length = u,
                o
            }
        })
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(48)
          , i = n(40)
          , a = n(17)
          , c = n(50)
          , s = n(8)
          , l = n(94)
          , u = Object.getOwnPropertyDescriptor;
        t.f = o ? u : function(e, t) {
            if (e = a(e),
            t = c(t, !0),
            l)
                try {
                    return u(e, t)
                } catch (e) {}
            if (s(e, t))
                return i(!r.f.call(e, t), e[t])
        }
    }
    , function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(1)
          , i = n(24)
          , a = n(76)
          , c = n(115);
        o({
            target: "Object",
            stat: !0,
            forced: r((function() {
                a(1)
            }
            )),
            sham: !c
        }, {
            getPrototypeOf: function(e) {
                return a(i(e))
            }
        })
    }
    , function(e, t, n) {
        n(0)({
            target: "Object",
            stat: !0
        }, {
            setPrototypeOf: n(77)
        })
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(33)
          , i = n(36)
          , a = n(6)
          , c = n(4)
          , s = n(42)
          , l = n(161)
          , u = n(1)
          , p = r("Reflect", "construct")
          , f = u((function() {
            function e() {}
            return !(p((function() {}
            ), [], e)instanceof e)
        }
        ))
          , d = !u((function() {
            p((function() {}
            ))
        }
        ))
          , m = f || d;
        o({
            target: "Reflect",
            stat: !0,
            forced: m,
            sham: m
        }, {
            construct: function(e, t) {
                i(e),
                a(t);
                var n = arguments.length < 3 ? e : i(arguments[2]);
                if (d && !f)
                    return p(e, t, n);
                if (e == n) {
                    switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0],t[1]);
                    case 3:
                        return new e(t[0],t[1],t[2]);
                    case 4:
                        return new e(t[0],t[1],t[2],t[3])
                    }
                    var o = [null];
                    return o.push.apply(o, t),
                    new (l.apply(e, o))
                }
                var r = n.prototype
                  , u = s(c(r) ? r : Object.prototype)
                  , m = Function.apply.call(e, u, t);
                return c(m) ? m : u
            }
        })
    }
    , function(e, t, n) {
        var o, r, i, a = n(153), c = n(2), s = n(4), l = n(20), u = n(8), p = n(51), f = n(41), d = c.WeakMap;
        if (a) {
            var m = new d
              , v = m.get
              , y = m.has
              , h = m.set;
            o = function(e, t) {
                return h.call(m, e, t),
                t
            }
            ,
            r = function(e) {
                return v.call(m, e) || {}
            }
            ,
            i = function(e) {
                return y.call(m, e)
            }
        } else {
            var g = p("state");
            f[g] = !0,
            o = function(e, t) {
                return l(e, g, t),
                t
            }
            ,
            r = function(e) {
                return u(e, g) ? e[g] : {}
            }
            ,
            i = function(e) {
                return u(e, g)
            }
        }
        e.exports = {
            set: o,
            get: r,
            has: i,
            enforce: function(e) {
                return i(e) ? r(e) : o(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!s(t) || (n = r(t)).type !== e)
                        throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    }
    , function(e, t) {
        e.exports = !1
    }
    , function(e, t, n) {
        var o = n(98)
          , r = n(2)
          , i = function(e) {
            return "function" == typeof e ? e : void 0
        };
        e.exports = function(e, t) {
            return arguments.length < 2 ? i(o[e]) || i(r[e]) : o[e] && o[e][t] || r[e] && r[e][t]
        }
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(156);
        o({
            target: "Array",
            stat: !0,
            forced: !n(74)((function(e) {
                Array.from(e)
            }
            ))
        }, {
            from: r
        })
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(24)
          , i = n(43);
        o({
            target: "Object",
            stat: !0,
            forced: n(1)((function() {
                i(1)
            }
            ))
        }, {
            keys: function(e) {
                return i(r(e))
            }
        })
    }
    , function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(57).filter
          , i = n(60)
          , a = n(46)
          , c = i("filter")
          , s = a("filter");
        o({
            target: "Array",
            proto: !0,
            forced: !c || !s
        }, {
            filter: function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(61);
        o({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== r
        }, {
            exec: r
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(49)
          , i = n(17)
          , a = n(108)
          , c = [].join
          , s = r != Object
          , l = a("join", ",");
        o({
            target: "Array",
            proto: !0,
            forced: s || !l
        }, {
            join: function(e) {
                return c.call(i(this), void 0 === e ? "," : e)
            }
        })
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , function(e, t) {
        e.exports = {}
    }
    , function(e, t, n) {
        var o, r = n(6), i = n(154), a = n(67), c = n(41), s = n(103), l = n(63), u = n(51), p = u("IE_PROTO"), f = function() {}, d = function(e) {
            return "<script>" + e + "<\/script>"
        }, m = function() {
            try {
                o = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            m = o ? function(e) {
                e.write(d("")),
                e.close();
                var t = e.parentWindow.Object;
                return e = null,
                t
            }(o) : ((t = l("iframe")).style.display = "none",
            s.appendChild(t),
            t.src = String("javascript:"),
            (e = t.contentWindow.document).open(),
            e.write(d("document.F=Object")),
            e.close(),
            e.F);
            for (var n = a.length; n--; )
                delete m.prototype[a[n]];
            return m()
        };
        c[p] = !0,
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (f.prototype = r(e),
            n = new f,
            f.prototype = null,
            n[p] = e) : n = m(),
            void 0 === t ? n : i(n, t)
        }
    }
    , function(e, t, n) {
        var o = n(99)
          , r = n(67);
        e.exports = Object.keys || function(e) {
            return o(e, r)
        }
    }
    , function(e, t, n) {
        var o = n(9).f
          , r = n(8)
          , i = n(3)("toStringTag");
        e.exports = function(e, t, n) {
            e && !r(e = n ? e : e.prototype, i) && o(e, i, {
                configurable: !0,
                value: t
            })
        }
    }
    , function(e, t, n) {
        var o = n(36);
        e.exports = function(e, t, n) {
            if (o(e),
            void 0 === t)
                return e;
            switch (n) {
            case 0:
                return function() {
                    return e.call(t)
                }
                ;
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, o) {
                    return e.call(t, n, o)
                }
                ;
            case 3:
                return function(n, o, r) {
                    return e.call(t, n, o, r)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(1)
          , i = n(8)
          , a = Object.defineProperty
          , c = {}
          , s = function(e) {
            throw e
        };
        e.exports = function(e, t) {
            if (i(c, e))
                return c[e];
            t || (t = {});
            var n = [][e]
              , l = !!i(t, "ACCESSORS") && t.ACCESSORS
              , u = i(t, 0) ? t[0] : s
              , p = i(t, 1) ? t[1] : void 0;
            return c[e] = !!n && !r((function() {
                if (l && !o)
                    return !0;
                var e = {
                    length: -1
                };
                l ? a(e, 1, {
                    enumerable: !0,
                    get: s
                }) : e[1] = 1,
                n.call(e, u, p)
            }
            ))
        }
    }
    , function(e, t) {
        e.exports = {}
    }
    , function(e, t, n) {
        "use strict";
        var o = {}.propertyIsEnumerable
          , r = Object.getOwnPropertyDescriptor
          , i = r && !o.call({
            1: 2
        }, 1);
        t.f = i ? function(e) {
            var t = r(this, e);
            return !!t && t.enumerable
        }
        : o
    }
    , function(e, t, n) {
        var o = n(1)
          , r = n(27)
          , i = "".split;
        e.exports = o((function() {
            return !Object("z").propertyIsEnumerable(0)
        }
        )) ? function(e) {
            return "String" == r(e) ? i.call(e, "") : Object(e)
        }
        : Object
    }
    , function(e, t, n) {
        var o = n(4);
        e.exports = function(e, t) {
            if (!o(e))
                return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e)))
                return r;
            if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e)))
                return r;
            if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(e, t, n) {
        var o = n(66)
          , r = n(52)
          , i = o("keys");
        e.exports = function(e) {
            return i[e] || (i[e] = r(e))
        }
    }
    , function(e, t) {
        var n = 0
          , o = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + o).toString(36)
        }
    }
    , function(e, t, n) {
        var o = n(99)
          , r = n(67).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return o(e, r)
        }
    }
    , function(e, t) {
        var n = Math.ceil
          , o = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
        }
    }
    , function(e, t, n) {
        var o = n(1)
          , r = /#|\.prototype\./
          , i = function(e, t) {
            var n = c[a(e)];
            return n == l || n != s && ("function" == typeof t ? o(t) : !!t)
        }
          , a = i.normalize = function(e) {
            return String(e).replace(r, ".").toLowerCase()
        }
          , c = i.data = {}
          , s = i.NATIVE = "N"
          , l = i.POLYFILL = "P";
        e.exports = i
    }
    , function(e, t, n) {
        var o = n(27);
        e.exports = Array.isArray || function(e) {
            return "Array" == o(e)
        }
    }
    , function(e, t, n) {
        var o = n(45)
          , r = n(49)
          , i = n(24)
          , a = n(18)
          , c = n(106)
          , s = [].push
          , l = function(e) {
            var t = 1 == e
              , n = 2 == e
              , l = 3 == e
              , u = 4 == e
              , p = 6 == e
              , f = 5 == e || p;
            return function(d, m, v, y) {
                for (var h, g, b = i(d), k = r(b), _ = o(m, v, 3), w = a(k.length), x = 0, S = y || c, j = t ? S(d, w) : n ? S(d, 0) : void 0; w > x; x++)
                    if ((f || x in k) && (g = _(h = k[x], x, b),
                    e))
                        if (t)
                            j[x] = g;
                        else if (g)
                            switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return h;
                            case 6:
                                return x;
                            case 2:
                                s.call(j, h)
                            }
                        else if (u)
                            return !1;
                return p ? -1 : l || u ? u : j
            }
        };
        e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6)
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(1)
          , i = n(56)
          , a = n(4)
          , c = n(24)
          , s = n(18)
          , l = n(59)
          , u = n(106)
          , p = n(60)
          , f = n(3)
          , d = n(70)
          , m = f("isConcatSpreadable")
          , v = d >= 51 || !r((function() {
            var e = [];
            return e[m] = !1,
            e.concat()[0] !== e
        }
        ))
          , y = p("concat")
          , h = function(e) {
            if (!a(e))
                return !1;
            var t = e[m];
            return void 0 !== t ? !!t : i(e)
        };
        o({
            target: "Array",
            proto: !0,
            forced: !v || !y
        }, {
            concat: function(e) {
                var t, n, o, r, i, a = c(this), p = u(a, 0), f = 0;
                for (t = -1,
                o = arguments.length; t < o; t++)
                    if (h(i = -1 === t ? a : arguments[t])) {
                        if (f + (r = s(i.length)) > 9007199254740991)
                            throw TypeError("Maximum allowed index exceeded");
                        for (n = 0; n < r; n++,
                        f++)
                            n in i && l(p, f, i[n])
                    } else {
                        if (f >= 9007199254740991)
                            throw TypeError("Maximum allowed index exceeded");
                        l(p, f++, i)
                    }
                return p.length = f,
                p
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(50)
          , r = n(9)
          , i = n(40);
        e.exports = function(e, t, n) {
            var a = o(t);
            a in e ? r.f(e, a, i(0, n)) : e[a] = n
        }
    }
    , function(e, t, n) {
        var o = n(1)
          , r = n(3)
          , i = n(70)
          , a = r("species");
        e.exports = function(e) {
            return i >= 51 || !o((function() {
                var t = [];
                return (t.constructor = {})[a] = function() {
                    return {
                        foo: 1
                    }
                }
                ,
                1 !== t[e](Boolean).foo
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var o, r, i = n(84), a = n(121), c = RegExp.prototype.exec, s = String.prototype.replace, l = c, u = (o = /a/,
        r = /b*/g,
        c.call(o, "a"),
        c.call(r, "a"),
        0 !== o.lastIndex || 0 !== r.lastIndex), p = a.UNSUPPORTED_Y || a.BROKEN_CARET, f = void 0 !== /()??/.exec("")[1];
        (u || f || p) && (l = function(e) {
            var t, n, o, r, a = this, l = p && a.sticky, d = i.call(a), m = a.source, v = 0, y = e;
            return l && (-1 === (d = d.replace("y", "")).indexOf("g") && (d += "g"),
            y = String(e).slice(a.lastIndex),
            a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (m = "(?: " + m + ")",
            y = " " + y,
            v++),
            n = new RegExp("^(?:" + m + ")",d)),
            f && (n = new RegExp("^" + m + "$(?!\\s)",d)),
            u && (t = a.lastIndex),
            o = c.call(l ? n : a, y),
            l ? o ? (o.input = o.input.slice(v),
            o[0] = o[0].slice(v),
            o.index = a.lastIndex,
            a.lastIndex += o[0].length) : a.lastIndex = 0 : u && o && (a.lastIndex = a.global ? o.index + o[0].length : t),
            f && o && o.length > 1 && s.call(o[0], n, (function() {
                for (r = 1; r < arguments.length - 2; r++)
                    void 0 === arguments[r] && (o[r] = void 0)
            }
            )),
            o
        }
        ),
        e.exports = l
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(165);
        o({
            target: "Object",
            stat: !0,
            forced: Object.assign !== r
        }, {
            assign: r
        })
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(4)
          , i = o.document
          , a = r(i) && r(i.createElement);
        e.exports = function(e) {
            return a ? i.createElement(e) : {}
        }
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(20);
        e.exports = function(e, t) {
            try {
                r(o, e, t)
            } catch (n) {
                o[e] = t
            }
            return t
        }
    }
    , function(e, t, n) {
        var o = n(95)
          , r = Function.toString;
        "function" != typeof o.inspectSource && (o.inspectSource = function(e) {
            return r.call(e)
        }
        ),
        e.exports = o.inspectSource
    }
    , function(e, t, n) {
        var o = n(32)
          , r = n(95);
        (e.exports = function(e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.5",
            mode: o ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    , function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }
    , function(e, t, n) {
        var o = n(1);
        e.exports = !!Object.getOwnPropertySymbols && !o((function() {
            return !String(Symbol())
        }
        ))
    }
    , function(e, t, n) {
        var o, r, i = n(2), a = n(71), c = i.process, s = c && c.versions, l = s && s.v8;
        l ? r = (o = l.split("."))[0] + o[1] : a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = o[1]),
        e.exports = r && +r
    }
    , function(e, t, n) {
        var o = n(33);
        e.exports = o("navigator", "userAgent") || ""
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(107);
        o({
            target: "Array",
            proto: !0,
            forced: [].forEach != r
        }, {
            forEach: r
        })
    }
    , function(e, t, n) {
        var o = {};
        o[n(3)("toStringTag")] = "z",
        e.exports = "[object z]" === String(o)
    }
    , function(e, t, n) {
        var o = n(3)("iterator")
          , r = !1;
        try {
            var i = 0
              , a = {
                next: function() {
                    return {
                        done: !!i++
                    }
                },
                return: function() {
                    r = !0
                }
            };
            a[o] = function() {
                return this
            }
            ,
            Array.from(a, (function() {
                throw 2
            }
            ))
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !r)
                return !1;
            var n = !1;
            try {
                var i = {};
                i[o] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                ,
                e(i)
            } catch (e) {}
            return n
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(157)
          , i = n(76)
          , a = n(77)
          , c = n(44)
          , s = n(20)
          , l = n(21)
          , u = n(3)
          , p = n(32)
          , f = n(47)
          , d = n(114)
          , m = d.IteratorPrototype
          , v = d.BUGGY_SAFARI_ITERATORS
          , y = u("iterator")
          , h = function() {
            return this
        };
        e.exports = function(e, t, n, u, d, g, b) {
            r(n, t, u);
            var k, _, w, x = function(e) {
                if (e === d && P)
                    return P;
                if (!v && e in O)
                    return O[e];
                switch (e) {
                case "keys":
                case "values":
                case "entries":
                    return function() {
                        return new n(this,e)
                    }
                }
                return function() {
                    return new n(this)
                }
            }, S = t + " Iterator", j = !1, O = e.prototype, A = O[y] || O["@@iterator"] || d && O[d], P = !v && A || x(d), z = "Array" == t && O.entries || A;
            if (z && (k = i(z.call(new e)),
            m !== Object.prototype && k.next && (p || i(k) === m || (a ? a(k, m) : "function" != typeof k[y] && s(k, y, h)),
            c(k, S, !0, !0),
            p && (f[S] = h))),
            "values" == d && A && "values" !== A.name && (j = !0,
            P = function() {
                return A.call(this)
            }
            ),
            p && !b || O[y] === P || s(O, y, P),
            f[t] = P,
            d)
                if (_ = {
                    values: x("values"),
                    keys: g ? P : x("keys"),
                    entries: x("entries")
                },
                b)
                    for (w in _)
                        (v || j || !(w in O)) && l(O, w, _[w]);
                else
                    o({
                        target: t,
                        proto: !0,
                        forced: v || j
                    }, _);
            return _
        }
    }
    , function(e, t, n) {
        var o = n(8)
          , r = n(24)
          , i = n(51)
          , a = n(115)
          , c = i("IE_PROTO")
          , s = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) {
            return e = r(e),
            o(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }
    , function(e, t, n) {
        var o = n(6)
          , r = n(158);
        e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e, t = !1, n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                t = n instanceof Array
            } catch (e) {}
            return function(n, i) {
                return o(n),
                r(i),
                t ? e.call(n, i) : n.__proto__ = i,
                n
            }
        }() : void 0)
    }
    , function(e, t, n) {
        "use strict";
        var o = n(116)
          , r = n(119);
        e.exports = o("Map", (function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), r)
    }
    , function(e, t, n) {
        var o = n(6)
          , r = n(110)
          , i = n(18)
          , a = n(45)
          , c = n(111)
          , s = n(109)
          , l = function(e, t) {
            this.stopped = e,
            this.result = t
        };
        (e.exports = function(e, t, n, u, p) {
            var f, d, m, v, y, h, g, b = a(t, n, u ? 2 : 1);
            if (p)
                f = e;
            else {
                if ("function" != typeof (d = c(e)))
                    throw TypeError("Target is not iterable");
                if (r(d)) {
                    for (m = 0,
                    v = i(e.length); v > m; m++)
                        if ((y = u ? b(o(g = e[m])[0], g[1]) : b(e[m])) && y instanceof l)
                            return y;
                    return new l(!1)
                }
                f = d.call(e)
            }
            for (h = f.next; !(g = h.call(f)).done; )
                if ("object" == typeof (y = s(f, b, g.value, u)) && y && y instanceof l)
                    return y;
            return new l(!1)
        }
        ).stop = function(e) {
            return new l(!0,e)
        }
    }
    , function(e, t) {
        e.exports = function(e, t, n) {
            if (!(e instanceof t))
                throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(33)
          , r = n(9)
          , i = n(3)
          , a = n(5)
          , c = i("species");
        e.exports = function(e) {
            var t = o(e)
              , n = r.f;
            a && t && !t[c] && n(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(1)
          , i = n(17)
          , a = n(26).f
          , c = n(5)
          , s = r((function() {
            a(1)
        }
        ));
        o({
            target: "Object",
            stat: !0,
            forced: !c || s,
            sham: !c
        }, {
            getOwnPropertyDescriptor: function(e, t) {
                return a(i(e), t)
            }
        })
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(5)
          , i = n(97)
          , a = n(17)
          , c = n(26)
          , s = n(59);
        o({
            target: "Object",
            stat: !0,
            sham: !r
        }, {
            getOwnPropertyDescriptors: function(e) {
                for (var t, n, o = a(e), r = c.f, l = i(o), u = {}, p = 0; l.length > p; )
                    void 0 !== (n = r(o, t = l[p++])) && s(u, t, n);
                return u
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(6);
        e.exports = function() {
            var e = o(this)
              , t = "";
            return e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(86)
          , r = n(87)
          , i = n(6)
          , a = n(23)
          , c = n(123)
          , s = n(88)
          , l = n(18)
          , u = n(89)
          , p = n(61)
          , f = n(1)
          , d = [].push
          , m = Math.min
          , v = !f((function() {
            return !RegExp(4294967295, "y")
        }
        ));
        o("split", 2, (function(e, t, n) {
            var o;
            return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
                var o = String(a(this))
                  , i = void 0 === n ? 4294967295 : n >>> 0;
                if (0 === i)
                    return [];
                if (void 0 === e)
                    return [o];
                if (!r(e))
                    return t.call(o, e, i);
                for (var c, s, l, u = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), m = 0, v = new RegExp(e.source,f + "g"); (c = p.call(v, o)) && !((s = v.lastIndex) > m && (u.push(o.slice(m, c.index)),
                c.length > 1 && c.index < o.length && d.apply(u, c.slice(1)),
                l = c[0].length,
                m = s,
                u.length >= i)); )
                    v.lastIndex === c.index && v.lastIndex++;
                return m === o.length ? !l && v.test("") || u.push("") : u.push(o.slice(m)),
                u.length > i ? u.slice(0, i) : u
            }
            : "0".split(void 0, 0).length ? function(e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n)
            }
            : t,
            [function(t, n) {
                var r = a(this)
                  , i = null == t ? void 0 : t[e];
                return void 0 !== i ? i.call(t, r, n) : o.call(String(r), t, n)
            }
            , function(e, r) {
                var a = n(o, e, this, r, o !== t);
                if (a.done)
                    return a.value;
                var p = i(e)
                  , f = String(this)
                  , d = c(p, RegExp)
                  , y = p.unicode
                  , h = (p.ignoreCase ? "i" : "") + (p.multiline ? "m" : "") + (p.unicode ? "u" : "") + (v ? "y" : "g")
                  , g = new d(v ? p : "^(?:" + p.source + ")",h)
                  , b = void 0 === r ? 4294967295 : r >>> 0;
                if (0 === b)
                    return [];
                if (0 === f.length)
                    return null === u(g, f) ? [f] : [];
                for (var k = 0, _ = 0, w = []; _ < f.length; ) {
                    g.lastIndex = v ? _ : 0;
                    var x, S = u(g, v ? f : f.slice(_));
                    if (null === S || (x = m(l(g.lastIndex + (v ? 0 : _)), f.length)) === k)
                        _ = s(f, _, y);
                    else {
                        if (w.push(f.slice(k, _)),
                        w.length === b)
                            return w;
                        for (var j = 1; j <= S.length - 1; j++)
                            if (w.push(S[j]),
                            w.length === b)
                                return w;
                        _ = k = x
                    }
                }
                return w.push(f.slice(k)),
                w
            }
            ]
        }
        ), !v)
    }
    , function(e, t, n) {
        "use strict";
        n(38);
        var o = n(21)
          , r = n(1)
          , i = n(3)
          , a = n(61)
          , c = n(20)
          , s = i("species")
          , l = !r((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                },
                e
            }
            ,
            "7" !== "".replace(e, "$<a>")
        }
        ))
          , u = "$0" === "a".replace(/./, "$0")
          , p = i("replace")
          , f = !!/./[p] && "" === /./[p]("a", "$0")
          , d = !r((function() {
            var e = /(?:)/
              , t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            }
            ;
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }
        ));
        e.exports = function(e, t, n, p) {
            var m = i(e)
              , v = !r((function() {
                var t = {};
                return t[m] = function() {
                    return 7
                }
                ,
                7 != ""[e](t)
            }
            ))
              , y = v && !r((function() {
                var t = !1
                  , n = /a/;
                return "split" === e && ((n = {}).constructor = {},
                n.constructor[s] = function() {
                    return n
                }
                ,
                n.flags = "",
                n[m] = /./[m]),
                n.exec = function() {
                    return t = !0,
                    null
                }
                ,
                n[m](""),
                !t
            }
            ));
            if (!v || !y || "replace" === e && (!l || !u || f) || "split" === e && !d) {
                var h = /./[m]
                  , g = n(m, ""[e], (function(e, t, n, o, r) {
                    return t.exec === a ? v && !r ? {
                        done: !0,
                        value: h.call(t, n, o)
                    } : {
                        done: !0,
                        value: e.call(n, t, o)
                    } : {
                        done: !1
                    }
                }
                ), {
                    REPLACE_KEEPS_$0: u,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
                })
                  , b = g[0]
                  , k = g[1];
                o(String.prototype, e, b),
                o(RegExp.prototype, m, 2 == t ? function(e, t) {
                    return k.call(e, this, t)
                }
                : function(e) {
                    return k.call(e, this)
                }
                )
            }
            p && c(RegExp.prototype[m], "sham", !0)
        }
    }
    , function(e, t, n) {
        var o = n(4)
          , r = n(27)
          , i = n(3)("match");
        e.exports = function(e) {
            var t;
            return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == r(e))
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(122).charAt;
        e.exports = function(e, t, n) {
            return t + (n ? o(e, t).length : 1)
        }
    }
    , function(e, t, n) {
        var o = n(27)
          , r = n(61);
        e.exports = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var i = n.call(e, t);
                if ("object" != typeof i)
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== o(e))
                throw TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e, t)
        }
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(124)
          , i = n(107)
          , a = n(20);
        for (var c in r) {
            var s = o[c]
              , l = s && s.prototype;
            if (l && l.forEach !== i)
                try {
                    a(l, "forEach", i)
                } catch (e) {
                    l.forEach = i
                }
        }
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(2)
          , i = n(55)
          , a = n(118)
          , c = n(9).f
          , s = n(53).f
          , l = n(87)
          , u = n(84)
          , p = n(121)
          , f = n(21)
          , d = n(1)
          , m = n(31).set
          , v = n(81)
          , y = n(3)("match")
          , h = r.RegExp
          , g = h.prototype
          , b = /a/g
          , k = /a/g
          , _ = new h(b) !== b
          , w = p.UNSUPPORTED_Y;
        if (o && i("RegExp", !_ || w || d((function() {
            return k[y] = !1,
            h(b) != b || h(k) == k || "/a/i" != h(b, "i")
        }
        )))) {
            for (var x = function(e, t) {
                var n, o = this instanceof x, r = l(e), i = void 0 === t;
                if (!o && r && e.constructor === x && i)
                    return e;
                _ ? r && !i && (e = e.source) : e instanceof x && (i && (t = u.call(e)),
                e = e.source),
                w && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var c = a(_ ? new h(e,t) : h(e, t), o ? this : g, x);
                return w && n && m(c, {
                    sticky: n
                }),
                c
            }, S = function(e) {
                e in x || c(x, e, {
                    configurable: !0,
                    get: function() {
                        return h[e]
                    },
                    set: function(t) {
                        h[e] = t
                    }
                })
            }, j = s(h), O = 0; j.length > O; )
                S(j[O++]);
            g.constructor = x,
            x.prototype = g,
            f(r, "RegExp", x)
        }
        v("RegExp")
    }
    , function(e, t, n) {
        var o = n(87);
        e.exports = function(e) {
            if (o(e))
                throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    }
    , function(e, t, n) {
        var o = n(3)("match");
        e.exports = function(e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (n) {
                try {
                    return t[o] = !1,
                    "/./"[e](t)
                } catch (e) {}
            }
            return !1
        }
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(1)
          , i = n(63);
        e.exports = !o && !r((function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(64)
          , i = o["__core-js_shared__"] || r("__core-js_shared__", {});
        e.exports = i
    }
    , function(e, t, n) {
        var o = n(8)
          , r = n(97)
          , i = n(26)
          , a = n(9);
        e.exports = function(e, t) {
            for (var n = r(t), c = a.f, s = i.f, l = 0; l < n.length; l++) {
                var u = n[l];
                o(e, u) || c(e, u, s(t, u))
            }
        }
    }
    , function(e, t, n) {
        var o = n(33)
          , r = n(53)
          , i = n(68)
          , a = n(6);
        e.exports = o("Reflect", "ownKeys") || function(e) {
            var t = r.f(a(e))
              , n = i.f;
            return n ? t.concat(n(e)) : t
        }
    }
    , function(e, t, n) {
        var o = n(2);
        e.exports = o
    }
    , function(e, t, n) {
        var o = n(8)
          , r = n(17)
          , i = n(100).indexOf
          , a = n(41);
        e.exports = function(e, t) {
            var n, c = r(e), s = 0, l = [];
            for (n in c)
                !o(a, n) && o(c, n) && l.push(n);
            for (; t.length > s; )
                o(c, n = t[s++]) && (~i(l, n) || l.push(n));
            return l
        }
    }
    , function(e, t, n) {
        var o = n(17)
          , r = n(18)
          , i = n(101)
          , a = function(e) {
            return function(t, n, a) {
                var c, s = o(t), l = r(s.length), u = i(a, l);
                if (e && n != n) {
                    for (; l > u; )
                        if ((c = s[u++]) != c)
                            return !0
                } else
                    for (; l > u; u++)
                        if ((e || u in s) && s[u] === n)
                            return e || u || 0;
                return !e && -1
            }
        };
        e.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }
    , function(e, t, n) {
        var o = n(54)
          , r = Math.max
          , i = Math.min;
        e.exports = function(e, t) {
            var n = o(e);
            return n < 0 ? r(n + t, 0) : i(n, t)
        }
    }
    , function(e, t, n) {
        var o = n(69);
        e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    , function(e, t, n) {
        var o = n(33);
        e.exports = o("document", "documentElement")
    }
    , function(e, t, n) {
        var o = n(3);
        t.f = o
    }
    , function(e, t, n) {
        var o = n(98)
          , r = n(8)
          , i = n(104)
          , a = n(9).f;
        e.exports = function(e) {
            var t = o.Symbol || (o.Symbol = {});
            r(t, e) || a(t, e, {
                value: i.f(e)
            })
        }
    }
    , function(e, t, n) {
        var o = n(4)
          , r = n(56)
          , i = n(3)("species");
        e.exports = function(e, t) {
            var n;
            return r(e) && ("function" != typeof (n = e.constructor) || n !== Array && !r(n.prototype) ? o(n) && null === (n = n[i]) && (n = void 0) : n = void 0),
            new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(57).forEach
          , r = n(108)
          , i = n(46)
          , a = r("forEach")
          , c = i("forEach");
        e.exports = a && c ? [].forEach : function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(1);
        e.exports = function(e, t) {
            var n = [][e];
            return !!n && o((function() {
                n.call(null, t || function() {
                    throw 1
                }
                , 1)
            }
            ))
        }
    }
    , function(e, t, n) {
        var o = n(6);
        e.exports = function(e, t, n, r) {
            try {
                return r ? t(o(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && o(i.call(e)),
                t
            }
        }
    }
    , function(e, t, n) {
        var o = n(3)
          , r = n(47)
          , i = o("iterator")
          , a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || a[i] === e)
        }
    }
    , function(e, t, n) {
        var o = n(112)
          , r = n(47)
          , i = n(3)("iterator");
        e.exports = function(e) {
            if (null != e)
                return e[i] || e["@@iterator"] || r[o(e)]
        }
    }
    , function(e, t, n) {
        var o = n(73)
          , r = n(27)
          , i = n(3)("toStringTag")
          , a = "Arguments" == r(function() {
            return arguments
        }());
        e.exports = o ? r : function(e) {
            var t, n, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), i)) ? n : a ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o
        }
    }
    , function(e, t, n) {
        var o = n(3)
          , r = n(42)
          , i = n(9)
          , a = o("unscopables")
          , c = Array.prototype;
        null == c[a] && i.f(c, a, {
            configurable: !0,
            value: r(null)
        }),
        e.exports = function(e) {
            c[a][e] = !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var o, r, i, a = n(76), c = n(20), s = n(8), l = n(3), u = n(32), p = l("iterator"), f = !1;
        [].keys && ("next"in (i = [].keys()) ? (r = a(a(i))) !== Object.prototype && (o = r) : f = !0),
        null == o && (o = {}),
        u || s(o, p) || c(o, p, (function() {
            return this
        }
        )),
        e.exports = {
            IteratorPrototype: o,
            BUGGY_SAFARI_ITERATORS: f
        }
    }
    , function(e, t, n) {
        var o = n(1);
        e.exports = !o((function() {
            function e() {}
            return e.prototype.constructor = null,
            Object.getPrototypeOf(new e) !== e.prototype
        }
        ))
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(2)
          , i = n(55)
          , a = n(21)
          , c = n(117)
          , s = n(79)
          , l = n(80)
          , u = n(4)
          , p = n(1)
          , f = n(74)
          , d = n(44)
          , m = n(118);
        e.exports = function(e, t, n) {
            var v = -1 !== e.indexOf("Map")
              , y = -1 !== e.indexOf("Weak")
              , h = v ? "set" : "add"
              , g = r[e]
              , b = g && g.prototype
              , k = g
              , _ = {}
              , w = function(e) {
                var t = b[e];
                a(b, e, "add" == e ? function(e) {
                    return t.call(this, 0 === e ? 0 : e),
                    this
                }
                : "delete" == e ? function(e) {
                    return !(y && !u(e)) && t.call(this, 0 === e ? 0 : e)
                }
                : "get" == e ? function(e) {
                    return y && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                }
                : "has" == e ? function(e) {
                    return !(y && !u(e)) && t.call(this, 0 === e ? 0 : e)
                }
                : function(e, n) {
                    return t.call(this, 0 === e ? 0 : e, n),
                    this
                }
                )
            };
            if (i(e, "function" != typeof g || !(y || b.forEach && !p((function() {
                (new g).entries().next()
            }
            )))))
                k = n.getConstructor(t, e, v, h),
                c.REQUIRED = !0;
            else if (i(e, !0)) {
                var x = new k
                  , S = x[h](y ? {} : -0, 1) != x
                  , j = p((function() {
                    x.has(1)
                }
                ))
                  , O = f((function(e) {
                    new g(e)
                }
                ))
                  , A = !y && p((function() {
                    for (var e = new g, t = 5; t--; )
                        e[h](t, t);
                    return !e.has(-0)
                }
                ));
                O || ((k = t((function(t, n) {
                    l(t, k, e);
                    var o = m(new g, t, k);
                    return null != n && s(n, o[h], o, v),
                    o
                }
                ))).prototype = b,
                b.constructor = k),
                (j || A) && (w("delete"),
                w("has"),
                v && w("get")),
                (A || S) && w(h),
                y && b.clear && delete b.clear
            }
            return _[e] = k,
            o({
                global: !0,
                forced: k != g
            }, _),
            d(k, e),
            y || n.setStrong(k, e, v),
            k
        }
    }
    , function(e, t, n) {
        var o = n(41)
          , r = n(4)
          , i = n(8)
          , a = n(9).f
          , c = n(52)
          , s = n(159)
          , l = c("meta")
          , u = 0
          , p = Object.isExtensible || function() {
            return !0
        }
          , f = function(e) {
            a(e, l, {
                value: {
                    objectID: "O" + ++u,
                    weakData: {}
                }
            })
        }
          , d = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!r(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, l)) {
                    if (!p(e))
                        return "F";
                    if (!t)
                        return "E";
                    f(e)
                }
                return e[l].objectID
            },
            getWeakData: function(e, t) {
                if (!i(e, l)) {
                    if (!p(e))
                        return !0;
                    if (!t)
                        return !1;
                    f(e)
                }
                return e[l].weakData
            },
            onFreeze: function(e) {
                return s && d.REQUIRED && p(e) && !i(e, l) && f(e),
                e
            }
        };
        o[l] = !0
    }
    , function(e, t, n) {
        var o = n(4)
          , r = n(77);
        e.exports = function(e, t, n) {
            var i, a;
            return r && "function" == typeof (i = t.constructor) && i !== n && o(a = i.prototype) && a !== n.prototype && r(e, a),
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(9).f
          , r = n(42)
          , i = n(120)
          , a = n(45)
          , c = n(80)
          , s = n(79)
          , l = n(75)
          , u = n(81)
          , p = n(5)
          , f = n(117).fastKey
          , d = n(31)
          , m = d.set
          , v = d.getterFor;
        e.exports = {
            getConstructor: function(e, t, n, l) {
                var u = e((function(e, o) {
                    c(e, u, t),
                    m(e, {
                        type: t,
                        index: r(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    p || (e.size = 0),
                    null != o && s(o, e[l], e, n)
                }
                ))
                  , d = v(t)
                  , y = function(e, t, n) {
                    var o, r, i = d(e), a = h(e, t);
                    return a ? a.value = n : (i.last = a = {
                        index: r = f(t, !0),
                        key: t,
                        value: n,
                        previous: o = i.last,
                        next: void 0,
                        removed: !1
                    },
                    i.first || (i.first = a),
                    o && (o.next = a),
                    p ? i.size++ : e.size++,
                    "F" !== r && (i.index[r] = a)),
                    e
                }
                  , h = function(e, t) {
                    var n, o = d(e), r = f(t);
                    if ("F" !== r)
                        return o.index[r];
                    for (n = o.first; n; n = n.next)
                        if (n.key == t)
                            return n
                };
                return i(u.prototype, {
                    clear: function() {
                        for (var e = d(this), t = e.index, n = e.first; n; )
                            n.removed = !0,
                            n.previous && (n.previous = n.previous.next = void 0),
                            delete t[n.index],
                            n = n.next;
                        e.first = e.last = void 0,
                        p ? e.size = 0 : this.size = 0
                    },
                    delete: function(e) {
                        var t = d(this)
                          , n = h(this, e);
                        if (n) {
                            var o = n.next
                              , r = n.previous;
                            delete t.index[n.index],
                            n.removed = !0,
                            r && (r.next = o),
                            o && (o.previous = r),
                            t.first == n && (t.first = o),
                            t.last == n && (t.last = r),
                            p ? t.size-- : this.size--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        for (var t, n = d(this), o = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first; )
                            for (o(t.value, t.key, this); t && t.removed; )
                                t = t.previous
                    },
                    has: function(e) {
                        return !!h(this, e)
                    }
                }),
                i(u.prototype, n ? {
                    get: function(e) {
                        var t = h(this, e);
                        return t && t.value
                    },
                    set: function(e, t) {
                        return y(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function(e) {
                        return y(this, e = 0 === e ? 0 : e, e)
                    }
                }),
                p && o(u.prototype, "size", {
                    get: function() {
                        return d(this).size
                    }
                }),
                u
            },
            setStrong: function(e, t, n) {
                var o = t + " Iterator"
                  , r = v(t)
                  , i = v(o);
                l(e, t, (function(e, t) {
                    m(this, {
                        type: o,
                        target: e,
                        state: r(e),
                        kind: t,
                        last: void 0
                    })
                }
                ), (function() {
                    for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
                        n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (e.target = void 0,
                    {
                        value: void 0,
                        done: !0
                    })
                }
                ), n ? "entries" : "values", !n, !0),
                u(t)
            }
        }
    }
    , function(e, t, n) {
        var o = n(21);
        e.exports = function(e, t, n) {
            for (var r in t)
                o(e, r, t[r], n);
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(1);
        function r(e, t) {
            return RegExp(e, t)
        }
        t.UNSUPPORTED_Y = o((function() {
            var e = r("a", "y");
            return e.lastIndex = 2,
            null != e.exec("abcd")
        }
        )),
        t.BROKEN_CARET = o((function() {
            var e = r("^r", "gy");
            return e.lastIndex = 2,
            null != e.exec("str")
        }
        ))
    }
    , function(e, t, n) {
        var o = n(54)
          , r = n(23)
          , i = function(e) {
            return function(t, n) {
                var i, a, c = String(r(t)), s = o(n), l = c.length;
                return s < 0 || s >= l ? e ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === l || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? c.charAt(s) : i : e ? c.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        };
        e.exports = {
            codeAt: i(!1),
            charAt: i(!0)
        }
    }
    , function(e, t, n) {
        var o = n(6)
          , r = n(36)
          , i = n(3)("species");
        e.exports = function(e, t) {
            var n, a = o(e).constructor;
            return void 0 === a || null == (n = o(a)[i]) ? t : r(n)
        }
    }
    , function(e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(116)
          , r = n(119);
        e.exports = o("Set", (function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), r)
    }
    , function(e, t, n) {
        var o, r, i, a = n(2), c = n(1), s = n(27), l = n(45), u = n(103), p = n(63), f = n(127), d = a.location, m = a.setImmediate, v = a.clearImmediate, y = a.process, h = a.MessageChannel, g = a.Dispatch, b = 0, k = {}, _ = function(e) {
            if (k.hasOwnProperty(e)) {
                var t = k[e];
                delete k[e],
                t()
            }
        }, w = function(e) {
            return function() {
                _(e)
            }
        }, x = function(e) {
            _(e.data)
        }, S = function(e) {
            a.postMessage(e + "", d.protocol + "//" + d.host)
        };
        m && v || (m = function(e) {
            for (var t = [], n = 1; arguments.length > n; )
                t.push(arguments[n++]);
            return k[++b] = function() {
                ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }
            ,
            o(b),
            b
        }
        ,
        v = function(e) {
            delete k[e]
        }
        ,
        "process" == s(y) ? o = function(e) {
            y.nextTick(w(e))
        }
        : g && g.now ? o = function(e) {
            g.now(w(e))
        }
        : h && !f ? (i = (r = new h).port2,
        r.port1.onmessage = x,
        o = l(i.postMessage, i, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(S) || "file:" === d.protocol ? o = "onreadystatechange"in p("script") ? function(e) {
            u.appendChild(p("script")).onreadystatechange = function() {
                u.removeChild(this),
                _(e)
            }
        }
        : function(e) {
            setTimeout(w(e), 0)
        }
        : (o = S,
        a.addEventListener("message", x, !1))),
        e.exports = {
            set: m,
            clear: v
        }
    }
    , function(e, t, n) {
        var o = n(71);
        e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o)
    }
    , function(e, t, n) {
        "use strict";
        var o = n(36)
          , r = function(e) {
            var t, n;
            this.promise = new e((function(e, o) {
                if (void 0 !== t || void 0 !== n)
                    throw TypeError("Bad Promise constructor");
                t = e,
                n = o
            }
            )),
            this.resolve = o(t),
            this.reject = o(n)
        };
        e.exports.f = function(e) {
            return new r(e)
        }
    }
    , function(e, t, n) {
        e.exports = n(163)()
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "照单全收",
            acceptSelected: "接受选择",
            app: {
                disableAll: {
                    description: "使用此开关可启用或禁用所有服务。",
                    title: "启用或停用所有服务"
                },
                optOut: {
                    description: "这个服务是默认加载的(但你可以选择退出)",
                    title: "(选择退出)"
                },
                purpose: "目的",
                purposes: "目的",
                required: {
                    description: "这种服务是必须的",
                    title: "(总是需要)"
                }
            },
            close: "密切",
            consentModal: {
                description: "在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。",
                privacyPolicy: {
                    name: "隐私政策",
                    text: "要了解更多，请阅读我们的{privacyPolicy} 。"
                },
                title: "我们想使用的服务"
            },
            consentNotice: {
                changeDescription: "自上次访问后有变化，请更新您的同意。",
                configure: "配置",
                description: "你好！能不能为{purposes} 启用一些附加服务？",
                imprint: {
                    name: "印记"
                },
                learnMore: "让我来选",
                privacyPolicy: {
                    name: "隐私政策"
                },
                testing: "测试模式！"
            },
            decline: "我拒绝",
            ok: "没事的",
            poweredBy: "与Klaro一起实现!",
            purposeItem: {
                app: "服务",
                apps: "服务"
            },
            purposes: {
                advertisement: {
                    description: "这些服务处理个人信息，向您展示个性化或基于兴趣的广告。",
                    title: "广告"
                },
                functional: {
                    description: "这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n",
                    title: "服务提供"
                },
                marketing: {
                    description: "这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。",
                    title: "市场营销"
                },
                performance: {
                    description: "这些服务处理个人信息是为了优化本网站提供的服务。\n",
                    title: "性能优化"
                }
            },
            save: "挽救"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Aceitar todos",
            acceptSelected: "Aceitar selecionados",
            app: {
                disableAll: {
                    description: "Use essa chave para habilitar ou desabilitar todos os serviços.",
                    title: "Habilitar ou desabilitar todos os serviços"
                },
                optOut: {
                    description: "Estes serviços são carregados por padrão (mas o senhor pode optar por não participar).",
                    title: "(opt-out)"
                },
                purpose: "Objetivo",
                purposes: "Fins",
                required: {
                    description: "Esses serviços são sempre necessários",
                    title: "(sempre necessário)"
                }
            },
            close: "Fechar",
            consentModal: {
                description: "Aqui o senhor pode avaliar e personalizar os serviços que gostaríamos de usar neste website. O senhor está no comando! Habilite ou desabilite os serviços como o senhor julgar conveniente.",
                privacyPolicy: {
                    name: "política de privacidade",
                    text: "Para saber mais, por favor, leia nossa {privacyPolicy}."
                },
                title: "Serviços que gostaríamos de utilizar"
            },
            consentNotice: {
                changeDescription: "Houve mudanças desde sua última visita, queira renovar seu consentimento.",
                configure: "configurar",
                description: "Olá! Poderíamos, por favor, habilitar alguns serviços adicionais para {purposes}?",
                imprint: {
                    name: "imprimir"
                },
                learnMore: "Deixe-me escolher",
                privacyPolicy: {
                    name: "política de privacidade"
                },
                testing: "Modo de teste!"
            },
            decline: "Recuso-me",
            ok: "Está tudo bem.",
            poweredBy: "Realizado com Klaro!",
            purposeItem: {
                app: "serviço",
                apps: "serviços"
            },
            purposes: {
                advertisement: {
                    description: "Esses serviços processam informações pessoais para mostrar ao senhor anúncios personalizados ou baseados em interesses.",
                    title: "Anúncios"
                },
                functional: {
                    description: "Esses serviços são essenciais para o correto funcionamento deste website. O senhor não pode desativá-los aqui, pois de outra forma o serviço não funcionaria corretamente.\n",
                    title: "Prestação de serviços"
                },
                marketing: {
                    description: "Esses serviços processam informações pessoais para mostrar ao senhor conteúdo relevante sobre produtos, serviços ou tópicos que possam ser do seu interesse.",
                    title: "Marketing"
                },
                performance: {
                    description: "Esses serviços processam informações pessoais para otimizar o serviço que este website oferece.\n",
                    title: "Otimização do desempenho"
                }
            },
            save: "Exceto"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Accepta-les totes",
            acceptSelected: "Accepta les escollides",
            app: {
                disableAll: {
                    description: "Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.",
                    title: "Habilita/deshabilita totes les aplicacions"
                },
                optOut: {
                    description: "Aquesta aplicació es carrega per defecte, però podeu desactivar-la",
                    title: "(opt-out)"
                },
                purpose: "Finalitat",
                purposes: "Finalitats",
                required: {
                    description: "Aquesta aplicació es necessita sempre",
                    title: "(necessària)"
                }
            },
            close: "Tanca",
            consentModal: {
                description: "Aquí podeu veure i personalitzar la informació que recopilem sobre vós.",
                privacyPolicy: {
                    name: "política de privadesa",
                    text: "Per a més informació, consulteu la nostra {privacyPolicy}."
                },
                title: "Informació que recopilem"
            },
            consentNotice: {
                changeDescription: "Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.",
                configure: "null",
                description: "Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.",
                imprint: {
                    name: "Empremta"
                },
                learnMore: "Saber-ne més",
                privacyPolicy: {
                    name: "política de privadesa"
                }
            },
            decline: "Rebutja",
            ok: "Accepta",
            poweredBy: "Funciona amb Klaro!",
            purposeItem: {
                app: "aplicació",
                apps: "aplicacions"
            },
            save: "Desa"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Tillad alle",
            acceptSelected: "Tillad udvalgte",
            app: {
                disableAll: {
                    description: "Brug denne kontakt til at aktivere/deaktivere alle apps.",
                    title: "Aktiver/deaktiver alle applikatione"
                },
                optOut: {
                    description: "Denne applikation indlæses som standard (men du kan deaktivere den)",
                    title: "Opt-Out"
                },
                purpose: "Formål",
                purposes: "Formål",
                required: {
                    description: "Denne applikation er altid nødvendig",
                    title: "(Altid nødvendig)"
                }
            },
            close: "Luk",
            consentModal: {
                description: "Her kan du se og ændre, hvilke informationer vi gemmer om dig.",
                privacyPolicy: {
                    name: "Flere informationer finde du under {privacyPolicy}",
                    text: "databeskyttelseserklæring."
                },
                title: "Informationer, som vi gemmer"
            },
            consentNotice: {
                changeDescription: "Der har været ændringer siden dit sidste besøg. Opdater dit valg.",
                configure: "",
                configure_en: "configure",
                description: "Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Læs mere",
                privacyPolicy: {
                    name: "Datenschutzerklärung"
                }
            },
            decline: "Afvis",
            ok: "Ok",
            poweredBy: "Realiseret med Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Gem"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Alle akzeptieren",
            acceptSelected: "Ausgewählte akzeptieren",
            app: {
                disableAll: {
                    description: "Mit diesem Schalter können Sie alle Dienste aktivieren oder deaktivieren.",
                    title: "Alle Dienste aktivieren oder deaktivieren"
                },
                optOut: {
                    description: "Diese Dienste werden standardmäßig geladen (Sie können sich jedoch abmelden)",
                    title: "(Opt-out)"
                },
                purpose: "Zweck",
                purposes: "Zwecke",
                required: {
                    description: "Dieser Service ist immer erforderlich",
                    title: "(immer erforderlich)"
                }
            },
            close: "Schließen",
            consentModal: {
                description: "Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.",
                privacyPolicy: {
                    name: "Datenschutzerklärung",
                    text: "Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}."
                },
                title: "Dienstleistungen, die wir nutzen möchten"
            },
            consentNotice: {
                changeDescription: "Seit Ihrem letzten Besuch gab es Änderungen, bitte erneuern Sie Ihre Zustimmung.",
                configure: "konfigurieren",
                description: "Hallo! Könnten wir bitte einige zusätzliche Dienste für {purposes} aktivieren?",
                imprint: {
                    name: "Impressum"
                },
                learnMore: "Lassen Sie mich wählen",
                privacyPolicy: {
                    name: "Datenschutzerklärung"
                },
                testing: "Testmodus!"
            },
            decline: "Ich lehne ab",
            ok: "Das ist ok",
            poweredBy: "Realisiert mit Klaro!",
            purposeItem: {
                app: "Dienst",
                apps: "Dienste"
            },
            purposes: {
                advertisement: {
                    description: "Diese Dienste verarbeiten persönliche Daten, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.",
                    title: "Anzeigen"
                },
                functional: {
                    description: "Diese Dienste sind für das korrekte Funktionieren dieser Website unerlässlich. Sie können sie hier nicht deaktiviert werden, da der Dienst sonst nicht richtig funktionieren würde.\n",
                    title: "Dienstbereitstellung"
                },
                marketing: {
                    description: "Diese Dienste verarbeiten persönliche Daten, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten.",
                    title: "Marketing"
                },
                performance: {
                    description: "Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n",
                    title: "Optimierung der Leistung"
                }
            },
            save: "Speichern"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.",
                    title: "Για όλες τις εφαρμογές"
                },
                optOut: {
                    description: "Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί",
                    title: "(μη απαιτούμενο)"
                },
                purpose: "Σκοπός",
                purposes: "Σκοποί",
                required: {
                    description: "Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό",
                    title: "(απαιτούμενο)"
                }
            },
            close: "Κλείσιμο",
            consentModal: {
                description: "Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.",
                privacyPolicy: {
                    name: "Πολιτική Απορρήτου",
                    text: "Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}."
                },
                title: "Πληροφορίες που συλλέγουμε"
            },
            consentNotice: {
                changeDescription: "Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.",
                configure: "",
                configure_en: "configure",
                description: "Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Περισσότερα",
                privacyPolicy: {
                    name: "Πολιτική Απορρήτου"
                }
            },
            decline: "Απόρριπτω",
            ok: "OK",
            poweredBy: "Υποστηρίζεται από το Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Αποθήκευση"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: Cookies.get('country') == 'de' ? "Alle akzeptieren" : "Accept all",
            acceptSelected: Cookies.get('country') == 'de' ? "Auswahl akzeptieren" : "Accept selected",
            app: {
                disableAll: {
                    description: Cookies.get('country') == 'de' ? "Benutzen Sie diese Funktion, um alle Dienste zu aktiveren oder zu deaktivieren." : "Use this switch to enable or disable all services.",
                    title: Cookies.get('country') == 'de' ? "Alle Dienste aktivieren/deaktivieren" : "Enable or disable all services"
                },
                optOut: {
                    description: "This services is loaded by default (but you can opt out)",
                    title: "(opt-out)"
                },
                purpose: "purpose",
                purposes: "purposes",
                required: {
                    description: Cookies.get('country') == 'de' ? "Dieser Dienst ist erforderlich" : "This services is always required",
                    title: Cookies.get('country') == 'de' ? "(erforderlich)" : "(always required)"
                }
            },
            close: "Close",
            consentModal: {
                description: Cookies.get('country') == 'de' ? "Hier können Sie die Dienste, die wir auf dieser Website nutzen, anpassen. Aktivieren oder deaktivieren Sie die Dienste gemäß Ihrer persönlichen Datenschutzrichtlinien." : "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit.",
                privacyPolicy: {
                    name: Cookies.get('country') == 'de' ? "Datenschutzerklärung" : "privacy policy",
                    text: Cookies.get('country') == 'de' ? "Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}." : "To learn more, please read our {privacyPolicy}."
                },
                title: Cookies.get('country') == 'de' ? "Cookie Einstellungen" : "Services we would like to use"
            },
            consentNotice: {
                changeDescription: "There were changes since your last visit, please renew your consent.",
                configure: "configure",
                description: Cookies.get('country') == 'de' ? "Wir verwenden Cookies, um unsere Kursinhalte zu verbessern und die Webseitennutzung zu analysieren. Klicken Sie auf 'Akzeptieren', um zuzustimmen, oder auf 'Cookie Einstellungen', um die Nutzung von Cookies zu personalisieren." : "We use website cookies to enhance course content and analyze usage and traffic. Click 'Accept' to agree, or 'Cookie Settings' to personalize your experience.",
                imprint: {
                    name: "imprint"
                },
                learnMore: Cookies.get('country') == 'de' ? "Cookie Einstellungen" : "Cookie settings",
                privacyPolicy: {
                    name: Cookies.get('country') == 'de' ? "Datenschutzerklärung" : "privacy policy"
                },
                testing: "Testing mode!"
            },
            decline: "I decline",
            ok: Cookies.get('country') == 'de' ? "Akzeptieren" : "Accept",
            poweredBy: "Realized with Klaro!",
            purposeItem: {
                app: "service",
                apps: "services"
            },
            purposes: {
                advertisement: {
                    description: "These services process personal information to show you personalized or interest-based advertisements.",
                    title: "Advertisements"
                },
                functional: {
                    description: Cookies.get('country') == 'de' ? "Diese Dienste sind für die korrekte Funktionalität der Webseite unerlässlich. Sie können diese nicht deaktivieren, da die ordnungsgemäße Funktionsweise der Webseite andernfalls nicht gewährleistet werden kann.\n" : "These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.\n",
                    title: Cookies.get('country') == 'de' ? "Technisch notwendige Cookies" : "Service Provision"
                },
                marketing: {
                    description: Cookies.get('country') == 'de' ? "Diese Dienste verarbeiten persönliche Informationen, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten." : "These services process personal information to show you relevant content about products, services or topics that you might be interested in.",
                    title: Cookies.get('country') == 'de' ? "Marketing Cookies" : "Marketing cookies"
                },
                performance: {
                    description: "These services process personal information to optimize the service that this website offers.\n",
                    title: "Performance Optimization"
                },
                analytical: {
                    description: Cookies.get('country') == 'de' ? "Diese Dienste sammeln Statistiken, die uns helfen, unsere Website noch besser zu machen und unseren Traffic zu analysieren." : "These services gather statistics that help us to make our website even better and analyse our traffic.",
                    title: Cookies.get('country') == 'de' ? "Analytische Cookies" : "Analytical cookies"
                }
            },
            save: "Save"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Aceptar todo",
            acceptSelected: "Aceptar seleccionados",
            app: {
                disableAll: {
                    description: "Utilice este interruptor para activar o desactivar todos los servicios.",
                    title: "Activar o desactivar todos los servicios"
                },
                optOut: {
                    description: "Este servicio está cargado por defecto (pero puede optar por no hacerlo)",
                    title: "(opt-out)"
                },
                purpose: "de",
                purposes: "Fines",
                required: {
                    description: "Este servicio es siempre necesario",
                    title: "(siempre requerido)"
                }
            },
            close: "Cerrar",
            consentModal: {
                description: "Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted está a cargo! Habilite o deshabilite los servicios como considere oportuno.",
                privacyPolicy: {
                    name: "política de privacidad",
                    text: "Para saber más, por favor lea nuestra {privacyPolicy} de privacidad."
                },
                title: "Servicios que nos gustaría utilizar"
            },
            consentNotice: {
                changeDescription: "Hubo cambios desde su última visita, por favor, renueve su consentimiento.",
                configure: "configurar",
                description: "¡Hola! ¿Podríamos habilitar algunos servicios adicionales para {purposes}?",
                imprint: {
                    name: "Imprimir"
                },
                learnMore: "Déjame elegir",
                privacyPolicy: {
                    name: "política de privacidad"
                },
                testing: "¡Modo de prueba!"
            },
            decline: "Me niego",
            ok: "Está bien.",
            poweredBy: "Realizado con Klaro!",
            purposeItem: {
                app: "servicio",
                apps: "servicios"
            },
            purposes: {
                advertisement: {
                    description: "Estos servicios procesan la información personal para mostrarle anuncios personalizados o basados en intereses.",
                    title: "Anuncios"
                },
                functional: {
                    description: "Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos aquí ya que el servicio no funcionaría correctamente de otra manera.\n",
                    title: "Prestación de servicios"
                },
                marketing: {
                    description: "Estos servicios procesan la información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.",
                    title: "Marketing"
                },
                performance: {
                    description: "Estos servicios procesan la información personal para optimizar el servicio que ofrece este sitio web.\n",
                    title: "Optimización del rendimiento"
                }
            },
            save: "Guardar"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Aktivoi kaikki päälle/pois.",
                    title: "Valitse kaikki"
                },
                optOut: {
                    description: "Ladataan oletuksena (mutta voit ottaa sen pois päältä)",
                    title: "(ladataan oletuksena)"
                },
                purpose: "Käyttötarkoitus",
                purposes: "Käyttötarkoitukset",
                required: {
                    description: "Sivusto vaatii tämän aina",
                    title: "(vaaditaan)"
                }
            },
            close: "Sulje",
            consentModal: {
                description: "Voit tarkastella ja muokata sinusta keräämiämme tietoja.",
                privacyPolicy: {
                    name: "tietosuojasivultamme",
                    text: "Voit lukea lisätietoja {privacyPolicy}."
                },
                title: "Keräämämme tiedot"
            },
            consentNotice: {
                changeDescription: "Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.",
                configure: "",
                configure_en: "configure",
                description: "Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Lue lisää",
                privacyPolicy: {
                    name: "tietosuojasivultamme"
                }
            },
            decline: "Hylkää",
            ok: "Hyväksy",
            poweredBy: "Palvelun tarjoaa Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Tallenna"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Accepter tout",
            acceptSelected: "Accepter sélectionné",
            app: {
                disableAll: {
                    description: "Utilisez ce commutateur pour activer ou désactiver tous les services.",
                    title: "Activer ou désactiver tous les services"
                },
                optOut: {
                    description: "Ce service est chargé par défaut (mais vous pouvez le désactiver)",
                    title: "(opt-out)"
                },
                purpose: "Fin",
                purposes: "Fins",
                required: {
                    description: "Ce service est toujours nécessaire",
                    title: "(toujours requis)"
                }
            },
            close: "Fermer",
            consentModal: {
                description: "Vous pouvez ici évaluer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui décidez ! Activez ou désactivez les services comme bon vous semble.",
                privacyPolicy: {
                    name: "politique de confidentialité",
                    text: "Pour en savoir plus, veuillez lire notre {privacyPolicy}."
                },
                title: "Services que nous souhaitons utiliser"
            },
            consentNotice: {
                changeDescription: "Il y a eu des changements depuis votre dernière visite, veuillez renouveler votre consentement.",
                configure: "configurer",
                description: "Bonjour ! Pourrions-nous activer des services supplémentaires pour {purposes}?",
                imprint: {
                    name: "mentions légales"
                },
                learnMore: "Laissez-moi choisir",
                privacyPolicy: {
                    name: "politique de confidentialité"
                },
                testing: "Mode test !"
            },
            decline: "Je refuse",
            ok: "C'est bon.",
            poweredBy: "Réalisé avec Klaro !",
            purposeItem: {
                app: "service",
                apps: "services"
            },
            purposes: {
                advertisement: {
                    description: "Ces services traitent les informations personnelles pour vous présenter des publicités personnalisées ou basées sur des intérêts.",
                    title: "Annonces publicitaires"
                },
                functional: {
                    description: "Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les désactiver ici car le service ne fonctionnerait pas correctement autrement.\n",
                    title: "Prestation de services"
                },
                marketing: {
                    description: "Ces services traitent les informations personnelles afin de vous présenter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous intéresser.",
                    title: "Marketing"
                },
                performance: {
                    description: "Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",
                    title: "Optimisation de la performance"
                }
            },
            save: "Enregistrer"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Használd ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.",
                    title: "Összes app átkapcsolása"
                },
                optOut: {
                    description: "Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)",
                    title: "(leiratkozás)"
                },
                purpose: "Cél",
                purposes: "Célok",
                required: {
                    description: "Ez az alkalmazás mindig kötelező",
                    title: "(mindig kötelező)"
                }
            },
            close: "Elvet",
            consentModal: {
                description: "Itt láthatod és testreszabhatod az rólad gyűjtött információkat.",
                privacyPolicy: {
                    name: "adatvédelmi irányelveinket",
                    text: "További információért kérjük, olvassd el az {privacyPolicy}."
                },
                title: "Információk, amiket gyűjtünk"
            },
            consentNotice: {
                changeDescription: "Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.",
                configure: "",
                configure_en: "configure",
                description: "Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Tudj meg többet",
                privacyPolicy: {
                    name: "adatvédelmi irányelveinket"
                }
            },
            decline: "Mentés",
            ok: "Elfogad",
            poweredBy: "Powered by Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Save"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.",
                    title: "Izmeijeni sve"
                },
                optOut: {
                    description: "Ova aplikacija je učitana automatski (ali je možete onemogućiti)",
                    title: "(onemogućite)"
                },
                purpose: "Svrha",
                purposes: "Svrhe",
                required: {
                    description: "Ova aplikacija je uvijek obavezna",
                    title: "(obavezna)"
                }
            },
            close: "Zatvori",
            consentModal: {
                description: "Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.",
                privacyPolicy: {
                    name: "pravila privatnosti",
                    text: "Za više informacije pročitajte naša {privacyPolicy}."
                },
                title: "Informacije koje prikupljamo"
            },
            consentNotice: {
                changeDescription: "Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.",
                configure: "",
                configure_en: "configure",
                description: "Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Saznajte više",
                privacyPolicy: {
                    name: "pravila privatnosti"
                }
            },
            decline: "Odbij",
            ok: "U redu",
            poweredBy: "Pokreće Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Spremi"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Accettare tutti",
            acceptSelected: "Accettare selezionato",
            app: {
                disableAll: {
                    description: "Utilizzi questo interruttore per attivare o disattivare tutti i servizi.",
                    title: "Attivare o disattivare tutti i servizi"
                },
                optOut: {
                    description: "Questo servizio è caricato di default (ma è possibile scegliere di non usufruirne)",
                    title: "(opt-out)"
                },
                purpose: "Scopo dell",
                purposes: "Finalità",
                required: {
                    description: "Questo servizio è sempre richiesto",
                    title: "(sempre richiesto)"
                }
            },
            close: "Chiudi",
            consentModal: {
                description: "Qui può valutare e personalizzare i servizi che vorremmo utilizzare su questo sito web. È lei il responsabile! Abilitare o disabilitare i servizi come meglio crede.",
                privacyPolicy: {
                    name: "informativa sulla privacy",
                    text: "Per saperne di più, legga la nostra {privacyPolicy}."
                },
                title: "Servizi che desideriamo utilizzare"
            },
            consentNotice: {
                changeDescription: "Ci sono stati dei cambiamenti rispetto alla sua ultima visita, la preghiamo di rinnovare il suo consenso.",
                configure: "configurare",
                description: "Salve, possiamo attivare alcuni servizi aggiuntivi per {purposes}?",
                imprint: {
                    name: "impronta"
                },
                learnMore: "Lasciatemi scegliere",
                privacyPolicy: {
                    name: "informativa sulla privacy"
                },
                testing: "Modalità di test!"
            },
            decline: "Rifiuto",
            ok: "Va bene così",
            poweredBy: "Realizzato con Klaro!",
            purposeItem: {
                app: "servizio",
                apps: "servizi"
            },
            purposes: {
                advertisement: {
                    description: "Questi servizi elaborano le informazioni personali per mostrarle annunci pubblicitari personalizzati o basati su interessi.",
                    title: "Annunci"
                },
                functional: {
                    description: "Questi servizi sono essenziali per il corretto funzionamento di questo sito web. Non può disattivarli qui perché altrimenti il servizio non funzionerebbe correttamente.\n",
                    title: "Fornitura di servizi"
                },
                marketing: {
                    description: "Questi servizi elaborano le informazioni personali per mostrarle contenuti rilevanti su prodotti, servizi o argomenti che potrebbero interessarla.",
                    title: "Marketing"
                },
                performance: {
                    description: "Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito web.\n",
                    title: "Ottimizzazione delle prestazioni"
                }
            },
            save: "Salva"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Accepteer alle",
            acceptSelected: "Geselecteerde",
            app: {
                disableAll: {
                    description: "Gebruik deze schakelaar om alle diensten in of uit te schakelen.",
                    title: "Alle diensten in- of uitschakelen"
                },
                optOut: {
                    description: "Deze diensten worden standaard geladen (maar u kunt zich afmelden)",
                    title: "(opt-out)"
                },
                purpose: "Verwerkingsdoel",
                purposes: "Verwerkingsdoeleinden",
                required: {
                    description: "Deze diensten zijn altijd nodig",
                    title: "(altijd nodig)"
                }
            },
            close: "Sluit",
            consentModal: {
                description: "Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.",
                privacyPolicy: {
                    name: "privacybeleid",
                    text: "Voor meer informatie kunt u ons {privacyPolicy} lezen."
                },
                title: "Diensten die we graag willen gebruiken"
            },
            consentNotice: {
                changeDescription: "Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.",
                configure: "configureren",
                description: "Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}?",
                imprint: {
                    name: "impressum"
                },
                learnMore: "Laat me kiezen",
                privacyPolicy: {
                    name: "privacybeleid"
                },
                testing: "Testmodus!"
            },
            decline: "Ik weiger",
            ok: "Dat is oké",
            poweredBy: "Gerealiseerd met Klaro!",
            purposeItem: {
                app: "service",
                apps: "diensten"
            },
            purposes: {
                advertisement: {
                    description: "Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.",
                    title: "Advertenties"
                },
                functional: {
                    description: "Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n",
                    title: "Dienstverlening"
                },
                marketing: {
                    description: "Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u geïnteresseerd zou kunnen zijn.",
                    title: "Marketing"
                },
                performance: {
                    description: "Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n",
                    title: "Optimalisatie van de prestaties"
                }
            },
            save: "Opslaan"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Godtar alle",
            acceptSelected: "Godtar valgt",
            app: {
                disableAll: {
                    description: "Bruk denne for å skru av/på alle apper.",
                    title: "Bytt alle apper"
                },
                optOut: {
                    description: "Denne appen er lastet som standard (men du kan skru det av)",
                    title: "(opt-out)"
                },
                purpose: "Årsak",
                purposes: "Årsaker",
                required: {
                    description: "Denne applikasjonen er alltid påkrevd",
                    title: "(alltid påkrevd)"
                }
            },
            close: "",
            close_en: "Close",
            consentModal: {
                description: "Her kan du se og velge hvilken informasjon vi samler inn om deg.",
                privacyPolicy: {
                    name: "personvernerklæring",
                    text: "For å lære mer, vennligst les vår {privacyPolicy}."
                },
                title: "Informasjon vi samler inn"
            },
            consentNotice: {
                changeDescription: "Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.",
                configure: "",
                configure_en: "configure",
                description: "Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Lær mer",
                privacyPolicy: {
                    name: "personvernerklæring"
                }
            },
            decline: "Avslå",
            ok: "OK",
            poweredBy: "Laget med Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Opslaan"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.",
                    title: "Comutați între toate aplicațiile"
                },
                optOut: {
                    description: "Această aplicație este încărcată în mod implicit (dar puteți renunța)",
                    title: "(opt-out)"
                },
                purpose: "Scop",
                purposes: "Scopuri",
                required: {
                    description: "Această aplicație este întotdeauna necesară",
                    title: "(întotdeauna necesar)"
                }
            },
            close: "",
            close_en: "Close",
            consentModal: {
                description: "Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.",
                privacyPolicy: {
                    name: "politica privacy",
                    text: "Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}."
                },
                title: "Informațiile pe care le colectăm"
            },
            consentNotice: {
                changeDescription: "Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.",
                configure: "",
                configure_en: "configure",
                description: "Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Află mai multe",
                privacyPolicy: {
                    name: "politica privacy"
                }
            },
            decline: "Renunță",
            ok: "OK",
            poweredBy: "Realizat de Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Salvează"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.",
                    title: "Izmeni sve"
                },
                optOut: {
                    description: "Ova aplikacija je učitana automatski (ali je možete onesposobiti)",
                    title: "(onesposobite)"
                },
                purpose: "Svrha",
                purposes: "Svrhe",
                required: {
                    description: "Ova aplikacija je uvek neophodna",
                    title: "(neophodna)"
                }
            },
            close: "Zatvori",
            consentModal: {
                description: "Ovde možete videti i podesiti informacije koje prikupljamo o Vama.",
                privacyPolicy: {
                    name: "politiku privatnosti",
                    text: "Za više informacije pročitajte našu {privacyPolicy}."
                },
                title: "Informacije koje prikupljamo"
            },
            consentNotice: {
                changeDescription: "Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.",
                configure: "",
                configure_en: "configure",
                description: "Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Saznajte više",
                privacyPolicy: {
                    name: "politiku privatnosti"
                }
            },
            decline: "Odbij",
            ok: "U redu",
            poweredBy: "Pokreće Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Sačuvaj"
        }
    }
    , function(e, t) {
        e.exports = {
            consentModal: {
                title: "Информације које прикупљамо",
                description: "Овде можете видет и подесити информације које прикупљамо о Вама.\n",
                privacyPolicy: {
                    name: "политику приватности",
                    text: "За више информација прочитајте нашу {privacyPolicy}.\n"
                }
            },
            consentNotice: {
                changeDescription: "Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.",
                description: "Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n",
                learnMore: "Сазнајте више",
                privacyPolicy: {
                    name: "политику приватности"
                }
            },
            ok: "У реду",
            save: "Сачувај",
            decline: "Одбиј",
            close: "Затвори",
            app: {
                disableAll: {
                    title: "Измени све",
                    description: "Користите овај прекидач да омогућите/онеспособите све апликације одједном."
                },
                optOut: {
                    title: "(онеспособите)",
                    description: "Ова апликација је учитана аутоматски (али је можете онеспособити)"
                },
                required: {
                    title: "(неопходна)",
                    description: "Ова апликација је увек неопходна."
                },
                purposes: "Сврхе",
                purpose: "Сврха"
            },
            poweredBy: "Покреће Кларо!"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Acceptera alla",
            acceptSelected: "Acceptera markerat",
            app: {
                disableAll: {
                    description: "Använd detta reglage för att aktivera/avaktivera samtliga appar.",
                    title: "Ändra för alla appar"
                },
                optOut: {
                    description: "Den här appen laddas som standardinställning (men du kan avaktivera den)",
                    title: "(Avaktivera)"
                },
                purpose: "Syfte",
                purposes: "Syften",
                required: {
                    description: "Den här applikationen krävs alltid",
                    title: "(Krävs alltid)"
                }
            },
            close: "Stäng",
            consentModal: {
                description: "Här kan du se och anpassa vilken information vi samlar om dig.",
                privacyPolicy: {
                    name: "Integritetspolicy",
                    text: "För att veta mer, läs vår {privacyPolicy}."
                },
                title: "Information som vi samlar"
            },
            consentNotice: {
                changeDescription: "Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.",
                configure: "",
                configure_en: "configure",
                description: "Vi samlar och bearbetar din personliga data i följande syften: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Läs mer",
                privacyPolicy: {
                    name: "Integritetspolicy"
                }
            },
            decline: "Avböj",
            ok: "OK",
            poweredBy: "Körs på Klaro!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Spara"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "",
            acceptAll_en: "Accept all",
            acceptSelected: "",
            acceptSelected_en: "Accept selected",
            app: {
                disableAll: {
                    description: "Toplu açma/kapama için bu düğmeyi kullanabilirsin.",
                    title: "Tüm uygulamaları aç/kapat"
                },
                optOut: {
                    description: "Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)",
                    title: "(isteğe bağlı)"
                },
                purpose: "Amaç",
                purposes: "Amaçlar",
                required: {
                    description: "Bu uygulama her zaman gerekli",
                    title: "(her zaman gerekli)"
                }
            },
            close: "Kapat",
            consentModal: {
                description: "Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.",
                privacyPolicy: {
                    name: "Gizlilik Politikası",
                    text: "Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun."
                },
                title: "Sakladığımız bilgiler"
            },
            consentNotice: {
                changeDescription: "Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.",
                configure: "",
                configure_en: "configure",
                description: "Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Daha fazla bilgi",
                privacyPolicy: {
                    name: "Gizlilik Politikası"
                }
            },
            decline: "Reddet",
            ok: "Tamam",
            poweredBy: "Klaro tarafından geliştirildi!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Kaydet"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Zaakceptować wszystkie",
            acceptSelected: "Zaakceptować wybrany",
            app: {
                disableAll: {
                    description: "Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.",
                    title: "Włączać lub wyłączać wszystkie usługi"
                },
                optOut: {
                    description: "Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)",
                    title: "(opt-out)"
                },
                purpose: "Cel",
                purposes: "Cele",
                required: {
                    description: "Usługi te są zawsze wymagane",
                    title: "(zawsze wymagane)"
                }
            },
            close: "Blisko",
            consentModal: {
                description: "Tutaj mogą Państwo ocenić i dostosować usługi, z których chcielibyśmy skorzystać na tej stronie. Jesteście Państwo odpowiedzialni! Mogą Państwo włączać lub wyłączać usługi według własnego uznania.",
                privacyPolicy: {
                    name: "polityka prywatności",
                    text: "Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}."
                },
                title: "Usługi, z których chcielibyśmy skorzystać"
            },
            consentNotice: {
                changeDescription: "Od czasu ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.",
                configure: "skonfigurować",
                description: "Witam! Czy możemy włączyć dodatkowe usługi dla {purposes}?",
                imprint: {
                    name: "odcisk"
                },
                learnMore: "Pozwól mi wybrać",
                privacyPolicy: {
                    name: "polityka prywatności"
                },
                testing: "Tryb testowy!"
            },
            decline: "Odmawiam",
            ok: "To jest ok.",
            poweredBy: "Zrealizowane z Klaro!",
            purposeItem: {
                app: "usługa",
                apps: "usług"
            },
            purposes: {
                advertisement: {
                    description: "Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach ogłoszeń.",
                    title: "Ogłoszenia"
                },
                functional: {
                    description: "Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie usługa nie działałaby prawidłowo.\n",
                    title: "Świadczenie usług"
                },
                marketing: {
                    description: "Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produktów, usług lub tematów, którymi mogą być Państwo zainteresowani.",
                    title: "Marketing"
                },
                performance: {
                    description: "Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n",
                    title: "Optymalizacja wydajności"
                }
            },
            save: "Z wyjątkiem"
        }
    }
    , function(e, t) {
        e.exports = {
            acceptAll: "Принять всё",
            acceptSelected: "Принять выбранные",
            app: {
                disableAll: {
                    description: "Используйте этот переключатель, чтобы включить/отключить все приложения.",
                    title: "Переключить все приложения"
                },
                optOut: {
                    description: "Это приложение включено по умолчанию (но вы можете отказаться)",
                    title: "(отказаться)"
                },
                purpose: "Намерение",
                purposes: "Намерения",
                required: {
                    description: "Это обязательное приложение",
                    title: "(всегда обязательный)"
                }
            },
            close: "Закрыть",
            consentModal: {
                description: "Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.",
                privacyPolicy: {
                    name: "Соглашение",
                    text: "Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}."
                },
                title: "Информация, которую мы сохраняем"
            },
            consentNotice: {
                changeDescription: "Со времени вашего последнего визита произошли изменения, обновите своё согласие.",
                configure: "",
                configure_en: "configure",
                description: "Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.",
                imprint: {
                    name: "",
                    name_en: "imprint"
                },
                learnMore: "Настроить",
                privacyPolicy: {
                    name: "политика конфиденциальности"
                }
            },
            decline: "Отклонить",
            ok: "Принять",
            poweredBy: "Работает на Кларо!",
            purposeItem: {
                app: "",
                app_en: "application",
                apps: "",
                apps_en: "applications"
            },
            save: "Сохранить"
        }
    }
    , function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t, n) {
        var o = n(2)
          , r = n(65)
          , i = o.WeakMap;
        e.exports = "function" == typeof i && /native code/.test(r(i))
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(9)
          , i = n(6)
          , a = n(43);
        e.exports = o ? Object.defineProperties : function(e, t) {
            i(e);
            for (var n, o = a(t), c = o.length, s = 0; c > s; )
                r.f(e, n = o[s++], t[n]);
            return e
        }
    }
    , function(e, t, n) {
        var o = n(17)
          , r = n(53).f
          , i = {}.toString
          , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return a && "[object Window]" == i.call(e) ? function(e) {
                try {
                    return r(e)
                } catch (e) {
                    return a.slice()
                }
            }(e) : r(o(e))
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(45)
          , r = n(24)
          , i = n(109)
          , a = n(110)
          , c = n(18)
          , s = n(59)
          , l = n(111);
        e.exports = function(e) {
            var t, n, u, p, f, d, m = r(e), v = "function" == typeof this ? this : Array, y = arguments.length, h = y > 1 ? arguments[1] : void 0, g = void 0 !== h, b = l(m), k = 0;
            if (g && (h = o(h, y > 2 ? arguments[2] : void 0, 2)),
            null == b || v == Array && a(b))
                for (n = new v(t = c(m.length)); t > k; k++)
                    d = g ? h(m[k], k) : m[k],
                    s(n, k, d);
            else
                for (f = (p = b.call(m)).next,
                n = new v; !(u = f.call(p)).done; k++)
                    d = g ? i(p, h, [u.value, k], !0) : u.value,
                    s(n, k, d);
            return n.length = k,
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(114).IteratorPrototype
          , r = n(42)
          , i = n(40)
          , a = n(44)
          , c = n(47)
          , s = function() {
            return this
        };
        e.exports = function(e, t, n) {
            var l = t + " Iterator";
            return e.prototype = r(o, {
                next: i(1, n)
            }),
            a(e, l, !1, !0),
            c[l] = s,
            e
        }
    }
    , function(e, t, n) {
        var o = n(4);
        e.exports = function(e) {
            if (!o(e) && null !== e)
                throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    }
    , function(e, t, n) {
        var o = n(1);
        e.exports = !o((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }
        ))
    }
    , function(e, t, n) {
        "use strict";
        var o = n(73)
          , r = n(112);
        e.exports = o ? {}.toString : function() {
            return "[object " + r(this) + "]"
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(36)
          , r = n(4)
          , i = [].slice
          , a = {}
          , c = function(e, t, n) {
            if (!(t in a)) {
                for (var o = [], r = 0; r < t; r++)
                    o[r] = "a[" + r + "]";
                a[t] = Function("C,a", "return new C(" + o.join(",") + ")")
            }
            return a[t](e, n)
        };
        e.exports = Function.bind || function(e) {
            var t = o(this)
              , n = i.call(arguments, 1)
              , a = function() {
                var o = n.concat(i.call(arguments));
                return this instanceof a ? c(t, o.length, o) : t.apply(e, o)
            };
            return r(t.prototype) && (a.prototype = t.prototype),
            a
        }
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(2)
          , i = n(71)
          , a = [].slice
          , c = function(e) {
            return function(t, n) {
                var o = arguments.length > 2
                  , r = o ? a.call(arguments, 2) : void 0;
                return e(o ? function() {
                    ("function" == typeof t ? t : Function(t)).apply(this, r)
                }
                : t, n)
            }
        };
        o({
            global: !0,
            bind: !0,
            forced: /MSIE .\./.test(i)
        }, {
            setTimeout: c(r.setTimeout),
            setInterval: c(r.setInterval)
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(164);
        function r() {}
        function i() {}
        i.resetWarningCache = r,
        e.exports = function() {
            function e(e, t, n, r, i, a) {
                if (a !== o) {
                    var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw c.name = "Invariant Violation",
                    c
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: r
            };
            return n.PropTypes = n,
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
    , function(e, t, n) {
        "use strict";
        var o = n(5)
          , r = n(1)
          , i = n(43)
          , a = n(68)
          , c = n(48)
          , s = n(24)
          , l = n(49)
          , u = Object.assign
          , p = Object.defineProperty;
        e.exports = !u || r((function() {
            if (o && 1 !== u({
                b: 1
            }, u(p({}, "a", {
                enumerable: !0,
                get: function() {
                    p(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b)
                return !0;
            var e = {}
              , t = {}
              , n = Symbol();
            return e[n] = 7,
            "abcdefghijklmnopqrst".split("").forEach((function(e) {
                t[e] = e
            }
            )),
            7 != u({}, e)[n] || "abcdefghijklmnopqrst" != i(u({}, t)).join("")
        }
        )) ? function(e, t) {
            for (var n = s(e), r = arguments.length, u = 1, p = a.f, f = c.f; r > u; )
                for (var d, m = l(arguments[u++]), v = p ? i(m).concat(p(m)) : i(m), y = v.length, h = 0; y > h; )
                    d = v[h++],
                    o && !f.call(m, d) || (n[d] = m[d]);
            return n
        }
        : u
    }
    , function(e, t, n) {
        "use strict";
        var o, r = n(0), i = n(26).f, a = n(18), c = n(92), s = n(23), l = n(93), u = n(32), p = "".endsWith, f = Math.min, d = l("endsWith");
        r({
            target: "String",
            proto: !0,
            forced: !!(u || d || (o = i(String.prototype, "endsWith"),
            !o || o.writable)) && !d
        }, {
            endsWith: function(e) {
                var t = String(s(this));
                c(e);
                var n = arguments.length > 1 ? arguments[1] : void 0
                  , o = a(t.length)
                  , r = void 0 === n ? o : f(a(n), o)
                  , i = String(e);
                return p ? p.call(t, i, r) : t.slice(r - i.length, r) === i
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var o = n(86)
          , r = n(6)
          , i = n(18)
          , a = n(23)
          , c = n(88)
          , s = n(89);
        o("match", 1, (function(e, t, n) {
            return [function(t) {
                var n = a(this)
                  , o = null == t ? void 0 : t[e];
                return void 0 !== o ? o.call(t, n) : new RegExp(t)[e](String(n))
            }
            , function(e) {
                var o = n(t, e, this);
                if (o.done)
                    return o.value;
                var a = r(e)
                  , l = String(this);
                if (!a.global)
                    return s(a, l);
                var u = a.unicode;
                a.lastIndex = 0;
                for (var p, f = [], d = 0; null !== (p = s(a, l)); ) {
                    var m = String(p[0]);
                    f[d] = m,
                    "" === m && (a.lastIndex = c(l, i(a.lastIndex), u)),
                    d++
                }
                return 0 === d ? null : f
            }
            ]
        }
        ))
    }
    , function(e, t, n) {
        var o = n(0)
          , r = n(169).entries;
        o({
            target: "Object",
            stat: !0
        }, {
            entries: function(e) {
                return r(e)
            }
        })
    }
    , function(e, t, n) {
        var o = n(5)
          , r = n(43)
          , i = n(17)
          , a = n(48).f
          , c = function(e) {
            return function(t) {
                for (var n, c = i(t), s = r(c), l = s.length, u = 0, p = []; l > u; )
                    n = s[u++],
                    o && !a.call(c, n) || p.push(e ? [n, c[n]] : c[n]);
                return p
            }
        };
        e.exports = {
            entries: c(!0),
            values: c(!1)
        }
    }
    , function(e, t, n) {
        "use strict";
        var o = n(86)
          , r = n(6)
          , i = n(24)
          , a = n(18)
          , c = n(54)
          , s = n(23)
          , l = n(88)
          , u = n(89)
          , p = Math.max
          , f = Math.min
          , d = Math.floor
          , m = /\$([$&'`]|\d\d?|<[^>]*>)/g
          , v = /\$([$&'`]|\d\d?)/g;
        o("replace", 2, (function(e, t, n, o) {
            var y = o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
              , h = o.REPLACE_KEEPS_$0
              , g = y ? "$" : "$0";
            return [function(n, o) {
                var r = s(this)
                  , i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r, o) : t.call(String(r), n, o)
            }
            , function(e, o) {
                if (!y && h || "string" == typeof o && -1 === o.indexOf(g)) {
                    var i = n(t, e, this, o);
                    if (i.done)
                        return i.value
                }
                var s = r(e)
                  , d = String(this)
                  , m = "function" == typeof o;
                m || (o = String(o));
                var v = s.global;
                if (v) {
                    var k = s.unicode;
                    s.lastIndex = 0
                }
                for (var _ = []; ; ) {
                    var w = u(s, d);
                    if (null === w)
                        break;
                    if (_.push(w),
                    !v)
                        break;
                    "" === String(w[0]) && (s.lastIndex = l(d, a(s.lastIndex), k))
                }
                for (var x, S = "", j = 0, O = 0; O < _.length; O++) {
                    w = _[O];
                    for (var A = String(w[0]), P = p(f(c(w.index), d.length), 0), z = [], E = 1; E < w.length; E++)
                        z.push(void 0 === (x = w[E]) ? x : String(x));
                    var C = w.groups;
                    if (m) {
                        var D = [A].concat(z, P, d);
                        void 0 !== C && D.push(C);
                        var T = String(o.apply(void 0, D))
                    } else
                        T = b(A, d, P, z, C, o);
                    P >= j && (S += d.slice(j, P) + T,
                    j = P + A.length)
                }
                return S + d.slice(j)
            }
            ];
            function b(e, n, o, r, a, c) {
                var s = o + e.length
                  , l = r.length
                  , u = v;
                return void 0 !== a && (a = i(a),
                u = m),
                t.call(c, u, (function(t, i) {
                    var c;
                    switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, o);
                    case "'":
                        return n.slice(s);
                    case "<":
                        c = a[i.slice(1, -1)];
                        break;
                    default:
                        var u = +i;
                        if (0 === u)
                            return t;
                        if (u > l) {
                            var p = d(u / 10);
                            return 0 === p ? t : p <= l ? void 0 === r[p - 1] ? i.charAt(1) : r[p - 1] + i.charAt(1) : t
                        }
                        c = r[u - 1]
                    }
                    return void 0 === c ? "" : c
                }
                ))
            }
        }
        ))
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(100).includes
          , i = n(113);
        o({
            target: "Array",
            proto: !0,
            forced: !n(46)("indexOf", {
                ACCESSORS: !0,
                1: 0
            })
        }, {
            includes: function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        i("includes")
    }
    , function(e, t, n) {
        "use strict";
        var o = n(0)
          , r = n(92)
          , i = n(23);
        o({
            target: "String",
            proto: !0,
            forced: !n(93)("includes")
        }, {
            includes: function(e) {
                return !!~String(i(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var o, r = n(0), i = n(26).f, a = n(18), c = n(92), s = n(23), l = n(93), u = n(32), p = "".startsWith, f = Math.min, d = l("startsWith");
        r({
            target: "String",
            proto: !0,
            forced: !!(u || d || (o = i(String.prototype, "startsWith"),
            !o || o.writable)) && !d
        }, {
            startsWith: function(e) {
                var t = String(s(this));
                c(e);
                var n = a(f(arguments.length > 1 ? arguments[1] : void 0, t.length))
                  , o = String(e);
                return p ? p.call(t, o, n) : t.slice(n, n + o.length) === o
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var o, r, i, a, c = n(0), s = n(32), l = n(2), u = n(33), p = n(175), f = n(21), d = n(120), m = n(44), v = n(81), y = n(4), h = n(36), g = n(80), b = n(27), k = n(65), _ = n(79), w = n(74), x = n(123), S = n(126).set, j = n(176), O = n(177), A = n(178), P = n(128), z = n(179), E = n(31), C = n(55), D = n(3), T = n(70), R = D("species"), M = "Promise", I = E.get, N = E.set, q = E.getterFor(M), U = p, L = l.TypeError, F = l.document, H = l.process, B = u("fetch"), W = P.f, K = W, V = "process" == b(H), $ = !!(F && F.createEvent && l.dispatchEvent), G = C(M, (function() {
            if (!(k(U) !== String(U))) {
                if (66 === T)
                    return !0;
                if (!V && "function" != typeof PromiseRejectionEvent)
                    return !0
            }
            if (s && !U.prototype.finally)
                return !0;
            if (T >= 51 && /native code/.test(U))
                return !1;
            var e = U.resolve(1)
              , t = function(e) {
                e((function() {}
                ), (function() {}
                ))
            };
            return (e.constructor = {})[R] = t,
            !(e.then((function() {}
            ))instanceof t)
        }
        )), Z = G || !w((function(e) {
            U.all(e).catch((function() {}
            ))
        }
        )), Y = function(e) {
            var t;
            return !(!y(e) || "function" != typeof (t = e.then)) && t
        }, X = function(e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var o = t.reactions;
                j((function() {
                    for (var r = t.value, i = 1 == t.state, a = 0; o.length > a; ) {
                        var c, s, l, u = o[a++], p = i ? u.ok : u.fail, f = u.resolve, d = u.reject, m = u.domain;
                        try {
                            p ? (i || (2 === t.rejection && te(e, t),
                            t.rejection = 1),
                            !0 === p ? c = r : (m && m.enter(),
                            c = p(r),
                            m && (m.exit(),
                            l = !0)),
                            c === u.promise ? d(L("Promise-chain cycle")) : (s = Y(c)) ? s.call(c, f, d) : f(c)) : d(r)
                        } catch (e) {
                            m && !l && m.exit(),
                            d(e)
                        }
                    }
                    t.reactions = [],
                    t.notified = !1,
                    n && !t.rejection && J(e, t)
                }
                ))
            }
        }, Q = function(e, t, n) {
            var o, r;
            $ ? ((o = F.createEvent("Event")).promise = t,
            o.reason = n,
            o.initEvent(e, !1, !0),
            l.dispatchEvent(o)) : o = {
                promise: t,
                reason: n
            },
            (r = l["on" + e]) ? r(o) : "unhandledrejection" === e && A("Unhandled promise rejection", n)
        }, J = function(e, t) {
            S.call(l, (function() {
                var n, o = t.value;
                if (ee(t) && (n = z((function() {
                    V ? H.emit("unhandledRejection", o, e) : Q("unhandledrejection", e, o)
                }
                )),
                t.rejection = V || ee(t) ? 2 : 1,
                n.error))
                    throw n.value
            }
            ))
        }, ee = function(e) {
            return 1 !== e.rejection && !e.parent
        }, te = function(e, t) {
            S.call(l, (function() {
                V ? H.emit("rejectionHandled", e) : Q("rejectionhandled", e, t.value)
            }
            ))
        }, ne = function(e, t, n, o) {
            return function(r) {
                e(t, n, r, o)
            }
        }, oe = function(e, t, n, o) {
            t.done || (t.done = !0,
            o && (t = o),
            t.value = n,
            t.state = 2,
            X(e, t, !0))
        }, re = function(e, t, n, o) {
            if (!t.done) {
                t.done = !0,
                o && (t = o);
                try {
                    if (e === n)
                        throw L("Promise can't be resolved itself");
                    var r = Y(n);
                    r ? j((function() {
                        var o = {
                            done: !1
                        };
                        try {
                            r.call(n, ne(re, e, o, t), ne(oe, e, o, t))
                        } catch (n) {
                            oe(e, o, n, t)
                        }
                    }
                    )) : (t.value = n,
                    t.state = 1,
                    X(e, t, !1))
                } catch (n) {
                    oe(e, {
                        done: !1
                    }, n, t)
                }
            }
        };
        G && (U = function(e) {
            g(this, U, M),
            h(e),
            o.call(this);
            var t = I(this);
            try {
                e(ne(re, this, t), ne(oe, this, t))
            } catch (e) {
                oe(this, t, e)
            }
        }
        ,
        (o = function(e) {
            N(this, {
                type: M,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }
        ).prototype = d(U.prototype, {
            then: function(e, t) {
                var n = q(this)
                  , o = W(x(this, U));
                return o.ok = "function" != typeof e || e,
                o.fail = "function" == typeof t && t,
                o.domain = V ? H.domain : void 0,
                n.parent = !0,
                n.reactions.push(o),
                0 != n.state && X(this, n, !1),
                o.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }),
        r = function() {
            var e = new o
              , t = I(e);
            this.promise = e,
            this.resolve = ne(re, e, t),
            this.reject = ne(oe, e, t)
        }
        ,
        P.f = W = function(e) {
            return e === U || e === i ? new r(e) : K(e)
        }
        ,
        s || "function" != typeof p || (a = p.prototype.then,
        f(p.prototype, "then", (function(e, t) {
            var n = this;
            return new U((function(e, t) {
                a.call(n, e, t)
            }
            )).then(e, t)
        }
        ), {
            unsafe: !0
        }),
        "function" == typeof B && c({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(e) {
                return O(U, B.apply(l, arguments))
            }
        }))),
        c({
            global: !0,
            wrap: !0,
            forced: G
        }, {
            Promise: U
        }),
        m(U, M, !1, !0),
        v(M),
        i = u(M),
        c({
            target: M,
            stat: !0,
            forced: G
        }, {
            reject: function(e) {
                var t = W(this);
                return t.reject.call(void 0, e),
                t.promise
            }
        }),
        c({
            target: M,
            stat: !0,
            forced: s || G
        }, {
            resolve: function(e) {
                return O(s && this === i ? U : this, e)
            }
        }),
        c({
            target: M,
            stat: !0,
            forced: Z
        }, {
            all: function(e) {
                var t = this
                  , n = W(t)
                  , o = n.resolve
                  , r = n.reject
                  , i = z((function() {
                    var n = h(t.resolve)
                      , i = []
                      , a = 0
                      , c = 1;
                    _(e, (function(e) {
                        var s = a++
                          , l = !1;
                        i.push(void 0),
                        c++,
                        n.call(t, e).then((function(e) {
                            l || (l = !0,
                            i[s] = e,
                            --c || o(i))
                        }
                        ), r)
                    }
                    )),
                    --c || o(i)
                }
                ));
                return i.error && r(i.value),
                n.promise
            },
            race: function(e) {
                var t = this
                  , n = W(t)
                  , o = n.reject
                  , r = z((function() {
                    var r = h(t.resolve);
                    _(e, (function(e) {
                        r.call(t, e).then(n.resolve, o)
                    }
                    ))
                }
                ));
                return r.error && o(r.value),
                n.promise
            }
        })
    }
    , function(e, t, n) {
        var o = n(2);
        e.exports = o.Promise
    }
    , function(e, t, n) {
        var o, r, i, a, c, s, l, u, p = n(2), f = n(26).f, d = n(27), m = n(126).set, v = n(127), y = p.MutationObserver || p.WebKitMutationObserver, h = p.process, g = p.Promise, b = "process" == d(h), k = f(p, "queueMicrotask"), _ = k && k.value;
        _ || (o = function() {
            var e, t;
            for (b && (e = h.domain) && e.exit(); r; ) {
                t = r.fn,
                r = r.next;
                try {
                    t()
                } catch (e) {
                    throw r ? a() : i = void 0,
                    e
                }
            }
            i = void 0,
            e && e.enter()
        }
        ,
        b ? a = function() {
            h.nextTick(o)
        }
        : y && !v ? (c = !0,
        s = document.createTextNode(""),
        new y(o).observe(s, {
            characterData: !0
        }),
        a = function() {
            s.data = c = !c
        }
        ) : g && g.resolve ? (l = g.resolve(void 0),
        u = l.then,
        a = function() {
            u.call(l, o)
        }
        ) : a = function() {
            m.call(p, o)
        }
        ),
        e.exports = _ || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            i && (i.next = t),
            r || (r = t,
            a()),
            i = t
        }
    }
    , function(e, t, n) {
        var o = n(6)
          , r = n(4)
          , i = n(128);
        e.exports = function(e, t) {
            if (o(e),
            r(t) && t.constructor === e)
                return t;
            var n = i.f(e);
            return (0,
            n.resolve)(t),
            n.promise
        }
    }
    , function(e, t, n) {
        var o = n(2);
        e.exports = function(e, t) {
            var n = o.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        }
    }
    , function(e, t, n) {
        var o = n(181)
          , r = n(182);
        "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]);
        var i = {
            insert: "head",
            singleton: !1
        };
        o(r, i);
        e.exports = r.locals || {}
    }
    , function(e, t, n) {
        "use strict";
        var o, r = function() {
            return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)),
            o
        }, i = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                    e[t] = n
                }
                return e[t]
            }
        }(), a = [];
        function c(e) {
            for (var t = -1, n = 0; n < a.length; n++)
                if (a[n].identifier === e) {
                    t = n;
                    break
                }
            return t
        }
        function s(e, t) {
            for (var n = {}, o = [], r = 0; r < e.length; r++) {
                var i = e[r]
                  , s = t.base ? i[0] + t.base : i[0]
                  , l = n[s] || 0
                  , u = "".concat(s, " ").concat(l);
                n[s] = l + 1;
                var p = c(u)
                  , f = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                -1 !== p ? (a[p].references++,
                a[p].updater(f)) : a.push({
                    identifier: u,
                    updater: y(f, t),
                    references: 1
                }),
                o.push(u)
            }
            return o
        }
        function l(e) {
            var t = document.createElement("style")
              , o = e.attributes || {};
            if (void 0 === o.nonce) {
                var r = n.nc;
                r && (o.nonce = r)
            }
            if (Object.keys(o).forEach((function(e) {
                t.setAttribute(e, o[e])
            }
            )),
            "function" == typeof e.insert)
                e.insert(t);
            else {
                var a = i(e.insert || "head");
                if (!a)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t)
            }
            return t
        }
        var u, p = (u = [],
        function(e, t) {
            return u[e] = t,
            u.filter(Boolean).join("\n")
        }
        );
        function f(e, t, n, o) {
            var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
            if (e.styleSheet)
                e.styleSheet.cssText = p(t, r);
            else {
                var i = document.createTextNode(r)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
        function d(e, t, n) {
            var o = n.css
              , r = n.media
              , i = n.sourceMap;
            if (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
            i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
            e.styleSheet)
                e.styleSheet.cssText = o;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o))
            }
        }
        var m = null
          , v = 0;
        function y(e, t) {
            var n, o, r;
            if (t.singleton) {
                var i = v++;
                n = m || (m = l(t)),
                o = f.bind(null, n, i, !1),
                r = f.bind(null, n, i, !0)
            } else
                n = l(t),
                o = d.bind(null, n, t),
                r = function() {
                    !function(e) {
                        if (null === e.parentNode)
                            return !1;
                        e.parentNode.removeChild(e)
                    }(n)
                }
                ;
            return o(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    o(e = t)
                } else
                    r()
            }
        }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
            var n = s(e = e || [], t);
            return function(e) {
                if (e = e || [],
                "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var o = 0; o < n.length; o++) {
                        var r = c(n[o]);
                        a[r].references--
                    }
                    for (var i = s(e, t), l = 0; l < n.length; l++) {
                        var u = c(n[l]);
                        0 === a[u].references && (a[u].updater(),
                        a.splice(u, 1))
                    }
                    n = i
                }
            }
        }
    }
    , function(e, t, n) {
        (t = n(183)(!1)).push([e.i, ".klaro .cookie-modal,.klaro .cookie-notice{font-size:14px}.klaro .cookie-modal .cm-switch-container,.klaro .cookie-notice .cm-switch-container{display:block;position:relative;padding:10px;padding-left:66px;line-height:20px;vertical-align:middle;min-height:40px;border-bottom:1px solid #ccc}.klaro .cookie-modal .cm-switch-container:last-child,.klaro .cookie-notice .cm-switch-container:last-child{border-bottom:0}.klaro .cookie-modal .cm-switch-container:first-child,.klaro .cookie-notice .cm-switch-container:first-child{margin-top:0}.klaro .cookie-modal .cm-switch-container p,.klaro .cookie-notice .cm-switch-container p{margin-top:0}.klaro .cookie-modal .cm-switch,.klaro .cookie-notice .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider{background-color:#2d87f7}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider{opacity:0.6;background-color:#2d87f7}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider{opacity:0.8;background-color:#2d87f7}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.required:checked+.cm-list-label .slider{opacity:0.8;background-color:#2d87f7;cursor:not-allowed}.klaro .cookie-modal .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal .cm-list-input,.klaro .cookie-notice .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro .cookie-modal .cm-list-title,.klaro .cookie-notice .cm-list-title{font-size:14px;font-weight:600}.klaro .cookie-modal .cm-list-description,.klaro .cookie-notice .cm-list-description{font-size:14px;padding-top:4px;color:#666}.klaro .cookie-modal .cm-list-label .cm-switch,.klaro .cookie-notice .cm-list-label .cm-switch{position:absolute;left:0}.klaro .cookie-modal .cm-list-label .slider,.klaro .cookie-notice .cm-list-label .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:0.4s;width:50px;display:inline-block}.klaro .cookie-modal .cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label .slider::before{position:absolute;content:'';height:20px;width:20px;left:5px;bottom:5px;background-color:#fff;transition:0.4s}.klaro .cookie-modal .cm-list-label .slider.round,.klaro .cookie-notice .cm-list-label .slider.round{border-radius:30px}.klaro .cookie-modal .cm-list-label .slider.round::before,.klaro .cookie-notice .cm-list-label .slider.round::before{border-radius:50%}.klaro .cookie-modal .cm-list-label input:focus+.slider,.klaro .cookie-notice .cm-list-label input:focus+.slider{box-shadow:0 0 1px #48dfb2}.klaro .cookie-modal .cm-list-label input:checked+.slider::before,.klaro .cookie-notice .cm-list-label input:checked+.slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .cookie-modal .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,0.2),5px 5px 10px 0 rgba(125,125,125,0.19)}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .cookie-modal .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal a,.klaro .cookie-notice a{color:#2d87f7;text-decoration:none}.klaro .cookie-modal p,.klaro .cookie-modal strong,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .cookie-notice p,.klaro .cookie-notice strong,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{color:#eee}.klaro .cookie-modal p,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .cookie-notice p,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{display:block;text-align:left;margin:0;padding:0;margin-top:0.7em}.klaro .cookie-modal .cm-link,.klaro .cookie-notice .cm-link{margin-right:0.5em;vertical-align:middle}.klaro .cookie-modal .cm-btn,.klaro .cookie-notice .cm-btn{background:#555;color:#eee;border-radius:6px;padding:6px 10px;margin-right:.5em;border:0;padding:0.4em;font-size:1em}.klaro .cookie-modal .cm-btn:disabled,.klaro .cookie-notice .cm-btn:disabled{opacity:0.5}.klaro .cookie-modal .cm-btn.cm-btn-close,.klaro .cookie-notice .cm-btn.cm-btn-close{background:#aaa;color:#000}.klaro .cookie-modal .cm-btn.cm-btn-success,.klaro .cookie-notice .cm-btn.cm-btn-success{background:#2d87f7}.klaro .cookie-modal .cm-btn.cm-btn-info,.klaro .cookie-notice .cm-btn.cm-btn-info{background:#2581c4}.klaro .cookie-modal{width:100%;height:100%;position:fixed;overflow:hidden;left:0;top:0;z-index:1000}.klaro .cookie-modal.cm-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;z-index:0}.klaro .cookie-modal.cm-embedded .cm-modal.cm-klaro{position:relative;-ms-transform:none;transform:none}.klaro .cookie-modal .cm-bg{background:rgba(0,0,0,0.5);height:100%;width:100%;position:fixed;top:0;left:0}.klaro .cookie-modal .cm-modal.cm-klaro{z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;overflow:auto;background:#333;color:#eee}@media (min-width: 660px){.klaro .cookie-modal .cm-modal.cm-klaro{border-radius:4px;position:relative;margin:0 auto;max-width:640px;height:auto;width:auto}}.klaro .cookie-modal .cm-modal .hide{border-style:none;background:none;position:absolute;top:20px;right:20px;z-index:1}.klaro .cookie-modal .cm-modal .hide svg{stroke:#eee}.klaro .cookie-modal .cm-modal .cm-footer{padding:1em;border-top:1px solid #555}.klaro .cookie-modal .cm-modal .cm-footer-buttons{display:flex;flex-flow:row;justify-content:space-between}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by{font-size:0.8em;padding-top:4px;text-align:right;padding-right:8px}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a{color:#999}.klaro .cookie-modal .cm-modal .cm-header{padding:1em;padding-right:24px;border-bottom:1px solid #555}.klaro .cookie-modal .cm-modal .cm-header h1{margin:0;font-size:2em;display:block}.klaro .cookie-modal .cm-modal .cm-header h1.title{padding-right:20px}.klaro .cookie-modal .cm-modal .cm-body{padding:1em}.klaro .cookie-modal .cm-modal .cm-body ul{display:block}.klaro .cookie-modal .cm-modal .cm-body span{display:inline-block;width:auto}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes{padding:0;margin:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose .cm-apps .cm-caret,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-apps .cm-caret{color:#888}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose .cm-apps .cm-content,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-apps .cm-content{margin-left:-40px;display:none}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose .cm-apps .cm-content.expanded,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-apps .cm-content.expanded{margin-top:10px;display:block}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose{position:relative;line-height:20px;vertical-align:middle;padding-left:60px;min-height:40px}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose:first-child{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p.purposes{font-size:0.8em;color:#999}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose.cm-toggle-all{border-top:1px solid #555;padding-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-list-title{font-weight:600}.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-app span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-required{padding-left:0.2em;font-size:0.8em;color:#999}.klaro .cookie-notice:not(.cookie-modal-notice){background:#333;z-index:999;position:fixed;width:100%;bottom:0;right:0}@media (min-width: 1024px){.klaro .cookie-notice:not(.cookie-modal-notice){box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);border-radius:4px;position:fixed;bottom:20px;right:20px;max-width:400px}}@media (max-width: 1023px){.klaro .cookie-notice:not(.cookie-modal-notice){border-style:none;border-radius:0}}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;bottom:inherit;z-index:0}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded .cn-body{padding-top:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body{margin-bottom:0;margin-right:0;bottom:0;padding:1em;padding-top:0}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p{margin-bottom:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p.cn-changes{text-decoration:underline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-learn-more{display:inline-block;flex-grow:1}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{display:inline-block;margin-top:-0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{width:100%}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{margin-top:0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{width:calc(50% - .5em)}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok{margin-top:-0.5em;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:right;align-items:baseline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok a,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok div{margin-top:0.5em}.klaro .cookie-modal-notice{z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;overflow:auto;background:#333;color:#eee;padding:1em;padding-top:0.2em}@media (min-width: 400px){.klaro .cookie-modal-notice{border-radius:4px;position:relative;margin:0 auto;max-width:400px;height:auto;width:auto}}.klaro .cookie-modal-notice .cn-ok{display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-top:1em}.klaro .cookie-notice-hidden{display:none !important}\n", ""]),
        e.exports = t
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var n = function(e, t) {
                        var n = e[1] || ""
                          , o = e[3];
                        if (!o)
                            return n;
                        if (t && "function" == typeof btoa) {
                            var r = (a = o,
                            c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                            s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),
                            "/*# ".concat(s, " */"))
                              , i = o.sources.map((function(e) {
                                return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */")
                            }
                            ));
                            return [n].concat(i).concat([r]).join("\n")
                        }
                        var a, c, s;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                }
                )).join("")
            }
            ,
            t.i = function(e, n, o) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var r = {};
                if (o)
                    for (var i = 0; i < this.length; i++) {
                        var a = this[i][0];
                        null != a && (r[a] = !0)
                    }
                for (var c = 0; c < e.length; c++) {
                    var s = [].concat(e[c]);
                    o && r[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n),
                    t.push(s))
                }
            }
            ,
            t
        }
    }
    , function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "updateConfig", (function() {
            return dt
        }
        )),
        n.d(t, "getElementID", (function() {
            return An
        }
        )),
        n.d(t, "getElement", (function() {
            return Pn
        }
        )),
        n.d(t, "addEventListener", (function() {
            return zn
        }
        )),
        n.d(t, "getConfigTranslations", (function() {
            return Cn
        }
        )),
        n.d(t, "render", (function() {
            return Tn
        }
        )),
        n.d(t, "setup", (function() {
            return Mn
        }
        )),
        n.d(t, "show", (function() {
            return In
        }
        )),
        n.d(t, "resetManagers", (function() {
            return qn
        }
        )),
        n.d(t, "getManager", (function() {
            return Un
        }
        )),
        n.d(t, "version", (function() {
            return Ln
        }
        )),
        n.d(t, "language", (function() {
            return tt
        }
        )),
        n.d(t, "defaultConfig", (function() {
            return yn
        }
        )),
        n.d(t, "defaultTranslations", (function() {
            return Sn
        }
        ));
        n(7),
        n(12),
        n(13),
        n(58),
        n(37),
        n(72),
        n(34),
        n(10),
        n(22),
        n(25),
        n(19),
        n(78),
        n(82),
        n(83),
        n(35),
        n(11),
        n(38),
        n(14),
        n(15),
        n(85),
        n(90),
        n(16);
        var o, r, i, a, c, s = {}, l = [], u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function p(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function f(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function d(e, t, n) {
            var o, r = arguments, i = {};
            for (o in t)
                "key" !== o && "ref" !== o && (i[o] = t[o]);
            if (arguments.length > 3)
                for (n = [n],
                o = 3; o < arguments.length; o++)
                    n.push(r[o]);
            if (null != n && (i.children = n),
            "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps)
                    void 0 === i[o] && (i[o] = e.defaultProps[o]);
            return m(e, i, t && t.key, t && t.ref, null)
        }
        function m(e, t, n, r, i) {
            var a = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: i
            };
            return null == i && (a.__v = a),
            o.vnode && o.vnode(a),
            a
        }
        function v(e) {
            return e.children
        }
        function y(e, t) {
            this.props = e,
            this.context = t
        }
        function h(e, t) {
            if (null == t)
                return e.__ ? h(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e)
                    return n.__e;
            return "function" == typeof e.type ? h(e) : null
        }
        function g(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null,
                t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                return g(e)
            }
        }
        function b(e) {
            (!e.__d && (e.__d = !0) && r.push(e) && !k.__r++ || a !== o.debounceRendering) && ((a = o.debounceRendering) || i)(k)
        }
        function k() {
            for (var e; k.__r = r.length; )
                e = r.sort((function(e, t) {
                    return e.__v.__b - t.__v.__b
                }
                )),
                r = [],
                e.some((function(e) {
                    var t, n, o, r, i, a, c;
                    e.__d && (a = (i = (t = e).__v).__e,
                    (c = t.__P) && (n = [],
                    (o = p({}, i)).__v = o,
                    r = P(c, i, o, t.__n, void 0 !== c.ownerSVGElement, null, n, null == a ? h(i) : a),
                    z(n, i),
                    r != a && g(i)))
                }
                ))
        }
        function _(e, t, n, o, r, i, a, c, u, p) {
            var d, y, g, b, k, _, w, S = o && o.__k || l, j = S.length;
            for (u == s && (u = null != a ? a[0] : j ? h(o, 0) : null),
            n.__k = [],
            d = 0; d < t.length; d++)
                if (null != (b = n.__k[d] = null == (b = t[d]) || "boolean" == typeof b ? null : "string" == typeof b || "number" == typeof b ? m(null, b, null, null, b) : Array.isArray(b) ? m(v, {
                    children: b
                }, null, null, null) : null != b.__e || null != b.__c ? m(b.type, b.props, b.key, null, b.__v) : b)) {
                    if (b.__ = n,
                    b.__b = n.__b + 1,
                    null === (g = S[d]) || g && b.key == g.key && b.type === g.type)
                        S[d] = void 0;
                    else
                        for (y = 0; y < j; y++) {
                            if ((g = S[y]) && b.key == g.key && b.type === g.type) {
                                S[y] = void 0;
                                break
                            }
                            g = null
                        }
                    k = P(e, b, g = g || s, r, i, a, c, u, p),
                    (y = b.ref) && g.ref != y && (w || (w = []),
                    g.ref && w.push(g.ref, null, b),
                    w.push(y, b.__c || k, b)),
                    null != k ? (null == _ && (_ = k),
                    u = x(e, b, g, S, a, k, u),
                    p || "option" != n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && g.__e == u && u.parentNode != e && (u = h(g))
                }
            if (n.__e = _,
            null != a && "function" != typeof n.type)
                for (d = a.length; d--; )
                    null != a[d] && f(a[d]);
            for (d = j; d--; )
                null != S[d] && D(S[d], S[d]);
            if (w)
                for (d = 0; d < w.length; d++)
                    C(w[d], w[++d], w[++d])
        }
        function w(e) {
            return null == e || "boolean" == typeof e ? [] : Array.isArray(e) ? l.concat.apply([], e.map(w)) : [e]
        }
        function x(e, t, n, o, r, i, a) {
            var c, s, l;
            if (void 0 !== t.__d)
                c = t.__d,
                t.__d = void 0;
            else if (r == n || i != a || null == i.parentNode)
                e: if (null == a || a.parentNode !== e)
                    e.appendChild(i),
                    c = null;
                else {
                    for (s = a,
                    l = 0; (s = s.nextSibling) && l < o.length; l += 2)
                        if (s == i)
                            break e;
                    e.insertBefore(i, a),
                    c = a
                }
            return void 0 !== c ? c : i.nextSibling
        }
        function S(e, t, n) {
            "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === u.test(t) ? n + "px" : null == n ? "" : n
        }
        function j(e, t, n, o, r) {
            var i, a, c, s, l;
            if (r ? "className" === t && (t = "class") : "class" === t && (t = "className"),
            "style" === t)
                if (i = e.style,
                "string" == typeof n)
                    i.cssText = n;
                else {
                    if ("string" == typeof o && (i.cssText = "",
                    o = null),
                    o)
                        for (s in o)
                            n && s in n || S(i, s, "");
                    if (n)
                        for (l in n)
                            o && n[l] === o[l] || S(i, l, n[l])
                }
            else
                "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")),
                c = t.toLowerCase(),
                t = (c in e ? c : t).slice(2),
                n ? (o || e.addEventListener(t, O, a),
                (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, O, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && !r && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
        }
        function O(e) {
            this.l[e.type](o.event ? o.event(e) : e)
        }
        function A(e, t, n) {
            var o, r;
            for (o = 0; o < e.__k.length; o++)
                (r = e.__k[o]) && (r.__ = e,
                r.__e && ("function" == typeof r.type && r.__k.length > 1 && A(r, t, n),
                t = x(n, r, r, e.__k, null, r.__e, t),
                "function" == typeof e.type && (e.__d = t)))
        }
        function P(e, t, n, r, i, a, c, s, l) {
            var u, f, d, m, h, g, b, k, w, x, S, j = t.type;
            if (void 0 !== t.constructor)
                return null;
            (u = o.__b) && u(t);
            try {
                e: if ("function" == typeof j) {
                    if (k = t.props,
                    w = (u = j.contextType) && r[u.__c],
                    x = u ? w ? w.props.value : u.__ : r,
                    n.__c ? b = (f = t.__c = n.__c).__ = f.__E : ("prototype"in j && j.prototype.render ? t.__c = f = new j(k,x) : (t.__c = f = new y(k,x),
                    f.constructor = j,
                    f.render = T),
                    w && w.sub(f),
                    f.props = k,
                    f.state || (f.state = {}),
                    f.context = x,
                    f.__n = r,
                    d = f.__d = !0,
                    f.__h = []),
                    null == f.__s && (f.__s = f.state),
                    null != j.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)),
                    p(f.__s, j.getDerivedStateFromProps(k, f.__s))),
                    m = f.props,
                    h = f.state,
                    d)
                        null == j.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
                        null != f.componentDidMount && f.__h.push(f.componentDidMount);
                    else {
                        if (null == j.getDerivedStateFromProps && k !== m && null != f.componentWillReceiveProps && f.componentWillReceiveProps(k, x),
                        !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(k, f.__s, x) || t.__v === n.__v) {
                            f.props = k,
                            f.state = f.__s,
                            t.__v !== n.__v && (f.__d = !1),
                            f.__v = t,
                            t.__e = n.__e,
                            t.__k = n.__k,
                            f.__h.length && c.push(f),
                            A(t, s, e);
                            break e
                        }
                        null != f.componentWillUpdate && f.componentWillUpdate(k, f.__s, x),
                        null != f.componentDidUpdate && f.__h.push((function() {
                            f.componentDidUpdate(m, h, g)
                        }
                        ))
                    }
                    f.context = x,
                    f.props = k,
                    f.state = f.__s,
                    (u = o.__r) && u(t),
                    f.__d = !1,
                    f.__v = t,
                    f.__P = e,
                    u = f.render(f.props, f.state, f.context),
                    f.state = f.__s,
                    null != f.getChildContext && (r = p(p({}, r), f.getChildContext())),
                    d || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(m, h)),
                    S = null != u && u.type == v && null == u.key ? u.props.children : u,
                    _(e, Array.isArray(S) ? S : [S], t, n, r, i, a, c, s, l),
                    f.base = t.__e,
                    f.__h.length && c.push(f),
                    b && (f.__E = f.__ = null),
                    f.__e = !1
                } else
                    null == a && t.__v === n.__v ? (t.__k = n.__k,
                    t.__e = n.__e) : t.__e = E(n.__e, t, n, r, i, a, c, l);
                (u = o.diffed) && u(t)
            } catch (e) {
                t.__v = null,
                o.__e(e, t, n)
            }
            return t.__e
        }
        function z(e, t) {
            o.__c && o.__c(t, e),
            e.some((function(t) {
                try {
                    e = t.__h,
                    t.__h = [],
                    e.some((function(e) {
                        e.call(t)
                    }
                    ))
                } catch (e) {
                    o.__e(e, t.__v)
                }
            }
            ))
        }
        function E(e, t, n, o, r, i, a, c) {
            var u, p, f, d, m, v = n.props, y = t.props;
            if (r = "svg" === t.type || r,
            null != i)
                for (u = 0; u < i.length; u++)
                    if (null != (p = i[u]) && ((null === t.type ? 3 === p.nodeType : p.localName === t.type) || e == p)) {
                        e = p,
                        i[u] = null;
                        break
                    }
            if (null == e) {
                if (null === t.type)
                    return document.createTextNode(y);
                e = r ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, y.is && {
                    is: y.is
                }),
                i = null,
                c = !1
            }
            if (null === t.type)
                v !== y && e.data !== y && (e.data = y);
            else {
                if (null != i && (i = l.slice.call(e.childNodes)),
                f = (v = n.props || s).dangerouslySetInnerHTML,
                d = y.dangerouslySetInnerHTML,
                !c) {
                    if (null != i)
                        for (v = {},
                        m = 0; m < e.attributes.length; m++)
                            v[e.attributes[m].name] = e.attributes[m].value;
                    (d || f) && (d && f && d.__html == f.__html || (e.innerHTML = d && d.__html || ""))
                }
                (function(e, t, n, o, r) {
                    var i;
                    for (i in n)
                        "children" === i || "key" === i || i in t || j(e, i, null, n[i], o);
                    for (i in t)
                        r && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || j(e, i, t[i], n[i], o)
                }
                )(e, y, v, r, c),
                d ? t.__k = [] : (u = t.props.children,
                _(e, Array.isArray(u) ? u : [u], t, n, o, "foreignObject" !== t.type && r, i, a, s, c)),
                c || ("value"in y && void 0 !== (u = y.value) && u !== e.value && j(e, "value", u, v.value, !1),
                "checked"in y && void 0 !== (u = y.checked) && u !== e.checked && j(e, "checked", u, v.checked, !1))
            }
            return e
        }
        function C(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                o.__e(e, n)
            }
        }
        function D(e, t, n) {
            var r, i, a;
            if (o.unmount && o.unmount(e),
            (r = e.ref) && (r.current && r.current !== e.__e || C(r, null, t)),
            n || "function" == typeof e.type || (n = null != (i = e.__e)),
            e.__e = e.__d = void 0,
            null != (r = e.__c)) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount()
                    } catch (e) {
                        o.__e(e, t)
                    }
                r.base = r.__P = null
            }
            if (r = e.__k)
                for (a = 0; a < r.length; a++)
                    r[a] && D(r[a], t, n);
            null != i && f(i)
        }
        function T(e, t, n) {
            return this.constructor(e, n)
        }
        function R(e, t, n) {
            var r, i, a;
            o.__ && o.__(e, t),
            i = (r = n === c) ? null : n && n.__k || t.__k,
            e = d(v, null, [e]),
            a = [],
            P(t, (r ? t : n || t).__k = e, i || s, s, void 0 !== t.ownerSVGElement, n && !r ? [n] : i ? null : t.childNodes.length ? l.slice.call(t.childNodes) : null, a, n || s, r),
            z(a, e)
        }
        o = {
            __e: function(e, t) {
                for (var n, o; t = t.__; )
                    if ((n = t.__c) && !n.__)
                        try {
                            if (n.constructor && null != n.constructor.getDerivedStateFromError && (o = !0,
                            n.setState(n.constructor.getDerivedStateFromError(e))),
                            null != n.componentDidCatch && (o = !0,
                            n.componentDidCatch(e)),
                            o)
                                return b(n.__E = n)
                        } catch (t) {
                            e = t
                        }
                throw e
            }
        },
        y.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state),
            "function" == typeof e && (e = e(n, this.props)),
            e && p(n, e),
            null != e && this.__v && (t && this.__h.push(t),
            b(this))
        }
        ,
        y.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            b(this))
        }
        ,
        y.prototype.render = v,
        r = [],
        i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        k.__r = 0,
        c = s;
        var M, I = [], N = o.__r, q = o.diffed, U = o.__c, L = o.unmount;
        function F() {
            I.some((function(e) {
                if (e.__P)
                    try {
                        e.__H.__h.forEach(B),
                        e.__H.__h.forEach(W),
                        e.__H.__h = []
                    } catch (t) {
                        return e.__H.__h = [],
                        o.__e(t, e.__v),
                        !0
                    }
            }
            )),
            I = []
        }
        o.__r = function(e) {
            N && N(e),
            0;
            var t = e.__c.__H;
            t && (t.__h.forEach(B),
            t.__h.forEach(W),
            t.__h = [])
        }
        ,
        o.diffed = function(e) {
            q && q(e);
            var t = e.__c;
            t && t.__H && t.__H.__h.length && (1 !== I.push(t) && M === o.requestAnimationFrame || ((M = o.requestAnimationFrame) || function(e) {
                var t, n = function() {
                    clearTimeout(o),
                    H && cancelAnimationFrame(t),
                    setTimeout(e)
                }, o = setTimeout(n, 100);
                H && (t = requestAnimationFrame(n))
            }
            )(F))
        }
        ,
        o.__c = function(e, t) {
            t.some((function(e) {
                try {
                    e.__h.forEach(B),
                    e.__h = e.__h.filter((function(e) {
                        return !e.__ || W(e)
                    }
                    ))
                } catch (n) {
                    t.some((function(e) {
                        e.__h && (e.__h = [])
                    }
                    )),
                    t = [],
                    o.__e(n, e.__v)
                }
            }
            )),
            U && U(e, t)
        }
        ,
        o.unmount = function(e) {
            L && L(e);
            var t = e.__c;
            if (t && t.__H)
                try {
                    t.__H.__.forEach(B)
                } catch (e) {
                    o.__e(e, t.__v)
                }
        }
        ;
        var H = "function" == typeof requestAnimationFrame;
        function B(e) {
            "function" == typeof e.u && e.u()
        }
        function W(e) {
            e.u = e.__()
        }
        function K(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function V(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t))
                    return !0;
            for (var o in t)
                if ("__source" !== o && e[o] !== t[o])
                    return !0;
            return !1
        }
        !function(e) {
            var t, n;
            function o(t) {
                var n;
                return (n = e.call(this, t) || this).isPureReactComponent = !0,
                n
            }
            n = e,
            (t = o).prototype = Object.create(n.prototype),
            t.prototype.constructor = t,
            t.__proto__ = n,
            o.prototype.shouldComponentUpdate = function(e, t) {
                return V(this.props, e) || V(this.state, t)
            }
        }(y);
        var $ = o.__b;
        o.__b = function(e) {
            e.type && e.type.t && e.ref && (e.props.ref = e.ref,
            e.ref = null),
            $ && $(e)
        }
        ;
        "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
        var G = o.__e;
        function Z(e) {
            return e && ((e = K({}, e)).__c = null,
            e.__k = e.__k && e.__k.map(Z)),
            e
        }
        function Y(e) {
            return e && (e.__v = null,
            e.__k = e.__k && e.__k.map(Y)),
            e
        }
        function X() {
            this.__u = 0,
            this.o = null,
            this.__b = null
        }
        function Q(e) {
            var t = e.__.__c;
            return t && t.u && t.u(e)
        }
        function J() {
            this.i = null,
            this.l = null
        }
        o.__e = function(e, t, n) {
            if (e.then)
                for (var o, r = t; r = r.__; )
                    if ((o = r.__c) && o.__c)
                        return null == t.__e && (t.__e = n.__e,
                        t.__k = n.__k),
                        o.__c(e, t.__c);
            G(e, t, n)
        }
        ,
        (X.prototype = new y).__c = function(e, t) {
            var n = this;
            null == n.o && (n.o = []),
            n.o.push(t);
            var o = Q(n.__v)
              , r = !1
              , i = function() {
                r || (r = !0,
                t.componentWillUnmount = t.__c,
                o ? o(a) : a())
            };
            t.__c = t.componentWillUnmount,
            t.componentWillUnmount = function() {
                i(),
                t.__c && t.__c()
            }
            ;
            var a = function() {
                var e;
                if (!--n.__u)
                    for (n.__v.__k[0] = Y(n.state.u),
                    n.setState({
                        u: n.__b = null
                    }); e = n.o.pop(); )
                        e.forceUpdate()
            };
            n.__u++ || n.setState({
                u: n.__b = n.__v.__k[0]
            }),
            e.then(i, i)
        }
        ,
        X.prototype.componentWillUnmount = function() {
            this.o = []
        }
        ,
        X.prototype.render = function(e, t) {
            return this.__b && (this.__v.__k && (this.__v.__k[0] = Z(this.__b)),
            this.__b = null),
            [d(v, null, t.u ? null : e.children), t.u && e.fallback]
        }
        ;
        var ee = function(e, t, n) {
            if (++n[1] === n[0] && e.l.delete(t),
            e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
                for (n = e.i; n; ) {
                    for (; n.length > 3; )
                        n.pop()();
                    if (n[1] < n[0])
                        break;
                    e.i = n = n[2]
                }
        };
        (J.prototype = new y).u = function(e) {
            var t = this
              , n = Q(t.__v)
              , o = t.l.get(e);
            return o[0]++,
            function(r) {
                var i = function() {
                    t.props.revealOrder ? (o.push(r),
                    ee(t, e, o)) : r()
                };
                n ? n(i) : i()
            }
        }
        ,
        J.prototype.render = function(e) {
            this.i = null,
            this.l = new Map;
            var t = w(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; )
                this.l.set(t[n], this.i = [1, 0, this.i]);
            return e.children
        }
        ,
        J.prototype.componentDidUpdate = J.prototype.componentDidMount = function() {
            var e = this;
            e.l.forEach((function(t, n) {
                ee(e, n, t)
            }
            ))
        }
        ;
        !function() {
            function e() {}
            var t = e.prototype;
            t.getChildContext = function() {
                return this.props.context
            }
            ,
            t.render = function(e) {
                return e.children
            }
        }();
        var te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
        y.prototype.isReactComponent = {};
        var ne = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        function oe(e, t, n) {
            if (null == t.__k)
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
            return R(e, t),
            "function" == typeof n && n(),
            e ? e.__c : null
        }
        var re = o.event;
        function ie(e, t) {
            e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
                configurable: !1,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    this["UNSAFE_" + t] = e
                }
            })
        }
        o.event = function(e) {
            re && (e = re(e)),
            e.persist = function() {}
            ;
            var t = !1
              , n = !1
              , o = e.stopPropagation;
            e.stopPropagation = function() {
                o.call(e),
                t = !0
            }
            ;
            var r = e.preventDefault;
            return e.preventDefault = function() {
                r.call(e),
                n = !0
            }
            ,
            e.isPropagationStopped = function() {
                return t
            }
            ,
            e.isDefaultPrevented = function() {
                return n
            }
            ,
            e.nativeEvent = e
        }
        ;
        var ae = {
            configurable: !0,
            get: function() {
                return this.class
            }
        }
          , ce = o.vnode;
        o.vnode = function(e) {
            e.$$typeof = ne;
            var t = e.type
              , n = e.props;
            if (t) {
                if (n.class != n.className && (ae.enumerable = "className"in n,
                null != n.className && (n.class = n.className),
                Object.defineProperty(n, "className", ae)),
                "function" != typeof t) {
                    var o, r, i;
                    for (i in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue),
                    delete n.defaultValue),
                    Array.isArray(n.value) && n.multiple && "select" === t && (w(n.children).forEach((function(e) {
                        -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0)
                    }
                    )),
                    delete n.value),
                    !0 === n.download && (n.download = ""),
                    n)
                        if (o = te.test(i))
                            break;
                    if (o)
                        for (i in r = e.props = {},
                        n)
                            r[te.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = n[i]
                }
                !function(t) {
                    var n = e.type
                      , o = e.props;
                    if (o && "string" == typeof n) {
                        var r = {};
                        for (var i in o)
                            /^on(Ani|Tra|Tou)/.test(i) && (o[i.toLowerCase()] = o[i],
                            delete o[i]),
                            r[i.toLowerCase()] = i;
                        if (r.ondoubleclick && (o.ondblclick = o[r.ondoubleclick],
                        delete o[r.ondoubleclick]),
                        r.onbeforeinput && (o.onbeforeinput = o[r.onbeforeinput],
                        delete o[r.onbeforeinput]),
                        r.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(o.type))) {
                            var a = r.oninput || "oninput";
                            o[a] || (o[a] = o[r.onchange],
                            delete o[r.onchange])
                        }
                    }
                }(),
                "function" == typeof t && !t.m && t.prototype && (ie(t.prototype, "componentWillMount"),
                ie(t.prototype, "componentWillReceiveProps"),
                ie(t.prototype, "componentWillUpdate"),
                t.m = !0)
            }
            ce && ce(e)
        }
        ;
        var se = d
          , le = v
          , ue = y
          , pe = (n(28),
        n(29),
        n(30),
        n(39),
        n(162),
        n(129))
          , fe = function(e) {
            var t = e.t;
            return se("svg", {
                role: "img",
                "aria-label": t(["close"]),
                width: "12",
                height: "12",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
            }, se("title", null, t(["close"])), se("line", {
                x1: "1",
                y1: "11",
                x2: "11",
                y2: "1",
                strokeWidth: "1"
            }), se("line", {
                x1: "1",
                y1: "1",
                x2: "11",
                y2: "11",
                strokeWidth: "1"
            }))
        };
        fe.propTypes = {
            t: n.n(pe).a.func
        };
        n(62);
        function de(e) {
            return e.split("-").map((function(e) {
                return e.slice(0, 1).toUpperCase() + e.slice(1)
            }
            )).join(" ")
        }
        function me(e) {
            return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ve() {
            return (ve = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ye(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function he(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function ge(e, t) {
            return (ge = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function be(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = _e(e);
                if (t) {
                    var r = _e(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return ke(this, n)
            }
        }
        function ke(e, t) {
            return !t || "object" !== me(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function _e(e) {
            return (_e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var we = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ge(e, t)
            }(i, e);
            var t, n, o, r = be(i);
            function i() {
                return ye(this, i),
                r.apply(this, arguments)
            }
            return t = i,
            (n = [{
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.checked, o = t.onlyRequiredEnabled, r = t.onToggle, i = t.name, a = t.title, c = t.description, s = t.t, l = this.props.required || !1, u = this.props.optOut || !1, p = this.props.purposes || [], f = "app-item-".concat(i), d = p.map((function(e) {
                        return s(["!", "purposes", e, "title?"]) || de(e)
                    }
                    )).join(", "), m = u ? se("span", {
                        className: "cm-opt-out",
                        title: s(["app", "optOut", "description"])
                    }, s(["app", "optOut", "title"])) : "", v = l ? se("span", {
                        className: "cm-required",
                        title: s(["app", "required", "description"])
                    }, s(["app", "required", "title"])) : "";
                    return p.length > 0 && (e = se("p", {
                        className: "purposes"
                    }, s(["app", p.length > 1 ? "purposes" : "purpose"]), ":", " ", d)),
                    se("div", null, se("input", {
                        id: f,
                        className: "cm-list-input" + (l ? " required" : "") + (o ? " half-checked only-required" : ""),
                        "aria-describedby": "".concat(f, "-description"),
                        disabled: l,
                        checked: n || l,
                        type: "checkbox",
                        onChange: function(e) {
                            r(e.target.checked)
                        }
                    }), se("label", ve({
                        htmlFor: f,
                        className: "cm-list-label"
                    }, l ? {
                        tabIndex: "0"
                    } : {}), se("span", {
                        className: "cm-list-title"
                    }, a || s(["!", "apps", i, "title"]) || s(["!", i, "title"]) || de(i)), v, m, se("span", {
                        className: "cm-switch"
                    }, se("div", {
                        className: "slider round active"
                    }))), se("div", {
                        id: "".concat(f, "-description")
                    }, se("p", {
                        className: "cm-list-description"
                    }, c || s(["!", "apps", i, "description"]) || s(["!", i, "description"]) || ""), e))
                }
            }]) && he(t.prototype, n),
            o && he(t, o),
            i
        }(ue);
        function xe(e) {
            return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function je(e, t) {
            return (je = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Oe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = ze(e);
                if (t) {
                    var r = ze(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return Ae(this, n)
            }
        }
        function Ae(e, t) {
            return !t || "object" !== xe(t) && "function" != typeof t ? Pe(e) : t
        }
        function Pe(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ze(e) {
            return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ee() {
            return (Ee = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var Ce = function(e) {
            var t = e.apps
              , n = e.consents
              , o = e.toggle
              , r = e.t;
            return t.map((function(e) {
                var t = n[e.name];
                return se("li", {
                    key: e.name,
                    className: "cm-app"
                }, se(we, Ee({
                    checked: t || e.required,
                    onToggle: function(t) {
                        o([e], t)
                    },
                    t: r
                }, e)))
            }
            ))
        }
          , De = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && je(e, t)
            }(i, e);
            var t, n, o, r = Oe(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                t = r.call(this, e),
                e.manager.watch(Pe(t)),
                t.state = {
                    consents: e.manager.consents
                },
                t
            }
            return t = i,
            (n = [{
                key: "componentWillUnmount",
                value: function() {
                    this.props.manager.unwatch(this)
                }
            }, {
                key: "update",
                value: function(e, t, n) {
                    e === this.props.manager && "consents" === t && this.setState({
                        consents: n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.config
                      , n = e.t
                      , o = e.manager
                      , r = this.state.consents
                      , i = t.apps
                      , a = function(e, t) {
                        e.map((function(e) {
                            e.required || o.updateConsent(e.name, t)
                        }
                        ))
                    }
                      , c = se(Ce, {
                        apps: i,
                        t: n,
                        consents: r,
                        toggle: a
                    })
                      , s = i.filter((function(e) {
                        return !e.required
                    }
                    ))
                      , l = 0 === s.filter((function(e) {
                        return r[e.name]
                    }
                    )).length
                      , u = i.filter((function(e) {
                        return e.required
                    }
                    )).length > 1 && l;
                    return se("ul", {
                        className: "cm-apps"
                    }, c, s.length > 10 && se("li", {
                        className: "cm-app cm-toggle-all"
                    }, se(we, {
                        name: "disableAll",
                        title: n(["app", "disableAll", "title"]),
                        description: n(["app", "disableAll", "description"]),
                        checked: !l,
                        onlyRequiredEnabled: u,
                        onToggle: function(e) {
                            a(i, e)
                        },
                        t: n
                    })))
                }
            }]) && Se(t.prototype, n),
            o && Se(t, o),
            i
        }(ue);
        function Te(e) {
            return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Re() {
            return (Re = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Me(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function Ie(e, t) {
            return (Ie = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ne(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = Ue(e);
                if (t) {
                    var r = Ue(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return qe(this, n)
            }
        }
        function qe(e, t) {
            return !t || "object" !== Te(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ue(e) {
            return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Le = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ie(e, t)
            }(i, e);
            var t, n, o, r = Ne(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                (t = r.call(this, e)).state = {
                    appsVisible: !1
                },
                t
            }
            return t = i,
            (n = [{
                key: "render",
                value: function() {
                    var e, t = this, n = this.props, o = n.allEnabled, r = n.onlyRequiredEnabled, i = n.allDisabled, a = n.apps, c = n.onToggle, s = n.name, l = n.manager, u = n.consents, p = n.title, f = n.description, d = n.t, m = this.state.appsVisible, v = this.props.required || !1, y = this.props.purposes || [], h = "purpose-item-".concat(s), g = y.map((function(e) {
                        return d(["!", "purposes", e, "title?"]) || de(e)
                    }
                    )).join(", "), b = v ? se("span", {
                        className: "cm-required",
                        title: d(["!", "app", "required", "description"]) || ""
                    }, d(["app", "required", "title"])) : "";
                    y.length > 0 && (e = se("p", {
                        className: "purposes"
                    }, d(["purpose", y.length > 1 ? "purposes" : "purpose"]), ": ", g));
                    var k = se(Ce, {
                        apps: a,
                        toggle: function(e, t) {
                            e.map((function(e) {
                                e.required || l.updateConsent(e.name, t)
                            }
                            ))
                        },
                        consents: u,
                        t: d
                    });
                    return se(le, null, se("input", {
                        id: h,
                        className: "cm-list-input" + (v ? " required" : "") + (o ? "" : r ? " only-required" : " half-checked"),
                        "aria-describedby": "".concat(h, "-description"),
                        disabled: v,
                        checked: o || !i && !r,
                        type: "checkbox",
                        onChange: function(e) {
                            c(e.target.checked)
                        }
                    }), se("label", Re({
                        htmlFor: h,
                        className: "cm-list-label"
                    }, v ? {
                        tabIndex: "0"
                    } : {}), se("span", {
                        className: "cm-list-title"
                    }, p || d(["!", "purposes", s, "title?"]) || de(s)), b, se("span", {
                        className: "cm-switch"
                    }, se("div", {
                        className: "slider round active"
                    }))), se("div", {
                        id: "".concat(h, "-description")
                    }, se("p", {
                        className: "cm-list-description"
                    }, f || d(["!", "purposes", s, "description"]) || ""), e), a.length > 1 && se("div", {
                        className: "cm-apps"
                    }, se("div", {
                        className: "cm-caret"
                    }, se("a", {
                        href: "#",
                        onClick: function(e) {
                            e.preventDefault(),
                            t.setState({
                                appsVisible: !m
                            })
                        }
                    }, m && se("span", null, "↑") || se("span", null, "↓"), " ", a.length, " ", d(["purposeItem", a.length > 1 ? "apps" : "app"]))), se("ul", {
                        className: "cm-content" + (m ? " expanded" : "")
                    }, k)))
                }
            }]) && Me(t.prototype, n),
            o && Me(t, o),
            i
        }(ue);
        function Fe(e) {
            return (Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function He(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Be(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Be(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function Be(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function We(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function Ke(e, t) {
            return (Ke = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ve(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = Ze(e);
                if (t) {
                    var r = Ze(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return $e(this, n)
            }
        }
        function $e(e, t) {
            return !t || "object" !== Fe(t) && "function" != typeof t ? Ge(e) : t
        }
        function Ge(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ze(e) {
            return (Ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ye = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ke(e, t)
            }(i, e);
            var t, n, o, r = Ve(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                t = r.call(this, e),
                e.manager.watch(Ge(t)),
                t.state = {
                    consents: e.manager.consents
                },
                t
            }
            return t = i,
            (n = [{
                key: "componentWillUnmount",
                value: function() {
                    this.props.manager.unwatch(this)
                }
            }, {
                key: "update",
                value: function(e, t, n) {
                    e === this.props.manager && "consents" === t && this.setState({
                        consents: n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.config, o = t.t, r = t.manager, i = this.state.consents, a = n.apps, c = {}, s = He(a);
                    try {
                        for (s.s(); !(e = s.n()).done; ) {
                            var l, u = e.value, p = He(u.purposes);
                            try {
                                for (p.s(); !(l = p.n()).done; ) {
                                    var f = l.value;
                                    void 0 === c[f] && (c[f] = []),
                                    c[f].push(u)
                                }
                            } catch (e) {
                                p.e(e)
                            } finally {
                                p.f()
                            }
                        }
                    } catch (e) {
                        s.e(e)
                    } finally {
                        s.f()
                    }
                    var d = function(e, t) {
                        e.map((function(e) {
                            var n, o = He(c[e]);
                            try {
                                for (o.s(); !(n = o.n()).done; ) {
                                    var i = n.value;
                                    i.required || r.updateConsent(i.name, t)
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                        ))
                    }
                      , m = function(e) {
                        var t, n = {
                            allEnabled: !0,
                            onlyRequiredEnabled: !0,
                            allDisabled: !0,
                            allRequired: !0
                        }, o = He(e);
                        try {
                            for (o.s(); !(t = o.n()).done; ) {
                                var r = t.value;
                                r.required || (n.allRequired = !1),
                                i[r.name] ? (r.required || (n.onlyRequiredEnabled = !1),
                                n.allDisabled = !1) : r.required || (n.allEnabled = !1)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return n.allDisabled && (n.onlyRequiredEnabled = !1),
                        n
                    }
                      , v = Object.keys(c).map((function(e) {
                        var t = m(c[e]);
                        return se("li", {
                            key: e,
                            className: "cm-purpose"
                        }, se(Le, {
                            allEnabled: t.allEnabled,
                            allDisabled: t.allDisabled,
                            onlyRequiredEnabled: t.onlyRequiredEnabled,
                            required: t.allRequired,
                            consents: i,
                            name: e,
                            manager: r,
                            onToggle: function(t) {
                                d([e], t)
                            },
                            apps: c[e],
                            t: o
                        }))
                    }
                    ))
                      , y = Object.keys(c).filter((function(e) {
                        var t, n = He(c[e]);
                        try {
                            for (n.s(); !(t = n.n()).done; )
                                if (!t.value.required)
                                    return !0
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return !1
                    }
                    ))
                      , h = m(a);
                    return se("ul", {
                        className: "cm-purposes"
                    }, v, y.length > 10 && se("li", {
                        className: "cm-purpose cm-toggle-all"
                    }, se(Le, {
                        name: "disableAll",
                        title: o(["app", "disableAll", "title"]),
                        description: o(["app", "disableAll", "description"]),
                        allDisabled: h.allDisabled,
                        allEnabled: h.allEnabled,
                        onlyRequiredEnabled: h.onlyRequiredEnabled,
                        onToggle: function(e) {
                            d(Object.keys(c), e)
                        },
                        manager: r,
                        consents: i,
                        apps: [],
                        t: o
                    })))
                }
            }]) && We(t.prototype, n),
            o && We(t, o),
            i
        }(ue);
        n(91),
        n(166),
        n(167);
        function Xe(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Qe(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Qe(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Qe(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Qe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function Je(e) {
            return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var et = function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
            var r, i = Je(n[0]);
            r = 0 === n.length ? {} : "string" === i || "number" === i ? Array.prototype.slice.call(n) : n[0];
            for (var a = [], c = e.toString(); c.length > 0; ) {
                var s = c.match(/\{(?!\{)([\w\d]+)\}(?!\})/);
                if (null !== s) {
                    var l = c.substr(0, s.index);
                    c = c.substr(s.index + s[0].length);
                    var u = parseInt(s[1]);
                    a.push(l),
                    u != u ? a.push(r[s[1]]) : a.push(r[u])
                } else
                    a.push(c),
                    c = ""
            }
            return a
        };
        function tt(e) {
            if (void 0 !== e && "zz" !== e)
                return e;
            var t = (("string" == typeof window.language ? window.language : null) || document.documentElement.lang || "en").toLowerCase()
              , n = new RegExp("^([\\w]+)-([\\w]+)$").exec(t);
            return null === n ? t : n[1]
        }
        function nt(e, t, n) {
            var o = t;
            Array.isArray(o) || (o = [o]);
            for (var r = e, i = 0; i < o.length; i++) {
                if (void 0 === r)
                    return n;
                if (void 0 !== o[i] && o[i].endsWith("?")) {
                    var a = o[i].slice(0, o[i].length - 1)
                      , c = void 0;
                    void 0 !== (c = r instanceof Map ? r.get(a) : r[a]) && "string" == typeof c && (r = c)
                } else
                    r = r instanceof Map ? r.get(o[i]) : r[o[i]]
            }
            return void 0 === r || "string" != typeof r ? n : "" !== r ? r : void 0
        }
        function ot(e, t, n, o) {
            var r = o
              , i = !1;
            "!" === r[0] && (r = r.slice(1),
            i = !0),
            Array.isArray(r) || (r = [r]);
            var a = nt(e, [t].concat(Xe(r)));
            if (void 0 === a && void 0 !== n && (a = nt(e, [n].concat(Xe(r)))),
            void 0 === a) {
                if (i)
                    return;
                return ["[missing translation: ".concat(t, "/").concat(r.join("/"), "]")]
            }
            for (var c = arguments.length, s = new Array(c > 4 ? c - 4 : 0), l = 4; l < c; l++)
                s[l - 4] = arguments[l];
            return s.length > 0 ? et.apply(void 0, [a].concat(s)) : a
        }
        var rt = function(e) {
            var t = e.text;
            if (!0 === e.config.htmlTexts) {
                var n = !1;
                "<" === t[0][0] && (n = !0);
                var o = t.map((function(e, t) {
                    return "string" == typeof e ? se("span", {
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }) : e
                }
                ));
                return se(n ? le : "p", null, o)
            }
            return se("p", null, t)
        };
        function it(e) {
            return (it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function at(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function ct(e, t) {
            return (ct = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function st(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = ut(e);
                if (t) {
                    var r = ut(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return lt(this, n)
            }
        }
        function lt(e, t) {
            return !t || "object" !== it(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ut(e) {
            return (ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var pt = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ct(e, t)
            }(i, e);
            var t, n, o, r = st(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                t = r.call(this, e),
                e.manager.restoreSavedConsents(),
                t
            }
            return t = i,
            (n = [{
                key: "render",
                value: function() {
                    var e, t, n, o = this.props, r = o.hide, i = o.confirming, a = o.saveAndHide, c = o.acceptAndHide, s = o.declineAndHide, l = o.config, u = o.manager, p = o.t, f = l.embedded, d = l.lang || tt(), m = void 0 === l.groupByPurpose || l.groupByPurpose;
                    l.mustConsent || (e = se("button", {
                        title: p(["close"]),
                        className: "hide",
                        type: "button",
                        onClick: r
                    }, se(fe, {
                        t: p
                    }))),
                    l.hideDeclineAll || u.confirmed || (t = se("button", {
                        disabled: i,
                        className: "cm-btn cm-btn-decline cm-btn-danger cn-decline",
                        type: "button",
                        onClick: s
                    }, p(["decline"])));
                    var v, y, h, g = se("button", {
                        disabled: i,
                        className: "cm-btn cm-btn-success cm-btn-info cm-btn-accept",
                        type: "button",
                        onClick: a
                    }, p([u.confirmed ? "save" : "acceptSelected"]));
                    l.acceptAll && !u.confirmed && (n = se("button", {
                        disabled: i,
                        className: "cm-btn cm-btn-success cm-btn-accept-all",
                        type: "button",
                        onClick: c
                    }, p(["acceptAll"]))),
                    void 0 !== l.privacyPolicy ? "string" == typeof l.privacyPolicy ? v = l.privacyPolicy : "object" === it(l.privacyPolicy) && (v = l.privacyPolicy[d] || l.privacyPolicy.default) : v = p(["!", "privacyPolicyUrl"]),
                    void 0 !== v && (y = se("a", {
                        key: "ppLink",
                        href: v,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, p(["consentModal", "privacyPolicy", "name"]))),
                    h = se(m ? Ye : De, {
                        t: p,
                        config: l,
                        manager: u
                    });
                    var b = se("div", {
                        className: "cm-modal cm-klaro"
                    }, se("div", {
                        className: "cm-header"
                    }, e, se("h1", {
                        className: "title"
                    }, p(["consentModal", "title"])), se(rt, {
                        config: l,
                        text: [p(["consentModal", "description"])].concat(y && [" "].concat(p(["consentModal", "privacyPolicy", "text"], {
                            privacyPolicy: y
                        })) || [])
                    })), se("div", {
                        className: "cm-body"
                    }, h), se("div", {
                        className: "cm-footer"
                    }, se("div", {
                        className: "cm-footer-buttons"
                    }, t, g, n), se("p", {
                        className: "cm-powered-by"
                    }, se("a", {
                        target: "_blank",
                        href: l.poweredBy || "https://kiprotect.com/klaro",
                        rel: "noopener noreferrer"
                    }, p(["poweredBy"])))));
                    return f ? se("div", {
                        className: "cookie-modal cm-embedded"
                    }, b) : se("div", {
                        className: "cookie-modal"
                    }, se("div", {
                        className: "cm-bg",
                        onClick: r
                    }), b)
                }
            }]) && at(t.prototype, n),
            o && at(t, o),
            i
        }(ue);
        n(125);
        function ft(e) {
            return (ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function dt(e, t, n) {
            void 0 === n && (n = !0);
            for (var o = Object.keys(t), r = 0; r < o.length; r++) {
                var i = o[r]
                  , a = t[i]
                  , c = e[i];
                "string" == typeof a ? (n || void 0 === c) && (e[i] = a) : "object" === ft(a) && ("object" === ft(c) ? dt(c, a, n) : (n || void 0 === c) && (e[i] = a))
            }
            return e
        }
        function mt(e) {
            return (mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function vt(e) {
            return function(e) {
                if (Array.isArray(e))
                    return yt(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return yt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return yt(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function yt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function ht(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function gt(e, t) {
            return (gt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function bt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = wt(e);
                if (t) {
                    var r = wt(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return kt(this, n)
            }
        }
        function kt(e, t) {
            return !t || "object" !== mt(t) && "function" != typeof t ? _t(e) : t
        }
        function _t(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function wt(e) {
            return (wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function xt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var St = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && gt(e, t)
            }(i, e);
            var t, n, o, r = bt(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                xt(_t(t = r.call(this, e)), "executeButtonClicked", (function(e, n, o) {
                    var r = t.state.modal
                      , i = 0;
                    e && (i = t.props.manager.changeAll(n));
                    var a = t.props.manager.confirmed
                      , c = function() {
                        t.setState({
                            confirming: !1
                        }),
                        t.props.manager.saveAndApplyConsents(o),
                        t.props.hide()
                    };
                    e && !a && (r || t.props.config.mustConsent) ? 0 === i ? c() : setTimeout(c, 1e3) : c()
                }
                )),
                xt(_t(t), "saveAndHide", (function() {
                    t.executeButtonClicked(!1, !1, "save")
                    console.log('accepted')
                    document.getElementById("overlay").style.display = "none";
                }
                )),
                xt(_t(t), "acceptAndHide", (function() {
                    t.executeButtonClicked(!0, !0, "accept")
                }
                )),
                xt(_t(t), "declineAndHide", (function() {
                    t.executeButtonClicked(!0, !1, "decline")
                }
                )),
                t.state = {
                    modal: e.modal,
                    confirming: !1
                },
                t
            }
            return t = i,
            (n = [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.modal !== this.props.modal && this.setState({
                        modal: this.props.modal
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.config
                      , o = t.show
                      , r = t.manager
                      , i = t.testing
                      , a = t.t
                      , c = this.state
                      , s = c.modal
                      , l = c.confirming
                      , u = n.embedded
                      , p = n.noticeAsModal
                      , f = n.hideLearnMore
                      , d = function(e) {
                        for (var t = new Set([]), n = 0; n < e.apps.length; n++)
                            for (var o = e.apps[n].purposes || [], r = 0; r < o.length; r++)
                                t.add(o[r]);
                        return Array.from(t)
                    }(n).filter((function(e) {
                        return "functional" !== e
                    }
                    )).map((function(e) {
                        return a(["!", "purposes", e, "title?"]) || de(e)
                    }
                    ))
                      , m = "";
                    m = 1 === d.length ? d[0] : [].concat(vt(d.slice(0, -2)), [d.slice(-2).join(" & ")]).join(", ");
                    var v, y = n.lang || tt();
                    void 0 !== n.privacyPolicy ? "string" == typeof n.privacyPolicy ? v = n.privacyPolicy : "object" === mt(n.privacyPolicy) && (v = n.privacyPolicy[y] || n.privacyPolicy.default) : v = a(["!", "privacyPolicyUrl"]);
                    var h, g = function(t) {
                        t.preventDefault(),
                        e.setState({
                            modal: !0
                        })
                    };
                    if (r.changed && (h = se("p", {
                        className: "cn-changes"
                    }, a(["consentNotice", "changeDescription"]))),
                    !o && !i)
                        return se("div", null);
                    var b, k = (!n.mustConsent || p) && !r.confirmed && !n.noNotice, _ = n.hideDeclineAll ? "" : se("button", {
                        className: "cm-btn cm-btn-danger cn-decline",
                        type: "button",
                        onClick: this.declineAndHide
                    }, a(["decline"])), w = n.acceptAll ? se("button", {
                        className: "cm-btn cm-btn-success",
                        type: "button",
                        onClick: this.acceptAndHide
                    }, a(["ok"])) : se("button", {
                        className: "cm-btn cm-btn-success",
                        type: "button",
                        onClick: this.saveAndHide
                    }, a(["ok"])), x = function(e) {
                        return p ? se("button", {
                            className: "cm-btn cm-btn-lern-more cm-btn-info",
                            type: "button",
                            onClick: g
                        }, a(["consentNotice", "configure"]), e) : se("a", {
                            className: "cm-link cn-learn-more",
                            href: "#",
                            onClick: g
                        }, a(["consentNotice", "learnMore"]), e)
                    };
                    if (void 0 !== v && (b = se("a", {
                        key: "ppLink",
                        href: v
                    }, a(["consentNotice", "privacyPolicy", "name"]))),
                    s || r.confirmed && !i || !r.confirmed && n.mustConsent)
                        return se(pt, {
                            t: a,
                            confirming: l,
                            config: n,
                            hide: function() {
                                n.mustConsent && !n.acceptAll || (r.confirmed && !i ? e.props.hide() : e.setState({
                                    modal: !1
                                }))
                            },
                            declineAndHide: this.declineAndHide,
                            saveAndHide: this.saveAndHide,
                            acceptAndHide: this.acceptAndHide,
                            manager: r
                        });
                    var S = se("div", {
                        className: "cookie-notice ".concat(k || i ? "" : "cookie-notice-hidden", " ").concat(p ? "cookie-modal-notice" : "", " ").concat(u ? "cn-embedded" : "")
                    }, se("div", {
                        className: "cn-body"
                    }, se(rt, {
                        config: n,
                        text: a(["consentNotice", "description"], {
                            purposes: se("strong", {
                                key: "strong"
                            }, m),
                            privacyPolicy: b,
                            learnMoreLink: x()
                        })
                    }), i && se("p", null, a(["consentNotice", "testing"])), h, se("div", {
                        className: "cn-ok"
                    }, !f && x("..."), se("div", {
                        className: "cn-buttons"
                    }, _, w))));
                    return p ? se("div", {
                        className: "cookie-modal"
                    }, se("div", {
                        className: "cm-bg"
                    }), S) : S
                }
            }]) && ht(t.prototype, n),
            o && ht(t, o),
            i
        }(ue);
        function jt(e) {
            return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ot(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function At(e, t) {
            return (At = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Pt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = Ct(e);
                if (t) {
                    var r = Ct(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return zt(this, n)
            }
        }
        function zt(e, t) {
            return !t || "object" !== jt(t) && "function" != typeof t ? Et(e) : t
        }
        function Et(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ct(e) {
            return (Ct = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Dt = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && At(e, t)
            }(i, e);
            var t, n, o, r = Pt(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                t = r.call(this, e),
                e.manager.watch(Et(t)),
                t.state = {
                    show: e.show > 0 || !e.manager.confirmed
                },
                t
            }
            return t = i,
            (n = [{
                key: "componentWillUnmount",
                value: function() {
                    this.props.manager.unwatch(this)
                }
            }, {
                key: "update",
                value: function(e, t) {
                    e === this.props.manager && "applyConsents" === t && (!this.props.config.embedded && this.props.manager.confirmed ? this.setState({
                        show: !1
                    }) : this.forceUpdate())
                }
            }, {
                key: "notifyApi",
                value: function() {
                    var e = this.props
                      , t = e.api
                      , n = e.modal
                      , o = e.show
                      , r = e.config;
                    if (void 0 !== t) {
                        if (n || o > 0)
                            return;
                        this.props.manager.confirmed || this.props.manager.auxiliaryStore.getWithKey("shown-before") || (t.update(this, "showNotice", {
                            config: r
                        }),
                        this.props.manager.auxiliaryStore.setWithKey("shown-before", !0))
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.notifyApi()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    if (e.show !== this.props.show) {
                        this.notifyApi();
                        var t = this.props.show > 0 || !this.props.manager.confirmed;
                        t !== this.state.show && this.setState({
                            show: t
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.config
                      , o = t.t
                      , r = t.lang
                      , i = t.testing
                      , a = t.manager
                      , c = t.modal
                      , s = this.state.show
                      , l = n.additionalClass
                      , u = n.embedded
                      , p = n.stylePrefix;
                    return se("div", {
                        lang: r,
                        className: (p || "klaro") + (void 0 !== l ? " " + l : "")
                    }, se(St, {
                        key: "app-" + this.props.show,
                        t: o,
                        testing: i,
                        show: s,
                        modal: c,
                        hide: function() {
                            u || e.setState({
                                show: !1
                            })
                        },
                        config: n,
                        manager: a
                    }))
                }
            }]) && Ot(t.prototype, n),
            o && Ot(t, o),
            i
        }(ue);
        n(168),
        n(170);
        function Tt() {
            for (var e = document.cookie.split(";"), t = [], n = new RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$"), o = 0; o < e.length; o++) {
                var r = e[o]
                  , i = n.exec(r);
                null !== i && t.push({
                    name: i[1],
                    value: i[2]
                })
            }
            return t
        }
        function Rt(e, t, n) {
            var o = e + "=; Max-Age=-99999999;";
            document.cookie = o,
            o += " path=" + (t || "/") + ";",
            document.cookie = o,
            void 0 !== n && (o += " domain=" + n + ";",
            document.cookie = o)
        }
        n(171),
        n(172),
        n(173);
        function Mt(e) {
            for (var t = {}, n = 0; n < e.attributes.length; n++) {
                var o = e.attributes[n];
                o.name.startsWith("data-") && (t[o.name.slice(5)] = o.value)
            }
            return t
        }
        function It(e, t) {
            for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                var r = n[o]
                  , i = e[r];
                t[r] !== i && t.setAttribute("data-" + r, i)
            }
        }
        function Nt(e) {
            return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function qt(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Ut(e, t)
        }
        function Ut(e, t) {
            return (Ut = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Lt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, o = Ht(e);
                if (t) {
                    var r = Ht(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else
                    n = o.apply(this, arguments);
                return Ft(this, n)
            }
        }
        function Ft(e, t) {
            return !t || "object" !== Nt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ht(e) {
            return (Ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Bt(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Wt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function Kt(e, t, n) {
            return t && Wt(e.prototype, t),
            n && Wt(e, n),
            e
        }
        var Vt = function() {
            function e(t) {
                Bt(this, e),
                this.cookieName = t.storageName,
                this.cookieDomain = t.cookieDomain,
                this.cookieExpiresAfterDays = t.cookieExpiresAfterDays
            }
            return Kt(e, [{
                key: "get",
                value: function() {
                    var e = function(e) {
                        for (var t = Tt(), n = 0; n < t.length; n++)
                            if (t[n].name === e)
                                return t[n];
                        return null
                    }(this.cookieName);
                    return e ? e.value : null
                }
            }, {
                key: "set",
                value: function(e) {
                    return function(e, t, n, o) {
                        var r = "";
                        if (n) {
                            var i = new Date;
                            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
                            r = "; expires=" + i.toUTCString()
                        }
                        void 0 !== o && (r += "; domain=" + o),
                        document.cookie = e + "=" + (t || "") + r + "; path=/; SameSite=Lax"
                    }(this.cookieName, e, this.cookieExpiresAfterDays, this.cookieDomain)
                }
            }, {
                key: "delete",
                value: function() {
                    return Rt(this.cookieName)
                }
            }]),
            e
        }()
          , $t = function() {
            function e(t, n) {
                Bt(this, e),
                this.key = t.storageName,
                this.handle = n
            }
            return Kt(e, [{
                key: "get",
                value: function() {
                    return this.handle.getItem(this.key)
                }
            }, {
                key: "getWithKey",
                value: function(e) {
                    return this.handle.getItem(e)
                }
            }, {
                key: "set",
                value: function(e) {
                    return this.handle.setItem(this.key, e)
                }
            }, {
                key: "setWithKey",
                value: function(e, t) {
                    return this.handle.setItem(e, t)
                }
            }, {
                key: "delete",
                value: function() {
                    return this.handle.removeItem(this.key)
                }
            }, {
                key: "deleteWithKey",
                value: function(e) {
                    return this.handle.removeItem(e)
                }
            }]),
            e
        }()
          , Gt = function(e) {
            qt(n, e);
            var t = Lt(n);
            function n(e) {
                return Bt(this, n),
                t.call(this, e, localStorage)
            }
            return n
        }($t)
          , Zt = function(e) {
            qt(n, e);
            var t = Lt(n);
            function n(e) {
                return Bt(this, n),
                t.call(this, e, sessionStorage)
            }
            return n
        }($t)
          , Yt = {
            cookie: Vt,
            localStorage: Gt,
            sessionStorage: Zt
        };
        function Xt(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = Jt(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function Qt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , o = !0
                  , r = !1
                  , i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); o = !0)
                        ;
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (r)
                            throw i
                    }
                }
                return n
            }(e, t) || Jt(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Jt(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return en(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? en(e, t) : void 0
            }
        }
        function en(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function tn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function nn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? tn(Object(n), !0).forEach((function(t) {
                    on(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function on(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function rn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        var an = function() {
            function e(t, n, o) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.config = t,
                this.store = void 0 !== n ? n : new Yt[this.storageMethod](this),
                void 0 === this.store && (this.store = Yt.cookie),
                this.auxiliaryStore = void 0 !== o ? o : new Zt(this),
                this.consents = this.defaultConsents,
                this.confirmed = !1,
                this.changed = !1,
                this.states = {},
                this.executedOnce = {},
                this.watchers = new Set([]),
                this.loadConsents(),
                this.applyConsents(),
                this.savedConsents = nn({}, this.consents)
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "watch",
                value: function(e) {
                    this.watchers.has(e) || this.watchers.add(e)
                }
            }, {
                key: "unwatch",
                value: function(e) {
                    this.watchers.has(e) && this.watchers.delete(e)
                }
            }, {
                key: "notify",
                value: function(e, t) {
                    var n = this;
                    this.watchers.forEach((function(o) {
                        o.update(n, e, t)
                    }
                    ))
                }
            }, {
                key: "getApp",
                value: function(e) {
                    var t = this.config.apps.filter((function(t) {
                        return t.name === e
                    }
                    ));
                    if (t.length > 0)
                        return t[0]
                }
            }, {
                key: "getDefaultConsent",
                value: function(e) {
                    var t = e.default || e.required;
                    return void 0 === t && (t = this.config.default),
                    void 0 === t && (t = !1),
                    t
                }
            }, {
                key: "changeAll",
                value: function(e) {
                    var t = this
                      , n = 0;
                    return this.config.apps.map((function(o) {
                        o.required || t.config.required || e ? t.updateConsent(o.name, !0) && n++ : t.updateConsent(o.name, !1) && n++
                    }
                    )),
                    n
                }
            }, {
                key: "updateConsent",
                value: function(e, t) {
                    var n = (this.consents[e] || !1) !== t;
                    return this.consents[e] = t,
                    this.notify("consents", this.consents),
                    n
                }
            }, {
                key: "restoreSavedConsents",
                value: function() {
                    this.consents = nn({}, this.savedConsents),
                    this.notify("consents", this.consents)
                }
            }, {
                key: "resetConsents",
                value: function() {
                    this.consents = this.defaultConsents,
                    this.states = {},
                    this.confirmed = !1,
                    this.applyConsents(),
                    this.savedConsents = nn({}, this.consents),
                    this.store.delete(),
                    this.notify("consents", this.consents)
                }
            }, {
                key: "getConsent",
                value: function(e) {
                    return this.consents[e] || !1
                }
            }, {
                key: "loadConsents",
                value: function() {
                    var e = this.store.get();
                    return null !== e && (this.consents = JSON.parse(decodeURIComponent(e)),
                    this._checkConsents(),
                    this.notify("consents", this.consents)),
                    this.consents
                }
            }, {
                key: "saveAndApplyConsents",
                value: function(e) {
                    this.saveConsents(e),
                    this.applyConsents()
                }
            }, {
                key: "changedConsents",
                value: function() {
                    for (var e = {}, t = 0, n = Object.entries(this.consents); t < n.length; t++) {
                        var o = Qt(n[t], 2)
                          , r = o[0]
                          , i = o[1];
                        this.savedConsents[r] !== i && (e[r] = i)
                    }
                    return e
                }
            }, {
                key: "saveConsents",
                value: function(e) {
                    var t = encodeURIComponent(JSON.stringify(this.consents));
                    this.store.set(t),
                    this.confirmed = !0,
                    this.changed = !1;
                    var n = this.changedConsents();
                    this.savedConsents = nn({}, this.consents),
                    this.notify("saveConsents", {
                        changes: n,
                        consents: this.consents,
                        type: e
                    })
                }
            }, {
                key: "applyConsents",
                value: function(e) {
                    for (var t = 0, n = 0; n < this.config.apps.length; n++) {
                        var o = this.config.apps[n]
                          , r = this.states[o.name]
                          , i = void 0 !== o.optOut ? o.optOut : this.config.optOut || !1
                          , a = void 0 !== o.required ? o.required : this.config.required || !1
                          , c = this.confirmed || i || e
                          , s = this.getConsent(o.name) && c || a;
                        r !== s && (t++,
                        e || (this.updateAppElements(o, s),
                        this.updateAppCookies(o, s),
                        void 0 !== o.callback && o.callback(s, o),
                        void 0 !== this.config.callback && this.config.callback(s, o),
                        this.states[o.name] = s))
                    }
                    return this.notify("applyConsents", t),
                    t
                }
            }, {
                key: "updateAppElements",
                value: function(e, t) {
                    if (t) {
                        if (e.onlyOnce && this.executedOnce[e.name])
                            return;
                        this.executedOnce[e.name] = !0
                    }
                    for (var n = document.querySelectorAll("[data-name='" + e.name + "']"), o = 0; o < n.length; o++) {
                        var r = n[o]
                          , i = r.parentElement
                          , a = Mt(r)
                          , c = a.type
                          , s = ["href", "src"];
                        if ("SCRIPT" === r.tagName) {
                            if (r.type === c) {
                                console.debug("Skipping script for app ".concat(e.name, ", as it already has the correct type..."));
                                continue
                            }
                            var l, u = document.createElement("script"), p = Xt(r.attributes);
                            try {
                                for (p.s(); !(l = p.n()).done; ) {
                                    var f = l.value;
                                    u.setAttribute(f.name, f.value)
                                }
                            } catch (e) {
                                p.e(e)
                            } finally {
                                p.f()
                            }
                            u.innerText = r.innerText,
                            u.text = r.text,
                            t ? (u.type = c,
                            void 0 !== a.src && (u.src = a.src)) : u.type = "text/plain",
                            i.insertBefore(u, r),
                            i.removeChild(r)
                        } else {
                            if (t) {
                                var d, m = Xt(s);
                                try {
                                    for (m.s(); !(d = m.n()).done; ) {
                                        var v = d.value
                                          , y = a[v];
                                        void 0 !== y && (void 0 === a["original-" + v] && (a["original-" + v] = r[v]),
                                        r[v] = y)
                                    }
                                } catch (e) {
                                    m.e(e)
                                } finally {
                                    m.f()
                                }
                                void 0 !== a.title && (r.title = a.title),
                                void 0 !== a["original-display"] && (r.style.display = a["original-display"])
                            } else {
                                void 0 !== a.title && r.removeAttribute("title"),
                                "true" === a.hide && (void 0 === a["original-display"] && (a["original-display"] = r.style.display),
                                r.style.display = "none");
                                var h, g = Xt(s);
                                try {
                                    for (g.s(); !(h = g.n()).done; ) {
                                        var b = h.value;
                                        void 0 !== a[b] && void 0 !== a["original-" + b] && (r[b] = a["original-" + b])
                                    }
                                } catch (e) {
                                    g.e(e)
                                } finally {
                                    g.f()
                                }
                            }
                            It(a, r)
                        }
                    }
                }
            }, {
                key: "updateAppCookies",
                value: function(e, t) {
                    if (!t && void 0 !== e.cookies && e.cookies.length > 0)
                        for (var n = Tt(), o = 0; o < e.cookies.length; o++) {
                            var r = e.cookies[o]
                              , i = void 0
                              , a = void 0;
                            if (r instanceof Array) {
                                var c = Qt(r, 3);
                                r = c[0],
                                i = c[1],
                                a = c[2]
                            } else if (r instanceof Object && !(r instanceof RegExp)) {
                                var s = r;
                                r = s.pattern,
                                i = s.path,
                                a = s.domain
                            }
                            if (void 0 !== r) {
                                r instanceof RegExp || (r = new RegExp("^" + r.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") + "$"));
                                for (var l = 0; l < n.length; l++) {
                                    var u = n[l];
                                    null !== r.exec(u.name) && (console.debug("Deleting cookie:", u.name, "Matched pattern:", r, "Path:", i, "Domain:", a),
                                    Rt(u.name, i, a))
                                }
                            }
                        }
                }
            }, {
                key: "_checkConsents",
                value: function() {
                    for (var e = !0, t = new Set(this.config.apps.map((function(e) {
                        return e.name
                    }
                    ))), n = new Set(Object.keys(this.consents)), o = 0, r = Object.keys(this.consents); o < r.length; o++) {
                        var i = r[o];
                        t.has(i) || delete this.consents[i]
                    }
                    var a, c = Xt(this.config.apps);
                    try {
                        for (c.s(); !(a = c.n()).done; ) {
                            var s = a.value;
                            n.has(s.name) || (this.consents[s.name] = this.getDefaultConsent(s),
                            e = !1)
                        }
                    } catch (e) {
                        c.e(e)
                    } finally {
                        c.f()
                    }
                    this.confirmed = e,
                    e || (this.changed = !0)
                }
            }, {
                key: "storageMethod",
                get: function() {
                    return this.config.storageMethod || "cookie"
                }
            }, {
                key: "storageName",
                get: function() {
                    return this.config.storageName || this.config.cookieName || "klaro"
                }
            }, {
                key: "cookieDomain",
                get: function() {
                    return this.config.cookieDomain || void 0
                }
            }, {
                key: "cookieExpiresAfterDays",
                get: function() {
                    return this.config.cookieExpiresAfterDays || 120
                }
            }, {
                key: "defaultConsents",
                get: function() {
                    for (var e = {}, t = 0; t < this.config.apps.length; t++) {
                        var n = this.config.apps[t];
                        e[n.name] = this.getDefaultConsent(n)
                    }
                    return e
                }
            }]) && rn(t.prototype, n),
            o && rn(t, o),
            e
        }();
        n(174);
        function cn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function sn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? cn(Object(n), !0).forEach((function(t) {
                    ln(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ln(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function un(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        var pn = function() {
            function e(t, n, o) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.url = t,
                this.id = n,
                this.opts = Object.assign({}, o)
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "getLocationData",
                value: function(e) {
                    var t = e.records || {};
                    return {
                        pathname: void 0 === t.savePathname || t.savePathname ? location.pathname : void 0,
                        port: "" !== location.port ? parseInt(location.port) : 0,
                        hostname: location.hostname,
                        protocol: location.protocol.slice(0, location.protocol.length - 1)
                    }
                }
            }, {
                key: "getUserData",
                value: function() {
                    return {
                        client_version: Ln(),
                        client_name: "klaro:web"
                    }
                }
            }, {
                key: "getBaseConsentData",
                value: function(e) {
                    return {
                        location_data: this.getLocationData(e),
                        user_data: this.getUserData(e)
                    }
                }
            }, {
                key: "update",
                value: function(e, t, n) {
                    if ("saveConsents" === t) {
                        if ("save" === n.type && 0 === Object.keys(n.changes).length)
                            return;
                        var o = sn(sn({}, this.getBaseConsentData(e.config)), {}, {
                            consent_data: {
                                consents: n.consents,
                                changes: "save" === n.type ? n.changes : void 0,
                                type: n.type,
                                config: e.config.id
                            }
                        });
                        this.submitConsentData(o)
                    } else if ("showNotice" === t) {
                        var r = sn(sn({}, this.getBaseConsentData(n.config)), {}, {
                            consent_data: {
                                consents: {},
                                changes: {},
                                type: "show",
                                config: n.config.id
                            }
                        });
                        this.submitConsentData(r)
                    }
                }
            }, {
                key: "apiRequest",
                value: function(e, t, n, o) {
                    var r = this;
                    return new Promise((function(i, a) {
                        var c, s, l = new XMLHttpRequest;
                        l.addEventListener("load", (function() {
                            var e = JSON.parse(l.response);
                            l.status < 200 || l.status >= 300 ? (e.status = l.status,
                            a(e)) : i(e)
                        }
                        )),
                        l.addEventListener("error", (function() {
                            a({
                                status: 0,
                                xhr: l
                            })
                        }
                        )),
                        void 0 !== n && ("GET" === e ? t += "?" + (s = n,
                        "?" + Object.keys(s).map((function(e) {
                            return e + "=" + encodeURIComponent(s[e])
                        }
                        )).join("&")) : c = JSON.stringify(n)),
                        l.open(e, r.url + t),
                        void 0 !== c && l.setRequestHeader("Content-Type", o || "application/json;charset=UTF-8"),
                        l.send(c)
                    }
                    ))
                }
            }, {
                key: "submitConsentData",
                value: function(e) {
                    return this.apiRequest("POST", "/v1/privacy-managers/" + this.id + "/submit", e, "text/plain;charset=UTF-8")
                }
            }, {
                key: "loadConfig",
                value: function(e) {
                    return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/config.json?name=" + e + (this.opts.testing ? "&testing=true" : ""))
                }
            }, {
                key: "loadConfigs",
                value: function() {
                    return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/configs.json" + (this.opts.testing ? "&testing=true" : ""))
                }
            }]) && un(t.prototype, n),
            o && un(t, o),
            e
        }();
        function fn(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return dn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return dn(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function dn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function mn(e) {
            for (var t = new Map([]), n = 0, o = Object.keys(e); n < o.length; n++) {
                var r = o[n]
                  , i = e[r];
                "string" == typeof r && ("string" == typeof i || null === i ? t.set(r, i) : t.set(r, mn(i)))
            }
            return t
        }
        function vn(e, t, n, o) {
            var r = function(e, t, n) {
                if (n instanceof Map) {
                    var o = new Map([]);
                    vn(o, n, !0, !1),
                    e.set(t, o)
                } else
                    e.set(t, n)
            };
            if (!(t instanceof Map && e instanceof Map))
                throw new Error("Parameters are not maps!");
            void 0 === n && (n = !0),
            void 0 === o && (o = !1),
            o && (e = new e.constructor(e));
            var i, a = fn(t.keys());
            try {
                for (a.s(); !(i = a.n()).done; ) {
                    var c = i.value
                      , s = t.get(c)
                      , l = e.get(c);
                    if (e.has(c))
                        if (s instanceof Map && l instanceof Map)
                            e.set(c, vn(l, s, n, o));
                        else {
                            if (!n)
                                continue;
                            r(e, c, s)
                        }
                    else
                        r(e, c, s)
                }
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
            return e
        }
        var yn;
        n(180);
        function hn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function gn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? hn(Object(n), !0).forEach((function(t) {
                    bn(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function bn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function kn(e) {
            return function(e) {
                if (Array.isArray(e))
                    return xn(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || wn(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function _n(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = wn(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function wn(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return xn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xn(e, t) : void 0
            }
        }
        function xn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        var Sn = new Map([])
          , jn = {}
          , On = {};
        function An(e, t) {
            return (e.elementID || "klaro") + (t ? "-ide" : "")
        }
        function Pn(e, t) {
            var n = An(e, t)
              , o = document.getElementById(n);
            return null === o && ((o = document.createElement("div")).id = n,
            document.body.appendChild(o)),
            o
        }
        function zn(e, t) {
            if (void 0 === jn[e] ? jn[e] = [t] : jn[e].push(t),
            void 0 !== On[e]) {
                var n, o = _n(On[e]);
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var r = n.value;
                        if (!1 === t.apply(void 0, kn(r)))
                            break
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            }
        }
        function En(e) {
            for (var t = jn[e], n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                o[r - 1] = arguments[r];
            if (void 0 === On[e] ? On[e] = [o] : On[e].push(o),
            void 0 !== t) {
                var i, a = _n(t);
                try {
                    for (a.s(); !(i = a.n()).done; ) {
                        var c = i.value;
                        if (!0 === c.apply(void 0, o))
                            return !0
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
            }
        }
        function Cn(e) {
            var t = new Map([]);
            return vn(t, Sn),
            vn(t, mn(e.translations || {})),
            t
        }
        void 0 === window.btoa && (window.btoa = !1);
        var Dn = 1;
        function Tn(e, t) {
            if (void 0 !== e) {
                En("render", e, t = t || {});
                var n = 0;
                t.show && (n = Dn++);
                var o = Pn(e)
                  , r = Un(e);
                void 0 !== t.api && r.watch(t.api);
                var i = tt(e.lang)
                  , a = Cn(e);
                return oe(se(Dt, {
                    t: function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                            n[o] = arguments[o];
                        return ot.apply(void 0, [a, i, e.fallbackLang || "zz"].concat(n))
                    },
                    lang: i,
                    manager: r,
                    config: e,
                    testing: t.testing,
                    modal: t.modal,
                    api: t.api,
                    show: n
                }), o)
            }
        }
        function Rn(e) {
            /complete|interactive|loaded/.test(document.readyState) ? e() : window.addEventListener("DOMContentLoaded", e)
        }
        function Mn(e) {
            var t = function(e) {
                if (null !== document.currentScript)
                    return document.currentScript;
                for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (o.src.includes(e))
                        return o
                }
                return null
            }("klaro")
              , n = new Map(decodeURI(location.hash.slice(1)).split("&").map((function(e) {
                return e.split("=")
            }
            )).map((function(e) {
                return 1 === e.length ? [e[0], !0] : e
            }
            )))
              , o = function(e) {
                var t = gn(gn({}, e), {}, {
                    testing: n.get("klaro-testing")
                });
                yn.noAutoLoad || Tn(yn, t)
            };
            if (void 0 !== e)
                yn = e,
                Rn((function() {
                    return o({})
                }
                ));
            else if (null !== t) {
                var r = function(e) {
                    var t = e.getAttribute("data-klaro-id");
                    if (null !== t)
                        return t;
                    var n = /.*\/privacy-managers\/([a-f0-9]+)\/klaro.js/.exec(e.src);
                    return null !== n ? n[1] : null
                }(t)
                  , i = function(e) {
                    var t = e.getAttribute("data-klaro-api-url");
                    if (null !== t)
                        return t;
                    var n = /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.js/.exec(e.src);
                    return null !== n ? n[1] : null
                }(t)
                  , a = function(e, t) {
                    if (e.has("klaro-config"))
                        return e.get("klaro-config");
                    var n = t.getAttribute("data-klaro-config");
                    return null !== n ? n : "default"
                }(n, t);
                if (null !== r) {
                    var c = new pn(i,r,{
                        testing: n.get("klaro-testing")
                    });
                    c.loadConfig(a).then((function(e) {
                        !0 !== En("apiConfigsLoaded", [e], c) && (yn = e,
                        Rn((function() {
                            return o({
                                api: c
                            })
                        }
                        )))
                    }
                    )).catch((function(e) {
                        console.error(e, "cannot load Klaro configs"),
                        En("apiConfigsFailed", e)
                    }
                    ))
                } else {
                    var s = t.getAttribute("data-klaro-config") || "klaroConfig";
                    void 0 !== (yn = window[s]) && Rn((function() {
                        return o({})
                    }
                    ))
                }
            }
            n.has("klaro-ide") && function(e) {
                var t = /^(.*)(\/[^/]+)$/.exec(e.src)[1] || ""
                  , n = document.createElement("script");
                n.src = "" !== t ? t + "/ide.js" : "ide.js",
                n.type = "application/javascript";
                var o, r = _n(n.attributes);
                try {
                    for (r.s(); !(o = r.n()).done; ) {
                        var i = o.value;
                        n.setAttribute(i.name, i.value)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                document.head.appendChild(n)
            }(t)
        }
        function In(e, t, n) {
            return Tn(e = e || yn, {
                show: !0,
                modal: t,
                api: n
            }),
            !1
        }
        var Nn = {};
        function qn() {
            for (var e in Object.keys(Nn))
                delete Nn[e]
        }
        function Un(e) {
            var t = (e = e || yn).storageName || e.cookieName || "default";
            return void 0 === Nn[t] && (Nn[t] = new an(e)),
            Nn[t]
        }
        function Ln() {
            return "v" === "v0.6.17"[0] ? "v0.6.17".slice(1) : "v0.6.17"
        }
        var Fn = n(130)
          , Hn = n.n(Fn)
          , Bn = n(131)
          , Wn = n.n(Bn)
          , Kn = n(132)
          , Vn = n.n(Kn)
          , $n = n(133)
          , Gn = n.n($n)
          , Zn = n(134)
          , Yn = n.n(Zn)
          , Xn = n(135)
          , Qn = n.n(Xn)
          , Jn = n(136)
          , eo = n.n(Jn)
          , to = n(137)
          , no = n.n(to)
          , oo = n(138)
          , ro = n.n(oo)
          , io = n(139)
          , ao = n.n(io)
          , co = n(140)
          , so = n.n(co)
          , lo = n(141)
          , uo = n.n(lo)
          , po = n(142)
          , fo = n.n(po)
          , mo = n(143)
          , vo = n.n(mo)
          , yo = n(144)
          , ho = n.n(yo)
          , go = n(145)
          , bo = n.n(go)
          , ko = n(146)
          , _o = n.n(ko)
          , wo = n(147)
          , xo = n.n(wo)
          , So = n(148)
          , jo = n.n(So)
          , Oo = n(149)
          , Ao = n.n(Oo)
          , Po = n(150)
          , zo = n.n(Po)
          , Eo = n(151)
          , Co = n.n(Eo)
          , Do = mn({
            ca: Vn.a,
            da: Gn.a,
            de: Yn.a,
            el: Qn.a,
            en: eo.a,
            zh: Hn.a,
            pt: Wn.a,
            es: no.a,
            fi: ro.a,
            fr: ao.a,
            hu: so.a,
            hr: uo.a,
            it: fo.a,
            nl: vo.a,
            no: ho.a,
            ro: bo.a,
            sr: _o.a,
            sr_cyrl: xo.a,
            sv: jo.a,
            tr: Ao.a,
            pl: zo.a,
            ru: Co.a
        });
        vn(Sn, Do),
        Mn()
    }
    ])
}
));