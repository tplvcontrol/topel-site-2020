(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    219: function(t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "pageQuery", function() {
          return u;
        });
      var n = o(0),
        r = o.n(n),
        a = o(212),
        p = o(213);
      var i = (function(t) {
        var e, o;
        function n() {
          return t.apply(this, arguments) || this;
        }
        return (
          (o = t),
          ((e = n).prototype = Object.create(o.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = o),
          (n.prototype.render = function() {
            var t = this.props.data.site.siteMetadata.title;
            return r.a.createElement(
              a.a,
              { location: this.props.location, title: t },
              r.a.createElement(p.a, { title: "404: Not Found" }),
              r.a.createElement("h1", null, "Not Found"),
              r.a.createElement(
                "p",
                null,
                "You just hit a route that doesn't exist... the sadness."
              )
            );
          }),
          n
        );
      })(r.a.Component);
      e.default = i;
      var u = "1097489062";
    }
  }
]);
//# sourceMappingURL=component---src-pages-404-js-cd07ebcef842ce49bd23.js.map
