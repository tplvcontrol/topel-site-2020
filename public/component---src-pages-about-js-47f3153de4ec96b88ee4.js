(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    221: function(e, t, a) {
      "use strict";
      a.r(t);
      a(19);
      var i = a(246),
        r = a(0),
        s = a.n(r),
        n = a(29),
        o = a(228),
        l = a.n(o),
        d = a(214),
        c = a(213),
        u =
          (a(215),
          a(216),
          function(e, t) {
            var a = e.data,
              i = a.site.siteMetadata.title;
            return s.a.createElement(
              d.a,
              { title: i },
              s.a.createElement(c.a, {
                title: "About",
                keywords: ["blog", "gatsby", "javascript", "react"]
              }),
              s.a.createElement(
                "article",
                { className: "post-content page-template no-image" },
                s.a.createElement(
                  "div",
                  { className: "post-content-body" },
                  s.a.createElement(
                    "h1",
                    {
                      id:
                        "clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"
                    },
                    "Quem Somos"
                  ),
                  s.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card kg-width-wide" },
                    s.a.createElement(l.a, {
                      fluid: a.benchAccounting.childImageSharp.fluid,
                      className: "kg-image"
                    }),
                    s.a.createElement(
                      "figcaption",
                      null,
                      "Large imagery is at the heart of this theme"
                    )
                  ),
                  s.a.createElement(
                    "h3",
                    { id: "dynamic-styles" },
                    "A TOPEL Energias Renovaveis faz parte do grupo TPL Engenharia. Grupo esse com mais de 40 anos de experiencia no setor elétrico."
                  ),
                  s.a.createElement(
                    "p",
                    null,
                    "A partir da preocupação socioambiental, aliado aos avanços tecnologicos e as novas tendencias do setor, fundamos a TOPEL Energias Renovaveis com o objetivo de trazer soluções que busque uma redução de custos de energia eletrica de nossos clientes através de fontes renovaveis."
                  ),
                  s.a.createElement(
                    "p",
                    null,
                    "Portanto temos o diferencial de possuir um quadro de tecnicos e engenheiros altamente capacitados para atuar em todas as etapas do processo, desde o desenvolvimetno do projeto até a sua operação e manutenção."
                  ),
                  s.a.createElement(
                    "h3",
                    { id: "dynamic-styles" },
                    "Tabalhe Conosco"
                  ),
                  s.a.createElement(
                    "p",
                    null,
                    "Conheça as nossas oportunidades de trabalho e candidate-se às nossas vagas aqui.",
                    " ",
                    s.a.createElement(
                      "a",
                      {
                        href:
                          "mailto:rh@topel.com.br&subject=Question%20from%20the%20website="
                      },
                      "Venha fazer parte da equipe"
                    ),
                    "."
                  )
                )
              )
            );
          });
      t.default = function(e) {
        return s.a.createElement(n.StaticQuery, {
          query: "1697785627",
          render: function(t) {
            return s.a.createElement(
              u,
              Object.assign({ location: e.location, data: t }, e)
            );
          },
          data: i
        });
      };
    },
    228: function(e, t, a) {
      "use strict";
      a(16), a(12), a(8), a(80), a(147), a(229);
      var i = a(18);
      (t.__esModule = !0), (t.default = void 0);
      var r,
        s = i(a(79)),
        n = i(a(78)),
        o = i(a(145)),
        l = i(a(146)),
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
            t.fluid && (t.fluid = y([].concat(t.fluid))),
            t.fixed && (t.fixed = y([].concat(t.fixed))),
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
        m = "undefined" != typeof window,
        h = m && window.IntersectionObserver,
        b = new WeakMap();
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            i = e.srcSetWebp,
            r = e.media,
            s = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            i &&
              d.default.createElement("source", {
                type: "image/webp",
                media: r,
                srcSet: i,
                sizes: s
              }),
            d.default.createElement("source", { media: r, srcSet: a, sizes: s })
          );
        });
      }
      function y(e) {
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
      function v(e) {
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
      function w(e, t) {
        var a = e.srcSet,
          i = e.srcSetWebp,
          r = e.media,
          s = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (r ? 'media="' + r + '" ' : "") +
          'srcset="' +
          (t ? i : a) +
          '" ' +
          (s ? 'sizes="' + s + '" ' : "") +
          "/>"
        );
      }
      var j = function(e, t) {
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
        R = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            n = e.width ? 'width="' + e.width + '" ' : "",
            o = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            d = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? w(e, !0) : "") + w(e);
              })
              .join("") +
            "<img " +
            d +
            n +
            o +
            a +
            i +
            t +
            s +
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
            s = d.default.createElement(L, (0, l.default)({ src: t }, r));
          return a.length > 1
            ? d.default.createElement("picture", null, i(a), s)
            : s;
        },
        L = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            i = e.srcSet,
            r = e.src,
            s = e.style,
            n = e.onLoad,
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
              onLoad: n,
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
                s
              )
            })
          );
        });
      L.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var C = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = m && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !p && h && !a.isCritical && !a.seenBefore);
          var i = a.isCritical || (m && (p || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, s.default)(a))),
            (a.handleRef = a.handleRef.bind((0, s.default)(a))),
            a
          );
        }
        (0, n.default)(t, e);
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
              (this.cleanUpListeners = j(e, function() {
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
              s = void 0 === r ? {} : r,
              n = e.imgStyle,
              o = void 0 === n ? {} : n,
              c = e.placeholderStyle,
              A = void 0 === c ? {} : c,
              f = e.placeholderClassName,
              g = e.fluid,
              p = e.fixed,
              m = e.backgroundColor,
              h = e.durationFadeIn,
              b = e.Tag,
              y = e.itemProp,
              w = e.loading,
              j = e.draggable,
              C = !1 === this.state.fadeIn || this.state.imgLoaded,
              B = !0 === this.state.fadeIn && !this.state.imgCached,
              k = (0, l.default)(
                {
                  opacity: C ? 1 : 0,
                  transition: B ? "opacity " + h + "ms" : "none"
                },
                o
              ),
              Q = "boolean" == typeof m ? "lightgray" : m,
              N = { transitionDelay: h + "ms" },
              O = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                B && N,
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
                itemProp: y
              };
            if (g) {
              var V = g,
                T = V[0];
              return d.default.createElement(
                b,
                {
                  className: (i || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    s
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(T.srcSet)
                },
                d.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / T.aspectRatio + "%"
                  }
                }),
                Q &&
                  d.default.createElement(b, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: Q,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      B && N
                    )
                  }),
                T.base64 &&
                  d.default.createElement(I, {
                    src: T.base64,
                    spreadProps: x,
                    imageVariants: V,
                    generateSources: v
                  }),
                T.tracedSVG &&
                  d.default.createElement(I, {
                    src: T.tracedSVG,
                    spreadProps: x,
                    imageVariants: V,
                    generateSources: S
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    E(V),
                    d.default.createElement(L, {
                      alt: a,
                      title: t,
                      sizes: T.sizes,
                      src: T.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: T.srcSet,
                      style: k,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: y,
                      loading: w,
                      draggable: j
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: R(
                        (0, l.default)({ alt: a, title: t, loading: w }, T, {
                          imageVariants: V
                        })
                      )
                    }
                  })
              );
            }
            if (p) {
              var z = p,
                P = z[0],
                D = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: P.width,
                    height: P.height
                  },
                  s
                );
              return (
                "inherit" === s.display && delete D.display,
                d.default.createElement(
                  b,
                  {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: D,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(P.srcSet)
                  },
                  Q &&
                    d.default.createElement(b, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: Q,
                          width: P.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: P.height
                        },
                        B && N
                      )
                    }),
                  P.base64 &&
                    d.default.createElement(I, {
                      src: P.base64,
                      spreadProps: x,
                      imageVariants: z,
                      generateSources: v
                    }),
                  P.tracedSVG &&
                    d.default.createElement(I, {
                      src: P.tracedSVG,
                      spreadProps: x,
                      imageVariants: z,
                      generateSources: S
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      E(z),
                      d.default.createElement(L, {
                        alt: a,
                        title: t,
                        width: P.width,
                        height: P.height,
                        sizes: P.sizes,
                        src: P.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: P.srcSet,
                        style: k,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: y,
                        loading: w,
                        draggable: j
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: R(
                          (0, l.default)({ alt: a, title: t, loading: w }, P, {
                            imageVariants: z
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
      C.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var B = c.default.shape({
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
      C.propTypes = {
        resolutions: B,
        sizes: k,
        fixed: c.default.oneOfType([B, c.default.arrayOf(B)]),
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
      var Q = C;
      t.default = Q;
    },
    229: function(e, t, a) {
      "use strict";
      a(230)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    230: function(e, t, a) {
      var i = a(1),
        r = a(9),
        s = a(38),
        n = /"/g,
        o = function(e, t, a, i) {
          var r = String(s(e)),
            o = "<" + t;
          return (
            "" !== a &&
              (o += " " + a + '="' + String(i).replace(n, "&quot;") + '"'),
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
        '{"data":{"site":{"siteMetadata":{"title":"Topel Energias Renovaveis"}},"benchAccounting":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABTarehyiJZ//EABkQAAIDAQAAAAAAAAAAAAAAAAIDAAERIf/aAAgBAQABBQIQhLlpqKYWtdwjLf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABgRAAIDAAAAAAAAAAAAAAAAAAAhARES/9oACAECAQE/Adtlwf/EABoQAAEFAQAAAAAAAAAAAAAAAAEAAhARISL/2gAIAQEABj8CFBa2ATq5bH//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFx/9oACAEBAAE/IdOl6RXaGuyxm/SCoxDoaJ7B0Wf/2gAMAwEAAgADAAAAEDsf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhEVH/2gAIAQMBAT8QakMfT//EABcRAQADAAAAAAAAAAAAAAAAAAABEWH/2gAIAQIBAT8Qigyf/8QAHRAAAgMAAgMAAAAAAAAAAAAAAREAIVExQWGR4f/aAAgBAQABPxB14YtDAWQghyG73xAjVNsgXQqAKa9REAQd1ClkjD8n/9k=","aspectRatio":1.3837837837837839,"src":"/static/995e09483b8c88b720cfe01f6b87552c/426ce/istockphoto-498769592-1024x1024.jpg","srcSet":"/static/995e09483b8c88b720cfe01f6b87552c/467b3/istockphoto-498769592-1024x1024.jpg 340w,\\n/static/995e09483b8c88b720cfe01f6b87552c/e1ddd/istockphoto-498769592-1024x1024.jpg 680w,\\n/static/995e09483b8c88b720cfe01f6b87552c/426ce/istockphoto-498769592-1024x1024.jpg 1024w","sizes":"(max-width: 1024px) 100vw, 1024px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-js-47f3153de4ec96b88ee4.js.map
