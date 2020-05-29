(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    217: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return c;
        });
      var r = a(0),
        i = a.n(r),
        n = a(226),
        s = a.n(n),
        o = a(212),
        l = a(213);
      var d = (function(e) {
        var t, a;
        function r() {
          return e.apply(this, arguments) || this;
        }
        return (
          (a = e),
          ((t = r).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (r.prototype.render = function() {
            var e = this.props.data.markdownRemark,
              t = this.props.data.site.siteMetadata.title;
            return i.a.createElement(
              o.a,
              { location: this.props.location, title: t },
              i.a.createElement(l.a, {
                title: e.frontmatter.title,
                description: e.frontmatter.description || e.excerpt
              }),
              i.a.createElement(
                "article",
                {
                  className:
                    "post-content " + (e.frontmatter.thumbnail || "no-image")
                },
                i.a.createElement(
                  "header",
                  { className: "post-content-header" },
                  i.a.createElement(
                    "h1",
                    { className: "post-content-title" },
                    e.frontmatter.title
                  )
                ),
                e.frontmatter.description &&
                  i.a.createElement(
                    "p",
                    { class: "post-content-excerpt" },
                    e.frontmatter.description
                  ),
                e.frontmatter.thumbnail &&
                  i.a.createElement(
                    "div",
                    { className: "post-content-image" },
                    i.a.createElement(s.a, {
                      className: "kg-image",
                      fluid: e.frontmatter.thumbnail.childImageSharp.fluid,
                      alt: e.frontmatter.title
                    })
                  ),
                i.a.createElement("div", {
                  className: "post-content-body",
                  dangerouslySetInnerHTML: { __html: e.html }
                }),
                i.a.createElement("footer", {
                  className: "post-content-footer"
                })
              )
            );
          }),
          r
        );
      })(i.a.Component);
      t.default = d;
      var c = "3008354207";
    },
    226: function(e, t, a) {
      "use strict";
      a(16), a(12), a(8), a(84), a(156), a(227);
      var r = a(18);
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a(82)),
        s = r(a(78)),
        o = r(a(146)),
        l = r(a(147)),
        d = r(a(0)),
        c = r(a(46)),
        u = function(e) {
          var t = (0, l.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = v([].concat(t.fluid))),
            t.fixed && (t.fixed = v([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.fluid,
            a = e.fixed;
          return ((t && t[0]) || (a && a[0])).src;
        },
        p = Object.create({}),
        g = function(e) {
          var t = u(e),
            a = f(t);
          return p[a] || !1;
        },
        m =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        b = h && window.IntersectionObserver,
        y = new WeakMap();
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            r &&
              d.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n
              }),
            d.default.createElement("source", { media: i, srcSet: a, sizes: n })
          );
        });
      }
      function v(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function L(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var I = function(e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), y.set(e, t)),
            function() {
              a.unobserve(e), y.delete(e);
            }
          );
        },
        C = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
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
                return (e.srcSetWebp ? L(e, !0) : "") + L(e);
              })
              .join("") +
            "<img " +
            d +
            s +
            o +
            a +
            r +
            t +
            n +
            i +
            l +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        k = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            i = e.spreadProps,
            n = d.default.createElement(O, (0, l.default)({ src: t }, i));
          return a.length > 1
            ? d.default.createElement("picture", null, r(a), n)
            : n;
        },
        O = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.onClick,
            f = e.loading,
            p = e.draggable,
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
            (0, l.default)({ sizes: a, srcSet: r, src: i }, g, {
              onLoad: s,
              onError: c,
              onClick: u,
              ref: t,
              loading: f,
              draggable: p,
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
      O.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var R = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = h && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !m && b && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (h && (m || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
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
              (this.cleanUpListeners = I(e, function() {
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
              (a = f(t)),
              (p[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              p = e.placeholderClassName,
              g = e.fluid,
              m = e.fixed,
              h = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              L = e.loading,
              I = e.draggable,
              R = !1 === this.state.fadeIn || this.state.imgLoaded,
              V = !0 === this.state.fadeIn && !this.state.imgCached,
              z = (0, l.default)(
                {
                  opacity: R ? 1 : 0,
                  transition: V ? "opacity " + b + "ms" : "none"
                },
                o
              ),
              N = "boolean" == typeof h ? "lightgray" : h,
              T = { transitionDelay: b + "ms" },
              x = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                V && T,
                {},
                o,
                {},
                f
              ),
              P = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: x,
                className: p,
                itemProp: v
              };
            if (g) {
              var j = g,
                _ = j[0];
              return d.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(_.srcSet)
                },
                d.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / _.aspectRatio + "%"
                  }
                }),
                N &&
                  d.default.createElement(y, {
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
                      V && T
                    )
                  }),
                _.base64 &&
                  d.default.createElement(k, {
                    src: _.base64,
                    spreadProps: P,
                    imageVariants: j,
                    generateSources: w
                  }),
                _.tracedSVG &&
                  d.default.createElement(k, {
                    src: _.tracedSVG,
                    spreadProps: P,
                    imageVariants: j,
                    generateSources: E
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    S(j),
                    d.default.createElement(O, {
                      alt: a,
                      title: t,
                      sizes: _.sizes,
                      src: _.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: _.srcSet,
                      style: z,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: v,
                      loading: L,
                      draggable: I
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: C(
                        (0, l.default)({ alt: a, title: t, loading: L }, _, {
                          imageVariants: j
                        })
                      )
                    }
                  })
              );
            }
            if (m) {
              var M = m,
                q = M[0],
                W = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: q.width,
                    height: q.height
                  },
                  n
                );
              return (
                "inherit" === n.display && delete W.display,
                d.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: W,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(q.srcSet)
                  },
                  N &&
                    d.default.createElement(y, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: N,
                          width: q.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: q.height
                        },
                        V && T
                      )
                    }),
                  q.base64 &&
                    d.default.createElement(k, {
                      src: q.base64,
                      spreadProps: P,
                      imageVariants: M,
                      generateSources: w
                    }),
                  q.tracedSVG &&
                    d.default.createElement(k, {
                      src: q.tracedSVG,
                      spreadProps: P,
                      imageVariants: M,
                      generateSources: E
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      S(M),
                      d.default.createElement(O, {
                        alt: a,
                        title: t,
                        width: q.width,
                        height: q.height,
                        sizes: q.sizes,
                        src: q.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: q.srcSet,
                        style: z,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: v,
                        loading: L,
                        draggable: I
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: C(
                          (0, l.default)({ alt: a, title: t, loading: L }, q, {
                            imageVariants: M
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
      R.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var V = c.default.shape({
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
        z = c.default.shape({
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
      R.propTypes = {
        resolutions: V,
        sizes: z,
        fixed: c.default.oneOfType([V, c.default.arrayOf(V)]),
        fluid: c.default.oneOfType([z, c.default.arrayOf(z)]),
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
      var N = R;
      t.default = N;
    },
    227: function(e, t, a) {
      "use strict";
      a(228)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    228: function(e, t, a) {
      var r = a(1),
        i = a(9),
        n = a(38),
        s = /"/g,
        o = function(e, t, a, r) {
          var i = String(n(e)),
            o = "<" + t;
          return (
            "" !== a &&
              (o += " " + a + '="' + String(r).replace(s, "&quot;") + '"'),
            o + ">" + i + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var a = {};
        (a[e] = t(o)),
          r(
            r.P +
              r.F *
                i(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            a
          );
      };
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-99586affe0f8c344af52.js.map
