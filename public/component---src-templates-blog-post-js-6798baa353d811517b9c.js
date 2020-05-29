(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    221: function(t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, "pageQuery", function() {
          return m;
        });
      var r = a(0),
        n = a.n(r),
        o = a(219),
        c = a.n(o),
        i = a(216),
        s = a(215);
      var l = (function(t) {
        var e, a;
        function r() {
          return t.apply(this, arguments) || this;
        }
        return (
          (a = t),
          ((e = r).prototype = Object.create(a.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = a),
          (r.prototype.render = function() {
            var t = this.props.data.markdownRemark,
              e = this.props.data.site.siteMetadata.title;
            return n.a.createElement(
              i.a,
              { location: this.props.location, title: e },
              n.a.createElement(s.a, {
                title: t.frontmatter.title,
                description: t.frontmatter.description || t.excerpt
              }),
              n.a.createElement(
                "article",
                {
                  className:
                    "post-content " + (t.frontmatter.thumbnail || "no-image")
                },
                n.a.createElement(
                  "header",
                  { className: "post-content-header" },
                  n.a.createElement(
                    "h1",
                    { className: "post-content-title" },
                    t.frontmatter.title
                  )
                ),
                t.frontmatter.description &&
                  n.a.createElement(
                    "h2",
                    {
                      class: "post-content-excerpt",
                      style: { fontWeight: 400 }
                    },
                    t.frontmatter.description
                  ),
                t.frontmatter.thumbnail &&
                  n.a.createElement(
                    "div",
                    { className: "post-content-image" },
                    n.a.createElement(c.a, {
                      className: "kg-image",
                      fluid: t.frontmatter.thumbnail.childImageSharp.fluid,
                      alt: t.frontmatter.title
                    })
                  ),
                n.a.createElement("div", {
                  className: "post-content-body",
                  dangerouslySetInnerHTML: { __html: t.html }
                }),
                n.a.createElement("footer", {
                  className: "post-content-footer"
                })
              )
            );
          }),
          r
        );
      })(n.a.Component);
      e.default = l;
      var m = "3008354207";
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-6798baa353d811517b9c.js.map
