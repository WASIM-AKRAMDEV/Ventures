! function(a, t) {
    "function" == typeof define && define.amd ? define(["jquery", "bootbox", "notifications", "jquery.serialize-object"], t) : t(a.jQuery)
}(this, function(a, t, e) {
    "use strict";

    function o(t) {
        var e = a(t).data(),
            o = {};
        return a.each(e, function(a, t) {
            "object" != typeof t && (o[a] = t)
        }), o
    }

    function r() {
        a.each(a("[data-autoload='true']"), function(t, e) {
            var o = a(e);
            if (void 0 === o.data("autoloaded")) {
                var r = o.data(),
                    d = {};
                o.addClass("loading"), o.data("autoloaded", !0), a.each(r, function(a, t) {
                    "object" != typeof t && (d[a] = t)
                }), setTimeout(function() {
                    o.vc4ajax({
                        data: d
                    })
                }, 50)
            }
        })
    }

    function d(a, t, o) {
        e.show({
            type: a,
            message: o,
            title: t
        })
    }

    function i(a) {
        return null != a
    }
    a(window).on("popstate", function(a) {
        a.originalEvent.state && "ajaxhistory" === a.originalEvent.state.module && window.location.assign(location.href)
    }), a(document).on("click", "[data-ajax=true]", function(t) {
        var e = this,
            r = a(e);
        r.is("label") || (t.preventDefault(), t.stopPropagation()), setTimeout(function() {
            r.vc4ajax({
                data: o(e)
            })
        }, 50)
    }), r(), a(document).on("ajaxCompleted", function() {
        r()
    });
    var n = function(a, t) {
        this.element = a, this.options = t
    };
    n.prototype = {
        constructor: n
    }, a.fn.vc4ajax = function(e) {
        var r, n = a(this),
            l = {
                action: (e = a.extend(!0, {}, {
                    method: n.data("method") || "add",
                    notify: "undefined" === n.data("notify") || n.data("notify"),
                    confirm: n.data("confirm") || !1,
                    loader: n.data("loader") || !1,
                    reload: n.data("reload") || !1,
                    append: n.data("append") || !1,
                    append_new: n.data("append_new") || !1,
                    prepend: n.data("prepend") || !1,
                    redirect: n.data("redirect") || !1,
                    replace: n.data("replace") || !1,
                    setActive: n.data("setActive") || !1,
                    post: n.data("post") || !1,
                    action: n.data("action"),
                    trigger: n.data("trigger") || !1,
                    polling: "" !== n.data("polling") ? parseInt(n.data("polling")) : 0,
                    scrollto: void 0 !== n.data("scrollto") && n.data("scrollto"),
                    info: {
                        title: n.data("infotitle") || "",
                        msg: n.data("infomsg") || ""
                    },
                    success: {
                        title: n.data("successtitle") || "",
                        msg: n.data("successmsg") || ""
                    },
                    fail: {
                        title: n.data("failtitle") || "",
                        msg: n.data("failmsg") || ""
                    }
                }, e)).action
            },
            s = n.closest("form").find('input[name^="_wpnonce"]').html(),
            c = "";
        void 0 === s || !1 === s ? "undefined" !== n.data("nonce") && (r = n.data("nonce"), c = n.data("nonce_name") ? n.data("nonce_name") : "nonce") : (c = a(s).attr("name"), r = a(s).val()), r && (l[c] = r);
        var p = {},
            f = !1;
        if ("submit" === n.attr("type") || "submit" === n.data("type")) {
            var m = n.closest('[data-ajax="form"]').length ? n.closest('[data-ajax="form"]') : n.closest("form");
            if (m.on("submit", function() {
                    return !1
                }), m.is("form") && !m.hasClass("bv-novalidate"))
                if (void 0 === m.data("bootstrapValidator")) require(["bootstrap-validator"], function() {
                    if (m.bootstrapValidator(), !m.data("bootstrapValidator").isValid()) return !1
                });
                else if (m.data("bootstrapValidator").validate(), !m.data("bootstrapValidator").isValid()) return !1;
            p = function(t) {
                if (!t.is("form")) {
                    var e = t.find(":input"),
                        o = a.map(e.clone(), function(t, o) {
                            return a(t).is("select") && void 0 !== e[o] && a(t).val(a(e[o]).val()).trigger("change"), t
                        });
                    t = a("<form></form>").append(o)
                }
                return t.serializeObject()
            }(m)
        }
        l = a.extend(!0, {}, l, e.data), (l = a.extend(!0, {}, p, l)).lang = a("html").prop("lang").toLowerCase();
        var u = {
            type: null,
            status: null,
            resultMsg: null,
            dataObject: l,
            options: e
        };
        return (e.replace || e.append || e.prepend) && (f = !0, u.targetEl = e.replace ? e.replace : e.append ? e.append : e.prepend, u.targetMethod = e.replace ? "replace" : e.append ? "append" : "prepend", e.targetEl = u.targetEl, e.targetMethod = u.targetMethod), !e.loader || e.polling || n.data("star") || n.data("bookmark") || n.attr("disabled", "disabled").addClass("loading disabled"), e.confirm ? (t.confirm(e.confirm, function(a) {
            a ? (n.data("confirm", !1), l.confirm = !1, n.vc4ajax({
                data: l
            })) : n.removeClass("loading disabled").removeAttr("disabled")
        }), !1) : a.ajax({
            type: f && !e.post ? "GET" : "POST",
            url: ajaxurl,
            data: l,
            beforeSend: function() {
                if (u.type = "ajaxBefore", u.status = "loading", a(document).trigger(u), n.data("star") || n.data("bookmark")) {
                    var t = n.hasClass("fa") ? n : n.find(".fa");
                    n.data("bookmark") && (t.hasClass("fa-bookmark-o") ? (t.removeClass("fa-bookmark-o").addClass("fa-bookmark"), n.addClass("active").html(function(a, t) {
                        return t.replace("Bookmark", "Bookmarked")
                    })) : (t.removeClass("fa-bookmark").addClass("fa-bookmark-o"), n.removeClass("active").html(function(a, t) {
                        return t.replace("Bookmarked", "Bookmark")
                    }))), n.data("star") && (t.hasClass("fa-star-o") ? (t.removeClass("fa-star-o").addClass("fa-star"), n.addClass("active").html(function(a, t) {
                        return t.replace("Follow", "Following")
                    })) : (t.removeClass("fa-star").addClass("fa-star-o"), n.removeClass("active").html(function(a, t) {
                        return t.replace("Following", "Follow")
                    })))
                }
                n.prop("disabled", !0), e.notify && d("loading", e.reload ? vc4a_l10n.common.i18n.loading || "Loading…" : e.info.title, e.info.msg), !1 !== e.replace && e.loader && a(e.replace).animate({
                    opacity: ".5"
                }).addClass("loading block"), n.data("collapse") && a(n.data("collapse")).collapse("toggle")
            }
        }).fail(function(t, o) {
            let r = t.responseText || e.fail.msg;
            if ("error" === o && "" !== r && d("danger", e.fail.title, r), n.data("star")) {
                var i = n.hasClass("fa") ? n : n.find(".fa");
                i.hasClass("fa-star-o") ? (i.removeClass("fa-star-o").addClass("fa-star"), n.addClass("active").html(function(a, t) {
                    return t.replace("Follow", "Following")
                })) : (i.removeClass("fa-star").addClass("fa-star-o"), n.removeClass("active").html(function(a, t) {
                    return t.replace("Following", "Follow")
                }))
            }
            return n.data("remove") && a(n.data("remove")).removeClass("bg-danger").fadeIn(100), n.prop("disabled", !1).removeClass("loading disabled"), u.type = "ajaxCompleted", u.status = "fail", a(document).trigger(u), !1
        }).done(function(t) {
            if (!1 !== e.trigger && (u.type = e.trigger, u.status = "success", a(document).trigger(u, t)), n.data("remove") && (a(n.data("remove")).fadeOut(400), setTimeout(function() {
                    a(n.data("remove")).remove()
                }, 500)), n.data("clear") && a(n).closest("form")[0].reset(), n.data("modal") && a(n.data("modal")).modal("hide"), n.data("click") && a(n.data("click")).trigger("click"), !1 !== e.redirect || i(t.redirect)) window.location.href = i(t.redirect) ? t.redirect : e.redirect, n.text(vc4a_l10n.common.i18n.redirecting || "Redirecting..");
            else if (e.reload) n.text(vc4a_l10n.common.i18n.reloading || "Reloading page.."), location.reload();
            else if (!1 !== e.replace) {
                if (e.setActive) {
                    var o = n.parent().find(".active").length > 0 || n.parent().parent().find(".active").length > 0,
                        r = n.parent().find(".active").length > 0;
                    r ? n.parent().find(".active").removeClass("active") : n.parent().parent().find(".active").removeClass("active"), r || !o ? n.addClass("active") : n.parent().addClass("active")
                }
                if (a(e.replace).empty().removeClass("loading block").html(t).animate({
                        opacity: 1
                    }, 150), (void 0 !== m || n.data("uri") || n.data("href")) && void 0 === n.data("history") && history && history.pushState) {
                    var l = n.data("href") || n.data("uri");
                    n.data("uri") && (l = n.data("uri") ? n.data("uri") : window.location.pathname + "?" + m.serialize()), history.pushState({
                        module: "ajaxhistory"
                    }, document.title + " - " + n.text(), l), void 0 !== window.dataLayer && window.dataLayer.push({
                        event: "Pageview",
                        url: l
                    })
                }
            } else !1 !== e.append || !1 !== e.prepend ? (!1 !== e.append && (!1 !== e.append_new && (t = "<" + e.append_new + ">" + t + "</" + e.append_new + ">"), a(t).hide().appendTo("" + e.append).fadeIn(250)), !1 !== e.prepend && a(t).hide().prependTo("" + e.prepend).fadeIn(250)) : (e.notify && d("success", e.success.title, t || e.success.msg), n.data("remove") && a(n.data("remove")).addClass("bg-danger").fadeOut(800, function() {
                a(this).remove()
            }));
            if (f) {
                var s = e.replace ? e.replace : e.append ? e.append : e.prepend;
                u.targetEl = s, a(s).find('[data-toggle="collapse"]').on("click", function(t) {
                    return a(a(this).attr("href") || a(this).data("target")).collapse("toggle"), t.preventDefault(), !1
                })
            }
            if (!1 !== e.scrollto) {
                var c = n.data("scrollSpeed") || 300;
                a("body, html").animate({
                    scrollTop: parseInt(e.scrollto) > 0 || 0 === e.scrollto ? parseInt(e.scrollto) : a(e.scrollto).offset().top
                }, c, "swing")
            }
            n.data("bookmark") || n.data("star") || n.data("noEvent") || (u.type = "ajaxCompleted", u.status = "success", a(document).trigger(u))
        }).always(function() {
            e.redirect || e.reload || setTimeout(function() {
                n.prop("disabled", !1).removeClass("loading disabled")
            }, 3e3), void 0 !== n.data("_click") && a(n.data("_click")) && a(n.data("_click")).trigger("click"), void 0 !== n.data("scroll") && a(n.data("scroll")) && a("body, html").animate({
                scrollTop: a(n.data("scroll")).offset().top - 10
            }, 300, "swing"), e.polling > 0 && setTimeout(function() {
                if (n.hasClass("activity-list")) {
                    var t = 0;
                    n.find("li").each(function() {
                        void 0 !== a(this).data("id") && parseInt(a(this).data("id")) > t && (t = parseInt(a(this).data("id")))
                    }), n.data("offset", t)
                }
                n.vc4ajax({
                    data: o(_this)
                })
            }, e.polling)
        })
    }
});