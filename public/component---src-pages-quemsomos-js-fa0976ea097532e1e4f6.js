(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    223: function(e, t, a) {
      "use strict";
      a.r(t);
      a(19);
      var i = a(249),
        r = a(0),
        n = a.n(r),
        s = a(38),
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
                    "h1",
                    {
                      id:
                        "clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"
                    },
                    "Quem Somos"
                  ),
                  n.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card kg-width-wide" },
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
                    "A TOPEL Energias Renovaveis faz parte do grupo TPL Engenharia. Grupo esse com mais de 40 anos de experiencia no setor elétrico."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "A partir da preocupação socioambiental, aliado aos avanços tecnologicos e as novas tendencias do setor, fundamos a TOPEL Energias Renovaveis com o objetivo de trazer soluções que busque uma redução de custos de energia eletrica de nossos clientes através de fontes renovaveis."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Portanto temos o diferencial de possuir um quadro de tecnicos e engenheiros altamente capacitados para atuar em todas as etapas do processo, desde o desenvolvimetno do projeto até a sua operação e manutenção."
                  ),
                  n.a.createElement(
                    "h3",
                    { id: "dynamic-styles" },
                    "Tabalhe Conosco"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Conheça as nossas oportunidades de trabalho e candidate-se às nossas vagas aqui.",
                    " ",
                    n.a.createElement(
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
        return n.a.createElement(s.StaticQuery, {
          query: "192856540",
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
    228: function(e, t, a) {
      "use strict";
      a(16), a(12), a(8), a(80), a(147), a(229);
      var i = a(18);
      (t.__esModule = !0), (t.default = void 0);
      var r,
        n = i(a(79)),
        s = i(a(78)),
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
        p = function(e) {
          var t = u(e),
            a = A(t);
          return f[a] || !1;
        },
        g =
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
      var B = function(e, t) {
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
                return (e.srcSetWebp ? w(e, !0) : "") + w(e);
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
        C = function(e) {
          var t = e.src,
            a = e.imageVariants,
            i = e.generateSources,
            r = e.spreadProps,
            n = d.default.createElement(I, (0, l.default)({ src: t }, r));
          return a.length > 1
            ? d.default.createElement("picture", null, i(a), n)
            : n;
        },
        I = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            i = e.srcSet,
            r = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.onClick,
            A = e.loading,
            f = e.draggable,
            p = (0, o.default)(e, [
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
            (0, l.default)({ sizes: a, srcSet: i, src: r }, p, {
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
      I.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var L = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = m && p(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !g && h && !a.isCritical && !a.seenBefore);
          var i = a.isCritical || (m && (g || !a.useIOSupport));
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
                this.props.onStartLoad({ wasCached: p(this.props) }),
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
              (this.cleanUpListeners = B(e, function() {
                var e = p(t.props);
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
              p = e.fluid,
              g = e.fixed,
              m = e.backgroundColor,
              h = e.durationFadeIn,
              b = e.Tag,
              y = e.itemProp,
              w = e.loading,
              B = e.draggable,
              L = !1 === this.state.fadeIn || this.state.imgLoaded,
              Q = !0 === this.state.fadeIn && !this.state.imgCached,
              R = (0, l.default)(
                {
                  opacity: L ? 1 : 0,
                  transition: Q ? "opacity " + h + "ms" : "none"
                },
                o
              ),
              O = "boolean" == typeof m ? "lightgray" : m,
              k = { transitionDelay: h + "ms" },
              N = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                Q && k,
                {},
                o,
                {},
                A
              ),
              x = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: N,
                className: f,
                itemProp: y
              };
            if (p) {
              var z = p,
                V = z[0];
              return d.default.createElement(
                b,
                {
                  className: (i || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(V.srcSet)
                },
                d.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / V.aspectRatio + "%"
                  }
                }),
                O &&
                  d.default.createElement(b, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: O,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      Q && k
                    )
                  }),
                V.base64 &&
                  d.default.createElement(C, {
                    src: V.base64,
                    spreadProps: x,
                    imageVariants: z,
                    generateSources: v
                  }),
                V.tracedSVG &&
                  d.default.createElement(C, {
                    src: V.tracedSVG,
                    spreadProps: x,
                    imageVariants: z,
                    generateSources: S
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    E(z),
                    d.default.createElement(I, {
                      alt: a,
                      title: t,
                      sizes: V.sizes,
                      src: V.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: V.srcSet,
                      style: R,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: y,
                      loading: w,
                      draggable: B
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: j(
                        (0, l.default)({ alt: a, title: t, loading: w }, V, {
                          imageVariants: z
                        })
                      )
                    }
                  })
              );
            }
            if (g) {
              var P = g,
                T = P[0],
                Y = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: T.width,
                    height: T.height
                  },
                  n
                );
              return (
                "inherit" === n.display && delete Y.display,
                d.default.createElement(
                  b,
                  {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: Y,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(T.srcSet)
                  },
                  O &&
                    d.default.createElement(b, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: O,
                          width: T.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: T.height
                        },
                        Q && k
                      )
                    }),
                  T.base64 &&
                    d.default.createElement(C, {
                      src: T.base64,
                      spreadProps: x,
                      imageVariants: P,
                      generateSources: v
                    }),
                  T.tracedSVG &&
                    d.default.createElement(C, {
                      src: T.tracedSVG,
                      spreadProps: x,
                      imageVariants: P,
                      generateSources: S
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      E(P),
                      d.default.createElement(I, {
                        alt: a,
                        title: t,
                        width: T.width,
                        height: T.height,
                        sizes: T.sizes,
                        src: T.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: T.srcSet,
                        style: R,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: y,
                        loading: w,
                        draggable: B
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: j(
                          (0, l.default)({ alt: a, title: t, loading: w }, T, {
                            imageVariants: P
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
      L.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var Q = c.default.shape({
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
        R = c.default.shape({
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
      L.propTypes = {
        resolutions: Q,
        sizes: R,
        fixed: c.default.oneOfType([Q, c.default.arrayOf(Q)]),
        fluid: c.default.oneOfType([R, c.default.arrayOf(R)]),
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
      var O = L;
      t.default = O;
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
        n = a(37),
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
    249: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Topel Energias Renovaveis Salvador Brasil"}},"benchAccounting":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABSarehyiBZ//EABkQAAMBAQEAAAAAAAAAAAAAAAECAxEAIf/aAAgBAQABBQJU5p8YDZVO1v4Xbf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABcRAAMBAAAAAAAAAAAAAAAAAAASIQH/2gAIAQIBAT8Be0bD/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECIREiMUH/2gAIAQEABj8CWEXE9E3ZrE6f/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBUZH/2gAIAQEAAT8hsQt9iuaGtxmEB1L2A6DXYzJfZ//aAAwDAQACAAMAAAAQZB//xAAYEQADAQEAAAAAAAAAAAAAAAAAASERUf/aAAgBAwEBPxBqQx9P/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/EAkGF//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExUXGBwf/aAAgBAQABPxB1i1hKanGP6BtXL3ihYHszVx1nKeZk7Qhd5jB9OPmf/9k=","aspectRatio":1.38328530259366,"src":"/static/4042cd3862702748b7c14f2cddf3ee14/10fb1/Solar-panels-wind-turbines-electricity-pylon-tn.jpg","srcSet":"/static/4042cd3862702748b7c14f2cddf3ee14/467b3/Solar-panels-wind-turbines-electricity-pylon-tn.jpg 340w,\\n/static/4042cd3862702748b7c14f2cddf3ee14/e1ddd/Solar-panels-wind-turbines-electricity-pylon-tn.jpg 680w,\\n/static/4042cd3862702748b7c14f2cddf3ee14/10fb1/Solar-panels-wind-turbines-electricity-pylon-tn.jpg 1360w,\\n/static/4042cd3862702748b7c14f2cddf3ee14/14dee/Solar-panels-wind-turbines-electricity-pylon-tn.jpg 1920w","sizes":"(max-width: 1360px) 100vw, 1360px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-quemsomos-js-fa0976ea097532e1e4f6.js.map
