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
***************************************************************************** */
function t(t, e, r, n) {
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
function e(t, e) {
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
function r(t) {
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
function n(t, e) {
  var r = "function" == typeof Symbol && t[Symbol.iterator];
  if (!r) return t;
  var n,
    o,
    i = r.call(t),
    a = [];
  try {
    for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; ) a.push(n.value);
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
function o(t, e, r) {
  if (r || 2 === arguments.length)
    for (var n, o = 0, i = e.length; o < i; o++)
      (!n && o in e) ||
        (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]));
  return t.concat(n || Array.prototype.slice.call(e));
}
Object.defineProperty(exports, "__esModule", { value: !0 });
const i = "undefined" != typeof BigUint64Array,
  a = Symbol(),
  s = new TextDecoder("utf-16le", { fatal: !0 });
function c(t, e) {
  let r = new Uint32Array(t)[(e + -4) >>> 2] >>> 1;
  const n = new Uint16Array(t, e, r);
  if (r <= 192) return String.fromCharCode(...n);
  try {
    return s.decode(n);
  } catch {
    let t = "",
      e = 0;
    for (; r - e > 1024; )
      t += String.fromCharCode(...n.subarray(e, (e += 1024)));
    return t + String.fromCharCode(...n.subarray(e));
  }
}
function u(t) {
  const e = {};
  function r(t, e) {
    return t ? c(t.buffer, e) : "<yet unknown>";
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
function l(t, e) {
  const r = e.exports,
    n = r.memory,
    o = r.table,
    a = r.__new || y,
    s = r.__pin || y,
    u = r.__unpin || y,
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
  function m(t) {
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
      o = m(r);
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
    (t.__new = a),
    (t.__pin = s),
    (t.__unpin = u),
    (t.__collect = l),
    (t.__newString = function (t) {
      if (null == t) return 0;
      const e = t.length,
        r = a(e << 1, 1),
        o = new Uint16Array(n.buffer);
      for (var i = 0, s = r >>> 1; i < e; ++i) o[s + i] = t.charCodeAt(i);
      return r;
    }),
    (t.__newArrayBuffer = function (t) {
      if (null == t) return 0;
      const e = new Uint8Array(t),
        r = a(e.length, 0);
      return new Uint8Array(n.buffer).set(e, r), r;
    }),
    (t.__getString = function (t) {
      if (!t) return null;
      const e = n.buffer;
      if (1 !== new Uint32Array(e)[(t + -8) >>> 2])
        throw Error(`not a string: ${t}`);
      return c(e, t);
    }),
    (t.__newArray = function (t, e) {
      const r = d(t),
        o = m(r),
        i = e.length,
        c = a(i << o, 4 & r ? t : 0);
      let y;
      if (4 & r) y = c;
      else {
        s(c);
        const e = a(2 & r ? 16 : 12, t);
        u(c);
        const l = new Uint32Array(n.buffer);
        (l[(e + 0) >>> 2] = c),
          (l[(e + 4) >>> 2] = c),
          (l[(e + 8) >>> 2] = i << o),
          2 & r && (l[(e + 12) >>> 2] = i),
          (y = e);
      }
      const l = w(o, 2048 & r, 4096 & r);
      if (16384 & r)
        for (let t = 0; t < i; ++t) {
          const r = e[t];
          l[(c >>> o) + t] = r;
        }
      else l.set(e, c >>> o);
      return y;
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
    i &&
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
    b(r, t)
  );
}
function f(t) {
  return "undefined" != typeof Response && t instanceof Response;
}
function p(t) {
  return t instanceof WebAssembly.Module;
}
async function d(t, e = {}) {
  if (f((t = await t))) return h(t, e);
  const r = p(t) ? t : await WebAssembly.compile(t),
    n = u(e),
    o = await WebAssembly.instantiate(r, e);
  return { module: r, instance: o, exports: l(n, o) };
}
async function h(t, e = {}) {
  if (!WebAssembly.instantiateStreaming)
    return d(f((t = await t)) ? t.arrayBuffer() : t, e);
  const r = u(e),
    n = await WebAssembly.instantiateStreaming(t, e),
    o = l(r, n.instance);
  return { ...n, exports: o };
}
function b(t, e = {}) {
  const r = t.__argumentsLength
    ? e => {
        t.__argumentsLength.value = e;
      }
    : t.__setArgumentsLength || t.__setargc || (() => {});
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
    const o = t[n];
    let i = n.split("."),
      s = e;
    for (; i.length > 1; ) {
      let t = i.shift();
      Object.prototype.hasOwnProperty.call(s, t) || (s[t] = {}), (s = s[t]);
    }
    let c = i[0],
      u = c.indexOf("#");
    if (u >= 0) {
      const e = c.substring(0, u),
        i = s[e];
      if (void 0 === i || !i.prototype) {
        const t = function (...e) {
          return t.wrap(t.prototype.constructor(0, ...e));
        };
        (t.prototype = {
          valueOf() {
            return this[a];
          }
        }),
          (t.wrap = function (e) {
            return Object.create(t.prototype, {
              [a]: { value: e, writable: !1 }
            });
          }),
          i &&
            Object.getOwnPropertyNames(i).forEach(e =>
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            ),
          (s[e] = t);
      }
      if (
        ((c = c.substring(u + 1)), (s = s[e].prototype), /^(get|set):/.test(c))
      ) {
        if (!Object.prototype.hasOwnProperty.call(s, (c = c.substring(4)))) {
          let e = t[n.replace("set:", "get:")],
            r = t[n.replace("get:", "set:")];
          Object.defineProperty(s, c, {
            get() {
              return e(this[a]);
            },
            set(t) {
              r(this[a], t);
            },
            enumerable: !0
          });
        }
      } else
        "constructor" === c
          ? ((s[c] = (...t) => (r(t.length), o(...t))).original = o)
          : ((s[c] = function (...t) {
              return r(t.length), o(this[a], ...t);
            }).original = o);
    } else
      /^(get|set):/.test(c)
        ? Object.prototype.hasOwnProperty.call(s, (c = c.substring(4))) ||
          Object.defineProperty(s, c, {
            get: t[n.replace("set:", "get:")],
            set: t[n.replace("get:", "set:")],
            enumerable: !0
          })
        : "function" == typeof o && o !== r
        ? ((s[c] = (...t) => (r(t.length), o(...t))).original = o)
        : (s[c] = o);
  }
  return e;
}
var m = {
  instantiate: d,
  instantiateSync: function (t, e = {}) {
    const r = p(t) ? t : new WebAssembly.Module(t),
      n = u(e),
      o = new WebAssembly.Instance(r, e);
    return { module: r, instance: o, exports: l(n, o) };
  },
  instantiateStreaming: h,
  demangle: b
};
function w(r, n) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      return [2, m.instantiate(r, n)];
    });
  });
}
function g(t, e, r) {
  return e;
}
function _(t, e, r) {
  return t.exports[
    "__get" +
      (function (t) {
        return t.startsWith("~lib/typedarray/")
          ? ((t = t.slice("~lib/typedarray/".length)).startsWith("Big") &&
              (t = t.slice(3)),
            t)
          : t;
      })(r) +
      "View"
  ](e);
}
function A(t, e, r) {
  return t.exports.__newArray(t.getTypeId(r), e);
}
function v(t) {
  if (!t.startsWith("~lib/array/Array"))
    throw Error(JSON.stringify(t) + " is not an array type");
  return t.slice("~lib/array/Array<".length, -1);
}
var x = new Map([
    ["void", { ascToJs: g, jsToAsc: g }],
    [
      /^(i|u|f)(8|16|32|64)|[ui]size|bool|externref$/,
      { ascToJs: g, jsToAsc: g }
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
    ["~lib/typedarray/Int8Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Int16Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Int32Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Uint8Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Uint16Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Uint32Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Int64Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Uint64Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Uint8ClampedArray", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Float32Array", { ascToJs: _, jsToAsc: A }],
    ["~lib/typedarray/Float64Array", { ascToJs: _, jsToAsc: A }],
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
          var n = v(r),
            o = T(n);
          return t.exports.__getArray(e).map(function (e) {
            return o.ascToJs(t, e, n);
          });
        },
        jsToAsc: function (t, e, r) {
          var n = v(r),
            o = T(n),
            i = e.map(function (e) {
              return o.jsToAsc(t, e, n);
            });
          return t.exports.__newArray(t.getTypeId(r), i);
        }
      }
    ]
  ]),
  S = new Set();
