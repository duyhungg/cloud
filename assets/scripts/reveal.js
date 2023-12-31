!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Reveal = t()
}(this, function () {
    "use strict";
    const Qe = (e, t) => {
            for (var i in t) e[i] = t[i];
            return e
        }, Ze = (e, t) => Array.from(e.querySelectorAll(t)), et = (e, t, i) => {
            i ? e.classList.add(t) : e.classList.remove(t)
        }, tt = e => {
            if ("string" == typeof e) {
                if ("null" === e) return null;
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if (e.match(/^-?[\d\.]+$/)) return parseFloat(e)
            }
            return e
        }, it = (e, t) => {
            e.style.transform = t
        }, a = (e, t) => {
            let i = e.matches || e.matchesSelector || e.msMatchesSelector;
            return !(!i || !i.call(e, t))
        }, st = (e, t) => {
            if ("function" == typeof e.closest) return e.closest(t);
            for (; e;) {
                if (a(e, t)) return e;
                e = e.parentNode
            }
            return null
        }, m = e => {
            let t = document.createElement("style");
            return t.type = "text/css", e && 0 < e.length && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t
        }, at = () => {
            let t = {};
            for (var e in location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, e => {
                t[e.split("=").shift()] = e.split("=").pop()
            }), t) {
                var i = t[e];
                t[e] = tt(unescape(i))
            }
            return void 0 !== t.dependencies && delete t.dependencies, t
        }, d = {mp4: "video/mp4", m4a: "video/mp4", ogv: "video/ogg", mpeg: "video/mpeg", webm: "video/webm"},
        e = navigator.userAgent,
        nt = /(iphone|ipod|ipad|android)/gi.test(e) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints,
        n = /android/gi.test(e);
    var t = function (i) {
        var a, n, e, r, t, s, o, l, d, c, h, u, g, v, p, m, f, y, b, w, E, S;
        if (i) return a = 3, n = [], e = null, r = "requestAnimationFrame" in i ? function () {
            i.cancelAnimationFrame(e), e = i.requestAnimationFrame(function () {
                return s(n.filter(function (e) {
                    return e.dirty && e.active
                }))
            })
        } : function () {
        }, t = function (t) {
            return function () {
                n.forEach(function (e) {
                    return e.dirty = t
                }), r()
            }
        }, s = function (e) {
            e.filter(function (e) {
                return !e.styleComputed
            }).forEach(function (e) {
                e.styleComputed = c(e)
            }), e.filter(h).forEach(u);
            e = e.filter(d);
            e.forEach(l), e.forEach(function (e) {
                u(e), o(e)
            }), e.forEach(g)
        }, o = function (e) {
            return e.dirty = 0
        }, l = function (e) {
            e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        }, d = function (e) {
            return 2 !== e.dirty || 2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth
        }, c = function (e) {
            var t = i.getComputedStyle(e.element, null);
            return e.currentFontSize = parseFloat(t.getPropertyValue("font-size")), e.display = t.getPropertyValue("display"), e.whiteSpace = t.getPropertyValue("white-space"), !0
        }, h = function (e) {
            var t = !1;
            return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t)
        }, u = function (e) {
            e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
        }, g = function (e) {
            e.element.dispatchEvent(new CustomEvent("fit", {
                detail: {
                    oldValue: e.previousFontSize,
                    newValue: e.currentFontSize,
                    scaleFactor: e.currentFontSize / e.previousFontSize
                }
            }))
        }, v = function (e, t) {
            return function () {
                e.dirty = t, e.active && r()
            }
        }, p = function (t) {
            return function () {
                n = n.filter(function (e) {
                    return e.element !== t.element
                }), t.observeMutations && t.observer.disconnect(), t.element.style.whiteSpace = t.originalStyle.whiteSpace, t.element.style.display = t.originalStyle.display, t.element.style.fontSize = t.originalStyle.fontSize
            }
        }, m = function (e) {
            return function () {
                e.active || (e.active = !0, r())
            }
        }, f = function (e) {
            return function () {
                return e.active = !1
            }
        }, y = function (e) {
            e.observeMutations && (e.observer = new MutationObserver(v(e, 1)), e.observer.observe(e.element, e.observeMutations))
        }, b = {
            minSize: 16,
            maxSize: 512,
            multiLine: !0,
            observeMutations: "MutationObserver" in i && {subtree: !0, childList: !0, characterData: !0}
        }, w = null, E = function () {
            i.clearTimeout(w), w = i.setTimeout(t(2), R.observeWindowDelay)
        }, S = ["resize", "orientationchange"], Object.defineProperty(R, "observeWindow", {
            set: function (e) {
                var t = "".concat(e ? "add" : "remove", "EventListener");
                S.forEach(function (e) {
                    i[t](e, E)
                })
            }
        }), R.observeWindow = !0, R.observeWindowDelay = 100, R.fitAll = t(a), R;

        function A(e, t) {
            var s = Object.assign({}, b, t), t = e.map(function (e) {
                var t, i = Object.assign({}, s, {element: e, active: !0});
                return (t = i).originalStyle = {
                    whiteSpace: t.element.style.whiteSpace,
                    display: t.element.style.display,
                    fontSize: t.element.style.fontSize
                }, y(t), t.newbie = !0, t.dirty = !0, n.push(t), {
                    element: e,
                    fit: v(i, a),
                    unfreeze: m(i),
                    freeze: f(i),
                    unsubscribe: p(i)
                }
            });
            return r(), t
        }

        function R(e) {
            var t, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return "string" == typeof e ? A((t = document.querySelectorAll(e), [].slice.call(t)), i) : A([e], i)[0]
        }
    }("undefined" == typeof window ? null : window);

    class rt {
        constructor(e) {
            this.Reveal = e, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this)
        }

        shouldPreload(e) {
            if (this.Reveal.isScrollView()) return !0;
            let t = this.Reveal.getConfig().preloadIframes;
            return t = "boolean" != typeof t ? e.hasAttribute("data-preload") : t
        }

        load(r, o = {}) {
            r.style.display = this.Reveal.getConfig().display, Ze(r, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(e => {
                "IFRAME" === e.tagName && !this.shouldPreload(e) || (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"))
            }), Ze(r, "video, audio").forEach(e => {
                let t = 0;
                Ze(e, "source[data-src]").forEach(e => {
                    e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1
                }), nt && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), 0 < t && e.load()
            });
            let l = r.slideBackgroundElement;
            if (l) {
                l.style.display = "block";
                let n = r.slideBackgroundContentElement, i = r.getAttribute("data-background-iframe");
                if (!1 === l.hasAttribute("data-loaded")) {
                    l.setAttribute("data-loaded", "true");
                    let e = r.getAttribute("data-background-image"), t = r.getAttribute("data-background-video"),
                        s = r.hasAttribute("data-background-video-loop"),
                        a = r.hasAttribute("data-background-video-muted");
                    if (e) /^data:/.test(e.trim()) ? n.style.backgroundImage = `url(${e.trim()})` : n.style.backgroundImage = e.split(",").map(e => `url(${((e = "") => encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, e => "%" + e.charCodeAt(0).toString(16).toUpperCase()))(decodeURI(e.trim()))})`).join(","); else if (t && !this.Reveal.isSpeakerNotes()) {
                        let i = document.createElement("video");
                        s && i.setAttribute("loop", ""), a && (i.muted = !0), nt && (i.muted = !0, i.setAttribute("playsinline", "")), t.split(",").forEach(e => {
                            [t = ""] = [e];
                            var t = d[t.split(".").pop()];
                            i.innerHTML += t ? `<source src="${e}" type="${t}">` : `<source src="${e}">`
                        }), n.appendChild(i)
                    } else if (i && !0 !== o.excludeIframes) {
                        let e = document.createElement("iframe");
                        e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute("allow", "autoplay"), e.setAttribute("data-src", i), e.style.width = "100%", e.style.height = "100%", e.style.maxHeight = "100%", e.style.maxWidth = "100%", n.appendChild(e)
                    }
                }
                let e = n.querySelector("iframe[data-src]");
                e && this.shouldPreload(l) && !/autoplay=(1|true|yes)/gi.test(i) && e.getAttribute("src") !== i && e.setAttribute("src", i)
            }
            this.layout(r)
        }

        layout(e) {
            Array.from(e.querySelectorAll(".r-fit-text")).forEach(e => {
                t(e, {
                    minSize: 24,
                    maxSize: .8 * this.Reveal.getConfig().height,
                    observeMutations: !1,
                    observeWindow: !1
                })
            })
        }

        unload(e) {
            e.style.display = "none";
            let t = this.Reveal.getSlideBackground(e);
            t && (t.style.display = "none", Ze(t, "iframe[src]").forEach(e => {
                e.removeAttribute("src")
            })), Ze(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(e => {
                e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
            }), Ze(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(e => {
                e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
            })
        }

        formatEmbeddedContent() {
            var e = (i, e, s) => {
                Ze(this.Reveal.getSlidesElement(), "iframe[" + i + '*="' + e + '"]').forEach(e => {
                    let t = e.getAttribute(i);
                    t && -1 === t.indexOf(s) && e.setAttribute(i, t + (/\?/.test(t) ? "&" : "?") + s)
                })
            };
            e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1")
        }

        startEmbeddedContent(e) {
            e && !this.Reveal.isSpeakerNotes() && (Ze(e, 'img[src$=".gif"]').forEach(e => {
                e.setAttribute("src", e.getAttribute("src"))
            }), Ze(e, "video, audio").forEach(t => {
                if (!st(t, ".fragment") || st(t, ".fragment.visible")) {
                    let e = this.Reveal.getConfig().autoPlayMedia;
                    if ((e = "boolean" != typeof e ? t.hasAttribute("data-autoplay") || !!st(t, ".slide-background") : e) && "function" == typeof t.play) if (1 < t.readyState) this.startEmbeddedMedia({target: t}); else if (nt) {
                        let e = t.play();
                        e && "function" == typeof e.catch && !1 === t.controls && e.catch(() => {
                            t.controls = !0, t.addEventListener("play", () => {
                                t.controls = !1
                            })
                        })
                    } else t.removeEventListener("loadeddata", this.startEmbeddedMedia), t.addEventListener("loadeddata", this.startEmbeddedMedia)
                }
            }), Ze(e, "iframe[src]").forEach(e => {
                st(e, ".fragment") && !st(e, ".fragment.visible") || this.startEmbeddedIframe({target: e})
            }), Ze(e, "iframe[data-src]").forEach(e => {
                st(e, ".fragment") && !st(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", this.startEmbeddedIframe), e.addEventListener("load", this.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")))
            }))
        }

        startEmbeddedMedia(e) {
            var t = !!st(e.target, "html"), i = !!st(e.target, ".present");
            t && i && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia)
        }

        startEmbeddedIframe(e) {
            let t = e.target;
            if (t && t.contentWindow) {
                var i = !!st(e.target, "html"), e = !!st(e.target, ".present");
                if (i && e) {
                    let e = this.Reveal.getConfig().autoPlayMedia;
                    "boolean" != typeof e && (e = t.hasAttribute("data-autoplay") || !!st(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*")
                }
            }
        }

        stopEmbeddedContent(e, t = {}) {
            t = Qe({unloadIframes: !0}, t), e && e.parentNode && (Ze(e, "video, audio").forEach(e => {
                e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause())
            }), Ze(e, "iframe").forEach(e => {
                e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", this.startEmbeddedIframe)
            }), Ze(e, 'iframe[src*="youtube.com/embed/"]').forEach(e => {
                !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            }), Ze(e, 'iframe[src*="player.vimeo.com/"]').forEach(e => {
                !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*")
            }), !0 === t.unloadIframes && Ze(e, "iframe[data-src]").forEach(e => {
                e.setAttribute("src", "about:blank"), e.removeAttribute("src")
            }))
        }
    }

    class ot {
        constructor(e) {
            this.Reveal = e
        }

        render() {
            this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element)
        }

        configure(e, t) {
            let i = "none";
            e.slideNumber && !this.Reveal.isPrintView() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i = "block"), this.element.style.display = i
        }

        update() {
            this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber())
        }

        getSlideNumber(e = this.Reveal.getCurrentSlide()) {
            let t, i = this.Reveal.getConfig(), s = "h.v";
            if ("function" == typeof i.slideNumber) t = i.slideNumber(e); else {
                "string" == typeof i.slideNumber && (s = i.slideNumber), /c/.test(s) || 1 !== this.Reveal.getHorizontalSlides().length || (s = "c");
                var a = e && "uncounted" === e.dataset.visibility ? 0 : 1;
                switch (t = [], s) {
                    case"c":
                        t.push(this.Reveal.getSlidePastCount(e) + a);
                        break;
                    case"c/t":
                        t.push(this.Reveal.getSlidePastCount(e) + a, "/", this.Reveal.getTotalSlides());
                        break;
                    default:
                        var n = this.Reveal.getIndices(e), r = (t.push(n.h + a), "h/v" === s ? "/" : ".");
                        this.Reveal.isVerticalSlide(e) && t.push(r, n.v + 1)
                }
            }
            var o = "#" + this.Reveal.location.getHash(e);
            return this.formatNumber(t[0], t[1], t[2], o)
        }

        formatNumber(e, t, i, s = "#" + this.Reveal.location.getHash()) {
            return "number" != typeof i || isNaN(i) ? `<a href="${s}">
					<span class="slide-number-a">${e}</span>
					</a>` : `<a href="${s}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${i}</span>
					</a>`
        }

        destroy() {
            this.element.remove()
        }
    }

    class lt {
        constructor(e) {
            this.Reveal = e, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this)
        }

        render() {
            this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput)
        }

        show() {
            this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus()
        }

        hide() {
            this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout)
        }

        isVisible() {
            return !!this.element.parentNode
        }

        jump() {
            clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
            var e = this.jumpInput.value.trim("");
            let t = this.Reveal.location.getIndicesFromHash(e, {oneBasedIndex: !0});
            return (t = !t && /\S+/i.test(e) && 1 < e.length ? this.search(e) : t) && "" !== e ? (this.Reveal.slide(t.h, t.v, t.f), !0) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), !1)
        }

        jumpAfter(e) {
            clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(() => this.jump(), e)
        }

        search(e) {
            const t = new RegExp("\\b" + e.trim() + "\\b", "i"),
                i = this.Reveal.getSlides().find(e => t.test(e.innerText));
            return i ? this.Reveal.getIndices(i) : null
        }

        cancel() {
            this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide()
        }

        confirm() {
            this.jump(), this.hide()
        }

        destroy() {
            this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove()
        }

        onKeyDown(e) {
            13 === e.keyCode ? this.confirm() : 27 === e.keyCode && (this.cancel(), e.stopImmediatePropagation())
        }

        onInput(e) {
            this.jumpAfter(200)
        }

        onBlur() {
            setTimeout(() => this.hide(), 1)
        }
    }

    const s = e => {
        let t = e.match(/^#([0-9a-f]{3})$/i);
        if (t && t[1]) return t = t[1], {
            r: 17 * parseInt(t.charAt(0), 16),
            g: 17 * parseInt(t.charAt(1), 16),
            b: 17 * parseInt(t.charAt(2), 16)
        };
        let i = e.match(/^#([0-9a-f]{6})$/i);
        if (i && i[1]) return i = i[1], {
            r: parseInt(i.slice(0, 2), 16),
            g: parseInt(i.slice(2, 4), 16),
            b: parseInt(i.slice(4, 6), 16)
        };
        var s = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (s) return {r: parseInt(s[1], 10), g: parseInt(s[2], 10), b: parseInt(s[3], 10)};
        s = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
        return s ? {r: parseInt(s[1], 10), g: parseInt(s[2], 10), b: parseInt(s[3], 10), a: parseFloat(s[4])} : null
    };

    class dt {
        constructor(e) {
            this.Reveal = e
        }

        render() {
            this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element)
        }

        create() {
            this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(e => {
                let t = this.createBackground(e, this.element);
                Ze(e, "section").forEach(e => {
                    this.createBackground(e, t), t.classList.add("stack")
                })
            }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
                this.Reveal.getRevealElement().classList.add("has-parallax-background")
            }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"))
        }

        createBackground(e, t) {
            let i = document.createElement("div"),
                s = (i.className = "slide-background " + e.className.replace(/present|past|future/, ""), document.createElement("div"));
            return s.className = "slide-background-content", i.appendChild(s), t.appendChild(i), e.slideBackgroundElement = i, e.slideBackgroundContentElement = s, this.sync(e), i
        }

        sync(e) {
            const t = e.slideBackgroundElement, i = e.slideBackgroundContentElement, s = {
                background: e.getAttribute("data-background"),
                backgroundSize: e.getAttribute("data-background-size"),
                backgroundImage: e.getAttribute("data-background-image"),
                backgroundVideo: e.getAttribute("data-background-video"),
                backgroundIframe: e.getAttribute("data-background-iframe"),
                backgroundColor: e.getAttribute("data-background-color"),
                backgroundGradient: e.getAttribute("data-background-gradient"),
                backgroundRepeat: e.getAttribute("data-background-repeat"),
                backgroundPosition: e.getAttribute("data-background-position"),
                backgroundTransition: e.getAttribute("data-background-transition"),
                backgroundOpacity: e.getAttribute("data-background-opacity")
            }, a = e.hasAttribute("data-preload");
            e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", i.style.backgroundSize = "", i.style.backgroundRepeat = "", i.style.backgroundPosition = "", i.style.backgroundImage = "", i.style.opacity = "", i.innerHTML = "", s.background && (/^(http|file|\/\/)/gi.test(s.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s.background) ? e.setAttribute("data-background-image", s.background) : t.style.background = s.background), (s.background || s.backgroundColor || s.backgroundGradient || s.backgroundImage || s.backgroundVideo || s.backgroundIframe) && t.setAttribute("data-background-hash", s.background + s.backgroundSize + s.backgroundImage + s.backgroundVideo + s.backgroundIframe + s.backgroundColor + s.backgroundGradient + s.backgroundRepeat + s.backgroundPosition + s.backgroundTransition + s.backgroundOpacity), s.backgroundSize && t.setAttribute("data-background-size", s.backgroundSize), s.backgroundColor && (t.style.backgroundColor = s.backgroundColor), s.backgroundGradient && (t.style.backgroundImage = s.backgroundGradient), s.backgroundTransition && t.setAttribute("data-background-transition", s.backgroundTransition), a && t.setAttribute("data-preload", ""), s.backgroundSize && (i.style.backgroundSize = s.backgroundSize), s.backgroundRepeat && (i.style.backgroundRepeat = s.backgroundRepeat), s.backgroundPosition && (i.style.backgroundPosition = s.backgroundPosition), s.backgroundOpacity && (i.style.opacity = s.backgroundOpacity);
            var n = this.getContrastClass(e);
            "string" == typeof n && e.classList.add(n)
        }

        getContrastClass(e) {
            var t = e.slideBackgroundElement;
            let i = e.getAttribute("data-background-color");
            if (i && s(i) || (e = window.getComputedStyle(t)) && e.backgroundColor && (i = e.backgroundColor), i) {
                const e = s(i);
                if (e && 0 !== e.a) return ((t = "string" == typeof (t = i) ? s(t) : t) ? (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 : null) < 128 ? "has-dark-background" : "has-light-background"
            }
            return null
        }

        bubbleSlideContrastClassToElement(t, i) {
            ["has-light-background", "has-dark-background"].forEach(e => {
                t.classList.contains(e) ? i.classList.add(e) : i.classList.remove(e)
            }, this)
        }

        update(t = !1) {
            let e = this.Reveal.getCurrentSlide(), a = this.Reveal.getIndices(), n = null,
                i = this.Reveal.getConfig().rtl ? "future" : "past",
                r = this.Reveal.getConfig().rtl ? "past" : "future";
            if (Array.from(this.element.childNodes).forEach((e, s) => {
                e.classList.remove("past", "present", "future"), s < a.h ? e.classList.add(i) : s > a.h ? e.classList.add(r) : (e.classList.add("present"), n = e), !t && s !== a.h || Ze(e, ".slide-background").forEach((e, t) => {
                    e.classList.remove("past", "present", "future");
                    var i = "number" == typeof a.v ? a.v : 0;
                    t < i ? e.classList.add("past") : i < t ? e.classList.add("future") : (e.classList.add("present"), s === a.h && (n = e))
                })
            }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)}), n) {
                this.Reveal.slideContent.startEmbeddedContent(n);
                let e = n.querySelector(".slide-background-content");
                e && (s = e.style.backgroundImage || "", /\.gif/i.test(s) && (e.style.backgroundImage = "", window.getComputedStyle(e).opacity, e.style.backgroundImage = s));
                var s = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null,
                    o = n.getAttribute("data-background-hash");
                o && o === s && n !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = n
            }
            e && this.bubbleSlideContrastClassToElement(e, this.Reveal.getRevealElement()), setTimeout(() => {
                this.element.classList.remove("no-transition")
            }, 1)
        }

        updateParallax() {
            var n = this.Reveal.getIndices();
            if (this.Reveal.getConfig().parallaxBackgroundImage) {
                let e, t, i = this.Reveal.getHorizontalSlides(), s = this.Reveal.getVerticalSlides(),
                    a = this.element.style.backgroundSize.split(" ");
                1 === a.length ? e = t = parseInt(a[0], 10) : (e = parseInt(a[0], 10), t = parseInt(a[1], 10));
                var r = this.element.offsetWidth, o = i.length,
                    r = ("number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : 1 < o ? (e - r) / (o - 1) : 0) * n.h * -1,
                    o = this.element.offsetHeight, l = s.length,
                    o = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (t - o) / (l - 1),
                    l = 0 < l ? o * n.v : 0;
                this.element.style.backgroundPosition = r + "px " + -l + "px"
            }
        }

        destroy() {
            this.element.remove()
        }
    }

    const ct = ".slides section", ht = ".slides>section", ut = ".slides>section.present>section",
        gt = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,
        h = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
    let c = 0;

    class vt {
        constructor(e) {
            this.Reveal = e
        }

        run(e, t) {
            this.reset();
            let i = this.Reveal.getSlides(), n = i.indexOf(t), r = i.indexOf(e);
            if (e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(r < n ? t : e).hasAttribute("data-auto-animate-restart")) {
                this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || m();
                let s = this.getAutoAnimateOptions(t);
                e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending", s.slideDirection = r < n ? "forward" : "backward";
                var o, l = "none" === e.style.display;
                l && (e.style.display = this.Reveal.getConfig().display);
                let a = this.getAutoAnimatableElements(e, t).map(e => this.autoAnimateElements(e.from, e.to, e.options || {}, s, c++));
                l && (e.style.display = "none"), "false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched && (l = .8 * s.duration, o = .2 * s.duration, this.getUnmatchedAutoAnimateElements(t).forEach(e => {
                    let t = this.getAutoAnimateOptions(e, s), i = "unmatched";
                    t.duration === s.duration && t.delay === s.delay || (i = "unmatched-" + c++, a.push(`[data-auto-animate="running"] [data-auto-animate-target="${i}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)), e.dataset.autoAnimateTarget = i
                }, this), a.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${l}s ease ${o}s; }`)), this.autoAnimateStyleSheet.innerHTML = a.join(""), requestAnimationFrame(() => {
                    this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running")
                }), this.Reveal.dispatchEvent({
                    type: "autoanimate",
                    data: {fromSlide: e, toSlide: t, sheet: this.autoAnimateStyleSheet}
                })
            }
        }

        reset() {
            Ze(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(e => {
                e.dataset.autoAnimate = ""
            }), Ze(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(e => {
                delete e.dataset.autoAnimateTarget
            }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null)
        }

        autoAnimateElements(i, e, s, a, t) {
            i.dataset.autoAnimateTarget = "", e.dataset.autoAnimateTarget = t;
            let n = this.getAutoAnimateOptions(e, a),
                r = (void 0 !== s.delay && (n.delay = s.delay), void 0 !== s.duration && (n.duration = s.duration), void 0 !== s.easing && (n.easing = s.easing), this.getAutoAnimatableProperties("from", i, s)),
                o = this.getAutoAnimatableProperties("to", e, s);
            if (e.classList.contains("fragment") && (delete o.styles.opacity, i.classList.contains("fragment")) && (i.className.match(h) || [""])[0] === (e.className.match(h) || [""])[0] && "forward" === a.slideDirection && e.classList.add("visible", "disabled"), !1 !== s.translate || !1 !== s.scale) {
                let e = this.Reveal.getScale(), t = {
                    x: (r.x - o.x) / e,
                    y: (r.y - o.y) / e,
                    scaleX: r.width / o.width,
                    scaleY: r.height / o.height
                };
                t.x = Math.round(1e3 * t.x) / 1e3, t.y = Math.round(1e3 * t.y) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3;
                i = !1 !== s.translate && (0 !== t.x || 0 !== t.y), a = !1 !== s.scale && (0 !== t.scaleX || 0 !== t.scaleY);
                if (i || a) {
                    let e = [];
                    i && e.push(`translate(${t.x}px, ${t.y}px)`), a && e.push(`scale(${t.scaleX}, ${t.scaleY})`), r.styles.transform = e.join(" "), r.styles["transform-origin"] = "top left", o.styles.transform = "none"
                }
            }
            for (var l in o.styles) {
                const e = o.styles[l], s = r.styles[l];
                e === s ? delete o.styles[l] : (!0 === e.explicitValue && (o.styles[l] = e.value), !0 === s.explicitValue && (r.styles[l] = s.value))
            }
            let d = "", c = Object.keys(o.styles);
            return 0 < c.length && (r.styles.transition = "none", o.styles.transition = `all ${n.duration}s ${n.easing} ${n.delay}s`, o.styles["transition-property"] = c.join(", "), o.styles["will-change"] = c.join(", "), d = '[data-auto-animate-target="' + t + '"] {' + Object.keys(r.styles).map(e => e + ": " + r.styles[e] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + t + '"] {' + Object.keys(o.styles).map(e => e + ": " + o.styles[e] + " !important;").join("") + "}"), d
        }

        getAutoAnimateOptions(e, t) {
            let i = {
                easing: this.Reveal.getConfig().autoAnimateEasing,
                duration: this.Reveal.getConfig().autoAnimateDuration,
                delay: 0
            };
            return i = Qe(i, t), e.parentNode && (t = st(e.parentNode, "[data-auto-animate-target]")) && (i = this.getAutoAnimateOptions(t, i)), e.dataset.autoAnimateEasing && (i.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (i.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (i.delay = parseFloat(e.dataset.autoAnimateDelay)), i
        }

        getAutoAnimatableProperties(i, t, s) {
            let a = this.Reveal.getConfig(), n = {styles: []};
            if (!1 !== s.translate || !1 !== s.scale) {
                let e;
                var r;
                e = "function" == typeof s.measure ? s.measure(t) : a.center ? t.getBoundingClientRect() : (r = this.Reveal.getScale(), {
                    x: t.offsetLeft * r,
                    y: t.offsetTop * r,
                    width: t.offsetWidth * r,
                    height: t.offsetHeight * r
                }), n.x = e.x, n.y = e.y, n.width = e.width, n.height = e.height
            }
            const o = getComputedStyle(t);
            return (s.styles || a.autoAnimateStyles).forEach(e => {
                let t;
                void 0 !== (e = "string" == typeof e ? {property: e} : e).from && "from" === i ? t = {
                    value: e.from,
                    explicitValue: !0
                } : void 0 !== e.to && "to" === i ? t = {
                    value: e.to,
                    explicitValue: !0
                } : ("line-height" === e.property && (t = parseFloat(o["line-height"]) / parseFloat(o["font-size"])), isNaN(t) && (t = o[e.property])), "" !== t && (n.styles[e.property] = t)
            }), n
        }

        getAutoAnimatableElements(e, t) {
            let i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
                s = [];
            return i.filter((e, t) => {
                if (-1 === s.indexOf(e.to)) return s.push(e.to), !0
            })
        }

        getAutoAnimatePairs(e, t) {
            let i = [];
            const s = "h1, h2, h3, h4, h5, h6, p, li";
            return this.findAutoAnimateMatches(i, e, t, "[data-id]", e => e.nodeName + ":::" + e.getAttribute("data-id")), this.findAutoAnimateMatches(i, e, t, s, e => e.nodeName + ":::" + e.innerText), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", e => e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))), this.findAutoAnimateMatches(i, e, t, "pre", e => e.nodeName + ":::" + e.innerText), i.forEach(e => {
                a(e.from, s) ? e.options = {scale: !1} : a(e.from, "pre") && (e.options = {
                    scale: !1,
                    styles: ["width", "height"]
                }, this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", e => e.textContent, {
                    scale: !1,
                    styles: [],
                    measure: this.getLocalBoundingBox.bind(this)
                }), this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-numbers[data-line-number]", e => e.getAttribute("data-line-number"), {
                    scale: !1,
                    styles: ["width"],
                    measure: this.getLocalBoundingBox.bind(this)
                }))
            }, this), i
        }

        getLocalBoundingBox(e) {
            var t = this.Reveal.getScale();
            return {
                x: Math.round(e.offsetLeft * t * 100) / 100,
                y: Math.round(e.offsetTop * t * 100) / 100,
                width: Math.round(e.offsetWidth * t * 100) / 100,
                height: Math.round(e.offsetHeight * t * 100) / 100
            }
        }

        findAutoAnimateMatches(a, e, t, i, n, r) {
            let o = {}, l = {};
            [].slice.call(e.querySelectorAll(i)).forEach((e, t) => {
                var i = n(e);
                "string" == typeof i && i.length && (o[i] = o[i] || [], o[i].push(e))
            }), [].slice.call(t.querySelectorAll(i)).forEach((e, t) => {
                var i = n(e);
                let s;
                if (l[i] = l[i] || [], l[i].push(e), o[i]) {
                    const a = l[i].length - 1, e = o[i].length - 1;
                    o[i][a] ? (s = o[i][a], o[i][a] = null) : o[i][e] && (s = o[i][e], o[i][e] = null)
                }
                s && a.push({from: s, to: e, options: r})
            })
        }

        getUnmatchedAutoAnimateElements(e) {
            return [].slice.call(e.children).reduce((e, t) => {
                var i = t.querySelector("[data-auto-animate-target]");
                return t.hasAttribute("data-auto-animate-target") || i || e.push(t), e = t.querySelector("[data-auto-animate-target]") ? e.concat(this.getUnmatchedAutoAnimateElements(t)) : e
            }, [])
        }
    }

    class pt {
        constructor(e) {
            this.Reveal = e, this.active = !1, this.activatedCallbacks = [], this.onScroll = this.onScroll.bind(this)
        }

        activate() {
            if (!this.active) {
                var e = this.Reveal.getState();
                this.active = !0, this.slideHTMLBeforeActivation = this.Reveal.getSlidesElement().innerHTML;
                const i = Ze(this.Reveal.getRevealElement(), ht);
                let a;
                this.viewportElement.classList.add("loading-scroll-mode", "reveal-scroll");
                var t = window.getComputedStyle(this.viewportElement);
                t && t.background && (a = t.background);
                const r = [], s = i[0].parentNode;
                let n;
                const o = (e, t, i) => {
                    let s;
                    if (n && this.Reveal.shouldAutoAnimateBetween(n, e)) (s = document.createElement("div")).className = "scroll-page-content scroll-auto-animate-page", s.style.display = "none", n.closest(".scroll-page-content").parentNode.appendChild(s); else {
                        const e = document.createElement("div"),
                            t = (e.className = "scroll-page", r.push(e), a && (e.style.background = a), document.createElement("div"));
                        t.className = "scroll-page-sticky", e.appendChild(t), (s = document.createElement("div")).className = "scroll-page-content", t.appendChild(s)
                    }
                    s.appendChild(e), e.classList.remove("past", "future"), e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", i), e.slideBackgroundElement && (e.slideBackgroundElement.remove("past", "future"), s.insertBefore(e.slideBackgroundElement, e)), n = e
                };
                i.forEach((e, i) => {
                    this.Reveal.isVerticalStack(e) ? e.querySelectorAll("section").forEach((e, t) => {
                        o(e, i, t)
                    }) : o(e, i, 0)
                }, this), this.createProgressBar(), Ze(this.Reveal.getRevealElement(), ".stack").forEach(e => e.remove()), r.forEach(e => s.appendChild(e)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.layout(), this.Reveal.setState(e), this.activatedCallbacks.forEach(e => e()), this.activatedCallbacks = [], this.restoreScrollPosition(), this.viewportElement.classList.remove("loading-scroll-mode"), this.viewportElement.addEventListener("scroll", this.onScroll, {passive: !0})
            }
        }

        deactivate() {
            var e;
            this.active && (e = this.Reveal.getState(), this.active = !1, this.viewportElement.removeEventListener("scroll", this.onScroll), this.viewportElement.classList.remove("reveal-scroll"), this.removeProgressBar(), this.Reveal.getSlidesElement().innerHTML = this.slideHTMLBeforeActivation, this.Reveal.sync(), this.Reveal.setState(e), this.slideHTMLBeforeActivation = null)
        }

        toggle(e) {
            "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate()
        }

        isActive() {
            return this.active
        }

        createProgressBar() {
            this.progressBar = document.createElement("div"), this.progressBar.className = "scrollbar", this.progressBarInner = document.createElement("div"), this.progressBarInner.className = "scrollbar-inner", this.progressBar.appendChild(this.progressBarInner), this.progressBarPlayhead = document.createElement("div"), this.progressBarPlayhead.className = "scrollbar-playhead", this.progressBarInner.appendChild(this.progressBarPlayhead), this.viewportElement.insertBefore(this.progressBar, this.viewportElement.firstChild);
            const t = e => {
                e = (e.clientY - this.progressBarInner.getBoundingClientRect().top) / this.progressBarHeight, e = Math.max(Math.min(e, 1), 0);
                this.viewportElement.scrollTop = e * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight)
            }, i = e => {
                this.draggingProgressBar = !1, this.showProgressBar(), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", i)
            };
            this.progressBarInner.addEventListener("mousedown", e => {
                e.preventDefault(), this.draggingProgressBar = !0, document.addEventListener("mousemove", t), document.addEventListener("mouseup", i), t(e)
            })
        }

        removeProgressBar() {
            this.progressBar && (this.progressBar.remove(), this.progressBar = null)
        }

        layout() {
            this.isActive() && (this.syncPages(), this.syncScrollPosition())
        }

        syncPages() {
            const s = this.Reveal.getConfig(),
                a = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), e = this.Reveal.getScale(),
                n = "compact" === s.scrollLayout, r = this.viewportElement.offsetHeight, t = a.height * e,
                o = n ? t : r, l = n ? t : r,
                i = (this.viewportElement.style.setProperty("--page-height", o + "px"), this.viewportElement.style.scrollSnapType = "string" == typeof s.scrollSnap ? "y " + s.scrollSnap : "", this.slideTriggers = [], Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page")));
            this.pages = i.map(e => {
                const t = this.createPage({
                    pageElement: e,
                    slideElement: e.querySelector("section"),
                    stickyElement: e.querySelector(".scroll-page-sticky"),
                    contentElement: e.querySelector(".scroll-page-content"),
                    backgroundElement: e.querySelector(".slide-background"),
                    autoAnimateElements: e.querySelectorAll(".scroll-auto-animate-page"),
                    autoAnimatePages: []
                });
                t.pageElement.style.setProperty("--slide-height", !0 === s.center ? "auto" : a.height + "px"), this.slideTriggers.push({
                    page: t,
                    activate: () => this.activatePage(t),
                    deactivate: () => this.deactivatePage(t)
                }), this.createFragmentTriggersForPage(t), 0 < t.autoAnimateElements.length && this.createAutoAnimateTriggersForPage(t);
                var i = Math.max(t.scrollTriggers.length - 1, 0);
                i += t.autoAnimatePages.reduce((e, t) => e + Math.max(t.scrollTriggers.length - 1, 0), t.autoAnimatePages.length), t.pageElement.querySelectorAll(".scroll-snap-point").forEach(e => e.remove());
                for (let e = 0; e < i + 1; e++) {
                    const a = document.createElement("div");
                    a.className = "scroll-snap-point", a.style.height = l + "px", a.style.scrollSnapAlign = n ? "center" : "start", t.pageElement.appendChild(a), 0 === e && (a.style.marginTop = -l + "px")
                }
                return n && 0 < t.scrollTriggers.length ? (t.pageHeight = r, t.pageElement.style.setProperty("--page-height", r + "px")) : (t.pageHeight = o, t.pageElement.style.removeProperty("--page-height")), t.scrollPadding = l * i, t.totalHeight = t.pageHeight + t.scrollPadding, t.pageElement.style.setProperty("--page-scroll-padding", t.scrollPadding + "px"), 0 < i ? (t.stickyElement.style.position = "sticky", t.stickyElement.style.top = Math.max((r - t.pageHeight) / 2, 0) + "px") : (t.stickyElement.style.position = "relative", t.pageElement.style.scrollSnapAlign = t.pageHeight < r ? "center" : "start"), t
            }), this.setTriggerRanges(), this.viewportElement.setAttribute("data-scrollbar", s.scrollProgress), s.scrollProgress && 1 < this.totalScrollTriggerCount ? (this.progressBar || this.createProgressBar(), this.syncProgressBar()) : this.removeProgressBar()
        }

        setTriggerRanges() {
            this.totalScrollTriggerCount = this.slideTriggers.reduce((e, t) => e + Math.max(t.page.scrollTriggers.length, 1), 0);
            let s = 0;
            this.slideTriggers.forEach((e, t) => {
                e.range = [s, s + Math.max(e.page.scrollTriggers.length, 1) / this.totalScrollTriggerCount];
                const i = (e.range[1] - e.range[0]) / e.page.scrollTriggers.length;
                e.page.scrollTriggers.forEach((e, t) => {
                    e.range = [s + t * i, s + (t + 1) * i]
                }), s = e.range[1]
            })
        }

        createFragmentTriggersForPage(i, s) {
            s = s || i.slideElement;
            const e = this.Reveal.fragments.sort(s.querySelectorAll(".fragment"), !0);
            return e.length && (i.fragments = this.Reveal.fragments.sort(s.querySelectorAll(".fragment:not(.disabled)")), i.scrollTriggers.push({
                activate: () => {
                    this.Reveal.fragments.update(-1, i.fragments, s)
                }
            }, ...e.map((e, t) => ({
                activate: () => {
                    this.Reveal.fragments.update(t, i.fragments, s)
                }
            })))), i.scrollTriggers.length
        }

        createAutoAnimateTriggersForPage(s) {
            0 < s.autoAnimateElements.length && this.slideTriggers.push(...Array.from(s.autoAnimateElements).map((e, t) => {
                let i = this.createPage({
                    slideElement: e.querySelector("section"),
                    contentElement: e,
                    backgroundElement: e.querySelector(".slide-background")
                });
                return this.createFragmentTriggersForPage(i, i.slideElement), s.autoAnimatePages.push(i), {
                    page: i,
                    activate: () => this.activatePage(i),
                    deactivate: () => this.deactivatePage(i)
                }
            }))
        }

        createPage(e) {
            return e.scrollTriggers = [], e.indexh = parseInt(e.slideElement.getAttribute("data-index-h"), 10), e.indexv = parseInt(e.slideElement.getAttribute("data-index-v"), 10), e
        }

        syncProgressBar() {
            this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(e => e.remove());
            var e = this.viewportElement.scrollHeight, t = this.viewportElement.offsetHeight, i = t / e;
            this.progressBarHeight = this.progressBarInner.offsetHeight, this.playheadHeight = Math.max(i * this.progressBarHeight, 8), this.progressBarScrollableHeight = this.progressBarHeight - this.playheadHeight;
            const s = t / e * this.progressBarHeight, n = Math.min(s / 8, 4);
            this.progressBarPlayhead.style.height = this.playheadHeight - n + "px", 6 < s ? this.slideTriggers.forEach(s => {
                const a = s["page"];
                a.progressBarSlide = document.createElement("div"), a.progressBarSlide.className = "scrollbar-slide", a.progressBarSlide.style.top = s.range[0] * this.progressBarHeight + "px", a.progressBarSlide.style.height = (s.range[1] - s.range[0]) * this.progressBarHeight - n + "px", a.progressBarSlide.classList.toggle("has-triggers", 0 < a.scrollTriggers.length), this.progressBarInner.appendChild(a.progressBarSlide), a.scrollTriggerElements = a.scrollTriggers.map((e, t) => {
                    const i = document.createElement("div");
                    return i.className = "scrollbar-trigger", i.style.top = (e.range[0] - s.range[0]) * this.progressBarHeight + "px", i.style.height = (e.range[1] - e.range[0]) * this.progressBarHeight - n + "px", a.progressBarSlide.appendChild(i), 0 === t && (i.style.display = "none"), i
                })
            }) : this.pages.forEach(e => e.progressBarSlide = null)
        }

        syncScrollPosition() {
            const e = this.viewportElement.offsetHeight, i = e / this.viewportElement.scrollHeight,
                t = this.viewportElement.scrollTop, s = this.viewportElement.scrollHeight - e,
                a = Math.max(Math.min(t / s, 1), 0),
                n = Math.max(Math.min((t + e / 2) / this.viewportElement.scrollHeight, 1), 0);
            let r;
            this.slideTriggers.forEach(e => {
                const t = e["page"];
                a >= e.range[0] - 2 * i && a <= e.range[1] + 2 * i && !t.loaded ? (t.loaded = !0, this.Reveal.slideContent.load(t.slideElement)) : t.loaded && (t.loaded = !1, this.Reveal.slideContent.unload(t.slideElement)), a >= e.range[0] && a <= e.range[1] ? (this.activateTrigger(e), r = e.page) : e.active && this.deactivateTrigger(e)
            }), r && r.scrollTriggers.forEach(e => {
                n >= e.range[0] && n <= e.range[1] ? this.activateTrigger(e) : e.active && this.deactivateTrigger(e)
            }), this.setProgressBarValue(t / (this.viewportElement.scrollHeight - e))
        }

        setProgressBarValue(e) {
            this.progressBar && (this.progressBarPlayhead.style.transform = `translateY(${e * this.progressBarScrollableHeight}px)`, this.getAllPages().filter(e => e.progressBarSlide).forEach(i => {
                i.progressBarSlide.classList.toggle("active", !0 === i.active), i.scrollTriggers.forEach((e, t) => {
                    i.scrollTriggerElements[t].classList.toggle("active", !0 === i.active && !0 === e.active)
                })
            }), this.showProgressBar())
        }

        showProgressBar() {
            this.progressBar.classList.add("visible"), clearTimeout(this.hideProgressBarTimeout), "auto" !== this.Reveal.getConfig().scrollProgress || this.draggingProgressBar || (this.hideProgressBarTimeout = setTimeout(() => {
                this.progressBar && this.progressBar.classList.remove("visible")
            }, 500))
        }

        scrollToSlide(e) {
            var t;
            this.active ? (t = this.getScrollTriggerBySlide(e)) && (this.viewportElement.scrollTop = t.range[0] * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight)) : this.activatedCallbacks.push(() => this.scrollToSlide(e))
        }

        storeScrollPosition() {
            clearTimeout(this.storeScrollPositionTimeout), this.storeScrollPositionTimeout = setTimeout(() => {
                sessionStorage.setItem("reveal-scroll-top", this.viewportElement.scrollTop), sessionStorage.setItem("reveal-scroll-origin", location.origin + location.pathname), this.storeScrollPositionTimeout = null
            }, 50)
        }

        restoreScrollPosition() {
            var e = sessionStorage.getItem("reveal-scroll-top"), t = sessionStorage.getItem("reveal-scroll-origin");
            e && t === location.origin + location.pathname && (this.viewportElement.scrollTop = parseInt(e, 10))
        }

        activatePage(e) {
            if (!e.active) {
                e.active = !0;
                const {slideElement: t, backgroundElement: i, contentElement: s, indexh: a, indexv: n} = e;
                s.style.display = "block", t.classList.add("present"), i && i.classList.add("present"), this.Reveal.setCurrentScrollPage(t, a, n), this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t, this.viewportElement), Array.from(s.parentNode.querySelectorAll(".scroll-page-content")).forEach(e => {
                    e !== s && (e.style.display = "none")
                })
            }
        }

        deactivatePage(e) {
            e.active && (e.active = !1, e.slideElement.classList.remove("present"), e.backgroundElement.classList.remove("present"))
        }

        activateTrigger(e) {
            e.active || (e.active = !0, e.activate())
        }

        deactivateTrigger(e) {
            e.active && (e.active = !1, e.deactivate && e.deactivate())
        }

        getSlideByIndices(t, i) {
            var e = this.getAllPages().find(e => e.indexh === t && e.indexv === i);
            return e ? e.slideElement : null
        }

        getScrollTriggerBySlide(t) {
            return this.slideTriggers.find(e => e.page.slideElement === t)
        }

        getAllPages() {
            return this.pages.flatMap(e => [e, ...e.autoAnimatePages || []])
        }

        onScroll() {
            this.syncScrollPosition(), this.storeScrollPosition()
        }

        get viewportElement() {
            return this.Reveal.getViewportElement()
        }
    }

    class mt {
        constructor(e) {
            this.Reveal = e
        }

        async activate() {
            const r = this.Reveal.getConfig(), e = Ze(this.Reveal.getRevealElement(), ct),
                o = r.slideNumber && /all|print/i.test(r.showSlideNumber),
                t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
                l = Math.floor(t.width * (1 + r.margin)), d = Math.floor(t.height * (1 + r.margin)), c = t.width,
                h = t.height;
            await new Promise(requestAnimationFrame), m("@page{size:" + l + "px " + d + "px; margin: 0px;}"), m(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + c + "px; max-height:" + h + "px}"), document.documentElement.classList.add("reveal-print", "print-pdf"), document.body.style.width = l + "px", document.body.style.height = d + "px";
            var i = this.Reveal.getViewportElement();
            let u;
            if (i) {
                const r = window.getComputedStyle(i);
                r && r.background && (u = r.background)
            }
            await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(c, h), await new Promise(requestAnimationFrame);
            const g = e.map(e => e.scrollHeight), v = [], s = e[0].parentNode;
            let p = 1;
            e.forEach(function (i, s) {
                if (!1 === i.classList.contains("stack")) {
                    let e = (l - c) / 2, t = (d - h) / 2;
                    var s = g[s], a = Math.max(Math.ceil(s / d), 1);
                    (1 === (a = Math.min(a, r.pdfMaxPagesPerSlide)) && r.center || i.classList.contains("center")) && (t = Math.max((d - s) / 2, 0));
                    const n = document.createElement("div");
                    if (v.push(n), n.className = "pdf-page", n.style.height = (d + r.pdfPageHeightOffset) * a + "px", u && (n.style.background = u), n.appendChild(i), i.style.left = e + "px", i.style.top = t + "px", i.style.width = c + "px", this.Reveal.slideContent.layout(i), i.slideBackgroundElement && n.insertBefore(i.slideBackgroundElement, i), r.showNotes) {
                        const Ze = this.Reveal.getSlideNotes(i);
                        if (Ze) {
                            const i = 8, o = "string" == typeof r.showNotes ? r.showNotes : "inline",
                                s = document.createElement("div");
                            s.classList.add("speaker-notes"), s.classList.add("speaker-notes-pdf"), s.setAttribute("data-layout", o), s.innerHTML = Ze, "separate-page" === o ? v.push(s) : (s.style.left = "8px", s.style.bottom = "8px", s.style.width = l - 16 + "px", n.appendChild(s))
                        }
                    }
                    if (o) {
                        const r = document.createElement("div");
                        r.classList.add("slide-number"), r.classList.add("slide-number-pdf"), r.innerHTML = p++, n.appendChild(r)
                    }
                    if (r.pdfSeparateFragments) {
                        const r = this.Reveal.fragments.sort(n.querySelectorAll(".fragment"), !0);
                        let s;
                        r.forEach(function (e, t) {
                            s && s.forEach(function (e) {
                                e.classList.remove("current-fragment")
                            }), e.forEach(function (e) {
                                e.classList.add("visible", "current-fragment")
                            }, this);
                            const i = n.cloneNode(!0);
                            if (o) {
                                const e = t + 1;
                                i.querySelector(".slide-number-pdf").innerHTML += "." + e
                            }
                            v.push(i), s = e
                        }, this), r.forEach(function (e) {
                            e.forEach(function (e) {
                                e.classList.remove("visible", "current-fragment")
                            })
                        })
                    } else Ze(n, ".fragment:not(.fade-out)").forEach(function (e) {
                        e.classList.add("visible")
                    })
                }
            }, this), await new Promise(requestAnimationFrame), v.forEach(e => s.appendChild(e)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.dispatchEvent({type: "pdf-ready"})
        }

        isActive() {
            return "print" === this.Reveal.getConfig().view
        }
    }

    class ft {
        constructor(e) {
            this.Reveal = e
        }

        configure(e, t) {
            !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable()
        }

        disable() {
            Ze(this.Reveal.getSlidesElement(), ".fragment").forEach(e => {
                e.classList.add("visible"), e.classList.remove("current-fragment")
            })
        }

        enable() {
            Ze(this.Reveal.getSlidesElement(), ".fragment").forEach(e => {
                e.classList.remove("visible"), e.classList.remove("current-fragment")
            })
        }

        availableRoutes() {
            let e = this.Reveal.getCurrentSlide();
            var t, i;
            return e && this.Reveal.getConfig().fragments ? (t = e.querySelectorAll(".fragment:not(.disabled)"), i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)"), {
                prev: 0 < t.length - i.length,
                next: !!i.length
            }) : {prev: !1, next: !1}
        }

        sort(e, t = !1) {
            e = Array.from(e);
            let i = [], s = [], a = [], n = (e.forEach(e => {
                var t;
                e.hasAttribute("data-fragment-index") ? (t = parseInt(e.getAttribute("data-fragment-index"), 10), i[t] || (i[t] = []), i[t].push(e)) : s.push([e])
            }), i = i.concat(s), 0);
            return i.forEach(e => {
                e.forEach(e => {
                    a.push(e), e.setAttribute("data-fragment-index", n)
                }), n++
            }), !0 === t ? i : a
        }

        sortAll() {
            this.Reveal.getHorizontalSlides().forEach(e => {
                let t = Ze(e, "section");
                t.forEach((e, t) => {
                    this.sort(e.querySelectorAll(".fragment"))
                }, this), 0 === t.length && this.sort(e.querySelectorAll(".fragment"))
            })
        }

        update(a, e, t = this.Reveal.getCurrentSlide()) {
            let n = {shown: [], hidden: []};
            if (t && this.Reveal.getConfig().fragments && (e = e || this.sort(t.querySelectorAll(".fragment"))).length) {
                let s = 0;
                if ("number" != typeof a) {
                    let e = this.sort(t.querySelectorAll(".fragment.visible")).pop();
                    e && (a = parseInt(e.getAttribute("data-fragment-index") || 0, 10))
                }
                Array.from(e).forEach((e, t) => {
                    var i;
                    e.hasAttribute("data-fragment-index") && (t = parseInt(e.getAttribute("data-fragment-index"), 10)), s = Math.max(s, t), t <= a ? (i = e.classList.contains("visible"), e.classList.add("visible"), e.classList.remove("current-fragment"), t === a && (this.Reveal.announceStatus(this.Reveal.getStatusText(e)), e.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(e)), i || (n.shown.push(e), this.Reveal.dispatchEvent({
                        target: e,
                        type: "visible",
                        bubbles: !1
                    }))) : (t = e.classList.contains("visible"), e.classList.remove("visible"), e.classList.remove("current-fragment"), t && (this.Reveal.slideContent.stopEmbeddedContent(e), n.hidden.push(e), this.Reveal.dispatchEvent({
                        target: e,
                        type: "hidden",
                        bubbles: !1
                    })))
                }), a = "number" == typeof a ? a : -1, a = Math.max(Math.min(a, s), -1), t.setAttribute("data-fragment", a)
            }
            return n
        }

        sync(e = this.Reveal.getCurrentSlide()) {
            return this.sort(e.querySelectorAll(".fragment"))
        }

        goto(t, e = 0) {
            let i = this.Reveal.getCurrentSlide();
            if (i && this.Reveal.getConfig().fragments) {
                var s = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
                if (s.length) {
                    if ("number" != typeof t) {
                        let e = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
                        t = e ? parseInt(e.getAttribute("data-fragment-index") || 0, 10) : -1
                    }
                    e = this.update(t += e, s);
                    return e.hidden.length && this.Reveal.dispatchEvent({
                        type: "fragmenthidden",
                        data: {fragment: e.hidden[0], fragments: e.hidden}
                    }), e.shown.length && this.Reveal.dispatchEvent({
                        type: "fragmentshown",
                        data: {fragment: e.shown[0], fragments: e.shown}
                    }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!e.shown.length && !e.hidden.length)
                }
            }
            return !1
        }

        next() {
            return this.goto(null, 1)
        }

        prev() {
            return this.goto(null, -1)
        }
    }

    class bt {
        constructor(e) {
            this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this)
        }

        activate() {
            var e;
            !this.Reveal.getConfig().overview || this.Reveal.isScrollView() || this.isActive() || (this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), Ze(this.Reveal.getRevealElement(), ct).forEach(e => {
                e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0)
            }), e = this.Reveal.getComputedSlideSize(), this.overviewSlideWidth = e.width + 70, this.overviewSlideHeight = e.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout(), e = this.Reveal.getIndices(), this.Reveal.dispatchEvent({
                type: "overviewshown",
                data: {indexh: e.h, indexv: e.v, currentSlide: this.Reveal.getCurrentSlide()}
            }))
        }

        layout() {
            this.Reveal.getHorizontalSlides().forEach((e, i) => {
                e.setAttribute("data-index-h", i), it(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && Ze(e, "section").forEach((e, t) => {
                    e.setAttribute("data-index-h", i), e.setAttribute("data-index-v", t), it(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)")
                })
            }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, t) => {
                it(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), Ze(e, ".slide-background").forEach((e, t) => {
                    it(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)")
                })
            })
        }

        update() {
            var e = Math.min(window.innerWidth, window.innerHeight), e = Math.max(e / 5, 150) / e,
                t = this.Reveal.getIndices();
            this.Reveal.transformSlides({overview: ["scale(" + e + ")", "translateX(" + -t.h * this.overviewSlideWidth + "px)", "translateY(" + -t.v * this.overviewSlideHeight + "px)"].join(" ")})
        }

        deactivate() {
            var e;
            this.Reveal.getConfig().overview && (this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
                this.Reveal.getRevealElement().classList.remove("overview-deactivating")
            }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), Ze(this.Reveal.getRevealElement(), ct).forEach(e => {
                it(e, ""), e.removeEventListener("click", this.onSlideClicked, !0)
            }), Ze(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(e => {
                it(e, "")
            }), this.Reveal.transformSlides({overview: ""}), e = this.Reveal.getIndices(), this.Reveal.slide(e.h, e.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
                type: "overviewhidden",
                data: {indexh: e.h, indexv: e.v, currentSlide: this.Reveal.getCurrentSlide()}
            }))
        }

        toggle(e) {
            "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate()
        }

        isActive() {
            return this.active
        }

        onSlideClicked(t) {
            if (this.isActive()) {
                t.preventDefault();
                let e = t.target;
                for (; e && !e.nodeName.match(/section/gi);) e = e.parentNode;
                var i;
                e && !e.classList.contains("disabled") && (this.deactivate(), e.nodeName.match(/section/gi)) && (t = parseInt(e.getAttribute("data-index-h"), 10), i = parseInt(e.getAttribute("data-index-v"), 10), this.Reveal.slide(t, i))
            }
        }
    }

    class wt {
        constructor(e) {
            this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)
        }

        configure(e, t) {
            "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview"
        }

        bind() {
            document.addEventListener("keydown", this.onDocumentKeyDown, !1)
        }

        unbind() {
            document.removeEventListener("keydown", this.onDocumentKeyDown, !1)
        }

        addKeyBinding(e, t) {
            "object" == typeof e && e.keyCode ? this.bindings[e.keyCode] = {
                callback: t,
                key: e.key,
                description: e.description
            } : this.bindings[e] = {callback: t, key: null, description: null}
        }

        removeKeyBinding(e) {
            delete this.bindings[e]
        }

        triggerKey(e) {
            this.onDocumentKeyDown({keyCode: e})
        }

        registerKeyboardShortcut(e, t) {
            this.shortcuts[e] = t
        }

        getShortcuts() {
            return this.shortcuts
        }

        getBindings() {
            return this.bindings
        }

        onDocumentKeyDown(a) {
            let n = this.Reveal.getConfig();
            if ("function" == typeof n.keyboardCondition && !1 === n.keyboardCondition(a)) return !0;
            if ("focused" === n.keyboardCondition && !this.Reveal.isFocused()) return !0;
            var r = a.keyCode, o = !this.Reveal.isAutoSliding(),
                l = (this.Reveal.onUserInput(a), document.activeElement && !0 === document.activeElement.isContentEditable),
                e = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
                t = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
                i = !(-1 !== [32, 37, 38, 39, 40, 78, 80, 191].indexOf(a.keyCode) && a.shiftKey || a.altKey) && (a.shiftKey || a.altKey || a.ctrlKey || a.metaKey);
            if (!(l || e || t || i)) {
                let t, e = [66, 86, 190, 191];
                if ("object" == typeof n.keyboard) for (t in n.keyboard) "togglePause" === n.keyboard[t] && e.push(parseInt(t, 10));
                if (this.Reveal.isPaused() && -1 === e.indexOf(r)) return !1;
                let i = "linear" === n.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
                    s = !1;
                if ("object" == typeof n.keyboard) for (t in n.keyboard) if (parseInt(t, 10) === r) {
                    let e = n.keyboard[t];
                    "function" == typeof e ? e.apply(null, [a]) : "string" == typeof e && "function" == typeof this.Reveal[e] && this.Reveal[e].call(), s = !0
                }
                if (!1 === s) for (t in this.bindings) if (parseInt(t, 10) === r) {
                    let e = this.bindings[t].callback;
                    "function" == typeof e ? e.apply(null, [a]) : "string" == typeof e && "function" == typeof this.Reveal[e] && this.Reveal[e].call(), s = !0
                }
                if (!1 === s) {
                    s = !0;
                    if (80 === r || 33 === r) this.Reveal.prev({skipFragments: a.altKey}); else if (78 === r || 34 === r) this.Reveal.next({skipFragments: a.altKey}); else if (72 === r || 37 === r) a.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && i ? this.Reveal.prev({skipFragments: a.altKey}) : this.Reveal.left({skipFragments: a.altKey}); else if (76 === r || 39 === r) a.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && i ? this.Reveal.next({skipFragments: a.altKey}) : this.Reveal.right({skipFragments: a.altKey}); else if (75 === r || 38 === r) a.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && i ? this.Reveal.prev({skipFragments: a.altKey}) : this.Reveal.up({skipFragments: a.altKey}); else if (74 === r || 40 === r) a.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && i ? this.Reveal.next({skipFragments: a.altKey}) : this.Reveal.down({skipFragments: a.altKey}); else if (36 === r) this.Reveal.slide(0); else if (35 === r) this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1); else if (32 === r) this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), a.shiftKey ? this.Reveal.prev({skipFragments: a.altKey}) : this.Reveal.next({skipFragments: a.altKey}); else if ([58, 59, 66, 86, 190].includes(r) || 191 === r && !a.shiftKey) this.Reveal.togglePause(); else if (70 === r) {
                        l = n.embedded ? this.Reveal.getViewportElement() : document.documentElement;
                        let e = (l = l || document.documentElement).requestFullscreen || l.webkitRequestFullscreen || l.webkitRequestFullScreen || l.mozRequestFullScreen || l.msRequestFullscreen;
                        e && e.apply(l)
                    } else 65 === r ? n.autoSlideStoppable && this.Reveal.toggleAutoSlide(o) : 71 === r ? n.jumpToSlide && this.Reveal.toggleJumpToSlide() : 191 === r && a.shiftKey ? this.Reveal.toggleHelp() : s = !1
                }
                s ? a.preventDefault && a.preventDefault() : 27 !== r && 79 !== r || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), a.preventDefault && a.preventDefault()), this.Reveal.cueAutoSlide()
            }
        }
    }

    class Et {
        MAX_REPLACE_STATE_FREQUENCY = 1e3;

        constructor(e) {
            this.Reveal = e, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this)
        }

        bind() {
            window.addEventListener("hashchange", this.onWindowHashChange, !1)
        }

        unbind() {
            window.removeEventListener("hashchange", this.onWindowHashChange, !1)
        }

        getIndicesFromHash(a = window.location.hash, n = {}) {
            let i = a.replace(/^#\/?/, ""), r = i.split("/");
            if (/^[0-9]*$/.test(r[0]) || !i.length) {
                const a = this.Reveal.getConfig();
                let e, t = a.hashOneBasedIndex || n.oneBasedIndex ? 1 : 0, i = parseInt(r[0], 10) - t || 0,
                    s = parseInt(r[1], 10) - t || 0;
                return a.fragmentInURL && (e = parseInt(r[2], 10), isNaN(e) && (e = void 0)), {h: i, v: s, f: e}
            }
            {
                let e, t;
                /\/[-\d]+$/g.test(i) && (t = parseInt(i.split("/").pop(), 10), t = isNaN(t) ? void 0 : t, i = i.split("/").shift());
                try {
                    e = document.getElementById(decodeURIComponent(i)).closest(".slides section")
                } catch (a) {
                }
                if (e) return {...this.Reveal.getIndices(e), f: t}
            }
            return null
        }

        readURL() {
            var e = this.Reveal.getIndices(), t = this.getIndicesFromHash();
            t ? t.h === e.h && t.v === e.v && void 0 === t.f || this.Reveal.slide(t.h, t.v, t.f) : this.Reveal.slide(e.h || 0, e.v || 0)
        }

        writeURL(e) {
            var t = this.Reveal.getConfig(), i = this.Reveal.getCurrentSlide();
            clearTimeout(this.writeURLTimeout), "number" == typeof e ? this.writeURLTimeout = setTimeout(this.writeURL, e) : i && (e = this.getHash(), t.history ? window.location.hash = e : t.hash && ("/" === e ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e)))
        }

        replaceState(e) {
            window.history.replaceState(null, null, e), this.replaceStateTimestamp = Date.now()
        }

        debouncedReplaceState(e) {
            clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e), this.MAX_REPLACE_STATE_FREQUENCY)
        }

        getHash(e) {
            let t = "/", i = e || this.Reveal.getCurrentSlide(), s = i ? i.getAttribute("id") : null,
                a = (s = s && encodeURIComponent(s), this.Reveal.getIndices(e));
            return this.Reveal.getConfig().fragmentInURL || (a.f = void 0), "string" == typeof s && s.length ? t = "/" + s : (e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0, (0 < a.h || 0 < a.v || 0 <= a.f) && (t += a.h + e), (0 < a.v || 0 <= a.f) && (t += "/" + (a.v + e))), 0 <= a.f && (t += "/" + a.f), t
        }

        onWindowHashChange(e) {
            this.readURL()
        }
    }

    class St {
        constructor(e) {
            this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this)
        }

        render() {
            var e = this.Reveal.getConfig().rtl, t = this.Reveal.getRevealElement();
            this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = Ze(t, ".navigate-left"), this.controlsRight = Ze(t, ".navigate-right"), this.controlsUp = Ze(t, ".navigate-up"), this.controlsDown = Ze(t, ".navigate-down"), this.controlsPrev = Ze(t, ".navigate-prev"), this.controlsNext = Ze(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down")
        }

        configure(e, t) {
            this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows)
        }

        bind() {
            let e = ["touchstart", "click"];
            (e = n ? ["touchstart"] : e).forEach(t => {
                this.controlsLeft.forEach(e => e.addEventListener(t, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach(e => e.addEventListener(t, this.onNavigateRightClicked, !1)), this.controlsUp.forEach(e => e.addEventListener(t, this.onNavigateUpClicked, !1)), this.controlsDown.forEach(e => e.addEventListener(t, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach(e => e.addEventListener(t, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach(e => e.addEventListener(t, this.onNavigateNextClicked, !1))
            })
        }

        unbind() {
            ["touchstart", "click"].forEach(t => {
                this.controlsLeft.forEach(e => e.removeEventListener(t, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach(e => e.removeEventListener(t, this.onNavigateRightClicked, !1)), this.controlsUp.forEach(e => e.removeEventListener(t, this.onNavigateUpClicked, !1)), this.controlsDown.forEach(e => e.removeEventListener(t, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach(e => e.removeEventListener(t, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach(e => e.removeEventListener(t, this.onNavigateNextClicked, !1))
            })
        }

        update() {
            var e, t = this.Reveal.availableRoutes(),
                i = ([...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach(e => {
                    e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled")
                }), t.left && this.controlsLeft.forEach(e => {
                    e.classList.add("enabled"), e.removeAttribute("disabled")
                }), t.right && this.controlsRight.forEach(e => {
                    e.classList.add("enabled"), e.removeAttribute("disabled")
                }), t.up && this.controlsUp.forEach(e => {
                    e.classList.add("enabled"), e.removeAttribute("disabled")
                }), t.down && this.controlsDown.forEach(e => {
                    e.classList.add("enabled"), e.removeAttribute("disabled")
                }), (t.left || t.up) && this.controlsPrev.forEach(e => {
                    e.classList.add("enabled"), e.removeAttribute("disabled")
                }), (t.right || t.down) && this.controlsNext.forEach(e => {
                    e.classList.add("enabled"), e.removeAttribute("disabled")
                }), this.Reveal.getCurrentSlide());
            i && ((e = this.Reveal.fragments.availableRoutes()).prev && this.controlsPrev.forEach(e => {
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
            }), e.next && this.controlsNext.forEach(e => {
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
            }), this.Reveal.isVerticalSlide(i) ? (e.prev && this.controlsUp.forEach(e => {
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
            }), e.next && this.controlsDown.forEach(e => {
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
            })) : (e.prev && this.controlsLeft.forEach(e => {
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
            }), e.next && this.controlsRight.forEach(e => {
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
            }))), this.Reveal.getConfig().controlsTutorial && (i = this.Reveal.getIndices(), !this.Reveal.hasNavigatedVertically() && t.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && t.left && 0 === i.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && t.right && 0 === i.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight")))
        }

        destroy() {
            this.unbind(), this.element.remove()
        }

        onNavigateLeftClicked(e) {
            e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left()
        }

        onNavigateRightClicked(e) {
            e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right()
        }

        onNavigateUpClicked(e) {
            e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up()
        }

        onNavigateDownClicked(e) {
            e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down()
        }

        onNavigatePrevClicked(e) {
            e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev()
        }

        onNavigateNextClicked(e) {
            e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next()
        }
    }

    class At {
        constructor(e) {
            this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this)
        }

        render() {
            this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar)
        }

        configure(e, t) {
            this.element.style.display = e.progress ? "block" : "none"
        }

        bind() {
            this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1)
        }

        unbind() {
            this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1)
        }

        update() {
            if (this.Reveal.getConfig().progress && this.bar) {
                let e = this.Reveal.getProgress();
                this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")"
            }
        }

        getMaxWidth() {
            return this.Reveal.getRevealElement().offsetWidth
        }

        onProgressClicked(e) {
            this.Reveal.onUserInput(e), e.preventDefault();
            let t = this.Reveal.getSlides(), i = t.length, s = Math.floor(e.clientX / this.getMaxWidth() * i);
            this.Reveal.getConfig().rtl && (s = i - s);
            e = this.Reveal.getIndices(t[s]);
            this.Reveal.slide(e.h, e.v)
        }

        destroy() {
            this.element.remove()
        }
    }

    class Rt {
        constructor(e) {
            this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this)
        }

        configure(e, t) {
            e.mouseWheel ? document.addEventListener("wheel", this.onDocumentMouseScroll, !1) : document.removeEventListener("wheel", this.onDocumentMouseScroll, !1), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1))
        }

        showCursor() {
            this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "")
        }

        hideCursor() {
            !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none")
        }

        destroy() {
            this.showCursor(), document.removeEventListener("wheel", this.onDocumentMouseScroll, !1), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1)
        }

        onDocumentCursorActive(e) {
            this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime)
        }

        onDocumentMouseScroll(e) {
            1e3 < Date.now() - this.lastMouseWheelStep && (this.lastMouseWheelStep = Date.now(), 0 < (e = e.detail || -e.wheelDelta) ? this.Reveal.next() : e < 0 && this.Reveal.prev())
        }
    }

    const r = (e, t) => {
        const i = document.createElement("script"),
            s = (i.type = "text/javascript", i.async = !1, i.defer = !1, i.src = e, "function" == typeof t && (i.onload = i.onreadystatechange = e => {
                "load" !== e.type && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = i.onerror = null, t())
            }, i.onerror = e => {
                i.onload = i.onreadystatechange = i.onerror = null, t(new Error("Failed loading script: " + i.src + "\n" + e))
            }), document.querySelector("head"));
        s.insertBefore(i, s.lastChild)
    };

    class kt {
        constructor(e) {
            this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = []
        }

        load(e, a) {
            return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise(t => {
                let i = [], s = 0;
                if (a.forEach(e => {
                    e.condition && !e.condition() || (e.async ? this.asyncDependencies : i).push(e)
                }), i.length) {
                    s = i.length;
                    const a = e => {
                        e && "function" == typeof e.callback && e.callback(), 0 == --s && this.initPlugins().then(t)
                    };
                    i.forEach(e => {
                        "string" == typeof e.id ? (this.registerPlugin(e), a(e)) : "string" == typeof e.src ? r(e.src, () => a(e)) : (console.warn("Unrecognized plugin format", e), a())
                    })
                } else this.initPlugins().then(t)
            })
        }

        initPlugins() {
            return new Promise(t => {
                let a = Object.values(this.registeredPlugins), n = a.length;
                if (0 === n) this.loadAsync().then(t); else {
                    let e, i = () => {
                        0 == --n ? this.loadAsync().then(t) : e()
                    }, s = 0;
                    (e = () => {
                        let t = a[s++];
                        if ("function" == typeof t.init) {
                            let e = t.init(this.Reveal);
                            e && "function" == typeof e.then ? e.then(i) : i()
                        } else i()
                    })()
                }
            })
        }

        loadAsync() {
            return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(e => {
                r(e.src, e.callback)
            }), Promise.resolve()
        }

        registerPlugin(e) {
            2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
            var t = e.id;
            "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered')
        }

        hasPlugin(e) {
            return !!this.registeredPlugins[e]
        }

        getPlugin(e) {
            return this.registeredPlugins[e]
        }

        getRegisteredPlugins() {
            return this.registeredPlugins
        }

        destroy() {
            Object.values(this.registeredPlugins).forEach(e => {
                "function" == typeof e.destroy && e.destroy()
            }), this.registeredPlugins = {}, this.asyncDependencies = []
        }
    }

    class Lt {
        constructor(e) {
            this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this)
        }

        bind() {
            let e = this.Reveal.getRevealElement();
            "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1))
        }

        unbind() {
            let e = this.Reveal.getRevealElement();
            e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1)
        }

        isSwipePrevented(e) {
            if (a(e, "video, audio")) return !0;
            for (; e && "function" == typeof e.hasAttribute;) {
                if (e.hasAttribute("data-prevent-swipe")) return !0;
                e = e.parentNode
            }
            return !1
        }

        onTouchStart(e) {
            if (this.isSwipePrevented(e.target)) return !0;
            this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length
        }

        onTouchMove(e) {
            if (this.isSwipePrevented(e.target)) return !0;
            var t, i, s, a = this.Reveal.getConfig();
            this.touchCaptured ? n && e.preventDefault() : (this.Reveal.onUserInput(e), i = e.touches[0].clientX, s = e.touches[0].clientY, 1 === e.touches.length && 2 !== this.touchStartCount && (t = this.Reveal.availableRoutes({includeFragments: !0}), i = i - this.touchStartX, s = s - this.touchStartY, 40 < i && Math.abs(i) > Math.abs(s) ? (this.touchCaptured = !0, "linear" === a.navigationMode ? a.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : i < -40 && Math.abs(i) > Math.abs(s) ? (this.touchCaptured = !0, "linear" === a.navigationMode ? a.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : 40 < s && t.up ? (this.touchCaptured = !0, "linear" === a.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : s < -40 && t.down && (this.touchCaptured = !0, "linear" === a.navigationMode ? this.Reveal.next() : this.Reveal.down()), a.embedded && !this.touchCaptured && !this.Reveal.isVerticalSlide() || e.preventDefault()))
        }

        onTouchEnd(e) {
            this.touchCaptured = !1
        }

        onPointerDown(e) {
            e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                clientX: e.clientX,
                clientY: e.clientY
            }], this.onTouchStart(e))
        }

        onPointerMove(e) {
            e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                clientX: e.clientX,
                clientY: e.clientY
            }], this.onTouchMove(e))
        }

        onPointerUp(e) {
            e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                clientX: e.clientX,
                clientY: e.clientY
            }], this.onTouchEnd(e))
        }
    }

    const i = "focus", o = "blur";

    class Ct {
        constructor(e) {
            this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this)
        }

        configure(e, t) {
            e.embedded ? this.blur() : (this.focus(), this.unbind())
        }

        bind() {
            this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1)
        }

        unbind() {
            this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)
        }

        focus() {
            this.state !== i && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = i
        }

        blur() {
            this.state !== o && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = o
        }

        isFocused() {
            return this.state === i
        }

        destroy() {
            this.Reveal.getRevealElement().classList.remove("focused")
        }

        onRevealPointerDown(e) {
            this.focus()
        }

        onDocumentPointerDown(e) {
            e = st(e.target, ".reveal");
            e && e === this.Reveal.getRevealElement() || this.blur()
        }
    }

    class xt {
        constructor(e) {
            this.Reveal = e
        }

        render() {
            this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element)
        }

        configure(e, t) {
            e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline")
        }

        update() {
            this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>')
        }

        updateVisibility() {
            this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes")
        }

        hasNotes() {
            return 0 < this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length
        }

        isSpeakerNotesWindow() {
            return !!window.location.search.match(/receiver/gi)
        }

        getSlideNotes(e = this.Reveal.getCurrentSlide()) {
            if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
            e = e.querySelectorAll("aside.notes");
            return e ? Array.from(e).map(e => e.innerHTML).join("\n") : null
        }

        destroy() {
            this.element.remove()
        }
    }

    class Pt {
        constructor(e, t) {
            this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
        }

        setPlaying(e) {
            var t = this.playing;
            this.playing = e, !t && this.playing ? this.animate() : this.render()
        }

        animate() {
            var e = this.progress;
            this.progress = this.progressCheck(), .8 < e && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this))
        }

        render() {
            var e = this.playing ? this.progress : 0, t = this.diameter2 - this.thickness, i = this.diameter2,
                s = this.diameter2,
                e = (this.progressOffset += .1 * (1 - this.progressOffset), -Math.PI / 2 + e * (2 * Math.PI)),
                a = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
            this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i, s, 4 + t, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i, s, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i, s, t, a, e, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i - 14, s - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
        }

        on(e, t) {
            this.canvas.addEventListener(e, t, !1)
        }

        off(e, t) {
            this.canvas.removeEventListener(e, t, !1)
        }

        destroy() {
            this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
        }
    }

    var Tt = {
        width: 960,
        height: 700,
        margin: .04,
        minScale: .2,
        maxScale: 2,
        controls: !0,
        controlsTutorial: !0,
        controlsLayout: "bottom-right",
        controlsBackArrows: "faded",
        progress: !0,
        slideNumber: !1,
        showSlideNumber: "all",
        hashOneBasedIndex: !1,
        hash: !1,
        respondToHashChanges: !0,
        jumpToSlide: !0,
        history: !1,
        keyboard: !0,
        keyboardCondition: null,
        disableLayout: !1,
        overview: !0,
        center: !0,
        touch: !0,
        loop: !1,
        rtl: !1,
        navigationMode: "default",
        shuffle: !1,
        fragments: !0,
        fragmentInURL: !0,
        embedded: !1,
        help: !0,
        pause: !0,
        showNotes: !1,
        showHiddenSlides: !1,
        autoPlayMedia: null,
        preloadIframes: null,
        autoAnimate: !0,
        autoAnimateMatcher: null,
        autoAnimateEasing: "ease",
        autoAnimateDuration: 1,
        autoAnimateUnmatched: !0,
        autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
        autoSlide: 0,
        autoSlideStoppable: !0,
        autoSlideMethod: null,
        defaultTiming: null,
        mouseWheel: !1,
        previewLinks: !1,
        postMessage: !0,
        postMessageEvents: !1,
        focusBodyOnPageVisibilityChange: !0,
        transition: "slide",
        transitionSpeed: "default",
        backgroundTransition: "fade",
        parallaxBackgroundImage: "",
        parallaxBackgroundSize: "",
        parallaxBackgroundRepeat: "",
        parallaxBackgroundPosition: "",
        parallaxBackgroundHorizontal: null,
        parallaxBackgroundVertical: null,
        view: null,
        scrollLayout: "full",
        scrollSnap: "mandatory",
        scrollProgress: "auto",
        scrollActivationWidth: 435,
        pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
        pdfSeparateFragments: !0,
        pdfPageHeightOffset: -1,
        viewDistance: 3,
        mobileViewDistance: 2,
        display: "block",
        hideInactiveCursor: !0,
        hideCursorTime: 5e3,
        sortFragmentsOnSync: !0,
        dependencies: [],
        plugins: []
    };
    const yt = "5.0.1";

    function l(s, z) {
        arguments.length < 2 && (z = arguments[0], s = document.querySelector(".reveal"));
        const a = {};
        let h, u, g, v, n, p = {}, F = !1, i = {hasNavigatedHorizontally: !1, hasNavigatedVertically: !1}, m = [],
            r = 1, t = {layout: "", overview: ""}, f = {}, q = "idle", o = 0, O = 0, W = -1, l = !1, y = new rt(a),
            b = new ot(a), d = new lt(a), U = new vt(a), w = new dt(a), E = new pt(a), S = new mt(a), A = new ft(a),
            R = new bt(a), c = new wt(a), k = new Et(a), L = new St(a), C = new At(a), V = new Rt(a), x = new kt(a),
            P = new Ct(a), j = new Lt(a), T = new xt(a);

        function K() {
            var e, t;
            F = !0, p.showHiddenSlides || Ze(f.wrapper, 'section[data-visibility="hidden"]').forEach(e => {
                const t = e.parentNode;
                (1 === t.childElementCount && /section/i.test(t.nodeName) ? t : e).remove()
            }), f.slides.classList.add("no-transition"), nt ? f.wrapper.classList.add("no-hover") : f.wrapper.classList.remove("no-hover"), w.render(), b.render(), d.render(), L.render(), C.render(), T.render(), f.pauseOverlay = ((t, e, i) => {
                var s = t.querySelectorAll("." + e);
                for (let e = 0; e < s.length; e++) {
                    var a = s[e];
                    if (a.parentNode === t) return a
                }
                let n = document.createElement("div");
                return n.className = e, n.innerHTML = i, t.appendChild(n), n
            })(f.wrapper, "pause-overlay", p.controls ? '<button class="resume-button">Resume presentation</button>' : null), f.statusElement = function () {
                let e = f.wrapper.querySelector(".aria-status");
                return e || ((e = document.createElement("div")).style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), f.wrapper.appendChild(e)), e
            }(), f.wrapper.setAttribute("role", "application"), p.postMessage && window.addEventListener("message", Ve, !1), setInterval(() => {
                (E.isActive() || 0 === f.wrapper.scrollTop) && 0 === f.wrapper.scrollLeft || (f.wrapper.scrollTop = 0, f.wrapper.scrollLeft = 0)
            }, 1e3), document.addEventListener("fullscreenchange", Ye), document.addEventListener("webkitfullscreenchange", Ye), D().forEach(e => {
                Ze(e, "section").forEach((e, t) => {
                    0 < t && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
                })
            }), Y(), w.update(!0), e = "print" === p.view, t = "scroll" === p.view || "reader" === p.view, (e || t) && (e ? _() : j.unbind(), f.viewport.classList.add("loading-scroll-mode"), e ? "complete" === document.readyState ? S.activate() : window.addEventListener("load", () => S.activate()) : E.activate()), k.readURL(), setTimeout(() => {
                f.slides.classList.remove("no-transition"), f.wrapper.classList.add("ready"), N({
                    type: "ready",
                    data: {indexh: h, indexv: u, currentSlide: v}
                })
            }, 1)
        }

        function $(e) {
            f.statusElement.textContent = e
        }

        function X(e) {
            let t = "";
            var i, s;
            return 3 === e.nodeType ? t += e.textContent : 1 === e.nodeType && (i = e.getAttribute("aria-hidden"), s = "none" === window.getComputedStyle(e).display, "true" === i || s || Array.from(e.childNodes).forEach(e => {
                t += X(e)
            })), "" === (t = t.trim()) ? "" : t + " "
        }

        function Y(e) {
            var t = {...p};
            "object" == typeof e && Qe(p, e), !1 !== a.isReady() && (e = f.wrapper.querySelectorAll(ct).length, f.wrapper.classList.remove(t.transition), f.wrapper.classList.add(p.transition), f.wrapper.setAttribute("data-transition-speed", p.transitionSpeed), f.wrapper.setAttribute("data-background-transition", p.backgroundTransition), f.viewport.style.setProperty("--slide-width", "string" == typeof p.width ? p.width : p.width + "px"), f.viewport.style.setProperty("--slide-height", "string" == typeof p.height ? p.height : p.height + "px"), p.shuffle && be(), et(f.wrapper, "embedded", p.embedded), et(f.wrapper, "rtl", p.rtl), et(f.wrapper, "center", p.center), !1 === p.pause && ve(), p.previewLinks ? (te(), ie("[data-preview-link=false]")) : (ie(), te("[data-preview-link]:not([data-preview-link=false])")), U.reset(), n && (n.destroy(), n = null), 1 < e && p.autoSlide && p.autoSlideStoppable && ((n = new Pt(f.wrapper, () => Math.min(Math.max((Date.now() - W) / o, 0), 1))).on("click", Je), l = !1), "default" !== p.navigationMode ? f.wrapper.setAttribute("data-navigation-mode", p.navigationMode) : f.wrapper.removeAttribute("data-navigation-mode"), T.configure(p, t), P.configure(p, t), V.configure(p, t), L.configure(p, t), C.configure(p, t), c.configure(p, t), A.configure(p, t), b.configure(p, t), ye())
        }

        function e() {
            window.addEventListener("resize", $e, !1), p.touch && j.bind(), p.keyboard && c.bind(), p.progress && C.bind(), p.respondToHashChanges && k.bind(), L.bind(), P.bind(), f.slides.addEventListener("click", Ke, !1), f.slides.addEventListener("transitionend", je, !1), f.pauseOverlay.addEventListener("click", ve, !1), p.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Xe, !1)
        }

        function _() {
            j.unbind(), P.unbind(), c.unbind(), L.unbind(), C.unbind(), k.unbind(), window.removeEventListener("resize", $e, !1), f.slides.removeEventListener("click", Ke, !1), f.slides.removeEventListener("transitionend", je, !1), f.pauseOverlay.removeEventListener("click", ve, !1)
        }

        function J(e, t, i) {
            s.addEventListener(e, t, i)
        }

        function G(e, t, i) {
            s.removeEventListener(e, t, i)
        }

        function Q(e) {
            "string" == typeof e.layout && (t.layout = e.layout), "string" == typeof e.overview && (t.overview = e.overview), t.layout ? it(f.slides, t.layout + " " + t.overview) : it(f.slides, t.overview)
        }

        function N({target: e = f.wrapper, type: t, data: i, bubbles: s = !0}) {
            let a = document.createEvent("HTMLEvents", 1, 2);
            return a.initEvent(t, s, !0), Qe(a, i), e.dispatchEvent(a), e === f.wrapper && ee(t), a
        }

        function Z(e) {
            N({type: "slidechanged", data: {indexh: h, indexv: u, previousSlide: g, currentSlide: v, origin: e}})
        }

        function ee(e, t) {
            p.postMessageEvents && window.parent !== window.self && (e = {
                namespace: "reveal",
                eventName: e,
                state: Me()
            }, Qe(e, t), window.parent.postMessage(JSON.stringify(e), "*"))
        }

        function te(e = "a") {
            Array.from(f.wrapper.querySelectorAll(e)).forEach(e => {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", _e, !1)
            })
        }

        function ie(e = "a") {
            Array.from(f.wrapper.querySelectorAll(e)).forEach(e => {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", _e, !1)
            })
        }

        function se(e) {
            M(), f.overlay = document.createElement("div"), f.overlay.classList.add("overlay"), f.overlay.classList.add("overlay-preview"), f.wrapper.appendChild(f.overlay), f.overlay.innerHTML = `<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${e}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`, f.overlay.querySelector("iframe").addEventListener("load", e => {
                f.overlay.classList.add("loaded")
            }, !1), f.overlay.querySelector(".close").addEventListener("click", e => {
                M(), e.preventDefault()
            }, !1), f.overlay.querySelector(".external").addEventListener("click", e => {
                M()
            }, !1)
        }

        function ae() {
            if (p.help) {
                M(), f.overlay = document.createElement("div"), f.overlay.classList.add("overlay"), f.overlay.classList.add("overlay-help"), f.wrapper.appendChild(f.overlay);
                let e = '<p class="title">Keyboard Shortcuts</p><br/>', t = c.getShortcuts(), i = c.getBindings();
                for (var s in e += "<table><th>KEY</th><th>ACTION</th>", t) e += `<tr><td>${s}</td><td>${t[s]}</td></tr>`;
                for (var a in i) i[a].key && i[a].description && (e += `<tr><td>${i[a].key}</td><td>${i[a].description}</td></tr>`);
                e += "</table>", f.overlay.innerHTML = `
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${e}</div>
				</div>
			`, f.overlay.querySelector(".close").addEventListener("click", e => {
                    M(), e.preventDefault()
                }, !1)
            }
        }

        function M() {
            return !!f.overlay && (f.overlay.parentNode.removeChild(f.overlay), !(f.overlay = null))
        }

        function I() {
            if (f.wrapper && !S.isActive()) {
                var e = f.viewport.offsetWidth, t = f.viewport.offsetHeight;
                if (!p.disableLayout) {
                    nt && !p.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
                    var i = E.isActive() ? re(e, t) : re(), s = r,
                        a = (ne(p.width, p.height), f.slides.style.width = i.width + "px", f.slides.style.height = i.height + "px", r = Math.min(i.presentationWidth / i.width, i.presentationHeight / i.height), r = Math.max(r, p.minScale), 1 === (r = Math.min(r, p.maxScale)) || E.isActive() ? (f.slides.style.zoom = "", f.slides.style.left = "", f.slides.style.top = "", f.slides.style.bottom = "", Q({layout: f.slides.style.right = ""})) : (f.slides.style.zoom = "", f.slides.style.left = "50%", f.slides.style.top = "50%", f.slides.style.bottom = "auto", f.slides.style.right = "auto", Q({layout: "translate(-50%, -50%) scale(" + r + ")"})), Array.from(f.wrapper.querySelectorAll(ct)));
                    for (let e = 0, t = a.length; e < t; e++) {
                        const n = a[e];
                        "none" !== n.style.display && (p.center || n.classList.contains("center") ? n.classList.contains("stack") ? n.style.top = 0 : n.style.top = Math.max((i.height - n.scrollHeight) / 2, 0) + "px" : n.style.top = "")
                    }
                    s !== r && N({
                        type: "resize",
                        data: {oldScale: s, scale: r, size: i}
                    }), "number" == typeof p.scrollActivationWidth && "scroll" !== p.view && (0 < i.presentationWidth && i.presentationWidth <= p.scrollActivationWidth ? E.isActive() || E.activate() : E.isActive() && E.deactivate())
                }
                f.viewport.style.setProperty("--slide-scale", r), f.viewport.style.setProperty("--viewport-width", e + "px"), f.viewport.style.setProperty("--viewport-height", t + "px"), E.layout(), C.update(), w.updateParallax(), R.isActive() && R.update()
            }
        }

        function ne(o, l) {
            Ze(f.slides, "section > .stretch, section > .r-stretch").forEach(e => {
                [t, i = 0] = [e, l];
                var t, i, s,
                    a = t ? (a = t.style.height, t.style.height = "0px", t.parentNode.style.height = "auto", s = i - t.parentNode.offsetHeight, t.style.height = a + "px", t.parentNode.style.removeProperty("height"), s) : i;
                if (/(img|video)/gi.test(e.nodeName)) {
                    const l = e.naturalWidth || e.videoWidth, n = e.naturalHeight || e.videoHeight,
                        r = Math.min(o / l, a / n);
                    e.style.width = l * r + "px", e.style.height = n * r + "px"
                } else e.style.width = o + "px", e.style.height = a + "px"
            })
        }

        function re(e, t) {
            let i = p.width, s = p.height;
            p.disableLayout && (i = f.slides.offsetWidth, s = f.slides.offsetHeight);
            const a = {
                width: i,
                height: s,
                presentationWidth: e || f.wrapper.offsetWidth,
                presentationHeight: t || f.wrapper.offsetHeight
            };
            return a.presentationWidth -= a.presentationWidth * p.margin, a.presentationHeight -= a.presentationHeight * p.margin, "string" == typeof a.width && /%$/.test(a.width) && (a.width = parseInt(a.width, 10) / 100 * a.presentationWidth), "string" == typeof a.height && /%$/.test(a.height) && (a.height = parseInt(a.height, 10) / 100 * a.presentationHeight), a
        }

        function oe(e, t) {
            "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
        }

        function le(e) {
            var t;
            return "object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack") ? (t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv", parseInt(e.getAttribute(t) || 0, 10)) : 0
        }

        function de(e = v) {
            return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
        }

        function ce() {
            return !(!v || !de(v) || v.nextElementSibling)
        }

        function he() {
            return 0 === h && 0 === u
        }

        function ue() {
            return !(!v || v.nextElementSibling || de(v) && v.parentNode.nextElementSibling)
        }

        function ge() {
            var e;
            p.pause && (e = f.wrapper.classList.contains("paused"), Be(), f.wrapper.classList.add("paused"), !1 === e && N({type: "paused"}))
        }

        function ve() {
            var e = f.wrapper.classList.contains("paused");
            f.wrapper.classList.remove("paused"), Ie(), e && N({type: "resumed"})
        }

        function pe(e) {
            ("boolean" == typeof e ? e ? ge : ve : me() ? ve : ge)()
        }

        function me() {
            return f.wrapper.classList.contains("paused")
        }

        function B(s, a, n, r) {
            if (!N({
                type: "beforeslidechange",
                data: {indexh: void 0 === s ? h : s, indexv: void 0 === a ? u : a, origin: r}
            }).defaultPrevented) {
                g = v;
                var o = f.wrapper.querySelectorAll(ht);
                if (E.isActive()) {
                    const Ze = E.getSlideByIndices(s, a);
                    void (Ze && E.scrollToSlide(Ze))
                } else if (0 !== o.length) {
                    void 0 !== a || R.isActive() || (a = le(o[s])), g && g.parentNode && g.parentNode.classList.contains("stack") && oe(g.parentNode, u);
                    const c = m.concat();
                    m.length = 0;
                    var l = h || 0, d = u || 0,
                        s = (h = we(ht, void 0 === s ? h : s), u = we(ut, void 0 === a ? u : a), h !== l || u !== d);
                    s || (g = null);
                    let e = o[h], t = e.querySelectorAll("section"), i = (v = t[u] || e, !1);
                    s && g && v && !R.isActive() && (q = "running", (i = fe(g, v, l, d)) && f.slides.classList.add("disable-slide-transitions")), Ae(), I(), R.isActive() && R.update(), void 0 !== n && A.goto(n), g && g !== v && (g.classList.remove("present"), g.setAttribute("aria-hidden", "true"), he() && setTimeout(() => {
                        Ze(f.wrapper, ht + ".stack").forEach(e => {
                            oe(e, 0)
                        })
                    }, 0));
                    e:for (let t = 0, e = m.length; t < e; t++) {
                        for (let e = 0; e < c.length; e++) if (c[e] === m[t]) {
                            c.splice(e, 1);
                            continue e
                        }
                        f.viewport.classList.add(m[t]), N({type: m[t]})
                    }
                    for (; c.length;) f.viewport.classList.remove(c.pop());
                    s && Z(r), !s && g || (y.stopEmbeddedContent(g), y.startEmbeddedContent(v)), requestAnimationFrame(() => {
                        $(X(v))
                    }), C.update(), L.update(), T.update(), w.update(), w.updateParallax(), b.update(), A.update(), k.writeURL(), Ie(), i && (setTimeout(() => {
                        f.slides.classList.remove("disable-slide-transitions")
                    }, 0), p.autoAnimate && U.run(g, v))
                }
            }
        }

        function fe(e, t, i, s) {
            return e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(h > i || u > s ? t : e).hasAttribute("data-auto-animate-restart")
        }

        function ye() {
            _(), e(), I(), o = p.autoSlide, Ie(), w.create(), k.writeURL(), !0 === p.sortFragmentsOnSync && A.sortAll(), L.update(), C.update(), Ae(), T.update(), T.updateVisibility(), w.update(!0), b.update(), y.formatEmbeddedContent(), !1 === p.autoPlayMedia ? y.stopEmbeddedContent(v, {unloadIframes: !1}) : y.startEmbeddedContent(v), R.isActive() && R.layout()
        }

        function be(s = D()) {
            s.forEach((e, t) => {
                var i = s[Math.floor(Math.random() * s.length)],
                    i = (i.parentNode === e.parentNode && e.parentNode.insertBefore(e, i), e.querySelectorAll("section"));
                i.length && be(i)
            })
        }

        function we(e, s) {
            let a = Ze(f.wrapper, e), n = a.length, r = E.isActive() || S.isActive(), o = !1, l = !1;
            if (n) {
                p.loop && (n <= s && (o = !0), (s %= n) < 0 && (s = n + s, l = !0)), s = Math.max(Math.min(s, n - 1), 0);
                for (let i = 0; i < n; i++) {
                    let e = a[i], t = p.rtl && !de(e);
                    e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), e.setAttribute("hidden", ""), e.setAttribute("aria-hidden", "true"), e.querySelector("section") && e.classList.add("stack"), r ? e.classList.add("present") : i < s ? (e.classList.add(t ? "future" : "past"), p.fragments && Ee(e)) : i > s ? (e.classList.add(t ? "past" : "future"), p.fragments && Se(e)) : i === s && p.fragments && (o ? Se(e) : l && Ee(e))
                }
                let e = a[s], t = e.classList.contains("present"),
                    i = (e.classList.add("present"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), t || N({
                        target: e,
                        type: "visible",
                        bubbles: !1
                    }), e.getAttribute("data-state"));
                i && (m = m.concat(i.split(" ")))
            } else s = 0;
            return s
        }

        function Ee(e) {
            Ze(e, ".fragment").forEach(e => {
                e.classList.add("visible"), e.classList.remove("current-fragment")
            })
        }

        function Se(e) {
            Ze(e, ".fragment.visible").forEach(e => {
                e.classList.remove("visible", "current-fragment")
            })
        }

        function Ae() {
            let s, a, e = D(), n = e.length;
            if (n && void 0 !== h) {
                let i = R.isActive() ? 10 : p.viewDistance;
                nt && (i = R.isActive() ? 6 : p.mobileViewDistance), S.isActive() && (i = Number.MAX_VALUE);
                for (let t = 0; t < n; t++) {
                    var r = e[t], o = Ze(r, "section"), l = o.length;
                    if (s = Math.abs((h || 0) - t) || 0, (s = p.loop ? Math.abs(((h || 0) - t) % (n - i)) || 0 : s) < i ? y.load(r) : y.unload(r), l) {
                        var d = le(r);
                        for (let e = 0; e < l; e++) {
                            var c = o[e];
                            a = t === (h || 0) ? Math.abs((u || 0) - e) : Math.abs(e - d), s + a < i ? y.load(c) : y.unload(c)
                        }
                    }
                }
                Pe() ? f.wrapper.classList.add("has-vertical-slides") : f.wrapper.classList.remove("has-vertical-slides"), xe() ? f.wrapper.classList.add("has-horizontal-slides") : f.wrapper.classList.remove("has-horizontal-slides")
            }
        }

        function H({includeFragments: e = !1} = {}) {
            let t = f.wrapper.querySelectorAll(ht), i = f.wrapper.querySelectorAll(ut),
                s = {left: 0 < h, right: h < t.length - 1, up: 0 < u, down: u < i.length - 1};
            return p.loop && (1 < t.length && (s.left = !0, s.right = !0), 1 < i.length && (s.up = !0, s.down = !0)), 1 < t.length && "linear" === p.navigationMode && (s.right = s.right || s.down, s.left = s.left || s.up), !0 === e && (e = A.availableRoutes(), s.left = s.left || e.prev, s.up = s.up || e.prev, s.down = s.down || e.next, s.right = s.right || e.next), p.rtl && (e = s.left, s.left = s.right, s.right = e), s
        }

        function Re(s = v) {
            let a = D(), n = 0;
            e:for (let i = 0; i < a.length; i++) {
                let e = a[i], t = e.querySelectorAll("section");
                for (let e = 0; e < t.length; e++) {
                    if (t[e] === s) break e;
                    "uncounted" !== t[e].dataset.visibility && n++
                }
                if (e === s) break;
                !1 === e.classList.contains("stack") && "uncounted" !== e.dataset.visibility && n++
            }
            return n
        }

        function ke(s) {
            let t, a = h, n = u;
            if (s) if (E.isActive()) a = parseInt(s.getAttribute("data-index-h"), 10), s.getAttribute("data-index-v") && (n = parseInt(s.getAttribute("data-index-v"), 10)); else {
                let e = de(s), t = e ? s.parentNode : s, i = D();
                a = Math.max(i.indexOf(t), 0), n = void 0, e && (n = Math.max(Ze(s.parentNode, "section").indexOf(s), 0))
            }
            if (!s && v && 0 < v.querySelectorAll(".fragment").length) {
                let e = v.querySelector(".current-fragment");
                t = e && e.hasAttribute("data-fragment-index") ? parseInt(e.getAttribute("data-fragment-index"), 10) : v.querySelectorAll(".fragment.visible").length - 1
            }
            return {h: a, v: n, f: t}
        }

        function Le() {
            return Ze(f.wrapper, ct + ':not(.stack):not([data-visibility="uncounted"])')
        }

        function D() {
            return Ze(f.wrapper, ht)
        }

        function Ce() {
            return Ze(f.wrapper, ".slides>section>section")
        }

        function xe() {
            return 1 < D().length
        }

        function Pe() {
            return 1 < Ce().length
        }

        function Te() {
            return Le().length
        }

        function Ne(e, t) {
            let i = D()[e], s = i && i.querySelectorAll("section");
            return s && s.length && "number" == typeof t ? s ? s[t] : void 0 : i
        }

        function Me() {
            var e = ke();
            return {indexh: e.h, indexv: e.v, indexf: e.f, paused: me(), overview: R.isActive()}
        }

        function Ie() {
            if (Be(), v && !1 !== p.autoSlide) {
                let e = v.querySelector(".current-fragment[data-autoslide]"),
                    t = e ? e.getAttribute("data-autoslide") : null,
                    i = v.parentNode ? v.parentNode.getAttribute("data-autoslide") : null,
                    s = v.getAttribute("data-autoslide");
                t ? o = parseInt(t, 10) : s ? o = parseInt(s, 10) : i ? o = parseInt(i, 10) : (o = p.autoSlide, 0 === v.querySelectorAll(".fragment").length && Ze(v, "video, audio").forEach(e => {
                    e.hasAttribute("data-autoplay") && o && 1e3 * e.duration / e.playbackRate > o && (o = 1e3 * e.duration / e.playbackRate + 1e3)
                })), !o || l || me() || R.isActive() || ue() && !A.availableRoutes().next && !0 !== p.loop || (O = setTimeout(() => {
                    "function" == typeof p.autoSlideMethod ? p.autoSlideMethod() : Ue(), Ie()
                }, o), W = Date.now()), n && n.setPlaying(-1 !== O)
            }
        }

        function Be() {
            clearTimeout(O), O = -1
        }

        function He() {
            o && !l && (l = !0, N({type: "autoslidepaused"}), clearTimeout(O), n && n.setPlaying(!1))
        }

        function De() {
            o && l && (l = !1, N({type: "autoslideresumed"}), Ie())
        }

        function ze({skipFragments: e = !1} = {}) {
            i.hasNavigatedHorizontally = !0, p.rtl ? (R.isActive() || e || !1 === A.next()) && H().left && B(h + 1, "grid" === p.navigationMode ? u : void 0) : (R.isActive() || e || !1 === A.prev()) && H().left && B(h - 1, "grid" === p.navigationMode ? u : void 0)
        }

        function Fe({skipFragments: e = !1} = {}) {
            i.hasNavigatedHorizontally = !0, p.rtl ? (R.isActive() || e || !1 === A.prev()) && H().right && B(h - 1, "grid" === p.navigationMode ? u : void 0) : (R.isActive() || e || !1 === A.next()) && H().right && B(h + 1, "grid" === p.navigationMode ? u : void 0)
        }

        function qe({skipFragments: e = !1} = {}) {
            (R.isActive() || e || !1 === A.prev()) && H().up && B(h, u - 1)
        }

        function Oe({skipFragments: e = !1} = {}) {
            i.hasNavigatedVertically = !0, (R.isActive() || e || !1 === A.next()) && H().down && B(h, u + 1)
        }

        function We({skipFragments: t = !1} = {}) {
            if (t || !1 === A.prev()) if (H().up) qe({skipFragments: t}); else {
                let e;
                var i;
                (e = (p.rtl ? Ze(f.wrapper, ht + ".future") : Ze(f.wrapper, ht + ".past")).pop()) && e.classList.contains("stack") ? (i = e.querySelectorAll("section").length - 1 || void 0, B(h - 1, i)) : ze({skipFragments: t})
            }
        }

        function Ue({skipFragments: t = !1} = {}) {
            if (i.hasNavigatedHorizontally = !0, i.hasNavigatedVertically = !0, t || !1 === A.next()) {
                let e = H();
                e.down && e.right && p.loop && ce() && (e.down = !1), (e.down ? Oe : p.rtl ? ze : Fe)({skipFragments: t})
            }
        }

        function Ve(e) {
            let t = e.data;
            if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && ((t = JSON.parse(t)).method && "function" == typeof a[t.method])) if (!1 === gt.test(t.method)) {
                const e = a[t.method].apply(a, t.args);
                ee("callback", {method: t.method, result: e})
            } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API')
        }

        function je(e) {
            "running" === q && /section/gi.test(e.target.nodeName) && (q = "idle", N({
                type: "slidetransitionend",
                data: {indexh: h, indexv: u, previousSlide: g, currentSlide: v}
            }))
        }

        function Ke(e) {
            const t = st(e.target, 'a[href^="#"]');
            var i;
            t && (i = t.getAttribute("href"), (i = k.getIndicesFromHash(i)) && (a.slide(i.h, i.v, i.f), e.preventDefault()))
        }

        function $e(e) {
            I()
        }

        function Xe(e) {
            !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
        }

        function Ye(e) {
            (document.fullscreenElement || document.webkitFullscreenElement) === f.wrapper && (e.stopImmediatePropagation(), setTimeout(() => {
                a.layout(), a.focus.focus()
            }, 1))
        }

        function _e(e) {
            var t;
            e.currentTarget && e.currentTarget.hasAttribute("href") && ((t = e.currentTarget.getAttribute("href")) && (se(t), e.preventDefault()))
        }

        function Je(e) {
            ue() && !1 === p.loop ? (B(0, 0), De()) : (l ? De : He)()
        }

        var Ge = {
            VERSION: yt,
            initialize: function (e) {
                if (!s) throw 'Unable to find presentation root (<div class="reveal">).';
                if (f.wrapper = s, f.slides = s.querySelector(".slides"), f.slides) return p = {...Tt, ...p, ...z, ...e, ...at()}, /print-pdf/gi.test(window.location.search) && (p.view = "print"), !0 === p.embedded ? f.viewport = st(s, ".reveal-viewport") || s : (f.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), f.viewport.classList.add("reveal-viewport"), window.addEventListener("load", I, !1), x.load(p.plugins, p.dependencies).then(K), new Promise(e => a.on("ready", e));
                throw 'Unable to find slides container (<div class="slides">).'
            },
            configure: Y,
            destroy: function () {
                _(), Be(), ie(), T.destroy(), P.destroy(), x.destroy(), V.destroy(), L.destroy(), C.destroy(), w.destroy(), b.destroy(), d.destroy(), document.removeEventListener("fullscreenchange", Ye), document.removeEventListener("webkitfullscreenchange", Ye), document.removeEventListener("visibilitychange", Xe, !1), window.removeEventListener("message", Ve, !1), window.removeEventListener("load", I, !1), f.pauseOverlay && f.pauseOverlay.remove(), f.statusElement && f.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), f.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), f.wrapper.removeAttribute("data-transition-speed"), f.wrapper.removeAttribute("data-background-transition"), f.viewport.classList.remove("reveal-viewport"), f.viewport.style.removeProperty("--slide-width"), f.viewport.style.removeProperty("--slide-height"), f.slides.style.removeProperty("width"), f.slides.style.removeProperty("height"), f.slides.style.removeProperty("zoom"), f.slides.style.removeProperty("left"), f.slides.style.removeProperty("top"), f.slides.style.removeProperty("bottom"), f.slides.style.removeProperty("right"), f.slides.style.removeProperty("transform"), Array.from(f.wrapper.querySelectorAll(ct)).forEach(e => {
                    e.style.removeProperty("display"), e.style.removeProperty("top"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden")
                })
            },
            sync: ye,
            syncSlide: function (e = v) {
                w.sync(e), A.sync(e), y.load(e), w.update(), T.update()
            },
            syncFragments: A.sync.bind(A),
            slide: B,
            left: ze,
            right: Fe,
            up: qe,
            down: Oe,
            prev: We,
            next: Ue,
            navigateLeft: ze,
            navigateRight: Fe,
            navigateUp: qe,
            navigateDown: Oe,
            navigatePrev: We,
            navigateNext: Ue,
            navigateFragment: A.goto.bind(A),
            prevFragment: A.prev.bind(A),
            nextFragment: A.next.bind(A),
            on: J,
            off: G,
            addEventListener: J,
            removeEventListener: G,
            layout: I,
            shuffle: be,
            availableRoutes: H,
            availableFragments: A.availableRoutes.bind(A),
            toggleHelp: function (e) {
                ("boolean" == typeof e ? e ? ae : M : f.overlay ? M : ae)()
            },
            toggleOverview: R.toggle.bind(R),
            toggleScrollView: E.toggle.bind(E),
            togglePause: pe,
            toggleAutoSlide: function (e) {
                ("boolean" == typeof e ? e ? De : He : l ? De : He)()
            },
            toggleJumpToSlide: function (e) {
                "boolean" == typeof e ? e ? d.show() : d.hide() : d.isVisible() ? d.hide() : d.show()
            },
            isFirstSlide: he,
            isLastSlide: ue,
            isLastVerticalSlide: ce,
            isVerticalSlide: de,
            isVerticalStack: function (e = v) {
                return e.classList.contains(".stack") || null !== e.querySelector("section")
            },
            isPaused: me,
            isAutoSliding: function () {
                return !(!o || l)
            },
            isSpeakerNotes: T.isSpeakerNotesWindow.bind(T),
            isOverview: R.isActive.bind(R),
            isFocused: P.isFocused.bind(P),
            isScrollView: E.isActive.bind(E),
            isPrintView: S.isActive.bind(S),
            isReady: () => F,
            loadSlide: y.load.bind(y),
            unloadSlide: y.unload.bind(y),
            startEmbeddedContent: () => y.startEmbeddedContent(v),
            stopEmbeddedContent: () => y.stopEmbeddedContent(v, {unloadIframes: !1}),
            showPreview: se,
            hidePreview: M,
            addEventListeners: e,
            removeEventListeners: _,
            dispatchEvent: N,
            getState: Me,
            setState: function (e) {
                var t;
                "object" == typeof e && (B(tt(e.indexh), tt(e.indexv), tt(e.indexf)), t = tt(e.paused), e = tt(e.overview), "boolean" == typeof t && t !== me() && pe(t), "boolean" == typeof e && e !== R.isActive() && R.toggle(e))
            },
            getProgress: function () {
                let e = Te(), t = Re();
                var i;
                return v && 0 < (i = v.querySelectorAll(".fragment")).length && (t += v.querySelectorAll(".fragment.visible").length / i.length * .9), Math.min(t / (e - 1), 1)
            },
            getIndices: ke,
            getSlidesAttributes: function () {
                return Le().map(t => {
                    let i = {};
                    for (let e = 0; e < t.attributes.length; e++) {
                        var s = t.attributes[e];
                        i[s.name] = s.value
                    }
                    return i
                })
            },
            getSlidePastCount: Re,
            getTotalSlides: Te,
            getSlide: Ne,
            getPreviousSlide: () => g,
            getCurrentSlide: () => v,
            getSlideBackground: function (e, t) {
                t = "number" == typeof e ? Ne(e, t) : e;
                if (t) return t.slideBackgroundElement
            },
            getSlideNotes: T.getSlideNotes.bind(T),
            getSlides: Le,
            getHorizontalSlides: D,
            getVerticalSlides: Ce,
            hasHorizontalSlides: xe,
            hasVerticalSlides: Pe,
            hasNavigatedHorizontally: () => i.hasNavigatedHorizontally,
            hasNavigatedVertically: () => i.hasNavigatedVertically,
            shouldAutoAnimateBetween: fe,
            addKeyBinding: c.addKeyBinding.bind(c),
            removeKeyBinding: c.removeKeyBinding.bind(c),
            triggerKey: c.triggerKey.bind(c),
            registerKeyboardShortcut: c.registerKeyboardShortcut.bind(c),
            getComputedSlideSize: re,
            setCurrentScrollPage: function (e, t, i) {
                var s = h || 0, t = (h = t, u = i, v !== e);
                g = v, (v = e) && g && p.autoAnimate && fe(g, v, s, u) && U.run(g, v), t && (g && (y.stopEmbeddedContent(g), y.stopEmbeddedContent(g.slideBackgroundElement)), y.startEmbeddedContent(v), y.startEmbeddedContent(v.slideBackgroundElement)), requestAnimationFrame(() => {
                    $(X(v))
                }), Z()
            },
            getScale: () => r,
            getConfig: () => p,
            getQueryHash: at,
            getSlidePath: k.getHash.bind(k),
            getRevealElement: () => s,
            getSlidesElement: () => f.slides,
            getViewportElement: () => f.viewport,
            getBackgroundsElement: () => w.element,
            registerPlugin: x.registerPlugin.bind(x),
            hasPlugin: x.hasPlugin.bind(x),
            getPlugin: x.getPlugin.bind(x),
            getPlugins: x.getRegisteredPlugins.bind(x)
        };
        return Qe(a, {
            ...Ge,
            announceStatus: $,
            getStatusText: X,
            focus: P,
            scroll: E,
            progress: C,
            controls: L,
            location: k,
            overview: R,
            fragments: A,
            backgrounds: w,
            slideContent: y,
            slideNumber: b,
            onUserInput: function (e) {
                p.autoSlideStoppable && He()
            },
            closeOverlay: M,
            updateSlidesVisibility: Ae,
            layoutSlideContents: ne,
            transformSlides: Q,
            cueAutoSlide: Ie,
            cancelAutoSlide: Be
        }), Ge
    }

    let u = l, g = [];
    return u.initialize = e => (Object.assign(u, new l(document.querySelector(".reveal"), e)), g.map(e => e(u)), u.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach(i => {
        u[i] = (...t) => {
            g.push(e => e[i].call(null, ...t))
        }
    }), u.isReady = () => !1, u.VERSION = yt, u
});