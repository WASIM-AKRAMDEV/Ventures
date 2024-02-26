require.config({
    waitSeconds: 0,
    urlArgs: "1213",
    baseUrl: VC4A_PARENT,
    shim: {
        autocomplete: {},
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        sortable: {},
        underscore: {
            exports: "_"
        },
        bootstrap: {
            deps: ["jquery"]
        },
        typeahead: {
            deps: ["jquery"]
        },
        "bootstrap-wysiwyg": {
            deps: ["bootstrap"]
        },
        "bootstrap-validator": {
            deps: ["bootstrap"]
        },
        "bootstrap-maxlength": {
            deps: ["bootstrap"]
        },
        "bootstrap-chosen": {
            deps: ["bootstrap"]
        },
        "bootstrap-toggle": {
            deps: ["bootstrap"],
            exports: "$.fn.bootstrapToggle"
        },
        "bootstrap-datetimepicker": {
            deps: ["bootstrap"]
        },
        "bootstrap-star-rating": {
            deps: ["bootstrap"]
        },
        "places-search": {
            deps: ["bootstrap"]
        },
        summernote: {
            deps: ["bootstrap"]
        },
        select2: {
            deps: ["jquery"]
        },
        bootbox: {
            deps: ["bootstrap"]
        },
        bloodhound: {
            deps: ["jquery"]
        },
        "typeahead.jquery": {
            deps: ["jquery"]
        },
        "typeahead.bundle": {
            deps: ["jquery"],
            exports: "Bloodhound"
        },
        handlebars: {
            deps: ["jquery"],
            exports: "Handlebars"
        },
        "jquery.Jcrop": {
            deps: ["jquery"]
        },
        datatables: {
            deps: ["jquery", "bootstrap"]
        },
        "datatables-bootstrap": {
            deps: ["datatables", "datatables-responsive"]
        },
        "wp/jquery/jquery-migrate": {
            deps: ["jquery"]
        },
        "wp/js/wp-util": {
            deps: ["jquery", "underscore"]
        },
        "wp/ui/core": {
            deps: ["jquery"]
        },
        "wp/ui/mouse": {
            deps: ["wp/ui/core"]
        },
        "wpadmin/js/password-strength-meter": {
            deps: ["jquery"]
        },
        oneall: {
            exports: "_oneall"
        },
        "jquery-canvasjs": {
            deps: ["jquery"],
            exports: "CanvasJS"
        },
        Sentry: {
            exports: "Sentry"
        }
    },
    paths: {
        bootstrap: "bootstrap",
        "typeahead.bundle": "//cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.4/typeahead.bundle",
        Sentry: "//browser.sentry-cdn.com/6.4.0/bundle.tracing.min",
        oneall: "https://vc4africa.api.oneall.com/socialize/library",
        dropzone: "dropzone-amd-module",
        app: "../app",
        jquery: "jquery",
        common: "../common",
        collections: "../formbuilder/collections",
        data: "../formbuilder/data",
        models: "../formbuilder/models",
        helper: "../formbuilder/helper",
        templates: "../formbuilder/templates",
        views: "../formbuilder/views",
        "wp/jquery": "../../../../../../../wp-includes/js/jquery",
        "wp/ui": "../../../../../../../wp-includes/js/jquery/ui",
        wp: "../../../../../../../wp-includes",
        wpadmin: "../../../../../../../wp-admin",
        "social-proxy": "../../../../../../plugins/vc4a-social-proxy/assets/js"
    },
    map: {
        "*": {
            "wp/ui/core": "wp/ui/core",
            "wp/ui/mouse": "wp/ui/mouse",
            "wp/ui/widget": "wp/ui/widget"
        }
    },
    text: {
        useXhr: function(e, t, o, a) {
            return !0
        }
    }
});
const loadBootstrap = "undefined" == typeof LOAD_BOOTSTRAP || LOAD_BOOTSTRAP,
    includesArr = ["jquery", "domReady", !!loadBootstrap && "bootstrap"];
