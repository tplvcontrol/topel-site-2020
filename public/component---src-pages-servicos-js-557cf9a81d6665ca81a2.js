(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    224: function(e, t, a) {
      "use strict";
      a.r(t);
      a(19);
      var r = a(250),
        i = a(0),
        n = a.n(i),
        s = a(38),
        o = (a(228), a(214)),
        l = a(213),
        d =
          (a(215),
          a(216),
          function(e, t) {
            var a = e.data.site.siteMetadata.title;
            return n.a.createElement(
              o.a,
              { title: a },
              n.a.createElement(l.a, {
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
                    "Serviços"
                  ),
                  n.a.createElement(
                    "h2",
                    { id: "dynamic-styles" },
                    "A Topel tem o compromisso de buscar soluções que reduzam suas despesas com energia eletrica atraves da geraçao distribuida adivinda da geraçao de fontes de energias renovaveis"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    n.a.createElement(
                      "h3",
                      { id: "unordered" },
                      n.a.createElement(
                        "strong",
                        null,
                        n.a.createElement(
                          "strong",
                          null,
                          "Desenvolvimento de areas"
                        )
                      )
                    ),
                    n.a.createElement(
                      "ul",
                      null,
                      n.a.createElement(
                        "li",
                        null,
                        "Buscamos o local ideal para a montagem da usina solar."
                      )
                    )
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    n.a.createElement(
                      "h3",
                      { id: "unordered" },
                      n.a.createElement(
                        "strong",
                        null,
                        n.a.createElement("strong", null, "EPC Turn Key")
                      )
                    ),
                    n.a.createElement(
                      "ul",
                      null,
                      n.a.createElement(
                        "li",
                        null,
                        "Nossos clientes alugam as nossas usinas por meio de contratos de longo prazo, garantindo descontos em suas contas de energia com a concessionaria."
                      )
                    )
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    n.a.createElement(
                      "h3",
                      { id: "unordered" },
                      n.a.createElement(
                        "strong",
                        null,
                        n.a.createElement(
                          "strong",
                          null,
                          "Operação e Manutenção"
                        )
                      )
                    ),
                    n.a.createElement(
                      "ul",
                      null,
                      n.a.createElement(
                        "li",
                        null,
                        "Somos responsaveis por todas as atividades de operaçao e manutençao, gestao de faturamento e relacionamento com a concessionaria."
                      )
                    )
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    n.a.createElement(
                      "h3",
                      { id: "unordered" },
                      n.a.createElement(
                        "strong",
                        null,
                        n.a.createElement("strong", null, "Financiamento")
                      )
                    ),
                    n.a.createElement(
                      "ul",
                      null,
                      n.a.createElement(
                        "li",
                        null,
                        "Todo o investimento financeiro (CAPEX) para o desenvolvimento do projeto da usina fotovoltaico é de responsabilidade da Topel."
                      )
                    )
                  ),
                  n.a.createElement(
                    "h2",
                    { id: "dynamic-styles" },
                    "Solicite um Orçamento"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Conheça as nossas oportunidades de trabalho e candidate-se às nossas vagas aqui.",
                    " ",
                    n.a.createElement(
                      "a",
                      { href: "mailto:comercial@tplengenharia.com.br" },
                      "Solicite um Orçamento"
                    ),
                    "."
                  )
                )
              )
            );
          });
      t.default = function(e) {
        return n.a.createElement(s.StaticQuery, {
          query: "1697785627",
          render: function(t) {
            return n.a.createElement(
              d,
              Object.assign({ location: e.location, data: t }, e)
            );
          },
          data: r
        });
      };
    },
    228: function(e, t, a) {
      "use strict";
      a(16), a(12), a(8), a(80), a(147), a(229);
      var r = a(18);
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a(79)),
        s = r(a(78)),
        o = r(a(145)),
        l = r(a(146)),
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
            t.fluid && (t.fluid = S([].concat(t.fluid))),
            t.fixed && (t.fixed = S([].concat(t.fixed))),
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
        E = new WeakMap();
      function b(e) {
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
      function S(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function y(e) {
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
      function v(e) {
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
      function w(e, t) {
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
      var j = function(e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (E.has(e.target)) {
                      var t = E.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), E.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), E.set(e, t)),
            function() {
              a.unobserve(e), E.delete(e);
            }
          );
        },
        B = function(e) {
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
                return (e.srcSetWebp ? w(e, !0) : "") + w(e);
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
        C = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            i = e.spreadProps,
            n = d.default.createElement(R, (0, l.default)({ src: t }, i));
          return a.length > 1
            ? d.default.createElement("picture", null, r(a), n)
            : n;
        },
        R = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
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
            (0, l.default)({ sizes: a, srcSet: r, src: i }, g, {
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
      R.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var I = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = m && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !p && h && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (m && (p || !a.useIOSupport));
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
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              A = void 0 === c ? {} : c,
              f = e.placeholderClassName,
              g = e.fluid,
              p = e.fixed,
              m = e.backgroundColor,
              h = e.durationFadeIn,
              E = e.Tag,
              S = e.itemProp,
              w = e.loading,
              j = e.draggable,
              I = !1 === this.state.fadeIn || this.state.imgLoaded,
              L = !0 === this.state.fadeIn && !this.state.imgCached,
              O = (0, l.default)(
                {
                  opacity: I ? 1 : 0,
                  transition: L ? "opacity " + h + "ms" : "none"
                },
                o
              ),
              Q = "boolean" == typeof m ? "lightgray" : m,
              k = { transitionDelay: h + "ms" },
              N = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                L && k,
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
                itemProp: S
              };
            if (g) {
              var V = g,
                T = V[0];
              return d.default.createElement(
                E,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(T.srcSet)
                },
                d.default.createElement(E, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / T.aspectRatio + "%"
                  }
                }),
                Q &&
                  d.default.createElement(E, {
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
                      L && k
                    )
                  }),
                T.base64 &&
                  d.default.createElement(C, {
                    src: T.base64,
                    spreadProps: x,
                    imageVariants: V,
                    generateSources: v
                  }),
                T.tracedSVG &&
                  d.default.createElement(C, {
                    src: T.tracedSVG,
                    spreadProps: x,
                    imageVariants: V,
                    generateSources: y
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    b(V),
                    d.default.createElement(R, {
                      alt: a,
                      title: t,
                      sizes: T.sizes,
                      src: T.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: T.srcSet,
                      style: O,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: S,
                      loading: w,
                      draggable: j
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: B(
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
                D = z[0],
                M = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: D.width,
                    height: D.height
                  },
                  n
                );
              return (
                "inherit" === n.display && delete M.display,
                d.default.createElement(
                  E,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: M,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(D.srcSet)
                  },
                  Q &&
                    d.default.createElement(E, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: Q,
                          width: D.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: D.height
                        },
                        L && k
                      )
                    }),
                  D.base64 &&
                    d.default.createElement(C, {
                      src: D.base64,
                      spreadProps: x,
                      imageVariants: z,
                      generateSources: v
                    }),
                  D.tracedSVG &&
                    d.default.createElement(C, {
                      src: D.tracedSVG,
                      spreadProps: x,
                      imageVariants: z,
                      generateSources: y
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      b(z),
                      d.default.createElement(R, {
                        alt: a,
                        title: t,
                        width: D.width,
                        height: D.height,
                        sizes: D.sizes,
                        src: D.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: D.srcSet,
                        style: O,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: S,
                        loading: w,
                        draggable: j
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: B(
                          (0, l.default)({ alt: a, title: t, loading: w }, D, {
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
      I.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var L = c.default.shape({
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
        O = c.default.shape({
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
      I.propTypes = {
        resolutions: L,
        sizes: O,
        fixed: c.default.oneOfType([L, c.default.arrayOf(L)]),
        fluid: c.default.oneOfType([O, c.default.arrayOf(O)]),
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
      var Q = I;
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
      var r = a(1),
        i = a(9),
        n = a(37),
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
    },
    250: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Topel Energias Renovaveis Salvador Brasil"}},"benchAccounting":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABTarehyiJZ//EABkQAAIDAQAAAAAAAAAAAAAAAAIDAAERIf/aAAgBAQABBQIQhLlpqKYWtdwjLf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABgRAAIDAAAAAAAAAAAAAAAAAAAhARES/9oACAECAQE/Adtlwf/EABoQAAEFAQAAAAAAAAAAAAAAAAEAAhARISL/2gAIAQEABj8CFBa2ATq5bH//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFx/9oACAEBAAE/IdOl6RXaGuyxm/SCoxDoaJ7B0Wf/2gAMAwEAAgADAAAAEDsf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhEVH/2gAIAQMBAT8QakMfT//EABcRAQADAAAAAAAAAAAAAAAAAAABEWH/2gAIAQIBAT8Qigyf/8QAHRAAAgMAAgMAAAAAAAAAAAAAAREAIVExQWGR4f/aAAgBAQABPxB14YtDAWQghyG73xAjVNsgXQqAKa9REAQd1ClkjD8n/9k=","aspectRatio":1.3837837837837839,"src":"/static/995e09483b8c88b720cfe01f6b87552c/426ce/istockphoto-498769592-1024x1024.jpg","srcSet":"/static/995e09483b8c88b720cfe01f6b87552c/467b3/istockphoto-498769592-1024x1024.jpg 340w,\\n/static/995e09483b8c88b720cfe01f6b87552c/e1ddd/istockphoto-498769592-1024x1024.jpg 680w,\\n/static/995e09483b8c88b720cfe01f6b87552c/426ce/istockphoto-498769592-1024x1024.jpg 1024w","sizes":"(max-width: 1024px) 100vw, 1024px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-servicos-js-557cf9a81d6665ca81a2.js.map
