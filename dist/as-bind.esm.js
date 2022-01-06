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
function t(t, r, e, n) {
  return new (e || (e = Promise))(function (o, i) {
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
      var r;
      t.done
        ? o(t.value)
        : ((r = t.value),
          r instanceof e
            ? r
            : new e(function (t) {
                t(r);
              })).then(a, s);
    }
    c((n = n.apply(t, r || [])).next());
  });
}
function r(t, r) {
  var e,
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
        if (e) throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (
              ((e = 1),
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
            i = r.call(t, a);
          } catch (t) {
            (i = [6, t]), (n = 0);
          } finally {
            e = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, s]);
    };
  }
}
function e(t) {
  var r = "function" == typeof Symbol && Symbol.iterator,
    e = r && t[r],
    n = 0;
  if (e) return e.call(t);
  if (t && "number" == typeof t.length)
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
        );
      }
    };
  throw new TypeError(
    r ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function n(t, r) {
  var e = "function" == typeof Symbol && t[Symbol.iterator];
  if (!e) return t;
  var n,
    o,
    i = e.call(t),
    a = [];
  try {
    for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; ) a.push(n.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      n && !n.done && (e = i.return) && e.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function o(t, r, e) {
  if (e || 2 === arguments.length)
    for (var n, o = 0, i = r.length; o < i; o++)
      (!n && o in r) ||
        (n || (n = Array.prototype.slice.call(r, 0, o)), (n[o] = r[o]));
  return t.concat(n || Array.prototype.slice.call(r));
}
const i = "undefined" != typeof BigUint64Array,
  a = Symbol(),
  s = new TextDecoder("utf-16le", { fatal: !0 });
function c(t, r) {
  let e = new Uint32Array(t)[(r + -4) >>> 2] >>> 1;
  const n = new Uint16Array(t, r, e);
  if (e <= 192) return String.fromCharCode(...n);
  try {
    return s.decode(n);
  } catch {
    let t = "",
      r = 0;
    for (; e - r > 1024; )
      t += String.fromCharCode(...n.subarray(r, (r += 1024)));
    return t + String.fromCharCode(...n.subarray(r));
  }
}
function u(t) {
  const r = {};
  function e(t, r) {
    return t ? c(t.buffer, r) : "<yet unknown>";
  }
  const n = (t.env = t.env || {});
  return (
    (n.abort =
      n.abort ||
      function (t, o, i, a) {
        const s = r.memory || n.memory;
        throw Error(`abort: ${e(s, t)} at ${e(s, o)}:${i}:${a}`);
      }),
    (n.trace =
      n.trace ||
      function (t, o, ...i) {
        const a = r.memory || n.memory;
        console.log(
          `trace: ${e(a, t)}${o ? " " : ""}${i.slice(0, o).join(", ")}`
        );
      }),
    (n.seed = n.seed || Date.now),
    (t.Math = t.Math || Math),
    (t.Date = t.Date || Date),
    r
  );
}
const y = function () {
  throw Error("Operation requires compiling with --exportRuntime");
};
function l(t, r) {
  const e = r.exports,
    n = e.memory,
    o = e.table,
    a = e.__new || y,
    s = e.__pin || y,
    u = e.__unpin || y,
    l = e.__collect || y,
    f = e.__rtti_base,
    p = f
      ? function (t) {
          return t[f >>> 2];
        }
      : y;
  function d(t) {
    const r = (function (t) {
      const r = new Uint32Array(n.buffer);
      if ((t >>>= 0) >= p(r)) throw Error(`invalid id: ${t}`);
      return r[((f + 4) >>> 2) + 2 * t];
    })(t);
    if (!(7 & r)) throw Error(`not an array: ${t}, flags=${r}`);
    return r;
  }
  function h(t) {
    const r = new Uint32Array(n.buffer);
    if ((t >>>= 0) >= p(r)) throw Error(`invalid id: ${t}`);
    return r[((f + 4) >>> 2) + 2 * t + 1];
  }
  function m(t) {
    return 31 - Math.clz32((t >>> 6) & 31);
  }
  function w(t, r, e) {
    const o = n.buffer;
    if (e)
      switch (t) {
        case 2:
          return new Float32Array(o);
        case 3:
          return new Float64Array(o);
      }
    else
      switch (t) {
        case 0:
          return new (r ? Int8Array : Uint8Array)(o);
        case 1:
          return new (r ? Int16Array : Uint16Array)(o);
        case 2:
          return new (r ? Int32Array : Uint32Array)(o);
        case 3:
          return new (r ? BigInt64Array : BigUint64Array)(o);
      }
    throw Error(`unsupported align: ${t}`);
  }
  function g(t) {
    const r = new Uint32Array(n.buffer),
      e = d(r[(t + -8) >>> 2]),
      o = m(e);
    let i = 4 & e ? t : r[(t + 4) >>> 2];
    const a = 2 & e ? r[(t + 12) >>> 2] : r[(i + -4) >>> 2] >>> o;
    return w(o, 2048 & e, 4096 & e).subarray((i >>>= o), i + a);
  }
  function _(t, r, e) {
    return new t(A(t, r, e));
  }
  function A(t, r, e) {
    const o = n.buffer,
      i = new Uint32Array(o),
      a = i[(e + 4) >>> 2];
    return new t(o, a, i[(a + -4) >>> 2] >>> r);
  }
  function v(r, e, n) {
    (t[`__get${e}`] = _.bind(null, r, n)),
      (t[`__get${e}View`] = A.bind(null, r, n));
  }
  return (
    (t.__new = a),
    (t.__pin = s),
    (t.__unpin = u),
    (t.__collect = l),
    (t.__newString = function (t) {
      if (null == t) return 0;
      const r = t.length,
        e = a(r << 1, 1),
        o = new Uint16Array(n.buffer);
      for (var i = 0, s = e >>> 1; i < r; ++i) o[s + i] = t.charCodeAt(i);
      return e;
    }),
    (t.__newArrayBuffer = function (t) {
      if (null == t) return 0;
      const r = new Uint8Array(t),
        e = a(r.length, 0);
      return new Uint8Array(n.buffer).set(r, e), e;
    }),
    (t.__getString = function (t) {
      if (!t) return null;
      const r = n.buffer;
      if (1 !== new Uint32Array(r)[(t + -8) >>> 2])
        throw Error(`not a string: ${t}`);
      return c(r, t);
    }),
    (t.__newArray = function (t, r) {
      const e = d(t),
        o = m(e),
        i = r.length,
        c = a(i << o, 4 & e ? t : 0);
      let y;
      if (4 & e) y = c;
      else {
        s(c);
        const r = a(2 & e ? 16 : 12, t);
        u(c);
        const l = new Uint32Array(n.buffer);
        (l[(r + 0) >>> 2] = c),
          (l[(r + 4) >>> 2] = c),
          (l[(r + 8) >>> 2] = i << o),
          2 & e && (l[(r + 12) >>> 2] = i),
          (y = r);
      }
      const l = w(o, 2048 & e, 4096 & e);
      if (16384 & e)
        for (let t = 0; t < i; ++t) {
          const e = r[t];
          l[(c >>> o) + t] = e;
        }
      else l.set(r, c >>> o);
      return y;
    }),
    (t.__getArrayView = g),
    (t.__getArray = function (t) {
      const r = g(t),
        e = r.length,
        n = new Array(e);
      for (let t = 0; t < e; t++) n[t] = r[t];
      return n;
    }),
    (t.__getArrayBuffer = function (t) {
      const r = n.buffer,
        e = new Uint32Array(r)[(t + -4) >>> 2];
      return r.slice(t, t + e);
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
    (t.__instanceof = function (t, r) {
      const e = new Uint32Array(n.buffer);
      let o = e[(t + -8) >>> 2];
      if (o <= p(e))
        do {
          if (o == r) return !0;
          o = h(o);
        } while (o);
      return !1;
    }),
    (t.memory = t.memory || n),
    (t.table = t.table || o),
    b(e, t)
  );
}
function f(t) {
  return "undefined" != typeof Response && t instanceof Response;
}
function p(t) {
  return t instanceof WebAssembly.Module;
}
async function d(t, r = {}) {
  if (f((t = await t))) return h(t, r);
  const e = p(t) ? t : await WebAssembly.compile(t),
    n = u(r),
    o = await WebAssembly.instantiate(e, r);
  return { module: e, instance: o, exports: l(n, o) };
}
async function h(t, r = {}) {
  if (!WebAssembly.instantiateStreaming)
    return d(f((t = await t)) ? t.arrayBuffer() : t, r);
  const e = u(r),
    n = await WebAssembly.instantiateStreaming(t, r),
    o = l(e, n.instance);
  return { ...n, exports: o };
}
function b(t, r = {}) {
  const e = t.__argumentsLength
    ? r => {
        t.__argumentsLength.value = r;
      }
    : t.__setArgumentsLength || t.__setargc || (() => {});
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
    const o = t[n];
    let i = n.split("."),
      s = r;
    for (; i.length > 1; ) {
      let t = i.shift();
      Object.prototype.hasOwnProperty.call(s, t) || (s[t] = {}), (s = s[t]);
    }
    let c = i[0],
      u = c.indexOf("#");
    if (u >= 0) {
      const r = c.substring(0, u),
        i = s[r];
      if (void 0 === i || !i.prototype) {
        const t = function (...r) {
          return t.wrap(t.prototype.constructor(0, ...r));
        };
        (t.prototype = {
          valueOf() {
            return this[a];
          }
        }),
          (t.wrap = function (r) {
            return Object.create(t.prototype, {
              [a]: { value: r, writable: !1 }
            });
          }),
          i &&
            Object.getOwnPropertyNames(i).forEach(r =>
              Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r))
            ),
          (s[r] = t);
      }
      if (
        ((c = c.substring(u + 1)), (s = s[r].prototype), /^(get|set):/.test(c))
      ) {
        if (!Object.prototype.hasOwnProperty.call(s, (c = c.substring(4)))) {
          let r = t[n.replace("set:", "get:")],
            e = t[n.replace("get:", "set:")];
          Object.defineProperty(s, c, {
            get() {
              return r(this[a]);
            },
            set(t) {
              e(this[a], t);
            },
            enumerable: !0
          });
        }
      } else
        "constructor" === c
          ? ((s[c] = (...t) => (e(t.length), o(...t))).original = o)
          : ((s[c] = function (...t) {
              return e(t.length), o(this[a], ...t);
            }).original = o);
    } else
      /^(get|set):/.test(c)
        ? Object.prototype.hasOwnProperty.call(s, (c = c.substring(4))) ||
          Object.defineProperty(s, c, {
            get: t[n.replace("set:", "get:")],
            set: t[n.replace("get:", "set:")],
            enumerable: !0
          })
        : "function" == typeof o && o !== e
        ? ((s[c] = (...t) => (e(t.length), o(...t))).original = o)
        : (s[c] = o);
  }
  return r;
}
var m = {
  instantiate: d,
  instantiateSync: function (t, r = {}) {
    const e = p(t) ? t : new WebAssembly.Module(t),
      n = u(r),
      o = new WebAssembly.Instance(e, r);
    return { module: e, instance: o, exports: l(n, o) };
  },
  instantiateStreaming: h,
  demangle: b
};
function w(e, n) {
  return t(this, void 0, void 0, function () {
    return r(this, function (t) {
      return [2, m.instantiate(e, n)];
    });
  });
}
function g(t, r, e) {
  return r;
}
function _(t, r, e) {
  return t.exports[
    "__get" +
      (function (t) {
        return t.startsWith("~lib/typedarray/")
          ? ((t = t.slice("~lib/typedarray/".length)).startsWith("Big") &&
              (t = t.slice(3)),
            t)
          : t;
      })(e) +
      "View"
  ](r);
}
function A(t, r, e) {
  return t.exports.__newArray(t.getTypeId(e), r);
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
        ascToJs: function (t, r, e) {
          return t.exports.__getString(r);
        },
        jsToAsc: function (t, r, e) {
          return t.exports.__newString(r);
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
        ascToJs: function (t, r, e) {
          return t.exports.__getArrayBuffer(r);
        },
        jsToAsc: function (t, r, e) {
          var n = t.exports.__new(r.byteLength, t.getTypeId(e));
          return (
            new Uint8Array(t.exports.memory.buffer, n, r.byteLength).set(
              new Uint8Array(r)
            ),
            n
          );
        }
      }
    ],
    [
      /^~lib\/array\/Array<.+>$/,
      {
        ascToJs: function (t, r, e) {
          var n = v(e),
            o = T(n);
          return t.exports.__getArray(r).map(function (r) {
            return o.ascToJs(t, r, n);
          });
        },
        jsToAsc: function (t, r, e) {
          var n = v(e),
            o = T(n),
            i = r.map(function (r) {
              return o.jsToAsc(t, r, n);
            });
          return t.exports.__newArray(t.getTypeId(e), i);
        }
      }
    ]
  ]),
  S = new Set();
