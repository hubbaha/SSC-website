!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define(e)
      : (t.c3 = e());
})(this, function () {
  "use strict";
  function r(t, e) {
    var n = this;
    (n.component = t),
      (n.params = e || {}),
      (n.d3 = t.d3),
      (n.scale = n.d3.scale.linear()),
      n.range,
      (n.orient = "bottom"),
      (n.innerTickSize = 6),
      (n.outerTickSize = this.params.withOuterTick ? 6 : 0),
      (n.tickPadding = 3),
      (n.tickValues = null),
      n.tickFormat,
      n.tickArguments,
      (n.tickOffset = 0),
      (n.tickCulling = !0),
      n.tickCentered,
      n.tickTextCharSize,
      (n.tickTextRotate = n.params.tickTextRotate),
      n.tickLength,
      (n.axis = n.generateAxis());
  }
  function e(t) {
    var e = (this.internal = new n(this));
    e.loadConfig(t),
      e.beforeInit(t),
      e.init(),
      e.afterInit(t),
      (function e(n, i, r) {
        Object.keys(n).forEach(function (t) {
          (i[t] = n[t].bind(r)),
            0 < Object.keys(n[t]).length && e(n[t], i[t], r);
        });
      })(y, this, this);
  }
  function n(t) {
    var e = this;
    (e.d3 = window.d3
      ? window.d3
      : "undefined" != typeof require
        ? require("d3")
        : void 0),
      (e.api = t),
      (e.config = e.getDefaultConfig()),
      (e.data = {}),
      (e.cache = {}),
      (e.axes = {});
  }
  var a,
    o,
    X = {
      target: "c3-target",
      chart: "c3-chart",
      chartLine: "c3-chart-line",
      chartLines: "c3-chart-lines",
      chartBar: "c3-chart-bar",
      chartBars: "c3-chart-bars",
      chartText: "c3-chart-text",
      chartTexts: "c3-chart-texts",
      chartArc: "c3-chart-arc",
      chartArcs: "c3-chart-arcs",
      chartArcsTitle: "c3-chart-arcs-title",
      chartArcsBackground: "c3-chart-arcs-background",
      chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit",
      chartArcsGaugeMax: "c3-chart-arcs-gauge-max",
      chartArcsGaugeMin: "c3-chart-arcs-gauge-min",
      selectedCircle: "c3-selected-circle",
      selectedCircles: "c3-selected-circles",
      eventRect: "c3-event-rect",
      eventRects: "c3-event-rects",
      eventRectsSingle: "c3-event-rects-single",
      eventRectsMultiple: "c3-event-rects-multiple",
      zoomRect: "c3-zoom-rect",
      brush: "c3-brush",
      focused: "c3-focused",
      defocused: "c3-defocused",
      region: "c3-region",
      regions: "c3-regions",
      title: "c3-title",
      tooltipContainer: "c3-tooltip-container",
      tooltip: "c3-tooltip",
      tooltipName: "c3-tooltip-name",
      shape: "c3-shape",
      shapes: "c3-shapes",
      line: "c3-line",
      lines: "c3-lines",
      bar: "c3-bar",
      bars: "c3-bars",
      circle: "c3-circle",
      circles: "c3-circles",
      arc: "c3-arc",
      arcs: "c3-arcs",
      area: "c3-area",
      areas: "c3-areas",
      empty: "c3-empty",
      text: "c3-text",
      texts: "c3-texts",
      gaugeValue: "c3-gauge-value",
      grid: "c3-grid",
      gridLines: "c3-grid-lines",
      xgrid: "c3-xgrid",
      xgrids: "c3-xgrids",
      xgridLine: "c3-xgrid-line",
      xgridLines: "c3-xgrid-lines",
      xgridFocus: "c3-xgrid-focus",
      ygrid: "c3-ygrid",
      ygrids: "c3-ygrids",
      ygridLine: "c3-ygrid-line",
      ygridLines: "c3-ygrid-lines",
      axis: "c3-axis",
      axisX: "c3-axis-x",
      axisXLabel: "c3-axis-x-label",
      axisY: "c3-axis-y",
      axisYLabel: "c3-axis-y-label",
      axisY2: "c3-axis-y2",
      axisY2Label: "c3-axis-y2-label",
      legendBackground: "c3-legend-background",
      legendItem: "c3-legend-item",
      legendItemEvent: "c3-legend-item-event",
      legendItemTile: "c3-legend-item-tile",
      legendItemHidden: "c3-legend-item-hidden",
      legendItemFocused: "c3-legend-item-focused",
      dragarea: "c3-dragarea",
      EXPANDED: "_expanded_",
      SELECTED: "_selected_",
      INCLUDED: "_included_",
    },
    s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    P = function (t) {
      return t || 0 === t;
    },
    h = function (t) {
      return "function" == typeof t;
    },
    u = function (t) {
      return Array.isArray(t);
    },
    c = function (t) {
      return "string" == typeof t;
    },
    l = function (t) {
      return void 0 === t;
    },
    d = function (t) {
      return void 0 !== t;
    },
    i = function (t) {
      return 10 * Math.ceil(t / 10);
    },
    f = function (t) {
      return Math.ceil(t) + 0.5;
    },
    O = function (t) {
      return t[1] - t[0];
    },
    g = function (t) {
      return (
        null == t ||
        (c(t) && 0 === t.length) ||
        ("object" === (void 0 === t ? "undefined" : s(t)) &&
          0 === Object.keys(t).length)
      );
    },
    C = function (t) {
      return !m.isEmpty(t);
    },
    H = function (t, e, n) {
      return void 0 !== t[e] ? t[e] : n;
    },
    p = function (e, n) {
      var i = !1;
      return (
        Object.keys(e).forEach(function (t) {
          e[t] === n && (i = !0);
        }),
        i
      );
    },
    x = function (t) {
      return "string" == typeof t
        ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        : t;
    },
    v = function (t) {
      var e = t.getBoundingClientRect(),
        n = [t.pathSegList.getItem(0), t.pathSegList.getItem(1)];
      return {
        x: n[0].x,
        y: Math.min(n[0].y, n[1].y),
        width: e.width,
        height: e.height,
      };
    };
  ((o = r.prototype).axisX = function (t, e, n) {
    t.attr("transform", function (t) {
      return "translate(" + Math.ceil(e(t) + n) + ", 0)";
    });
  }),
    (o.axisY = function (t, e) {
      t.attr("transform", function (t) {
        return "translate(0," + Math.ceil(e(t)) + ")";
      });
    }),
    (o.scaleExtent = function (t) {
      var e = t[0],
        n = t[t.length - 1];
      return e < n ? [e, n] : [n, e];
    }),
    (o.generateTicks = function (t) {
      var e,
        n,
        i = [];
      if (t.ticks) return t.ticks.apply(t, this.tickArguments);
      for (n = t.domain(), e = Math.ceil(n[0]); e < n[1]; e++) i.push(e);
      return 0 < i.length && 0 < i[0] && i.unshift(i[0] - (i[1] - i[0])), i;
    }),
    (o.copyScale = function () {
      var t,
        e = this.scale.copy();
      return (
        this.params.isCategory &&
          ((t = this.scale.domain()), e.domain([t[0], t[1] - 1])),
        e
      );
    }),
    (o.textFormatted = function (t) {
      var e = this.tickFormat ? this.tickFormat(t) : t;
      return void 0 !== e ? e : "";
    }),
    (o.updateRange = function () {
      var t = this;
      return (
        (t.range = t.scale.rangeExtent
          ? t.scale.rangeExtent()
          : t.scaleExtent(t.scale.range())),
        t.range
      );
    }),
    (o.updateTickTextCharSize = function (t) {
      var a = this;
      if (a.tickTextCharSize) return a.tickTextCharSize;
      var o = { h: 11.5, w: 5.5 };
      return (
        t
          .select("text")
          .text(function (t) {
            return a.textFormatted(t);
          })
          .each(function (t) {
            var e = this.getBoundingClientRect(),
              n = a.textFormatted(t),
              i = e.height,
              r = n ? e.width / n.length : void 0;
            i && r && ((o.h = i), (o.w = r));
          })
          .text(""),
        (a.tickTextCharSize = o)
      );
    }),
    (o.transitionise = function (t) {
      return this.params.withoutTransition ? t : this.d3.transition(t);
    }),
    (o.isVertical = function () {
      return "left" === this.orient || "right" === this.orient;
    }),
    (o.tspanData = function (t, e, n, i) {
      var r = this.params.tickMultiline
        ? this.splitTickText(t, n, i)
        : [].concat(this.textFormatted(t));
      return r.map(function (t) {
        return { index: e, splitted: t, length: r.length };
      });
    }),
    (o.splitTickText = function (t, e, n) {
      var r,
        a,
        o,
        s = this,
        i = s.textFormatted(t),
        u = s.params.tickWidth;
      return "[object Array]" === Object.prototype.toString.call(i)
        ? i
        : ((!u || u <= 0) &&
            (u = s.isVertical()
              ? 95
              : s.params.isCategory
                ? Math.ceil(n(e[1]) - n(e[0])) - 12
                : 110),
          (function t(e, n) {
            a = void 0;
            for (var i = 1; i < n.length; i++)
              if (
                (" " === n.charAt(i) && (a = i),
                (r = n.substr(0, i + 1)),
                (o = s.tickTextCharSize.w * r.length),
                u < o)
              )
                return t(e.concat(n.substr(0, a || i)), n.slice(a ? a + 1 : i));
            return e.concat(n);
          })([], i + ""));
    }),
    (o.updateTickLength = function () {
      this.tickLength = Math.max(this.innerTickSize, 0) + this.tickPadding;
    }),
    (o.lineY2 = function (t) {
      var e = this,
        n = e.scale(t) + (e.tickCentered ? 0 : e.tickOffset);
      return e.range[0] < n && n < e.range[1] ? e.innerTickSize : 0;
    }),
    (o.textY = function () {
      var t = this.tickTextRotate;
      return t ? 11.5 - (t / 15) * 2.5 * (0 < t ? 1 : -1) : this.tickLength;
    }),
    (o.textTransform = function () {
      var t = this.tickTextRotate;
      return t ? "rotate(" + t + ")" : "";
    }),
    (o.textTextAnchor = function () {
      var t = this.tickTextRotate;
      return t ? (0 < t ? "start" : "end") : "middle";
    }),
    (o.tspanDx = function () {
      var t = this.tickTextRotate;
      return t ? 8 * Math.sin(Math.PI * (t / 180)) : 0;
    }),
    (o.tspanDy = function (t, e) {
      var n = this.tickTextCharSize.h;
      return (
        0 === e &&
          (n = this.isVertical()
            ? -((t.length - 1) * (this.tickTextCharSize.h / 2) - 3)
            : ".71em"),
        n
      );
    }),
    (o.generateAxis = function () {
      function v(t) {
        t.each(function () {
          var t,
            e,
            n,
            i = (v.g = m.select(this)),
            r = this.__chart__ || y.scale,
            a = (this.__chart__ = y.copyScale()),
            o = y.tickValues ? y.tickValues : y.generateTicks(a),
            s = i.selectAll(".tick").data(o, a),
            u = s
              .enter()
              .insert("g", ".domain")
              .attr("class", "tick")
              .style("opacity", 1e-6),
            c = s.exit().remove(),
            l = y.transitionise(s).style("opacity", 1);
          w.isCategory
            ? ((y.tickOffset = Math.ceil((a(1) - a(0)) / 2)),
              (e = y.tickCentered ? 0 : y.tickOffset),
              (n = y.tickCentered ? y.tickOffset : 0))
            : (y.tickOffset = e = 0),
            u.append("line"),
            u.append("text"),
            y.updateRange(),
            y.updateTickLength(),
            y.updateTickTextCharSize(i.select(".tick"));
          var h = l.select("line"),
            d = l.select("text"),
            f = s
              .select("text")
              .selectAll("tspan")
              .data(function (t, e) {
                return y.tspanData(t, e, o, a);
              });
          f.enter().append("tspan"),
            f.exit().remove(),
            f.text(function (t) {
              return t.splitted;
            });
          var g = i.selectAll(".domain").data([0]),
            p =
              (g.enter().append("path").attr("class", "domain"),
              y.transitionise(g));
          switch (y.orient) {
            case "bottom":
              (t = y.axisX),
                h
                  .attr("x1", e)
                  .attr("x2", e)
                  .attr("y2", function (t, e) {
                    return y.lineY2(t, e);
                  }),
                d
                  .attr("x", 0)
                  .attr("y", function (t, e) {
                    return y.textY(t, e);
                  })
                  .attr("transform", function (t, e) {
                    return y.textTransform(t, e);
                  })
                  .style("text-anchor", function (t, e) {
                    return y.textTextAnchor(t, e);
                  }),
                f
                  .attr("x", 0)
                  .attr("dy", function (t, e) {
                    return y.tspanDy(t, e);
                  })
                  .attr("dx", function (t, e) {
                    return y.tspanDx(t, e);
                  }),
                p.attr(
                  "d",
                  "M" +
                    y.range[0] +
                    "," +
                    y.outerTickSize +
                    "V0H" +
                    y.range[1] +
                    "V" +
                    y.outerTickSize,
                );
              break;
            case "top":
              (t = y.axisX),
                h.attr("x2", 0).attr("y2", -y.innerTickSize),
                d
                  .attr("x", 0)
                  .attr("y", -y.tickLength)
                  .style("text-anchor", "middle"),
                f.attr("x", 0).attr("dy", "0em"),
                p.attr(
                  "d",
                  "M" +
                    y.range[0] +
                    "," +
                    -y.outerTickSize +
                    "V0H" +
                    y.range[1] +
                    "V" +
                    -y.outerTickSize,
                );
              break;
            case "left":
              (t = y.axisY),
                h.attr("x2", -y.innerTickSize).attr("y1", n).attr("y2", n),
                d
                  .attr("x", -y.tickLength)
                  .attr("y", y.tickOffset)
                  .style("text-anchor", "end"),
                f.attr("x", -y.tickLength).attr("dy", function (t, e) {
                  return y.tspanDy(t, e);
                }),
                p.attr(
                  "d",
                  "M" +
                    -y.outerTickSize +
                    "," +
                    y.range[0] +
                    "H0V" +
                    y.range[1] +
                    "H" +
                    -y.outerTickSize,
                );
              break;
            case "right":
              (t = y.axisY),
                h.attr("x2", y.innerTickSize).attr("y2", 0),
                d
                  .attr("x", y.tickLength)
                  .attr("y", 0)
                  .style("text-anchor", "start"),
                f.attr("x", y.tickLength).attr("dy", function (t, e) {
                  return y.tspanDy(t, e);
                }),
                p.attr(
                  "d",
                  "M" +
                    y.outerTickSize +
                    "," +
                    y.range[0] +
                    "H0V" +
                    y.range[1] +
                    "H" +
                    y.outerTickSize,
                );
          }
          if (a.rangeBand) {
            var x = a,
              _ = x.rangeBand() / 2;
            r = a = function (t) {
              return x(t) + _;
            };
          } else r.rangeBand ? (r = a) : c.call(t, a, y.tickOffset);
          u.call(t, r, y.tickOffset), l.call(t, a, y.tickOffset);
        });
      }
      var y = this,
        m = y.d3,
        w = y.params;
      return (
        (v.scale = function (t) {
          return arguments.length ? ((y.scale = t), v) : y.scale;
        }),
        (v.orient = function (t) {
          return arguments.length
            ? ((y.orient =
                t in { top: 1, right: 1, bottom: 1, left: 1 }
                  ? t + ""
                  : "bottom"),
              v)
            : y.orient;
        }),
        (v.tickFormat = function (t) {
          return arguments.length ? ((y.tickFormat = t), v) : y.tickFormat;
        }),
        (v.tickCentered = function (t) {
          return arguments.length ? ((y.tickCentered = t), v) : y.tickCentered;
        }),
        (v.tickOffset = function () {
          return y.tickOffset;
        }),
        (v.tickInterval = function () {
          var t;
          return (t = w.isCategory
            ? 2 * y.tickOffset
            : (v.g.select("path.domain").node().getTotalLength() -
                2 * y.outerTickSize) /
              v.g.selectAll("line").size()) ===
            1 / 0
            ? 0
            : t;
        }),
        (v.ticks = function () {
          return arguments.length
            ? ((y.tickArguments = arguments), v)
            : y.tickArguments;
        }),
        (v.tickCulling = function (t) {
          return arguments.length ? ((y.tickCulling = t), v) : y.tickCulling;
        }),
        (v.tickValues = function (t) {
          if ("function" == typeof t)
            y.tickValues = function () {
              return t(y.scale.domain());
            };
          else {
            if (!arguments.length) return y.tickValues;
            y.tickValues = t;
          }
          return v;
        }),
        v
      );
    });
  var _ = (function (t) {
    function i(t) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, i);
      var e = { fn: a, internal: { fn: o } },
        n = (function (t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        })(
          this,
          (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, "axis", e),
        );
      return (n.d3 = t.d3), (n.internal = r), n;
    }
    return (
      (function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      })(i, function (t, e, n) {
        (this.owner = t), (w.chart.internal[e] = n);
      }),
      i
    );
  })();
  ((a = _.prototype).init = function () {
    var t = this.owner,
      e = t.config,
      n = t.main;
    (t.axes.x = n
      .append("g")
      .attr("class", X.axis + " " + X.axisX)
      .attr("clip-path", t.clipPathForXAxis)
      .attr("transform", t.getTranslate("x"))
      .style("visibility", e.axis_x_show ? "visible" : "hidden")),
      t.axes.x
        .append("text")
        .attr("class", X.axisXLabel)
        .attr("transform", e.axis_rotated ? "rotate(-90)" : "")
        .style("text-anchor", this.textAnchorForXAxisLabel.bind(this)),
      (t.axes.y = n
        .append("g")
        .attr("class", X.axis + " " + X.axisY)
        .attr("clip-path", e.axis_y_inner ? "" : t.clipPathForYAxis)
        .attr("transform", t.getTranslate("y"))
        .style("visibility", e.axis_y_show ? "visible" : "hidden")),
      t.axes.y
        .append("text")
        .attr("class", X.axisYLabel)
        .attr("transform", e.axis_rotated ? "" : "rotate(-90)")
        .style("text-anchor", this.textAnchorForYAxisLabel.bind(this)),
      (t.axes.y2 = n
        .append("g")
        .attr("class", X.axis + " " + X.axisY2)
        .attr("transform", t.getTranslate("y2"))
        .style("visibility", e.axis_y2_show ? "visible" : "hidden")),
      t.axes.y2
        .append("text")
        .attr("class", X.axisY2Label)
        .attr("transform", e.axis_rotated ? "" : "rotate(-90)")
        .style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
  }),
    (a.getXAxis = function (t, e, n, i, r, a, o) {
      var s = this.owner,
        u = s.config,
        c = {
          isCategory: s.isCategorized(),
          withOuterTick: r,
          tickMultiline: u.axis_x_tick_multiline,
          tickWidth: u.axis_x_tick_width,
          tickTextRotate: o ? 0 : u.axis_x_tick_rotate,
          withoutTransition: a,
        },
        l = new this.internal(this, c).axis.scale(t).orient(e);
      return (
        s.isTimeSeries() &&
          i &&
          "function" != typeof i &&
          (i = i.map(function (t) {
            return s.parseDate(t);
          })),
        l.tickFormat(n).tickValues(i),
        s.isCategorized() &&
          (l.tickCentered(u.axis_x_tick_centered),
          g(u.axis_x_tick_culling) && (u.axis_x_tick_culling = !1)),
        l
      );
    }),
    (a.updateXAxisTickValues = function (t, e) {
      var n,
        i = this.owner,
        r = i.config;
      return (
        (r.axis_x_tick_fit || r.axis_x_tick_count) &&
          (n = this.generateTickValues(
            i.mapTargetsToUniqueXs(t),
            r.axis_x_tick_count,
            i.isTimeSeries(),
          )),
        e ? e.tickValues(n) : (i.xAxis.tickValues(n), i.subXAxis.tickValues(n)),
        n
      );
    }),
    (a.getYAxis = function (t, e, n, i, r, a, o) {
      var s = this.owner,
        u = s.config,
        c = {
          withOuterTick: r,
          withoutTransition: a,
          tickTextRotate: o ? 0 : u.axis_y_tick_rotate,
        },
        l = new this.internal(this, c).axis.scale(t).orient(e).tickFormat(n);
      return (
        s.isTimeSeriesY()
          ? l.ticks(
              s.d3.time[u.axis_y_tick_time_value],
              u.axis_y_tick_time_interval,
            )
          : l.tickValues(i),
        l
      );
    }),
    (a.getId = function (t) {
      var e = this.owner.config;
      return t in e.data_axes ? e.data_axes[t] : "y";
    }),
    (a.getXAxisTickFormat = function () {
      var e = this.owner,
        n = e.config,
        i = e.isTimeSeries()
          ? e.defaultAxisTimeFormat
          : e.isCategorized()
            ? e.categoryName
            : function (t) {
                return t < 0 ? t.toFixed(0) : t;
              };
      return (
        n.axis_x_tick_format &&
          (h(n.axis_x_tick_format)
            ? (i = n.axis_x_tick_format)
            : e.isTimeSeries() &&
              (i = function (t) {
                return t ? e.axisTimeFormat(n.axis_x_tick_format)(t) : "";
              })),
        h(i)
          ? function (t) {
              return i.call(e, t);
            }
          : i
      );
    }),
    (a.getTickValues = function (t, e) {
      return t || (e ? e.tickValues() : void 0);
    }),
    (a.getXAxisTickValues = function () {
      return this.getTickValues(
        this.owner.config.axis_x_tick_values,
        this.owner.xAxis,
      );
    }),
    (a.getYAxisTickValues = function () {
      return this.getTickValues(
        this.owner.config.axis_y_tick_values,
        this.owner.yAxis,
      );
    }),
    (a.getY2AxisTickValues = function () {
      return this.getTickValues(
        this.owner.config.axis_y2_tick_values,
        this.owner.y2Axis,
      );
    }),
    (a.getLabelOptionByAxisId = function (t) {
      var e,
        n = this.owner.config;
      return (
        "y" === t
          ? (e = n.axis_y_label)
          : "y2" === t
            ? (e = n.axis_y2_label)
            : "x" === t && (e = n.axis_x_label),
        e
      );
    }),
    (a.getLabelText = function (t) {
      var e = this.getLabelOptionByAxisId(t);
      return c(e) ? e : e ? e.text : null;
    }),
    (a.setLabelText = function (t, e) {
      var n = this.owner.config,
        i = this.getLabelOptionByAxisId(t);
      c(i)
        ? "y" === t
          ? (n.axis_y_label = e)
          : "y2" === t
            ? (n.axis_y2_label = e)
            : "x" === t && (n.axis_x_label = e)
        : i && (i.text = e);
    }),
    (a.getLabelPosition = function (t, e) {
      var n = this.getLabelOptionByAxisId(t),
        i =
          n && "object" === (void 0 === n ? "undefined" : s(n)) && n.position
            ? n.position
            : e;
      return {
        isInner: 0 <= i.indexOf("inner"),
        isOuter: 0 <= i.indexOf("outer"),
        isLeft: 0 <= i.indexOf("left"),
        isCenter: 0 <= i.indexOf("center"),
        isRight: 0 <= i.indexOf("right"),
        isTop: 0 <= i.indexOf("top"),
        isMiddle: 0 <= i.indexOf("middle"),
        isBottom: 0 <= i.indexOf("bottom"),
      };
    }),
    (a.getXAxisLabelPosition = function () {
      return this.getLabelPosition(
        "x",
        this.owner.config.axis_rotated ? "inner-top" : "inner-right",
      );
    }),
    (a.getYAxisLabelPosition = function () {
      return this.getLabelPosition(
        "y",
        this.owner.config.axis_rotated ? "inner-right" : "inner-top",
      );
    }),
    (a.getY2AxisLabelPosition = function () {
      return this.getLabelPosition(
        "y2",
        this.owner.config.axis_rotated ? "inner-right" : "inner-top",
      );
    }),
    (a.getLabelPositionById = function (t) {
      return "y2" === t
        ? this.getY2AxisLabelPosition()
        : "y" === t
          ? this.getYAxisLabelPosition()
          : this.getXAxisLabelPosition();
    }),
    (a.textForXAxisLabel = function () {
      return this.getLabelText("x");
    }),
    (a.textForYAxisLabel = function () {
      return this.getLabelText("y");
    }),
    (a.textForY2AxisLabel = function () {
      return this.getLabelText("y2");
    }),
    (a.xForAxisLabel = function (t, e) {
      var n = this.owner;
      return t
        ? e.isLeft
          ? 0
          : e.isCenter
            ? n.width / 2
            : n.width
        : e.isBottom
          ? -n.height
          : e.isMiddle
            ? -n.height / 2
            : 0;
    }),
    (a.dxForAxisLabel = function (t, e) {
      return t
        ? e.isLeft
          ? "0.5em"
          : e.isRight
            ? "-0.5em"
            : "0"
        : e.isTop
          ? "-0.5em"
          : e.isBottom
            ? "0.5em"
            : "0";
    }),
    (a.textAnchorForAxisLabel = function (t, e) {
      return t
        ? e.isLeft
          ? "start"
          : e.isCenter
            ? "middle"
            : "end"
        : e.isBottom
          ? "start"
          : e.isMiddle
            ? "middle"
            : "end";
    }),
    (a.xForXAxisLabel = function () {
      return this.xForAxisLabel(
        !this.owner.config.axis_rotated,
        this.getXAxisLabelPosition(),
      );
    }),
    (a.xForYAxisLabel = function () {
      return this.xForAxisLabel(
        this.owner.config.axis_rotated,
        this.getYAxisLabelPosition(),
      );
    }),
    (a.xForY2AxisLabel = function () {
      return this.xForAxisLabel(
        this.owner.config.axis_rotated,
        this.getY2AxisLabelPosition(),
      );
    }),
    (a.dxForXAxisLabel = function () {
      return this.dxForAxisLabel(
        !this.owner.config.axis_rotated,
        this.getXAxisLabelPosition(),
      );
    }),
    (a.dxForYAxisLabel = function () {
      return this.dxForAxisLabel(
        this.owner.config.axis_rotated,
        this.getYAxisLabelPosition(),
      );
    }),
    (a.dxForY2AxisLabel = function () {
      return this.dxForAxisLabel(
        this.owner.config.axis_rotated,
        this.getY2AxisLabelPosition(),
      );
    }),
    (a.dyForXAxisLabel = function () {
      var t = this.owner.config,
        e = this.getXAxisLabelPosition();
      return t.axis_rotated
        ? e.isInner
          ? "1.2em"
          : -25 - this.getMaxTickWidth("x")
        : e.isInner
          ? "-0.5em"
          : t.axis_x_height
            ? t.axis_x_height - 10
            : "3em";
    }),
    (a.dyForYAxisLabel = function () {
      var t = this.owner,
        e = this.getYAxisLabelPosition();
      return t.config.axis_rotated
        ? e.isInner
          ? "-0.5em"
          : "3em"
        : e.isInner
          ? "1.2em"
          : -10 - (t.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10);
    }),
    (a.dyForY2AxisLabel = function () {
      var t = this.owner,
        e = this.getY2AxisLabelPosition();
      return t.config.axis_rotated
        ? e.isInner
          ? "1.2em"
          : "-2.2em"
        : e.isInner
          ? "-0.5em"
          : 15 + (t.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15);
    }),
    (a.textAnchorForXAxisLabel = function () {
      var t = this.owner;
      return this.textAnchorForAxisLabel(
        !t.config.axis_rotated,
        this.getXAxisLabelPosition(),
      );
    }),
    (a.textAnchorForYAxisLabel = function () {
      var t = this.owner;
      return this.textAnchorForAxisLabel(
        t.config.axis_rotated,
        this.getYAxisLabelPosition(),
      );
    }),
    (a.textAnchorForY2AxisLabel = function () {
      var t = this.owner;
      return this.textAnchorForAxisLabel(
        t.config.axis_rotated,
        this.getY2AxisLabelPosition(),
      );
    }),
    (a.getMaxTickWidth = function (t, e) {
      var n,
        i,
        r,
        a,
        o = this.owner,
        s = o.config,
        u = 0;
      return (
        (e && o.currentMaxTickWidths[t]) ||
          (o.svg &&
            ((n = o.filterTargetsToShow(o.data.targets)),
            "y" === t
              ? ((i = o.y.copy().domain(o.getYDomain(n, "y"))),
                (r = this.getYAxis(
                  i,
                  o.yOrient,
                  s.axis_y_tick_format,
                  o.yAxisTickValues,
                  !1,
                  !0,
                  !0,
                )))
              : "y2" === t
                ? ((i = o.y2.copy().domain(o.getYDomain(n, "y2"))),
                  (r = this.getYAxis(
                    i,
                    o.y2Orient,
                    s.axis_y2_tick_format,
                    o.y2AxisTickValues,
                    !1,
                    !0,
                    !0,
                  )))
                : ((i = o.x.copy().domain(o.getXDomain(n))),
                  (r = this.getXAxis(
                    i,
                    o.xOrient,
                    o.xAxisTickFormat,
                    o.xAxisTickValues,
                    !1,
                    !0,
                    !0,
                  )),
                  this.updateXAxisTickValues(n, r)),
            (a = o.d3.select("body").append("div").classed("c3", !0))
              .append("svg")
              .style("visibility", "hidden")
              .style("position", "fixed")
              .style("top", 0)
              .style("left", 0)
              .append("g")
              .call(r)
              .each(function () {
                o.d3
                  .select(this)
                  .selectAll("text")
                  .each(function () {
                    var t = this.getBoundingClientRect();
                    u < t.width && (u = t.width);
                  }),
                  a.remove();
              })),
          (o.currentMaxTickWidths[t] = u <= 0 ? o.currentMaxTickWidths[t] : u)),
        o.currentMaxTickWidths[t]
      );
    }),
    (a.updateLabels = function (t) {
      var e = this.owner,
        n = e.main.select("." + X.axisX + " ." + X.axisXLabel),
        i = e.main.select("." + X.axisY + " ." + X.axisYLabel),
        r = e.main.select("." + X.axisY2 + " ." + X.axisY2Label);
      (t ? n.transition() : n)
        .attr("x", this.xForXAxisLabel.bind(this))
        .attr("dx", this.dxForXAxisLabel.bind(this))
        .attr("dy", this.dyForXAxisLabel.bind(this))
        .text(this.textForXAxisLabel.bind(this)),
        (t ? i.transition() : i)
          .attr("x", this.xForYAxisLabel.bind(this))
          .attr("dx", this.dxForYAxisLabel.bind(this))
          .attr("dy", this.dyForYAxisLabel.bind(this))
          .text(this.textForYAxisLabel.bind(this)),
        (t ? r.transition() : r)
          .attr("x", this.xForY2AxisLabel.bind(this))
          .attr("dx", this.dxForY2AxisLabel.bind(this))
          .attr("dy", this.dyForY2AxisLabel.bind(this))
          .text(this.textForY2AxisLabel.bind(this));
    }),
    (a.getPadding = function (t, e, n, i) {
      var r = "number" == typeof t ? t : t[e];
      return P(r)
        ? "ratio" === t.unit
          ? t[e] * i
          : this.convertPixelsToAxisPadding(r, i)
        : n;
    }),
    (a.convertPixelsToAxisPadding = function (t, e) {
      var n = this.owner;
      return e * (t / (n.config.axis_rotated ? n.width : n.height));
    }),
    (a.generateTickValues = function (t, e, n) {
      var i,
        r,
        a,
        o,
        s,
        u,
        c,
        l = t;
      if (e)
        if (1 === (i = h(e) ? e() : e)) l = [t[0]];
        else if (2 === i) l = [t[0], t[t.length - 1]];
        else if (2 < i) {
          for (
            o = i - 2,
              r = t[0],
              s = ((a = t[t.length - 1]) - r) / (o + 1),
              l = [r],
              u = 0;
            u < o;
            u++
          )
            (c = +r + s * (u + 1)), l.push(n ? new Date(c) : c);
          l.push(a);
        }
      return (
        n ||
          (l = l.sort(function (t, e) {
            return t - e;
          })),
        l
      );
    }),
    (a.generateTransitions = function (t) {
      var e = this.owner.axes;
      return {
        axisX: t ? e.x.transition().duration(t) : e.x,
        axisY: t ? e.y.transition().duration(t) : e.y,
        axisY2: t ? e.y2.transition().duration(t) : e.y2,
        axisSubX: t ? e.subx.transition().duration(t) : e.subx,
      };
    }),
    (a.redraw = function (t, e) {
      var n = this.owner;
      n.axes.x.style("opacity", e ? 0 : 1),
        n.axes.y.style("opacity", e ? 0 : 1),
        n.axes.y2.style("opacity", e ? 0 : 1),
        n.axes.subx.style("opacity", e ? 0 : 1),
        t.axisX.call(n.xAxis),
        t.axisY.call(n.yAxis),
        t.axisY2.call(n.y2Axis),
        t.axisSubX.call(n.subXAxis);
    });
  var y,
    m,
    w = {
      version: "0.4.18",
      generate: function (t) {
        return new e(t);
      },
    };
  return (
    (w.chart = { fn: e.prototype, internal: { fn: n.prototype } }),
    (y = w.chart.fn),
    ((m = w.chart.internal.fn).beforeInit = function () {}),
    (m.afterInit = function () {}),
    (m.init = function () {
      var t = this,
        e = t.config;
      if ((t.initParams(), e.data_url))
        t.convertUrlToData(
          e.data_url,
          e.data_mimeType,
          e.data_headers,
          e.data_keys,
          t.initWithData,
        );
      else if (e.data_json)
        t.initWithData(t.convertJsonToData(e.data_json, e.data_keys));
      else if (e.data_rows) t.initWithData(t.convertRowsToData(e.data_rows));
      else {
        if (!e.data_columns)
          throw Error("url or json or rows or columns is required.");
        t.initWithData(t.convertColumnsToData(e.data_columns));
      }
    }),
    (m.initParams = function () {
      var t = this,
        e = t.d3,
        n = t.config;
      (t.clipId = "c3-" + +new Date() + "-clip"),
        (t.clipIdForXAxis = t.clipId + "-xaxis"),
        (t.clipIdForYAxis = t.clipId + "-yaxis"),
        (t.clipIdForGrid = t.clipId + "-grid"),
        (t.clipIdForSubchart = t.clipId + "-subchart"),
        (t.clipPath = t.getClipPath(t.clipId)),
        (t.clipPathForXAxis = t.getClipPath(t.clipIdForXAxis)),
        (t.clipPathForYAxis = t.getClipPath(t.clipIdForYAxis)),
        (t.clipPathForGrid = t.getClipPath(t.clipIdForGrid)),
        (t.clipPathForSubchart = t.getClipPath(t.clipIdForSubchart)),
        (t.dragStart = null),
        (t.dragging = !1),
        (t.flowing = !1),
        (t.cancelClick = !1),
        (t.mouseover = !1),
        (t.transiting = !1),
        (t.color = t.generateColor()),
        (t.levelColor = t.generateLevelColor()),
        (t.dataTimeFormat = n.data_xLocaltime
          ? e.time.format
          : e.time.format.utc),
        (t.axisTimeFormat = n.axis_x_localtime
          ? e.time.format
          : e.time.format.utc),
        (t.defaultAxisTimeFormat = t.axisTimeFormat.multi([
          [
            ".%L",
            function (t) {
              return t.getMilliseconds();
            },
          ],
          [
            ":%S",
            function (t) {
              return t.getSeconds();
            },
          ],
          [
            "%I:%M",
            function (t) {
              return t.getMinutes();
            },
          ],
          [
            "%I %p",
            function (t) {
              return t.getHours();
            },
          ],
          [
            "%-m/%-d",
            function (t) {
              return t.getDay() && 1 !== t.getDate();
            },
          ],
          [
            "%-m/%-d",
            function (t) {
              return 1 !== t.getDate();
            },
          ],
          [
            "%-m/%-d",
            function (t) {
              return t.getMonth();
            },
          ],
          [
            "%Y/%-m/%-d",
            function () {
              return !0;
            },
          ],
        ])),
        (t.hiddenTargetIds = []),
        (t.hiddenLegendIds = []),
        (t.focusedTargetIds = []),
        (t.defocusedTargetIds = []),
        (t.xOrient = n.axis_rotated ? "left" : "bottom"),
        (t.yOrient = n.axis_rotated
          ? n.axis_y_inner
            ? "top"
            : "bottom"
          : n.axis_y_inner
            ? "right"
            : "left"),
        (t.y2Orient = n.axis_rotated
          ? n.axis_y2_inner
            ? "bottom"
            : "top"
          : n.axis_y2_inner
            ? "left"
            : "right"),
        (t.subXOrient = n.axis_rotated ? "left" : "bottom"),
        (t.isLegendRight = "right" === n.legend_position),
        (t.isLegendInset = "inset" === n.legend_position),
        (t.isLegendTop =
          "top-left" === n.legend_inset_anchor ||
          "top-right" === n.legend_inset_anchor),
        (t.isLegendLeft =
          "top-left" === n.legend_inset_anchor ||
          "bottom-left" === n.legend_inset_anchor),
        (t.legendStep = 0),
        (t.legendItemWidth = 0),
        (t.legendItemHeight = 0),
        (t.currentMaxTickWidths = { x: 0, y: 0, y2: 0 }),
        (t.rotated_padding_left = 30),
        (t.rotated_padding_right = n.axis_rotated && !n.axis_x_show ? 0 : 30),
        (t.rotated_padding_top = 5),
        (t.withoutFadeIn = {}),
        (t.intervalForObserveInserted = void 0),
        (t.axes.subx = e.selectAll([]));
    }),
    (m.initChartElements = function () {
      this.initBar && this.initBar(),
        this.initLine && this.initLine(),
        this.initArc && this.initArc(),
        this.initGauge && this.initGauge(),
        this.initText && this.initText();
    }),
    (m.initWithData = function (t) {
      var e,
        n,
        i = this,
        r = i.d3,
        a = i.config,
        o = !0;
      (i.axis = new _(i)),
        i.initPie && i.initPie(),
        i.initBrush && i.initBrush(),
        i.initZoom && i.initZoom(),
        a.bindto
          ? "function" == typeof a.bindto.node
            ? (i.selectChart = a.bindto)
            : (i.selectChart = r.select(a.bindto))
          : (i.selectChart = r.selectAll([])),
        i.selectChart.empty() &&
          ((i.selectChart = r
            .select(document.createElement("div"))
            .style("opacity", 0)),
          i.observeInserted(i.selectChart),
          (o = !1)),
        i.selectChart.html("").classed("c3", !0),
        (i.data.xs = {}),
        (i.data.targets = i.convertDataToTargets(t)),
        a.data_filter &&
          (i.data.targets = i.data.targets.filter(a.data_filter)),
        a.data_hide &&
          i.addHiddenTargetIds(
            !0 === a.data_hide ? i.mapToIds(i.data.targets) : a.data_hide,
          ),
        a.legend_hide &&
          i.addHiddenLegendIds(
            !0 === a.legend_hide ? i.mapToIds(i.data.targets) : a.legend_hide,
          ),
        i.hasType("gauge") && (a.legend_show = !1),
        i.updateSizes(),
        i.updateScales(),
        i.x.domain(r.extent(i.getXDomain(i.data.targets))),
        i.y.domain(i.getYDomain(i.data.targets, "y")),
        i.y2.domain(i.getYDomain(i.data.targets, "y2")),
        i.subX.domain(i.x.domain()),
        i.subY.domain(i.y.domain()),
        i.subY2.domain(i.y2.domain()),
        (i.orgXDomain = i.x.domain()),
        i.brush && i.brush.scale(i.subX),
        a.zoom_enabled && i.zoom.scale(i.x),
        (i.svg = i.selectChart
          .append("svg")
          .style("overflow", "hidden")
          .on("mouseenter", function () {
            return a.onmouseover.call(i);
          })
          .on("mouseleave", function () {
            return a.onmouseout.call(i);
          })),
        i.config.svg_classname && i.svg.attr("class", i.config.svg_classname),
        (e = i.svg.append("defs")),
        (i.clipChart = i.appendClip(e, i.clipId)),
        (i.clipXAxis = i.appendClip(e, i.clipIdForXAxis)),
        (i.clipYAxis = i.appendClip(e, i.clipIdForYAxis)),
        (i.clipGrid = i.appendClip(e, i.clipIdForGrid)),
        (i.clipSubchart = i.appendClip(e, i.clipIdForSubchart)),
        i.updateSvgSize(),
        (n = i.main =
          i.svg.append("g").attr("transform", i.getTranslate("main"))),
        i.initSubchart && i.initSubchart(),
        i.initTooltip && i.initTooltip(),
        i.initLegend && i.initLegend(),
        i.initTitle && i.initTitle(),
        n
          .append("text")
          .attr("class", X.text + " " + X.empty)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle"),
        i.initRegion(),
        i.initGrid(),
        n.append("g").attr("clip-path", i.clipPath).attr("class", X.chart),
        a.grid_lines_front && i.initGridLines(),
        i.initEventRect(),
        i.initChartElements(),
        n
          .insert("rect", a.zoom_privileged ? null : "g." + X.regions)
          .attr("class", X.zoomRect)
          .attr("width", i.width)
          .attr("height", i.height)
          .style("opacity", 0)
          .on("dblclick.zoom", null),
        a.axis_x_extent && i.brush.extent(i.getDefaultExtent()),
        i.axis.init(),
        i.updateTargets(i.data.targets),
        o &&
          (i.updateDimension(),
          i.config.oninit.call(i),
          i.redraw({
            withTransition: !1,
            withTransform: !0,
            withUpdateXDomain: !0,
            withUpdateOrgXDomain: !0,
            withTransitionForAxis: !1,
          })),
        i.bindResize(),
        (i.api.element = i.selectChart.node());
    }),
    (m.smoothLines = function (t, e) {
      var a = this;
      "grid" === e &&
        t.each(function () {
          var t = a.d3.select(this),
            e = t.attr("x1"),
            n = t.attr("x2"),
            i = t.attr("y1"),
            r = t.attr("y2");
          t.attr({
            x1: Math.ceil(e),
            x2: Math.ceil(n),
            y1: Math.ceil(i),
            y2: Math.ceil(r),
          });
        });
    }),
    (m.updateSizes = function () {
      var t = this,
        e = t.config,
        n = t.legend ? t.getLegendHeight() : 0,
        i = t.legend ? t.getLegendWidth() : 0,
        r = t.isLegendRight || t.isLegendInset ? 0 : n,
        a = t.hasArcType(),
        o = e.axis_rotated || a ? 0 : t.getHorizontalAxisHeight("x"),
        s = e.subchart_show && !a ? e.subchart_size_height + o : 0;
      (t.currentWidth = t.getCurrentWidth()),
        (t.currentHeight = t.getCurrentHeight()),
        (t.margin = e.axis_rotated
          ? {
              top: t.getHorizontalAxisHeight("y2") + t.getCurrentPaddingTop(),
              right: a ? 0 : t.getCurrentPaddingRight(),
              bottom:
                t.getHorizontalAxisHeight("y") +
                r +
                t.getCurrentPaddingBottom(),
              left: s + (a ? 0 : t.getCurrentPaddingLeft()),
            }
          : {
              top: 4 + t.getCurrentPaddingTop(),
              right: a ? 0 : t.getCurrentPaddingRight(),
              bottom: o + s + r + t.getCurrentPaddingBottom(),
              left: a ? 0 : t.getCurrentPaddingLeft(),
            }),
        (t.margin2 = e.axis_rotated
          ? {
              top: t.margin.top,
              right: NaN,
              bottom: 20 + r,
              left: t.rotated_padding_left,
            }
          : {
              top: t.currentHeight - s - r,
              right: NaN,
              bottom: o + r,
              left: t.margin.left,
            }),
        (t.margin3 = { top: 0, right: NaN, bottom: 0, left: 0 }),
        t.updateSizeForLegend && t.updateSizeForLegend(n, i),
        (t.width = t.currentWidth - t.margin.left - t.margin.right),
        (t.height = t.currentHeight - t.margin.top - t.margin.bottom),
        t.width < 0 && (t.width = 0),
        t.height < 0 && (t.height = 0),
        (t.width2 = e.axis_rotated
          ? t.margin.left - t.rotated_padding_left - t.rotated_padding_right
          : t.width),
        (t.height2 = e.axis_rotated
          ? t.height
          : t.currentHeight - t.margin2.top - t.margin2.bottom),
        t.width2 < 0 && (t.width2 = 0),
        t.height2 < 0 && (t.height2 = 0),
        (t.arcWidth = t.width - (t.isLegendRight ? i + 10 : 0)),
        (t.arcHeight = t.height - (t.isLegendRight ? 0 : 10)),
        t.hasType("gauge") &&
          !e.gauge_fullCircle &&
          (t.arcHeight += t.height - t.getGaugeLabelHeight()),
        t.updateRadius && t.updateRadius(),
        t.isLegendRight &&
          a &&
          (t.margin3.left = t.arcWidth / 2 + 1.1 * t.radiusExpanded);
    }),
    (m.updateTargets = function (t) {
      var e = this;
      e.updateTargetsForText(t),
        e.updateTargetsForBar(t),
        e.updateTargetsForLine(t),
        e.hasArcType() && e.updateTargetsForArc && e.updateTargetsForArc(t),
        e.updateTargetsForSubchart && e.updateTargetsForSubchart(t),
        e.showTargets();
    }),
    (m.showTargets = function () {
      var e = this;
      e.svg
        .selectAll("." + X.target)
        .filter(function (t) {
          return e.isTargetToShow(t.id);
        })
        .transition()
        .duration(e.config.transition_duration)
        .style("opacity", 1);
    }),
    (m.redraw = function (t, e) {
      var n,
        i,
        r,
        a,
        o,
        s,
        u,
        c,
        l,
        h,
        d,
        f,
        g,
        p,
        x,
        _,
        v,
        y,
        m,
        w,
        S,
        b,
        A,
        T,
        P,
        C,
        L,
        M,
        E,
        V = this,
        G = V.main,
        k = V.d3,
        R = V.config,
        O = V.getShapeIndices(V.isAreaType),
        I = V.getShapeIndices(V.isBarType),
        D = V.getShapeIndices(V.isLineType),
        N = V.hasArcType(),
        F = V.filterTargetsToShow(V.data.targets),
        z = V.xv.bind(V);
      if (
        ((n = H((t = t || {}), "withY", !0)),
        (i = H(t, "withSubchart", !0)),
        (r = H(t, "withTransition", !0)),
        (s = H(t, "withTransform", !1)),
        (u = H(t, "withUpdateXDomain", !1)),
        (c = H(t, "withUpdateOrgXDomain", !1)),
        (l = H(t, "withTrimXDomain", !0)),
        (g = H(t, "withUpdateXAxis", u)),
        (h = H(t, "withLegend", !1)),
        (d = H(t, "withEventRect", !0)),
        (f = H(t, "withDimension", !0)),
        (a = H(t, "withTransitionForExit", r)),
        (o = H(t, "withTransitionForAxis", r)),
        (m = r ? R.transition_duration : 0),
        (w = a ? m : 0),
        (S = o ? m : 0),
        (e = e || V.axis.generateTransitions(S)),
        h && R.legend_show
          ? V.updateLegend(V.mapToIds(V.data.targets), t, e)
          : f && V.updateDimension(!0),
        V.isCategorized() &&
          0 === F.length &&
          V.x.domain([0, V.axes.x.selectAll(".tick").size()]),
        F.length
          ? (V.updateXDomain(F, u, c, l),
            R.axis_x_tick_values || (T = V.axis.updateXAxisTickValues(F)))
          : (V.xAxis.tickValues([]), V.subXAxis.tickValues([])),
        R.zoom_rescale && !t.flow && (L = V.x.orgDomain()),
        V.y.domain(V.getYDomain(F, "y", L)),
        V.y2.domain(V.getYDomain(F, "y2", L)),
        !R.axis_y_tick_values &&
          R.axis_y_tick_count &&
          V.yAxis.tickValues(
            V.axis.generateTickValues(V.y.domain(), R.axis_y_tick_count),
          ),
        !R.axis_y2_tick_values &&
          R.axis_y2_tick_count &&
          V.y2Axis.tickValues(
            V.axis.generateTickValues(V.y2.domain(), R.axis_y2_tick_count),
          ),
        V.axis.redraw(e, N),
        V.axis.updateLabels(r),
        (u || g) && F.length)
      )
        if (R.axis_x_tick_culling && T) {
          for (P = 1; P < T.length; P++)
            if (T.length / P < R.axis_x_tick_culling_max) {
              C = P;
              break;
            }
          V.svg.selectAll("." + X.axisX + " .tick text").each(function (t) {
            var e = T.indexOf(t);
            0 <= e && k.select(this).style("display", e % C ? "none" : "block");
          });
        } else
          V.svg
            .selectAll("." + X.axisX + " .tick text")
            .style("display", "block");
      (p = V.generateDrawArea ? V.generateDrawArea(O, !1) : void 0),
        (x = V.generateDrawBar ? V.generateDrawBar(I) : void 0),
        (_ = V.generateDrawLine ? V.generateDrawLine(D, !1) : void 0),
        (v = V.generateXYForText(O, I, D, !0)),
        (y = V.generateXYForText(O, I, D, !1)),
        n &&
          (V.subY.domain(V.getYDomain(F, "y")),
          V.subY2.domain(V.getYDomain(F, "y2"))),
        V.updateXgridFocus(),
        G.select("text." + X.text + "." + X.empty)
          .attr("x", V.width / 2)
          .attr("y", V.height / 2)
          .text(R.data_empty_label_text)
          .transition()
          .style("opacity", F.length ? 0 : 1),
        V.updateGrid(m),
        V.updateRegion(m),
        V.updateBar(w),
        V.updateLine(w),
        V.updateArea(w),
        V.updateCircle(),
        V.hasDataLabel() && V.updateText(w),
        V.redrawTitle && V.redrawTitle(),
        V.redrawArc && V.redrawArc(m, w, s),
        V.redrawSubchart && V.redrawSubchart(i, e, m, w, O, I, D),
        G.selectAll("." + X.selectedCircles)
          .filter(V.isBarType.bind(V))
          .selectAll("circle")
          .remove(),
        R.interaction_enabled &&
          !t.flow &&
          d &&
          (V.redrawEventRect(), V.updateZoom && V.updateZoom()),
        V.updateCircleY(),
        (M = (V.config.axis_rotated ? V.circleY : V.circleX).bind(V)),
        (E = (V.config.axis_rotated ? V.circleX : V.circleY).bind(V)),
        t.flow &&
          (A = V.generateFlow({
            targets: F,
            flow: t.flow,
            duration: t.flow.duration,
            drawBar: x,
            drawLine: _,
            drawArea: p,
            cx: M,
            cy: E,
            xv: z,
            xForText: v,
            yForText: y,
          })),
        (m || A) && V.isTabVisible()
          ? k
              .transition()
              .duration(m)
              .each(function () {
                var e = [];
                [
                  V.redrawBar(x, !0),
                  V.redrawLine(_, !0),
                  V.redrawArea(p, !0),
                  V.redrawCircle(M, E, !0),
                  V.redrawText(v, y, t.flow, !0),
                  V.redrawRegion(!0),
                  V.redrawGrid(!0),
                ].forEach(function (t) {
                  t.forEach(function (t) {
                    e.push(t);
                  });
                }),
                  (b = V.generateWait()),
                  e.forEach(function (t) {
                    b.add(t);
                  });
              })
              .call(b, function () {
                A && A(), R.onrendered && R.onrendered.call(V);
              })
          : (V.redrawBar(x),
            V.redrawLine(_),
            V.redrawArea(p),
            V.redrawCircle(M, E),
            V.redrawText(v, y, t.flow),
            V.redrawRegion(),
            V.redrawGrid(),
            R.onrendered && R.onrendered.call(V)),
        V.mapToIds(V.data.targets).forEach(function (t) {
          V.withoutFadeIn[t] = !0;
        });
    }),
    (m.updateAndRedraw = function (t) {
      var e,
        n = this,
        i = n.config;
      ((t = t || {}).withTransition = H(t, "withTransition", !0)),
        (t.withTransform = H(t, "withTransform", !1)),
        (t.withLegend = H(t, "withLegend", !1)),
        (t.withUpdateXDomain = !0),
        (t.withUpdateOrgXDomain = !0),
        (t.withTransitionForExit = !1),
        (t.withTransitionForTransform = H(
          t,
          "withTransitionForTransform",
          t.withTransition,
        )),
        n.updateSizes(),
        (t.withLegend && i.legend_show) ||
          ((e = n.axis.generateTransitions(
            t.withTransitionForAxis ? i.transition_duration : 0,
          )),
          n.updateScales(),
          n.updateSvgSize(),
          n.transformAll(t.withTransitionForTransform, e)),
        n.redraw(t, e);
    }),
    (m.redrawWithoutRescale = function () {
      this.redraw({
        withY: !1,
        withSubchart: !1,
        withEventRect: !1,
        withTransitionForAxis: !1,
      });
    }),
    (m.isTimeSeries = function () {
      return "timeseries" === this.config.axis_x_type;
    }),
    (m.isCategorized = function () {
      return 0 <= this.config.axis_x_type.indexOf("categor");
    }),
    (m.isCustomX = function () {
      var t = this.config;
      return !this.isTimeSeries() && (t.data_x || C(t.data_xs));
    }),
    (m.isTimeSeriesY = function () {
      return "timeseries" === this.config.axis_y_type;
    }),
    (m.getTranslate = function (t) {
      var e,
        n,
        i = this,
        r = i.config;
      return (
        "main" === t
          ? ((e = f(i.margin.left)), (n = f(i.margin.top)))
          : "context" === t
            ? ((e = f(i.margin2.left)), (n = f(i.margin2.top)))
            : "legend" === t
              ? ((e = i.margin3.left), (n = i.margin3.top))
              : "x" === t
                ? ((e = 0), (n = r.axis_rotated ? 0 : i.height))
                : "y" === t
                  ? ((e = 0), (n = r.axis_rotated ? i.height : 0))
                  : "y2" === t
                    ? ((e = r.axis_rotated ? 0 : i.width),
                      (n = r.axis_rotated ? 1 : 0))
                    : "subx" === t
                      ? ((e = 0), (n = r.axis_rotated ? 0 : i.height2))
                      : "arc" === t &&
                        ((e = i.arcWidth / 2), (n = i.arcHeight / 2)),
        "translate(" + e + "," + n + ")"
      );
    }),
    (m.initialOpacity = function (t) {
      return null !== t.value && this.withoutFadeIn[t.id] ? 1 : 0;
    }),
    (m.initialOpacityForCircle = function (t) {
      return null !== t.value && this.withoutFadeIn[t.id]
        ? this.opacityForCircle(t)
        : 0;
    }),
    (m.opacityForCircle = function (t) {
      var e = (
        h(this.config.point_show)
          ? this.config.point_show(t)
          : this.config.point_show
      )
        ? 1
        : 0;
      return P(t.value) ? (this.isScatterType(t) ? 0.5 : e) : 0;
    }),
    (m.opacityForText = function () {
      return this.hasDataLabel() ? 1 : 0;
    }),
    (m.xx = function (t) {
      return t ? this.x(t.x) : null;
    }),
    (m.xv = function (t) {
      var e = this,
        n = t.value;
      return (
        e.isTimeSeries()
          ? (n = e.parseDate(t.value))
          : e.isCategorized() &&
            "string" == typeof t.value &&
            (n = e.config.axis_x_categories.indexOf(t.value)),
        Math.ceil(e.x(n))
      );
    }),
    (m.yv = function (t) {
      var e = t.axis && "y2" === t.axis ? this.y2 : this.y;
      return Math.ceil(e(t.value));
    }),
    (m.subxx = function (t) {
      return t ? this.subX(t.x) : null;
    }),
    (m.transformMain = function (t, e) {
      var n,
        i,
        r,
        a = this;
      e && e.axisX
        ? (n = e.axisX)
        : ((n = a.main.select("." + X.axisX)), t && (n = n.transition())),
        e && e.axisY
          ? (i = e.axisY)
          : ((i = a.main.select("." + X.axisY)), t && (i = i.transition())),
        e && e.axisY2
          ? (r = e.axisY2)
          : ((r = a.main.select("." + X.axisY2)), t && (r = r.transition())),
        (t ? a.main.transition() : a.main).attr(
          "transform",
          a.getTranslate("main"),
        ),
        n.attr("transform", a.getTranslate("x")),
        i.attr("transform", a.getTranslate("y")),
        r.attr("transform", a.getTranslate("y2")),
        a.main
          .select("." + X.chartArcs)
          .attr("transform", a.getTranslate("arc"));
    }),
    (m.transformAll = function (t, e) {
      var n = this;
      n.transformMain(t, e),
        n.config.subchart_show && n.transformContext(t, e),
        n.legend && n.transformLegend(t);
    }),
    (m.updateSvgSize = function () {
      var t = this,
        e = t.svg.select(".c3-brush .background");
      t.svg.attr("width", t.currentWidth).attr("height", t.currentHeight),
        t.svg
          .selectAll(["#" + t.clipId, "#" + t.clipIdForGrid])
          .select("rect")
          .attr("width", t.width)
          .attr("height", t.height),
        t.svg
          .select("#" + t.clipIdForXAxis)
          .select("rect")
          .attr("x", t.getXAxisClipX.bind(t))
          .attr("y", t.getXAxisClipY.bind(t))
          .attr("width", t.getXAxisClipWidth.bind(t))
          .attr("height", t.getXAxisClipHeight.bind(t)),
        t.svg
          .select("#" + t.clipIdForYAxis)
          .select("rect")
          .attr("x", t.getYAxisClipX.bind(t))
          .attr("y", t.getYAxisClipY.bind(t))
          .attr("width", t.getYAxisClipWidth.bind(t))
          .attr("height", t.getYAxisClipHeight.bind(t)),
        t.svg
          .select("#" + t.clipIdForSubchart)
          .select("rect")
          .attr("width", t.width)
          .attr("height", e.size() ? e.attr("height") : 0),
        t.svg
          .select("." + X.zoomRect)
          .attr("width", t.width)
          .attr("height", t.height),
        t.selectChart.style("max-height", t.currentHeight + "px");
    }),
    (m.updateDimension = function (t) {
      var e = this;
      t ||
        (e.config.axis_rotated
          ? (e.axes.x.call(e.xAxis), e.axes.subx.call(e.subXAxis))
          : (e.axes.y.call(e.yAxis), e.axes.y2.call(e.y2Axis))),
        e.updateSizes(),
        e.updateScales(),
        e.updateSvgSize(),
        e.transformAll(!1);
    }),
    (m.observeInserted = function (e) {
      var n,
        i = this;
      "undefined" != typeof MutationObserver
        ? (n = new MutationObserver(function (t) {
            t.forEach(function (t) {
              "childList" === t.type &&
                t.previousSibling &&
                (n.disconnect(),
                (i.intervalForObserveInserted = window.setInterval(function () {
                  e.node().parentNode &&
                    (window.clearInterval(i.intervalForObserveInserted),
                    i.updateDimension(),
                    i.brush && i.brush.update(),
                    i.config.oninit.call(i),
                    i.redraw({
                      withTransform: !0,
                      withUpdateXDomain: !0,
                      withUpdateOrgXDomain: !0,
                      withTransition: !1,
                      withTransitionForTransform: !1,
                      withLegend: !0,
                    }),
                    e.transition().style("opacity", 1));
                }, 10)));
            });
          })).observe(e.node(), {
            attributes: !0,
            childList: !0,
            characterData: !0,
          })
        : window.console.error("MutationObserver not defined.");
    }),
    (m.bindResize = function () {
      var t = this,
        e = t.config;
      if (
        ((t.resizeFunction = t.generateResize()),
        t.resizeFunction.add(function () {
          e.onresize.call(t);
        }),
        e.resize_auto &&
          t.resizeFunction.add(function () {
            void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout),
              (t.resizeTimeout = window.setTimeout(function () {
                delete t.resizeTimeout, t.api.flush();
              }, 100));
          }),
        t.resizeFunction.add(function () {
          e.onresized.call(t);
        }),
        window.attachEvent)
      )
        window.attachEvent("onresize", t.resizeFunction);
      else if (window.addEventListener)
        window.addEventListener("resize", t.resizeFunction, !1);
      else {
        var n = window.onresize;
        n
          ? (n.add && n.remove) || (n = t.generateResize()).add(window.onresize)
          : (n = t.generateResize()),
          n.add(t.resizeFunction),
          (window.onresize = n);
      }
    }),
    (m.generateResize = function () {
      function t() {
        n.forEach(function (t) {
          t();
        });
      }
      var n = [];
      return (
        (t.add = function (t) {
          n.push(t);
        }),
        (t.remove = function (t) {
          for (var e = 0; e < n.length; e++)
            if (n[e] === t) {
              n.splice(e, 1);
              break;
            }
        }),
        t
      );
    }),
    (m.endall = function (t, e) {
      var n = 0;
      t.each(function () {
        ++n;
      }).each("end", function () {
        --n || e.apply(this, arguments);
      });
    }),
    (m.generateWait = function () {
      var r = [],
        t = function (t, n) {
          var i = setInterval(function () {
            var e = 0;
            r.forEach(function (t) {
              if (t.empty()) e += 1;
              else
                try {
                  t.transition();
                } catch (t) {
                  e += 1;
                }
            }),
              e === r.length && (clearInterval(i), n && n());
          }, 10);
        };
      return (
        (t.add = function (t) {
          r.push(t);
        }),
        t
      );
    }),
    (m.parseDate = function (t) {
      var e;
      return (
        t instanceof Date
          ? (e = t)
          : "string" == typeof t
            ? (e = this.dataTimeFormat(this.config.data_xFormat).parse(t))
            : "object" === (void 0 === t ? "undefined" : s(t))
              ? (e = new Date(+t))
              : "number" != typeof t || isNaN(t) || (e = new Date(+t)),
        (e && !isNaN(+e)) ||
          window.console.error("Failed to parse x '" + t + "' to Date object"),
        e
      );
    }),
    (m.isTabVisible = function () {
      var t;
      return (
        void 0 !== document.hidden
          ? (t = "hidden")
          : void 0 !== document.mozHidden
            ? (t = "mozHidden")
            : void 0 !== document.msHidden
              ? (t = "msHidden")
              : void 0 !== document.webkitHidden && (t = "webkitHidden"),
        !document[t]
      );
    }),
    (m.isValue = P),
    (m.isFunction = h),
    (m.isString = c),
    (m.isUndefined = l),
    (m.isDefined = d),
    (m.ceil10 = i),
    (m.asHalfPixel = f),
    (m.diffDomain = O),
    (m.isEmpty = g),
    (m.notEmpty = C),
    (m.notEmpty = C),
    (m.getOption = H),
    (m.hasValue = p),
    (m.sanitise = x),
    (m.getPathBox = v),
    (m.CLASS = X),
    Function.prototype.bind ||
      (Function.prototype.bind = function (t) {
        if ("function" != typeof this)
          throw new TypeError(
            "Function.prototype.bind - what is trying to be bound is not callable",
          );
        var e = Array.prototype.slice.call(arguments, 1),
          n = this,
          i = function () {},
          r = function () {
            return n.apply(
              this instanceof i ? this : t,
              e.concat(Array.prototype.slice.call(arguments)),
            );
          };
        return (i.prototype = this.prototype), (r.prototype = new i()), r;
      }),
    "SVGPathSeg" in window ||
      ((window.SVGPathSeg = function (t, e, n) {
        (this.pathSegType = t),
          (this.pathSegTypeAsLetter = e),
          (this._owningPathSegList = n);
      }),
      (window.SVGPathSeg.prototype.classname = "SVGPathSeg"),
      (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
      (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
      (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
      (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
      (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
      (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
      (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
      (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
      (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
      (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
      (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
      (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
      (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
      (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
      (window.SVGPathSeg.prototype._segmentChanged = function () {
        this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
      }),
      (window.SVGPathSegClosePath = function (t) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CLOSEPATH,
          "z",
          t,
        );
      }),
      (window.SVGPathSegClosePath.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegClosePath.prototype.toString = function () {
        return "[object SVGPathSegClosePath]";
      }),
      (window.SVGPathSegClosePath.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter;
      }),
      (window.SVGPathSegClosePath.prototype.clone = function () {
        return new window.SVGPathSegClosePath(void 0);
      }),
      (window.SVGPathSegMovetoAbs = function (t, e, n) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_MOVETO_ABS,
          "M",
          t,
        ),
          (this._x = e),
          (this._y = n);
      }),
      (window.SVGPathSegMovetoAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegMovetoAbs.prototype.toString = function () {
        return "[object SVGPathSegMovetoAbs]";
      }),
      (window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      }),
      (window.SVGPathSegMovetoAbs.prototype.clone = function () {
        return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegMovetoRel = function (t, e, n) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_MOVETO_REL,
          "m",
          t,
        ),
          (this._x = e),
          (this._y = n);
      }),
      (window.SVGPathSegMovetoRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegMovetoRel.prototype.toString = function () {
        return "[object SVGPathSegMovetoRel]";
      }),
      (window.SVGPathSegMovetoRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      }),
      (window.SVGPathSegMovetoRel.prototype.clone = function () {
        return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoAbs = function (t, e, n) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_ABS,
          "L",
          t,
        ),
          (this._x = e),
          (this._y = n);
      }),
      (window.SVGPathSegLinetoAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoAbs]";
      }),
      (window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      }),
      (window.SVGPathSegLinetoAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoRel = function (t, e, n) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_REL,
          "l",
          t,
        ),
          (this._x = e),
          (this._y = n);
      }),
      (window.SVGPathSegLinetoRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoRel]";
      }),
      (window.SVGPathSegLinetoRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      }),
      (window.SVGPathSegLinetoRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoCubicAbs = function (t, e, n, i, r, a, o) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
          "C",
          t,
        ),
          (this._x = e),
          (this._y = n),
          (this._x1 = i),
          (this._y1 = r),
          (this._x2 = a),
          (this._y2 = o);
      }),
      (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicAbs]";
      }),
      (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
        return (
          this.pathSegTypeAsLetter +
          " " +
          this._x1 +
          " " +
          this._y1 +
          " " +
          this._x2 +
          " " +
          this._y2 +
          " " +
          this._x +
          " " +
          this._y
        );
      }),
      (window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicAbs(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
        get: function () {
          return this._x1;
        },
        set: function (t) {
          (this._x1 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
        get: function () {
          return this._y1;
        },
        set: function (t) {
          (this._y1 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
        get: function () {
          return this._x2;
        },
        set: function (t) {
          (this._x2 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
        get: function () {
          return this._y2;
        },
        set: function (t) {
          (this._y2 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoCubicRel = function (t, e, n, i, r, a, o) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
          "c",
          t,
        ),
          (this._x = e),
          (this._y = n),
          (this._x1 = i),
          (this._y1 = r),
          (this._x2 = a),
          (this._y2 = o);
      }),
      (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicRel]";
      }),
      (window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
        return (
          this.pathSegTypeAsLetter +
          " " +
          this._x1 +
          " " +
          this._y1 +
          " " +
          this._x2 +
          " " +
          this._y2 +
          " " +
          this._x +
          " " +
          this._y
        );
      }),
      (window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicRel(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
        get: function () {
          return this._x1;
        },
        set: function (t) {
          (this._x1 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
        get: function () {
          return this._y1;
        },
        set: function (t) {
          (this._y1 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
        get: function () {
          return this._x2;
        },
        set: function (t) {
          (this._x2 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
        get: function () {
          return this._y2;
        },
        set: function (t) {
          (this._y2 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoQuadraticAbs = function (t, e, n, i, r) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,
          "Q",
          t,
        ),
          (this._x = e),
          (this._y = n),
          (this._x1 = i),
          (this._y1 = r);
      }),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticAbs]";
      }),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString =
        function () {
          return (
            this.pathSegTypeAsLetter +
            " " +
            this._x1 +
            " " +
            this._y1 +
            " " +
            this._x +
            " " +
            this._y
          );
        }),
      (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticAbs(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "x1",
        {
          get: function () {
            return this._x1;
          },
          set: function (t) {
            (this._x1 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticAbs.prototype,
        "y1",
        {
          get: function () {
            return this._y1;
          },
          set: function (t) {
            (this._y1 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoQuadraticRel = function (t, e, n, i, r) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,
          "q",
          t,
        ),
          (this._x = e),
          (this._y = n),
          (this._x1 = i),
          (this._y1 = r);
      }),
      (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticRel]";
      }),
      (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString =
        function () {
          return (
            this.pathSegTypeAsLetter +
            " " +
            this._x1 +
            " " +
            this._y1 +
            " " +
            this._x +
            " " +
            this._y
          );
        }),
      (window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticRel(
          void 0,
          this._x,
          this._y,
          this._x1,
          this._y1,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "x1",
        {
          get: function () {
            return this._x1;
          },
          set: function (t) {
            (this._x1 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticRel.prototype,
        "y1",
        {
          get: function () {
            return this._y1;
          },
          set: function (t) {
            (this._y1 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegArcAbs = function (t, e, n, i, r, a, o, s) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t),
          (this._x = e),
          (this._y = n),
          (this._r1 = i),
          (this._r2 = r),
          (this._angle = a),
          (this._largeArcFlag = o),
          (this._sweepFlag = s);
      }),
      (window.SVGPathSegArcAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegArcAbs.prototype.toString = function () {
        return "[object SVGPathSegArcAbs]";
      }),
      (window.SVGPathSegArcAbs.prototype._asPathString = function () {
        return (
          this.pathSegTypeAsLetter +
          " " +
          this._r1 +
          " " +
          this._r2 +
          " " +
          this._angle +
          " " +
          (this._largeArcFlag ? "1" : "0") +
          " " +
          (this._sweepFlag ? "1" : "0") +
          " " +
          this._x +
          " " +
          this._y
        );
      }),
      (window.SVGPathSegArcAbs.prototype.clone = function () {
        return new window.SVGPathSegArcAbs(
          void 0,
          this._x,
          this._y,
          this._r1,
          this._r2,
          this._angle,
          this._largeArcFlag,
          this._sweepFlag,
        );
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
        get: function () {
          return this._r1;
        },
        set: function (t) {
          (this._r1 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
        get: function () {
          return this._r2;
        },
        set: function (t) {
          (this._r2 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
        get: function () {
          return this._angle;
        },
        set: function (t) {
          (this._angle = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
        get: function () {
          return this._largeArcFlag;
        },
        set: function (t) {
          (this._largeArcFlag = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
        get: function () {
          return this._sweepFlag;
        },
        set: function (t) {
          (this._sweepFlag = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegArcRel = function (t, e, n, i, r, a, o, s) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t),
          (this._x = e),
          (this._y = n),
          (this._r1 = i),
          (this._r2 = r),
          (this._angle = a),
          (this._largeArcFlag = o),
          (this._sweepFlag = s);
      }),
      (window.SVGPathSegArcRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegArcRel.prototype.toString = function () {
        return "[object SVGPathSegArcRel]";
      }),
      (window.SVGPathSegArcRel.prototype._asPathString = function () {
        return (
          this.pathSegTypeAsLetter +
          " " +
          this._r1 +
          " " +
          this._r2 +
          " " +
          this._angle +
          " " +
          (this._largeArcFlag ? "1" : "0") +
          " " +
          (this._sweepFlag ? "1" : "0") +
          " " +
          this._x +
          " " +
          this._y
        );
      }),
      (window.SVGPathSegArcRel.prototype.clone = function () {
        return new window.SVGPathSegArcRel(
          void 0,
          this._x,
          this._y,
          this._r1,
          this._r2,
          this._angle,
          this._largeArcFlag,
          this._sweepFlag,
        );
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          (this._x = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
        get: function () {
          return this._r1;
        },
        set: function (t) {
          (this._r1 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
        get: function () {
          return this._r2;
        },
        set: function (t) {
          (this._r2 = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
        get: function () {
          return this._angle;
        },
        set: function (t) {
          (this._angle = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
        get: function () {
          return this._largeArcFlag;
        },
        set: function (t) {
          (this._largeArcFlag = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
        get: function () {
          return this._sweepFlag;
        },
        set: function (t) {
          (this._sweepFlag = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
          "H",
          t,
        ),
          (this._x = e);
      }),
      (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoHorizontalAbs]";
      }),
      (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString =
        function () {
          return this.pathSegTypeAsLetter + " " + this._x;
        }),
      (window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
      }),
      Object.defineProperty(
        window.SVGPathSegLinetoHorizontalAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegLinetoHorizontalRel = function (t, e) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,
          "h",
          t,
        ),
          (this._x = e);
      }),
      (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoHorizontalRel]";
      }),
      (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString =
        function () {
          return this.pathSegTypeAsLetter + " " + this._x;
        }),
      (window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
      }),
      Object.defineProperty(
        window.SVGPathSegLinetoHorizontalRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegLinetoVerticalAbs = function (t, e) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,
          "V",
          t,
        ),
          (this._y = e);
      }),
      (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoVerticalAbs]";
      }),
      (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString =
        function () {
          return this.pathSegTypeAsLetter + " " + this._y;
        }),
      (window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegLinetoVerticalRel = function (t, e) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,
          "v",
          t,
        ),
          (this._y = e);
      }),
      (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoVerticalRel]";
      }),
      (window.SVGPathSegLinetoVerticalRel.prototype._asPathString =
        function () {
          return this.pathSegTypeAsLetter + " " + this._y;
        }),
      (window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
      }),
      Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          (this._y = t), this._segmentChanged();
        },
        enumerable: !0,
      }),
      (window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, i, r) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
          "S",
          t,
        ),
          (this._x = e),
          (this._y = n),
          (this._x2 = i),
          (this._y2 = r);
      }),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicSmoothAbs]";
      }),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString =
        function () {
          return (
            this.pathSegTypeAsLetter +
            " " +
            this._x2 +
            " " +
            this._y2 +
            " " +
            this._x +
            " " +
            this._y
          );
        }),
      (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicSmoothAbs(
          void 0,
          this._x,
          this._y,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "x2",
        {
          get: function () {
            return this._x2;
          },
          set: function (t) {
            (this._x2 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
        "y2",
        {
          get: function () {
            return this._y2;
          },
          set: function (t) {
            (this._y2 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, n, i, r) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
          "s",
          t,
        ),
          (this._x = e),
          (this._y = n),
          (this._x2 = i),
          (this._y2 = r);
      }),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicSmoothRel]";
      }),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString =
        function () {
          return (
            this.pathSegTypeAsLetter +
            " " +
            this._x2 +
            " " +
            this._y2 +
            " " +
            this._x +
            " " +
            this._y
          );
        }),
      (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicSmoothRel(
          void 0,
          this._x,
          this._y,
          this._x2,
          this._y2,
        );
      }),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "x2",
        {
          get: function () {
            return this._x2;
          },
          set: function (t) {
            (this._x2 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoCubicSmoothRel.prototype,
        "y2",
        {
          get: function () {
            return this._y2;
          },
          set: function (t) {
            (this._y2 = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, n) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
          "T",
          t,
        ),
          (this._x = e),
          (this._y = n);
      }),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString =
        function () {
          return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString =
        function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone =
        function () {
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
            void 0,
            this._x,
            this._y,
          );
        }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, n) {
        window.SVGPathSeg.call(
          this,
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
          "t",
          t,
        ),
          (this._x = e),
          (this._y = n);
      }),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(
        window.SVGPathSeg.prototype,
      )),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString =
        function () {
          return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
        function () {
          return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        }),
      (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone =
        function () {
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(
            void 0,
            this._x,
            this._y,
          );
        }),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
        "x",
        {
          get: function () {
            return this._x;
          },
          set: function (t) {
            (this._x = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
        "y",
        {
          get: function () {
            return this._y;
          },
          set: function (t) {
            (this._y = t), this._segmentChanged();
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
        return new window.SVGPathSegClosePath(void 0);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (
        t,
        e,
      ) {
        return new window.SVGPathSegMovetoAbs(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (
        t,
        e,
      ) {
        return new window.SVGPathSegMovetoRel(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (
        t,
        e,
      ) {
        return new window.SVGPathSegLinetoAbs(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (
        t,
        e,
      ) {
        return new window.SVGPathSegLinetoRel(void 0, t, e);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs =
        function (t, e, n, i, r, a) {
          return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, n, i, r, a);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel =
        function (t, e, n, i, r, a) {
          return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, n, i, r, a);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs =
        function (t, e, n, i) {
          return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, n, i);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
        function (t, e, n, i) {
          return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, n, i);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (
        t,
        e,
        n,
        i,
        r,
        a,
        o,
      ) {
        return new window.SVGPathSegArcAbs(void 0, t, e, n, i, r, a, o);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegArcRel = function (
        t,
        e,
        n,
        i,
        r,
        a,
        o,
      ) {
        return new window.SVGPathSegArcRel(void 0, t, e, n, i, r, a, o);
      }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs =
        function (t) {
          return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
        function (t) {
          return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs =
        function (t) {
          return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel =
        function (t) {
          return new window.SVGPathSegLinetoVerticalRel(void 0, t);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs =
        function (t, e, n, i) {
          return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, n, i);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
        function (t, e, n, i) {
          return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, n, i);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs =
        function (t, e) {
          return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e);
        }),
      (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel =
        function (t, e) {
          return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e);
        }),
      "getPathSegAtLength" in window.SVGPathElement.prototype ||
        (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
          if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
          var e = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          e.setAttribute("d", this.getAttribute("d"));
          var n = e.pathSegList.numberOfItems - 1;
          if (n <= 0) return 0;
          do {
            if ((e.pathSegList.removeItem(n), t > e.getTotalLength())) break;
            n--;
          } while (0 < n);
          return n;
        })),
    "SVGPathSegList" in window ||
      ((window.SVGPathSegList = function (t) {
        (this._pathElement = t),
          (this._list = this._parsePath(this._pathElement.getAttribute("d"))),
          (this._mutationObserverConfig = {
            attributes: !0,
            attributeFilter: ["d"],
          }),
          (this._pathElementMutationObserver = new MutationObserver(
            this._updateListFromPathMutations.bind(this),
          )),
          this._pathElementMutationObserver.observe(
            this._pathElement,
            this._mutationObserverConfig,
          );
      }),
      (window.SVGPathSegList.prototype.classname = "SVGPathSegList"),
      Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
        get: function () {
          return this._checkPathSynchronizedToList(), this._list.length;
        },
        enumerable: !0,
      }),
      Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
        get: function () {
          return (
            this._pathSegList ||
              (this._pathSegList = new window.SVGPathSegList(this)),
            this._pathSegList
          );
        },
        enumerable: !0,
      }),
      Object.defineProperty(
        window.SVGPathElement.prototype,
        "normalizedPathSegList",
        {
          get: function () {
            return this.pathSegList;
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathElement.prototype,
        "animatedPathSegList",
        {
          get: function () {
            return this.pathSegList;
          },
          enumerable: !0,
        },
      ),
      Object.defineProperty(
        window.SVGPathElement.prototype,
        "animatedNormalizedPathSegList",
        {
          get: function () {
            return this.pathSegList;
          },
          enumerable: !0,
        },
      ),
      (window.SVGPathSegList.prototype._checkPathSynchronizedToList =
        function () {
          this._updateListFromPathMutations(
            this._pathElementMutationObserver.takeRecords(),
          );
        }),
      (window.SVGPathSegList.prototype._updateListFromPathMutations = function (
        t,
      ) {
        if (this._pathElement) {
          var e = !1;
          t.forEach(function (t) {
            "d" == t.attributeName && (e = !0);
          }),
            e &&
              (this._list = this._parsePath(
                this._pathElement.getAttribute("d"),
              ));
        }
      }),
      (window.SVGPathSegList.prototype._writeListToPath = function () {
        this._pathElementMutationObserver.disconnect(),
          this._pathElement.setAttribute(
            "d",
            window.SVGPathSegList._pathSegArrayAsString(this._list),
          ),
          this._pathElementMutationObserver.observe(
            this._pathElement,
            this._mutationObserverConfig,
          );
      }),
      (window.SVGPathSegList.prototype.segmentChanged = function (t) {
        this._writeListToPath();
      }),
      (window.SVGPathSegList.prototype.clear = function () {
        this._checkPathSynchronizedToList(),
          this._list.forEach(function (t) {
            t._owningPathSegList = null;
          }),
          (this._list = []),
          this._writeListToPath();
      }),
      (window.SVGPathSegList.prototype.initialize = function (t) {
        return (
          this._checkPathSynchronizedToList(),
          (this._list = [t]),
          (t._owningPathSegList = this)._writeListToPath(),
          t
        );
      }),
      (window.SVGPathSegList.prototype._checkValidIndex = function (t) {
        if (isNaN(t) || t < 0 || t >= this.numberOfItems)
          throw "INDEX_SIZE_ERR";
      }),
      (window.SVGPathSegList.prototype.getItem = function (t) {
        return (
          this._checkPathSynchronizedToList(),
          this._checkValidIndex(t),
          this._list[t]
        );
      }),
      (window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
        return (
          this._checkPathSynchronizedToList(),
          e > this.numberOfItems && (e = this.numberOfItems),
          t._owningPathSegList && (t = t.clone()),
          this._list.splice(e, 0, t),
          (t._owningPathSegList = this)._writeListToPath(),
          t
        );
      }),
      (window.SVGPathSegList.prototype.replaceItem = function (t, e) {
        return (
          this._checkPathSynchronizedToList(),
          t._owningPathSegList && (t = t.clone()),
          this._checkValidIndex(e),
          ((this._list[e] = t)._owningPathSegList = this)._writeListToPath(),
          t
        );
      }),
      (window.SVGPathSegList.prototype.removeItem = function (t) {
        this._checkPathSynchronizedToList(), this._checkValidIndex(t);
        var e = this._list[t];
        return this._list.splice(t, 1), this._writeListToPath(), e;
      }),
      (window.SVGPathSegList.prototype.appendItem = function (t) {
        return (
          this._checkPathSynchronizedToList(),
          t._owningPathSegList && (t = t.clone()),
          this._list.push(t),
          (t._owningPathSegList = this)._writeListToPath(),
          t
        );
      }),
      (window.SVGPathSegList._pathSegArrayAsString = function (t) {
        var e = "",
          n = !0;
        return (
          t.forEach(function (t) {
            n
              ? ((n = !1), (e += t._asPathString()))
              : (e += " " + t._asPathString());
          }),
          e
        );
      }),
      (window.SVGPathSegList.prototype._parsePath = function (t) {
        if (!t || 0 == t.length) return [];
        var i = this,
          e = function () {
            this.pathSegList = [];
          };
        e.prototype.appendSegment = function (t) {
          this.pathSegList.push(t);
        };
        var n = function (t) {
          (this._string = t),
            (this._currentIndex = 0),
            (this._endIndex = this._string.length),
            (this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN),
            this._skipOptionalSpaces();
        };
        (n.prototype._isCurrentSpace = function () {
          var t = this._string[this._currentIndex];
          return (
            t <= " " &&
            (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t)
          );
        }),
          (n.prototype._skipOptionalSpaces = function () {
            for (
              ;
              this._currentIndex < this._endIndex && this._isCurrentSpace();

            )
              this._currentIndex++;
            return this._currentIndex < this._endIndex;
          }),
          (n.prototype._skipOptionalSpacesOrDelimiter = function () {
            return (
              !(
                this._currentIndex < this._endIndex &&
                !this._isCurrentSpace() &&
                "," != this._string.charAt(this._currentIndex)
              ) &&
              (this._skipOptionalSpaces() &&
                this._currentIndex < this._endIndex &&
                "," == this._string.charAt(this._currentIndex) &&
                (this._currentIndex++, this._skipOptionalSpaces()),
              this._currentIndex < this._endIndex)
            );
          }),
          (n.prototype.hasMoreData = function () {
            return this._currentIndex < this._endIndex;
          }),
          (n.prototype.peekSegmentType = function () {
            var t = this._string[this._currentIndex];
            return this._pathSegTypeFromChar(t);
          }),
          (n.prototype._pathSegTypeFromChar = function (t) {
            switch (t) {
              case "Z":
              case "z":
                return window.SVGPathSeg.PATHSEG_CLOSEPATH;
              case "M":
                return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
              case "m":
                return window.SVGPathSeg.PATHSEG_MOVETO_REL;
              case "L":
                return window.SVGPathSeg.PATHSEG_LINETO_ABS;
              case "l":
                return window.SVGPathSeg.PATHSEG_LINETO_REL;
              case "C":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
              case "c":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
              case "Q":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
              case "q":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
              case "A":
                return window.SVGPathSeg.PATHSEG_ARC_ABS;
              case "a":
                return window.SVGPathSeg.PATHSEG_ARC_REL;
              case "H":
                return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
              case "h":
                return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
              case "V":
                return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
              case "v":
                return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
              case "S":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
              case "s":
                return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
              case "T":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
              case "t":
                return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
              default:
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            }
          }),
          (n.prototype._nextCommandHelper = function (t, e) {
            return ("+" == t ||
              "-" == t ||
              "." == t ||
              ("0" <= t && t <= "9")) &&
              e != window.SVGPathSeg.PATHSEG_CLOSEPATH
              ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                : e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                  ? window.SVGPathSeg.PATHSEG_LINETO_REL
                  : e
              : window.SVGPathSeg.PATHSEG_UNKNOWN;
          }),
          (n.prototype.initialCommandIsMoveTo = function () {
            if (!this.hasMoreData()) return !0;
            var t = this.peekSegmentType();
            return (
              t == window.SVGPathSeg.PATHSEG_MOVETO_ABS ||
              t == window.SVGPathSeg.PATHSEG_MOVETO_REL
            );
          }),
          (n.prototype._parseNumber = function () {
            var t = 0,
              e = 0,
              n = 1,
              i = 0,
              r = 1,
              a = 1,
              o = this._currentIndex;
            if (
              (this._skipOptionalSpaces(),
              this._currentIndex < this._endIndex &&
              "+" == this._string.charAt(this._currentIndex)
                ? this._currentIndex++
                : this._currentIndex < this._endIndex &&
                  "-" == this._string.charAt(this._currentIndex) &&
                  (this._currentIndex++, (r = -1)),
              !(
                this._currentIndex == this._endIndex ||
                ((this._string.charAt(this._currentIndex) < "0" ||
                  "9" < this._string.charAt(this._currentIndex)) &&
                  "." != this._string.charAt(this._currentIndex))
              ))
            ) {
              for (
                var s = this._currentIndex;
                this._currentIndex < this._endIndex &&
                "0" <= this._string.charAt(this._currentIndex) &&
                this._string.charAt(this._currentIndex) <= "9";

              )
                this._currentIndex++;
              if (this._currentIndex != s)
                for (var u = this._currentIndex - 1, c = 1; s <= u; )
                  (e += c * (this._string.charAt(u--) - "0")), (c *= 10);
              if (
                this._currentIndex < this._endIndex &&
                "." == this._string.charAt(this._currentIndex)
              ) {
                if (
                  ++this._currentIndex >= this._endIndex ||
                  this._string.charAt(this._currentIndex) < "0" ||
                  "9" < this._string.charAt(this._currentIndex)
                )
                  return;
                for (
                  ;
                  this._currentIndex < this._endIndex &&
                  "0" <= this._string.charAt(this._currentIndex) &&
                  this._string.charAt(this._currentIndex) <= "9";

                )
                  (n *= 10),
                    (i += (this._string.charAt(this._currentIndex) - "0") / n),
                    (this._currentIndex += 1);
              }
              if (
                this._currentIndex != o &&
                this._currentIndex + 1 < this._endIndex &&
                ("e" == this._string.charAt(this._currentIndex) ||
                  "E" == this._string.charAt(this._currentIndex)) &&
                "x" != this._string.charAt(this._currentIndex + 1) &&
                "m" != this._string.charAt(this._currentIndex + 1)
              ) {
                if (
                  (this._currentIndex++,
                  "+" == this._string.charAt(this._currentIndex)
                    ? this._currentIndex++
                    : "-" == this._string.charAt(this._currentIndex) &&
                      (this._currentIndex++, (a = -1)),
                  this._currentIndex >= this._endIndex ||
                    this._string.charAt(this._currentIndex) < "0" ||
                    "9" < this._string.charAt(this._currentIndex))
                )
                  return;
                for (
                  ;
                  this._currentIndex < this._endIndex &&
                  "0" <= this._string.charAt(this._currentIndex) &&
                  this._string.charAt(this._currentIndex) <= "9";

                )
                  (t *= 10),
                    (t += this._string.charAt(this._currentIndex) - "0"),
                    this._currentIndex++;
              }
              var l = e + i;
              if (
                ((l *= r),
                t && (l *= Math.pow(10, a * t)),
                o != this._currentIndex)
              )
                return this._skipOptionalSpacesOrDelimiter(), l;
            }
          }),
          (n.prototype._parseArcFlag = function () {
            if (!(this._currentIndex >= this._endIndex)) {
              var t = !1,
                e = this._string.charAt(this._currentIndex++);
              if ("0" == e) t = !1;
              else {
                if ("1" != e) return;
                t = !0;
              }
              return this._skipOptionalSpacesOrDelimiter(), t;
            }
          }),
          (n.prototype.parseSegment = function () {
            var t = this._string[this._currentIndex],
              e = this._pathSegTypeFromChar(t);
            if (e == window.SVGPathSeg.PATHSEG_UNKNOWN) {
              if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                return null;
              if (
                (e = this._nextCommandHelper(t, this._previousCommand)) ==
                window.SVGPathSeg.PATHSEG_UNKNOWN
              )
                return null;
            } else this._currentIndex++;
            switch ((this._previousCommand = e)) {
              case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                return new window.SVGPathSegMovetoRel(
                  i,
                  this._parseNumber(),
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                return new window.SVGPathSegMovetoAbs(
                  i,
                  this._parseNumber(),
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_LINETO_REL:
                return new window.SVGPathSegLinetoRel(
                  i,
                  this._parseNumber(),
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                return new window.SVGPathSegLinetoAbs(
                  i,
                  this._parseNumber(),
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                return new window.SVGPathSegLinetoHorizontalRel(
                  i,
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                return new window.SVGPathSegLinetoHorizontalAbs(
                  i,
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                return new window.SVGPathSegLinetoVerticalRel(
                  i,
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                return new window.SVGPathSegLinetoVerticalAbs(
                  i,
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                return (
                  this._skipOptionalSpaces(), new window.SVGPathSegClosePath(i)
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                return (
                  (n = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegCurvetoCubicRel(
                    i,
                    n.x,
                    n.y,
                    n.x1,
                    n.y1,
                    n.x2,
                    n.y2,
                  )
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                return (
                  (n = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegCurvetoCubicAbs(
                    i,
                    n.x,
                    n.y,
                    n.x1,
                    n.y1,
                    n.x2,
                    n.y2,
                  )
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                return (
                  (n = {
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegCurvetoCubicSmoothRel(
                    i,
                    n.x,
                    n.y,
                    n.x2,
                    n.y2,
                  )
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                return (
                  (n = {
                    x2: this._parseNumber(),
                    y2: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegCurvetoCubicSmoothAbs(
                    i,
                    n.x,
                    n.y,
                    n.x2,
                    n.y2,
                  )
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                return (
                  (n = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegCurvetoQuadraticRel(
                    i,
                    n.x,
                    n.y,
                    n.x1,
                    n.y1,
                  )
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                return (
                  (n = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegCurvetoQuadraticAbs(
                    i,
                    n.x,
                    n.y,
                    n.x1,
                    n.y1,
                  )
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                  i,
                  this._parseNumber(),
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                  i,
                  this._parseNumber(),
                  this._parseNumber(),
                );
              case window.SVGPathSeg.PATHSEG_ARC_REL:
                return (
                  (n = {
                    x1: this._parseNumber(),
                    y1: this._parseNumber(),
                    arcAngle: this._parseNumber(),
                    arcLarge: this._parseArcFlag(),
                    arcSweep: this._parseArcFlag(),
                    x: this._parseNumber(),
                    y: this._parseNumber(),
                  }),
                  new window.SVGPathSegArcRel(
                    i,
                    n.x,
                    n.y,
                    n.x1,
                    n.y1,
                    n.arcAngle,
                    n.arcLarge,
                    n.arcSweep,
                  )
                );
              case window.SVGPathSeg.PATHSEG_ARC_ABS:
                var n = {
                  x1: this._parseNumber(),
                  y1: this._parseNumber(),
                  arcAngle: this._parseNumber(),
                  arcLarge: this._parseArcFlag(),
                  arcSweep: this._parseArcFlag(),
                  x: this._parseNumber(),
                  y: this._parseNumber(),
                };
                return new window.SVGPathSegArcAbs(
                  i,
                  n.x,
                  n.y,
                  n.x1,
                  n.y1,
                  n.arcAngle,
                  n.arcLarge,
                  n.arcSweep,
                );
              default:
                throw "Unknown path seg type.";
            }
          });
        var r = new e(),
          a = new n(t);
        if (!a.initialCommandIsMoveTo()) return [];
        for (; a.hasMoreData(); ) {
          var o = a.parseSegment();
          if (!o) return [];
          r.appendSegment(o);
        }
        return r.pathSegList;
      })),
    (y.axis = function () {}),
    (y.axis.labels = function (e) {
      var n = this.internal;
      arguments.length &&
        (Object.keys(e).forEach(function (t) {
          n.axis.setLabelText(t, e[t]);
        }),
        n.axis.updateLabels());
    }),
    (y.axis.max = function (t) {
      var e = this.internal,
        n = e.config;
      if (!arguments.length)
        return { x: n.axis_x_max, y: n.axis_y_max, y2: n.axis_y2_max };
      "object" === (void 0 === t ? "undefined" : s(t))
        ? (P(t.x) && (n.axis_x_max = t.x),
          P(t.y) && (n.axis_y_max = t.y),
          P(t.y2) && (n.axis_y2_max = t.y2))
        : (n.axis_y_max = n.axis_y2_max = t),
        e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 });
    }),
    (y.axis.min = function (t) {
      var e = this.internal,
        n = e.config;
      if (!arguments.length)
        return { x: n.axis_x_min, y: n.axis_y_min, y2: n.axis_y2_min };
      "object" === (void 0 === t ? "undefined" : s(t))
        ? (P(t.x) && (n.axis_x_min = t.x),
          P(t.y) && (n.axis_y_min = t.y),
          P(t.y2) && (n.axis_y2_min = t.y2))
        : (n.axis_y_min = n.axis_y2_min = t),
        e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 });
    }),
    (y.axis.range = function (t) {
      if (!arguments.length)
        return { max: this.axis.max(), min: this.axis.min() };
      void 0 !== t.max && this.axis.max(t.max),
        void 0 !== t.min && this.axis.min(t.min);
    }),
    (y.category = function (t, e) {
      var n = this.internal,
        i = n.config;
      return (
        1 < arguments.length && ((i.axis_x_categories[t] = e), n.redraw()),
        i.axis_x_categories[t]
      );
    }),
    (y.categories = function (t) {
      var e = this.internal,
        n = e.config;
      return (
        arguments.length && ((n.axis_x_categories = t), e.redraw()),
        n.axis_x_categories
      );
    }),
    (y.resize = function (t) {
      var e = this.internal.config;
      (e.size_width = t ? t.width : null),
        (e.size_height = t ? t.height : null),
        this.flush();
    }),
    (y.flush = function () {
      this.internal.updateAndRedraw({
        withLegend: !0,
        withTransition: !1,
        withTransitionForTransform: !1,
      });
    }),
    (y.destroy = function () {
      var e = this.internal;
      if (
        (window.clearInterval(e.intervalForObserveInserted),
        void 0 !== e.resizeTimeout && window.clearTimeout(e.resizeTimeout),
        window.detachEvent)
      )
        window.detachEvent("onresize", e.resizeFunction);
      else if (window.removeEventListener)
        window.removeEventListener("resize", e.resizeFunction);
      else {
        var t = window.onresize;
        t && t.add && t.remove && t.remove(e.resizeFunction);
      }
      return (
        e.selectChart.classed("c3", !1).html(""),
        Object.keys(e).forEach(function (t) {
          e[t] = null;
        }),
        null
      );
    }),
    (y.color = function (t) {
      return this.internal.color(t);
    }),
    (y.data = function (e) {
      var t = this.internal.data.targets;
      return void 0 === e
        ? t
        : t.filter(function (t) {
            return 0 <= [].concat(e).indexOf(t.id);
          });
    }),
    (y.data.shown = function (t) {
      return this.internal.filterTargetsToShow(this.data(t));
    }),
    (y.data.values = function (t) {
      var e,
        n = null;
      return (
        t &&
          (n = (e = this.data(t))[0]
            ? e[0].values.map(function (t) {
                return t.value;
              })
            : null),
        n
      );
    }),
    (y.data.names = function (t) {
      return (
        this.internal.clearLegendItemTextBoxCache(),
        this.internal.updateDataAttributes("names", t)
      );
    }),
    (y.data.colors = function (t) {
      return this.internal.updateDataAttributes("colors", t);
    }),
    (y.data.axes = function (t) {
      return this.internal.updateDataAttributes("axes", t);
    }),
    (y.flow = function (t) {
      var r,
        e,
        n,
        i,
        a,
        o,
        s,
        u = this.internal,
        c = [],
        l = u.getMaxDataCount(),
        h = 0,
        d = 0;
      if (t.json) e = u.convertJsonToData(t.json, t.keys);
      else if (t.rows) e = u.convertRowsToData(t.rows);
      else {
        if (!t.columns) return;
        e = u.convertColumnsToData(t.columns);
      }
      (r = u.convertDataToTargets(e, !0)),
        u.data.targets.forEach(function (t) {
          var e,
            n,
            i = !1;
          for (e = 0; e < r.length; e++)
            if (t.id === r[e].id) {
              for (
                i = !0,
                  t.values[t.values.length - 1] &&
                    (d = t.values[t.values.length - 1].index + 1),
                  h = r[e].values.length,
                  n = 0;
                n < h;
                n++
              )
                (r[e].values[n].index = d + n),
                  u.isTimeSeries() || (r[e].values[n].x = d + n);
              (t.values = t.values.concat(r[e].values)), r.splice(e, 1);
              break;
            }
          i || c.push(t.id);
        }),
        u.data.targets.forEach(function (t) {
          var e, n;
          for (e = 0; e < c.length; e++)
            if (t.id === c[e])
              for (
                d = t.values[t.values.length - 1].index + 1, n = 0;
                n < h;
                n++
              )
                t.values.push({
                  id: t.id,
                  index: d + n,
                  x: u.isTimeSeries() ? u.getOtherTargetX(d + n) : d + n,
                  value: null,
                });
        }),
        u.data.targets.length &&
          r.forEach(function (t) {
            var e,
              n = [];
            for (e = u.data.targets[0].values[0].index; e < d; e++)
              n.push({
                id: t.id,
                index: e,
                x: u.isTimeSeries() ? u.getOtherTargetX(e) : e,
                value: null,
              });
            t.values.forEach(function (t) {
              (t.index += d), u.isTimeSeries() || (t.x += d);
            }),
              (t.values = n.concat(t.values));
          }),
        (u.data.targets = u.data.targets.concat(r)),
        u.getMaxDataCount(),
        (a = (i = u.data.targets[0]).values[0]),
        void 0 !== t.to
          ? ((h = 0),
            (s = u.isTimeSeries() ? u.parseDate(t.to) : t.to),
            i.values.forEach(function (t) {
              t.x < s && h++;
            }))
          : void 0 !== t.length && (h = t.length),
        l
          ? 1 === l &&
            u.isTimeSeries() &&
            ((o = (i.values[i.values.length - 1].x - a.x) / 2),
            (n = [new Date(+a.x - o), new Date(+a.x + o)]),
            u.updateXDomain(null, !0, !0, !1, n))
          : ((o = u.isTimeSeries()
              ? 1 < i.values.length
                ? i.values[i.values.length - 1].x - a.x
                : a.x - u.getXDomain(u.data.targets)[0]
              : 1),
            (n = [a.x - o, a.x]),
            u.updateXDomain(null, !0, !0, !1, n)),
        u.updateTargets(u.data.targets),
        u.redraw({
          flow: {
            index: a.index,
            length: h,
            duration: P(t.duration) ? t.duration : u.config.transition_duration,
            done: t.done,
            orgDataCount: l,
          },
          withLegend: !0,
          withTransition: 1 < l,
          withTrimXDomain: !1,
          withUpdateXAxis: !0,
        });
    }),
    (m.generateFlow = function (V) {
      var G = this,
        k = G.config,
        R = G.d3;
      return function () {
        var t,
          e,
          n,
          i,
          r = V.targets,
          a = V.flow,
          o = V.drawBar,
          s = V.drawLine,
          u = V.drawArea,
          c = V.cx,
          l = V.cy,
          h = V.xv,
          d = V.xForText,
          f = V.yForText,
          g = V.duration,
          p = a.index,
          x = a.length,
          _ = G.getValueOnIndex(G.data.targets[0].values, p),
          v = G.getValueOnIndex(G.data.targets[0].values, p + x),
          y = G.x.domain(),
          m = a.duration || g,
          w = a.done || function () {},
          S = G.generateWait(),
          b = G.xgrid || R.selectAll([]),
          A = G.xgridLines || R.selectAll([]),
          T = G.mainRegion || R.selectAll([]),
          P = G.mainText || R.selectAll([]),
          C = G.mainBar || R.selectAll([]),
          L = G.mainLine || R.selectAll([]),
          M = G.mainArea || R.selectAll([]),
          E = G.mainCircle || R.selectAll([]);
        (G.flowing = !0),
          G.data.targets.forEach(function (t) {
            t.values.splice(0, x);
          }),
          (n = G.updateXDomain(r, !0, !0)),
          G.updateXGrid && G.updateXGrid(!0),
          (t = a.orgDataCount
            ? 1 === a.orgDataCount || (_ && _.x) === (v && v.x)
              ? G.x(y[0]) - G.x(n[0])
              : G.isTimeSeries()
                ? G.x(y[0]) - G.x(n[0])
                : G.x(_.x) - G.x(v.x)
            : 1 !== G.data.targets[0].values.length
              ? G.x(y[0]) - G.x(n[0])
              : G.isTimeSeries()
                ? ((_ = G.getValueOnIndex(G.data.targets[0].values, 0)),
                  (v = G.getValueOnIndex(
                    G.data.targets[0].values,
                    G.data.targets[0].values.length - 1,
                  )),
                  G.x(_.x) - G.x(v.x))
                : O(n) / 2),
          (i = O(y) / O(n)),
          (e = "translate(" + t + ",0) scale(" + i + ",1)"),
          G.hideXGridFocus(),
          R.transition()
            .ease("linear")
            .duration(m)
            .each(function () {
              S.add(G.axes.x.transition().call(G.xAxis)),
                S.add(C.transition().attr("transform", e)),
                S.add(L.transition().attr("transform", e)),
                S.add(M.transition().attr("transform", e)),
                S.add(E.transition().attr("transform", e)),
                S.add(P.transition().attr("transform", e)),
                S.add(
                  T.filter(G.isRegionOnX).transition().attr("transform", e),
                ),
                S.add(b.transition().attr("transform", e)),
                S.add(A.transition().attr("transform", e));
            })
            .call(S, function () {
              var t,
                e = [],
                n = [],
                i = [];
              if (x) {
                for (t = 0; t < x; t++)
                  e.push("." + X.shape + "-" + (p + t)),
                    n.push("." + X.text + "-" + (p + t)),
                    i.push("." + X.eventRect + "-" + (p + t));
                G.svg
                  .selectAll("." + X.shapes)
                  .selectAll(e)
                  .remove(),
                  G.svg
                    .selectAll("." + X.texts)
                    .selectAll(n)
                    .remove(),
                  G.svg
                    .selectAll("." + X.eventRects)
                    .selectAll(i)
                    .remove(),
                  G.svg.select("." + X.xgrid).remove();
              }
              b.attr("transform", null).attr(G.xgridAttr),
                A.attr("transform", null),
                A.select("line")
                  .attr("x1", k.axis_rotated ? 0 : h)
                  .attr("x2", k.axis_rotated ? G.width : h),
                A.select("text")
                  .attr("x", k.axis_rotated ? G.width : 0)
                  .attr("y", h),
                C.attr("transform", null).attr("d", o),
                L.attr("transform", null).attr("d", s),
                M.attr("transform", null).attr("d", u),
                E.attr("transform", null).attr("cx", c).attr("cy", l),
                P.attr("transform", null)
                  .attr("x", d)
                  .attr("y", f)
                  .style("fill-opacity", G.opacityForText.bind(G)),
                T.attr("transform", null),
                T.select("rect")
                  .filter(G.isRegionOnX)
                  .attr("x", G.regionX.bind(G))
                  .attr("width", G.regionWidth.bind(G)),
                k.interaction_enabled && G.redrawEventRect(),
                w(),
                (G.flowing = !1);
            });
      };
    }),
    (y.focus = function (e) {
      var t,
        n = this.internal;
      (e = n.mapToTargetIds(e)),
        (t = n.svg.selectAll(n.selectorTargets(e.filter(n.isTargetToShow, n)))),
        this.revert(),
        this.defocus(),
        t.classed(X.focused, !0).classed(X.defocused, !1),
        n.hasArcType() && n.expandArc(e),
        n.toggleFocusLegend(e, !0),
        (n.focusedTargetIds = e),
        (n.defocusedTargetIds = n.defocusedTargetIds.filter(function (t) {
          return e.indexOf(t) < 0;
        }));
    }),
    (y.defocus = function (e) {
      var t = this.internal;
      (e = t.mapToTargetIds(e)),
        t.svg
          .selectAll(t.selectorTargets(e.filter(t.isTargetToShow, t)))
          .classed(X.focused, !1)
          .classed(X.defocused, !0),
        t.hasArcType() && t.unexpandArc(e),
        t.toggleFocusLegend(e, !1),
        (t.focusedTargetIds = t.focusedTargetIds.filter(function (t) {
          return e.indexOf(t) < 0;
        })),
        (t.defocusedTargetIds = e);
    }),
    (y.revert = function (t) {
      var e = this.internal;
      (t = e.mapToTargetIds(t)),
        e.svg
          .selectAll(e.selectorTargets(t))
          .classed(X.focused, !1)
          .classed(X.defocused, !1),
        e.hasArcType() && e.unexpandArc(t),
        e.config.legend_show &&
          (e.showLegend(t.filter(e.isLegendToShow.bind(e))),
          e.legend
            .selectAll(e.selectorLegends(t))
            .filter(function () {
              return e.d3.select(this).classed(X.legendItemFocused);
            })
            .classed(X.legendItemFocused, !1)),
        (e.focusedTargetIds = []),
        (e.defocusedTargetIds = []);
    }),
    (y.xgrids = function (t) {
      var e = this.internal,
        n = e.config;
      return (
        t && ((n.grid_x_lines = t), e.redrawWithoutRescale()), n.grid_x_lines
      );
    }),
    (y.xgrids.add = function (t) {
      var e = this.internal;
      return this.xgrids(e.config.grid_x_lines.concat(t || []));
    }),
    (y.xgrids.remove = function (t) {
      this.internal.removeGridLines(t, !0);
    }),
    (y.ygrids = function (t) {
      var e = this.internal,
        n = e.config;
      return (
        t && ((n.grid_y_lines = t), e.redrawWithoutRescale()), n.grid_y_lines
      );
    }),
    (y.ygrids.add = function (t) {
      var e = this.internal;
      return this.ygrids(e.config.grid_y_lines.concat(t || []));
    }),
    (y.ygrids.remove = function (t) {
      this.internal.removeGridLines(t, !1);
    }),
    (y.groups = function (t) {
      var e = this.internal,
        n = e.config;
      return void 0 === t || ((n.data_groups = t), e.redraw()), n.data_groups;
    }),
    (y.legend = function () {}),
    (y.legend.show = function (t) {
      var e = this.internal;
      e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 });
    }),
    (y.legend.hide = function (t) {
      var e = this.internal;
      e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({ withLegend: !0 });
    }),
    (y.load = function (e) {
      var t = this.internal,
        n = t.config;
      e.xs && t.addXs(e.xs),
        "names" in e && y.data.names.bind(this)(e.names),
        "classes" in e &&
          Object.keys(e.classes).forEach(function (t) {
            n.data_classes[t] = e.classes[t];
          }),
        "categories" in e &&
          t.isCategorized() &&
          (n.axis_x_categories = e.categories),
        "axes" in e &&
          Object.keys(e.axes).forEach(function (t) {
            n.data_axes[t] = e.axes[t];
          }),
        "colors" in e &&
          Object.keys(e.colors).forEach(function (t) {
            n.data_colors[t] = e.colors[t];
          }),
        "cacheIds" in e && t.hasCaches(e.cacheIds)
          ? t.load(t.getCaches(e.cacheIds), e.done)
          : "unload" in e
            ? t.unload(
                t.mapToTargetIds(
                  "boolean" == typeof e.unload && e.unload ? null : e.unload,
                ),
                function () {
                  t.loadFromArgs(e);
                },
              )
            : t.loadFromArgs(e);
    }),
    (y.unload = function (t) {
      var e = this.internal;
      (t = t || {}) instanceof Array
        ? (t = { ids: t })
        : "string" == typeof t && (t = { ids: [t] }),
        e.unload(e.mapToTargetIds(t.ids), function () {
          e.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0,
          }),
            t.done && t.done();
        });
    }),
    (y.regions = function (t) {
      var e = this.internal,
        n = e.config;
      return t && ((n.regions = t), e.redrawWithoutRescale()), n.regions;
    }),
    (y.regions.add = function (t) {
      var e = this.internal,
        n = e.config;
      return (
        t && ((n.regions = n.regions.concat(t)), e.redrawWithoutRescale()),
        n.regions
      );
    }),
    (y.regions.remove = function (t) {
      var e,
        n,
        i,
        r = this.internal,
        a = r.config;
      return (
        (t = t || {}),
        (e = r.getOption(t, "duration", a.transition_duration)),
        (n = r.getOption(t, "classes", [X.region])),
        (i = r.main.select("." + X.regions).selectAll(
          n.map(function (t) {
            return "." + t;
          }),
        )),
        (e ? i.transition().duration(e) : i).style("opacity", 0).remove(),
        (a.regions = a.regions.filter(function (t) {
          var e = !1;
          return (
            !t.class ||
            (t.class.split(" ").forEach(function (t) {
              0 <= n.indexOf(t) && (e = !0);
            }),
            !e)
          );
        })),
        a.regions
      );
    }),
    (y.selected = function (t) {
      var e = this.internal,
        n = e.d3;
      return n.merge(
        e.main
          .selectAll("." + X.shapes + e.getTargetSelectorSuffix(t))
          .selectAll("." + X.shape)
          .filter(function () {
            return n.select(this).classed(X.SELECTED);
          })
          .map(function (t) {
            return t.map(function (t) {
              var e = t.__data__;
              return e.data ? e.data : e;
            });
          }),
      );
    }),
    (y.select = function (u, c, l) {
      var h = this.internal,
        d = h.d3,
        f = h.config;
      f.data_selection_enabled &&
        h.main
          .selectAll("." + X.shapes)
          .selectAll("." + X.shape)
          .each(function (t, e) {
            var n = d.select(this),
              i = t.data ? t.data.id : t.id,
              r = h.getToggle(this, t).bind(h),
              a = f.data_selection_grouped || !u || 0 <= u.indexOf(i),
              o = !c || 0 <= c.indexOf(e),
              s = n.classed(X.SELECTED);
            n.classed(X.line) ||
              n.classed(X.area) ||
              (a && o
                ? f.data_selection_isselectable(t) &&
                  !s &&
                  r(!0, n.classed(X.SELECTED, !0), t, e)
                : void 0 !== l &&
                  l &&
                  s &&
                  r(!1, n.classed(X.SELECTED, !1), t, e));
          });
    }),
    (y.unselect = function (u, c) {
      var l = this.internal,
        h = l.d3,
        d = l.config;
      d.data_selection_enabled &&
        l.main
          .selectAll("." + X.shapes)
          .selectAll("." + X.shape)
          .each(function (t, e) {
            var n = h.select(this),
              i = t.data ? t.data.id : t.id,
              r = l.getToggle(this, t).bind(l),
              a = d.data_selection_grouped || !u || 0 <= u.indexOf(i),
              o = !c || 0 <= c.indexOf(e),
              s = n.classed(X.SELECTED);
            n.classed(X.line) ||
              n.classed(X.area) ||
              (a &&
                o &&
                d.data_selection_isselectable(t) &&
                s &&
                r(!1, n.classed(X.SELECTED, !1), t, e));
          });
    }),
    (y.show = function (t, e) {
      var n,
        i = this.internal;
      (t = i.mapToTargetIds(t)),
        (e = e || {}),
        i.removeHiddenTargetIds(t),
        (n = i.svg.selectAll(i.selectorTargets(t)))
          .transition()
          .style("opacity", 1, "important")
          .call(i.endall, function () {
            n.style("opacity", null).style("opacity", 1);
          }),
        e.withLegend && i.showLegend(t),
        i.redraw({
          withUpdateOrgXDomain: !0,
          withUpdateXDomain: !0,
          withLegend: !0,
        });
    }),
    (y.hide = function (t, e) {
      var n,
        i = this.internal;
      (t = i.mapToTargetIds(t)),
        (e = e || {}),
        i.addHiddenTargetIds(t),
        (n = i.svg.selectAll(i.selectorTargets(t)))
          .transition()
          .style("opacity", 0, "important")
          .call(i.endall, function () {
            n.style("opacity", null).style("opacity", 0);
          }),
        e.withLegend && i.hideLegend(t),
        i.redraw({
          withUpdateOrgXDomain: !0,
          withUpdateXDomain: !0,
          withLegend: !0,
        });
    }),
    (y.toggle = function (t, e) {
      var n = this,
        i = this.internal;
      i.mapToTargetIds(t).forEach(function (t) {
        i.isTargetToShow(t) ? n.hide(t, e) : n.show(t, e);
      });
    }),
    (y.tooltip = function () {}),
    (y.tooltip.show = function (t) {
      var e,
        n,
        i = this.internal;
      t.mouse && (n = t.mouse),
        t.data
          ? (e = i.isMultipleX()
              ? ((n = [i.x(t.data.x), i.getYScale(t.data.id)(t.data.value)]),
                null)
              : P(t.data.index)
                ? t.data.index
                : i.getIndexByX(t.data.x))
          : void 0 !== t.x
            ? (e = i.getIndexByX(t.x))
            : void 0 !== t.index && (e = t.index),
        i.dispatchEvent("mouseover", e, n),
        i.dispatchEvent("mousemove", e, n),
        i.config.tooltip_onshow.call(i, t.data);
    }),
    (y.tooltip.hide = function () {
      this.internal.dispatchEvent("mouseout", 0),
        this.internal.config.tooltip_onhide.call(this);
    }),
    (y.transform = function (t, e) {
      var n = this.internal,
        i = 0 <= ["pie", "donut"].indexOf(t) ? { withTransform: !0 } : null;
      n.transformTo(e, t, i);
    }),
    (m.transformTo = function (t, e, n) {
      var i = this,
        r = !i.hasArcType(),
        a = n || { withTransitionForAxis: r };
      (a.withTransitionForTransform = !1),
        (i.transiting = !1),
        i.setTargetType(t, e),
        i.updateTargets(i.data.targets),
        i.updateAndRedraw(a);
    }),
    (y.x = function (t) {
      var e = this.internal;
      return (
        arguments.length &&
          (e.updateTargetX(e.data.targets, t),
          e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })),
        e.data.xs
      );
    }),
    (y.xs = function (t) {
      var e = this.internal;
      return (
        arguments.length &&
          (e.updateTargetXs(e.data.targets, t),
          e.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0 })),
        e.data.xs
      );
    }),
    (y.zoom = function (t) {
      var e = this.internal;
      return (
        t &&
          (e.isTimeSeries() &&
            (t = t.map(function (t) {
              return e.parseDate(t);
            })),
          e.brush.extent(t),
          e.redraw({ withUpdateXDomain: !0, withY: e.config.zoom_rescale }),
          e.config.zoom_onzoom.call(this, e.x.orgDomain())),
        e.brush.extent()
      );
    }),
    (y.zoom.enable = function (t) {
      var e = this.internal;
      (e.config.zoom_enabled = t), e.updateAndRedraw();
    }),
    (y.unzoom = function () {
      var t = this.internal;
      t.brush.clear().update(), t.redraw({ withUpdateXDomain: !0 });
    }),
    (y.zoom.max = function (t) {
      var e = this.internal,
        n = e.config,
        i = e.d3;
      if (0 !== t && !t) return n.zoom_x_max;
      n.zoom_x_max = i.max([e.orgXDomain[1], t]);
    }),
    (y.zoom.min = function (t) {
      var e = this.internal,
        n = e.config,
        i = e.d3;
      if (0 !== t && !t) return n.zoom_x_min;
      n.zoom_x_min = i.min([e.orgXDomain[0], t]);
    }),
    (y.zoom.range = function (t) {
      if (!arguments.length)
        return { max: this.domain.max(), min: this.domain.min() };
      void 0 !== t.max && this.domain.max(t.max),
        void 0 !== t.min && this.domain.min(t.min);
    }),
    (m.initPie = function () {
      var t = this.d3;
      (this.pie = t.layout.pie().value(function (t) {
        return t.values.reduce(function (t, e) {
          return t + e.value;
        }, 0);
      })),
        this.pie.sort(this.getOrderFunction() || null);
    }),
    (m.updateRadius = function () {
      var t = this,
        e = t.config,
        n = e.gauge_width || e.donut_width;
      (t.radiusExpanded = Math.min(t.arcWidth, t.arcHeight) / 2),
        (t.radius = 0.95 * t.radiusExpanded),
        (t.innerRadiusRatio = n ? (t.radius - n) / t.radius : 0.6),
        (t.innerRadius =
          t.hasType("donut") || t.hasType("gauge")
            ? t.radius * t.innerRadiusRatio
            : 0);
    }),
    (m.updateArc = function () {
      var t = this;
      (t.svgArc = t.getSvgArc()),
        (t.svgArcExpanded = t.getSvgArcExpanded()),
        (t.svgArcExpandedSub = t.getSvgArcExpanded(0.98));
    }),
    (m.updateAngle = function (e) {
      var t,
        n,
        i,
        r,
        a = this,
        o = a.config,
        s = !1,
        u = 0;
      return o
        ? (a.pie(a.filterTargetsToShow(a.data.targets)).forEach(function (t) {
            s || t.data.id !== e.data.id || ((s = !0), ((e = t).index = u)),
              u++;
          }),
          isNaN(e.startAngle) && (e.startAngle = 0),
          isNaN(e.endAngle) && (e.endAngle = e.startAngle),
          a.isGaugeType(e.data) &&
            ((t = o.gauge_min),
            (n = o.gauge_max),
            (i = (Math.PI * (o.gauge_fullCircle ? 2 : 1)) / (n - t)),
            (r = e.value < t ? 0 : e.value < n ? e.value - t : n - t),
            (e.startAngle = o.gauge_startingAngle),
            (e.endAngle = e.startAngle + i * r)),
          s ? e : null)
        : null;
    }),
    (m.getSvgArc = function () {
      var i = this,
        r = i.d3.svg.arc().outerRadius(i.radius).innerRadius(i.innerRadius),
        t = function (t, e) {
          var n;
          return e ? r(t) : (n = i.updateAngle(t)) ? r(n) : "M 0 0";
        };
      return (t.centroid = r.centroid), t;
    }),
    (m.getSvgArcExpanded = function (t) {
      var n = this,
        i = n.d3.svg
          .arc()
          .outerRadius(n.radiusExpanded * (t || 1))
          .innerRadius(n.innerRadius);
      return function (t) {
        var e = n.updateAngle(t);
        return e ? i(e) : "M 0 0";
      };
    }),
    (m.getArc = function (t, e, n) {
      return n || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0";
    }),
    (m.transformForArcLabel = function (t) {
      var e,
        n,
        i,
        r,
        a,
        o = this,
        s = o.config,
        u = o.updateAngle(t),
        c = "";
      return (
        u &&
          !o.hasType("gauge") &&
          ((e = this.svgArc.centroid(u)),
          (n = isNaN(e[0]) ? 0 : e[0]),
          (i = isNaN(e[1]) ? 0 : e[1]),
          (r = Math.sqrt(n * n + i * i)),
          (c =
            "translate(" +
            n *
              (a =
                o.hasType("donut") && s.donut_label_ratio
                  ? h(s.donut_label_ratio)
                    ? s.donut_label_ratio(t, o.radius, r)
                    : s.donut_label_ratio
                  : o.hasType("pie") && s.pie_label_ratio
                    ? h(s.pie_label_ratio)
                      ? s.pie_label_ratio(t, o.radius, r)
                      : s.pie_label_ratio
                    : o.radius && r
                      ? ((0.375 < 36 / o.radius ? 1.175 - 36 / o.radius : 0.8) *
                          o.radius) /
                        r
                      : 0) +
            "," +
            i * a +
            ")")),
        c
      );
    }),
    (m.getArcRatio = function (t) {
      var e = this.config,
        n = Math.PI * (this.hasType("gauge") && !e.gauge_fullCircle ? 1 : 2);
      return t ? (t.endAngle - t.startAngle) / n : null;
    }),
    (m.convertToArcData = function (t) {
      return this.addName({
        id: t.data.id,
        value: t.value,
        ratio: this.getArcRatio(t),
        index: t.index,
      });
    }),
    (m.textForArcLabel = function (t) {
      var e,
        n,
        i,
        r,
        a,
        o = this;
      return o.shouldShowArcLabel()
        ? ((n = (e = o.updateAngle(t)) ? e.value : null),
          (i = o.getArcRatio(e)),
          (r = t.data.id),
          o.hasType("gauge") || o.meetsArcLabelThreshold(i)
            ? (a = o.getArcLabelFormat())
              ? a(n, i, r)
              : o.defaultArcValueFormat(n, i)
            : "")
        : "";
    }),
    (m.textForGaugeMinMax = function (t, e) {
      var n = this.getGaugeLabelExtents();
      return n ? n(t, e) : t;
    }),
    (m.expandArc = function (t) {
      var e,
        n = this;
      n.transiting
        ? (e = window.setInterval(function () {
            n.transiting ||
              (window.clearInterval(e),
              0 < n.legend.selectAll(".c3-legend-item-focused").size() &&
                n.expandArc(t));
          }, 10))
        : ((t = n.mapToTargetIds(t)),
          n.svg
            .selectAll(n.selectorTargets(t, "." + X.chartArc))
            .each(function (t) {
              n.shouldExpand(t.data.id) &&
                n.d3
                  .select(this)
                  .selectAll("path")
                  .transition()
                  .duration(n.expandDuration(t.data.id))
                  .attr("d", n.svgArcExpanded)
                  .transition()
                  .duration(2 * n.expandDuration(t.data.id))
                  .attr("d", n.svgArcExpandedSub)
                  .each(function (t) {
                    n.isDonutType(t.data);
                  });
            }));
    }),
    (m.unexpandArc = function (t) {
      var e = this;
      e.transiting ||
        ((t = e.mapToTargetIds(t)),
        e.svg
          .selectAll(e.selectorTargets(t, "." + X.chartArc))
          .selectAll("path")
          .transition()
          .duration(function (t) {
            return e.expandDuration(t.data.id);
          })
          .attr("d", e.svgArc),
        e.svg.selectAll("." + X.arc));
    }),
    (m.expandDuration = function (t) {
      var e = this.config;
      return this.isDonutType(t)
        ? e.donut_expand_duration
        : this.isGaugeType(t)
          ? e.gauge_expand_duration
          : this.isPieType(t)
            ? e.pie_expand_duration
            : 50;
    }),
    (m.shouldExpand = function (t) {
      var e = this.config;
      return (
        (this.isDonutType(t) && e.donut_expand) ||
        (this.isGaugeType(t) && e.gauge_expand) ||
        (this.isPieType(t) && e.pie_expand)
      );
    }),
    (m.shouldShowArcLabel = function () {
      var t = this.config,
        e = !0;
      return (
        this.hasType("donut")
          ? (e = t.donut_label_show)
          : this.hasType("pie") && (e = t.pie_label_show),
        e
      );
    }),
    (m.meetsArcLabelThreshold = function (t) {
      var e = this.config;
      return (
        t >=
        (this.hasType("donut")
          ? e.donut_label_threshold
          : e.pie_label_threshold)
      );
    }),
    (m.getArcLabelFormat = function () {
      var t = this.config,
        e = t.pie_label_format;
      return (
        this.hasType("gauge")
          ? (e = t.gauge_label_format)
          : this.hasType("donut") && (e = t.donut_label_format),
        e
      );
    }),
    (m.getGaugeLabelExtents = function () {
      return this.config.gauge_label_extents;
    }),
    (m.getArcTitle = function () {
      return this.hasType("donut") ? this.config.donut_title : "";
    }),
    (m.updateTargetsForArc = function (t) {
      var e,
        n = this,
        i = n.main,
        r = n.classChartArc.bind(n),
        a = n.classArcs.bind(n),
        o = n.classFocus.bind(n);
      (e = i
        .select("." + X.chartArcs)
        .selectAll("." + X.chartArc)
        .data(n.pie(t))
        .attr("class", function (t) {
          return r(t) + o(t.data);
        })
        .enter()
        .append("g")
        .attr("class", r))
        .append("g")
        .attr("class", a),
        e
          .append("text")
          .attr("dy", n.hasType("gauge") ? "-.1em" : ".35em")
          .style("opacity", 0)
          .style("text-anchor", "middle")
          .style("pointer-events", "none");
    }),
    (m.initArc = function () {
      var t = this;
      (t.arcs = t.main
        .select("." + X.chart)
        .append("g")
        .attr("class", X.chartArcs)
        .attr("transform", t.getTranslate("arc"))),
        t.arcs
          .append("text")
          .attr("class", X.chartArcsTitle)
          .style("text-anchor", "middle")
          .text(t.getArcTitle());
    }),
    (m.redrawArc = function (t, e, n) {
      var i,
        r = this,
        a = r.d3,
        o = r.config,
        s = r.main;
      (i = s
        .selectAll("." + X.arcs)
        .selectAll("." + X.arc)
        .data(r.arcData.bind(r)))
        .enter()
        .append("path")
        .attr("class", r.classArc.bind(r))
        .style("fill", function (t) {
          return r.color(t.data);
        })
        .style("cursor", function (t) {
          return o.interaction_enabled && o.data_selection_isselectable(t)
            ? "pointer"
            : null;
        })
        .each(function (t) {
          r.isGaugeType(t.data) &&
            (t.startAngle = t.endAngle = o.gauge_startingAngle),
            (this._current = t);
        }),
        i
          .attr("transform", function (t) {
            return !r.isGaugeType(t.data) && n ? "scale(0)" : "";
          })
          .on(
            "mouseover",
            o.interaction_enabled
              ? function (t) {
                  var e, n;
                  r.transiting ||
                    ((e = r.updateAngle(t)) &&
                      ((n = r.convertToArcData(e)),
                      r.expandArc(e.data.id),
                      r.api.focus(e.data.id),
                      r.toggleFocusLegend(e.data.id, !0),
                      r.config.data_onmouseover(n, this)));
                }
              : null,
          )
          .on(
            "mousemove",
            o.interaction_enabled
              ? function (t) {
                  var e,
                    n = r.updateAngle(t);
                  n && ((e = [r.convertToArcData(n)]), r.showTooltip(e, this));
                }
              : null,
          )
          .on(
            "mouseout",
            o.interaction_enabled
              ? function (t) {
                  var e, n;
                  r.transiting ||
                    ((e = r.updateAngle(t)) &&
                      ((n = r.convertToArcData(e)),
                      r.unexpandArc(e.data.id),
                      r.api.revert(),
                      r.revertLegend(),
                      r.hideTooltip(),
                      r.config.data_onmouseout(n, this)));
                }
              : null,
          )
          .on(
            "click",
            o.interaction_enabled
              ? function (t, e) {
                  var n,
                    i = r.updateAngle(t);
                  i &&
                    ((n = r.convertToArcData(i)),
                    r.toggleShape && r.toggleShape(this, n, e),
                    r.config.data_onclick.call(r.api, n, this));
                }
              : null,
          )
          .each(function () {
            r.transiting = !0;
          })
          .transition()
          .duration(t)
          .attrTween("d", function (n) {
            var i,
              t = r.updateAngle(n);
            return t
              ? (isNaN(this._current.startAngle) &&
                  (this._current.startAngle = 0),
                isNaN(this._current.endAngle) &&
                  (this._current.endAngle = this._current.startAngle),
                (i = a.interpolate(this._current, t)),
                (this._current = i(0)),
                function (t) {
                  var e = i(t);
                  return (e.data = n.data), r.getArc(e, !0);
                })
              : function () {
                  return "M 0 0";
                };
          })
          .attr("transform", n ? "scale(1)" : "")
          .style("fill", function (t) {
            return r.levelColor
              ? r.levelColor(t.data.values[0].value)
              : r.color(t.data.id);
          })
          .call(r.endall, function () {
            r.transiting = !1;
          }),
        i.exit().transition().duration(e).style("opacity", 0).remove(),
        s
          .selectAll("." + X.chartArc)
          .select("text")
          .style("opacity", 0)
          .attr("class", function (t) {
            return r.isGaugeType(t.data) ? X.gaugeValue : "";
          })
          .text(r.textForArcLabel.bind(r))
          .attr("transform", r.transformForArcLabel.bind(r))
          .style("font-size", function (t) {
            return r.isGaugeType(t.data) ? Math.round(r.radius / 5) + "px" : "";
          })
          .transition()
          .duration(t)
          .style("opacity", function (t) {
            return r.isTargetToShow(t.data.id) && r.isArcType(t.data) ? 1 : 0;
          }),
        s
          .select("." + X.chartArcsTitle)
          .style("opacity", r.hasType("donut") || r.hasType("gauge") ? 1 : 0),
        r.hasType("gauge") &&
          (r.arcs.select("." + X.chartArcsBackground).attr("d", function () {
            var t = {
              data: [{ value: o.gauge_max }],
              startAngle: o.gauge_startingAngle,
              endAngle: -1 * o.gauge_startingAngle,
            };
            return r.getArc(t, !0, !0);
          }),
          r.arcs
            .select("." + X.chartArcsGaugeUnit)
            .attr("dy", ".75em")
            .text(o.gauge_label_show ? o.gauge_units : ""),
          r.arcs
            .select("." + X.chartArcsGaugeMin)
            .attr(
              "dx",
              -1 *
                (r.innerRadius +
                  (r.radius - r.innerRadius) / (o.gauge_fullCircle ? 1 : 2)) +
                "px",
            )
            .attr("dy", "1.2em")
            .text(
              o.gauge_label_show ? r.textForGaugeMinMax(o.gauge_min, !1) : "",
            ),
          r.arcs
            .select("." + X.chartArcsGaugeMax)
            .attr(
              "dx",
              r.innerRadius +
                (r.radius - r.innerRadius) / (o.gauge_fullCircle ? 1 : 2) +
                "px",
            )
            .attr("dy", "1.2em")
            .text(
              o.gauge_label_show ? r.textForGaugeMinMax(o.gauge_max, !0) : "",
            ));
    }),
    (m.initGauge = function () {
      var t = this.arcs;
      this.hasType("gauge") &&
        (t.append("path").attr("class", X.chartArcsBackground),
        t
          .append("text")
          .attr("class", X.chartArcsGaugeUnit)
          .style("text-anchor", "middle")
          .style("pointer-events", "none"),
        t
          .append("text")
          .attr("class", X.chartArcsGaugeMin)
          .style("text-anchor", "middle")
          .style("pointer-events", "none"),
        t
          .append("text")
          .attr("class", X.chartArcsGaugeMax)
          .style("text-anchor", "middle")
          .style("pointer-events", "none"));
    }),
    (m.getGaugeLabelHeight = function () {
      return this.config.gauge_label_show ? 20 : 0;
    }),
    (m.hasCaches = function (t) {
      for (var e = 0; e < t.length; e++) if (!(t[e] in this.cache)) return !1;
      return !0;
    }),
    (m.addCache = function (t, e) {
      this.cache[t] = this.cloneTarget(e);
    }),
    (m.getCaches = function (t) {
      var e,
        n = [];
      for (e = 0; e < t.length; e++)
        t[e] in this.cache && n.push(this.cloneTarget(this.cache[t[e]]));
      return n;
    }),
    (m.categoryName = function (t) {
      var e = this.config;
      return t < e.axis_x_categories.length ? e.axis_x_categories[t] : t;
    }),
    (m.generateClass = function (t, e) {
      return " " + t + " " + t + this.getTargetSelectorSuffix(e);
    }),
    (m.classText = function (t) {
      return this.generateClass(X.text, t.index);
    }),
    (m.classTexts = function (t) {
      return this.generateClass(X.texts, t.id);
    }),
    (m.classShape = function (t) {
      return this.generateClass(X.shape, t.index);
    }),
    (m.classShapes = function (t) {
      return this.generateClass(X.shapes, t.id);
    }),
    (m.classLine = function (t) {
      return this.classShape(t) + this.generateClass(X.line, t.id);
    }),
    (m.classLines = function (t) {
      return this.classShapes(t) + this.generateClass(X.lines, t.id);
    }),
    (m.classCircle = function (t) {
      return this.classShape(t) + this.generateClass(X.circle, t.index);
    }),
    (m.classCircles = function (t) {
      return this.classShapes(t) + this.generateClass(X.circles, t.id);
    }),
    (m.classBar = function (t) {
      return this.classShape(t) + this.generateClass(X.bar, t.index);
    }),
    (m.classBars = function (t) {
      return this.classShapes(t) + this.generateClass(X.bars, t.id);
    }),
    (m.classArc = function (t) {
      return this.classShape(t.data) + this.generateClass(X.arc, t.data.id);
    }),
    (m.classArcs = function (t) {
      return this.classShapes(t.data) + this.generateClass(X.arcs, t.data.id);
    }),
    (m.classArea = function (t) {
      return this.classShape(t) + this.generateClass(X.area, t.id);
    }),
    (m.classAreas = function (t) {
      return this.classShapes(t) + this.generateClass(X.areas, t.id);
    }),
    (m.classRegion = function (t, e) {
      return (
        this.generateClass(X.region, e) + " " + ("class" in t ? t.class : "")
      );
    }),
    (m.classEvent = function (t) {
      return this.generateClass(X.eventRect, t.index);
    }),
    (m.classTarget = function (t) {
      var e = this.config.data_classes[t],
        n = "";
      return (
        e && (n = " " + X.target + "-" + e), this.generateClass(X.target, t) + n
      );
    }),
    (m.classFocus = function (t) {
      return this.classFocused(t) + this.classDefocused(t);
    }),
    (m.classFocused = function (t) {
      return " " + (0 <= this.focusedTargetIds.indexOf(t.id) ? X.focused : "");
    }),
    (m.classDefocused = function (t) {
      return (
        " " + (0 <= this.defocusedTargetIds.indexOf(t.id) ? X.defocused : "")
      );
    }),
    (m.classChartText = function (t) {
      return X.chartText + this.classTarget(t.id);
    }),
    (m.classChartLine = function (t) {
      return X.chartLine + this.classTarget(t.id);
    }),
    (m.classChartBar = function (t) {
      return X.chartBar + this.classTarget(t.id);
    }),
    (m.classChartArc = function (t) {
      return X.chartArc + this.classTarget(t.data.id);
    }),
    (m.getTargetSelectorSuffix = function (t) {
      return t || 0 === t
        ? ("-" + t).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-")
        : "";
    }),
    (m.selectorTarget = function (t, e) {
      return (e || "") + "." + X.target + this.getTargetSelectorSuffix(t);
    }),
    (m.selectorTargets = function (t, e) {
      var n = this;
      return (t = t || []).length
        ? t.map(function (t) {
            return n.selectorTarget(t, e);
          })
        : null;
    }),
    (m.selectorLegend = function (t) {
      return "." + X.legendItem + this.getTargetSelectorSuffix(t);
    }),
    (m.selectorLegends = function (t) {
      var e = this;
      return t && t.length
        ? t.map(function (t) {
            return e.selectorLegend(t);
          })
        : null;
    }),
    (m.getClipPath = function (t) {
      return (
        "url(" +
        (0 <= window.navigator.appVersion.toLowerCase().indexOf("msie 9.")
          ? ""
          : document.URL.split("#")[0]) +
        "#" +
        t +
        ")"
      );
    }),
    (m.appendClip = function (t, e) {
      return t.append("clipPath").attr("id", e).append("rect");
    }),
    (m.getAxisClipX = function (t) {
      var e = Math.max(30, this.margin.left);
      return t ? -(1 + e) : -(e - 1);
    }),
    (m.getAxisClipY = function (t) {
      return t ? -20 : -this.margin.top;
    }),
    (m.getXAxisClipX = function () {
      return this.getAxisClipX(!this.config.axis_rotated);
    }),
    (m.getXAxisClipY = function () {
      return this.getAxisClipY(!this.config.axis_rotated);
    }),
    (m.getYAxisClipX = function () {
      return this.config.axis_y_inner
        ? -1
        : this.getAxisClipX(this.config.axis_rotated);
    }),
    (m.getYAxisClipY = function () {
      return this.getAxisClipY(this.config.axis_rotated);
    }),
    (m.getAxisClipWidth = function (t) {
      var e = Math.max(30, this.margin.left),
        n = Math.max(30, this.margin.right);
      return t ? this.width + 2 + e + n : this.margin.left + 20;
    }),
    (m.getAxisClipHeight = function (t) {
      return (t ? this.margin.bottom : this.margin.top + this.height) + 20;
    }),
    (m.getXAxisClipWidth = function () {
      return this.getAxisClipWidth(!this.config.axis_rotated);
    }),
    (m.getXAxisClipHeight = function () {
      return this.getAxisClipHeight(!this.config.axis_rotated);
    }),
    (m.getYAxisClipWidth = function () {
      return (
        this.getAxisClipWidth(this.config.axis_rotated) +
        (this.config.axis_y_inner ? 20 : 0)
      );
    }),
    (m.getYAxisClipHeight = function () {
      return this.getAxisClipHeight(this.config.axis_rotated);
    }),
    (m.generateColor = function () {
      var t = this.config,
        e = this.d3,
        i = t.data_colors,
        r = C(t.color_pattern) ? t.color_pattern : e.scale.category10().range(),
        a = t.data_color,
        o = [];
      return function (t) {
        var e,
          n = t.id || (t.data && t.data.id) || t;
        return (
          i[n] instanceof Function
            ? (e = i[n](t))
            : i[n]
              ? (e = i[n])
              : (o.indexOf(n) < 0 && o.push(n),
                (e = r[o.indexOf(n) % r.length]),
                (i[n] = e)),
          a instanceof Function ? a(e, t) : e
        );
      };
    }),
    (m.generateLevelColor = function () {
      var t = this.config,
        i = t.color_pattern,
        e = t.color_threshold,
        r = "value" === e.unit,
        a = e.values && e.values.length ? e.values : [],
        o = e.max || 100;
      return C(t.color_threshold)
        ? function (t) {
            var e,
              n = i[i.length - 1];
            for (e = 0; e < a.length; e++)
              if ((r ? t : (100 * t) / o) < a[e]) {
                n = i[e];
                break;
              }
            return n;
          }
        : null;
    }),
    (m.getDefaultConfig = function () {
      var e = {
        bindto: "#chart",
        svg_classname: void 0,
        size_width: void 0,
        size_height: void 0,
        padding_left: void 0,
        padding_right: void 0,
        padding_top: void 0,
        padding_bottom: void 0,
        resize_auto: !0,
        zoom_enabled: !1,
        zoom_extent: void 0,
        zoom_privileged: !1,
        zoom_rescale: !1,
        zoom_onzoom: function () {},
        zoom_onzoomstart: function () {},
        zoom_onzoomend: function () {},
        zoom_x_min: void 0,
        zoom_x_max: void 0,
        interaction_brighten: !0,
        interaction_enabled: !0,
        onmouseover: function () {},
        onmouseout: function () {},
        onresize: function () {},
        onresized: function () {},
        oninit: function () {},
        onrendered: function () {},
        transition_duration: 350,
        data_x: void 0,
        data_xs: {},
        data_xFormat: "%Y-%m-%d",
        data_xLocaltime: !0,
        data_xSort: !0,
        data_idConverter: function (t) {
          return t;
        },
        data_names: {},
        data_classes: {},
        data_groups: [],
        data_axes: {},
        data_type: void 0,
        data_types: {},
        data_labels: {},
        data_order: "desc",
        data_regions: {},
        data_color: void 0,
        data_colors: {},
        data_hide: !1,
        data_filter: void 0,
        data_selection_enabled: !1,
        data_selection_grouped: !1,
        data_selection_isselectable: function () {
          return !0;
        },
        data_selection_multiple: !0,
        data_selection_draggable: !1,
        data_onclick: function () {},
        data_onmouseover: function () {},
        data_onmouseout: function () {},
        data_onselected: function () {},
        data_onunselected: function () {},
        data_url: void 0,
        data_headers: void 0,
        data_json: void 0,
        data_rows: void 0,
        data_columns: void 0,
        data_mimeType: void 0,
        data_keys: void 0,
        data_empty_label_text: "",
        subchart_show: !1,
        subchart_size_height: 60,
        subchart_axis_x_show: !0,
        subchart_onbrush: function () {},
        color_pattern: [],
        color_threshold: {},
        legend_show: !0,
        legend_hide: !1,
        legend_position: "bottom",
        legend_inset_anchor: "top-left",
        legend_inset_x: 10,
        legend_inset_y: 0,
        legend_inset_step: void 0,
        legend_item_onclick: void 0,
        legend_item_onmouseover: void 0,
        legend_item_onmouseout: void 0,
        legend_equally: !1,
        legend_padding: 0,
        legend_item_tile_width: 10,
        legend_item_tile_height: 10,
        axis_rotated: !1,
        axis_x_show: !0,
        axis_x_type: "indexed",
        axis_x_localtime: !0,
        axis_x_categories: [],
        axis_x_tick_centered: !1,
        axis_x_tick_format: void 0,
        axis_x_tick_culling: {},
        axis_x_tick_culling_max: 10,
        axis_x_tick_count: void 0,
        axis_x_tick_fit: !0,
        axis_x_tick_values: null,
        axis_x_tick_rotate: 0,
        axis_x_tick_outer: !0,
        axis_x_tick_multiline: !0,
        axis_x_tick_width: null,
        axis_x_max: void 0,
        axis_x_min: void 0,
        axis_x_padding: {},
        axis_x_height: void 0,
        axis_x_extent: void 0,
        axis_x_label: {},
        axis_y_show: !0,
        axis_y_type: void 0,
        axis_y_max: void 0,
        axis_y_min: void 0,
        axis_y_inverted: !1,
        axis_y_center: void 0,
        axis_y_inner: void 0,
        axis_y_label: {},
        axis_y_tick_format: void 0,
        axis_y_tick_outer: !0,
        axis_y_tick_values: null,
        axis_y_tick_rotate: 0,
        axis_y_tick_count: void 0,
        axis_y_tick_time_value: void 0,
        axis_y_tick_time_interval: void 0,
        axis_y_padding: {},
        axis_y_default: void 0,
        axis_y2_show: !1,
        axis_y2_max: void 0,
        axis_y2_min: void 0,
        axis_y2_inverted: !1,
        axis_y2_center: void 0,
        axis_y2_inner: void 0,
        axis_y2_label: {},
        axis_y2_tick_format: void 0,
        axis_y2_tick_outer: !0,
        axis_y2_tick_values: null,
        axis_y2_tick_count: void 0,
        axis_y2_padding: {},
        axis_y2_default: void 0,
        grid_x_show: !1,
        grid_x_type: "tick",
        grid_x_lines: [],
        grid_y_show: !1,
        grid_y_lines: [],
        grid_y_ticks: 10,
        grid_focus_show: !0,
        grid_lines_front: !0,
        point_show: !0,
        point_r: 2.5,
        point_sensitivity: 10,
        point_focus_expand_enabled: !0,
        point_focus_expand_r: void 0,
        point_select_r: void 0,
        line_connectNull: !1,
        line_step_type: "step",
        bar_width: void 0,
        bar_width_ratio: 0.6,
        bar_width_max: void 0,
        bar_zerobased: !0,
        bar_space: 0,
        area_zerobased: !0,
        area_above: !1,
        pie_label_show: !0,
        pie_label_format: void 0,
        pie_label_threshold: 0.05,
        pie_label_ratio: void 0,
        pie_expand: {},
        pie_expand_duration: 50,
        gauge_fullCircle: !1,
        gauge_label_show: !0,
        gauge_label_format: void 0,
        gauge_min: 0,
        gauge_max: 100,
        gauge_startingAngle: (-1 * Math.PI) / 2,
        gauge_label_extents: void 0,
        gauge_units: void 0,
        gauge_width: void 0,
        gauge_expand: {},
        gauge_expand_duration: 50,
        donut_label_show: !0,
        donut_label_format: void 0,
        donut_label_threshold: 0.05,
        donut_label_ratio: void 0,
        donut_width: void 0,
        donut_title: "",
        donut_expand: {},
        donut_expand_duration: 50,
        spline_interpolation_type: "cardinal",
        regions: [],
        tooltip_show: !0,
        tooltip_grouped: !0,
        tooltip_order: void 0,
        tooltip_format_title: void 0,
        tooltip_format_name: void 0,
        tooltip_format_value: void 0,
        tooltip_position: void 0,
        tooltip_contents: function (t, e, n, i) {
          return this.getTooltipContent
            ? this.getTooltipContent(t, e, n, i)
            : "";
        },
        tooltip_init_show: !1,
        tooltip_init_x: 0,
        tooltip_init_position: { top: "0px", left: "50px" },
        tooltip_onshow: function () {},
        tooltip_onhide: function () {},
        title_text: void 0,
        title_padding: { top: 0, right: 0, bottom: 0, left: 0 },
        title_position: "top-center",
      };
      return (
        Object.keys(this.additionalConfig).forEach(function (t) {
          e[t] = this.additionalConfig[t];
        }, this),
        e
      );
    }),
    (m.additionalConfig = {}),
    (m.loadConfig = function (e) {
      var n,
        i,
        r,
        a = this.config;
      Object.keys(a).forEach(function (t) {
        (n = e),
          (i = t.split("_")),
          void 0 !==
            (r = (function t() {
              var e = i.shift();
              return e &&
                n &&
                "object" === (void 0 === n ? "undefined" : s(n)) &&
                e in n
                ? ((n = n[e]), t())
                : e
                  ? void 0
                  : n;
            })()) && (a[t] = r);
      });
    }),
    (m.convertUrlToData = function (t, e, n, r, a) {
      var o = this,
        s = e || "csv",
        i = o.d3.xhr(t);
      n &&
        Object.keys(n).forEach(function (t) {
          i.header(t, n[t]);
        }),
        i.get(function (t, e) {
          var n,
            i = e.response || e.responseText;
          if (!e)
            throw new Error(
              t.responseURL + " " + t.status + " (" + t.statusText + ")",
            );
          (n =
            "json" === s
              ? o.convertJsonToData(JSON.parse(i), r)
              : "tsv" === s
                ? o.convertTsvToData(i)
                : o.convertCsvToData(i)),
            a.call(o, n);
        });
    }),
    (m.convertXsvToData = function (t, e) {
      var n,
        i = e.parseRows(t);
      return (
        1 === i.length
          ? ((n = [{}]),
            i[0].forEach(function (t) {
              n[0][t] = null;
            }))
          : (n = e.parse(t)),
        n
      );
    }),
    (m.convertCsvToData = function (t) {
      return this.convertXsvToData(t, this.d3.csv);
    }),
    (m.convertTsvToData = function (t) {
      return this.convertXsvToData(t, this.d3.tsv);
    }),
    (m.convertJsonToData = function (e, t) {
      var r,
        a = this,
        o = [];
      return t
        ? (t.x
            ? ((r = t.value.concat(t.x)), (a.config.data_x = t.x))
            : (r = t.value),
          o.push(r),
          e.forEach(function (n) {
            var i = [];
            r.forEach(function (t) {
              var e = a.findValueInJson(n, t);
              l(e) && (e = null), i.push(e);
            }),
              o.push(i);
          }),
          a.convertRowsToData(o))
        : (Object.keys(e).forEach(function (t) {
            o.push([t].concat(e[t]));
          }),
          a.convertColumnsToData(o));
    }),
    (m.findValueInJson = function (t, e) {
      for (
        var n = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(
            /^\./,
            "",
          )).split("."),
          i = 0;
        i < n.length;
        ++i
      ) {
        var r = n[i];
        if (!(r in t)) return;
        t = t[r];
      }
      return t;
    }),
    (m.convertRowsToData = function (t) {
      for (var e = [], n = t[0], i = 1; i < t.length; i++) {
        for (var r = {}, a = 0; a < t[i].length; a++) {
          if (void 0 === t[i][a])
            throw new Error(
              "Source data is missing a component at (" + i + "," + a + ")!",
            );
          r[n[a]] = t[i][a];
        }
        e.push(r);
      }
      return e;
    }),
    (m.convertColumnsToData = function (t) {
      for (var e = [], n = 0; n < t.length; n++)
        for (var i = t[n][0], r = 1; r < t[n].length; r++) {
          if ((void 0 === e[r - 1] && (e[r - 1] = {}), void 0 === t[n][r]))
            throw new Error(
              "Source data is missing a component at (" + n + "," + r + ")!",
            );
          e[r - 1][i] = t[n][r];
        }
      return e;
    }),
    (m.convertDataToTargets = function (t, i) {
      var e,
        u = this,
        c = u.config,
        n = u.d3.keys(t[0]).filter(u.isNotX, u),
        r = u.d3.keys(t[0]).filter(u.isX, u);
      return (
        n.forEach(function (n) {
          var e = u.getXKey(n);
          u.isCustomX() || u.isTimeSeries()
            ? 0 <= r.indexOf(e)
              ? (u.data.xs[n] = (i && u.data.xs[n] ? u.data.xs[n] : []).concat(
                  t
                    .map(function (t) {
                      return t[e];
                    })
                    .filter(P)
                    .map(function (t, e) {
                      return u.generateTargetX(t, n, e);
                    }),
                ))
              : c.data_x
                ? (u.data.xs[n] = u.getOtherTargetXs())
                : C(c.data_xs) &&
                  (u.data.xs[n] = u.getXValuesOfXKey(e, u.data.targets))
            : (u.data.xs[n] = t.map(function (t, e) {
                return e;
              }));
        }),
        n.forEach(function (t) {
          if (!u.data.xs[t])
            throw new Error('x is not defined for id = "' + t + '".');
        }),
        (e = n.map(function (a, o) {
          var s = c.data_idConverter(a);
          return {
            id: s,
            id_org: a,
            values: t
              .map(function (t, e) {
                var n,
                  i = t[u.getXKey(a)],
                  r = null === t[a] || isNaN(t[a]) ? null : +t[a];
                return (
                  u.isCustomX() && u.isCategorized() && void 0 !== i
                    ? (0 === o && 0 === e && (c.axis_x_categories = []),
                      -1 === (n = c.axis_x_categories.indexOf(i)) &&
                        ((n = c.axis_x_categories.length),
                        c.axis_x_categories.push(i)))
                    : (n = u.generateTargetX(i, a, e)),
                  (void 0 === t[a] || u.data.xs[a].length <= e) && (n = void 0),
                  { x: n, value: r, id: s }
                );
              })
              .filter(function (t) {
                return d(t.x);
              }),
          };
        })).forEach(function (t) {
          var e;
          c.data_xSort &&
            (t.values = t.values.sort(function (t, e) {
              return (
                (t.x || 0 === t.x ? t.x : 1 / 0) -
                (e.x || 0 === e.x ? e.x : 1 / 0)
              );
            })),
            (e = 0),
            t.values.forEach(function (t) {
              t.index = e++;
            }),
            u.data.xs[t.id].sort(function (t, e) {
              return t - e;
            });
        }),
        (u.hasNegativeValue = u.hasNegativeValueInTargets(e)),
        (u.hasPositiveValue = u.hasPositiveValueInTargets(e)),
        c.data_type &&
          u.setTargetType(
            u.mapToIds(e).filter(function (t) {
              return !(t in c.data_types);
            }),
            c.data_type,
          ),
        e.forEach(function (t) {
          u.addCache(t.id_org, t);
        }),
        e
      );
    }),
    (m.isX = function (t) {
      var e = this.config;
      return (e.data_x && t === e.data_x) || (C(e.data_xs) && p(e.data_xs, t));
    }),
    (m.isNotX = function (t) {
      return !this.isX(t);
    }),
    (m.getXKey = function (t) {
      var e = this.config;
      return e.data_x ? e.data_x : C(e.data_xs) ? e.data_xs[t] : null;
    }),
    (m.getXValuesOfXKey = function (e, t) {
      var n,
        i = this;
      return (
        (t && C(t) ? i.mapToIds(t) : []).forEach(function (t) {
          i.getXKey(t) === e && (n = i.data.xs[t]);
        }),
        n
      );
    }),
    (m.getIndexByX = function (t) {
      var e = this.filterByX(this.data.targets, t);
      return e.length ? e[0].index : null;
    }),
    (m.getXValue = function (t, e) {
      return t in this.data.xs && this.data.xs[t] && P(this.data.xs[t][e])
        ? this.data.xs[t][e]
        : e;
    }),
    (m.getOtherTargetXs = function () {
      var t = Object.keys(this.data.xs);
      return t.length ? this.data.xs[t[0]] : null;
    }),
    (m.getOtherTargetX = function (t) {
      var e = this.getOtherTargetXs();
      return e && t < e.length ? e[t] : null;
    }),
    (m.addXs = function (e) {
      var n = this;
      Object.keys(e).forEach(function (t) {
        n.config.data_xs[t] = e[t];
      });
    }),
    (m.hasMultipleX = function (e) {
      return (
        1 <
        this.d3
          .set(
            Object.keys(e).map(function (t) {
              return e[t];
            }),
          )
          .size()
      );
    }),
    (m.isMultipleX = function () {
      return (
        C(this.config.data_xs) ||
        !this.config.data_xSort ||
        this.hasType("scatter")
      );
    }),
    (m.addName = function (t) {
      var e;
      return (
        t &&
          ((e = this.config.data_names[t.id]),
          (t.name = void 0 !== e ? e : t.id)),
        t
      );
    }),
    (m.getValueOnIndex = function (t, e) {
      var n = t.filter(function (t) {
        return t.index === e;
      });
      return n.length ? n[0] : null;
    }),
    (m.updateTargetX = function (t, i) {
      var r = this;
      t.forEach(function (n) {
        n.values.forEach(function (t, e) {
          t.x = r.generateTargetX(i[e], n.id, e);
        }),
          (r.data.xs[n.id] = i);
      });
    }),
    (m.updateTargetXs = function (t, e) {
      var n = this;
      t.forEach(function (t) {
        e[t.id] && n.updateTargetX([t], e[t.id]);
      });
    }),
    (m.generateTargetX = function (t, e, n) {
      var i = this;
      return i.isTimeSeries()
        ? t
          ? i.parseDate(t)
          : i.parseDate(i.getXValue(e, n))
        : i.isCustomX() && !i.isCategorized()
          ? P(t)
            ? +t
            : i.getXValue(e, n)
          : n;
    }),
    (m.cloneTarget = function (t) {
      return {
        id: t.id,
        id_org: t.id_org,
        values: t.values.map(function (t) {
          return { x: t.x, value: t.value, id: t.id };
        }),
      };
    }),
    (m.updateXs = function () {
      var e = this;
      e.data.targets.length &&
        ((e.xs = []),
        e.data.targets[0].values.forEach(function (t) {
          e.xs[t.index] = t.x;
        }));
    }),
    (m.getPrevX = function (t) {
      var e = this.xs[t - 1];
      return void 0 !== e ? e : null;
    }),
    (m.getNextX = function (t) {
      var e = this.xs[t + 1];
      return void 0 !== e ? e : null;
    }),
    (m.getMaxDataCount = function () {
      return this.d3.max(this.data.targets, function (t) {
        return t.values.length;
      });
    }),
    (m.getMaxDataCountTarget = function (t) {
      var e,
        n = t.length,
        i = 0;
      return (
        1 < n
          ? t.forEach(function (t) {
              t.values.length > i && (i = (e = t).values.length);
            })
          : (e = n ? t[0] : null),
        e
      );
    }),
    (m.getEdgeX = function (t) {
      return t.length
        ? [
            this.d3.min(t, function (t) {
              return t.values[0].x;
            }),
            this.d3.max(t, function (t) {
              return t.values[t.values.length - 1].x;
            }),
          ]
        : [0, 0];
    }),
    (m.mapToIds = function (t) {
      return t.map(function (t) {
        return t.id;
      });
    }),
    (m.mapToTargetIds = function (t) {
      return t ? [].concat(t) : this.mapToIds(this.data.targets);
    }),
    (m.hasTarget = function (t, e) {
      var n,
        i = this.mapToIds(t);
      for (n = 0; n < i.length; n++) if (i[n] === e) return !0;
      return !1;
    }),
    (m.isTargetToShow = function (t) {
      return this.hiddenTargetIds.indexOf(t) < 0;
    }),
    (m.isLegendToShow = function (t) {
      return this.hiddenLegendIds.indexOf(t) < 0;
    }),
    (m.filterTargetsToShow = function (t) {
      var e = this;
      return t.filter(function (t) {
        return e.isTargetToShow(t.id);
      });
    }),
    (m.mapTargetsToUniqueXs = function (t) {
      var e = this.d3
        .set(
          this.d3.merge(
            t.map(function (t) {
              return t.values.map(function (t) {
                return +t.x;
              });
            }),
          ),
        )
        .values();
      return (e = this.isTimeSeries()
        ? e.map(function (t) {
            return new Date(+t);
          })
        : e.map(function (t) {
            return +t;
          })).sort(function (t, e) {
        return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN;
      });
    }),
    (m.addHiddenTargetIds = function (t) {
      t = t instanceof Array ? t : new Array(t);
      for (var e = 0; e < t.length; e++)
        this.hiddenTargetIds.indexOf(t[e]) < 0 &&
          (this.hiddenTargetIds = this.hiddenTargetIds.concat(t[e]));
    }),
    (m.removeHiddenTargetIds = function (e) {
      this.hiddenTargetIds = this.hiddenTargetIds.filter(function (t) {
        return e.indexOf(t) < 0;
      });
    }),
    (m.addHiddenLegendIds = function (t) {
      t = t instanceof Array ? t : new Array(t);
      for (var e = 0; e < t.length; e++)
        this.hiddenLegendIds.indexOf(t[e]) < 0 &&
          (this.hiddenLegendIds = this.hiddenLegendIds.concat(t[e]));
    }),
    (m.removeHiddenLegendIds = function (e) {
      this.hiddenLegendIds = this.hiddenLegendIds.filter(function (t) {
        return e.indexOf(t) < 0;
      });
    }),
    (m.getValuesAsIdKeyed = function (t) {
      var n = {};
      return (
        t.forEach(function (e) {
          (n[e.id] = []),
            e.values.forEach(function (t) {
              n[e.id].push(t.value);
            });
        }),
        n
      );
    }),
    (m.checkValueInTargets = function (t, e) {
      var n,
        i,
        r,
        a = Object.keys(t);
      for (n = 0; n < a.length; n++)
        for (r = t[a[n]].values, i = 0; i < r.length; i++)
          if (e(r[i].value)) return !0;
      return !1;
    }),
    (m.hasNegativeValueInTargets = function (t) {
      return this.checkValueInTargets(t, function (t) {
        return t < 0;
      });
    }),
    (m.hasPositiveValueInTargets = function (t) {
      return this.checkValueInTargets(t, function (t) {
        return 0 < t;
      });
    }),
    (m.isOrderDesc = function () {
      var t = this.config;
      return (
        "string" == typeof t.data_order && "desc" === t.data_order.toLowerCase()
      );
    }),
    (m.isOrderAsc = function () {
      var t = this.config;
      return (
        "string" == typeof t.data_order && "asc" === t.data_order.toLowerCase()
      );
    }),
    (m.getOrderFunction = function () {
      var t = this.config,
        e = this.isOrderAsc(),
        a = this.isOrderDesc();
      if (e || a)
        return function (t, e) {
          var n = function (t, e) {
              return t + Math.abs(e.value);
            },
            i = t.values.reduce(n, 0),
            r = e.values.reduce(n, 0);
          return a ? r - i : i - r;
        };
      if (h(t.data_order)) return t.data_order;
      if (u(t.data_order)) {
        var n = t.data_order;
        return function (t, e) {
          return n.indexOf(t.id) - n.indexOf(e.id);
        };
      }
    }),
    (m.orderTargets = function (t) {
      var e = this.getOrderFunction();
      return (
        e &&
          (t.sort(e), (this.isOrderAsc() || this.isOrderDesc()) && t.reverse()),
        t
      );
    }),
    (m.filterByX = function (t, e) {
      return this.d3
        .merge(
          t.map(function (t) {
            return t.values;
          }),
        )
        .filter(function (t) {
          return t.x - e == 0;
        });
    }),
    (m.filterRemoveNull = function (t) {
      return t.filter(function (t) {
        return P(t.value);
      });
    }),
    (m.filterByXDomain = function (t, e) {
      return t.map(function (t) {
        return {
          id: t.id,
          id_org: t.id_org,
          values: t.values.filter(function (t) {
            return e[0] <= t.x && t.x <= e[1];
          }),
        };
      });
    }),
    (m.hasDataLabel = function () {
      var t = this.config;
      return (
        !("boolean" != typeof t.data_labels || !t.data_labels) ||
        !("object" !== s(t.data_labels) || !C(t.data_labels))
      );
    }),
    (m.getDataLabelLength = function (t, e, n) {
      var i = this,
        r = [0, 0];
      return (
        i.selectChart
          .select("svg")
          .selectAll(".dummy")
          .data([t, e])
          .enter()
          .append("text")
          .text(function (t) {
            return i.dataLabelFormat(t.id)(t);
          })
          .each(function (t, e) {
            r[e] = 1.3 * this.getBoundingClientRect()[n];
          })
          .remove(),
        r
      );
    }),
    (m.isNoneArc = function (t) {
      return this.hasTarget(this.data.targets, t.id);
    }),
    (m.isArc = function (t) {
      return "data" in t && this.hasTarget(this.data.targets, t.data.id);
    }),
    (m.findSameXOfValues = function (t, e) {
      var n,
        i = t[e].x,
        r = [];
      for (n = e - 1; 0 <= n && i === t[n].x; n--) r.push(t[n]);
      for (n = e; n < t.length && i === t[n].x; n++) r.push(t[n]);
      return r;
    }),
    (m.findClosestFromTargets = function (t, e) {
      var n,
        i = this;
      return (
        (n = t.map(function (t) {
          return i.findClosest(t.values, e);
        })),
        i.findClosest(n, e)
      );
    }),
    (m.findClosest = function (t, n) {
      var i,
        r = this,
        a = r.config.point_sensitivity;
      return (
        t
          .filter(function (t) {
            return t && r.isBarType(t.id);
          })
          .forEach(function (t) {
            var e = r.main
              .select(
                "." +
                  X.bars +
                  r.getTargetSelectorSuffix(t.id) +
                  " ." +
                  X.bar +
                  "-" +
                  t.index,
              )
              .node();
            !i && r.isWithinBar(e) && (i = t);
          }),
        t
          .filter(function (t) {
            return t && !r.isBarType(t.id);
          })
          .forEach(function (t) {
            var e = r.dist(t, n);
            e < a && ((a = e), (i = t));
          }),
        i
      );
    }),
    (m.dist = function (t, e) {
      var n = this.config,
        i = n.axis_rotated ? 1 : 0,
        r = n.axis_rotated ? 0 : 1,
        a = this.circleY(t, t.index),
        o = this.x(t.x);
      return Math.sqrt(Math.pow(o - e[i], 2) + Math.pow(a - e[r], 2));
    }),
    (m.convertValuesToStep = function (t) {
      var e,
        n = [].concat(t);
      if (!this.isCategorized()) return t;
      for (e = t.length + 1; 0 < e; e--) n[e] = n[e - 1];
      return (
        (n[0] = { x: n[0].x - 1, value: n[0].value, id: n[0].id }),
        (n[t.length + 1] = {
          x: n[t.length].x + 1,
          value: n[t.length].value,
          id: n[t.length].id,
        }),
        n
      );
    }),
    (m.updateDataAttributes = function (t, e) {
      var n = this.config["data_" + t];
      return (
        void 0 === e ||
          (Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          }),
          this.redraw({ withLegend: !0 })),
        n
      );
    }),
    (m.load = function (n, i) {
      var r = this;
      n &&
        (i.filter && (n = n.filter(i.filter)),
        (i.type || i.types) &&
          n.forEach(function (t) {
            var e = i.types && i.types[t.id] ? i.types[t.id] : i.type;
            r.setTargetType(t.id, e);
          }),
        r.data.targets.forEach(function (t) {
          for (var e = 0; e < n.length; e++)
            if (t.id === n[e].id) {
              (t.values = n[e].values), n.splice(e, 1);
              break;
            }
        }),
        (r.data.targets = r.data.targets.concat(n))),
        r.updateTargets(r.data.targets),
        r.redraw({
          withUpdateOrgXDomain: !0,
          withUpdateXDomain: !0,
          withLegend: !0,
        }),
        i.done && i.done();
    }),
    (m.loadFromArgs = function (e) {
      var n = this;
      e.data
        ? n.load(n.convertDataToTargets(e.data), e)
        : e.url
          ? n.convertUrlToData(
              e.url,
              e.mimeType,
              e.headers,
              e.keys,
              function (t) {
                n.load(n.convertDataToTargets(t), e);
              },
            )
          : e.json
            ? n.load(
                n.convertDataToTargets(n.convertJsonToData(e.json, e.keys)),
                e,
              )
            : e.rows
              ? n.load(n.convertDataToTargets(n.convertRowsToData(e.rows)), e)
              : e.columns
                ? n.load(
                    n.convertDataToTargets(n.convertColumnsToData(e.columns)),
                    e,
                  )
                : n.load(null, e);
    }),
    (m.unload = function (t, e) {
      var n = this;
      e || (e = function () {}),
        (t = t.filter(function (t) {
          return n.hasTarget(n.data.targets, t);
        })) && 0 !== t.length
          ? (n.svg
              .selectAll(
                t.map(function (t) {
                  return n.selectorTarget(t);
                }),
              )
              .transition()
              .style("opacity", 0)
              .remove()
              .call(n.endall, e),
            t.forEach(function (e) {
              (n.withoutFadeIn[e] = !1),
                n.legend &&
                  n.legend
                    .selectAll(
                      "." + X.legendItem + n.getTargetSelectorSuffix(e),
                    )
                    .remove(),
                (n.data.targets = n.data.targets.filter(function (t) {
                  return t.id !== e;
                }));
            }))
          : e();
    }),
    (m.getYDomainMin = function (t) {
      var e,
        n,
        i,
        r,
        a,
        o,
        s = this,
        u = s.config,
        c = s.mapToIds(t),
        l = s.getValuesAsIdKeyed(t);
      if (0 < u.data_groups.length)
        for (
          o = s.hasNegativeValueInTargets(t), e = 0;
          e < u.data_groups.length;
          e++
        )
          if (
            0 !==
            (r = u.data_groups[e].filter(function (t) {
              return 0 <= c.indexOf(t);
            })).length
          )
            for (
              i = r[0],
                o &&
                  l[i] &&
                  l[i].forEach(function (t, e) {
                    l[i][e] = t < 0 ? t : 0;
                  }),
                n = 1;
              n < r.length;
              n++
            )
              (a = r[n]),
                l[a] &&
                  l[a].forEach(function (t, e) {
                    s.axis.getId(a) !== s.axis.getId(i) ||
                      !l[i] ||
                      (o && 0 < +t) ||
                      (l[i][e] += +t);
                  });
      return s.d3.min(
        Object.keys(l).map(function (t) {
          return s.d3.min(l[t]);
        }),
      );
    }),
    (m.getYDomainMax = function (t) {
      var e,
        n,
        i,
        r,
        a,
        o,
        s = this,
        u = s.config,
        c = s.mapToIds(t),
        l = s.getValuesAsIdKeyed(t);
      if (0 < u.data_groups.length)
        for (
          o = s.hasPositiveValueInTargets(t), e = 0;
          e < u.data_groups.length;
          e++
        )
          if (
            0 !==
            (r = u.data_groups[e].filter(function (t) {
              return 0 <= c.indexOf(t);
            })).length
          )
            for (
              i = r[0],
                o &&
                  l[i] &&
                  l[i].forEach(function (t, e) {
                    l[i][e] = 0 < t ? t : 0;
                  }),
                n = 1;
              n < r.length;
              n++
            )
              (a = r[n]),
                l[a] &&
                  l[a].forEach(function (t, e) {
                    s.axis.getId(a) !== s.axis.getId(i) ||
                      !l[i] ||
                      (o && +t < 0) ||
                      (l[i][e] += +t);
                  });
      return s.d3.max(
        Object.keys(l).map(function (t) {
          return s.d3.max(l[t]);
        }),
      );
    }),
    (m.getYDomain = function (t, e, n) {
      var i,
        r,
        a,
        o,
        s,
        u,
        c,
        l,
        h,
        d,
        f = this,
        g = f.config,
        p = t.filter(function (t) {
          return f.axis.getId(t.id) === e;
        }),
        x = n ? f.filterByXDomain(p, n) : p,
        _ = "y2" === e ? g.axis_y2_min : g.axis_y_min,
        v = "y2" === e ? g.axis_y2_max : g.axis_y_max,
        y = f.getYDomainMin(x),
        m = f.getYDomainMax(x),
        w = "y2" === e ? g.axis_y2_center : g.axis_y_center,
        S =
          (f.hasType("bar", x) && g.bar_zerobased) ||
          (f.hasType("area", x) && g.area_zerobased),
        b = "y2" === e ? g.axis_y2_inverted : g.axis_y_inverted,
        A = f.hasDataLabel() && g.axis_rotated,
        T = f.hasDataLabel() && !g.axis_rotated;
      return (
        (y = P(_) ? _ : P(v) ? (y < v ? y : v - 10) : y),
        (m = P(v) ? v : P(_) ? (_ < m ? m : _ + 10) : m),
        0 === x.length
          ? "y2" === e
            ? f.y2.domain()
            : f.y.domain()
          : (isNaN(y) && (y = 0),
            isNaN(m) && (m = y),
            y === m && (y < 0 ? (m = 0) : (y = 0)),
            (h = 0 <= y && 0 <= m),
            (d = y <= 0 && m <= 0),
            ((P(_) && h) || (P(v) && d)) && (S = !1),
            S && (h && (y = 0), d && (m = 0)),
            (a = o = 0.1 * (r = Math.abs(m - y))),
            void 0 !== w &&
              ((m = w + (s = Math.max(Math.abs(y), Math.abs(m)))), (y = w - s)),
            A
              ? ((u = f.getDataLabelLength(y, m, "width")),
                (c = O(f.y.range())),
                (a += r * ((l = [u[0] / c, u[1] / c])[1] / (1 - l[0] - l[1]))),
                (o += r * (l[0] / (1 - l[0] - l[1]))))
              : T &&
                ((u = f.getDataLabelLength(y, m, "height")),
                (a += f.axis.convertPixelsToAxisPadding(u[1], r)),
                (o += f.axis.convertPixelsToAxisPadding(u[0], r))),
            "y" === e &&
              C(g.axis_y_padding) &&
              ((a = f.axis.getPadding(g.axis_y_padding, "top", a, r)),
              (o = f.axis.getPadding(g.axis_y_padding, "bottom", o, r))),
            "y2" === e &&
              C(g.axis_y2_padding) &&
              ((a = f.axis.getPadding(g.axis_y2_padding, "top", a, r)),
              (o = f.axis.getPadding(g.axis_y2_padding, "bottom", o, r))),
            S && (h && (o = y), d && (a = -m)),
            (i = [y - o, m + a]),
            b ? i.reverse() : i)
      );
    }),
    (m.getXDomainMin = function (t) {
      var e = this,
        n = e.config;
      return void 0 !== n.axis_x_min
        ? e.isTimeSeries()
          ? this.parseDate(n.axis_x_min)
          : n.axis_x_min
        : e.d3.min(t, function (t) {
            return e.d3.min(t.values, function (t) {
              return t.x;
            });
          });
    }),
    (m.getXDomainMax = function (t) {
      var e = this,
        n = e.config;
      return void 0 !== n.axis_x_max
        ? e.isTimeSeries()
          ? this.parseDate(n.axis_x_max)
          : n.axis_x_max
        : e.d3.max(t, function (t) {
            return e.d3.max(t.values, function (t) {
              return t.x;
            });
          });
    }),
    (m.getXDomainPadding = function (t) {
      var e,
        n,
        i,
        r,
        a = this.config,
        o = t[1] - t[0];
      return (
        (n = this.isCategorized()
          ? 0
          : this.hasType("bar")
            ? 1 < (e = this.getMaxDataCount())
              ? o / (e - 1) / 2
              : 0.5
            : 0.01 * o),
        "object" === s(a.axis_x_padding) && C(a.axis_x_padding)
          ? ((i = P(a.axis_x_padding.left) ? a.axis_x_padding.left : n),
            (r = P(a.axis_x_padding.right) ? a.axis_x_padding.right : n))
          : (i = r =
              "number" == typeof a.axis_x_padding ? a.axis_x_padding : n),
        { left: i, right: r }
      );
    }),
    (m.getXDomain = function (t) {
      var e = this,
        n = [e.getXDomainMin(t), e.getXDomainMax(t)],
        i = n[0],
        r = n[1],
        a = e.getXDomainPadding(n),
        o = 0,
        s = 0;
      return (
        i - r != 0 ||
          e.isCategorized() ||
          (r = e.isTimeSeries()
            ? ((i = new Date(0.5 * i.getTime())), new Date(1.5 * r.getTime()))
            : ((i = 0 === i ? 1 : 0.5 * i), 0 === r ? -1 : 1.5 * r)),
        (i || 0 === i) &&
          (o = e.isTimeSeries() ? new Date(i.getTime() - a.left) : i - a.left),
        (r || 0 === r) &&
          (s = e.isTimeSeries()
            ? new Date(r.getTime() + a.right)
            : r + a.right),
        [o, s]
      );
    }),
    (m.updateXDomain = function (t, e, n, i, r) {
      var a = this,
        o = a.config;
      return (
        n &&
          (a.x.domain(r || a.d3.extent(a.getXDomain(t))),
          (a.orgXDomain = a.x.domain()),
          o.zoom_enabled && a.zoom.scale(a.x).updateScaleExtent(),
          a.subX.domain(a.x.domain()),
          a.brush && a.brush.scale(a.subX)),
        e &&
          (a.x.domain(
            r ||
              (!a.brush || a.brush.empty() ? a.orgXDomain : a.brush.extent()),
          ),
          o.zoom_enabled && a.zoom.scale(a.x).updateScaleExtent()),
        i && a.x.domain(a.trimXDomain(a.x.orgDomain())),
        a.x.domain()
      );
    }),
    (m.trimXDomain = function (t) {
      var e = this.getZoomDomain(),
        n = e[0],
        i = e[1];
      return (
        t[0] <= n && ((t[1] = +t[1] + (n - t[0])), (t[0] = n)),
        i <= t[1] && ((t[0] = +t[0] - (t[1] - i)), (t[1] = i)),
        t
      );
    }),
    (m.drag = function (t) {
      var e,
        n,
        i,
        r,
        d,
        f,
        g,
        p,
        x = this,
        a = x.config,
        o = x.main,
        _ = x.d3;
      x.hasArcType() ||
        (a.data_selection_enabled &&
          ((a.zoom_enabled && !x.zoom.altDomain) ||
            (a.data_selection_multiple &&
              ((e = x.dragStart[0]),
              (n = x.dragStart[1]),
              (i = t[0]),
              (r = t[1]),
              (d = Math.min(e, i)),
              (f = Math.max(e, i)),
              (g = a.data_selection_grouped ? x.margin.top : Math.min(n, r)),
              (p = a.data_selection_grouped ? x.height : Math.max(n, r)),
              o
                .select("." + X.dragarea)
                .attr("x", d)
                .attr("y", g)
                .attr("width", f - d)
                .attr("height", p - g),
              o
                .selectAll("." + X.shapes)
                .selectAll("." + X.shape)
                .filter(function (t) {
                  return a.data_selection_isselectable(t);
                })
                .each(function (t, e) {
                  var n,
                    i,
                    r,
                    a,
                    o,
                    s,
                    u = _.select(this),
                    c = u.classed(X.SELECTED),
                    l = u.classed(X.INCLUDED),
                    h = !1;
                  if (u.classed(X.circle))
                    (n = 1 * u.attr("cx")),
                      (i = 1 * u.attr("cy")),
                      (o = x.togglePoint),
                      (h = d < n && n < f && g < i && i < p);
                  else {
                    if (!u.classed(X.bar)) return;
                    (n = (s = v(this)).x),
                      (i = s.y),
                      (r = s.width),
                      (a = s.height),
                      (o = x.togglePath),
                      (h = !(f < n || n + r < d || p < i || i + a < g));
                  }
                  h ^ l &&
                    (u.classed(X.INCLUDED, !l),
                    u.classed(X.SELECTED, !c),
                    o.call(x, !c, u, t, e));
                })))));
    }),
    (m.dragstart = function (t) {
      var e = this,
        n = e.config;
      e.hasArcType() ||
        (n.data_selection_enabled &&
          ((e.dragStart = t),
          e.main
            .select("." + X.chart)
            .append("rect")
            .attr("class", X.dragarea)
            .style("opacity", 0.1),
          (e.dragging = !0)));
    }),
    (m.dragend = function () {
      var t = this,
        e = t.config;
      t.hasArcType() ||
        (e.data_selection_enabled &&
          (t.main
            .select("." + X.dragarea)
            .transition()
            .duration(100)
            .style("opacity", 0)
            .remove(),
          t.main.selectAll("." + X.shape).classed(X.INCLUDED, !1),
          (t.dragging = !1)));
    }),
    (m.getYFormat = function (t) {
      var i = this,
        r = t && !i.hasType("gauge") ? i.defaultArcValueFormat : i.yFormat,
        a = t && !i.hasType("gauge") ? i.defaultArcValueFormat : i.y2Format;
      return function (t, e, n) {
        return ("y2" === i.axis.getId(n) ? a : r).call(i, t, e);
      };
    }),
    (m.yFormat = function (t) {
      var e = this.config;
      return (
        e.axis_y_tick_format ? e.axis_y_tick_format : this.defaultValueFormat
      )(t);
    }),
    (m.y2Format = function (t) {
      var e = this.config;
      return (
        e.axis_y2_tick_format ? e.axis_y2_tick_format : this.defaultValueFormat
      )(t);
    }),
    (m.defaultValueFormat = function (t) {
      return P(t) ? +t : "";
    }),
    (m.defaultArcValueFormat = function (t, e) {
      return (100 * e).toFixed(1) + "%";
    }),
    (m.dataLabelFormat = function (t) {
      var e = this.config.data_labels,
        n = function (t) {
          return P(t) ? +t : "";
        };
      return "function" == typeof e.format
        ? e.format
        : "object" === s(e.format)
          ? e.format[t]
            ? !0 === e.format[t]
              ? n
              : e.format[t]
            : function () {
                return "";
              }
          : n;
    }),
    (m.initGrid = function () {
      var t = this,
        e = t.config,
        n = t.d3;
      (t.grid = t.main
        .append("g")
        .attr("clip-path", t.clipPathForGrid)
        .attr("class", X.grid)),
        e.grid_x_show && t.grid.append("g").attr("class", X.xgrids),
        e.grid_y_show && t.grid.append("g").attr("class", X.ygrids),
        e.grid_focus_show &&
          t.grid
            .append("g")
            .attr("class", X.xgridFocus)
            .append("line")
            .attr("class", X.xgridFocus),
        (t.xgrid = n.selectAll([])),
        e.grid_lines_front || t.initGridLines();
    }),
    (m.initGridLines = function () {
      var t = this,
        e = t.d3;
      (t.gridLines = t.main
        .append("g")
        .attr("clip-path", t.clipPathForGrid)
        .attr("class", X.grid + " " + X.gridLines)),
        t.gridLines.append("g").attr("class", X.xgridLines),
        t.gridLines.append("g").attr("class", X.ygridLines),
        (t.xgridLines = e.selectAll([]));
    }),
    (m.updateXGrid = function (t) {
      var e = this,
        n = e.config,
        i = e.d3,
        r = e.generateGridData(n.grid_x_type, e.x),
        a = e.isCategorized() ? e.xAxis.tickOffset() : 0;
      (e.xgridAttr = n.axis_rotated
        ? {
            x1: 0,
            x2: e.width,
            y1: function (t) {
              return e.x(t) - a;
            },
            y2: function (t) {
              return e.x(t) - a;
            },
          }
        : {
            x1: function (t) {
              return e.x(t) + a;
            },
            x2: function (t) {
              return e.x(t) + a;
            },
            y1: 0,
            y2: e.height,
          }),
        (e.xgrid = e.main
          .select("." + X.xgrids)
          .selectAll("." + X.xgrid)
          .data(r)),
        e.xgrid.enter().append("line").attr("class", X.xgrid),
        t ||
          e.xgrid.attr(e.xgridAttr).style("opacity", function () {
            return +i.select(this).attr(n.axis_rotated ? "y1" : "x1") ===
              (n.axis_rotated ? e.height : 0)
              ? 0
              : 1;
          }),
        e.xgrid.exit().remove();
    }),
    (m.updateYGrid = function () {
      var t = this,
        e = t.config,
        n = t.yAxis.tickValues() || t.y.ticks(e.grid_y_ticks);
      (t.ygrid = t.main
        .select("." + X.ygrids)
        .selectAll("." + X.ygrid)
        .data(n)),
        t.ygrid.enter().append("line").attr("class", X.ygrid),
        t.ygrid
          .attr("x1", e.axis_rotated ? t.y : 0)
          .attr("x2", e.axis_rotated ? t.y : t.width)
          .attr("y1", e.axis_rotated ? 0 : t.y)
          .attr("y2", e.axis_rotated ? t.height : t.y),
        t.ygrid.exit().remove(),
        t.smoothLines(t.ygrid, "grid");
    }),
    (m.gridTextAnchor = function (t) {
      return t.position ? t.position : "end";
    }),
    (m.gridTextDx = function (t) {
      return "start" === t.position ? 4 : "middle" === t.position ? 0 : -4;
    }),
    (m.xGridTextX = function (t) {
      return "start" === t.position
        ? -this.height
        : "middle" === t.position
          ? -this.height / 2
          : 0;
    }),
    (m.yGridTextX = function (t) {
      return "start" === t.position
        ? 0
        : "middle" === t.position
          ? this.width / 2
          : this.width;
    }),
    (m.updateGrid = function (t) {
      var e,
        n,
        i,
        r = this,
        a = r.main,
        o = r.config;
      r.grid.style("visibility", r.hasArcType() ? "hidden" : "visible"),
        a.select("line." + X.xgridFocus).style("visibility", "hidden"),
        o.grid_x_show && r.updateXGrid(),
        (r.xgridLines = a
          .select("." + X.xgridLines)
          .selectAll("." + X.xgridLine)
          .data(o.grid_x_lines)),
        (e = r.xgridLines
          .enter()
          .append("g")
          .attr("class", function (t) {
            return X.xgridLine + (t.class ? " " + t.class : "");
          }))
          .append("line")
          .style("opacity", 0),
        e
          .append("text")
          .attr("text-anchor", r.gridTextAnchor)
          .attr("transform", o.axis_rotated ? "" : "rotate(-90)")
          .attr("dx", r.gridTextDx)
          .attr("dy", -5)
          .style("opacity", 0),
        r.xgridLines
          .exit()
          .transition()
          .duration(t)
          .style("opacity", 0)
          .remove(),
        o.grid_y_show && r.updateYGrid(),
        (r.ygridLines = a
          .select("." + X.ygridLines)
          .selectAll("." + X.ygridLine)
          .data(o.grid_y_lines)),
        (n = r.ygridLines
          .enter()
          .append("g")
          .attr("class", function (t) {
            return X.ygridLine + (t.class ? " " + t.class : "");
          }))
          .append("line")
          .style("opacity", 0),
        n
          .append("text")
          .attr("text-anchor", r.gridTextAnchor)
          .attr("transform", o.axis_rotated ? "rotate(-90)" : "")
          .attr("dx", r.gridTextDx)
          .attr("dy", -5)
          .style("opacity", 0),
        (i = r.yv.bind(r)),
        r.ygridLines
          .select("line")
          .transition()
          .duration(t)
          .attr("x1", o.axis_rotated ? i : 0)
          .attr("x2", o.axis_rotated ? i : r.width)
          .attr("y1", o.axis_rotated ? 0 : i)
          .attr("y2", o.axis_rotated ? r.height : i)
          .style("opacity", 1),
        r.ygridLines
          .select("text")
          .transition()
          .duration(t)
          .attr(
            "x",
            o.axis_rotated ? r.xGridTextX.bind(r) : r.yGridTextX.bind(r),
          )
          .attr("y", i)
          .text(function (t) {
            return t.text;
          })
          .style("opacity", 1),
        r.ygridLines
          .exit()
          .transition()
          .duration(t)
          .style("opacity", 0)
          .remove();
    }),
    (m.redrawGrid = function (t) {
      var e = this,
        n = e.config,
        i = e.xv.bind(e),
        r = e.xgridLines.select("line"),
        a = e.xgridLines.select("text");
      return [
        (t ? r.transition() : r)
          .attr("x1", n.axis_rotated ? 0 : i)
          .attr("x2", n.axis_rotated ? e.width : i)
          .attr("y1", n.axis_rotated ? i : 0)
          .attr("y2", n.axis_rotated ? i : e.height)
          .style("opacity", 1),
        (t ? a.transition() : a)
          .attr(
            "x",
            n.axis_rotated ? e.yGridTextX.bind(e) : e.xGridTextX.bind(e),
          )
          .attr("y", i)
          .text(function (t) {
            return t.text;
          })
          .style("opacity", 1),
      ];
    }),
    (m.showXGridFocus = function (t) {
      var e = this,
        n = e.config,
        i = t.filter(function (t) {
          return t && P(t.value);
        }),
        r = e.main.selectAll("line." + X.xgridFocus),
        a = e.xx.bind(e);
      n.tooltip_show &&
        (e.hasType("scatter") ||
          e.hasArcType() ||
          (r
            .style("visibility", "visible")
            .data([i[0]])
            .attr(n.axis_rotated ? "y1" : "x1", a)
            .attr(n.axis_rotated ? "y2" : "x2", a),
          e.smoothLines(r, "grid")));
    }),
    (m.hideXGridFocus = function () {
      this.main.select("line." + X.xgridFocus).style("visibility", "hidden");
    }),
    (m.updateXgridFocus = function () {
      var t = this.config;
      this.main
        .select("line." + X.xgridFocus)
        .attr("x1", t.axis_rotated ? 0 : -10)
        .attr("x2", t.axis_rotated ? this.width : -10)
        .attr("y1", t.axis_rotated ? -10 : 0)
        .attr("y2", t.axis_rotated ? -10 : this.height);
    }),
    (m.generateGridData = function (t, e) {
      var n,
        i,
        r,
        a,
        o = [],
        s = this.main
          .select("." + X.axisX)
          .selectAll(".tick")
          .size();
      if ("year" === t)
        for (
          i = (n = this.getXDomain())[0].getFullYear(),
            r = n[1].getFullYear(),
            a = i;
          a <= r;
          a++
        )
          o.push(new Date(a + "-01-01 00:00:00"));
      else
        (o = e.ticks(10)).length > s &&
          (o = o.filter(function (t) {
            return ("" + t).indexOf(".") < 0;
          }));
      return o;
    }),
    (m.getGridFilterToRemove = function (t) {
      return t
        ? function (e) {
            var n = !1;
            return (
              [].concat(t).forEach(function (t) {
                (("value" in t && e.value === t.value) ||
                  ("class" in t && e.class === t.class)) &&
                  (n = !0);
              }),
              n
            );
          }
        : function () {
            return !0;
          };
    }),
    (m.removeGridLines = function (t, e) {
      var n = this.config,
        i = this.getGridFilterToRemove(t),
        r = function (t) {
          return !i(t);
        },
        a = e ? X.xgridLines : X.ygridLines,
        o = e ? X.xgridLine : X.ygridLine;
      this.main
        .select("." + a)
        .selectAll("." + o)
        .filter(i)
        .transition()
        .duration(n.transition_duration)
        .style("opacity", 0)
        .remove(),
        e
          ? (n.grid_x_lines = n.grid_x_lines.filter(r))
          : (n.grid_y_lines = n.grid_y_lines.filter(r));
    }),
    (m.initEventRect = function () {
      this.main
        .select("." + X.chart)
        .append("g")
        .attr("class", X.eventRects)
        .style("fill-opacity", 0);
    }),
    (m.redrawEventRect = function () {
      var t,
        e,
        n = this,
        i = n.config,
        r = n.isMultipleX(),
        a = n.main
          .select("." + X.eventRects)
          .style(
            "cursor",
            i.zoom_enabled
              ? i.axis_rotated
                ? "ns-resize"
                : "ew-resize"
              : null,
          )
          .classed(X.eventRectsMultiple, r)
          .classed(X.eventRectsSingle, !r);
      a.selectAll("." + X.eventRect).remove(),
        (n.eventRect = a.selectAll("." + X.eventRect)),
        r
          ? ((t = n.eventRect.data([0])),
            n.generateEventRectsForMultipleXs(t.enter()),
            n.updateEventRect(t))
          : ((e = n.getMaxDataCountTarget(n.data.targets)),
            a.datum(e ? e.values : []),
            (n.eventRect = a.selectAll("." + X.eventRect)),
            (t = n.eventRect.data(function (t) {
              return t;
            })),
            n.generateEventRectsForSingleX(t.enter()),
            n.updateEventRect(t),
            t.exit().remove());
    }),
    (m.updateEventRect = function (t) {
      var e,
        n,
        i,
        r,
        a,
        o,
        s = this,
        u = s.config;
      (t =
        t ||
        s.eventRect.data(function (t) {
          return t;
        })),
        (r = s.isMultipleX()
          ? ((n = e = 0), (i = s.width), s.height)
          : ((o =
              (!s.isCustomX() && !s.isTimeSeries()) || s.isCategorized()
                ? ((a = s.getEventRectWidth()),
                  function (t) {
                    return s.x(t.x) - a / 2;
                  })
                : (s.updateXs(),
                  (a = function (t) {
                    var e = s.getPrevX(t.index),
                      n = s.getNextX(t.index);
                    return null === e && null === n
                      ? u.axis_rotated
                        ? s.height
                        : s.width
                      : (null === e && (e = s.x.domain()[0]),
                        null === n && (n = s.x.domain()[1]),
                        Math.max(0, (s.x(n) - s.x(e)) / 2));
                  }),
                  function (t) {
                    var e = s.getPrevX(t.index),
                      n = s.getNextX(t.index),
                      i = s.data.xs[t.id][t.index];
                    return null === e && null === n
                      ? 0
                      : (null === e && (e = s.x.domain()[0]),
                        (s.x(i) + s.x(e)) / 2);
                  })),
            (e = u.axis_rotated ? 0 : o),
            (n = u.axis_rotated ? o : 0),
            (i = u.axis_rotated ? s.width : a),
            u.axis_rotated ? a : s.height)),
        t
          .attr("class", s.classEvent.bind(s))
          .attr("x", e)
          .attr("y", n)
          .attr("width", i)
          .attr("height", r);
    }),
    (m.generateEventRectsForSingleX = function (t) {
      var r = this,
        a = r.d3,
        o = r.config;
      t.append("rect")
        .attr("class", r.classEvent.bind(r))
        .style(
          "cursor",
          o.data_selection_enabled && o.data_selection_grouped
            ? "pointer"
            : null,
        )
        .on("mouseover", function (t) {
          var e = t.index;
          r.dragging ||
            r.flowing ||
            r.hasArcType() ||
            (o.point_focus_expand_enabled && r.expandCircles(e, null, !0),
            r.expandBars(e, null, !0),
            r.main.selectAll("." + X.shape + "-" + e).each(function (t) {
              o.data_onmouseover.call(r.api, t);
            }));
        })
        .on("mouseout", function (t) {
          var e = t.index;
          r.config &&
            (r.hasArcType() ||
              (r.hideXGridFocus(),
              r.hideTooltip(),
              r.unexpandCircles(),
              r.unexpandBars(),
              r.main.selectAll("." + X.shape + "-" + e).each(function (t) {
                o.data_onmouseout.call(r.api, t);
              })));
        })
        .on("mousemove", function (t) {
          var e,
            n = t.index,
            i = r.svg.select("." + X.eventRect + "-" + n);
          r.dragging ||
            r.flowing ||
            r.hasArcType() ||
            (r.isStepType(t) &&
              "step-after" === r.config.line_step_type &&
              a.mouse(this)[0] < r.x(r.getXValue(t.id, n)) &&
              (n -= 1),
            (e = r.filterTargetsToShow(r.data.targets).map(function (t) {
              return r.addName(r.getValueOnIndex(t.values, n));
            })),
            o.tooltip_grouped && (r.showTooltip(e, this), r.showXGridFocus(e)),
            (!o.tooltip_grouped ||
              (o.data_selection_enabled && !o.data_selection_grouped)) &&
              r.main
                .selectAll("." + X.shape + "-" + n)
                .each(function () {
                  a.select(this).classed(X.EXPANDED, !0),
                    o.data_selection_enabled &&
                      i.style(
                        "cursor",
                        o.data_selection_grouped ? "pointer" : null,
                      ),
                    o.tooltip_grouped ||
                      (r.hideXGridFocus(),
                      r.hideTooltip(),
                      o.data_selection_grouped ||
                        (r.unexpandCircles(n), r.unexpandBars(n)));
                })
                .filter(function (t) {
                  return r.isWithinShape(this, t);
                })
                .each(function (t) {
                  o.data_selection_enabled &&
                    (o.data_selection_grouped ||
                      o.data_selection_isselectable(t)) &&
                    i.style("cursor", "pointer"),
                    o.tooltip_grouped ||
                      (r.showTooltip([t], this),
                      r.showXGridFocus([t]),
                      o.point_focus_expand_enabled &&
                        r.expandCircles(n, t.id, !0),
                      r.expandBars(n, t.id, !0));
                }));
        })
        .on("click", function (t) {
          var e = t.index;
          !r.hasArcType() &&
            r.toggleShape &&
            (r.cancelClick
              ? (r.cancelClick = !1)
              : (r.isStepType(t) &&
                  "step-after" === o.line_step_type &&
                  a.mouse(this)[0] < r.x(r.getXValue(t.id, e)) &&
                  (e -= 1),
                r.main.selectAll("." + X.shape + "-" + e).each(function (t) {
                  (o.data_selection_grouped || r.isWithinShape(this, t)) &&
                    (r.toggleShape(this, t, e),
                    r.config.data_onclick.call(r.api, t, this));
                })));
        })
        .call(
          o.data_selection_draggable && r.drag
            ? a.behavior
                .drag()
                .origin(Object)
                .on("drag", function () {
                  r.drag(a.mouse(this));
                })
                .on("dragstart", function () {
                  r.dragstart(a.mouse(this));
                })
                .on("dragend", function () {
                  r.dragend();
                })
            : function () {},
        );
    }),
    (m.generateEventRectsForMultipleXs = function (t) {
      function r() {
        a.svg.select("." + X.eventRect).style("cursor", null),
          a.hideXGridFocus(),
          a.hideTooltip(),
          a.unexpandCircles(),
          a.unexpandBars();
      }
      var a = this,
        o = a.d3,
        s = a.config;
      t.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", a.width)
        .attr("height", a.height)
        .attr("class", X.eventRect)
        .on("mouseout", function () {
          a.config && (a.hasArcType() || r());
        })
        .on("mousemove", function () {
          var t,
            e,
            n,
            i = a.filterTargetsToShow(a.data.targets);
          a.dragging ||
            a.hasArcType(i) ||
            ((t = o.mouse(this)),
            (e = a.findClosestFromTargets(i, t)),
            !a.mouseover ||
              (e && e.id === a.mouseover.id) ||
              (s.data_onmouseout.call(a.api, a.mouseover),
              (a.mouseover = void 0)),
            e
              ? ((n = (
                  a.isScatterType(e) || !s.tooltip_grouped
                    ? [e]
                    : a.filterByX(i, e.x)
                ).map(function (t) {
                  return a.addName(t);
                })),
                a.showTooltip(n, this),
                s.point_focus_expand_enabled &&
                  a.expandCircles(e.index, e.id, !0),
                a.expandBars(e.index, e.id, !0),
                a.showXGridFocus(n),
                (a.isBarType(e.id) || a.dist(e, t) < s.point_sensitivity) &&
                  (a.svg.select("." + X.eventRect).style("cursor", "pointer"),
                  a.mouseover ||
                    (s.data_onmouseover.call(a.api, e), (a.mouseover = e))))
              : r());
        })
        .on("click", function () {
          var t,
            e,
            n = a.filterTargetsToShow(a.data.targets);
          a.hasArcType(n) ||
            ((t = o.mouse(this)),
            (e = a.findClosestFromTargets(n, t)) &&
              (a.isBarType(e.id) || a.dist(e, t) < s.point_sensitivity) &&
              a.main
                .selectAll("." + X.shapes + a.getTargetSelectorSuffix(e.id))
                .selectAll("." + X.shape + "-" + e.index)
                .each(function () {
                  (s.data_selection_grouped || a.isWithinShape(this, e)) &&
                    (a.toggleShape(this, e, e.index),
                    a.config.data_onclick.call(a.api, e, this));
                }));
        })
        .call(
          s.data_selection_draggable && a.drag
            ? o.behavior
                .drag()
                .origin(Object)
                .on("drag", function () {
                  a.drag(o.mouse(this));
                })
                .on("dragstart", function () {
                  a.dragstart(o.mouse(this));
                })
                .on("dragend", function () {
                  a.dragend();
                })
            : function () {},
        );
    }),
    (m.dispatchEvent = function (t, e, n) {
      var i = "." + X.eventRect + (this.isMultipleX() ? "" : "-" + e),
        r = this.main.select(i).node(),
        a = r.getBoundingClientRect(),
        o = a.left + (n ? n[0] : 0),
        s = a.top + (n ? n[1] : 0),
        u = document.createEvent("MouseEvents");
      u.initMouseEvent(
        t,
        !0,
        !0,
        window,
        0,
        o,
        s,
        o,
        s,
        !1,
        !1,
        !1,
        !1,
        0,
        null,
      ),
        r.dispatchEvent(u);
    }),
    (m.initLegend = function () {
      var t = this;
      if (
        ((t.legendItemTextBox = {}),
        (t.legendHasRendered = !1),
        (t.legend = t.svg
          .append("g")
          .attr("transform", t.getTranslate("legend"))),
        !t.config.legend_show)
      )
        return (
          t.legend.style("visibility", "hidden"),
          void (t.hiddenLegendIds = t.mapToIds(t.data.targets))
        );
      t.updateLegendWithDefaults();
    }),
    (m.updateLegendWithDefaults = function () {
      this.updateLegend(this.mapToIds(this.data.targets), {
        withTransform: !1,
        withTransitionForTransform: !1,
        withTransition: !1,
      });
    }),
    (m.updateSizeForLegend = function (t, e) {
      var n = this,
        i = n.config,
        r = {
          top: n.isLegendTop
            ? n.getCurrentPaddingTop() + i.legend_inset_y + 5.5
            : n.currentHeight -
              t -
              n.getCurrentPaddingBottom() -
              i.legend_inset_y,
          left: n.isLegendLeft
            ? n.getCurrentPaddingLeft() + i.legend_inset_x + 0.5
            : n.currentWidth -
              e -
              n.getCurrentPaddingRight() -
              i.legend_inset_x +
              0.5,
        };
      n.margin3 = {
        top: n.isLegendRight
          ? 0
          : n.isLegendInset
            ? r.top
            : n.currentHeight - t,
        right: NaN,
        bottom: 0,
        left: n.isLegendRight
          ? n.currentWidth - e
          : n.isLegendInset
            ? r.left
            : 0,
      };
    }),
    (m.transformLegend = function (t) {
      (t ? this.legend.transition() : this.legend).attr(
        "transform",
        this.getTranslate("legend"),
      );
    }),
    (m.updateLegendStep = function (t) {
      this.legendStep = t;
    }),
    (m.updateLegendItemWidth = function (t) {
      this.legendItemWidth = t;
    }),
    (m.updateLegendItemHeight = function (t) {
      this.legendItemHeight = t;
    }),
    (m.getLegendWidth = function () {
      var t = this;
      return t.config.legend_show
        ? t.isLegendRight || t.isLegendInset
          ? t.legendItemWidth * (t.legendStep + 1)
          : t.currentWidth
        : 0;
    }),
    (m.getLegendHeight = function () {
      var t = this,
        e = 0;
      return (
        t.config.legend_show &&
          (e = t.isLegendRight
            ? t.currentHeight
            : Math.max(20, t.legendItemHeight) * (t.legendStep + 1)),
        e
      );
    }),
    (m.opacityForLegend = function (t) {
      return t.classed(X.legendItemHidden) ? null : 1;
    }),
    (m.opacityForUnfocusedLegend = function (t) {
      return t.classed(X.legendItemHidden) ? null : 0.3;
    }),
    (m.toggleFocusLegend = function (e, t) {
      var n = this;
      (e = n.mapToTargetIds(e)),
        n.legend
          .selectAll("." + X.legendItem)
          .filter(function (t) {
            return 0 <= e.indexOf(t);
          })
          .classed(X.legendItemFocused, t)
          .transition()
          .duration(100)
          .style("opacity", function () {
            return (t ? n.opacityForLegend : n.opacityForUnfocusedLegend).call(
              n,
              n.d3.select(this),
            );
          });
    }),
    (m.revertLegend = function () {
      var t = this,
        e = t.d3;
      t.legend
        .selectAll("." + X.legendItem)
        .classed(X.legendItemFocused, !1)
        .transition()
        .duration(100)
        .style("opacity", function () {
          return t.opacityForLegend(e.select(this));
        });
    }),
    (m.showLegend = function (t) {
      var e = this,
        n = e.config;
      n.legend_show ||
        ((n.legend_show = !0),
        e.legend.style("visibility", "visible"),
        e.legendHasRendered || e.updateLegendWithDefaults()),
        e.removeHiddenLegendIds(t),
        e.legend
          .selectAll(e.selectorLegends(t))
          .style("visibility", "visible")
          .transition()
          .style("opacity", function () {
            return e.opacityForLegend(e.d3.select(this));
          });
    }),
    (m.hideLegend = function (t) {
      var e = this,
        n = e.config;
      n.legend_show &&
        g(t) &&
        ((n.legend_show = !1), e.legend.style("visibility", "hidden")),
        e.addHiddenLegendIds(t),
        e.legend
          .selectAll(e.selectorLegends(t))
          .style("opacity", 0)
          .style("visibility", "hidden");
    }),
    (m.clearLegendItemTextBoxCache = function () {
      this.legendItemTextBox = {};
    }),
    (m.updateLegend = function (p, t, e) {
      function n(t, e, n) {
        function i(t, e) {
          e || ((r = (g - L - f) / 2) < P && ((r = (g - f) / 2), (L = 0), R++)),
            (k[t] = R),
            (G[R] = m.isLegendInset ? 10 : r),
            (M[t] = L),
            (L += f);
        }
        var r,
          a,
          o,
          s,
          u = 0 === n,
          c = n === p.length - 1,
          l =
            ((o = t),
            (s = e),
            m.legendItemTextBox[s] ||
              (m.legendItemTextBox[s] = m.getTextRect(
                o.textContent,
                X.legendItem,
                o,
              )),
            m.legendItemTextBox[s]),
          h =
            l.width +
            C +
            (!c || m.isLegendRight || m.isLegendInset ? b : 0) +
            w.legend_padding,
          d = l.height + S,
          f = m.isLegendRight || m.isLegendInset ? d : h,
          g =
            m.isLegendRight || m.isLegendInset
              ? m.getLegendHeight()
              : m.getLegendWidth();
        u && (T = A = R = L = 0),
          !w.legend_show || m.isLegendToShow(e)
            ? ((E[e] = h),
              (V[e] = d),
              (!A || A <= h) && (A = h),
              (!T || T <= d) && (T = d),
              (a = m.isLegendRight || m.isLegendInset ? T : A),
              w.legend_equally
                ? (Object.keys(E).forEach(function (t) {
                    E[t] = A;
                  }),
                  Object.keys(V).forEach(function (t) {
                    V[t] = T;
                  }),
                  (r = (g - a * p.length) / 2) < P
                    ? ((R = L = 0),
                      p.forEach(function (t) {
                        i(t);
                      }))
                    : i(e, !0))
                : i(e))
            : (E[e] = V[e] = k[e] = M[e] = 0);
      }
      var i,
        r,
        a,
        o,
        s,
        u,
        c,
        l,
        h,
        d,
        f,
        g,
        x,
        _,
        v,
        y,
        m = this,
        w = m.config,
        S = 4,
        b = 10,
        A = 0,
        T = 0,
        P = 10,
        C = w.legend_item_tile_width + 5,
        L = 0,
        M = {},
        E = {},
        V = {},
        G = [0],
        k = {},
        R = 0;
      (p = p.filter(function (t) {
        return !(void 0 !== w.data_names[t]) || null !== w.data_names[t];
      })),
        (f = H((t = t || {}), "withTransition", !0)),
        (g = H(t, "withTransitionForTransform", !0)),
        m.isLegendInset &&
          ((R = w.legend_inset_step ? w.legend_inset_step : p.length),
          m.updateLegendStep(R)),
        (o = m.isLegendRight
          ? ((i = function (t) {
              return A * k[t];
            }),
            function (t) {
              return G[k[t]] + M[t];
            })
          : m.isLegendInset
            ? ((i = function (t) {
                return A * k[t] + 10;
              }),
              function (t) {
                return G[k[t]] + M[t];
              })
            : ((i = function (t) {
                return G[k[t]] + M[t];
              }),
              function (t) {
                return T * k[t];
              })),
        (r = function (t, e) {
          return i(t, e) + 4 + w.legend_item_tile_width;
        }),
        (s = function (t, e) {
          return o(t, e) + 9;
        }),
        (a = function (t, e) {
          return i(t, e);
        }),
        (u = function (t, e) {
          return o(t, e) - 5;
        }),
        (c = function (t, e) {
          return i(t, e) - 2;
        }),
        (l = function (t, e) {
          return i(t, e) - 2 + w.legend_item_tile_width;
        }),
        (h = function (t, e) {
          return o(t, e) + 4;
        }),
        (d = m.legend
          .selectAll("." + X.legendItem)
          .data(p)
          .enter()
          .append("g")
          .attr("class", function (t) {
            return m.generateClass(X.legendItem, t);
          })
          .style("visibility", function (t) {
            return m.isLegendToShow(t) ? "visible" : "hidden";
          })
          .style("cursor", "pointer")
          .on("click", function (t) {
            w.legend_item_onclick
              ? w.legend_item_onclick.call(m, t)
              : m.d3.event.altKey
                ? (m.api.hide(), m.api.show(t))
                : (m.api.toggle(t),
                  m.isTargetToShow(t) ? m.api.focus(t) : m.api.revert());
          })
          .on("mouseover", function (t) {
            w.legend_item_onmouseover
              ? w.legend_item_onmouseover.call(m, t)
              : (m.d3.select(this).classed(X.legendItemFocused, !0),
                !m.transiting && m.isTargetToShow(t) && m.api.focus(t));
          })
          .on("mouseout", function (t) {
            w.legend_item_onmouseout
              ? w.legend_item_onmouseout.call(m, t)
              : (m.d3.select(this).classed(X.legendItemFocused, !1),
                m.api.revert());
          }))
          .append("text")
          .text(function (t) {
            return void 0 !== w.data_names[t] ? w.data_names[t] : t;
          })
          .each(function (t, e) {
            n(this, t, e);
          })
          .style("pointer-events", "none")
          .attr("x", m.isLegendRight || m.isLegendInset ? r : -200)
          .attr("y", m.isLegendRight || m.isLegendInset ? -200 : s),
        d
          .append("rect")
          .attr("class", X.legendItemEvent)
          .style("fill-opacity", 0)
          .attr("x", m.isLegendRight || m.isLegendInset ? a : -200)
          .attr("y", m.isLegendRight || m.isLegendInset ? -200 : u),
        d
          .append("line")
          .attr("class", X.legendItemTile)
          .style("stroke", m.color)
          .style("pointer-events", "none")
          .attr("x1", m.isLegendRight || m.isLegendInset ? c : -200)
          .attr("y1", m.isLegendRight || m.isLegendInset ? -200 : h)
          .attr("x2", m.isLegendRight || m.isLegendInset ? l : -200)
          .attr("y2", m.isLegendRight || m.isLegendInset ? -200 : h)
          .attr("stroke-width", w.legend_item_tile_height),
        (y = m.legend.select("." + X.legendBackground + " rect")),
        m.isLegendInset &&
          0 < A &&
          0 === y.size() &&
          (y = m.legend
            .insert("g", "." + X.legendItem)
            .attr("class", X.legendBackground)
            .append("rect")),
        (x = m.legend
          .selectAll("text")
          .data(p)
          .text(function (t) {
            return void 0 !== w.data_names[t] ? w.data_names[t] : t;
          })
          .each(function (t, e) {
            n(this, t, e);
          })),
        (f ? x.transition() : x).attr("x", r).attr("y", s),
        (_ = m.legend.selectAll("rect." + X.legendItemEvent).data(p)),
        (f ? _.transition() : _)
          .attr("width", function (t) {
            return E[t];
          })
          .attr("height", function (t) {
            return V[t];
          })
          .attr("x", a)
          .attr("y", u),
        (v = m.legend.selectAll("line." + X.legendItemTile).data(p)),
        (f ? v.transition() : v)
          .style("stroke", m.color)
          .attr("x1", c)
          .attr("y1", h)
          .attr("x2", l)
          .attr("y2", h),
        y &&
          (f ? y.transition() : y)
            .attr("height", m.getLegendHeight() - 12)
            .attr("width", A * (R + 1) + 10),
        m.legend
          .selectAll("." + X.legendItem)
          .classed(X.legendItemHidden, function (t) {
            return !m.isTargetToShow(t);
          }),
        m.updateLegendItemWidth(A),
        m.updateLegendItemHeight(T),
        m.updateLegendStep(R),
        m.updateSizes(),
        m.updateScales(),
        m.updateSvgSize(),
        m.transformAll(g, e),
        (m.legendHasRendered = !0);
    }),
    (m.initRegion = function () {
      this.region = this.main
        .append("g")
        .attr("clip-path", this.clipPath)
        .attr("class", X.regions);
    }),
    (m.updateRegion = function (t) {
      var e = this,
        n = e.config;
      e.region.style("visibility", e.hasArcType() ? "hidden" : "visible"),
        (e.mainRegion = e.main
          .select("." + X.regions)
          .selectAll("." + X.region)
          .data(n.regions)),
        e.mainRegion
          .enter()
          .append("g")
          .append("rect")
          .style("fill-opacity", 0),
        e.mainRegion.attr("class", e.classRegion.bind(e)),
        e.mainRegion
          .exit()
          .transition()
          .duration(t)
          .style("opacity", 0)
          .remove();
    }),
    (m.redrawRegion = function (t) {
      var e = this,
        n = e.mainRegion.selectAll("rect").each(function () {
          var t = e.d3.select(this.parentNode).datum();
          e.d3.select(this).datum(t);
        }),
        i = e.regionX.bind(e),
        r = e.regionY.bind(e),
        a = e.regionWidth.bind(e),
        o = e.regionHeight.bind(e);
      return [
        (t ? n.transition() : n)
          .attr("x", i)
          .attr("y", r)
          .attr("width", a)
          .attr("height", o)
          .style("fill-opacity", function (t) {
            return P(t.opacity) ? t.opacity : 0.1;
          }),
      ];
    }),
    (m.regionX = function (t) {
      var e = this,
        n = e.config,
        i = "y" === t.axis ? e.y : e.y2;
      return "y" === t.axis || "y2" === t.axis
        ? n.axis_rotated && "start" in t
          ? i(t.start)
          : 0
        : n.axis_rotated
          ? 0
          : "start" in t
            ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start)
            : 0;
    }),
    (m.regionY = function (t) {
      var e = this,
        n = e.config,
        i = "y" === t.axis ? e.y : e.y2;
      return "y" === t.axis || "y2" === t.axis
        ? n.axis_rotated
          ? 0
          : "end" in t
            ? i(t.end)
            : 0
        : n.axis_rotated && "start" in t
          ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start)
          : 0;
    }),
    (m.regionWidth = function (t) {
      var e,
        n = this,
        i = n.config,
        r = n.regionX(t),
        a = "y" === t.axis ? n.y : n.y2;
      return (e =
        "y" === t.axis || "y2" === t.axis
          ? i.axis_rotated && "end" in t
            ? a(t.end)
            : n.width
          : i.axis_rotated
            ? n.width
            : "end" in t
              ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end)
              : n.width) < r
        ? 0
        : e - r;
    }),
    (m.regionHeight = function (t) {
      var e,
        n = this,
        i = n.config,
        r = this.regionY(t),
        a = "y" === t.axis ? n.y : n.y2;
      return (e =
        "y" === t.axis || "y2" === t.axis
          ? i.axis_rotated
            ? n.height
            : "start" in t
              ? a(t.start)
              : n.height
          : i.axis_rotated && "end" in t
            ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end)
            : n.height) < r
        ? 0
        : e - r;
    }),
    (m.isRegionOnX = function (t) {
      return !t.axis || "x" === t.axis;
    }),
    (m.getScale = function (t, e, n) {
      return (n ? this.d3.time.scale() : this.d3.scale.linear()).range([t, e]);
    }),
    (m.getX = function (t, e, n, i) {
      var r,
        a = this.getScale(t, e, this.isTimeSeries()),
        o = n ? a.domain(n) : a;
      for (r in ((a = this.isCategorized()
        ? ((i =
            i ||
            function () {
              return 0;
            }),
          function (t, e) {
            var n = o(t) + i(t);
            return e ? n : Math.ceil(n);
          })
        : function (t, e) {
            var n = o(t);
            return e ? n : Math.ceil(n);
          }),
      o))
        a[r] = o[r];
      return (
        (a.orgDomain = function () {
          return o.domain();
        }),
        this.isCategorized() &&
          (a.domain = function (t) {
            return arguments.length
              ? (o.domain(t), a)
              : [(t = this.orgDomain())[0], t[1] + 1];
          }),
        a
      );
    }),
    (m.getY = function (t, e, n) {
      var i = this.getScale(t, e, this.isTimeSeriesY());
      return n && i.domain(n), i;
    }),
    (m.getYScale = function (t) {
      return "y2" === this.axis.getId(t) ? this.y2 : this.y;
    }),
    (m.getSubYScale = function (t) {
      return "y2" === this.axis.getId(t) ? this.subY2 : this.subY;
    }),
    (m.updateScales = function () {
      var e = this,
        t = e.config,
        n = !e.x;
      (e.xMin = t.axis_rotated ? 1 : 0),
        (e.xMax = t.axis_rotated ? e.height : e.width),
        (e.yMin = t.axis_rotated ? 0 : e.height),
        (e.yMax = t.axis_rotated ? e.width : 1),
        (e.subXMin = e.xMin),
        (e.subXMax = e.xMax),
        (e.subYMin = t.axis_rotated ? 0 : e.height2),
        (e.subYMax = t.axis_rotated ? e.width2 : 1),
        (e.x = e.getX(
          e.xMin,
          e.xMax,
          n ? void 0 : e.x.orgDomain(),
          function () {
            return e.xAxis.tickOffset();
          },
        )),
        (e.y = e.getY(e.yMin, e.yMax, n ? t.axis_y_default : e.y.domain())),
        (e.y2 = e.getY(e.yMin, e.yMax, n ? t.axis_y2_default : e.y2.domain())),
        (e.subX = e.getX(e.xMin, e.xMax, e.orgXDomain, function (t) {
          return t % 1 ? 0 : e.subXAxis.tickOffset();
        })),
        (e.subY = e.getY(
          e.subYMin,
          e.subYMax,
          n ? t.axis_y_default : e.subY.domain(),
        )),
        (e.subY2 = e.getY(
          e.subYMin,
          e.subYMax,
          n ? t.axis_y2_default : e.subY2.domain(),
        )),
        (e.xAxisTickFormat = e.axis.getXAxisTickFormat()),
        (e.xAxisTickValues = e.axis.getXAxisTickValues()),
        (e.yAxisTickValues = e.axis.getYAxisTickValues()),
        (e.y2AxisTickValues = e.axis.getY2AxisTickValues()),
        (e.xAxis = e.axis.getXAxis(
          e.x,
          e.xOrient,
          e.xAxisTickFormat,
          e.xAxisTickValues,
          t.axis_x_tick_outer,
        )),
        (e.subXAxis = e.axis.getXAxis(
          e.subX,
          e.subXOrient,
          e.xAxisTickFormat,
          e.xAxisTickValues,
          t.axis_x_tick_outer,
        )),
        (e.yAxis = e.axis.getYAxis(
          e.y,
          e.yOrient,
          t.axis_y_tick_format,
          e.yAxisTickValues,
          t.axis_y_tick_outer,
        )),
        (e.y2Axis = e.axis.getYAxis(
          e.y2,
          e.y2Orient,
          t.axis_y2_tick_format,
          e.y2AxisTickValues,
          t.axis_y2_tick_outer,
        )),
        n ||
          (e.brush && e.brush.scale(e.subX),
          t.zoom_enabled && e.zoom.scale(e.x)),
        e.updateArc && e.updateArc();
    }),
    (m.selectPoint = function (t, e, n) {
      var i = this,
        r = i.config,
        a = (r.axis_rotated ? i.circleY : i.circleX).bind(i),
        o = (r.axis_rotated ? i.circleX : i.circleY).bind(i),
        s = i.pointSelectR.bind(i);
      r.data_onselected.call(i.api, e, t.node()),
        i.main
          .select("." + X.selectedCircles + i.getTargetSelectorSuffix(e.id))
          .selectAll("." + X.selectedCircle + "-" + n)
          .data([e])
          .enter()
          .append("circle")
          .attr("class", function () {
            return i.generateClass(X.selectedCircle, n);
          })
          .attr("cx", a)
          .attr("cy", o)
          .attr("stroke", function () {
            return i.color(e);
          })
          .attr("r", function (t) {
            return 1.4 * i.pointSelectR(t);
          })
          .transition()
          .duration(100)
          .attr("r", s);
    }),
    (m.unselectPoint = function (t, e, n) {
      this.config.data_onunselected.call(this.api, e, t.node()),
        this.main
          .select("." + X.selectedCircles + this.getTargetSelectorSuffix(e.id))
          .selectAll("." + X.selectedCircle + "-" + n)
          .transition()
          .duration(100)
          .attr("r", 0)
          .remove();
    }),
    (m.togglePoint = function (t, e, n, i) {
      t ? this.selectPoint(e, n, i) : this.unselectPoint(e, n, i);
    }),
    (m.selectPath = function (t, e) {
      var n = this;
      n.config.data_onselected.call(n, e, t.node()),
        n.config.interaction_brighten &&
          t
            .transition()
            .duration(100)
            .style("fill", function () {
              return n.d3.rgb(n.color(e)).brighter(0.75);
            });
    }),
    (m.unselectPath = function (t, e) {
      var n = this;
      n.config.data_onunselected.call(n, e, t.node()),
        n.config.interaction_brighten &&
          t
            .transition()
            .duration(100)
            .style("fill", function () {
              return n.color(e);
            });
    }),
    (m.togglePath = function (t, e, n, i) {
      t ? this.selectPath(e, n, i) : this.unselectPath(e, n, i);
    }),
    (m.getToggle = function (t, e) {
      var n;
      return (
        "circle" === t.nodeName
          ? (n = this.isStepType(e) ? function () {} : this.togglePoint)
          : "path" === t.nodeName && (n = this.togglePath),
        n
      );
    }),
    (m.toggleShape = function (t, e, n) {
      var i = this,
        r = i.d3,
        a = i.config,
        o = r.select(t),
        s = o.classed(X.SELECTED),
        u = i.getToggle(t, e).bind(i);
      a.data_selection_enabled &&
        a.data_selection_isselectable(e) &&
        (a.data_selection_multiple ||
          i.main
            .selectAll(
              "." +
                X.shapes +
                (a.data_selection_grouped
                  ? i.getTargetSelectorSuffix(e.id)
                  : ""),
            )
            .selectAll("." + X.shape)
            .each(function (t, e) {
              var n = r.select(this);
              n.classed(X.SELECTED) && u(!1, n.classed(X.SELECTED, !1), t, e);
            }),
        o.classed(X.SELECTED, !s),
        u(!s, o, e, n));
    }),
    (m.initBar = function () {
      this.main
        .select("." + X.chart)
        .append("g")
        .attr("class", X.chartBars);
    }),
    (m.updateTargetsForBar = function (t) {
      var e = this,
        n = e.config,
        i = e.classChartBar.bind(e),
        r = e.classBars.bind(e),
        a = e.classFocus.bind(e);
      e.main
        .select("." + X.chartBars)
        .selectAll("." + X.chartBar)
        .data(t)
        .attr("class", function (t) {
          return i(t) + a(t);
        })
        .enter()
        .append("g")
        .attr("class", i)
        .style("pointer-events", "none")
        .append("g")
        .attr("class", r)
        .style("cursor", function (t) {
          return n.data_selection_isselectable(t) ? "pointer" : null;
        });
    }),
    (m.updateBar = function (t) {
      var e = this,
        n = e.barData.bind(e),
        i = e.classBar.bind(e),
        r = e.initialOpacity.bind(e),
        a = function (t) {
          return e.color(t.id);
        };
      (e.mainBar = e.main
        .selectAll("." + X.bars)
        .selectAll("." + X.bar)
        .data(n)),
        e.mainBar
          .enter()
          .append("path")
          .attr("class", i)
          .style("stroke", a)
          .style("fill", a),
        e.mainBar.style("opacity", r),
        e.mainBar.exit().transition().duration(t).remove();
    }),
    (m.redrawBar = function (t, e) {
      return [
        (e ? this.mainBar.transition(Math.random().toString()) : this.mainBar)
          .attr("d", t)
          .style("stroke", this.color)
          .style("fill", this.color)
          .style("opacity", 1),
      ];
    }),
    (m.getBarW = function (t, e) {
      var n = this.config,
        i =
          "number" == typeof n.bar_width
            ? n.bar_width
            : e
              ? (t.tickInterval() * n.bar_width_ratio) / e
              : 0;
      return n.bar_width_max && i > n.bar_width_max ? n.bar_width_max : i;
    }),
    (m.getBars = function (t, e) {
      return (
        e
          ? this.main.selectAll("." + X.bars + this.getTargetSelectorSuffix(e))
          : this.main
      ).selectAll("." + X.bar + (P(t) ? "-" + t : ""));
    }),
    (m.expandBars = function (t, e, n) {
      n && this.unexpandBars(), this.getBars(t, e).classed(X.EXPANDED, !0);
    }),
    (m.unexpandBars = function (t) {
      this.getBars(t).classed(X.EXPANDED, !1);
    }),
    (m.generateDrawBar = function (t, e) {
      var a = this.config,
        o = this.generateGetBarPoints(t, e);
      return function (t, e) {
        var n = o(t, e),
          i = a.axis_rotated ? 1 : 0,
          r = a.axis_rotated ? 0 : 1;
        return (
          "M " +
          n[0][i] +
          "," +
          n[0][r] +
          " L" +
          n[1][i] +
          "," +
          n[1][r] +
          " L" +
          n[2][i] +
          "," +
          n[2][r] +
          " L" +
          n[3][i] +
          "," +
          n[3][r] +
          " z"
        );
      };
    }),
    (m.generateGetBarPoints = function (t, e) {
      var o = this,
        n = e ? o.subXAxis : o.xAxis,
        i = t.__max__ + 1,
        s = o.getBarW(n, i),
        u = o.getShapeX(s, i, t, !!e),
        c = o.getShapeY(!!e),
        l = o.getShapeOffset(o.isBarType, t, !!e),
        h = s * (o.config.bar_space / 2),
        d = e ? o.getSubYScale : o.getYScale;
      return function (t, e) {
        var n = d.call(o, t.id)(0),
          i = l(t, e) || n,
          r = u(t),
          a = c(t);
        return (
          o.config.axis_rotated &&
            ((0 < t.value && a < n) || (t.value < 0 && n < a)) &&
            (a = n),
          [
            [r + h, i],
            [r + h, a - (n - i)],
            [r + s - h, a - (n - i)],
            [r + s - h, i],
          ]
        );
      };
    }),
    (m.isWithinBar = function (t) {
      var e = this.d3.mouse(t),
        n = t.getBoundingClientRect(),
        i = t.pathSegList.getItem(0),
        r = t.pathSegList.getItem(1),
        a = Math.min(i.x, r.x),
        o = Math.min(i.y, r.y),
        s = a + n.width + 2,
        u = o + n.height + 2,
        c = o - 2;
      return a - 2 < e[0] && e[0] < s && c < e[1] && e[1] < u;
    }),
    (m.getShapeIndices = function (t) {
      var e,
        n,
        i = this.config,
        r = {},
        a = 0;
      return (
        this.filterTargetsToShow(this.data.targets.filter(t, this)).forEach(
          function (t) {
            for (e = 0; e < i.data_groups.length; e++)
              if (!(i.data_groups[e].indexOf(t.id) < 0))
                for (n = 0; n < i.data_groups[e].length; n++)
                  if (i.data_groups[e][n] in r) {
                    r[t.id] = r[i.data_groups[e][n]];
                    break;
                  }
            void 0 === r[t.id] && (r[t.id] = a++);
          },
        ),
        (r.__max__ = a - 1),
        r
      );
    }),
    (m.getShapeX = function (n, i, r, t) {
      var a = t ? this.subX : this.x;
      return function (t) {
        var e = t.id in r ? r[t.id] : 0;
        return t.x || 0 === t.x ? a(t.x) - n * (i / 2 - e) : 0;
      };
    }),
    (m.getShapeY = function (e) {
      var n = this;
      return function (t) {
        return (e ? n.getSubYScale(t.id) : n.getYScale(t.id))(t.value);
      };
    }),
    (m.getShapeOffset = function (t, s, e) {
      var u = this,
        c = u.orderTargets(u.filterTargetsToShow(u.data.targets.filter(t, u))),
        l = c.map(function (t) {
          return t.id;
        });
      return function (n, i) {
        var r = e ? u.getSubYScale(n.id) : u.getYScale(n.id),
          a = r(0),
          o = a;
        return (
          c.forEach(function (t) {
            var e = u.isStepType(n)
              ? u.convertValuesToStep(t.values)
              : t.values;
            t.id !== n.id &&
              s[t.id] === s[n.id] &&
              l.indexOf(t.id) < l.indexOf(n.id) &&
              ((void 0 !== e[i] && +e[i].x == +n.x) ||
                ((i = -1),
                e.forEach(function (t, e) {
                  t.x === n.x && (i = e);
                })),
              i in e && 0 <= e[i].value * n.value && (o += r(e[i].value) - a));
          }),
          o
        );
      };
    }),
    (m.isWithinShape = function (t, e) {
      var n,
        i = this,
        r = i.d3.select(t);
      return (
        i.isTargetToShow(e.id)
          ? "circle" === t.nodeName
            ? (n = i.isStepType(e)
                ? i.isWithinStep(t, i.getYScale(e.id)(e.value))
                : i.isWithinCircle(t, 1.5 * i.pointSelectR(e)))
            : "path" === t.nodeName &&
              (n = !r.classed(X.bar) || i.isWithinBar(t))
          : (n = !1),
        n
      );
    }),
    (m.getInterpolate = function (t) {
      var e = this,
        n = e.isInterpolationType(e.config.spline_interpolation_type)
          ? e.config.spline_interpolation_type
          : "cardinal";
      return e.isSplineType(t)
        ? n
        : e.isStepType(t)
          ? e.config.line_step_type
          : "linear";
    }),
    (m.initLine = function () {
      this.main
        .select("." + X.chart)
        .append("g")
        .attr("class", X.chartLines);
    }),
    (m.updateTargetsForLine = function (t) {
      var e,
        n = this,
        i = n.config,
        r = n.classChartLine.bind(n),
        a = n.classLines.bind(n),
        o = n.classAreas.bind(n),
        s = n.classCircles.bind(n),
        u = n.classFocus.bind(n);
      (e = n.main
        .select("." + X.chartLines)
        .selectAll("." + X.chartLine)
        .data(t)
        .attr("class", function (t) {
          return r(t) + u(t);
        })
        .enter()
        .append("g")
        .attr("class", r)
        .style("opacity", 0)
        .style("pointer-events", "none"))
        .append("g")
        .attr("class", a),
        e.append("g").attr("class", o),
        e.append("g").attr("class", function (t) {
          return n.generateClass(X.selectedCircles, t.id);
        }),
        e
          .append("g")
          .attr("class", s)
          .style("cursor", function (t) {
            return i.data_selection_isselectable(t) ? "pointer" : null;
          }),
        t.forEach(function (e) {
          n.main
            .selectAll(
              "." + X.selectedCircles + n.getTargetSelectorSuffix(e.id),
            )
            .selectAll("." + X.selectedCircle)
            .each(function (t) {
              t.value = e.values[t.index].value;
            });
        });
    }),
    (m.updateLine = function (t) {
      var e = this;
      (e.mainLine = e.main
        .selectAll("." + X.lines)
        .selectAll("." + X.line)
        .data(e.lineData.bind(e))),
        e.mainLine
          .enter()
          .append("path")
          .attr("class", e.classLine.bind(e))
          .style("stroke", e.color),
        e.mainLine
          .style("opacity", e.initialOpacity.bind(e))
          .style("shape-rendering", function (t) {
            return e.isStepType(t) ? "crispEdges" : "";
          })
          .attr("transform", null),
        e.mainLine.exit().transition().duration(t).style("opacity", 0).remove();
    }),
    (m.redrawLine = function (t, e) {
      return [
        (e ? this.mainLine.transition(Math.random().toString()) : this.mainLine)
          .attr("d", t)
          .style("stroke", this.color)
          .style("opacity", 1),
      ];
    }),
    (m.generateDrawLine = function (t, o) {
      var s = this,
        u = s.config,
        c = s.d3.svg.line(),
        n = s.generateGetLinePoints(t, o),
        l = o ? s.getSubYScale : s.getYScale,
        e = function (t) {
          return (o ? s.subxx : s.xx).call(s, t);
        },
        i = function (t, e) {
          return 0 < u.data_groups.length
            ? n(t, e)[0][1]
            : l.call(s, t.id)(t.value);
        };
      return (
        (c = u.axis_rotated ? c.x(i).y(e) : c.x(e).y(i)),
        u.line_connectNull ||
          (c = c.defined(function (t) {
            return null != t.value;
          })),
        function (t) {
          var e = u.line_connectNull ? s.filterRemoveNull(t.values) : t.values,
            n = o ? s.x : s.subX,
            i = l.call(s, t.id),
            r = 0,
            a = 0;
          return (
            (s.isLineType(t)
              ? u.data_regions[t.id]
                ? s.lineWithRegions(e, n, i, u.data_regions[t.id])
                : (s.isStepType(t) && (e = s.convertValuesToStep(e)),
                  c.interpolate(s.getInterpolate(t))(e))
              : (e[0] && ((r = n(e[0].x)), (a = i(e[0].value))),
                u.axis_rotated ? "M " + a + " " + r : "M " + r + " " + a)) ||
            "M 0 0"
          );
        }
      );
    }),
    (m.generateGetLinePoints = function (t, e) {
      var o = this,
        s = o.config,
        n = t.__max__ + 1,
        u = o.getShapeX(0, n, t, !!e),
        c = o.getShapeY(!!e),
        l = o.getShapeOffset(o.isLineType, t, !!e),
        h = e ? o.getSubYScale : o.getYScale;
      return function (t, e) {
        var n = h.call(o, t.id)(0),
          i = l(t, e) || n,
          r = u(t),
          a = c(t);
        return (
          s.axis_rotated &&
            ((0 < t.value && a < n) || (t.value < 0 && n < a)) &&
            (a = n),
          [
            [r, a - (n - i)],
            [r, a - (n - i)],
            [r, a - (n - i)],
            [r, a - (n - i)],
          ]
        );
      };
    }),
    (m.lineWithRegions = function (t, u, c, e) {
      function l(t) {
        return "M" + t[0][0] + " " + t[0][1] + " " + t[1][0] + " " + t[1][1];
      }
      var n,
        i,
        r,
        a,
        h,
        o,
        s,
        d,
        f,
        g,
        p,
        x = this,
        _ = x.config,
        v = "M",
        y = x.isCategorized() ? 0.5 : 0,
        m = [];
      if (void 0 !== e)
        for (n = 0; n < e.length; n++)
          (m[n] = {}),
            void 0 === e[n].start
              ? (m[n].start = t[0].x)
              : (m[n].start = x.isTimeSeries()
                  ? x.parseDate(e[n].start)
                  : e[n].start),
            void 0 === e[n].end
              ? (m[n].end = t[t.length - 1].x)
              : (m[n].end = x.isTimeSeries()
                  ? x.parseDate(e[n].end)
                  : e[n].end);
      for (
        g = _.axis_rotated
          ? function (t) {
              return c(t.value);
            }
          : function (t) {
              return u(t.x);
            },
          p = _.axis_rotated
            ? function (t) {
                return u(t.x);
              }
            : function (t) {
                return c(t.value);
              },
          r = x.isTimeSeries()
            ? function (t, e, n, i) {
                var r = t.x.getTime(),
                  a = e.x - t.x,
                  o = new Date(r + a * n),
                  s = new Date(r + a * (n + i));
                return l(
                  _.axis_rotated
                    ? [
                        [c(h(n)), u(o)],
                        [c(h(n + i)), u(s)],
                      ]
                    : [
                        [u(o), c(h(n))],
                        [u(s), c(h(n + i))],
                      ],
                );
              }
            : function (t, e, n, i) {
                return l(
                  _.axis_rotated
                    ? [
                        [c(h(n), !0), u(a(n))],
                        [c(h(n + i), !0), u(a(n + i))],
                      ]
                    : [
                        [u(a(n), !0), c(h(n))],
                        [u(a(n + i), !0), c(h(n + i))],
                      ],
                );
              },
          n = 0;
        n < t.length;
        n++
      ) {
        if (
          void 0 !== m &&
          (function (t, e) {
            var n;
            for (n = 0; n < e.length; n++)
              if (e[n].start < t && t <= e[n].end) return !0;
            return !1;
          })(t[n].x, m)
        )
          for (
            a = x.getScale(t[n - 1].x + y, t[n].x + y, x.isTimeSeries()),
              h = x.getScale(t[n - 1].value, t[n].value),
              o = u(t[n].x) - u(t[n - 1].x),
              s = c(t[n].value) - c(t[n - 1].value),
              f = 2 * (d = 2 / Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))),
              i = d;
            i <= 1;
            i += f
          )
            v += r(t[n - 1], t[n], i, d);
        else v += " " + g(t[n]) + " " + p(t[n]);
        t[n].x;
      }
      return v;
    }),
    (m.updateArea = function (t) {
      var e = this,
        n = e.d3;
      (e.mainArea = e.main
        .selectAll("." + X.areas)
        .selectAll("." + X.area)
        .data(e.lineData.bind(e))),
        e.mainArea
          .enter()
          .append("path")
          .attr("class", e.classArea.bind(e))
          .style("fill", e.color)
          .style("opacity", function () {
            return (e.orgAreaOpacity = +n.select(this).style("opacity")), 0;
          }),
        e.mainArea.style("opacity", e.orgAreaOpacity),
        e.mainArea.exit().transition().duration(t).style("opacity", 0).remove();
    }),
    (m.redrawArea = function (t, e) {
      return [
        (e ? this.mainArea.transition(Math.random().toString()) : this.mainArea)
          .attr("d", t)
          .style("fill", this.color)
          .style("opacity", this.orgAreaOpacity),
      ];
    }),
    (m.generateDrawArea = function (t, e) {
      var r = this,
        a = r.config,
        o = r.d3.svg.area(),
        n = r.generateGetAreaPoints(t, e),
        i = e ? r.getSubYScale : r.getYScale,
        s = function (t) {
          return (e ? r.subxx : r.xx).call(r, t);
        },
        u = function (t, e) {
          return 0 < a.data_groups.length
            ? n(t, e)[0][1]
            : i.call(r, t.id)(r.getAreaBaseValue(t.id));
        },
        c = function (t, e) {
          return 0 < a.data_groups.length
            ? n(t, e)[1][1]
            : i.call(r, t.id)(t.value);
        };
      return (
        (o = a.axis_rotated
          ? o.x0(u).x1(c).y(s)
          : o
              .x(s)
              .y0(a.area_above ? 0 : u)
              .y1(c)),
        a.line_connectNull ||
          (o = o.defined(function (t) {
            return null !== t.value;
          })),
        function (t) {
          var e = a.line_connectNull ? r.filterRemoveNull(t.values) : t.values,
            n = 0,
            i = 0;
          return (
            (r.isAreaType(t)
              ? (r.isStepType(t) && (e = r.convertValuesToStep(e)),
                o.interpolate(r.getInterpolate(t))(e))
              : (e[0] &&
                  ((n = r.x(e[0].x)), (i = r.getYScale(t.id)(e[0].value))),
                a.axis_rotated ? "M " + i + " " + n : "M " + n + " " + i)) ||
            "M 0 0"
          );
        }
      );
    }),
    (m.getAreaBaseValue = function () {
      return 0;
    }),
    (m.generateGetAreaPoints = function (t, e) {
      var o = this,
        s = o.config,
        n = t.__max__ + 1,
        u = o.getShapeX(0, n, t, !!e),
        c = o.getShapeY(!!e),
        l = o.getShapeOffset(o.isAreaType, t, !!e),
        h = e ? o.getSubYScale : o.getYScale;
      return function (t, e) {
        var n = h.call(o, t.id)(0),
          i = l(t, e) || n,
          r = u(t),
          a = c(t);
        return (
          s.axis_rotated &&
            ((0 < t.value && a < n) || (t.value < 0 && n < a)) &&
            (a = n),
          [
            [r, i],
            [r, a - (n - i)],
            [r, a - (n - i)],
            [r, i],
          ]
        );
      };
    }),
    (m.updateCircle = function () {
      var t = this;
      (t.mainCircle = t.main
        .selectAll("." + X.circles)
        .selectAll("." + X.circle)
        .data(t.lineOrScatterData.bind(t))),
        t.mainCircle
          .enter()
          .append("circle")
          .attr("class", t.classCircle.bind(t))
          .attr("r", t.pointR.bind(t))
          .style("fill", t.color),
        t.mainCircle.style("opacity", t.initialOpacityForCircle.bind(t)),
        t.mainCircle.exit().remove();
    }),
    (m.redrawCircle = function (t, e, n) {
      var i = this.main.selectAll("." + X.selectedCircle);
      return [
        (n
          ? this.mainCircle.transition(Math.random().toString())
          : this.mainCircle
        )
          .style("opacity", this.opacityForCircle.bind(this))
          .style("fill", this.color)
          .attr("cx", t)
          .attr("cy", e),
        (n ? i.transition(Math.random().toString()) : i)
          .attr("cx", t)
          .attr("cy", e),
      ];
    }),
    (m.circleX = function (t) {
      return t.x || 0 === t.x ? this.x(t.x) : null;
    }),
    (m.updateCircleY = function () {
      var t,
        n,
        e = this;
      0 < e.config.data_groups.length
        ? ((t = e.getShapeIndices(e.isLineType)),
          (n = e.generateGetLinePoints(t)),
          (e.circleY = function (t, e) {
            return n(t, e)[0][1];
          }))
        : (e.circleY = function (t) {
            return e.getYScale(t.id)(t.value);
          });
    }),
    (m.getCircles = function (t, e) {
      return (
        e
          ? this.main.selectAll(
              "." + X.circles + this.getTargetSelectorSuffix(e),
            )
          : this.main
      ).selectAll("." + X.circle + (P(t) ? "-" + t : ""));
    }),
    (m.expandCircles = function (t, e, n) {
      var i = this.pointExpandedR.bind(this);
      n && this.unexpandCircles(),
        this.getCircles(t, e).classed(X.EXPANDED, !0).attr("r", i);
    }),
    (m.unexpandCircles = function (t) {
      var e = this,
        n = e.pointR.bind(e);
      e.getCircles(t)
        .filter(function () {
          return e.d3.select(this).classed(X.EXPANDED);
        })
        .classed(X.EXPANDED, !1)
        .attr("r", n);
    }),
    (m.pointR = function (t) {
      var e = this.config;
      return this.isStepType(t) ? 0 : h(e.point_r) ? e.point_r(t) : e.point_r;
    }),
    (m.pointExpandedR = function (t) {
      var e = this.config;
      return e.point_focus_expand_enabled
        ? h(e.point_focus_expand_r)
          ? e.point_focus_expand_r(t)
          : e.point_focus_expand_r
            ? e.point_focus_expand_r
            : 1.75 * this.pointR(t)
        : this.pointR(t);
    }),
    (m.pointSelectR = function (t) {
      var e = this.config;
      return h(e.point_select_r)
        ? e.point_select_r(t)
        : e.point_select_r
          ? e.point_select_r
          : 4 * this.pointR(t);
    }),
    (m.isWithinCircle = function (t, e) {
      var n = this.d3,
        i = n.mouse(t),
        r = n.select(t),
        a = +r.attr("cx"),
        o = +r.attr("cy");
      return Math.sqrt(Math.pow(a - i[0], 2) + Math.pow(o - i[1], 2)) < e;
    }),
    (m.isWithinStep = function (t, e) {
      return Math.abs(e - this.d3.mouse(t)[1]) < 30;
    }),
    (m.getCurrentWidth = function () {
      var t = this.config;
      return t.size_width ? t.size_width : this.getParentWidth();
    }),
    (m.getCurrentHeight = function () {
      var t = this.config,
        e = t.size_height ? t.size_height : this.getParentHeight();
      return 0 < e
        ? e
        : 320 / (this.hasType("gauge") && !t.gauge_fullCircle ? 2 : 1);
    }),
    (m.getCurrentPaddingTop = function () {
      var t = this.config,
        e = P(t.padding_top) ? t.padding_top : 0;
      return (
        this.title && this.title.node() && (e += this.getTitlePadding()), e
      );
    }),
    (m.getCurrentPaddingBottom = function () {
      var t = this.config;
      return P(t.padding_bottom) ? t.padding_bottom : 0;
    }),
    (m.getCurrentPaddingLeft = function (t) {
      var e = this.config;
      return P(e.padding_left)
        ? e.padding_left
        : e.axis_rotated
          ? e.axis_x_show
            ? Math.max(i(this.getAxisWidthByAxisId("x", t)), 40)
            : 1
          : !e.axis_y_show || e.axis_y_inner
            ? this.axis.getYAxisLabelPosition().isOuter
              ? 30
              : 1
            : i(this.getAxisWidthByAxisId("y", t));
    }),
    (m.getCurrentPaddingRight = function () {
      var t = this,
        e = t.config,
        n = t.isLegendRight ? t.getLegendWidth() + 20 : 0;
      return P(e.padding_right)
        ? e.padding_right + 1
        : e.axis_rotated
          ? 10 + n
          : !e.axis_y2_show || e.axis_y2_inner
            ? 2 + n + (t.axis.getY2AxisLabelPosition().isOuter ? 20 : 0)
            : i(t.getAxisWidthByAxisId("y2")) + n;
    }),
    (m.getParentRectValue = function (e) {
      for (var n, i = this.selectChart.node(); i && "BODY" !== i.tagName; ) {
        try {
          n = i.getBoundingClientRect()[e];
        } catch (t) {
          "width" === e && (n = i.offsetWidth);
        }
        if (n) break;
        i = i.parentNode;
      }
      return n;
    }),
    (m.getParentWidth = function () {
      return this.getParentRectValue("width");
    }),
    (m.getParentHeight = function () {
      var t = this.selectChart.style("height");
      return 0 < t.indexOf("px") ? +t.replace("px", "") : 0;
    }),
    (m.getSvgLeft = function (t) {
      var e = this,
        n = e.config,
        i = n.axis_rotated || (!n.axis_rotated && !n.axis_y_inner),
        r = n.axis_rotated ? X.axisX : X.axisY,
        a = e.main.select("." + r).node(),
        o = a && i ? a.getBoundingClientRect() : { right: 0 },
        s = e.selectChart.node().getBoundingClientRect(),
        u = e.hasArcType(),
        c = o.right - s.left - (u ? 0 : e.getCurrentPaddingLeft(t));
      return 0 < c ? c : 0;
    }),
    (m.getAxisWidthByAxisId = function (t, e) {
      var n = this.axis.getLabelPositionById(t);
      return this.axis.getMaxTickWidth(t, e) + (n.isInner ? 20 : 40);
    }),
    (m.getHorizontalAxisHeight = function (t) {
      var e = this,
        n = e.config,
        i = 30;
      return "x" !== t || n.axis_x_show
        ? "x" === t && n.axis_x_height
          ? n.axis_x_height
          : "y" !== t || n.axis_y_show
            ? "y2" !== t || n.axis_y2_show
              ? ("x" === t &&
                  !n.axis_rotated &&
                  n.axis_x_tick_rotate &&
                  (i =
                    30 +
                    e.axis.getMaxTickWidth(t) *
                      Math.cos((Math.PI * (90 - n.axis_x_tick_rotate)) / 180)),
                "y" === t &&
                  n.axis_rotated &&
                  n.axis_y_tick_rotate &&
                  (i =
                    30 +
                    e.axis.getMaxTickWidth(t) *
                      Math.cos((Math.PI * (90 - n.axis_y_tick_rotate)) / 180)),
                i +
                  (e.axis.getLabelPositionById(t).isInner ? 0 : 10) +
                  ("y2" === t ? -10 : 0))
              : e.rotated_padding_top
            : !n.legend_show || e.isLegendRight || e.isLegendInset
              ? 1
              : 10
        : 8;
    }),
    (m.getEventRectWidth = function () {
      return Math.max(0, this.xAxis.tickInterval());
    }),
    (m.initBrush = function () {
      var e = this,
        t = e.d3;
      (e.brush = t.svg.brush().on("brush", function () {
        e.redrawForBrush();
      })),
        (e.brush.update = function () {
          return e.context && e.context.select("." + X.brush).call(this), this;
        }),
        (e.brush.scale = function (t) {
          return e.config.axis_rotated ? this.y(t) : this.x(t);
        });
    }),
    (m.initSubchart = function () {
      var t = this,
        e = t.config,
        n = (t.context = t.svg
          .append("g")
          .attr("transform", t.getTranslate("context"))),
        i = e.subchart_show ? "visible" : "hidden";
      n.style("visibility", i),
        n
          .append("g")
          .attr("clip-path", t.clipPathForSubchart)
          .attr("class", X.chart),
        n
          .select("." + X.chart)
          .append("g")
          .attr("class", X.chartBars),
        n
          .select("." + X.chart)
          .append("g")
          .attr("class", X.chartLines),
        n
          .append("g")
          .attr("clip-path", t.clipPath)
          .attr("class", X.brush)
          .call(t.brush),
        (t.axes.subx = n
          .append("g")
          .attr("class", X.axisX)
          .attr("transform", t.getTranslate("subx"))
          .attr("clip-path", e.axis_rotated ? "" : t.clipPathForXAxis)
          .style("visibility", e.subchart_axis_x_show ? i : "hidden"));
    }),
    (m.updateTargetsForSubchart = function (t) {
      var e,
        n = this,
        i = n.context,
        r = n.config,
        a = n.classChartBar.bind(n),
        o = n.classBars.bind(n),
        s = n.classChartLine.bind(n),
        u = n.classLines.bind(n),
        c = n.classAreas.bind(n);
      r.subchart_show &&
        (i
          .select("." + X.chartBars)
          .selectAll("." + X.chartBar)
          .data(t)
          .attr("class", a)
          .enter()
          .append("g")
          .style("opacity", 0)
          .attr("class", a)
          .append("g")
          .attr("class", o),
        (e = i
          .select("." + X.chartLines)
          .selectAll("." + X.chartLine)
          .data(t)
          .attr("class", s)
          .enter()
          .append("g")
          .style("opacity", 0)
          .attr("class", s))
          .append("g")
          .attr("class", u),
        e.append("g").attr("class", c),
        i
          .selectAll("." + X.brush + " rect")
          .attr(
            r.axis_rotated ? "width" : "height",
            r.axis_rotated ? n.width2 : n.height2,
          ));
    }),
    (m.updateBarForSubchart = function (t) {
      var e = this;
      (e.contextBar = e.context
        .selectAll("." + X.bars)
        .selectAll("." + X.bar)
        .data(e.barData.bind(e))),
        e.contextBar
          .enter()
          .append("path")
          .attr("class", e.classBar.bind(e))
          .style("stroke", "none")
          .style("fill", e.color),
        e.contextBar.style("opacity", e.initialOpacity.bind(e)),
        e.contextBar
          .exit()
          .transition()
          .duration(t)
          .style("opacity", 0)
          .remove();
    }),
    (m.redrawBarForSubchart = function (t, e, n) {
      (e
        ? this.contextBar.transition(Math.random().toString()).duration(n)
        : this.contextBar
      )
        .attr("d", t)
        .style("opacity", 1);
    }),
    (m.updateLineForSubchart = function (t) {
      var e = this;
      (e.contextLine = e.context
        .selectAll("." + X.lines)
        .selectAll("." + X.line)
        .data(e.lineData.bind(e))),
        e.contextLine
          .enter()
          .append("path")
          .attr("class", e.classLine.bind(e))
          .style("stroke", e.color),
        e.contextLine.style("opacity", e.initialOpacity.bind(e)),
        e.contextLine
          .exit()
          .transition()
          .duration(t)
          .style("opacity", 0)
          .remove();
    }),
    (m.redrawLineForSubchart = function (t, e, n) {
      (e
        ? this.contextLine.transition(Math.random().toString()).duration(n)
        : this.contextLine
      )
        .attr("d", t)
        .style("opacity", 1);
    }),
    (m.updateAreaForSubchart = function (t) {
      var e = this,
        n = e.d3;
      (e.contextArea = e.context
        .selectAll("." + X.areas)
        .selectAll("." + X.area)
        .data(e.lineData.bind(e))),
        e.contextArea
          .enter()
          .append("path")
          .attr("class", e.classArea.bind(e))
          .style("fill", e.color)
          .style("opacity", function () {
            return (e.orgAreaOpacity = +n.select(this).style("opacity")), 0;
          }),
        e.contextArea.style("opacity", 0),
        e.contextArea
          .exit()
          .transition()
          .duration(t)
          .style("opacity", 0)
          .remove();
    }),
    (m.redrawAreaForSubchart = function (t, e, n) {
      (e
        ? this.contextArea.transition(Math.random().toString()).duration(n)
        : this.contextArea
      )
        .attr("d", t)
        .style("fill", this.color)
        .style("opacity", this.orgAreaOpacity);
    }),
    (m.redrawSubchart = function (t, e, n, i, r, a, o) {
      var s,
        u,
        c,
        l = this,
        h = l.d3,
        d = l.config;
      l.context.style("visibility", d.subchart_show ? "visible" : "hidden"),
        d.subchart_show &&
          (h.event &&
            "zoom" === h.event.type &&
            l.brush.extent(l.x.orgDomain()).update(),
          t &&
            (l.brush.empty() || l.brush.extent(l.x.orgDomain()).update(),
            (s = l.generateDrawArea(r, !0)),
            (u = l.generateDrawBar(a, !0)),
            (c = l.generateDrawLine(o, !0)),
            l.updateBarForSubchart(n),
            l.updateLineForSubchart(n),
            l.updateAreaForSubchart(n),
            l.redrawBarForSubchart(u, n, n),
            l.redrawLineForSubchart(c, n, n),
            l.redrawAreaForSubchart(s, n, n)));
    }),
    (m.redrawForBrush = function () {
      var t = this,
        e = t.x;
      t.redraw({
        withTransition: !1,
        withY: t.config.zoom_rescale,
        withSubchart: !1,
        withUpdateXDomain: !0,
        withDimension: !1,
      }),
        t.config.subchart_onbrush.call(t.api, e.orgDomain());
    }),
    (m.transformContext = function (t, e) {
      var n;
      e && e.axisSubX
        ? (n = e.axisSubX)
        : ((n = this.context.select("." + X.axisX)), t && (n = n.transition())),
        this.context.attr("transform", this.getTranslate("context")),
        n.attr("transform", this.getTranslate("subx"));
    }),
    (m.getDefaultExtent = function () {
      var t = this,
        e = t.config,
        n = h(e.axis_x_extent)
          ? e.axis_x_extent(t.getXDomain(t.data.targets))
          : e.axis_x_extent;
      return (
        t.isTimeSeries() && (n = [t.parseDate(n[0]), t.parseDate(n[1])]), n
      );
    }),
    (m.initText = function () {
      this.main
        .select("." + X.chart)
        .append("g")
        .attr("class", X.chartTexts),
        (this.mainText = this.d3.selectAll([]));
    }),
    (m.updateTargetsForText = function (t) {
      var e = this,
        n = e.classChartText.bind(e),
        i = e.classTexts.bind(e),
        r = e.classFocus.bind(e);
      e.main
        .select("." + X.chartTexts)
        .selectAll("." + X.chartText)
        .data(t)
        .attr("class", function (t) {
          return n(t) + r(t);
        })
        .enter()
        .append("g")
        .attr("class", n)
        .style("opacity", 0)
        .style("pointer-events", "none")
        .append("g")
        .attr("class", i);
    }),
    (m.updateText = function (t) {
      var i = this,
        e = i.config,
        n = i.barOrLineData.bind(i),
        r = i.classText.bind(i);
      (i.mainText = i.main
        .selectAll("." + X.texts)
        .selectAll("." + X.text)
        .data(n)),
        i.mainText
          .enter()
          .append("text")
          .attr("class", r)
          .attr("text-anchor", function (t) {
            return e.axis_rotated ? (t.value < 0 ? "end" : "start") : "middle";
          })
          .style("stroke", "none")
          .style("fill", function (t) {
            return i.color(t);
          })
          .style("fill-opacity", 0),
        i.mainText.text(function (t, e, n) {
          return i.dataLabelFormat(t.id)(t.value, t.id, e, n);
        }),
        i.mainText
          .exit()
          .transition()
          .duration(t)
          .style("fill-opacity", 0)
          .remove();
    }),
    (m.redrawText = function (t, e, n, i) {
      return [
        (i ? this.mainText.transition() : this.mainText)
          .attr("x", t)
          .attr("y", e)
          .style("fill", this.color)
          .style("fill-opacity", n ? 0 : this.opacityForText.bind(this)),
      ];
    }),
    (m.getTextRect = function (t, e, n) {
      var i,
        r = this.d3.select("body").append("div").classed("c3", !0),
        a = r
          .append("svg")
          .style("visibility", "hidden")
          .style("position", "fixed")
          .style("top", 0)
          .style("left", 0),
        o = this.d3.select(n).style("font");
      return (
        a
          .selectAll(".dummy")
          .data([t])
          .enter()
          .append("text")
          .classed(e || "", !0)
          .style("font", o)
          .text(t)
          .each(function () {
            i = this.getBoundingClientRect();
          }),
        r.remove(),
        i
      );
    }),
    (m.generateXYForText = function (t, e, n, i) {
      var r = this,
        a = r.generateGetAreaPoints(t, !1),
        o = r.generateGetBarPoints(e, !1),
        s = r.generateGetLinePoints(n, !1),
        u = i ? r.getXForText : r.getYForText;
      return function (t, e) {
        var n = r.isAreaType(t) ? a : r.isBarType(t) ? o : s;
        return u.call(r, n(t, e), t, this);
      };
    }),
    (m.getXForText = function (t, e, n) {
      var i,
        r,
        a = this,
        o = n.getBoundingClientRect();
      return (
        (i = a.config.axis_rotated
          ? ((r = a.isBarType(e) ? 4 : 6), t[2][1] + r * (e.value < 0 ? -1 : 1))
          : a.hasType("bar")
            ? (t[2][0] + t[0][0]) / 2
            : t[0][0]),
        null === e.value &&
          (i > a.width ? (i = a.width - o.width) : i < 0 && (i = 4)),
        i
      );
    }),
    (m.getYForText = function (t, e, n) {
      var i,
        r = this,
        a = n.getBoundingClientRect();
      return (
        r.config.axis_rotated
          ? (i = (t[0][0] + t[2][0] + 0.6 * a.height) / 2)
          : ((i = t[2][1]),
            e.value < 0 || (0 === e.value && !r.hasPositiveValue)
              ? ((i += a.height),
                r.isBarType(e) && r.isSafari()
                  ? (i -= 3)
                  : !r.isBarType(e) && r.isChrome() && (i += 3))
              : (i += r.isBarType(e) ? -3 : -6)),
        null !== e.value ||
          r.config.axis_rotated ||
          (i < a.height
            ? (i = a.height)
            : i > this.height && (i = this.height - 4)),
        i
      );
    }),
    (m.initTitle = function () {
      this.title = this.svg
        .append("text")
        .text(this.config.title_text)
        .attr("class", this.CLASS.title);
    }),
    (m.redrawTitle = function () {
      var t = this;
      t.title.attr("x", t.xForTitle.bind(t)).attr("y", t.yForTitle.bind(t));
    }),
    (m.xForTitle = function () {
      var t = this,
        e = t.config,
        n = e.title_position || "left";
      return 0 <= n.indexOf("right")
        ? t.currentWidth -
            t.getTextRect(
              t.title.node().textContent,
              t.CLASS.title,
              t.title.node(),
            ).width -
            e.title_padding.right
        : 0 <= n.indexOf("center")
          ? (t.currentWidth -
              t.getTextRect(
                t.title.node().textContent,
                t.CLASS.title,
                t.title.node(),
              ).width) /
            2
          : e.title_padding.left;
    }),
    (m.yForTitle = function () {
      var t = this;
      return (
        t.config.title_padding.top +
        t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node())
          .height
      );
    }),
    (m.getTitlePadding = function () {
      return this.yForTitle() + this.config.title_padding.bottom;
    }),
    (m.initTooltip = function () {
      var t,
        e = this,
        n = e.config;
      if (
        ((e.tooltip = e.selectChart
          .style("position", "relative")
          .append("div")
          .attr("class", X.tooltipContainer)
          .style("position", "absolute")
          .style("pointer-events", "none")
          .style("display", "none")),
        n.tooltip_init_show)
      ) {
        if (e.isTimeSeries() && c(n.tooltip_init_x)) {
          for (
            n.tooltip_init_x = e.parseDate(n.tooltip_init_x), t = 0;
            t < e.data.targets[0].values.length &&
            e.data.targets[0].values[t].x - n.tooltip_init_x != 0;
            t++
          );
          n.tooltip_init_x = t;
        }
        e.tooltip.html(
          n.tooltip_contents.call(
            e,
            e.data.targets.map(function (t) {
              return e.addName(t.values[n.tooltip_init_x]);
            }),
            e.axis.getXAxisTickFormat(),
            e.getYFormat(e.hasArcType()),
            e.color,
          ),
        ),
          e.tooltip
            .style("top", n.tooltip_init_position.top)
            .style("left", n.tooltip_init_position.left)
            .style("display", "block");
      }
    }),
    (m.getTooltipSortFunction = function () {
      var t = this,
        e = t.config;
      if (0 !== e.data_groups.length && void 0 === e.tooltip_order) {
        var n = t.orderTargets(t.data.targets).map(function (t) {
          return t.id;
        });
        return (
          (t.isOrderAsc() || t.isOrderDesc()) && (n = n.reverse()),
          function (t, e) {
            return n.indexOf(t.id) - n.indexOf(e.id);
          }
        );
      }
      var i = e.tooltip_order;
      void 0 === i && (i = e.data_order);
      var r = function (t) {
        return t ? t.value : null;
      };
      if (c(i) && "asc" === i.toLowerCase())
        return function (t, e) {
          return r(t) - r(e);
        };
      if (c(i) && "desc" === i.toLowerCase())
        return function (t, e) {
          return r(e) - r(t);
        };
      if (h(i)) {
        var a = i;
        return (
          void 0 === e.tooltip_order &&
            (a = function (t, e) {
              return i(
                t ? { id: t.id, values: [t] } : null,
                e ? { id: e.id, values: [e] } : null,
              );
            }),
          a
        );
      }
      return u(i)
        ? function (t, e) {
            return i.indexOf(t.id) - i.indexOf(e.id);
          }
        : void 0;
    }),
    (m.getTooltipContent = function (t, e, n, i) {
      var r,
        a,
        o,
        s,
        u,
        c,
        l = this,
        h = l.config,
        d = h.tooltip_format_title || e,
        f =
          h.tooltip_format_name ||
          function (t) {
            return t;
          },
        g = h.tooltip_format_value || n,
        p = this.getTooltipSortFunction();
      for (p && t.sort(p), a = 0; a < t.length; a++)
        if (
          t[a] &&
          (t[a].value || 0 === t[a].value) &&
          (r ||
            ((o = x(d ? d(t[a].x) : t[a].x)),
            (r =
              "<table class='" +
              l.CLASS.tooltip +
              "'>" +
              (o || 0 === o ? "<tr><th colspan='2'>" + o + "</th></tr>" : ""))),
          void 0 !== (s = x(g(t[a].value, t[a].ratio, t[a].id, t[a].index, t))))
        ) {
          if (null === t[a].name) continue;
          (u = x(f(t[a].name, t[a].ratio, t[a].id, t[a].index))),
            (c = l.levelColor ? l.levelColor(t[a].value) : i(t[a].id)),
            (r +=
              "<tr class='" +
              l.CLASS.tooltipName +
              "-" +
              l.getTargetSelectorSuffix(t[a].id) +
              "'>"),
            (r +=
              "<td class='name'><span style='background-color:" +
              c +
              "'></span>" +
              u +
              "</td>"),
            (r += "<td class='value'>" + s + "</td>"),
            (r += "</tr>");
        }
      return r + "</table>";
    }),
    (m.tooltipPosition = function (t, e, n, i) {
      var r,
        a,
        o,
        s,
        u,
        c = this,
        l = c.config,
        h = c.d3,
        d = c.hasArcType(),
        f = h.mouse(i);
      return (
        d
          ? ((a =
              (c.width - (c.isLegendRight ? c.getLegendWidth() : 0)) / 2 +
              f[0]),
            (s = c.height / 2 + f[1] + 20))
          : ((r = c.getSvgLeft(!0)),
            (s = l.axis_rotated
              ? ((o = (a = r + f[0] + 100) + e),
                (u = c.currentWidth - c.getCurrentPaddingRight()),
                c.x(t[0].x) + 20)
              : ((o =
                  (a = r + c.getCurrentPaddingLeft(!0) + c.x(t[0].x) + 20) + e),
                (u = r + c.currentWidth - c.getCurrentPaddingRight()),
                f[1] + 15)),
            u < o && (a -= o - u + 20),
            s + n > c.currentHeight && (s -= n + 30)),
        s < 0 && (s = 0),
        { top: s, left: a }
      );
    }),
    (m.showTooltip = function (t, e) {
      var n,
        i,
        r,
        a = this,
        o = a.config,
        s = a.hasArcType(),
        u = t.filter(function (t) {
          return t && P(t.value);
        }),
        c = o.tooltip_position || m.tooltipPosition;
      0 !== u.length &&
        o.tooltip_show &&
        (a.tooltip
          .html(
            o.tooltip_contents.call(
              a,
              t,
              a.axis.getXAxisTickFormat(),
              a.getYFormat(s),
              a.color,
            ),
          )
          .style("display", "block"),
        (n = a.tooltip.property("offsetWidth")),
        (i = a.tooltip.property("offsetHeight")),
        (r = c.call(this, u, n, i, e)),
        a.tooltip.style("top", r.top + "px").style("left", r.left + "px"));
    }),
    (m.hideTooltip = function () {
      this.tooltip.style("display", "none");
    }),
    (m.setTargetType = function (t, e) {
      var n = this,
        i = n.config;
      n.mapToTargetIds(t).forEach(function (t) {
        (n.withoutFadeIn[t] = e === i.data_types[t]), (i.data_types[t] = e);
      }),
        t || (i.data_type = e);
    }),
    (m.hasType = function (n, t) {
      var i = this.config.data_types,
        r = !1;
      return (
        (t = t || this.data.targets) && t.length
          ? t.forEach(function (t) {
              var e = i[t.id];
              ((e && 0 <= e.indexOf(n)) || (!e && "line" === n)) && (r = !0);
            })
          : Object.keys(i).length
            ? Object.keys(i).forEach(function (t) {
                i[t] === n && (r = !0);
              })
            : (r = this.config.data_type === n),
        r
      );
    }),
    (m.hasArcType = function (t) {
      return (
        this.hasType("pie", t) ||
        this.hasType("donut", t) ||
        this.hasType("gauge", t)
      );
    }),
    (m.isLineType = function (t) {
      var e = this.config,
        n = c(t) ? t : t.id;
      return (
        !e.data_types[n] ||
        0 <=
          [
            "line",
            "spline",
            "area",
            "area-spline",
            "step",
            "area-step",
          ].indexOf(e.data_types[n])
      );
    }),
    (m.isStepType = function (t) {
      var e = c(t) ? t : t.id;
      return 0 <= ["step", "area-step"].indexOf(this.config.data_types[e]);
    }),
    (m.isSplineType = function (t) {
      var e = c(t) ? t : t.id;
      return 0 <= ["spline", "area-spline"].indexOf(this.config.data_types[e]);
    }),
    (m.isAreaType = function (t) {
      var e = c(t) ? t : t.id;
      return (
        0 <=
        ["area", "area-spline", "area-step"].indexOf(this.config.data_types[e])
      );
    }),
    (m.isBarType = function (t) {
      var e = c(t) ? t : t.id;
      return "bar" === this.config.data_types[e];
    }),
    (m.isScatterType = function (t) {
      var e = c(t) ? t : t.id;
      return "scatter" === this.config.data_types[e];
    }),
    (m.isPieType = function (t) {
      var e = c(t) ? t : t.id;
      return "pie" === this.config.data_types[e];
    }),
    (m.isGaugeType = function (t) {
      var e = c(t) ? t : t.id;
      return "gauge" === this.config.data_types[e];
    }),
    (m.isDonutType = function (t) {
      var e = c(t) ? t : t.id;
      return "donut" === this.config.data_types[e];
    }),
    (m.isArcType = function (t) {
      return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t);
    }),
    (m.lineData = function (t) {
      return this.isLineType(t) ? [t] : [];
    }),
    (m.arcData = function (t) {
      return this.isArcType(t.data) ? [t] : [];
    }),
    (m.barData = function (t) {
      return this.isBarType(t) ? t.values : [];
    }),
    (m.lineOrScatterData = function (t) {
      return this.isLineType(t) || this.isScatterType(t) ? t.values : [];
    }),
    (m.barOrLineData = function (t) {
      return this.isBarType(t) || this.isLineType(t) ? t.values : [];
    }),
    (m.isInterpolationType = function (t) {
      return (
        0 <=
        [
          "linear",
          "linear-closed",
          "basis",
          "basis-open",
          "basis-closed",
          "bundle",
          "cardinal",
          "cardinal-open",
          "cardinal-closed",
          "monotone",
        ].indexOf(t)
      );
    }),
    (m.isSafari = function () {
      var t = window.navigator.userAgent;
      return 0 <= t.indexOf("Safari") && t.indexOf("Chrome") < 0;
    }),
    (m.isChrome = function () {
      return 0 <= window.navigator.userAgent.indexOf("Chrome");
    }),
    (m.initZoom = function () {
      var e,
        n = this,
        i = n.d3,
        r = n.config;
      (n.zoom = i.behavior
        .zoom()
        .on("zoomstart", function () {
          (e = i.event.sourceEvent),
            (n.zoom.altDomain = i.event.sourceEvent.altKey
              ? n.x.orgDomain()
              : null),
            r.zoom_onzoomstart.call(n.api, i.event.sourceEvent);
        })
        .on("zoom", function () {
          n.redrawForZoom.call(n);
        })
        .on("zoomend", function () {
          var t = i.event.sourceEvent;
          (t && e.clientX === t.clientX && e.clientY === t.clientY) ||
            (n.redrawEventRect(),
            n.updateZoom(),
            r.zoom_onzoomend.call(n.api, n.x.orgDomain()));
        })),
        (n.zoom.scale = function (t) {
          return r.axis_rotated ? this.y(t) : this.x(t);
        }),
        (n.zoom.orgScaleExtent = function () {
          var t = r.zoom_extent ? r.zoom_extent : [1, 10];
          return [t[0], Math.max(n.getMaxDataCount() / t[1], t[1])];
        }),
        (n.zoom.updateScaleExtent = function () {
          var t = O(n.x.orgDomain()) / O(n.getZoomDomain()),
            e = this.orgScaleExtent();
          return this.scaleExtent([e[0] * t, e[1] * t]), this;
        });
    }),
    (m.getZoomDomain = function () {
      var t = this.config,
        e = this.d3;
      return [
        e.min([this.orgXDomain[0], t.zoom_x_min]),
        e.max([this.orgXDomain[1], t.zoom_x_max]),
      ];
    }),
    (m.updateZoom = function () {
      var t = this.config.zoom_enabled ? this.zoom : function () {};
      this.main
        .select("." + X.zoomRect)
        .call(t)
        .on("dblclick.zoom", null),
        this.main
          .selectAll("." + X.eventRect)
          .call(t)
          .on("dblclick.zoom", null);
    }),
    (m.redrawForZoom = function () {
      var t = this,
        e = t.d3,
        n = t.config,
        i = t.zoom,
        r = t.x;
      if (
        n.zoom_enabled &&
        0 !== t.filterTargetsToShow(t.data.targets).length
      ) {
        if ("mousemove" === e.event.sourceEvent.type && i.altDomain)
          return r.domain(i.altDomain), void i.scale(r).updateScaleExtent();
        t.isCategorized() &&
          r.orgDomain()[0] === t.orgXDomain[0] &&
          r.domain([t.orgXDomain[0] - 1e-10, r.orgDomain()[1]]),
          t.redraw({
            withTransition: !1,
            withY: n.zoom_rescale,
            withSubchart: !1,
            withEventRect: !1,
            withDimension: !1,
          }),
          "mousemove" === e.event.sourceEvent.type && (t.cancelClick = !0),
          n.zoom_onzoom.call(t.api, r.orgDomain());
      }
    }),
    w
  );
}),
  (function () {
    function s(t) {
      return t && (t.ownerDocument || t.document || t).documentElement;
    }
    function k(t) {
      return (
        t &&
        ((t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView)
      );
    }
    function o(t, e) {
      return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN;
    }
    function c(t) {
      return null === t ? NaN : +t;
    }
    function l(t) {
      return !isNaN(t);
    }
    function t(a) {
      return {
        left: function (t, e, n, i) {
          for (
            arguments.length < 3 && (n = 0),
              arguments.length < 4 && (i = t.length);
            n < i;

          ) {
            var r = (n + i) >>> 1;
            a(t[r], e) < 0 ? (n = r + 1) : (i = r);
          }
          return n;
        },
        right: function (t, e, n, i) {
          for (
            arguments.length < 3 && (n = 0),
              arguments.length < 4 && (i = t.length);
            n < i;

          ) {
            var r = (n + i) >>> 1;
            0 < a(t[r], e) ? (i = r) : (n = r + 1);
          }
          return n;
        },
      };
    }
    function u(t) {
      return t.length;
    }
    function e(t, e) {
      for (var n in e)
        Object.defineProperty(t.prototype, n, { value: e[n], enumerable: !1 });
    }
    function v() {
      this._ = Object.create(null);
    }
    function n(t) {
      return (t += "") === ra || t[0] === aa ? aa + t : t;
    }
    function i(t) {
      return (t += "")[0] === aa ? t.slice(1) : t;
    }
    function r(t) {
      return n(t) in this._;
    }
    function a(t) {
      return (t = n(t)) in this._ && delete this._[t];
    }
    function h() {
      var t = [];
      for (var e in this._) t.push(i(e));
      return t;
    }
    function d() {
      var t = 0;
      for (var e in this._) ++t;
      return t;
    }
    function f() {
      for (var t in this._) return !1;
      return !0;
    }
    function g() {
      this._ = Object.create(null);
    }
    function R(t) {
      return t;
    }
    function p(e, n, i) {
      return function () {
        var t = i.apply(n, arguments);
        return t === n ? e : t;
      };
    }
    function x(t, e) {
      if (e in t) return e;
      e = e.charAt(0).toUpperCase() + e.slice(1);
      for (var n = 0, i = oa.length; n < i; ++n) {
        var r = oa[n] + e;
        if (r in t) return r;
      }
    }
    function _() {}
    function y() {}
    function m(r) {
      function t() {
        for (var t, e = a, n = -1, i = e.length; ++n < i; )
          (t = e[n].on) && t.apply(this, arguments);
        return r;
      }
      var a = [],
        o = new v();
      return (
        (t.on = function (t, e) {
          var n,
            i = o.get(t);
          return arguments.length < 2
            ? i && i.on
            : (i &&
                ((i.on = null),
                (a = a.slice(0, (n = a.indexOf(i))).concat(a.slice(n + 1))),
                o.remove(t)),
              e && a.push(o.set(t, { on: e })),
              r);
        }),
        t
      );
    }
    function O() {
      qr.event.preventDefault();
    }
    function w() {
      for (var t, e = qr.event; (t = e.sourceEvent); ) e = t;
      return e;
    }
    function I(r) {
      for (var a = new y(), t = 0, e = arguments.length; ++t < e; )
        a[arguments[t]] = m(a);
      return (
        (a.of = function (n, i) {
          return function (t) {
            try {
              var e = (t.sourceEvent = qr.event);
              (t.target = r), (qr.event = t), a[t.type].apply(n, i);
            } finally {
              qr.event = e;
            }
          };
        }),
        a
      );
    }
    function S(t) {
      return ua(t, da), t;
    }
    function b(t) {
      return "function" == typeof t
        ? t
        : function () {
            return ca(t, this);
          };
    }
    function A(t) {
      return "function" == typeof t
        ? t
        : function () {
            return la(t, this);
          };
    }
    function T(e, n) {
      return (
        (e = qr.ns.qualify(e)),
        null == n
          ? e.local
            ? function () {
                this.removeAttributeNS(e.space, e.local);
              }
            : function () {
                this.removeAttribute(e);
              }
          : "function" == typeof n
            ? e.local
              ? function () {
                  var t = n.apply(this, arguments);
                  null == t
                    ? this.removeAttributeNS(e.space, e.local)
                    : this.setAttributeNS(e.space, e.local, t);
                }
              : function () {
                  var t = n.apply(this, arguments);
                  null == t ? this.removeAttribute(e) : this.setAttribute(e, t);
                }
            : e.local
              ? function () {
                  this.setAttributeNS(e.space, e.local, n);
                }
              : function () {
                  this.setAttribute(e, n);
                }
      );
    }
    function P(t) {
      return t.trim().replace(/\s+/g, " ");
    }
    function C(t) {
      return new RegExp("(?:^|\\s+)" + qr.requote(t) + "(?:\\s+|$)", "g");
    }
    function L(t) {
      return (t + "").trim().split(/^|\s+/);
    }
    function M(n, i) {
      var r = (n = L(n).map(E)).length;
      return "function" == typeof i
        ? function () {
            for (var t = -1, e = i.apply(this, arguments); ++t < r; )
              n[t](this, e);
          }
        : function () {
            for (var t = -1; ++t < r; ) n[t](this, i);
          };
    }
    function E(i) {
      var r = C(i);
      return function (t, e) {
        if ((n = t.classList)) return e ? n.add(i) : n.remove(i);
        var n = t.getAttribute("class") || "";
        e
          ? ((r.lastIndex = 0),
            r.test(n) || t.setAttribute("class", P(n + " " + i)))
          : t.setAttribute("class", P(n.replace(r, " ")));
      };
    }
    function V(e, n, i) {
      return null == n
        ? function () {
            this.style.removeProperty(e);
          }
        : "function" == typeof n
          ? function () {
              var t = n.apply(this, arguments);
              null == t
                ? this.style.removeProperty(e)
                : this.style.setProperty(e, t, i);
            }
          : function () {
              this.style.setProperty(e, n, i);
            };
    }
    function G(e, n) {
      return null == n
        ? function () {
            delete this[e];
          }
        : "function" == typeof n
          ? function () {
              var t = n.apply(this, arguments);
              null == t ? delete this[e] : (this[e] = t);
            }
          : function () {
              this[e] = n;
            };
    }
    function D(n) {
      return "function" == typeof n
        ? n
        : (n = qr.ns.qualify(n)).local
          ? function () {
              return this.ownerDocument.createElementNS(n.space, n.local);
            }
          : function () {
              var t = this.ownerDocument,
                e = this.namespaceURI;
              return e === fa && t.documentElement.namespaceURI === fa
                ? t.createElement(n)
                : t.createElementNS(e, n);
            };
    }
    function N() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function F(t) {
      return { __data__: t };
    }
    function z(t) {
      return function () {
        return ha(this, t);
      };
    }
    function X(t, e) {
      for (var n = 0, i = t.length; n < i; n++)
        for (var r, a = t[n], o = 0, s = a.length; o < s; o++)
          (r = a[o]) && e(r, o, n);
      return t;
    }
    function H(t) {
      return ua(t, pa), t;
    }
    function Y(r, e, n) {
      function i() {
        var t = this[a];
        t && (this.removeEventListener(r, t, t.$), delete this[a]);
      }
      var a = "__on" + r,
        t = r.indexOf("."),
        o = B;
      0 < t && (r = r.slice(0, t));
      var s = xa.get(r);
      return (
        s && ((r = s), (o = j)),
        t
          ? e
            ? function () {
                var t = o(e, Qr(arguments));
                i.call(this),
                  this.addEventListener(r, (this[a] = t), (t.$ = n)),
                  (t._ = e);
              }
            : i
          : e
            ? _
            : function () {
                var t,
                  e = new RegExp("^__on([^.]+)" + qr.requote(r) + "$");
                for (var n in this)
                  if ((t = n.match(e))) {
                    var i = this[n];
                    this.removeEventListener(t[1], i, i.$), delete this[n];
                  }
              }
      );
    }
    function B(n, i) {
      return function (t) {
        var e = qr.event;
        (qr.event = t), (i[0] = this.__data__);
        try {
          n.apply(this, i);
        } finally {
          qr.event = e;
        }
      };
    }
    function j(t, e) {
      var n = B(t, e);
      return function (t) {
        var e = t.relatedTarget;
        (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
          n.call(this, t);
      };
    }
    function U(t) {
      var n = ".dragsuppress-" + ++va,
        i = "click" + n,
        r = qr
          .select(k(t))
          .on("touchmove" + n, O)
          .on("dragstart" + n, O)
          .on("selectstart" + n, O);
      if (
        (null == _a &&
          (_a = !("onselectstart" in t) && x(t.style, "userSelect")),
        _a)
      ) {
        var a = s(t).style,
          o = a[_a];
        a[_a] = "none";
      }
      return function (t) {
        if ((r.on(n, null), _a && (a[_a] = o), t)) {
          var e = function () {
            r.on(i, null);
          };
          r.on(
            i,
            function () {
              O(), e();
            },
            !0,
          ),
            setTimeout(e, 0);
        }
      };
    }
    function q(t, e) {
      e.changedTouches && (e = e.changedTouches[0]);
      var n = t.ownerSVGElement || t;
      if (n.createSVGPoint) {
        var i = n.createSVGPoint();
        if (ya < 0) {
          var r = k(t);
          if (r.scrollX || r.scrollY) {
            var a = (n = qr
              .select("body")
              .append("svg")
              .style(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: 0,
                  padding: 0,
                  border: "none",
                },
                "important",
              ))[0][0].getScreenCTM();
            (ya = !(a.f || a.e)), n.remove();
          }
        }
        return (
          ya
            ? ((i.x = e.pageX), (i.y = e.pageY))
            : ((i.x = e.clientX), (i.y = e.clientY)),
          [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y]
        );
      }
      var o = t.getBoundingClientRect();
      return [
        e.clientX - o.left - t.clientLeft,
        e.clientY - o.top - t.clientTop,
      ];
    }
    function W() {
      return qr.event.changedTouches[0].identifier;
    }
    function Q(t) {
      return 0 < t ? 1 : t < 0 ? -1 : 0;
    }
    function Z(t, e, n) {
      return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]);
    }
    function K(t) {
      return 1 < t ? 0 : t < -1 ? Sa : Math.acos(t);
    }
    function $(t) {
      return 1 < t ? Ta : t < -1 ? -Ta : Math.asin(t);
    }
    function J(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    function tt(t) {
      return (t = Math.sin(t / 2)) * t;
    }
    function et() {}
    function nt(t, e, n) {
      return this instanceof nt
        ? ((this.h = +t), (this.s = +e), void (this.l = +n))
        : arguments.length < 2
          ? t instanceof nt
            ? new nt(t.h, t.s, t.l)
            : xt("" + t, _t, nt)
          : new nt(t, e, n);
    }
    function it(t, e, n) {
      function i(t) {
        return Math.round(
          255 *
            (360 < (e = t) ? (e -= 360) : e < 0 && (e += 360),
            e < 60
              ? r + ((a - r) * e) / 60
              : e < 180
                ? a
                : e < 240
                  ? r + ((a - r) * (240 - e)) / 60
                  : r),
        );
        var e;
      }
      var r, a;
      return (
        (t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t),
        (e = isNaN(e) ? 0 : e < 0 ? 0 : 1 < e ? 1 : e),
        (r =
          2 * (n = n < 0 ? 0 : 1 < n ? 1 : n) -
          (a = n <= 0.5 ? n * (1 + e) : n + e - n * e)),
        new dt(i(t + 120), i(t), i(t - 120))
      );
    }
    function rt(t, e, n) {
      return this instanceof rt
        ? ((this.h = +t), (this.c = +e), void (this.l = +n))
        : arguments.length < 2
          ? t instanceof rt
            ? new rt(t.h, t.c, t.l)
            : ut(
                t instanceof ot ? t.l : (t = vt((t = qr.rgb(t)).r, t.g, t.b)).l,
                t.a,
                t.b,
              )
          : new rt(t, e, n);
    }
    function at(t, e, n) {
      return (
        isNaN(t) && (t = 0),
        isNaN(e) && (e = 0),
        new ot(n, Math.cos((t *= Pa)) * e, Math.sin(t) * e)
      );
    }
    function ot(t, e, n) {
      return this instanceof ot
        ? ((this.l = +t), (this.a = +e), void (this.b = +n))
        : arguments.length < 2
          ? t instanceof ot
            ? new ot(t.l, t.a, t.b)
            : t instanceof rt
              ? at(t.h, t.c, t.l)
              : vt((t = dt(t)).r, t.g, t.b)
          : new ot(t, e, n);
    }
    function st(t, e, n) {
      var i = (t + 16) / 116,
        r = i + e / 500,
        a = i - n / 200;
      return new dt(
        ht(
          3.2404542 * (r = ct(r) * Oa) -
            1.5371385 * (i = ct(i) * Ia) -
            0.4985314 * (a = ct(a) * Da),
        ),
        ht(-0.969266 * r + 1.8760108 * i + 0.041556 * a),
        ht(0.0556434 * r - 0.2040259 * i + 1.0572252 * a),
      );
    }
    function ut(t, e, n) {
      return 0 < t
        ? new rt(Math.atan2(n, e) * Ca, Math.sqrt(e * e + n * n), t)
        : new rt(NaN, NaN, t);
    }
    function ct(t) {
      return 0.206893034 < t ? t * t * t : (t - 4 / 29) / 7.787037;
    }
    function lt(t) {
      return 0.008856 < t ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29;
    }
    function ht(t) {
      return Math.round(
        255 * (t <= 0.00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
      );
    }
    function dt(t, e, n) {
      return this instanceof dt
        ? ((this.r = ~~t), (this.g = ~~e), void (this.b = ~~n))
        : arguments.length < 2
          ? t instanceof dt
            ? new dt(t.r, t.g, t.b)
            : xt("" + t, dt, it)
          : new dt(t, e, n);
    }
    function ft(t) {
      return new dt(t >> 16, (t >> 8) & 255, 255 & t);
    }
    function gt(t) {
      return ft(t) + "";
    }
    function pt(t) {
      return t < 16
        ? "0" + Math.max(0, t).toString(16)
        : Math.min(255, t).toString(16);
    }
    function xt(t, e, n) {
      var i,
        r,
        a,
        o = 0,
        s = 0,
        u = 0;
      if ((i = /([a-z]+)\((.*)\)/.exec((t = t.toLowerCase()))))
        switch (((r = i[2].split(",")), i[1])) {
          case "hsl":
            return n(
              parseFloat(r[0]),
              parseFloat(r[1]) / 100,
              parseFloat(r[2]) / 100,
            );
          case "rgb":
            return e(mt(r[0]), mt(r[1]), mt(r[2]));
        }
      return (a = za.get(t))
        ? e(a.r, a.g, a.b)
        : (null == t ||
            "#" !== t.charAt(0) ||
            isNaN((a = parseInt(t.slice(1), 16))) ||
            (4 === t.length
              ? ((o = (3840 & a) >> 4),
                (o |= o >> 4),
                (s = 240 & a),
                (s |= s >> 4),
                (u = 15 & a),
                (u |= u << 4))
              : 7 === t.length &&
                ((o = (16711680 & a) >> 16),
                (s = (65280 & a) >> 8),
                (u = 255 & a))),
          e(o, s, u));
    }
    function _t(t, e, n) {
      var i,
        r,
        a = Math.min((t /= 255), (e /= 255), (n /= 255)),
        o = Math.max(t, e, n),
        s = o - a,
        u = (o + a) / 2;
      return (
        s
          ? ((r = u < 0.5 ? s / (o + a) : s / (2 - o - a)),
            (i =
              t == o
                ? (e - n) / s + (e < n ? 6 : 0)
                : e == o
                  ? (n - t) / s + 2
                  : (t - e) / s + 4),
            (i *= 60))
          : ((i = NaN), (r = 0 < u && u < 1 ? 0 : i)),
        new nt(i, r, u)
      );
    }
    function vt(t, e, n) {
      var i = lt(
          (0.4124564 * (t = yt(t)) +
            0.3575761 * (e = yt(e)) +
            0.1804375 * (n = yt(n))) /
            Oa,
        ),
        r = lt((0.2126729 * t + 0.7151522 * e + 0.072175 * n) / Ia);
      return ot(
        116 * r - 16,
        500 * (i - r),
        200 * (r - lt((0.0193339 * t + 0.119192 * e + 0.9503041 * n) / Da)),
      );
    }
    function yt(t) {
      return (t /= 255) <= 0.04045
        ? t / 12.92
        : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function mt(t) {
      var e = parseFloat(t);
      return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e;
    }
    function wt(t) {
      return "function" == typeof t
        ? t
        : function () {
            return t;
          };
    }
    function St(i) {
      return function (t, e, n) {
        return (
          2 === arguments.length &&
            "function" == typeof e &&
            ((n = e), (e = null)),
          bt(t, e, i, n)
        );
      };
    }
    function bt(r, a, o, t) {
      function e() {
        var t,
          e,
          n,
          i = l.status;
        if (
          (!i &&
            ((n = (e = l).responseType) && "text" !== n
              ? e.response
              : e.responseText)) ||
          (200 <= i && i < 300) ||
          304 === i
        ) {
          try {
            t = o.call(s, l);
          } catch (t) {
            return void u.error.call(s, t);
          }
          u.load.call(s, t);
        } else u.error.call(s, l);
      }
      var n,
        s = {},
        u = qr.dispatch("beforesend", "progress", "load", "error"),
        c = {},
        l = new XMLHttpRequest(),
        h = null;
      return (
        !this.XDomainRequest ||
          "withCredentials" in l ||
          !/^(http(s)?:)?\/\//.test(r) ||
          (l = new XDomainRequest()),
        "onload" in l
          ? (l.onload = l.onerror = e)
          : (l.onreadystatechange = function () {
              3 < l.readyState && e();
            }),
        (l.onprogress = function (t) {
          var e = qr.event;
          qr.event = t;
          try {
            u.progress.call(s, l);
          } finally {
            qr.event = e;
          }
        }),
        (s.header = function (t, e) {
          return (
            (t = (t + "").toLowerCase()),
            arguments.length < 2
              ? c[t]
              : (null == e ? delete c[t] : (c[t] = e + ""), s)
          );
        }),
        (s.mimeType = function (t) {
          return arguments.length ? ((a = null == t ? null : t + ""), s) : a;
        }),
        (s.responseType = function (t) {
          return arguments.length ? ((h = t), s) : h;
        }),
        (s.response = function (t) {
          return (o = t), s;
        }),
        ["get", "post"].forEach(function (t) {
          s[t] = function () {
            return s.send.apply(s, [t].concat(Qr(arguments)));
          };
        }),
        (s.send = function (t, e, n) {
          if (
            (2 === arguments.length &&
              "function" == typeof e &&
              ((n = e), (e = null)),
            l.open(t, r, !0),
            null == a || "accept" in c || (c.accept = a + ",*/*"),
            l.setRequestHeader)
          )
            for (var i in c) l.setRequestHeader(i, c[i]);
          return (
            null != a && l.overrideMimeType && l.overrideMimeType(a),
            null != h && (l.responseType = h),
            null != n &&
              s.on("error", n).on("load", function (t) {
                n(null, t);
              }),
            u.beforesend.call(s, l),
            l.send(null == e ? null : e),
            s
          );
        }),
        (s.abort = function () {
          return l.abort(), s;
        }),
        qr.rebind(s, u, "on"),
        null == t
          ? s
          : s.get(
              1 === (n = t).length
                ? function (t, e) {
                    n(null == t ? e : null);
                  }
                : n,
            )
      );
    }
    function At(t, e, n) {
      var i = arguments.length;
      i < 2 && (e = 0), i < 3 && (n = Date.now());
      var r = { c: t, t: n + e, n: null };
      return (
        Ha ? (Ha.n = r) : (Xa = r),
        (Ha = r),
        Ya || ((Ba = clearTimeout(Ba)), (Ya = 1), ja(Tt)),
        r
      );
    }
    function Tt() {
      var t = Pt(),
        e = Ct() - t;
      24 < e
        ? (isFinite(e) && (clearTimeout(Ba), (Ba = setTimeout(Tt, e))),
          (Ya = 0))
        : ((Ya = 1), ja(Tt));
    }
    function Pt() {
      for (var t = Date.now(), e = Xa; e; )
        t >= e.t && e.c(t - e.t) && (e.c = null), (e = e.n);
      return t;
    }
    function Ct() {
      for (var t, e = Xa, n = 1 / 0; e; )
        e = e.c
          ? (e.t < n && (n = e.t), (t = e).n)
          : t
            ? (t.n = e.n)
            : (Xa = e.n);
      return (Ha = t), n;
    }
    function Lt(t, e) {
      return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1);
    }
    function Mt(t) {
      return t + "";
    }
    function Et() {
      this._ = new Date(
        1 < arguments.length ? Date.UTC.apply(this, arguments) : arguments[0],
      );
    }
    function Vt(i, a, o) {
      function t(t) {
        var e = i(t),
          n = r(e, 1);
        return t - e < n - t ? e : n;
      }
      function s(t) {
        return a((t = i(new Za(t - 1))), 1), t;
      }
      function r(t, e) {
        return a((t = new Za(+t)), e), t;
      }
      function u(t, e, n) {
        var i = s(t),
          r = [];
        if (1 < n) for (; i < e; ) o(i) % n || r.push(new Date(+i)), a(i, 1);
        else for (; i < e; ) r.push(new Date(+i)), a(i, 1);
        return r;
      }
      ((i.floor = i).round = t), (i.ceil = s), (i.offset = r), (i.range = u);
      var e = (i.utc = Gt(i));
      return (
        ((e.floor = e).round = Gt(t)),
        (e.ceil = Gt(s)),
        (e.offset = Gt(r)),
        (e.range = function (t, e, n) {
          try {
            var i = new (Za = Et)();
            return (i._ = t), u(i, e, n);
          } finally {
            Za = Date;
          }
        }),
        i
      );
    }
    function Gt(i) {
      return function (t, e) {
        try {
          var n = new (Za = Et)();
          return (n._ = t), i(n, e)._;
        } finally {
          Za = Date;
        }
      };
    }
    function kt(t, e, n) {
      var i = t < 0 ? "-" : "",
        r = (i ? -t : t) + "",
        a = r.length;
      return i + (a < n ? new Array(n - a + 1).join(e) + r : r);
    }
    function Rt(t) {
      return new RegExp("^(?:" + t.map(qr.requote).join("|") + ")", "i");
    }
    function Ot(t) {
      for (var e = new v(), n = -1, i = t.length; ++n < i; )
        e.set(t[n].toLowerCase(), n);
      return e;
    }
    function It(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 1));
      return i ? ((t.w = +i[0]), n + i[0].length) : -1;
    }
    function Dt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n));
      return i ? ((t.U = +i[0]), n + i[0].length) : -1;
    }
    function Nt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n));
      return i ? ((t.W = +i[0]), n + i[0].length) : -1;
    }
    function Ft(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 4));
      return i ? ((t.y = +i[0]), n + i[0].length) : -1;
    }
    function zt(t, e, n) {
      Ja.lastIndex = 0;
      var i,
        r = Ja.exec(e.slice(n, n + 2));
      return r
        ? ((t.y = (i = +r[0]) + (68 < i ? 1900 : 2e3)), n + r[0].length)
        : -1;
    }
    function Xt(t, e, n) {
      return /^[+-]\d{4}$/.test((e = e.slice(n, n + 5)))
        ? ((t.Z = -e), n + 5)
        : -1;
    }
    function Ht(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 2));
      return i ? ((t.m = i[0] - 1), n + i[0].length) : -1;
    }
    function Yt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 2));
      return i ? ((t.d = +i[0]), n + i[0].length) : -1;
    }
    function Bt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 3));
      return i ? ((t.j = +i[0]), n + i[0].length) : -1;
    }
    function jt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 2));
      return i ? ((t.H = +i[0]), n + i[0].length) : -1;
    }
    function Ut(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 2));
      return i ? ((t.M = +i[0]), n + i[0].length) : -1;
    }
    function qt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 2));
      return i ? ((t.S = +i[0]), n + i[0].length) : -1;
    }
    function Wt(t, e, n) {
      Ja.lastIndex = 0;
      var i = Ja.exec(e.slice(n, n + 3));
      return i ? ((t.L = +i[0]), n + i[0].length) : -1;
    }
    function Qt(t) {
      var e = t.getTimezoneOffset(),
        n = 0 < e ? "-" : "+",
        i = (ia(e) / 60) | 0,
        r = ia(e) % 60;
      return n + kt(i, "0", 2) + kt(r, "0", 2);
    }
    function Zt(t, e, n) {
      to.lastIndex = 0;
      var i = to.exec(e.slice(n, n + 1));
      return i ? n + i[0].length : -1;
    }
    function Kt(i) {
      for (var t = i.length, e = -1; ++e < t; ) i[e][0] = this(i[e][0]);
      return function (t) {
        for (var e = 0, n = i[e]; !n[1](t); ) n = i[++e];
        return n[0](t);
      };
    }
    function $t() {}
    function Jt(t, e, n) {
      var i = (n.s = t + e),
        r = i - t,
        a = i - r;
      n.t = t - a + (e - r);
    }
    function te(t, e) {
      t && ro.hasOwnProperty(t.type) && ro[t.type](t, e);
    }
    function ee(t, e, n) {
      var i,
        r = -1,
        a = t.length - n;
      for (e.lineStart(); ++r < a; ) (i = t[r]), e.point(i[0], i[1], i[2]);
      e.lineEnd();
    }
    function ne(t, e) {
      var n = -1,
        i = t.length;
      for (e.polygonStart(); ++n < i; ) ee(t[n], e, 1);
      e.polygonEnd();
    }
    function ie() {
      function n(t, e) {
        e = (e * Pa) / 2 + Sa / 4;
        var n = (t *= Pa) - l,
          i = 0 <= n ? 1 : -1,
          r = i * n,
          a = Math.cos(e),
          o = Math.sin(e),
          s = d * o,
          u = h * a + s * Math.cos(r),
          c = s * i * Math.sin(r);
        oo.add(Math.atan2(c, u)), (l = t), (h = a), (d = o);
      }
      var i, r, l, h, d;
      (so.point = function (t, e) {
        (so.point = n),
          (l = (i = t) * Pa),
          (h = Math.cos((e = ((r = e) * Pa) / 2 + Sa / 4))),
          (d = Math.sin(e));
      }),
        (so.lineEnd = function () {
          n(i, r);
        });
    }
    function re(t) {
      var e = t[0],
        n = t[1],
        i = Math.cos(n);
      return [i * Math.cos(e), i * Math.sin(e), Math.sin(n)];
    }
    function ae(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
    }
    function oe(t, e) {
      return [
        t[1] * e[2] - t[2] * e[1],
        t[2] * e[0] - t[0] * e[2],
        t[0] * e[1] - t[1] * e[0],
      ];
    }
    function se(t, e) {
      (t[0] += e[0]), (t[1] += e[1]), (t[2] += e[2]);
    }
    function ue(t, e) {
      return [t[0] * e, t[1] * e, t[2] * e];
    }
    function ce(t) {
      var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      (t[0] /= e), (t[1] /= e), (t[2] /= e);
    }
    function le(t) {
      return [Math.atan2(t[1], t[0]), $(t[2])];
    }
    function he(t, e) {
      return ia(t[0] - e[0]) < ma && ia(t[1] - e[1]) < ma;
    }
    function de(t, e) {
      t *= Pa;
      var n = Math.cos((e *= Pa));
      fe(n * Math.cos(t), n * Math.sin(t), Math.sin(e));
    }
    function fe(t, e, n) {
      (lo += (t - lo) / ++uo), (ho += (e - ho) / uo), (fo += (n - fo) / uo);
    }
    function ge() {
      function i(t, e) {
        t *= Pa;
        var n = Math.cos((e *= Pa)),
          i = n * Math.cos(t),
          r = n * Math.sin(t),
          a = Math.sin(e),
          o = Math.atan2(
            Math.sqrt(
              (o = u * a - c * r) * o +
                (o = c * i - s * a) * o +
                (o = s * r - u * i) * o,
            ),
            s * i + u * r + c * a,
          );
        (co += o),
          (go += o * (s + (s = i))),
          (po += o * (u + (u = r))),
          (xo += o * (c + (c = a))),
          fe(s, u, c);
      }
      var s, u, c;
      mo.point = function (t, e) {
        t *= Pa;
        var n = Math.cos((e *= Pa));
        (s = n * Math.cos(t)),
          (u = n * Math.sin(t)),
          (c = Math.sin(e)),
          (mo.point = i),
          fe(s, u, c);
      };
    }
    function pe() {
      mo.point = de;
    }
    function xe() {
      function i(t, e) {
        t *= Pa;
        var n = Math.cos((e *= Pa)),
          i = n * Math.cos(t),
          r = n * Math.sin(t),
          a = Math.sin(e),
          o = g * a - p * r,
          s = p * i - f * a,
          u = f * r - g * i,
          c = Math.sqrt(o * o + s * s + u * u),
          l = f * i + g * r + p * a,
          h = c && -K(l) / c,
          d = Math.atan2(c, l);
        (_o += h * o),
          (vo += h * s),
          (yo += h * u),
          (co += d),
          (go += d * (f + (f = i))),
          (po += d * (g + (g = r))),
          (xo += d * (p + (p = a))),
          fe(f, g, p);
      }
      var r, a, f, g, p;
      (mo.point = function (t, e) {
        (r = t), (a = e), (mo.point = i), (t *= Pa);
        var n = Math.cos((e *= Pa));
        (f = n * Math.cos(t)),
          (g = n * Math.sin(t)),
          (p = Math.sin(e)),
          fe(f, g, p);
      }),
        (mo.lineEnd = function () {
          i(r, a), (mo.lineEnd = pe), (mo.point = de);
        });
    }
    function _e(n, i) {
      function t(t, e) {
        return (t = n(t, e)), i(t[0], t[1]);
      }
      return (
        n.invert &&
          i.invert &&
          (t.invert = function (t, e) {
            return (t = i.invert(t, e)) && n.invert(t[0], t[1]);
          }),
        t
      );
    }
    function ve() {
      return !0;
    }
    function ye(t, e, n, i, s) {
      var u = [],
        c = [];
      if (
        (t.forEach(function (t) {
          if (!((e = t.length - 1) <= 0)) {
            var e,
              n = t[0],
              i = t[e];
            if (he(n, i)) {
              s.lineStart();
              for (var r = 0; r < e; ++r) s.point((n = t[r])[0], n[1]);
              return void s.lineEnd();
            }
            var a = new we(n, t, null, !0),
              o = new we(n, null, a, !1);
            (a.o = o),
              u.push(a),
              c.push(o),
              (o = new we(i, null, (a = new we(i, t, null, !1)), !0)),
              (a.o = o),
              u.push(a),
              c.push(o);
          }
        }),
        c.sort(e),
        me(u),
        me(c),
        u.length)
      ) {
        for (var r = 0, a = n, o = c.length; r < o; ++r) c[r].e = a = !a;
        for (var l, h, d = u[0]; ; ) {
          for (var f = d, g = !0; f.v; ) if ((f = f.n) === d) return;
          (l = f.z), s.lineStart();
          do {
            if (((f.v = f.o.v = !0), f.e)) {
              if (g)
                for (r = 0, o = l.length; r < o; ++r)
                  s.point((h = l[r])[0], h[1]);
              else i(f.x, f.n.x, 1, s);
              f = f.n;
            } else {
              if (g)
                for (r = (l = f.p.z).length - 1; 0 <= r; --r)
                  s.point((h = l[r])[0], h[1]);
              else i(f.x, f.p.x, -1, s);
              f = f.p;
            }
            (l = (f = f.o).z), (g = !g);
          } while (!f.v);
          s.lineEnd();
        }
      }
    }
    function me(t) {
      if ((e = t.length)) {
        for (var e, n, i = 0, r = t[0]; ++i < e; )
          (r.n = n = t[i]), (n.p = r), (r = n);
        (r.n = n = t[0]), (n.p = r);
      }
    }
    function we(t, e, n, i) {
      (this.x = t),
        (this.z = e),
        (this.o = n),
        (this.e = i),
        (this.v = !1),
        (this.n = this.p = null);
    }
    function Se(v, y, m, w) {
      return function (i, o) {
        function e(t, e) {
          var n = i(t, e);
          v((t = n[0]), (e = n[1])) && o.point(t, e);
        }
        function t(t, e) {
          var n = i(t, e);
          d.point(n[0], n[1]);
        }
        function n() {
          (g.point = t), d.lineStart();
        }
        function r() {
          (g.point = e), d.lineEnd();
        }
        function s(t, e) {
          h.push([t, e]);
          var n = i(t, e);
          x.point(n[0], n[1]);
        }
        function a() {
          x.lineStart(), (h = []);
        }
        function u() {
          s(h[0][0], h[0][1]), x.lineEnd();
          var t,
            e = x.clean(),
            n = p.buffer(),
            i = n.length;
          if ((h.pop(), l.push(h), (h = null), i))
            if (1 & e) {
              var r,
                a = -1;
              if (0 < (i = (t = n[0]).length - 1)) {
                for (
                  _ || (o.polygonStart(), (_ = !0)), o.lineStart();
                  ++a < i;

                )
                  o.point((r = t[a])[0], r[1]);
                o.lineEnd();
              }
            } else
              1 < i && 2 & e && n.push(n.pop().concat(n.shift())),
                c.push(n.filter(be));
        }
        var c,
          l,
          h,
          d = y(o),
          f = i.invert(w[0], w[1]),
          g = {
            point: e,
            lineStart: n,
            lineEnd: r,
            polygonStart: function () {
              (g.point = s),
                (g.lineStart = a),
                (g.lineEnd = u),
                (c = []),
                (l = []);
            },
            polygonEnd: function () {
              (g.point = e),
                (g.lineStart = n),
                (g.lineEnd = r),
                (c = qr.merge(c));
              var t = (function (t, e) {
                var n = t[0],
                  i = t[1],
                  r = [Math.sin(n), -Math.cos(n), 0],
                  a = 0,
                  o = 0;
                oo.reset();
                for (var s = 0, u = e.length; s < u; ++s) {
                  var c = e[s],
                    l = c.length;
                  if (l)
                    for (
                      var h = c[0],
                        d = h[0],
                        f = h[1] / 2 + Sa / 4,
                        g = Math.sin(f),
                        p = Math.cos(f),
                        x = 1;
                      ;

                    ) {
                      x === l && (x = 0);
                      var _ = (t = c[x])[0],
                        v = t[1] / 2 + Sa / 4,
                        y = Math.sin(v),
                        m = Math.cos(v),
                        w = _ - d,
                        S = 0 <= w ? 1 : -1,
                        b = S * w,
                        A = Sa < b,
                        T = g * y;
                      if (
                        (oo.add(
                          Math.atan2(
                            T * S * Math.sin(b),
                            p * m + T * Math.cos(b),
                          ),
                        ),
                        (a += A ? w + S * ba : w),
                        A ^ (n <= d) ^ (n <= _))
                      ) {
                        var P = oe(re(h), re(t));
                        ce(P);
                        var C = oe(r, P);
                        ce(C);
                        var L = (A ^ (0 <= w) ? -1 : 1) * $(C[2]);
                        (L < i || (i === L && (P[0] || P[1]))) &&
                          (o += A ^ (0 <= w) ? 1 : -1);
                      }
                      if (!x++) break;
                      (d = _), (g = y), (p = m), (h = t);
                    }
                }
                return (a < -ma || (a < ma && oo < -ma)) ^ (1 & o);
              })(f, l);
              c.length
                ? (_ || (o.polygonStart(), (_ = !0)), ye(c, Te, t, m, o))
                : t &&
                  (_ || (o.polygonStart(), (_ = !0)),
                  o.lineStart(),
                  m(null, null, 1, o),
                  o.lineEnd()),
                _ && (o.polygonEnd(), (_ = !1)),
                (c = l = null);
            },
            sphere: function () {
              o.polygonStart(),
                o.lineStart(),
                m(null, null, 1, o),
                o.lineEnd(),
                o.polygonEnd();
            },
          },
          p = Ae(),
          x = y(p),
          _ = !1;
        return g;
      };
    }
    function be(t) {
      return 1 < t.length;
    }
    function Ae() {
      var n,
        e = [];
      return {
        lineStart: function () {
          e.push((n = []));
        },
        point: function (t, e) {
          n.push([t, e]);
        },
        lineEnd: _,
        buffer: function () {
          var t = e;
          return (e = []), (n = null), t;
        },
        rejoin: function () {
          1 < e.length && e.push(e.pop().concat(e.shift()));
        },
      };
    }
    function Te(t, e) {
      return (
        ((t = t.x)[0] < 0 ? t[1] - Ta - ma : Ta - t[1]) -
        ((e = e.x)[0] < 0 ? e[1] - Ta - ma : Ta - e[1])
      );
    }
    function Pe(l, h, d, f) {
      return function (t) {
        var e,
          n = t.a,
          i = t.b,
          r = n.x,
          a = n.y,
          o = 0,
          s = 1,
          u = i.x - r,
          c = i.y - a;
        if (((e = l - r), u || !(0 < e))) {
          if (((e /= u), u < 0)) {
            if (e < o) return;
            e < s && (s = e);
          } else if (0 < u) {
            if (s < e) return;
            o < e && (o = e);
          }
          if (((e = d - r), u || !(e < 0))) {
            if (((e /= u), u < 0)) {
              if (s < e) return;
              o < e && (o = e);
            } else if (0 < u) {
              if (e < o) return;
              e < s && (s = e);
            }
            if (((e = h - a), c || !(0 < e))) {
              if (((e /= c), c < 0)) {
                if (e < o) return;
                e < s && (s = e);
              } else if (0 < c) {
                if (s < e) return;
                o < e && (o = e);
              }
              if (((e = f - a), c || !(e < 0))) {
                if (((e /= c), c < 0)) {
                  if (s < e) return;
                  o < e && (o = e);
                } else if (0 < c) {
                  if (e < o) return;
                  e < s && (s = e);
                }
                return (
                  0 < o && (t.a = { x: r + o * u, y: a + o * c }),
                  s < 1 && (t.b = { x: r + s * u, y: a + s * c }),
                  t
                );
              }
            }
          }
        }
      };
    }
    function Ce(m, w, S, b) {
      function A(t, e) {
        return ia(t[0] - m) < ma
          ? 0 < e
            ? 0
            : 3
          : ia(t[0] - S) < ma
            ? 0 < e
              ? 2
              : 1
            : ia(t[1] - w) < ma
              ? 0 < e
                ? 1
                : 0
              : 0 < e
                ? 3
                : 2;
      }
      function T(t, e) {
        return P(t.x, e.x);
      }
      function P(t, e) {
        var n = A(t, 1),
          i = A(e, 1);
        return n !== i
          ? n - i
          : 0 === n
            ? e[1] - t[1]
            : 1 === n
              ? t[0] - e[0]
              : 2 === n
                ? t[1] - e[1]
                : e[0] - t[0];
      }
      return function (r) {
        function i(t, e, n, i) {
          var r = 0,
            a = 0;
          if (
            null == t ||
            (r = A(t, n)) !== (a = A(e, n)) ||
            (P(t, e) < 0) ^ (0 < n)
          )
            for (
              ;
              i.point(0 === r || 3 === r ? m : S, 1 < r ? b : w),
                (r = (r + n + 4) % 4) !== a;

            );
          else i.point(e[0], e[1]);
        }
        function a(t, e) {
          return m <= t && t <= S && w <= e && e <= b;
        }
        function t(t, e) {
          a(t, e) && r.point(t, e);
        }
        function e(t, e) {
          var n = a(
            (t = Math.max(-So, Math.min(So, t))),
            (e = Math.max(-So, Math.min(So, e))),
          );
          if ((l && s.push([t, e]), p))
            (u = t),
              (c = e),
              (p = !1),
              (h = n) && (r.lineStart(), r.point(t, e));
          else if (n && g) r.point(t, e);
          else {
            var i = { a: { x: d, y: f }, b: { x: t, y: e } };
            v(i)
              ? (g || (r.lineStart(), r.point(i.a.x, i.a.y)),
                r.point(i.b.x, i.b.y),
                n || r.lineEnd(),
                (x = !1))
              : n && (r.lineStart(), r.point(t, e), (x = !1));
          }
          (d = t), (f = e), (g = n);
        }
        var o,
          l,
          s,
          u,
          c,
          h,
          d,
          f,
          g,
          p,
          x,
          _ = r,
          n = Ae(),
          v = Pe(m, w, S, b),
          y = {
            point: t,
            lineStart: function () {
              (y.point = e),
                l && l.push((s = [])),
                (g = !(p = !0)),
                (d = f = NaN);
            },
            lineEnd: function () {
              o && (e(u, c), h && g && n.rejoin(), o.push(n.buffer())),
                (y.point = t),
                g && r.lineEnd();
            },
            polygonStart: function () {
              (r = n), (o = []), (l = []), (x = !0);
            },
            polygonEnd: function () {
              (r = _), (o = qr.merge(o));
              var t = (function (t) {
                  for (var e = 0, n = l.length, i = t[1], r = 0; r < n; ++r)
                    for (
                      var a, o = 1, s = l[r], u = s.length, c = s[0];
                      o < u;
                      ++o
                    )
                      (a = s[o]),
                        c[1] <= i
                          ? a[1] > i && 0 < Z(c, a, t) && ++e
                          : a[1] <= i && Z(c, a, t) < 0 && --e,
                        (c = a);
                  return 0 !== e;
                })([m, b]),
                e = x && t,
                n = o.length;
              (e || n) &&
                (r.polygonStart(),
                e && (r.lineStart(), i(null, null, 1, r), r.lineEnd()),
                n && ye(o, T, t, i, r),
                r.polygonEnd()),
                (o = l = s = null);
            },
          };
        return y;
      };
    }
    function Le(t) {
      var e = 0,
        n = Sa / 3,
        i = He(t),
        r = i(e, n);
      return (
        (r.parallels = function (t) {
          return arguments.length
            ? i((e = (t[0] * Sa) / 180), (n = (t[1] * Sa) / 180))
            : [(e / Sa) * 180, (n / Sa) * 180];
        }),
        r
      );
    }
    function Me(t, e) {
      function n(t, e) {
        var n = Math.sqrt(a - 2 * r * Math.sin(e)) / r;
        return [n * Math.sin((t *= r)), o - n * Math.cos(t)];
      }
      var i = Math.sin(t),
        r = (i + Math.sin(e)) / 2,
        a = 1 + i * (2 * r - i),
        o = Math.sqrt(a) / r;
      return (
        (n.invert = function (t, e) {
          var n = o - e;
          return [
            Math.atan2(t, n) / r,
            $((a - (t * t + n * n) * r * r) / (2 * r)),
          ];
        }),
        n
      );
    }
    function Ee() {
      function n(t, e) {
        (Ao += o * t - a * e), (a = t), (o = e);
      }
      var i, r, a, o;
      (Mo.point = function (t, e) {
        (Mo.point = n), (i = a = t), (r = o = e);
      }),
        (Mo.lineEnd = function () {
          n(i, r);
        });
    }
    function Ve() {
      function t(t, e) {
        o.push("M", t, ",", e, a);
      }
      function e(t, e) {
        o.push("M", t, ",", e), (s.point = n);
      }
      function n(t, e) {
        o.push("L", t, ",", e);
      }
      function i() {
        s.point = t;
      }
      function r() {
        o.push("Z");
      }
      var a = Ge(4.5),
        o = [],
        s = {
          point: t,
          lineStart: function () {
            s.point = e;
          },
          lineEnd: i,
          polygonStart: function () {
            s.lineEnd = r;
          },
          polygonEnd: function () {
            (s.lineEnd = i), (s.point = t);
          },
          pointRadius: function (t) {
            return (a = Ge(t)), s;
          },
          result: function () {
            if (o.length) {
              var t = o.join("");
              return (o = []), t;
            }
          },
        };
      return s;
    }
    function Ge(t) {
      return (
        "m0," +
        t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        -2 * t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        2 * t +
        "z"
      );
    }
    function ke(t, e) {
      (lo += t), (ho += e), ++fo;
    }
    function Re() {
      function n(t, e) {
        var n = t - a,
          i = e - o,
          r = Math.sqrt(n * n + i * i);
        (go += (r * (a + t)) / 2),
          (po += (r * (o + e)) / 2),
          (xo += r),
          ke((a = t), (o = e));
      }
      var a, o;
      Vo.point = function (t, e) {
        (Vo.point = n), ke((a = t), (o = e));
      };
    }
    function Oe() {
      Vo.point = ke;
    }
    function Ie() {
      function n(t, e) {
        var n = t - a,
          i = e - o,
          r = Math.sqrt(n * n + i * i);
        (go += (r * (a + t)) / 2),
          (po += (r * (o + e)) / 2),
          (xo += r),
          (_o += (r = o * t - a * e) * (a + t)),
          (vo += r * (o + e)),
          (yo += 3 * r),
          ke((a = t), (o = e));
      }
      var i, r, a, o;
      (Vo.point = function (t, e) {
        (Vo.point = n), ke((i = a = t), (r = o = e));
      }),
        (Vo.lineEnd = function () {
          n(i, r);
        });
    }
    function De(n) {
      function t(t, e) {
        n.moveTo(t + o, e), n.arc(t, e, o, 0, ba);
      }
      function e(t, e) {
        n.moveTo(t, e), (s.point = i);
      }
      function i(t, e) {
        n.lineTo(t, e);
      }
      function r() {
        s.point = t;
      }
      function a() {
        n.closePath();
      }
      var o = 4.5,
        s = {
          point: t,
          lineStart: function () {
            s.point = e;
          },
          lineEnd: r,
          polygonStart: function () {
            s.lineEnd = a;
          },
          polygonEnd: function () {
            (s.lineEnd = r), (s.point = t);
          },
          pointRadius: function (t) {
            return (o = t), s;
          },
          result: _,
        };
      return s;
    }
    function Ne(M) {
      function e(t) {
        return (
          w
            ? function (r) {
                function t(t, e) {
                  (t = M(t, e)), r.point(t[0], t[1]);
                }
                function e() {
                  (p = NaN), (m.point = n), r.lineStart();
                }
                function n(t, e) {
                  var n = re([t, e]),
                    i = M(t, e);
                  E(
                    p,
                    x,
                    g,
                    _,
                    v,
                    y,
                    (p = i[0]),
                    (x = i[1]),
                    (g = t),
                    (_ = n[0]),
                    (v = n[1]),
                    (y = n[2]),
                    w,
                    r,
                  ),
                    r.point(p, x);
                }
                function i() {
                  (m.point = t), r.lineEnd();
                }
                function a() {
                  e(), (m.point = o), (m.lineEnd = s);
                }
                function o(t, e) {
                  n((u = t), e),
                    (c = p),
                    (l = x),
                    (h = _),
                    (d = v),
                    (f = y),
                    (m.point = n);
                }
                function s() {
                  E(p, x, g, _, v, y, c, l, u, h, d, f, w, r),
                    (m.lineEnd = i)();
                }
                var u,
                  c,
                  l,
                  h,
                  d,
                  f,
                  g,
                  p,
                  x,
                  _,
                  v,
                  y,
                  m = {
                    point: t,
                    lineStart: e,
                    lineEnd: i,
                    polygonStart: function () {
                      r.polygonStart(), (m.lineStart = a);
                    },
                    polygonEnd: function () {
                      r.polygonEnd(), (m.lineStart = e);
                    },
                  };
                return m;
              }
            : function (n) {
                return ze(n, function (t, e) {
                  (t = M(t, e)), n.point(t[0], t[1]);
                });
              }
        )(t);
      }
      function E(t, e, n, i, r, a, o, s, u, c, l, h, d, f) {
        var g = o - t,
          p = s - e,
          x = g * g + p * p;
        if (4 * V < x && d--) {
          var _ = i + c,
            v = r + l,
            y = a + h,
            m = Math.sqrt(_ * _ + v * v + y * y),
            w = Math.asin((y /= m)),
            S =
              ia(ia(y) - 1) < ma || ia(n - u) < ma
                ? (n + u) / 2
                : Math.atan2(v, _),
            b = M(S, w),
            A = b[0],
            T = b[1],
            P = A - t,
            C = T - e,
            L = p * P - g * C;
          (V < (L * L) / x ||
            0.3 < ia((g * P + p * C) / x - 0.5) ||
            i * c + r * l + a * h < G) &&
            (E(t, e, n, i, r, a, A, T, S, (_ /= m), (v /= m), y, d, f),
            f.point(A, T),
            E(A, T, S, _, v, y, o, s, u, c, l, h, d, f));
        }
      }
      var V = 0.5,
        G = Math.cos(30 * Pa),
        w = 16;
      return (
        (e.precision = function (t) {
          return arguments.length
            ? ((w = 0 < (V = t * t) && 16), e)
            : Math.sqrt(V);
        }),
        e
      );
    }
    function Fe(t) {
      this.stream = t;
    }
    function ze(t, e) {
      return {
        point: e,
        sphere: function () {
          t.sphere();
        },
        lineStart: function () {
          t.lineStart();
        },
        lineEnd: function () {
          t.lineEnd();
        },
        polygonStart: function () {
          t.polygonStart();
        },
        polygonEnd: function () {
          t.polygonEnd();
        },
      };
    }
    function Xe(t) {
      return He(function () {
        return t;
      })();
    }
    function He(t) {
      function e(t) {
        return [(t = s(t[0] * Pa, t[1] * Pa))[0] * d + u, c - t[1] * d];
      }
      function n(t) {
        return (
          (t = s.invert((t[0] - u) / d, (c - t[1]) / d)) && [
            t[0] * Ca,
            t[1] * Ca,
          ]
        );
      }
      function i() {
        s = _e((o = Ue(_, v, y)), a);
        var t = a(p, x);
        return (u = f - t[0] * d), (c = g + t[1] * d), r();
      }
      function r() {
        return l && ((l.valid = !1), (l = null)), e;
      }
      var a,
        o,
        s,
        u,
        c,
        l,
        h = Ne(function (t, e) {
          return [(t = a(t, e))[0] * d + u, c - t[1] * d];
        }),
        d = 150,
        f = 480,
        g = 250,
        p = 0,
        x = 0,
        _ = 0,
        v = 0,
        y = 0,
        m = wo,
        w = R,
        S = null,
        b = null;
      return (
        (e.stream = function (t) {
          return l && (l.valid = !1), ((l = Ye(m(o, h(w(t))))).valid = !0), l;
        }),
        (e.clipAngle = function (t) {
          return arguments.length
            ? ((m =
                null == t
                  ? ((S = t), wo)
                  : (function (r) {
                      function f(t, e) {
                        return Math.cos(t) * Math.cos(e) > P;
                      }
                      function g(t, e, n) {
                        var i = [1, 0, 0],
                          r = oe(re(t), re(e)),
                          a = ae(r, r),
                          o = r[0],
                          s = a - o * o;
                        if (!s) return !n && t;
                        var u = (P * a) / s,
                          c = (-P * o) / s,
                          l = oe(i, r),
                          h = ue(i, u);
                        se(h, ue(r, c));
                        var d = l,
                          f = ae(h, d),
                          g = ae(d, d),
                          p = f * f - g * (ae(h, h) - 1);
                        if (!(p < 0)) {
                          var x = Math.sqrt(p),
                            _ = ue(d, (-f - x) / g);
                          if ((se(_, h), (_ = le(_)), !n)) return _;
                          var v,
                            y = t[0],
                            m = e[0],
                            w = t[1],
                            S = e[1];
                          m < y && ((v = y), (y = m), (m = v));
                          var b = m - y,
                            A = ia(b - Sa) < ma;
                          if (
                            (!A && S < w && ((v = w), (w = S), (S = v)),
                            A || b < ma
                              ? A
                                ? (0 < w + S) ^
                                  (_[1] < (ia(_[0] - y) < ma ? w : S))
                                : w <= _[1] && _[1] <= S
                              : (Sa < b) ^ (y <= _[0] && _[0] <= m))
                          ) {
                            var T = ue(d, (-f + x) / g);
                            return se(T, h), [_, le(T)];
                          }
                        }
                      }
                      function p(t, e) {
                        var n = x ? r : Sa - r,
                          i = 0;
                        return (
                          t < -n ? (i |= 1) : n < t && (i |= 2),
                          e < -n ? (i |= 4) : n < e && (i |= 8),
                          i
                        );
                      }
                      var P = Math.cos(r),
                        x = 0 < P,
                        _ = ia(P) > ma;
                      return Se(
                        f,
                        function (s) {
                          var u, c, l, h, d;
                          return {
                            lineStart: function () {
                              (h = l = !1), (d = 1);
                            },
                            point: function (t, e) {
                              var n,
                                i = [t, e],
                                r = f(t, e),
                                a = x
                                  ? r
                                    ? 0
                                    : p(t, e)
                                  : r
                                    ? p(t + (t < 0 ? Sa : -Sa), e)
                                    : 0;
                              if (
                                (!u && (h = l = r) && s.lineStart(),
                                r !== l &&
                                  ((n = g(u, i)),
                                  (he(u, n) || he(i, n)) &&
                                    ((i[0] += ma),
                                    (i[1] += ma),
                                    (r = f(i[0], i[1])))),
                                r !== l)
                              )
                                (d = 0),
                                  r
                                    ? (s.lineStart(),
                                      (n = g(i, u)),
                                      s.point(n[0], n[1]))
                                    : ((n = g(u, i)),
                                      s.point(n[0], n[1]),
                                      s.lineEnd()),
                                  (u = n);
                              else if (_ && u && x ^ r) {
                                var o;
                                a & c ||
                                  !(o = g(i, u, !0)) ||
                                  ((d = 0),
                                  x
                                    ? (s.lineStart(),
                                      s.point(o[0][0], o[0][1]),
                                      s.point(o[1][0], o[1][1]),
                                      s.lineEnd())
                                    : (s.point(o[1][0], o[1][1]),
                                      s.lineEnd(),
                                      s.lineStart(),
                                      s.point(o[0][0], o[0][1])));
                              }
                              !r || (u && he(u, i)) || s.point(i[0], i[1]),
                                (u = i),
                                (l = r),
                                (c = a);
                            },
                            lineEnd: function () {
                              l && s.lineEnd(), (u = null);
                            },
                            clean: function () {
                              return d | ((h && l) << 1);
                            },
                          };
                        },
                        Ze(r, 6 * Pa),
                        x ? [0, -r] : [-Sa, r - Sa],
                      );
                    })((S = +t) * Pa)),
              r())
            : S;
        }),
        (e.clipExtent = function (t) {
          return arguments.length
            ? ((w = (b = t) ? Ce(t[0][0], t[0][1], t[1][0], t[1][1]) : R), r())
            : b;
        }),
        (e.scale = function (t) {
          return arguments.length ? ((d = +t), i()) : d;
        }),
        (e.translate = function (t) {
          return arguments.length ? ((f = +t[0]), (g = +t[1]), i()) : [f, g];
        }),
        (e.center = function (t) {
          return arguments.length
            ? ((p = (t[0] % 360) * Pa), (x = (t[1] % 360) * Pa), i())
            : [p * Ca, x * Ca];
        }),
        (e.rotate = function (t) {
          return arguments.length
            ? ((_ = (t[0] % 360) * Pa),
              (v = (t[1] % 360) * Pa),
              (y = 2 < t.length ? (t[2] % 360) * Pa : 0),
              i())
            : [_ * Ca, v * Ca, y * Ca];
        }),
        qr.rebind(e, h, "precision"),
        function () {
          return (
            (a = t.apply(this, arguments)), (e.invert = a.invert && n), i()
          );
        }
      );
    }
    function Ye(n) {
      return ze(n, function (t, e) {
        n.point(t * Pa, e * Pa);
      });
    }
    function Be(t, e) {
      return [t, e];
    }
    function je(t, e) {
      return [Sa < t ? t - ba : t < -Sa ? t + ba : t, e];
    }
    function Ue(t, e, n) {
      return t
        ? e || n
          ? _e(We(t), Qe(e, n))
          : We(t)
        : e || n
          ? Qe(e, n)
          : je;
    }
    function qe(n) {
      return function (t, e) {
        return [Sa < (t += n) ? t - ba : t < -Sa ? t + ba : t, e];
      };
    }
    function We(t) {
      var e = qe(t);
      return (e.invert = qe(-t)), e;
    }
    function Qe(t, e) {
      function n(t, e) {
        var n = Math.cos(e),
          i = Math.cos(t) * n,
          r = Math.sin(t) * n,
          a = Math.sin(e),
          o = a * s + i * u;
        return [Math.atan2(r * c - o * l, i * s - a * u), $(o * c + r * l)];
      }
      var s = Math.cos(t),
        u = Math.sin(t),
        c = Math.cos(e),
        l = Math.sin(e);
      return (
        (n.invert = function (t, e) {
          var n = Math.cos(e),
            i = Math.cos(t) * n,
            r = Math.sin(t) * n,
            a = Math.sin(e),
            o = a * c - r * l;
          return [Math.atan2(r * c + a * l, i * s + o * u), $(o * s - i * u)];
        }),
        n
      );
    }
    function Ze(s, u) {
      var c = Math.cos(s),
        l = Math.sin(s);
      return function (t, e, n, i) {
        var r = n * u;
        null != t
          ? ((t = Ke(c, t)),
            (e = Ke(c, e)),
            (0 < n ? t < e : e < t) && (t += n * ba))
          : ((t = s + n * ba), (e = s - 0.5 * r));
        for (var a, o = t; 0 < n ? e < o : o < e; o -= r)
          i.point((a = le([c, -l * Math.cos(o), -l * Math.sin(o)]))[0], a[1]);
      };
    }
    function Ke(t, e) {
      var n = re(e);
      (n[0] -= t), ce(n);
      var i = K(-n[1]);
      return ((-n[2] < 0 ? -i : i) + 2 * Math.PI - ma) % (2 * Math.PI);
    }
    function $e(t, e, n) {
      var i = qr.range(t, e - ma, n).concat(e);
      return function (e) {
        return i.map(function (t) {
          return [e, t];
        });
      };
    }
    function Je(t, e, n) {
      var i = qr.range(t, e - ma, n).concat(e);
      return function (e) {
        return i.map(function (t) {
          return [t, e];
        });
      };
    }
    function tn(t) {
      return t.source;
    }
    function en(t) {
      return t.target;
    }
    function nn(a, o) {
      function t(t, e) {
        var n = Math.cos(t),
          i = Math.cos(e),
          r = a(n * i);
        return [r * i * Math.sin(t), r * Math.sin(e)];
      }
      return (
        (t.invert = function (t, e) {
          var n = Math.sqrt(t * t + e * e),
            i = o(n),
            r = Math.sin(i),
            a = Math.cos(i);
          return [Math.atan2(t * r, n * a), Math.asin(n && (e * r) / n)];
        }),
        t
      );
    }
    function rn(t, e) {
      function n(t, e) {
        0 < o ? e < -Ta + ma && (e = -Ta + ma) : Ta - ma < e && (e = Ta - ma);
        var n = o / Math.pow(r(e), a);
        return [n * Math.sin(a * t), o - n * Math.cos(a * t)];
      }
      var i = Math.cos(t),
        r = function (t) {
          return Math.tan(Sa / 4 + t / 2);
        },
        a =
          t === e
            ? Math.sin(t)
            : Math.log(i / Math.cos(e)) / Math.log(r(e) / r(t)),
        o = (i * Math.pow(r(t), a)) / a;
      return a
        ? ((n.invert = function (t, e) {
            var n = o - e,
              i = Q(a) * Math.sqrt(t * t + n * n);
            return [
              Math.atan2(t, n) / a,
              2 * Math.atan(Math.pow(o / i, 1 / a)) - Ta,
            ];
          }),
          n)
        : on;
    }
    function an(t, e) {
      function n(t, e) {
        var n = a - e;
        return [n * Math.sin(r * t), a - n * Math.cos(r * t)];
      }
      var i = Math.cos(t),
        r = t === e ? Math.sin(t) : (i - Math.cos(e)) / (e - t),
        a = i / r + t;
      return ia(r) < ma
        ? Be
        : ((n.invert = function (t, e) {
            var n = a - e;
            return [Math.atan2(t, n) / r, a - Q(r) * Math.sqrt(t * t + n * n)];
          }),
          n);
    }
    function on(t, e) {
      return [t, Math.log(Math.tan(Sa / 4 + e / 2))];
    }
    function sn(t) {
      var r,
        a = Xe(t),
        o = a.scale,
        s = a.translate,
        u = a.clipExtent;
      return (
        (a.scale = function () {
          var t = o.apply(a, arguments);
          return t === a ? (r ? a.clipExtent(null) : a) : t;
        }),
        (a.translate = function () {
          var t = s.apply(a, arguments);
          return t === a ? (r ? a.clipExtent(null) : a) : t;
        }),
        (a.clipExtent = function (t) {
          var e = u.apply(a, arguments);
          if (e === a) {
            if ((r = null == t)) {
              var n = Sa * o(),
                i = s();
              u([
                [i[0] - n, i[1] - n],
                [i[0] + n, i[1] + n],
              ]);
            }
          } else r && (e = null);
          return e;
        }),
        a.clipExtent(null)
      );
    }
    function un(t, e) {
      return [Math.log(Math.tan(Sa / 4 + e / 2)), -t];
    }
    function cn(t) {
      return t[0];
    }
    function ln(t) {
      return t[1];
    }
    function hn(t) {
      for (var e = t.length, n = [0, 1], i = 2, r = 2; r < e; r++) {
        for (; 1 < i && Z(t[n[i - 2]], t[n[i - 1]], t[r]) <= 0; ) --i;
        n[i++] = r;
      }
      return n.slice(0, i);
    }
    function dn(t, e) {
      return t[0] - e[0] || t[1] - e[1];
    }
    function fn(t, e, n) {
      return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0]);
    }
    function gn(t, e, n, i) {
      var r = t[0],
        a = n[0],
        o = e[0] - r,
        s = i[0] - a,
        u = t[1],
        c = n[1],
        l = e[1] - u,
        h = i[1] - c,
        d = (s * (u - c) - h * (r - a)) / (h * o - s * l);
      return [r + d * o, u + d * l];
    }
    function pn(t) {
      var e = t[0],
        n = t[t.length - 1];
      return !(e[0] - n[0] || e[1] - n[1]);
    }
    function xn() {
      Rn(this), (this.edge = this.site = this.circle = null);
    }
    function _n(t) {
      var e = jo.pop() || new xn();
      return (e.site = t), e;
    }
    function vn(t) {
      Cn(t), Ho.remove(t), jo.push(t), Rn(t);
    }
    function yn(t) {
      var e = t.circle,
        n = e.x,
        i = e.cy,
        r = { x: n, y: i },
        a = t.P,
        o = t.N,
        s = [t];
      vn(t);
      for (
        var u = a;
        u.circle && ia(n - u.circle.x) < ma && ia(i - u.circle.cy) < ma;

      )
        (a = u.P), s.unshift(u), vn(u), (u = a);
      s.unshift(u), Cn(u);
      for (
        var c = o;
        c.circle && ia(n - c.circle.x) < ma && ia(i - c.circle.cy) < ma;

      )
        (o = c.N), s.push(c), vn(c), (c = o);
      s.push(c), Cn(c);
      var l,
        h = s.length;
      for (l = 1; l < h; ++l)
        (c = s[l]), (u = s[l - 1]), Vn(c.edge, u.site, c.site, r);
      (u = s[0]),
        ((c = s[h - 1]).edge = En(u.site, c.site, null, r)),
        Pn(u),
        Pn(c);
    }
    function mn(t) {
      for (var e, n, i, r, a = t.x, o = t.y, s = Ho._; s; )
        if (((i = wn(s, o) - a), ma < i)) s = s.L;
        else {
          if (((r = a - Sn(s, o)), !(ma < r))) {
            -ma < i
              ? ((e = s.P), (n = s))
              : -ma < r
                ? (n = (e = s).N)
                : (e = n = s);
            break;
          }
          if (!s.R) {
            e = s;
            break;
          }
          s = s.R;
        }
      var u = _n(t);
      if ((Ho.insert(e, u), e || n)) {
        if (e === n)
          return (
            Cn(e),
            (n = _n(e.site)),
            Ho.insert(u, n),
            (u.edge = n.edge = En(e.site, u.site)),
            Pn(e),
            void Pn(n)
          );
        if (!n) return void (u.edge = En(e.site, u.site));
        Cn(e), Cn(n);
        var c = e.site,
          l = c.x,
          h = c.y,
          d = t.x - l,
          f = t.y - h,
          g = n.site,
          p = g.x - l,
          x = g.y - h,
          _ = 2 * (d * x - f * p),
          v = d * d + f * f,
          y = p * p + x * x,
          m = { x: (x * v - f * y) / _ + l, y: (d * y - p * v) / _ + h };
        Vn(n.edge, c, g, m),
          (u.edge = En(c, t, null, m)),
          (n.edge = En(t, g, null, m)),
          Pn(e),
          Pn(n);
      }
    }
    function wn(t, e) {
      var n = t.site,
        i = n.x,
        r = n.y,
        a = r - e;
      if (!a) return i;
      var o = t.P;
      if (!o) return -1 / 0;
      var s = (n = o.site).x,
        u = n.y,
        c = u - e;
      if (!c) return s;
      var l = s - i,
        h = 1 / a - 1 / c,
        d = l / c;
      return h
        ? (-d +
            Math.sqrt(
              d * d - 2 * h * ((l * l) / (-2 * c) - u + c / 2 + r - a / 2),
            )) /
            h +
            i
        : (i + s) / 2;
    }
    function Sn(t, e) {
      var n = t.N;
      if (n) return wn(n, e);
      var i = t.site;
      return i.y === e ? i.x : 1 / 0;
    }
    function bn(t) {
      (this.site = t), (this.edges = []);
    }
    function An(t, e) {
      return e.angle - t.angle;
    }
    function Tn() {
      Rn(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function Pn(t) {
      var e = t.P,
        n = t.N;
      if (e && n) {
        var i = e.site,
          r = t.site,
          a = n.site;
        if (i !== a) {
          var o = r.x,
            s = r.y,
            u = i.x - o,
            c = i.y - s,
            l = a.x - o,
            h = 2 * (u * (x = a.y - s) - c * l);
          if (!(-wa <= h)) {
            var d = u * u + c * c,
              f = l * l + x * x,
              g = (x * d - c * f) / h,
              p = (u * f - l * d) / h,
              x = p + s,
              _ = Uo.pop() || new Tn();
            (_.arc = t),
              (_.site = r),
              (_.x = g + o),
              (_.y = x + Math.sqrt(g * g + p * p)),
              (_.cy = x),
              (t.circle = _);
            for (var v = null, y = Bo._; y; )
              if (_.y < y.y || (_.y === y.y && _.x <= y.x)) {
                if (!y.L) {
                  v = y.P;
                  break;
                }
                y = y.L;
              } else {
                if (!y.R) {
                  v = y;
                  break;
                }
                y = y.R;
              }
            Bo.insert(v, _), v || (Yo = _);
          }
        }
      }
    }
    function Cn(t) {
      var e = t.circle;
      e &&
        (e.P || (Yo = e.N), Bo.remove(e), Uo.push(e), Rn(e), (t.circle = null));
    }
    function Ln(t, e) {
      var n = t.b;
      if (n) return !0;
      var i,
        r,
        a = t.a,
        o = e[0][0],
        s = e[1][0],
        u = e[0][1],
        c = e[1][1],
        l = t.l,
        h = t.r,
        d = l.x,
        f = l.y,
        g = h.x,
        p = h.y,
        x = (d + g) / 2,
        _ = (f + p) / 2;
      if (p === f) {
        if (x < o || s <= x) return;
        if (g < d) {
          if (a) {
            if (a.y >= c) return;
          } else a = { x: x, y: u };
          n = { x: x, y: c };
        } else {
          if (a) {
            if (a.y < u) return;
          } else a = { x: x, y: c };
          n = { x: x, y: u };
        }
      } else if (((r = _ - (i = (d - g) / (p - f)) * x), i < -1 || 1 < i))
        if (g < d) {
          if (a) {
            if (a.y >= c) return;
          } else a = { x: (u - r) / i, y: u };
          n = { x: (c - r) / i, y: c };
        } else {
          if (a) {
            if (a.y < u) return;
          } else a = { x: (c - r) / i, y: c };
          n = { x: (u - r) / i, y: u };
        }
      else if (f < p) {
        if (a) {
          if (a.x >= s) return;
        } else a = { x: o, y: i * o + r };
        n = { x: s, y: i * s + r };
      } else {
        if (a) {
          if (a.x < o) return;
        } else a = { x: s, y: i * s + r };
        n = { x: o, y: i * o + r };
      }
      return (t.a = a), (t.b = n), !0;
    }
    function Mn(t, e) {
      (this.l = t), (this.r = e), (this.a = this.b = null);
    }
    function En(t, e, n, i) {
      var r = new Mn(t, e);
      return (
        zo.push(r),
        n && Vn(r, t, e, n),
        i && Vn(r, e, t, i),
        Xo[t.i].edges.push(new Gn(r, t, e)),
        Xo[e.i].edges.push(new Gn(r, e, t)),
        r
      );
    }
    function Vn(t, e, n, i) {
      t.a || t.b
        ? t.l === n
          ? (t.b = i)
          : (t.a = i)
        : ((t.a = i), (t.l = e), (t.r = n));
    }
    function Gn(t, e, n) {
      var i = t.a,
        r = t.b;
      (this.edge = t),
        (this.site = e),
        (this.angle = n
          ? Math.atan2(n.y - e.y, n.x - e.x)
          : t.l === e
            ? Math.atan2(r.x - i.x, i.y - r.y)
            : Math.atan2(i.x - r.x, r.y - i.y));
    }
    function kn() {
      this._ = null;
    }
    function Rn(t) {
      t.U = t.C = t.L = t.R = t.P = t.N = null;
    }
    function On(t, e) {
      var n = e,
        i = e.R,
        r = n.U;
      r ? (r.L === n ? (r.L = i) : (r.R = i)) : (t._ = i),
        (i.U = r),
        (n.U = i),
        (n.R = i.L),
        n.R && (n.R.U = n),
        (i.L = n);
    }
    function In(t, e) {
      var n = e,
        i = e.L,
        r = n.U;
      r ? (r.L === n ? (r.L = i) : (r.R = i)) : (t._ = i),
        (i.U = r),
        (n.U = i),
        (n.L = i.R),
        n.L && (n.L.U = n),
        (i.R = n);
    }
    function Dn(t) {
      for (; t.L; ) t = t.L;
      return t;
    }
    function Nn(t, e) {
      var n,
        i,
        r,
        a = t.sort(Fn).pop();
      for (zo = [], Xo = new Array(t.length), Ho = new kn(), Bo = new kn(); ; )
        if (((r = Yo), a && (!r || a.y < r.y || (a.y === r.y && a.x < r.x))))
          (a.x === n && a.y === i) ||
            ((Xo[a.i] = new bn(a)), mn(a), (n = a.x), (i = a.y)),
            (a = t.pop());
        else {
          if (!r) break;
          yn(r.arc);
        }
      e &&
        ((function (t) {
          for (
            var e,
              n = zo,
              i = Pe(t[0][0], t[0][1], t[1][0], t[1][1]),
              r = n.length;
            r--;

          )
            (!Ln((e = n[r]), t) ||
              !i(e) ||
              (ia(e.a.x - e.b.x) < ma && ia(e.a.y - e.b.y) < ma)) &&
              ((e.a = e.b = null), n.splice(r, 1));
        })(e),
        (function (t) {
          for (
            var e,
              n,
              i,
              r,
              a,
              o,
              s,
              u,
              c,
              l,
              h = t[0][0],
              d = t[1][0],
              f = t[0][1],
              g = t[1][1],
              p = Xo,
              x = p.length;
            x--;

          )
            if ((a = p[x]) && a.prepare())
              for (u = (s = a.edges).length, o = 0; o < u; )
                (i = (l = s[o].end()).x),
                  (r = l.y),
                  (e = (c = s[++o % u].start()).x),
                  (n = c.y),
                  (ia(i - e) > ma || ia(r - n) > ma) &&
                    (s.splice(
                      o,
                      0,
                      new Gn(
                        ((_ = a.site),
                        (v = l),
                        (y =
                          ia(i - h) < ma && ma < g - r
                            ? { x: h, y: ia(e - h) < ma ? n : g }
                            : ia(r - g) < ma && ma < d - i
                              ? { x: ia(n - g) < ma ? e : d, y: g }
                              : ia(i - d) < ma && ma < r - f
                                ? { x: d, y: ia(e - d) < ma ? n : f }
                                : ia(r - f) < ma && ma < i - h
                                  ? { x: ia(n - f) < ma ? e : h, y: f }
                                  : null),
                        (m = void 0),
                        ((m = new Mn(_, null)).a = v),
                        (m.b = y),
                        zo.push(m),
                        m),
                        a.site,
                        null,
                      ),
                    ),
                    ++u);
          var _, v, y, m;
        })(e));
      var o = { cells: Xo, edges: zo };
      return (Ho = Bo = zo = Xo = null), o;
    }
    function Fn(t, e) {
      return e.y - t.y || e.x - t.x;
    }
    function zn(t) {
      return t.x;
    }
    function Xn(t) {
      return t.y;
    }
    function Hn(t, e) {
      (t = qr.rgb(t)), (e = qr.rgb(e));
      var n = t.r,
        i = t.g,
        r = t.b,
        a = e.r - n,
        o = e.g - i,
        s = e.b - r;
      return function (t) {
        return (
          "#" +
          pt(Math.round(n + a * t)) +
          pt(Math.round(i + o * t)) +
          pt(Math.round(r + s * t))
        );
      };
    }
    function Yn(t, e) {
      var n,
        i = {},
        r = {};
      for (n in t) n in e ? (i[n] = Un(t[n], e[n])) : (r[n] = t[n]);
      for (n in e) n in t || (r[n] = e[n]);
      return function (t) {
        for (n in i) r[n] = i[n](t);
        return r;
      };
    }
    function Bn(e, n) {
      return (
        (e = +e),
        (n = +n),
        function (t) {
          return e * (1 - t) + n * t;
        }
      );
    }
    function jn(t, i) {
      var e,
        n,
        r,
        a = (Wo.lastIndex = Qo.lastIndex = 0),
        o = -1,
        s = [],
        u = [];
      for (t += "", i += ""; (e = Wo.exec(t)) && (n = Qo.exec(i)); )
        (r = n.index) > a &&
          ((r = i.slice(a, r)), s[o] ? (s[o] += r) : (s[++o] = r)),
          (e = e[0]) === (n = n[0])
            ? s[o]
              ? (s[o] += n)
              : (s[++o] = n)
            : ((s[++o] = null), u.push({ i: o, x: Bn(e, n) })),
          (a = Qo.lastIndex);
      return (
        a < i.length && ((r = i.slice(a)), s[o] ? (s[o] += r) : (s[++o] = r)),
        s.length < 2
          ? u[0]
            ? ((i = u[0].x),
              function (t) {
                return i(t) + "";
              })
            : function () {
                return i;
              }
          : ((i = u.length),
            function (t) {
              for (var e, n = 0; n < i; ++n) s[(e = u[n]).i] = e.x(t);
              return s.join("");
            })
      );
    }
    function Un(t, e) {
      for (
        var n, i = qr.interpolators.length;
        0 <= --i && !(n = qr.interpolators[i](t, e));

      );
      return n;
    }
    function qn(t, e) {
      var n,
        i = [],
        r = [],
        a = t.length,
        o = e.length,
        s = Math.min(t.length, e.length);
      for (n = 0; n < s; ++n) i.push(Un(t[n], e[n]));
      for (; n < a; ++n) r[n] = t[n];
      for (; n < o; ++n) r[n] = e[n];
      return function (t) {
        for (n = 0; n < s; ++n) r[n] = i[n](t);
        return r;
      };
    }
    function Wn(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    }
    function Qn(e) {
      return function (t) {
        return 0.5 * (t < 0.5 ? e(2 * t) : 2 - e(2 - 2 * t));
      };
    }
    function Zn(t) {
      return t * t;
    }
    function Kn(t) {
      return t * t * t;
    }
    function $n(t) {
      if (t <= 0) return 0;
      if (1 <= t) return 1;
      var e = t * t,
        n = e * t;
      return 4 * (t < 0.5 ? n : 3 * (t - e) + n - 0.75);
    }
    function Jn(t) {
      return 1 - Math.cos(t * Ta);
    }
    function ti(t) {
      return Math.pow(2, 10 * (t - 1));
    }
    function ei(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    function ni(t) {
      return t < 1 / 2.75
        ? 7.5625 * t * t
        : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
    function ii(e, n) {
      return (
        (n -= e),
        function (t) {
          return Math.round(e + n * t);
        }
      );
    }
    function ri(t) {
      var e,
        n,
        i,
        r = [t.a, t.b],
        a = [t.c, t.d],
        o = oi(r),
        s = ai(r, a),
        u =
          oi((((e = a)[0] += (i = -s) * (n = r)[0]), (e[1] += i * n[1]), e)) ||
          0;
      r[0] * a[1] < a[0] * r[1] &&
        ((r[0] *= -1), (r[1] *= -1), (o *= -1), (s *= -1)),
        (this.rotate =
          (o ? Math.atan2(r[1], r[0]) : Math.atan2(-a[0], a[1])) * Ca),
        (this.translate = [t.e, t.f]),
        (this.scale = [o, u]),
        (this.skew = u ? Math.atan2(s, u) * Ca : 0);
    }
    function ai(t, e) {
      return t[0] * e[0] + t[1] * e[1];
    }
    function oi(t) {
      var e = Math.sqrt(ai(t, t));
      return e && ((t[0] /= e), (t[1] /= e)), e;
    }
    function si(t) {
      return t.length ? t.pop() + "," : "";
    }
    function ui(t, e) {
      var n,
        i,
        r,
        a,
        o,
        s,
        u,
        c,
        l = [],
        h = [];
      return (
        (t = qr.transform(t)),
        (e = qr.transform(e)),
        (function (t, e, n, i) {
          if (t[0] !== e[0] || t[1] !== e[1]) {
            var r = n.push("translate(", null, ",", null, ")");
            i.push(
              { i: r - 4, x: Bn(t[0], e[0]) },
              { i: r - 2, x: Bn(t[1], e[1]) },
            );
          } else (e[0] || e[1]) && n.push("translate(" + e + ")");
        })(t.translate, e.translate, l, h),
        (o = t.rotate),
        (s = e.rotate),
        (u = l),
        (c = h),
        o !== s
          ? (180 < o - s ? (s += 360) : 180 < s - o && (o += 360),
            c.push({
              i: u.push(si(u) + "rotate(", null, ")") - 2,
              x: Bn(o, s),
            }))
          : s && u.push(si(u) + "rotate(" + s + ")"),
        (n = t.skew),
        (i = e.skew),
        (r = l),
        (a = h),
        n !== i
          ? a.push({ i: r.push(si(r) + "skewX(", null, ")") - 2, x: Bn(n, i) })
          : i && r.push(si(r) + "skewX(" + i + ")"),
        (function (t, e, n, i) {
          if (t[0] !== e[0] || t[1] !== e[1]) {
            var r = n.push(si(n) + "scale(", null, ",", null, ")");
            i.push(
              { i: r - 4, x: Bn(t[0], e[0]) },
              { i: r - 2, x: Bn(t[1], e[1]) },
            );
          } else
            (1 === e[0] && 1 === e[1]) || n.push(si(n) + "scale(" + e + ")");
        })(t.scale, e.scale, l, h),
        (t = e = null),
        function (t) {
          for (var e, n = -1, i = h.length; ++n < i; ) l[(e = h[n]).i] = e.x(t);
          return l.join("");
        }
      );
    }
    function ci(e, n) {
      return (
        (n = (n -= e = +e) || 1 / n),
        function (t) {
          return (t - e) / n;
        }
      );
    }
    function li(e, n) {
      return (
        (n = (n -= e = +e) || 1 / n),
        function (t) {
          return Math.max(0, Math.min(1, (t - e) / n));
        }
      );
    }
    function hi(t) {
      for (
        var e = t.source,
          n = t.target,
          i = (function (t, e) {
            if (t === e) return t;
            for (
              var n = di(t), i = di(e), r = n.pop(), a = i.pop(), o = null;
              r === a;

            )
              (o = r), (r = n.pop()), (a = i.pop());
            return o;
          })(e, n),
          r = [e];
        e !== i;

      )
        (e = e.parent), r.push(e);
      for (var a = r.length; n !== i; ) r.splice(a, 0, n), (n = n.parent);
      return r;
    }
    function di(t) {
      for (var e = [], n = t.parent; null != n; )
        e.push(t), (n = (t = n).parent);
      return e.push(t), e;
    }
    function fi(t) {
      t.fixed |= 2;
    }
    function gi(t) {
      t.fixed &= -7;
    }
    function pi(t) {
      (t.fixed |= 4), (t.px = t.x), (t.py = t.y);
    }
    function xi(t) {
      t.fixed &= -5;
    }
    function _i(t, e) {
      return (
        qr.rebind(t, e, "sort", "children", "value"),
        ((t.nodes = t).links = bi),
        t
      );
    }
    function vi(t, e) {
      for (var n = [t]; null != (t = n.pop()); )
        if ((e(t), (r = t.children) && (i = r.length)))
          for (var i, r; 0 <= --i; ) n.push(r[i]);
    }
    function yi(t, e) {
      for (var n = [t], i = []; null != (t = n.pop()); )
        if ((i.push(t), (a = t.children) && (r = a.length)))
          for (var r, a, o = -1; ++o < r; ) n.push(a[o]);
      for (; null != (t = i.pop()); ) e(t);
    }
    function mi(t) {
      return t.children;
    }
    function wi(t) {
      return t.value;
    }
    function Si(t, e) {
      return e.value - t.value;
    }
    function bi(t) {
      return qr.merge(
        t.map(function (e) {
          return (e.children || []).map(function (t) {
            return { source: e, target: t };
          });
        }),
      );
    }
    function Ai(t) {
      return t.x;
    }
    function Ti(t) {
      return t.y;
    }
    function Pi(t, e, n) {
      (t.y0 = e), (t.y = n);
    }
    function Ci(t) {
      return qr.range(t.length);
    }
    function Li(t) {
      for (var e = -1, n = t[0].length, i = []; ++e < n; ) i[e] = 0;
      return i;
    }
    function Mi(t) {
      for (var e, n = 1, i = 0, r = t[0][1], a = t.length; n < a; ++n)
        (e = t[n][1]) > r && ((i = n), (r = e));
      return i;
    }
    function Ei(t) {
      return t.reduce(Vi, 0);
    }
    function Vi(t, e) {
      return t + e[1];
    }
    function Gi(t, e) {
      return ki(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1));
    }
    function ki(t, e) {
      for (var n = -1, i = +t[0], r = (t[1] - i) / e, a = []; ++n <= e; )
        a[n] = r * n + i;
      return a;
    }
    function Ri(t) {
      return [qr.min(t), qr.max(t)];
    }
    function Oi(t, e) {
      return t.value - e.value;
    }
    function Ii(t, e) {
      var n = t._pack_next;
      ((t._pack_next = e)._pack_prev = t), ((e._pack_next = n)._pack_prev = e);
    }
    function Di(t, e) {
      (t._pack_next = e)._pack_prev = t;
    }
    function Ni(t, e) {
      var n = e.x - t.x,
        i = e.y - t.y,
        r = t.r + e.r;
      return n * n + i * i < 0.999 * r * r;
    }
    function Fi(t) {
      function e(t) {
        (l = Math.min(t.x - t.r, l)),
          (h = Math.max(t.x + t.r, h)),
          (d = Math.min(t.y - t.r, d)),
          (f = Math.max(t.y + t.r, f));
      }
      if ((n = t.children) && (c = n.length)) {
        var n,
          i,
          r,
          a,
          o,
          s,
          u,
          c,
          l = 1 / 0,
          h = -1 / 0,
          d = 1 / 0,
          f = -1 / 0;
        if (
          (n.forEach(zi),
          ((i = n[0]).x = -i.r),
          (i.y = 0),
          e(i),
          1 < c && (((r = n[1]).x = r.r), (r.y = 0), e(r), 2 < c))
        )
          for (
            Hi(i, r, (a = n[2])),
              e(a),
              Ii(i, a),
              Ii((i._pack_prev = a), r),
              r = i._pack_next,
              o = 3;
            o < c;
            o++
          ) {
            Hi(i, r, (a = n[o]));
            var g = 0,
              p = 1,
              x = 1;
            for (s = r._pack_next; s !== r; s = s._pack_next, p++)
              if (Ni(s, a)) {
                g = 1;
                break;
              }
            if (1 == g)
              for (
                u = i._pack_prev;
                u !== s._pack_prev && !Ni(u, a);
                u = u._pack_prev, x++
              );
            g
              ? (p < x || (p == x && r.r < i.r)
                  ? Di(i, (r = s))
                  : Di((i = u), r),
                o--)
              : (Ii(i, a), e((r = a)));
          }
        var _ = (l + h) / 2,
          v = (d + f) / 2,
          y = 0;
        for (o = 0; o < c; o++)
          ((a = n[o]).x -= _),
            (a.y -= v),
            (y = Math.max(y, a.r + Math.sqrt(a.x * a.x + a.y * a.y)));
        (t.r = y), n.forEach(Xi);
      }
    }
    function zi(t) {
      t._pack_next = t._pack_prev = t;
    }
    function Xi(t) {
      delete t._pack_next, delete t._pack_prev;
    }
    function Hi(t, e, n) {
      var i = t.r + n.r,
        r = e.x - t.x,
        a = e.y - t.y;
      if (i && (r || a)) {
        var o = e.r + n.r,
          s = r * r + a * a,
          u = 0.5 + ((i *= i) - (o *= o)) / (2 * s),
          c =
            Math.sqrt(Math.max(0, 2 * o * (i + s) - (i -= s) * i - o * o)) /
            (2 * s);
        (n.x = t.x + u * r + c * a), (n.y = t.y + u * a - c * r);
      } else (n.x = t.x + i), (n.y = t.y);
    }
    function Yi(t, e) {
      return t.parent == e.parent ? 1 : 2;
    }
    function Bi(t) {
      var e = t.children;
      return e.length ? e[0] : t.t;
    }
    function ji(t) {
      var e,
        n = t.children;
      return (e = n.length) ? n[e - 1] : t.t;
    }
    function Ui(t) {
      return { x: t.x, y: t.y, dx: t.dx, dy: t.dy };
    }
    function qi(t, e) {
      var n = t.x + e[3],
        i = t.y + e[0],
        r = t.dx - e[1] - e[3],
        a = t.dy - e[0] - e[2];
      return (
        r < 0 && ((n += r / 2), (r = 0)),
        a < 0 && ((i += a / 2), (a = 0)),
        { x: n, y: i, dx: r, dy: a }
      );
    }
    function Wi(t) {
      var e = t[0],
        n = t[t.length - 1];
      return e < n ? [e, n] : [n, e];
    }
    function Qi(t) {
      return t.rangeExtent ? t.rangeExtent() : Wi(t.range());
    }
    function Zi(t, e, n, i) {
      var r = n(t[0], t[1]),
        a = i(e[0], e[1]);
      return function (t) {
        return a(r(t));
      };
    }
    function Ki(t, e) {
      var n,
        i = 0,
        r = t.length - 1,
        a = t[i],
        o = t[r];
      return (
        o < a && ((n = i), (i = r), (r = n), (n = a), (a = o), (o = n)),
        (t[i] = e.floor(a)),
        (t[r] = e.ceil(o)),
        t
      );
    }
    function $i(e) {
      return e
        ? {
            floor: function (t) {
              return Math.floor(t / e) * e;
            },
            ceil: function (t) {
              return Math.ceil(t / e) * e;
            },
          }
        : os;
    }
    function Ji(n, t, e, i) {
      var r = [],
        a = [],
        o = 0,
        s = Math.min(n.length, t.length) - 1;
      for (
        n[s] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse()));
        ++o <= s;

      )
        r.push(e(n[o - 1], n[o])), a.push(i(t[o - 1], t[o]));
      return function (t) {
        var e = qr.bisect(n, t, 1, s) - 1;
        return a[e](r[e](t));
      };
    }
    function tr(t, e) {
      return qr.rebind(t, e, "range", "rangeRound", "interpolate", "clamp");
    }
    function er(t, e) {
      return Ki(t, $i(nr(t, e)[2])), Ki(t, $i(nr(t, e)[2])), t;
    }
    function nr(t, e) {
      null == e && (e = 10);
      var n = Wi(t),
        i = n[1] - n[0],
        r = Math.pow(10, Math.floor(Math.log(i / e) / Math.LN10)),
        a = (e / i) * r;
      return (
        a <= 0.15 ? (r *= 10) : a <= 0.35 ? (r *= 5) : a <= 0.75 && (r *= 2),
        (n[0] = Math.ceil(n[0] / r) * r),
        (n[1] = Math.floor(n[1] / r) * r + 0.5 * r),
        (n[2] = r),
        n
      );
    }
    function ir(t, e) {
      return qr.range.apply(qr, nr(t, e));
    }
    function rr(t, e, n) {
      var i,
        r,
        a,
        o = nr(t, e);
      if (n) {
        var s = qa.exec(n);
        if ((s.shift(), "s" === s[8])) {
          var u = qr.formatPrefix(Math.max(ia(o[0]), ia(o[1])));
          return (
            s[7] || (s[7] = "." + ar(u.scale(o[2]))),
            (s[8] = "f"),
            (n = qr.format(s.join(""))),
            function (t) {
              return n(u.scale(t)) + u.symbol;
            }
          );
        }
        s[7] ||
          (s[7] =
            "." +
            ((i = s[8]),
            (a = ar((r = o)[2])),
            i in ss
              ? Math.abs(a - ar(Math.max(ia(r[0]), ia(r[1])))) + +("e" !== i)
              : a - 2 * ("%" === i))),
          (n = s.join(""));
      } else n = ",." + ar(o[2]) + "f";
      return qr.format(n);
    }
    function ar(t) {
      return -Math.floor(Math.log(t) / Math.LN10 + 0.01);
    }
    function or(e) {
      return function (t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
      };
    }
    function sr() {
      return 0;
    }
    function ur(t) {
      return t.innerRadius;
    }
    function cr(t) {
      return t.outerRadius;
    }
    function lr(t) {
      return t.startAngle;
    }
    function hr(t) {
      return t.endAngle;
    }
    function dr(t) {
      return t && t.padAngle;
    }
    function fr(t, e, n, i) {
      return 0 < (t - n) * e - (e - i) * t ? 0 : 1;
    }
    function gr(t, e, n, i, r) {
      var a = t[0] - e[0],
        o = t[1] - e[1],
        s = (r ? i : -i) / Math.sqrt(a * a + o * o),
        u = s * o,
        c = -s * a,
        l = t[0] + u,
        h = t[1] + c,
        d = e[0] + u,
        f = e[1] + c,
        g = (l + d) / 2,
        p = (h + f) / 2,
        x = d - l,
        _ = f - h,
        v = x * x + _ * _,
        y = n - i,
        m = l * f - d * h,
        w = (_ < 0 ? -1 : 1) * Math.sqrt(Math.max(0, y * y * v - m * m)),
        S = (m * _ - x * w) / v,
        b = (-m * x - _ * w) / v,
        A = (m * _ + x * w) / v,
        T = (-m * x + _ * w) / v,
        P = S - g,
        C = b - p,
        L = A - g,
        M = T - p;
      return (
        L * L + M * M < P * P + C * C && ((S = A), (b = T)),
        [
          [S - u, b - c],
          [(S * n) / y, (b * n) / y],
        ]
      );
    }
    function pr(c) {
      function e(t) {
        function e() {
          i.push("M", f(c(r), g));
        }
        for (
          var n, i = [], r = [], a = -1, o = t.length, s = wt(l), u = wt(h);
          ++a < o;

        )
          d.call(this, (n = t[a]), a)
            ? r.push([+s.call(this, n, a), +u.call(this, n, a)])
            : r.length && (e(), (r = []));
        return r.length && e(), i.length ? i.join("") : null;
      }
      var l = cn,
        h = ln,
        d = ve,
        f = xr,
        n = f.key,
        g = 0.7;
      return (
        (e.x = function (t) {
          return arguments.length ? ((l = t), e) : l;
        }),
        (e.y = function (t) {
          return arguments.length ? ((h = t), e) : h;
        }),
        (e.defined = function (t) {
          return arguments.length ? ((d = t), e) : d;
        }),
        (e.interpolate = function (t) {
          return arguments.length
            ? ((n =
                "function" == typeof t ? (f = t) : (f = ps.get(t) || xr).key),
              e)
            : n;
        }),
        (e.tension = function (t) {
          return arguments.length ? ((g = t), e) : g;
        }),
        e
      );
    }
    function xr(t) {
      return 1 < t.length ? t.join("L") : t + "Z";
    }
    function _r(t) {
      return t.join("L") + "Z";
    }
    function vr(t) {
      for (var e = 0, n = t.length, i = t[0], r = [i[0], ",", i[1]]; ++e < n; )
        r.push("V", (i = t[e])[1], "H", i[0]);
      return r.join("");
    }
    function yr(t) {
      for (var e = 0, n = t.length, i = t[0], r = [i[0], ",", i[1]]; ++e < n; )
        r.push("H", (i = t[e])[0], "V", i[1]);
      return r.join("");
    }
    function mr(t, e) {
      if (e.length < 1 || (t.length != e.length && t.length != e.length + 2))
        return xr(t);
      var n = t.length != e.length,
        i = "",
        r = t[0],
        a = t[1],
        o = e[0],
        s = o,
        u = 1;
      if (
        (n &&
          ((i +=
            "Q" +
            (a[0] - (2 * o[0]) / 3) +
            "," +
            (a[1] - (2 * o[1]) / 3) +
            "," +
            a[0] +
            "," +
            a[1]),
          (r = t[1]),
          (u = 2)),
        1 < e.length)
      ) {
        (s = e[1]),
          (a = t[u]),
          u++,
          (i +=
            "C" +
            (r[0] + o[0]) +
            "," +
            (r[1] + o[1]) +
            "," +
            (a[0] - s[0]) +
            "," +
            (a[1] - s[1]) +
            "," +
            a[0] +
            "," +
            a[1]);
        for (var c = 2; c < e.length; c++, u++)
          (a = t[u]),
            (s = e[c]),
            (i +=
              "S" +
              (a[0] - s[0]) +
              "," +
              (a[1] - s[1]) +
              "," +
              a[0] +
              "," +
              a[1]);
      }
      if (n) {
        var l = t[u];
        i +=
          "Q" +
          (a[0] + (2 * s[0]) / 3) +
          "," +
          (a[1] + (2 * s[1]) / 3) +
          "," +
          l[0] +
          "," +
          l[1];
      }
      return i;
    }
    function wr(t, e) {
      for (
        var n, i = [], r = (1 - e) / 2, a = t[0], o = t[1], s = 1, u = t.length;
        ++s < u;

      )
        (n = a),
          (a = o),
          (o = t[s]),
          i.push([r * (o[0] - n[0]), r * (o[1] - n[1])]);
      return i;
    }
    function Sr(t) {
      if (t.length < 3) return xr(t);
      var e = 1,
        n = t.length,
        i = t[0],
        r = i[0],
        a = i[1],
        o = [r, r, r, (i = t[1])[0]],
        s = [a, a, a, i[1]],
        u = [r, ",", a, "L", br(vs, o), ",", br(vs, s)];
      for (t.push(t[n - 1]); ++e <= n; )
        (i = t[e]),
          o.shift(),
          o.push(i[0]),
          s.shift(),
          s.push(i[1]),
          Ar(u, o, s);
      return t.pop(), u.push("L", i), u.join("");
    }
    function br(t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    }
    function Ar(t, e, n) {
      t.push(
        "C",
        br(xs, e),
        ",",
        br(xs, n),
        ",",
        br(_s, e),
        ",",
        br(_s, n),
        ",",
        br(vs, e),
        ",",
        br(vs, n),
      );
    }
    function Tr(t, e) {
      return (e[1] - t[1]) / (e[0] - t[0]);
    }
    function Pr(t) {
      for (
        var e,
          n,
          i,
          r,
          a = [],
          o = (function (t) {
            for (
              var e = 0,
                n = t.length - 1,
                i = [],
                r = t[0],
                a = t[1],
                o = (i[0] = Tr(r, a));
              ++e < n;

            )
              i[e] = (o + (o = Tr((r = a), (a = t[e + 1])))) / 2;
            return (i[e] = o), i;
          })(t),
          s = -1,
          u = t.length - 1;
        ++s < u;

      )
        (e = Tr(t[s], t[s + 1])),
          ia(e) < ma
            ? (o[s] = o[s + 1] = 0)
            : 9 < (r = (n = o[s] / e) * n + (i = o[s + 1] / e) * i) &&
              ((r = (3 * e) / Math.sqrt(r)),
              (o[s] = r * n),
              (o[s + 1] = r * i));
      for (s = -1; ++s <= u; )
        (r =
          (t[Math.min(u, s + 1)][0] - t[Math.max(0, s - 1)][0]) /
          (6 * (1 + o[s] * o[s]))),
          a.push([r || 0, o[s] * r || 0]);
      return a;
    }
    function Cr(t) {
      for (var e, n, i, r = -1, a = t.length; ++r < a; )
        (n = (e = t[r])[0]),
          (i = e[1] - Ta),
          (e[0] = n * Math.cos(i)),
          (e[1] = n * Math.sin(i));
      return t;
    }
    function Lr(g) {
      function e(t) {
        function e() {
          a.push("M", m(g(s), b), S, w(g(o.reverse()), b), "Z");
        }
        for (
          var n,
            i,
            r,
            a = [],
            o = [],
            s = [],
            u = -1,
            c = t.length,
            l = wt(p),
            h = wt(_),
            d =
              p === x
                ? function () {
                    return i;
                  }
                : wt(x),
            f =
              _ === v
                ? function () {
                    return r;
                  }
                : wt(v);
          ++u < c;

        )
          y.call(this, (n = t[u]), u)
            ? (o.push([(i = +l.call(this, n, u)), (r = +h.call(this, n, u))]),
              s.push([+d.call(this, n, u), +f.call(this, n, u)]))
            : o.length && (e(), (o = []), (s = []));
        return o.length && e(), a.length ? a.join("") : null;
      }
      var p = cn,
        x = cn,
        _ = 0,
        v = ln,
        y = ve,
        m = xr,
        n = m.key,
        w = m,
        S = "L",
        b = 0.7;
      return (
        (e.x = function (t) {
          return arguments.length ? ((p = x = t), e) : x;
        }),
        (e.x0 = function (t) {
          return arguments.length ? ((p = t), e) : p;
        }),
        (e.x1 = function (t) {
          return arguments.length ? ((x = t), e) : x;
        }),
        (e.y = function (t) {
          return arguments.length ? ((_ = v = t), e) : v;
        }),
        (e.y0 = function (t) {
          return arguments.length ? ((_ = t), e) : _;
        }),
        (e.y1 = function (t) {
          return arguments.length ? ((v = t), e) : v;
        }),
        (e.defined = function (t) {
          return arguments.length ? ((y = t), e) : y;
        }),
        (e.interpolate = function (t) {
          return arguments.length
            ? ((n =
                "function" == typeof t ? (m = t) : (m = ps.get(t) || xr).key),
              (w = m.reverse || m),
              (S = m.closed ? "M" : "L"),
              e)
            : n;
        }),
        (e.tension = function (t) {
          return arguments.length ? ((b = t), e) : b;
        }),
        e
      );
    }
    function Mr(t) {
      return t.radius;
    }
    function Er(t) {
      return [t.x, t.y];
    }
    function Vr() {
      return 64;
    }
    function Gr() {
      return "circle";
    }
    function kr(t) {
      var e = Math.sqrt(t / Sa);
      return (
        "M0," +
        e +
        "A" +
        e +
        "," +
        e +
        " 0 1,1 0," +
        -e +
        "A" +
        e +
        "," +
        e +
        " 0 1,1 0," +
        e +
        "Z"
      );
    }
    function Rr(i) {
      return function () {
        var t, e, n;
        (t = this[i]) &&
          (n = t[(e = t.active)]) &&
          ((n.timer.c = null),
          (n.timer.t = NaN),
          --t.count ? delete t[e] : delete this[i],
          (t.active += 0.5),
          n.event && n.event.interrupt.call(this, this.__data__, n.index));
      };
    }
    function Or(t, e, n) {
      return ua(t, Ts), (t.namespace = e), (t.id = n), t;
    }
    function Ir(t, i, r, a) {
      var o = t.id,
        s = t.namespace;
      return X(
        t,
        "function" == typeof r
          ? function (t, e, n) {
              t[s][o].tween.set(i, a(r.call(t, t.__data__, e, n)));
            }
          : ((r = a(r)),
            function (t) {
              t[s][o].tween.set(i, r);
            }),
      );
    }
    function Dr(t) {
      return (
        null == t && (t = ""),
        function () {
          this.textContent = t;
        }
      );
    }
    function Nr(t) {
      return null == t ? "__transition__" : "__transition_" + t + "__";
    }
    function Fr(a, o, r, s, t) {
      function n(t) {
        var e = g.active,
          n = g[e];
        for (var i in (n &&
          ((n.timer.c = null),
          (n.timer.t = NaN),
          --g.count,
          delete g[e],
          n.event && n.event.interrupt.call(a, a.__data__, n.index)),
        g))
          if (+i < s) {
            var r = g[i];
            (r.timer.c = null), (r.timer.t = NaN), --g.count, delete g[i];
          }
        (l.c = u),
          At(
            function () {
              return l.c && u(t || 1) && ((l.c = null), (l.t = NaN)), 1;
            },
            0,
            c,
          ),
          (g.active = s),
          p.event && p.event.start.call(a, a.__data__, o),
          (f = []),
          p.tween.forEach(function (t, e) {
            (e = e.call(a, a.__data__, o)) && f.push(e);
          }),
          (d = p.ease),
          (h = p.duration);
      }
      function u(t) {
        for (var e = t / h, n = d(e), i = f.length; 0 < i; ) f[--i].call(a, n);
        return 1 <= e
          ? (p.event && p.event.end.call(a, a.__data__, o),
            --g.count ? delete g[s] : delete a[r],
            1)
          : void 0;
      }
      var c,
        l,
        h,
        d,
        f,
        g = a[r] || (a[r] = { active: 0, count: 0 }),
        p = g[s];
      p ||
        ((c = t.time),
        (l = At(
          function (t) {
            var e = p.delay;
            return (l.t = e + c), e <= t ? n(t - e) : void (l.c = n);
          },
          0,
          c,
        )),
        (p = g[s] =
          {
            tween: new v(),
            time: c,
            timer: l,
            delay: t.delay,
            duration: t.duration,
            ease: t.ease,
            index: o,
          }),
        (t = null),
        ++g.count);
    }
    function zr(t, n, i) {
      t.attr("transform", function (t) {
        var e = n(t);
        return "translate(" + (isFinite(e) ? e : i(t)) + ",0)";
      });
    }
    function Xr(t, n, i) {
      t.attr("transform", function (t) {
        var e = n(t);
        return "translate(0," + (isFinite(e) ? e : i(t)) + ")";
      });
    }
    function Hr(t) {
      return t.toISOString();
    }
    function Yr(e, r, t) {
      function o(t) {
        return e(t);
      }
      function s(t, e) {
        var n = (t[1] - t[0]) / e,
          i = qr.bisect(Rs, n);
        return i == Rs.length
          ? [
              r.year,
              nr(
                t.map(function (t) {
                  return t / 31536e6;
                }),
                e,
              )[2],
            ]
          : i
            ? r[n / Rs[i - 1] < Rs[i] / n ? i - 1 : i]
            : [Ds, nr(t, e)[2]];
      }
      return (
        (o.invert = function (t) {
          return Br(e.invert(t));
        }),
        (o.domain = function (t) {
          return arguments.length ? (e.domain(t), o) : e.domain().map(Br);
        }),
        (o.nice = function (e, n) {
          function i(t) {
            return !isNaN(t) && !e.range(t, Br(+t + 1), n).length;
          }
          var t = o.domain(),
            r = Wi(t),
            a = null == e ? s(r, 10) : "number" == typeof e && s(r, e);
          return (
            a && ((e = a[0]), (n = a[1])),
            o.domain(
              Ki(
                t,
                1 < n
                  ? {
                      floor: function (t) {
                        for (; i((t = e.floor(t))); ) t = Br(t - 1);
                        return t;
                      },
                      ceil: function (t) {
                        for (; i((t = e.ceil(t))); ) t = Br(+t + 1);
                        return t;
                      },
                    }
                  : e,
              ),
            )
          );
        }),
        (o.ticks = function (t, e) {
          var n = Wi(o.domain()),
            i =
              null == t
                ? s(n, 10)
                : "number" == typeof t
                  ? s(n, t)
                  : !t.range && [{ range: t }, e];
          return (
            i && ((t = i[0]), (e = i[1])),
            t.range(n[0], Br(+n[1] + 1), e < 1 ? 1 : e)
          );
        }),
        (o.tickFormat = function () {
          return t;
        }),
        (o.copy = function () {
          return Yr(e.copy(), r, t);
        }),
        tr(o, e)
      );
    }
    function Br(t) {
      return new Date(t);
    }
    function jr(t) {
      return JSON.parse(t.responseText);
    }
    function Ur(t) {
      var e = Zr.createRange();
      return e.selectNode(Zr.body), e.createContextualFragment(t.responseText);
    }
    var qr = { version: "3.5.17" },
      Wr = [].slice,
      Qr = function (t) {
        return Wr.call(t);
      },
      Zr = this.document;
    if (Zr)
      try {
        Qr(Zr.documentElement.childNodes)[0].nodeType;
      } catch (t) {
        Qr = function (t) {
          for (var e = t.length, n = new Array(e); e--; ) n[e] = t[e];
          return n;
        };
      }
    if (
      (Date.now ||
        (Date.now = function () {
          return +new Date();
        }),
      Zr)
    )
      try {
        Zr.createElement("DIV").style.setProperty("opacity", 0, "");
      } catch (t) {
        var Kr = this.Element.prototype,
          $r = Kr.setAttribute,
          Jr = Kr.setAttributeNS,
          ta = this.CSSStyleDeclaration.prototype,
          ea = ta.setProperty;
        (Kr.setAttribute = function (t, e) {
          $r.call(this, t, e + "");
        }),
          (Kr.setAttributeNS = function (t, e, n) {
            Jr.call(this, t, e, n + "");
          }),
          (ta.setProperty = function (t, e, n) {
            ea.call(this, t, e + "", n);
          });
      }
    (qr.ascending = o),
      (qr.descending = function (t, e) {
        return e < t ? -1 : t < e ? 1 : t <= e ? 0 : NaN;
      }),
      (qr.min = function (t, e) {
        var n,
          i,
          r = -1,
          a = t.length;
        if (1 === arguments.length) {
          for (; ++r < a; )
            if (null != (i = t[r]) && i <= i) {
              n = i;
              break;
            }
          for (; ++r < a; ) null != (i = t[r]) && i < n && (n = i);
        } else {
          for (; ++r < a; )
            if (null != (i = e.call(t, t[r], r)) && i <= i) {
              n = i;
              break;
            }
          for (; ++r < a; )
            null != (i = e.call(t, t[r], r)) && i < n && (n = i);
        }
        return n;
      }),
      (qr.max = function (t, e) {
        var n,
          i,
          r = -1,
          a = t.length;
        if (1 === arguments.length) {
          for (; ++r < a; )
            if (null != (i = t[r]) && i <= i) {
              n = i;
              break;
            }
          for (; ++r < a; ) null != (i = t[r]) && n < i && (n = i);
        } else {
          for (; ++r < a; )
            if (null != (i = e.call(t, t[r], r)) && i <= i) {
              n = i;
              break;
            }
          for (; ++r < a; )
            null != (i = e.call(t, t[r], r)) && n < i && (n = i);
        }
        return n;
      }),
      (qr.extent = function (t, e) {
        var n,
          i,
          r,
          a = -1,
          o = t.length;
        if (1 === arguments.length) {
          for (; ++a < o; )
            if (null != (i = t[a]) && i <= i) {
              n = r = i;
              break;
            }
          for (; ++a < o; )
            null != (i = t[a]) && (i < n && (n = i), r < i && (r = i));
        } else {
          for (; ++a < o; )
            if (null != (i = e.call(t, t[a], a)) && i <= i) {
              n = r = i;
              break;
            }
          for (; ++a < o; )
            null != (i = e.call(t, t[a], a)) &&
              (i < n && (n = i), r < i && (r = i));
        }
        return [n, r];
      }),
      (qr.sum = function (t, e) {
        var n,
          i = 0,
          r = t.length,
          a = -1;
        if (1 === arguments.length)
          for (; ++a < r; ) l((n = +t[a])) && (i += n);
        else for (; ++a < r; ) l((n = +e.call(t, t[a], a))) && (i += n);
        return i;
      }),
      (qr.mean = function (t, e) {
        var n,
          i = 0,
          r = t.length,
          a = -1,
          o = r;
        if (1 === arguments.length)
          for (; ++a < r; ) l((n = c(t[a]))) ? (i += n) : --o;
        else for (; ++a < r; ) l((n = c(e.call(t, t[a], a)))) ? (i += n) : --o;
        return o ? i / o : void 0;
      }),
      (qr.quantile = function (t, e) {
        var n = (t.length - 1) * e + 1,
          i = Math.floor(n),
          r = +t[i - 1],
          a = n - i;
        return a ? r + a * (t[i] - r) : r;
      }),
      (qr.median = function (t, e) {
        var n,
          i = [],
          r = t.length,
          a = -1;
        if (1 === arguments.length)
          for (; ++a < r; ) l((n = c(t[a]))) && i.push(n);
        else for (; ++a < r; ) l((n = c(e.call(t, t[a], a)))) && i.push(n);
        return i.length ? qr.quantile(i.sort(o), 0.5) : void 0;
      }),
      (qr.variance = function (t, e) {
        var n,
          i,
          r = t.length,
          a = 0,
          o = 0,
          s = -1,
          u = 0;
        if (1 === arguments.length)
          for (; ++s < r; )
            l((n = c(t[s]))) && (o += (i = n - a) * (n - (a += i / ++u)));
        else
          for (; ++s < r; )
            l((n = c(e.call(t, t[s], s)))) &&
              (o += (i = n - a) * (n - (a += i / ++u)));
        return 1 < u ? o / (u - 1) : void 0;
      }),
      (qr.deviation = function () {
        var t = qr.variance.apply(this, arguments);
        return t ? Math.sqrt(t) : t;
      });
    var na = t(o);
    (qr.bisectLeft = na.left),
      (qr.bisect = qr.bisectRight = na.right),
      (qr.bisector = function (n) {
        return t(
          1 === n.length
            ? function (t, e) {
                return o(n(t), e);
              }
            : n,
        );
      }),
      (qr.shuffle = function (t, e, n) {
        (a = arguments.length) < 3 && ((n = t.length), a < 2 && (e = 0));
        for (var i, r, a = n - e; a; )
          (r = (Math.random() * a--) | 0),
            (i = t[a + e]),
            (t[a + e] = t[r + e]),
            (t[r + e] = i);
        return t;
      }),
      (qr.permute = function (t, e) {
        for (var n = e.length, i = new Array(n); n--; ) i[n] = t[e[n]];
        return i;
      }),
      (qr.pairs = function (t) {
        for (
          var e = 0, n = t.length - 1, i = t[0], r = new Array(n < 0 ? 0 : n);
          e < n;

        )
          r[e] = [i, (i = t[++e])];
        return r;
      }),
      (qr.transpose = function (t) {
        if (!(r = t.length)) return [];
        for (var e = -1, n = qr.min(t, u), i = new Array(n); ++e < n; )
          for (var r, a = -1, o = (i[e] = new Array(r)); ++a < r; )
            o[a] = t[a][e];
        return i;
      }),
      (qr.zip = function () {
        return qr.transpose(arguments);
      }),
      (qr.keys = function (t) {
        var e = [];
        for (var n in t) e.push(n);
        return e;
      }),
      (qr.values = function (t) {
        var e = [];
        for (var n in t) e.push(t[n]);
        return e;
      }),
      (qr.entries = function (t) {
        var e = [];
        for (var n in t) e.push({ key: n, value: t[n] });
        return e;
      }),
      (qr.merge = function (t) {
        for (var e, n, i, r = t.length, a = -1, o = 0; ++a < r; )
          o += t[a].length;
        for (n = new Array(o); 0 <= --r; )
          for (e = (i = t[r]).length; 0 <= --e; ) n[--o] = i[e];
        return n;
      });
    var ia = Math.abs;
    (qr.range = function (t, e, n) {
      if (
        (arguments.length < 3 &&
          ((n = 1), arguments.length < 2 && ((e = t), (t = 0))),
        (e - t) / n == 1 / 0)
      )
        throw new Error("infinite range");
      var i,
        r = [],
        a = (function (t) {
          for (var e = 1; (t * e) % 1; ) e *= 10;
          return e;
        })(ia(n)),
        o = -1;
      if (((t *= a), (e *= a), (n *= a) < 0))
        for (; (i = t + n * ++o) > e; ) r.push(i / a);
      else for (; (i = t + n * ++o) < e; ) r.push(i / a);
      return r;
    }),
      (qr.map = function (t, e) {
        var n = new v();
        if (t instanceof v)
          t.forEach(function (t, e) {
            n.set(t, e);
          });
        else if (Array.isArray(t)) {
          var i,
            r = -1,
            a = t.length;
          if (1 === arguments.length) for (; ++r < a; ) n.set(r, t[r]);
          else for (; ++r < a; ) n.set(e.call(t, (i = t[r]), r), i);
        } else for (var o in t) n.set(o, t[o]);
        return n;
      });
    var ra = "__proto__",
      aa = "\0";
    e(v, {
      has: r,
      get: function (t) {
        return this._[n(t)];
      },
      set: function (t, e) {
        return (this._[n(t)] = e);
      },
      remove: a,
      keys: h,
      values: function () {
        var t = [];
        for (var e in this._) t.push(this._[e]);
        return t;
      },
      entries: function () {
        var t = [];
        for (var e in this._) t.push({ key: i(e), value: this._[e] });
        return t;
      },
      size: d,
      empty: f,
      forEach: function (t) {
        for (var e in this._) t.call(this, i(e), this._[e]);
      },
    }),
      (qr.nest = function () {
        function h(n, t, i) {
          if (i >= p.length) return f ? f.call(g, t) : d ? t.sort(d) : t;
          for (
            var e, r, a, o, s = -1, u = t.length, c = p[i++], l = new v();
            ++s < u;

          )
            (o = l.get((e = c((r = t[s]))))) ? o.push(r) : l.set(e, [r]);
          return (
            (a = n
              ? ((r = n()),
                function (t, e) {
                  r.set(t, h(n, e, i));
                })
              : ((r = {}),
                function (t, e) {
                  r[t] = h(n, e, i);
                })),
            l.forEach(a),
            r
          );
        }
        var d,
          f,
          g = {},
          p = [],
          e = [];
        return (
          (g.map = function (t, e) {
            return h(e, t, 0);
          }),
          (g.entries = function (t) {
            return (function n(t, i) {
              if (i >= p.length) return t;
              var r = [],
                a = e[i++];
              return (
                t.forEach(function (t, e) {
                  r.push({ key: t, values: n(e, i) });
                }),
                a
                  ? r.sort(function (t, e) {
                      return a(t.key, e.key);
                    })
                  : r
              );
            })(h(qr.map, t, 0), 0);
          }),
          (g.key = function (t) {
            return p.push(t), g;
          }),
          (g.sortKeys = function (t) {
            return (e[p.length - 1] = t), g;
          }),
          (g.sortValues = function (t) {
            return (d = t), g;
          }),
          (g.rollup = function (t) {
            return (f = t), g;
          }),
          g
        );
      }),
      (qr.set = function (t) {
        var e = new g();
        if (t) for (var n = 0, i = t.length; n < i; ++n) e.add(t[n]);
        return e;
      }),
      e(g, {
        has: r,
        add: function (t) {
          return (this._[n((t += ""))] = !0), t;
        },
        remove: a,
        values: h,
        size: d,
        empty: f,
        forEach: function (t) {
          for (var e in this._) t.call(this, i(e));
        },
      }),
      (qr.behavior = {}),
      (qr.rebind = function (t, e) {
        for (var n, i = 1, r = arguments.length; ++i < r; )
          t[(n = arguments[i])] = p(t, e, e[n]);
        return t;
      });
    var oa = ["webkit", "ms", "moz", "Moz", "o", "O"];
    (qr.dispatch = function () {
      for (var t = new y(), e = -1, n = arguments.length; ++e < n; )
        t[arguments[e]] = m(t);
      return t;
    }),
      (y.prototype.on = function (t, e) {
        var n = t.indexOf("."),
          i = "";
        if ((0 <= n && ((i = t.slice(n + 1)), (t = t.slice(0, n))), t))
          return arguments.length < 2 ? this[t].on(i) : this[t].on(i, e);
        if (2 === arguments.length) {
          if (null == e)
            for (t in this) this.hasOwnProperty(t) && this[t].on(i, null);
          return this;
        }
      }),
      (qr.event = null),
      (qr.requote = function (t) {
        return t.replace(sa, "\\$&");
      });
    var sa = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
      ua = {}.__proto__
        ? function (t, e) {
            t.__proto__ = e;
          }
        : function (t, e) {
            for (var n in e) t[n] = e[n];
          },
      ca = function (t, e) {
        return e.querySelector(t);
      },
      la = function (t, e) {
        return e.querySelectorAll(t);
      },
      ha = function (t, e) {
        var n = t.matches || t[x(t, "matchesSelector")];
        return (ha = function (t, e) {
          return n.call(t, e);
        })(t, e);
      };
    "function" == typeof Sizzle &&
      ((ca = function (t, e) {
        return Sizzle(t, e)[0] || null;
      }),
      (la = Sizzle),
      (ha = Sizzle.matchesSelector)),
      (qr.selection = function () {
        return qr.select(Zr.documentElement);
      });
    var da = (qr.selection.prototype = []);
    (da.select = function (t) {
      var e,
        n,
        i,
        r,
        a = [];
      t = b(t);
      for (var o = -1, s = this.length; ++o < s; ) {
        a.push((e = [])), (e.parentNode = (i = this[o]).parentNode);
        for (var u = -1, c = i.length; ++u < c; )
          (r = i[u])
            ? (e.push((n = t.call(r, r.__data__, u, o))),
              n && "__data__" in r && (n.__data__ = r.__data__))
            : e.push(null);
      }
      return S(a);
    }),
      (da.selectAll = function (t) {
        var e,
          n,
          i = [];
        t = A(t);
        for (var r = -1, a = this.length; ++r < a; )
          for (var o = this[r], s = -1, u = o.length; ++s < u; )
            (n = o[s]) &&
              (i.push((e = Qr(t.call(n, n.__data__, s, r)))),
              (e.parentNode = n));
        return S(i);
      });
    var fa = "http://www.w3.org/1999/xhtml",
      ga = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: fa,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    (qr.ns = {
      prefix: ga,
      qualify: function (t) {
        var e = t.indexOf(":"),
          n = t;
        return (
          0 <= e && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          ga.hasOwnProperty(n) ? { space: ga[n], local: t } : t
        );
      },
    }),
      (da.attr = function (t, e) {
        if (arguments.length < 2) {
          if ("string" == typeof t) {
            var n = this.node();
            return (t = qr.ns.qualify(t)).local
              ? n.getAttributeNS(t.space, t.local)
              : n.getAttribute(t);
          }
          for (e in t) this.each(T(e, t[e]));
          return this;
        }
        return this.each(T(t, e));
      }),
      (da.classed = function (t, e) {
        if (arguments.length < 2) {
          if ("string" == typeof t) {
            var n = this.node(),
              i = (t = L(t)).length,
              r = -1;
            if ((e = n.classList)) {
              for (; ++r < i; ) if (!e.contains(t[r])) return !1;
            } else
              for (e = n.getAttribute("class"); ++r < i; )
                if (!C(t[r]).test(e)) return !1;
            return !0;
          }
          for (e in t) this.each(M(e, t[e]));
          return this;
        }
        return this.each(M(t, e));
      }),
      (da.style = function (t, e, n) {
        var i = arguments.length;
        if (i < 3) {
          if ("string" != typeof t) {
            for (n in (i < 2 && (e = ""), t)) this.each(V(n, t[n], e));
            return this;
          }
          if (i < 2) {
            var r = this.node();
            return k(r).getComputedStyle(r, null).getPropertyValue(t);
          }
          n = "";
        }
        return this.each(V(t, e, n));
      }),
      (da.property = function (t, e) {
        if (arguments.length < 2) {
          if ("string" == typeof t) return this.node()[t];
          for (e in t) this.each(G(e, t[e]));
          return this;
        }
        return this.each(G(t, e));
      }),
      (da.text = function (e) {
        return arguments.length
          ? this.each(
              "function" == typeof e
                ? function () {
                    var t = e.apply(this, arguments);
                    this.textContent = null == t ? "" : t;
                  }
                : null == e
                  ? function () {
                      this.textContent = "";
                    }
                  : function () {
                      this.textContent = e;
                    },
            )
          : this.node().textContent;
      }),
      (da.html = function (e) {
        return arguments.length
          ? this.each(
              "function" == typeof e
                ? function () {
                    var t = e.apply(this, arguments);
                    this.innerHTML = null == t ? "" : t;
                  }
                : null == e
                  ? function () {
                      this.innerHTML = "";
                    }
                  : function () {
                      this.innerHTML = e;
                    },
            )
          : this.node().innerHTML;
      }),
      (da.append = function (t) {
        return (
          (t = D(t)),
          this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          })
        );
      }),
      (da.insert = function (t, e) {
        return (
          (t = D(t)),
          (e = b(e)),
          this.select(function () {
            return this.insertBefore(
              t.apply(this, arguments),
              e.apply(this, arguments) || null,
            );
          })
        );
      }),
      (da.remove = function () {
        return this.each(N);
      }),
      (da.data = function (t, g) {
        function e(t, e) {
          var n,
            i,
            r,
            a = t.length,
            o = e.length,
            s = Math.min(a, o),
            u = new Array(o),
            c = new Array(o),
            l = new Array(a);
          if (g) {
            var h,
              d = new v(),
              f = new Array(a);
            for (n = -1; ++n < a; )
              (i = t[n]) &&
                (d.has((h = g.call(i, i.__data__, n)))
                  ? (l[n] = i)
                  : d.set(h, i),
                (f[n] = h));
            for (n = -1; ++n < o; )
              (i = d.get((h = g.call(e, (r = e[n]), n))))
                ? !0 !== i && ((u[n] = i).__data__ = r)
                : (c[n] = F(r)),
                d.set(h, !0);
            for (n = -1; ++n < a; )
              n in f && !0 !== d.get(f[n]) && (l[n] = t[n]);
          } else {
            for (n = -1; ++n < s; )
              (i = t[n]),
                (r = e[n]),
                i ? ((i.__data__ = r), (u[n] = i)) : (c[n] = F(r));
            for (; n < o; ++n) c[n] = F(e[n]);
            for (; n < a; ++n) l[n] = t[n];
          }
          (c.update = u),
            (c.parentNode = u.parentNode = l.parentNode = t.parentNode),
            p.push(c),
            x.push(u),
            _.push(l);
        }
        var n,
          i,
          r = -1,
          a = this.length;
        if (!arguments.length) {
          for (t = new Array((a = (n = this[0]).length)); ++r < a; )
            (i = n[r]) && (t[r] = i.__data__);
          return t;
        }
        var p = H([]),
          x = S([]),
          _ = S([]);
        if ("function" == typeof t)
          for (; ++r < a; )
            e((n = this[r]), t.call(n, n.parentNode.__data__, r));
        else for (; ++r < a; ) e((n = this[r]), t);
        return (
          (x.enter = function () {
            return p;
          }),
          (x.exit = function () {
            return _;
          }),
          x
        );
      }),
      (da.datum = function (t) {
        return arguments.length
          ? this.property("__data__", t)
          : this.property("__data__");
      }),
      (da.filter = function (t) {
        var e,
          n,
          i,
          r = [];
        "function" != typeof t && (t = z(t));
        for (var a = 0, o = this.length; a < o; a++) {
          r.push((e = [])), (e.parentNode = (n = this[a]).parentNode);
          for (var s = 0, u = n.length; s < u; s++)
            (i = n[s]) && t.call(i, i.__data__, s, a) && e.push(i);
        }
        return S(r);
      }),
      (da.order = function () {
        for (var t = -1, e = this.length; ++t < e; )
          for (var n, i = this[t], r = i.length - 1, a = i[r]; 0 <= --r; )
            (n = i[r]) &&
              (a && a !== n.nextSibling && a.parentNode.insertBefore(n, a),
              (a = n));
        return this;
      }),
      (da.sort = function (t) {
        t = function (n) {
          return (
            arguments.length || (n = o),
            function (t, e) {
              return t && e ? n(t.__data__, e.__data__) : !t - !e;
            }
          );
        }.apply(this, arguments);
        for (var e = -1, n = this.length; ++e < n; ) this[e].sort(t);
        return this.order();
      }),
      (da.each = function (i) {
        return X(this, function (t, e, n) {
          i.call(t, t.__data__, e, n);
        });
      }),
      (da.call = function (t) {
        var e = Qr(arguments);
        return t.apply((e[0] = this), e), this;
      }),
      (da.empty = function () {
        return !this.node();
      }),
      (da.node = function () {
        for (var t = 0, e = this.length; t < e; t++)
          for (var n = this[t], i = 0, r = n.length; i < r; i++) {
            var a = n[i];
            if (a) return a;
          }
        return null;
      }),
      (da.size = function () {
        var t = 0;
        return (
          X(this, function () {
            ++t;
          }),
          t
        );
      });
    var pa = [];
    (qr.selection.enter = H),
      ((qr.selection.enter.prototype = pa).append = da.append),
      (pa.empty = da.empty),
      (pa.node = da.node),
      (pa.call = da.call),
      (pa.size = da.size),
      (pa.select = function (t) {
        for (var e, n, i, r, a, o = [], s = -1, u = this.length; ++s < u; ) {
          (i = (r = this[s]).update),
            o.push((e = [])),
            (e.parentNode = r.parentNode);
          for (var c = -1, l = r.length; ++c < l; )
            (a = r[c])
              ? (e.push((i[c] = n = t.call(r.parentNode, a.__data__, c, s))),
                (n.__data__ = a.__data__))
              : e.push(null);
        }
        return S(o);
      }),
      (pa.insert = function (t, e) {
        return (
          arguments.length < 2 &&
            ((o = this),
            (e = function (t, e, n) {
              var i,
                r = o[n].update,
                a = r.length;
              for (
                n != u && ((u = n), (s = 0)), s <= e && (s = e + 1);
                !(i = r[s]) && ++s < a;

              );
              return i;
            })),
          da.insert.call(this, t, e)
        );
        var o, s, u;
      }),
      (qr.select = function (t) {
        var e;
        return (
          "string" == typeof t
            ? ((e = [ca(t, Zr)]).parentNode = Zr.documentElement)
            : ((e = [t]).parentNode = s(t)),
          S([e])
        );
      }),
      (qr.selectAll = function (t) {
        var e;
        return (
          "string" == typeof t
            ? ((e = Qr(la(t, Zr))).parentNode = Zr.documentElement)
            : ((e = Qr(t)).parentNode = null),
          S([e])
        );
      }),
      (da.on = function (t, e, n) {
        var i = arguments.length;
        if (i < 3) {
          if ("string" != typeof t) {
            for (n in (i < 2 && (e = !1), t)) this.each(Y(n, t[n], e));
            return this;
          }
          if (i < 2) return (i = this.node()["__on" + t]) && i._;
          n = !1;
        }
        return this.each(Y(t, e, n));
      });
    var xa = qr.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
    Zr &&
      xa.forEach(function (t) {
        "on" + t in Zr && xa.remove(t);
      });
    var _a,
      va = 0;
    qr.mouse = function (t) {
      return q(t, w());
    };
    var ya = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    (qr.touch = function (t, e, n) {
      if ((arguments.length < 3 && ((n = e), (e = w().changedTouches)), e))
        for (var i, r = 0, a = e.length; r < a; ++r)
          if ((i = e[r]).identifier === n) return q(t, i);
    }),
      (qr.behavior.drag = function () {
        function e() {
          this.on("mousedown.drag", n).on("touchstart.drag", i);
        }
        function t(l, h, d, f, g) {
          return function () {
            var i,
              t = qr.event.target.correspondingElement || qr.event.target,
              r = this.parentNode,
              a = p.of(this, arguments),
              o = 0,
              s = l(),
              e = ".drag" + (null == s ? "" : "-" + s),
              n = qr
                .select(d(t))
                .on(f + e, function () {
                  var t,
                    e,
                    n = h(r, s);
                  n &&
                    ((t = n[0] - c[0]),
                    (e = n[1] - c[1]),
                    (o |= t | e),
                    a({
                      type: "drag",
                      x: (c = n)[0] + i[0],
                      y: n[1] + i[1],
                      dx: t,
                      dy: e,
                    }));
                })
                .on(g + e, function () {
                  h(r, s) &&
                    (n.on(f + e, null).on(g + e, null),
                    u(o),
                    a({ type: "dragend" }));
                }),
              u = U(t),
              c = h(r, s);
            (i = x
              ? [(i = x.apply(this, arguments)).x - c[0], i.y - c[1]]
              : [0, 0]),
              a({ type: "dragstart" });
          };
        }
        var p = I(e, "drag", "dragstart", "dragend"),
          x = null,
          n = t(_, qr.mouse, k, "mousemove", "mouseup"),
          i = t(W, qr.touch, R, "touchmove", "touchend");
        return (
          (e.origin = function (t) {
            return arguments.length ? ((x = t), e) : x;
          }),
          qr.rebind(e, p, "on")
        );
      }),
      (qr.touches = function (n, t) {
        return (
          arguments.length < 2 && (t = w().touches),
          t
            ? Qr(t).map(function (t) {
                var e = q(n, t);
                return (e.identifier = t.identifier), e;
              })
            : []
        );
      });
    var ma = 1e-6,
      wa = ma * ma,
      Sa = Math.PI,
      ba = 2 * Sa,
      Aa = ba - ma,
      Ta = Sa / 2,
      Pa = Sa / 180,
      Ca = 180 / Sa,
      La = Math.SQRT2;
    (qr.interpolateZoom = function (t, e) {
      var n,
        o,
        s = t[0],
        u = t[1],
        c = t[2],
        i = e[0],
        r = e[1],
        a = e[2],
        l = i - s,
        h = r - u,
        d = l * l + h * h;
      if (d < wa)
        (o = Math.log(a / c) / La),
          (n = function (t) {
            return [s + t * l, u + t * h, c * Math.exp(La * t * o)];
          });
      else {
        var f = Math.sqrt(d),
          g = (a * a - c * c + 4 * d) / (2 * c * 2 * f),
          p = (a * a - c * c - 4 * d) / (2 * a * 2 * f),
          x = Math.log(Math.sqrt(g * g + 1) - g),
          _ = Math.log(Math.sqrt(p * p + 1) - p);
        (o = (_ - x) / La),
          (n = function (t) {
            var e,
              n,
              i = t * o,
              r = J(x),
              a =
                (c / (2 * f)) *
                (r * ((n = La * i + x), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                  ((e = x), ((e = Math.exp(e)) - 1 / e) / 2));
            return [s + a * l, u + a * h, (c * r) / J(La * i + x)];
          });
      }
      return (n.duration = 1e3 * o), n;
    }),
      (qr.behavior.zoom = function () {
        function r(t) {
          t.on(M, T)
            .on(Ea + ".zoom", n)
            .on("dblclick.zoom", i)
            .on(V, P);
        }
        function s(t) {
          return [(t[0] - L.x) / L.k, (t[1] - L.y) / L.k];
        }
        function m(t) {
          L.k = Math.max(x[0], Math.min(x[1], t));
        }
        function w(t, e) {
          var n;
          (e = [(n = e)[0] * L.k + L.x, n[1] * L.k + L.y]),
            (L.x += t[0] - e[0]),
            (L.y += t[1] - e[1]);
        }
        function S(t, e, n, i) {
          (t.__chart__ = { x: L.x, y: L.y, k: L.k }),
            m(Math.pow(2, i)),
            w((c = e), n),
            (t = qr.select(t)),
            0 < _ && (t = t.transition().duration(_)),
            t.call(r.event);
        }
        function e() {
          d &&
            d.domain(
              h
                .range()
                .map(function (t) {
                  return (t - L.x) / L.k;
                })
                .map(h.invert),
            ),
            g &&
              g.domain(
                f
                  .range()
                  .map(function (t) {
                    return (t - L.y) / L.k;
                  })
                  .map(f.invert),
              );
        }
        function u(t) {
          v++ || t({ type: "zoomstart" });
        }
        function b(t) {
          e(), t({ type: "zoom", scale: L.k, translate: [L.x, L.y] });
        }
        function A(t) {
          --v || (t({ type: "zoomend" }), (c = null));
        }
        function T() {
          var t = this,
            e = G.of(t, arguments),
            n = 0,
            i = qr
              .select(k(t))
              .on(y, function () {
                (n = 1), w(qr.mouse(t), r), b(e);
              })
              .on(E, function () {
                i.on(y, null).on(E, null), a(n), A(e);
              }),
            r = s(qr.mouse(t)),
            a = U(t);
          As.call(t), u(e);
        }
        function P() {
          function l() {
            var t = qr.touches(f);
            return (
              (c = L.k),
              t.forEach(function (t) {
                t.identifier in p && (p[t.identifier] = s(t));
              }),
              t
            );
          }
          function t() {
            var t = qr.event.target;
            qr.select(t).on(_, h).on(v, d), y.push(t);
            for (
              var e = qr.event.changedTouches, n = 0, i = e.length;
              n < i;
              ++n
            )
              p[e[n].identifier] = null;
            var r = l(),
              a = Date.now();
            if (1 === r.length) {
              if (a - C < 500) {
                var o = r[0];
                S(
                  f,
                  o,
                  p[o.identifier],
                  Math.floor(Math.log(L.k) / Math.LN2) + 1,
                ),
                  O();
              }
              C = a;
            } else if (1 < r.length) {
              o = r[0];
              var s = r[1],
                u = o[0] - s[0],
                c = o[1] - s[1];
              x = u * u + c * c;
            }
          }
          function h() {
            var t,
              e,
              n,
              i,
              r = qr.touches(f);
            As.call(f);
            for (var a = 0, o = r.length; a < o; ++a, i = null)
              if (((n = r[a]), (i = p[n.identifier]))) {
                if (e) break;
                (t = n), (e = i);
              }
            if (i) {
              var s = (s = n[0] - t[0]) * s + (s = n[1] - t[1]) * s,
                u = x && Math.sqrt(s / x);
              (t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2]),
                (e = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2]),
                m(u * c);
            }
            (C = null), w(t, e), b(g);
          }
          function d() {
            if (qr.event.touches.length) {
              for (
                var t = qr.event.changedTouches, e = 0, n = t.length;
                e < n;
                ++e
              )
                delete p[t[e].identifier];
              for (var i in p) return void l();
            }
            qr.selectAll(y).on(r, null), a.on(M, T).on(V, P), o(), A(g);
          }
          var c,
            f = this,
            g = G.of(f, arguments),
            p = {},
            x = 0,
            r = ".zoom-" + qr.event.changedTouches[0].identifier,
            _ = "touchmove" + r,
            v = "touchend" + r,
            y = [],
            a = qr.select(f),
            o = U(f);
          t(), u(g), a.on(M, null).on(V, t);
        }
        function n() {
          var t = G.of(this, arguments);
          l
            ? clearTimeout(l)
            : (As.call(this), (a = s((c = o || qr.mouse(this)))), u(t)),
            (l = setTimeout(function () {
              (l = null), A(t);
            }, 50)),
            O(),
            m(Math.pow(2, 0.002 * Ma()) * L.k),
            w(c, a),
            b(t);
        }
        function i() {
          var t = qr.mouse(this),
            e = Math.log(L.k) / Math.LN2;
          S(
            this,
            t,
            s(t),
            qr.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1,
          );
        }
        var a,
          c,
          o,
          l,
          C,
          h,
          d,
          f,
          g,
          L = { x: 0, y: 0, k: 1 },
          p = [960, 500],
          x = Va,
          _ = 250,
          v = 0,
          M = "mousedown.zoom",
          y = "mousemove.zoom",
          E = "mouseup.zoom",
          V = "touchstart.zoom",
          G = I(r, "zoomstart", "zoom", "zoomend");
        return (
          Ea ||
            (Ea =
              "onwheel" in Zr
                ? ((Ma = function () {
                    return -qr.event.deltaY * (qr.event.deltaMode ? 120 : 1);
                  }),
                  "wheel")
                : "onmousewheel" in Zr
                  ? ((Ma = function () {
                      return qr.event.wheelDelta;
                    }),
                    "mousewheel")
                  : ((Ma = function () {
                      return -qr.event.detail;
                    }),
                    "MozMousePixelScroll")),
          (r.event = function (t) {
            t.each(function () {
              var s = G.of(this, arguments),
                e = L;
              Ss
                ? qr
                    .select(this)
                    .transition()
                    .each("start.zoom", function () {
                      (L = this.__chart__ || { x: 0, y: 0, k: 1 }), u(s);
                    })
                    .tween("zoom:zoom", function () {
                      var i = p[0],
                        t = p[1],
                        r = c ? c[0] : i / 2,
                        a = c ? c[1] : t / 2,
                        o = qr.interpolateZoom(
                          [(r - L.x) / L.k, (a - L.y) / L.k, i / L.k],
                          [(r - e.x) / e.k, (a - e.y) / e.k, i / e.k],
                        );
                      return function (t) {
                        var e = o(t),
                          n = i / e[2];
                        (this.__chart__ = L =
                          { x: r - e[0] * n, y: a - e[1] * n, k: n }),
                          b(s);
                      };
                    })
                    .each("interrupt.zoom", function () {
                      A(s);
                    })
                    .each("end.zoom", function () {
                      A(s);
                    })
                : ((this.__chart__ = L), u(s), b(s), A(s));
            });
          }),
          (r.translate = function (t) {
            return arguments.length
              ? ((L = { x: +t[0], y: +t[1], k: L.k }), e(), r)
              : [L.x, L.y];
          }),
          (r.scale = function (t) {
            return arguments.length
              ? ((L = { x: L.x, y: L.y, k: null }), m(+t), e(), r)
              : L.k;
          }),
          (r.scaleExtent = function (t) {
            return arguments.length
              ? ((x = null == t ? Va : [+t[0], +t[1]]), r)
              : x;
          }),
          (r.center = function (t) {
            return arguments.length ? ((o = t && [+t[0], +t[1]]), r) : o;
          }),
          (r.size = function (t) {
            return arguments.length ? ((p = t && [+t[0], +t[1]]), r) : p;
          }),
          (r.duration = function (t) {
            return arguments.length ? ((_ = +t), r) : _;
          }),
          (r.x = function (t) {
            return arguments.length
              ? ((h = (d = t).copy()), (L = { x: 0, y: 0, k: 1 }), r)
              : d;
          }),
          (r.y = function (t) {
            return arguments.length
              ? ((f = (g = t).copy()), (L = { x: 0, y: 0, k: 1 }), r)
              : g;
          }),
          qr.rebind(r, G, "on")
        );
      });
    var Ma,
      Ea,
      Va = [0, 1 / 0];
    (qr.color = et).prototype.toString = function () {
      return this.rgb() + "";
    };
    var Ga = ((qr.hsl = nt).prototype = new et());
    (Ga.brighter = function (t) {
      return (
        (t = Math.pow(0.7, arguments.length ? t : 1)),
        new nt(this.h, this.s, this.l / t)
      );
    }),
      (Ga.darker = function (t) {
        return (
          (t = Math.pow(0.7, arguments.length ? t : 1)),
          new nt(this.h, this.s, t * this.l)
        );
      }),
      (Ga.rgb = function () {
        return it(this.h, this.s, this.l);
      });
    var ka = ((qr.hcl = rt).prototype = new et());
    (ka.brighter = function (t) {
      return new rt(
        this.h,
        this.c,
        Math.min(100, this.l + Ra * (arguments.length ? t : 1)),
      );
    }),
      (ka.darker = function (t) {
        return new rt(
          this.h,
          this.c,
          Math.max(0, this.l - Ra * (arguments.length ? t : 1)),
        );
      }),
      (ka.rgb = function () {
        return at(this.h, this.c, this.l).rgb();
      }),
      (qr.lab = ot);
    var Ra = 18,
      Oa = 0.95047,
      Ia = 1,
      Da = 1.08883,
      Na = (ot.prototype = new et());
    (Na.brighter = function (t) {
      return new ot(
        Math.min(100, this.l + Ra * (arguments.length ? t : 1)),
        this.a,
        this.b,
      );
    }),
      (Na.darker = function (t) {
        return new ot(
          Math.max(0, this.l - Ra * (arguments.length ? t : 1)),
          this.a,
          this.b,
        );
      }),
      (Na.rgb = function () {
        return st(this.l, this.a, this.b);
      });
    var Fa = ((qr.rgb = dt).prototype = new et());
    (Fa.brighter = function (t) {
      t = Math.pow(0.7, arguments.length ? t : 1);
      var e = this.r,
        n = this.g,
        i = this.b;
      return e || n || i
        ? (e && e < 30 && (e = 30),
          n && n < 30 && (n = 30),
          i && i < 30 && (i = 30),
          new dt(
            Math.min(255, e / t),
            Math.min(255, n / t),
            Math.min(255, i / t),
          ))
        : new dt(30, 30, 30);
    }),
      (Fa.darker = function (t) {
        return new dt(
          (t = Math.pow(0.7, arguments.length ? t : 1)) * this.r,
          t * this.g,
          t * this.b,
        );
      }),
      (Fa.hsl = function () {
        return _t(this.r, this.g, this.b);
      }),
      (Fa.toString = function () {
        return "#" + pt(this.r) + pt(this.g) + pt(this.b);
      });
    var za = qr.map({
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    });
    za.forEach(function (t, e) {
      za.set(t, ft(e));
    }),
      (qr.functor = wt),
      (qr.xhr = St(R)),
      (qr.dsv = function (r, a) {
        function o(t, e, n) {
          arguments.length < 3 && ((n = e), (e = null));
          var i = bt(t, a, null == e ? s : u(e), n);
          return (
            (i.row = function (t) {
              return arguments.length
                ? i.response(null == (e = t) ? s : u(t))
                : e;
            }),
            i
          );
        }
        function s(t) {
          return o.parse(t.responseText);
        }
        function u(e) {
          return function (t) {
            return o.parse(t.responseText, e);
          };
        }
        function e(t) {
          return t.map(c).join(r);
        }
        function c(t) {
          return n.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t;
        }
        var n = new RegExp('["' + r + "\n]"),
          d = r.charCodeAt(0);
        return (
          (o.parse = function (t, i) {
            var r;
            return o.parseRows(t, function (t, e) {
              if (r) return r(t, e - 1);
              var n = new Function(
                "d",
                "return {" +
                  t
                    .map(function (t, e) {
                      return JSON.stringify(t) + ": d[" + e + "]";
                    })
                    .join(",") +
                  "}",
              );
              r = i
                ? function (t, e) {
                    return i(n(t), e);
                  }
                : n;
            });
          }),
          (o.parseRows = function (r, t) {
            function e() {
              if (u <= c) return s;
              if (a) return (a = !1), o;
              var t = c;
              if (34 === r.charCodeAt(t)) {
                for (var e = t; e++ < u; )
                  if (34 === r.charCodeAt(e)) {
                    if (34 !== r.charCodeAt(e + 1)) break;
                    ++e;
                  }
                return (
                  (c = e + 2),
                  13 === (n = r.charCodeAt(e + 1))
                    ? ((a = !0), 10 === r.charCodeAt(e + 2) && ++c)
                    : 10 === n && (a = !0),
                  r.slice(t + 1, e).replace(/""/g, '"')
                );
              }
              for (; c < u; ) {
                var n,
                  i = 1;
                if (10 === (n = r.charCodeAt(c++))) a = !0;
                else if (13 === n)
                  (a = !0), 10 === r.charCodeAt(c) && (++c, ++i);
                else if (n !== d) continue;
                return r.slice(t, c - i);
              }
              return r.slice(t);
            }
            for (
              var n, a, o = {}, s = {}, i = [], u = r.length, c = 0, l = 0;
              (n = e()) !== s;

            ) {
              for (var h = []; n !== o && n !== s; ) h.push(n), (n = e());
              (t && null == (h = t(h, l++))) || i.push(h);
            }
            return i;
          }),
          (o.format = function (t) {
            if (Array.isArray(t[0])) return o.formatRows(t);
            var n = new g(),
              i = [];
            return (
              t.forEach(function (t) {
                for (var e in t) n.has(e) || i.push(n.add(e));
              }),
              [i.map(c).join(r)]
                .concat(
                  t.map(function (e) {
                    return i
                      .map(function (t) {
                        return c(e[t]);
                      })
                      .join(r);
                  }),
                )
                .join("\n")
            );
          }),
          (o.formatRows = function (t) {
            return t.map(e).join("\n");
          }),
          o
        );
      }),
      (qr.csv = qr.dsv(",", "text/csv")),
      (qr.tsv = qr.dsv("\t", "text/tab-separated-values"));
    var Xa,
      Ha,
      Ya,
      Ba,
      ja =
        this[x(this, "requestAnimationFrame")] ||
        function (t) {
          setTimeout(t, 17);
        };
    (qr.timer = function () {
      At.apply(this, arguments);
    }),
      (qr.timer.flush = function () {
        Pt(), Ct();
      }),
      (qr.round = function (t, e) {
        return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t);
      });
    var Ua = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "µ",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ].map(function (t, e) {
      var n = Math.pow(10, 3 * ia(8 - e));
      return {
        scale:
          8 < e
            ? function (t) {
                return t / n;
              }
            : function (t) {
                return t * n;
              },
        symbol: t,
      };
    });
    qr.formatPrefix = function (t, e) {
      var n = 0;
      return (
        (t = +t) &&
          (t < 0 && (t *= -1),
          e && (t = qr.round(t, Lt(t, e))),
          (n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10)),
          (n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3))))),
        Ua[8 + n / 3]
      );
    };
    var qa =
        /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
      Wa = qr.map({
        b: function (t) {
          return t.toString(2);
        },
        c: function (t) {
          return String.fromCharCode(t);
        },
        o: function (t) {
          return t.toString(8);
        },
        x: function (t) {
          return t.toString(16);
        },
        X: function (t) {
          return t.toString(16).toUpperCase();
        },
        g: function (t, e) {
          return t.toPrecision(e);
        },
        e: function (t, e) {
          return t.toExponential(e);
        },
        f: function (t, e) {
          return t.toFixed(e);
        },
        r: function (t, e) {
          return (t = qr.round(t, Lt(t, e))).toFixed(
            Math.max(0, Math.min(20, Lt(t * (1 + 1e-15), e))),
          );
        },
      }),
      Qa = (qr.time = {}),
      Za = Date;
    Et.prototype = {
      getDate: function () {
        return this._.getUTCDate();
      },
      getDay: function () {
        return this._.getUTCDay();
      },
      getFullYear: function () {
        return this._.getUTCFullYear();
      },
      getHours: function () {
        return this._.getUTCHours();
      },
      getMilliseconds: function () {
        return this._.getUTCMilliseconds();
      },
      getMinutes: function () {
        return this._.getUTCMinutes();
      },
      getMonth: function () {
        return this._.getUTCMonth();
      },
      getSeconds: function () {
        return this._.getUTCSeconds();
      },
      getTime: function () {
        return this._.getTime();
      },
      getTimezoneOffset: function () {
        return 0;
      },
      valueOf: function () {
        return this._.valueOf();
      },
      setDate: function () {
        Ka.setUTCDate.apply(this._, arguments);
      },
      setDay: function () {
        Ka.setUTCDay.apply(this._, arguments);
      },
      setFullYear: function () {
        Ka.setUTCFullYear.apply(this._, arguments);
      },
      setHours: function () {
        Ka.setUTCHours.apply(this._, arguments);
      },
      setMilliseconds: function () {
        Ka.setUTCMilliseconds.apply(this._, arguments);
      },
      setMinutes: function () {
        Ka.setUTCMinutes.apply(this._, arguments);
      },
      setMonth: function () {
        Ka.setUTCMonth.apply(this._, arguments);
      },
      setSeconds: function () {
        Ka.setUTCSeconds.apply(this._, arguments);
      },
      setTime: function () {
        Ka.setTime.apply(this._, arguments);
      },
    };
    var Ka = Date.prototype;
    (Qa.year = Vt(
      function (t) {
        return (t = Qa.day(t)).setMonth(0, 1), t;
      },
      function (t, e) {
        t.setFullYear(t.getFullYear() + e);
      },
      function (t) {
        return t.getFullYear();
      },
    )),
      (Qa.years = Qa.year.range),
      (Qa.years.utc = Qa.year.utc.range),
      (Qa.day = Vt(
        function (t) {
          var e = new Za(2e3, 0);
          return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e;
        },
        function (t, e) {
          t.setDate(t.getDate() + e);
        },
        function (t) {
          return t.getDate() - 1;
        },
      )),
      (Qa.days = Qa.day.range),
      (Qa.days.utc = Qa.day.utc.range),
      (Qa.dayOfYear = function (t) {
        var e = Qa.year(t);
        return Math.floor(
          (t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) /
            864e5,
        );
      }),
      [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ].forEach(function (t, n) {
        n = 7 - n;
        var e = (Qa[t] = Vt(
          function (t) {
            return (
              (t = Qa.day(t)).setDate(t.getDate() - ((t.getDay() + n) % 7)), t
            );
          },
          function (t, e) {
            t.setDate(t.getDate() + 7 * Math.floor(e));
          },
          function (t) {
            var e = Qa.year(t).getDay();
            return (
              Math.floor((Qa.dayOfYear(t) + ((e + n) % 7)) / 7) - (e !== n)
            );
          },
        ));
        (Qa[t + "s"] = e.range),
          (Qa[t + "s"].utc = e.utc.range),
          (Qa[t + "OfYear"] = function (t) {
            var e = Qa.year(t).getDay();
            return Math.floor((Qa.dayOfYear(t) + ((e + n) % 7)) / 7);
          });
      }),
      (Qa.week = Qa.sunday),
      (Qa.weeks = Qa.sunday.range),
      (Qa.weeks.utc = Qa.sunday.utc.range),
      (Qa.weekOfYear = Qa.sundayOfYear);
    var $a = { "-": "", _: " ", 0: "0" },
      Ja = /^\s*\d+/,
      to = /^%/;
    qr.locale = function (t) {
      return {
        numberFormat:
          ((e = t),
          (A = e.decimal),
          (s = e.thousands),
          (u = e.grouping),
          (i = e.currency),
          (T =
            u && s
              ? function (t, e) {
                  for (
                    var n = t.length, i = [], r = 0, a = u[0], o = 0;
                    0 < n &&
                    0 < a &&
                    (e < o + a + 1 && (a = Math.max(1, e - o)),
                    i.push(t.substring((n -= a), n + a)),
                    !((o += a + 1) > e));

                  )
                    a = u[(r = (r + 1) % u.length)];
                  return i.reverse().join(s);
                }
              : R),
          function (t) {
            var e = qa.exec(t),
              l = e[1] || " ",
              h = e[2] || ">",
              d = e[3] || "-",
              n = e[4] || "",
              f = e[5],
              g = +e[6],
              p = e[7],
              x = e[8],
              _ = e[9],
              v = 1,
              y = "",
              m = "",
              w = !1,
              S = !0;
            switch (
              (x && (x = +x.substring(1)),
              (f || ("0" === l && "=" === h)) && ((f = l = "0"), (h = "=")),
              _)
            ) {
              case "n":
                (p = !0), (_ = "g");
                break;
              case "%":
                (v = 100), (m = "%"), (_ = "f");
                break;
              case "p":
                (v = 100), (m = "%"), (_ = "r");
                break;
              case "b":
              case "o":
              case "x":
              case "X":
                "#" === n && (y = "0" + _.toLowerCase());
              case "c":
                S = !1;
              case "d":
                (w = !0), (x = 0);
                break;
              case "s":
                (v = -1), (_ = "r");
            }
            "$" === n && ((y = i[0]), (m = i[1])),
              "r" != _ || x || (_ = "g"),
              null != x &&
                ("g" == _
                  ? (x = Math.max(1, Math.min(21, x)))
                  : ("e" != _ && "f" != _) ||
                    (x = Math.max(0, Math.min(20, x)))),
              (_ = Wa.get(_) || Mt);
            var b = f && p;
            return function (t) {
              var e = m;
              if (w && t % 1) return "";
              var n =
                t < 0 || (0 === t && 1 / t < 0)
                  ? ((t = -t), "-")
                  : "-" === d
                    ? ""
                    : d;
              if (v < 0) {
                var i = qr.formatPrefix(t, x);
                (t = i.scale(t)), (e = i.symbol + m);
              } else t *= v;
              var r,
                a,
                o = (t = _(t, x)).lastIndexOf(".");
              if (o < 0) {
                var s = S ? t.lastIndexOf("e") : -1;
                a =
                  s < 0
                    ? ((r = t), "")
                    : ((r = t.substring(0, s)), t.substring(s));
              } else (r = t.substring(0, o)), (a = A + t.substring(o + 1));
              !f && p && (r = T(r, 1 / 0));
              var u = y.length + r.length + a.length + (b ? 0 : n.length),
                c = u < g ? new Array((u = g - u + 1)).join(l) : "";
              return (
                b && (r = T(c + r, c.length ? g - a.length : 1 / 0)),
                (n += y),
                (t = r + a),
                ("<" === h
                  ? n + t + c
                  : ">" === h
                    ? c + n + t
                    : "^" === h
                      ? c.substring(0, (u >>= 1)) + n + t + c.substring(u)
                      : n + (b ? t : c + t)) + e
              );
            };
          }),
        timeFormat: (function (t) {
          function i(s) {
            function t(t) {
              for (var e, n, i, r = [], a = -1, o = 0; ++a < u; )
                37 === s.charCodeAt(a) &&
                  (r.push(s.slice(o, a)),
                  null != (n = $a[(e = s.charAt(++a))]) && (e = s.charAt(++a)),
                  (i = m[e]) &&
                    (e = i(t, null == n ? ("e" === e ? " " : "0") : n)),
                  r.push(e),
                  (o = a + 1));
              return r.push(s.slice(o, a)), r.join("");
            }
            var u = s.length;
            return (
              (t.parse = function (t) {
                var e = {
                  y: 1900,
                  m: 0,
                  d: 1,
                  H: 0,
                  M: 0,
                  S: 0,
                  L: 0,
                  Z: null,
                };
                if (r(e, s, t, 0) != t.length) return null;
                "p" in e && (e.H = (e.H % 12) + 12 * e.p);
                var n = null != e.Z && Za !== Et,
                  i = new (n ? Et : Za)();
                return (
                  "j" in e
                    ? i.setFullYear(e.y, 0, e.j)
                    : "W" in e || "U" in e
                      ? ("w" in e || (e.w = "W" in e ? 1 : 0),
                        i.setFullYear(e.y, 0, 1),
                        i.setFullYear(
                          e.y,
                          0,
                          "W" in e
                            ? ((e.w + 6) % 7) + 7 * e.W - ((i.getDay() + 5) % 7)
                            : e.w + 7 * e.U - ((i.getDay() + 6) % 7),
                        ))
                      : i.setFullYear(e.y, e.m, e.d),
                  i.setHours(
                    e.H + ((e.Z / 100) | 0),
                    e.M + (e.Z % 100),
                    e.S,
                    e.L,
                  ),
                  n ? i._ : i
                );
              }),
              (t.toString = function () {
                return s;
              }),
              t
            );
          }
          function r(t, e, n, i) {
            for (var r, a, o, s = 0, u = e.length, c = n.length; s < u; ) {
              if (c <= i) return -1;
              if (37 === (r = e.charCodeAt(s++))) {
                if (
                  ((o = e.charAt(s++)),
                  !(a = w[o in $a ? e.charAt(s++) : o]) || (i = a(t, n, i)) < 0)
                )
                  return -1;
              } else if (r != n.charCodeAt(i++)) return -1;
            }
            return i;
          }
          var e = t.dateTime,
            n = t.date,
            a = t.time,
            o = t.periods,
            s = t.days,
            u = t.shortDays,
            c = t.months,
            l = t.shortMonths;
          i.multi = (i.utc = function (t) {
            function e(t) {
              try {
                var e = new (Za = Et)();
                return (e._ = t), n(e);
              } finally {
                Za = Date;
              }
            }
            var n = i(t);
            return (
              (e.parse = function (t) {
                try {
                  Za = Et;
                  var e = n.parse(t);
                  return e && e._;
                } finally {
                  Za = Date;
                }
              }),
              (e.toString = n.toString),
              e
            );
          }).multi = Kt;
          var h = qr.map(),
            d = Rt(s),
            f = Ot(s),
            g = Rt(u),
            p = Ot(u),
            x = Rt(c),
            _ = Ot(c),
            v = Rt(l),
            y = Ot(l);
          o.forEach(function (t, e) {
            h.set(t.toLowerCase(), e);
          });
          var m = {
              a: function (t) {
                return u[t.getDay()];
              },
              A: function (t) {
                return s[t.getDay()];
              },
              b: function (t) {
                return l[t.getMonth()];
              },
              B: function (t) {
                return c[t.getMonth()];
              },
              c: i(e),
              d: function (t, e) {
                return kt(t.getDate(), e, 2);
              },
              e: function (t, e) {
                return kt(t.getDate(), e, 2);
              },
              H: function (t, e) {
                return kt(t.getHours(), e, 2);
              },
              I: function (t, e) {
                return kt(t.getHours() % 12 || 12, e, 2);
              },
              j: function (t, e) {
                return kt(1 + Qa.dayOfYear(t), e, 3);
              },
              L: function (t, e) {
                return kt(t.getMilliseconds(), e, 3);
              },
              m: function (t, e) {
                return kt(t.getMonth() + 1, e, 2);
              },
              M: function (t, e) {
                return kt(t.getMinutes(), e, 2);
              },
              p: function (t) {
                return o[+(12 <= t.getHours())];
              },
              S: function (t, e) {
                return kt(t.getSeconds(), e, 2);
              },
              U: function (t, e) {
                return kt(Qa.sundayOfYear(t), e, 2);
              },
              w: function (t) {
                return t.getDay();
              },
              W: function (t, e) {
                return kt(Qa.mondayOfYear(t), e, 2);
              },
              x: i(n),
              X: i(a),
              y: function (t, e) {
                return kt(t.getFullYear() % 100, e, 2);
              },
              Y: function (t, e) {
                return kt(t.getFullYear() % 1e4, e, 4);
              },
              Z: Qt,
              "%": function () {
                return "%";
              },
            },
            w = {
              a: function (t, e, n) {
                g.lastIndex = 0;
                var i = g.exec(e.slice(n));
                return i
                  ? ((t.w = p.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              A: function (t, e, n) {
                d.lastIndex = 0;
                var i = d.exec(e.slice(n));
                return i
                  ? ((t.w = f.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              b: function (t, e, n) {
                v.lastIndex = 0;
                var i = v.exec(e.slice(n));
                return i
                  ? ((t.m = y.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              B: function (t, e, n) {
                x.lastIndex = 0;
                var i = x.exec(e.slice(n));
                return i
                  ? ((t.m = _.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              c: function (t, e, n) {
                return r(t, m.c.toString(), e, n);
              },
              d: Yt,
              e: Yt,
              H: jt,
              I: jt,
              j: Bt,
              L: Wt,
              m: Ht,
              M: Ut,
              p: function (t, e, n) {
                var i = h.get(e.slice(n, (n += 2)).toLowerCase());
                return null == i ? -1 : ((t.p = i), n);
              },
              S: qt,
              U: Dt,
              w: It,
              W: Nt,
              x: function (t, e, n) {
                return r(t, m.x.toString(), e, n);
              },
              X: function (t, e, n) {
                return r(t, m.X.toString(), e, n);
              },
              y: zt,
              Y: Ft,
              Z: Xt,
              "%": Zt,
            };
          return i;
        })(t),
      };
      var e, A, s, u, i, T;
    };
    var eo = qr.locale({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      dateTime: "%a %b %e %X %Y",
      date: "%m/%d/%Y",
      time: "%H:%M:%S",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    });
    (qr.format = eo.numberFormat),
      (qr.geo = {}),
      ($t.prototype = {
        s: 0,
        t: 0,
        add: function (t) {
          Jt(t, this.t, no),
            Jt(no.s, this.s, this),
            this.s ? (this.t += no.t) : (this.s = no.t);
        },
        reset: function () {
          this.s = this.t = 0;
        },
        valueOf: function () {
          return this.s;
        },
      });
    var no = new $t();
    qr.geo.stream = function (t, e) {
      t && io.hasOwnProperty(t.type) ? io[t.type](t, e) : te(t, e);
    };
    var io = {
        Feature: function (t, e) {
          te(t.geometry, e);
        },
        FeatureCollection: function (t, e) {
          for (var n = t.features, i = -1, r = n.length; ++i < r; )
            te(n[i].geometry, e);
        },
      },
      ro = {
        Sphere: function (t, e) {
          e.sphere();
        },
        Point: function (t, e) {
          (t = t.coordinates), e.point(t[0], t[1], t[2]);
        },
        MultiPoint: function (t, e) {
          for (var n = t.coordinates, i = -1, r = n.length; ++i < r; )
            (t = n[i]), e.point(t[0], t[1], t[2]);
        },
        LineString: function (t, e) {
          ee(t.coordinates, e, 0);
        },
        MultiLineString: function (t, e) {
          for (var n = t.coordinates, i = -1, r = n.length; ++i < r; )
            ee(n[i], e, 0);
        },
        Polygon: function (t, e) {
          ne(t.coordinates, e);
        },
        MultiPolygon: function (t, e) {
          for (var n = t.coordinates, i = -1, r = n.length; ++i < r; )
            ne(n[i], e);
        },
        GeometryCollection: function (t, e) {
          for (var n = t.geometries, i = -1, r = n.length; ++i < r; )
            te(n[i], e);
        },
      };
    qr.geo.area = function (t) {
      return (ao = 0), qr.geo.stream(t, so), ao;
    };
    var ao,
      oo = new $t(),
      so = {
        sphere: function () {
          ao += 4 * Sa;
        },
        point: _,
        lineStart: _,
        lineEnd: _,
        polygonStart: function () {
          oo.reset(), (so.lineStart = ie);
        },
        polygonEnd: function () {
          var t = 2 * oo;
          (ao += t < 0 ? 4 * Sa + t : t),
            (so.lineStart = so.lineEnd = so.point = _);
        },
      };
    (qr.geo.bounds = (function () {
      function l(t, e) {
        y.push((m = [(d = t), (g = t)])), e < f && (f = e), p < e && (p = e);
      }
      function i(t, e) {
        var n = re([t * Pa, e * Pa]);
        if (_) {
          var i = oe(_, n),
            r = oe([i[1], -i[0], 0], i);
          ce(r), (r = le(r));
          var a = t - x,
            o = 0 < a ? 1 : -1,
            s = r[0] * Ca * o,
            u = 180 < ia(a);
          if (u ^ (o * x < s && s < o * t)) {
            var c = r[1] * Ca;
            p < c && (p = c);
          } else if (u ^ (o * x < (s = ((s + 360) % 360) - 180) && s < o * t)) {
            (c = -r[1] * Ca) < f && (f = c);
          } else e < f && (f = e), p < e && (p = e);
          u
            ? t < x
              ? h(d, t) > h(d, g) && (g = t)
              : h(t, g) > h(d, g) && (d = t)
            : d <= g
              ? (t < d && (d = t), g < t && (g = t))
              : x < t
                ? h(d, t) > h(d, g) && (g = t)
                : h(t, g) > h(d, g) && (d = t);
        } else l(t, e);
        (_ = n), (x = t);
      }
      function t() {
        w.point = i;
      }
      function e() {
        (m[0] = d), (m[1] = g), (w.point = l), (_ = null);
      }
      function n(t, e) {
        if (_) {
          var n = t - x;
          v += 180 < ia(n) ? n + (0 < n ? 360 : -360) : n;
        } else (o = t), (s = e);
        so.point(t, e), i(t, e);
      }
      function r() {
        so.lineStart();
      }
      function a() {
        n(o, s),
          so.lineEnd(),
          ia(v) > ma && (d = -(g = 180)),
          (m[0] = d),
          (m[1] = g),
          (_ = null);
      }
      function h(t, e) {
        return (e -= t) < 0 ? e + 360 : e;
      }
      function u(t, e) {
        return t[0] - e[0];
      }
      function c(t, e) {
        return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t;
      }
      var d,
        f,
        g,
        p,
        x,
        o,
        s,
        _,
        v,
        y,
        m,
        w = {
          point: l,
          lineStart: t,
          lineEnd: e,
          polygonStart: function () {
            (w.point = n),
              (w.lineStart = r),
              (w.lineEnd = a),
              (v = 0),
              so.polygonStart();
          },
          polygonEnd: function () {
            so.polygonEnd(),
              (w.point = l),
              (w.lineStart = t),
              (w.lineEnd = e),
              oo < 0
                ? ((d = -(g = 180)), (f = -(p = 90)))
                : ma < v
                  ? (p = 90)
                  : v < -ma && (f = -90),
              (m[0] = d),
              (m[1] = g);
          },
        };
      return function (t) {
        if (
          ((p = g = -(d = f = 1 / 0)),
          (y = []),
          qr.geo.stream(t, w),
          (a = y.length))
        ) {
          y.sort(u);
          for (var e = 1, n = [(s = y[0])]; e < a; ++e)
            c((r = y[e])[0], s) || c(r[1], s)
              ? (h(s[0], r[1]) > h(s[0], s[1]) && (s[1] = r[1]),
                h(r[0], s[1]) > h(s[0], s[1]) && (s[0] = r[0]))
              : n.push((s = r));
          for (
            var i, r, a, o = -1 / 0, s = ((e = 0), n[(a = n.length - 1)]);
            e <= a;
            s = r, ++e
          )
            (r = n[e]),
              (i = h(s[1], r[0])) > o && ((o = i), (d = r[0]), (g = s[1]));
        }
        return (
          (y = m = null),
          d === 1 / 0 || f === 1 / 0
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [d, f],
                [g, p],
              ]
        );
      };
    })()),
      (qr.geo.centroid = function (t) {
        (uo = co = lo = ho = fo = go = po = xo = _o = vo = yo = 0),
          qr.geo.stream(t, mo);
        var e = _o,
          n = vo,
          i = yo,
          r = e * e + n * n + i * i;
        return r < wa &&
          ((e = go),
          (n = po),
          (i = xo),
          co < ma && ((e = lo), (n = ho), (i = fo)),
          (r = e * e + n * n + i * i) < wa)
          ? [NaN, NaN]
          : [Math.atan2(n, e) * Ca, $(i / Math.sqrt(r)) * Ca];
      });
    var uo,
      co,
      lo,
      ho,
      fo,
      go,
      po,
      xo,
      _o,
      vo,
      yo,
      mo = {
        sphere: _,
        point: de,
        lineStart: ge,
        lineEnd: pe,
        polygonStart: function () {
          mo.lineStart = xe;
        },
        polygonEnd: function () {
          mo.lineStart = ge;
        },
      },
      wo = Se(
        ve,
        function (h) {
          var d,
            f = NaN,
            g = NaN,
            p = NaN;
          return {
            lineStart: function () {
              h.lineStart(), (d = 1);
            },
            point: function (t, e) {
              var n,
                i,
                r,
                a,
                o,
                s,
                u,
                c = 0 < t ? Sa : -Sa,
                l = ia(t - f);
              ia(l - Sa) < ma
                ? (h.point(f, (g = 0 < (g + e) / 2 ? Ta : -Ta)),
                  h.point(p, g),
                  h.lineEnd(),
                  h.lineStart(),
                  h.point(c, g),
                  h.point(t, g),
                  (d = 0))
                : p !== c &&
                  Sa <= l &&
                  (ia(f - p) < ma && (f -= p * ma),
                  ia(t - c) < ma && (t -= c * ma),
                  (n = f),
                  (i = g),
                  (r = t),
                  (a = e),
                  (u = Math.sin(n - r)),
                  (g =
                    ia(u) > ma
                      ? Math.atan(
                          (Math.sin(i) * (s = Math.cos(a)) * Math.sin(r) -
                            Math.sin(a) * (o = Math.cos(i)) * Math.sin(n)) /
                            (o * s * u),
                        )
                      : (i + a) / 2),
                  h.point(p, g),
                  h.lineEnd(),
                  h.lineStart(),
                  h.point(c, g),
                  (d = 0)),
                h.point((f = t), (g = e)),
                (p = c);
            },
            lineEnd: function () {
              h.lineEnd(), (f = g = NaN);
            },
            clean: function () {
              return 2 - d;
            },
          };
        },
        function (t, e, n, i) {
          var r;
          if (null == t)
            (r = n * Ta),
              i.point(-Sa, r),
              i.point(0, r),
              i.point(Sa, r),
              i.point(Sa, 0),
              i.point(Sa, -r),
              i.point(0, -r),
              i.point(-Sa, -r),
              i.point(-Sa, 0),
              i.point(-Sa, r);
          else if (ia(t[0] - e[0]) > ma) {
            var a = t[0] < e[0] ? Sa : -Sa;
            (r = (n * a) / 2), i.point(-a, r), i.point(0, r), i.point(a, r);
          } else i.point(e[0], e[1]);
        },
        [-Sa, -Sa / 2],
      ),
      So = 1e9;
    (qr.geo.clipExtent = function () {
      var e,
        n,
        i,
        r,
        a,
        o,
        s = {
          stream: function (t) {
            return a && (a.valid = !1), ((a = o(t)).valid = !0), a;
          },
          extent: function (t) {
            return arguments.length
              ? ((o = Ce(
                  (e = +t[0][0]),
                  (n = +t[0][1]),
                  (i = +t[1][0]),
                  (r = +t[1][1]),
                )),
                a && ((a.valid = !1), (a = null)),
                s)
              : [
                  [e, n],
                  [i, r],
                ];
          },
        };
      return s.extent([
        [0, 0],
        [960, 500],
      ]);
    }),
      ((qr.geo.conicEqualArea = function () {
        return Le(Me);
      }).raw = Me),
      (qr.geo.albers = function () {
        return qr.geo
          .conicEqualArea()
          .rotate([96, 0])
          .center([-0.6, 38.7])
          .parallels([29.5, 45.5])
          .scale(1070);
      }),
      (qr.geo.albersUsa = function () {
        function r(t) {
          var e = t[0],
            n = t[1];
          return (i = null), a(e, n), i || (o(e, n), i) || s(e, n), i;
        }
        var i,
          a,
          o,
          s,
          u = qr.geo.albers(),
          c = qr.geo
            .conicEqualArea()
            .rotate([154, 0])
            .center([-2, 58.5])
            .parallels([55, 65]),
          l = qr.geo
            .conicEqualArea()
            .rotate([157, 0])
            .center([-3, 19.9])
            .parallels([8, 18]),
          h = {
            point: function (t, e) {
              i = [t, e];
            },
          };
        return (
          (r.invert = function (t) {
            var e = u.scale(),
              n = u.translate(),
              i = (t[0] - n[0]) / e,
              r = (t[1] - n[1]) / e;
            return (
              0.12 <= r && r < 0.234 && -0.425 <= i && i < -0.214
                ? c
                : 0.166 <= r && r < 0.234 && -0.214 <= i && i < -0.115
                  ? l
                  : u
            ).invert(t);
          }),
          (r.stream = function (t) {
            var n = u.stream(t),
              i = c.stream(t),
              r = l.stream(t);
            return {
              point: function (t, e) {
                n.point(t, e), i.point(t, e), r.point(t, e);
              },
              sphere: function () {
                n.sphere(), i.sphere(), r.sphere();
              },
              lineStart: function () {
                n.lineStart(), i.lineStart(), r.lineStart();
              },
              lineEnd: function () {
                n.lineEnd(), i.lineEnd(), r.lineEnd();
              },
              polygonStart: function () {
                n.polygonStart(), i.polygonStart(), r.polygonStart();
              },
              polygonEnd: function () {
                n.polygonEnd(), i.polygonEnd(), r.polygonEnd();
              },
            };
          }),
          (r.precision = function (t) {
            return arguments.length
              ? (u.precision(t), c.precision(t), l.precision(t), r)
              : u.precision();
          }),
          (r.scale = function (t) {
            return arguments.length
              ? (u.scale(t),
                c.scale(0.35 * t),
                l.scale(t),
                r.translate(u.translate()))
              : u.scale();
          }),
          (r.translate = function (t) {
            if (!arguments.length) return u.translate();
            var e = u.scale(),
              n = +t[0],
              i = +t[1];
            return (
              (a = u
                .translate(t)
                .clipExtent([
                  [n - 0.455 * e, i - 0.238 * e],
                  [n + 0.455 * e, i + 0.238 * e],
                ])
                .stream(h).point),
              (o = c
                .translate([n - 0.307 * e, i + 0.201 * e])
                .clipExtent([
                  [n - 0.425 * e + ma, i + 0.12 * e + ma],
                  [n - 0.214 * e - ma, i + 0.234 * e - ma],
                ])
                .stream(h).point),
              (s = l
                .translate([n - 0.205 * e, i + 0.212 * e])
                .clipExtent([
                  [n - 0.214 * e + ma, i + 0.166 * e + ma],
                  [n - 0.115 * e - ma, i + 0.234 * e - ma],
                ])
                .stream(h).point),
              r
            );
          }),
          r.scale(1070)
        );
      });
    var bo,
      Ao,
      To,
      Po,
      Co,
      Lo,
      Mo = {
        point: _,
        lineStart: _,
        lineEnd: _,
        polygonStart: function () {
          (Ao = 0), (Mo.lineStart = Ee);
        },
        polygonEnd: function () {
          (Mo.lineStart = Mo.lineEnd = Mo.point = _), (bo += ia(Ao / 2));
        },
      },
      Eo = {
        point: function (t, e) {
          t < To && (To = t),
            Co < t && (Co = t),
            e < Po && (Po = e),
            Lo < e && (Lo = e);
        },
        lineStart: _,
        lineEnd: _,
        polygonStart: _,
        polygonEnd: _,
      },
      Vo = {
        point: ke,
        lineStart: Re,
        lineEnd: Oe,
        polygonStart: function () {
          Vo.lineStart = Ie;
        },
        polygonEnd: function () {
          (Vo.point = ke), (Vo.lineStart = Re), (Vo.lineEnd = Oe);
        },
      };
    (qr.geo.path = function () {
      function e(t) {
        return (
          t &&
            ("function" == typeof u && o.pointRadius(+u.apply(this, arguments)),
            (s && s.valid) || (s = a(o)),
            qr.geo.stream(t, s)),
          o.result()
        );
      }
      function i() {
        return (s = null), e;
      }
      var r,
        n,
        a,
        o,
        s,
        u = 4.5;
      return (
        (e.area = function (t) {
          return (bo = 0), qr.geo.stream(t, a(Mo)), bo;
        }),
        (e.centroid = function (t) {
          return (
            (lo = ho = fo = go = po = xo = _o = vo = yo = 0),
            qr.geo.stream(t, a(Vo)),
            yo
              ? [_o / yo, vo / yo]
              : xo
                ? [go / xo, po / xo]
                : fo
                  ? [lo / fo, ho / fo]
                  : [NaN, NaN]
          );
        }),
        (e.bounds = function (t) {
          return (
            (Co = Lo = -(To = Po = 1 / 0)),
            qr.geo.stream(t, a(Eo)),
            [
              [To, Po],
              [Co, Lo],
            ]
          );
        }),
        (e.projection = function (t) {
          return arguments.length
            ? ((a = (r = t)
                ? t.stream ||
                  ((n = t),
                  (e = Ne(function (t, e) {
                    return n([t * Ca, e * Ca]);
                  })),
                  function (t) {
                    return Ye(e(t));
                  })
                : R),
              i())
            : r;
          var n, e;
        }),
        (e.context = function (t) {
          return arguments.length
            ? ((o = null == (n = t) ? new Ve() : new De(t)),
              "function" != typeof u && o.pointRadius(u),
              i())
            : n;
        }),
        (e.pointRadius = function (t) {
          return arguments.length
            ? ((u = "function" == typeof t ? t : (o.pointRadius(+t), +t)), e)
            : u;
        }),
        e.projection(qr.geo.albersUsa()).context(null)
      );
    }),
      (qr.geo.transform = function (i) {
        return {
          stream: function (t) {
            var e = new Fe(t);
            for (var n in i) e[n] = i[n];
            return e;
          },
        };
      }),
      (Fe.prototype = {
        point: function (t, e) {
          this.stream.point(t, e);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      }),
      (qr.geo.projection = Xe),
      (qr.geo.projectionMutator = He),
      ((qr.geo.equirectangular = function () {
        return Xe(Be);
      }).raw = Be.invert =
        Be),
      (qr.geo.rotation = function (e) {
        function t(t) {
          return ((t = e(t[0] * Pa, t[1] * Pa))[0] *= Ca), (t[1] *= Ca), t;
        }
        return (
          (e = Ue((e[0] % 360) * Pa, e[1] * Pa, 2 < e.length ? e[2] * Pa : 0)),
          (t.invert = function (t) {
            return (
              ((t = e.invert(t[0] * Pa, t[1] * Pa))[0] *= Ca), (t[1] *= Ca), t
            );
          }),
          t
        );
      }),
      (je.invert = Be),
      (qr.geo.circle = function () {
        function e() {
          var t = "function" == typeof a ? a.apply(this, arguments) : a,
            n = Ue(-t[0] * Pa, -t[1] * Pa, 0).invert,
            i = [];
          return (
            r(null, null, 1, {
              point: function (t, e) {
                i.push((t = n(t, e))), (t[0] *= Ca), (t[1] *= Ca);
              },
            }),
            { type: "Polygon", coordinates: [i] }
          );
        }
        var n,
          r,
          a = [0, 0],
          i = 6;
        return (
          (e.origin = function (t) {
            return arguments.length ? ((a = t), e) : a;
          }),
          (e.angle = function (t) {
            return arguments.length ? ((r = Ze((n = +t) * Pa, i * Pa)), e) : n;
          }),
          (e.precision = function (t) {
            return arguments.length ? ((r = Ze(n * Pa, (i = +t) * Pa)), e) : i;
          }),
          e.angle(90)
        );
      }),
      (qr.geo.distance = function (t, e) {
        var n,
          i = (e[0] - t[0]) * Pa,
          r = t[1] * Pa,
          a = e[1] * Pa,
          o = Math.sin(i),
          s = Math.cos(i),
          u = Math.sin(r),
          c = Math.cos(r),
          l = Math.sin(a),
          h = Math.cos(a);
        return Math.atan2(
          Math.sqrt((n = h * o) * n + (n = c * l - u * h * s) * n),
          u * l + c * h * s,
        );
      }),
      (qr.geo.graticule = function () {
        function e() {
          return { type: "MultiLineString", coordinates: t() };
        }
        function t() {
          return qr
            .range(Math.ceil(a / x) * x, r, x)
            .map(d)
            .concat(qr.range(Math.ceil(c / _) * _, u, _).map(f))
            .concat(
              qr
                .range(Math.ceil(i / g) * g, n, g)
                .filter(function (t) {
                  return ia(t % x) > ma;
                })
                .map(l),
            )
            .concat(
              qr
                .range(Math.ceil(s / p) * p, o, p)
                .filter(function (t) {
                  return ia(t % _) > ma;
                })
                .map(h),
            );
        }
        var n,
          i,
          r,
          a,
          o,
          s,
          u,
          c,
          l,
          h,
          d,
          f,
          g = 10,
          p = g,
          x = 90,
          _ = 360,
          v = 2.5;
        return (
          (e.lines = function () {
            return t().map(function (t) {
              return { type: "LineString", coordinates: t };
            });
          }),
          (e.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                d(a).concat(
                  f(u).slice(1),
                  d(r).reverse().slice(1),
                  f(c).reverse().slice(1),
                ),
              ],
            };
          }),
          (e.extent = function (t) {
            return arguments.length
              ? e.majorExtent(t).minorExtent(t)
              : e.minorExtent();
          }),
          (e.majorExtent = function (t) {
            return arguments.length
              ? ((a = +t[0][0]),
                (r = +t[1][0]),
                (c = +t[0][1]),
                (u = +t[1][1]),
                r < a && ((t = a), (a = r), (r = t)),
                u < c && ((t = c), (c = u), (u = t)),
                e.precision(v))
              : [
                  [a, c],
                  [r, u],
                ];
          }),
          (e.minorExtent = function (t) {
            return arguments.length
              ? ((i = +t[0][0]),
                (n = +t[1][0]),
                (s = +t[0][1]),
                (o = +t[1][1]),
                n < i && ((t = i), (i = n), (n = t)),
                o < s && ((t = s), (s = o), (o = t)),
                e.precision(v))
              : [
                  [i, s],
                  [n, o],
                ];
          }),
          (e.step = function (t) {
            return arguments.length
              ? e.majorStep(t).minorStep(t)
              : e.minorStep();
          }),
          (e.majorStep = function (t) {
            return arguments.length ? ((x = +t[0]), (_ = +t[1]), e) : [x, _];
          }),
          (e.minorStep = function (t) {
            return arguments.length ? ((g = +t[0]), (p = +t[1]), e) : [g, p];
          }),
          (e.precision = function (t) {
            return arguments.length
              ? ((v = +t),
                (l = $e(s, o, 90)),
                (h = Je(i, n, v)),
                (d = $e(c, u, 90)),
                (f = Je(a, r, v)),
                e)
              : v;
          }),
          e
            .majorExtent([
              [-180, -90 + ma],
              [180, 90 - ma],
            ])
            .minorExtent([
              [-180, -80 - ma],
              [180, 80 + ma],
            ])
        );
      }),
      (qr.geo.greatArc = function () {
        function e() {
          return {
            type: "LineString",
            coordinates: [
              n || r.apply(this, arguments),
              i || a.apply(this, arguments),
            ],
          };
        }
        var n,
          i,
          r = tn,
          a = en;
        return (
          (e.distance = function () {
            return qr.geo.distance(
              n || r.apply(this, arguments),
              i || a.apply(this, arguments),
            );
          }),
          (e.source = function (t) {
            return arguments.length
              ? ((n = "function" == typeof (r = t) ? null : t), e)
              : r;
          }),
          (e.target = function (t) {
            return arguments.length
              ? ((i = "function" == typeof (a = t) ? null : t), e)
              : a;
          }),
          (e.precision = function () {
            return arguments.length ? e : 0;
          }),
          e
        );
      }),
      (qr.geo.interpolate = function (t, e) {
        return (
          (n = t[0] * Pa),
          (i = t[1] * Pa),
          (r = e[0] * Pa),
          (a = e[1] * Pa),
          (o = Math.cos(i)),
          (s = Math.sin(i)),
          (u = Math.cos(a)),
          (c = Math.sin(a)),
          (l = o * Math.cos(n)),
          (h = o * Math.sin(n)),
          (d = u * Math.cos(r)),
          (f = u * Math.sin(r)),
          (g = 2 * Math.asin(Math.sqrt(tt(a - i) + o * u * tt(r - n)))),
          (p = 1 / Math.sin(g)),
          ((x = g
            ? function (t) {
                var e = Math.sin((t *= g)) * p,
                  n = Math.sin(g - t) * p,
                  i = n * l + e * d,
                  r = n * h + e * f,
                  a = n * s + e * c;
                return [
                  Math.atan2(r, i) * Ca,
                  Math.atan2(a, Math.sqrt(i * i + r * r)) * Ca,
                ];
              }
            : function () {
                return [n * Ca, i * Ca];
              }).distance = g),
          x
        );
        var n, i, r, a, o, s, u, c, l, h, d, f, g, p, x;
      }),
      (qr.geo.length = function (t) {
        return (Go = 0), qr.geo.stream(t, ko), Go;
      });
    var Go,
      ko = {
        sphere: _,
        point: _,
        lineStart: function () {
          function n(t, e) {
            var n = Math.sin((e *= Pa)),
              i = Math.cos(e),
              r = ia((t *= Pa) - o),
              a = Math.cos(r);
            (Go += Math.atan2(
              Math.sqrt(
                (r = i * Math.sin(r)) * r + (r = u * n - s * i * a) * r,
              ),
              s * n + u * i * a,
            )),
              (o = t),
              (s = n),
              (u = i);
          }
          var o, s, u;
          (ko.point = function (t, e) {
            (o = t * Pa),
              (s = Math.sin((e *= Pa))),
              (u = Math.cos(e)),
              (ko.point = n);
          }),
            (ko.lineEnd = function () {
              ko.point = ko.lineEnd = _;
            });
        },
        lineEnd: _,
        polygonStart: _,
        polygonEnd: _,
      },
      Ro = nn(
        function (t) {
          return Math.sqrt(2 / (1 + t));
        },
        function (t) {
          return 2 * Math.asin(t / 2);
        },
      );
    (qr.geo.azimuthalEqualArea = function () {
      return Xe(Ro);
    }).raw = Ro;
    var Oo = nn(function (t) {
      var e = Math.acos(t);
      return e && e / Math.sin(e);
    }, R);
    ((qr.geo.azimuthalEquidistant = function () {
      return Xe(Oo);
    }).raw = Oo),
      ((qr.geo.conicConformal = function () {
        return Le(rn);
      }).raw = rn),
      ((qr.geo.conicEquidistant = function () {
        return Le(an);
      }).raw = an);
    var Io = nn(function (t) {
      return 1 / t;
    }, Math.atan);
    ((qr.geo.gnomonic = function () {
      return Xe(Io);
    }).raw = Io),
      (on.invert = function (t, e) {
        return [t, 2 * Math.atan(Math.exp(e)) - Ta];
      }),
      ((qr.geo.mercator = function () {
        return sn(on);
      }).raw = on);
    var Do = nn(function () {
      return 1;
    }, Math.asin);
    (qr.geo.orthographic = function () {
      return Xe(Do);
    }).raw = Do;
    var No = nn(
      function (t) {
        return 1 / (1 + t);
      },
      function (t) {
        return 2 * Math.atan(t);
      },
    );
    ((qr.geo.stereographic = function () {
      return Xe(No);
    }).raw = No),
      (un.invert = function (t, e) {
        return [-e, 2 * Math.atan(Math.exp(t)) - Ta];
      }),
      ((qr.geo.transverseMercator = function () {
        var t = sn(un),
          e = t.center,
          n = t.rotate;
        return (
          (t.center = function (t) {
            return t ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]];
          }),
          (t.rotate = function (t) {
            return t
              ? n([t[0], t[1], 2 < t.length ? t[2] + 90 : 90])
              : [(t = n())[0], t[1], t[2] - 90];
          }),
          n([0, 0, 90])
        );
      }).raw = un),
      (qr.geom = {}),
      (qr.geom.hull = function (t) {
        function e(t) {
          if (t.length < 3) return [];
          var e,
            n = wt(d),
            i = wt(f),
            r = t.length,
            a = [],
            o = [];
          for (e = 0; e < r; e++)
            a.push([+n.call(this, t[e], e), +i.call(this, t[e], e), e]);
          for (a.sort(dn), e = 0; e < r; e++) o.push([a[e][0], -a[e][1]]);
          var s = hn(a),
            u = hn(o),
            c = u[0] === s[0],
            l = u[u.length - 1] === s[s.length - 1],
            h = [];
          for (e = s.length - 1; 0 <= e; --e) h.push(t[a[s[e]][2]]);
          for (e = +c; e < u.length - l; ++e) h.push(t[a[u[e]][2]]);
          return h;
        }
        var d = cn,
          f = ln;
        return arguments.length
          ? e(t)
          : ((e.x = function (t) {
              return arguments.length ? ((d = t), e) : d;
            }),
            (e.y = function (t) {
              return arguments.length ? ((f = t), e) : f;
            }),
            e);
      }),
      (qr.geom.polygon = function (t) {
        return ua(t, Fo), t;
      });
    var Fo = (qr.geom.polygon.prototype = []);
    (Fo.area = function () {
      for (var t, e = -1, n = this.length, i = this[n - 1], r = 0; ++e < n; )
        (t = i), (i = this[e]), (r += t[1] * i[0] - t[0] * i[1]);
      return 0.5 * r;
    }),
      (Fo.centroid = function (t) {
        var e,
          n,
          i = -1,
          r = this.length,
          a = 0,
          o = 0,
          s = this[r - 1];
        for (arguments.length || (t = -1 / (6 * this.area())); ++i < r; )
          (e = s),
            (s = this[i]),
            (n = e[0] * s[1] - s[0] * e[1]),
            (a += (e[0] + s[0]) * n),
            (o += (e[1] + s[1]) * n);
        return [a * t, o * t];
      }),
      (Fo.clip = function (t) {
        for (
          var e,
            n,
            i,
            r,
            a,
            o,
            s = pn(t),
            u = -1,
            c = this.length - pn(this),
            l = this[c - 1];
          ++u < c;

        ) {
          for (
            e = t.slice(),
              t.length = 0,
              r = this[u],
              a = e[(i = e.length - s) - 1],
              n = -1;
            ++n < i;

          )
            fn((o = e[n]), l, r)
              ? (fn(a, l, r) || t.push(gn(a, o, l, r)), t.push(o))
              : fn(a, l, r) && t.push(gn(a, o, l, r)),
              (a = o);
          s && t.push(t[0]), (l = r);
        }
        return t;
      });
    var zo,
      Xo,
      Ho,
      Yo,
      Bo,
      jo = [],
      Uo = [];
    (bn.prototype.prepare = function () {
      for (var t, e = this.edges, n = e.length; n--; )
        ((t = e[n].edge).b && t.a) || e.splice(n, 1);
      return e.sort(An), e.length;
    }),
      (Gn.prototype = {
        start: function () {
          return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function () {
          return this.edge.l === this.site ? this.edge.b : this.edge.a;
        },
      }),
      (kn.prototype = {
        insert: function (t, e) {
          var n, i, r;
          if (t) {
            if (((e.P = t), (e.N = t.N), t.N && (t.N.P = e), (t.N = e), t.R)) {
              for (t = t.R; t.L; ) t = t.L;
              t.L = e;
            } else t.R = e;
            n = t;
          } else
            n = this._
              ? ((t = Dn(this._)), (e.P = null), ((e.N = t).P = t.L = e), t)
              : ((e.P = e.N = null), (this._ = e), null);
          for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C; )
            n === (i = n.U).L
              ? (r = i.R) && r.C
                ? ((n.C = r.C = !1), (i.C = !0), (t = i))
                : (t === n.R && (On(this, n), (n = (t = n).U)),
                  (n.C = !1),
                  (i.C = !0),
                  In(this, i))
              : (r = i.L) && r.C
                ? ((n.C = r.C = !1), (i.C = !0), (t = i))
                : (t === n.L && (In(this, n), (n = (t = n).U)),
                  (n.C = !1),
                  (i.C = !0),
                  On(this, i)),
              (n = t.U);
          this._.C = !1;
        },
        remove: function (t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
          var e,
            n,
            i,
            r = t.U,
            a = t.L,
            o = t.R;
          if (
            ((n = a ? (o ? Dn(o) : a) : o),
            r ? (r.L === t ? (r.L = n) : (r.R = n)) : (this._ = n),
            a && o
              ? ((i = n.C),
                (n.C = t.C),
                ((n.L = a).U = n) !== o
                  ? ((r = n.U),
                    (n.U = t.U),
                    (t = n.R),
                    (r.L = t),
                    ((n.R = o).U = n))
                  : ((n.U = r), (t = (r = n).R)))
              : ((i = t.C), (t = n)),
            t && (t.U = r),
            !i)
          ) {
            if (t && t.C) return void (t.C = !1);
            do {
              if (t === this._) break;
              if (t === r.L) {
                if (
                  ((e = r.R).C &&
                    ((e.C = !1), (r.C = !0), On(this, r), (e = r.R)),
                  (e.L && e.L.C) || (e.R && e.R.C))
                ) {
                  (e.R && e.R.C) ||
                    ((e.L.C = !1), (e.C = !0), In(this, e), (e = r.R)),
                    (e.C = r.C),
                    (r.C = e.R.C = !1),
                    On(this, r),
                    (t = this._);
                  break;
                }
              } else if (
                ((e = r.L).C &&
                  ((e.C = !1), (r.C = !0), In(this, r), (e = r.L)),
                (e.L && e.L.C) || (e.R && e.R.C))
              ) {
                (e.L && e.L.C) ||
                  ((e.R.C = !1), (e.C = !0), On(this, e), (e = r.L)),
                  (e.C = r.C),
                  (r.C = e.L.C = !1),
                  In(this, r),
                  (t = this._);
                break;
              }
              (e.C = !0), (r = (t = r).U);
            } while (!t.C);
            t && (t.C = !1);
          }
        },
      }),
      (qr.geom.voronoi = function (t) {
        function e(r) {
          var a = new Array(r.length),
            o = l[0][0],
            s = l[0][1],
            u = l[1][0],
            c = l[1][1];
          return (
            Nn(n(r), l).cells.forEach(function (t, e) {
              var n = t.edges,
                i = t.site;
              (a[e] = n.length
                ? n.map(function (t) {
                    var e = t.start();
                    return [e.x, e.y];
                  })
                : i.x >= o && i.x <= u && i.y >= s && i.y <= c
                  ? [
                      [o, c],
                      [u, c],
                      [u, s],
                      [o, s],
                    ]
                  : []).point = r[e];
            }),
            a
          );
        }
        function n(t) {
          return t.map(function (t, e) {
            return {
              x: Math.round(a(t, e) / ma) * ma,
              y: Math.round(o(t, e) / ma) * ma,
              i: e,
            };
          });
        }
        var i = cn,
          r = ln,
          a = i,
          o = r,
          l = qo;
        return t
          ? e(t)
          : ((e.links = function (e) {
              return Nn(n(e))
                .edges.filter(function (t) {
                  return t.l && t.r;
                })
                .map(function (t) {
                  return { source: e[t.l.i], target: e[t.r.i] };
                });
            }),
            (e.triangles = function (d) {
              var f = [];
              return (
                Nn(n(d)).cells.forEach(function (t, e) {
                  for (
                    var n,
                      i = t.site,
                      r = t.edges.sort(An),
                      a = -1,
                      o = r.length,
                      s = r[o - 1].edge,
                      u = s.l === i ? s.r : s.l;
                    ++a < o;

                  )
                    s,
                      (n = u),
                      (u = (s = r[a].edge).l === i ? s.r : s.l),
                      e < n.i &&
                        e < u.i &&
                        ((l = n),
                        (h = u),
                        ((c = i).x - h.x) * (l.y - c.y) -
                          (c.x - l.x) * (h.y - c.y) <
                          0) &&
                        f.push([d[e], d[n.i], d[u.i]]);
                  var c, l, h;
                }),
                f
              );
            }),
            (e.x = function (t) {
              return arguments.length ? ((a = wt((i = t))), e) : i;
            }),
            (e.y = function (t) {
              return arguments.length ? ((o = wt((r = t))), e) : r;
            }),
            (e.clipExtent = function (t) {
              return arguments.length
                ? ((l = null == t ? qo : t), e)
                : l === qo
                  ? null
                  : l;
            }),
            (e.size = function (t) {
              return arguments.length
                ? e.clipExtent(t && [[0, 0], t])
                : l === qo
                  ? null
                  : l && l[1];
            }),
            e);
      });
    var qo = [
      [-1e6, -1e6],
      [1e6, 1e6],
    ];
    (qr.geom.delaunay = function (t) {
      return qr.geom.voronoi().triangles(t);
    }),
      (qr.geom.quadtree = function (t, v, y, m, w) {
        function e(t) {
          function f(t, e, n, i, r, a, o, s) {
            if (!isNaN(n) && !isNaN(i))
              if (t.leaf) {
                var u = t.x,
                  c = t.y;
                if (null != u)
                  if (ia(u - n) + ia(c - i) < 0.01) h(t, e, n, i, r, a, o, s);
                  else {
                    var l = t.point;
                    (t.x = t.y = t.point = null),
                      h(t, l, u, c, r, a, o, s),
                      h(t, e, n, i, r, a, o, s);
                  }
                else (t.x = n), (t.y = i), (t.point = e);
              } else h(t, e, n, i, r, a, o, s);
          }
          function h(t, e, n, i, r, a, o, s) {
            var u = 0.5 * (r + o),
              c = 0.5 * (a + s),
              l = u <= n,
              h = c <= i,
              d = (h << 1) | l;
            (t.leaf = !1),
              l ? (r = u) : (o = u),
              h ? (a = c) : (s = c),
              f(
                (t =
                  t.nodes[d] ||
                  (t.nodes[d] = {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null,
                  })),
                e,
                n,
                i,
                r,
                a,
                o,
                s,
              );
          }
          var e,
            n,
            i,
            r,
            a,
            o,
            s,
            u,
            c,
            l = wt(b),
            d = wt(T);
          if (null != v) (o = v), (s = y), (u = m), (c = w);
          else if (
            ((u = c = -(o = s = 1 / 0)), (n = []), (i = []), (a = t.length), S)
          )
            for (r = 0; r < a; ++r)
              (e = t[r]).x < o && (o = e.x),
                e.y < s && (s = e.y),
                e.x > u && (u = e.x),
                e.y > c && (c = e.y),
                n.push(e.x),
                i.push(e.y);
          else
            for (r = 0; r < a; ++r) {
              var g = +l((e = t[r]), r),
                p = +d(e, r);
              g < o && (o = g),
                p < s && (s = p),
                u < g && (u = g),
                c < p && (c = p),
                n.push(g),
                i.push(p);
            }
          var x = u - o,
            _ = c - s;
          _ < x ? (c = s + x) : (u = o + _);
          var A = {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null,
            add: function (t) {
              f(A, t, +l(t, ++r), +d(t, r), o, s, u, c);
            },
          };
          if (
            ((A.visit = function (t) {
              !(function t(e, n, i, r, a, o) {
                if (!e(n, i, r, a, o)) {
                  var s = 0.5 * (i + a),
                    u = 0.5 * (r + o),
                    c = n.nodes;
                  c[0] && t(e, c[0], i, r, s, u),
                    c[1] && t(e, c[1], s, r, a, u),
                    c[2] && t(e, c[2], i, u, s, o),
                    c[3] && t(e, c[3], s, u, a, o);
                }
              })(t, A, o, s, u, c);
            }),
            (A.find = function (t) {
              return (
                (e = A),
                (x = t[0]),
                (_ = t[1]),
                (b = 1 / 0),
                (function t(e, n, i, r, a) {
                  if (!(m < n || w < i || r < v || a < y)) {
                    if ((o = e.point)) {
                      var o,
                        s = x - e.x,
                        u = _ - e.y,
                        c = s * s + u * u;
                      if (c < b) {
                        var l = Math.sqrt((b = c));
                        (v = x - l),
                          (y = _ - l),
                          (m = x + l),
                          (w = _ + l),
                          (S = o);
                      }
                    }
                    for (
                      var h = e.nodes,
                        d = 0.5 * (n + r),
                        f = 0.5 * (i + a),
                        g = ((f <= _) << 1) | (d <= x),
                        p = g + 4;
                      g < p;
                      ++g
                    )
                      if ((e = h[3 & g]))
                        switch (3 & g) {
                          case 0:
                            t(e, n, i, d, f);
                            break;
                          case 1:
                            t(e, d, i, r, f);
                            break;
                          case 2:
                            t(e, n, f, d, a);
                            break;
                          case 3:
                            t(e, d, f, r, a);
                        }
                  }
                })(e, (v = o), (y = s), (m = u), (w = c)),
                S
              );
              var e, x, _, v, y, m, w, S, b;
            }),
            (r = -1),
            null == v)
          ) {
            for (; ++r < a; ) f(A, t[r], n[r], i[r], o, s, u, c);
            --r;
          } else t.forEach(A.add);
          return (n = i = t = e = null), A;
        }
        var S,
          b = cn,
          T = ln;
        return (S = arguments.length)
          ? ((b = zn),
            (T = Xn),
            3 === S && ((w = y), (m = v), (y = v = 0)),
            e(t))
          : ((e.x = function (t) {
              return arguments.length ? ((b = t), e) : b;
            }),
            (e.y = function (t) {
              return arguments.length ? ((T = t), e) : T;
            }),
            (e.extent = function (t) {
              return arguments.length
                ? (null == t
                    ? (v = y = m = w = null)
                    : ((v = +t[0][0]),
                      (y = +t[0][1]),
                      (m = +t[1][0]),
                      (w = +t[1][1])),
                  e)
                : null == v
                  ? null
                  : [
                      [v, y],
                      [m, w],
                    ];
            }),
            (e.size = function (t) {
              return arguments.length
                ? (null == t
                    ? (v = y = m = w = null)
                    : ((v = y = 0), (m = +t[0]), (w = +t[1])),
                  e)
                : null == v
                  ? null
                  : [m - v, w - y];
            }),
            e);
      }),
      (qr.interpolateRgb = Hn),
      (qr.interpolateObject = Yn),
      (qr.interpolateNumber = Bn),
      (qr.interpolateString = jn);
    var Wo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Qo = new RegExp(Wo.source, "g");
    (qr.interpolate = Un),
      (qr.interpolators = [
        function (t, e) {
          var n = typeof e;
          return (
            "string" === n
              ? za.has(e.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(e)
                ? Hn
                : jn
              : e instanceof et
                ? Hn
                : Array.isArray(e)
                  ? qn
                  : "object" === n && isNaN(e)
                    ? Yn
                    : Bn
          )(t, e);
        },
      ]),
      (qr.interpolateArray = qn);
    var Zo = function () {
        return R;
      },
      Ko = qr.map({
        linear: Zo,
        poly: function (e) {
          return function (t) {
            return Math.pow(t, e);
          };
        },
        quad: function () {
          return Zn;
        },
        cubic: function () {
          return Kn;
        },
        sin: function () {
          return Jn;
        },
        exp: function () {
          return ti;
        },
        circle: function () {
          return ei;
        },
        elastic: function (e, n) {
          var i;
          return (
            arguments.length < 2 && (n = 0.45),
            (i = arguments.length
              ? (n / ba) * Math.asin(1 / e)
              : ((e = 1), n / 4)),
            function (t) {
              return (
                1 + e * Math.pow(2, -10 * t) * Math.sin(((t - i) * ba) / n)
              );
            }
          );
        },
        back: function (e) {
          return (
            e || (e = 1.70158),
            function (t) {
              return t * t * ((e + 1) * t - e);
            }
          );
        },
        bounce: function () {
          return ni;
        },
      }),
      $o = qr.map({
        in: R,
        out: Wn,
        "in-out": Qn,
        "out-in": function (t) {
          return Qn(Wn(t));
        },
      });
    (qr.ease = function (t) {
      var e,
        n = t.indexOf("-"),
        i = 0 <= n ? t.slice(0, n) : t,
        r = 0 <= n ? t.slice(n + 1) : "in";
      return (
        (i = Ko.get(i) || Zo),
        (r = $o.get(r) || R),
        (e = r(i.apply(null, Wr.call(arguments, 1)))),
        function (t) {
          return t <= 0 ? 0 : 1 <= t ? 1 : e(t);
        }
      );
    }),
      (qr.interpolateHcl = function (t, e) {
        (t = qr.hcl(t)), (e = qr.hcl(e));
        var n = t.h,
          i = t.c,
          r = t.l,
          a = e.h - n,
          o = e.c - i,
          s = e.l - r;
        return (
          isNaN(o) && ((o = 0), (i = isNaN(i) ? e.c : i)),
          isNaN(a)
            ? ((a = 0), (n = isNaN(n) ? e.h : n))
            : 180 < a
              ? (a -= 360)
              : a < -180 && (a += 360),
          function (t) {
            return at(n + a * t, i + o * t, r + s * t) + "";
          }
        );
      }),
      (qr.interpolateHsl = function (t, e) {
        (t = qr.hsl(t)), (e = qr.hsl(e));
        var n = t.h,
          i = t.s,
          r = t.l,
          a = e.h - n,
          o = e.s - i,
          s = e.l - r;
        return (
          isNaN(o) && ((o = 0), (i = isNaN(i) ? e.s : i)),
          isNaN(a)
            ? ((a = 0), (n = isNaN(n) ? e.h : n))
            : 180 < a
              ? (a -= 360)
              : a < -180 && (a += 360),
          function (t) {
            return it(n + a * t, i + o * t, r + s * t) + "";
          }
        );
      }),
      (qr.interpolateLab = function (t, e) {
        (t = qr.lab(t)), (e = qr.lab(e));
        var n = t.l,
          i = t.a,
          r = t.b,
          a = e.l - n,
          o = e.a - i,
          s = e.b - r;
        return function (t) {
          return st(n + a * t, i + o * t, r + s * t) + "";
        };
      }),
      (qr.interpolateRound = ii),
      (qr.transform = function (t) {
        var n = Zr.createElementNS(qr.ns.prefix.svg, "g");
        return (qr.transform = function (t) {
          if (null != t) {
            n.setAttribute("transform", t);
            var e = n.transform.baseVal.consolidate();
          }
          return new ri(e ? e.matrix : Jo);
        })(t);
      }),
      (ri.prototype.toString = function () {
        return (
          "translate(" +
          this.translate +
          ")rotate(" +
          this.rotate +
          ")skewX(" +
          this.skew +
          ")scale(" +
          this.scale +
          ")"
        );
      });
    var Jo = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    (qr.interpolateTransform = ui),
      (qr.layout = {}),
      (qr.layout.bundle = function () {
        return function (t) {
          for (var e = [], n = -1, i = t.length; ++n < i; ) e.push(hi(t[n]));
          return e;
        };
      }),
      (qr.layout.chord = function () {
        function t() {
          var t,
            e,
            n,
            i,
            r,
            a = {},
            o = [],
            s = qr.range(m),
            u = [];
          for (_ = [], v = [], t = 0, i = -1; ++i < m; ) {
            for (e = 0, r = -1; ++r < m; ) e += y[i][r];
            o.push(e), u.push(qr.range(m)), (t += e);
          }
          for (
            w &&
              s.sort(function (t, e) {
                return w(o[t], o[e]);
              }),
              S &&
                u.forEach(function (t, n) {
                  t.sort(function (t, e) {
                    return S(y[n][t], y[n][e]);
                  });
                }),
              t = (ba - A * m) / t,
              e = 0,
              i = -1;
            ++i < m;

          ) {
            for (n = e, r = -1; ++r < m; ) {
              var c = s[i],
                l = u[c][r],
                h = y[c][l],
                d = e,
                f = (e += h * t);
              a[c + "-" + l] = {
                index: c,
                subindex: l,
                startAngle: d,
                endAngle: f,
                value: h,
              };
            }
            (v[c] = { index: c, startAngle: n, endAngle: e, value: o[c] }),
              (e += A);
          }
          for (i = -1; ++i < m; )
            for (r = i - 1; ++r < m; ) {
              var g = a[i + "-" + r],
                p = a[r + "-" + i];
              (g.value || p.value) &&
                _.push(
                  g.value < p.value
                    ? { source: p, target: g }
                    : { source: g, target: p },
                );
            }
          b && x();
        }
        function x() {
          _.sort(function (t, e) {
            return b(
              (t.source.value + t.target.value) / 2,
              (e.source.value + e.target.value) / 2,
            );
          });
        }
        var _,
          v,
          y,
          m,
          w,
          S,
          b,
          e = {},
          A = 0;
        return (
          (e.matrix = function (t) {
            return arguments.length
              ? ((m = (y = t) && y.length), (_ = v = null), e)
              : y;
          }),
          (e.padding = function (t) {
            return arguments.length ? ((A = t), (_ = v = null), e) : A;
          }),
          (e.sortGroups = function (t) {
            return arguments.length ? ((w = t), (_ = v = null), e) : w;
          }),
          (e.sortSubgroups = function (t) {
            return arguments.length ? ((S = t), (_ = null), e) : S;
          }),
          (e.sortChords = function (t) {
            return arguments.length ? ((b = t), _ && x(), e) : b;
          }),
          (e.chords = function () {
            return _ || t(), _;
          }),
          (e.groups = function () {
            return v || t(), v;
          }),
          e
        );
      }),
      (qr.layout.force = function () {
        function h(c) {
          return function (t, e, n, i) {
            if (t.point !== c) {
              var r = t.cx - c.x,
                a = t.cy - c.y,
                o = i - e,
                s = r * r + a * a;
              if ((o * o) / S < s) {
                if (s < l) {
                  var u = t.charge / s;
                  (c.px -= r * u), (c.py -= a * u);
                }
                return !0;
              }
              if (t.point && s && s < l) {
                u = t.pointCharge / s;
                (c.px -= r * u), (c.py -= a * u);
              }
            }
            return !t.charge;
          };
        }
        function t(t) {
          (t.px = qr.event.x), (t.py = qr.event.y), r.resume();
        }
        var d,
          e,
          f,
          g,
          p,
          x,
          r = {},
          _ = qr.dispatch("start", "tick", "end"),
          v = [1, 1],
          y = 0.9,
          a = ts,
          o = es,
          m = -30,
          l = ns,
          w = 0.1,
          S = 0.64,
          b = [],
          A = [];
        return (
          (r.tick = function () {
            if ((f *= 0.99) < 0.005)
              return (d = null), _.end({ type: "end", alpha: (f = 0) }), !0;
            var t,
              e,
              n,
              i,
              r,
              a,
              o,
              s,
              u,
              c = b.length,
              l = A.length;
            for (e = 0; e < l; ++e)
              (i = (n = A[e]).source),
                (a = (s = (r = n.target).x - i.x) * s + (u = r.y - i.y) * u) &&
                  ((s *= a = (f * p[e] * ((a = Math.sqrt(a)) - g[e])) / a),
                  (u *= a),
                  (r.x -=
                    s *
                    (o =
                      i.weight + r.weight
                        ? i.weight / (i.weight + r.weight)
                        : 0.5)),
                  (r.y -= u * o),
                  (i.x += s * (o = 1 - o)),
                  (i.y += u * o));
            if ((o = f * w) && ((s = v[0] / 2), (u = v[1] / 2), (e = -1), o))
              for (; ++e < c; )
                ((n = b[e]).x += (s - n.x) * o), (n.y += (u - n.y) * o);
            if (m)
              for (
                (function t(e, n, i) {
                  var r = 0,
                    a = 0;
                  if (((e.charge = 0), !e.leaf))
                    for (var o, s = e.nodes, u = s.length, c = -1; ++c < u; )
                      null != (o = s[c]) &&
                        (t(o, n, i),
                        (e.charge += o.charge),
                        (r += o.charge * o.cx),
                        (a += o.charge * o.cy));
                  if (e.point) {
                    e.leaf ||
                      ((e.point.x += Math.random() - 0.5),
                      (e.point.y += Math.random() - 0.5));
                    var l = n * i[e.point.index];
                    (e.charge += e.pointCharge = l),
                      (r += l * e.point.x),
                      (a += l * e.point.y);
                  }
                  (e.cx = r / e.charge), (e.cy = a / e.charge);
                })((t = qr.geom.quadtree(b)), f, x),
                  e = -1;
                ++e < c;

              )
                (n = b[e]).fixed || t.visit(h(n));
            for (e = -1; ++e < c; )
              (n = b[e]).fixed
                ? ((n.x = n.px), (n.y = n.py))
                : ((n.x -= (n.px - (n.px = n.x)) * y),
                  (n.y -= (n.py - (n.py = n.y)) * y));
            _.tick({ type: "tick", alpha: f });
          }),
          (r.nodes = function (t) {
            return arguments.length ? ((b = t), r) : b;
          }),
          (r.links = function (t) {
            return arguments.length ? ((A = t), r) : A;
          }),
          (r.size = function (t) {
            return arguments.length ? ((v = t), r) : v;
          }),
          (r.linkDistance = function (t) {
            return arguments.length
              ? ((a = "function" == typeof t ? t : +t), r)
              : a;
          }),
          (r.distance = r.linkDistance),
          (r.linkStrength = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : +t), r)
              : o;
          }),
          (r.friction = function (t) {
            return arguments.length ? ((y = +t), r) : y;
          }),
          (r.charge = function (t) {
            return arguments.length
              ? ((m = "function" == typeof t ? t : +t), r)
              : m;
          }),
          (r.chargeDistance = function (t) {
            return arguments.length ? ((l = t * t), r) : Math.sqrt(l);
          }),
          (r.gravity = function (t) {
            return arguments.length ? ((w = +t), r) : w;
          }),
          (r.theta = function (t) {
            return arguments.length ? ((S = t * t), r) : Math.sqrt(S);
          }),
          (r.alpha = function (t) {
            return arguments.length
              ? ((t = +t),
                f
                  ? 0 < t
                    ? (f = t)
                    : ((d.c = null),
                      (d.t = NaN),
                      (d = null),
                      _.end({ type: "end", alpha: (f = 0) }))
                  : 0 < t &&
                    (_.start({ type: "start", alpha: (f = t) }),
                    (d = At(r.tick))),
                r)
              : f;
          }),
          (r.start = function () {
            function t(t, e) {
              if (!u) {
                for (u = new Array(c), a = 0; a < c; ++a) u[a] = [];
                for (a = 0; a < l; ++a) {
                  var n = A[a];
                  u[n.source.index].push(n.target),
                    u[n.target.index].push(n.source);
                }
              }
              for (var i, r = u[s], a = -1, o = r.length; ++a < o; )
                if (!isNaN((i = r[a][t]))) return i;
              return Math.random() * e;
            }
            var s,
              u,
              e,
              c = b.length,
              l = A.length,
              n = v[0],
              i = v[1];
            for (s = 0; s < c; ++s) ((e = b[s]).index = s), (e.weight = 0);
            for (s = 0; s < l; ++s)
              "number" == typeof (e = A[s]).source && (e.source = b[e.source]),
                "number" == typeof e.target && (e.target = b[e.target]),
                ++e.source.weight,
                ++e.target.weight;
            for (s = 0; s < c; ++s)
              (e = b[s]),
                isNaN(e.x) && (e.x = t("x", n)),
                isNaN(e.y) && (e.y = t("y", i)),
                isNaN(e.px) && (e.px = e.x),
                isNaN(e.py) && (e.py = e.y);
            if (((g = []), "function" == typeof a))
              for (s = 0; s < l; ++s) g[s] = +a.call(this, A[s], s);
            else for (s = 0; s < l; ++s) g[s] = a;
            if (((p = []), "function" == typeof o))
              for (s = 0; s < l; ++s) p[s] = +o.call(this, A[s], s);
            else for (s = 0; s < l; ++s) p[s] = o;
            if (((x = []), "function" == typeof m))
              for (s = 0; s < c; ++s) x[s] = +m.call(this, b[s], s);
            else for (s = 0; s < c; ++s) x[s] = m;
            return r.resume();
          }),
          (r.resume = function () {
            return r.alpha(0.1);
          }),
          (r.stop = function () {
            return r.alpha(0);
          }),
          (r.drag = function () {
            return (
              e ||
                (e = qr.behavior
                  .drag()
                  .origin(R)
                  .on("dragstart.force", fi)
                  .on("drag.force", t)
                  .on("dragend.force", gi)),
              arguments.length
                ? void this.on("mouseover.force", pi)
                    .on("mouseout.force", xi)
                    .call(e)
                : e
            );
          }),
          qr.rebind(r, _, "on")
        );
      });
    var ts = 20,
      es = 1,
      ns = 1 / 0;
    (qr.layout.hierarchy = function () {
      function s(t) {
        var e,
          n = [t],
          i = [];
        for (t.depth = 0; null != (e = n.pop()); )
          if ((i.push(e), (a = c.call(s, e, e.depth)) && (r = a.length))) {
            for (var r, a, o; 0 <= --r; )
              n.push((o = a[r])), (o.parent = e), (o.depth = e.depth + 1);
            l && (e.value = 0), (e.children = a);
          } else
            l && (e.value = +l.call(s, e, e.depth) || 0), delete e.children;
        return (
          yi(t, function (t) {
            var e, n;
            u && (e = t.children) && e.sort(u),
              l && (n = t.parent) && (n.value += t.value);
          }),
          i
        );
      }
      var u = Si,
        c = mi,
        l = wi;
      return (
        (s.sort = function (t) {
          return arguments.length ? ((u = t), s) : u;
        }),
        (s.children = function (t) {
          return arguments.length ? ((c = t), s) : c;
        }),
        (s.value = function (t) {
          return arguments.length ? ((l = t), s) : l;
        }),
        (s.revalue = function (t) {
          return (
            l &&
              (vi(t, function (t) {
                t.children && (t.value = 0);
              }),
              yi(t, function (t) {
                var e;
                t.children || (t.value = +l.call(s, t, t.depth) || 0),
                  (e = t.parent) && (e.value += t.value);
              })),
            t
          );
        }),
        s
      );
    }),
      (qr.layout.partition = function () {
        function e(t, e) {
          var n = i.call(this, t, e);
          return (
            (function t(e, n, i, r) {
              var a = e.children;
              if (
                ((e.x = n),
                (e.y = e.depth * r),
                (e.dx = i),
                (e.dy = r),
                a && (o = a.length))
              ) {
                var o,
                  s,
                  u,
                  c = -1;
                for (i = e.value ? i / e.value : 0; ++c < o; )
                  t((s = a[c]), n, (u = s.value * i), r), (n += u);
              }
            })(
              n[0],
              0,
              r[0],
              r[1] /
                (function t(e) {
                  var n = e.children,
                    i = 0;
                  if (n && (r = n.length))
                    for (var r, a = -1; ++a < r; ) i = Math.max(i, t(n[a]));
                  return 1 + i;
                })(n[0]),
            ),
            n
          );
        }
        var i = qr.layout.hierarchy(),
          r = [1, 1];
        return (
          (e.size = function (t) {
            return arguments.length ? ((r = t), e) : r;
          }),
          _i(e, i)
        );
      }),
      (qr.layout.pie = function () {
        function d(n) {
          var e,
            t = n.length,
            i = n.map(function (t, e) {
              return +f.call(d, t, e);
            }),
            r = +("function" == typeof p ? p.apply(this, arguments) : p),
            a = ("function" == typeof x ? x.apply(this, arguments) : x) - r,
            o = Math.min(
              Math.abs(a) / t,
              +("function" == typeof _ ? _.apply(this, arguments) : _),
            ),
            s = o * (a < 0 ? -1 : 1),
            u = qr.sum(i),
            c = u ? (a - t * s) / u : 0,
            l = qr.range(t),
            h = [];
          return (
            null != g &&
              l.sort(
                g === is
                  ? function (t, e) {
                      return i[e] - i[t];
                    }
                  : function (t, e) {
                      return g(n[t], n[e]);
                    },
              ),
            l.forEach(function (t) {
              h[t] = {
                data: n[t],
                value: (e = i[t]),
                startAngle: r,
                endAngle: (r += e * c + s),
                padAngle: o,
              };
            }),
            h
          );
        }
        var f = Number,
          g = is,
          p = 0,
          x = ba,
          _ = 0;
        return (
          (d.value = function (t) {
            return arguments.length ? ((f = t), d) : f;
          }),
          (d.sort = function (t) {
            return arguments.length ? ((g = t), d) : g;
          }),
          (d.startAngle = function (t) {
            return arguments.length ? ((p = t), d) : p;
          }),
          (d.endAngle = function (t) {
            return arguments.length ? ((x = t), d) : x;
          }),
          (d.padAngle = function (t) {
            return arguments.length ? ((_ = t), d) : _;
          }),
          d
        );
      });
    var is = {};
    qr.layout.stack = function () {
      function h(t, e) {
        if (!(a = t.length)) return t;
        var n = t.map(function (t, e) {
            return d.call(h, t, e);
          }),
          i = n.map(function (t) {
            return t.map(function (t, e) {
              return [x.call(h, t, e), _.call(h, t, e)];
            });
          }),
          r = f.call(h, i, e);
        (n = qr.permute(n, r)), (i = qr.permute(i, r));
        var a,
          o,
          s,
          u,
          c = g.call(h, i, e),
          l = n[0].length;
        for (s = 0; s < l; ++s)
          for (p.call(h, n[0][s], (u = c[s]), i[0][s][1]), o = 1; o < a; ++o)
            p.call(h, n[o][s], (u += i[o - 1][s][1]), i[o][s][1]);
        return t;
      }
      var d = R,
        f = Ci,
        g = Li,
        p = Pi,
        x = Ai,
        _ = Ti;
      return (
        (h.values = function (t) {
          return arguments.length ? ((d = t), h) : d;
        }),
        (h.order = function (t) {
          return arguments.length
            ? ((f = "function" == typeof t ? t : rs.get(t) || Ci), h)
            : f;
        }),
        (h.offset = function (t) {
          return arguments.length
            ? ((g = "function" == typeof t ? t : as.get(t) || Li), h)
            : g;
        }),
        (h.x = function (t) {
          return arguments.length ? ((x = t), h) : x;
        }),
        (h.y = function (t) {
          return arguments.length ? ((_ = t), h) : _;
        }),
        (h.out = function (t) {
          return arguments.length ? ((p = t), h) : p;
        }),
        h
      );
    };
    var rs = qr.map({
        "inside-out": function (t) {
          var e,
            n,
            i = t.length,
            r = t.map(Mi),
            a = t.map(Ei),
            o = qr.range(i).sort(function (t, e) {
              return r[t] - r[e];
            }),
            s = 0,
            u = 0,
            c = [],
            l = [];
          for (e = 0; e < i; ++e)
            (n = o[e]),
              s < u ? ((s += a[n]), c.push(n)) : ((u += a[n]), l.push(n));
          return l.reverse().concat(c);
        },
        reverse: function (t) {
          return qr.range(t.length).reverse();
        },
        default: Ci,
      }),
      as = qr.map({
        silhouette: function (t) {
          var e,
            n,
            i,
            r = t.length,
            a = t[0].length,
            o = [],
            s = 0,
            u = [];
          for (n = 0; n < a; ++n) {
            for (i = e = 0; e < r; e++) i += t[e][n][1];
            s < i && (s = i), o.push(i);
          }
          for (n = 0; n < a; ++n) u[n] = (s - o[n]) / 2;
          return u;
        },
        wiggle: function (t) {
          var e,
            n,
            i,
            r,
            a,
            o,
            s,
            u,
            c,
            l = t.length,
            h = t[0],
            d = h.length,
            f = [];
          for (f[0] = u = c = 0, n = 1; n < d; ++n) {
            for (r = e = 0; e < l; ++e) r += t[e][n][1];
            for (a = e = 0, s = h[n][0] - h[n - 1][0]; e < l; ++e) {
              for (
                i = 0, o = (t[e][n][1] - t[e][n - 1][1]) / (2 * s);
                i < e;
                ++i
              )
                o += (t[i][n][1] - t[i][n - 1][1]) / s;
              a += o * t[e][n][1];
            }
            (f[n] = u -= r ? (a / r) * s : 0), u < c && (c = u);
          }
          for (n = 0; n < d; ++n) f[n] -= c;
          return f;
        },
        expand: function (t) {
          var e,
            n,
            i,
            r = t.length,
            a = t[0].length,
            o = 1 / r,
            s = [];
          for (n = 0; n < a; ++n) {
            for (i = e = 0; e < r; e++) i += t[e][n][1];
            if (i) for (e = 0; e < r; e++) t[e][n][1] /= i;
            else for (e = 0; e < r; e++) t[e][n][1] = o;
          }
          for (n = 0; n < a; ++n) s[n] = 0;
          return s;
        },
        zero: Li,
      });
    (qr.layout.histogram = function () {
      function n(t, e) {
        for (
          var n,
            i,
            r = [],
            a = t.map(d, this),
            o = f.call(this, a, e),
            s = g.call(this, o, a, e),
            u = ((e = -1), a.length),
            c = s.length - 1,
            l = h ? 1 : 1 / u;
          ++e < c;

        )
          ((n = r[e] = []).dx = s[e + 1] - (n.x = s[e])), (n.y = 0);
        if (0 < c)
          for (e = -1; ++e < u; )
            (i = a[e]) >= o[0] &&
              i <= o[1] &&
              (((n = r[qr.bisect(s, i, 1, c) - 1]).y += l), n.push(t[e]));
        return r;
      }
      var h = !0,
        d = Number,
        f = Ri,
        g = Gi;
      return (
        (n.value = function (t) {
          return arguments.length ? ((d = t), n) : d;
        }),
        (n.range = function (t) {
          return arguments.length ? ((f = wt(t)), n) : f;
        }),
        (n.bins = function (e) {
          return arguments.length
            ? ((g =
                "number" == typeof e
                  ? function (t) {
                      return ki(t, e);
                    }
                  : wt(e)),
              n)
            : g;
        }),
        (n.frequency = function (t) {
          return arguments.length ? ((h = !!t), n) : h;
        }),
        n
      );
    }),
      (qr.layout.pack = function () {
        function e(t, e) {
          var n = c.call(this, t, e),
            i = n[0],
            r = h[0],
            a = h[1],
            o =
              null == u
                ? Math.sqrt
                : "function" == typeof u
                  ? u
                  : function () {
                      return u;
                    };
          if (
            ((i.x = i.y = 0),
            yi(i, function (t) {
              t.r = +o(t.value);
            }),
            yi(i, Fi),
            l)
          ) {
            var s = (l * (u ? 1 : Math.max((2 * i.r) / r, (2 * i.r) / a))) / 2;
            yi(i, function (t) {
              t.r += s;
            }),
              yi(i, Fi),
              yi(i, function (t) {
                t.r -= s;
              });
          }
          return (
            (function t(e, n, i, r) {
              var a = e.children;
              if (((e.x = n += r * e.x), (e.y = i += r * e.y), (e.r *= r), a))
                for (var o = -1, s = a.length; ++o < s; ) t(a[o], n, i, r);
            })(
              i,
              r / 2,
              a / 2,
              u ? 1 : 1 / Math.max((2 * i.r) / r, (2 * i.r) / a),
            ),
            n
          );
        }
        var u,
          c = qr.layout.hierarchy().sort(Oi),
          l = 0,
          h = [1, 1];
        return (
          (e.size = function (t) {
            return arguments.length ? ((h = t), e) : h;
          }),
          (e.radius = function (t) {
            return arguments.length
              ? ((u = null == t || "function" == typeof t ? t : +t), e)
              : u;
          }),
          (e.padding = function (t) {
            return arguments.length ? ((l = +t), e) : l;
          }),
          _i(e, c)
        );
      }),
      (qr.layout.tree = function () {
        function e(t, e) {
          var n = g.call(this, t, e),
            i = n[0],
            r = (function (t) {
              for (
                var e, n = { A: null, children: [t] }, i = [n];
                null != (e = i.pop());

              )
                for (var r, a = e.children, o = 0, s = a.length; o < s; ++o)
                  i.push(
                    ((a[o] = r =
                      {
                        _: a[o],
                        parent: e,
                        children: ((r = a[o].children) && r.slice()) || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: o,
                      }).a = r),
                  );
              return n.children[0];
            })(i);
          if ((yi(r, h), (r.parent.m = -r.z), vi(r, d), x)) vi(i, f);
          else {
            var a = i,
              o = i,
              s = i;
            vi(i, function (t) {
              t.x < a.x && (a = t),
                t.x > o.x && (o = t),
                t.depth > s.depth && (s = t);
            });
            var u = y(a, o) / 2 - a.x,
              c = p[0] / (o.x + y(o, a) / 2 + u),
              l = p[1] / (s.depth || 1);
            vi(i, function (t) {
              (t.x = (t.x + u) * c), (t.y = t.depth * l);
            });
          }
          return n;
        }
        function h(t) {
          var e = t.children,
            n = t.parent.children,
            i = t.i ? n[t.i - 1] : null;
          if (e.length) {
            !(function (t) {
              for (
                var e, n = 0, i = 0, r = t.children, a = r.length;
                0 <= --a;

              )
                ((e = r[a]).z += n), (e.m += n), (n += e.s + (i += e.c));
            })(t);
            var r = (e[0].z + e[e.length - 1].z) / 2;
            i ? ((t.z = i.z + y(t._, i._)), (t.m = t.z - r)) : (t.z = r);
          } else i && (t.z = i.z + y(t._, i._));
          t.parent.A = (function (t, e, n) {
            if (e) {
              for (
                var i,
                  r = t,
                  a = t,
                  o = e,
                  s = r.parent.children[0],
                  u = r.m,
                  c = a.m,
                  l = o.m,
                  h = s.m;
                (o = ji(o)), (r = Bi(r)), o && r;

              )
                (s = Bi(s)),
                  ((a = ji(a)).a = t),
                  0 < (i = o.z + l - r.z - u + y(o._, r._)) &&
                    ((_ = t),
                    (v = n),
                    (d = (x = o).a.parent === _.parent ? x.a : v),
                    void 0,
                    (p = (g = i) / ((f = t).i - d.i)),
                    (f.c -= p),
                    (f.s += g),
                    (d.c += p),
                    (f.z += g),
                    (f.m += g),
                    (u += i),
                    (c += i)),
                  (l += o.m),
                  (u += r.m),
                  (h += s.m),
                  (c += a.m);
              o && !ji(a) && ((a.t = o), (a.m += l - c)),
                r && !Bi(s) && ((s.t = r), (s.m += u - h), (n = t));
            }
            var d, f, g, p;
            var x, _, v;
            return n;
          })(t, i, t.parent.A || n[0]);
        }
        function d(t) {
          (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
        }
        function f(t) {
          (t.x *= p[0]), (t.y = t.depth * p[1]);
        }
        var g = qr.layout.hierarchy().sort(null).value(null),
          y = Yi,
          p = [1, 1],
          x = null;
        return (
          (e.separation = function (t) {
            return arguments.length ? ((y = t), e) : y;
          }),
          (e.size = function (t) {
            return arguments.length
              ? ((x = null == (p = t) ? f : null), e)
              : x
                ? null
                : p;
          }),
          (e.nodeSize = function (t) {
            return arguments.length
              ? ((x = null == (p = t) ? null : f), e)
              : x
                ? p
                : null;
          }),
          _i(e, g)
        );
      }),
      (qr.layout.cluster = function () {
        function e(t, e) {
          var r,
            n = l.call(this, t, e),
            i = n[0],
            a = 0;
          yi(i, function (t) {
            var e,
              n,
              i = t.children;
            i && i.length
              ? ((t.x =
                  (n = i).reduce(function (t, e) {
                    return t + e.x;
                  }, 0) / n.length),
                (t.y =
                  ((e = i),
                  1 +
                    qr.max(e, function (t) {
                      return t.y;
                    }))))
              : ((t.x = r ? (a += h(t, r)) : 0), (t.y = 0), (r = t));
          });
          var o = (function t(e) {
              var n = e.children;
              return n && n.length ? t(n[0]) : e;
            })(i),
            s = (function t(e) {
              var n,
                i = e.children;
              return i && (n = i.length) ? t(i[n - 1]) : e;
            })(i),
            u = o.x - h(o, s) / 2,
            c = s.x + h(s, o) / 2;
          return (
            yi(
              i,
              f
                ? function (t) {
                    (t.x = (t.x - i.x) * d[0]), (t.y = (i.y - t.y) * d[1]);
                  }
                : function (t) {
                    (t.x = ((t.x - u) / (c - u)) * d[0]),
                      (t.y = (1 - (i.y ? t.y / i.y : 1)) * d[1]);
                  },
            ),
            n
          );
        }
        var l = qr.layout.hierarchy().sort(null).value(null),
          h = Yi,
          d = [1, 1],
          f = !1;
        return (
          (e.separation = function (t) {
            return arguments.length ? ((h = t), e) : h;
          }),
          (e.size = function (t) {
            return arguments.length ? ((f = null == (d = t)), e) : f ? null : d;
          }),
          (e.nodeSize = function (t) {
            return arguments.length ? ((f = null != (d = t)), e) : f ? d : null;
          }),
          _i(e, l)
        );
      }),
      (qr.layout.treemap = function () {
        function l(t, e) {
          for (var n, i, r = -1, a = t.length; ++r < a; )
            (i = (n = t[r]).value * (e < 0 ? 0 : e)),
              (n.area = isNaN(i) || i <= 0 ? 0 : i);
        }
        function h(t) {
          var e = t.children;
          if (e && e.length) {
            var n,
              i,
              r,
              a = p(t),
              o = [],
              s = e.slice(),
              u = 1 / 0,
              c =
                "slice" === x
                  ? a.dx
                  : "dice" === x
                    ? a.dy
                    : "slice-dice" === x
                      ? 1 & t.depth
                        ? a.dy
                        : a.dx
                      : Math.min(a.dx, a.dy);
            for (
              l(s, (a.dx * a.dy) / t.value), o.area = 0;
              0 < (r = s.length);

            )
              o.push((n = s[r - 1])),
                (o.area += n.area),
                (u =
                  "squarify" !== x || (i = d(o, c)) <= u
                    ? (s.pop(), i)
                    : ((o.area -= o.pop().area),
                      f(o, c, a, !1),
                      (c = Math.min(a.dx, a.dy)),
                      (o.length = o.area = 0),
                      1 / 0));
            o.length && (f(o, c, a, !0), (o.length = o.area = 0)), e.forEach(h);
          }
        }
        function o(t) {
          var e = t.children;
          if (e && e.length) {
            var n,
              i = p(t),
              r = e.slice(),
              a = [];
            for (l(r, (i.dx * i.dy) / t.value), a.area = 0; (n = r.pop()); )
              a.push(n),
                (a.area += n.area),
                null != n.z &&
                  (f(a, n.z ? i.dx : i.dy, i, !r.length),
                  (a.length = a.area = 0));
            e.forEach(o);
          }
        }
        function d(t, e) {
          for (
            var n, i = t.area, r = 0, a = 1 / 0, o = -1, s = t.length;
            ++o < s;

          )
            (n = t[o].area) && (n < a && (a = n), r < n && (r = n));
          return (
            (e *= e),
            (i *= i) ? Math.max((e * r * _) / i, i / (e * a * _)) : 1 / 0
          );
        }
        function f(t, e, n, i) {
          var r,
            a = -1,
            o = t.length,
            s = n.x,
            u = n.y,
            c = e ? g(t.area / e) : 0;
          if (e == n.dx) {
            for ((i || c > n.dy) && (c = n.dy); ++a < o; )
              ((r = t[a]).x = s),
                (r.y = u),
                (r.dy = c),
                (s += r.dx = Math.min(n.x + n.dx - s, c ? g(r.area / c) : 0));
            (r.z = !0), (r.dx += n.x + n.dx - s), (n.y += c), (n.dy -= c);
          } else {
            for ((i || c > n.dx) && (c = n.dx); ++a < o; )
              ((r = t[a]).x = s),
                (r.y = u),
                (r.dx = c),
                (u += r.dy = Math.min(n.y + n.dy - u, c ? g(r.area / c) : 0));
            (r.z = !1), (r.dy += n.y + n.dy - u), (n.x += c), (n.dx -= c);
          }
        }
        function i(t) {
          var e = r || a(t),
            n = e[0];
          return (
            (n.x = n.y = 0),
            n.value ? ((n.dx = s[0]), (n.dy = s[1])) : (n.dx = n.dy = 0),
            r && a.revalue(n),
            l([n], (n.dx * n.dy) / n.value),
            (r ? o : h)(n),
            c && (r = e),
            e
          );
        }
        var r,
          a = qr.layout.hierarchy(),
          g = Math.round,
          s = [1, 1],
          u = null,
          p = Ui,
          c = !1,
          x = "squarify",
          _ = 0.5 * (1 + Math.sqrt(5));
        return (
          (i.size = function (t) {
            return arguments.length ? ((s = t), i) : s;
          }),
          (i.padding = function (n) {
            function t(t) {
              return qi(t, n);
            }
            return arguments.length
              ? ((p =
                  null == (u = n)
                    ? Ui
                    : "function" == (e = typeof n)
                      ? function (t) {
                          var e = n.call(i, t, t.depth);
                          return null == e
                            ? Ui(t)
                            : qi(t, "number" == typeof e ? [e, e, e, e] : e);
                        }
                      : ("number" === e && (n = [n, n, n, n]), t)),
                i)
              : u;
            var e;
          }),
          (i.round = function (t) {
            return arguments.length
              ? ((g = t ? Math.round : Number), i)
              : g != Number;
          }),
          (i.sticky = function (t) {
            return arguments.length ? ((c = t), (r = null), i) : c;
          }),
          (i.ratio = function (t) {
            return arguments.length ? ((_ = t), i) : _;
          }),
          (i.mode = function (t) {
            return arguments.length ? ((x = t + ""), i) : x;
          }),
          _i(i, a)
        );
      }),
      (qr.random = {
        normal: function (i, r) {
          var t = arguments.length;
          return (
            t < 2 && (r = 1),
            t < 1 && (i = 0),
            function () {
              for (
                var t, e, n;
                !(n =
                  (t = 2 * Math.random() - 1) * t +
                  (e = 2 * Math.random() - 1) * e) || 1 < n;

              );
              return i + r * t * Math.sqrt((-2 * Math.log(n)) / n);
            }
          );
        },
        logNormal: function () {
          var t = qr.random.normal.apply(qr, arguments);
          return function () {
            return Math.exp(t());
          };
        },
        bates: function (t) {
          var e = qr.random.irwinHall(t);
          return function () {
            return e() / t;
          };
        },
        irwinHall: function (n) {
          return function () {
            for (var t = 0, e = 0; e < n; e++) t += Math.random();
            return t;
          };
        },
      }),
      (qr.scale = {});
    var os = { floor: R, ceil: R };
    qr.scale.linear = function () {
      return (function t(n, i, r, a) {
        function e() {
          var t = 2 < Math.min(n.length, i.length) ? Ji : Zi,
            e = a ? li : ci;
          return (s = t(n, i, e, r)), (u = t(i, n, e, Un)), o;
        }
        function o(t) {
          return s(t);
        }
        var s, u;
        return (
          (o.invert = function (t) {
            return u(t);
          }),
          (o.domain = function (t) {
            return arguments.length ? ((n = t.map(Number)), e()) : n;
          }),
          (o.range = function (t) {
            return arguments.length ? ((i = t), e()) : i;
          }),
          (o.rangeRound = function (t) {
            return o.range(t).interpolate(ii);
          }),
          (o.clamp = function (t) {
            return arguments.length ? ((a = t), e()) : a;
          }),
          (o.interpolate = function (t) {
            return arguments.length ? ((r = t), e()) : r;
          }),
          (o.ticks = function (t) {
            return ir(n, t);
          }),
          (o.tickFormat = function (t, e) {
            return rr(n, t, e);
          }),
          (o.nice = function (t) {
            return er(n, t), e();
          }),
          (o.copy = function () {
            return t(n, i, r, a);
          }),
          e()
        );
      })([0, 1], [0, 1], Un, !1);
    };
    var ss = { s: 1, g: 1, p: 1, r: 1, e: 1 };
    qr.scale.log = function () {
      return (function t(e, u, c, l) {
        function h(t) {
          return (
            (c ? Math.log(t < 0 ? 0 : t) : -Math.log(0 < t ? 0 : -t)) /
            Math.log(u)
          );
        }
        function d(t) {
          return c ? Math.pow(u, t) : -Math.pow(u, -t);
        }
        function r(t) {
          return e(h(t));
        }
        return (
          (r.invert = function (t) {
            return d(e.invert(t));
          }),
          (r.domain = function (t) {
            return arguments.length
              ? ((c = 0 <= t[0]), e.domain((l = t.map(Number)).map(h)), r)
              : l;
          }),
          (r.base = function (t) {
            return arguments.length ? ((u = +t), e.domain(l.map(h)), r) : u;
          }),
          (r.nice = function () {
            var t = Ki(l.map(h), c ? Math : cs);
            return e.domain(t), (l = t.map(d)), r;
          }),
          (r.ticks = function () {
            var t = Wi(l),
              e = [],
              n = t[0],
              i = t[1],
              r = Math.floor(h(n)),
              a = Math.ceil(h(i)),
              o = u % 1 ? 2 : u;
            if (isFinite(a - r)) {
              if (c) {
                for (; r < a; r++) for (var s = 1; s < o; s++) e.push(d(r) * s);
                e.push(d(r));
              } else
                for (e.push(d(r)); r++ < a; )
                  for (s = o - 1; 0 < s; s--) e.push(d(r) * s);
              for (r = 0; e[r] < n; r++);
              for (a = e.length; e[a - 1] > i; a--);
              e = e.slice(r, a);
            }
            return e;
          }),
          (r.tickFormat = function (t, n) {
            if (!arguments.length) return us;
            arguments.length < 2
              ? (n = us)
              : "function" != typeof n && (n = qr.format(n));
            var i = Math.max(1, (u * t) / r.ticks().length);
            return function (t) {
              var e = t / d(Math.round(h(t)));
              return e * u < u - 0.5 && (e *= u), e <= i ? n(t) : "";
            };
          }),
          (r.copy = function () {
            return t(e.copy(), u, c, l);
          }),
          tr(r, e)
        );
      })(qr.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
    };
    var us = qr.format(".0e"),
      cs = {
        floor: function (t) {
          return -Math.ceil(-t);
        },
        ceil: function (t) {
          return -Math.floor(-t);
        },
      };
    (qr.scale.pow = function () {
      return (function t(e, n, i) {
        function r(t) {
          return e(a(t));
        }
        var a = or(n),
          o = or(1 / n);
        return (
          (r.invert = function (t) {
            return o(e.invert(t));
          }),
          (r.domain = function (t) {
            return arguments.length
              ? (e.domain((i = t.map(Number)).map(a)), r)
              : i;
          }),
          (r.ticks = function (t) {
            return ir(i, t);
          }),
          (r.tickFormat = function (t, e) {
            return rr(i, t, e);
          }),
          (r.nice = function (t) {
            return r.domain(er(i, t));
          }),
          (r.exponent = function (t) {
            return arguments.length
              ? ((a = or((n = t))), (o = or(1 / n)), e.domain(i.map(a)), r)
              : n;
          }),
          (r.copy = function () {
            return t(e.copy(), n, i);
          }),
          tr(r, e)
        );
      })(qr.scale.linear(), 1, [0, 1]);
    }),
      (qr.scale.sqrt = function () {
        return qr.scale.pow().exponent(0.5);
      }),
      (qr.scale.ordinal = function () {
        return (function t(s, u) {
          function c(t) {
            return h[
              ((r.get(t) || ("range" === u.t ? r.set(t, s.push(t)) : NaN)) -
                1) %
                h.length
            ];
          }
          function l(e, n) {
            return qr.range(s.length).map(function (t) {
              return e + n * t;
            });
          }
          var r, h, d;
          return (
            (c.domain = function (t) {
              if (!arguments.length) return s;
              (s = []), (r = new v());
              for (var e, n = -1, i = t.length; ++n < i; )
                r.has((e = t[n])) || r.set(e, s.push(e));
              return c[u.t].apply(c, u.a);
            }),
            (c.range = function (t) {
              return arguments.length
                ? ((h = t), (d = 0), (u = { t: "range", a: arguments }), c)
                : h;
            }),
            (c.rangePoints = function (t, e) {
              arguments.length < 2 && (e = 0);
              var n = t[0],
                i = t[1],
                r =
                  s.length < 2
                    ? ((n = (n + i) / 2), 0)
                    : (i - n) / (s.length - 1 + e);
              return (
                (h = l(n + (r * e) / 2, r)),
                (d = 0),
                (u = { t: "rangePoints", a: arguments }),
                c
              );
            }),
            (c.rangeRoundPoints = function (t, e) {
              arguments.length < 2 && (e = 0);
              var n = t[0],
                i = t[1],
                r =
                  s.length < 2
                    ? ((n = i = Math.round((n + i) / 2)), 0)
                    : ((i - n) / (s.length - 1 + e)) | 0;
              return (
                (h = l(
                  n +
                    Math.round(
                      (r * e) / 2 + (i - n - (s.length - 1 + e) * r) / 2,
                    ),
                  r,
                )),
                (d = 0),
                (u = { t: "rangeRoundPoints", a: arguments }),
                c
              );
            }),
            (c.rangeBands = function (t, e, n) {
              arguments.length < 2 && (e = 0), arguments.length < 3 && (n = e);
              var i = t[1] < t[0],
                r = t[i - 0],
                a = (t[1 - i] - r) / (s.length - e + 2 * n);
              return (
                (h = l(r + a * n, a)),
                i && h.reverse(),
                (d = a * (1 - e)),
                (u = { t: "rangeBands", a: arguments }),
                c
              );
            }),
            (c.rangeRoundBands = function (t, e, n) {
              arguments.length < 2 && (e = 0), arguments.length < 3 && (n = e);
              var i = t[1] < t[0],
                r = t[i - 0],
                a = t[1 - i],
                o = Math.floor((a - r) / (s.length - e + 2 * n));
              return (
                (h = l(r + Math.round((a - r - (s.length - e) * o) / 2), o)),
                i && h.reverse(),
                (d = Math.round(o * (1 - e))),
                (u = { t: "rangeRoundBands", a: arguments }),
                c
              );
            }),
            (c.rangeBand = function () {
              return d;
            }),
            (c.rangeExtent = function () {
              return Wi(u.a[0]);
            }),
            (c.copy = function () {
              return t(s, u);
            }),
            c.domain(s)
          );
        })([], { t: "range", a: [[]] });
      }),
      (qr.scale.category10 = function () {
        return qr.scale.ordinal().range(ls);
      }),
      (qr.scale.category20 = function () {
        return qr.scale.ordinal().range(hs);
      }),
      (qr.scale.category20b = function () {
        return qr.scale.ordinal().range(ds);
      }),
      (qr.scale.category20c = function () {
        return qr.scale.ordinal().range(fs);
      });
    var ls = [
        2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330,
        8355711, 12369186, 1556175,
      ].map(gt),
      hs = [
        2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728,
        16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194,
        8355711, 13092807, 12369186, 14408589, 1556175, 10410725,
      ].map(gt),
      ds = [
        3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115,
        13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490,
        14049643, 15177372, 8077683, 10834324, 13528509, 14589654,
      ].map(gt),
      fs = [
        3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259,
        16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312,
        12369372, 14342891, 6513507, 9868950, 12434877, 14277081,
      ].map(gt);
    (qr.scale.quantile = function () {
      return (function t(n, i) {
        function e() {
          var t = 0,
            e = i.length;
          for (a = []; ++t < e; ) a[t - 1] = qr.quantile(n, t / e);
          return r;
        }
        function r(t) {
          return isNaN((t = +t)) ? void 0 : i[qr.bisect(a, t)];
        }
        var a;
        return (
          (r.domain = function (t) {
            return arguments.length
              ? ((n = t.map(c).filter(l).sort(o)), e())
              : n;
          }),
          (r.range = function (t) {
            return arguments.length ? ((i = t), e()) : i;
          }),
          (r.quantiles = function () {
            return a;
          }),
          (r.invertExtent = function (t) {
            return (t = i.indexOf(t)) < 0
              ? [NaN, NaN]
              : [
                  0 < t ? a[t - 1] : n[0],
                  t < a.length ? a[t] : n[n.length - 1],
                ];
          }),
          (r.copy = function () {
            return t(n, i);
          }),
          e()
        );
      })([], []);
    }),
      (qr.scale.quantize = function () {
        return (function t(e, n, i) {
          function r(t) {
            return i[Math.max(0, Math.min(s, Math.floor(o * (t - e))))];
          }
          function a() {
            return (o = i.length / (n - e)), (s = i.length - 1), r;
          }
          var o, s;
          return (
            (r.domain = function (t) {
              return arguments.length
                ? ((e = +t[0]), (n = +t[t.length - 1]), a())
                : [e, n];
            }),
            (r.range = function (t) {
              return arguments.length ? ((i = t), a()) : i;
            }),
            (r.invertExtent = function (t) {
              return [
                (t = (t = i.indexOf(t)) < 0 ? NaN : t / o + e),
                t + 1 / o,
              ];
            }),
            (r.copy = function () {
              return t(e, n, i);
            }),
            a()
          );
        })(0, 1, [0, 1]);
      }),
      (qr.scale.threshold = function () {
        return (function t(e, n) {
          function i(t) {
            return t <= t ? n[qr.bisect(e, t)] : void 0;
          }
          return (
            (i.domain = function (t) {
              return arguments.length ? ((e = t), i) : e;
            }),
            (i.range = function (t) {
              return arguments.length ? ((n = t), i) : n;
            }),
            (i.invertExtent = function (t) {
              return (t = n.indexOf(t)), [e[t - 1], e[t]];
            }),
            (i.copy = function () {
              return t(e, n);
            }),
            i
          );
        })([0.5], [0, 1]);
      }),
      (qr.scale.identity = function () {
        return (function t(n) {
          function e(t) {
            return +t;
          }
          return (
            ((e.invert = e).domain = e.range =
              function (t) {
                return arguments.length ? ((n = t.map(e)), e) : n;
              }),
            (e.ticks = function (t) {
              return ir(n, t);
            }),
            (e.tickFormat = function (t, e) {
              return rr(n, t, e);
            }),
            (e.copy = function () {
              return t(n);
            }),
            e
          );
        })([0, 1]);
      }),
      (qr.svg = {}),
      (qr.svg.arc = function () {
        function e() {
          var t = Math.max(0, +F.apply(this, arguments)),
            e = Math.max(0, +z.apply(this, arguments)),
            n = Y.apply(this, arguments) - Ta,
            i = B.apply(this, arguments) - Ta,
            r = Math.abs(i - n),
            a = i < n ? 0 : 1;
          if ((e < t && ((o = e), (e = t), (t = o)), Aa <= r))
            return N(e, a) + (t ? N(t, 1 - a) : "") + "Z";
          var o,
            s,
            u,
            c,
            l,
            h,
            d,
            f,
            g,
            p,
            x,
            _,
            v = 0,
            y = 0,
            m = [];
          if (
            ((c = (+j.apply(this, arguments) || 0) / 2) &&
              ((u =
                H === gs
                  ? Math.sqrt(t * t + e * e)
                  : +H.apply(this, arguments)),
              a || (y *= -1),
              e && (y = $((u / e) * Math.sin(c))),
              t && (v = $((u / t) * Math.sin(c)))),
            e)
          ) {
            (l = e * Math.cos(n + y)),
              (h = e * Math.sin(n + y)),
              (d = e * Math.cos(i - y)),
              (f = e * Math.sin(i - y));
            var w = Math.abs(i - n - 2 * y) <= Sa ? 0 : 1;
            if (y && (fr(l, h, d, f) === a) ^ w) {
              var S = (n + i) / 2;
              (l = e * Math.cos(S)), (h = e * Math.sin(S)), (d = f = null);
            }
          } else l = h = 0;
          if (t) {
            (g = t * Math.cos(i - v)),
              (p = t * Math.sin(i - v)),
              (x = t * Math.cos(n + v)),
              (_ = t * Math.sin(n + v));
            var b = Math.abs(n - i + 2 * v) <= Sa ? 0 : 1;
            if (v && (fr(g, p, x, _) === 1 - a) ^ b) {
              var A = (n + i) / 2;
              (g = t * Math.cos(A)), (p = t * Math.sin(A)), (x = _ = null);
            }
          } else g = p = 0;
          if (
            ma < r &&
            0.001 <
              (o = Math.min(Math.abs(e - t) / 2, +X.apply(this, arguments)))
          ) {
            s = (t < e) ^ a ? 0 : 1;
            var T = o,
              P = o;
            if (r < Sa) {
              var C =
                  null == x
                    ? [g, p]
                    : null == d
                      ? [l, h]
                      : gn([l, h], [x, _], [d, f], [g, p]),
                L = l - C[0],
                M = h - C[1],
                E = d - C[0],
                V = f - C[1],
                G =
                  1 /
                  Math.sin(
                    Math.acos(
                      (L * E + M * V) /
                        (Math.sqrt(L * L + M * M) * Math.sqrt(E * E + V * V)),
                    ) / 2,
                  ),
                k = Math.sqrt(C[0] * C[0] + C[1] * C[1]);
              (P = Math.min(o, (t - k) / (G - 1))),
                (T = Math.min(o, (e - k) / (G + 1)));
            }
            if (null != d) {
              var R = gr(null == x ? [g, p] : [x, _], [l, h], e, T, a),
                O = gr([d, f], [g, p], e, T, a);
              o === T
                ? m.push(
                    "M",
                    R[0],
                    "A",
                    T,
                    ",",
                    T,
                    " 0 0,",
                    s,
                    " ",
                    R[1],
                    "A",
                    e,
                    ",",
                    e,
                    " 0 ",
                    (1 - a) ^ fr(R[1][0], R[1][1], O[1][0], O[1][1]),
                    ",",
                    a,
                    " ",
                    O[1],
                    "A",
                    T,
                    ",",
                    T,
                    " 0 0,",
                    s,
                    " ",
                    O[0],
                  )
                : m.push("M", R[0], "A", T, ",", T, " 0 1,", s, " ", O[0]);
            } else m.push("M", l, ",", h);
            if (null != x) {
              var I = gr([l, h], [x, _], t, -P, a),
                D = gr([g, p], null == d ? [l, h] : [d, f], t, -P, a);
              o === P
                ? m.push(
                    "L",
                    D[0],
                    "A",
                    P,
                    ",",
                    P,
                    " 0 0,",
                    s,
                    " ",
                    D[1],
                    "A",
                    t,
                    ",",
                    t,
                    " 0 ",
                    a ^ fr(D[1][0], D[1][1], I[1][0], I[1][1]),
                    ",",
                    1 - a,
                    " ",
                    I[1],
                    "A",
                    P,
                    ",",
                    P,
                    " 0 0,",
                    s,
                    " ",
                    I[0],
                  )
                : m.push("L", D[0], "A", P, ",", P, " 0 0,", s, " ", I[0]);
            } else m.push("L", g, ",", p);
          } else
            m.push("M", l, ",", h),
              null != d &&
                m.push("A", e, ",", e, " 0 ", w, ",", a, " ", d, ",", f),
              m.push("L", g, ",", p),
              null != x &&
                m.push("A", t, ",", t, " 0 ", b, ",", 1 - a, " ", x, ",", _);
          return m.push("Z"), m.join("");
        }
        function N(t, e) {
          return (
            "M0," +
            t +
            "A" +
            t +
            "," +
            t +
            " 0 1," +
            e +
            " 0," +
            -t +
            "A" +
            t +
            "," +
            t +
            " 0 1," +
            e +
            " 0," +
            t
          );
        }
        var F = ur,
          z = cr,
          X = sr,
          H = gs,
          Y = lr,
          B = hr,
          j = dr;
        return (
          (e.innerRadius = function (t) {
            return arguments.length ? ((F = wt(t)), e) : F;
          }),
          (e.outerRadius = function (t) {
            return arguments.length ? ((z = wt(t)), e) : z;
          }),
          (e.cornerRadius = function (t) {
            return arguments.length ? ((X = wt(t)), e) : X;
          }),
          (e.padRadius = function (t) {
            return arguments.length ? ((H = t == gs ? gs : wt(t)), e) : H;
          }),
          (e.startAngle = function (t) {
            return arguments.length ? ((Y = wt(t)), e) : Y;
          }),
          (e.endAngle = function (t) {
            return arguments.length ? ((B = wt(t)), e) : B;
          }),
          (e.padAngle = function (t) {
            return arguments.length ? ((j = wt(t)), e) : j;
          }),
          (e.centroid = function () {
            var t = (+F.apply(this, arguments) + +z.apply(this, arguments)) / 2,
              e =
                (+Y.apply(this, arguments) + +B.apply(this, arguments)) / 2 -
                Ta;
            return [Math.cos(e) * t, Math.sin(e) * t];
          }),
          e
        );
      });
    var gs = "auto";
    qr.svg.line = function () {
      return pr(R);
    };
    var ps = qr.map({
      linear: xr,
      "linear-closed": _r,
      step: function (t) {
        for (
          var e = 0, n = t.length, i = t[0], r = [i[0], ",", i[1]];
          ++e < n;

        )
          r.push("H", (i[0] + (i = t[e])[0]) / 2, "V", i[1]);
        return 1 < n && r.push("H", i[0]), r.join("");
      },
      "step-before": vr,
      "step-after": yr,
      basis: Sr,
      "basis-open": function (t) {
        if (t.length < 4) return xr(t);
        for (var e, n = [], i = -1, r = t.length, a = [0], o = [0]; ++i < 3; )
          (e = t[i]), a.push(e[0]), o.push(e[1]);
        for (n.push(br(vs, a) + "," + br(vs, o)), --i; ++i < r; )
          (e = t[i]),
            a.shift(),
            a.push(e[0]),
            o.shift(),
            o.push(e[1]),
            Ar(n, a, o);
        return n.join("");
      },
      "basis-closed": function (t) {
        for (
          var e, n, i = -1, r = t.length, a = r + 4, o = [], s = [];
          ++i < 4;

        )
          (n = t[i % r]), o.push(n[0]), s.push(n[1]);
        for (e = [br(vs, o), ",", br(vs, s)], --i; ++i < a; )
          (n = t[i % r]),
            o.shift(),
            o.push(n[0]),
            s.shift(),
            s.push(n[1]),
            Ar(e, o, s);
        return e.join("");
      },
      bundle: function (t, e) {
        var n = t.length - 1;
        if (n)
          for (
            var i,
              r,
              a = t[0][0],
              o = t[0][1],
              s = t[n][0] - a,
              u = t[n][1] - o,
              c = -1;
            ++c <= n;

          )
            (r = c / n),
              ((i = t[c])[0] = e * i[0] + (1 - e) * (a + r * s)),
              (i[1] = e * i[1] + (1 - e) * (o + r * u));
        return Sr(t);
      },
      cardinal: function (t, e) {
        return t.length < 3 ? xr(t) : t[0] + mr(t, wr(t, e));
      },
      "cardinal-open": function (t, e) {
        return t.length < 4 ? xr(t) : t[1] + mr(t.slice(1, -1), wr(t, e));
      },
      "cardinal-closed": function (t, e) {
        return t.length < 3
          ? _r(t)
          : t[0] +
              mr((t.push(t[0]), t), wr([t[t.length - 2]].concat(t, [t[1]]), e));
      },
      monotone: function (t) {
        return t.length < 3 ? xr(t) : t[0] + mr(t, Pr(t));
      },
    });
    ps.forEach(function (t, e) {
      (e.key = t), (e.closed = /-closed$/.test(t));
    });
    var xs = [0, 2 / 3, 1 / 3, 0],
      _s = [0, 1 / 3, 2 / 3, 0],
      vs = [0, 1 / 6, 2 / 3, 1 / 6];
    (qr.svg.line.radial = function () {
      var t = pr(Cr);
      return (t.radius = t.x), delete t.x, (t.angle = t.y), delete t.y, t;
    }),
      ((vr.reverse = yr).reverse = vr),
      (qr.svg.area = function () {
        return Lr(R);
      }),
      (qr.svg.area.radial = function () {
        var t = Lr(Cr);
        return (
          (t.radius = t.x),
          delete t.x,
          (t.innerRadius = t.x0),
          delete t.x0,
          (t.outerRadius = t.x1),
          delete t.x1,
          (t.angle = t.y),
          delete t.y,
          (t.startAngle = t.y0),
          delete t.y0,
          (t.endAngle = t.y1),
          delete t.y1,
          t
        );
      }),
      (qr.svg.chord = function () {
        function e(t, e) {
          var n,
            i,
            r = o(this, c, t, e),
            a = o(this, l, t, e);
          return (
            "M" +
            r.p0 +
            s(r.r, r.p1, r.a1 - r.a0) +
            ((i = a),
            (n = r).a0 == i.a0 && n.a1 == i.a1
              ? u(r.r, r.p1, r.r, r.p0)
              : u(r.r, r.p1, a.r, a.p0) +
                s(a.r, a.p1, a.a1 - a.a0) +
                u(a.r, a.p1, r.r, r.p0)) +
            "Z"
          );
        }
        function o(t, e, n, i) {
          var r = e.call(t, n, i),
            a = h.call(t, r, i),
            o = d.call(t, r, i) - Ta,
            s = f.call(t, r, i) - Ta;
          return {
            r: a,
            a0: o,
            a1: s,
            p0: [a * Math.cos(o), a * Math.sin(o)],
            p1: [a * Math.cos(s), a * Math.sin(s)],
          };
        }
        function s(t, e, n) {
          return "A" + t + "," + t + " 0 " + +(Sa < n) + ",1 " + e;
        }
        function u(t, e, n, i) {
          return "Q 0,0 " + i;
        }
        var c = tn,
          l = en,
          h = Mr,
          d = lr,
          f = hr;
        return (
          (e.radius = function (t) {
            return arguments.length ? ((h = wt(t)), e) : h;
          }),
          (e.source = function (t) {
            return arguments.length ? ((c = wt(t)), e) : c;
          }),
          (e.target = function (t) {
            return arguments.length ? ((l = wt(t)), e) : l;
          }),
          (e.startAngle = function (t) {
            return arguments.length ? ((d = wt(t)), e) : d;
          }),
          (e.endAngle = function (t) {
            return arguments.length ? ((f = wt(t)), e) : f;
          }),
          e
        );
      }),
      (qr.svg.diagonal = function () {
        function e(t, e) {
          var n = o.call(this, t, e),
            i = s.call(this, t, e),
            r = (n.y + i.y) / 2,
            a = [n, { x: n.x, y: r }, { x: i.x, y: r }, i];
          return "M" + (a = a.map(u))[0] + "C" + a[1] + " " + a[2] + " " + a[3];
        }
        var o = tn,
          s = en,
          u = Er;
        return (
          (e.source = function (t) {
            return arguments.length ? ((o = wt(t)), e) : o;
          }),
          (e.target = function (t) {
            return arguments.length ? ((s = wt(t)), e) : s;
          }),
          (e.projection = function (t) {
            return arguments.length ? ((u = t), e) : u;
          }),
          e
        );
      }),
      (qr.svg.diagonal.radial = function () {
        var t = qr.svg.diagonal(),
          e = Er,
          n = t.projection;
        return (
          (t.projection = function (t) {
            return arguments.length
              ? n(
                  ((i = e = t),
                  function () {
                    var t = i.apply(this, arguments),
                      e = t[0],
                      n = t[1] - Ta;
                    return [e * Math.cos(n), e * Math.sin(n)];
                  }),
                )
              : e;
            var i;
          }),
          t
        );
      }),
      (qr.svg.symbol = function () {
        function e(t, e) {
          return (ys.get(n.call(this, t, e)) || kr)(i.call(this, t, e));
        }
        var n = Gr,
          i = Vr;
        return (
          (e.type = function (t) {
            return arguments.length ? ((n = wt(t)), e) : n;
          }),
          (e.size = function (t) {
            return arguments.length ? ((i = wt(t)), e) : i;
          }),
          e
        );
      });
    var ys = qr.map({
      circle: kr,
      cross: function (t) {
        var e = Math.sqrt(t / 5) / 2;
        return (
          "M" +
          -3 * e +
          "," +
          -e +
          "H" +
          -e +
          "V" +
          -3 * e +
          "H" +
          e +
          "V" +
          -e +
          "H" +
          3 * e +
          "V" +
          e +
          "H" +
          e +
          "V" +
          3 * e +
          "H" +
          -e +
          "V" +
          e +
          "H" +
          -3 * e +
          "Z"
        );
      },
      diamond: function (t) {
        var e = Math.sqrt(t / (2 * ws)),
          n = e * ws;
        return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z";
      },
      square: function (t) {
        var e = Math.sqrt(t) / 2;
        return (
          "M" +
          -e +
          "," +
          -e +
          "L" +
          e +
          "," +
          -e +
          " " +
          e +
          "," +
          e +
          " " +
          -e +
          "," +
          e +
          "Z"
        );
      },
      "triangle-down": function (t) {
        var e = Math.sqrt(t / ms),
          n = (e * ms) / 2;
        return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z";
      },
      "triangle-up": function (t) {
        var e = Math.sqrt(t / ms),
          n = (e * ms) / 2;
        return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z";
      },
    });
    qr.svg.symbolTypes = ys.keys();
    var ms = Math.sqrt(3),
      ws = Math.tan(30 * Pa);
    (da.transition = function (t) {
      for (
        var e,
          n,
          i = Ss || ++Ps,
          r = Nr(t),
          a = [],
          o = bs || { time: Date.now(), ease: $n, delay: 0, duration: 250 },
          s = -1,
          u = this.length;
        ++s < u;

      ) {
        a.push((e = []));
        for (var c = this[s], l = -1, h = c.length; ++l < h; )
          (n = c[l]) && Fr(n, l, r, i, o), e.push(n);
      }
      return Or(a, r, i);
    }),
      (da.interrupt = function (t) {
        return this.each(null == t ? As : Rr(Nr(t)));
      });
    var Ss,
      bs,
      As = Rr(Nr()),
      Ts = [],
      Ps = 0;
    (Ts.call = da.call),
      (Ts.empty = da.empty),
      (Ts.node = da.node),
      (Ts.size = da.size),
      (qr.transition = function (t, e) {
        return t && t.transition
          ? Ss
            ? t.transition(e)
            : t
          : qr.selection().transition(t);
      }),
      ((qr.transition.prototype = Ts).select = function (t) {
        var e,
          n,
          i,
          r = this.id,
          a = this.namespace,
          o = [];
        t = b(t);
        for (var s = -1, u = this.length; ++s < u; ) {
          o.push((e = []));
          for (var c = this[s], l = -1, h = c.length; ++l < h; )
            (i = c[l]) && (n = t.call(i, i.__data__, l, s))
              ? ("__data__" in i && (n.__data__ = i.__data__),
                Fr(n, l, a, r, i[a][r]),
                e.push(n))
              : e.push(null);
        }
        return Or(o, a, r);
      }),
      (Ts.selectAll = function (t) {
        var e,
          n,
          i,
          r,
          a,
          o = this.id,
          s = this.namespace,
          u = [];
        t = A(t);
        for (var c = -1, l = this.length; ++c < l; )
          for (var h = this[c], d = -1, f = h.length; ++d < f; )
            if ((i = h[d])) {
              (a = i[s][o]),
                (n = t.call(i, i.__data__, d, c)),
                u.push((e = []));
              for (var g = -1, p = n.length; ++g < p; )
                (r = n[g]) && Fr(r, g, s, o, a), e.push(r);
            }
        return Or(u, s, o);
      }),
      (Ts.filter = function (t) {
        var e,
          n,
          i = [];
        "function" != typeof t && (t = z(t));
        for (var r = 0, a = this.length; r < a; r++) {
          i.push((e = []));
          for (var o, s = 0, u = (o = this[r]).length; s < u; s++)
            (n = o[s]) && t.call(n, n.__data__, s, r) && e.push(n);
        }
        return Or(i, this.namespace, this.id);
      }),
      (Ts.tween = function (e, n) {
        var i = this.id,
          r = this.namespace;
        return arguments.length < 2
          ? this.node()[r][i].tween.get(e)
          : X(
              this,
              null == n
                ? function (t) {
                    t[r][i].tween.remove(e);
                  }
                : function (t) {
                    t[r][i].tween.set(e, n);
                  },
            );
      }),
      (Ts.attr = function (t, e) {
        function i() {
          this.removeAttribute(o);
        }
        function r() {
          this.removeAttributeNS(o.space, o.local);
        }
        if (arguments.length < 2) {
          for (e in t) this.attr(e, t[e]);
          return this;
        }
        var a = "transform" == t ? ui : Un,
          o = qr.ns.qualify(t);
        return Ir(
          this,
          "attr." + t,
          e,
          o.local
            ? function (n) {
                return null == n
                  ? r
                  : ((n += ""),
                    function () {
                      var e,
                        t = this.getAttributeNS(o.space, o.local);
                      return (
                        t !== n &&
                        ((e = a(t, n)),
                        function (t) {
                          this.setAttributeNS(o.space, o.local, e(t));
                        })
                      );
                    });
              }
            : function (n) {
                return null == n
                  ? i
                  : ((n += ""),
                    function () {
                      var e,
                        t = this.getAttribute(o);
                      return (
                        t !== n &&
                        ((e = a(t, n)),
                        function (t) {
                          this.setAttribute(o, e(t));
                        })
                      );
                    });
              },
        );
      }),
      (Ts.attrTween = function (t, i) {
        var r = qr.ns.qualify(t);
        return this.tween(
          "attr." + t,
          r.local
            ? function (t, e) {
                var n = i.call(
                  this,
                  t,
                  e,
                  this.getAttributeNS(r.space, r.local),
                );
                return (
                  n &&
                  function (t) {
                    this.setAttributeNS(r.space, r.local, n(t));
                  }
                );
              }
            : function (t, e) {
                var n = i.call(this, t, e, this.getAttribute(r));
                return (
                  n &&
                  function (t) {
                    this.setAttribute(r, n(t));
                  }
                );
              },
        );
      }),
      (Ts.style = function (i, t, r) {
        function e() {
          this.style.removeProperty(i);
        }
        var n = arguments.length;
        if (n < 3) {
          if ("string" != typeof i) {
            for (r in (n < 2 && (t = ""), i)) this.style(r, i[r], t);
            return this;
          }
          r = "";
        }
        return Ir(this, "style." + i, t, function (n) {
          return null == n
            ? e
            : ((n += ""),
              function () {
                var e,
                  t = k(this).getComputedStyle(this, null).getPropertyValue(i);
                return (
                  t !== n &&
                  ((e = Un(t, n)),
                  function (t) {
                    this.style.setProperty(i, e(t), r);
                  })
                );
              });
        });
      }),
      (Ts.styleTween = function (i, r, a) {
        return (
          arguments.length < 3 && (a = ""),
          this.tween("style." + i, function (t, e) {
            var n = r.call(
              this,
              t,
              e,
              k(this).getComputedStyle(this, null).getPropertyValue(i),
            );
            return (
              n &&
              function (t) {
                this.style.setProperty(i, n(t), a);
              }
            );
          })
        );
      }),
      (Ts.text = function (t) {
        return Ir(this, "text", t, Dr);
      }),
      (Ts.remove = function () {
        var e = this.namespace;
        return this.each("end.transition", function () {
          var t;
          this[e].count < 2 && (t = this.parentNode) && t.removeChild(this);
        });
      }),
      (Ts.ease = function (e) {
        var n = this.id,
          i = this.namespace;
        return arguments.length < 1
          ? this.node()[i][n].ease
          : ("function" != typeof e && (e = qr.ease.apply(qr, arguments)),
            X(this, function (t) {
              t[i][n].ease = e;
            }));
      }),
      (Ts.delay = function (i) {
        var r = this.id,
          a = this.namespace;
        return arguments.length < 1
          ? this.node()[a][r].delay
          : X(
              this,
              "function" == typeof i
                ? function (t, e, n) {
                    t[a][r].delay = +i.call(t, t.__data__, e, n);
                  }
                : ((i = +i),
                  function (t) {
                    t[a][r].delay = i;
                  }),
            );
      }),
      (Ts.duration = function (i) {
        var r = this.id,
          a = this.namespace;
        return arguments.length < 1
          ? this.node()[a][r].duration
          : X(
              this,
              "function" == typeof i
                ? function (t, e, n) {
                    t[a][r].duration = Math.max(1, i.call(t, t.__data__, e, n));
                  }
                : ((i = Math.max(1, i)),
                  function (t) {
                    t[a][r].duration = i;
                  }),
            );
      }),
      (Ts.each = function (i, n) {
        var r = this.id,
          a = this.namespace;
        if (arguments.length < 2) {
          var t = bs,
            e = Ss;
          try {
            (Ss = r),
              X(this, function (t, e, n) {
                (bs = t[a][r]), i.call(t, t.__data__, e, n);
              });
          } finally {
            (bs = t), (Ss = e);
          }
        } else
          X(this, function (t) {
            var e = t[a][r];
            (
              e.event || (e.event = qr.dispatch("start", "end", "interrupt"))
            ).on(i, n);
          });
        return this;
      }),
      (Ts.transition = function () {
        for (
          var t,
            e,
            n,
            i = this.id,
            r = ++Ps,
            a = this.namespace,
            o = [],
            s = 0,
            u = this.length;
          s < u;
          s++
        ) {
          o.push((t = []));
          for (var c, l = 0, h = (c = this[s]).length; l < h; l++)
            (e = c[l]) &&
              Fr(e, l, a, r, {
                time: (n = e[a][i]).time,
                ease: n.ease,
                delay: n.delay + n.duration,
                duration: n.duration,
              }),
              t.push(e);
        }
        return Or(o, a, r);
      }),
      (qr.svg.axis = function () {
        function n(t) {
          t.each(function () {
            var t,
              e = qr.select(this),
              n = this.__chart__ || C,
              i = (this.__chart__ = C.copy()),
              r = null == k ? (i.ticks ? i.ticks.apply(i, G) : i.domain()) : k,
              a = null == P ? (i.tickFormat ? i.tickFormat.apply(i, G) : R) : P,
              o = e.selectAll(".tick").data(r, i),
              s = o
                .enter()
                .insert("g", ".domain")
                .attr("class", "tick")
                .style("opacity", ma),
              u = qr.transition(o.exit()).style("opacity", ma).remove(),
              c = qr.transition(o.order()).style("opacity", 1),
              l = Math.max(M, 0) + V,
              h = Qi(i),
              d = e.selectAll(".domain").data([0]),
              f =
                (d.enter().append("path").attr("class", "domain"),
                qr.transition(d));
            s.append("line"), s.append("text");
            var g,
              p,
              x,
              _,
              v = s.select("line"),
              y = c.select("line"),
              m = o.select("text").text(a),
              w = s.select("text"),
              S = c.select("text"),
              b = "top" === L || "left" === L ? -1 : 1;
            if (
              ("bottom" === L || "top" === L
                ? ((t = zr),
                  (g = "x"),
                  (x = "y"),
                  (p = "x2"),
                  (_ = "y2"),
                  m
                    .attr("dy", b < 0 ? "0em" : ".71em")
                    .style("text-anchor", "middle"),
                  f.attr(
                    "d",
                    "M" + h[0] + "," + b * E + "V0H" + h[1] + "V" + b * E,
                  ))
                : ((t = Xr),
                  (g = "y"),
                  (x = "x"),
                  (p = "y2"),
                  (_ = "x2"),
                  m
                    .attr("dy", ".32em")
                    .style("text-anchor", b < 0 ? "end" : "start"),
                  f.attr(
                    "d",
                    "M" + b * E + "," + h[0] + "H0V" + h[1] + "H" + b * E,
                  )),
              v.attr(_, b * M),
              w.attr(x, b * l),
              y.attr(p, 0).attr(_, b * M),
              S.attr(g, 0).attr(x, b * l),
              i.rangeBand)
            ) {
              var A = i,
                T = A.rangeBand() / 2;
              n = i = function (t) {
                return A(t) + T;
              };
            } else n.rangeBand ? (n = i) : u.call(t, i, n);
            s.call(t, n, i), c.call(t, i, i);
          });
        }
        var P,
          C = qr.scale.linear(),
          L = Cs,
          M = 6,
          E = 6,
          V = 3,
          G = [10],
          k = null;
        return (
          (n.scale = function (t) {
            return arguments.length ? ((C = t), n) : C;
          }),
          (n.orient = function (t) {
            return arguments.length ? ((L = t in Ls ? t + "" : Cs), n) : L;
          }),
          (n.ticks = function () {
            return arguments.length ? ((G = Qr(arguments)), n) : G;
          }),
          (n.tickValues = function (t) {
            return arguments.length ? ((k = t), n) : k;
          }),
          (n.tickFormat = function (t) {
            return arguments.length ? ((P = t), n) : P;
          }),
          (n.tickSize = function (t) {
            var e = arguments.length;
            return e ? ((M = +t), (E = +arguments[e - 1]), n) : M;
          }),
          (n.innerTickSize = function (t) {
            return arguments.length ? ((M = +t), n) : M;
          }),
          (n.outerTickSize = function (t) {
            return arguments.length ? ((E = +t), n) : E;
          }),
          (n.tickPadding = function (t) {
            return arguments.length ? ((V = +t), n) : V;
          }),
          (n.tickSubdivide = function () {
            return arguments.length && n;
          }),
          n
        );
      });
    var Cs = "bottom",
      Ls = { top: 1, right: 1, bottom: 1, left: 1 };
    qr.svg.brush = function () {
      function v(t) {
        t.each(function () {
          var t = qr
              .select(this)
              .style("pointer-events", "all")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
              .on("mousedown.brush", o)
              .on("touchstart.brush", o),
            e = t.selectAll(".background").data([0]);
          e
            .enter()
            .append("rect")
            .attr("class", "background")
            .style("visibility", "hidden")
            .style("cursor", "crosshair"),
            t
              .selectAll(".extent")
              .data([0])
              .enter()
              .append("rect")
              .attr("class", "extent")
              .style("cursor", "move");
          var n = t.selectAll(".resize").data(s, R);
          n.exit().remove(),
            n
              .enter()
              .append("g")
              .attr("class", function (t) {
                return "resize " + t;
              })
              .style("cursor", function (t) {
                return Ms[t];
              })
              .append("rect")
              .attr("x", function (t) {
                return /[ew]$/.test(t) ? -3 : null;
              })
              .attr("y", function (t) {
                return /^[ns]/.test(t) ? -3 : null;
              })
              .attr("width", 6)
              .attr("height", 6)
              .style("visibility", "hidden"),
            n.style("display", v.empty() ? "none" : null);
          var i,
            r = qr.transition(t),
            a = qr.transition(e);
          T &&
            ((i = Qi(T)), a.attr("x", i[0]).attr("width", i[1] - i[0]), m(r)),
            P &&
              ((i = Qi(P)),
              a.attr("y", i[0]).attr("height", i[1] - i[0]),
              w(r)),
            y(r);
        });
      }
      function y(t) {
        t.selectAll(".resize").attr("transform", function (t) {
          return "translate(" + C[+/e$/.test(t)] + "," + L[+/^s/.test(t)] + ")";
        });
      }
      function m(t) {
        t.select(".extent").attr("x", C[0]),
          t.selectAll(".extent,.n>rect,.s>rect").attr("width", C[1] - C[0]);
      }
      function w(t) {
        t.select(".extent").attr("y", L[0]),
          t.selectAll(".extent,.e>rect,.w>rect").attr("height", L[1] - L[0]);
      }
      function o() {
        function t() {
          var t = qr.mouse(r),
            e = !1;
          i && ((t[0] += i[0]), (t[1] += i[1])),
            d ||
              (qr.event.altKey
                ? (h || (h = [(C[0] + C[1]) / 2, (L[0] + L[1]) / 2]),
                  (g[0] = C[+(t[0] < h[0])]),
                  (g[1] = L[+(t[1] < h[1])]))
                : (h = null)),
            c && n(t, T, 0) && (m(s), (e = !0)),
            l && n(t, P, 1) && (w(s), (e = !0)),
            e && (y(s), o({ type: "brush", mode: d ? "move" : "resize" }));
        }
        function n(t, e, n) {
          var i,
            r,
            a = Qi(e),
            o = a[0],
            s = a[1],
            u = g[n],
            c = n ? L : C,
            l = c[1] - c[0];
          return (
            d && ((o -= u), (s -= l + u)),
            (i = (n ? E : M) ? Math.max(o, Math.min(s, t[n])) : t[n]),
            d
              ? (r = (i += u) + l)
              : (h && (u = Math.max(o, Math.min(s, 2 * h[n] - i))),
                u < i ? ((r = i), (i = u)) : (r = u)),
            c[0] != i || c[1] != r
              ? (n ? (b = null) : (S = null), (c[0] = i), (c[1] = r), !0)
              : void 0
          );
        }
        function e() {
          t(),
            s
              .style("pointer-events", "all")
              .selectAll(".resize")
              .style("display", v.empty() ? "none" : null),
            qr.select("body").style("cursor", null),
            p
              .on("mousemove.brush", null)
              .on("mouseup.brush", null)
              .on("touchmove.brush", null)
              .on("touchend.brush", null)
              .on("keydown.brush", null)
              .on("keyup.brush", null),
            f(),
            o({ type: "brushend" });
        }
        var h,
          i,
          r = this,
          a = qr.select(qr.event.target),
          o = A.of(r, arguments),
          s = qr.select(r),
          u = a.datum(),
          c = !/^(n|s)$/.test(u) && T,
          l = !/^(e|w)$/.test(u) && P,
          d = a.classed("extent"),
          f = U(r),
          g = qr.mouse(r),
          p = qr
            .select(k(r))
            .on("keydown.brush", function () {
              32 == qr.event.keyCode &&
                (d || ((h = null), (g[0] -= C[1]), (g[1] -= L[1]), (d = 2)),
                O());
            })
            .on("keyup.brush", function () {
              32 == qr.event.keyCode &&
                2 == d &&
                ((g[0] += C[1]), (g[1] += L[1]), (d = 0), O());
            });
        if (
          (qr.event.changedTouches
            ? p.on("touchmove.brush", t).on("touchend.brush", e)
            : p.on("mousemove.brush", t).on("mouseup.brush", e),
          s.interrupt().selectAll("*").interrupt(),
          d)
        )
          (g[0] = C[0] - g[0]), (g[1] = L[0] - g[1]);
        else if (u) {
          var x = +/w$/.test(u),
            _ = +/^n/.test(u);
          (i = [C[1 - x] - g[0], L[1 - _] - g[1]]),
            (g[0] = C[x]),
            (g[1] = L[_]);
        } else qr.event.altKey && (h = g.slice());
        s
          .style("pointer-events", "none")
          .selectAll(".resize")
          .style("display", null),
          qr.select("body").style("cursor", a.style("cursor")),
          o({ type: "brushstart" }),
          t();
      }
      var S,
        b,
        A = I(v, "brushstart", "brush", "brushend"),
        T = null,
        P = null,
        C = [0, 0],
        L = [0, 0],
        M = !0,
        E = !0,
        s = Es[0];
      return (
        (v.event = function (t) {
          t.each(function () {
            var i = A.of(this, arguments),
              r = { x: C, y: L, i: S, j: b },
              t = this.__chart__ || r;
            (this.__chart__ = r),
              Ss
                ? qr
                    .select(this)
                    .transition()
                    .each("start.brush", function () {
                      (S = t.i),
                        (b = t.j),
                        (C = t.x),
                        (L = t.y),
                        i({ type: "brushstart" });
                    })
                    .tween("brush:brush", function () {
                      var e = qn(C, r.x),
                        n = qn(L, r.y);
                      return (
                        (S = b = null),
                        function (t) {
                          (C = r.x = e(t)),
                            (L = r.y = n(t)),
                            i({ type: "brush", mode: "resize" });
                        }
                      );
                    })
                    .each("end.brush", function () {
                      (S = r.i),
                        (b = r.j),
                        i({ type: "brush", mode: "resize" }),
                        i({ type: "brushend" });
                    })
                : (i({ type: "brushstart" }),
                  i({ type: "brush", mode: "resize" }),
                  i({ type: "brushend" }));
          });
        }),
        (v.x = function (t) {
          return arguments.length ? ((s = Es[(!(T = t) << 1) | !P]), v) : T;
        }),
        (v.y = function (t) {
          return arguments.length ? ((s = Es[(!T << 1) | !(P = t)]), v) : P;
        }),
        (v.clamp = function (t) {
          return arguments.length
            ? (T && P
                ? ((M = !!t[0]), (E = !!t[1]))
                : T
                  ? (M = !!t)
                  : P && (E = !!t),
              v)
            : T && P
              ? [M, E]
              : T
                ? M
                : P
                  ? E
                  : null;
        }),
        (v.extent = function (t) {
          var e, n, i, r, a;
          return arguments.length
            ? (T &&
                ((e = t[0]),
                (n = t[1]),
                P && ((e = e[0]), (n = n[0])),
                (S = [e, n]),
                T.invert && ((e = T(e)), (n = T(n))),
                n < e && ((a = e), (e = n), (n = a)),
                (e == C[0] && n == C[1]) || (C = [e, n])),
              P &&
                ((i = t[0]),
                (r = t[1]),
                T && ((i = i[1]), (r = r[1])),
                (b = [i, r]),
                P.invert && ((i = P(i)), (r = P(r))),
                r < i && ((a = i), (i = r), (r = a)),
                (i == L[0] && r == L[1]) || (L = [i, r])),
              v)
            : (T &&
                (S
                  ? ((e = S[0]), (n = S[1]))
                  : ((e = C[0]),
                    (n = C[1]),
                    T.invert && ((e = T.invert(e)), (n = T.invert(n))),
                    n < e && ((a = e), (e = n), (n = a)))),
              P &&
                (b
                  ? ((i = b[0]), (r = b[1]))
                  : ((i = L[0]),
                    (r = L[1]),
                    P.invert && ((i = P.invert(i)), (r = P.invert(r))),
                    r < i && ((a = i), (i = r), (r = a)))),
              T && P
                ? [
                    [e, i],
                    [n, r],
                  ]
                : T
                  ? [e, n]
                  : P && [i, r]);
        }),
        (v.clear = function () {
          return v.empty() || ((C = [0, 0]), (L = [0, 0]), (S = b = null)), v;
        }),
        (v.empty = function () {
          return (!!T && C[0] == C[1]) || (!!P && L[0] == L[1]);
        }),
        qr.rebind(v, A, "on")
      );
    };
    var Ms = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize",
      },
      Es = [
        ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
        ["e", "w"],
        ["n", "s"],
        [],
      ],
      Vs = (Qa.format = eo.timeFormat),
      Gs = Vs.utc,
      ks = Gs("%Y-%m-%dT%H:%M:%S.%LZ");
    (Vs.iso =
      Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z")
        ? Hr
        : ks),
      (Hr.parse = function (t) {
        var e = new Date(t);
        return isNaN(e) ? null : e;
      }),
      (Hr.toString = ks.toString),
      (Qa.second = Vt(
        function (t) {
          return new Za(1e3 * Math.floor(t / 1e3));
        },
        function (t, e) {
          t.setTime(t.getTime() + 1e3 * Math.floor(e));
        },
        function (t) {
          return t.getSeconds();
        },
      )),
      (Qa.seconds = Qa.second.range),
      (Qa.seconds.utc = Qa.second.utc.range),
      (Qa.minute = Vt(
        function (t) {
          return new Za(6e4 * Math.floor(t / 6e4));
        },
        function (t, e) {
          t.setTime(t.getTime() + 6e4 * Math.floor(e));
        },
        function (t) {
          return t.getMinutes();
        },
      )),
      (Qa.minutes = Qa.minute.range),
      (Qa.minutes.utc = Qa.minute.utc.range),
      (Qa.hour = Vt(
        function (t) {
          var e = t.getTimezoneOffset() / 60;
          return new Za(36e5 * (Math.floor(t / 36e5 - e) + e));
        },
        function (t, e) {
          t.setTime(t.getTime() + 36e5 * Math.floor(e));
        },
        function (t) {
          return t.getHours();
        },
      )),
      (Qa.hours = Qa.hour.range),
      (Qa.hours.utc = Qa.hour.utc.range),
      (Qa.month = Vt(
        function (t) {
          return (t = Qa.day(t)).setDate(1), t;
        },
        function (t, e) {
          t.setMonth(t.getMonth() + e);
        },
        function (t) {
          return t.getMonth();
        },
      )),
      (Qa.months = Qa.month.range),
      (Qa.months.utc = Qa.month.utc.range);
    var Rs = [
        1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5,
        864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6,
      ],
      Os = [
        [Qa.second, 1],
        [Qa.second, 5],
        [Qa.second, 15],
        [Qa.second, 30],
        [Qa.minute, 1],
        [Qa.minute, 5],
        [Qa.minute, 15],
        [Qa.minute, 30],
        [Qa.hour, 1],
        [Qa.hour, 3],
        [Qa.hour, 6],
        [Qa.hour, 12],
        [Qa.day, 1],
        [Qa.day, 2],
        [Qa.week, 1],
        [Qa.month, 1],
        [Qa.month, 3],
        [Qa.year, 1],
      ],
      Is = Vs.multi([
        [
          ".%L",
          function (t) {
            return t.getMilliseconds();
          },
        ],
        [
          ":%S",
          function (t) {
            return t.getSeconds();
          },
        ],
        [
          "%I:%M",
          function (t) {
            return t.getMinutes();
          },
        ],
        [
          "%I %p",
          function (t) {
            return t.getHours();
          },
        ],
        [
          "%a %d",
          function (t) {
            return t.getDay() && 1 != t.getDate();
          },
        ],
        [
          "%b %d",
          function (t) {
            return 1 != t.getDate();
          },
        ],
        [
          "%B",
          function (t) {
            return t.getMonth();
          },
        ],
        ["%Y", ve],
      ]),
      Ds = {
        range: function (t, e, n) {
          return qr.range(Math.ceil(t / n) * n, +e, n).map(Br);
        },
        floor: R,
        ceil: R,
      };
    (Os.year = Qa.year),
      (Qa.scale = function () {
        return Yr(qr.scale.linear(), Os, Is);
      });
    var Ns = Os.map(function (t) {
        return [t[0].utc, t[1]];
      }),
      Fs = Gs.multi([
        [
          ".%L",
          function (t) {
            return t.getUTCMilliseconds();
          },
        ],
        [
          ":%S",
          function (t) {
            return t.getUTCSeconds();
          },
        ],
        [
          "%I:%M",
          function (t) {
            return t.getUTCMinutes();
          },
        ],
        [
          "%I %p",
          function (t) {
            return t.getUTCHours();
          },
        ],
        [
          "%a %d",
          function (t) {
            return t.getUTCDay() && 1 != t.getUTCDate();
          },
        ],
        [
          "%b %d",
          function (t) {
            return 1 != t.getUTCDate();
          },
        ],
        [
          "%B",
          function (t) {
            return t.getUTCMonth();
          },
        ],
        ["%Y", ve],
      ]);
    (Ns.year = Qa.year.utc),
      (Qa.scale.utc = function () {
        return Yr(qr.scale.linear(), Ns, Fs);
      }),
      (qr.text = St(function (t) {
        return t.responseText;
      })),
      (qr.json = function (t, e) {
        return bt(t, "application/json", jr, e);
      }),
      (qr.html = function (t, e) {
        return bt(t, "text/html", Ur, e);
      }),
      (qr.xml = St(function (t) {
        return t.responseXML;
      })),
      "function" == typeof define && define.amd
        ? ((this.d3 = qr), define(qr))
        : "object" == typeof module && module.exports
          ? (module.exports = qr)
          : (this.d3 = qr);
  })();
