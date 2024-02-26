var requirejs, require, define;
! function(W) {
    function D(e) {
        return "[object Function]" === M.call(e)
    }

    function E(e) {
        return "[object Array]" === M.call(e)
    }

    function t(e, t) {
        var i;
        if (e)
            for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
    }

    function N(e, t) {
        var i;
        if (e)
            for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
    }

    function A(e, t) {
        for (var i in e)
            if (e.hasOwnProperty(i) && t(e[i], i)) break
    }

    function O(e, t, i, n) {
        return t && A(t, function(t, r) {
            !i && F.call(e, r) || (n && "string" != typeof t ? (e[r] || (e[r] = {}), O(e[r], t, i, n)) : e[r] = t)
        }), e
    }

    function r(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function X(e) {
        if (!e) return e;
        var i = W;
        return t(e.split("."), function(e) {
            i = i[e]
        }), i
    }

    function G(e, t, i, n) {
        return (t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e)).requireType = e, t.requireModules = n, i && (t.originalError = i), t
    }

    function ba() {
        return H && "interactive" === H.readyState ? H : (N(document.getElementsByTagName("script"), function(e) {
            if ("interactive" === e.readyState) return H = e
        }), H)
    }
    var g, s, u, y, q, B, H, I, Y, Z, ca = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        da = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        $ = /\.js$/,
        ea = /^\.\//;
    s = Object.prototype;
    var M = s.toString,
        F = s.hasOwnProperty,
        fa = Array.prototype.splice,
        v = !("undefined" == typeof window || !navigator || !document),
        aa = !v && "undefined" != typeof importScripts,
        ga = v && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        R = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        w = {},
        n = {},
        P = [],
        J = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (D(requirejs)) return;
            n = requirejs, requirejs = void 0
        }
        void 0 !== require && !D(require) && (n = require, require = void 0), g = requirejs = function(e, t, i, n) {
            var r, a = "_";
            return !E(e) && "string" != typeof e && (r = e, E(t) ? (e = t, t = i, i = n) : e = []), r && r.context && (a = r.context), (n = w[a]) || (n = w[a] = g.s.newContext(a)), r && n.configure(r), n.require(e, t, i)
        }, g.config = function(e) {
            return g(e)
        }, g.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = g), g.version = "2.1.1", g.jsExtRegExp = /^\/|:|\?|\.js$/, g.isBrowser = v, s = g.s = {
            contexts: w,
            newContext: function(e) {
                function i(e, t, i) {
                    var n, r, a, o, s, u, c, d = t && t.split("/");
                    n = d;
                    var f = M.map,
                        l = f && f["*"];
                    if (e && "." === e.charAt(0))
                        if (t) {
                            for (t = e = (n = M.pkgs[t] ? d = [t] : d.slice(0, d.length - 1)).concat(e.split("/")), n = 0; t[n]; n += 1)
                                if ("." === (r = t[n])) t.splice(n, 1), n -= 1;
                                else if (".." === r) {
                                if (1 === n && (".." === t[2] || ".." === t[0])) break;
                                n > 0 && (t.splice(n - 1, 2), n -= 2)
                            }
                            n = M.pkgs[t = e[0]], e = e.join("/"), n && e === t + "/" + n.main && (e = t)
                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                    if (i && (d || l) && f) {
                        for (n = (t = e.split("/")).length; n > 0; n -= 1) {
                            if (a = t.slice(0, n).join("/"), d)
                                for (r = d.length; r > 0; r -= 1)
                                    if ((i = f[d.slice(0, r).join("/")]) && (i = i[a])) {
                                        o = i, s = n;
                                        break
                                    }
                            if (o) break;
                            !u && l && l[a] && (u = l[a], c = n)
                        }!o && u && (o = u, s = c), o && (t.splice(0, s, o), e = t.join("/"))
                    }
                    return e
                }

                function n(e) {
                    v && t(document.getElementsByTagName("script"), function(t) {
                        if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName) return t.parentNode.removeChild(t), !0
                    })
                }

                function a(e) {
                    var t = M.paths[e];
                    if (t && E(t) && t.length > 1) return n(e), t.shift(), q.require.undef(e), q.require([e]), !0
                }

                function o(e) {
                    var t, i = e ? e.indexOf("!") : -1;
                    return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
                }

                function s(e, t, n, r) {
                    var a, s, u = null,
                        c = t ? t.name : null,
                        d = e,
                        f = !0,
                        l = "";
                    return e || (f = !1, e = "_@r" + (B += 1)), u = (e = o(e))[0], e = e[1], u && (u = i(u, c, r), s = S[u]), e && (u ? l = s && s.normalize ? s.normalize(e, function(e) {
                        return i(e, c, r)
                    }) : i(e, c, r) : (u = (e = o(l = i(e, c, r)))[0], l = e[1], n = !0, a = q.nameToUrl(l))), {
                        prefix: u,
                        name: l,
                        parentMap: t,
                        unnormalized: !!(n = !u || s || n ? "" : "_unnormalized" + (C += 1)),
                        url: a,
                        originalName: d,
                        isDefine: f,
                        id: (u ? u + "!" + l : l) + n
                    }
                }

                function u(e) {
                    var t = e.id,
                        i = T[t];
                    return i || (i = T[t] = new q.Module(e)), i
                }

                function c(e, t, i) {
                    var n = e.id,
                        r = T[n];
                    !F.call(S, n) || r && !r.defineEmitComplete ? u(e).on(t, i) : "defined" === t && i(S[n])
                }

                function d(e, i) {
                    var n = e.requireModules,
                        r = !1;
                    i ? i(e) : (t(n, function(t) {
                        (t = T[t]) && (t.error = e, t.events.error && (r = !0, t.emit("error", e)))
                    }), r || g.onError(e))
                }

                function f() {
                    P.length && (fa.apply(j, [j.length - 1, 0].concat(P)), P = [])
                }

                function l() {
                    var e, i, r, o, s = (r = 1e3 * M.waitSeconds) && q.startTime + r < (new Date).getTime(),
                        u = [],
                        c = [],
                        f = !1,
                        p = !0;
                    if (!b) {
                        if (b = !0, A(T, function(t) {
                                if (e = t.map, i = e.id, t.enabled && (e.isDefine || c.push(t), !t.error))
                                    if (!t.inited && s) a(i) ? f = o = !0 : (u.push(i), n(i));
                                    else if (!t.inited && t.fetched && e.isDefine && (f = !0, !e.prefix)) return p = !1
                            }), s && u.length) return (r = G("timeout", "Load timeout for modules: " + u, null, u)).contextName = q.contextName, d(r);
                        p && t(c, function(e) {
                            ! function e(i, n, r) {
                                var a = i.map.id;
                                i.error ? i.emit("error", i.error) : (n[a] = !0, t(i.depMaps, function(t, a) {
                                    var o = t.id,
                                        s = T[o];
                                    s && !i.depMatched[a] && !r[o] && (n[o] ? (i.defineDep(a, S[o]), i.check()) : e(s, n, r))
                                }), r[a] = !0)
                            }(e, {}, {})
                        }), s && !o || !f || !v && !aa || k || (k = setTimeout(function() {
                            k = 0, l()
                        }, 50)), b = !1
                    }
                }

                function p(e) {
                    u(s(e[0], null, !0)).init(e[1], e[2])
                }

                function h(e) {
                    e = e.currentTarget || e.srcElement;
                    var t = q.onScriptLoad;
                    return e.detachEvent && !R ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = q.onScriptError, e.detachEvent && !R || e.removeEventListener("error", t, !1), {
                        node: e,
                        id: e && e.getAttribute("data-requiremodule")
                    }
                }

                function m() {
                    var e;
                    for (f(); j.length;) {
                        if (null === (e = j.shift())[0]) return d(G("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                        p(e)
                    }
                }
                var b, x, q, y, k, M = {
                        waitSeconds: 7,
                        baseUrl: "./",
                        paths: {},
                        pkgs: {},
                        shim: {},
                        map: {},
                        config: {}
                    },
                    T = {},
                    w = {},
                    j = [],
                    S = {},
                    N = {},
                    B = 1,
                    C = 1;
                return y = {
                    require: function(e) {
                        return e.require ? e.require : e.require = q.makeRequire(e.map)
                    },
                    exports: function(e) {
                        if (e.usingExports = !0, e.map.isDefine) return e.exports ? e.exports : e.exports = S[e.map.id] = {}
                    },
                    module: function(e) {
                        return e.module ? e.module : e.module = {
                            id: e.map.id,
                            uri: e.map.url,
                            config: function() {
                                return M.config && M.config[e.map.id] || {}
                            },
                            exports: S[e.map.id]
                        }
                    }
                }, (x = function(e) {
                    this.events = w[e.id] || {}, this.map = e, this.shim = M.shim[e.id], this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
                }).prototype = {
                    init: function(e, t, i, n) {
                        n = n || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = r(this, function(e) {
                            this.emit("error", e)
                        })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = n.ignore, n.enabled || this.enabled ? this.enable() : this.check())
                    },
                    defineDep: function(e, t) {
                        this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
                    },
                    fetch: function() {
                        if (!this.fetched) {
                            this.fetched = !0, q.startTime = (new Date).getTime();
                            var e = this.map;
                            if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                            q.makeRequire(this.map, {
                                enableBuildCallback: !0
                            })(this.shim.deps || [], r(this, function() {
                                return e.prefix ? this.callPlugin() : this.load()
                            }))
                        }
                    },
                    load: function() {
                        var e = this.map.url;
                        N[e] || (N[e] = !0, q.load(this.map.id, e))
                    },
                    check: function() {
                        if (this.enabled && !this.enabling) {
                            var e, t, i = this.map.id;
                            t = this.depExports;
                            var n = this.exports,
                                r = this.factory;
                            if (this.inited) {
                                if (this.error) this.emit("error", this.error);
                                else if (!this.defining) {
                                    if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                        if (D(r)) {
                                            if (this.events.error) try {
                                                n = q.execCb(i, r, t, n)
                                            } catch (t) {
                                                e = t
                                            } else n = q.execCb(i, r, t, n);
                                            if (this.map.isDefine && ((t = this.module) && void 0 !== t.exports && t.exports !== this.exports ? n = t.exports : void 0 === n && this.usingExports && (n = this.exports)), e) return e.requireMap = this.map, e.requireModules = [this.map.id], e.requireType = "define", d(this.error = e)
                                        } else n = r;
                                        this.exports = n, this.map.isDefine && !this.ignore && (S[i] = n, g.onResourceLoad) && g.onResourceLoad(q, this.map, this.depMaps), delete T[i], this.defined = !0
                                    }
                                    this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                                }
                            } else this.fetch()
                        }
                    },
                    callPlugin: function() {
                        var e = this.map,
                            t = e.id,
                            n = s(e.prefix);
                        this.depMaps.push(n), c(n, "defined", r(this, function(n) {
                            var a, o;
                            o = this.map.name;
                            var f = this.map.parentMap ? this.map.parentMap.name : null,
                                l = q.makeRequire(e.parentMap, {
                                    enableBuildCallback: !0,
                                    skipMap: !0
                                });
                            this.map.unnormalized ? (n.normalize && (o = n.normalize(o, function(e) {
                                return i(e, f, !0)
                            }) || ""), c(n = s(e.prefix + "!" + o, this.map.parentMap), "defined", r(this, function(e) {
                                this.init([], function() {
                                    return e
                                }, null, {
                                    enabled: !0,
                                    ignore: !0
                                })
                            })), (o = T[n.id]) && (this.depMaps.push(n), this.events.error && o.on("error", r(this, function(e) {
                                this.emit("error", e)
                            })), o.enable())) : ((a = r(this, function(e) {
                                this.init([], function() {
                                    return e
                                }, null, {
                                    enabled: !0
                                })
                            })).error = r(this, function(e) {
                                this.inited = !0, this.error = e, e.requireModules = [t], A(T, function(e) {
                                    0 === e.map.id.indexOf(t + "_unnormalized") && delete T[e.map.id]
                                }), d(e)
                            }), a.fromText = r(this, function(t, i) {
                                var n = e.name,
                                    r = s(n),
                                    o = J;
                                i && (t = i), o && (J = !1), u(r);
                                try {
                                    g.exec(t)
                                } catch (e) {
                                    throw Error("fromText eval for " + n + " failed: " + e)
                                }
                                o && (J = !0), this.depMaps.push(r), q.completeLoad(n), l([n], a)
                            }), n.load(e.name, l, a, M))
                        })), q.enable(n, this), this.pluginMaps[n.id] = n
                    },
                    enable: function() {
                        this.enabling = this.enabled = !0, t(this.depMaps, r(this, function(e, t) {
                            var i, n;
                            if ("string" == typeof e) {
                                if (e = s(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, i = y[e.id]) return void(this.depExports[t] = i(this));
                                this.depCount += 1, c(e, "defined", r(this, function(e) {
                                    this.defineDep(t, e), this.check()
                                })), this.errback && c(e, "error", this.errback)
                            }
                            i = e.id, n = T[i], !y[i] && n && !n.enabled && q.enable(e, this)
                        })), A(this.pluginMaps, r(this, function(e) {
                            var t = T[e.id];
                            t && !t.enabled && q.enable(e, this)
                        })), this.enabling = !1, this.check()
                    },
                    on: function(e, t) {
                        var i = this.events[e];
                        i || (i = this.events[e] = []), i.push(t)
                    },
                    emit: function(e, i) {
                        t(this.events[e], function(e) {
                            e(i)
                        }), "error" === e && delete this.events[e]
                    }
                }, (q = {
                    config: M,
                    contextName: e,
                    registry: T,
                    defined: S,
                    urlFetched: N,
                    defQueue: j,
                    Module: x,
                    makeModuleMap: s,
                    nextTick: g.nextTick,
                    configure: function(e) {
                        e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                        var i = M.pkgs,
                            n = M.shim,
                            r = {
                                paths: !0,
                                config: !0,
                                map: !0
                            };
                        A(e, function(e, t) {
                            r[t] ? "map" === t ? O(M[t], e, !0, !0) : O(M[t], e, !0) : M[t] = e
                        }), e.shim && (A(e.shim, function(e, t) {
                            E(e) && (e = {
                                deps: e
                            }), e.exports && !e.exportsFn && (e.exportsFn = q.makeShimExports(e)), n[t] = e
                        }), M.shim = n), e.packages && (t(e.packages, function(e) {
                            i[(e = "string" == typeof e ? {
                                name: e
                            } : e).name] = {
                                name: e.name,
                                location: e.location || e.name,
                                main: (e.main || "main").replace(ea, "").replace($, "")
                            }
                        }), M.pkgs = i), A(T, function(e, t) {
                            e.inited || e.map.unnormalized || (e.map = s(t))
                        }), (e.deps || e.callback) && q.require(e.deps || [], e.callback)
                    },
                    makeShimExports: function(e) {
                        return function() {
                            var t;
                            return e.init && (t = e.init.apply(W, arguments)), t || X(e.exports)
                        }
                    },
                    makeRequire: function(t, n) {
                        function r(i, a, o) {
                            var c, f;
                            return n.enableBuildCallback && a && D(a) && (a.__requireJsBuild = !0), "string" == typeof i ? D(a) ? d(G("requireargs", "Invalid require call"), o) : t && y[i] ? y[i](T[t.id]) : g.get ? g.get(q, i, t) : (c = (c = s(i, t, !1, !0)).id, F.call(S, c) ? S[c] : d(G("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (m(), q.nextTick(function() {
                                m(), (f = u(s(null, t))).skipMap = n.skipMap, f.init(i, a, o, {
                                    enabled: !0
                                }), l()
                            }), r)
                        }
                        return n = n || {}, O(r, {
                            isBrowser: v,
                            toUrl: function(e) {
                                var n = e.lastIndexOf("."),
                                    r = null;
                                return -1 !== n && (r = e.substring(n, e.length), e = e.substring(0, n)), q.nameToUrl(i(e, t && t.id, !0), r)
                            },
                            defined: function(e) {
                                return e = s(e, t, !1, !0).id, F.call(S, e)
                            },
                            specified: function(e) {
                                return e = s(e, t, !1, !0).id, F.call(S, e) || F.call(T, e)
                            }
                        }), t || (r.undef = function(e) {
                            f();
                            var i = s(e, t, !0),
                                n = T[e];
                            delete S[e], delete N[i.url], delete w[e], n && (n.events.defined && (w[e] = n.events), delete T[e])
                        }), r
                    },
                    enable: function(e) {
                        T[e.id] && u(e).enable()
                    },
                    completeLoad: function(e) {
                        var t, i, n = M.shim[e] || {},
                            r = n.exports;
                        for (f(); j.length;) {
                            if (null === (i = j.shift())[0]) {
                                if (i[0] = e, t) break;
                                t = !0
                            } else i[0] === e && (t = !0);
                            p(i)
                        }
                        if (i = T[e], !t && !S[e] && i && !i.inited) {
                            if (!(!M.enforceDefine || r && X(r))) return a(e) ? void 0 : d(G("nodefine", "No define call for " + e, null, [e]));
                            p([e, n.deps || [], n.exportsFn])
                        }
                        l()
                    },
                    nameToUrl: function(e, t) {
                        var i, n, r, a, o, s;
                        if (g.jsExtRegExp.test(e)) a = e + (t || "");
                        else {
                            for (i = M.paths, n = M.pkgs, o = (a = e.split("/")).length; o > 0; o -= 1) {
                                if (r = n[s = a.slice(0, o).join("/")], s = i[s]) {
                                    E(s) && (s = s[0]), a.splice(0, o, s);
                                    break
                                }
                                if (r) {
                                    i = e === r.name ? r.location + "/" + r.main : r.location, a.splice(0, o, i);
                                    break
                                }
                            }
                            a = a.join("/"), a = ("/" === (a += t || (/\?/.test(a) ? "" : ".js")).charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : M.baseUrl) + a
                        }
                        return M.urlArgs ? a + (-1 === a.indexOf("?") ? "?" : "&") + M.urlArgs : a
                    },
                    load: function(e, t) {
                        g.load(q, e, t)
                    },
                    execCb: function(e, t, i, n) {
                        return t.apply(n, i)
                    },
                    onScriptLoad: function(e) {
                        ("load" === e.type || ga.test((e.currentTarget || e.srcElement).readyState)) && (H = null, e = h(e), q.completeLoad(e.id))
                    },
                    onScriptError: function(e) {
                        var t = h(e);
                        if (!a(t.id)) return d(G("scripterror", "Script error", e, [t.id]))
                    }
                }).require = q.makeRequire(), q
            }
        }, g({}), t(["toUrl", "undef", "defined", "specified"], function(e) {
            g[e] = function() {
                var t = w._;
                return t.require[e].apply(t, arguments)
            }
        }), v && (u = s.head = document.getElementsByTagName("head")[0], y = document.getElementsByTagName("base")[0]) && (u = s.head = y.parentNode), g.onError = function(e) {
            throw e
        }, g.load = function(e, t, i) {
            var n, r = e && e.config || {};
            if (v) return (n = r.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script")).type = r.scriptType || "text/javascript", n.charset = "utf-8", n.async = !0, n.setAttribute("data-requirecontext", e.contextName), n.setAttribute("data-requiremodule", t), !n.attachEvent || n.attachEvent.toString && n.attachEvent.toString().indexOf("[native code") < 0 || R ? (n.addEventListener("load", e.onScriptLoad, !1), n.addEventListener("error", e.onScriptError, !1)) : (J = !0, n.attachEvent("onreadystatechange", e.onScriptLoad)), n.src = i, I = n, y ? u.insertBefore(n, y) : u.appendChild(n), I = null, n;
            aa && (importScripts(i), e.completeLoad(t))
        }, v && N(document.getElementsByTagName("script"), function(e) {
            if (u || (u = e.parentNode), q = e.getAttribute("data-main")) return n.baseUrl || (B = q.split("/"), Y = B.pop(), Z = B.length ? B.join("/") + "/" : "./", n.baseUrl = Z, q = Y), q = q.replace($, ""), n.deps = n.deps ? n.deps.concat(q) : [q], !0
        }), define = function(e, t, i) {
            var n, r;
            "string" != typeof e && (i = t, t = e, e = null), E(t) || (i = t, t = []), !t.length && D(i) && i.length && (i.toString().replace(ca, "").replace(da, function(e, i) {
                t.push(i)
            }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t)), J && (n = I || ba()) && (e || (e = n.getAttribute("data-requiremodule")), r = w[n.getAttribute("data-requirecontext")]), (r ? r.defQueue : P).push([e, t, i])
        }, define.amd = {
            jQuery: !0
        }, g.exec = function(b) {
            return eval(b)
        }, g(n)
    }
}(this);