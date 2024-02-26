define(function() {
    "use strict";

    function n() {
        var n = r;
        a && n.length && (r = [], function(n) {
            var e;
            for (e = 0; e < n.length; e += 1) n[e](l)
        }(n))
    }

    function e() {
        a || (a = !0, i && clearInterval(i), n())
    }

    function t(n) {
        return a ? n(l) : r.push(n), t
    }
    var o, d, i, c = "undefined" != typeof window && window.document,
        a = !c,
        l = c ? document : null,
        r = [];
    if (c) {
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1);
        else if (window.attachEvent) {
            window.attachEvent("onload", e), d = document.createElement("div");
            try {
                o = null === window.frameElement
            } catch (n) {}
            d.doScroll && o && window.external && (i = setInterval(function() {
                try {
                    d.doScroll(), e()
                } catch (n) {}
            }, 30))
        }
        "complete" === document.readyState && e()
    }
    return t.version = "2.0.1", t.load = function(n, e, o, d) {
        d.isBuild ? o(null) : t(o)
    }, t
});