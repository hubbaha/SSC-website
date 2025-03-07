!(function (l) {
  var e = {
    set: {
      colors: 1,
      values: 1,
      backgroundColor: 1,
      scaleColors: 1,
      normalizeFunction: 1,
      focus: 1,
    },
    get: {
      selectedRegions: 1,
      selectedMarkers: 1,
      mapObject: 1,
      regionName: 1,
    },
  };
  l.fn.vectorMap = function (l) {
    var t = this.children(".jvectormap-container").data("mapObject");
    if ("addMap" === l) jvm.Map.maps[arguments[1]] = arguments[2];
    else {
      if (("set" === l || "get" === l) && e[l][arguments[1]])
        return t[
          l + (arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1))
        ].apply(t, Array.prototype.slice.call(arguments, 2));
      ((l = l || {}).container = this), (t = new jvm.Map(l));
    }
    return this;
  };
})(jQuery),
  (function (l) {
    "function" == typeof define && define.amd
      ? define(["jquery"], l)
      : "object" == typeof exports
        ? (module.exports = l)
        : l(jQuery);
  })(function (o) {
    function t(l) {
      var t = l || window.event,
        e = u.call(arguments, 1),
        a = 0,
        i = 0,
        s = 0,
        n = 0;
      if (
        (((l = o.event.fix(t)).type = "mousewheel"),
        "detail" in t && (s = -1 * t.detail),
        "wheelDelta" in t && (s = t.wheelDelta),
        "wheelDeltaY" in t && (s = t.wheelDeltaY),
        "wheelDeltaX" in t && (i = -1 * t.wheelDeltaX),
        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((i = -1 * s), (s = 0)),
        (a = 0 === s ? i : s),
        "deltaY" in t && (a = s = -1 * t.deltaY),
        "deltaX" in t && ((i = t.deltaX), 0 === s && (a = -1 * i)),
        0 !== s || 0 !== i)
      ) {
        if (1 === t.deltaMode) {
          var r = o.data(this, "mousewheel-line-height");
          (a *= r), (s *= r), (i *= r);
        } else if (2 === t.deltaMode) {
          var h = o.data(this, "mousewheel-page-height");
          (a *= h), (s *= h), (i *= h);
        }
        return (
          (n = Math.max(Math.abs(s), Math.abs(i))),
          (!d || n < d) && p(t, (d = n)) && (d /= 40),
          p(t, n) && ((a /= 40), (i /= 40), (s /= 40)),
          (a = Math[1 <= a ? "floor" : "ceil"](a / d)),
          (i = Math[1 <= i ? "floor" : "ceil"](i / d)),
          (s = Math[1 <= s ? "floor" : "ceil"](s / d)),
          (l.deltaX = i),
          (l.deltaY = s),
          (l.deltaFactor = d),
          (l.deltaMode = 0),
          e.unshift(l, a, i, s),
          c && clearTimeout(c),
          (c = setTimeout(m, 200)),
          (o.event.dispatch || o.event.handle).apply(this, e)
        );
      }
    }
    function m() {
      d = null;
    }
    function p(l, t) {
      return (
        i.settings.adjustOldDeltas && "mousewheel" === l.type && t % 120 == 0
      );
    }
    var c,
      d,
      l = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      e =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      u = Array.prototype.slice;
    if (o.event.fixHooks)
      for (var a = l.length; a; ) o.event.fixHooks[l[--a]] = o.event.mouseHooks;
    var i = (o.event.special.mousewheel = {
      version: "3.1.9",
      setup: function () {
        if (this.addEventListener)
          for (var l = e.length; l; ) this.addEventListener(e[--l], t, !1);
        else this.onmousewheel = t;
        o.data(this, "mousewheel-line-height", i.getLineHeight(this)),
          o.data(this, "mousewheel-page-height", i.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var l = e.length; l; ) this.removeEventListener(e[--l], t, !1);
        else this.onmousewheel = null;
      },
      getLineHeight: function (l) {
        return parseInt(
          o(l)
            ["offsetParent" in o.fn ? "offsetParent" : "parent"]()
            .css("fontSize"),
          10,
        );
      },
      getPageHeight: function (l) {
        return o(l).height();
      },
      settings: { adjustOldDeltas: !0 },
    });
    o.fn.extend({
      mousewheel: function (l) {
        return l ? this.bind("mousewheel", l) : this.trigger("mousewheel");
      },
      unmousewheel: function (l) {
        return this.unbind("mousewheel", l);
      },
    });
  });
