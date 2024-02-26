! function(e, r) {
    if ("function" == typeof define && define.amd) define(["exports", "jquery"], function(e, i) {
        return r(e, i)
    });
    else if ("undefined" != typeof exports) {
        var i = require("jquery");
        r(exports, i)
    } else r(e, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function(e, r) {
    var i = {
        validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
        key: /[a-z0-9_]+|(?=\[\])/gi,
        push: /^$/,
        fixed: /^\d+$/,
        named: /^[a-z0-9_]+$/i
    };

    function t(e, t) {
        var n = {},
            a = {};

        function s(e, r, i) {
            return e[r] = i, e
        }

        function u(e, r) {
            for (var t, n = e.match(i.key); void 0 !== (t = n.pop());) {
                if (i.push.test(t)) r = s([], f(e.replace(/\[\]$/, "")), r);
                else i.fixed.test(t) ? r = s([], t, r) : i.named.test(t) && (r = s({}, t, r))
            }
            return r
        }

        function f(e) {
            return void 0 === a[e] && (a[e] = 0), a[e]++
        }

        function o(e) {
            switch (r('[name="' + e.name + '"]', t).attr("type")) {
                case "checkbox":
                    return "on" === e.value || e.value;
                default:
                    return e.value
            }
        }

        function d() {
            return n
        }
        this.addPair = function(r) {
            if (!i.validate.test(r.name)) {
                var t = r.name;
                r.name = "temp", n = e.extend(!0, n, u(r.name, o(r)));
                try {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(n, r.name)), delete n[r.name]
                } catch (e) {}
                return this
            }
            var a = u(r.name, o(r));
            return n = e.extend(!0, n, a), this
        }, this.addPairs = function(r) {
            if (!e.isArray(r)) throw new Error("formSerializer.addPairs expects an Array");
            for (var i = 0, t = r.length; i < t; i++) this.addPair(r[i]);
            return this
        }, this.serialize = d, this.serializeJSON = function() {
            return JSON.stringify(d())
        }
    }
    return t.patterns = i, t.serializeObject = function() {
        return new t(r, this).addPairs(this.serializeArray()).serialize()
    }, t.serializeJSON = function() {
        return new t(r, this).addPairs(this.serializeArray()).serializeJSON()
    }, void 0 !== r.fn && (r.fn.serializeObject = t.serializeObject, r.fn.serializeJSON = t.serializeJSON), e.FormSerializer = t, t
});