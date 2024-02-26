! function(t, o) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], o) : "object" == typeof exports ? module.exports = o(require("jquery")) : t.bootbox = o(t.jQuery)
}(this, function t(o, e) {
    "use strict";

    function n(t) {
        var o = f[p.locale];
        return o ? o[t] : f.en[t]
    }

    function a(t, e, n) {
        t.stopPropagation(), t.preventDefault(), o.isFunction(n) && !1 === n(t) || e.modal("hide")
    }

    function r(t, e) {
        var n = 0;
        o.each(t, function(t, o) {
            e(t, o, n++)
        })
    }

    function c(t, e, n) {
        return o.extend(!0, {}, t, function(t, o) {
            var e = t.length,
                n = {};
            if (1 > e || e > 2) throw new Error("Invalid argument length");
            return 2 === e || "string" == typeof t[0] ? (n[o[0]] = t[0], n[o[1]] = t[1]) : n = t[0], n
        }(e, n))
    }

    function i(t, o, e, n) {
        return s(c({
            className: "bootbox-" + t,
            buttons: l.apply(null, o)
        }, n, e), o)
    }

    function l() {
        for (var t = {}, o = 0, e = arguments.length; e > o; o++) {
            var a = arguments[o],
                r = a.toLowerCase(),
                c = a.toUpperCase();
            t[r] = {
                label: n(c)
            }
        }
        return t
    }

    function s(t, o) {
        var n = {};
        return r(o, function(t, o) {
            n[o] = !0
        }), r(t.buttons, function(t) {
            if (n[t] === e) throw new Error("button key " + t + " is not allowed (options are " + o.join("\n") + ")")
        }), t
    }
    var u = {
            dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
            header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
            footer: "<div class='modal-footer'></div>",
            closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
            form: "<form class='bootbox-form'></form>",
            inputs: {
                text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
                textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
                email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
                select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
                checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
                date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
                time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
                number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
                password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
            }
        },
        p = {
            locale: "en",
            backdrop: !0,
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        },
        b = {
            alert: function() {
                var t;
                if ((t = i("alert", ["ok"], ["message", "callback"], arguments)).callback && !o.isFunction(t.callback)) throw new Error("alert requires callback property to be a function when provided");
                return t.buttons.ok.callback = t.onEscape = function() {
                    return !o.isFunction(t.callback) || t.callback()
                }, b.dialog(t)
            },
            confirm: function() {
                var t;
                if ((t = i("confirm", ["cancel", "confirm"], ["message", "callback"], arguments)).buttons.cancel.callback = t.onEscape = function() {
                        return t.callback(!1)
                    }, t.buttons.confirm.callback = function() {
                        return t.callback(!0)
                    }, !o.isFunction(t.callback)) throw new Error("confirm requires a callback");
                return b.dialog(t)
            },
            prompt: function() {
                var t, n, a, i, p, f, d;
                i = o(u.form), n = {
                    className: "bootbox-prompt",
                    buttons: l("cancel", "confirm"),
                    value: "",
                    inputType: "text"
                }, f = (t = s(c(n, arguments, ["title", "callback"]), ["cancel", "confirm"])).show === e || t.show;
                var m = document.createElement("input");
                if (m.setAttribute("type", t.inputType), ["date", "time", "number"][t.inputType] && (t.inputType = m.type), t.message = i, t.buttons.cancel.callback = t.onEscape = function() {
                        return t.callback(null)
                    }, t.buttons.confirm.callback = function() {
                        var e;
                        switch (t.inputType) {
                            case "text":
                            case "textarea":
                            case "email":
                            case "select":
                            case "date":
                            case "time":
                            case "number":
                            case "password":
                                e = p.val();
                                break;
                            case "checkbox":
                                var n = p.find("input:checked");
                                e = [], r(n, function(t, n) {
                                    e.push(o(n).val())
                                })
                        }
                        return t.callback(e)
                    }, t.show = !1, !t.title) throw new Error("prompt requires a title");
                if (!o.isFunction(t.callback)) throw new Error("prompt requires a callback");
                if (!u.inputs[t.inputType]) throw new Error("invalid prompt type");
                switch (p = o(u.inputs[t.inputType]), t.inputType) {
                    case "text":
                    case "textarea":
                    case "email":
                    case "date":
                    case "time":
                    case "number":
                    case "password":
                        p.val(t.value);
                        break;
                    case "select":
                        var h = {};
                        if (!(d = t.inputOptions || []).length) throw new Error("prompt with select requires options");
                        r(d, function(t, n) {
                            var a = p;
                            if (n.value === e || n.text === e) throw new Error("given options in wrong format");
                            n.group && (h[n.group] || (h[n.group] = o("<optgroup/>").attr("label", n.group)), a = h[n.group]), a.append("<option value='" + n.value + "'>" + n.text + "</option>")
                        }), r(h, function(t, o) {
                            p.append(o)
                        }), p.val(t.value);
                        break;
                    case "checkbox":
                        var v = o.isArray(t.value) ? t.value : [t.value];
                        if (!(d = t.inputOptions || []).length) throw new Error("prompt with checkbox requires options");
                        if (!d[0].value || !d[0].text) throw new Error("given options in wrong format");
                        p = o("<div/>"), r(d, function(e, n) {
                            var a = o(u.inputs[t.inputType]);
                            a.find("input").attr("value", n.value), a.find("label").append(n.text), r(v, function(t, o) {
                                o === n.value && a.find("input").prop("checked", !0)
                            }), p.append(a)
                        })
                }
                return t.placeholder && p.attr("placeholder", t.placeholder), t.pattern && p.attr("pattern", t.pattern), i.append(p), i.on("submit", function(t) {
                    t.preventDefault(), a.find(".btn-primary").trigger("click")
                }), (a = b.dialog(t)).off("shown.bs.modal"), a.on("shown.bs.modal", function() {
                    p.focus()
                }), !0 === f && a.modal("show"), a
            }
        };
    b.dialog = function(t) {
        t = function(t) {
            var e, n;
            if ("object" != typeof t) throw new Error("Please supply an object of options");
            if (!t.message) throw new Error("Please specify a message");
            return (t = o.extend({}, p, t)).buttons || (t.buttons = {}), t.backdrop = !!t.backdrop && "static", e = t.buttons, n = function(t) {
                var o, e = 0;
                for (o in t) e++;
                return e
            }(e), r(e, function(t, a, r) {
                if (o.isFunction(a) && (a = e[t] = {
                        callback: a
                    }), "object" !== o.type(a)) throw new Error("button with key " + t + " must be an object");
                a.label || (a.label = t), a.className || (a.className = 2 >= n && r === n - 1 ? "btn-primary" : "btn-default")
            }), t
        }(t);
        var e = o(u.dialog),
            n = e.find(".modal-body"),
            c = t.buttons,
            i = "",
            l = {
                onEscape: t.onEscape
            };
        if (r(c, function(t, o) {
                i += "<button data-bb-handler='" + t + "' type='button' class='btn " + o.className + "'>" + o.label + "</button>", l[t] = o.callback
            }), n.find(".bootbox-body").html(t.message), !0 === t.animate && e.addClass("fade"), t.className && e.addClass(t.className), t.title && n.before(u.header), t.closeButton) {
            var s = o(u.closeButton);
            t.title ? e.find(".modal-header").prepend(s) : s.css("margin-top", "-10px").prependTo(n)
        }
        return t.title && e.find(".modal-title").html(t.title), i.length && (n.after(u.footer), e.find(".modal-footer").html(i)), e.on("hidden.bs.modal", function(t) {
            t.target === this && e.remove()
        }), e.on("shown.bs.modal", function() {
            e.find(".btn-primary:first").focus()
        }), e.on("escape.close.bb", function(t) {
            l.onEscape && a(t, e, l.onEscape)
        }), e.on("click", ".modal-footer button", function(t) {
            var n = o(this).data("bb-handler");
            a(t, e, l[n])
        }), e.on("click", ".bootbox-close-button", function(t) {
            a(t, e, l.onEscape)
        }), e.on("keyup", function(t) {
            27 === t.which && e.trigger("escape.close.bb")
        }), o(t.container).append(e), e.modal({
            backdrop: t.backdrop,
            keyboard: !1,
            show: !1
        }), t.show && e.modal("show"), e
    }, b.setDefaults = function() {
        var t = {};
        2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0], o.extend(p, t)
    }, b.hideAll = function() {
        o(".bootbox").modal("hide")
    };
    var f = {
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };
    return b.init = function(e) {
        return t(e || o)
    }, b
});