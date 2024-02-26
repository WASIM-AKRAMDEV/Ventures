const globalHeader = () => {
        const e = {
            header: document.querySelector(".g-header"),
            navToggle: document.querySelector(".js-nav-toggle"),
            navReset: document.querySelector(".js-nav-reset"),
            toggleContent: document.querySelectorAll(".js-toggle-content"),
            closeContentBtn: document.querySelectorAll(".js-close-content"),
            userBtn: document.querySelector(".js-user-btn"),
            langToggle: document.querySelectorAll(".js-lang-toggle"),
            langItems: document.querySelectorAll(".js-lang-item"),
            langHello: document.querySelector(".js-lang-hello"),
            langWelcome: document.querySelector(".js-lang-welcome"),
            langFooter: document.querySelector(".js-lang-footer"),
            searchBtn: document.querySelectorAll(".js-search-toggle-btn"),
            searchInput: document.querySelector(".js-search-input"),
            overlay: document.querySelector(".js-header__overlay")
        };
        if (!e.header) return;
        const t = (t, a, l) => {
                switch (a) {
                    case "content":
                        let o = document.querySelector(l);
                        o.classList.contains("is-active") || n(), o.classList.toggle("is-active"), c(t);
                        break;
                    case "close-content":
                        e.header.classList.remove("nav-content-is-active"), e.header.classList.add("nav-is-active"), e.toggleContent.forEach(e => {
                            e.classList.remove("is-active")
                        });
                        break;
                    case "lang":
                        e.header.classList.contains("lang-menu-is-active") || n(), s(), c(t);
                        break;
                    case "search":
                        s(), c(t), e.header.classList.contains("search-is-active") ? e.searchInput.focus() : (e.searchInput.value = null, e.searchInput.blur());
                        break;
                    case "nav-reset":
                        n();
                        break;
                    default:
                        e.header.classList.contains("is-active") && n(), c(t)
                }
            },
            a = e => {
                if (e.toggleBtn)
                    if (e.toggleBtn.length > 1) e.toggleBtn.forEach(a => {
                        a.addEventListener("click", n => {
                            let s = a.getAttribute("data-target");
                            n.preventDefault(), t(e.isActiveClass, e.menuType, s)
                        })
                    });
                    else {
                        (e.toggleBtn.length ? e.toggleBtn[0] : e.toggleBtn).addEventListener("click", a => {
                            a.preventDefault();
                            let n = e.toggleBtn.getAttribute("data-target");
                            t(e.isActiveClass, e.menuType, n)
                        })
                    }
            },
            n = () => {
                e.header.classList.remove("nav-is-active", "user-menu-is-active", "lang-menu-is-active", "search-is-active", "nav-content-is-active", "is-active"), e.toggleContent.forEach(e => {
                    e.classList.remove("is-active")
                })
            },
            s = () => {
                e.header.classList.remove("nav-is-active")
            },
            c = t => {
                e.header.classList.toggle(t)
            };
        a({
            toggleBtn: e.navToggle,
            isActiveClass: "nav-is-active"
        }), a({
            toggleBtn: e.navReset,
            menuType: "nav-reset"
        }), a({
            toggleBtn: e.userBtn,
            isActiveClass: "user-menu-is-active"
        }), a({
            toggleBtn: e.langToggle,
            menuType: "lang",
            isActiveClass: "lang-menu-is-active"
        }), a({
            toggleBtn: e.toggleContent,
            menuType: "content",
            isActiveClass: "nav-content-is-active"
        }), a({
            toggleBtn: e.closeContentBtn,
            menuType: "close-content"
        }), a({
            toggleBtn: e.searchBtn,
            menuType: "search",
            isActiveClass: "search-is-active"
        }), e.langItems.forEach(t => {
            t.addEventListener("mouseenter", () => {
                e.langHello.textContent = t.getAttribute("data-hello"), e.langWelcome.textContent = t.getAttribute("data-welcome"), e.langFooter.classList.add("is-animating"), setTimeout(() => {
                    e.langFooter.classList.remove("is-animating")
                }, 500)
            }), t.addEventListener("mouseleave", () => {
                let t = document.querySelector(".js-lang-item.is-active");
                e.langHello.textContent = t.getAttribute("data-hello"), e.langWelcome.textContent = t.getAttribute("data-welcome")
            })
        }), e.overlay.addEventListener("click", () => {
            n()
        })
    },
    contextHeader = () => {
        const e = document.querySelector(".c-header");
        if (!e) return;
        const t = {
            cNav: e.querySelector(".js-context-nav"),
            cNavBtn: e.querySelector(".js-toggle-context-nav")
        };
        let a = !1;
        const n = () => {
                let t = e.querySelector(".c-header__overlay");
                t && (t.remove(), a = !1, s())
            },
            s = () => {
                t.cNav.classList.remove("is-active"), t.cNavBtn.classList.remove("is-active")
            };
        t.cNavBtn.addEventListener("click", () => {
            (a = !a) ? (t.cNav.classList.add("is-active"), t.cNavBtn.classList.add("is-active"), (() => {
                let t = document.createElement("div");
                t.classList.add("c-header__overlay"), e.appendChild(t), t.addEventListener("click", () => {
                    n()
                })
            })()) : (s(), n())
        })
    };
globalHeader(), contextHeader();