var jvm = {
  inherits: function (l, t) {
    function e() {}
    (e.prototype = t.prototype),
      (l.prototype = new e()),
      ((l.prototype.constructor = l).parentClass = t);
  },
  mixin: function (l, t) {
    var e;
    for (e in t.prototype)
      t.prototype.hasOwnProperty(e) && (l.prototype[e] = t.prototype[e]);
  },
  min: function (l) {
    var t,
      e = Number.MAX_VALUE;
    if (l instanceof Array)
      for (t = 0; t < l.length; t++) l[t] < e && (e = l[t]);
    else for (t in l) l[t] < e && (e = l[t]);
    return e;
  },
  max: function (l) {
    var t,
      e = Number.MIN_VALUE;
    if (l instanceof Array)
      for (t = 0; t < l.length; t++) l[t] > e && (e = l[t]);
    else for (t in l) l[t] > e && (e = l[t]);
    return e;
  },
  keys: function (l) {
    var t,
      e = [];
    for (t in l) e.push(t);
    return e;
  },
  values: function (l) {
    var t,
      e,
      a = [];
    for (e = 0; e < arguments.length; e++)
      for (t in (l = arguments[e])) a.push(l[t]);
    return a;
  },
  whenImageLoaded: function (l) {
    var t = new jvm.$.Deferred(),
      e = jvm.$("<img/>");
    return (
      e
        .error(function () {
          t.reject();
        })
        .load(function () {
          t.resolve(e);
        }),
      e.attr("src", l),
      t
    );
  },
  isImageUrl: function (l) {
    return /\.\w{3,4}$/.test(l);
  },
};
(jvm.$ = jQuery),
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function (l, t) {
      var e;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var a = Object(this),
        i = a.length >>> 0;
      if (0 === i) return -1;
      var s = +t || 0;
      if ((1 / 0 === Math.abs(s) && (s = 0), i <= s)) return -1;
      for (e = Math.max(0 <= s ? s : i - Math.abs(s), 0); e < i; ) {
        if (e in a && a[e] === l) return e;
        e++;
      }
      return -1;
    }),
  (jvm.AbstractElement = function (l, t) {
    (this.node = this.createElement(l)),
      (this.name = l),
      (this.properties = {}),
      t && this.set(t);
  }),
  (jvm.AbstractElement.prototype.set = function (l, t) {
    var e;
    if ("object" == typeof l)
      for (e in l) (this.properties[e] = l[e]), this.applyAttr(e, l[e]);
    else (this.properties[l] = t), this.applyAttr(l, t);
  }),
  (jvm.AbstractElement.prototype.get = function (l) {
    return this.properties[l];
  }),
  (jvm.AbstractElement.prototype.applyAttr = function (l, t) {
    this.node.setAttribute(l, t);
  }),
  (jvm.AbstractElement.prototype.remove = function () {
    jvm.$(this.node).remove();
  }),
  (jvm.AbstractCanvasElement = function (l, t, e) {
    (this.container = l),
      this.setSize(t, e),
      (this.rootElement = new jvm[this.classPrefix + "GroupElement"]()),
      this.node.appendChild(this.rootElement.node),
      this.container.appendChild(this.node);
  }),
  (jvm.AbstractCanvasElement.prototype.add = function (l, t) {
    (t = t || this.rootElement).add(l), (l.canvas = this);
  }),
  (jvm.AbstractCanvasElement.prototype.addPath = function (l, t, e) {
    var a = new jvm[this.classPrefix + "PathElement"](l, t);
    return this.add(a, e), a;
  }),
  (jvm.AbstractCanvasElement.prototype.addCircle = function (l, t, e) {
    var a = new jvm[this.classPrefix + "CircleElement"](l, t);
    return this.add(a, e), a;
  }),
  (jvm.AbstractCanvasElement.prototype.addImage = function (l, t, e) {
    var a = new jvm[this.classPrefix + "ImageElement"](l, t);
    return this.add(a, e), a;
  }),
  (jvm.AbstractCanvasElement.prototype.addText = function (l, t, e) {
    var a = new jvm[this.classPrefix + "TextElement"](l, t);
    return this.add(a, e), a;
  }),
  (jvm.AbstractCanvasElement.prototype.addGroup = function (l) {
    var t = new jvm[this.classPrefix + "GroupElement"]();
    return (
      l ? l.node.appendChild(t.node) : this.node.appendChild(t.node),
      (t.canvas = this),
      t
    );
  }),
  (jvm.AbstractShapeElement = function (l, t, e) {
    (this.style = e || {}),
      (this.style.current = this.style.current || {}),
      (this.isHovered = !1),
      (this.isSelected = !1),
      this.updateStyle();
  }),
  (jvm.AbstractShapeElement.prototype.setStyle = function (l, t) {
    var e = {};
    "object" == typeof l ? (e = l) : (e[l] = t),
      jvm.$.extend(this.style.current, e),
      this.updateStyle();
  }),
  (jvm.AbstractShapeElement.prototype.updateStyle = function () {
    var l = {};
    jvm.AbstractShapeElement.mergeStyles(l, this.style.initial),
      jvm.AbstractShapeElement.mergeStyles(l, this.style.current),
      this.isHovered &&
        jvm.AbstractShapeElement.mergeStyles(l, this.style.hover),
      this.isSelected &&
        (jvm.AbstractShapeElement.mergeStyles(l, this.style.selected),
        this.isHovered &&
          jvm.AbstractShapeElement.mergeStyles(l, this.style.selectedHover)),
      this.set(l);
  }),
  (jvm.AbstractShapeElement.mergeStyles = function (l, t) {
    var e;
    for (e in (t = t || {})) null === t[e] ? delete l[e] : (l[e] = t[e]);
  }),
  (jvm.SVGElement = function () {
    jvm.SVGElement.parentClass.apply(this, arguments);
  }),
  jvm.inherits(jvm.SVGElement, jvm.AbstractElement),
  (jvm.SVGElement.svgns = "http://www.w3.org/2000/svg"),
  (jvm.SVGElement.prototype.createElement = function (l) {
    return document.createElementNS(jvm.SVGElement.svgns, l);
  }),
  (jvm.SVGElement.prototype.addClass = function (l) {
    this.node.setAttribute("class", l);
  }),
  (jvm.SVGElement.prototype.getElementCtr = function (l) {
    return jvm["SVG" + l];
  }),
  (jvm.SVGElement.prototype.getBBox = function () {
    return this.node.getBBox();
  }),
  (jvm.SVGGroupElement = function () {
    jvm.SVGGroupElement.parentClass.call(this, "g");
  }),
  jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement),
  (jvm.SVGGroupElement.prototype.add = function (l) {
    this.node.appendChild(l.node);
  }),
  (jvm.SVGCanvasElement = function () {
    (this.classPrefix = "SVG"),
      jvm.SVGCanvasElement.parentClass.call(this, "svg"),
      (this.defsElement = new jvm.SVGElement("defs")),
      this.node.appendChild(this.defsElement.node),
      jvm.AbstractCanvasElement.apply(this, arguments);
  }),
  jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement),
  jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement),
  (jvm.SVGCanvasElement.prototype.setSize = function (l, t) {
    (this.width = l),
      (this.height = t),
      this.node.setAttribute("width", l),
      this.node.setAttribute("height", t);
  }),
  (jvm.SVGCanvasElement.prototype.applyTransformParams = function (l, t, e) {
    (this.scale = l),
      (this.transX = t),
      (this.transY = e),
      this.rootElement.node.setAttribute(
        "transform",
        "scale(" + l + ") translate(" + t + ", " + e + ")",
      );
  }),
  (jvm.SVGShapeElement = function (l, t) {
    jvm.SVGShapeElement.parentClass.call(this, l, t),
      jvm.AbstractShapeElement.apply(this, arguments);
  }),
  jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement),
  jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement),
  (jvm.SVGShapeElement.prototype.applyAttr = function (l, t) {
    var e,
      a,
      i = this;
    "fill" === l && jvm.isImageUrl(t)
      ? jvm.SVGShapeElement.images[t]
        ? this.applyAttr(
            "fill",
            "url(#image" + jvm.SVGShapeElement.images[t] + ")",
          )
        : jvm.whenImageLoaded(t).then(function (l) {
            (a = new jvm.SVGElement("image")).node.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              t,
            ),
              a.applyAttr("x", "0"),
              a.applyAttr("y", "0"),
              a.applyAttr("width", l[0].width),
              a.applyAttr("height", l[0].height),
              (e = new jvm.SVGElement("pattern")).applyAttr(
                "id",
                "image" + jvm.SVGShapeElement.imageCounter,
              ),
              e.applyAttr("x", 0),
              e.applyAttr("y", 0),
              e.applyAttr("width", l[0].width / 2),
              e.applyAttr("height", l[0].height / 2),
              e.applyAttr("viewBox", "0 0 " + l[0].width + " " + l[0].height),
              e.applyAttr("patternUnits", "userSpaceOnUse"),
              e.node.appendChild(a.node),
              i.canvas.defsElement.node.appendChild(e.node),
              (jvm.SVGShapeElement.images[t] = jvm.SVGShapeElement
                .imageCounter++),
              i.applyAttr(
                "fill",
                "url(#image" + jvm.SVGShapeElement.images[t] + ")",
              );
          })
      : jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(
          this,
          arguments,
        );
  }),
  (jvm.SVGShapeElement.imageCounter = 1),
  (jvm.SVGShapeElement.images = {}),
  (jvm.SVGPathElement = function (l, t) {
    jvm.SVGPathElement.parentClass.call(this, "path", l, t),
      this.node.setAttribute("fill-rule", "evenodd");
  }),
  jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement),
  (jvm.SVGCircleElement = function (l, t) {
    jvm.SVGCircleElement.parentClass.call(this, "circle", l, t);
  }),
  jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement),
  (jvm.SVGImageElement = function (l, t) {
    jvm.SVGImageElement.parentClass.call(this, "image", l, t);
  }),
  jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement),
  (jvm.SVGImageElement.prototype.applyAttr = function (l, t) {
    var e = this;
    "image" == l
      ? jvm.whenImageLoaded(t).then(function (l) {
          e.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
            (e.width = l[0].width),
            (e.height = l[0].height),
            e.applyAttr("width", e.width),
            e.applyAttr("height", e.height),
            e.applyAttr("x", e.cx - e.width / 2),
            e.applyAttr("y", e.cy - e.height / 2),
            jvm.$(e.node).trigger("imageloaded", [l]);
        })
      : "cx" == l
        ? ((this.cx = t), this.width && this.applyAttr("x", t - this.width / 2))
        : "cy" == l
          ? ((this.cy = t),
            this.height && this.applyAttr("y", t - this.height / 2))
          : jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(
              this,
              arguments,
            );
  }),
  (jvm.SVGTextElement = function (l, t) {
    jvm.SVGTextElement.parentClass.call(this, "text", l, t);
  }),
  jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement),
  (jvm.SVGTextElement.prototype.applyAttr = function (l, t) {
    "text" === l
      ? (this.node.textContent = t)
      : jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(
          this,
          arguments,
        );
  }),
  (jvm.VMLElement = function () {
    jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(),
      jvm.VMLElement.parentClass.apply(this, arguments);
  }),
  jvm.inherits(jvm.VMLElement, jvm.AbstractElement),
  (jvm.VMLElement.VMLInitialized = !1),
  (jvm.VMLElement.initializeVML = function () {
    try {
      document.namespaces.rvml ||
        document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
        (jvm.VMLElement.prototype.createElement = function (l) {
          return document.createElement("<rvml:" + l + ' class="rvml">');
        });
    } catch (l) {
      jvm.VMLElement.prototype.createElement = function (l) {
        return document.createElement(
          "<" + l + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">',
        );
      };
    }
    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"),
      (jvm.VMLElement.VMLInitialized = !0);
  }),
  (jvm.VMLElement.prototype.getElementCtr = function (l) {
    return jvm["VML" + l];
  }),
  (jvm.VMLElement.prototype.addClass = function (l) {
    jvm.$(this.node).addClass(l);
  }),
  (jvm.VMLElement.prototype.applyAttr = function (l, t) {
    this.node[l] = t;
  }),
  (jvm.VMLElement.prototype.getBBox = function () {
    var l = jvm.$(this.node);
    return {
      x: l.position().left / this.canvas.scale,
      y: l.position().top / this.canvas.scale,
      width: l.width() / this.canvas.scale,
      height: l.height() / this.canvas.scale,
    };
  }),
  (jvm.VMLGroupElement = function () {
    jvm.VMLGroupElement.parentClass.call(this, "group"),
      (this.node.style.left = "0px"),
      (this.node.style.top = "0px"),
      (this.node.coordorigin = "0 0");
  }),
  jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement),
  (jvm.VMLGroupElement.prototype.add = function (l) {
    this.node.appendChild(l.node);
  }),
  (jvm.VMLCanvasElement = function () {
    (this.classPrefix = "VML"),
      jvm.VMLCanvasElement.parentClass.call(this, "group"),
      jvm.AbstractCanvasElement.apply(this, arguments),
      (this.node.style.position = "absolute");
  }),
  jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement),
  jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement),
  (jvm.VMLCanvasElement.prototype.setSize = function (l, t) {
    var e, a, i, s;
    if (
      ((this.width = l),
      (this.height = t),
      (this.node.style.width = l + "px"),
      (this.node.style.height = t + "px"),
      (this.node.coordsize = l + " " + t),
      (this.node.coordorigin = "0 0"),
      this.rootElement)
    ) {
      for (
        i = 0,
          s = (e = this.rootElement.node.getElementsByTagName("shape")).length;
        i < s;
        i++
      )
        (e[i].coordsize = l + " " + t),
          (e[i].style.width = l + "px"),
          (e[i].style.height = t + "px");
      for (
        i = 0, s = (a = this.node.getElementsByTagName("group")).length;
        i < s;
        i++
      )
        (a[i].coordsize = l + " " + t),
          (a[i].style.width = l + "px"),
          (a[i].style.height = t + "px");
    }
  }),
  (jvm.VMLCanvasElement.prototype.applyTransformParams = function (l, t, e) {
    (this.scale = l),
      (this.transX = t),
      (this.transY = e),
      (this.rootElement.node.coordorigin =
        this.width -
        t -
        this.width / 100 +
        "," +
        (this.height - e - this.height / 100)),
      (this.rootElement.node.coordsize =
        this.width / l + "," + this.height / l);
  }),
  (jvm.VMLShapeElement = function (l, t) {
    jvm.VMLShapeElement.parentClass.call(this, l, t),
      (this.fillElement = new jvm.VMLElement("fill")),
      (this.strokeElement = new jvm.VMLElement("stroke")),
      this.node.appendChild(this.fillElement.node),
      this.node.appendChild(this.strokeElement.node),
      (this.node.stroked = !1),
      jvm.AbstractShapeElement.apply(this, arguments);
  }),
  jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement),
  jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement),
  (jvm.VMLShapeElement.prototype.applyAttr = function (l, t) {
    switch (l) {
      case "fill":
        this.node.fillcolor = t;
        break;
      case "fill-opacity":
        this.fillElement.node.opacity = Math.round(100 * t) + "%";
        break;
      case "stroke":
        (this.node.stroked = "none" !== t), (this.node.strokecolor = t);
        break;
      case "stroke-opacity":
        this.strokeElement.node.opacity = Math.round(100 * t) + "%";
        break;
      case "stroke-width":
        (this.node.stroked = 0 !== parseInt(t, 10)),
          (this.node.strokeweight = t);
        break;
      case "d":
        this.node.path = jvm.VMLPathElement.pathSvgToVml(t);
        break;
      default:
        jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(
          this,
          arguments,
        );
    }
  }),
  (jvm.VMLPathElement = function (l, t) {
    var e = new jvm.VMLElement("skew");
    jvm.VMLPathElement.parentClass.call(this, "shape", l, t),
      (this.node.coordorigin = "0 0"),
      (e.node.on = !0),
      (e.node.matrix = "0.01,0,0,0.01,0,0"),
      (e.node.offset = "0,0"),
      this.node.appendChild(e.node);
  }),
  jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement),
  (jvm.VMLPathElement.prototype.applyAttr = function (l, t) {
    "d" === l
      ? (this.node.path = jvm.VMLPathElement.pathSvgToVml(t))
      : jvm.VMLShapeElement.prototype.applyAttr.call(this, l, t);
  }),
  (jvm.VMLPathElement.pathSvgToVml = function (l) {
    var s,
      n,
      r = 0,
      h = 0;
    return (l = l.replace(/(-?\d+)e(-?\d+)/g, "0"))
      .replace(
        /([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,
        function (l, t, e) {
          (e = e
            .replace(/(\d)-/g, "$1,-")
            .replace(/^\s+/g, "")
            .replace(/\s+$/g, "")
            .replace(/\s+/g, ",")
            .split(","))[0] || e.shift();
          for (var a = 0, i = e.length; a < i; a++)
            e[a] = Math.round(100 * e[a]);
          switch (t) {
            case "m":
              return (r += e[0]), (h += e[1]), "t" + e.join(",");
            case "M":
              return (r = e[0]), (h = e[1]), "m" + e.join(",");
            case "l":
              return (r += e[0]), (h += e[1]), "r" + e.join(",");
            case "L":
              return (r = e[0]), (h = e[1]), "l" + e.join(",");
            case "h":
              return (r += e[0]), "r" + e[0] + ",0";
            case "H":
              return "l" + (r = e[0]) + "," + h;
            case "v":
              return (h += e[0]), "r0," + e[0];
            case "V":
              return (h = e[0]), "l" + r + "," + h;
            case "c":
              return (
                (s = r + e[e.length - 4]),
                (n = h + e[e.length - 3]),
                (r += e[e.length - 2]),
                (h += e[e.length - 1]),
                "v" + e.join(",")
              );
            case "C":
              return (
                (s = e[e.length - 4]),
                (n = e[e.length - 3]),
                (r = e[e.length - 2]),
                (h = e[e.length - 1]),
                "c" + e.join(",")
              );
            case "s":
              return (
                e.unshift(h - n),
                e.unshift(r - s),
                (s = r + e[e.length - 4]),
                (n = h + e[e.length - 3]),
                (r += e[e.length - 2]),
                (h += e[e.length - 1]),
                "v" + e.join(",")
              );
            case "S":
              return (
                e.unshift(h + h - n),
                e.unshift(r + r - s),
                (s = e[e.length - 4]),
                (n = e[e.length - 3]),
                (r = e[e.length - 2]),
                (h = e[e.length - 1]),
                "c" + e.join(",")
              );
          }
          return "";
        },
      )
      .replace(/z/g, "e");
  }),
  (jvm.VMLCircleElement = function (l, t) {
    jvm.VMLCircleElement.parentClass.call(this, "oval", l, t);
  }),
  jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement),
  (jvm.VMLCircleElement.prototype.applyAttr = function (l, t) {
    switch (l) {
      case "r":
        (this.node.style.width = 2 * t + "px"),
          (this.node.style.height = 2 * t + "px"),
          this.applyAttr("cx", this.get("cx") || 0),
          this.applyAttr("cy", this.get("cy") || 0);
        break;
      case "cx":
        if (!t) return;
        this.node.style.left = t - (this.get("r") || 0) + "px";
        break;
      case "cy":
        if (!t) return;
        this.node.style.top = t - (this.get("r") || 0) + "px";
        break;
      default:
        jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, l, t);
    }
  }),
  (jvm.VectorCanvas = function (l, t, e) {
    return (
      (this.mode = window.SVGAngle ? "svg" : "vml"),
      (this.impl =
        "svg" == this.mode
          ? new jvm.SVGCanvasElement(l, t, e)
          : new jvm.VMLCanvasElement(l, t, e)),
      (this.impl.mode = this.mode),
      this.impl
    );
  }),
  (jvm.SimpleScale = function (l) {
    this.scale = l;
  }),
  (jvm.SimpleScale.prototype.getValue = function (l) {
    return l;
  }),
  (jvm.OrdinalScale = function (l) {
    this.scale = l;
  }),
  (jvm.OrdinalScale.prototype.getValue = function (l) {
    return this.scale[l];
  }),
  (jvm.OrdinalScale.prototype.getTicks = function () {
    var l,
      t = [];
    for (l in this.scale) t.push({ label: l, value: this.scale[l] });
    return t;
  }),
  (jvm.NumericScale = function (l, t, e, a) {
    (this.scale = []),
      (t = t || "linear"),
      l && this.setScale(l),
      t && this.setNormalizeFunction(t),
      void 0 !== e && this.setMin(e),
      void 0 !== a && this.setMax(a);
  }),
  (jvm.NumericScale.prototype = {
    setMin: function (l) {
      (this.clearMinValue = l),
        (this.minValue =
          "function" == typeof this.normalize ? this.normalize(l) : l);
    },
    setMax: function (l) {
      (this.clearMaxValue = l),
        (this.maxValue =
          "function" == typeof this.normalize ? this.normalize(l) : l);
    },
    setScale: function (l) {
      var t;
      for (this.scale = [], t = 0; t < l.length; t++) this.scale[t] = [l[t]];
    },
    setNormalizeFunction: function (l) {
      "polynomial" === l
        ? (this.normalize = function (l) {
            return Math.pow(l, 0.2);
          })
        : "linear" === l
          ? delete this.normalize
          : (this.normalize = l),
        this.setMin(this.clearMinValue),
        this.setMax(this.clearMaxValue);
    },
    getValue: function (l) {
      var t,
        e,
        a = [],
        i = 0,
        s = 0;
      for (
        "function" == typeof this.normalize && (l = this.normalize(l)), s = 0;
        s < this.scale.length - 1;
        s++
      )
        (t = this.vectorLength(
          this.vectorSubtract(this.scale[s + 1], this.scale[s]),
        )),
          a.push(t),
          (i += t);
      for (e = (this.maxValue - this.minValue) / i, s = 0; s < a.length; s++)
        a[s] *= e;
      for (s = 0, l -= this.minValue; 0 <= l - a[s]; ) (l -= a[s]), s++;
      return this.vectorToNum(
        s == this.scale.length - 1
          ? this.scale[s]
          : this.vectorAdd(
              this.scale[s],
              this.vectorMult(
                this.vectorSubtract(this.scale[s + 1], this.scale[s]),
                l / a[s],
              ),
            ),
      );
    },
    vectorToNum: function (l) {
      var t,
        e = 0;
      for (t = 0; t < l.length; t++)
        e += Math.round(l[t]) * Math.pow(256, l.length - t - 1);
      return e;
    },
    vectorSubtract: function (l, t) {
      var e,
        a = [];
      for (e = 0; e < l.length; e++) a[e] = l[e] - t[e];
      return a;
    },
    vectorAdd: function (l, t) {
      var e,
        a = [];
      for (e = 0; e < l.length; e++) a[e] = l[e] + t[e];
      return a;
    },
    vectorMult: function (l, t) {
      var e,
        a = [];
      for (e = 0; e < l.length; e++) a[e] = l[e] * t;
      return a;
    },
    vectorLength: function (l) {
      var t,
        e = 0;
      for (t = 0; t < l.length; t++) e += l[t] * l[t];
      return Math.sqrt(e);
    },
    getTicks: function () {
      var l,
        t,
        e = [this.clearMinValue, this.clearMaxValue],
        a = e[1] - e[0],
        i = Math.pow(10, Math.floor(Math.log(a / 5) / Math.LN10)),
        s = (5 / a) * i,
        n = [];
      for (
        s <= 0.15 ? (i *= 10) : s <= 0.35 ? (i *= 5) : s <= 0.75 && (i *= 2),
          e[0] = Math.floor(e[0] / i) * i,
          e[1] = Math.ceil(e[1] / i) * i,
          l = e[0];
        l <= e[1];

      )
        (t =
          l == e[0] ? this.clearMinValue : l == e[1] ? this.clearMaxValue : l),
          n.push({ label: l, value: this.getValue(t) }),
          (l += i);
      return n;
    },
  }),
  (jvm.ColorScale = function () {
    jvm.ColorScale.parentClass.apply(this, arguments);
  }),
  jvm.inherits(jvm.ColorScale, jvm.NumericScale),
  (jvm.ColorScale.prototype.setScale = function (l) {
    var t;
    for (t = 0; t < l.length; t++)
      this.scale[t] = jvm.ColorScale.rgbToArray(l[t]);
  }),
  (jvm.ColorScale.prototype.getValue = function (l) {
    return jvm.ColorScale.numToRgb(
      jvm.ColorScale.parentClass.prototype.getValue.call(this, l),
    );
  }),
  (jvm.ColorScale.arrayToRgb = function (l) {
    var t,
      e,
      a = "#";
    for (e = 0; e < l.length; e++)
      a += 1 == (t = l[e].toString(16)).length ? "0" + t : t;
    return a;
  }),
  (jvm.ColorScale.numToRgb = function (l) {
    for (l = l.toString(16); l.length < 6; ) l = "0" + l;
    return "#" + l;
  }),
  (jvm.ColorScale.rgbToArray = function (l) {
    return (
      (l = l.substr(1)),
      [
        parseInt(l.substr(0, 2), 16),
        parseInt(l.substr(2, 2), 16),
        parseInt(l.substr(4, 2), 16),
      ]
    );
  }),
  (jvm.Legend = function (l) {
    (this.params = l || {}),
      (this.map = this.params.map),
      (this.series = this.params.series),
      (this.body = jvm.$("<div/>")),
      this.body.addClass("jvectormap-legend"),
      this.params.cssClass && this.body.addClass(this.params.cssClass),
      l.vertical
        ? this.map.legendCntVertical.append(this.body)
        : this.map.legendCntHorizontal.append(this.body),
      this.render();
  }),
  (jvm.Legend.prototype.render = function () {
    var l,
      t,
      e,
      a,
      i = this.series.scale.getTicks(),
      s = jvm.$("<div/>").addClass("jvectormap-legend-inner");
    for (
      this.body.html(""),
        this.params.title &&
          this.body.append(
            jvm
              .$("<div/>")
              .addClass("jvectormap-legend-title")
              .html(this.params.title),
          ),
        this.body.append(s),
        l = 0;
      l < i.length;
      l++
    ) {
      switch (
        ((t = jvm.$("<div/>").addClass("jvectormap-legend-tick")),
        (e = jvm.$("<div/>").addClass("jvectormap-legend-tick-sample")),
        this.series.params.attribute)
      ) {
        case "fill":
          jvm.isImageUrl(i[l].value)
            ? e.css("background", "url(" + i[l].value + ")")
            : e.css("background", i[l].value);
          break;
        case "stroke":
          e.css("background", i[l].value);
          break;
        case "image":
          e.css(
            "background",
            "url(" + i[l].value + ") no-repeat center center",
          );
          break;
        case "r":
          jvm
            .$("<div/>")
            .css({
              "border-radius": i[l].value,
              border:
                this.map.params.markerStyle.initial["stroke-width"] +
                "px " +
                this.map.params.markerStyle.initial.stroke +
                " solid",
              width: 2 * i[l].value + "px",
              height: 2 * i[l].value + "px",
              background: this.map.params.markerStyle.initial.fill,
            })
            .appendTo(e);
      }
      t.append(e),
        (a = i[l].label),
        this.params.labelRender && (a = this.params.labelRender(a)),
        t.append(
          jvm
            .$("<div>" + a + " </div>")
            .addClass("jvectormap-legend-tick-text"),
        ),
        s.append(t);
    }
    s.append(jvm.$("<div/>").css("clear", "both"));
  }),
  (jvm.DataSeries = function (l, t, e) {
    var a;
    ((l = l || {}).attribute = l.attribute || "fill"),
      (this.elements = t),
      (this.params = l),
      (this.map = e),
      l.attributes && this.setAttributes(l.attributes),
      jvm.$.isArray(l.scale)
        ? ((a =
            "fill" === l.attribute || "stroke" === l.attribute
              ? jvm.ColorScale
              : jvm.NumericScale),
          (this.scale = new a(l.scale, l.normalizeFunction, l.min, l.max)))
        : (this.scale = l.scale
            ? new jvm.OrdinalScale(l.scale)
            : new jvm.SimpleScale(l.scale)),
      (this.values = l.values || {}),
      this.setValues(this.values),
      this.params.legend &&
        (this.legend = new jvm.Legend(
          $.extend({ map: this.map, series: this }, this.params.legend),
        ));
  }),
  (jvm.DataSeries.prototype = {
    setAttributes: function (l, t) {
      var e,
        a = l;
      if ("string" == typeof l)
        this.elements[l] && this.elements[l].setStyle(this.params.attribute, t);
      else
        for (e in a)
          this.elements[e] &&
            this.elements[e].element.setStyle(this.params.attribute, a[e]);
    },
    setValues: function (l) {
      var t,
        e,
        a = -Number.MAX_VALUE,
        i = Number.MAX_VALUE,
        s = {};
      if (
        this.scale instanceof jvm.OrdinalScale ||
        this.scale instanceof jvm.SimpleScale
      )
        for (e in l)
          s[e] = l[e]
            ? this.scale.getValue(l[e])
            : this.elements[e].element.style.initial[this.params.attribute];
      else {
        if (void 0 === this.params.min || void 0 === this.params.max)
          for (e in l) a < (t = parseFloat(l[e])) && (a = t), t < i && (i = t);
        for (e in (void 0 === this.params.min
          ? (this.scale.setMin(i), (this.params.min = i))
          : this.scale.setMin(this.params.min),
        void 0 === this.params.max
          ? (this.scale.setMax(a), (this.params.max = a))
          : this.scale.setMax(this.params.max),
        l))
          "indexOf" != e &&
            ((t = parseFloat(l[e])),
            (s[e] = isNaN(t)
              ? this.elements[e].element.style.initial[this.params.attribute]
              : this.scale.getValue(t)));
      }
      this.setAttributes(s), jvm.$.extend(this.values, l);
    },
    clear: function () {
      var l,
        t = {};
      for (l in this.values)
        this.elements[l] &&
          (t[l] =
            this.elements[l].element.shape.style.initial[
              this.params.attribute
            ]);
      this.setAttributes(t), (this.values = {});
    },
    setScale: function (l) {
      this.scale.setScale(l), this.values && this.setValues(this.values);
    },
    setNormalizeFunction: function (l) {
      this.scale.setNormalizeFunction(l),
        this.values && this.setValues(this.values);
    },
  }),
  (jvm.Proj = {
    degRad: 180 / Math.PI,
    radDeg: Math.PI / 180,
    radius: 6381372,
    sgn: function (l) {
      return 0 < l ? 1 : l < 0 ? -1 : l;
    },
    mill: function (l, t, e) {
      return {
        x: this.radius * (t - e) * this.radDeg,
        y:
          (-this.radius * Math.log(Math.tan((45 + 0.4 * l) * this.radDeg))) /
          0.8,
      };
    },
    mill_inv: function (l, t, e) {
      return {
        lat:
          (2.5 * Math.atan(Math.exp((0.8 * t) / this.radius)) -
            (5 * Math.PI) / 8) *
          this.degRad,
        lng: (e * this.radDeg + l / this.radius) * this.degRad,
      };
    },
    merc: function (l, t, e) {
      return {
        x: this.radius * (t - e) * this.radDeg,
        y: -this.radius * Math.log(Math.tan(Math.PI / 4 + (l * Math.PI) / 360)),
      };
    },
    merc_inv: function (l, t, e) {
      return {
        lat:
          (2 * Math.atan(Math.exp(t / this.radius)) - Math.PI / 2) *
          this.degRad,
        lng: (e * this.radDeg + l / this.radius) * this.degRad,
      };
    },
    aea: function (l, t, e) {
      var a = e * this.radDeg,
        i = 29.5 * this.radDeg,
        s = 45.5 * this.radDeg,
        n = l * this.radDeg,
        r = t * this.radDeg,
        h = (Math.sin(i) + Math.sin(s)) / 2,
        o = Math.cos(i) * Math.cos(i) + 2 * h * Math.sin(i),
        m = h * (r - a),
        p = Math.sqrt(o - 2 * h * Math.sin(n)) / h,
        c = Math.sqrt(o - 2 * h * Math.sin(0)) / h;
      return {
        x: p * Math.sin(m) * this.radius,
        y: -(c - p * Math.cos(m)) * this.radius,
      };
    },
    aea_inv: function (l, t, e) {
      var a = l / this.radius,
        i = t / this.radius,
        s = e * this.radDeg,
        n = 29.5 * this.radDeg,
        r = 45.5 * this.radDeg,
        h = (Math.sin(n) + Math.sin(r)) / 2,
        o = Math.cos(n) * Math.cos(n) + 2 * h * Math.sin(n),
        m = Math.sqrt(o - 2 * h * Math.sin(0)) / h,
        p = Math.sqrt(a * a + (m - i) * (m - i)),
        c = Math.atan(a / (m - i));
      return {
        lat: Math.asin((o - p * p * h * h) / (2 * h)) * this.degRad,
        lng: (s + c / h) * this.degRad,
      };
    },
    lcc: function (l, t, e) {
      var a = e * this.radDeg,
        i = t * this.radDeg,
        s = 33 * this.radDeg,
        n = 45 * this.radDeg,
        r = l * this.radDeg,
        h =
          Math.log(Math.cos(s) * (1 / Math.cos(n))) /
          Math.log(
            Math.tan(Math.PI / 4 + n / 2) * (1 / Math.tan(Math.PI / 4 + s / 2)),
          ),
        o = (Math.cos(s) * Math.pow(Math.tan(Math.PI / 4 + s / 2), h)) / h,
        m = o * Math.pow(1 / Math.tan(Math.PI / 4 + r / 2), h),
        p = o * Math.pow(1 / Math.tan(Math.PI / 4 + 0), h);
      return {
        x: m * Math.sin(h * (i - a)) * this.radius,
        y: -(p - m * Math.cos(h * (i - a))) * this.radius,
      };
    },
    lcc_inv: function (l, t, e) {
      var a = l / this.radius,
        i = t / this.radius,
        s = e * this.radDeg,
        n = 33 * this.radDeg,
        r = 45 * this.radDeg,
        h =
          Math.log(Math.cos(n) * (1 / Math.cos(r))) /
          Math.log(
            Math.tan(Math.PI / 4 + r / 2) * (1 / Math.tan(Math.PI / 4 + n / 2)),
          ),
        o = (Math.cos(n) * Math.pow(Math.tan(Math.PI / 4 + n / 2), h)) / h,
        m = o * Math.pow(1 / Math.tan(Math.PI / 4 + 0), h),
        p = this.sgn(h) * Math.sqrt(a * a + (m - i) * (m - i)),
        c = Math.atan(a / (m - i));
      return {
        lat:
          (2 * Math.atan(Math.pow(o / p, 1 / h)) - Math.PI / 2) * this.degRad,
        lng: (s + c / h) * this.degRad,
      };
    },
  }),
  (jvm.MapObject = function () {}),
  (jvm.MapObject.prototype.getLabelText = function (l) {
    return this.config.label
      ? "function" == typeof this.config.label.render
        ? this.config.label.render(l)
        : l
      : null;
  }),
  (jvm.MapObject.prototype.getLabelOffsets = function (l) {
    var t;
    return (
      this.config.label &&
        ("function" == typeof this.config.label.offsets
          ? (t = this.config.label.offsets(l))
          : "object" == typeof this.config.label.offsets &&
            (t = this.config.label.offsets[l])),
      t || [0, 0]
    );
  }),
  (jvm.MapObject.prototype.setHovered = function (l) {
    this.isHovered !== l &&
      ((this.isHovered = l),
      (this.shape.isHovered = l),
      this.shape.updateStyle(),
      this.label && ((this.label.isHovered = l), this.label.updateStyle()));
  }),
  (jvm.MapObject.prototype.setSelected = function (l) {
    this.isSelected !== l &&
      ((this.isSelected = l),
      (this.shape.isSelected = l),
      this.shape.updateStyle(),
      this.label && ((this.label.isSelected = l), this.label.updateStyle()),
      jvm.$(this.shape).trigger("selected", [l]));
  }),
  (jvm.MapObject.prototype.setStyle = function () {
    this.shape.setStyle.apply(this.shape, arguments);
  }),
  (jvm.MapObject.prototype.remove = function () {
    this.shape.remove(), this.label && this.label.remove();
  }),
  (jvm.Region = function (l) {
    var t, e, a;
    (this.config = l),
      (this.map = this.config.map),
      (this.shape = l.canvas.addPath(
        { d: l.path, "data-code": l.code },
        l.style,
        l.canvas.rootElement,
      )),
      this.shape.addClass("jvectormap-region jvectormap-element"),
      (t = this.shape.getBBox()),
      (e = this.getLabelText(l.code)),
      this.config.label &&
        e &&
        ((a = this.getLabelOffsets(l.code)),
        (this.labelX = t.x + t.width / 2 + a[0]),
        (this.labelY = t.y + t.height / 2 + a[1]),
        (this.label = l.canvas.addText(
          {
            text: e,
            "text-anchor": "middle",
            "alignment-baseline": "central",
            x: this.labelX,
            y: this.labelY,
            "data-code": l.code,
          },
          l.labelStyle,
          l.labelsGroup,
        )),
        this.label.addClass("jvectormap-region jvectormap-element"));
  }),
  jvm.inherits(jvm.Region, jvm.MapObject),
  (jvm.Region.prototype.updateLabelPosition = function () {
    this.label &&
      this.label.set({
        x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale,
      });
  }),
  (jvm.Marker = function (l) {
    var t;
    (this.config = l),
      (this.map = this.config.map),
      (this.isImage = !!this.config.style.initial.image),
      this.createShape(),
      (t = this.getLabelText(l.index)),
      this.config.label &&
        t &&
        ((this.offsets = this.getLabelOffsets(l.index)),
        (this.labelX = l.cx / this.map.scale - this.map.transX),
        (this.labelY = l.cy / this.map.scale - this.map.transY),
        (this.label = l.canvas.addText(
          {
            text: t,
            "data-index": l.index,
            dy: "0.6ex",
            x: this.labelX,
            y: this.labelY,
          },
          l.labelStyle,
          l.labelsGroup,
        )),
        this.label.addClass("jvectormap-marker jvectormap-element"));
  }),
  jvm.inherits(jvm.Marker, jvm.MapObject),
  (jvm.Marker.prototype.createShape = function () {
    var l = this;
    this.shape && this.shape.remove(),
      (this.shape = this.config.canvas[this.isImage ? "addImage" : "addCircle"](
        {
          "data-index": this.config.index,
          cx: this.config.cx,
          cy: this.config.cy,
        },
        this.config.style,
        this.config.group,
      )),
      this.shape.addClass("jvectormap-marker jvectormap-element"),
      this.isImage &&
        jvm.$(this.shape.node).on("imageloaded", function () {
          l.updateLabelPosition();
        });
  }),
  (jvm.Marker.prototype.updateLabelPosition = function () {
    this.label &&
      this.label.set({
        x:
          this.labelX * this.map.scale +
          this.offsets[0] +
          this.map.transX * this.map.scale +
          5 +
          (this.isImage
            ? (this.shape.width || 0) / 2
            : this.shape.properties.r),
        y:
          this.labelY * this.map.scale +
          this.map.transY * this.map.scale +
          this.offsets[1],
      });
  }),
  (jvm.Marker.prototype.setStyle = function (l) {
    var t;
    jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments),
      "r" === l && this.updateLabelPosition(),
      (t = !!this.shape.get("image")) != this.isImage &&
        ((this.isImage = t),
        (this.config.style = jvm.$.extend(!0, {}, this.shape.style)),
        this.createShape());
  }),
  (jvm.Map = function (l) {
    var t,
      e = this;
    if (
      ((this.params = jvm.$.extend(!0, {}, jvm.Map.defaultParams, l)),
      !jvm.Map.maps[this.params.map])
    )
      throw new Error(
        "Attempt to use map which was not loaded: " + this.params.map,
      );
    for (t in ((this.mapData = jvm.Map.maps[this.params.map]),
    (this.markers = {}),
    (this.regions = {}),
    (this.regionsColors = {}),
    (this.regionsData = {}),
    (this.container = jvm.$("<div>").addClass("jvectormap-container")),
    this.params.container && this.params.container.append(this.container),
    this.container.data("mapObject", this),
    (this.defaultWidth = this.mapData.width),
    (this.defaultHeight = this.mapData.height),
    this.setBackgroundColor(this.params.backgroundColor),
    (this.onResize = function () {
      e.updateSize();
    }),
    jvm.$(window).resize(this.onResize),
    jvm.Map.apiEvents))
      this.params[t] &&
        this.container.bind(
          jvm.Map.apiEvents[t] + ".jvectormap",
          this.params[t],
        );
    (this.canvas = new jvm.VectorCanvas(
      this.container[0],
      this.width,
      this.height,
    )),
      this.params.bindTouchEvents &&
        ("ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
          ? this.bindContainerTouchEvents()
          : window.MSGesture && this.bindContainerPointerEvents()),
      this.bindContainerEvents(),
      this.bindElementEvents(),
      this.createTip(),
      this.params.zoomButtons && this.bindZoomButtons(),
      this.createRegions(),
      this.createMarkers(this.params.markers || {}),
      this.updateSize(),
      this.params.focusOn &&
        ("string" == typeof this.params.focusOn
          ? (this.params.focusOn = { region: this.params.focusOn })
          : jvm.$.isArray(this.params.focusOn) &&
            (this.params.focusOn = { regions: this.params.focusOn }),
        this.setFocus(this.params.focusOn)),
      this.params.selectedRegions &&
        this.setSelectedRegions(this.params.selectedRegions),
      this.params.selectedMarkers &&
        this.setSelectedMarkers(this.params.selectedMarkers),
      (this.legendCntHorizontal = jvm
        .$("<div/>")
        .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h")),
      (this.legendCntVertical = jvm
        .$("<div/>")
        .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v")),
      this.container.append(this.legendCntHorizontal),
      this.container.append(this.legendCntVertical),
      this.params.series && this.createSeries();
  }),
  (jvm.Map.prototype = {
    transX: 0,
    transY: 0,
    scale: 1,
    baseTransX: 0,
    baseTransY: 0,
    baseScale: 1,
    width: 0,
    height: 0,
    setBackgroundColor: function (l) {
      this.container.css("background-color", l);
    },
    resize: function () {
      var l = this.baseScale;
      this.width / this.height > this.defaultWidth / this.defaultHeight
        ? ((this.baseScale = this.height / this.defaultHeight),
          (this.baseTransX =
            Math.abs(this.width - this.defaultWidth * this.baseScale) /
            (2 * this.baseScale)))
        : ((this.baseScale = this.width / this.defaultWidth),
          (this.baseTransY =
            Math.abs(this.height - this.defaultHeight * this.baseScale) /
            (2 * this.baseScale))),
        (this.scale *= this.baseScale / l),
        (this.transX *= this.baseScale / l),
        (this.transY *= this.baseScale / l);
    },
    updateSize: function () {
      (this.width = this.container.width()),
        (this.height = this.container.height()),
        this.resize(),
        this.canvas.setSize(this.width, this.height),
        this.applyTransform();
    },
    reset: function () {
      var l, t;
      for (l in this.series)
        for (t = 0; t < this.series[l].length; t++) this.series[l][t].clear();
      (this.scale = this.baseScale),
        (this.transX = this.baseTransX),
        (this.transY = this.baseTransY),
        this.applyTransform();
    },
    applyTransform: function () {
      var l, t, e, a;
      (e =
        this.defaultWidth * this.scale <= this.width
          ? ((l =
              (this.width - this.defaultWidth * this.scale) / (2 * this.scale)),
            (this.width - this.defaultWidth * this.scale) / (2 * this.scale))
          : ((l = 0),
            (this.width - this.defaultWidth * this.scale) / this.scale)),
        (a =
          this.defaultHeight * this.scale <= this.height
            ? ((t =
                (this.height - this.defaultHeight * this.scale) /
                (2 * this.scale)),
              (this.height - this.defaultHeight * this.scale) /
                (2 * this.scale))
            : ((t = 0),
              (this.height - this.defaultHeight * this.scale) / this.scale)),
        this.transY > t
          ? (this.transY = t)
          : this.transY < a && (this.transY = a),
        this.transX > l
          ? (this.transX = l)
          : this.transX < e && (this.transX = e),
        this.canvas.applyTransformParams(this.scale, this.transX, this.transY),
        this.markers && this.repositionMarkers(),
        this.repositionLabels(),
        this.container.trigger("viewportChange", [
          this.scale / this.baseScale,
          this.transX,
          this.transY,
        ]);
    },
    bindContainerEvents: function () {
      var t,
        e,
        a = !1,
        s = this;
      this.params.panOnDrag &&
        (this.container
          .mousemove(function (l) {
            return (
              a &&
                ((s.transX -= (t - l.pageX) / s.scale),
                (s.transY -= (e - l.pageY) / s.scale),
                s.applyTransform(),
                (t = l.pageX),
                (e = l.pageY)),
              !1
            );
          })
          .mousedown(function (l) {
            return (a = !0), (t = l.pageX), (e = l.pageY), !1;
          }),
        (this.onContainerMouseUp = function () {
          a = !1;
        }),
        jvm.$("body").mouseup(this.onContainerMouseUp)),
        this.params.zoomOnScroll &&
          this.container.mousewheel(function (l) {
            var t = jvm.$(s.container).offset(),
              e = l.pageX - t.left,
              a = l.pageY - t.top,
              i = Math.pow(
                1 + s.params.zoomOnScrollSpeed / 1e3,
                l.deltaFactor * l.deltaY,
              );
            s.tip.hide(), s.setScale(s.scale * i, e, a), l.preventDefault();
          });
    },
    bindContainerTouchEvents: function () {
      var n,
        r,
        h,
        o,
        m,
        p,
        c,
        d = this,
        l = function (l) {
          var t,
            e,
            a,
            i,
            s = l.originalEvent.touches;
          "touchstart" == l.type && (c = 0),
            1 == s.length
              ? (1 == c &&
                  ((a = d.transX),
                  (i = d.transY),
                  (d.transX -= (h - s[0].pageX) / d.scale),
                  (d.transY -= (o - s[0].pageY) / d.scale),
                  d.applyTransform(),
                  d.tip.hide(),
                  (a != d.transX || i != d.transY) && l.preventDefault()),
                (h = s[0].pageX),
                (o = s[0].pageY))
              : 2 == s.length &&
                (2 == c
                  ? ((e =
                      Math.sqrt(
                        Math.pow(s[0].pageX - s[1].pageX, 2) +
                          Math.pow(s[0].pageY - s[1].pageY, 2),
                      ) / r),
                    d.setScale(n * e, m, p),
                    d.tip.hide(),
                    l.preventDefault())
                  : ((t = jvm.$(d.container).offset()),
                    (m =
                      s[0].pageX > s[1].pageX
                        ? s[1].pageX + (s[0].pageX - s[1].pageX) / 2
                        : s[0].pageX + (s[1].pageX - s[0].pageX) / 2),
                    (p =
                      s[0].pageY > s[1].pageY
                        ? s[1].pageY + (s[0].pageY - s[1].pageY) / 2
                        : s[0].pageY + (s[1].pageY - s[0].pageY) / 2),
                    (m -= t.left),
                    (p -= t.top),
                    (n = d.scale),
                    (r = Math.sqrt(
                      Math.pow(s[0].pageX - s[1].pageX, 2) +
                        Math.pow(s[0].pageY - s[1].pageY, 2),
                    )))),
            (c = s.length);
        };
      jvm.$(this.container).bind("touchstart", l),
        jvm.$(this.container).bind("touchmove", l);
    },
    bindContainerPointerEvents: function () {
      var a = this,
        t = new MSGesture(),
        l = this.container[0];
      (t.target = l).addEventListener(
        "MSGestureChange",
        function (l) {
          var t, e;
          (0 != l.translationX || 0 != l.translationY) &&
            ((t = a.transX),
            (e = a.transY),
            (a.transX += l.translationX / a.scale),
            (a.transY += l.translationY / a.scale),
            a.applyTransform(),
            a.tip.hide(),
            (t != a.transX || e != a.transY) && l.preventDefault()),
            1 != l.scale &&
              (a.setScale(a.scale * l.scale, l.offsetX, l.offsetY),
              a.tip.hide(),
              l.preventDefault());
        },
        !1,
      ),
        l.addEventListener(
          "pointerdown",
          function (l) {
            t.addPointer(l.pointerId);
          },
          !1,
        );
    },
    bindElementEvents: function () {
      var t,
        e,
        i,
        r = this;
      this.container.mousemove(function (l) {
        2 < Math.abs(t - l.pageX) + Math.abs(e - l.pageY) && (i = !0);
      }),
        this.container.delegate(
          "[class~='jvectormap-element']",
          "mouseover mouseout",
          function (l) {
            var t =
                -1 ===
                (
                  jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class")
                ).indexOf("jvectormap-region")
                  ? "marker"
                  : "region",
              e = jvm.$(this).attr("region" == t ? "data-code" : "data-index"),
              a = "region" == t ? r.regions[e].element : r.markers[e].element,
              i =
                "region" == t
                  ? r.mapData.paths[e].name
                  : r.markers[e].config.name || "",
              s = jvm.$.Event(t + "TipShow.jvectormap"),
              n = jvm.$.Event(t + "Over.jvectormap");
            "mouseover" == l.type
              ? (r.container.trigger(n, [e]),
                n.isDefaultPrevented() || a.setHovered(!0),
                r.tip.text(i),
                r.container.trigger(s, [r.tip, e]),
                s.isDefaultPrevented() ||
                  (r.tip.show(),
                  (r.tipWidth = r.tip.width()),
                  (r.tipHeight = r.tip.height())))
              : (a.setHovered(!1),
                r.tip.hide(),
                r.container.trigger(t + "Out.jvectormap", [e]));
          },
        ),
        this.container.delegate(
          "[class~='jvectormap-element']",
          "mousedown",
          function (l) {
            (t = l.pageX), (e = l.pageY), (i = !1);
          },
        ),
        this.container.delegate(
          "[class~='jvectormap-element']",
          "mouseup",
          function () {
            var l =
                -1 ===
                (jvm.$(this).attr("class").baseVal
                  ? jvm.$(this).attr("class").baseVal
                  : jvm.$(this).attr("class")
                ).indexOf("jvectormap-region")
                  ? "marker"
                  : "region",
              t = jvm.$(this).attr("region" == l ? "data-code" : "data-index"),
              e = jvm.$.Event(l + "Click.jvectormap"),
              a = "region" == l ? r.regions[t].element : r.markers[t].element;
            i ||
              (r.container.trigger(e, [t]),
              (("region" === l && r.params.regionsSelectable) ||
                ("marker" === l && r.params.markersSelectable)) &&
                (e.isDefaultPrevented() ||
                  (r.params[l + "sSelectableOne"] && r.clearSelected(l + "s"),
                  a.setSelected(!a.isSelected))));
          },
        );
    },
    bindZoomButtons: function () {
      var l = this;
      jvm
        .$("<div/>")
        .addClass("jvectormap-zoomin")
        .text("+")
        .appendTo(this.container),
        jvm
          .$("<div/>")
          .addClass("jvectormap-zoomout")
          .html("&#x2212;")
          .appendTo(this.container),
        this.container.find(".jvectormap-zoomin").click(function () {
          l.setScale(
            l.scale * l.params.zoomStep,
            l.width / 2,
            l.height / 2,
            !1,
            l.params.zoomAnimate,
          );
        }),
        this.container.find(".jvectormap-zoomout").click(function () {
          l.setScale(
            l.scale / l.params.zoomStep,
            l.width / 2,
            l.height / 2,
            !1,
            l.params.zoomAnimate,
          );
        });
    },
    createTip: function () {
      var a = this;
      (this.tip = jvm
        .$("<div/>")
        .addClass("jvectormap-tip")
        .appendTo(jvm.$("body"))),
        this.container.mousemove(function (l) {
          var t = l.pageX - 15 - a.tipWidth,
            e = l.pageY - 15 - a.tipHeight;
          t < 5 && (t = l.pageX + 15),
            e < 5 && (e = l.pageY + 15),
            a.tip.css({ left: t, top: e });
        });
    },
    setScale: function (l, t, e, a, i) {
      var s,
        n,
        r,
        h,
        o,
        m,
        p,
        c,
        d,
        u = jvm.$.Event("zoom.jvectormap"),
        M = this,
        v = 0,
        g = Math.abs(
          Math.round((60 * (l - this.scale)) / Math.max(l, this.scale)),
        ),
        f = new jvm.$.Deferred();
      return (
        l > this.params.zoomMax * this.baseScale
          ? (l = this.params.zoomMax * this.baseScale)
          : l < this.params.zoomMin * this.baseScale &&
            (l = this.params.zoomMin * this.baseScale),
        void 0 !== t &&
          void 0 !== e &&
          ((zoomStep = l / this.scale),
          (d = a
            ? ((c =
                t +
                (this.defaultWidth * (this.width / (this.defaultWidth * l))) /
                  2),
              e +
                (this.defaultHeight *
                  (this.height / (this.defaultHeight * l))) /
                  2)
            : ((c = this.transX - ((zoomStep - 1) / l) * t),
              this.transY - ((zoomStep - 1) / l) * e))),
        i && 0 < g
          ? ((n = this.scale),
            (r = (l - n) / g),
            (h = this.transX * this.scale),
            (m = this.transY * this.scale),
            (o = (c * l - h) / g),
            (p = (d * l - m) / g),
            (s = setInterval(function () {
              (v += 1),
                (M.scale = n + r * v),
                (M.transX = (h + o * v) / M.scale),
                (M.transY = (m + p * v) / M.scale),
                M.applyTransform(),
                v == g &&
                  (clearInterval(s),
                  M.container.trigger(u, [l / M.baseScale]),
                  f.resolve());
            }, 10)))
          : ((this.transX = c),
            (this.transY = d),
            (this.scale = l),
            this.applyTransform(),
            this.container.trigger(u, [l / this.baseScale]),
            f.resolve()),
        f
      );
    },
    setFocus: function (l) {
      var t, e, a, i, s;
      if (
        ((l = l || {}).region ? (a = [l.region]) : l.regions && (a = l.regions),
        a)
      ) {
        for (i = 0; i < a.length; i++)
          this.regions[a[i]] &&
            (e = this.regions[a[i]].element.shape.getBBox()) &&
            (t =
              void 0 === t
                ? e
                : {
                    x: Math.min(t.x, e.x),
                    y: Math.min(t.y, e.y),
                    width:
                      Math.max(t.x + t.width, e.x + e.width) -
                      Math.min(t.x, e.x),
                    height:
                      Math.max(t.y + t.height, e.y + e.height) -
                      Math.min(t.y, e.y),
                  });
        return this.setScale(
          Math.min(this.width / t.width, this.height / t.height),
          -(t.x + t.width / 2),
          -(t.y + t.height / 2),
          !0,
          l.animate,
        );
      }
      return (
        l.lat && l.lng
          ? ((s = this.latLngToPoint(l.lat, l.lng)),
            (l.x = this.transX - s.x / this.scale),
            (l.y = this.transY - s.y / this.scale))
          : l.x &&
            l.y &&
            ((l.x *= -this.defaultWidth), (l.y *= -this.defaultHeight)),
        this.setScale(l.scale * this.baseScale, l.x, l.y, !0, l.animate)
      );
    },
    getSelected: function (l) {
      var t,
        e = [];
      for (t in this[l]) this[l][t].element.isSelected && e.push(t);
      return e;
    },
    getSelectedRegions: function () {
      return this.getSelected("regions");
    },
    getSelectedMarkers: function () {
      return this.getSelected("markers");
    },
    setSelected: function (l, t) {
      var e;
      if (("object" != typeof t && (t = [t]), jvm.$.isArray(t)))
        for (e = 0; e < t.length; e++) this[l][t[e]].element.setSelected(!0);
      else for (e in t) this[l][e].element.setSelected(!!t[e]);
    },
    setSelectedRegions: function (l) {
      this.setSelected("regions", l);
    },
    setSelectedMarkers: function (l) {
      this.setSelected("markers", l);
    },
    clearSelected: function (l) {
      var t,
        e = {},
        a = this.getSelected(l);
      for (t = 0; t < a.length; t++) e[a[t]] = !1;
      this.setSelected(l, e);
    },
    clearSelectedRegions: function () {
      this.clearSelected("regions");
    },
    clearSelectedMarkers: function () {
      this.clearSelected("markers");
    },
    getMapObject: function () {
      return this;
    },
    getRegionName: function (l) {
      return this.mapData.paths[l].name;
    },
    createRegions: function () {
      var l,
        t,
        e = this;
      for (l in ((this.regionLabelsGroup =
        this.regionLabelsGroup || this.canvas.addGroup()),
      this.mapData.paths))
        (t = new jvm.Region({
          map: this,
          path: this.mapData.paths[l].path,
          code: l,
          style: jvm.$.extend(!0, {}, this.params.regionStyle),
          labelStyle: jvm.$.extend(!0, {}, this.params.regionLabelStyle),
          canvas: this.canvas,
          labelsGroup: this.regionLabelsGroup,
          label:
            "vml" != this.canvas.mode
              ? this.params.labels && this.params.labels.regions
              : null,
        })),
          jvm.$(t.shape).bind("selected", function (l, t) {
            e.container.trigger("regionSelected.jvectormap", [
              jvm.$(this.node).attr("data-code"),
              t,
              e.getSelectedRegions(),
            ]);
          }),
          (this.regions[l] = { element: t, config: this.mapData.paths[l] });
    },
    createMarkers: function (l) {
      var t,
        e,
        a,
        i,
        s,
        n = this;
      if (
        ((this.markersGroup = this.markersGroup || this.canvas.addGroup()),
        (this.markerLabelsGroup =
          this.markerLabelsGroup || this.canvas.addGroup()),
        jvm.$.isArray(l))
      )
        for (s = l.slice(), l = {}, t = 0; t < s.length; t++) l[t] = s[t];
      for (t in l)
        (i = l[t] instanceof Array ? { latLng: l[t] } : l[t]),
          !1 !== (a = this.getMarkerPosition(i)) &&
            ((e = new jvm.Marker({
              map: this,
              style: jvm.$.extend(!0, {}, this.params.markerStyle, {
                initial: i.style || {},
              }),
              labelStyle: jvm.$.extend(!0, {}, this.params.markerLabelStyle),
              index: t,
              cx: a.x,
              cy: a.y,
              group: this.markersGroup,
              canvas: this.canvas,
              labelsGroup: this.markerLabelsGroup,
              label:
                "vml" != this.canvas.mode
                  ? this.params.labels && this.params.labels.markers
                  : null,
            })),
            jvm.$(e.shape).bind("selected", function (l, t) {
              n.container.trigger("markerSelected.jvectormap", [
                jvm.$(this.node).attr("data-index"),
                t,
                n.getSelectedMarkers(),
              ]);
            }),
            this.markers[t] && this.removeMarkers([t]),
            (this.markers[t] = { element: e, config: i }));
    },
    repositionMarkers: function () {
      var l, t;
      for (l in this.markers)
        !1 !== (t = this.getMarkerPosition(this.markers[l].config)) &&
          this.markers[l].element.setStyle({ cx: t.x, cy: t.y });
    },
    repositionLabels: function () {
      var l;
      for (l in this.regions) this.regions[l].element.updateLabelPosition();
      for (l in this.markers) this.markers[l].element.updateLabelPosition();
    },
    getMarkerPosition: function (l) {
      return jvm.Map.maps[this.params.map].projection
        ? this.latLngToPoint.apply(this, l.latLng || [0, 0])
        : {
            x: l.coords[0] * this.scale + this.transX * this.scale,
            y: l.coords[1] * this.scale + this.transY * this.scale,
          };
    },
    addMarker: function (l, t, e) {
      var a,
        i,
        s = {},
        n = [];
      e = e || [];
      for (s[l] = t, i = 0; i < e.length; i++)
        (a = {}), void 0 !== e[i] && (a[l] = e[i]), n.push(a);
      this.addMarkers(s, n);
    },
    addMarkers: function (l, t) {
      var e;
      for (t = t || [], this.createMarkers(l), e = 0; e < t.length; e++)
        this.series.markers[e].setValues(t[e] || {});
    },
    removeMarkers: function (l) {
      var t;
      for (t = 0; t < l.length; t++)
        this.markers[l[t]].element.remove(), delete this.markers[l[t]];
    },
    removeAllMarkers: function () {
      var l,
        t = [];
      for (l in this.markers) t.push(l);
      this.removeMarkers(t);
    },
    latLngToPoint: function (l, t) {
      var e,
        a,
        i,
        s = jvm.Map.maps[this.params.map].projection,
        n = s.centralMeridian;
      return (
        t < -180 + n && (t += 360),
        (e = jvm.Proj[s.type](l, t, n)),
        !!(a = this.getInsetForPoint(e.x, e.y)) &&
          ((i = a.bbox),
          (e.x = ((e.x - i[0].x) / (i[1].x - i[0].x)) * a.width * this.scale),
          (e.y = ((e.y - i[0].y) / (i[1].y - i[0].y)) * a.height * this.scale),
          {
            x: e.x + this.transX * this.scale + a.left * this.scale,
            y: e.y + this.transY * this.scale + a.top * this.scale,
          })
      );
    },
    pointToLatLng: function (l, t) {
      var e,
        a,
        i,
        s,
        n,
        r = jvm.Map.maps[this.params.map].projection,
        h = r.centralMeridian,
        o = jvm.Map.maps[this.params.map].insets;
      for (e = 0; e < o.length; e++)
        if (
          ((i = (a = o[e]).bbox),
          (s = l - (this.transX * this.scale + a.left * this.scale)),
          (n = t - (this.transY * this.scale + a.top * this.scale)),
          (s = (s / (a.width * this.scale)) * (i[1].x - i[0].x) + i[0].x),
          (n = (n / (a.height * this.scale)) * (i[1].y - i[0].y) + i[0].y),
          s > i[0].x && s < i[1].x && n > i[0].y && n < i[1].y)
        )
          return jvm.Proj[r.type + "_inv"](s, -n, h);
      return !1;
    },
    getInsetForPoint: function (l, t) {
      var e,
        a,
        i = jvm.Map.maps[this.params.map].insets;
      for (e = 0; e < i.length; e++)
        if (l > (a = i[e].bbox)[0].x && l < a[1].x && t > a[0].y && t < a[1].y)
          return i[e];
    },
    createSeries: function () {
      var l, t;
      for (t in ((this.series = { markers: [], regions: [] }),
      this.params.series))
        for (l = 0; l < this.params.series[t].length; l++)
          this.series[t][l] = new jvm.DataSeries(
            this.params.series[t][l],
            this[t],
            this,
          );
    },
    remove: function () {
      this.tip.remove(),
        this.container.remove(),
        jvm.$(window).unbind("resize", this.onResize),
        jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
    },
  }),
  (jvm.Map.maps = {}),
  (jvm.Map.defaultParams = {
    map: "world_mill_en",
    backgroundColor: "#505050",
    zoomButtons: !0,
    zoomOnScroll: !0,
    zoomOnScrollSpeed: 3,
    panOnDrag: !0,
    zoomMax: 8,
    zoomMin: 1,
    zoomStep: 1.6,
    zoomAnimate: !0,
    regionsSelectable: !1,
    markersSelectable: !1,
    bindTouchEvents: !0,
    regionStyle: {
      initial: {
        fill: "white",
        "fill-opacity": 1,
        stroke: "none",
        "stroke-width": 0,
        "stroke-opacity": 1,
      },
      hover: { "fill-opacity": 0.8, cursor: "pointer" },
      selected: { fill: "yellow" },
      selectedHover: {},
    },
    regionLabelStyle: {
      initial: {
        "font-family": "Verdana",
        "font-size": "12",
        "font-weight": "bold",
        cursor: "default",
        fill: "black",
      },
      hover: { cursor: "pointer" },
    },
    markerStyle: {
      initial: {
        fill: "grey",
        stroke: "#505050",
        "fill-opacity": 1,
        "stroke-width": 1,
        "stroke-opacity": 1,
        r: 5,
      },
      hover: { stroke: "black", "stroke-width": 2, cursor: "pointer" },
      selected: { fill: "blue" },
      selectedHover: {},
    },
    markerLabelStyle: {
      initial: {
        "font-family": "Verdana",
        "font-size": "12",
        "font-weight": "bold",
        cursor: "default",
        fill: "black",
      },
      hover: { cursor: "pointer" },
    },
  }),
  (jvm.Map.apiEvents = {
    onRegionTipShow: "regionTipShow",
    onRegionOver: "regionOver",
    onRegionOut: "regionOut",
    onRegionClick: "regionClick",
    onRegionSelected: "regionSelected",
    onMarkerTipShow: "markerTipShow",
    onMarkerOver: "markerOver",
    onMarkerOut: "markerOut",
    onMarkerClick: "markerClick",
    onMarkerSelected: "markerSelected",
    onViewportChange: "viewportChange",
  }),
  (jvm.MultiMap = function (l) {
    var t = this;
    (this.maps = {}),
      (this.params = jvm.$.extend(!0, {}, jvm.MultiMap.defaultParams, l)),
      (this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE),
      (this.params.main = this.params.main || {}),
      (this.params.main.multiMapLevel = 0),
      (this.history = [this.addMap(this.params.main.map, this.params.main)]),
      (this.defaultProjection = this.history[0].mapData.projection.type),
      (this.mapsLoaded = {}),
      this.params.container.css({ position: "relative" }),
      (this.backButton = jvm
        .$("<div/>")
        .addClass("jvectormap-goback")
        .text("Back")
        .appendTo(this.params.container)),
      this.backButton.hide(),
      this.backButton.click(function () {
        t.goBack();
      }),
      (this.spinner = jvm
        .$("<div/>")
        .addClass("jvectormap-spinner")
        .appendTo(this.params.container)),
      this.spinner.hide();
  }),
  (jvm.MultiMap.prototype = {
    addMap: function (l, t) {
      var e = jvm.$("<div/>").css({ width: "100%", height: "100%" });
      return (
        this.params.container.append(e),
        (this.maps[l] = new jvm.Map(jvm.$.extend(t, { container: e }))),
        this.params.maxLevel > t.multiMapLevel &&
          this.maps[l].container.on(
            "regionClick.jvectormap",
            { scope: this },
            function (l, t) {
              var e = l.data.scope,
                a = e.params.mapNameByCode(t, e);
              (e.drillDownPromise &&
                "pending" === e.drillDownPromise.state()) ||
                e.drillDown(a, t);
            },
          ),
        this.maps[l]
      );
    },
    downloadMap: function (l) {
      var t = this,
        e = jvm.$.Deferred();
      return (
        this.mapsLoaded[l]
          ? e.resolve()
          : jvm.$.get(this.params.mapUrlByCode(l, this)).then(
              function () {
                (t.mapsLoaded[l] = !0), e.resolve();
              },
              function () {
                e.reject();
              },
            ),
        e
      );
    },
    drillDown: function (l, t) {
      var e = this.history[this.history.length - 1],
        a = this,
        i = e.setFocus({ region: t, animate: !0 }),
        s = this.downloadMap(t);
      i.then(function () {
        "pending" === s.state() && a.spinner.show();
      }),
        s.always(function () {
          a.spinner.hide();
        }),
        (this.drillDownPromise = jvm.$.when(s, i)),
        this.drillDownPromise.then(function () {
          e.params.container.hide(),
            a.maps[l]
              ? a.maps[l].params.container.show()
              : a.addMap(l, {
                  map: l,
                  multiMapLevel: e.params.multiMapLevel + 1,
                }),
            a.history.push(a.maps[l]),
            a.backButton.show();
        });
    },
    goBack: function () {
      var l = this.history.pop(),
        t = this.history[this.history.length - 1],
        e = this;
      l.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: !0 }).then(function () {
        l.params.container.hide(),
          t.params.container.show(),
          t.updateSize(),
          1 === e.history.length && e.backButton.hide(),
          t.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: !0 });
      });
    },
  }),
  (jvm.MultiMap.defaultParams = {
    mapNameByCode: function (l, t) {
      return l.toLowerCase() + "_" + t.defaultProjection + "_en";
    },
    mapUrlByCode: function (l, t) {
      return (
        "jquery-jvectormap-data-" +
        l.toLowerCase() +
        "-" +
        t.defaultProjection +
        "-en.js"
      );
    },
  }),
  jQuery.fn.vectorMap("addMap", "world_mill_en", {
    insets: [
      {
        width: 900,
        top: 0,
        height: 440.70631074413296,
        bbox: [
          { y: -12671671.123330014, x: -20004297.151525836 },
          { y: 6930392.02513512, x: 20026572.39474939 },
        ],
        left: 0,
      },
    ],
    paths: {
      BD: {
        path: "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",
        name: "Bangladesh",
      },
      BE: {
        path: "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z",
        name: "Belgium",
      },
      BF: {
        path: "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",
        name: "Burkina Faso",
      },
      BG: {
        path: "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",
        name: "Bulgaria",
      },
      BA: {
        path: "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",
        name: "Bosnia and Herz.",
      },
      BN: {
        path: "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z",
        name: "Brunei",
      },
      BO: {
        path: "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",
        name: "Bolivia",
      },
      JP: {
        path: "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",
        name: "Japan",
      },
      BI: {
        path: "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z",
        name: "Burundi",
      },
      BJ: {
        path: "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",
        name: "Benin",
      },
      BT: {
        path: "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z",
        name: "Bhutan",
      },
      JM: {
        path: "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z",
        name: "Jamaica",
      },
      BW: {
        path: "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",
        name: "Botswana",
      },
      BR: {
        path: "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",
        name: "Brazil",
      },
      BS: {
        path: "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z",
        name: "Bahamas",
      },
      BY: {
        path: "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",
        name: "Belarus",
      },
      BZ: {
        path: "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z",
        name: "Belize",
      },
      RU: {
        path: "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",
        name: "Russia",
      },
      RW: {
        path: "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z",
        name: "Rwanda",
      },
      RS: {
        path: "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",
        name: "Serbia",
      },
      LT: {
        path: "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",
        name: "Lithuania",
      },
      LU: {
        path: "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z",
        name: "Luxembourg",
      },
      LR: {
        path: "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z",
        name: "Liberia",
      },
      RO: {
        path: "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",
        name: "Romania",
      },
      GW: {
        path: "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z",
        name: "Guinea-Bissau",
      },
      GT: {
        path: "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",
        name: "Guatemala",
      },
      GR: {
        path: "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",
        name: "Greece",
      },
      GQ: {
        path: "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z",
        name: "Eq. Guinea",
      },
      GY: {
        path: "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",
        name: "Guyana",
      },
      GE: {
        path: "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",
        name: "Georgia",
      },
      GB: {
        path: "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",
        name: "United Kingdom",
      },
      GA: {
        path: "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",
        name: "Gabon",
      },
      GN: {
        path: "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",
        name: "Guinea",
      },
      GM: {
        path: "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z",
        name: "Gambia",
      },
      GL: {
        path: "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",
        name: "Greenland",
      },
      KW: {
        path: "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z",
        name: "Kuwait",
      },
      GH: {
        path: "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",
        name: "Ghana",
      },
      OM: {
        path: "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",
        name: "Oman",
      },
      _1: {
        path: "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z",
        name: "Somaliland",
      },
      _0: {
        path: "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z",
        name: "Kosovo",
      },
      JO: {
        path: "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z",
        name: "Jordan",
      },
      HR: {
        path: "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",
        name: "Croatia",
      },
      HT: {
        path: "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",
        name: "Haiti",
      },
      HU: {
        path: "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",
        name: "Hungary",
      },
      HN: {
        path: "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",
        name: "Honduras",
      },
      PR: {
        path: "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z",
        name: "Puerto Rico",
      },
      PS: {
        path: "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z",
        name: "Palestine",
      },
      PT: {
        path: "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",
        name: "Portugal",
      },
      PY: {
        path: "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",
        name: "Paraguay",
      },
      PA: {
        path: "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",
        name: "Panama",
      },
      PG: {
        path: "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",
        name: "Papua New Guinea",
      },
      PE: {
        path: "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",
        name: "Peru",
      },
      PK: {
        path: "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",
        name: "Pakistan",
      },
      PH: {
        path: "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",
        name: "Philippines",
      },
      PL: {
        path: "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",
        name: "Poland",
      },
      "-99": {
        path: "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z",
        name: "N. Cyprus",
      },
      ZM: {
        path: "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",
        name: "Zambia",
      },
      EH: {
        path: "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",
        name: "W. Sahara",
      },
      EE: {
        path: "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z",
        name: "Estonia",
      },
      EG: {
        path: "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",
        name: "Egypt",
      },
      ZA: {
        path: "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",
        name: "South Africa",
      },
      EC: {
        path: "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",
        name: "Ecuador",
      },
      AL: {
        path: "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z",
        name: "Albania",
      },
      AO: {
        path: "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",
        name: "Angola",
      },
      KZ: {
        path: "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",
        name: "Kazakhstan",
      },
      ET: {
        path: "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",
        name: "Ethiopia",
      },
      ZW: {
        path: "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",
        name: "Zimbabwe",
      },
      ES: {
        path: "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",
        name: "Spain",
      },
      ER: {
        path: "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",
        name: "Eritrea",
      },
      ME: {
        path: "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z",
        name: "Montenegro",
      },
      MD: {
        path: "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z",
        name: "Moldova",
      },
      MG: {
        path: "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",
        name: "Madagascar",
      },
      MA: {
        path: "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",
        name: "Morocco",
      },
      UZ: {
        path: "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",
        name: "Uzbekistan",
      },
      MM: {
        path: "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",
        name: "Myanmar",
      },
      ML: {
        path: "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",
        name: "Mali",
      },
      MN: {
        path: "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",
        name: "Mongolia",
      },
      MK: {
        path: "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z",
        name: "Macedonia",
      },
      MW: {
        path: "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",
        name: "Malawi",
      },
      MR: {
        path: "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",
        name: "Mauritania",
      },
      UG: {
        path: "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",
        name: "Uganda",
      },
      MY: {
        path: "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",
        name: "Malaysia",
      },
      MX: {
        path: "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",
        name: "Mexico",
      },
      VU: {
        path: "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z",
        name: "Vanuatu",
      },
      FR: {
        path: "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",
        name: "France",
      },
      FI: {
        path: "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",
        name: "Finland",
      },
      FJ: {
        path: "M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z",
        name: "Fiji",
      },
      FK: {
        path: "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z",
        name: "Falkland Is.",
      },
      NI: {
        path: "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",
        name: "Nicaragua",
      },
      NL: {
        path: "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z",
        name: "Netherlands",
      },
      NO: {
        path: "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",
        name: "Norway",
      },
      NA: {
        path: "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",
        name: "Namibia",
      },
      NC: {
        path: "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z",
        name: "New Caledonia",
      },
      NE: {
        path: "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",
        name: "Niger",
      },
      NG: {
        path: "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",
        name: "Nigeria",
      },
      NZ: {
        path: "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",
        name: "New Zealand",
      },
      NP: {
        path: "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z",
        name: "Nepal",
      },
      CI: {
        path: "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",
        name: "Côte d'Ivoire",
      },
      CH: {
        path: "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",
        name: "Switzerland",
      },
      CO: {
        path: "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",
        name: "Colombia",
      },
      CN: {
        path: "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",
        name: "China",
      },
      CM: {
        path: "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",
        name: "Cameroon",
      },
      CL: {
        path: "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",
        name: "Chile",
      },
      CA: {
        path: "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",
        name: "Canada",
      },
      CG: {
        path: "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",
        name: "Congo",
      },
      CF: {
        path: "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",
        name: "Central African Rep.",
      },
      CD: {
        path: "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",
        name: "Dem. Rep. Congo",
      },
      CZ: {
        path: "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",
        name: "Czech Rep.",
      },
      CY: {
        path: "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z",
        name: "Cyprus",
      },
      CR: {
        path: "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",
        name: "Costa Rica",
      },
      CU: {
        path: "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",
        name: "Cuba",
      },
      SZ: {
        path: "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z",
        name: "Swaziland",
      },
      SY: {
        path: "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",
        name: "Syria",
      },
      KG: {
        path: "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",
        name: "Kyrgyzstan",
      },
      KE: {
        path: "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",
        name: "Kenya",
      },
      SS: {
        path: "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",
        name: "S. Sudan",
      },
      SR: {
        path: "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",
        name: "Suriname",
      },
      KH: {
        path: "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",
        name: "Cambodia",
      },
      SV: {
        path: "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z",
        name: "El Salvador",
      },
      SK: {
        path: "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",
        name: "Slovakia",
      },
      KR: {
        path: "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",
        name: "Korea",
      },
      SI: {
        path: "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z",
        name: "Slovenia",
      },
      KP: {
        path: "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",
        name: "Dem. Rep. Korea",
      },
      SO: {
        path: "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",
        name: "Somalia",
      },
      SN: {
        path: "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",
        name: "Senegal",
      },
      SL: {
        path: "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z",
        name: "Sierra Leone",
      },
      SB: {
        path: "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",
        name: "Solomon Is.",
      },
      SA: {
        path: "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",
        name: "Saudi Arabia",
      },
      SE: {
        path: "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",
        name: "Sweden",
      },
      SD: {
        path: "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",
        name: "Sudan",
      },
      DO: {
        path: "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",
        name: "Dominican Rep.",
      },
      DJ: {
        path: "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z",
        name: "Djibouti",
      },
      DK: {
        path: "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",
        name: "Denmark",
      },
      DE: {
        path: "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",
        name: "Germany",
      },
      YE: {
        path: "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",
        name: "Yemen",
      },
      AT: {
        path: "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",
        name: "Austria",
      },
      DZ: {
        path: "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",
        name: "Algeria",
      },
      US: {
        path: "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",
        name: "United States",
      },
      LV: {
        path: "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",
        name: "Latvia",
      },
      UY: {
        path: "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",
        name: "Uruguay",
      },
      LB: {
        path: "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z",
        name: "Lebanon",
      },
      LA: {
        path: "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",
        name: "Lao PDR",
      },
      TW: {
        path: "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z",
        name: "Taiwan",
      },
      TT: {
        path: "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z",
        name: "Trinidad and Tobago",
      },
      TR: {
        path: "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",
        name: "Turkey",
      },
      LK: {
        path: "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z",
        name: "Sri Lanka",
      },
      TN: {
        path: "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",
        name: "Tunisia",
      },
      TL: {
        path: "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z",
        name: "Timor-Leste",
      },
      TM: {
        path: "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",
        name: "Turkmenistan",
      },
      TJ: {
        path: "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",
        name: "Tajikistan",
      },
      LS: {
        path: "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z",
        name: "Lesotho",
      },
      TH: {
        path: "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",
        name: "Thailand",
      },
      TF: {
        path: "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z",
        name: "Fr. S. Antarctic Lands",
      },
      TG: {
        path: "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z",
        name: "Togo",
      },
      TD: {
        path: "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",
        name: "Chad",
      },
      LY: {
        path: "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",
        name: "Libya",
      },
      AE: {
        path: "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z",
        name: "United Arab Emirates",
      },
      VE: {
        path: "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",
        name: "Venezuela",
      },
      AF: {
        path: "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",
        name: "Afghanistan",
      },
      IQ: {
        path: "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",
        name: "Iraq",
      },
      IS: {
        path: "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",
        name: "Iceland",
      },
      IR: {
        path: "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",
        name: "Iran",
      },
      AM: {
        path: "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",
        name: "Armenia",
      },
      IT: {
        path: "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",
        name: "Italy",
      },
      VN: {
        path: "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",
        name: "Vietnam",
      },
      AR: {
        path: "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",
        name: "Argentina",
      },
      AU: {
        path: "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",
        name: "Australia",
      },
      IL: {
        path: "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",
        name: "Israel",
      },
      IN: {
        path: "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",
        name: "India",
      },
      TZ: {
        path: "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",
        name: "Tanzania",
      },
      AZ: {
        path: "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",
        name: "Azerbaijan",
      },
      IE: {
        path: "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z",
        name: "Ireland",
      },
      ID: {
        path: "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",
        name: "Indonesia",
      },
      UA: {
        path: "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",
        name: "Ukraine",
      },
      QA: {
        path: "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z",
        name: "Qatar",
      },
      MZ: {
        path: "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",
        name: "Mozambique",
      },
    },
    height: 440.70631074413296,
    projection: { type: "mill", centralMeridian: 11.5 },
    width: 900,
  }),
  jQuery.fn.vectorMap("addMap", "in_mill", {
    insets: [
      {
        width: 900,
        top: 0,
        height: 932.9661457393942,
        bbox: [
          { y: -4125883.782575976, x: 7589536.343670783 },
          { y: -752405.3962423205, x: 10843813.641475728 },
        ],
        left: 0,
      },
    ],
    paths: {
      "IN-BR": {
        path: "M484.32,277.67l0.73,-0.96l-0.3,-0.93l-0.88,-0.99l2.18,-0.33l2.83,0.22l2.64,-2.44l0.65,0.88l1.12,0.53l0.73,1.16l1.44,0.13l0.88,1.39l0.78,0.52l8.92,1.6l1.49,1.54l0.75,2.31l-0.09,2.43l-1.0,2.2l0.17,0.95l0.56,0.5l3.94,1.04l1.49,-0.43l1.1,0.93l2.15,0.84l0.79,1.78l1.96,0.85l0.04,0.75l0.36,0.35l0.96,0.04l2.23,-0.69l0.89,0.36l0.08,1.86l1.02,1.19l3.03,0.83l1.86,-0.39l1.41,-1.3l1.63,-0.0l2.51,-1.3l2.45,-0.81l2.64,1.62l0.21,0.97l-0.22,2.39l0.42,1.46l2.16,1.84l1.01,-0.0l0.22,0.89l0.54,0.28l1.3,-0.5l2.57,-2.01l1.7,-0.38l3.07,1.67l1.2,0.08l1.34,0.59l2.79,-0.96l0.36,0.09l0.11,0.57l0.46,0.36l1.14,-0.05l4.28,1.79l1.88,1.41l4.91,2.34l0.65,-0.32l0.42,-0.67l1.5,0.42l1.07,-0.27l0.84,-0.55l0.93,-1.39l2.89,-1.18l1.56,-1.41l0.73,3.4l1.29,2.14l1.24,0.5l2.44,-0.41l0.71,1.14l2.25,0.92l0.7,-0.4l0.94,-1.66l1.64,-0.68l1.77,0.1l2.15,1.18l1.43,0.3l2.71,-1.46l0.9,0.58l0.74,0.03l0.64,-0.42l0.39,-1.06l1.69,0.41l1.28,-0.84l0.78,0.58l1.04,1.56l1.36,0.93l1.28,-0.0l1.4,-1.3l0.98,-1.67l0.32,-2.54l1.11,0.19l1.81,-0.54l-0.25,1.26l2.57,2.21l-0.61,0.46l-0.14,0.71l1.31,0.93l0.18,0.65l-0.99,0.12l-1.4,1.13l-1.21,0.45l-3.14,3.08l-1.92,1.35l-1.46,0.45l-1.05,1.31l-3.05,2.6l-0.73,2.89l-0.66,0.33l-0.26,0.54l0.49,1.44l1.99,1.18l1.38,2.54l1.16,1.11l1.88,0.79l1.0,0.91l0.39,1.89l-0.42,2.19l0.68,1.39l-1.31,-0.23l-0.83,-0.82l-1.07,-0.2l-2.31,1.07l-0.91,0.98l-2.54,1.15l-0.86,1.17l-0.03,0.52l1.06,1.26l0.71,0.03l1.1,2.34l-1.16,1.61l-1.13,-0.8l-2.11,0.07l-2.4,-0.65l-0.85,-1.16l-1.55,-0.73l-2.09,1.48l-1.42,3.04l-1.75,-0.38l-1.94,0.54l-0.7,1.28l-0.53,2.54l-1.11,-0.28l-1.23,0.43l-1.15,1.08l-0.95,1.56l-0.02,4.14l-1.58,2.6l0.22,1.29l-0.25,2.5l-0.67,2.32l-3.65,-0.85l-1.11,1.73l-0.08,0.78l-1.8,-0.56l-1.86,-1.14l-0.7,0.13l-0.57,0.88l-0.58,0.3l-1.44,0.17l-1.24,-0.58l-1.1,0.08l-2.84,2.71l-0.35,2.31l-0.66,0.61l-0.34,1.45l-4.74,-2.95l0.93,-1.5l-0.46,-2.24l-2.49,-0.71l-1.39,0.5l-1.2,-0.75l-0.53,-2.93l-0.94,-1.11l-1.16,-0.27l0.25,-0.54l-0.25,-0.67l-1.15,0.06l-1.82,1.29l-1.16,0.12l-1.33,-1.63l-1.34,-0.72l-2.71,0.04l-1.03,0.64l-0.64,1.13l-0.35,1.75l-1.32,0.86l0.46,1.43l-0.08,1.26l-2.09,-0.13l-1.88,1.89l-1.05,-0.3l-2.8,-0.01l-3.56,0.74l-0.45,0.74l-3.09,1.2l-0.45,0.51l-0.04,0.72l-1.53,1.38l0.11,-1.07l-0.45,-0.39l-3.33,1.32l-1.97,-0.04l-0.37,-0.38l-0.39,-2.05l-0.44,-0.37l-0.85,0.15l-0.38,-1.56l-1.06,-0.48l-3.69,2.24l-0.86,1.72l-2.29,-0.51l-1.24,1.5l-0.27,0.79l-0.51,0.49l-0.76,0.1l-1.39,-1.35l-2.08,-1.34l-1.51,-1.71l0.38,-0.69l-0.02,-1.06l-0.71,-1.19l-0.78,-0.19l-0.66,0.49l-0.73,-0.27l-1.47,0.23l-0.36,0.39l-0.0,1.03l-0.3,-0.98l-0.78,-0.09l-0.53,1.26l-0.76,-0.87l-1.6,-3.93l-0.85,-0.67l-0.69,0.16l-0.72,1.49l-2.03,1.42l-2.05,0.28l-1.37,-0.23l-0.86,0.31l-0.55,0.68l-1.94,0.19l-4.92,-0.81l0.03,-2.88l-0.43,-1.19l0.61,-1.14l-0.28,-1.64l-0.55,-0.62l-2.0,-0.71l-2.6,-2.78l0.35,-1.72l-0.05,-2.24l-1.27,-2.58l0.34,-3.02l0.62,-1.14l1.7,-1.27l11.06,-6.27l0.86,-0.66l0.44,-0.81l2.19,-0.92l3.62,-3.02l1.7,-2.16l2.53,-1.98l0.88,-0.25l0.74,0.43l-0.04,1.29l0.37,0.92l0.82,0.61l1.2,0.16l1.16,-0.32l0.69,-0.62l0.03,-1.0l-0.41,-1.1l0.17,-0.52l1.25,-0.49l1.93,1.49l1.54,0.6l1.32,0.01l2.29,-1.37l0.73,-1.81l-0.34,-0.78l-2.28,-2.05l-2.42,-0.33l-1.18,-0.71l-0.5,-0.92l-0.82,-0.67l-3.49,0.28l-0.93,-0.9l-0.59,-1.69l-0.97,-0.39l-0.91,-1.45l-2.52,-1.19l-1.28,-2.57l-1.04,-0.81l0.41,-0.8l2.49,-0.34l0.91,-0.6l1.31,0.19l0.82,-0.39l0.25,-0.57l-0.78,-1.52l0.71,-1.33l0.02,-0.66l-0.45,-0.55l-2.83,-0.73l-2.18,-1.58l-1.33,0.6l-1.31,-0.25l0.0,-2.11l0.43,0.93l0.6,0.15l0.88,-1.02l1.95,-0.62l1.34,-2.77l8.58,0.29l0.57,-0.33l0.16,-0.55l-0.47,-0.95l-2.41,-2.3l-0.79,-0.41l-1.03,-0.04l0.16,-2.85l-0.51,-1.31l-1.39,-0.46l-1.37,0.64l-2.26,-1.46l-1.22,-2.32l-0.19,-2.14l-0.79,-0.77l-0.57,-1.24l-1.11,-1.03l0.06,-2.11l-0.66,-1.12l-1.11,-0.96l0.19,-1.5l-0.52,-0.38l-0.62,0.03Z",
        name: "Bihar",
      },
      "IN-PY": {
        path: "M432.94,621.28l0.12,-0.11l0.06,0.17l-0.03,-0.0l-0.16,-0.05ZM434.43,621.71l0.34,-0.0l0.03,0.12l-0.21,-0.03l-0.16,-0.08ZM355.48,770.41l0.24,-0.33l0.83,0.78l1.19,-0.08l-0.49,1.07l1.07,0.9l0.61,-0.12l1.09,-0.94l-0.97,2.81l-1.98,-0.18l-0.66,-0.53l0.23,-1.51l-1.16,-1.87ZM356.86,803.07l0.79,-0.26l-0.03,-0.93l0.92,0.32l0.8,-0.45l0.68,0.07l0.07,4.51l-0.78,-0.6l0.25,-0.69l-0.28,-0.5l-2.69,-0.99l0.29,-0.48ZM218.44,768.85l0.02,-2.05l1.16,0.12l1.63,-1.29l0.73,0.2l-0.37,0.3l-0.72,-0.09l-0.44,0.41l-0.27,1.66l-1.25,1.09l-0.5,-0.37Z",
        name: "Puducherry",
      },
      "IN-DD": {
        path: "M144.48,504.35l0.06,-0.81l0.49,-1.24l0.48,0.6l0.06,1.15l-1.09,0.3Z",
        name: "Daman and Diu",
      },
      "IN-DN": {
        path: "M146.62,508.98l1.49,0.02l0.64,-1.32l0.96,0.1l1.81,-1.3l0.0,1.2l1.42,0.47l-2.51,1.64l-0.2,0.71l0.26,1.36l0.63,0.79l1.15,0.12l0.71,-0.32l0.3,-1.06l1.1,0.26l-0.01,2.67l-0.38,1.21l-1.24,-0.9l-1.12,0.47l-0.96,-0.54l-0.98,0.61l-1.35,-2.56l-0.26,-1.86l-1.39,-1.3l-0.07,-0.48Z",
        name: "Dadra and Nagar Haveli",
      },
      "IN-DL": {
        path: "M269.18,237.92l-1.09,-1.45l1.02,-1.35l1.39,-0.53l0.24,-1.0l0.78,-0.87l-0.35,-3.41l0.21,-0.9l1.59,-0.79l1.2,-0.05l0.91,-0.88l2.3,0.67l1.4,-0.39l0.27,0.61l-0.2,0.97l0.58,1.16l2.51,2.23l0.25,0.66l0.62,2.22l-0.95,1.04l-0.26,0.81l0.7,1.44l-2.32,0.75l-0.66,0.79l0.48,1.01l-0.98,0.25l-2.63,-1.33l-0.89,-1.75l-2.19,-1.1l-0.66,0.01l-0.48,0.79l-2.76,0.39Z",
        name: "Delhi",
      },
      "IN-NL": {
        path: "M779.92,344.86l0.24,-2.48l-0.5,-1.53l-1.51,-1.38l-1.72,-2.41l5.61,-4.5l1.79,-2.48l3.84,-3.32l0.18,-0.6l-0.86,-1.43l1.99,-1.01l0.92,0.2l0.22,1.55l-1.05,1.7l0.18,0.61l0.39,0.2l3.95,-0.86l1.52,-1.07l1.37,-2.13l-0.58,-1.75l0.0,-0.99l1.01,-1.64l0.11,-3.4l2.88,-3.87l2.12,-1.95l0.79,-3.49l2.04,-2.58l0.89,2.11l0.8,0.16l0.76,-0.33l1.67,-1.57l0.74,-1.09l0.25,-1.63l1.49,-1.74l1.12,-0.19l0.86,-0.7l1.24,0.02l2.52,-1.07l3.03,-1.88l1.13,-0.97l1.92,-2.9l1.52,-1.46l1.31,0.78l1.78,-0.04l4.5,-2.81l1.45,1.13l0.13,1.9l-0.88,1.28l-0.18,0.95l0.32,0.93l0.81,0.73l-0.26,2.06l0.63,1.74l-1.12,0.02l-0.96,1.1l-1.61,0.79l-0.48,2.09l-2.17,2.74l0.78,2.22l-0.69,2.6l0.11,2.79l0.48,1.15l0.9,0.47l-0.42,0.83l0.3,2.22l0.56,0.6l1.14,0.39l0.23,0.64l-2.48,2.95l-2.14,1.25l-0.24,1.45l0.63,3.47l-0.08,1.03l-1.42,0.62l-3.3,4.31l-0.08,0.67l-0.92,0.26l-1.66,2.11l-2.18,0.49l-1.29,0.92l-0.79,-0.14l-2.19,-1.69l1.06,-3.49l0.1,-2.14l-0.72,-0.37l-2.49,2.12l-1.72,0.98l-1.48,1.73l-1.75,0.89l-3.83,0.5l-1.34,-0.81l-1.99,0.08l-1.96,-1.16l-6.95,0.35l-1.1,0.4l-0.54,1.41l0.25,0.38l1.19,0.4l0.13,0.77l-3.93,3.81l-0.97,2.24l-1.16,1.64l-1.08,-1.27l-1.34,-0.42l-1.8,-1.16Z",
        name: "Nagaland",
      },
      "IN-WB": {
        path: "M545.45,405.85l-0.5,-0.98l0.56,-0.42l5.08,-0.89l0.31,-0.72l-0.47,-1.55l0.74,-0.53l1.67,0.87l0.84,0.07l-0.32,2.17l0.35,0.57l1.81,0.66l1.35,0.95l1.69,-0.33l1.95,-1.65l0.58,-2.23l1.76,-1.44l7.16,-2.58l3.6,-0.58l1.37,-0.52l0.56,-0.8l0.21,-1.04l-0.38,-1.28l0.13,-0.59l1.64,-2.23l2.89,1.56l1.05,0.13l2.02,1.46l1.68,0.42l1.24,-0.23l0.42,-0.94l-0.98,-1.3l1.48,0.29l0.47,0.6l0.77,0.13l0.6,-0.83l0.08,-1.2l0.67,-0.26l0.38,-0.66l-0.04,-1.15l-1.61,-2.24l1.91,-0.48l0.42,1.44l0.56,0.34l1.97,-0.7l1.91,0.1l1.22,-1.17l-0.03,-2.65l0.4,-0.06l1.12,0.83l0.64,-0.01l0.71,-0.96l0.29,-1.21l1.52,0.03l0.69,-0.57l0.01,-0.7l-0.45,-0.74l-0.74,-0.19l-0.01,-0.67l2.93,-1.81l1.74,-3.39l0.04,-1.52l0.75,-1.33l-0.41,-1.07l0.04,-1.25l-0.42,-0.42l1.37,0.59l1.07,-0.12l0.94,-0.6l0.46,-0.93l-0.2,-0.47l-0.58,-0.24l0.58,-0.51l0.08,-0.51l-0.69,-2.04l-0.63,-1.08l-1.12,-0.31l-0.14,-0.29l0.68,0.28l0.62,-0.34l0.26,-2.07l0.61,-1.34l-0.14,-1.71l-1.05,-3.44l-2.07,-1.79l-0.21,-1.92l0.46,-1.62l0.97,-1.02l0.74,-1.55l-0.87,-2.23l-0.57,-0.72l-0.74,-0.08l-0.57,-0.84l0.56,-0.79l2.33,-1.03l0.96,-1.0l2.16,-0.97l1.4,1.03l1.9,0.33l0.47,-0.45l-0.11,-1.05l-0.63,-0.84l0.41,-2.35l-0.5,-2.1l-1.25,-1.16l-1.89,-0.81l-1.11,-1.14l-1.2,-2.32l-1.92,-1.09l-0.39,-1.0l0.85,-0.61l0.64,-2.73l2.92,-2.46l1.08,-1.34l1.42,-0.41l1.96,-1.39l2.66,-2.74l1.56,-0.7l1.28,-1.06l1.18,-0.21l0.32,-0.73l-0.46,-1.15l-1.07,-0.55l0.79,-0.66l-0.12,-0.71l-1.34,-1.38l-1.14,-0.68l0.23,-1.51l-0.57,-0.35l-2.11,0.6l-0.78,-0.16l2.21,-5.06l0.16,-2.07l-0.51,-3.36l-1.72,-3.31l-1.28,-1.98l-1.44,-0.95l-1.12,-1.75l0.87,-4.21l1.51,1.11l0.39,1.54l0.74,0.73l4.09,0.21l3.92,1.74l2.29,-0.56l2.85,-2.48l2.71,0.28l1.59,-0.16l0.79,0.57l1.28,0.26l2.69,1.54l0.46,1.37l0.19,3.46l0.29,0.34l1.63,-1.15l0.76,1.97l0.84,0.27l1.26,-0.33l0.64,0.28l1.07,0.92l0.7,1.54l0.63,0.6l3.73,0.29l1.04,-0.28l0.94,-0.75l1.87,-0.3l3.01,1.82l2.09,-0.18l2.3,0.6l0.6,0.46l-0.29,1.59l0.63,0.37l2.22,-0.41l1.68,0.7l2.49,0.24l0.75,-0.98l0.75,2.6l0.28,3.28l-0.9,2.05l-0.46,2.89l-0.88,0.81l0.31,0.9l-1.25,0.59l-0.72,1.5l-0.86,0.56l0.04,1.22l-1.55,0.49l-0.18,-0.8l-0.86,-0.37l-1.27,0.64l-0.02,1.22l-0.94,0.39l-0.42,1.08l0.57,0.68l-0.48,0.58l0.23,0.75l1.09,0.15l-1.54,1.52l-0.38,1.81l-1.38,-1.31l-2.29,0.18l-0.73,-0.75l-1.31,0.6l-0.84,-0.27l-1.33,-1.22l-1.01,-0.45l-0.8,-1.36l-2.47,-1.14l-0.46,-0.78l-0.28,-2.06l-1.01,-1.97l-0.01,-0.39l0.84,-0.04l0.09,-1.08l-1.36,-0.64l-0.24,-0.96l-1.33,-0.55l-1.96,-1.58l-0.57,-0.06l-0.99,0.67l-0.74,1.31l-0.01,0.73l0.75,0.92l1.61,0.68l0.49,1.17l0.62,0.23l0.34,0.57l0.65,0.14l-0.29,0.34l-1.18,0.29l-0.68,-0.22l-1.29,-1.25l-1.04,-0.25l-0.91,0.46l-0.72,1.18l-0.91,-1.51l-1.33,-0.61l-1.97,0.6l0.81,-0.62l0.24,-1.27l-1.29,-0.96l-0.66,-1.82l-1.2,-0.43l-0.74,-1.07l-1.95,-0.46l-2.01,-1.77l-1.53,-0.53l-0.33,-2.09l-0.46,-0.49l-0.9,0.45l-0.68,1.2l-1.21,3.24l0.06,0.87l0.87,0.76l0.58,-0.35l0.14,-0.78l2.98,0.87l0.96,2.56l-1.84,-0.15l-3.0,2.73l-0.3,2.13l-3.15,1.09l-1.89,1.47l-0.78,1.93l0.51,1.07l-0.12,0.57l-0.79,0.64l-1.63,3.72l0.4,2.48l1.35,2.12l1.02,0.06l2.3,-0.88l0.79,0.4l1.81,2.04l2.96,2.25l0.25,2.15l1.56,0.98l1.71,2.04l2.13,0.28l2.25,1.05l0.73,-0.2l0.76,-0.76l1.66,-0.37l1.12,1.2l-0.48,1.96l1.4,2.3l1.33,0.44l0.8,0.66l2.14,0.08l-0.15,0.49l-1.45,1.22l-0.04,1.1l-0.32,0.07l-0.24,0.62l-2.61,-0.88l-0.47,0.18l-0.58,0.98l-1.64,-0.16l-2.86,-0.85l-1.23,-0.01l-1.12,0.71l-2.46,-0.78l-1.5,0.37l-0.35,0.76l-0.17,3.89l-0.99,1.68l-0.5,1.66l-1.59,2.27l-1.78,-0.3l-0.37,-1.1l-1.21,-1.04l-1.33,0.16l-1.59,0.83l-0.21,0.5l0.78,2.11l-0.83,1.08l-0.67,0.34l-0.28,1.04l-0.9,0.53l-0.14,1.33l-0.83,2.23l0.28,0.45l0.9,0.3l0.73,1.05l0.07,1.91l1.05,1.48l0.84,0.18l8.01,4.07l2.42,1.81l5.01,0.7l1.0,-1.38l1.17,0.59l0.6,0.78l0.3,2.04l-0.42,0.68l-1.42,0.76l-0.3,0.7l-0.09,2.48l0.81,1.21l0.65,0.38l-0.58,0.9l0.35,2.32l-1.67,1.6l-1.68,0.07l-0.85,0.66l-0.02,1.23l-0.76,1.49l0.25,1.1l-0.6,3.39l0.72,0.51l-0.1,0.68l0.41,0.56l1.25,0.21l1.1,1.66l1.75,1.33l0.39,0.76l0.88,0.04l0.61,-0.71l-1.51,4.2l-1.03,1.81l-0.01,0.88l0.44,0.92l2.58,1.08l1.56,-0.51l3.8,1.0l-2.85,2.89l-0.46,0.98l-0.39,3.23l1.78,3.39l1.51,0.97l-0.23,1.76l-0.92,1.57l1.48,4.98l-0.13,0.51l-0.56,0.36l0.08,0.71l1.11,0.51l0.92,3.0l-0.39,1.34l0.91,2.85l-0.27,0.58l1.66,2.45l0.42,1.62l-1.03,0.69l-0.22,1.48l0.63,1.91l0.14,2.67l-1.18,0.15l-0.44,0.52l-1.34,-0.77l-0.36,-1.32l-0.38,-0.28l-0.81,0.22l-0.3,0.82l0.64,1.51l2.25,1.42l0.54,0.87l0.86,3.85l1.27,1.9l-0.01,1.43l-0.48,0.14l-0.33,-0.52l-0.69,-0.07l-0.64,0.78l-1.89,-1.22l-1.24,-0.27l-0.7,-3.49l-0.61,-0.28l-0.4,0.34l-0.62,2.07l0.63,2.03l-0.94,0.29l0.5,-1.05l-0.26,-0.97l-0.39,-0.27l-1.42,1.86l0.48,2.23l-0.61,0.28l-1.15,-0.41l0.33,-1.07l-1.1,-2.67l0.57,-3.6l-0.26,-0.99l0.59,-1.77l0.2,-2.12l1.06,-1.02l0.23,-0.74l-0.27,-0.9l-1.35,-1.0l1.61,-2.01l-1.14,-0.17l-1.44,1.2l-0.31,1.39l1.07,0.87l-0.15,0.5l-0.98,2.08l-1.2,-0.05l0.8,-2.06l-0.43,-2.86l1.34,-2.58l-0.1,-0.63l-0.99,-0.36l-1.64,3.33l0.18,2.1l-0.71,1.31l-0.13,2.49l-0.97,2.58l-0.07,2.69l0.46,0.46l1.46,-0.37l0.16,0.55l-0.31,1.14l-0.55,-0.13l-0.4,0.44l0.23,2.14l-0.66,0.46l-0.07,1.76l-0.47,-0.41l-0.69,0.01l-0.11,1.32l-0.51,-0.09l0.07,-1.06l0.6,-0.74l0.46,-2.03l-0.73,-2.54l0.85,-1.8l-0.11,-1.1l-0.98,-1.56l0.53,-1.9l-0.75,-0.79l-0.46,-0.03l-0.08,0.85l-0.75,1.52l0.64,2.32l-0.63,0.42l-0.66,1.98l0.48,3.04l-0.28,0.49l-1.35,0.68l-0.22,-1.85l0.28,-0.81l-0.46,-0.52l-1.07,0.39l-0.38,-0.84l-0.84,0.2l-0.44,-2.18l-0.57,-0.66l-0.63,-0.16l-0.42,0.44l0.08,0.75l1.01,3.85l-0.42,1.45l0.66,1.05l-0.95,0.35l-0.35,-1.27l-0.51,-0.52l-0.6,0.03l-0.58,-1.49l0.87,-2.47l-0.23,-0.94l0.2,-0.63l-1.67,-3.15l-0.24,-2.24l0.24,-0.83l2.02,-2.79l-0.71,-3.23l-3.61,-1.75l-0.09,-0.54l-0.61,-0.27l-0.84,0.43l-0.77,-0.39l-1.03,-1.26l-0.97,-4.14l-0.49,-0.54l-0.92,-0.13l-0.41,0.6l0.54,0.86l0.74,3.83l0.6,1.16l1.56,1.46l3.72,0.8l0.73,0.61l0.32,1.05l-0.22,0.69l-1.51,1.64l-2.08,0.56l0.04,1.33l-2.0,4.07l-2.48,1.79l-1.01,1.44l-4.96,3.02l-2.47,0.14l-4.13,1.11l-1.25,-2.09l0.04,-2.21l-0.26,-0.62l-0.76,-0.57l-4.7,-1.12l-0.64,-1.11l-0.35,-2.0l-0.83,-1.17l-2.44,-0.78l-2.21,2.36l-0.3,-0.07l-0.94,-1.35l0.28,-2.14l-0.68,-1.6l-1.45,-1.03l-1.64,-0.67l-1.74,-0.15l-2.08,-1.48l-1.77,-0.61l-0.33,-0.57l0.32,-0.22l0.61,-0.36l1.19,0.03l0.28,-1.32l2.26,-0.3l0.3,-0.79l-1.52,-1.54l-0.47,-2.23l-2.14,-1.64l-0.14,-0.58l0.98,0.03l0.45,-0.53l-0.69,-1.9l-1.33,-1.0l-2.63,-0.5l-0.79,-2.5l-1.98,-1.62l-0.94,-0.49l-1.31,-0.05l-1.46,-1.14l0.13,-2.51l0.41,-1.21l-0.13,-0.83l0.77,-0.68l1.92,-0.56l0.18,-0.83l-1.95,-0.64l-4.23,-0.15l-1.7,-0.37l-1.31,-0.0l-1.19,0.45l-5.28,-5.12l-1.99,-0.54l-1.51,0.49l-0.33,-1.19l-1.25,-1.57l0.38,-1.25l1.12,-1.59l0.49,-2.12l-0.57,-0.72l-1.16,-0.03ZM621.37,462.65l0.62,0.85l-0.48,1.24l-0.1,-0.46l-0.03,-1.63ZM639.28,467.29l-1.47,0.01l-0.03,-1.73l1.33,0.75l0.17,0.97ZM630.2,458.45l-0.18,-0.62l0.39,-0.95l1.22,-1.6l0.22,0.26l-0.7,3.21l-0.96,-0.3ZM615.62,464.13l-1.95,-0.31l-0.34,-0.61l1.43,-4.38l1.08,-1.59l0.53,2.85l-0.1,1.69l-0.79,0.55l-0.14,0.48l0.28,1.31ZM614.23,456.85l0.15,-1.15l0.64,-1.08l0.26,0.49l-0.18,0.81l-0.87,0.92Z",
        name: "West Bengal",
      },
      "IN-HR": {
        path: "M197.67,196.54l-1.92,0.66l-0.68,-0.19l-0.12,-0.33l0.58,-1.74l1.54,-0.71l0.56,-0.71l0.04,-0.87l-1.03,-1.19l0.03,-0.46l3.74,1.02l2.05,-1.87l3.05,-0.56l0.68,0.68l2.25,0.52l0.65,1.26l1.95,1.36l2.44,-0.58l0.57,-1.17l-0.41,1.39l0.24,1.61l1.61,1.38l0.49,-0.02l0.38,-1.05l0.49,-0.25l0.24,0.89l0.89,1.26l-0.77,0.21l-0.05,1.32l-0.89,0.47l-0.18,0.49l2.26,4.51l0.68,0.02l1.72,-0.75l-0.08,-1.9l0.4,-0.66l1.05,-0.42l0.07,-0.72l1.15,-1.12l1.84,-2.76l4.54,1.48l1.87,-0.35l1.18,0.2l0.81,-0.43l0.25,-1.03l1.84,-0.6l1.45,0.72l0.68,1.43l0.66,0.57l2.19,0.36l1.5,-0.6l1.29,-0.08l1.38,-1.54l2.31,-0.92l2.19,-1.64l-0.08,-0.61l-0.99,-0.75l-0.42,-1.25l0.77,-2.4l0.6,-0.91l-0.16,-0.9l0.93,-0.28l0.17,-0.47l-1.41,-0.86l0.04,-0.31l1.21,0.8l1.17,0.28l1.1,-0.22l0.28,-0.67l0.98,0.56l0.49,-0.29l0.43,-0.88l0.03,-1.16l0.63,1.85l0.67,0.93l1.52,0.62l1.31,-0.04l3.08,-2.2l0.45,-2.11l-1.11,-0.83l-0.74,-1.06l1.96,-0.97l2.75,-2.1l0.15,-0.69l-0.67,-0.42l0.18,-0.95l0.62,-0.28l0.94,0.26l1.29,-0.13l1.11,2.15l0.94,0.05l0.48,-0.5l0.29,-1.07l-0.34,-3.0l0.44,-1.02l-0.52,-1.05l0.23,-1.9l-0.5,-1.28l-0.77,-0.38l-0.31,-1.22l-0.78,-0.13l0.06,-1.77l-0.44,-1.16l0.68,-1.4l0.01,-0.71l-0.29,-0.49l-0.85,-0.37l-0.78,-1.44l0.75,-0.5l0.96,1.15l1.8,0.0l0.72,0.82l0.49,1.43l1.37,0.91l0.34,0.94l3.46,1.85l0.71,0.88l0.16,2.59l-0.5,1.22l0.09,0.78l2.08,1.94l0.25,0.78l0.44,0.23l0.93,-0.4l1.76,0.9l1.62,0.31l0.93,0.77l1.26,-0.33l0.59,0.71l2.07,-0.23l2.03,1.34l-0.49,3.0l-4.77,4.22l-0.4,1.32l-2.42,1.67l-0.2,0.66l-0.96,0.19l-0.26,0.72l-1.47,1.42l-0.66,1.71l-0.89,4.15l-0.47,0.9l-0.85,0.28l0.03,1.48l-0.81,0.56l-0.03,0.91l-0.63,0.62l-0.17,1.53l0.38,1.01l-0.82,0.38l-0.38,0.67l0.4,1.11l-0.1,1.06l0.71,0.51l0.71,-0.06l-1.49,1.77l0.33,0.56l2.21,0.16l-0.49,1.16l0.06,1.19l0.44,0.83l-0.56,1.13l0.32,4.99l-0.22,0.57l1.83,3.91l-0.49,0.52l-0.07,0.59l1.38,1.81l-0.48,0.8l-1.19,0.43l-2.62,-0.68l-1.12,0.96l-1.76,0.23l-1.23,0.79l-0.42,1.42l0.38,3.16l-0.71,0.77l-0.21,0.93l-1.26,0.39l-1.28,1.97l1.21,2.02l0.49,0.29l3.29,-0.53l0.51,-0.79l1.96,0.95l0.92,1.77l2.96,1.49l1.17,-0.15l0.67,-0.44l0.11,-0.6l-0.47,-0.68l0.36,-0.34l2.21,-0.63l1.36,1.03l-0.01,0.77l0.51,0.3l0.72,-0.35l0.65,1.19l0.96,-0.1l-0.04,0.82l0.65,0.59l-0.7,2.07l0.67,0.83l0.27,1.32l1.0,0.34l-0.17,0.55l-0.64,0.25l-0.17,0.47l0.74,0.72l-0.77,0.85l0.01,1.32l-0.24,-0.15l-0.61,0.36l0.19,1.33l-0.23,0.73l0.1,0.41l1.03,0.81l0.7,1.8l-0.54,0.3l-1.08,1.73l-1.24,-0.14l-1.14,1.02l-2.4,0.84l-0.96,0.82l-1.05,0.03l-0.37,0.47l-0.86,-0.73l-0.59,0.56l-0.3,-0.44l-0.52,-0.11l-0.85,0.76l-1.92,-0.54l-0.95,0.12l-0.53,1.25l0.42,0.62l0.78,0.36l-1.77,0.36l-1.03,1.64l-1.71,0.27l-0.23,-0.17l0.72,-0.3l0.15,-0.38l-0.57,-0.95l0.43,-2.47l0.88,-1.72l-0.19,-3.96l-0.52,-2.28l0.64,-2.88l-0.31,-0.93l-2.2,-2.22l-0.95,-0.48l-1.46,0.62l-1.38,1.94l-3.45,2.5l-0.25,0.95l0.49,1.35l-1.85,0.43l-0.89,0.93l-0.83,-2.12l-1.96,-0.59l0.71,-0.57l-0.55,-0.72l0.54,-0.08l0.22,-0.4l-0.98,-1.7l-0.96,-0.35l-1.98,0.38l-0.71,-1.02l-1.24,-0.44l-0.56,0.44l-0.0,0.81l1.23,1.18l-0.83,0.3l-0.23,0.52l0.19,0.51l1.05,0.65l-0.19,0.59l-0.5,0.06l-1.74,-1.05l-0.94,0.38l-1.54,-0.12l-0.66,0.79l-0.18,1.38l0.66,2.16l0.02,1.52l0.69,0.96l0.29,1.5l-0.62,0.44l-1.77,-1.38l-3.88,0.2l-0.48,-1.45l-1.14,-0.82l-0.09,-0.38l1.1,-0.25l0.59,-0.56l0.14,-0.71l-0.49,-0.68l0.63,-1.33l1.08,-1.16l0.14,-0.82l-0.76,-0.63l-0.7,0.22l-0.51,0.59l-0.74,-0.62l1.69,-0.98l0.71,-0.94l0.81,0.77l0.71,0.05l0.34,-1.01l-1.72,-2.96l-2.17,-2.79l-2.33,-2.11l-2.17,-0.91l-1.14,0.06l-0.05,-1.25l-2.28,-1.69l-3.18,-4.01l-3.25,-9.33l1.03,-1.13l-0.06,-1.08l-0.44,-0.58l-1.68,-0.7l-1.73,-2.58l0.02,-0.98l-0.52,-1.06l0.81,-0.33l0.22,-0.76l-0.73,-2.06l-0.71,-0.18l-1.11,0.73l0.1,-1.56l-0.26,-0.42l-0.65,-0.14l-1.3,0.6l-0.77,0.84l-0.86,0.08l-1.19,-0.66l-1.07,0.71l-1.9,0.54l-1.12,-1.64l-0.56,-0.19l-1.59,0.27l-1.1,-2.41l-0.82,-0.74l-2.52,-0.92l-0.97,0.26l-1.36,1.06l-1.48,-0.23l-1.78,0.2l-0.51,0.37l-0.23,0.76l-0.28,-0.03l-2.1,-3.33l0.28,-0.41l1.47,-0.13l0.47,-0.84l0.07,-1.62l-1.13,-1.94l0.92,-5.58l-0.73,-0.83l-1.02,0.44ZM259.41,180.33l-0.42,0.53l-0.13,0.09l0.07,-0.25l0.48,-0.37Z",
        name: "Haryana",
      },
      "IN-HP": {
        path: "M229.45,117.96l1.78,-1.92l0.71,-1.52l-0.42,-0.79l-1.07,0.13l-0.02,-1.36l3.39,-1.15l1.65,-1.71l4.23,-3.05l-0.07,-0.68l-1.73,-2.9l0.38,-1.22l1.73,-1.98l0.07,-1.31l-0.71,-1.74l0.32,-2.08l-1.4,-2.4l-1.75,-1.91l-0.13,-0.95l1.18,-0.43l1.48,0.51l0.94,0.92l0.79,-0.09l4.49,-3.83l4.22,-1.75l0.9,-0.95l0.55,-1.64l2.1,-1.4l1.27,-0.58l3.51,-0.66l0.95,-0.52l2.35,1.47l3.95,-0.18l5.58,5.42l4.66,2.96l1.53,0.84l6.68,2.06l0.97,-0.1l0.54,-0.69l2.55,-0.39l2.39,-0.78l1.97,-1.57l2.83,-1.51l4.08,4.65l1.07,2.36l1.06,1.32l0.31,2.34l2.3,3.1l1.48,0.01l1.99,-1.8l2.17,-0.84l2.03,-0.16l0.85,-0.83l1.36,-0.66l0.22,-1.01l0.92,0.01l0.38,1.9l-0.26,1.58l-2.3,2.04l-0.82,2.5l0.0,1.13l0.76,0.84l0.89,0.12l1.87,-1.75l1.92,3.19l-0.51,1.13l0.86,3.58l-0.14,1.8l1.83,1.02l4.14,5.78l2.59,1.76l0.19,0.99l-0.67,1.45l-0.59,2.7l-0.94,1.85l0.75,1.03l-0.01,1.01l0.96,1.57l1.22,0.41l1.58,1.69l-3.62,3.17l0.06,1.16l1.86,1.29l-0.72,3.51l0.1,0.8l0.49,0.69l1.22,0.56l2.79,-0.26l1.58,1.74l1.69,2.52l0.03,0.64l-1.52,0.33l-1.82,-0.11l-0.93,-0.71l-1.48,-2.18l-4.35,-0.29l-1.49,-0.5l-3.2,0.35l-2.0,-1.63l-0.97,-0.01l-1.04,-0.74l-1.82,-0.16l-1.0,0.16l-1.58,1.0l-1.51,0.46l-4.45,2.55l-3.03,-0.02l-4.59,4.61l0.1,1.68l-1.55,0.35l-0.07,0.87l1.2,1.32l0.08,0.92l-0.09,0.37l-0.57,-0.32l-0.55,0.2l-1.49,3.28l0.05,1.22l0.89,0.92l0.27,1.62l0.79,1.6l-0.76,0.85l-0.03,0.51l0.97,1.5l1.17,0.3l-0.02,0.5l-4.31,2.33l-2.78,0.6l-0.54,1.0l-1.24,-0.9l-1.78,0.25l0.35,-0.76l-0.47,-0.5l-2.06,0.86l-0.62,-0.66l-1.76,-0.37l-1.86,-0.95l-0.96,0.35l-0.19,-0.67l-1.61,-1.27l-0.4,-0.67l0.53,-1.47l0.06,-1.86l-0.36,-1.18l-0.9,-1.08l-3.39,-1.8l-0.27,-0.87l-1.32,-0.83l-0.45,-1.35l-0.95,-1.09l-1.97,-0.09l-1.17,-1.21l-1.44,0.74l-4.03,-3.4l-0.52,-1.32l0.49,-1.87l-0.67,-0.63l0.08,-1.55l0.76,-1.11l-0.03,-0.41l-0.37,-0.37l-0.92,-0.05l-0.01,-0.8l-0.54,-0.83l-0.54,-0.15l-0.51,0.57l-0.55,-0.83l-1.05,0.02l-0.81,-0.71l-0.55,0.31l-2.49,-4.37l-1.8,0.74l-0.04,1.86l-0.67,0.19l-0.54,1.21l-0.85,-0.29l-1.23,0.33l-0.44,-0.26l-0.89,-1.09l-2.37,-7.15l-4.5,-8.19l0.07,-0.38l1.15,-0.14l0.15,-0.7l-2.74,-4.52l-5.6,-2.94l-3.59,-0.7Z",
        name: "Himachal Pradesh",
      },
      "IN-AS": {
        path: "M663.07,316.48l0.01,-0.33l2.23,-0.81l0.27,-0.58l-0.2,-0.73l0.78,-0.56l0.58,-1.33l1.61,-0.9l-0.43,-0.98l0.82,-0.66l0.51,-3.03l0.94,-2.19l-0.3,-3.5l-0.71,-2.22l1.37,0.07l6.69,-1.16l1.04,-0.91l0.73,-1.87l0.84,-0.52l2.26,-0.19l1.89,-1.28l0.86,0.13l2.83,1.94l3.6,1.77l4.05,0.43l8.94,-0.5l1.75,-0.74l0.81,-0.01l3.25,0.08l2.45,0.93l1.24,-0.17l1.11,-0.58l1.4,-2.16l0.7,-0.32l1.42,0.14l0.88,1.73l0.8,0.57l2.17,-0.43l1.87,0.42l1.57,-0.18l3.68,-1.8l0.91,1.59l0.76,0.22l0.63,-0.55l-0.09,-1.07l0.42,-0.45l-0.02,-0.62l1.9,1.21l2.1,-0.24l1.36,-1.2l0.28,-0.99l3.65,0.29l3.76,-0.78l8.62,-2.47l2.73,-1.83l3.43,0.48l3.48,1.5l0.3,0.71l0.71,0.55l1.88,0.49l10.99,-1.18l1.14,0.32l1.27,0.98l0.87,0.01l1.48,-0.64l3.25,-0.5l1.99,-0.77l4.25,-3.13l0.32,-0.77l-0.24,-1.72l0.51,-0.89l4.15,-4.24l8.09,-6.65l0.47,-1.11l-1.32,-1.97l0.7,-0.82l1.01,1.03l2.02,0.77l3.03,-0.68l1.08,0.66l1.54,-0.32l4.22,-2.16l4.21,-1.1l4.59,-2.26l9.18,-3.21l1.71,-0.97l1.72,0.75l1.48,0.08l4.22,-1.06l4.0,-2.54l1.27,-0.38l7.37,-0.1l-2.08,3.62l-3.49,4.12l-0.39,1.22l0.72,3.03l2.67,2.25l0.25,1.82l-0.48,1.35l0.33,0.7l-0.05,1.3l0.79,0.26l1.3,-1.47l0.92,-0.12l0.74,0.97l-0.03,1.23l-1.02,0.66l-0.4,0.89l-1.02,0.43l-0.42,0.76l-0.96,-0.32l-2.26,0.04l-4.83,1.83l-2.47,-1.34l-1.74,0.34l-0.89,0.84l-0.76,2.13l-1.08,1.05l-2.06,0.87l-2.93,2.18l-2.33,0.23l-1.17,1.42l-3.92,2.33l-1.33,0.03l-1.25,-0.77l-0.62,0.03l-1.42,1.26l-2.28,3.32l-0.98,0.83l-2.89,1.8l-2.43,1.03l-1.31,-0.0l-0.86,0.71l-1.1,0.15l-1.9,2.12l-0.28,1.68l-0.66,0.97l-1.47,1.38l-0.68,0.17l-0.59,-1.92l-0.66,-0.39l-0.54,0.12l-2.29,2.96l-0.75,3.42l-2.08,1.89l-2.98,4.02l-0.17,3.6l-1.03,1.73l0.01,1.2l0.57,1.47l-1.16,1.72l-1.19,0.85l-3.43,0.81l1.09,-1.91l-0.08,-1.11l-0.43,-0.8l-1.57,-0.43l-2.36,1.15l-0.41,1.0l0.9,1.2l-3.78,3.26l-1.75,2.44l-5.74,4.65l0.02,1.06l1.74,2.27l1.43,1.25l0.42,1.24l-0.09,1.81l-1.83,2.72l-2.5,5.47l-0.88,0.27l-0.67,0.79l-0.14,1.08l0.51,1.11l-1.1,0.82l0.37,1.06l-1.35,2.11l-0.19,0.93l-1.4,-0.34l-0.76,0.41l-0.42,0.68l-0.98,3.15l0.15,0.92l0.37,0.32l-0.7,1.62l0.54,1.23l-1.03,0.63l-0.78,4.46l-0.49,0.04l-0.71,1.05l-1.92,-0.33l-2.5,0.78l-1.72,-3.21l-0.61,-0.53l-0.52,-0.02l-0.53,0.59l-1.18,3.26l-2.61,2.91l0.05,1.31l-0.98,0.5l-3.21,2.95l-0.74,-0.22l-0.53,-0.84l-0.23,-0.86l0.42,-1.1l-0.34,-0.48l-4.04,-0.06l-1.99,-0.48l0.99,-2.26l0.18,-1.77l-0.74,-1.72l-0.3,-1.98l-2.13,-1.46l0.78,-3.19l1.58,-4.31l0.04,-1.65l-0.52,-1.57l0.67,-0.52l0.99,0.32l2.9,1.82l3.14,-0.9l0.81,-1.3l-0.35,-1.35l-0.87,-0.64l-0.1,-0.43l-1.9,-1.24l3.56,-3.27l1.3,-0.42l0.35,-0.75l2.67,-0.27l0.89,-0.99l3.76,-1.27l0.46,-0.64l-0.78,-1.58l0.37,-1.38l-0.38,-1.05l-2.72,-2.53l-2.06,-0.78l-0.47,-0.7l-0.81,-0.43l1.34,-1.1l1.33,-1.73l0.23,-0.63l-0.27,-0.67l-1.06,-0.16l-1.61,0.87l-3.56,-3.68l-2.01,-1.75l-1.09,-0.46l-2.26,1.22l-2.7,0.45l-1.34,0.75l0.18,-1.73l-0.23,-1.9l1.48,-3.54l-0.29,-0.86l-0.88,-0.3l-0.05,-0.67l2.62,-2.44l0.29,-0.89l-0.27,-0.45l-3.49,-0.3l-3.33,1.02l-1.08,-0.05l-2.93,0.66l-0.79,-0.14l-2.03,-1.5l-0.88,0.03l-1.87,1.45l-1.06,2.67l-1.17,1.02l-0.79,-0.11l0.48,-1.79l-0.31,-1.05l-0.62,-0.43l-1.23,-0.02l-3.89,4.8l0.26,0.86l-1.79,0.13l-1.8,0.55l-1.04,0.78l-1.85,2.29l-1.11,0.57l-0.36,-0.65l-0.11,-3.58l-0.9,-0.34l-2.65,0.99l-0.98,-0.4l-0.72,0.37l0.17,-1.18l-0.25,-0.83l-1.14,-0.53l-0.7,-0.86l-3.36,-0.26l-1.72,0.28l-0.87,0.55l-0.12,-0.83l-0.79,-0.34l-3.3,0.94l-0.24,-0.8l-0.65,-0.4l-0.61,0.19l-1.3,1.31l0.29,-0.71l-0.11,-0.76l-1.17,-0.96l-1.09,-0.45l-2.78,-0.18l-0.9,0.14l-1.44,0.94l-5.77,0.82l-3.11,2.52l-1.92,2.43l-0.44,1.79l-0.72,1.25l0.16,2.24l1.61,1.92l-0.05,0.49l-0.77,0.48l-2.0,0.28l-0.42,0.72l-0.22,2.1l-1.52,0.65l0.59,-5.87l-1.02,-2.98l-0.55,-2.85l0.1,-0.67l1.34,-2.33l0.13,-0.78l-0.68,-0.66l0.5,-0.89l-0.56,-0.92l-0.84,0.15l-0.91,-1.29l-0.12,-1.51l-1.12,-2.31l-0.58,-0.37l-1.15,-0.04Z",
        name: "Assam",
      },
      "IN-UT": {
        path: "M290.95,175.24l-0.31,-0.45l0.16,-0.23l3.37,-0.85l3.64,-1.92l0.42,-0.6l-0.06,-1.2l-1.32,-0.46l-0.68,-1.08l0.48,-0.37l0.27,-0.91l-0.22,-0.97l-0.63,-0.85l-0.26,-1.61l-0.89,-0.91l-0.01,-0.76l1.22,-2.78l0.89,0.28l0.59,-1.05l-0.14,-1.41l-1.18,-1.28l0.81,0.08l0.67,-0.49l0.3,-0.73l-0.32,-1.05l3.9,-4.07l0.54,-0.28l2.79,0.1l4.5,-2.57l3.73,-1.55l1.69,0.15l0.85,0.68l1.03,0.03l1.2,1.2l0.94,0.46l2.61,-0.37l2.11,0.53l4.18,0.25l1.13,1.91l1.22,0.95l3.16,0.05l1.25,-0.6l0.0,-1.27l-1.82,-2.75l-1.58,-1.74l0.87,-1.39l0.96,0.85l1.0,-0.03l1.1,-3.41l1.16,-0.22l2.08,1.39l0.62,1.44l1.05,0.36l-0.03,1.25l0.74,0.86l0.04,1.22l1.46,0.85l0.54,2.52l0.53,0.57l2.26,0.97l1.08,2.47l2.17,0.27l1.63,2.04l1.6,0.58l1.91,-0.81l3.23,-0.54l3.15,0.76l1.58,2.12l3.25,1.54l1.81,2.14l1.15,0.36l1.78,-0.62l0.99,1.35l0.94,0.56l-0.58,1.06l-0.99,0.19l-0.34,0.48l0.09,0.66l0.95,1.13l0.08,0.47l-0.68,1.46l0.45,0.55l2.1,-0.18l2.17,0.6l5.67,2.86l2.65,0.07l3.78,2.21l1.84,2.43l5.1,1.78l0.86,0.44l0.68,1.13l-2.12,0.8l-0.8,-0.96l-0.55,-0.09l-0.49,0.35l-1.01,1.05l0.22,1.15l-0.44,0.64l-2.27,1.77l-1.2,1.7l-2.2,1.62l-2.18,0.57l-0.85,1.97l-2.18,2.84l-0.56,0.44l-1.9,0.52l-0.92,0.77l-0.45,0.93l-0.04,1.03l0.96,3.25l-1.75,1.83l-0.16,1.01l-1.64,1.45l-0.25,0.68l-1.2,0.53l-0.28,0.84l1.3,3.62l0.76,0.26l-0.56,2.85l-0.47,-0.21l-0.86,0.34l-0.15,0.75l0.5,1.37l-0.14,0.51l-1.7,0.08l-1.15,0.63l-0.63,1.38l-0.35,2.99l-1.44,0.97l-0.65,1.28l0.08,2.75l1.04,0.9l-1.16,1.58l-1.43,0.55l-0.87,-0.37l-0.04,-1.04l-0.44,-0.24l-0.79,0.2l0.08,-0.94l-0.38,-0.4l-1.62,0.37l0.3,-1.52l-1.13,-0.87l-2.18,-0.29l-0.6,0.22l-0.26,0.74l-0.54,0.19l-1.94,-0.41l-1.16,0.47l-0.67,-0.89l-1.55,-0.1l-2.32,0.86l-0.71,-2.13l-1.46,-1.68l-2.4,-0.13l-3.8,-2.61l-0.66,-0.74l-0.55,-1.37l-2.39,-1.3l-0.84,-0.11l-3.42,1.35l-0.4,-1.87l-1.03,-1.41l-4.38,-2.28l0.11,-0.62l0.69,-0.26l1.19,0.27l0.76,-1.03l0.69,0.21l0.69,-0.27l1.77,-1.76l0.03,-1.29l-3.55,-1.07l-4.97,-2.81l-1.61,-1.38l-2.29,-3.67l-1.11,-1.1l-3.59,-1.79l-2.29,-3.9l-2.23,-2.17l-1.68,0.04l-0.85,1.12l0.16,1.82l1.13,4.27l-0.23,1.21l-0.92,0.93l-1.27,0.59l-0.53,-0.16l-3.81,-2.16l-3.95,2.04l-1.26,-2.37l-1.0,-3.95l-0.15,-3.69l1.35,-2.08l1.34,-3.04l3.16,-2.75l0.2,-1.02l-0.65,-0.63l-5.42,-2.71l-2.87,-2.4l-1.41,-0.26l-0.93,0.49Z",
        name: "Uttaranchal",
      },
      "IN-JH": {
        path: "M485.62,401.35l-2.2,-0.83l-1.66,0.13l-0.64,-0.47l-0.92,-2.18l0.46,-1.96l-0.75,-2.15l-5.31,-5.13l-0.45,-1.24l-0.28,-2.67l-2.23,-1.57l-3.11,-0.55l0.74,-1.85l1.39,-1.87l0.17,-1.31l1.15,-1.83l-0.17,-0.87l-1.63,-2.76l0.11,-0.69l0.93,-0.61l2.97,-0.32l4.77,0.81l1.87,-0.08l1.71,-1.09l1.28,0.23l2.91,-0.51l1.72,-1.44l0.63,-1.37l1.28,2.2l0.99,2.58l0.91,0.66l0.71,-0.13l0.37,-0.54l0.48,0.46l0.71,-0.09l0.31,-0.39l0.0,-0.99l1.13,-0.14l0.85,0.26l0.77,-0.44l0.4,0.65l0.01,0.81l-0.37,0.6l0.15,0.73l1.64,1.83l3.74,2.84l1.49,-0.24l1.96,-2.6l1.54,0.48l0.78,-0.11l0.96,-1.83l3.19,-2.01l0.37,0.18l0.47,1.68l1.14,0.05l0.36,1.93l0.73,0.76l1.93,0.23l3.38,-1.36l-0.14,0.95l0.71,0.62l2.29,-1.85l0.34,-1.09l2.75,-1.0l0.7,-0.85l3.22,-0.65l2.72,-0.0l1.15,0.31l2.07,-1.87l1.74,0.23l0.61,-0.3l0.36,-0.71l0.0,-1.21l-0.39,-1.16l1.12,-0.67l0.91,-2.77l0.59,-0.38l2.49,-0.03l0.87,0.51l1.73,1.86l1.65,-0.22l1.97,-1.34l-0.19,1.0l1.95,0.69l0.56,2.96l0.66,1.0l1.38,0.68l1.57,-0.48l1.85,0.5l0.24,1.48l-0.96,1.25l0.15,0.88l5.46,3.3l0.78,-0.54l0.24,-1.39l0.74,-0.75l0.22,-2.08l2.61,-2.45l1.79,0.61l1.64,-0.17l0.97,-0.45l0.63,-0.86l1.69,1.09l2.36,0.74l0.49,-0.24l0.04,-1.06l0.79,-1.32l2.54,0.86l1.25,-0.22l0.91,-2.73l0.27,-2.7l-0.24,-0.98l1.59,-2.79l-0.02,-3.96l1.79,-2.25l0.83,-0.3l1.16,0.31l0.51,-0.24l1.12,-3.76l1.51,-0.38l1.41,0.51l0.77,-0.28l1.6,-3.24l1.37,-1.12l1.1,0.52l1.08,1.31l2.68,0.7l1.93,-0.1l0.67,0.49l0.1,0.59l-0.46,1.42l0.24,2.13l2.17,2.01l1.05,3.9l-0.72,3.72l-1.0,-0.18l-0.39,1.06l0.51,0.67l1.0,0.23l0.43,0.82l0.61,1.83l-0.66,0.58l-0.05,0.67l0.77,0.42l-1.14,0.75l-2.41,-0.72l-0.85,0.38l0.07,0.8l1.03,0.5l-0.1,1.01l0.4,0.96l-0.7,1.06l-0.04,1.52l-1.26,2.69l-3.44,2.56l0.02,1.36l0.28,0.36l0.67,-0.02l0.2,0.56l-1.83,0.11l-0.91,2.13l-1.27,-0.85l-1.16,0.28l-0.22,0.53l0.12,2.26l-0.83,0.87l-1.67,-0.16l-1.77,0.66l-0.38,-1.37l-0.75,-0.37l-2.33,0.63l-0.38,0.95l1.58,2.04l0.13,0.85l-0.99,0.74l-0.22,1.61l-0.67,-0.67l-1.24,-0.31l-1.18,0.26l-0.11,0.83l0.9,1.18l-0.74,0.16l-1.48,-0.36l-1.99,-1.45l-1.11,-0.15l-2.74,-1.55l-0.75,0.01l-2.05,2.64l-0.2,0.99l0.37,1.17l-0.54,1.3l-4.61,0.89l-7.31,2.64l-2.04,1.68l-0.42,2.01l-1.8,1.61l-1.1,0.29l-1.25,-0.91l-1.7,-0.6l0.37,-1.76l-0.17,-0.83l-3.17,-1.24l-0.91,0.23l-0.6,0.76l0.27,2.08l-4.66,0.65l-1.05,0.72l-0.09,0.97l0.72,1.07l1.45,0.25l-0.37,1.69l-1.12,1.59l-0.47,1.62l0.4,0.99l0.91,0.9l0.58,1.59l0.42,0.13l1.6,-0.54l1.56,0.43l4.28,4.41l1.21,0.8l2.64,-0.43l6.48,0.73l-1.12,0.37l-1.06,1.04l-0.38,5.19l1.78,1.49l1.55,0.14l2.47,1.85l0.25,1.52l0.66,1.08l0.97,0.46l1.88,0.17l1.02,0.78l0.5,1.15l-1.24,0.06l-0.21,0.5l0.21,1.04l2.24,1.83l0.38,2.09l1.43,1.35l-2.14,0.24l-0.34,0.37l-0.06,1.01l-0.83,-0.19l-1.36,0.84l-5.58,-3.66l-3.08,0.44l-0.93,-0.27l-2.33,-2.54l-5.72,-2.93l-1.38,-1.66l-0.96,-0.22l-0.63,0.3l-0.7,0.93l-1.56,0.42l-0.49,0.53l0.14,1.26l1.25,1.79l0.31,2.33l-0.08,0.94l-0.78,1.36l0.01,0.75l0.7,1.68l-0.43,2.63l-1.68,2.46l-1.06,0.74l-1.12,0.27l-1.32,-0.84l-0.04,-1.41l0.7,-1.51l-0.5,-0.78l-3.63,1.66l-3.84,-0.98l-3.16,-1.78l-1.39,-0.0l-2.85,1.24l-2.91,3.01l-0.82,-0.88l-2.85,-1.79l-1.6,-0.26l-1.46,0.46l1.5,-2.94l1.65,-2.4l0.39,-1.42l-0.54,-3.97l-0.68,-1.83l-0.62,-0.17l-2.32,1.61l-1.27,0.2l-0.95,0.73l-3.4,-0.9l-1.07,0.16l-1.02,0.58l-6.68,0.19l-0.58,0.37l-0.42,1.49l-2.34,1.14l-2.91,0.15l-2.41,-1.06l-1.51,-0.19l-0.86,-0.65l-2.56,-3.71l-2.65,-1.24l0.21,-0.7l2.1,-1.9l1.68,-0.16l2.55,-1.92l1.17,-2.68l0.95,-0.49l2.7,-2.47l0.21,-1.44l-0.78,-2.37l-1.27,-0.8l-2.38,0.04l-2.05,-0.95l-0.44,0.2l-0.1,0.88l-0.34,-0.13l-0.73,-2.68l-1.84,-1.99l-0.24,-1.17l0.56,-3.95l-0.52,-2.22l-1.03,-0.81l-1.27,0.92l-0.09,-0.36l0.24,-2.83l1.54,-1.82l0.43,-1.07l-0.96,-2.79l-0.87,-0.33l-1.62,0.72l-0.34,0.71l0.12,1.14Z",
        name: "Jharkhand",
      },
      "IN-JK": {
        path: "M176.08,35.04l2.37,-2.36l-0.15,-2.71l0.72,-0.56l5.27,-0.96l3.12,-1.98l1.87,-0.7l1.84,-0.15l1.87,0.3l7.81,2.66l10.87,2.04l5.97,-0.52l1.57,1.55l2.54,1.46l8.19,2.07l5.87,-0.33l2.57,-2.29l3.11,-1.82l1.42,-1.8l0.86,-0.17l1.84,0.74l1.27,-0.01l3.39,-0.84l5.27,-2.66l0.99,0.15l1.97,1.12l3.39,-0.56l3.4,-2.92l0.32,-0.85l0.08,-2.41l0.59,-0.43l1.96,-0.39l1.61,0.69l0.77,0.01l2.91,-2.36l0.56,-0.77l0.2,-1.26l-0.34,-1.59l0.44,-0.53l22.94,-13.34l0.94,1.29l1.66,0.81l1.15,-0.36l2.19,-1.83l1.4,0.07l0.25,0.97l-1.39,3.65l-0.24,2.94l1.11,2.66l2.85,4.79l0.56,3.9l0.5,1.32l1.45,1.99l1.9,6.57l0.74,1.28l1.29,1.15l1.47,0.62l7.06,1.14l1.68,0.66l2.57,1.86l1.66,2.01l3.68,1.47l0.79,0.71l0.72,1.3l0.34,1.43l-0.32,1.36l-2.12,1.93l-2.99,1.23l-2.52,1.81l-0.26,3.11l1.51,4.2l0.72,4.34l-0.37,6.71l0.6,2.02l0.76,1.24l2.91,2.63l1.83,2.73l2.61,1.09l0.44,1.63l0.42,0.49l2.17,-0.32l3.4,1.53l2.5,0.11l0.76,0.38l0.07,0.93l-1.15,2.16l-0.31,3.79l0.76,1.2l1.74,1.47l1.04,2.98l1.58,1.74l-0.13,2.04l-1.78,2.45l-2.99,2.26l-1.28,1.37l-2.29,-0.49l-2.63,0.8l-0.83,0.67l-1.0,3.25l-1.34,-0.22l-2.55,1.01l-0.76,-0.22l-4.17,-3.55l-0.99,-2.71l0.36,-2.45l-0.62,-0.72l-0.73,-0.26l-0.88,0.28l-1.95,1.75l-6.89,0.7l-0.72,0.37l-0.3,0.78l-1.91,1.79l-0.48,-0.21l-0.24,-0.53l0.84,-2.71l2.04,-1.64l0.41,-0.81l0.1,-2.61l-0.35,-1.18l-0.52,-0.44l-1.59,0.09l-0.31,0.35l-0.01,0.78l-1.28,0.59l-0.52,0.64l-1.76,0.13l-2.36,0.83l-1.87,1.76l-1.16,0.19l-1.94,-2.71l-0.28,-2.27l-1.13,-1.48l-1.11,-2.41l-4.43,-4.94l-0.7,-0.03l-1.02,0.5l-3.7,2.62l-4.93,1.16l-0.67,0.74l-0.48,-0.0l-6.46,-2.01l-1.4,-0.78l-4.53,-2.86l-5.76,-5.55l-4.11,0.12l-1.88,-1.36l-0.71,-0.13l-1.11,0.56l-3.58,0.69l-3.2,1.74l-0.74,0.87l-0.39,1.36l-0.68,0.71l-4.17,1.72l-4.44,3.8l-1.01,-0.85l-1.7,-0.58l-1.74,0.49l-0.44,0.98l0.29,1.07l3.0,3.83l-0.27,2.22l0.73,1.87l-0.04,0.89l-1.7,1.9l-0.05,0.61l-0.99,1.43l-2.76,1.28l-0.43,1.18l-0.85,0.7l-2.45,0.3l-1.37,0.77l-2.13,2.4l-1.29,-0.76l0.03,-0.69l-0.42,-0.49l-1.71,0.82l-2.67,0.07l-3.04,-2.13l-2.21,-0.52l-3.16,-1.86l-3.66,0.69l-2.22,-1.01l-3.41,0.48l-0.92,-0.3l-0.7,-0.79l-0.95,-2.82l0.8,-1.82l-0.19,-2.8l1.2,-2.89l-0.26,-1.2l-0.74,-0.4l-0.76,0.21l-0.63,0.65l-0.62,1.67l-1.02,0.49l-2.05,0.22l-2.05,-1.37l-2.17,0.76l-0.5,-0.09l-0.91,-1.05l0.73,-1.21l0.13,-0.85l-0.81,-4.48l-1.14,-0.74l-2.8,-0.45l-1.0,-0.55l-1.7,-2.2l-2.9,-2.45l-0.36,-0.9l0.31,-1.78l2.08,-1.05l0.87,-1.05l1.26,-3.13l0.67,-2.87l-0.65,-2.12l-5.01,-3.36l-0.4,-1.27l0.28,-1.74l1.77,-2.59l3.3,-0.55l2.28,-1.26l1.59,-1.84l0.35,-1.48l-0.54,-1.32l-1.2,-0.71l-3.32,0.36l-2.29,-0.58l-2.14,0.5l-0.78,-0.15l-1.4,-1.35l-0.24,-0.86l0.22,-0.85l3.05,-2.05l0.2,-1.12l-1.36,-3.16l-0.58,-0.7l-2.81,-0.24l-1.92,-1.19l-0.07,-1.35l1.86,-1.69l0.23,-1.76Z",
        name: "Jammu and Kashmir",
      },
      "IN-UP": {
        path: "M275.34,205.39l0.08,-0.87l-0.4,-0.81l0.98,-0.64l0.26,-0.62l-0.39,-1.02l0.09,-1.08l0.63,-0.63l-0.03,-0.78l0.85,-0.74l-0.12,-1.31l0.85,-0.26l0.57,-1.11l1.48,-5.73l1.43,-1.37l0.17,-0.58l0.94,-0.1l0.3,-0.86l2.37,-1.61l0.44,-1.41l4.79,-4.24l0.56,-1.76l0.08,-1.88l0.69,-0.43l1.01,0.2l2.73,2.32l5.75,3.03l-3.25,2.91l-1.42,3.18l-1.4,2.22l0.14,4.1l1.02,4.01l1.5,2.84l0.53,0.17l3.93,-2.12l4.27,2.33l1.87,-0.79l1.16,-1.27l0.27,-1.53l-1.31,-5.86l0.44,-0.6l0.93,-0.03l1.97,1.95l2.37,3.99l3.63,1.83l1.01,1.0l2.3,3.68l1.72,1.49l5.15,2.91l3.22,0.87l-0.29,0.67l-1.36,1.2l-1.25,-0.03l-0.74,1.01l-0.97,-0.35l-0.89,0.33l-0.75,1.13l0.36,0.82l4.44,2.28l0.82,1.11l0.45,2.3l0.61,0.28l1.07,-0.68l2.94,-0.83l2.2,1.17l0.37,1.16l0.83,0.95l3.93,2.71l1.56,0.36l0.81,-0.24l1.2,1.39l0.83,2.42l0.51,0.21l2.48,-0.94l0.99,-0.02l0.51,0.84l0.69,0.17l1.07,-0.46l2.12,0.39l0.81,-0.28l0.49,-0.86l1.92,0.26l0.58,0.43l-0.37,1.25l0.26,0.54l0.61,0.21l1.18,-0.4l0.11,1.23l0.97,0.05l0.34,0.98l1.38,0.56l1.93,-0.72l0.97,-1.03l0.5,-1.07l2.2,2.05l1.78,0.44l1.1,1.2l1.02,0.42l1.36,2.19l0.82,0.27l1.64,-0.21l2.4,2.1l0.56,-0.22l0.15,-0.44l-0.17,-2.69l0.63,-0.53l0.74,0.02l0.4,1.04l2.24,0.66l1.17,1.65l1.64,0.62l1.64,1.48l0.65,0.35l2.05,0.21l0.35,1.28l0.73,0.61l1.33,0.34l1.04,-0.11l0.72,1.29l5.03,1.12l0.53,0.65l1.04,2.88l2.01,2.4l-0.35,0.91l0.75,0.97l1.19,0.06l0.59,-0.34l0.52,-0.97l0.76,0.17l1.08,0.92l0.65,1.65l0.59,0.53l2.77,1.38l1.6,1.47l2.32,0.63l1.89,1.78l3.25,1.95l1.27,0.05l1.97,-1.88l0.73,-0.31l1.44,0.14l0.64,0.2l1.19,1.09l1.86,0.8l3.63,2.88l2.4,1.17l1.78,1.68l1.35,0.37l2.68,-0.3l3.76,-0.93l0.61,0.23l0.78,1.86l0.64,3.77l1.05,1.07l3.78,0.24l2.16,1.0l1.95,0.46l3.79,-0.02l1.0,0.38l1.46,1.18l1.22,1.83l0.87,0.34l1.01,-0.06l1.26,-0.95l0.95,-1.56l-0.43,-1.73l0.64,-0.32l6.11,0.45l7.74,3.44l-0.08,0.57l0.44,0.31l0.89,-0.1l-0.14,1.46l1.68,1.8l-0.02,2.27l2.55,3.19l0.12,2.0l1.36,2.56l2.76,1.74l1.3,-0.6l0.85,0.05l0.44,0.97l-0.19,2.57l0.25,0.77l1.93,0.52l2.54,2.63l-8.75,-0.21l-0.69,0.64l-0.89,2.26l-1.87,0.57l-0.58,0.71l-0.53,-0.86l-1.04,0.3l-0.27,2.29l0.45,0.95l1.56,0.43l1.39,-0.63l2.0,1.49l2.85,0.74l-0.75,1.75l0.72,1.59l-1.71,-0.01l-0.98,0.62l-2.56,0.37l-0.78,0.73l-0.02,1.17l1.57,1.59l0.8,1.89l2.75,1.4l0.66,1.24l1.01,0.41l0.56,1.63l1.2,1.16l0.84,0.22l2.77,-0.43l1.0,1.36l1.44,0.91l2.29,0.25l2.18,1.96l0.09,0.43l-0.43,1.02l-1.48,1.05l-1.13,0.16l-1.72,-0.61l-1.57,-1.34l-1.31,-0.02l-1.48,0.93l0.37,2.52l-1.19,0.43l-1.3,-0.47l-0.42,-2.32l-1.02,-0.59l-1.43,0.28l-2.76,2.12l-1.74,2.2l-3.5,2.93l-2.15,0.89l-1.31,1.48l-12.02,6.86l-1.28,1.31l-0.44,1.05l-0.35,3.14l0.15,0.85l1.12,1.85l-0.29,4.03l2.54,2.96l2.69,1.36l0.21,1.11l-0.62,1.25l0.43,1.32l-0.04,2.89l-2.45,0.3l-1.39,1.1l-0.01,1.49l1.65,3.07l-0.95,1.29l-0.26,1.5l-1.39,1.86l-1.72,4.05l-1.53,1.2l-0.32,1.67l-0.84,1.34l-3.39,1.26l-4.96,-0.24l-1.19,-0.65l-1.66,-1.53l-1.22,-0.35l-0.94,-1.34l-0.99,-0.75l0.07,-1.48l-1.86,-1.99l0.85,-0.12l0.85,-0.74l0.33,-2.2l0.73,-1.76l-0.05,-2.43l-0.94,-0.86l0.33,-2.55l-0.28,-1.36l0.21,-0.26l0.93,0.28l0.92,-0.26l0.51,-1.09l-1.52,-2.87l-1.63,-0.31l-0.22,-1.37l-0.98,-0.12l-2.9,1.04l-1.34,-0.13l-2.9,-0.97l-1.02,0.1l-0.38,0.54l0.07,1.74l-0.34,0.46l-2.48,0.03l0.46,-0.94l-0.09,-0.81l-0.63,-0.61l-1.13,-0.04l0.05,-2.17l-0.46,-0.58l-0.5,0.11l-0.69,1.01l-0.23,-0.11l0.34,-1.13l-0.43,-1.53l-0.75,-0.06l-2.07,1.15l-2.62,-1.65l-2.34,-0.36l-2.44,-1.83l0.1,-1.46l-1.19,-1.84l-1.25,-0.33l-1.65,0.49l-0.55,-0.18l-0.66,-1.21l-3.93,-0.58l0.12,-0.94l-1.36,-2.79l-0.44,-0.15l-3.52,1.18l-0.04,0.71l1.17,0.85l-1.17,0.38l-1.22,-0.17l0.17,-0.95l-0.6,-0.6l-1.6,-0.5l-2.36,0.14l-0.44,0.65l0.07,2.14l-1.89,2.61l0.26,1.6l-1.41,0.32l-0.94,1.06l-2.61,-1.77l-1.96,0.4l-1.39,-1.0l-2.12,0.47l-1.76,-0.18l0.84,-1.31l0.15,-0.88l0.88,-0.9l0.2,-1.29l0.88,-2.03l-0.08,-0.99l-0.92,-0.55l-1.39,0.37l-0.83,1.53l-3.3,0.4l-0.04,0.77l1.71,1.4l-2.08,0.3l-0.9,-0.82l-0.8,-1.5l-0.89,-0.3l-0.66,0.44l0.01,1.06l-2.31,-0.37l-0.6,0.3l0.4,1.75l1.24,0.71l-0.82,0.53l-0.4,0.04l-1.56,-1.55l-0.56,0.43l0.22,1.27l-1.38,-0.38l-1.63,0.37l-0.51,-0.7l-0.17,-0.93l1.06,-0.2l1.53,-1.78l2.0,-1.08l0.21,-0.73l-0.78,-2.05l-0.88,-0.18l-0.5,-0.7l-0.94,-0.49l-0.28,-2.59l-0.93,-1.59l-0.79,-0.28l-1.27,0.27l-0.88,-0.25l-2.49,2.19l-1.13,-0.36l-2.27,1.05l-3.01,2.29l-2.37,0.66l-0.35,0.48l0.02,0.73l1.03,1.63l-1.68,0.65l-0.98,-0.78l-3.65,0.23l-3.08,-0.97l-0.92,0.48l-1.43,1.94l-0.32,-0.02l-0.21,-0.76l-0.47,-0.4l-1.47,0.02l-0.45,0.65l0.08,1.56l-0.7,0.07l-0.49,-0.55l0.21,-1.36l0.89,-0.87l1.71,-2.67l0.6,-1.48l-0.19,-0.47l-0.47,-0.14l-1.16,0.86l-0.87,-0.19l-0.77,0.28l-0.81,0.96l-0.37,-0.96l1.04,-2.22l-0.64,-0.78l-0.75,0.11l-1.26,2.01l-0.04,1.23l0.78,3.19l-3.22,-0.57l-1.29,1.21l-0.23,-1.37l-0.3,-0.28l-0.87,-0.01l-1.75,0.66l-0.09,-0.73l1.1,-1.71l-0.97,-0.87l-0.86,-0.22l-0.71,0.35l-0.16,1.32l-1.22,0.43l-1.02,1.15l-0.59,0.21l-0.12,-0.99l0.32,-0.89l1.91,-1.82l-0.03,-1.44l0.63,-1.25l0.16,-1.42l-0.55,-0.91l-1.06,0.13l0.35,-1.08l-0.08,-1.1l-0.23,-0.57l-0.88,-0.52l-0.72,0.25l-0.62,0.73l-0.32,0.9l0.03,1.77l-0.3,0.25l-0.55,-0.02l-0.1,-2.28l-0.54,-0.97l-0.57,-0.09l-1.75,1.02l-0.19,1.54l0.75,0.94l-0.52,0.98l0.19,1.26l-2.07,-2.02l-1.41,-0.23l-1.13,0.35l-0.36,0.65l0.12,0.74l-1.48,1.74l-0.57,1.6l0.32,0.71l1.59,1.5l1.08,2.41l1.2,6.41l2.31,3.04l0.36,3.85l-0.65,1.88l0.4,1.02l1.03,0.66l2.06,-0.54l1.03,0.19l1.85,3.2l-0.17,1.52l0.39,0.4l1.51,0.37l-0.16,1.09l-0.47,0.87l-1.67,1.57l-1.07,2.4l-1.57,1.53l-0.99,-0.36l-0.45,-1.43l-2.96,-0.6l-3.64,-3.03l-1.66,-0.82l-1.14,0.44l-0.61,1.98l-0.56,0.69l-0.97,0.47l-0.88,-0.44l-0.41,-0.83l0.63,-1.22l-0.08,-0.85l-2.21,-1.45l-0.19,-0.65l-0.85,-0.52l-0.49,-0.89l1.35,-2.51l0.03,-0.97l-0.38,-0.52l0.07,-1.6l-0.96,-1.46l-0.21,-2.0l-0.83,-1.48l-0.83,-0.73l0.24,-0.53l2.34,-1.55l2.17,-2.14l0.53,-1.55l-0.31,-1.12l1.1,-3.45l-0.18,-1.0l-1.96,-3.91l-1.39,-2.03l2.35,-2.06l0.58,-0.87l0.55,-1.89l3.26,-0.78l2.42,0.06l1.81,-1.06l2.97,-0.59l1.28,-0.74l0.27,-0.98l-0.81,-2.2l0.14,-1.22l0.38,-0.7l1.92,-1.49l0.81,-2.07l1.37,-1.68l1.06,-2.84l1.2,-1.91l-0.03,-0.77l-0.96,-0.97l0.0,-0.62l1.1,-0.89l-0.56,-1.88l0.59,-0.57l1.79,-0.57l1.29,-1.72l0.13,-0.63l-0.6,-0.73l0.33,-1.15l-0.1,-1.04l-0.67,-1.92l-2.1,-3.28l-0.72,-3.17l-0.59,-0.68l-1.97,0.16l-2.0,-1.93l-0.9,-0.14l-0.36,-0.7l-0.99,0.05l-0.56,-0.52l-1.79,0.76l-1.18,-0.01l-0.74,0.63l-0.64,-0.02l-1.43,-0.82l-1.72,-0.3l-1.05,-1.0l-1.16,-0.1l-0.54,-0.83l-0.76,-0.27l-2.23,0.18l-0.93,1.15l-1.2,-0.18l-0.62,-0.89l0.78,-0.3l1.09,-1.02l0.27,-0.71l-0.74,-0.73l-1.94,-0.48l-2.22,0.1l-1.26,1.15l-1.17,0.12l-0.39,0.59l-0.88,-0.48l-2.81,-0.37l-1.09,0.33l-0.92,-0.47l-3.28,-0.47l-2.51,1.71l-3.97,1.63l-1.26,-0.07l-0.91,1.46l-0.86,0.49l0.13,-2.17l0.57,-0.69l6.23,-2.89l2.25,-0.54l0.72,-0.58l0.09,-0.67l-0.84,-0.74l-0.84,0.58l-0.62,-1.04l-0.47,-0.22l-0.8,0.55l-1.65,-0.21l-0.65,-1.0l-0.85,-0.27l0.11,-0.38l2.42,-0.72l0.53,-1.05l1.15,-0.65l0.56,-1.2l-1.43,-2.52l-0.3,-1.75l-1.54,-0.43l-3.64,-2.12l-0.61,-1.8l-2.26,-2.94l0.03,-1.53l-0.68,-0.68l0.5,-0.81l-0.04,-0.86l-0.47,-1.19l-0.72,-0.53l-0.37,-2.72l0.75,-0.66l2.6,-0.95l0.83,-0.85l0.99,0.2l0.51,-0.21l1.14,-1.79l0.79,-0.67l-0.81,-2.35l-1.02,-0.86l0.1,-1.29l0.34,0.21l0.6,-0.43l-0.26,-1.77l1.08,-0.7l0.18,-0.62l-0.76,-0.58l0.74,-1.51l-1.42,-0.68l-0.05,-0.97l-0.62,-0.65l0.87,-2.29l-0.41,-0.56l-0.44,0.04l-0.11,-1.16l-0.36,-0.26l-0.88,0.17l-0.49,-1.15l-0.94,0.01l-0.29,-0.67l-1.11,-0.66l-1.05,-1.92l1.12,-1.48l-0.06,-1.04l-0.85,-2.6l-2.48,-2.18l-0.53,-1.11l0.23,-0.83l-0.41,-0.93l0.54,-1.42l-1.35,-1.66l0.54,-1.2l-1.8,-3.7l-0.14,-5.52l0.56,-1.3l-0.47,-0.92l-0.03,-0.89l0.47,-1.5l-0.93,-0.73l-1.3,0.03l1.29,-1.31l-0.05,-0.56l-0.46,-0.39l-0.95,-0.01Z",
        name: "Uttar Pradesh",
      },
      "IN-SK": {
        path: "M624.09,256.17l1.74,-1.11l1.5,0.04l2.71,-2.5l1.43,1.15l2.65,0.52l2.31,1.81l-0.23,2.08l1.28,1.8l0.06,0.92l-1.46,6.18l-1.76,3.15l-0.24,1.13l0.49,0.78l-0.09,1.51l0.63,1.96l3.56,3.09l-0.14,0.55l-0.53,0.4l-1.78,0.44l-1.01,0.67l-1.42,2.94l-1.56,-0.85l-4.67,-0.11l-3.06,2.58l-1.78,0.44l-3.84,-1.72l-3.55,-0.05l-0.65,-0.3l-0.58,-1.87l-1.79,-1.32l0.79,-2.13l-0.61,-1.91l0.81,-1.92l-0.56,-1.88l2.65,-4.71l1.54,-4.54l-0.12,-1.42l0.29,-1.16l-0.51,-0.51l-1.07,-0.3l-0.48,-1.12l0.06,-0.62l0.47,-0.48l1.19,0.1l6.6,-1.18l0.74,-0.55Z",
        name: "Sikkim",
      },
      "IN-MZ": {
        path: "M743.96,392.77l0.71,0.19l0.37,-0.45l-0.14,-2.85l0.55,-1.85l-0.42,-1.43l0.33,-2.14l-0.11,-2.89l-0.65,-1.18l2.99,-0.03l-0.38,1.02l0.75,1.88l1.11,0.72l1.07,-0.2l3.08,-2.92l1.24,-0.79l-0.05,-1.35l2.53,-2.77l1.3,-3.49l2.32,3.71l1.02,0.04l1.89,-0.78l1.44,0.32l0.94,-0.24l0.11,0.82l0.68,0.79l-0.94,1.59l0.08,1.22l-0.6,3.47l-0.55,0.59l0.12,0.67l2.91,1.14l1.2,0.91l1.31,-0.55l0.72,0.69l0.62,0.01l1.32,-0.83l0.11,1.34l0.61,0.24l0.97,-0.45l0.25,1.53l1.46,2.27l0.56,5.39l1.62,1.71l0.15,1.2l-0.99,6.3l0.22,3.39l-0.91,1.69l-0.09,5.36l-1.22,2.4l-1.63,1.33l-0.58,0.03l-1.4,-1.49l-0.78,-0.25l-0.99,0.29l-0.58,0.74l0.04,2.05l0.88,1.94l0.12,0.97l-1.74,2.48l-1.23,1.16l-0.27,2.69l1.21,3.12l-0.33,2.8l0.6,1.65l1.1,1.18l0.34,1.19l0.24,3.97l-1.47,0.77l-0.09,0.62l0.38,0.78l-2.29,-0.79l-1.1,0.42l-0.08,2.78l-1.0,0.47l-0.71,1.34l0.31,2.1l-0.63,-0.79l-0.82,-0.32l-0.71,0.4l-0.47,1.47l-0.37,-1.67l-0.66,-0.91l-2.03,-1.9l-1.96,-1.42l-0.88,-0.27l-0.8,0.54l0.01,1.48l-0.37,0.18l-0.18,0.63l-0.08,1.63l-0.92,0.25l-0.78,0.79l-1.04,-4.15l0.88,-0.24l0.27,-1.25l-1.83,-11.1l-0.51,-1.55l-0.17,-4.45l-0.52,-1.11l-1.15,-1.14l-0.55,-3.59l-0.61,-0.67l-0.91,-0.36l-0.68,-1.66l0.02,-2.29l-0.78,-4.56l0.13,-1.61l0.79,-1.88l-0.27,-2.46l-0.7,-0.81l-0.08,-0.97l-0.71,-0.88l-1.55,-6.66l0.55,-2.59l-0.21,-1.75l0.23,-1.48l0.46,-0.67Z",
        name: "Mizoram",
      },
      "IN-CT": {
        path: "M376.2,561.12l-0.76,-1.04l-0.54,-2.04l-1.09,-0.57l-0.15,-0.57l0.27,-0.65l2.07,-1.28l0.36,-0.85l-0.24,-0.79l-1.82,-2.18l-0.32,-1.59l0.51,-1.14l2.36,-3.16l1.16,-4.17l1.21,-0.64l1.08,-1.84l1.03,-0.48l0.89,-1.14l0.61,-0.26l1.07,2.14l2.07,0.07l0.93,1.63l0.73,0.22l1.24,-1.17l2.22,-1.2l0.11,-0.81l-0.84,-1.42l2.23,-0.73l0.65,-1.58l-0.64,-1.49l-1.37,-1.28l-4.18,-1.73l-0.94,-2.81l-2.92,-1.34l-1.24,-2.7l-0.75,-0.22l-0.84,0.27l-0.46,0.55l-0.09,0.78l-1.61,-0.42l1.75,-0.9l0.59,-1.0l-0.24,-0.9l-1.6,-0.51l0.5,-0.9l1.91,0.56l0.81,-0.33l0.83,-4.19l-1.06,-3.19l-3.34,-0.41l0.3,-2.29l0.6,-0.47l2.53,-0.4l2.93,-1.99l0.18,-0.75l-0.42,-1.42l0.05,-2.41l0.61,-1.47l-0.41,-1.1l-0.13,-2.2l-1.6,-0.59l-2.16,0.82l0.34,-0.93l1.82,-1.1l0.25,-1.05l-0.49,-2.64l-0.19,-4.61l-0.89,-0.79l-1.73,0.09l-0.93,-1.74l0.73,-4.2l0.63,-0.84l4.35,-2.42l1.73,-2.04l0.06,-1.69l1.3,-3.97l-0.11,-3.65l0.64,-4.84l1.91,-0.95l0.61,-1.04l0.55,-1.62l-0.09,-3.28l2.01,-4.15l0.85,-0.2l1.2,1.46l0.55,-0.07l0.46,-0.5l0.09,-0.85l-0.42,-0.87l0.8,-0.52l0.42,-2.56l1.99,-1.5l0.72,-1.23l0.16,-3.55l1.21,-1.92l0.5,-0.43l0.46,0.94l1.05,0.27l3.57,-1.69l1.2,1.52l0.79,0.43l1.06,-0.45l2.76,-2.24l3.2,-1.03l0.92,-1.95l2.97,-1.77l-0.02,-1.86l0.73,-1.05l-0.19,-2.83l0.19,-0.37l2.32,-0.91l2.35,-2.12l0.23,-0.95l-0.31,-1.56l0.29,-0.66l3.67,-1.75l1.99,-0.03l0.88,-1.76l1.03,-4.6l-0.16,-1.02l-2.37,-2.04l-2.34,0.08l-0.36,-0.7l-0.98,-0.37l-2.06,-3.14l-0.79,-0.36l-1.44,-0.08l-3.16,-1.17l-0.65,0.1l-2.65,1.78l-0.44,0.01l-0.97,-2.0l0.65,-0.89l0.15,-1.17l1.07,-0.61l1.02,-1.6l-0.17,-1.22l-1.75,-3.33l0.06,-1.2l1.2,-0.2l1.84,1.89l1.03,0.75l1.08,0.3l1.09,-0.04l3.01,-1.44l1.96,0.13l2.28,1.14l3.87,0.03l1.87,0.48l8.34,0.33l1.27,-0.98l2.41,-1.15l0.77,-1.85l3.07,-1.14l0.59,-0.82l0.3,-1.29l0.83,0.21l1.66,1.52l1.43,0.77l5.35,0.26l3.78,-1.46l1.03,-1.62l0.25,-1.54l1.45,-1.09l0.74,-1.65l3.19,0.58l1.86,1.28l0.24,2.82l0.99,1.75l4.75,4.36l0.66,1.82l-0.44,2.11l1.35,2.8l1.06,0.48l1.68,-0.12l2.34,0.83l0.55,-0.55l-0.05,-1.51l1.36,-0.48l0.76,2.35l-1.89,2.51l-0.29,3.17l0.54,1.11l0.6,0.01l0.99,-0.91l0.48,0.7l0.3,1.5l-0.56,4.03l0.33,1.47l1.84,1.98l0.9,2.89l1.12,0.31l0.52,-0.4l0.04,-0.52l1.65,0.8l2.21,-0.09l0.9,0.49l0.71,2.65l-0.72,0.97l-2.99,2.18l-1.13,2.64l-2.36,1.79l-1.78,0.21l-2.14,1.78l-0.72,2.26l0.72,1.48l0.15,1.18l-1.13,1.76l-3.47,0.93l-3.65,3.0l-3.05,1.37l-2.17,2.82l-0.35,1.32l0.73,1.02l-1.48,0.97l-0.33,1.95l0.41,0.86l1.39,0.93l-0.35,1.31l0.13,0.75l-0.12,0.3l-0.98,0.13l-0.29,0.89l-1.06,-0.2l-0.46,0.37l-0.32,1.8l-3.28,5.47l-0.78,2.64l0.11,1.7l1.58,1.75l0.07,1.4l-2.14,-0.68l-0.99,0.11l-0.68,0.98l-0.1,1.33l-0.9,1.29l-0.91,2.51l-1.44,1.46l-2.01,0.14l-3.31,-2.01l-4.53,0.66l-0.98,0.41l-1.12,-0.49l-3.11,0.28l-0.56,0.45l-0.04,1.31l-2.46,4.73l-1.43,0.95l-1.59,2.2l-1.09,0.56l0.01,-0.76l-0.55,-0.52l-1.36,-0.25l-0.68,0.54l-0.09,4.18l0.72,2.52l-0.83,4.18l0.61,1.45l0.67,0.17l0.4,1.27l0.79,0.22l-0.29,3.71l0.48,1.12l0.27,3.76l-0.69,2.58l0.08,0.98l2.58,1.62l2.3,0.07l1.42,1.1l1.33,-0.5l1.05,0.06l-0.41,3.09l0.82,1.35l-3.43,2.25l0.01,-2.29l-1.81,-0.32l-1.56,-0.7l-3.66,-0.37l-0.86,0.54l-0.78,1.34l-2.46,-4.66l-0.59,-0.31l-1.08,0.07l-0.43,-0.79l-2.26,-1.77l-0.81,0.21l-0.92,1.26l-0.28,-0.91l-2.18,-2.08l-0.5,0.09l-1.32,1.38l-0.97,0.56l-1.53,2.64l-0.2,1.29l0.69,1.16l3.02,1.8l0.98,1.71l2.17,0.75l-0.29,2.12l0.41,1.88l-0.25,4.24l0.5,0.47l0.99,0.22l0.95,1.7l1.38,0.51l0.36,0.45l-0.98,1.25l0.11,0.61l0.97,0.86l-0.71,1.75l-0.07,1.21l0.69,1.82l-0.2,1.59l1.06,0.93l0.17,1.09l0.72,1.28l0.08,2.46l-1.85,1.77l-0.79,3.73l-0.61,-0.56l-0.52,-0.03l-0.99,1.69l-2.34,0.54l-1.59,1.62l-1.01,0.36l-0.27,0.97l1.23,1.04l0.02,0.59l-1.55,1.0l-3.02,2.84l-1.83,2.83l-1.7,0.58l-0.96,1.18l-3.23,1.04l-0.99,2.18l0.33,1.34l-0.54,2.23l-0.74,1.15l-0.25,2.85l-0.67,1.16l-0.18,1.23l-0.74,-0.38l-0.78,0.41l-0.23,2.18l-4.04,0.11l-2.81,-1.08l-3.48,1.96l-0.54,-0.18l-0.8,-1.55l-0.22,-3.95l-1.15,-2.66l-0.11,-1.07l0.7,-1.59l-0.22,-0.76l-1.09,-0.27l-1.63,0.55l-0.57,-2.01l-0.9,-0.47l-0.7,0.29l-0.43,1.22l-1.37,0.06l-0.16,-0.75l1.24,-0.83l0.07,-0.8l-2.14,-4.79l-2.4,-3.04l-2.13,-2.27l-1.92,-1.33l-1.32,-0.24l-1.74,0.54l-1.0,-0.81l-0.58,0.42Z",
        name: "Chhattisgarh",
      },
      "IN-CH": {
        path: "M266.15,165.51l-2.24,-2.23l-0.12,-0.55l1.16,-0.55l1.66,0.15l0.44,1.34l-0.16,1.56l-0.74,0.28Z",
        name: "Chandigarh",
      },
      "IN-GA": {
        path: "M171.13,653.34l0.82,-0.49l2.2,-0.25l0.84,-1.12l0.38,0.84l1.86,0.75l0.72,2.4l1.25,1.01l1.01,0.17l2.17,-0.81l2.03,0.13l1.31,-0.56l1.58,0.8l0.64,3.06l-0.59,1.24l0.03,0.83l0.59,0.86l0.06,1.41l1.19,1.5l0.15,1.34l-0.25,0.39l-1.24,0.3l-0.42,0.49l0.16,0.93l1.4,1.13l-1.01,2.75l0.15,2.34l-1.02,2.28l-0.76,0.39l-1.33,0.04l-1.82,1.18l-1.4,-0.88l0.06,-1.67l-0.32,-0.72l-0.99,-0.43l-1.0,-1.7l-1.34,-0.43l0.32,-0.82l0.93,-0.77l0.11,-0.61l-0.54,-0.55l-1.62,-5.41l-0.52,-0.65l-1.65,-0.3l-0.6,-0.51l2.08,0.23l0.62,-0.25l0.78,0.3l0.93,0.96l0.63,-0.35l-0.02,-0.58l-1.35,-1.45l-3.77,-1.12l0.45,-0.68l1.85,-0.72l-0.19,-0.91l-0.59,-0.35l-2.36,1.34l-0.55,-0.34l0.05,-0.87l-0.54,-1.54l0.59,-0.89l2.24,-0.65l0.3,-0.6l-0.39,-0.4l-1.74,0.07l-1.67,1.11l-0.87,-2.2Z",
        name: "Goa",
      },
      "IN-GJ": {
        path: "M0.5,399.96l0.7,-0.07l0.65,-0.85l1.21,0.35l1.42,-0.85l0.14,-0.66l-0.59,-0.43l-0.93,0.34l-0.77,-0.57l-0.51,-2.68l-0.67,0.36l0.47,-2.07l0.64,-0.96l1.64,-0.62l-0.08,-1.16l0.42,0.58l0.75,0.19l1.26,-1.22l0.45,0.24l0.9,-0.64l10.29,-0.14l0.4,-0.4l0.04,-10.49l0.51,-1.05l1.13,0.05l0.45,2.22l0.74,0.73l0.91,-0.37l1.29,-2.29l1.82,2.06l0.74,0.04l2.52,-1.05l3.13,1.14l3.52,-0.99l8.54,0.22l0.76,0.33l2.36,2.42l1.6,0.78l7.98,0.11l1.43,-0.3l1.28,-1.0l1.64,-3.28l4.06,-0.84l1.74,-1.07l2.27,-0.31l1.43,-0.97l4.1,-0.7l0.18,0.38l-0.74,0.64l-0.12,0.58l0.81,3.24l1.9,1.14l4.26,0.3l3.16,-1.22l0.2,-0.72l-0.41,-0.77l2.11,-1.57l2.5,0.12l0.86,-0.95l1.84,-0.89l-0.41,-1.47l-2.81,-0.83l0.18,-2.07l-0.72,-0.83l-0.07,-0.71l0.57,-1.53l2.65,-1.55l1.66,0.93l2.93,0.8l0.95,0.0l2.15,-0.83l2.27,0.43l1.81,-1.1l2.8,-0.18l1.22,0.17l1.61,0.83l3.68,-0.64l0.6,1.02l1.38,0.34l0.62,-0.37l0.1,-0.96l0.5,-0.3l0.41,0.01l0.74,0.75l1.17,0.13l1.71,-1.24l1.73,-0.39l1.37,1.61l2.36,0.79l1.19,0.15l3.43,-0.47l-2.31,0.59l-0.18,0.93l1.37,1.15l1.47,0.26l0.66,0.97l1.68,0.05l0.11,1.14l1.25,1.86l1.07,-0.16l0.95,-2.34l0.8,-0.05l1.64,0.97l1.95,0.54l0.81,1.65l0.86,0.74l5.67,1.0l1.08,-0.16l1.04,-0.81l0.65,-2.67l0.5,-0.68l2.52,-0.5l-0.24,2.59l0.32,0.65l2.29,0.98l1.23,-0.39l0.06,0.28l-0.47,0.73l-1.64,-0.01l-1.21,1.67l-0.94,2.61l0.78,2.06l0.54,0.75l2.28,1.54l0.5,1.22l1.44,1.4l0.56,-0.04l1.5,-1.02l1.08,-1.87l1.13,1.79l0.1,1.35l0.71,1.7l-1.66,1.34l-0.33,3.86l0.52,0.44l1.25,0.07l1.17,1.92l1.59,0.55l0.03,3.2l1.07,0.14l1.29,-1.03l1.02,0.87l0.0,2.34l0.46,1.2l-0.33,1.36l0.26,0.43l1.46,0.1l1.41,0.86l2.79,-0.78l2.48,3.21l1.08,0.17l1.17,-0.81l2.08,1.91l1.71,0.9l0.52,0.58l0.09,1.77l0.56,0.94l1.07,0.46l1.24,-0.62l0.32,0.13l0.75,0.47l1.19,2.04l1.06,0.7l1.04,2.54l0.7,3.74l0.67,0.28l0.99,-0.26l1.0,1.07l0.15,0.89l-2.47,4.86l-0.69,0.73l-2.4,0.5l-3.97,3.3l-2.47,-0.52l-1.06,0.61l-0.17,1.4l2.3,2.09l0.7,0.27l2.5,-0.14l1.17,0.57l-0.52,0.85l-1.21,0.63l-1.38,0.14l-0.87,-0.73l-0.66,-0.14l-0.64,0.34l-0.43,0.83l0.19,3.95l0.98,1.17l0.6,2.21l0.72,1.01l-0.37,1.38l-0.01,2.02l-1.86,0.34l-2.66,1.26l-0.98,0.85l-1.36,0.17l-2.94,1.25l-0.44,1.12l0.24,2.28l1.08,1.72l-0.69,1.24l-1.5,0.35l-0.49,0.63l0.39,1.13l1.62,2.41l0.55,0.29l5.43,-1.52l3.48,0.09l1.05,-0.57l1.48,0.8l2.63,-0.9l0.24,0.98l-1.57,1.06l-3.99,1.1l-1.51,-0.44l-0.73,0.2l-2.61,2.26l-1.23,3.23l-2.07,0.72l-0.67,-0.54l-0.58,-0.03l-0.41,0.34l-0.93,2.34l-2.01,1.14l-0.89,-0.22l-0.84,0.23l-2.12,-1.04l-0.82,0.35l0.24,1.02l1.22,1.18l1.38,0.77l2.01,-0.03l1.03,1.36l1.56,0.58l2.32,2.59l0.99,2.76l0.19,3.31l-0.49,0.92l-2.42,2.07l-0.13,1.4l-0.42,0.84l-2.66,1.32l-1.84,0.02l-1.33,-1.63l-3.25,-1.89l-1.11,-1.53l-0.78,0.14l-0.93,1.49l-1.29,0.62l-0.04,0.76l1.28,0.48l0.25,1.12l0.99,0.4l0.28,1.19l-2.99,5.31l0.78,1.33l0.23,1.97l-0.49,1.57l0.17,0.94l-3.44,-0.35l-0.69,0.66l-0.27,1.36l-1.1,0.52l-0.38,-0.06l-0.01,-1.51l-0.72,-0.56l-1.37,-0.12l-0.43,0.32l-0.21,0.95l-0.95,0.04l-0.36,-1.68l2.24,-1.3l0.45,-0.95l-0.35,-0.68l-1.23,-0.09l0.08,-1.11l-0.81,-0.47l-2.07,1.39l-1.14,-0.0l-0.65,1.29l-1.14,-0.15l-0.55,0.41l-0.11,0.95l1.46,1.36l0.23,1.61l-1.88,0.66l-1.35,-0.06l-0.65,0.32l-1.02,-0.24l-1.45,0.83l0.73,-2.93l0.57,-1.06l-0.41,-0.59l0.18,-1.49l0.99,-2.09l0.98,-0.77l1.51,-0.17l0.65,-0.65l-0.08,-1.64l-0.77,-1.03l0.99,-1.77l-0.03,-2.84l0.62,-1.11l-0.07,-2.45l1.33,-1.05l-0.21,-0.59l-0.63,-0.42l-0.03,-1.1l-0.67,-0.08l-0.38,0.46l-0.11,-0.45l0.53,-1.02l-0.21,-0.61l-1.26,0.33l0.35,-1.15l-0.63,-0.76l1.16,-0.71l0.28,-0.98l-0.44,-0.43l-1.52,0.3l-0.45,-0.77l-1.18,-0.59l1.25,0.19l0.67,-0.14l0.43,-0.53l-1.08,-2.77l-0.57,-0.44l-1.51,0.57l-0.74,-0.19l0.11,-0.83l-0.45,-0.52l-0.52,-0.03l1.22,-0.68l-0.09,-0.44l-1.49,-0.75l-1.09,-0.93l-0.03,-0.45l-0.63,-0.3l-0.58,0.41l-0.15,-0.32l-0.44,-1.87l1.42,-0.28l0.28,-0.74l-0.56,-0.42l-1.68,0.12l1.8,-0.54l2.67,-1.74l0.35,0.25l0.59,-0.15l0.08,-1.13l-0.83,-0.39l-2.31,0.85l-1.68,1.13l0.77,-1.49l2.09,-1.65l2.56,-1.29l1.44,-1.98l1.44,0.24l2.03,-0.72l0.96,-0.67l4.65,-1.88l0.51,-0.51l0.13,-0.73l-0.86,-0.4l-3.05,1.6l-2.75,0.95l-2.09,-0.31l-1.84,0.69l-1.99,-0.44l-1.81,0.3l-1.83,-0.23l-2.19,0.51l-0.03,-0.91l0.75,-1.97l0.26,-2.24l0.6,-0.39l1.0,-2.09l0.74,-0.36l1.38,-0.01l0.52,-0.51l0.26,-0.88l0.74,-0.47l-0.31,-0.63l-1.03,0.01l-0.6,0.71l-2.18,0.28l-2.07,1.63l-0.98,-1.7l1.19,-5.61l0.93,-1.11l0.97,-0.45l1.83,0.91l0.97,-0.07l1.05,0.62l0.56,-0.08l1.83,-2.13l0.87,-0.16l1.4,0.83l0.95,-0.34l0.39,-1.48l-0.64,-1.05l-0.97,0.51l-1.22,-0.43l-0.84,0.08l-1.89,0.94l-2.79,-0.93l-1.08,0.05l-1.68,-0.54l-0.77,0.2l-1.65,1.38l-0.67,0.2l0.15,-0.47l-0.39,-0.52l-1.99,0.41l-0.25,-1.46l0.75,-0.74l0.1,-0.66l-0.41,-0.73l-0.48,-0.12l-1.3,0.92l-0.97,2.53l-1.14,-0.05l-0.41,-1.1l-0.83,-0.23l-1.09,0.05l-0.53,0.76l-1.33,-0.02l-0.2,0.66l0.68,0.67l1.07,0.28l0.85,-0.5l0.31,0.91l0.9,0.39l1.02,-0.03l0.24,1.05l-0.28,3.28l-1.38,1.94l-1.79,0.18l-0.67,0.89l-0.99,-0.87l-1.35,-0.09l-0.31,0.32l0.18,0.41l0.66,0.43l-0.97,-0.27l-0.45,0.17l0.18,0.63l-1.59,0.61l0.15,0.67l1.89,0.64l1.44,-0.1l0.69,0.88l-0.18,0.92l-1.97,-1.61l-0.75,-0.2l-0.45,0.23l-0.2,1.02l1.11,0.46l0.3,0.48l-2.34,-0.84l-0.76,0.39l0.16,2.39l0.61,0.07l0.52,0.59l1.44,-0.43l1.41,0.38l1.26,-0.46l0.97,1.2l0.7,1.57l0.66,0.39l0.82,0.02l0.65,0.95l0.03,0.91l-0.66,0.75l-1.0,3.65l-2.24,2.74l-0.51,1.07l-1.35,1.36l-0.58,2.43l0.41,1.27l-3.25,1.99l-2.05,0.24l-4.99,3.12l-1.45,0.04l-2.41,1.15l-1.67,1.19l0.07,-0.5l-1.13,0.05l-1.81,1.46l-0.9,1.36l-4.4,1.16l-5.39,2.64l-1.52,0.13l-0.92,0.73l-2.44,0.05l-0.65,0.93l-3.65,0.22l-0.99,-0.18l-0.85,-0.59l-1.16,0.23l-1.21,-0.86l-4.8,-1.96l-2.71,-1.5l-1.64,-1.54l-1.94,-0.78l-8.52,-7.09l-3.03,-3.95l-3.49,-3.74l-0.87,-1.33l-0.17,-0.96l-1.73,-1.02l-3.88,-4.04l-1.94,-1.14l-2.67,-3.2l-1.63,-1.0l-0.84,-1.01l-0.18,-1.89l-0.66,-0.19l-0.63,0.59l-0.54,-0.17l-4.18,-3.73l-1.45,-1.96l-1.46,-1.14l-1.7,-2.63l-1.65,-1.48l-1.47,-2.81l0.88,-3.29l0.5,-0.76l1.32,-0.83l-0.26,0.75l1.01,1.24l0.67,0.08l1.02,-0.44l0.83,0.17l0.94,-0.69l0.25,0.21l-1.03,2.68l0.24,0.84l1.52,1.23l2.4,-0.38l1.52,-0.7l0.65,-0.71l2.26,-0.04l1.51,-0.42l1.45,-1.37l0.19,-0.7l-0.34,-1.28l0.36,-0.06l0.3,2.26l1.88,0.7l0.59,-0.29l0.11,-0.39l0.69,-0.13l0.66,-0.9l0.59,0.21l0.46,-0.2l0.83,-2.0l1.53,1.64l0.7,-0.0l0.95,-1.43l1.58,-0.33l2.54,-2.09l2.6,-0.59l2.59,0.34l1.25,-0.49l4.5,-7.15l0.16,-1.52l1.55,-2.48l2.22,-1.93l1.09,0.04l0.73,-0.69l0.69,-1.43l0.07,-0.9l-0.87,-2.13l-1.25,-0.94l-2.24,1.56l-0.43,0.78l0.33,1.53l-0.31,2.26l-1.2,0.23l-0.53,-0.37l-0.68,0.08l-0.97,-0.5l-1.1,-1.31l-0.65,0.29l-0.22,1.03l-1.45,0.21l-0.85,-0.55l-0.06,-0.82l-0.53,0.16l-0.65,1.13l0.61,0.91l-1.78,0.22l-2.05,0.8l-5.13,1.18l-2.35,1.7l-1.17,1.86l-1.81,-0.42l-2.04,-0.02l-0.85,-0.55l-1.78,-0.11l-5.03,-1.67l-4.08,-0.59l-4.99,-3.19l-5.31,-2.24l-6.42,-4.41l-0.28,-0.83l-0.74,-0.31l-0.42,-0.6l0.49,-0.71l0.1,-0.83l-0.57,-0.36l-1.75,0.26l-0.15,-0.25l0.45,-0.89l1.3,-0.27l0.19,-0.55l-1.43,-1.28l-1.29,-0.24l-0.08,-0.55l0.78,-0.72l-0.27,-0.47l-1.15,-0.11l-0.95,0.55l-0.06,-1.22l-1.08,0.26l1.83,-2.32l-0.14,-0.36l-0.86,-0.1l-0.56,-0.78l-0.49,-0.1l-0.21,0.45l0.29,1.18l-0.41,0.11l-0.0,-3.49l2.18,0.23l0.39,-0.38l0.04,-0.61l-0.48,-0.5l1.61,-0.59l1.53,-1.82l1.55,-0.78l1.08,-1.78l1.61,-0.09l3.07,-2.0l-0.09,-0.69l-0.8,-0.19l-1.32,0.28l-1.37,1.12l-2.52,0.25l-0.62,0.52l-0.65,1.24l-5.16,2.14l-2.79,3.05l0.2,0.67l-0.49,0.4l-4.27,-0.24l-0.75,-0.44ZM141.04,481.24l-0.02,0.35l-0.14,0.07l0.03,-0.2l0.13,-0.22ZM139.1,480.22l0.01,0.97l-0.7,0.34l-0.26,-0.5l0.95,-0.81ZM28.19,437.73l0.34,-0.24l-0.1,0.14l-0.23,0.1Z",
        name: "Gujarat",
      },
      "IN-RJ": {
        path: "M113.16,366.39l-0.79,-0.19l-0.82,-1.14l-3.88,0.61l-1.37,-0.78l-1.49,-0.21l-3.05,0.21l-1.75,1.08l-2.15,-0.45l-2.94,0.83l-2.75,-0.76l-1.27,-0.83l-0.91,-0.2l-1.55,-3.64l-2.68,-4.47l-2.06,-7.11l-3.54,-3.49l-0.79,-2.29l-1.64,-1.88l-0.21,-1.01l0.33,-6.6l-0.19,-1.6l-0.91,-1.04l-1.23,-0.24l-3.67,1.06l-3.52,0.09l-2.79,-0.74l-0.75,-0.92l-0.69,-1.91l-3.03,-3.12l-0.94,-1.52l-0.54,-1.56l0.29,-3.26l1.77,-3.12l0.63,-2.52l-0.28,-1.98l0.55,-1.87l-0.16,-5.57l-1.0,-1.17l-2.36,-0.91l-7.44,0.28l-1.19,-0.44l-3.46,-2.72l-4.77,-1.9l-0.82,-0.89l-0.21,-1.18l1.29,-7.93l0.8,-2.43l1.22,-2.0l8.35,-7.32l1.89,-2.92l2.65,-2.47l0.77,-1.08l2.56,-6.91l7.24,-6.53l3.37,-0.9l2.19,0.73l2.89,2.68l0.22,2.51l0.96,2.12l1.23,1.73l1.86,1.21l2.15,0.28l2.76,-0.58l7.27,-3.47l2.28,-0.75l5.18,-0.75l5.05,-0.01l9.45,-2.8l0.73,-1.01l0.37,-4.13l0.46,-1.13l2.41,-3.02l5.04,-4.28l1.5,-3.1l1.81,-6.71l0.69,-1.31l2.22,-2.6l16.76,-8.5l1.03,-0.96l1.04,-2.37l2.71,-3.73l5.61,-10.36l4.24,-13.14l5.55,-2.7l5.67,-1.24l1.25,-0.68l5.27,-4.38l0.01,1.53l-2.58,4.47l0.0,0.93l0.33,0.34l15.39,0.72l3.64,0.48l0.02,0.94l0.94,0.93l0.04,0.52l-2.13,1.4l-0.59,2.13l0.48,0.91l1.08,0.31l2.26,-0.71l0.48,-0.41l0.19,0.23l-0.67,2.55l-0.26,2.85l0.37,1.18l0.79,0.98l-0.07,1.22l-0.19,0.37l-1.73,0.3l-0.34,0.95l2.48,3.97l1.17,-0.0l0.51,-1.04l3.42,-0.01l1.87,-1.25l2.62,1.15l1.36,2.74l1.0,0.28l1.28,-0.27l0.65,1.25l0.71,0.48l2.28,-0.55l0.86,-0.67l1.03,0.64l1.26,-0.12l1.93,-1.4l-0.21,1.19l0.37,0.73l0.69,0.23l1.08,-0.74l0.54,1.48l-0.83,0.46l-0.2,0.49l0.54,1.33l0.0,1.06l1.94,2.91l1.92,0.98l-0.02,0.67l-0.77,0.56l-0.22,0.85l3.34,9.56l3.35,4.22l2.17,1.57l-0.14,0.74l0.33,0.67l1.41,0.08l2.09,0.88l2.08,1.93l2.08,2.67l1.58,2.67l-0.7,-0.71l-0.52,-0.07l-1.05,1.15l-1.53,0.73l-0.43,0.67l0.27,0.88l0.98,0.7l0.61,-0.02l0.86,-0.7l-1.13,1.37l-0.82,1.64l0.59,0.99l-0.48,0.39l-0.91,-0.04l-0.45,0.81l0.15,0.87l1.22,0.93l0.58,1.57l0.74,0.31l3.48,-0.31l1.76,1.41l1.39,-0.66l0.29,-1.0l-0.42,-1.48l-0.6,-0.68l-0.03,-1.56l-0.65,-2.07l0.15,-1.09l0.22,-0.27l1.06,0.2l1.09,-0.39l1.6,1.04l1.18,-0.25l0.39,-0.55l0.02,-0.94l-1.13,-0.83l0.85,-0.33l0.02,-0.98l0.68,0.29l2.29,-0.31l0.49,0.72l-0.59,-0.08l-0.38,0.31l0.06,0.73l0.66,0.56l-0.57,0.47l0.03,0.51l1.42,0.83l0.92,0.06l0.52,1.73l0.97,0.65l1.15,-1.04l2.04,-0.52l0.28,-0.58l-0.44,-1.85l3.39,-2.44l1.36,-1.92l1.01,-0.38l2.42,2.36l0.15,0.52l-0.65,2.79l0.52,2.35l0.19,3.84l-0.86,1.6l-0.46,2.44l0.4,1.04l-0.58,0.37l-0.03,0.84l0.72,0.56l2.1,-0.25l1.27,-1.76l2.05,-0.4l0.26,-0.81l-1.3,-0.89l0.24,-0.53l1.97,0.6l0.71,-0.1l0.6,-0.56l0.81,0.49l0.58,-0.41l0.82,0.59l0.81,-0.67l0.38,0.07l0.36,2.7l0.84,0.78l0.33,0.85l0.04,0.6l-0.52,1.02l0.73,0.91l0.01,1.61l2.3,3.01l0.95,2.22l1.87,0.74l1.89,1.31l1.14,0.19l0.15,1.49l0.75,1.73l0.61,0.61l-0.36,0.58l-1.2,0.7l-0.31,0.83l-2.57,0.82l-0.37,0.89l0.3,0.66l0.88,0.32l0.64,1.0l2.23,0.36l0.7,-0.5l0.87,1.25l-1.42,0.37l-6.42,3.0l-0.85,1.15l-0.02,2.84l0.73,0.32l0.77,-0.2l1.26,-1.79l1.15,0.07l4.09,-1.67l2.33,-1.65l2.98,0.47l0.85,0.51l1.05,-0.35l2.89,0.35l1.09,1.2l0.67,-0.29l0.09,-1.11l1.09,-0.08l1.28,-1.16l1.69,-0.04l2.02,0.57l-0.98,0.92l-1.12,0.42l-0.05,0.72l0.66,0.88l-0.85,0.24l-0.1,0.82l-1.0,-0.26l-0.95,0.2l-0.54,3.52l-0.93,0.02l-0.98,-0.46l-1.99,0.86l-1.51,0.22l-0.57,0.55l-0.21,0.79l-1.71,0.58l-0.26,0.53l0.27,0.69l-2.38,1.08l-0.92,1.0l-2.98,0.75l-3.21,2.22l-2.11,0.06l-0.56,0.59l-0.11,0.9l-2.76,0.32l-1.52,2.06l-2.32,1.81l-2.65,0.18l-0.91,0.72l-0.32,0.96l-1.97,0.47l-0.92,1.2l-1.56,1.0l-1.05,0.28l-0.68,1.19l-2.24,1.52l-0.52,1.68l-0.79,0.35l-0.93,1.01l-2.88,0.01l-0.79,1.22l-0.84,0.14l-1.36,1.03l-1.09,1.85l-0.12,1.68l-1.03,0.59l1.24,6.15l1.02,3.16l1.64,0.79l1.23,1.75l2.04,0.43l1.85,1.25l0.57,0.11l1.26,-0.41l1.39,0.2l1.84,1.04l0.77,-0.39l1.71,0.0l2.77,-1.21l2.19,0.5l1.34,-0.62l0.88,-1.95l0.69,-0.54l1.52,-0.36l0.69,0.22l0.38,0.55l-0.47,1.46l0.69,1.45l-0.15,1.82l1.16,1.77l-0.39,1.97l-1.43,1.01l-1.76,-0.7l-1.13,0.24l-1.06,-0.21l-3.5,1.17l-2.7,0.19l-4.12,1.59l-0.88,1.16l-0.03,0.67l0.99,2.1l0.11,1.21l-0.8,0.67l-1.8,0.4l-0.46,0.59l0.01,0.63l2.21,2.47l1.07,0.57l2.33,0.03l1.64,1.33l0.87,1.46l0.43,2.21l-0.59,0.95l-3.32,1.33l-0.31,-0.01l-0.09,-0.98l-0.76,-1.19l-1.72,-0.45l-0.99,0.55l0.19,7.02l0.56,1.52l1.87,2.64l-0.75,1.42l-2.66,0.44l-2.87,-1.98l-0.29,-0.38l0.59,-1.58l-0.65,-0.89l-1.49,0.26l-1.32,0.66l-0.62,0.81l-0.38,1.25l-0.93,0.27l-0.8,-1.35l-0.81,-0.46l-2.36,0.15l-2.37,-0.75l-2.62,0.03l-0.56,-0.65l-0.06,-1.39l-0.91,-0.21l-1.44,0.8l-0.41,0.77l-0.22,5.75l-0.91,1.03l-3.07,2.04l-0.18,0.86l0.58,0.69l-0.36,0.8l-2.54,1.42l-3.18,1.16l-1.39,-1.09l-0.78,0.05l-0.42,0.67l0.21,1.39l-0.75,1.99l-1.04,-0.67l-1.53,-0.23l-0.54,-1.73l-2.26,-1.43l-0.39,-0.57l-0.11,-1.38l0.73,-1.34l0.34,-0.08l2.56,1.5l0.99,-0.14l1.03,-0.78l1.53,0.76l2.78,-3.75l-0.19,-0.69l-1.38,-0.85l-0.38,-0.73l0.33,-1.04l1.14,-1.39l0.31,-1.44l-0.35,-1.02l-1.31,-0.83l-0.49,-2.5l0.29,-1.27l0.46,-0.6l2.12,0.79l0.87,-0.42l0.54,-0.87l-0.12,-3.35l-1.72,-2.18l-0.08,-1.9l-1.45,-1.82l-0.93,-0.39l-1.02,0.2l-2.12,1.19l-6.1,1.13l-1.71,-0.05l-2.46,-0.66l-2.71,0.12l-0.69,-0.28l-0.43,-0.95l1.0,-1.04l0.14,-0.7l-0.82,-1.9l1.39,1.33l1.73,0.45l2.43,-0.55l1.29,-1.43l-0.03,-0.57l-0.61,-0.38l-3.06,0.55l-1.27,-0.53l0.04,-0.32l1.57,0.36l0.71,-0.62l-0.09,-0.83l-0.78,-1.15l0.96,-1.84l-0.38,-0.68l-2.77,0.61l-2.39,-0.18l-0.87,0.22l-1.43,2.29l0.29,1.74l-0.19,0.81l-1.27,-0.2l-1.56,1.09l-2.66,-1.04l-1.24,-1.01l-1.28,-0.2l-0.46,0.24l-0.21,0.62l0.68,2.0l-0.19,1.6l0.21,0.59l3.12,0.55l1.1,-0.15l0.1,0.39l-0.55,2.44l-0.6,0.36l-1.68,0.1l-1.61,-1.83l-0.62,-1.83l-0.6,-0.15l-0.56,0.47l-0.19,2.47l0.42,1.11l-2.09,4.22l-0.12,0.98l0.53,0.75l3.35,1.05l0.25,0.61l-2.43,2.42l-0.39,1.79l-0.73,1.25l0.16,0.52l0.56,0.3l2.45,-0.12l1.2,0.69l0.89,3.8l2.05,2.4l-0.64,1.04l-1.18,3.43l-0.18,1.43l0.11,2.2l0.8,1.33l0.19,1.94l-2.53,4.99l-0.87,0.81l-5.89,2.59l-2.01,1.8l-1.52,2.59l0.02,1.08l0.6,0.72l2.45,0.79l1.39,0.05l1.5,1.36l-2.98,1.57l-1.93,0.47l-2.21,1.15l-2.7,-0.33l-1.68,0.98l-0.59,-0.97l-0.83,-0.47l-1.34,-2.19l-1.43,-0.75l-1.43,0.61l-0.48,-0.26l-0.72,-2.86l-2.18,-1.34l-2.15,-1.97l-0.91,-0.2l-0.73,0.85l-0.66,-0.04l-2.15,-2.97l-0.57,-0.34l-2.93,0.76l-1.14,-0.82l-1.17,0.04l0.32,-1.25l-0.46,-1.22l0.13,-1.76l-0.24,-0.9l-1.4,-1.24l-0.65,0.06l-1.41,1.07l0.32,-2.39l-0.31,-0.73l-1.75,-0.71l-1.19,-1.94l-1.47,-0.23l0.28,-3.15l1.47,-1.08l0.28,-0.53l-0.77,-1.97l-0.12,-1.42l-1.32,-2.1l-0.38,-0.24l-0.65,0.19l-1.13,1.93l-1.34,0.87l-0.98,-1.08l-0.62,-1.36l-2.63,-2.03l-0.7,-1.62l0.87,-2.35l0.88,-1.21l1.13,0.05l0.78,-0.31l0.62,-1.27l-0.18,-0.76l-0.43,-0.3l-1.27,0.38l-1.91,-0.74l0.23,-2.35l-0.43,-1.01l-1.21,-0.11l-2.26,0.63l-0.78,1.08l-0.46,2.35l-0.86,0.68l-0.6,0.06l-1.89,-0.53l-3.52,-0.4l-1.51,-2.29l-2.14,-0.65l-1.84,-1.02l-1.46,0.26l-0.78,2.15l-0.36,0.2l-0.92,-1.62l-0.24,-1.27l-1.85,-0.15l-0.62,-0.94l-1.53,-0.29l-0.97,-0.75l2.33,-0.44l0.22,-0.89l-0.68,-0.67l-4.54,0.35l-2.17,-0.71l-1.13,-1.44l-0.59,-0.29l-2.11,0.47l-1.51,1.18l-0.76,-0.09l-0.9,-0.81l-0.82,0.05l-0.91,0.64l-0.15,0.93ZM294.16,288.97l0.26,-0.35l0.11,-0.1l-0.05,0.3l-0.31,0.15ZM252.61,250.52l-0.88,-0.6l-0.15,-0.41l0.59,0.24l0.44,0.77Z",
        name: "Rajasthan",
      },
      "IN-MP": {
        path: "M191.91,423.84l-0.52,-3.36l-0.53,-1.39l0.74,-0.61l0.77,-0.34l2.88,0.29l2.23,-1.16l1.99,-0.5l3.36,-1.88l-0.0,-0.75l-1.53,-1.53l-4.03,-0.93l-0.42,-0.88l1.39,-2.39l1.85,-1.66l5.83,-2.55l1.04,-0.94l1.49,-3.12l1.15,-1.64l0.11,-1.95l-0.24,-1.12l-0.77,-1.25l-0.08,-1.88l0.16,-1.29l1.86,-4.79l-2.14,-2.67l-0.45,-2.8l-0.59,-1.21l-1.63,-0.91l-2.47,0.1l0.66,-1.0l0.32,-1.64l1.74,-1.48l0.81,-1.32l-0.17,-0.87l-0.45,-0.45l-3.45,-1.11l-0.08,-0.37l2.2,-4.61l-0.4,-1.42l0.1,-1.99l0.36,1.48l0.95,0.81l0.7,1.18l0.53,0.26l1.56,-0.03l1.01,-0.34l0.72,-0.72l0.5,-2.94l-0.75,-0.84l-1.19,0.14l-2.6,-0.34l0.17,-1.7l-0.66,-1.97l0.84,0.14l1.09,0.93l2.15,1.06l1.16,0.09l1.62,-1.1l1.02,0.31l0.63,-0.38l0.36,-1.3l-0.29,-1.62l1.1,-1.75l2.84,0.09l2.19,-0.57l-0.84,1.67l0.9,1.76l-1.84,-0.24l-0.48,0.64l0.06,0.81l0.84,0.71l1.12,0.24l2.91,-0.55l-1.3,1.1l-1.61,0.23l-1.34,-0.35l-1.47,-1.38l-0.77,0.01l-0.33,0.88l0.81,1.84l-0.85,0.94l-0.32,0.92l0.8,1.39l1.08,0.43l2.69,-0.13l2.41,0.65l1.95,0.06l6.25,-1.16l2.89,-1.35l0.81,0.55l0.9,1.26l0.02,1.76l1.69,2.09l0.14,2.99l-0.72,0.67l-1.35,-0.77l-1.15,0.13l-0.74,0.98l-0.34,1.56l0.56,2.82l1.31,0.91l0.28,0.62l-0.23,1.1l-1.45,2.03l-0.07,0.88l0.25,0.76l1.62,1.36l-2.15,2.93l-1.36,-0.75l-1.75,0.95l-3.0,-1.53l-0.78,0.44l-0.86,1.74l0.13,1.58l0.39,0.76l2.43,1.6l0.49,1.72l0.33,0.26l1.63,0.23l0.86,0.6l0.71,0.05l0.53,-0.62l0.69,-1.91l-0.18,-1.56l1.04,0.97l0.88,0.15l3.38,-1.22l2.74,-1.55l0.62,-1.43l-0.58,-1.02l2.89,-1.87l1.22,-1.46l0.23,-5.8l1.25,-0.97l0.03,1.13l0.96,1.07l0.65,0.22l2.18,-0.18l2.45,0.76l2.27,-0.16l0.37,0.22l0.5,1.22l0.8,0.37l1.54,-0.47l0.94,-2.01l2.1,-0.79l-0.46,2.16l2.85,2.18l0.96,0.53l3.22,-0.59l1.09,-2.16l-2.28,-3.57l-0.43,-4.0l0.27,-1.37l-0.24,-1.82l1.59,0.28l0.46,1.83l1.11,0.44l3.72,-1.46l0.82,-0.85l0.14,-0.79l-0.48,-2.47l-1.05,-1.74l-1.9,-1.51l-2.48,-0.08l-0.78,-0.44l-1.9,-2.1l0.23,-0.33l1.92,-0.41l0.89,-0.95l-0.08,-1.74l-0.97,-2.28l0.51,-0.72l3.91,-1.51l2.67,-0.19l3.37,-1.16l1.06,0.21l0.95,-0.26l1.95,0.71l1.88,-1.18l0.37,-0.58l0.33,-2.13l-1.25,-2.17l0.23,-1.44l-0.69,-1.42l0.48,-1.43l-0.97,-1.29l-1.87,-0.11l-1.6,0.8l-0.94,1.95l-0.61,0.55l-2.56,-0.43l-2.91,1.24l-1.6,-0.03l-0.73,0.39l-1.59,-1.02l-1.63,-0.22l-1.33,0.41l-1.98,-1.3l-1.68,-0.23l-1.39,-1.83l-1.51,-0.67l-0.88,-2.84l-1.3,-5.49l1.02,-0.67l0.31,-2.18l0.62,-1.04l1.1,-0.9l1.23,-0.38l0.55,-1.06l2.42,0.18l0.59,-0.28l0.95,-1.02l0.89,-0.44l0.58,-1.75l2.19,-1.47l0.56,-1.08l0.9,-0.2l1.61,-1.02l0.91,-1.21l2.0,-0.48l0.62,-1.26l0.58,-0.41l2.55,-0.13l2.61,-2.01l1.39,-1.95l2.46,-0.14l0.69,-0.61l0.16,-0.98l2.14,-0.08l3.22,-2.23l3.09,-0.81l0.88,-0.97l2.69,-1.32l-0.1,-1.03l1.58,-0.6l0.61,-1.23l1.4,-0.18l1.79,-0.82l1.11,0.48l1.32,-0.23l0.74,-2.26l-0.13,-1.3l1.54,0.32l0.58,-0.57l0.06,-0.52l1.15,-0.19l1.1,0.21l1.15,-1.25l2.21,0.06l0.6,0.87l1.21,0.11l1.07,1.0l1.77,0.32l1.5,0.84l1.12,-0.0l0.65,-0.6l1.15,0.01l1.42,-0.73l0.31,0.53l0.62,0.09l0.33,-0.27l0.47,0.74l0.85,0.09l2.08,1.98l1.97,-0.15l0.92,3.46l2.47,4.19l0.31,1.69l-0.36,1.13l0.63,0.93l-1.09,1.53l-1.67,0.49l-0.96,0.95l-0.03,1.06l0.54,0.96l-0.96,0.59l-0.16,1.24l1.03,1.32l-1.17,1.84l-1.04,2.8l-1.41,1.74l-0.79,2.01l-2.15,1.79l-0.42,1.83l0.82,2.19l-0.08,0.67l-0.87,0.47l-3.09,0.63l-2.0,1.1l-2.01,-0.16l-3.47,0.83l-0.72,0.75l-0.3,1.66l-0.43,0.6l-2.48,2.28l0.14,1.03l1.3,1.67l2.05,4.43l-1.1,3.43l0.3,1.25l-0.41,1.16l-1.97,1.91l-2.39,1.59l-0.5,1.2l1.73,2.46l0.18,1.91l0.95,1.42l-0.09,1.58l0.4,0.6l-0.05,0.55l-1.41,2.68l0.63,1.3l0.81,0.48l0.33,0.83l2.13,1.35l-0.66,2.0l1.03,1.4l1.2,0.28l1.31,-0.64l0.68,-0.76l0.44,-1.78l0.54,-0.38l1.29,0.66l3.7,3.07l1.13,0.44l1.71,0.11l0.29,1.21l0.51,0.5l1.39,0.24l2.0,-1.84l1.09,-2.43l1.6,-1.48l0.61,-1.1l0.21,-1.63l-0.77,-0.66l-1.18,-0.2l0.18,-1.5l-0.89,-1.24l-0.76,-1.86l-1.56,-0.8l-2.6,0.54l-0.4,-0.6l-0.1,-0.69l0.64,-1.42l-0.4,-4.14l-2.32,-3.07l-0.93,-5.45l-1.38,-3.44l-1.82,-1.91l0.46,-1.11l1.51,-1.78l-0.04,-0.98l0.34,-0.29l1.63,0.2l1.78,1.89l1.0,-0.11l0.24,-0.64l-0.22,-1.03l0.54,-1.16l-0.8,-1.21l0.38,-1.0l1.02,-0.28l0.21,2.56l0.28,0.42l0.67,0.24l1.06,-0.34l0.39,-0.55l0.01,-2.04l0.8,-1.02l0.43,0.73l-0.35,2.05l0.5,0.45l1.11,-0.0l-0.13,1.21l-0.65,1.35l0.06,1.31l-1.51,1.2l-0.74,1.59l0.05,1.24l0.86,0.77l1.08,-0.45l0.92,-1.08l1.46,-0.63l0.23,-1.37l0.95,0.5l-1.07,1.61l0.14,0.88l0.53,0.5l2.51,-0.66l0.27,1.38l0.64,0.34l0.66,-0.28l0.8,-0.96l3.2,0.58l0.73,-0.83l-0.57,-2.42l0.54,0.56l0.59,0.1l1.28,-1.19l1.03,0.15l0.67,-0.35l-1.84,2.96l-0.99,1.04l-0.22,2.1l0.69,0.76l1.57,0.06l0.34,-0.27l0.21,-2.05l0.73,0.13l0.64,1.13l0.95,-0.04l2.13,-2.35l2.82,0.98l3.59,-0.24l0.55,0.59l0.71,0.2l2.3,-1.07l-0.01,-0.76l-0.98,-1.46l0.31,-0.53l1.98,-0.41l3.08,-2.33l2.01,-0.92l1.31,0.28l1.46,-1.05l0.73,-1.06l0.9,0.24l1.34,-0.26l0.81,1.27l0.36,2.78l1.13,0.71l0.62,0.83l0.69,-0.02l0.56,1.65l-1.97,1.05l-1.44,1.71l-0.96,-0.01l-0.34,0.31l0.1,1.75l0.99,1.21l1.85,-0.32l1.64,0.37l0.55,-0.44l0.02,-0.69l0.89,0.96l1.03,-0.11l1.14,-0.73l0.14,-0.7l-1.44,-0.98l-0.23,-0.67l1.41,0.35l0.98,-0.14l0.49,-0.56l-0.02,-0.89l0.91,1.49l1.19,1.06l2.66,-0.26l0.57,-0.45l-0.02,-0.8l-1.53,-1.17l2.9,-0.26l0.82,-1.55l0.76,-0.22l0.37,0.5l-0.88,2.05l-0.17,1.21l-0.87,0.88l-0.27,1.12l-0.71,0.9l-0.01,0.88l0.65,0.49l1.01,0.13l2.85,-0.5l1.42,1.01l1.82,-0.42l2.77,1.85l0.48,-0.11l0.95,-1.14l1.13,-0.17l0.55,-0.44l-0.19,-1.79l1.86,-2.5l0.21,-1.01l-0.21,-1.35l1.88,-0.09l1.44,0.45l0.14,1.38l1.85,0.38l1.28,-0.26l0.5,-0.44l-0.0,-0.94l-0.92,-0.68l2.58,-0.76l1.08,2.35l-0.2,0.73l0.3,0.56l2.82,0.72l1.28,-0.01l0.48,1.09l0.94,0.37l1.83,-0.48l0.75,0.19l0.86,1.37l-0.24,1.06l0.26,0.65l2.72,2.08l2.45,0.41l2.82,1.69l0.96,-0.18l1.48,-1.0l-0.13,2.39l0.86,0.49l0.92,-0.62l0.09,1.92l0.52,0.37l0.8,-0.12l0.35,0.24l-0.59,1.47l0.13,0.65l3.0,0.17l0.76,-0.21l0.66,-0.93l-0.07,-1.74l4.89,1.07l3.33,-1.1l0.09,1.22l0.4,0.33l1.39,0.15l0.54,1.49l0.68,0.8l-0.36,0.47l-1.52,-0.19l-0.64,0.68l0.2,2.3l-0.31,2.05l0.32,0.63l0.66,0.4l0.01,2.03l-0.73,1.7l-0.24,1.96l-0.48,0.42l-0.99,0.18l-0.36,0.6l0.51,1.13l1.45,1.26l-0.08,1.5l1.94,2.08l-0.51,1.73l-3.3,1.36l-0.49,0.55l-0.31,1.33l-2.3,1.07l-1.01,0.87l-0.88,0.08l-7.25,-0.43l-1.86,-0.49l-3.75,-0.02l-2.21,-1.13l-2.21,-0.16l-3.22,1.48l-0.71,0.02l-1.74,-0.88l-1.97,-1.98l-1.49,-0.09l-0.93,0.68l0.04,1.82l1.74,3.3l0.13,0.87l-0.82,1.16l-1.16,0.74l-0.2,1.29l-0.68,0.92l1.15,2.78l0.98,0.35l3.34,-1.97l2.94,1.13l2.03,0.35l1.91,3.02l1.05,0.45l0.42,0.74l2.45,-0.02l2.02,1.71l-0.93,5.0l-0.6,1.3l-1.71,-0.05l-4.13,2.09l-0.4,0.98l0.22,2.14l-2.16,1.95l-2.51,1.09l-0.4,1.44l0.25,2.13l-0.72,1.02l0.15,1.54l-2.9,1.71l-0.81,1.84l-3.11,0.97l-3.42,2.57l-1.2,-1.63l-0.76,-0.29l-2.59,0.93l-1.23,0.78l-0.33,-0.11l-0.37,-0.87l-0.55,-0.26l-1.18,0.75l-1.36,2.21l-0.12,3.42l-0.63,1.08l-2.01,1.52l-0.47,2.63l-0.86,0.45l-0.09,0.55l0.46,1.25l-1.05,-1.17l-0.71,-0.26l-0.67,0.17l-1.14,1.39l-1.27,2.61l-0.33,1.02l0.08,3.35l-0.46,1.29l-0.84,1.13l-1.17,0.26l-0.81,1.51l-0.42,4.31l0.2,2.79l-0.79,3.1l-0.5,1.32l-1.2,0.7l-4.35,-2.38l-2.47,0.26l0.66,-1.14l-0.53,-1.51l-2.06,-1.52l-0.86,-1.78l-1.97,-0.57l-1.82,-1.32l-2.9,1.1l-0.95,1.06l-2.08,0.67l-1.29,-0.44l-1.59,0.81l-1.72,0.26l-1.05,-1.58l-1.84,-0.51l-3.21,0.31l-2.72,1.46l-0.66,-2.26l-1.15,-0.86l-0.48,-0.84l-1.97,-0.81l-2.96,-0.11l-2.32,-0.77l-0.87,0.22l-0.62,1.76l-4.01,1.3l-2.67,0.31l-2.03,0.7l-0.54,0.74l0.27,1.26l-0.51,0.33l-6.33,1.11l-4.0,-0.66l-1.57,-1.01l-0.97,-0.01l-1.3,0.64l-0.55,-3.04l-0.83,-0.67l-1.23,-0.09l-0.76,0.24l-0.93,1.06l-3.57,1.12l-1.56,1.75l-1.72,1.11l-5.31,1.96l-1.03,0.07l-2.53,-0.84l-2.73,1.48l-0.66,-0.51l-1.65,-0.17l-1.51,0.48l-1.41,-1.01l-0.7,0.0l-0.39,0.34l-1.68,-3.06l0.14,-0.72l3.36,0.16l0.93,-0.48l-0.89,-5.48l-1.4,-0.87l-0.32,-0.69l-0.8,-0.52l-4.42,-0.24l-0.78,0.24l-0.86,0.87l-1.11,0.34l-0.85,0.92l-1.1,-0.81l-2.12,0.08l-2.74,1.01l-3.44,2.43l-2.09,0.11l-1.09,0.46l-0.85,1.04l-0.3,2.63l-1.62,2.5l-2.88,2.12l-0.14,0.51l0.61,1.53l0.02,1.19l-0.72,1.14l-3.85,0.87l-1.98,2.37l-1.61,0.61l-2.78,0.38l-2.94,-0.34l-1.16,-0.59l-1.08,-1.5l0.86,-0.25l0.29,-0.6l-0.36,-2.94l-1.17,-2.7l-0.64,-0.52l-1.32,0.08l-2.71,-0.81l-2.23,-0.27l-2.14,0.52l-3.25,0.17l-2.54,-0.23l-3.15,0.44l-6.44,-0.32l-3.07,-0.67l-2.27,-1.01l-1.93,-3.14l-1.84,-1.33l-1.81,-0.18l-1.57,-0.99l-1.27,-0.25l-4.77,0.17l-1.46,-1.1l-2.02,-0.68l-2.12,-1.56l-0.9,-2.61l0.18,-3.47l-0.27,-1.11l-2.52,-2.68l-1.03,0.05l-1.18,1.1l-1.83,0.63l-0.3,0.75l-0.91,0.4l-1.79,0.03l-1.41,-0.68l0.36,-3.59l-0.75,-1.1l-0.65,-2.31l-0.92,-1.03l-0.2,-3.47l0.42,-0.63l1.49,0.91l2.06,-0.4l1.35,-0.99l0.42,-1.19l-0.17,-0.49l-0.87,-0.58l-3.69,-0.2l-2.05,-1.99l0.61,-0.64l1.89,0.55l1.15,-0.22l3.77,-3.23l1.72,-0.16l1.38,-0.98l2.78,-5.33l0.07,-0.76l-1.19,-1.96l-0.93,-0.37l-0.9,0.29ZM342.94,345.9l-0.07,-0.47l0.06,-0.58l0.99,-1.54l-0.98,2.59Z",
        name: "Madhya Pradesh",
      },
      "IN-OR": {
        path: "M408.6,584.62l0.87,0.38l0.7,-0.57l0.17,-1.23l0.78,-1.54l0.14,-2.48l0.72,-1.11l0.53,-2.11l-0.29,-1.58l0.84,-1.84l0.76,0.02l2.17,-0.82l1.07,-1.24l1.83,-0.69l1.82,-2.82l4.8,-4.17l-0.13,-1.22l-1.17,-0.95l0.98,-0.36l1.48,-1.56l2.18,-0.42l1.07,-1.66l0.73,0.55l0.81,-0.24l0.83,-3.98l0.54,-0.67l1.08,-0.58l0.29,-0.71l-0.1,-2.84l-0.74,-1.34l-0.25,-1.24l-0.98,-0.82l0.26,-1.36l-0.7,-1.85l0.8,-2.84l-0.22,-0.61l-0.86,-0.66l0.89,-0.73l0.05,-0.95l-0.72,-0.89l-1.26,-0.42l-0.99,-1.74l-1.27,-0.51l0.35,-3.73l-0.41,-1.94l0.27,-2.32l-0.75,-0.79l-1.7,-0.38l-0.94,-1.68l-2.97,-1.76l-0.47,-0.78l0.14,-0.74l1.38,-2.44l0.97,-0.56l1.15,-1.25l1.66,1.78l0.44,1.11l1.07,-0.03l0.97,-1.34l1.85,1.55l0.52,0.87l1.61,0.18l2.16,4.28l0.64,0.59l0.76,-0.22l1.26,-1.7l3.32,0.37l1.51,0.69l1.33,0.07l-0.14,2.05l0.48,0.54l0.74,-0.1l3.64,-2.46l0.2,-0.83l-0.84,-1.09l0.5,-2.36l-0.44,-1.37l-1.49,-0.16l-1.2,0.53l-1.26,-1.05l-2.25,-0.06l-2.22,-1.3l0.69,-3.13l-0.27,-3.86l-0.48,-1.12l0.27,-3.95l-0.1,-0.42l-0.55,-0.27l-0.35,0.21l-0.3,-1.32l-0.82,-0.26l-0.35,-0.87l0.85,-4.04l-0.72,-2.56l-0.04,-3.65l0.23,-0.22l0.93,0.25l0.06,0.91l0.5,0.38l1.85,-0.78l1.59,-2.19l1.54,-1.08l2.51,-4.8l0.2,-1.41l2.78,-0.21l1.21,0.48l1.08,-0.43l4.28,-0.65l3.13,1.97l2.46,-0.12l1.12,-0.71l0.83,-1.15l0.91,-2.52l0.94,-1.38l-0.0,-1.07l0.48,-0.85l2.25,0.71l0.98,-0.23l0.33,-0.74l-0.12,-1.25l-1.59,-1.85l-0.16,-1.47l0.71,-2.42l3.3,-5.53l0.24,-1.66l1.26,0.23l0.4,-1.1l0.9,-0.08l0.47,-0.83l0.2,-2.45l-1.77,-1.6l0.22,-1.51l1.57,-1.15l-0.05,-0.68l-0.65,-1.0l2.18,-3.06l2.99,-1.33l3.65,-3.0l2.69,-0.52l0.96,-0.56l1.06,-1.28l0.29,-0.96l-0.2,-1.52l-0.66,-1.22l2.36,1.1l2.44,3.59l1.03,0.81l1.71,0.29l2.63,1.1l3.55,-0.27l2.45,-1.4l0.45,-1.5l6.57,-0.18l2.05,-0.74l3.38,0.91l1.21,-0.78l1.34,-0.23l2.05,-1.36l0.86,2.95l0.13,1.93l-0.32,1.19l-1.6,2.32l-1.72,3.41l0.2,0.71l0.42,0.13l1.79,-0.54l1.28,0.22l4.01,2.74l3.34,-3.21l2.5,-1.08l0.99,-0.02l3.14,1.77l3.92,1.01l2.38,-0.82l1.13,-0.8l-0.69,1.35l0.07,1.78l0.31,0.54l1.81,0.87l1.44,-0.37l1.24,-0.87l1.91,-2.83l0.46,-2.86l-0.71,-2.31l0.76,-1.24l0.11,-1.23l-0.34,-2.49l-1.3,-1.91l-0.08,-0.67l1.7,-0.51l0.76,-0.96l0.5,-0.16l1.56,1.77l5.7,2.91l2.44,2.6l1.27,0.35l2.8,-0.49l5.68,3.71l0.66,0.99l1.88,0.67l2.06,1.47l1.92,0.22l2.3,1.14l0.67,0.67l0.2,0.8l-0.24,2.33l1.32,1.8l1.16,0.01l1.78,-2.16l0.87,0.07l1.39,0.85l0.72,2.92l0.74,1.0l5.27,1.5l0.12,2.57l1.25,2.13l-3.71,1.5l-4.33,0.33l-2.84,1.48l-1.58,1.12l-4.5,4.76l-1.65,2.44l-0.94,2.78l0.21,2.98l3.72,8.83l-0.15,0.33l-2.19,0.13l-0.26,0.6l0.52,0.68l0.66,0.26l2.2,0.07l0.33,0.76l-0.94,-0.18l-0.86,0.63l0.29,0.63l1.57,0.73l-2.3,1.0l-5.38,4.36l-0.87,1.94l-0.14,2.13l0.59,0.38l1.32,-0.93l0.32,0.19l-0.66,0.93l-2.07,1.29l-0.17,0.9l-1.96,1.18l-3.56,1.2l-0.62,0.5l-0.99,3.01l-2.18,2.22l0.07,0.88l-3.15,-2.37l-2.09,-0.05l-0.98,-0.98l-0.43,-1.27l-0.55,-0.22l-0.38,0.27l-0.24,0.91l0.53,1.5l1.8,1.31l2.24,0.53l0.58,1.03l1.33,0.59l-2.46,1.35l-5.48,2.09l-1.05,-0.38l-0.74,0.47l-5.64,1.45l-1.8,0.97l-1.66,0.07l-2.84,1.15l-0.84,-0.01l-2.11,1.23l-2.56,0.82l-0.12,-0.91l1.47,-0.48l0.08,0.59l0.46,0.02l1.85,-1.08l0.04,-4.51l-0.63,-0.57l-2.59,-0.65l-1.42,0.22l-3.64,3.22l-1.69,0.52l-2.08,2.43l0.02,0.78l-1.97,2.76l0.13,1.11l-0.98,0.61l-0.34,0.66l0.22,0.87l0.6,0.2l-0.13,0.36l0.47,0.55l0.96,-0.7l0.74,-0.13l-3.75,3.53l-6.09,4.87l-2.33,2.95l-0.87,-1.1l-2.14,-0.04l-0.56,0.34l0.14,1.16l-0.34,0.71l-0.9,-0.27l-2.35,1.12l-1.26,1.04l-1.69,0.08l-0.26,0.34l0.17,0.89l-0.33,0.72l0.05,0.87l-1.0,1.23l-1.18,0.2l-0.74,1.7l-1.32,1.09l-4.68,0.75l-2.81,-1.03l-5.13,0.38l-1.2,-1.49l-1.61,-4.45l-1.01,-0.54l-1.01,0.18l-0.5,0.86l0.2,1.32l-0.8,-2.26l-2.99,-3.94l-0.88,0.3l-0.51,1.45l-1.24,0.87l-0.57,1.24l-0.56,-1.57l-1.12,-0.44l-0.41,0.64l0.3,1.21l-0.52,0.7l0.12,0.82l-3.07,-1.25l-1.04,0.21l-0.61,0.54l-0.01,0.6l0.92,1.68l0.72,0.88l0.72,0.22l0.53,0.86l-1.83,0.9l-2.19,1.79l-1.56,0.69l-1.43,-0.77l-1.03,0.31l-3.19,3.91l-0.17,2.09l0.81,1.42l1.02,0.22l-1.53,2.04l0.32,1.52l-0.23,0.78l-0.89,0.07l-1.43,0.66l-1.31,0.07l-0.23,-0.16l0.01,-1.09l-0.37,-0.38l-2.06,-0.8l-0.93,0.12l-0.62,0.52l0.12,1.64l-0.33,0.6l-3.15,1.78l-0.71,1.76l-1.31,-0.43l0.47,-2.32l-0.48,-0.89l-2.17,-2.19l-0.29,-2.87l-2.46,-0.5l-2.38,3.46l-0.09,1.68l-0.5,1.42l0.29,1.04l-1.51,2.72l0.14,0.92l1.34,1.18l-0.86,0.75l0.1,2.0l-1.65,0.16l-0.93,1.4l-1.59,-0.19l-1.48,-1.2l-1.32,-0.39l-1.7,0.2l-1.56,1.08l-2.27,0.35l-3.0,1.96l-2.65,1.29l-1.11,1.17l-1.46,0.31l-2.23,1.63l-1.94,-0.89l-0.68,0.23l-0.52,1.0l-2.17,-0.55l0.13,-1.87ZM525.81,532.38l-0.05,-0.65l0.8,-0.25l0.04,-0.71l-0.49,-0.28l1.13,-1.12l-0.4,-0.64l0.3,-0.48l1.49,0.43l1.55,-1.12l1.08,-0.07l0.05,0.45l-1.37,1.35l-0.86,-0.66l-0.66,0.66l-0.63,0.11l0.75,1.39l-2.7,1.6Z",
        name: "Orissa",
      },
      "IN-TN": {
        path: "M249.84,785.28l-0.33,-0.95l0.1,-1.86l1.6,0.49l1.48,-0.2l1.11,-1.27l1.32,-0.6l0.3,-1.05l1.07,-0.88l1.68,0.16l0.34,0.48l0.05,1.28l0.84,0.64l5.71,-0.26l2.06,0.51l0.81,-0.69l0.4,-2.03l2.08,-2.99l2.57,-0.44l2.02,1.94l0.79,0.31l0.61,-0.27l0.51,-1.19l2.74,-0.17l1.14,-0.44l2.26,1.02l2.41,-0.26l1.0,-0.81l1.68,-3.48l0.65,-0.34l3.83,-0.43l1.03,-0.61l3.07,-4.27l0.07,-0.85l-1.01,-1.75l-1.33,-0.89l-1.06,-0.22l-5.49,-0.07l-0.44,-1.25l2.84,-2.25l1.44,-2.2l0.47,-2.63l-0.45,-0.65l-0.84,0.03l0.12,-0.69l-0.38,-1.02l1.14,-3.22l2.33,-0.11l2.46,-1.36l-0.16,-1.26l1.0,-1.73l0.33,-1.31l1.11,-0.38l1.66,-0.0l1.7,1.66l1.0,0.45l0.79,-0.3l0.66,-1.11l0.44,0.08l2.35,1.72l2.91,0.96l1.35,1.89l2.47,1.79l2.53,0.3l0.89,-0.42l1.33,-1.4l0.29,-1.48l0.98,0.03l1.45,-1.18l1.06,-2.6l1.03,-4.37l0.4,-0.53l1.29,-0.38l0.6,-0.96l3.87,-0.67l0.65,1.17l0.79,0.15l0.91,-0.67l0.3,-1.05l0.55,-0.02l0.97,0.23l0.51,0.92l2.1,0.65l2.72,-0.3l0.76,-0.54l2.09,-2.71l1.31,0.59l0.57,-0.08l2.15,-2.17l1.18,-0.62l0.42,-0.71l-0.07,-0.91l0.47,-1.75l0.53,-0.28l1.75,0.15l1.06,1.37l0.63,0.35l2.87,-0.38l0.18,1.3l1.04,0.76l2.31,-0.02l0.42,-0.96l-1.05,-0.98l-0.01,-0.36l1.61,0.07l4.38,-2.25l0.44,-0.72l0.05,-1.3l2.65,-1.83l-0.01,-0.75l-0.67,-0.64l1.64,0.69l-0.38,1.1l0.47,0.56l3.19,0.35l1.48,-0.39l1.4,1.36l0.73,-0.21l0.37,2.77l-0.32,2.03l-0.47,0.24l-0.18,1.0l0.58,0.53l-0.78,1.59l0.16,1.33l-0.83,1.23l-1.04,9.49l-2.92,8.93l-1.83,3.47l-1.09,0.85l-1.06,1.81l-2.53,1.85l0.16,0.59l0.84,0.04l-3.55,5.53l-0.05,1.49l-0.3,0.47l-1.72,1.18l-0.44,-0.37l0.52,-1.02l-0.5,-0.57l-1.34,0.11l-1.1,-0.87l-0.45,0.2l-0.56,0.93l0.7,1.08l0.11,0.84l0.4,0.31l-0.32,1.19l0.17,0.58l1.13,0.75l2.01,0.21l-0.67,1.5l-1.05,6.13l1.05,4.71l0.4,0.35l0.61,-0.29l0.1,0.95l-2.0,0.22l-2.44,2.58l0.36,0.58l0.4,-0.05l2.7,-2.02l1.33,0.48l0.06,2.28l0.62,3.2l-0.18,5.1l-0.92,-0.09l-0.81,0.43l-1.49,-0.42l-0.49,0.56l0.19,0.5l-0.54,-0.02l-0.42,0.61l0.15,1.36l1.28,0.83l1.44,0.41l0.03,0.97l1.52,1.03l0.49,13.03l-0.26,2.66l-1.42,0.34l-0.31,-0.79l-0.71,-0.39l-3.95,-0.65l-0.57,0.16l-0.15,-0.37l-0.92,-0.24l-1.62,0.14l-0.37,0.6l-1.79,0.33l-2.01,-0.48l-3.57,2.3l-0.57,0.81l-0.07,0.98l-0.83,0.53l-0.21,0.7l0.26,2.63l0.76,1.39l-2.05,1.82l-1.8,2.46l-1.51,2.81l-1.66,1.67l-1.79,2.49l-0.15,0.98l-1.21,1.73l-0.77,3.4l0.09,0.95l0.61,1.22l3.32,3.21l1.25,0.55l2.2,0.29l-1.72,0.32l-1.86,-0.59l-2.21,-0.03l-1.0,0.68l-2.02,0.14l-2.57,0.91l-1.52,0.99l-1.66,0.14l-1.25,1.21l-5.65,0.86l-2.39,1.3l-4.3,3.53l-1.8,2.81l-0.65,3.87l0.32,0.48l-1.12,2.25l-0.31,0.0l-0.34,0.62l0.79,1.81l-0.42,3.13l-1.41,1.59l-0.66,2.01l-1.71,0.61l-5.96,3.6l-1.22,1.49l-5.3,1.31l-1.05,0.76l-0.09,0.97l-1.21,0.15l-1.8,-0.34l-4.2,-1.29l-0.71,-0.71l-1.86,-0.93l-2.94,-2.68l1.1,-0.45l0.27,-1.46l1.29,-1.9l-0.16,-1.64l1.05,-0.34l1.18,-1.84l-0.4,-1.16l-2.42,-2.44l-0.23,-1.72l1.65,-2.45l0.62,-2.26l-0.4,-0.73l-1.24,-0.88l-1.07,-2.96l1.19,-0.85l0.75,-1.07l2.53,-7.34l0.84,-1.38l0.92,-2.56l1.1,-1.19l-0.19,-1.38l-1.73,-2.54l-1.26,-0.19l-1.8,0.71l-1.71,-0.93l1.56,-5.5l-0.33,-2.9l1.03,-2.56l-1.11,-3.46l1.54,-3.34l0.06,-1.34l-0.72,-0.72l-0.37,-1.59l-0.96,-1.63l-0.72,-0.66l-1.08,0.13l-2.94,1.32l-3.15,2.41l-1.14,-0.38l-2.36,-2.12l-0.06,-1.8l-0.9,-1.93l0.55,-3.53l-0.17,-2.56l1.09,-0.6l0.57,-0.74l0.43,-3.33l-0.23,-0.65l-0.94,-0.6l-0.87,-1.77l-3.86,-1.64l-0.66,-0.88l-0.13,-0.87l0.37,-1.13l1.9,0.19l0.65,-0.91l-0.74,-0.92l-0.83,-2.15l-0.87,-0.98l0.45,-1.93l-0.71,-0.36l-1.63,0.94l-2.99,0.25l-1.41,-0.46l-1.27,0.3l0.6,-1.1l2.2,-1.72l0.28,-0.77l-0.18,-0.49l-0.71,-0.39l-1.01,-1.28l-1.19,-0.47l-1.21,-0.95l-4.71,-1.32l-0.24,-0.32ZM341.41,854.52l0.89,-0.01l1.99,-1.02l0.32,0.12l-0.32,0.93l0.54,1.1l-1.22,-0.66l-2.2,-0.45ZM352.97,822.23l0.25,0.38l-0.78,-0.16l0.52,-0.21ZM353.99,822.77l0.71,0.09l0.49,0.17l-1.19,-0.25Z",
        name: "Tamil Nadu",
      },
      "IN-AN": {
        path: "M786.03,923.93l0.01,-2.47l0.71,-1.66l1.1,-0.13l0.59,-0.57l1.24,-0.26l1.04,-0.8l0.96,0.7l0.57,1.41l0.32,2.29l1.27,2.41l0.03,1.46l-1.11,2.56l-0.1,1.29l0.41,0.66l-1.31,0.13l-0.67,1.5l0.01,-1.41l-0.81,-0.89l0.05,-0.68l-0.44,-0.46l-0.29,-1.55l-0.7,-0.41l-0.89,-2.01l-1.06,-0.91l-0.92,-0.2ZM785.02,916.8l-0.54,-1.41l0.47,-1.37l1.32,-0.39l0.58,-0.69l0.93,0.88l-0.04,0.59l-2.72,2.39ZM782.63,894.17l0.29,0.95l-0.0,0.53l-1.15,-1.01l0.86,-0.47ZM780.5,891.72l-0.4,-0.52l-0.31,-1.96l1.06,-1.6l0.69,-0.13l0.06,0.48l-0.79,1.64l0.65,1.74l-0.29,-0.16l-0.66,0.5ZM781.79,892.53l-0.6,0.48l-0.41,0.67l-0.01,-0.52l1.02,-0.63ZM777.4,894.02l0.09,1.05l1.22,0.8l0.7,1.14l-0.03,0.45l-0.93,-0.4l-1.7,0.32l-0.12,-1.23l-1.17,-0.29l0.37,-1.49l1.57,-0.36ZM770.19,887.29l-1.18,-0.38l-0.98,-1.26l-0.11,-1.42l0.4,-0.73l0.16,2.27l0.42,0.72l1.29,0.81ZM768.4,766.2l-0.53,-0.93l0.37,-1.58l0.2,0.17l-0.27,1.01l0.23,1.33ZM751.49,774.12l0.88,-1.81l1.07,1.76l0.79,-0.06l0.11,-0.27l0.28,-2.36l-0.24,-1.3l0.63,-1.54l-0.05,-3.07l0.91,-2.0l0.45,0.12l0.42,-0.38l-0.13,0.98l0.73,0.48l1.83,-0.55l0.47,-0.81l-0.31,-1.49l-0.55,-0.41l0.77,-0.26l0.05,-0.92l-0.62,-0.6l-1.27,-0.21l-0.37,-1.1l0.12,-7.3l0.85,-1.29l0.61,-0.06l0.41,-0.65l-0.14,-0.45l-0.94,-0.64l-0.3,-3.47l0.61,-0.75l0.78,-0.04l0.52,-0.68l0.41,-1.58l0.01,-1.58l0.64,-1.33l-0.17,-0.58l-0.62,-0.37l0.62,-2.2l0.77,-1.37l-0.52,-0.97l0.18,-1.42l0.66,-0.54l-0.55,-3.24l1.34,-1.74l0.16,-1.78l1.42,-1.61l0.17,-1.04l1.5,0.01l0.36,-0.57l0.61,-0.13l0.39,0.69l-0.32,1.01l0.14,3.07l0.36,0.22l-0.97,1.23l-0.37,0.19l-0.32,-0.4l-0.65,-0.09l-0.59,0.8l0.51,1.08l1.25,0.22l1.33,1.3l-0.64,1.07l-0.13,2.9l-0.46,2.09l-0.32,0.53l-0.73,-0.2l-0.43,0.42l0.01,-1.38l-0.39,-0.32l-1.19,0.78l-0.29,1.52l0.64,1.07l-0.98,-0.16l-0.37,0.28l-0.91,2.21l0.36,0.65l0.53,0.22l0.74,-0.35l1.04,1.19l0.14,1.72l-0.24,0.98l0.95,1.63l-0.54,2.9l0.5,1.29l0.04,2.05l-1.01,1.21l0.24,0.65l-0.74,0.57l-0.86,-0.65l-0.46,0.06l-0.03,0.59l-1.15,-0.04l-0.43,0.4l0.65,1.8l1.06,0.71l0.12,0.47l-0.83,0.84l0.68,1.2l-0.59,0.69l0.3,1.14l-1.88,2.04l0.04,0.7l-0.77,0.79l-1.34,0.41l-0.13,0.54l0.54,0.76l-1.11,1.91l-0.1,3.33l0.4,0.4l0.63,-0.35l0.24,-1.5l0.24,-0.04l0.31,0.28l0.02,1.58l-1.11,4.78l-1.06,0.35l-1.07,1.13l-0.28,0.88l0.14,1.02l1.12,0.1l0.35,-0.4l0.06,-0.84l0.63,-0.36l0.09,-0.39l0.16,1.37l-0.54,0.66l-0.51,2.56l-1.5,-1.08l-0.07,-0.68l-0.92,-0.79l-0.1,-0.4l0.72,-0.38l0.02,-0.66l-0.9,-0.46l-0.4,-1.88l-0.33,-0.31l-0.95,-0.05l0.1,-3.11l-1.16,-0.79ZM766.4,766.0l0.11,0.62l0.39,0.73l-0.4,-0.42l-0.1,-0.93ZM766.14,717.57l0.26,-0.08l0.11,0.23l-0.14,-0.04l-0.24,-0.1ZM764.5,769.92l0.71,-0.98l0.67,-0.02l1.15,3.22l-0.42,-0.93l-2.11,-1.29ZM758.46,855.43l1.65,1.52l-0.05,1.49l-0.73,0.79l-1.73,-0.53l-0.46,-1.12l-0.04,-0.78l0.91,-0.49l0.44,-0.89ZM756.86,735.74l-0.0,-0.0l0.0,0.0l-0.0,0.0ZM756.0,743.21l0.29,-3.46l0.53,-0.59l0.3,0.45l-0.2,2.01l-0.92,1.58ZM754.65,789.3l-1.08,-0.41l0.1,-0.42l0.79,-0.21l0.37,-0.63l-0.25,-1.63l0.26,-0.56l1.0,1.26l-0.55,1.24l0.54,0.89l-1.17,0.46ZM746.83,808.06l1.1,-0.64l0.47,-1.64l1.46,-0.96l1.09,-0.24l0.89,1.13l0.95,5.03l-1.65,1.72l-0.03,1.18l0.75,0.47l-1.33,1.68l-0.74,-0.18l-1.27,-0.94l-0.69,-0.03l-0.86,0.53l0.62,-0.89l0.47,-1.76l-0.28,-0.78l-0.88,-0.81l-0.09,-2.85ZM751.89,783.09l0.03,-0.27l0.15,0.08l-0.18,0.2ZM742.26,782.71l0.82,0.26l-0.03,0.97l-0.62,-0.14l-0.17,-1.09Z",
        name: "Andaman and Nicobar",
      },
      "IN-AP": {
        path: "M264.69,675.87l0.59,-0.76l0.07,-1.39l0.36,-0.6l2.8,1.59l2.62,0.61l1.43,-0.37l0.97,0.82l0.73,-0.01l1.54,-1.37l1.31,-2.8l0.15,-1.56l-0.84,-4.18l-0.77,-0.9l-1.69,-0.61l-0.35,-2.03l-1.24,-2.4l0.68,0.17l0.39,-0.54l-0.25,-3.31l0.26,-0.71l0.58,-0.39l1.35,0.21l0.43,-0.69l-1.06,-2.44l-0.71,-0.66l0.22,-3.36l1.07,-1.31l2.59,-1.37l1.85,-0.28l2.42,0.6l4.32,0.13l1.56,-1.78l-0.11,-5.3l0.29,-2.68l1.74,-1.65l0.23,-0.94l-0.19,-0.53l-0.65,-0.77l-1.33,-0.57l-3.05,-0.09l-2.95,-0.77l-0.81,-0.99l3.28,-2.1l0.59,-1.33l1.2,-0.69l0.63,-1.85l-0.17,-0.57l-0.53,-0.26l0.62,-0.61l0.01,-0.5l-1.05,-1.21l0.15,-1.25l0.6,-1.07l0.04,-4.5l0.99,-2.39l-1.06,-2.3l-0.29,-1.52l-1.7,-0.89l0.14,-1.28l3.71,-4.76l0.84,-1.7l1.36,-0.46l0.8,-1.28l1.71,-0.45l1.19,-2.36l-0.1,-0.48l-0.75,-0.34l-2.14,0.93l-0.19,-0.69l-0.45,-0.3l-2.59,0.04l-2.16,-1.31l1.48,-2.39l1.78,-0.93l0.36,-0.49l-0.05,-1.04l-0.88,-1.04l0.17,-0.39l3.37,-2.8l0.33,-0.72l-0.5,-2.65l-1.6,-2.0l1.29,-0.9l-0.29,-2.04l-0.67,-1.77l0.45,-1.86l-0.92,-0.71l0.14,-0.69l-0.41,-0.76l-1.22,-0.85l1.13,-1.1l0.45,-2.51l1.0,-1.27l2.52,-0.58l0.7,-0.58l0.49,-1.38l0.0,-1.97l0.53,-0.34l1.61,-0.16l1.72,-3.28l2.15,-0.78l0.23,-0.36l-0.34,-1.09l-1.84,-1.47l-0.22,-1.32l-0.91,-0.24l-0.46,-1.07l-0.79,-0.01l-0.36,-1.59l2.55,-2.32l-0.08,-1.17l0.67,-2.12l1.1,-1.47l-0.09,-0.62l-0.52,-0.3l1.17,-0.67l1.93,0.21l0.99,1.37l0.94,0.51l3.82,0.06l0.7,-0.84l-0.2,-2.94l1.1,-2.01l0.66,-0.49l1.6,-0.35l0.53,-0.52l0.29,-3.48l0.9,-2.06l1.51,-1.08l0.48,-1.2l-0.25,-0.8l-1.04,-0.7l-1.01,-2.43l-0.11,-1.01l1.12,0.56l0.9,1.36l2.14,0.86l1.88,-0.79l1.03,0.35l1.4,-0.06l2.99,1.32l2.05,-0.07l1.73,1.25l1.07,2.89l1.36,0.62l0.25,0.68l1.79,1.04l1.99,-0.29l0.95,-1.2l1.14,-0.51l2.17,-0.33l0.97,0.36l0.92,1.25l3.18,0.53l1.67,1.34l4.21,0.15l0.63,0.59l0.8,0.23l0.8,-0.43l0.38,-1.24l0.6,-0.33l2.94,-1.04l1.61,0.26l2.07,2.63l1.96,0.76l0.99,1.71l-0.24,3.47l-0.86,1.68l0.37,2.75l-1.36,0.99l-1.06,2.07l0.34,1.38l2.14,0.09l0.69,3.21l-0.02,1.49l-0.09,0.45l-1.23,1.17l-0.02,0.58l2.7,1.38l1.76,1.5l0.97,1.3l2.69,0.3l2.3,-0.25l1.3,-0.53l0.65,2.12l1.01,1.62l0.57,0.07l0.54,-0.54l0.85,0.72l2.42,-0.54l2.78,1.95l3.43,4.07l2.24,4.82l0.1,0.39l-1.3,0.98l0.21,1.46l0.85,0.41l1.52,-0.16l0.8,-1.46l0.32,0.3l0.19,1.39l0.64,0.71l2.5,-0.43l-0.56,1.11l-0.13,1.27l1.26,3.31l0.2,3.88l0.99,1.96l0.73,0.43l0.68,-0.01l3.28,-1.92l2.72,1.08l4.53,-0.1l2.71,0.61l0.54,-0.36l0.41,-0.86l2.25,0.87l2.32,-1.68l1.53,-0.34l1.16,-1.21l2.62,-1.27l2.95,-1.92l2.16,-0.31l1.52,-1.07l1.35,-0.19l1.09,0.31l1.49,1.22l2.48,0.09l0.83,-1.36l1.55,-0.1l0.49,-0.61l-0.17,-1.85l0.74,-0.51l0.17,-0.52l-1.52,-1.91l1.52,-2.75l-0.28,-1.1l0.48,-1.33l0.06,-1.57l1.95,-3.0l1.51,0.29l0.18,2.62l2.61,2.97l-0.52,1.6l0.12,0.91l0.46,0.47l1.33,0.37l0.44,0.03l0.56,-0.48l0.51,-1.52l3.2,-1.82l0.51,-1.01l0.02,-1.54l0.74,0.0l1.56,0.66l0.07,1.24l0.76,0.46l1.63,-0.08l1.47,-0.67l0.98,-0.1l0.56,-0.58l0.14,-0.85l-0.35,-1.36l1.58,-2.2l-0.21,-0.73l-1.06,-0.17l-0.66,-1.2l0.16,-1.29l2.94,-3.66l0.7,-0.12l0.81,0.62l0.73,0.08l1.77,-0.8l2.21,-1.8l1.98,-1.03l0.06,-1.12l-0.63,-0.87l-0.79,-0.25l-1.37,-2.23l0.86,-0.26l3.12,1.32l0.82,-0.81l-0.07,-0.7l0.43,-0.9l-0.25,-0.94l0.63,1.68l0.95,0.15l0.99,-1.63l1.13,-0.74l0.49,-1.38l2.55,3.51l0.75,2.17l0.48,0.59l0.48,0.05l0.47,-0.47l-0.04,-1.94l0.98,0.08l1.57,4.35l1.49,1.81l3.28,0.09l2.2,-0.35l2.93,1.04l5.54,-1.07l1.09,-1.13l0.62,-1.56l0.98,-0.06l1.31,-1.51l0.42,-1.9l-0.15,-0.67l1.43,-0.02l1.38,-1.1l2.15,-1.02l0.56,0.31l0.53,-0.11l0.65,-0.92l-0.09,-1.22l0.85,-0.03l-0.54,1.48l0.68,1.11l0.49,0.03l-0.47,1.04l-2.23,3.0l-1.15,0.57l-2.77,4.48l-2.82,2.96l-0.73,1.38l-1.6,1.1l-1.15,1.5l-1.5,0.86l-1.27,0.17l-0.2,0.99l0.68,0.39l-3.6,3.35l-1.01,2.48l-0.96,0.74l-9.31,4.2l-5.02,3.04l-1.05,0.92l-0.79,1.44l-2.3,1.96l-0.27,-0.36l-0.72,0.17l0.02,1.59l-0.64,0.52l-0.41,1.5l-2.25,2.68l-1.09,0.75l-0.71,-0.8l-1.21,0.21l0.09,1.05l1.36,0.64l-1.18,0.69l-0.95,-0.02l-0.33,0.64l0.63,0.87l-4.38,1.88l-5.68,3.7l-0.6,-0.27l-1.36,0.9l-3.72,1.43l-7.5,4.53l-1.63,2.1l-1.66,1.0l-2.23,2.57l-1.51,3.41l0.08,1.5l0.46,0.72l1.58,0.79l1.39,-0.02l-0.85,4.85l-0.72,1.56l-0.34,-0.21l-0.64,0.36l0.4,1.35l-1.04,0.36l-1.68,1.64l-3.44,1.81l-1.69,0.26l-1.26,1.15l-1.04,0.04l-0.51,0.6l-2.47,0.43l-3.09,1.68l-1.37,0.3l-1.56,-0.75l-2.35,-0.2l-0.15,-0.58l-0.72,-0.39l-0.52,-0.02l-0.33,0.68l-1.09,-0.27l-1.67,0.39l-0.14,-0.58l-0.74,-0.5l-1.17,0.41l-1.79,0.07l-1.92,1.15l-0.53,0.79l0.21,1.29l-0.76,0.97l-2.28,6.46l-0.11,1.95l-3.74,2.84l-0.92,1.13l-0.06,0.8l0.57,1.13l-2.57,-2.06l0.0,-4.01l-0.39,-1.55l-0.36,-0.29l-0.5,0.52l-0.41,-0.01l-0.14,0.47l0.47,1.18l-0.03,2.41l-1.75,4.39l-0.16,-2.66l-0.88,-1.48l-0.76,-0.46l-2.81,-0.47l-0.67,0.59l-1.07,0.05l-1.2,0.52l-0.67,-0.32l-3.79,2.32l-1.37,0.39l-3.56,3.09l-2.52,5.95l0.09,0.92l-2.32,3.04l-1.15,2.69l-0.28,3.27l-0.91,3.59l0.05,2.53l1.66,9.47l0.36,0.68l1.24,1.01l0.53,1.67l-0.88,0.68l-0.09,0.67l0.52,0.29l0.92,-0.16l-0.53,2.8l-0.02,3.74l-1.28,2.53l-1.34,0.32l-1.03,0.97l-0.28,0.8l0.6,0.58l0.7,-0.18l1.35,-1.13l-0.31,1.02l0.08,1.41l0.74,3.85l3.06,7.11l-0.1,1.25l-0.75,1.85l0.88,2.52l-2.65,-3.71l-0.68,0.29l-0.0,1.53l-1.2,-0.83l-0.32,1.26l-1.21,1.55l0.16,0.9l1.44,1.97l-1.28,-0.67l-0.81,0.14l-0.23,0.82l0.76,0.9l-1.54,0.67l-0.98,0.96l-0.37,0.8l-0.0,1.1l-4.14,2.13l-1.51,-0.11l-0.43,0.24l-0.2,1.13l0.99,1.03l-1.6,-0.04l-0.56,-0.31l-0.13,-1.26l-0.58,-0.5l-2.98,0.35l-1.45,-1.63l-2.26,-0.23l-1.14,0.77l-0.55,3.0l-1.21,0.66l-1.92,2.04l-0.89,-0.53l-1.16,0.1l-2.64,3.15l-2.32,0.28l-1.86,-0.57l-0.43,-0.86l-1.41,-0.39l-1.2,0.29l-0.34,1.11l-0.43,0.35l-0.49,-0.96l-0.74,-0.38l-4.19,0.72l-0.84,1.11l-1.18,0.3l-0.67,0.81l-1.1,4.55l-0.94,2.36l-1.21,0.96l-0.58,-0.31l-0.63,0.22l-0.3,1.75l-1.22,1.28l-1.26,0.29l-1.25,-0.27l-2.28,-1.65l-1.18,-1.67l0.49,-1.04l-0.22,-1.64l1.12,0.41l1.29,-0.57l0.58,-0.55l0.25,-1.16l2.34,1.53l1.22,-0.06l0.18,-0.61l-0.23,-0.64l-0.55,-0.73l-0.93,-0.53l1.23,-1.78l0.45,-1.4l1.33,-1.04l0.36,-1.9l1.04,-1.54l0.39,-2.6l-0.23,-1.04l-0.44,-0.45l-1.33,0.66l-1.64,-1.13l-1.52,-0.39l-0.68,0.28l-0.85,-1.4l0.29,-1.11l0.25,-5.76l-2.41,-0.54l-1.07,0.43l-1.06,-0.1l-1.4,-0.36l-1.79,-1.79l-1.64,0.09l-0.25,-0.55l1.04,0.02l0.45,-0.71l-0.69,-1.44l0.46,-1.37l-0.59,-2.04l-2.02,-1.06l-0.89,0.52l-1.23,-0.07l-0.99,0.93l-0.07,-0.92l0.96,-1.22l-0.02,-1.23l-0.48,-0.53l-1.02,0.4l-0.82,1.05l-0.97,-0.53l-1.68,-0.25l-0.5,0.21l-0.53,0.99l0.57,1.25l-1.57,1.32l-1.31,0.57l-0.59,1.23l-0.75,-0.55l-1.23,0.19l-0.52,0.4l-0.14,0.76l-1.03,0.09l-1.67,1.05l-1.15,0.02l-0.52,-2.73l-1.41,-1.75l-2.98,-0.12l-1.04,-0.57l-1.02,-0.01l-0.97,-0.78l-0.94,0.37l-0.52,-0.92l-0.7,0.21l-0.38,1.14l-0.84,0.61l0.15,0.54l0.66,0.48l0.16,1.57l-1.79,-0.15l-0.65,0.76l-1.27,-1.08l-0.39,0.07l-0.3,0.59l-0.17,-1.78l1.47,-2.02l0.17,-0.7l-2.33,-3.22l0.13,-1.79l-2.1,-2.47l1.13,-0.73l1.21,0.58l0.81,3.14l2.72,1.07l0.99,0.93l2.32,-0.02l1.96,-0.48l1.11,0.29l1.12,2.0l0.1,1.09l2.11,0.75l0.59,-0.3l0.14,-0.59l-0.49,-1.0l0.03,-1.08l-0.98,-0.86l-0.78,-1.6l0.98,-1.6l-0.1,-0.47l-0.56,-0.36l0.9,-0.86l2.24,-0.25l0.65,-0.42l0.16,-0.69l-0.4,-1.48l0.3,-1.18l-0.34,-0.55l-1.16,-0.23l-0.64,-0.92l-1.06,-0.27l-0.62,0.36l-0.25,0.64l0.8,2.01l-1.15,-1.29l-1.73,-0.59l-0.11,-0.7l-0.49,-0.42l-2.21,0.23l-1.61,-0.55l-0.95,0.55l-0.84,1.16l-0.27,1.81l-4.51,-0.75l0.44,-1.18l-1.73,-1.24l-0.23,-1.08l0.27,-0.48l1.22,-0.27l0.76,-1.39l-0.09,-0.76l-0.92,-0.84l-1.56,-0.07l-0.81,0.33l-1.0,-1.83l-1.09,-0.58l-0.47,-1.96l0.82,-2.71l-0.07,-1.53l0.79,-0.32l0.34,-0.53l0.68,-4.44l-0.77,-0.97l-2.24,-0.88ZM433.84,620.88l0.17,-0.38l-0.47,-0.55l-1.43,0.9l-0.23,0.47l0.64,0.66l2.25,0.65l0.99,-0.27l0.73,-1.0l-0.06,-0.69l-0.49,-0.46l-0.91,0.66l-1.19,0.01ZM368.9,723.15l3.01,0.37l0.36,0.27l-3.63,-0.13l0.26,-0.51ZM392.61,649.39l1.24,0.72l1.36,1.23l-0.92,0.46l-0.54,-0.32l-1.33,-1.56l0.2,-0.53Z",
        name: "Andhra Pradesh",
      },
      "IN-TR": {
        path: "M717.67,412.64l-0.65,-0.93l-0.85,-0.54l-0.68,0.03l-0.65,0.63l-0.23,2.44l0.57,2.74l-0.06,0.54l-0.45,-0.12l-0.61,-0.81l-0.37,-1.24l-1.03,-5.9l0.59,-1.13l-0.93,-0.66l-0.88,-2.95l-1.06,-0.99l-1.73,-4.15l0.05,-0.4l0.82,-0.19l0.29,-0.86l-0.43,-0.72l-0.77,-0.33l-0.07,-0.39l0.16,-0.36l1.69,-0.62l0.97,-2.38l-0.28,-2.65l1.62,-2.42l1.36,0.06l0.65,-0.3l0.79,-3.37l4.46,0.5l2.13,-0.37l1.01,-1.0l0.52,-2.43l0.74,1.43l1.5,0.46l1.08,-0.84l-0.14,-2.07l1.8,0.37l0.24,1.14l1.12,1.01l0.62,0.15l0.7,-0.29l1.07,-3.6l-0.23,-2.31l1.73,0.78l0.54,-0.4l-0.61,-1.47l3.03,0.1l1.08,-0.51l0.67,-0.99l0.07,-3.38l0.92,-0.64l2.0,1.31l0.19,1.75l0.72,1.63l-0.16,1.4l-1.03,2.69l0.62,0.74l1.84,0.3l0.73,1.3l0.1,2.73l-0.33,2.19l0.42,1.35l-0.55,1.87l0.21,2.41l-0.73,0.03l-0.79,1.0l-0.32,1.9l0.2,1.67l-0.69,-0.15l-0.51,0.3l-0.6,1.69l-0.45,-1.43l-0.61,-0.91l-0.46,-0.16l-1.47,0.55l-1.5,1.91l-0.91,0.48l-2.28,-2.56l-1.1,0.12l-0.24,2.55l0.81,3.79l-0.04,1.12l-0.97,1.4l-2.69,1.48l-1.81,2.75l-0.6,1.79l1.57,5.86l-1.05,0.63l-0.6,1.26l-0.91,0.89l-1.59,0.51l-1.08,-0.01l-0.53,0.84l-0.37,-0.53l-1.18,-0.4l-0.36,-0.51l-0.1,-1.09l-0.43,-0.32l-1.19,-4.38l-0.54,-0.55l-0.07,-0.63l-0.43,-0.22Z",
        name: "Tripura",
      },
      "IN-AR": {
        path: "M727.36,274.74l-0.62,-1.27l-2.25,-0.75l-1.77,-2.04l-0.63,-2.3l0.17,-1.09l1.38,-1.87l0.22,-1.28l3.95,-0.13l2.71,1.1l3.56,0.14l1.39,-0.61l1.72,-1.71l1.01,-0.5l3.83,-0.02l0.37,-0.53l-0.09,-1.07l1.06,2.04l0.62,0.37l0.5,-0.13l0.54,-0.87l0.59,0.49l0.55,-0.04l0.85,-1.64l0.39,0.72l0.65,0.34l3.1,-1.35l1.28,-1.18l1.97,-0.69l1.9,-1.8l0.51,-2.58l-0.5,-0.64l-1.47,-0.43l1.15,-1.82l2.62,-1.84l1.03,0.45l1.55,-0.52l1.69,-1.95l1.76,-0.71l1.24,-1.28l2.81,-1.91l1.46,-2.07l0.6,-2.32l1.84,-1.44l6.87,-4.3l3.12,-0.23l2.29,0.22l1.58,-0.99l0.71,0.3l0.81,-0.14l2.24,-1.87l3.52,-1.53l0.33,-1.17l1.78,-0.1l1.59,-0.97l3.25,-1.09l1.23,-1.08l2.5,-0.23l2.96,-3.02l0.01,-0.58l-2.19,-2.29l0.36,-1.16l1.48,-0.19l1.11,-1.53l0.6,-0.3l2.38,-0.12l1.39,-0.42l2.54,-3.14l0.72,-0.07l2.06,1.06l1.8,2.16l-0.17,1.17l0.66,0.67l2.54,-0.06l4.07,1.52l0.43,-0.15l-0.23,-0.8l1.58,0.39l2.15,1.1l2.51,0.45l0.72,1.13l1.93,0.3l0.45,-0.44l-0.2,-1.79l0.72,-0.57l1.81,-0.09l1.12,0.28l0.48,-0.28l0.36,-1.24l0.67,1.6l2.25,-0.39l0.22,-1.1l-0.31,-1.27l1.15,-0.39l0.21,-0.82l0.66,-0.09l1.65,0.69l2.17,0.34l0.42,-0.22l0.93,-1.86l-0.03,-2.09l1.15,-0.32l2.24,0.9l2.73,-1.16l5.47,-0.31l0.94,2.55l1.97,1.67l1.4,-0.02l2.08,-1.11l0.36,0.57l-1.13,2.01l-3.49,1.07l-0.63,0.41l-0.65,1.26l0.64,2.74l0.61,0.25l2.59,-1.66l1.71,-0.53l0.58,1.89l2.46,1.23l0.08,0.91l1.18,0.7l0.56,2.05l2.02,2.58l0.6,2.92l-2.74,2.04l-2.04,1.1l-0.15,0.56l0.83,1.34l-1.06,1.29l0.04,0.55l1.03,0.95l0.99,2.16l0.53,0.2l0.76,-0.58l0.45,-3.4l0.84,-1.52l1.46,-0.72l2.38,0.61l2.09,2.27l2.2,1.38l1.28,1.55l0.59,2.63l2.37,0.85l3.42,-1.46l0.92,0.23l2.0,1.66l0.8,0.21l0.66,1.15l2.77,1.85l0.1,0.6l-0.87,1.91l-0.18,1.48l0.49,0.95l1.42,1.47l0.17,0.72l-0.79,1.9l0.03,1.18l-0.7,0.34l-0.46,-0.84l-0.74,-0.19l-1.48,0.51l-2.77,2.73l-2.06,1.44l-0.27,0.83l-2.08,0.81l-1.02,1.26l-2.24,1.7l-0.77,1.39l-0.0,0.98l0.8,2.32l-0.35,1.45l0.18,0.76l6.72,8.57l0.2,1.05l0.81,0.73l-0.34,0.96l-1.06,-0.38l-1.09,0.3l-0.98,-0.87l-4.19,-1.87l-0.52,-0.42l0.5,-1.38l-0.22,-0.64l-1.04,-0.87l-1.45,-1.95l-2.32,-1.06l-1.15,0.12l-0.8,0.69l-2.05,-0.49l-1.22,1.56l-0.94,0.38l-3.16,-0.19l-8.17,1.35l-2.27,0.98l-1.97,1.39l-2.32,3.7l-1.42,1.63l-3.49,1.13l-2.36,3.2l-2.21,0.47l-1.16,1.96l-1.65,0.03l-1.5,0.46l-2.38,3.54l-4.38,1.68l-0.65,-2.41l0.28,-2.02l-1.15,-1.62l0.08,-0.57l0.86,-1.12l0.18,-1.79l-0.4,-1.17l-1.3,-0.89l0.03,-0.74l2.24,-0.17l3.03,-2.24l2.08,-0.89l1.32,-1.31l0.89,-2.35l1.07,-0.6l3.2,1.39l4.93,-1.84l2.11,-0.03l1.11,0.35l0.89,-1.03l1.04,-0.45l0.4,-0.9l1.19,-0.94l0.02,-1.73l-1.11,-1.43l-1.54,0.04l-1.04,1.08l-0.29,-1.15l0.49,-1.32l-0.31,-2.08l-0.56,-0.76l-2.03,-1.4l-0.74,-3.0l4.9,-6.49l1.13,-2.28l-0.47,-0.76l-7.92,0.07l-1.46,0.45l-3.93,2.51l-4.03,1.0l-1.16,-0.06l-2.12,-0.75l-1.82,1.0l-9.17,3.2l-4.61,2.27l-4.21,1.1l-4.11,2.12l-1.45,0.25l-0.95,-0.65l-2.82,0.73l-1.84,-0.68l-0.97,-1.0l-0.65,-0.12l-0.98,0.82l-0.31,0.87l1.19,1.68l-0.16,0.82l-7.98,6.54l-4.22,4.3l-0.72,1.32l0.11,2.07l-3.97,2.93l-1.86,0.72l-3.28,0.5l-1.4,0.62l-0.37,0.04l-1.8,-1.22l-0.99,-0.14l-10.87,1.18l-1.55,-0.38l-0.87,-1.17l-3.78,-1.66l-3.69,-0.53l-0.9,0.25l-2.12,1.63l-8.52,2.44l-1.58,0.13l-1.99,0.63l-3.48,-0.28l-1.08,-3.29l-1.55,-1.52l-0.32,-0.92l0.42,-2.0l0.73,-0.89l0.31,-1.23l1.41,-1.35l0.22,-0.83l-2.85,-5.27l-1.16,-0.97l-1.6,0.88l-1.97,0.08l-3.01,0.86Z",
        name: "Arunachal Pradesh",
      },
      "IN-KA": {
        path: "M183.76,654.66l1.17,-1.76l1.58,-1.17l0.11,0.99l0.66,0.4l1.93,-0.14l1.67,-1.1l1.39,-2.47l-0.57,-1.14l2.3,-3.92l0.01,-1.78l-1.37,-0.64l0.65,-0.48l1.42,-0.09l0.56,-0.68l0.21,-3.0l-0.24,-1.26l-0.69,-0.68l-2.69,-1.26l-1.19,0.3l-0.47,-2.4l1.24,-0.28l0.35,-0.84l-1.1,-0.79l-0.36,-1.12l-1.04,-0.15l-0.39,-1.08l-0.95,0.09l0.31,-0.89l0.87,0.52l0.75,-0.34l0.34,-0.8l0.72,0.63l0.63,-0.14l1.85,-1.63l0.52,-1.51l2.28,0.61l0.64,1.97l0.55,0.41l0.87,-0.23l1.48,-1.21l1.3,-0.31l0.44,-0.89l-0.63,-0.9l0.68,-0.64l0.32,-1.0l0.9,-0.17l0.61,-0.68l1.67,-0.79l2.05,0.17l0.41,-0.88l-0.66,-2.45l2.16,-0.78l0.95,-0.97l0.35,-1.04l0.96,0.29l1.32,-0.24l0.43,0.85l1.57,1.28l1.74,0.56l2.56,-1.13l0.32,-1.76l2.11,-0.15l1.37,-0.65l1.59,-0.01l0.78,0.64l0.73,0.05l1.58,-0.66l0.84,-0.95l1.47,1.12l1.13,-0.06l0.56,-1.31l-0.58,-1.4l0.66,-0.66l0.08,-0.53l-1.28,-2.2l0.49,-2.65l-0.42,-1.11l-0.82,-0.58l-0.88,-2.78l0.83,-0.73l1.1,-1.81l0.67,0.2l0.76,1.43l1.88,0.29l1.02,1.25l0.74,0.0l1.18,-1.12l0.68,0.28l0.52,-0.31l0.52,1.7l1.37,1.03l2.4,-0.79l1.12,0.08l2.15,-1.02l1.3,0.35l1.64,-0.57l1.62,0.97l2.17,0.25l0.88,-0.29l0.98,-1.09l-0.17,-0.54l-0.94,-0.76l-0.84,-1.71l0.71,-1.31l-0.11,-1.65l-0.73,-1.08l2.27,-0.76l0.96,-1.31l1.3,-0.71l0.19,-1.02l0.84,-0.4l0.57,-0.91l0.9,0.33l1.1,-0.13l2.11,1.92l0.94,-0.21l0.83,-2.54l1.63,-1.28l-0.43,-2.03l2.59,0.52l1.11,-0.85l0.65,-1.76l0.44,-6.2l1.3,-0.6l1.67,0.06l2.75,-0.68l0.94,-1.82l3.43,-2.24l0.12,-2.6l0.97,-1.48l0.81,-0.16l0.82,0.6l0.26,2.57l2.49,1.24l0.14,0.8l0.46,0.46l1.07,-0.06l1.25,-0.96l1.87,0.57l-0.46,1.64l0.98,3.56l-0.97,0.35l-0.34,0.81l0.3,0.72l1.16,1.08l0.66,2.67l-1.93,2.03l-1.65,1.2l-0.31,0.97l0.86,1.02l0.13,0.63l-2.0,1.18l-1.66,3.11l0.54,0.74l2.14,1.1l2.63,0.05l0.62,0.92l2.4,-0.87l-0.85,1.7l-1.86,0.54l-0.68,1.22l-1.41,0.5l-0.93,1.81l-3.8,4.92l-0.3,1.05l0.18,0.89l1.75,0.99l0.21,1.34l1.01,2.06l-0.98,2.22l-0.04,4.51l-0.57,0.94l-0.19,1.47l0.2,0.87l0.84,0.59l-0.7,0.62l-0.29,0.74l0.33,0.43l0.72,-0.12l-0.46,1.4l-1.11,0.6l-0.57,1.31l-3.6,2.5l0.04,0.43l1.33,1.5l3.15,0.82l2.99,0.08l1.46,0.98l-0.05,0.65l-1.49,1.1l-0.35,0.85l-0.3,2.77l0.14,5.08l-0.92,1.2l-4.11,-0.1l-2.41,-0.6l-2.16,0.31l-2.83,1.49l-1.33,1.59l-0.27,3.92l0.26,0.61l0.54,0.3l0.92,1.92l-1.1,-0.21l-1.05,0.68l-0.44,1.23l0.31,2.89l-0.61,-0.36l-0.47,0.14l-0.26,0.54l1.49,3.11l0.45,2.23l2.35,1.26l0.79,5.01l-1.29,2.89l-1.27,1.08l-0.98,-0.83l-1.9,0.28l-2.26,-0.55l-2.7,-1.55l-0.83,0.05l-0.64,1.13l-0.05,1.31l-0.76,1.17l0.34,0.49l2.58,1.0l0.24,0.53l-0.67,3.87l-0.92,0.48l-0.24,0.51l0.09,1.46l-0.65,1.58l-0.11,1.87l0.53,1.82l1.15,0.65l1.13,1.95l2.75,-0.11l0.28,0.38l-0.58,1.33l-0.75,-0.03l-0.6,0.43l-0.33,1.18l0.67,1.5l1.34,0.7l-0.5,1.06l0.38,0.63l5.22,0.79l0.57,-0.66l0.04,-1.35l1.22,-1.48l1.49,0.54l2.05,-0.25l0.35,0.98l1.75,0.6l0.81,1.07l0.71,0.37l0.61,-0.09l0.42,-0.71l-0.87,-2.14l0.63,0.06l0.57,0.9l1.2,0.25l-0.29,1.29l0.4,1.46l-2.57,0.43l-1.69,1.64l0.17,0.52l0.77,0.22l-0.9,1.3l-0.01,0.61l0.89,1.82l0.88,0.68l-0.09,0.84l0.46,1.04l-1.36,-0.46l-0.12,-1.15l-1.33,-2.11l-1.58,-0.4l-2.02,0.49l-1.93,0.06l-0.86,-0.87l-2.53,-0.91l-0.68,-2.95l-0.45,-0.49l-1.65,-0.55l-1.55,0.95l-0.26,0.99l2.22,2.42l-0.16,1.73l2.27,3.02l-1.7,2.74l0.13,1.43l0.5,1.1l0.7,0.06l0.45,-0.65l1.18,0.94l0.5,-0.15l0.37,-0.63l1.31,0.24l0.78,-0.26l0.35,-1.0l-0.25,-1.5l-0.54,-0.55l0.64,-0.79l0.65,0.55l0.97,-0.55l0.77,0.74l1.09,0.02l1.04,0.57l2.88,0.1l1.0,1.31l0.76,3.18l1.76,0.02l1.87,-1.1l1.4,-0.17l0.29,-1.09l0.84,-0.13l0.54,0.58l0.75,-0.06l0.7,-1.41l1.23,-0.5l1.78,-1.55l0.13,-0.72l-0.57,-0.89l0.16,-0.39l1.51,0.14l1.31,0.55l0.69,-0.36l0.76,-1.03l-0.06,0.91l-0.96,1.22l0.45,1.84l0.61,0.04l1.08,-1.14l1.08,0.1l0.98,-0.51l1.13,0.68l0.47,1.62l-0.46,1.45l0.68,1.33l-0.98,-0.09l-0.43,0.33l-0.05,0.66l0.46,0.93l0.44,0.26l1.43,-0.19l1.73,1.76l1.63,0.44l1.35,0.11l0.84,-0.42l0.8,0.37l1.06,-0.13l-0.34,1.19l-0.06,3.99l-0.34,1.2l1.1,1.98l0.69,0.23l0.59,-0.29l1.3,0.36l1.75,1.15l1.21,-0.5l-0.05,2.1l-0.32,1.1l-0.91,1.18l-0.34,1.83l-1.24,0.9l-0.54,1.55l-1.32,2.03l0.1,0.59l1.12,0.65l0.48,0.78l-2.19,-1.45l-1.12,-0.16l-0.49,0.39l-0.35,1.35l-1.07,0.42l-1.03,-0.36l-0.62,0.37l0.11,2.05l-0.34,0.59l-2.6,-0.85l-2.48,-1.78l-0.99,-0.1l-1.2,1.37l-2.15,-1.97l-2.37,-0.1l-1.63,0.75l-0.34,1.39l-1.03,1.8l0.24,1.06l-2.02,1.05l-1.7,-0.11l-1.04,0.49l-1.29,3.66l0.38,1.14l-0.1,1.1l1.28,0.34l-0.45,2.16l-2.18,2.84l-1.81,1.11l-0.33,1.06l0.88,1.69l6.59,0.29l1.01,0.65l0.87,1.65l-3.17,4.34l-4.19,0.64l-1.02,0.5l-1.01,1.52l-0.85,2.18l-0.54,0.46l-2.0,0.25l-2.48,-1.04l-1.24,0.45l-2.9,0.22l-0.46,0.31l-0.39,1.08l-1.99,-1.91l-1.21,-0.41l-2.06,0.44l-0.92,0.51l-1.97,3.01l-0.52,2.22l-2.05,-0.47l-5.1,0.34l-0.7,-0.25l-0.01,-1.16l-0.76,-0.99l-1.01,-0.34l-1.28,0.14l-1.47,1.17l-0.23,-1.51l-0.53,-0.66l-2.29,-0.05l-1.56,-1.76l-1.37,-0.01l-1.51,-1.78l-0.98,-0.16l-1.05,0.26l-0.38,-0.58l0.08,-2.01l-0.53,-0.63l-0.84,-0.04l-2.77,1.07l-2.93,-0.54l-1.33,-0.58l-1.09,-1.2l-0.6,-1.99l-1.88,-0.3l-1.33,-0.81l-0.81,0.09l-0.76,-1.06l-2.07,-1.0l-3.42,-3.85l-1.12,-0.12l-0.54,-1.89l-0.87,-1.28l0.04,-0.64l0.75,-0.81l0.05,-0.7l-0.69,-0.48l-1.29,0.25l-1.68,-1.95l0.67,-1.64l-0.28,-0.5l-1.53,-0.38l-1.26,0.46l-0.83,-1.04l-1.18,0.1l-0.21,-1.49l-1.02,-0.68l-0.95,-0.16l-0.98,0.44l-0.22,-0.85l-1.23,-0.36l-0.55,-1.43l-0.97,-0.23l-1.59,0.31l-0.32,-0.91l0.99,-0.81l1.53,-0.55l0.39,-0.51l-0.4,-0.61l-3.41,0.56l-1.36,-5.58l0.26,-1.33l-0.35,-0.37l-0.6,-2.16l-1.04,-5.01l-0.74,-1.48l0.06,-0.6l0.43,-0.2l-0.18,-1.85l-0.72,-1.98l-0.17,-2.91l1.43,-0.43l0.51,-0.72l-0.79,-0.24l-0.74,-1.69l-0.59,-0.04l-0.59,0.82l-1.04,-4.59l-0.98,-2.21l-2.65,-3.83l0.0,-1.22l-0.63,-1.13l-0.24,-2.4l-1.15,-1.8l2.13,0.13l0.18,-0.69l-2.5,-1.07l-0.26,-0.37l-0.08,-1.26l-1.06,-3.28l0.48,0.02l0.27,-0.5l0.73,-0.16l-0.05,-0.45l-1.48,-1.63l-0.14,-0.62l-0.98,-0.84l-0.71,0.54l-0.06,1.03l-0.4,0.04l-0.22,-1.61l1.0,-0.33l0.35,-0.61l-0.72,-0.56l-1.25,0.35l-0.23,-0.18l0.24,-0.61l-0.84,-2.65l-1.14,-0.68l-0.83,0.38l-0.42,-0.63l-0.7,-0.13l-1.41,-0.99l0.54,-0.99l1.17,0.17l0.75,-0.99l1.08,0.02l0.47,-0.37l-0.08,-0.75l-1.37,-0.74l-2.36,1.62l-0.46,-0.72l1.61,-1.08l1.69,-0.19l1.18,-0.91l0.82,-2.53l-0.14,-2.48l0.94,-2.43l-0.25,-0.71l-1.34,-1.11l1.61,-0.57l0.34,-0.87l-0.21,-1.62l-1.2,-1.53l-0.04,-1.34l-0.58,-0.86l0.59,-1.77l-0.66,-3.34l-0.5,-0.59l-1.53,-0.72l-1.74,0.51l-0.43,-0.07l-0.12,-0.46Z",
        name: "Karnataka",
      },
      "IN-PB": {
        path: "M176.07,176.63l0.49,-0.66l0.91,-0.18l0.37,-0.76l0.93,-0.37l1.98,-2.76l1.11,-0.3l0.6,-0.54l0.35,-2.73l1.22,-1.08l1.65,-0.66l0.97,-1.89l2.26,-2.34l-0.1,-1.02l1.19,-0.74l0.5,-1.77l2.56,-0.03l1.17,-1.73l2.45,-0.6l1.36,-1.41l0.49,-1.31l2.35,-1.33l0.12,-0.61l-1.4,-1.16l-2.43,0.02l-0.78,-1.72l0.77,-4.21l2.63,-5.48l-0.15,-0.82l-0.89,-1.3l-0.91,-3.26l-1.88,-3.18l1.28,-1.9l0.42,-1.8l3.6,-2.55l0.85,-1.45l1.71,0.33l1.05,-0.31l1.2,-2.56l1.09,0.37l0.83,-0.6l2.02,-0.13l1.02,-1.1l1.11,-0.02l0.36,-0.49l-0.14,-0.56l1.94,0.66l1.17,-0.5l1.03,0.2l0.93,-1.49l3.2,-0.92l0.63,-2.0l1.01,-1.12l0.35,-0.94l-0.27,-0.94l-1.12,-1.22l1.94,0.13l1.25,-0.69l0.47,1.04l1.62,0.83l0.46,-0.14l2.1,-2.45l1.07,-0.64l2.7,-0.39l1.07,-0.89l0.4,-1.14l1.66,-0.59l1.42,-1.04l1.5,2.65l-3.97,2.7l-1.59,1.66l-3.57,1.31l-0.33,1.08l0.28,1.2l0.7,0.45l0.63,-0.16l-0.52,1.03l-1.81,1.94l-0.05,0.85l0.87,0.49l3.03,0.5l5.38,2.71l2.54,4.11l-1.07,0.21l-0.18,1.25l4.53,8.24l2.34,7.11l1.09,1.36l0.75,0.46l1.42,-0.32l1.34,0.16l0.65,-1.28l0.84,-0.38l-0.02,-1.78l0.92,-0.36l2.27,4.24l0.98,-0.15l0.78,0.72l0.73,-0.2l0.39,0.92l0.53,0.22l0.69,-0.62l0.06,1.28l0.34,0.31l0.96,-0.04l-0.73,1.33l-0.03,1.58l0.68,0.74l-0.51,1.25l0.31,1.59l1.02,1.2l3.79,3.11l1.0,1.7l0.95,0.53l-0.41,1.04l-2.24,-0.16l-1.46,0.74l-0.24,0.82l0.32,0.8l2.49,2.48l2.18,-0.11l0.28,1.06l0.84,0.47l0.29,0.86l-0.26,1.77l0.52,0.95l-0.43,1.01l0.34,3.05l-0.33,0.84l-1.25,-2.16l-2.78,-0.23l-1.08,0.49l-0.44,1.63l0.52,0.73l-2.37,1.72l-3.57,1.91l-0.22,0.62l0.44,0.79l0.82,-0.04l0.76,-0.82l0.42,0.84l0.87,0.45l-0.38,1.5l-2.73,1.89l-1.97,-0.49l-1.02,-2.47l-0.61,-0.47l-0.6,0.06l-0.49,0.47l0.18,1.05l-0.33,0.74l-0.93,-0.81l-0.57,0.13l-0.15,0.98l-0.26,0.08l-1.13,-0.23l-1.27,-0.87l-0.79,0.13l-0.49,1.0l0.9,0.83l-0.46,0.56l0.17,0.85l-0.56,0.83l-0.83,2.76l0.55,1.64l0.95,0.71l-2.16,1.34l-1.95,0.72l-1.28,1.49l-1.16,0.03l-1.39,0.58l-1.91,-0.35l-1.01,-1.8l-1.91,-0.93l-2.34,0.7l-0.72,1.35l-1.13,-0.2l-1.76,0.35l-4.86,-1.45l-3.42,4.21l-0.13,0.69l-0.95,0.4l-0.7,1.35l0.37,1.21l-1.34,0.48l-0.53,-1.63l-0.78,-0.89l0.03,-0.68l-0.47,-0.53l0.89,-0.62l-0.01,-1.11l0.84,-0.15l0.16,-0.58l-1.61,-2.94l-1.18,0.18l-0.57,0.76l-0.91,-0.57l-0.12,-1.21l0.35,-1.46l-0.53,-0.88l-0.81,0.2l-0.42,1.1l-1.94,0.49l-1.47,-1.09l-0.81,-1.4l-2.41,-0.6l-0.88,-0.73l-3.48,0.62l-1.31,0.92l-0.55,0.88l-3.88,-1.1l-4.07,-0.54l-15.05,-0.66l0.36,-1.18l2.21,-3.51l0.25,-1.48l-0.23,-0.77l-0.66,-0.4l-1.19,-3.33l-0.77,-1.0l-1.17,-0.6Z",
        name: "Punjab",
      },
      "IN-ML": {
        path: "M692.14,323.41l0.36,0.99l0.49,0.26l3.48,-1.0l0.19,0.86l0.64,0.35l1.2,-0.63l1.49,-0.23l3.08,0.24l0.52,0.77l0.96,0.42l-0.17,1.66l0.43,0.66l1.1,-0.39l0.55,0.36l0.64,-0.07l2.66,-0.96l0.05,3.31l0.27,0.81l0.85,0.45l1.66,-0.78l2.72,-2.95l3.5,-0.63l1.66,-0.86l0.37,-0.68l-0.38,-0.52l-1.21,0.62l3.21,-4.23l0.7,0.03l0.35,0.35l-0.47,2.0l0.21,0.69l1.52,0.36l1.37,-0.91l0.76,-1.27l0.44,-1.6l1.65,-1.4l0.96,0.24l1.41,1.21l1.05,0.19l3.13,-0.68l1.07,0.06l3.34,-1.03l2.77,0.13l-2.86,2.99l0.12,1.26l1.06,0.72l-1.5,3.63l0.24,1.32l-0.13,2.9l0.69,0.35l1.64,-0.98l2.82,-0.49l1.83,-1.14l2.64,2.02l3.7,3.79l0.62,0.07l1.88,-0.9l-1.34,1.9l-1.55,1.24l-0.1,0.59l1.68,1.57l2.05,0.77l2.62,2.44l0.18,0.48l-0.36,1.54l0.66,1.41l-3.66,1.24l-1.0,1.03l-2.75,0.23l-0.26,0.76l-1.33,0.48l-3.41,3.12l-1.72,-0.99l-0.78,-0.86l-2.26,-0.4l-1.74,-1.46l-1.79,-0.29l-0.79,-0.85l-1.94,-0.58l-2.44,0.38l-1.73,-0.24l-5.25,0.33l-0.64,0.7l-0.94,-0.21l-0.65,0.86l-0.55,0.08l-1.11,-0.13l-1.08,-1.05l-0.72,-0.01l-2.03,0.82l-1.34,-0.09l-4.49,-1.33l-1.65,-0.78l-12.73,1.95l-2.04,-0.82l-0.72,-0.02l-0.73,0.49l-2.6,-0.6l-1.28,0.3l-2.57,-0.21l-4.05,0.61l-2.4,-0.98l-4.8,-1.03l-6.8,-2.79l-2.64,0.4l-0.59,-2.56l0.35,-1.85l2.3,-0.94l0.38,-0.8l0.21,-2.01l1.81,-0.2l1.28,-1.0l0.04,-0.93l-1.52,-1.7l-0.34,-1.72l0.88,-1.75l0.26,-1.36l2.26,-2.72l2.31,-1.91l5.74,-0.81l1.82,-1.05l3.24,0.21l1.4,0.87l-0.56,1.9l0.39,0.49l1.72,-0.91l0.85,-1.0Z",
        name: "Meghalaya",
      },
      "IN-MN": {
        path: "M765.49,384.0l0.47,-0.68l0.61,-3.47l-0.09,-1.17l0.96,-1.67l-0.13,-0.68l-0.62,-0.57l-0.09,-1.32l0.56,-0.31l0.28,-0.98l0.55,-3.63l1.0,-0.49l0.14,-0.43l-0.57,-1.42l0.73,-1.43l-0.56,-1.21l0.91,-2.88l0.63,-0.62l0.88,0.47l0.98,-0.44l0.27,-1.08l1.36,-2.09l-0.23,-1.11l1.0,-0.91l-0.44,-2.02l1.51,-0.98l3.35,-6.82l0.5,-0.52l1.87,1.18l1.29,0.39l1.16,1.32l0.79,-0.03l1.42,-1.94l0.99,-2.22l3.94,-3.86l-0.04,-1.41l-1.34,-0.76l0.16,-0.53l4.57,-0.6l2.93,0.03l1.7,1.1l2.18,-0.03l1.33,0.81l4.11,-0.51l2.05,-1.03l1.5,-1.74l1.68,-0.96l1.91,-1.65l-0.05,1.34l-1.04,3.76l0.67,0.94l2.42,1.37l-0.87,1.31l-1.78,4.9l0.08,1.52l0.99,1.35l3.31,1.08l0.64,2.0l-0.15,1.25l-1.08,1.72l-0.56,2.75l-1.73,2.55l-0.49,2.59l-0.58,0.52l-1.44,0.34l-1.22,3.42l-1.79,1.31l-0.65,2.06l-1.03,1.02l-0.12,1.37l-1.01,1.13l0.08,0.9l-1.09,1.03l-0.39,2.16l-1.51,3.48l-1.33,5.32l-1.69,2.49l-0.11,2.01l-0.25,0.27l-1.49,-1.41l-1.93,-1.02l-3.52,-0.92l-2.47,0.28l-1.62,-1.76l-1.26,-0.49l-3.11,-0.12l-0.94,0.51l-0.51,0.86l-0.79,-0.43l-1.46,0.7l-0.87,-0.01l-0.47,-1.06l-2.13,-2.65l-0.75,-0.47l-1.33,0.4l-0.63,1.3l-0.8,0.38l-0.15,-0.87l-0.68,-0.58l-1.63,0.9l-1.15,-0.71l-1.16,0.57l-1.01,-0.83l-2.54,-0.88Z",
        name: "Manipur",
      },
      "IN-MH": {
        path: "M140.02,524.29l0.06,-1.24l-0.89,-1.35l0.45,-1.03l-0.02,-2.02l0.58,-0.43l0.77,-1.67l0.01,-1.67l1.8,-0.88l1.02,0.27l0.61,-0.35l2.1,-0.11l1.26,-0.53l1.63,2.69l1.38,-0.59l0.87,0.56l1.01,-0.49l0.85,0.82l0.58,0.11l0.82,-0.93l0.21,-1.81l0.82,-0.04l1.23,-0.66l0.57,-1.77l3.01,0.37l0.95,-0.4l-0.07,-1.27l0.49,-1.74l-0.34,-2.56l-0.66,-0.58l2.42,-3.82l0.56,-1.66l-0.48,-1.67l-0.94,-0.32l-0.37,-1.27l-0.99,-0.24l0.99,-0.38l0.9,-1.46l0.9,1.35l3.28,1.92l1.77,1.83l2.49,-0.21l2.88,-1.69l0.39,-0.98l-0.0,-1.07l2.33,-1.97l0.71,-1.34l-0.19,-3.58l-0.9,-2.69l-2.67,-3.15l-1.52,-0.55l-1.15,-1.45l-0.83,-0.24l-1.49,0.14l-2.13,-1.69l1.87,0.97l2.29,-0.02l2.26,-1.34l1.02,-2.45l1.02,0.6l2.51,-0.87l1.4,-3.41l2.42,-2.08l1.87,0.38l4.14,-1.13l1.72,-0.97l0.43,-1.02l-0.34,-1.17l-0.46,-0.42l-2.95,0.88l-1.44,-0.8l-1.14,0.58l-3.52,-0.08l-5.22,1.49l-1.82,-2.89l1.68,-0.47l0.65,-0.69l0.32,-1.01l-0.15,-0.9l-0.83,-0.77l-0.29,-2.57l0.27,-0.56l2.56,-0.97l1.38,-0.19l1.13,-0.92l2.52,-1.2l1.96,-0.35l2.37,0.85l2.05,-0.37l0.72,-0.45l0.19,-0.59l1.73,-0.61l1.41,-1.13l2.18,2.28l0.21,0.76l-0.17,3.62l0.77,2.62l3.13,2.41l1.63,0.45l1.6,1.13l4.83,-0.16l1.07,0.2l1.64,1.01l1.69,0.14l1.58,1.14l2.36,3.5l2.18,0.87l3.21,0.71l6.95,0.32l2.77,-0.44l2.5,0.23l3.35,-0.17l1.94,-0.51l2.2,0.26l2.69,0.81l1.26,-0.08l1.24,2.54l0.36,2.7l-1.11,0.57l0.15,0.97l1.09,1.49l0.87,0.53l3.81,0.66l4.02,-0.74l0.95,-0.46l1.82,-2.26l4.01,-0.99l0.96,-1.64l-0.02,-1.37l-0.56,-1.56l2.52,-1.7l1.81,-2.57l0.52,-3.12l0.5,-0.59l0.75,-0.35l2.31,-0.17l3.51,-2.47l2.54,-0.93l1.74,-0.08l0.77,0.73l0.74,0.08l1.15,-1.07l0.99,-0.26l1.28,-1.01l4.16,0.21l0.84,1.07l1.22,0.67l0.36,3.83l0.44,0.85l-3.7,-0.1l-0.72,0.76l0.04,1.29l1.97,3.68l0.53,0.02l0.58,-0.76l1.39,0.99l0.88,0.02l1.05,-0.43l1.38,0.13l0.82,0.55l2.93,-1.48l2.94,0.87l4.44,-1.33l3.05,-1.56l2.07,-2.14l3.51,-1.08l1.4,-1.22l1.25,0.34l0.42,2.93l0.32,0.47l0.78,0.04l1.24,-0.64l0.62,0.01l1.47,0.98l2.09,0.55l2.14,0.15l6.99,-1.28l0.7,-0.93l-0.15,-1.32l1.82,-0.62l2.66,-0.31l4.17,-1.36l0.59,-0.54l0.29,-1.34l1.77,0.62l3.23,0.14l1.66,0.54l0.8,1.02l0.92,0.57l0.58,2.17l0.81,0.57l1.25,-0.33l1.75,-1.17l2.95,-0.27l1.39,0.37l0.77,1.38l0.58,0.33l1.6,-0.12l2.05,-0.95l0.35,0.4l0.86,0.06l2.42,-0.77l0.92,-1.07l2.29,-0.91l1.67,1.15l1.92,0.55l0.2,1.01l0.5,0.63l2.02,1.48l0.35,0.91l-0.73,1.25l0.43,0.65l0.81,0.15l1.85,-0.32l4.3,2.41l1.39,-0.57l-0.01,0.89l-1.13,1.42l-2.68,1.41l-2.67,1.98l-0.97,4.16l0.16,1.64l0.77,1.33l1.09,0.52l1.28,-0.23l0.35,0.63l0.06,4.02l0.45,3.05l-1.84,1.2l-0.47,0.89l-0.02,0.79l0.38,0.48l0.66,0.16l1.78,-0.88l1.02,0.27l0.01,1.81l0.39,0.89l-0.58,1.41l-0.1,2.11l0.45,2.13l-1.09,0.47l-1.52,1.28l-2.81,0.5l-0.75,0.81l-0.36,2.4l0.18,0.72l3.49,0.54l0.73,2.48l-0.7,3.76l-2.02,-0.7l-1.12,1.16l-0.04,1.18l1.69,0.75l-0.51,0.69l-1.68,0.86l-0.09,0.89l0.85,0.59l1.62,0.25l0.63,-0.44l0.13,-0.95l0.77,-0.12l1.15,2.63l2.81,1.23l0.47,2.03l0.58,0.9l4.26,1.79l1.18,1.1l0.48,0.98l-0.64,1.2l-1.62,0.32l-0.53,0.42l-0.01,0.81l0.78,1.35l-1.97,0.98l-0.97,0.87l-1.04,-1.54l-2.0,-0.01l-0.88,-1.94l-0.71,-0.42l-0.85,0.24l-1.13,1.33l-1.18,0.61l-1.0,1.75l-1.36,0.8l-1.22,4.29l-2.27,3.01l-0.64,1.37l-0.01,1.37l2.24,3.09l-0.09,0.72l-2.24,1.45l-0.28,0.71l0.24,1.15l-0.3,0.22l-2.34,0.29l-2.31,-0.22l-0.58,-0.96l-2.01,-1.76l-2.23,-1.06l0.99,-0.99l0.21,-0.84l0.02,-1.59l-0.72,-3.35l-0.74,-0.8l-1.66,0.26l-0.06,-0.71l0.87,-1.58l1.42,-0.93l0.21,-0.5l-0.44,-2.8l0.57,-0.64l0.28,-0.94l0.23,-3.74l-1.23,-2.15l-1.96,-0.77l-2.06,-2.64l-2.29,-0.45l-3.08,1.08l-0.91,0.51l-0.3,1.12l-0.39,0.32l-1.26,-0.82l-4.24,-0.18l-1.47,-1.27l-3.01,-0.45l-0.87,-1.21l-1.35,-0.51l-2.56,0.37l-1.33,0.62l-0.81,1.12l-1.3,0.27l-1.56,-0.84l-0.34,-0.77l-1.28,-0.55l-0.99,-2.79l-2.09,-1.54l-2.16,0.04l-2.92,-1.29l-1.56,0.02l-1.1,-0.35l-1.07,0.25l-0.61,0.57l-1.9,-0.74l-1.36,-1.66l-1.24,-0.52l-0.54,0.27l-0.23,0.9l0.26,1.04l1.09,2.59l1.15,1.04l-0.25,0.64l-1.24,0.79l-0.61,0.83l-0.91,2.35l-0.06,2.8l-2.01,0.66l-0.77,0.68l-1.2,2.21l0.22,2.5l-0.2,0.74l-3.33,-0.06l-0.9,-0.6l-0.87,-1.24l-2.11,-0.28l-1.27,0.34l-0.99,0.93l0.11,0.69l0.53,0.26l-1.01,1.36l-0.7,2.23l0.12,1.03l-2.39,2.03l-0.22,0.63l0.57,2.11l1.03,0.18l0.28,0.94l0.86,0.22l0.16,1.21l2.03,1.81l-2.16,0.84l-1.71,3.25l-1.27,-0.02l-0.95,0.63l-0.33,0.77l0.19,1.51l-0.52,1.27l-2.57,0.53l-1.5,1.72l-0.5,2.61l-1.3,1.55l1.51,1.29l0.1,0.66l-1.31,-0.1l-1.69,1.02l-0.3,-1.06l-2.38,-1.06l-0.11,-2.21l-0.63,-0.91l-1.3,-0.5l-1.15,0.41l-1.16,1.82l-0.03,2.41l-1.43,0.66l-1.86,1.41l-0.68,0.82l-0.31,1.03l-1.26,0.02l-1.02,0.42l-1.68,-0.05l-1.83,0.93l-0.27,0.64l0.14,1.57l-0.48,2.32l0.04,2.02l-0.55,1.47l-0.5,0.44l-3.0,-0.44l-0.32,0.42l0.47,2.13l-1.5,1.02l-0.86,2.44l-2.06,-1.89l-2.52,-0.23l-0.88,1.08l-0.94,0.5l-0.2,1.02l-1.14,0.56l-0.95,1.3l-2.46,0.92l-0.17,0.5l0.77,1.23l0.09,1.48l-0.71,1.34l1.01,2.17l0.92,0.74l-0.6,0.51l-2.45,-0.08l-1.78,-0.99l-1.68,0.57l-1.38,-0.34l-2.26,1.05l-0.94,-0.14l-2.15,0.79l-0.87,-0.67l-0.28,-1.22l-0.68,-0.84l-0.88,0.28l-0.74,-0.28l-1.46,1.22l-0.85,-1.16l-1.9,-0.32l-0.65,-1.35l-0.88,-0.45l-0.63,0.12l-2.43,3.16l0.98,3.28l0.92,0.73l0.24,0.71l-0.5,2.6l1.28,2.16l-0.74,1.05l0.55,1.29l-0.2,0.88l-2.2,-1.25l-1.22,1.13l-1.28,0.53l-1.19,-0.68l-1.83,-0.01l-1.52,0.68l-2.02,0.12l-0.77,0.53l-0.02,1.43l-2.01,0.92l-1.23,-0.4l-1.49,-1.22l-0.67,-1.03l-1.68,0.2l-1.2,-0.27l-1.49,2.14l-2.45,1.04l0.56,3.05l-1.89,-0.24l-1.82,0.86l-0.57,0.65l-1.08,0.31l-0.5,1.26l-0.78,0.59l-0.04,0.6l0.64,0.85l-1.22,0.28l-1.77,1.34l-0.89,-2.23l-2.91,-0.76l-0.53,0.3l-0.53,1.56l-1.66,1.42l-0.93,-0.68l-0.61,0.31l-0.37,0.87l-0.8,-0.53l-0.65,0.1l-0.76,2.26l0.62,0.38l0.81,-0.38l0.26,0.87l1.12,0.26l0.23,0.93l0.78,0.55l-0.95,0.16l-0.48,0.69l0.62,2.98l0.63,0.32l0.91,-0.41l2.9,1.47l0.22,0.97l-0.19,2.82l-1.77,0.32l-0.86,0.93l0.13,0.7l1.32,0.54l0.03,0.51l-0.3,1.18l-2.16,3.44l0.6,1.18l-1.19,2.09l-1.32,0.88l-1.54,0.11l-0.16,-1.09l-1.05,-0.25l-2.28,1.88l-0.4,0.99l-0.63,0.47l0.15,0.72l-0.91,0.04l-2.08,0.78l-1.43,-0.79l-1.0,-2.75l-1.76,-0.62l-0.53,-1.11l-0.79,0.21l-0.89,1.14l-1.83,0.13l-0.71,0.34l-1.25,-0.26l0.03,-1.62l-1.31,-2.88l-3.48,-3.53l0.79,-0.83l-0.41,-0.4l-0.8,-0.07l-0.82,-0.82l0.33,-0.64l0.06,-2.16l0.71,-0.87l-0.01,-0.47l-0.44,-0.14l-0.95,0.42l-0.17,-1.06l-0.71,-0.29l-1.12,-4.25l-0.51,-0.32l0.58,-0.47l-0.03,-0.73l-1.12,-0.76l-0.68,-2.42l-0.45,-0.54l1.06,0.74l0.82,0.06l0.41,-0.32l-0.74,-0.71l0.5,-0.8l-1.26,-0.43l-0.4,-0.57l0.51,-0.22l0.18,0.36l0.66,0.09l0.32,-0.64l-0.15,-0.76l-0.57,-0.46l-0.98,0.18l0.18,-1.71l-0.97,-1.49l0.42,-2.29l-0.5,-0.3l-0.41,-0.93l-0.12,-0.62l0.28,-0.53l-0.31,-1.31l0.56,-1.5l-0.17,-0.55l-0.76,-0.39l0.59,-1.37l-0.03,-0.91l-0.58,-1.34l0.09,-1.05l-1.37,-3.59l0.76,-0.16l0.19,-0.63l-1.62,-2.66l-0.76,-0.65l-0.09,-0.38l0.56,-0.85l-0.28,-0.75l0.12,-0.77l-1.59,-2.24l2.03,-0.65l-0.02,-0.73l-1.83,-0.43l-0.38,-0.57l0.05,-1.09l-0.52,-0.83l0.53,-1.46l-0.55,-1.76l-0.81,-1.2l-0.45,-1.72l-1.42,-2.31l0.42,-0.88l-0.28,-0.67l-0.53,-0.26l0.98,-0.85l0.18,-0.85l-0.51,-0.41l-0.94,0.54l-0.34,-0.37l-0.61,-4.09l-0.38,-0.69l-0.67,-0.29l0.19,-0.69l0.62,0.73l1.75,0.17l0.54,0.38l-0.31,0.81l0.58,0.48l0.45,-0.14l0.51,-0.78l-0.02,-2.09l-0.62,-0.75l-1.94,-0.11l-0.55,-0.53l0.14,-0.36l-0.36,-0.54l-1.6,-0.94l-0.01,-1.02l-0.62,-1.29l0.45,-2.33l0.71,-0.18l1.81,2.51l0.68,-0.15l0.19,-0.62l-0.86,-1.02l-0.88,-2.03l-0.71,-0.34l-0.82,0.14l-1.64,-3.67l-0.09,-2.7l0.29,-0.7l1.18,0.09l0.55,-0.62l0.88,0.95l0.04,1.25l0.91,0.59l0.53,-0.48l-0.1,-1.31l0.64,-0.91l-0.12,-0.67l-0.88,-0.45l-0.18,-1.43l-0.6,-0.05l-0.65,0.44l-1.04,-0.76l0.14,-0.26l0.68,-0.01l0.31,-1.08l1.2,-0.1l0.34,-0.51l-0.2,-0.37l2.02,-0.66l0.31,-0.64l-0.31,-0.57l-0.52,-0.07l-1.35,0.42l0.13,-1.87l-0.65,-0.58l0.22,-2.19l-0.4,-0.44l-0.59,0.23l-1.02,1.69l-0.22,1.38l0.37,0.69l-0.13,0.31l-0.7,0.72l-0.08,-0.33l-0.66,-0.2l-0.49,0.46l-1.25,2.43l-0.6,-0.82l0.51,-1.73l0.36,-0.09l0.25,-0.76l-0.32,-0.73l0.29,-1.17l-0.39,-1.12l0.4,-0.71l-0.24,-0.49l-0.7,-0.1l1.07,-1.85l-0.27,-0.66l-0.46,-0.04l-0.91,0.92l0.19,-2.07l2.08,-0.09l0.63,0.65l1.46,0.32l1.18,-0.24l1.53,2.69l0.5,0.1l0.71,-0.39l-0.01,-0.7l-0.42,-0.22l-0.17,-1.08l-1.36,-1.37l-2.73,-0.21l-1.89,-1.29l-1.07,0.49l-1.01,-1.35l-0.33,-2.78l3.69,-1.53l0.25,-0.37l-0.25,-0.37l-0.94,-0.31l-1.71,0.45l-0.95,-1.4l-1.01,-0.32l-0.28,0.39l0.16,-0.89l-0.58,-2.49l0.85,-0.61l-0.33,-1.12l0.55,-0.55l-0.18,-1.26l-0.69,-0.14l-0.89,1.09Z",
        name: "Maharashtra",
      },
      "IN-KL": {
        path: "M207.32,745.98l1.92,-0.19l0.39,1.27l1.23,0.49l0.41,0.89l0.63,0.19l0.89,-0.52l0.47,0.08l0.64,0.37l-0.1,0.79l0.5,0.89l0.57,0.23l0.78,-0.21l0.85,1.04l0.65,0.11l0.96,-0.48l0.95,0.25l-0.62,1.55l0.94,1.35l1.25,1.27l1.53,-0.21l-0.72,0.78l-0.15,1.13l0.93,1.53l0.64,2.08l1.3,0.28l3.32,3.77l2.15,1.07l0.78,1.07l1.13,0.04l1.41,0.84l1.39,0.08l0.46,1.8l1.32,1.45l1.59,0.7l3.14,0.56l3.3,-1.08l0.01,2.3l0.65,0.82l2.2,-0.0l1.26,1.62l1.5,0.11l1.64,1.8l1.14,0.25l1.17,-0.18l0.27,1.6l0.54,0.81l-1.2,0.5l-1.02,1.21l-0.98,0.1l-1.84,-0.51l-0.38,0.17l-0.33,0.69l-0.03,2.0l0.9,1.74l4.83,1.38l1.12,0.9l1.17,0.45l1.49,1.54l-2.87,2.82l-0.17,0.89l0.34,0.48l0.86,0.17l0.99,-0.3l1.57,0.46l3.34,-0.37l0.94,-0.61l-0.36,1.61l0.94,1.09l0.8,2.1l0.59,0.57l-1.64,-0.24l-0.64,0.35l-0.59,1.61l0.2,1.28l0.98,1.23l3.74,1.55l0.74,1.63l1.03,0.92l-0.41,2.95l-1.35,0.7l-0.35,0.83l0.17,2.6l-0.55,3.61l0.93,2.08l0.11,1.93l2.58,2.4l1.39,0.59l1.1,-0.31l2.7,-2.22l3.3,-1.4l1.27,1.82l0.4,1.65l0.73,0.77l-1.69,4.21l1.1,3.48l-1.02,2.47l0.32,2.94l-1.56,5.71l0.29,0.53l1.83,1.05l2.88,-0.69l1.58,2.31l0.11,0.81l-1.01,1.01l-0.96,2.65l-0.84,1.39l-2.5,7.28l-1.99,1.95l1.13,3.67l1.53,1.25l-0.52,1.84l-1.71,2.58l0.21,2.15l0.35,0.76l1.72,1.46l0.73,1.15l-0.92,1.3l-0.26,0.16l-0.49,-0.36l-0.56,0.34l0.28,1.93l-1.34,2.06l-0.32,1.41l-1.22,0.16l-3.21,-2.34l-3.51,-4.66l-1.64,-1.53l-0.43,-1.0l-3.63,-4.29l-1.58,-2.45l-2.39,-2.02l1.57,-0.71l0.15,-0.44l-0.37,-0.28l-1.08,0.1l0.47,-0.7l1.68,0.13l0.44,-0.23l-0.2,-0.71l0.54,-0.49l-0.28,-0.62l-0.95,-0.03l-0.85,0.6l-1.25,-0.25l-1.31,0.82l-1.58,-3.84l0.32,-0.33l0.19,-1.64l-0.19,-0.41l-0.65,0.2l-0.86,-2.3l-0.74,-0.28l-0.21,0.22l-1.05,-2.39l-1.56,-5.16l-1.24,-10.4l0.63,-0.17l0.66,4.3l0.62,0.34l0.41,-0.52l0.65,0.91l-0.63,1.46l-0.6,2.77l0.13,0.65l0.86,0.47l2.79,0.53l0.73,-0.32l0.81,-0.97l-0.14,-0.62l-1.15,-0.68l-1.47,-0.14l0.28,-0.66l-0.17,-2.85l-0.66,-1.06l-0.37,-2.02l0.45,-1.0l-0.04,-0.85l-1.08,-2.32l-1.52,-1.72l-0.77,0.08l-0.45,-1.39l0.12,-0.52l-0.61,-0.7l-0.27,-1.52l-1.31,-1.45l-0.38,0.26l-0.25,0.92l0.66,1.82l-0.66,-1.68l-0.14,-1.7l1.71,-1.2l0.21,-1.28l-0.71,-0.22l-0.54,-0.77l-0.8,-0.12l0.31,1.86l-0.42,0.47l-0.54,-0.68l-1.44,-5.09l-1.12,-1.55l-0.55,-2.53l-1.35,-1.65l-0.27,-1.2l-2.36,-4.94l0.51,-0.56l-0.14,-0.64l-0.79,-0.34l-0.43,-1.07l-1.9,-7.73l-3.14,-7.29l0.34,-0.6l-0.24,-0.72l-0.61,-0.15l-1.63,-2.78l-1.62,-0.56l-2.42,-6.52l-0.81,-1.13l-3.92,-4.33l-0.84,-0.02l-1.08,-1.51l2.17,0.47l0.48,-0.39l-0.52,-0.81l0.19,-1.18l-0.45,-0.08l-1.02,0.74l-0.61,0.02l-1.17,-1.08l1.13,-0.11l0.25,-0.56l-0.73,-0.93l0.1,-1.21l0.73,-0.02l1.61,-0.9l0.41,-0.84l-0.76,-0.53l-0.97,0.34l-0.9,-0.22l-1.68,1.27l-0.82,-0.2l-0.83,0.31l-0.37,2.56l-1.86,-5.57l0.26,-1.27l-0.48,-0.39l-0.64,0.24l-0.68,-1.84l-3.92,-7.22l-2.86,-6.72ZM250.45,836.37l-0.0,-0.01l0.01,-0.0l-0.0,0.02ZM249.88,834.43l-0.08,-0.57l-0.05,-0.2l0.67,0.8l-0.54,-0.03Z",
        name: "Kerala",
      },
    },
    height: 932.9661457393942,
    projection: { type: "mill", centralMeridian: 0 },
    width: 900,
  });
