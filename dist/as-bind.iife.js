var AsBindIIFE = (function (t) {
  "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ function e(
    t,
    e,
    r,
    n
  ) {
    return new (r || (r = Promise))(function (o, i) {
      function a(t) {
        try {
          c(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function s(t) {
        try {
          c(n.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                })).then(a, s);
      }
      c((n = n.apply(t, e || [])).next());
    });
  }
  function r(t, e) {
    var r,
      n,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function s(i) {
      return function (s) {
        return (function (i) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & i[0]
                      ? n.return
                      : i[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, i[1])).done)
              )
                return o;
              switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (n = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = e.call(t, a);
            } catch (t) {
              (i = [6, t]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, s]);
      };
    }
  }
  function n(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
          );
        }
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function o(t, e) {
    var r = "function" == typeof Symbol && t[Symbol.iterator];
    if (!r) return t;
    var n,
      o,
      i = r.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
        a.push(n.value);
    } catch (t) {
      o = { error: t };
    } finally {
      try {
        n && !n.done && (r = i.return) && r.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function i(t, e, r) {
    if (r || 2 === arguments.length)
      for (var n, o = 0, i = e.length; o < i; o++)
        (!n && o in e) ||
          (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]));
    return t.concat(n || Array.prototype.slice.call(e));
  }
  const a = "undefined" != typeof BigUint64Array,
    s = Symbol(),
    c = new TextDecoder("utf-16le", { fatal: !0 });
  function u(t, e) {
    let r = new Uint32Array(t)[(e + -4) >>> 2] >>> 1;
    const n = new Uint16Array(t, e, r);
    if (r <= 192) return String.fromCharCode(...n);
    try {
      return c.decode(n);
    } catch {
      let t = "",
        e = 0;
      for (; r - e > 1024; )
        t += String.fromCharCode(...n.subarray(e, (e += 1024)));
      return t + String.fromCharCode(...n.subarray(e));
    }
  }
  function l(t) {
    const e = {};
    function r(t, e) {
      return t ? u(t.buffer, e) : "<yet unknown>";
    }
    const n = (t.env = t.env || {});
    return (
      (n.abort =
        n.abort ||
        function (t, o, i, a) {
          const s = e.memory || n.memory;
          throw Error(`abort: ${r(s, t)} at ${r(s, o)}:${i}:${a}`);
        }),
      (n.trace =
        n.trace ||
        function (t, o, ...i) {
          const a = e.memory || n.memory;
          console.log(
            `trace: ${r(a, t)}${o ? " " : ""}${i.slice(0, o).join(", ")}`
          );
        }),
      (n.seed = n.seed || Date.now),
      (t.Math = t.Math || Math),
      (t.Date = t.Date || Date),
      e
    );
  }
  const y = function () {
    throw Error("Operation requires compiling with --exportRuntime");
  };
  function f(t, e) {
    const r = e.exports,
      n = r.memory,
      o = r.table,
      i = r.__new || y,
      s = r.__pin || y,
      c = r.__unpin || y,
      l = r.__collect || y,
      f = r.__rtti_base,
      p = f
        ? function (t) {
            return t[f >>> 2];
          }
        : y;
    function d(t) {
      const e = (function (t) {
        const e = new Uint32Array(n.buffer);
        if ((t >>>= 0) >= p(e)) throw Error(`invalid id: ${t}`);
        return e[((f + 4) >>> 2) + 2 * t];
      })(t);
      if (!(7 & e)) throw Error(`not an array: ${t}, flags=${e}`);
      return e;
    }
    function h(t) {
      const e = new Uint32Array(n.buffer);
      if ((t >>>= 0) >= p(e)) throw Error(`invalid id: ${t}`);
      return e[((f + 4) >>> 2) + 2 * t + 1];
    }
    function b(t) {
      return 31 - Math.clz32((t >>> 6) & 31);
    }
    function w(t, e, r) {
      const o = n.buffer;
      if (r)
        switch (t) {
          case 2:
            return new Float32Array(o);
          case 3:
            return new Float64Array(o);
        }
      else
        switch (t) {
          case 0:
            return new (e ? Int8Array : Uint8Array)(o);
          case 1:
            return new (e ? Int16Array : Uint16Array)(o);
          case 2:
            return new (e ? Int32Array : Uint32Array)(o);
          case 3:
            return new (e ? BigInt64Array : BigUint64Array)(o);
        }
      throw Error(`unsupported align: ${t}`);
    }
    function g(t) {
      const e = new Uint32Array(n.buffer),
        r = d(e[(t + -8) >>> 2]),
        o = b(r);
      let i = 4 & r ? t : e[(t + 4) >>> 2];
      const a = 2 & r ? e[(t + 12) >>> 2] : e[(i + -4) >>> 2] >>> o;
      return w(o, 2048 & r, 4096 & r).subarray((i >>>= o), i + a);
    }
    function _(t, e, r) {
      return new t(A(t, e, r));
    }
    function A(t, e, r) {
      const o = n.buffer,
        i = new Uint32Array(o),
        a = i[(r + 4) >>> 2];
      return new t(o, a, i[(a + -4) >>> 2] >>> e);
    }
    function v(e, r, n) {
      (t[`__get${r}`] = _.bind(null, e, n)),
        (t[`__get${r}View`] = A.bind(null, e, n));
    }
    return (
      (t.__new = i),
      (t.__pin = s),
      (t.__unpin = c),
      (t.__collect = l),
      (t.__newString = function (t) {
        if (null == t) return 0;
        const e = t.length,
          r = i(e << 1, 1),
          o = new Uint16Array(n.buffer);
        for (var a = 0, s = r >>> 1; a < e; ++a) o[s + a] = t.charCodeAt(a);
        return r;
      }),
      (t.__newArrayBuffer = function (t) {
        if (null == t) return 0;
        const e = new Uint8Array(t),
          r = i(e.length, 0);
        return new Uint8Array(n.buffer).set(e, r), r;
      }),
      (t.__getString = function (t) {
        if (!t) return null;
        const e = n.buffer;
        if (1 !== new Uint32Array(e)[(t + -8) >>> 2])
          throw Error(`not a string: ${t}`);
        return u(e, t);
      }),
      (t.__newArray = function (t, e) {
        const r = d(t),
          o = b(r),
          a = e.length,
          u = i(a << o, 4 & r ? t : 0);
        let l;
        if (4 & r) l = u;
        else {
          s(u);
          const e = i(2 & r ? 16 : 12, t);
          c(u);
          const y = new Uint32Array(n.buffer);
          (y[(e + 0) >>> 2] = u),
            (y[(e + 4) >>> 2] = u),
            (y[(e + 8) >>> 2] = a << o),
            2 & r && (y[(e + 12) >>> 2] = a),
            (l = e);
        }
        const y = w(o, 2048 & r, 4096 & r);
        if (16384 & r)
          for (let t = 0; t < a; ++t) {
            const r = e[t];
            y[(u >>> o) + t] = r;
          }
        else y.set(e, u >>> o);
        return l;
      }),
      (t.__getArrayView = g),
      (t.__getArray = function (t) {
        const e = g(t),
          r = e.length,
          n = new Array(r);
        for (let t = 0; t < r; t++) n[t] = e[t];
        return n;
      }),
      (t.__getArrayBuffer = function (t) {
        const e = n.buffer,
          r = new Uint32Array(e)[(t + -4) >>> 2];
        return e.slice(t, t + r);
      }),
      [
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ].forEach(t => {
        v(t, t.name, 31 - Math.clz32(t.BYTES_PER_ELEMENT));
      }),
      a &&
        [BigUint64Array, BigInt64Array].forEach(t => {
          v(t, t.name.slice(3), 3);
        }),
      (t.__instanceof = function (t, e) {
        const r = new Uint32Array(n.buffer);
        let o = r[(t + -8) >>> 2];
        if (o <= p(r))
          do {
            if (o == e) return !0;
            o = h(o);
          } while (o);
        return !1;
      }),
      (t.memory = t.memory || n),
      (t.table = t.table || o),
      m(r, t)
    );
  }
  function p(t) {
    return "undefined" != typeof Response && t instanceof Response;
  }
  function d(t) {
    return t instanceof WebAssembly.Module;
  }
  async function h(t, e = {}) {
    if (p((t = await t))) return b(t, e);
    const r = d(t) ? t : await WebAssembly.compile(t),
      n = l(e),
      o = await WebAssembly.instantiate(r, e);
    return { module: r, instance: o, exports: f(n, o) };
  }
  async function b(t, e = {}) {
    if (!WebAssembly.instantiateStreaming)
      return h(p((t = await t)) ? t.arrayBuffer() : t, e);
    const r = l(e),
      n = await WebAssembly.instantiateStreaming(t, e),
      o = f(r, n.instance);
    return { ...n, exports: o };
  }
  function m(t, e = {}) {
    const r = t.__argumentsLength
      ? e => {
          t.__argumentsLength.value = e;
        }
      : t.__setArgumentsLength || t.__setargc || (() => {});
    for (let n in t) {
      if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
      const o = t[n];
      let i = n.split("."),
        a = e;
      for (; i.length > 1; ) {
        let t = i.shift();
        Object.prototype.hasOwnProperty.call(a, t) || (a[t] = {}), (a = a[t]);
      }
      let c = i[0],
        u = c.indexOf("#");
      if (u >= 0) {
        const e = c.substring(0, u),
          i = a[e];
        if (void 0 === i || !i.prototype) {
          const t = function (...e) {
            return t.wrap(t.prototype.constructor(0, ...e));
          };
          (t.prototype = {
            valueOf() {
              return this[s];
            }
          }),
            (t.wrap = function (e) {
              return Object.create(t.prototype, {
                [s]: { value: e, writable: !1 }
              });
            }),
            i &&
              Object.getOwnPropertyNames(i).forEach(e =>
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                )
              ),
            (a[e] = t);
        }
        if (
          ((c = c.substring(u + 1)),
          (a = a[e].prototype),
          /^(get|set):/.test(c))
        ) {
          if (!Object.prototype.hasOwnProperty.call(a, (c = c.substring(4)))) {
            let e = t[n.replace("set:", "get:")],
              r = t[n.replace("get:", "set:")];
            Object.defineProperty(a, c, {
              get() {
                return e(this[s]);
              },
              set(t) {
                r(this[s], t);
              },
              enumerable: !0
            });
          }
        } else
          "constructor" === c
            ? ((a[c] = (...t) => (r(t.length), o(...t))).original = o)
            : ((a[c] = function (...t) {
                return r(t.length), o(this[s], ...t);
              }).original = o);
      } else
        /^(get|set):/.test(c)
          ? Object.prototype.hasOwnProperty.call(a, (c = c.substring(4))) ||
            Object.defineProperty(a, c, {
              get: t[n.replace("set:", "get:")],
              set: t[n.replace("get:", "set:")],
              enumerable: !0
            })
          : "function" == typeof o && o !== r
          ? ((a[c] = (...t) => (r(t.length), o(...t))).original = o)
          : (a[c] = o);
    }
    return e;
  }
  var w = {
    instantiate: h,
    instantiateSync: function (t, e = {}) {
      const r = d(t) ? t : new WebAssembly.Module(t),
        n = l(e),
        o = new WebAssembly.Instance(r, e);
      return { module: r, instance: o, exports: f(n, o) };
    },
    instantiateStreaming: b,
    demangle: m
  };
  function g(t, n) {
    return e(this, void 0, void 0, function () {
      return r(this, function (e) {
        return [2, w.instantiate(t, n)];
      });
    });
  }
  var _ = "~lib/typedarray/";
  function A(t, e, r) {
    return e;
  }
  function v(t, e, r) {
    return t.exports[
      "__get" +
        (function (t) {
          return t.startsWith(_)
            ? ((t = t.slice(_.length)).startsWith("Big") && (t = t.slice(3)), t)
            : t;
        })(r) +
        "View"
    ](e);
  }
  function x(t, e, r) {
    return t.exports.__newArray(t.getTypeId(r), e);
  }
  var S = "~lib/array/Array";
  function T(t) {
    if (!t.startsWith(S))
      throw Error(JSON.stringify(t) + " is not an array type");
    return t.slice((S + "<").length, -1);
  }
  var j = new Map([
      ["void", { ascToJs: A, jsToAsc: A }],
      [
        /^(i|u|f)(8|16|32|64)|[ui]size|bool|externref$/,
        { ascToJs: A, jsToAsc: A }
      ],
      [
        "~lib/string/String",
        {
          ascToJs: function (t, e, r) {
            return t.exports.__getString(e);
          },
          jsToAsc: function (t, e, r) {
            return t.exports.__newString(e);
          }
        }
      ],
      ["~lib/typedarray/Int8Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Int16Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Int32Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Uint8Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Uint16Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Uint32Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Int64Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Uint64Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Uint8ClampedArray", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Float32Array", { ascToJs: v, jsToAsc: x }],
      ["~lib/typedarray/Float64Array", { ascToJs: v, jsToAsc: x }],
      [
        "~lib/arraybuffer/ArrayBuffer",
        {
          ascToJs: function (t, e, r) {
            return t.exports.__getArrayBuffer(e);
          },
          jsToAsc: function (t, e, r) {
            var n = t.exports.__new(e.byteLength, t.getTypeId(r));
            return (
              new Uint8Array(t.exports.memory.buffer, n, e.byteLength).set(
                new Uint8Array(e)
              ),
              n
            );
          }
        }
      ],
      [
        /^~lib\/array\/Array<.+>$/,
        {
          ascToJs: function (t, e, r) {
            var n = T(r),
              o = U(n);
            return t.exports.__getArray(e).map(function (e) {
              return o.ascToJs(t, e, n);
            });
          },
          jsToAsc: function (t, e, r) {
            var n = T(r),
              o = U(n),
              i = e.map(function (e) {
                return o.jsToAsc(t, e, n);
              });
            return t.exports.__newArray(t.getTypeId(r), i);
          }
        }
      ]
    ]),
    O = new Set();
  function U(t) {
    var e, r;
    try {
      for (var i = n(j), a = i.next(); !a.done; a = i.next()) {
        var s = o(a.value, 2),
          c = s[0],
          u = s[1];
        if ("string" != typeof c) {
          if (c.test(t)) return u;
        } else if (c === t) return u;
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return (
      O.has(t) ||
        (console.warn(
          "No converter for " + JSON.stringify(t) + ", using pass-through"
        ),
        O.add(t)),
      { ascToJs: A, jsToAsc: A }
    );
  }
  function E(t) {
    return U(t).ascToJs;
  }
  function M(t) {
    return U(t).jsToAsc;
  }
  function I(t, e, r) {
    var n = r.parameters.map(E),
      a = M(r.returnType);
    return function () {
      for (var s = [], c = 0; c < arguments.length; c++) s[c] = arguments[c];
      if (t.isAsyncifyModule && 2 === t.exports.asyncify_get_state())
        return (
          t.loadedModule.exports.asyncify_stop_rewind(),
          t.loadedModule.exports.__unpin(t.asyncifyState.ptr),
          a(t, t.asyncifyState.value, r.returnType)
        );
      if (s.length != n.length)
        throw Error("Expected " + n.length + " arguments, got " + s.length);
      var u = s.map(function (e, o) {
          return n[o](t, e, r.parameters[o]);
        }),
        l = e.apply(void 0, i([], o(u), !1));
      if (!(t.isAsyncifyModule && l instanceof Promise))
        return a(t, l, r.returnType);
      (t.asyncifyState = {
        ptr: t.loadedModule.exports.__new(t.asyncifyStorageSize, 0)
      }),
        t.loadedModule.exports.__pin(t.asyncifyState.ptr);
      var y = new DataView(t.loadedModule.exports.memory.buffer);
      y.setUint32(t.asyncifyState.ptr, t.asyncifyState.ptr + 8, !0),
        y.setUint32(
          t.asyncifyState.ptr + 4,
          t.asyncifyState.ptr + t.asyncifyStorageSize,
          !0
        ),
        t.loadedModule.exports.asyncify_start_unwind(t.asyncifyState.ptr),
        (t.asyncifyState.promise = l);
    };
  }
  function J(t, e, r) {
    var n = this,
      a = r.parameters.map(M),
      s = E(r.returnType);
    return function () {
      for (var c = [], u = 0; u < arguments.length; u++) c[u] = arguments[u];
      if (c.length != a.length)
        throw Error("Expected " + a.length + " arguments, got " + c.length);
      var l = [],
        y = c.map(function (e, n) {
          var o = a[n](t, e, r.parameters[n]);
          return o !== e && (t.exports.__pin(o), l.push(o)), o;
        });
      return function n() {
        for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
        var u = e.apply(void 0, i([], o(a), !1));
        if (
          (l.forEach(function (e) {
            return t.exports.__unpin(e);
          }),
          !t.isAsyncifyModule || 0 === t.exports.asyncify_get_state())
        )
          return s(t, u, r.returnType);
        t.loadedModule.exports.asyncify_stop_unwind();
        var y = t.asyncifyState;
        return y.promise.then(function (e) {
          return (
            (y.value = e),
            (t.asyncifyState = y),
            t.loadedModule.exports.asyncify_start_rewind(t.asyncifyState.ptr),
            n.apply(void 0, i([], o(a), !1))
          );
        });
      }
        .bind(n)
        .apply(void 0, i([], o(y), !1));
    };
  }
  var B = "as-bind_bindings";
  function W(t, e) {
    var r = (void 0 === e ? {} : e).depth,
      n = void 0 === r ? Number.POSITIVE_INFINITY : r;
    return n <= 0 || !t || "object" != typeof t
      ? t
      : Object.fromEntries(
          Object.entries(t).map(function (t) {
            var e = o(t, 2);
            return [e[0], W(e[1], { depth: n - 1 })];
          })
        );
  }
  function $(t) {
    return e(this, void 0, void 0, function () {
      return r(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, Promise.resolve(t)];
          case 1:
            return (
              (t = e.sent()),
              "undefined" != typeof Response && t instanceof Response
                ? WebAssembly.compileStreaming
                  ? [2, WebAssembly.compileStreaming(t)]
                  : [4, t.arrayBuffer()]
                : [3, 3]
            );
          case 2:
            (t = e.sent()), (e.label = 3);
          case 3:
            return [2, WebAssembly.compile(t)];
        }
      });
    });
  }
  function D(t) {
    var e = WebAssembly.Module.customSections(t, B),
      r = new TextDecoder("utf8").decode(new Uint8Array(e[0]));
    try {
      return JSON.parse(r);
    } catch (t) {
      throw Error("Couldn’t decode type descriptor: " + t.message);
    }
  }
  var P = (function () {
    function t() {
      (this.exports = {}),
        (this.importObject = {}),
        (this.asyncifyStorageSize = 8192),
        (this.isAsyncifyModule = !1);
    }
    return (
      (t.prototype.getTypeId = function (t) {
        if (t in this.typeDescriptor.typeIds)
          return this.typeDescriptor.typeIds[t].id;
        throw Error("Unknown type " + JSON.stringify(t));
      }),
      (t.prototype.getTypeSize = function (t) {
        if (t in this.typeDescriptor.typeIds)
          return this.typeDescriptor.typeIds[t].byteSize;
        throw Error("Unknown type " + JSON.stringify(t));
      }),
      (t.prototype._validate = function () {
        if (
          !WebAssembly.Module.exports(this.module).find(function (t) {
            return "__new" === t.name;
          })
        )
          throw Error(
            "The AssemblyScript wasm module was not built with --exportRuntime, which is required."
          );
        if (1 !== WebAssembly.Module.customSections(this.module, B).length)
          throw new Error(
            "The AssemblyScript wasm module was not built with the as-bind transform."
          );
        (this.isAsyncifyModule = Boolean(
          WebAssembly.Module.exports(this.module).find(function (t) {
            return "asyncify_start_unwind" === t.name;
          })
        )),
          this.isAsyncifyModule ||
            (this.exports.asyncify_get_state = function () {
              return 0;
            });
      }),
      (t.prototype._instantiate = function (t, n) {
        return e(this, void 0, void 0, function () {
          var e, o;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                return (e = this), [4, $(t)];
              case 1:
                return (
                  (e.module = r.sent()),
                  this._validate(),
                  (this.typeDescriptor = D(this.module)),
                  this._instantiateBindImportFunctions(n),
                  (o = this),
                  [4, g(this.module, this.importObject)]
                );
              case 2:
                return (
                  (o.loadedModule = r.sent()),
                  this._instantiateBindUnboundExports(),
                  [2]
                );
            }
          });
        });
      }),
      (t.prototype._instantiateSync = function (t, e) {
        (this.module = new WebAssembly.Module(t)),
          this._validate(),
          (this.typeDescriptor = D(this.module)),
          this._instantiateBindImportFunctions(e),
          (this.loadedModule = (function (t, e) {
            return w.instantiateSync(t, e);
          })(this.module, this.importObject)),
          this._instantiateBindUnboundExports();
      }),
      (t.prototype._instantiateBindImportFunctions = function (t) {
        var e, r, i, a;
        this.importObject = W(t, { depth: 2 });
        try {
          for (
            var s = n(Object.entries(this.typeDescriptor.importedFunctions)),
              c = s.next();
            !c.done;
            c = s.next()
          ) {
            var u = o(c.value, 2),
              l = u[0],
              y = u[1];
            try {
              for (
                var f = ((i = void 0), n(Object.entries(y))), p = f.next();
                !p.done;
                p = f.next()
              ) {
                var d = o(p.value, 2),
                  h = d[0],
                  b = d[1];
                (this.importObject[l]["__asbind_unbound_" + h] = t[l][h]),
                  (this.importObject[l][h] = I(this, t[l][h], b));
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                p && !p.done && (a = f.return) && a.call(f);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            c && !c.done && (r = s.return) && r.call(s);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (t.prototype._instantiateBindUnboundExports = function () {
        var t,
          e,
          r = this.loadedModule.exports;
        this.exports = W(r, { depth: 1 });
        try {
          for (
            var i = n(Object.entries(this.typeDescriptor.exportedFunctions)),
              a = i.next();
            !a.done;
            a = i.next()
          ) {
            var s = o(a.value, 2),
              c = s[0],
              u = s[1];
            this.exports[c] = J(this, r[c], u);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            a && !a.done && (e = i.return) && e.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      t
    );
  })();
  return (
    (t.converters = j),
    (t.instantiate = function (t, n) {
      return e(this, void 0, void 0, function () {
        var e;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, (e = new P())._instantiate(t, n)];
            case 1:
              return r.sent(), [2, e];
          }
        });
      });
    }),
    (t.instantiateSync = function (t, e) {
      var r = new P();
      return r._instantiateSync(t, e), r;
    }),
    (t.version = "0.8.2"),
    Object.defineProperty(t, "__esModule", { value: !0 }),
    t
  );
})({});
