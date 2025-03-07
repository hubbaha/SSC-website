!(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (c) {
  "use strict";
  var s = {},
    u = Math.max,
    d = Math.min;
  (s.c = {}),
    (s.c.d = c(document)),
    (s.c.t = function (t) {
      return t.originalEvent.touches.length - 1;
    }),
    (s.o = function () {
      var h = this;
      (this.o = null),
        (this.$ = null),
        (this.i = null),
        (this.g = null),
        (this.v = null),
        (this.cv = null),
        (this.x = 0),
        (this.y = 0),
        (this.w = 0),
        (this.h = 0),
        (this.$c = null),
        (this.c = null),
        (this.t = 0),
        (this.isInit = !1),
        (this.fgColor = null),
        (this.pColor = null),
        (this.dH = null),
        (this.cH = null),
        (this.eH = null),
        (this.rH = null),
        (this.scale = 1),
        (this.relative = !1),
        (this.relativeWidth = !1),
        (this.relativeHeight = !1),
        (this.$div = null),
        (this.run = function () {
          var t = function (t, i) {
            var s;
            for (s in i) h.o[s] = i[s];
            h._carve().init(), h._configure()._draw();
          };
          if (!this.$.data("kontroled")) {
            if (
              (this.$.data("kontroled", !0),
              this.extend(),
              (this.o = c.extend(
                {
                  min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                  max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                  stopper: !0,
                  readOnly:
                    this.$.data("readonly") ||
                    "readonly" === this.$.attr("readonly"),
                  cursor:
                    (!0 === this.$.data("cursor")
                      ? 30
                      : this.$.data("cursor")) || 0,
                  thickness:
                    (this.$.data("thickness") &&
                      Math.max(Math.min(this.$.data("thickness"), 1), 0.01)) ||
                    0.35,
                  lineCap: this.$.data("linecap") || "butt",
                  width: this.$.data("width") || 200,
                  height: this.$.data("height") || 200,
                  displayInput:
                    null == this.$.data("displayinput") ||
                    this.$.data("displayinput"),
                  displayPrevious: this.$.data("displayprevious"),
                  fgColor: this.$.data("fgcolor") || "#87CEEB",
                  inputColor: this.$.data("inputcolor"),
                  font: this.$.data("font") || "Arial",
                  fontWeight: this.$.data("font-weight") || "bold",
                  inline: !1,
                  step: this.$.data("step") || 1,
                  rotation: this.$.data("rotation"),
                  draw: null,
                  change: null,
                  cancel: null,
                  release: null,
                  format: function (t) {
                    return t;
                  },
                  parse: function (t) {
                    return parseFloat(t);
                  },
                },
                this.o,
              )),
              (this.o.flip =
                "anticlockwise" === this.o.rotation ||
                "acw" === this.o.rotation),
              this.o.inputColor || (this.o.inputColor = this.o.fgColor),
              this.$.is("fieldset")
                ? ((this.v = {}),
                  (this.i = this.$.find("input")),
                  this.i.each(function (i) {
                    var s = c(this);
                    (h.i[i] = s),
                      (h.v[i] = h.o.parse(s.val())),
                      s.bind("change blur", function () {
                        var t = {};
                        (t[i] = s.val()), h.val(h._validate(t));
                      });
                  }),
                  this.$.find("legend").remove())
                : ((this.i = this.$),
                  (this.v = this.o.parse(this.$.val())),
                  "" === this.v && (this.v = this.o.min),
                  this.$.bind("change blur", function () {
                    h.val(h._validate(h.o.parse(h.$.val())));
                  })),
              !this.o.displayInput && this.$.hide(),
              (this.$c = c(document.createElement("canvas")).attr({
                width: this.o.width,
                height: this.o.height,
              })),
              (this.$div = c(
                '<div style="' +
                  (this.o.inline ? "display:inline;" : "") +
                  "width:" +
                  this.o.width +
                  "px;height:" +
                  this.o.height +
                  'px;"></div>',
              )),
              this.$.wrap(this.$div).before(this.$c),
              (this.$div = this.$.parent()),
              "undefined" != typeof G_vmlCanvasManager &&
                G_vmlCanvasManager.initElement(this.$c[0]),
              (this.c = this.$c[0].getContext
                ? this.$c[0].getContext("2d")
                : null),
              !this.c)
            )
              throw {
                name: "CanvasNotSupportedException",
                message: "Canvas not supported. Please use excanvas on IE8.0.",
                toString: function () {
                  return this.name + ": " + this.message;
                },
              };
            return (
              (this.scale =
                (window.devicePixelRatio || 1) /
                (this.c.webkitBackingStorePixelRatio ||
                  this.c.mozBackingStorePixelRatio ||
                  this.c.msBackingStorePixelRatio ||
                  this.c.oBackingStorePixelRatio ||
                  this.c.backingStorePixelRatio ||
                  1)),
              (this.relativeWidth =
                this.o.width % 1 != 0 && this.o.width.indexOf("%")),
              (this.relativeHeight =
                this.o.height % 1 != 0 && this.o.height.indexOf("%")),
              (this.relative = this.relativeWidth || this.relativeHeight),
              this._carve(),
              this.v instanceof Object
                ? ((this.cv = {}), this.copy(this.v, this.cv))
                : (this.cv = this.v),
              this.$.bind("configure", t).parent().bind("configure", t),
              this._listen()._configure()._xy().init(),
              (this.isInit = !0),
              this.$.val(this.o.format(this.v)),
              this._draw(),
              this
            );
          }
        }),
        (this._carve = function () {
          if (this.relative) {
            var t = this.relativeWidth
                ? (this.$div.parent().width() * parseInt(this.o.width)) / 100
                : this.$div.parent().width(),
              i = this.relativeHeight
                ? (this.$div.parent().height() * parseInt(this.o.height)) / 100
                : this.$div.parent().height();
            this.w = this.h = Math.min(t, i);
          } else (this.w = this.o.width), (this.h = this.o.height);
          return (
            this.$div.css({ width: this.w + "px", height: this.h + "px" }),
            this.$c.attr({ width: this.w, height: this.h }),
            1 !== this.scale &&
              ((this.$c[0].width = this.$c[0].width * this.scale),
              (this.$c[0].height = this.$c[0].height * this.scale),
              this.$c.width(this.w),
              this.$c.height(this.h)),
            this
          );
        }),
        (this._draw = function () {
          var t = !0;
          (h.g = h.c), h.clear(), h.dH && (t = h.dH()), !1 !== t && h.draw();
        }),
        (this._touch = function (t) {
          var i = function (t) {
            var i = h.xy2val(
              t.originalEvent.touches[h.t].pageX,
              t.originalEvent.touches[h.t].pageY,
            );
            i != h.cv &&
              ((h.cH && !1 === h.cH(i)) ||
                (h.change(h._validate(i)), h._draw()));
          };
          return (
            (this.t = s.c.t(t)),
            i(t),
            s.c.d.bind("touchmove.k", i).bind("touchend.k", function () {
              s.c.d.unbind("touchmove.k touchend.k"), h.val(h.cv);
            }),
            this
          );
        }),
        (this._mouse = function (t) {
          var i = function (t) {
            var i = h.xy2val(t.pageX, t.pageY);
            i != h.cv &&
              ((h.cH && !1 === h.cH(i)) ||
                (h.change(h._validate(i)), h._draw()));
          };
          return (
            i(t),
            s.c.d
              .bind("mousemove.k", i)
              .bind("keyup.k", function (t) {
                if (27 === t.keyCode) {
                  if (
                    (s.c.d.unbind("mouseup.k mousemove.k keyup.k"),
                    h.eH && !1 === h.eH())
                  )
                    return;
                  h.cancel();
                }
              })
              .bind("mouseup.k", function (t) {
                s.c.d.unbind("mousemove.k mouseup.k keyup.k"), h.val(h.cv);
              }),
            this
          );
        }),
        (this._xy = function () {
          var t = this.$c.offset();
          return (this.x = t.left), (this.y = t.top), this;
        }),
        (this._listen = function () {
          return (
            this.o.readOnly
              ? this.$.attr("readonly", "readonly")
              : (this.$c
                  .bind("mousedown", function (t) {
                    t.preventDefault(), h._xy()._mouse(t);
                  })
                  .bind("touchstart", function (t) {
                    t.preventDefault(), h._xy()._touch(t);
                  }),
                this.listen()),
            this.relative &&
              c(window).resize(function () {
                h._carve().init(), h._draw();
              }),
            this
          );
        }),
        (this._configure = function () {
          return (
            this.o.draw && (this.dH = this.o.draw),
            this.o.change && (this.cH = this.o.change),
            this.o.cancel && (this.eH = this.o.cancel),
            this.o.release && (this.rH = this.o.release),
            this.o.displayPrevious
              ? ((this.pColor = this.h2rgba(this.o.fgColor, "0.4")),
                (this.fgColor = this.h2rgba(this.o.fgColor, "0.6")))
              : (this.fgColor = this.o.fgColor),
            this
          );
        }),
        (this._clear = function () {
          this.$c[0].width = this.$c[0].width;
        }),
        (this._validate = function (t) {
          var i = ~~((t < 0 ? -0.5 : 0.5) + t / this.o.step) * this.o.step;
          return Math.round(100 * i) / 100;
        }),
        (this.listen = function () {}),
        (this.extend = function () {}),
        (this.init = function () {}),
        (this.change = function (t) {}),
        (this.val = function (t) {}),
        (this.xy2val = function (t, i) {}),
        (this.draw = function () {}),
        (this.clear = function () {
          this._clear();
        }),
        (this.h2rgba = function (t, i) {
          var s;
          return (
            (t = t.substring(1, 7)),
            "rgba(" +
              (s = [
                parseInt(t.substring(0, 2), 16),
                parseInt(t.substring(2, 4), 16),
                parseInt(t.substring(4, 6), 16),
              ])[0] +
              "," +
              s[1] +
              "," +
              s[2] +
              "," +
              i +
              ")"
          );
        }),
        (this.copy = function (t, i) {
          for (var s in t) i[s] = t[s];
        });
    }),
    (s.Dial = function () {
      s.o.call(this),
        (this.startAngle = null),
        (this.xy = null),
        (this.radius = null),
        (this.lineWidth = null),
        (this.cursorExt = null),
        (this.w2 = null),
        (this.PI2 = 2 * Math.PI),
        (this.extend = function () {
          this.o = c.extend(
            {
              bgColor: this.$.data("bgcolor") || "#EEEEEE",
              angleOffset: this.$.data("angleoffset") || 0,
              angleArc: this.$.data("anglearc") || 360,
              inline: !0,
            },
            this.o,
          );
        }),
        (this.val = function (t, i) {
          if (null == t) return this.v;
          (t = this.o.parse(t)),
            (!1 !== i && t != this.v && this.rH && !1 === this.rH(t)) ||
              ((this.cv = this.o.stopper ? u(d(t, this.o.max), this.o.min) : t),
              (this.v = this.cv),
              this.$.val(this.o.format(this.v)),
              this._draw());
        }),
        (this.xy2val = function (t, i) {
          var s, h;
          return (
            (s =
              Math.atan2(t - (this.x + this.w2), -(i - this.y - this.w2)) -
              this.angleOffset),
            this.o.flip && (s = this.angleArc - s - this.PI2),
            this.angleArc != this.PI2 && s < 0 && -0.5 < s
              ? (s = 0)
              : s < 0 && (s += this.PI2),
            (h = (s * (this.o.max - this.o.min)) / this.angleArc + this.o.min),
            this.o.stopper && (h = u(d(h, this.o.max), this.o.min)),
            h
          );
        }),
        (this.listen = function () {
          var e,
            a,
            h,
            n,
            o = this,
            t = function (t) {
              t.preventDefault();
              var i = t.originalEvent,
                s = i.detail || i.wheelDeltaX,
                h = i.detail || i.wheelDeltaY,
                n =
                  o._validate(o.o.parse(o.$.val())) +
                  (0 < s || 0 < h ? o.o.step : s < 0 || h < 0 ? -o.o.step : 0);
              (n = u(d(n, o.o.max), o.o.min)),
                o.val(n, !1),
                o.rH &&
                  (clearTimeout(e),
                  (e = setTimeout(function () {
                    o.rH(n), (e = null);
                  }, 100)),
                  a ||
                    (a = setTimeout(function () {
                      e && o.rH(n), (a = null);
                    }, 200)));
            },
            r = 1,
            l = { 37: -o.o.step, 38: o.o.step, 39: o.o.step, 40: -o.o.step };
          this.$.bind("keydown", function (t) {
            var i = t.keyCode;
            if (
              (96 <= i && i <= 105 && (i = t.keyCode = i - 48),
              (h = parseInt(String.fromCharCode(i))),
              isNaN(h) &&
                (13 !== i &&
                  8 !== i &&
                  9 !== i &&
                  189 !== i &&
                  (190 !== i || o.$.val().match(/\./)) &&
                  t.preventDefault(),
                -1 < c.inArray(i, [37, 38, 39, 40])))
            ) {
              t.preventDefault();
              var s = o.o.parse(o.$.val()) + l[i] * r;
              o.o.stopper && (s = u(d(s, o.o.max), o.o.min)),
                o.change(o._validate(s)),
                o._draw(),
                (n = window.setTimeout(function () {
                  r *= 2;
                }, 30));
            }
          }).bind("keyup", function (t) {
            isNaN(h)
              ? n &&
                (window.clearTimeout(n), (n = null), (r = 1), o.val(o.$.val()))
              : (o.$.val() > o.o.max && o.$.val(o.o.max)) ||
                (o.$.val() < o.o.min && o.$.val(o.o.min));
          }),
            this.$c.bind("mousewheel DOMMouseScroll", t),
            this.$.bind("mousewheel DOMMouseScroll", t);
        }),
        (this.init = function () {
          (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min),
            this.$.val(this.v),
            (this.w2 = this.w / 2),
            (this.cursorExt = this.o.cursor / 100),
            (this.xy = this.w2 * this.scale),
            (this.lineWidth = this.xy * this.o.thickness),
            (this.lineCap = this.o.lineCap),
            (this.radius = this.xy - this.lineWidth / 2),
            this.o.angleOffset &&
              (this.o.angleOffset = isNaN(this.o.angleOffset)
                ? 0
                : this.o.angleOffset),
            this.o.angleArc &&
              (this.o.angleArc = isNaN(this.o.angleArc)
                ? this.PI2
                : this.o.angleArc),
            (this.angleOffset = (this.o.angleOffset * Math.PI) / 180),
            (this.angleArc = (this.o.angleArc * Math.PI) / 180),
            (this.startAngle = 1.5 * Math.PI + this.angleOffset),
            (this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc);
          var t =
            u(
              String(Math.abs(this.o.max)).length,
              String(Math.abs(this.o.min)).length,
              2,
            ) + 2;
          (this.o.displayInput &&
            this.i.css({
              width: ((this.w / 2 + 4) >> 0) + "px",
              height: ((this.w / 3) >> 0) + "px",
              position: "absolute",
              "vertical-align": "middle",
              "margin-top": ((this.w / 3) >> 0) + "px",
              "margin-left": "-" + (((3 * this.w) / 4 + 2) >> 0) + "px",
              border: 0,
              background: "none",
              font:
                this.o.fontWeight +
                " " +
                ((this.w / t) >> 0) +
                "px " +
                this.o.font,
              "text-align": "center",
              color: this.o.inputColor || this.o.fgColor,
              padding: "0px",
              "-webkit-appearance": "none",
            })) ||
            this.i.css({ width: "0px", visibility: "hidden" });
        }),
        (this.change = function (t) {
          (this.cv = t), this.$.val(this.o.format(t));
        }),
        (this.angle = function (t) {
          return ((t - this.o.min) * this.angleArc) / (this.o.max - this.o.min);
        }),
        (this.arc = function (t) {
          var i, s;
          return (
            (t = this.angle(t)),
            (s = this.o.flip
              ? (i = this.endAngle + 1e-5) - t - 1e-5
              : (i = this.startAngle - 1e-5) + t + 1e-5),
            this.o.cursor && (i = s - this.cursorExt) && (s += this.cursorExt),
            { s: i, e: s, d: this.o.flip && !this.o.cursor }
          );
        }),
        (this.draw = function () {
          var t,
            i = this.g,
            s = this.arc(this.cv),
            h = 1;
          (i.lineWidth = this.lineWidth),
            (i.lineCap = this.lineCap),
            "none" !== this.o.bgColor &&
              (i.beginPath(),
              (i.strokeStyle = this.o.bgColor),
              i.arc(
                this.xy,
                this.xy,
                this.radius,
                this.endAngle - 1e-5,
                this.startAngle + 1e-5,
                !0,
              ),
              i.stroke()),
            this.o.displayPrevious &&
              ((t = this.arc(this.v)),
              i.beginPath(),
              (i.strokeStyle = this.pColor),
              i.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d),
              i.stroke(),
              (h = this.cv == this.v)),
            i.beginPath(),
            (i.strokeStyle = h ? this.o.fgColor : this.fgColor),
            i.arc(this.xy, this.xy, this.radius, s.s, s.e, s.d),
            i.stroke();
        }),
        (this.cancel = function () {
          this.val(this.v);
        });
    }),
    (c.fn.dial = c.fn.knob =
      function (i) {
        return this.each(function () {
          var t = new s.Dial();
          (t.o = i), (t.$ = c(this)), t.run();
        }).parent();
      });
});
