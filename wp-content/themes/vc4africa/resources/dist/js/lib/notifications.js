! function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.bootbox = t(e.jQuery)
}(this, function e(t) {
    "use strict";
    var n = {
            type: "info",
            title: "",
            icon: "check",
            message: "",
            display: "alert",
            container: "body",
            position: "",
            timeout: 8
        },
        i = {};
    return i.show = function(e) {
        var i = t(".notification-box");
        switch (i.length && i.remove(), (e = function(e) {
            if ("object" != typeof e) throw new Error("Please supply an object of options");
            return t.extend({}, n, e)
        }(e)).type) {
            case "warning":
                e.icon = "exclamation-triangle";
                break;
            case "loading":
                e.type = "info", e.icon = "refresh fa-spinner";
                break;
            case "saving":
                e.type = "info", e.icon = "refresh";
                break;
            case "info":
                e.icon = "info-circle";
                break;
            case "error":
            case "danger":
                e.type = "danger", e.icon = "remove"
        }
        var o = {
            closeButton: "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>",
            title: ' <h5 class="text-' + e.type + ' seamless"><i class="fa fa-fw fa-' + e.icon + '"></i> ' + e.title + "</h5>"
        };
        "" === e.title && (e.message = '<i class="fa fa-fw fa-' + e.icon + '"></i> ' + e.message);
        var a = "<div class='alert alert-" + e.type + " alert-dismissable " + e.position + " notification-box'>" + o.closeButton + "<span class='notification-message'>" + e.message + "</span></div>",
            s = t(a);
        return e.title.length && s.find(".notification-message").before(o.title), s.on("escape.close.nc", function() {
            s.remove()
        }), s.on("click", "button", function() {
            s.trigger("escape.close.nc")
        }), s.on("keyup", function(e) {
            27 === e.which && s.trigger("escape.close.nc")
        }), s.hide().prependTo(e.container).fadeIn(500).delay(1e3 * parseInt(e.timeout)).fadeOut(1e3), s
    }, i.init = function(n) {
        return e(n || t)
    }, i
});