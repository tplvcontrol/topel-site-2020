(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    221: function(e, t, a) {
      "use strict";
      a.r(t);
      a(19);
      var i = a(246),
        r = a(0),
        n = a.n(r),
        s = a(25),
        o = a(227),
        l = a.n(o),
        d = a(214),
        c = a(213),
        u =
          (a(215),
          a(216),
          function(e, t) {
            var a = e.data,
              i = a.site.siteMetadata.title;
            return n.a.createElement(
              d.a,
              { title: i },
              n.a.createElement(c.a, {
                title: "About",
                keywords: ["blog", "gatsby", "javascript", "react"]
              }),
              n.a.createElement(
                "article",
                { className: "post-content page-template no-image" },
                n.a.createElement(
                  "div",
                  { className: "post-content-body" },
                  n.a.createElement(
                    "h2",
                    {
                      id:
                        "clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"
                    },
                    "Clean, minimal, and deeply customisable. London is a theme made for people who appreciate simple lines."
                  ),
                  n.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card kg-width-full" },
                    n.a.createElement(l.a, {
                      fluid: a.benchAccounting.childImageSharp.fluid,
                      className: "kg-image"
                    }),
                    n.a.createElement(
                      "figcaption",
                      null,
                      "Large imagery is at the heart of this theme"
                    )
                  ),
                  n.a.createElement(
                    "h3",
                    { id: "dynamic-styles" },
                    "Dynamic styles"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "London comes with photo-centric main layout best suited to photography, graphics portfolios and other image-heavy uses."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Both post and page templates are light and minimal, with all the focus on the content while the design of the theme gets out of the way. Beneath the hood, London enjoys the full power of the",
                    " ",
                    n.a.createElement(
                      "a",
                      { href: "https://docs.ghost.org/api/handlebars-themes/" },
                      "Ghost Handlebars Theme API"
                    ),
                    " ",
                    "to provide limitless customisation options and dynamic styles."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Don't forget to check out the",
                    " ",
                    n.a.createElement(
                      "a",
                      { href: "https://docs.ghost.org/integrations/" },
                      "Ghost Integrations Directory"
                    ),
                    " ",
                    "for more ways to integrate Ghost with your favourite services."
                  )
                )
              )
            );
          });
      t.default = function(e) {
        return n.a.createElement(s.StaticQuery, {
          query: "1426368524",
          render: function(t) {
            return n.a.createElement(
              u,
              Object.assign({ location: e.location, data: t }, e)
            );
          },
          data: i
        });
      };
    },
    227: function(e, t, a) {
      "use strict";
      a(16), a(12), a(8), a(84), a(157), a(228);
      var i = a(18);
      (t.__esModule = !0), (t.default = void 0);
      var r,
        n = i(a(82)),
        s = i(a(78)),
        o = i(a(147)),
        l = i(a(148)),
        d = i(a(0)),
        c = i(a(46)),
        u = function(e) {
          var t = (0, l.default)({}, e),
            a = t.resolutions,
            i = t.sizes,
            r = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            i && ((t.fluid = i), delete t.sizes),
            r && (t.loading = "eager"),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          );
        },
        A = function(e) {
          var t = e.fluid,
            a = e.fixed;
          return ((t && t[0]) || (a && a[0])).src;
        },
        f = Object.create({}),
        g = function(e) {
          var t = u(e),
            a = A(t);
          return f[a] || !1;
        },
        p =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        m = h && window.IntersectionObserver,
        b = new WeakMap();
      function y(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            i = e.srcSetWebp,
            r = e.media,
            n = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            i &&
              d.default.createElement("source", {
                type: "image/webp",
                media: r,
                srcSet: i,
                sizes: n
              }),
            d.default.createElement("source", { media: r, srcSet: a, sizes: n })
          );
        });
      }
      function E(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            i = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: i
          });
        });
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            i = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: i
          });
        });
      }
      function v(e, t) {
        var a = e.srcSet,
          i = e.srcSetWebp,
          r = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (r ? 'media="' + r + '" ' : "") +
          'srcset="' +
          (t ? i : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var L = function(e, t) {
          var a =
            (void 0 === r &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (b.has(e.target)) {
                      var t = b.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), b.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            r);
          return (
            a && (a.observe(e), b.set(e, t)),
            function() {
              a.unobserve(e), b.delete(e);
            }
          );
        },
        j = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            o = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            d = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? v(e, !0) : "") + v(e);
              })
              .join("") +
            "<img " +
            d +
            s +
            o +
            a +
            i +
            t +
            n +
            r +
            l +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        I = function(e) {
          var t = e.src,
            a = e.imageVariants,
            i = e.generateSources,
            r = e.spreadProps,
            n = d.default.createElement(C, (0, l.default)({ src: t }, r));
          return a.length > 1
            ? d.default.createElement("picture", null, i(a), n)
            : n;
        },
        C = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            i = e.srcSet,
            r = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.onClick,
            A = e.loading,
            f = e.draggable,
            g = (0, o.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "onClick",
              "loading",
              "draggable"
            ]);
          return d.default.createElement(
            "img",
            (0, l.default)({ sizes: a, srcSet: i, src: r }, g, {
              onLoad: s,
              onError: c,
              onClick: u,
              ref: t,
              loading: A,
              draggable: f,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                n
              )
            })
          );
        });
      C.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var B = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = h && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !p && m && !a.isCritical && !a.seenBefore);
          var i = a.isCritical || (h && (p || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, s.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = L(e, function() {
                var e = g(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = A(t)),
              (f[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              r = e.style,
              n = void 0 === r ? {} : r,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              A = void 0 === c ? {} : c,
              f = e.placeholderClassName,
              g = e.fluid,
              p = e.fixed,
              h = e.backgroundColor,
              m = e.durationFadeIn,
              b = e.Tag,
              E = e.itemProp,
              v = e.loading,
              L = e.draggable,
              B = !1 === this.state.fadeIn || this.state.imgLoaded,
              R = !0 === this.state.fadeIn && !this.state.imgCached,
              k = (0, l.default)(
                {
                  opacity: B ? 1 : 0,
                  transition: R ? "opacity " + m + "ms" : "none"
                },
                o
              ),
              N = "boolean" == typeof h ? "lightgray" : h,
              Q = { transitionDelay: m + "ms" },
              O = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                R && Q,
                {},
                o,
                {},
                A
              ),
              x = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: O,
                className: f,
                itemProp: E
              };
            if (g) {
              var D = g,
                P = D[0];
              return d.default.createElement(
                b,
                {
                  className: (i || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(P.srcSet)
                },
                d.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / P.aspectRatio + "%"
                  }
                }),
                N &&
                  d.default.createElement(b, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: N,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      R && Q
                    )
                  }),
                P.base64 &&
                  d.default.createElement(I, {
                    src: P.base64,
                    spreadProps: x,
                    imageVariants: D,
                    generateSources: w
                  }),
                P.tracedSVG &&
                  d.default.createElement(I, {
                    src: P.tracedSVG,
                    spreadProps: x,
                    imageVariants: D,
                    generateSources: S
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    y(D),
                    d.default.createElement(C, {
                      alt: a,
                      title: t,
                      sizes: P.sizes,
                      src: P.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: P.srcSet,
                      style: k,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: E,
                      loading: v,
                      draggable: L
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: j(
                        (0, l.default)({ alt: a, title: t, loading: v }, P, {
                          imageVariants: D
                        })
                      )
                    }
                  })
              );
            }
            if (p) {
              var V = p,
                z = V[0],
                M = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: z.width,
                    height: z.height
                  },
                  n
                );
              return (
                "inherit" === n.display && delete M.display,
                d.default.createElement(
                  b,
                  {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: M,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(z.srcSet)
                  },
                  N &&
                    d.default.createElement(b, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: N,
                          width: z.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: z.height
                        },
                        R && Q
                      )
                    }),
                  z.base64 &&
                    d.default.createElement(I, {
                      src: z.base64,
                      spreadProps: x,
                      imageVariants: V,
                      generateSources: w
                    }),
                  z.tracedSVG &&
                    d.default.createElement(I, {
                      src: z.tracedSVG,
                      spreadProps: x,
                      imageVariants: V,
                      generateSources: S
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      y(V),
                      d.default.createElement(C, {
                        alt: a,
                        title: t,
                        width: z.width,
                        height: z.height,
                        sizes: z.sizes,
                        src: z.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: z.srcSet,
                        style: k,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: E,
                        loading: v,
                        draggable: L
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: j(
                          (0, l.default)({ alt: a, title: t, loading: v }, z, {
                            imageVariants: V
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(d.default.Component);
      B.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var R = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        }),
        k = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        });
      B.propTypes = {
        resolutions: R,
        sizes: k,
        fixed: c.default.oneOfType([R, c.default.arrayOf(R)]),
        fluid: c.default.oneOfType([k, c.default.arrayOf(k)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onClick: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool
      };
      var N = B;
      t.default = N;
    },
    228: function(e, t, a) {
      "use strict";
      a(229)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    229: function(e, t, a) {
      var i = a(1),
        r = a(9),
        n = a(38),
        s = /"/g,
        o = function(e, t, a, i) {
          var r = String(n(e)),
            o = "<" + t;
          return (
            "" !== a &&
              (o += " " + a + '="' + String(i).replace(s, "&quot;") + '"'),
            o + ">" + r + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var a = {};
        (a[e] = t(o)),
          i(
            i.P +
              i.F *
                r(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            a
          );
      };
    },
    246: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Topel Energias Renovaveis"}},"benchAccounting":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAEDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHcRAWBB//EABgQAAIDAAAAAAAAAAAAAAAAAAARAQIQ/9oACAEBAAEFAtko2f/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAABAgMf/aAAgBAQAGPwJKP//EABkQAAIDAQAAAAAAAAAAAAAAAAEQABEhMf/aAAgBAQABPyEviaLIr//aAAwDAQACAAMAAAAQQM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAwADAAAAAAAAAAAAAAAAAREhMRBh8P/aAAgBAQABPxDhIt7gbXLm/dCw/9k=","aspectRatio":1.5003750937734435,"src":"/static/5e80cb2f67c2a4804561f9d0ccaa9685/10fb1/bench-accounting-49909-unsplash.jpg","srcSet":"/static/5e80cb2f67c2a4804561f9d0ccaa9685/467b3/bench-accounting-49909-unsplash.jpg 340w,\\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/e1ddd/bench-accounting-49909-unsplash.jpg 680w,\\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/10fb1/bench-accounting-49909-unsplash.jpg 1360w,\\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/883ab/bench-accounting-49909-unsplash.jpg 2000w","sizes":"(max-width: 1360px) 100vw, 1360px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-js-4b27d728da80670792dd.js.map