require([...includesArr], function(e, t) {
    const o = e("body").hasClass("logged-out"),
        a = e("form").length;
    e.fn.justtext = function() {
        return e(this).clone().children().remove().end().text()
    }, loadBootstrap && (o && a > 2 || !o && a > 1) && require(["../common/forms"]), window.cntrlIsPressed = !1, e(document).on("keydown", function(e) {
        17 === e.which && (window.cntrlIsPressed = !0)
    }), e(document).on("keyup", function() {
        17 === event.which && (window.cntrlIsPressed = !0)
    }), e(document.body).on("click", "[data-href]", function(t) {
        e(t.target).closest("a,.btn,form,button").length || e(t.target).hasClass("delete") || (window.cntrlIsPressed ? window.open(e(this).data("href")) : window.location.href = e(this).data("href"))
    });
    var r = e("#favicon"),
        i = function() {
            r.attr("href", window.matchMedia("(prefers-color-scheme: dark)").matches ? "/favicon-white.ico" : "/favicon.ico")
        };

    function s(t) {
        require(["timeago"], function(o) {
            o().render(t, e("html").prop("lang").toLowerCase())
        })
    }
    i(), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
        i()
    }), e("#loginform, #signup_form").on("submit", function() {
        e(this).find('[type="submit"]').prop("disabled", "disabled").val("Logging in...").addClass("loading")
    }), e(document).on("affix.bs.affix", function(t) {
        var o = e(t.target);
        e(window).width() > 991 ? o.width(o.outerWidth()) : e(o).off("scroll.bs.affix.data-api").off("click.bs.affix.data-api").removeData("bs.affix").removeAttr("data-spy").removeClass("affix affix-top affix-bottom").removeAttr("style")
    }), e(document).on("affix-bottom.bs.affix", function(t) {
        e(t.target).css("position", "fixed")
    }), e("[data-scroll], .btn[data-scroll]").on("click", function(t) {
        if (void 0 === e(this).data("toggle")) {
            t.preventDefault(), t.stopPropagation();
            var o = e(this).data("scroll");
            e("body, html").animate({
                scrollTop: e(o).position().top - 20
            }, "500", "swing")
        }
    }), e("a[data-toggle-tab]").on("click", function(t) {
        let o = e(this).attr("href"),
            a = e('a[data-toggle="tab"][href="' + o + '"]'),
            r = e(e(this).data("toggleTab") || o);
        a && (t.preventDefault(), t.stopPropagation(), a.trigger("click"), e("html").animate({
            scrollTop: r.position().top - 50
        }, "500", "swing"))
    }), o || e.getJSON(ajaxurl + "?action=vc4a_header_get_user_details", function(t) {
        let o = e("#user-header");
        o.find(".js-lazy-avatar").attr("src", t.avatar), o.find('[data-count="total"]').text(t.total), o.find('[data-count="messages"]').text(t.messages), o.find('[data-count="notifications"]').text(t.notifications)
    }), t(function() {
        function t() {
            var t = e('[data-toggle="tab"][href="' + window.location.hash + '"]');
            t.length && e(window.location.hash).length && e("html, body").animate({
                scrollTop: e(window.location.hash).offset().top
            }, "400", "swing", function() {
                t.trigger("click")
            })
        }!o && e("#global-search-form").length && require(["../app/global-site-search"]), e('[data-component="site-search"]').length && require(["../app/site-search"]), e('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
            history.pushState ? history.pushState({
                module: "tabtoggle"
            }, e(this).text(), t.target.hash) : window.location.hash = t.target.hash
        }), e(window).on("hashchange", function() {
            t()
        }), window.location.hash && t(), e("[data-site-search]").length && require(["../common/site-search"]), loadBootstrap && (e('[data-toggle="tooltip"]').tooltip(), e('[data-toggle="popover"]').popover()), e("[data-ajax],[data-autoload]").length && require(["ajax"]), e('[data-pm="true"]').length && require(["pm"]), (e("#mailchimp").length || e("*[data-vc4a-mailchimp]").length) && require(["mailchimp"]), e("#member-nav").length && require(["../app/mentor"]), e(".js-accordion__panel").length && require(["../templates/global/accordion"]), e(document).on("ajaxCompleted", function() {
            loadBootstrap && e('[data-toggle="tooltip"]').tooltip();
            var t = document.querySelectorAll("time[datetime]:not([data-time-local])");
            t.length && s(t)
        }), e("#avatar-to-crop").length && require(["../app/crop"]), e(".js-lazy-video").length && require(["../app/ec-video"]), e("[data-toggle='offcanvas']").on("click", function() {
            e(this).toggleClass("visible").html(e(this).hasClass("visible") ? e(this).html().replace("Show", "Hide").replace("More", "Less") : e(this).html().replace("Hide", "Show").replace("Less", "More"));
            var t = e(this).hasClass("visible") ? e("#vc4a-sidebar").offset().top - 50 : 0;
            e("body, html").animate({
                scrollTop: t
            }, "500", "swing")
        });
        const a = e(":not(#formbuilder_form) [data-init='select2']").not("[data-site-search='true']");
        a.length && require(["jquery", "select2"], function(e) {
            e.each(a, function(t, o) {
                var a = e(o),
                    r = {
                        placeholder: e(this).data("placeholder") ? e(this).data("placeholder") : "Search..",
                        templateSelection: function(e) {
                            return (void 0 !== e.text && "" !== e.text ? e.text : e.title).trim()
                        }
                    };
                (void 0 === a.data("select2") || null === a.data("select2") && a.find("option").length > 6) && a.select2(r)
            }), e(document).on("select2:select", '[data-redirect="true"]', function() {
                var t = e(this),
                    o = t.find(":selected");
                "" !== o.val() && (t.prop("disabled", !0).addClass("loading"), window.location.href = o.val())
            })
        });
        var r = document.querySelectorAll("time[datetime]:not([data-time-local])");
        r.length && s(r);
        var i = document.querySelectorAll('time[datetime][data-time-local^="vc4a_glp"]');
        i.length && s(i);
        const n = e('input[data-mailcheck="true"]');
        n.length > 0 && require(["jquery", "mailcheck"], function(e) {
            e.each(n, function(t, o) {
                e(o).on("blur", function() {
                    var t = e(this);
                    e(".email-suggestion").remove(), e(this).mailcheck({
                        suggested: function(o, a) {
                            var r = e('<div href="#" class="email-suggestion bg-info alert" data-suggestion="' + a.full + '">Did you mean <a href="#">' + a.full + "</a>?</div>");
                            r.insertAfter(t), r.on("click", function() {
                                t.val(r.data("suggestion")), r.remove()
                            })
                        }
                    })
                })
            })
        });
        let l = e("#js-vc4a-dashboard-reraeb-value");
        l.length && l.data("value") && (document.cookie = "vc4a-jwt-token=" + l.data("value") + ";domain=." + window.location.hostname), e(".twitter-timeline").length && require(["https://platform.twitter.com/widgets.js"])
    }), e("#signup_form").length && require(["./app/register"]), o ? e("#loginform, #signup_email").length && (require(["./app/credential-manager"]), require(["../common/login"])) : (e("#js-resend-email-button").length && require(["./app/verify-email"]), e(document).on("click", ".js-copy", function() {
        let t = e("<input>");
        e("body").append(t), t.val(e(this).html()).select(), document.execCommand("copy"), t.remove();
        var o = e('<span class="meta" style="position:absolute;top: -1em;font-size:12px">Copied!</span>');
        o.insertAfter(e(this)).fadeIn().delay(1e3).fadeOut(), setTimeout(function() {
            o.remove()
        }, 1100)
    }))
});