function T(t) {
  var r, o;
  try {
    for (var i = e(x), a = i.next(); !a.done; a = i.next()) {
      var s = n(a.value, 2),
        c = s[0],
        u = s[1];
      if ("string" != typeof c) {
        if (c.test(t)) return u;
      } else if (c === t) return u;
    }
  } catch (t) {
    r = { error: t };
  } finally {
    try {
      a && !a.done && (o = i.return) && o.call(i);
    } finally {
      if (r) throw r.error;
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
function U(t) {
  return T(t).jsToAsc;
}
function O(t, r, e) {
  var i = e.parameters.map(j),
    a = U(e.returnType);
  return function () {
    for (var s = [], c = 0; c < arguments.length; c++) s[c] = arguments[c];
    if (t.isAsyncifyModule && 2 === t.exports.asyncify_get_state())
      return (
        t.loadedModule.exports.asyncify_stop_rewind(),
        t.loadedModule.exports.__unpin(t.asyncifyState.ptr),
        a(t, t.asyncifyState.value, e.returnType)
      );
    if (s.length != i.length)
      throw Error("Expected " + i.length + " arguments, got " + s.length);
    var u = s.map(function (r, n) {
        return i[n](t, r, e.parameters[n]);
      }),
      y = r.apply(void 0, o([], n(u), !1));
    if (!(t.isAsyncifyModule && y instanceof Promise))
      return a(t, y, e.returnType);
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
function E(t, r, e) {
  var i = this,
    a = e.parameters.map(U),
    s = j(e.returnType);
  return function () {
    for (var c = [], u = 0; u < arguments.length; u++) c[u] = arguments[u];
    if (c.length != a.length)
      throw Error("Expected " + a.length + " arguments, got " + c.length);
    var y = [],
      l = c.map(function (r, n) {
        var o = a[n](t, r, e.parameters[n]);
        return o !== r && (t.exports.__pin(o), y.push(o)), o;
      });
    return function i() {
      for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
      var u = r.apply(void 0, o([], n(a), !1));
      if (
        (y.forEach(function (r) {
          return t.exports.__unpin(r);
        }),
        !t.isAsyncifyModule || 0 === t.exports.asyncify_get_state())
      )
        return s(t, u, e.returnType);
      t.loadedModule.exports.asyncify_stop_unwind();
      var l = t.asyncifyState;
      return l.promise.then(function (r) {
        return (
          (l.value = r),
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
function M(t, r) {
  var e = (void 0 === r ? {} : r).depth,
    o = void 0 === e ? Number.POSITIVE_INFINITY : e;
  return o <= 0 || !t || "object" != typeof t
    ? t
    : Object.fromEntries(
        Object.entries(t).map(function (t) {
          var r = n(t, 2);
          return [r[0], M(r[1], { depth: o - 1 })];
        })
      );
}
function I(e) {
  return t(this, void 0, void 0, function () {
    return r(this, function (t) {
      switch (t.label) {
        case 0:
          return [4, Promise.resolve(e)];
        case 1:
          return (
            (e = t.sent()),
            "undefined" != typeof Response && e instanceof Response
              ? WebAssembly.compileStreaming
                ? [2, WebAssembly.compileStreaming(e)]
                : [4, e.arrayBuffer()]
              : [3, 3]
          );
        case 2:
          (e = t.sent()), (t.label = 3);
        case 3:
          return [2, WebAssembly.compile(e)];
      }
    });
  });
}
function J(t) {
  var r = WebAssembly.Module.customSections(t, "as-bind_bindings"),
    e = new TextDecoder("utf8").decode(new Uint8Array(r[0]));
  try {
    return JSON.parse(e);
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
      (o.prototype._instantiate = function (e, n) {
        return t(this, void 0, void 0, function () {
          var t, o;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                return (t = this), [4, I(e)];
              case 1:
                return (
                  (t.module = r.sent()),
                  this._validate(),
                  (this.typeDescriptor = J(this.module)),
                  this._instantiateBindImportFunctions(n),
                  (o = this),
                  [4, w(this.module, this.importObject)]
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
      (o.prototype._instantiateSync = function (t, r) {
        (this.module = new WebAssembly.Module(t)),
          this._validate(),
          (this.typeDescriptor = J(this.module)),
          this._instantiateBindImportFunctions(r),
          (this.loadedModule = (function (t, r) {
            return m.instantiateSync(t, r);
          })(this.module, this.importObject)),
          this._instantiateBindUnboundExports();
      }),
      (o.prototype._instantiateBindImportFunctions = function (t) {
        var r, o, i, a;
        this.importObject = M(t, { depth: 2 });
        try {
          for (
            var s = e(Object.entries(this.typeDescriptor.importedFunctions)),
              c = s.next();
            !c.done;
            c = s.next()
          ) {
            var u = n(c.value, 2),
              y = u[0],
              l = u[1];
            try {
              for (
                var f = ((i = void 0), e(Object.entries(l))), p = f.next();
                !p.done;
                p = f.next()
              ) {
                var d = n(p.value, 2),
                  h = d[0],
                  b = d[1];
                (this.importObject[y]["__asbind_unbound_" + h] = t[y][h]),
                  (this.importObject[y][h] = O(this, t[y][h], b));
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
          r = { error: t };
        } finally {
          try {
            c && !c.done && (o = s.return) && o.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
      }),
      (o.prototype._instantiateBindUnboundExports = function () {
        var t,
          r,
          o = this.loadedModule.exports;
        this.exports = M(o, { depth: 1 });
        try {
          for (
            var i = e(Object.entries(this.typeDescriptor.exportedFunctions)),
              a = i.next();
            !a.done;
            a = i.next()
          ) {
            var s = n(a.value, 2),
              c = s[0],
              u = s[1];
            this.exports[c] = E(this, o[c], u);
          }
        } catch (r) {
          t = { error: r };
        } finally {
          try {
            a && !a.done && (r = i.return) && r.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      o
    );
  })(),
  W = "0.8.2";
function $(e, n) {
  return t(this, void 0, void 0, function () {
    var t;
    return r(this, function (r) {
      switch (r.label) {
        case 0:
          return [4, (t = new B())._instantiate(e, n)];
        case 1:
          return r.sent(), [2, t];
      }
    });
  });
}
function D(t, r) {
  var e = new B();
  return e._instantiateSync(t, r), e;
}
export {
  x as converters,
  $ as instantiate,
  D as instantiateSync,
  W as version
};