function T(t) {
  var e, o;
  try {
    for (var i = r(x), a = i.next(); !a.done; a = i.next()) {
      var s = n(a.value, 2),
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
      a && !a.done && (o = i.return) && o.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return (
    S.has(t) ||
      (console.warn(
        "No converter for " + JSON.stringify(t) + ", using pass-through"
      ),
      S.add(t)),
    { ascToJs: g, jsToAsc: g }
  );
}
function j(t) {
  return T(t).ascToJs;
}
function O(t) {
  return T(t).jsToAsc;
}
function U(t, e, r) {
  var i = r.parameters.map(j),
    a = O(r.returnType);
  return function () {
    for (var s = [], c = 0; c < arguments.length; c++) s[c] = arguments[c];
    if (t.isAsyncifyModule && 2 === t.exports.asyncify_get_state())
      return (
        t.loadedModule.exports.asyncify_stop_rewind(),
        t.loadedModule.exports.__unpin(t.asyncifyState.ptr),
        a(t, t.asyncifyState.value, r.returnType)
      );
    if (s.length != i.length)
      throw Error("Expected " + i.length + " arguments, got " + s.length);
    var u = s.map(function (e, n) {
        return i[n](t, e, r.parameters[n]);
      }),
      y = e.apply(void 0, o([], n(u), !1));
    if (!(t.isAsyncifyModule && y instanceof Promise))
      return a(t, y, r.returnType);
    (t.asyncifyState = {
      ptr: t.loadedModule.exports.__new(t.asyncifyStorageSize, 0)
    }),
      t.loadedModule.exports.__pin(t.asyncifyState.ptr);
    var l = new DataView(t.loadedModule.exports.memory.buffer);
    l.setUint32(t.asyncifyState.ptr, t.asyncifyState.ptr + 8, !0),
      l.setUint32(
        t.asyncifyState.ptr + 4,
        t.asyncifyState.ptr + t.asyncifyStorageSize,
        !0
      ),
      t.loadedModule.exports.asyncify_start_unwind(t.asyncifyState.ptr),
      (t.asyncifyState.promise = y);
  };
}
function E(t, e, r) {
  var i = this,
    a = r.parameters.map(O),
    s = j(r.returnType);
  return function () {
    for (var c = [], u = 0; u < arguments.length; u++) c[u] = arguments[u];
    if (c.length != a.length)
      throw Error("Expected " + a.length + " arguments, got " + c.length);
    var y = [],
      l = c.map(function (e, n) {
        var o = a[n](t, e, r.parameters[n]);
        return o !== e && (t.exports.__pin(o), y.push(o)), o;
      });
    return function i() {
      for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
      var u = e.apply(void 0, o([], n(a), !1));
      if (
        (y.forEach(function (e) {
          return t.exports.__unpin(e);
        }),
        !t.isAsyncifyModule || 0 === t.exports.asyncify_get_state())
      )
        return s(t, u, r.returnType);
      t.loadedModule.exports.asyncify_stop_unwind();
      var l = t.asyncifyState;
      return l.promise.then(function (e) {
        return (
          (l.value = e),
          (t.asyncifyState = l),
          t.loadedModule.exports.asyncify_start_rewind(t.asyncifyState.ptr),
          i.apply(void 0, o([], n(a), !1))
        );
      });
    }
      .bind(i)
      .apply(void 0, o([], n(l), !1));
  };
}
function M(t, e) {
  var r = (void 0 === e ? {} : e).depth,
    o = void 0 === r ? Number.POSITIVE_INFINITY : r;
  return o <= 0 || !t || "object" != typeof t
    ? t
    : Object.fromEntries(
        Object.entries(t).map(function (t) {
          var e = n(t, 2);
          return [e[0], M(e[1], { depth: o - 1 })];
        })
      );
}
function I(r) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      switch (t.label) {
        case 0:
          return [4, Promise.resolve(r)];
        case 1:
          return (
            (r = t.sent()),
            "undefined" != typeof Response && r instanceof Response
              ? WebAssembly.compileStreaming
                ? [2, WebAssembly.compileStreaming(r)]
                : [4, r.arrayBuffer()]
              : [3, 3]
          );
        case 2:
          (r = t.sent()), (t.label = 3);
        case 3:
          return [2, WebAssembly.compile(r)];
      }
    });
  });
}
function J(t) {
  var e = WebAssembly.Module.customSections(t, "as-bind_bindings"),
    r = new TextDecoder("utf8").decode(new Uint8Array(e[0]));
  try {
    return JSON.parse(r);
  } catch (t) {
    throw Error("Couldn’t decode type descriptor: " + t.message);
  }
}
var B = (function () {
  function o() {
    (this.exports = {}),
      (this.importObject = {}),
      (this.asyncifyStorageSize = 8192),
      (this.isAsyncifyModule = !1);
  }
  return (
    (o.prototype.getTypeId = function (t) {
      if (t in this.typeDescriptor.typeIds)
        return this.typeDescriptor.typeIds[t].id;
      throw Error("Unknown type " + JSON.stringify(t));
    }),
    (o.prototype.getTypeSize = function (t) {
      if (t in this.typeDescriptor.typeIds)
        return this.typeDescriptor.typeIds[t].byteSize;
      throw Error("Unknown type " + JSON.stringify(t));
    }),
    (o.prototype._validate = function () {
      if (
        !WebAssembly.Module.exports(this.module).find(function (t) {
          return "__new" === t.name;
        })
      )
        throw Error(
          "The AssemblyScript wasm module was not built with --exportRuntime, which is required."
        );
      if (
        1 !==
        WebAssembly.Module.customSections(this.module, "as-bind_bindings")
          .length
      )
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
    (o.prototype._instantiate = function (r, n) {
      return t(this, void 0, void 0, function () {
        var t, o;
        return e(this, function (e) {
          switch (e.label) {
            case 0:
              return (t = this), [4, I(r)];
            case 1:
              return (
                (t.module = e.sent()),
                this._validate(),
                (this.typeDescriptor = J(this.module)),
                this._instantiateBindImportFunctions(n),
                (o = this),
                [4, w(this.module, this.importObject)]
              );
            case 2:
              return (
                (o.loadedModule = e.sent()),
                this._instantiateBindUnboundExports(),
                [2]
              );
          }
        });
      });
    }),
    (o.prototype._instantiateSync = function (t, e) {
      (this.module = new WebAssembly.Module(t)),
        this._validate(),
        (this.typeDescriptor = J(this.module)),
        this._instantiateBindImportFunctions(e),
        (this.loadedModule = (function (t, e) {
          return m.instantiateSync(t, e);
        })(this.module, this.importObject)),
        this._instantiateBindUnboundExports();
    }),
    (o.prototype._instantiateBindImportFunctions = function (t) {
      var e, o, i, a;
      this.importObject = M(t, { depth: 2 });
      try {
        for (
          var s = r(Object.entries(this.typeDescriptor.importedFunctions)),
            c = s.next();
          !c.done;
          c = s.next()
        ) {
          var u = n(c.value, 2),
            y = u[0],
            l = u[1];
          try {
            for (
              var f = ((i = void 0), r(Object.entries(l))), p = f.next();
              !p.done;
              p = f.next()
            ) {
              var d = n(p.value, 2),
                h = d[0],
                b = d[1];
              (this.importObject[y]["__asbind_unbound_" + h] = t[y][h]),
                (this.importObject[y][h] = U(this, t[y][h], b));
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
          c && !c.done && (o = s.return) && o.call(s);
        } finally {
          if (e) throw e.error;
        }
      }
    }),
    (o.prototype._instantiateBindUnboundExports = function () {
      var t,
        e,
        o = this.loadedModule.exports;
      this.exports = M(o, { depth: 1 });
      try {
        for (
          var i = r(Object.entries(this.typeDescriptor.exportedFunctions)),
            a = i.next();
          !a.done;
          a = i.next()
        ) {
          var s = n(a.value, 2),
            c = s[0],
            u = s[1];
          this.exports[c] = E(this, o[c], u);
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
    o
  );
})();
(exports.converters = x),
  (exports.instantiate = function (r, n) {
    return t(this, void 0, void 0, function () {
      var t;
      return e(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, (t = new B())._instantiate(r, n)];
          case 1:
            return e.sent(), [2, t];
        }
      });
    });
  }),
  (exports.instantiateSync = function (t, e) {
    var r = new B();
    return r._instantiateSync(t, e), r;
  }),
  (exports.version = "0.8.2");
