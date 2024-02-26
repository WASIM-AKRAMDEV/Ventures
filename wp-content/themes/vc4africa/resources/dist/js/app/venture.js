require(["jquery"], function(t) {
    t("a[data-scroll], .btn[data-scroll]").on("click", "[data-toggle]", function(e) {
        e.preventDefault(), e.stopImmediatePropagation();
        var a = t(this).data("scroll"),
            n = t(this).attr("href");
        t("body, html").animate({
            scrollTop: a
        }, "500", "swing", function() {
            t("ul.nav a[href=" + n + "]").trigger("click")
        })
    }), t("#map_canvas_world").is(":visible") && require(["geocomplete"]);
    var e = t("#map_canvas_wrapper");
    e.length && e.on("show.bs.collapse", function() {
        require(["geocomplete"])
    });
    var a = t('select.js-venture-filters[data-init="select2"]');
    if (a.length) {
        require(["select2"], function() {
            t.each(a, function(e, a) {
                var n, r, i, o = t(a),
                    l = {
                        templateSelection: function(t) {
                            return (void 0 !== t.text && "" !== t.text ? t.text : t.title).trim()
                        }
                    };
                o.data("ajax") && (l.ajax = (n = o.data("action"), r = o.data("taxonomy"), i = o.data("parent"), {
                    url: ajaxurl,
                    delay: 300,
                    minimumInputLength: 2,
                    dataType: "json",
                    method: "POST",
                    data: function(t) {
                        return {
                            action: n,
                            taxonomy: r,
                            parent: i,
                            q: t.term
                        }
                    },
                    processResults: function(t) {
                        return {
                            results: t.results.map(function(t) {
                                return {
                                    id: t.term_id,
                                    text: t.name
                                }
                            })
                        }
                    }
                })), o.select2(l)
            })
        })
    }
    t("#rss-news").length && require(["rss-news"])
});