"use strict";
var r = require("visitor-as/as"),
  t = function (r, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, t) {
          r.__proto__ = t;
        }) ||
      function (r, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
      })(r, n);
  };
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
***************************************************************************** */ function n(
  r
) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    n = t && r[t],
    e = 0;
  if (n) return n.call(r);
  if (r && "number" == typeof r.length)
    return {
      next: function () {
        return (
          r && e >= r.length && (r = void 0), { value: r && r[e++], done: !r }
        );
      }
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function e(r, t) {
  var n = "function" == typeof Symbol && r[Symbol.iterator];
  if (!n) return r;
  var e,
    o,
    a = n.call(r),
    i = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(e = a.next()).done; ) i.push(e.value);
  } catch (r) {
    o = { error: r };
  } finally {
    try {
      e && !e.done && (n = a.return) && n.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function o(r, t, n) {
  if (n || 2 === arguments.length)
    for (var e, o = 0, a = t.length; o < a; o++)
      (!e && o in t) ||
        (e || (e = Array.prototype.slice.call(t, 0, o)), (e[o] = t[o]));
  return r.concat(e || Array.prototype.slice.call(t));
}
function a(r) {
  return r.internalName.startsWith("~");
}
function i(r, t) {
  return 0 != (r.flags & t);
}
function l(r) {
  var t, n;
  return null !==
    (n =
      null === (t = r.getClass()) || void 0 === t ? void 0 : t.internalName) &&
    void 0 !== n
    ? n
    : r.toString();
}
function u(r) {
  for (var t = r.parent; t !== t.parent; ) t = t.parent;
  return t;
}
function c(r) {
  return {
    returnType: l(r.signature.returnType),
    parameters: r.signature.parameterTypes.map(function (r) {
      return l(r);
    })
  };
}
function s(r) {
  var t,
    e,
    o,
    a = {},
    i = null === (o = r.getClass) || void 0 === o ? void 0 : o.call(r);
  if (!i) return a;
  if (
    ((a[i.internalName] = { id: i.id, byteSize: i.nextMemoryOffset }),
    i.typeArguments)
  )
    try {
      for (var l = n(i.typeArguments), u = l.next(); !u.done; u = l.next()) {
        var c = u.value;
        Object.assign(a, s(c));
      }
    } catch (r) {
      t = { error: r };
    } finally {
      try {
        u && !u.done && (e = l.return) && e.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
  return a;
}
function f(r) {
  var t = {};
  return (
    Object.assign(t, s(r.signature.returnType)),
    r.signature.parameterTypes.forEach(function (r) {
      return Object.assign(t, s(r));
    }),
    t
  );
}
var y = (function (l) {
  function s() {
    return (null !== l && l.apply(this, arguments)) || this;
  }
  return (
    (function (r, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null"
        );
      function e() {
        this.constructor = r;
      }
      t(r, n),
        (r.prototype =
          null === n
            ? Object.create(n)
            : ((e.prototype = n.prototype), new e()));
    })(s, l),
    (s.prototype.afterCompile = function (t) {
      var l,
        s,
        y,
        p,
        d,
        v,
        m = o([], e(this.program.elementsByDeclaration.values()), !1)
          .filter(function (t) {
            return i(t, r.CommonFlags.MODULE_EXPORT);
          })
          .filter(function (r) {
            return !a(r);
          })
          .filter(function (t) {
            return t.declaration.kind === r.NodeKind.FUNCTIONDECLARATION;
          }),
        g = o([], e(this.program.elementsByDeclaration.values()), !1)
          .filter(function (t) {
            return i(t, r.CommonFlags.DECLARE);
          })
          .filter(function (r) {
            return !a(r);
          })
          .filter(function (t) {
            return t.declaration.kind === r.NodeKind.FUNCTIONDECLARATION;
          }),
        h = {},
        O = {};
      try {
        for (var b = n(g), x = b.next(); !x.done; x = b.next()) {
          var w = x.value;
          if (w.instances) {
            if (w.instances.size > 1 || !w.instances.has(""))
              throw Error("Can’t import or export generic functions.");
            var C = w.instances.get(""),
              E = void 0,
              N = void 0,
              T = C.declaration.decorators;
            if (T)
              try {
                for (
                  var A = ((y = void 0), n(T)), S = A.next();
                  !S.done;
                  S = A.next()
                ) {
                  var _ = S.value;
                  "external" === _.name.text &&
                    _.args &&
                    (_.args.length > 1
                      ? ((E = _.args[0].value), (N = _.args[1].value))
                      : (N = _.args[0].value));
                }
              } catch (r) {
                y = { error: r };
              } finally {
                try {
                  S && !S.done && (p = A.return) && p.call(A);
                } finally {
                  if (y) throw y.error;
                }
              }
            var j = E || u(C).internalName.split("/").slice(-1)[0];
            O.hasOwnProperty(j) || (O[j] = {});
            var D = C.name;
            N
              ? (D = N)
              : C.parent &&
                C.parent.kind === r.ElementKind.NAMESPACE &&
                (D = C.parent.name + "." + C.name),
              (O[j][D] = c(C)),
              Object.assign(h, f(C));
          }
        }
      } catch (r) {
        l = { error: r };
      } finally {
        try {
          x && !x.done && (s = b.return) && s.call(b);
        } finally {
          if (l) throw l.error;
        }
      }
      var F = {};
      try {
        for (var I = n(m), P = I.next(); !P.done; P = I.next()) {
          var L = P.value;
          if (L.instances.size > 1 || !L.instances.has(""))
            throw Error("Can’t import or export generic functions.");
          var R = L.instances.get("");
          (F[R.name] = c(R)), Object.assign(h, f(R));
        }
      } catch (r) {
        d = { error: r };
      } finally {
        try {
          P && !P.done && (v = I.return) && v.call(I);
        } finally {
          if (d) throw d.error;
        }
      }
      t.addCustomSection(
        "as-bind_bindings",
        new TextEncoder("utf8").encode(
          JSON.stringify({
            typeIds: h,
            importedFunctions: O,
            exportedFunctions: F
          })
        )
      );
    }),
    s
  );
})(r.Transform);
module.exports = y;
