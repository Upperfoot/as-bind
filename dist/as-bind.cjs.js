"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

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
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return (
    (g = {
      next: verb(0),
      throw: verb(1),
      return: verb(2)
    }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(
    s ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var version$1 = "0.8.2";

// Runtime header offsets
const ID_OFFSET = -8;
const SIZE_OFFSET = -4; // Runtime ids

const ARRAYBUFFER_ID = 0;
const STRING_ID = 1; // const ARRAYBUFFERVIEW_ID = 2;
// Runtime type information

const ARRAYBUFFERVIEW = 1 << 0;
const ARRAY = 1 << 1;
const STATICARRAY = 1 << 2; // const SET = 1 << 3;
// const MAP = 1 << 4;

const VAL_ALIGN_OFFSET = 6; // const VAL_ALIGN = 1 << VAL_ALIGN_OFFSET;

const VAL_SIGNED = 1 << 11;
const VAL_FLOAT = 1 << 12; // const VAL_NULLABLE = 1 << 13;

const VAL_MANAGED = 1 << 14; // const KEY_ALIGN_OFFSET = 15;
// const KEY_ALIGN = 1 << KEY_ALIGN_OFFSET;
// const KEY_SIGNED = 1 << 20;
// const KEY_FLOAT = 1 << 21;
// const KEY_NULLABLE = 1 << 22;
// const KEY_MANAGED = 1 << 23;
// Array(BufferView) layout

const ARRAYBUFFERVIEW_BUFFER_OFFSET = 0;
const ARRAYBUFFERVIEW_DATASTART_OFFSET = 4;
const ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8;
const ARRAYBUFFERVIEW_SIZE = 12;
const ARRAY_LENGTH_OFFSET = 12;
const ARRAY_SIZE = 16;
const BIGINT = typeof BigUint64Array !== "undefined";
const THIS = Symbol();
const STRING_SMALLSIZE = 192; // break-even point in V8

const STRING_CHUNKSIZE = 1024; // mitigate stack overflow

const utf16 = new TextDecoder("utf-16le", {
  fatal: true
}); // != wtf16

/** Gets a string from memory. */

function getStringImpl(buffer, ptr) {
  let len = new Uint32Array(buffer)[(ptr + SIZE_OFFSET) >>> 2] >>> 1;
  const wtf16 = new Uint16Array(buffer, ptr, len);
  if (len <= STRING_SMALLSIZE) return String.fromCharCode(...wtf16);

  try {
    return utf16.decode(wtf16);
  } catch {
    let str = "",
      off = 0;

    while (len - off > STRING_CHUNKSIZE) {
      str += String.fromCharCode(
        ...wtf16.subarray(off, (off += STRING_CHUNKSIZE))
      );
    }

    return str + String.fromCharCode(...wtf16.subarray(off));
  }
}
/** Prepares the base module prior to instantiation. */

function preInstantiate(imports) {
  const extendedExports = {};

  function getString(memory, ptr) {
    if (!memory) return "<yet unknown>";
    return getStringImpl(memory.buffer, ptr);
  } // add common imports used by stdlib for convenience

  const env = (imports.env = imports.env || {});

  env.abort =
    env.abort ||
    function abort(msg, file, line, colm) {
      const memory = extendedExports.memory || env.memory; // prefer exported, otherwise try imported

      throw Error(
        `abort: ${getString(memory, msg)} at ${getString(
          memory,
          file
        )}:${line}:${colm}`
      );
    };

  env.trace =
    env.trace ||
    function trace(msg, n, ...args) {
      const memory = extendedExports.memory || env.memory;
      console.log(
        `trace: ${getString(memory, msg)}${n ? " " : ""}${args
          .slice(0, n)
          .join(", ")}`
      );
    };

  env.seed = env.seed || Date.now;
  imports.Math = imports.Math || Math;
  imports.Date = imports.Date || Date;
  return extendedExports;
}

const E_NOEXPORTRUNTIME = "Operation requires compiling with --exportRuntime";

const F_NOEXPORTRUNTIME = function () {
  throw Error(E_NOEXPORTRUNTIME);
};
/** Prepares the final module once instantiation is complete. */

function postInstantiate(extendedExports, instance) {
  const exports = instance.exports;
  const memory = exports.memory;
  const table = exports.table;

  const __new = exports.__new || F_NOEXPORTRUNTIME;

  const __pin = exports.__pin || F_NOEXPORTRUNTIME;

  const __unpin = exports.__unpin || F_NOEXPORTRUNTIME;

  const __collect = exports.__collect || F_NOEXPORTRUNTIME;

  const __rtti_base = exports.__rtti_base;
  const getRttiCount = __rtti_base
    ? function (arr) {
        return arr[__rtti_base >>> 2];
      }
    : F_NOEXPORTRUNTIME;
  extendedExports.__new = __new;
  extendedExports.__pin = __pin;
  extendedExports.__unpin = __unpin;
  extendedExports.__collect = __collect;
  /** Gets the runtime type info for the given id. */

  function getInfo(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = getRttiCount(U32);
    if ((id >>>= 0) >= count) throw Error(`invalid id: ${id}`);
    return U32[((__rtti_base + 4) >>> 2) + id * 2];
  }
  /** Gets and validate runtime type info for the given id for array like objects */

  function getArrayInfo(id) {
    const info = getInfo(id);
    if (!(info & (ARRAYBUFFERVIEW | ARRAY | STATICARRAY)))
      throw Error(`not an array: ${id}, flags=${info}`);
    return info;
  }
  /** Gets the runtime base id for the given id. */

  function getBase(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = getRttiCount(U32);
    if ((id >>>= 0) >= count) throw Error(`invalid id: ${id}`);
    return U32[((__rtti_base + 4) >>> 2) + id * 2 + 1];
  }
  /** Gets the runtime alignment of a collection's values. */

  function getValueAlign(info) {
    return 31 - Math.clz32((info >>> VAL_ALIGN_OFFSET) & 31); // -1 if none
  }
  /** Gets the runtime alignment of a collection's keys. */
  // function getKeyAlign(info) {
  //   return 31 - Math.clz32((info >>> KEY_ALIGN_OFFSET) & 31); // -1 if none
  // }

  /** Allocates a new string in the module's memory and returns its pointer. */

  function __newString(str) {
    if (str == null) return 0;
    const length = str.length;

    const ptr = __new(length << 1, STRING_ID);

    const U16 = new Uint16Array(memory.buffer);

    for (var i = 0, p = ptr >>> 1; i < length; ++i)
      U16[p + i] = str.charCodeAt(i);

    return ptr;
  }

  extendedExports.__newString = __newString;
  /** Allocates a new ArrayBuffer in the module's memory and returns its pointer. */

  function __newArrayBuffer(buf) {
    if (buf == null) return 0;
    const bufview = new Uint8Array(buf);

    const ptr = __new(bufview.length, ARRAYBUFFER_ID);

    const U8 = new Uint8Array(memory.buffer);
    U8.set(bufview, ptr);
    return ptr;
  }

  extendedExports.__newArrayBuffer = __newArrayBuffer;
  /** Reads a string from the module's memory by its pointer. */

  function __getString(ptr) {
    if (!ptr) return null;
    const buffer = memory.buffer;
    const id = new Uint32Array(buffer)[(ptr + ID_OFFSET) >>> 2];
    if (id !== STRING_ID) throw Error(`not a string: ${ptr}`);
    return getStringImpl(buffer, ptr);
  }

  extendedExports.__getString = __getString;
  /** Gets the view matching the specified alignment, signedness and floatness. */

  function getView(alignLog2, signed, float) {
    const buffer = memory.buffer;

    if (float) {
      switch (alignLog2) {
        case 2:
          return new Float32Array(buffer);

        case 3:
          return new Float64Array(buffer);
      }
    } else {
      switch (alignLog2) {
        case 0:
          return new (signed ? Int8Array : Uint8Array)(buffer);

        case 1:
          return new (signed ? Int16Array : Uint16Array)(buffer);

        case 2:
          return new (signed ? Int32Array : Uint32Array)(buffer);

        case 3:
          return new (signed ? BigInt64Array : BigUint64Array)(buffer);
      }
    }

    throw Error(`unsupported align: ${alignLog2}`);
  }
  /** Allocates a new array in the module's memory and returns its pointer. */

  function __newArray(id, values) {
    const info = getArrayInfo(id);
    const align = getValueAlign(info);
    const length = values.length;

    const buf = __new(
      length << align,
      info & STATICARRAY ? id : ARRAYBUFFER_ID
    );

    let result;

    if (info & STATICARRAY) {
      result = buf;
    } else {
      __pin(buf);

      const arr = __new(info & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, id);

      __unpin(buf);

      const U32 = new Uint32Array(memory.buffer);
      U32[(arr + ARRAYBUFFERVIEW_BUFFER_OFFSET) >>> 2] = buf;
      U32[(arr + ARRAYBUFFERVIEW_DATASTART_OFFSET) >>> 2] = buf;
      U32[(arr + ARRAYBUFFERVIEW_DATALENGTH_OFFSET) >>> 2] = length << align;
      if (info & ARRAY) U32[(arr + ARRAY_LENGTH_OFFSET) >>> 2] = length;
      result = arr;
    }

    const view = getView(align, info & VAL_SIGNED, info & VAL_FLOAT);

    if (info & VAL_MANAGED) {
      for (let i = 0; i < length; ++i) {
        const value = values[i];
        view[(buf >>> align) + i] = value;
      }
    } else {
      view.set(values, buf >>> align);
    }

    return result;
  }

  extendedExports.__newArray = __newArray;
  /** Gets a live view on an array's values in the module's memory. Infers the array type from RTTI. */

  function __getArrayView(arr) {
    const U32 = new Uint32Array(memory.buffer);
    const id = U32[(arr + ID_OFFSET) >>> 2];
    const info = getArrayInfo(id);
    const align = getValueAlign(info);
    let buf =
      info & STATICARRAY
        ? arr
        : U32[(arr + ARRAYBUFFERVIEW_DATASTART_OFFSET) >>> 2];
    const length =
      info & ARRAY
        ? U32[(arr + ARRAY_LENGTH_OFFSET) >>> 2]
        : U32[(buf + SIZE_OFFSET) >>> 2] >>> align;
    return getView(align, info & VAL_SIGNED, info & VAL_FLOAT).subarray(
      (buf >>>= align),
      buf + length
    );
  }

  extendedExports.__getArrayView = __getArrayView;
  /** Copies an array's values from the module's memory. Infers the array type from RTTI. */

  function __getArray(arr) {
    const input = __getArrayView(arr);

    const len = input.length;
    const out = new Array(len);

    for (let i = 0; i < len; i++) out[i] = input[i];

    return out;
  }

  extendedExports.__getArray = __getArray;
  /** Copies an ArrayBuffer's value from the module's memory. */

  function __getArrayBuffer(ptr) {
    const buffer = memory.buffer;
    const length = new Uint32Array(buffer)[(ptr + SIZE_OFFSET) >>> 2];
    return buffer.slice(ptr, ptr + length);
  }

  extendedExports.__getArrayBuffer = __getArrayBuffer;
  /** Copies a typed array's values from the module's memory. */

  function getTypedArray(Type, alignLog2, ptr) {
    return new Type(getTypedArrayView(Type, alignLog2, ptr));
  }
  /** Gets a live view on a typed array's values in the module's memory. */

  function getTypedArrayView(Type, alignLog2, ptr) {
    const buffer = memory.buffer;
    const U32 = new Uint32Array(buffer);
    const bufPtr = U32[(ptr + ARRAYBUFFERVIEW_DATASTART_OFFSET) >>> 2];
    return new Type(
      buffer,
      bufPtr,
      U32[(bufPtr + SIZE_OFFSET) >>> 2] >>> alignLog2
    );
  }
  /** Attach a set of get TypedArray and View functions to the exports. */

  function attachTypedArrayFunctions(ctor, name, align) {
    extendedExports[`__get${name}`] = getTypedArray.bind(null, ctor, align);
    extendedExports[`__get${name}View`] = getTypedArrayView.bind(
      null,
      ctor,
      align
    );
  }

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
  ].forEach(ctor => {
    attachTypedArrayFunctions(
      ctor,
      ctor.name,
      31 - Math.clz32(ctor.BYTES_PER_ELEMENT)
    );
  });

  if (BIGINT) {
    [BigUint64Array, BigInt64Array].forEach(ctor => {
      attachTypedArrayFunctions(ctor, ctor.name.slice(3), 3);
    });
  }
  /** Tests whether an object is an instance of the class represented by the specified base id. */

  function __instanceof(ptr, baseId) {
    const U32 = new Uint32Array(memory.buffer);
    let id = U32[(ptr + ID_OFFSET) >>> 2];

    if (id <= getRttiCount(U32)) {
      do {
        if (id == baseId) return true;
        id = getBase(id);
      } while (id);
    }

    return false;
  }

  extendedExports.__instanceof = __instanceof; // Pull basic exports to extendedExports so code in preInstantiate can use them

  extendedExports.memory = extendedExports.memory || memory;
  extendedExports.table = extendedExports.table || table; // Demangle exports and provide the usual utility on the prototype

  return demangle(exports, extendedExports);
}

function isResponse(src) {
  return typeof Response !== "undefined" && src instanceof Response;
}

function isModule(src) {
  return src instanceof WebAssembly.Module;
}
/** Asynchronously instantiates an AssemblyScript module from anything that can be instantiated. */

async function instantiate$1(source, imports = {}) {
  if (isResponse((source = await source)))
    return instantiateStreaming(source, imports);
  const module = isModule(source) ? source : await WebAssembly.compile(source);
  const extended = preInstantiate(imports);
  const instance = await WebAssembly.instantiate(module, imports);
  const exports = postInstantiate(extended, instance);
  return {
    module,
    instance,
    exports
  };
}
/** Synchronously instantiates an AssemblyScript module from a WebAssembly.Module or binary buffer. */

function instantiateSync$1(source, imports = {}) {
  const module = isModule(source) ? source : new WebAssembly.Module(source);
  const extended = preInstantiate(imports);
  const instance = new WebAssembly.Instance(module, imports);
  const exports = postInstantiate(extended, instance);
  return {
    module,
    instance,
    exports
  };
}
/** Asynchronously instantiates an AssemblyScript module from a response, i.e. as obtained by `fetch`. */

async function instantiateStreaming(source, imports = {}) {
  if (!WebAssembly.instantiateStreaming) {
    return instantiate$1(
      isResponse((source = await source)) ? source.arrayBuffer() : source,
      imports
    );
  }

  const extended = preInstantiate(imports);
  const result = await WebAssembly.instantiateStreaming(source, imports);
  const exports = postInstantiate(extended, result.instance);
  return { ...result, exports };
}
/** Demangles an AssemblyScript module's exports to a friendly object structure. */

function demangle(exports, extendedExports = {}) {
  const setArgumentsLength = exports["__argumentsLength"]
    ? length => {
        exports["__argumentsLength"].value = length;
      }
    : exports["__setArgumentsLength"] ||
      exports["__setargc"] ||
      (() => {
        /* nop */
      });

  for (let internalName in exports) {
    if (!Object.prototype.hasOwnProperty.call(exports, internalName)) continue;
    const elem = exports[internalName];
    let parts = internalName.split(".");
    let curr = extendedExports;

    while (parts.length > 1) {
      let part = parts.shift();
      if (!Object.prototype.hasOwnProperty.call(curr, part)) curr[part] = {};
      curr = curr[part];
    }

    let name = parts[0];
    let hash = name.indexOf("#");

    if (hash >= 0) {
      const className = name.substring(0, hash);
      const classElem = curr[className];

      if (typeof classElem === "undefined" || !classElem.prototype) {
        const ctor = function (...args) {
          return ctor.wrap(ctor.prototype.constructor(0, ...args));
        };

        ctor.prototype = {
          valueOf() {
            return this[THIS];
          }
        };

        ctor.wrap = function (thisValue) {
          return Object.create(ctor.prototype, {
            [THIS]: {
              value: thisValue,
              writable: false
            }
          });
        };

        if (classElem)
          Object.getOwnPropertyNames(classElem).forEach(name =>
            Object.defineProperty(
              ctor,
              name,
              Object.getOwnPropertyDescriptor(classElem, name)
            )
          );
        curr[className] = ctor;
      }

      name = name.substring(hash + 1);
      curr = curr[className].prototype;

      if (/^(get|set):/.test(name)) {
        if (
          !Object.prototype.hasOwnProperty.call(
            curr,
            (name = name.substring(4))
          )
        ) {
          let getter = exports[internalName.replace("set:", "get:")];
          let setter = exports[internalName.replace("get:", "set:")];
          Object.defineProperty(curr, name, {
            get() {
              return getter(this[THIS]);
            },

            set(value) {
              setter(this[THIS], value);
            },

            enumerable: true
          });
        }
      } else {
        if (name === "constructor") {
          (curr[name] = (...args) => {
            setArgumentsLength(args.length);
            return elem(...args);
          }).original = elem;
        } else {
          // instance method
          (curr[name] = function (...args) {
            // !
            setArgumentsLength(args.length);
            return elem(this[THIS], ...args);
          }).original = elem;
        }
      }
    } else {
      if (/^(get|set):/.test(name)) {
        if (
          !Object.prototype.hasOwnProperty.call(
            curr,
            (name = name.substring(4))
          )
        ) {
          Object.defineProperty(curr, name, {
            get: exports[internalName.replace("set:", "get:")],
            set: exports[internalName.replace("get:", "set:")],
            enumerable: true
          });
        }
      } else if (typeof elem === "function" && elem !== setArgumentsLength) {
        (curr[name] = (...args) => {
          setArgumentsLength(args.length);
          return elem(...args);
        }).original = elem;
      } else {
        curr[name] = elem;
      }
    }
  }

  return extendedExports;
}
var loader = {
  instantiate: instantiate$1,
  instantiateSync: instantiateSync$1,
  instantiateStreaming,
  demangle
};

function asbindInstantiate(module, importObject) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2 /*return*/, loader.instantiate(module, importObject)];
    });
  });
}
function asbindInstantiateSync(module, importObject) {
  return loader.instantiateSync(module, importObject);
}

// Converts web platform names for the different ArrayBufferViews
// to the names that ASC understands. Currently, that only means
// to cut off the `Big` in `BigInt64Array`.
var stdlibTypedArrayPrefix = "~lib/typedarray/";
function normalizeArrayBufferViewTypeName(typeName) {
  // Don’t do anything if this is not a stdlib type.
  if (!typeName.startsWith(stdlibTypedArrayPrefix)) {
    return typeName;
  }
  typeName = typeName.slice(stdlibTypedArrayPrefix.length);
  if (typeName.startsWith("Big")) {
    // Slice off `Big` as the loader doesn’t have that prefix.
    typeName = typeName.slice(3);
  }
  return typeName;
}
function nop(asbindInstance, value, typeName) {
  return value;
}
function getString(asbindInstance, value, typeName) {
  return asbindInstance.exports.__getString(value);
}
function putString(asbindInstance, value, typeName) {
  return asbindInstance.exports.__newString(value);
}
function getArrayBuffer(asbindInstance, value, typeName) {
  return asbindInstance.exports.__getArrayBuffer(value);
}
function putArrayBuffer(asbindInstance, value, typeName) {
  var ptr = asbindInstance.exports.__new(
    value.byteLength,
    asbindInstance.getTypeId(typeName)
  );
  new Uint8Array(
    asbindInstance.exports.memory.buffer,
    ptr,
    value.byteLength
  ).set(new Uint8Array(value));
  return ptr;
}
function getArrayBufferView(asbindInstance, value, typeName) {
  return asbindInstance.exports[
    "__get" + normalizeArrayBufferViewTypeName(typeName) + "View"
  ](value);
}
function putArrayBufferView(asbindInstance, value, typeName) {
  return asbindInstance.exports.__newArray(
    asbindInstance.getTypeId(typeName),
    value
  );
}
var stdlibArray = "~lib/array/Array";
function arrayInnerType(typeName) {
  if (!typeName.startsWith(stdlibArray)) {
    throw Error(JSON.stringify(typeName) + " is not an array type");
  }
  // Cut off stdlib path + generic angle brackets.
  return typeName.slice((stdlibArray + "<").length, -1);
}
function getArray(asbindInstance, value, typeName) {
  var innerTypeName = arrayInnerType(typeName);
  var innerTypeConverter = getConverterForType(innerTypeName);
  var rawArray = asbindInstance.exports.__getArray(value);
  return rawArray.map(function (v) {
    return innerTypeConverter.ascToJs(asbindInstance, v, innerTypeName);
  });
}
function putArray(asbindInstance, value, typeName) {
  var innerTypeName = arrayInnerType(typeName);
  var innerTypeConverter = getConverterForType(innerTypeName);
  var convertedValues = value.map(function (v) {
    return innerTypeConverter.jsToAsc(asbindInstance, v, innerTypeName);
  });
  return asbindInstance.exports.__newArray(
    asbindInstance.getTypeId(typeName),
    convertedValues
  );
}
var converters = new Map([
  ["void", { ascToJs: nop, jsToAsc: nop }],
  // Technically this matches types that don’ exist (like f8),
  // but since those can only appear if the compiler accepts them,
  // it seems unlikely for that to be a problem.
  [
    /^(i|u|f)(8|16|32|64)|[ui]size|bool|externref$/,
    { ascToJs: nop, jsToAsc: nop }
  ],
  ["~lib/string/String", { ascToJs: getString, jsToAsc: putString }],
  [
    "~lib/typedarray/Int8Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Int16Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Int32Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Uint8Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Uint16Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Uint32Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Int64Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Uint64Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Uint8ClampedArray",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Float32Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/typedarray/Float64Array",
    { ascToJs: getArrayBufferView, jsToAsc: putArrayBufferView }
  ],
  [
    "~lib/arraybuffer/ArrayBuffer",
    { ascToJs: getArrayBuffer, jsToAsc: putArrayBuffer }
  ],
  [/^~lib\/array\/Array<.+>$/, { ascToJs: getArray, jsToAsc: putArray }]
]);
var warned = new Set();
function getConverterForType(typeName) {
  var e_1, _a;
  try {
    for (
      var converters_1 = __values(converters),
        converters_1_1 = converters_1.next();
      !converters_1_1.done;
      converters_1_1 = converters_1.next()
    ) {
      var _b = __read(converters_1_1.value, 2),
        matcher = _b[0],
        converter = _b[1];
      if (typeof matcher === "string") {
        if (matcher === typeName) {
          return converter;
        }
        continue;
      } else if (matcher.test(typeName)) {
        return converter;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (
        converters_1_1 &&
        !converters_1_1.done &&
        (_a = converters_1["return"])
      )
        _a.call(converters_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  if (!warned.has(typeName)) {
    console.warn(
      "No converter for " + JSON.stringify(typeName) + ", using pass-through"
    );
    warned.add(typeName);
  }
  return { ascToJs: nop, jsToAsc: nop };
}
function getAscToJsConverterForType(typeName) {
  return getConverterForType(typeName).ascToJs;
}
function getJsToAscConverterForType(typeName) {
  return getConverterForType(typeName).jsToAsc;
}

function bindImportFunction(
  asbindInstance,
  importedFunction,
  importedFunctionDescriptor
) {
  // Grab type converter functions according to the type descriptor
  var argumentConverterFunctions = importedFunctionDescriptor.parameters.map(
    getAscToJsConverterForType
  );
  var returnValueConverterFunction = getJsToAscConverterForType(
    importedFunctionDescriptor.returnType
  );
  // Create a wrapper function that applies the correct converter function to arguments and
  // return value respectively.
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (
      asbindInstance.isAsyncifyModule &&
      asbindInstance.exports.asyncify_get_state() === 2 /* Rewinding */
    ) {
      asbindInstance.loadedModule.exports.asyncify_stop_rewind();
      asbindInstance.loadedModule.exports.__unpin(
        asbindInstance.asyncifyState.ptr
      );
      return returnValueConverterFunction(
        asbindInstance,
        asbindInstance.asyncifyState.value,
        importedFunctionDescriptor.returnType
      );
    }
    if (args.length != argumentConverterFunctions.length) {
      throw Error(
        "Expected " +
          argumentConverterFunctions.length +
          " arguments, got " +
          args.length
      );
    }
    var newArgs = args.map(function (v, i) {
      return argumentConverterFunctions[i](
        asbindInstance,
        v,
        importedFunctionDescriptor.parameters[i]
      );
    });
    var result = importedFunction.apply(
      void 0,
      __spreadArray([], __read(newArgs), false)
    );
    if (!asbindInstance.isAsyncifyModule || !(result instanceof Promise)) {
      return returnValueConverterFunction(
        asbindInstance,
        result,
        importedFunctionDescriptor.returnType
      );
    }
    asbindInstance.asyncifyState = {
      ptr: asbindInstance.loadedModule.exports.__new(
        asbindInstance.asyncifyStorageSize,
        0
      )
    };
    asbindInstance.loadedModule.exports.__pin(asbindInstance.asyncifyState.ptr);
    var dv = new DataView(asbindInstance.loadedModule.exports.memory.buffer);
    dv.setUint32(
      asbindInstance.asyncifyState.ptr,
      asbindInstance.asyncifyState.ptr + 8,
      true
    );
    dv.setUint32(
      asbindInstance.asyncifyState.ptr + 4,
      asbindInstance.asyncifyState.ptr + asbindInstance.asyncifyStorageSize,
      true
    );
    asbindInstance.loadedModule.exports.asyncify_start_unwind(
      asbindInstance.asyncifyState.ptr
    );
    asbindInstance.asyncifyState.promise = result;
  };
}
// Function that takes in an asbind instance, and the key to the export function on the
// abindInstance.exports object, to be wrapped and then re-assigned to the asbindInstance.exports.
function bindExportFunction(
  asbindInstance,
  exportedFunction,
  exportedFunctionDescriptor
) {
  var _this = this;
  // Grab type converter functions according to the type descriptor
  var argumentConverterFunctions = exportedFunctionDescriptor.parameters.map(
    getJsToAscConverterForType
  );
  var returnValueConverterFunction = getAscToJsConverterForType(
    exportedFunctionDescriptor.returnType
  );
  // Create a wrapper function that applies the correct converter function to arguments and
  // return value respectively.
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length != argumentConverterFunctions.length) {
      throw Error(
        "Expected " +
          argumentConverterFunctions.length +
          " arguments, got " +
          args.length
      );
    }
    // The conversion function of the _next_ parameter could potentially
    // trigger GC and collect the previous parameter before we even invoke
    // the actual function. That’s bad! We’ll pin all non-primitive parameters before invocation
    // and unpin them after.
    var pinnedArgs = [];
    var newArgs = args.map(function (originalParameter, i) {
      var convertedParameter = argumentConverterFunctions[i](
        asbindInstance,
        originalParameter,
        exportedFunctionDescriptor.parameters[i]
      );
      if (convertedParameter !== originalParameter) {
        asbindInstance.exports.__pin(convertedParameter);
        pinnedArgs.push(convertedParameter);
      }
      return convertedParameter;
    });
    return function f() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var result = exportedFunction.apply(
        void 0,
        __spreadArray([], __read(args), false)
      );
      pinnedArgs.forEach(function (arg) {
        return asbindInstance.exports.__unpin(arg);
      });
      if (
        !asbindInstance.isAsyncifyModule ||
        asbindInstance.exports.asyncify_get_state() === 0
      ) {
        return returnValueConverterFunction(
          asbindInstance,
          result,
          exportedFunctionDescriptor.returnType
        );
      }
      asbindInstance.loadedModule.exports.asyncify_stop_unwind();
      var localAsyncifyState = asbindInstance.asyncifyState;
      return localAsyncifyState.promise.then(function (value) {
        localAsyncifyState.value = value;
        asbindInstance.asyncifyState = localAsyncifyState;
        asbindInstance.loadedModule.exports.asyncify_start_rewind(
          asbindInstance.asyncifyState.ptr
        );
        return f.apply(void 0, __spreadArray([], __read(args), false));
      });
    }
      .bind(_this)
      .apply(void 0, __spreadArray([], __read(newArgs), false));
  };
}

var SECTION_NAME = "as-bind_bindings";
// Basically a deep-copy, but can be limited in levels.
function copyObject(obj, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.depth,
    depth = _c === void 0 ? Number.POSITIVE_INFINITY : _c;
  if (depth <= 0 || !obj || typeof obj !== "object") {
    return obj;
  }
  return Object.fromEntries(
    Object.entries(obj).map(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        val = _b[1];
      return [key, copyObject(val, { depth: depth - 1 })];
    })
  );
}
function compileStreaming(source) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, Promise.resolve(source)];
        case 1:
          source = _a.sent();
          if (!(typeof Response !== "undefined" && source instanceof Response))
            return [3 /*break*/, 3];
          if (WebAssembly.compileStreaming) {
            return [2 /*return*/, WebAssembly.compileStreaming(source)];
          }
          return [4 /*yield*/, source.arrayBuffer()];
        case 2:
          source = _a.sent();
          _a.label = 3;
        case 3:
          return [2 /*return*/, WebAssembly.compile(source)];
      }
    });
  });
}
function extractTypeDescriptor(module) {
  var sections = WebAssembly.Module.customSections(module, SECTION_NAME);
  var str = new TextDecoder("utf8").decode(new Uint8Array(sections[0]));
  try {
    return JSON.parse(str);
  } catch (e) {
    throw Error("Couldn\u2019t decode type descriptor: " + e.message);
  }
}
var AsbindInstance = /** @class */ (function () {
  function AsbindInstance() {
    this.exports = {};
    this.importObject = {};
    this.asyncifyStorageSize = 8 * 1024;
    this.isAsyncifyModule = false;
  }
  AsbindInstance.prototype.getTypeId = function (typeName) {
    if (typeName in this.typeDescriptor.typeIds) {
      return this.typeDescriptor.typeIds[typeName].id;
    }
    throw Error("Unknown type " + JSON.stringify(typeName));
  };
  AsbindInstance.prototype.getTypeSize = function (typeName) {
    if (typeName in this.typeDescriptor.typeIds) {
      return this.typeDescriptor.typeIds[typeName].byteSize;
    }
    throw Error("Unknown type " + JSON.stringify(typeName));
  };
  AsbindInstance.prototype._validate = function () {
    if (
      !WebAssembly.Module.exports(this.module).find(function (exp) {
        return exp.name === "__new";
      })
    ) {
      throw Error(
        "The AssemblyScript wasm module was not built with --exportRuntime, which is required."
      );
    }
    if (
      WebAssembly.Module.customSections(this.module, SECTION_NAME).length !== 1
    ) {
      throw new Error(
        "The AssemblyScript wasm module was not built with the as-bind transform."
      );
    }
    this.isAsyncifyModule = Boolean(
      WebAssembly.Module.exports(this.module).find(function (exp) {
        return exp.name === "asyncify_start_unwind";
      })
    );
    if (!this.isAsyncifyModule) {
      // If this module wasn’t built with Ayncify, we mock
      // the asyncify state function to return that we are in “normal” mode.
      this.exports.asyncify_get_state = function () {
        return 0;
      };
    }
  };
  AsbindInstance.prototype._instantiate = function (source, importObject) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _a = this;
            return [4 /*yield*/, compileStreaming(source)];
          case 1:
            _a.module = _c.sent();
            this._validate();
            this.typeDescriptor = extractTypeDescriptor(this.module);
            this._instantiateBindImportFunctions(importObject);
            // Instantiate the module through the loader
            _b = this;
            return [
              4 /*yield*/,
              asbindInstantiate(this.module, this.importObject)
            ];
          case 2:
            // Instantiate the module through the loader
            _b.loadedModule = _c.sent();
            this._instantiateBindUnboundExports();
            return [2 /*return*/];
        }
      });
    });
  };
  AsbindInstance.prototype._instantiateSync = function (source, importObject) {
    this.module = new WebAssembly.Module(source);
    this._validate();
    this.typeDescriptor = extractTypeDescriptor(this.module);
    this._instantiateBindImportFunctions(importObject);
    this.loadedModule = asbindInstantiateSync(this.module, this.importObject);
    this._instantiateBindUnboundExports();
  };
  AsbindInstance.prototype._instantiateBindImportFunctions = function (
    importObject
  ) {
    var e_1, _a, e_2, _b;
    this.importObject = copyObject(importObject, { depth: 2 });
    try {
      for (
        var _c = __values(
            Object.entries(this.typeDescriptor.importedFunctions)
          ),
          _d = _c.next();
        !_d.done;
        _d = _c.next()
      ) {
        var _e = __read(_d.value, 2),
          moduleName = _e[0],
          moduleDescriptor = _e[1];
        try {
          for (
            var _f =
                ((e_2 = void 0), __values(Object.entries(moduleDescriptor))),
              _g = _f.next();
            !_g.done;
            _g = _f.next()
          ) {
            var _h = __read(_g.value, 2),
              importedFunctionName = _h[0],
              descriptor = _h[1];
            this.importObject[moduleName][
              "__asbind_unbound_" + importedFunctionName
            ] = importObject[moduleName][importedFunctionName];
            this.importObject[moduleName][importedFunctionName] =
              bindImportFunction(
                this,
                importObject[moduleName][importedFunctionName],
                descriptor
              );
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  AsbindInstance.prototype._instantiateBindUnboundExports = function () {
    var e_3, _a;
    // Wrap appropriate the appropriate export functions
    var unboundExports = this.loadedModule.exports;
    this.exports = copyObject(unboundExports, { depth: 1 });
    try {
      for (
        var _b = __values(
            Object.entries(this.typeDescriptor.exportedFunctions)
          ),
          _c = _b.next();
        !_c.done;
        _c = _b.next()
      ) {
        var _d = __read(_c.value, 2),
          exportedFunctionName = _d[0],
          descriptor = _d[1];
        this.exports[exportedFunctionName] = bindExportFunction(
          this,
          unboundExports[exportedFunctionName],
          descriptor
        );
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  return AsbindInstance;
})();

var version = version$1;
function instantiate(source, importObject) {
  return __awaiter(this, void 0, void 0, function () {
    var asbindInstance;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          asbindInstance = new AsbindInstance();
          return [
            4 /*yield*/,
            asbindInstance._instantiate(source, importObject)
          ];
        case 1:
          _a.sent();
          return [2 /*return*/, asbindInstance];
      }
    });
  });
}
function instantiateSync(source, importObject) {
  var asbindInstance = new AsbindInstance();
  asbindInstance._instantiateSync(source, importObject);
  return asbindInstance;
}

exports.converters = converters;
exports.instantiate = instantiate;
exports.instantiateSync = instantiateSync;
exports.version = version;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXMtYmluZC5janMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFzc2VtYmx5c2NyaXB0L2xvYWRlci9pbmRleC5qcyIsIi4uL2xpYi9hc2JpbmQtaW5zdGFuY2UvaW5zdGFudGlhdGUudHMiLCIuLi9saWIvYXNiaW5kLWluc3RhbmNlL3R5cGUtY29udmVydGVycy50cyIsIi4uL2xpYi9hc2JpbmQtaW5zdGFuY2UvYmluZC1mdW5jdGlvbi50cyIsIi4uL2xpYi9hc2JpbmQtaW5zdGFuY2UvYXNiaW5kLWluc3RhbmNlLnRzIiwiLi4vbGliL2xpYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8vIFJ1bnRpbWUgaGVhZGVyIG9mZnNldHNcbmNvbnN0IElEX09GRlNFVCA9IC04O1xuY29uc3QgU0laRV9PRkZTRVQgPSAtNDtcblxuLy8gUnVudGltZSBpZHNcbmNvbnN0IEFSUkFZQlVGRkVSX0lEID0gMDtcbmNvbnN0IFNUUklOR19JRCA9IDE7XG4vLyBjb25zdCBBUlJBWUJVRkZFUlZJRVdfSUQgPSAyO1xuXG4vLyBSdW50aW1lIHR5cGUgaW5mb3JtYXRpb25cbmNvbnN0IEFSUkFZQlVGRkVSVklFVyA9IDEgPDwgMDtcbmNvbnN0IEFSUkFZID0gMSA8PCAxO1xuY29uc3QgU1RBVElDQVJSQVkgPSAxIDw8IDI7XG4vLyBjb25zdCBTRVQgPSAxIDw8IDM7XG4vLyBjb25zdCBNQVAgPSAxIDw8IDQ7XG5jb25zdCBWQUxfQUxJR05fT0ZGU0VUID0gNjtcbi8vIGNvbnN0IFZBTF9BTElHTiA9IDEgPDwgVkFMX0FMSUdOX09GRlNFVDtcbmNvbnN0IFZBTF9TSUdORUQgPSAxIDw8IDExO1xuY29uc3QgVkFMX0ZMT0FUID0gMSA8PCAxMjtcbi8vIGNvbnN0IFZBTF9OVUxMQUJMRSA9IDEgPDwgMTM7XG5jb25zdCBWQUxfTUFOQUdFRCA9IDEgPDwgMTQ7XG4vLyBjb25zdCBLRVlfQUxJR05fT0ZGU0VUID0gMTU7XG4vLyBjb25zdCBLRVlfQUxJR04gPSAxIDw8IEtFWV9BTElHTl9PRkZTRVQ7XG4vLyBjb25zdCBLRVlfU0lHTkVEID0gMSA8PCAyMDtcbi8vIGNvbnN0IEtFWV9GTE9BVCA9IDEgPDwgMjE7XG4vLyBjb25zdCBLRVlfTlVMTEFCTEUgPSAxIDw8IDIyO1xuLy8gY29uc3QgS0VZX01BTkFHRUQgPSAxIDw8IDIzO1xuXG4vLyBBcnJheShCdWZmZXJWaWV3KSBsYXlvdXRcbmNvbnN0IEFSUkFZQlVGRkVSVklFV19CVUZGRVJfT0ZGU0VUID0gMDtcbmNvbnN0IEFSUkFZQlVGRkVSVklFV19EQVRBU1RBUlRfT0ZGU0VUID0gNDtcbmNvbnN0IEFSUkFZQlVGRkVSVklFV19EQVRBTEVOR1RIX09GRlNFVCA9IDg7XG5jb25zdCBBUlJBWUJVRkZFUlZJRVdfU0laRSA9IDEyO1xuY29uc3QgQVJSQVlfTEVOR1RIX09GRlNFVCA9IDEyO1xuY29uc3QgQVJSQVlfU0laRSA9IDE2O1xuXG5jb25zdCBCSUdJTlQgPSB0eXBlb2YgQmlnVWludDY0QXJyYXkgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBUSElTID0gU3ltYm9sKCk7XG5cbmNvbnN0IFNUUklOR19TTUFMTFNJWkUgPSAxOTI7IC8vIGJyZWFrLWV2ZW4gcG9pbnQgaW4gVjhcbmNvbnN0IFNUUklOR19DSFVOS1NJWkUgPSAxMDI0OyAvLyBtaXRpZ2F0ZSBzdGFjayBvdmVyZmxvd1xuY29uc3QgdXRmMTYgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtMTZsZVwiLCB7IGZhdGFsOiB0cnVlIH0pOyAvLyAhPSB3dGYxNlxuXG4vKiogR2V0cyBhIHN0cmluZyBmcm9tIG1lbW9yeS4gKi9cbmZ1bmN0aW9uIGdldFN0cmluZ0ltcGwoYnVmZmVyLCBwdHIpIHtcbiAgbGV0IGxlbiA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpW3B0ciArIFNJWkVfT0ZGU0VUID4+PiAyXSA+Pj4gMTtcbiAgY29uc3Qgd3RmMTYgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyLCBwdHIsIGxlbik7XG4gIGlmIChsZW4gPD0gU1RSSU5HX1NNQUxMU0laRSkgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ud3RmMTYpO1xuICB0cnkge1xuICAgIHJldHVybiB1dGYxNi5kZWNvZGUod3RmMTYpO1xuICB9IGNhdGNoIHtcbiAgICBsZXQgc3RyID0gXCJcIiwgb2ZmID0gMDtcbiAgICB3aGlsZSAobGVuIC0gb2ZmID4gU1RSSU5HX0NIVU5LU0laRSkge1xuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ud3RmMTYuc3ViYXJyYXkob2ZmLCBvZmYgKz0gU1RSSU5HX0NIVU5LU0laRSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyICsgU3RyaW5nLmZyb21DaGFyQ29kZSguLi53dGYxNi5zdWJhcnJheShvZmYpKTtcbiAgfVxufVxuXG4vKiogUHJlcGFyZXMgdGhlIGJhc2UgbW9kdWxlIHByaW9yIHRvIGluc3RhbnRpYXRpb24uICovXG5mdW5jdGlvbiBwcmVJbnN0YW50aWF0ZShpbXBvcnRzKSB7XG4gIGNvbnN0IGV4dGVuZGVkRXhwb3J0cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFN0cmluZyhtZW1vcnksIHB0cikge1xuICAgIGlmICghbWVtb3J5KSByZXR1cm4gXCI8eWV0IHVua25vd24+XCI7XG4gICAgcmV0dXJuIGdldFN0cmluZ0ltcGwobWVtb3J5LmJ1ZmZlciwgcHRyKTtcbiAgfVxuXG4gIC8vIGFkZCBjb21tb24gaW1wb3J0cyB1c2VkIGJ5IHN0ZGxpYiBmb3IgY29udmVuaWVuY2VcbiAgY29uc3QgZW52ID0gKGltcG9ydHMuZW52ID0gaW1wb3J0cy5lbnYgfHwge30pO1xuICBlbnYuYWJvcnQgPSBlbnYuYWJvcnQgfHwgZnVuY3Rpb24gYWJvcnQobXNnLCBmaWxlLCBsaW5lLCBjb2xtKSB7XG4gICAgY29uc3QgbWVtb3J5ID0gZXh0ZW5kZWRFeHBvcnRzLm1lbW9yeSB8fCBlbnYubWVtb3J5OyAvLyBwcmVmZXIgZXhwb3J0ZWQsIG90aGVyd2lzZSB0cnkgaW1wb3J0ZWRcbiAgICB0aHJvdyBFcnJvcihgYWJvcnQ6ICR7Z2V0U3RyaW5nKG1lbW9yeSwgbXNnKX0gYXQgJHtnZXRTdHJpbmcobWVtb3J5LCBmaWxlKX06JHtsaW5lfToke2NvbG19YCk7XG4gIH07XG4gIGVudi50cmFjZSA9IGVudi50cmFjZSB8fCBmdW5jdGlvbiB0cmFjZShtc2csIG4sIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBtZW1vcnkgPSBleHRlbmRlZEV4cG9ydHMubWVtb3J5IHx8IGVudi5tZW1vcnk7XG4gICAgY29uc29sZS5sb2coYHRyYWNlOiAke2dldFN0cmluZyhtZW1vcnksIG1zZyl9JHtuID8gXCIgXCIgOiBcIlwifSR7YXJncy5zbGljZSgwLCBuKS5qb2luKFwiLCBcIil9YCk7XG4gIH07XG4gIGVudi5zZWVkID0gZW52LnNlZWQgfHwgRGF0ZS5ub3c7XG4gIGltcG9ydHMuTWF0aCA9IGltcG9ydHMuTWF0aCB8fCBNYXRoO1xuICBpbXBvcnRzLkRhdGUgPSBpbXBvcnRzLkRhdGUgfHwgRGF0ZTtcblxuICByZXR1cm4gZXh0ZW5kZWRFeHBvcnRzO1xufVxuXG5jb25zdCBFX05PRVhQT1JUUlVOVElNRSA9IFwiT3BlcmF0aW9uIHJlcXVpcmVzIGNvbXBpbGluZyB3aXRoIC0tZXhwb3J0UnVudGltZVwiO1xuY29uc3QgRl9OT0VYUE9SVFJVTlRJTUUgPSBmdW5jdGlvbigpIHsgdGhyb3cgRXJyb3IoRV9OT0VYUE9SVFJVTlRJTUUpOyB9O1xuXG4vKiogUHJlcGFyZXMgdGhlIGZpbmFsIG1vZHVsZSBvbmNlIGluc3RhbnRpYXRpb24gaXMgY29tcGxldGUuICovXG5mdW5jdGlvbiBwb3N0SW5zdGFudGlhdGUoZXh0ZW5kZWRFeHBvcnRzLCBpbnN0YW5jZSkge1xuICBjb25zdCBleHBvcnRzID0gaW5zdGFuY2UuZXhwb3J0cztcbiAgY29uc3QgbWVtb3J5ID0gZXhwb3J0cy5tZW1vcnk7XG4gIGNvbnN0IHRhYmxlID0gZXhwb3J0cy50YWJsZTtcbiAgY29uc3QgX19uZXcgPSBleHBvcnRzLl9fbmV3IHx8IEZfTk9FWFBPUlRSVU5USU1FO1xuICBjb25zdCBfX3BpbiA9IGV4cG9ydHMuX19waW4gfHwgRl9OT0VYUE9SVFJVTlRJTUU7XG4gIGNvbnN0IF9fdW5waW4gPSBleHBvcnRzLl9fdW5waW4gfHwgRl9OT0VYUE9SVFJVTlRJTUU7XG4gIGNvbnN0IF9fY29sbGVjdCA9IGV4cG9ydHMuX19jb2xsZWN0IHx8IEZfTk9FWFBPUlRSVU5USU1FO1xuICBjb25zdCBfX3J0dGlfYmFzZSA9IGV4cG9ydHMuX19ydHRpX2Jhc2U7XG4gIGNvbnN0IGdldFJ0dGlDb3VudCA9IF9fcnR0aV9iYXNlXG4gICAgPyBmdW5jdGlvbiAoYXJyKSB7IHJldHVybiBhcnJbX19ydHRpX2Jhc2UgPj4+IDJdOyB9XG4gICAgOiBGX05PRVhQT1JUUlVOVElNRTtcblxuICBleHRlbmRlZEV4cG9ydHMuX19uZXcgPSBfX25ldztcbiAgZXh0ZW5kZWRFeHBvcnRzLl9fcGluID0gX19waW47XG4gIGV4dGVuZGVkRXhwb3J0cy5fX3VucGluID0gX191bnBpbjtcbiAgZXh0ZW5kZWRFeHBvcnRzLl9fY29sbGVjdCA9IF9fY29sbGVjdDtcblxuICAvKiogR2V0cyB0aGUgcnVudGltZSB0eXBlIGluZm8gZm9yIHRoZSBnaXZlbiBpZC4gKi9cbiAgZnVuY3Rpb24gZ2V0SW5mbyhpZCkge1xuICAgIGNvbnN0IFUzMiA9IG5ldyBVaW50MzJBcnJheShtZW1vcnkuYnVmZmVyKTtcbiAgICBjb25zdCBjb3VudCA9IGdldFJ0dGlDb3VudChVMzIpO1xuICAgIGlmICgoaWQgPj4+PSAwKSA+PSBjb3VudCkgdGhyb3cgRXJyb3IoYGludmFsaWQgaWQ6ICR7aWR9YCk7XG4gICAgcmV0dXJuIFUzMlsoX19ydHRpX2Jhc2UgKyA0ID4+PiAyKSArIGlkICogMl07XG4gIH1cblxuICAvKiogR2V0cyBhbmQgdmFsaWRhdGUgcnVudGltZSB0eXBlIGluZm8gZm9yIHRoZSBnaXZlbiBpZCBmb3IgYXJyYXkgbGlrZSBvYmplY3RzICovXG4gIGZ1bmN0aW9uIGdldEFycmF5SW5mbyhpZCkge1xuICAgIGNvbnN0IGluZm8gPSBnZXRJbmZvKGlkKTtcbiAgICBpZiAoIShpbmZvICYgKEFSUkFZQlVGRkVSVklFVyB8IEFSUkFZIHwgU1RBVElDQVJSQVkpKSkgdGhyb3cgRXJyb3IoYG5vdCBhbiBhcnJheTogJHtpZH0sIGZsYWdzPSR7aW5mb31gKTtcbiAgICByZXR1cm4gaW5mbztcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBydW50aW1lIGJhc2UgaWQgZm9yIHRoZSBnaXZlbiBpZC4gKi9cbiAgZnVuY3Rpb24gZ2V0QmFzZShpZCkge1xuICAgIGNvbnN0IFUzMiA9IG5ldyBVaW50MzJBcnJheShtZW1vcnkuYnVmZmVyKTtcbiAgICBjb25zdCBjb3VudCA9IGdldFJ0dGlDb3VudChVMzIpO1xuICAgIGlmICgoaWQgPj4+PSAwKSA+PSBjb3VudCkgdGhyb3cgRXJyb3IoYGludmFsaWQgaWQ6ICR7aWR9YCk7XG4gICAgcmV0dXJuIFUzMlsoX19ydHRpX2Jhc2UgKyA0ID4+PiAyKSArIGlkICogMiArIDFdO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHJ1bnRpbWUgYWxpZ25tZW50IG9mIGEgY29sbGVjdGlvbidzIHZhbHVlcy4gKi9cbiAgZnVuY3Rpb24gZ2V0VmFsdWVBbGlnbihpbmZvKSB7XG4gICAgcmV0dXJuIDMxIC0gTWF0aC5jbHozMigoaW5mbyA+Pj4gVkFMX0FMSUdOX09GRlNFVCkgJiAzMSk7IC8vIC0xIGlmIG5vbmVcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBydW50aW1lIGFsaWdubWVudCBvZiBhIGNvbGxlY3Rpb24ncyBrZXlzLiAqL1xuICAvLyBmdW5jdGlvbiBnZXRLZXlBbGlnbihpbmZvKSB7XG4gIC8vICAgcmV0dXJuIDMxIC0gTWF0aC5jbHozMigoaW5mbyA+Pj4gS0VZX0FMSUdOX09GRlNFVCkgJiAzMSk7IC8vIC0xIGlmIG5vbmVcbiAgLy8gfVxuXG4gIC8qKiBBbGxvY2F0ZXMgYSBuZXcgc3RyaW5nIGluIHRoZSBtb2R1bGUncyBtZW1vcnkgYW5kIHJldHVybnMgaXRzIHBvaW50ZXIuICovXG4gIGZ1bmN0aW9uIF9fbmV3U3RyaW5nKHN0cikge1xuICAgIGlmIChzdHIgPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgY29uc3QgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgICBjb25zdCBwdHIgPSBfX25ldyhsZW5ndGggPDwgMSwgU1RSSU5HX0lEKTtcbiAgICBjb25zdCBVMTYgPSBuZXcgVWludDE2QXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIHAgPSBwdHIgPj4+IDE7IGkgPCBsZW5ndGg7ICsraSkgVTE2W3AgKyBpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBwdHI7XG4gIH1cblxuICBleHRlbmRlZEV4cG9ydHMuX19uZXdTdHJpbmcgPSBfX25ld1N0cmluZztcblxuICAvKiogQWxsb2NhdGVzIGEgbmV3IEFycmF5QnVmZmVyIGluIHRoZSBtb2R1bGUncyBtZW1vcnkgYW5kIHJldHVybnMgaXRzIHBvaW50ZXIuICovXG4gIGZ1bmN0aW9uIF9fbmV3QXJyYXlCdWZmZXIoYnVmKSB7XG4gICAgaWYgKGJ1ZiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICBjb25zdCBidWZ2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICBjb25zdCBwdHIgPSBfX25ldyhidWZ2aWV3Lmxlbmd0aCwgQVJSQVlCVUZGRVJfSUQpO1xuICAgIGNvbnN0IFU4ID0gbmV3IFVpbnQ4QXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgVTguc2V0KGJ1ZnZpZXcsIHB0cik7XG4gICAgcmV0dXJuIHB0cjtcbiAgfVxuXG4gIGV4dGVuZGVkRXhwb3J0cy5fX25ld0FycmF5QnVmZmVyID0gX19uZXdBcnJheUJ1ZmZlcjtcblxuICAvKiogUmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgbW9kdWxlJ3MgbWVtb3J5IGJ5IGl0cyBwb2ludGVyLiAqL1xuICBmdW5jdGlvbiBfX2dldFN0cmluZyhwdHIpIHtcbiAgICBpZiAoIXB0cikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYnVmZmVyID0gbWVtb3J5LmJ1ZmZlcjtcbiAgICBjb25zdCBpZCA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpW3B0ciArIElEX09GRlNFVCA+Pj4gMl07XG4gICAgaWYgKGlkICE9PSBTVFJJTkdfSUQpIHRocm93IEVycm9yKGBub3QgYSBzdHJpbmc6ICR7cHRyfWApO1xuICAgIHJldHVybiBnZXRTdHJpbmdJbXBsKGJ1ZmZlciwgcHRyKTtcbiAgfVxuXG4gIGV4dGVuZGVkRXhwb3J0cy5fX2dldFN0cmluZyA9IF9fZ2V0U3RyaW5nO1xuXG4gIC8qKiBHZXRzIHRoZSB2aWV3IG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgYWxpZ25tZW50LCBzaWduZWRuZXNzIGFuZCBmbG9hdG5lc3MuICovXG4gIGZ1bmN0aW9uIGdldFZpZXcoYWxpZ25Mb2cyLCBzaWduZWQsIGZsb2F0KSB7XG4gICAgY29uc3QgYnVmZmVyID0gbWVtb3J5LmJ1ZmZlcjtcbiAgICBpZiAoZmxvYXQpIHtcbiAgICAgIHN3aXRjaCAoYWxpZ25Mb2cyKSB7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGFsaWduTG9nMikge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgKHNpZ25lZCA/IEludDhBcnJheSA6IFVpbnQ4QXJyYXkpKGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyAoc2lnbmVkID8gSW50MTZBcnJheSA6IFVpbnQxNkFycmF5KShidWZmZXIpO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgKHNpZ25lZCA/IEludDMyQXJyYXkgOiBVaW50MzJBcnJheSkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IChzaWduZWQgPyBCaWdJbnQ2NEFycmF5IDogQmlnVWludDY0QXJyYXkpKGJ1ZmZlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IEVycm9yKGB1bnN1cHBvcnRlZCBhbGlnbjogJHthbGlnbkxvZzJ9YCk7XG4gIH1cblxuICAvKiogQWxsb2NhdGVzIGEgbmV3IGFycmF5IGluIHRoZSBtb2R1bGUncyBtZW1vcnkgYW5kIHJldHVybnMgaXRzIHBvaW50ZXIuICovXG4gIGZ1bmN0aW9uIF9fbmV3QXJyYXkoaWQsIHZhbHVlcykge1xuICAgIGNvbnN0IGluZm8gPSBnZXRBcnJheUluZm8oaWQpO1xuICAgIGNvbnN0IGFsaWduID0gZ2V0VmFsdWVBbGlnbihpbmZvKTtcbiAgICBjb25zdCBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuICAgIGNvbnN0IGJ1ZiA9IF9fbmV3KGxlbmd0aCA8PCBhbGlnbiwgaW5mbyAmIFNUQVRJQ0FSUkFZID8gaWQgOiBBUlJBWUJVRkZFUl9JRCk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoaW5mbyAmIFNUQVRJQ0FSUkFZKSB7XG4gICAgICByZXN1bHQgPSBidWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9fcGluKGJ1Zik7XG4gICAgICBjb25zdCBhcnIgPSBfX25ldyhpbmZvICYgQVJSQVkgPyBBUlJBWV9TSVpFIDogQVJSQVlCVUZGRVJWSUVXX1NJWkUsIGlkKTtcbiAgICAgIF9fdW5waW4oYnVmKTtcbiAgICAgIGNvbnN0IFUzMiA9IG5ldyBVaW50MzJBcnJheShtZW1vcnkuYnVmZmVyKTtcbiAgICAgIFUzMlthcnIgKyBBUlJBWUJVRkZFUlZJRVdfQlVGRkVSX09GRlNFVCA+Pj4gMl0gPSBidWY7XG4gICAgICBVMzJbYXJyICsgQVJSQVlCVUZGRVJWSUVXX0RBVEFTVEFSVF9PRkZTRVQgPj4+IDJdID0gYnVmO1xuICAgICAgVTMyW2FyciArIEFSUkFZQlVGRkVSVklFV19EQVRBTEVOR1RIX09GRlNFVCA+Pj4gMl0gPSBsZW5ndGggPDwgYWxpZ247XG4gICAgICBpZiAoaW5mbyAmIEFSUkFZKSBVMzJbYXJyICsgQVJSQVlfTEVOR1RIX09GRlNFVCA+Pj4gMl0gPSBsZW5ndGg7XG4gICAgICByZXN1bHQgPSBhcnI7XG4gICAgfVxuICAgIGNvbnN0IHZpZXcgPSBnZXRWaWV3KGFsaWduLCBpbmZvICYgVkFMX1NJR05FRCwgaW5mbyAmIFZBTF9GTE9BVCk7XG4gICAgaWYgKGluZm8gJiBWQUxfTUFOQUdFRCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgdmlld1soYnVmID4+PiBhbGlnbikgKyBpXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3LnNldCh2YWx1ZXMsIGJ1ZiA+Pj4gYWxpZ24pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZXh0ZW5kZWRFeHBvcnRzLl9fbmV3QXJyYXkgPSBfX25ld0FycmF5O1xuXG4gIC8qKiBHZXRzIGEgbGl2ZSB2aWV3IG9uIGFuIGFycmF5J3MgdmFsdWVzIGluIHRoZSBtb2R1bGUncyBtZW1vcnkuIEluZmVycyB0aGUgYXJyYXkgdHlwZSBmcm9tIFJUVEkuICovXG4gIGZ1bmN0aW9uIF9fZ2V0QXJyYXlWaWV3KGFycikge1xuICAgIGNvbnN0IFUzMiA9IG5ldyBVaW50MzJBcnJheShtZW1vcnkuYnVmZmVyKTtcbiAgICBjb25zdCBpZCA9IFUzMlthcnIgKyBJRF9PRkZTRVQgPj4+IDJdO1xuICAgIGNvbnN0IGluZm8gPSBnZXRBcnJheUluZm8oaWQpO1xuICAgIGNvbnN0IGFsaWduID0gZ2V0VmFsdWVBbGlnbihpbmZvKTtcbiAgICBsZXQgYnVmID0gaW5mbyAmIFNUQVRJQ0FSUkFZXG4gICAgICA/IGFyclxuICAgICAgOiBVMzJbYXJyICsgQVJSQVlCVUZGRVJWSUVXX0RBVEFTVEFSVF9PRkZTRVQgPj4+IDJdO1xuICAgIGNvbnN0IGxlbmd0aCA9IGluZm8gJiBBUlJBWVxuICAgICAgPyBVMzJbYXJyICsgQVJSQVlfTEVOR1RIX09GRlNFVCA+Pj4gMl1cbiAgICAgIDogVTMyW2J1ZiArIFNJWkVfT0ZGU0VUID4+PiAyXSA+Pj4gYWxpZ247XG4gICAgcmV0dXJuIGdldFZpZXcoYWxpZ24sIGluZm8gJiBWQUxfU0lHTkVELCBpbmZvICYgVkFMX0ZMT0FUKS5zdWJhcnJheShidWYgPj4+PSBhbGlnbiwgYnVmICsgbGVuZ3RoKTtcbiAgfVxuXG4gIGV4dGVuZGVkRXhwb3J0cy5fX2dldEFycmF5VmlldyA9IF9fZ2V0QXJyYXlWaWV3O1xuXG4gIC8qKiBDb3BpZXMgYW4gYXJyYXkncyB2YWx1ZXMgZnJvbSB0aGUgbW9kdWxlJ3MgbWVtb3J5LiBJbmZlcnMgdGhlIGFycmF5IHR5cGUgZnJvbSBSVFRJLiAqL1xuICBmdW5jdGlvbiBfX2dldEFycmF5KGFycikge1xuICAgIGNvbnN0IGlucHV0ID0gX19nZXRBcnJheVZpZXcoYXJyKTtcbiAgICBjb25zdCBsZW4gPSBpbnB1dC5sZW5ndGg7XG4gICAgY29uc3Qgb3V0ID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykgb3V0W2ldID0gaW5wdXRbaV07XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGV4dGVuZGVkRXhwb3J0cy5fX2dldEFycmF5ID0gX19nZXRBcnJheTtcblxuICAvKiogQ29waWVzIGFuIEFycmF5QnVmZmVyJ3MgdmFsdWUgZnJvbSB0aGUgbW9kdWxlJ3MgbWVtb3J5LiAqL1xuICBmdW5jdGlvbiBfX2dldEFycmF5QnVmZmVyKHB0cikge1xuICAgIGNvbnN0IGJ1ZmZlciA9IG1lbW9yeS5idWZmZXI7XG4gICAgY29uc3QgbGVuZ3RoID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcilbcHRyICsgU0laRV9PRkZTRVQgPj4+IDJdO1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UocHRyLCBwdHIgKyBsZW5ndGgpO1xuICB9XG5cbiAgZXh0ZW5kZWRFeHBvcnRzLl9fZ2V0QXJyYXlCdWZmZXIgPSBfX2dldEFycmF5QnVmZmVyO1xuXG4gIC8qKiBDb3BpZXMgYSB0eXBlZCBhcnJheSdzIHZhbHVlcyBmcm9tIHRoZSBtb2R1bGUncyBtZW1vcnkuICovXG4gIGZ1bmN0aW9uIGdldFR5cGVkQXJyYXkoVHlwZSwgYWxpZ25Mb2cyLCBwdHIpIHtcbiAgICByZXR1cm4gbmV3IFR5cGUoZ2V0VHlwZWRBcnJheVZpZXcoVHlwZSwgYWxpZ25Mb2cyLCBwdHIpKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGEgbGl2ZSB2aWV3IG9uIGEgdHlwZWQgYXJyYXkncyB2YWx1ZXMgaW4gdGhlIG1vZHVsZSdzIG1lbW9yeS4gKi9cbiAgZnVuY3Rpb24gZ2V0VHlwZWRBcnJheVZpZXcoVHlwZSwgYWxpZ25Mb2cyLCBwdHIpIHtcbiAgICBjb25zdCBidWZmZXIgPSBtZW1vcnkuYnVmZmVyO1xuICAgIGNvbnN0IFUzMiA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgIGNvbnN0IGJ1ZlB0ciA9IFUzMltwdHIgKyBBUlJBWUJVRkZFUlZJRVdfREFUQVNUQVJUX09GRlNFVCA+Pj4gMl07XG4gICAgcmV0dXJuIG5ldyBUeXBlKGJ1ZmZlciwgYnVmUHRyLCBVMzJbYnVmUHRyICsgU0laRV9PRkZTRVQgPj4+IDJdID4+PiBhbGlnbkxvZzIpO1xuICB9XG5cbiAgLyoqIEF0dGFjaCBhIHNldCBvZiBnZXQgVHlwZWRBcnJheSBhbmQgVmlldyBmdW5jdGlvbnMgdG8gdGhlIGV4cG9ydHMuICovXG4gIGZ1bmN0aW9uIGF0dGFjaFR5cGVkQXJyYXlGdW5jdGlvbnMoY3RvciwgbmFtZSwgYWxpZ24pIHtcbiAgICBleHRlbmRlZEV4cG9ydHNbYF9fZ2V0JHtuYW1lfWBdID0gZ2V0VHlwZWRBcnJheS5iaW5kKG51bGwsIGN0b3IsIGFsaWduKTtcbiAgICBleHRlbmRlZEV4cG9ydHNbYF9fZ2V0JHtuYW1lfVZpZXdgXSA9IGdldFR5cGVkQXJyYXlWaWV3LmJpbmQobnVsbCwgY3RvciwgYWxpZ24pO1xuICB9XG5cbiAgW1xuICAgIEludDhBcnJheSxcbiAgICBVaW50OEFycmF5LFxuICAgIFVpbnQ4Q2xhbXBlZEFycmF5LFxuICAgIEludDE2QXJyYXksXG4gICAgVWludDE2QXJyYXksXG4gICAgSW50MzJBcnJheSxcbiAgICBVaW50MzJBcnJheSxcbiAgICBGbG9hdDMyQXJyYXksXG4gICAgRmxvYXQ2NEFycmF5XG4gIF0uZm9yRWFjaChjdG9yID0+IHtcbiAgICBhdHRhY2hUeXBlZEFycmF5RnVuY3Rpb25zKGN0b3IsIGN0b3IubmFtZSwgMzEgLSBNYXRoLmNsejMyKGN0b3IuQllURVNfUEVSX0VMRU1FTlQpKTtcbiAgfSk7XG5cbiAgaWYgKEJJR0lOVCkge1xuICAgIFtCaWdVaW50NjRBcnJheSwgQmlnSW50NjRBcnJheV0uZm9yRWFjaChjdG9yID0+IHtcbiAgICAgIGF0dGFjaFR5cGVkQXJyYXlGdW5jdGlvbnMoY3RvciwgY3Rvci5uYW1lLnNsaWNlKDMpLCAzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBUZXN0cyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3MgcmVwcmVzZW50ZWQgYnkgdGhlIHNwZWNpZmllZCBiYXNlIGlkLiAqL1xuICBmdW5jdGlvbiBfX2luc3RhbmNlb2YocHRyLCBiYXNlSWQpIHtcbiAgICBjb25zdCBVMzIgPSBuZXcgVWludDMyQXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgbGV0IGlkID0gVTMyW3B0ciArIElEX09GRlNFVCA+Pj4gMl07XG4gICAgaWYgKGlkIDw9IGdldFJ0dGlDb3VudChVMzIpKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChpZCA9PSBiYXNlSWQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZCA9IGdldEJhc2UoaWQpO1xuICAgICAgfSB3aGlsZSAoaWQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBleHRlbmRlZEV4cG9ydHMuX19pbnN0YW5jZW9mID0gX19pbnN0YW5jZW9mO1xuXG4gIC8vIFB1bGwgYmFzaWMgZXhwb3J0cyB0byBleHRlbmRlZEV4cG9ydHMgc28gY29kZSBpbiBwcmVJbnN0YW50aWF0ZSBjYW4gdXNlIHRoZW1cbiAgZXh0ZW5kZWRFeHBvcnRzLm1lbW9yeSA9IGV4dGVuZGVkRXhwb3J0cy5tZW1vcnkgfHwgbWVtb3J5O1xuICBleHRlbmRlZEV4cG9ydHMudGFibGUgID0gZXh0ZW5kZWRFeHBvcnRzLnRhYmxlICB8fCB0YWJsZTtcblxuICAvLyBEZW1hbmdsZSBleHBvcnRzIGFuZCBwcm92aWRlIHRoZSB1c3VhbCB1dGlsaXR5IG9uIHRoZSBwcm90b3R5cGVcbiAgcmV0dXJuIGRlbWFuZ2xlKGV4cG9ydHMsIGV4dGVuZGVkRXhwb3J0cyk7XG59XG5cbmZ1bmN0aW9uIGlzUmVzcG9uc2Uoc3JjKSB7XG4gIHJldHVybiB0eXBlb2YgUmVzcG9uc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc3JjIGluc3RhbmNlb2YgUmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGlzTW9kdWxlKHNyYykge1xuICByZXR1cm4gc3JjIGluc3RhbmNlb2YgV2ViQXNzZW1ibHkuTW9kdWxlO1xufVxuXG4vKiogQXN5bmNocm9ub3VzbHkgaW5zdGFudGlhdGVzIGFuIEFzc2VtYmx5U2NyaXB0IG1vZHVsZSBmcm9tIGFueXRoaW5nIHRoYXQgY2FuIGJlIGluc3RhbnRpYXRlZC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50aWF0ZShzb3VyY2UsIGltcG9ydHMgPSB7fSkge1xuICBpZiAoaXNSZXNwb25zZShzb3VyY2UgPSBhd2FpdCBzb3VyY2UpKSByZXR1cm4gaW5zdGFudGlhdGVTdHJlYW1pbmcoc291cmNlLCBpbXBvcnRzKTtcbiAgY29uc3QgbW9kdWxlID0gaXNNb2R1bGUoc291cmNlKSA/IHNvdXJjZSA6IGF3YWl0IFdlYkFzc2VtYmx5LmNvbXBpbGUoc291cmNlKTtcbiAgY29uc3QgZXh0ZW5kZWQgPSBwcmVJbnN0YW50aWF0ZShpbXBvcnRzKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShtb2R1bGUsIGltcG9ydHMpO1xuICBjb25zdCBleHBvcnRzID0gcG9zdEluc3RhbnRpYXRlKGV4dGVuZGVkLCBpbnN0YW5jZSk7XG4gIHJldHVybiB7IG1vZHVsZSwgaW5zdGFuY2UsIGV4cG9ydHMgfTtcbn1cblxuLyoqIFN5bmNocm9ub3VzbHkgaW5zdGFudGlhdGVzIGFuIEFzc2VtYmx5U2NyaXB0IG1vZHVsZSBmcm9tIGEgV2ViQXNzZW1ibHkuTW9kdWxlIG9yIGJpbmFyeSBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVTeW5jKHNvdXJjZSwgaW1wb3J0cyA9IHt9KSB7XG4gIGNvbnN0IG1vZHVsZSA9IGlzTW9kdWxlKHNvdXJjZSkgPyBzb3VyY2UgOiBuZXcgV2ViQXNzZW1ibHkuTW9kdWxlKHNvdXJjZSk7XG4gIGNvbnN0IGV4dGVuZGVkID0gcHJlSW5zdGFudGlhdGUoaW1wb3J0cyk7XG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKG1vZHVsZSwgaW1wb3J0cyk7XG4gIGNvbnN0IGV4cG9ydHMgPSBwb3N0SW5zdGFudGlhdGUoZXh0ZW5kZWQsIGluc3RhbmNlKTtcbiAgcmV0dXJuIHsgbW9kdWxlLCBpbnN0YW5jZSwgZXhwb3J0cyB9O1xufVxuXG4vKiogQXN5bmNocm9ub3VzbHkgaW5zdGFudGlhdGVzIGFuIEFzc2VtYmx5U2NyaXB0IG1vZHVsZSBmcm9tIGEgcmVzcG9uc2UsIGkuZS4gYXMgb2J0YWluZWQgYnkgYGZldGNoYC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YW50aWF0ZVN0cmVhbWluZyhzb3VyY2UsIGltcG9ydHMgPSB7fSkge1xuICBpZiAoIVdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKFxuICAgICAgaXNSZXNwb25zZShzb3VyY2UgPSBhd2FpdCBzb3VyY2UpXG4gICAgICAgID8gc291cmNlLmFycmF5QnVmZmVyKClcbiAgICAgICAgOiBzb3VyY2UsXG4gICAgICBpbXBvcnRzXG4gICAgKTtcbiAgfVxuICBjb25zdCBleHRlbmRlZCA9IHByZUluc3RhbnRpYXRlKGltcG9ydHMpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhzb3VyY2UsIGltcG9ydHMpO1xuICBjb25zdCBleHBvcnRzID0gcG9zdEluc3RhbnRpYXRlKGV4dGVuZGVkLCByZXN1bHQuaW5zdGFuY2UpO1xuICByZXR1cm4geyAuLi5yZXN1bHQsIGV4cG9ydHMgfTtcbn1cblxuLyoqIERlbWFuZ2xlcyBhbiBBc3NlbWJseVNjcmlwdCBtb2R1bGUncyBleHBvcnRzIHRvIGEgZnJpZW5kbHkgb2JqZWN0IHN0cnVjdHVyZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZW1hbmdsZShleHBvcnRzLCBleHRlbmRlZEV4cG9ydHMgPSB7fSkge1xuICBjb25zdCBzZXRBcmd1bWVudHNMZW5ndGggPSBleHBvcnRzW1wiX19hcmd1bWVudHNMZW5ndGhcIl1cbiAgICA/IGxlbmd0aCA9PiB7IGV4cG9ydHNbXCJfX2FyZ3VtZW50c0xlbmd0aFwiXS52YWx1ZSA9IGxlbmd0aDsgfVxuICAgIDogZXhwb3J0c1tcIl9fc2V0QXJndW1lbnRzTGVuZ3RoXCJdIHx8IGV4cG9ydHNbXCJfX3NldGFyZ2NcIl0gfHwgKCgpID0+IHsgLyogbm9wICovIH0pO1xuICBmb3IgKGxldCBpbnRlcm5hbE5hbWUgaW4gZXhwb3J0cykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGludGVybmFsTmFtZSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGVsZW0gPSBleHBvcnRzW2ludGVybmFsTmFtZV07XG4gICAgbGV0IHBhcnRzID0gaW50ZXJuYWxOYW1lLnNwbGl0KFwiLlwiKTtcbiAgICBsZXQgY3VyciA9IGV4dGVuZGVkRXhwb3J0cztcbiAgICB3aGlsZSAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VyciwgcGFydCkpIGN1cnJbcGFydF0gPSB7fTtcbiAgICAgIGN1cnIgPSBjdXJyW3BhcnRdO1xuICAgIH1cbiAgICBsZXQgbmFtZSA9IHBhcnRzWzBdO1xuICAgIGxldCBoYXNoID0gbmFtZS5pbmRleE9mKFwiI1wiKTtcbiAgICBpZiAoaGFzaCA+PSAwKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBoYXNoKTtcbiAgICAgIGNvbnN0IGNsYXNzRWxlbSA9IGN1cnJbY2xhc3NOYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NFbGVtID09PSBcInVuZGVmaW5lZFwiIHx8ICFjbGFzc0VsZW0ucHJvdG90eXBlKSB7XG4gICAgICAgIGNvbnN0IGN0b3IgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIGN0b3Iud3JhcChjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvcigwLCAuLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgICAgIGN0b3IucHJvdG90eXBlID0ge1xuICAgICAgICAgIHZhbHVlT2YoKSB7IHJldHVybiB0aGlzW1RISVNdOyB9XG4gICAgICAgIH07XG4gICAgICAgIGN0b3Iud3JhcCA9IGZ1bmN0aW9uKHRoaXNWYWx1ZSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGN0b3IucHJvdG90eXBlLCB7IFtUSElTXTogeyB2YWx1ZTogdGhpc1ZhbHVlLCB3cml0YWJsZTogZmFsc2UgfSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNsYXNzRWxlbSkgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY2xhc3NFbGVtKS5mb3JFYWNoKG5hbWUgPT5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3RvciwgbmFtZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjbGFzc0VsZW0sIG5hbWUpKVxuICAgICAgICApO1xuICAgICAgICBjdXJyW2NsYXNzTmFtZV0gPSBjdG9yO1xuICAgICAgfVxuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKGhhc2ggKyAxKTtcbiAgICAgIGN1cnIgPSBjdXJyW2NsYXNzTmFtZV0ucHJvdG90eXBlO1xuICAgICAgaWYgKC9eKGdldHxzZXQpOi8udGVzdChuYW1lKSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjdXJyLCBuYW1lID0gbmFtZS5zdWJzdHJpbmcoNCkpKSB7XG4gICAgICAgICAgbGV0IGdldHRlciA9IGV4cG9ydHNbaW50ZXJuYWxOYW1lLnJlcGxhY2UoXCJzZXQ6XCIsIFwiZ2V0OlwiKV07XG4gICAgICAgICAgbGV0IHNldHRlciA9IGV4cG9ydHNbaW50ZXJuYWxOYW1lLnJlcGxhY2UoXCJnZXQ6XCIsIFwic2V0OlwiKV07XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1cnIsIG5hbWUsIHtcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIGdldHRlcih0aGlzW1RISVNdKTsgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkgeyBzZXR0ZXIodGhpc1tUSElTXSwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIChjdXJyW25hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHNldEFyZ3VtZW50c0xlbmd0aChhcmdzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbSguLi5hcmdzKTtcbiAgICAgICAgICB9KS5vcmlnaW5hbCA9IGVsZW07XG4gICAgICAgIH0gZWxzZSB7IC8vIGluc3RhbmNlIG1ldGhvZFxuICAgICAgICAgIChjdXJyW25hbWVdID0gZnVuY3Rpb24oLi4uYXJncykgeyAvLyAhXG4gICAgICAgICAgICBzZXRBcmd1bWVudHNMZW5ndGgoYXJncy5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0odGhpc1tUSElTXSwgLi4uYXJncyk7XG4gICAgICAgICAgfSkub3JpZ2luYWwgPSBlbGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgvXihnZXR8c2V0KTovLnRlc3QobmFtZSkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VyciwgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDQpKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdXJyLCBuYW1lLCB7XG4gICAgICAgICAgICBnZXQ6IGV4cG9ydHNbaW50ZXJuYWxOYW1lLnJlcGxhY2UoXCJzZXQ6XCIsIFwiZ2V0OlwiKV0sXG4gICAgICAgICAgICBzZXQ6IGV4cG9ydHNbaW50ZXJuYWxOYW1lLnJlcGxhY2UoXCJnZXQ6XCIsIFwic2V0OlwiKV0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW0gPT09IFwiZnVuY3Rpb25cIiAmJiBlbGVtICE9PSBzZXRBcmd1bWVudHNMZW5ndGgpIHtcbiAgICAgICAgKGN1cnJbbmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHNldEFyZ3VtZW50c0xlbmd0aChhcmdzLmxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIGVsZW0oLi4uYXJncyk7XG4gICAgICAgIH0pLm9yaWdpbmFsID0gZWxlbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJbbmFtZV0gPSBlbGVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXh0ZW5kZWRFeHBvcnRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluc3RhbnRpYXRlLFxuICBpbnN0YW50aWF0ZVN5bmMsXG4gIGluc3RhbnRpYXRlU3RyZWFtaW5nLFxuICBkZW1hbmdsZVxufTtcbiIsIi8vIFdyYXBwZXIgYXJvdW5kIHRoZSBsb2FkZXIgaW5zdGFudGlhdGVcbmltcG9ydCBsb2FkZXIgZnJvbSBcIkBhc3NlbWJseXNjcmlwdC9sb2FkZXJcIjtcblxuaW1wb3J0IHsgV2ViQXNzZW1ibHlMb2FkZXJSZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzYmluZEluc3RhbnRpYXRlKFxuICBtb2R1bGU6IFdlYkFzc2VtYmx5Lk1vZHVsZSxcbiAgaW1wb3J0T2JqZWN0OiBXZWJBc3NlbWJseS5JbXBvcnRzXG4pOiBQcm9taXNlPFdlYkFzc2VtYmx5TG9hZGVyUmVzdWx0PiB7XG4gIHJldHVybiBsb2FkZXIuaW5zdGFudGlhdGUobW9kdWxlLCBpbXBvcnRPYmplY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNiaW5kSW5zdGFudGlhdGVTeW5jKFxuICBtb2R1bGU6IFdlYkFzc2VtYmx5Lk1vZHVsZSxcbiAgaW1wb3J0T2JqZWN0OiBXZWJBc3NlbWJseS5JbXBvcnRzXG4pOiBXZWJBc3NlbWJseUxvYWRlclJlc3VsdCB7XG4gIHJldHVybiBsb2FkZXIuaW5zdGFudGlhdGVTeW5jKG1vZHVsZSwgaW1wb3J0T2JqZWN0KTtcbn1cbiIsImltcG9ydCBBc2JpbmRJbnN0YW5jZSBmcm9tIFwiLi9hc2JpbmQtaW5zdGFuY2VcIjtcblxuLy8gQ29udmVydHMgd2ViIHBsYXRmb3JtIG5hbWVzIGZvciB0aGUgZGlmZmVyZW50IEFycmF5QnVmZmVyVmlld3Ncbi8vIHRvIHRoZSBuYW1lcyB0aGF0IEFTQyB1bmRlcnN0YW5kcy4gQ3VycmVudGx5LCB0aGF0IG9ubHkgbWVhbnNcbi8vIHRvIGN1dCBvZmYgdGhlIGBCaWdgIGluIGBCaWdJbnQ2NEFycmF5YC5cbmNvbnN0IHN0ZGxpYlR5cGVkQXJyYXlQcmVmaXggPSBcIn5saWIvdHlwZWRhcnJheS9cIjtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5QnVmZmVyVmlld1R5cGVOYW1lKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgLy8gRG9u4oCZdCBkbyBhbnl0aGluZyBpZiB0aGlzIGlzIG5vdCBhIHN0ZGxpYiB0eXBlLlxuICBpZiAoIXR5cGVOYW1lLnN0YXJ0c1dpdGgoc3RkbGliVHlwZWRBcnJheVByZWZpeCkpIHtcbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cbiAgdHlwZU5hbWUgPSB0eXBlTmFtZS5zbGljZShzdGRsaWJUeXBlZEFycmF5UHJlZml4Lmxlbmd0aCk7XG4gIGlmICh0eXBlTmFtZS5zdGFydHNXaXRoKFwiQmlnXCIpKSB7XG4gICAgLy8gU2xpY2Ugb2ZmIGBCaWdgIGFzIHRoZSBsb2FkZXIgZG9lc27igJl0IGhhdmUgdGhhdCBwcmVmaXguXG4gICAgdHlwZU5hbWUgPSB0eXBlTmFtZS5zbGljZSgzKTtcbiAgfVxuICByZXR1cm4gdHlwZU5hbWU7XG59XG5cbmZ1bmN0aW9uIG5vcChhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsIHZhbHVlOiBhbnksIHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmcoXG4gIGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSxcbiAgdmFsdWU6IGFueSxcbiAgdHlwZU5hbWU6IHN0cmluZ1xuKSB7XG4gIHJldHVybiBhc2JpbmRJbnN0YW5jZS5leHBvcnRzLl9fZ2V0U3RyaW5nKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcHV0U3RyaW5nKFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX25ld1N0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5QnVmZmVyKFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX2dldEFycmF5QnVmZmVyKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcHV0QXJyYXlCdWZmZXIoXG4gIGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSxcbiAgdmFsdWU6IGFueSxcbiAgdHlwZU5hbWU6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHB0ciA9IGFzYmluZEluc3RhbmNlLmV4cG9ydHMuX19uZXcoXG4gICAgdmFsdWUuYnl0ZUxlbmd0aCxcbiAgICBhc2JpbmRJbnN0YW5jZS5nZXRUeXBlSWQodHlwZU5hbWUpXG4gICk7XG4gIG5ldyBVaW50OEFycmF5KFxuICAgIGFzYmluZEluc3RhbmNlLmV4cG9ydHMubWVtb3J5LmJ1ZmZlcixcbiAgICBwdHIsXG4gICAgdmFsdWUuYnl0ZUxlbmd0aFxuICApLnNldChuZXcgVWludDhBcnJheSh2YWx1ZSkpO1xuICByZXR1cm4gcHRyO1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheUJ1ZmZlclZpZXcoXG4gIGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSxcbiAgdmFsdWU6IGFueSxcbiAgdHlwZU5hbWU6IHN0cmluZ1xuKSB7XG4gIHJldHVybiBhc2JpbmRJbnN0YW5jZS5leHBvcnRzW1xuICAgIGBfX2dldCR7bm9ybWFsaXplQXJyYXlCdWZmZXJWaWV3VHlwZU5hbWUodHlwZU5hbWUpfVZpZXdgXG4gIF0odmFsdWUpO1xufVxuZnVuY3Rpb24gcHV0QXJyYXlCdWZmZXJWaWV3KFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX25ld0FycmF5KFxuICAgIGFzYmluZEluc3RhbmNlLmdldFR5cGVJZCh0eXBlTmFtZSksXG4gICAgdmFsdWVcbiAgKTtcbn1cblxuY29uc3Qgc3RkbGliQXJyYXkgPSBcIn5saWIvYXJyYXkvQXJyYXlcIjtcbmZ1bmN0aW9uIGFycmF5SW5uZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKCF0eXBlTmFtZS5zdGFydHNXaXRoKHN0ZGxpYkFycmF5KSkge1xuICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KHR5cGVOYW1lKX0gaXMgbm90IGFuIGFycmF5IHR5cGVgKTtcbiAgfVxuICAvLyBDdXQgb2ZmIHN0ZGxpYiBwYXRoICsgZ2VuZXJpYyBhbmdsZSBicmFja2V0cy5cbiAgcmV0dXJuIHR5cGVOYW1lLnNsaWNlKGAke3N0ZGxpYkFycmF5fTxgLmxlbmd0aCwgLTEpO1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheShcbiAgYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLFxuICB2YWx1ZTogYW55LFxuICB0eXBlTmFtZTogc3RyaW5nXG4pIHtcbiAgY29uc3QgaW5uZXJUeXBlTmFtZSA9IGFycmF5SW5uZXJUeXBlKHR5cGVOYW1lKTtcbiAgY29uc3QgaW5uZXJUeXBlQ29udmVydGVyID0gZ2V0Q29udmVydGVyRm9yVHlwZShpbm5lclR5cGVOYW1lKTtcbiAgY29uc3QgcmF3QXJyYXkgPSBhc2JpbmRJbnN0YW5jZS5leHBvcnRzLl9fZ2V0QXJyYXkodmFsdWUpO1xuICByZXR1cm4gcmF3QXJyYXkubWFwKHYgPT5cbiAgICBpbm5lclR5cGVDb252ZXJ0ZXIuYXNjVG9Kcyhhc2JpbmRJbnN0YW5jZSwgdiwgaW5uZXJUeXBlTmFtZSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gcHV0QXJyYXkoXG4gIGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSxcbiAgdmFsdWU6IGFueSxcbiAgdHlwZU5hbWU6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IGlubmVyVHlwZU5hbWUgPSBhcnJheUlubmVyVHlwZSh0eXBlTmFtZSk7XG4gIGNvbnN0IGlubmVyVHlwZUNvbnZlcnRlciA9IGdldENvbnZlcnRlckZvclR5cGUoaW5uZXJUeXBlTmFtZSk7XG4gIGNvbnN0IGNvbnZlcnRlZFZhbHVlcyA9IHZhbHVlLm1hcCh2ID0+XG4gICAgaW5uZXJUeXBlQ29udmVydGVyLmpzVG9Bc2MoYXNiaW5kSW5zdGFuY2UsIHYsIGlubmVyVHlwZU5hbWUpXG4gICk7XG4gIHJldHVybiBhc2JpbmRJbnN0YW5jZS5leHBvcnRzLl9fbmV3QXJyYXkoXG4gICAgYXNiaW5kSW5zdGFuY2UuZ2V0VHlwZUlkKHR5cGVOYW1lKSxcbiAgICBjb252ZXJ0ZWRWYWx1ZXNcbiAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb252ZXJ0ZXIge1xuICBhc2NUb0pzKGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSwgdmFsdWU6IGFueSwgdHlwZU5hbWU6IHN0cmluZyk6IGFueTtcbiAganNUb0FzYyhhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsIHZhbHVlOiBhbnksIHR5cGVOYW1lOiBzdHJpbmcpOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0ZXJzID0gbmV3IE1hcDxzdHJpbmcgfCBSZWdFeHAsIENvbnZlcnRlcj4oW1xuICBbXCJ2b2lkXCIsIHsgYXNjVG9Kczogbm9wLCBqc1RvQXNjOiBub3AgfV0sXG4gIC8vIFRlY2huaWNhbGx5IHRoaXMgbWF0Y2hlcyB0eXBlcyB0aGF0IGRvbuKAmSBleGlzdCAobGlrZSBmOCksXG4gIC8vIGJ1dCBzaW5jZSB0aG9zZSBjYW4gb25seSBhcHBlYXIgaWYgdGhlIGNvbXBpbGVyIGFjY2VwdHMgdGhlbSxcbiAgLy8gaXQgc2VlbXMgdW5saWtlbHkgZm9yIHRoYXQgdG8gYmUgYSBwcm9ibGVtLlxuICBbXG4gICAgL14oaXx1fGYpKDh8MTZ8MzJ8NjQpfFt1aV1zaXplfGJvb2x8ZXh0ZXJucmVmJC8sXG4gICAgeyBhc2NUb0pzOiBub3AsIGpzVG9Bc2M6IG5vcCB9XG4gIF0sXG4gIFtcIn5saWIvc3RyaW5nL1N0cmluZ1wiLCB7IGFzY1RvSnM6IGdldFN0cmluZywganNUb0FzYzogcHV0U3RyaW5nIH1dLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvSW50OEFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9JbnQxNkFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9JbnQzMkFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9VaW50OEFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9VaW50MTZBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvVWludDMyQXJyYXlcIixcbiAgICB7IGFzY1RvSnM6IGdldEFycmF5QnVmZmVyVmlldywganNUb0FzYzogcHV0QXJyYXlCdWZmZXJWaWV3IH1cbiAgXSxcbiAgW1xuICAgIFwifmxpYi90eXBlZGFycmF5L0ludDY0QXJyYXlcIixcbiAgICB7IGFzY1RvSnM6IGdldEFycmF5QnVmZmVyVmlldywganNUb0FzYzogcHV0QXJyYXlCdWZmZXJWaWV3IH1cbiAgXSxcbiAgW1xuICAgIFwifmxpYi90eXBlZGFycmF5L1VpbnQ2NEFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9VaW50OENsYW1wZWRBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvRmxvYXQzMkFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9GbG9hdDY0QXJyYXlcIixcbiAgICB7IGFzY1RvSnM6IGdldEFycmF5QnVmZmVyVmlldywganNUb0FzYzogcHV0QXJyYXlCdWZmZXJWaWV3IH1cbiAgXSxcbiAgW1xuICAgIFwifmxpYi9hcnJheWJ1ZmZlci9BcnJheUJ1ZmZlclwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXIsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyIH1cbiAgXSxcbiAgWy9efmxpYlxcL2FycmF5XFwvQXJyYXk8Lis+JC8sIHsgYXNjVG9KczogZ2V0QXJyYXksIGpzVG9Bc2M6IHB1dEFycmF5IH1dXG5dKTtcblxuY29uc3Qgd2FybmVkID0gbmV3IFNldDxzdHJpbmc+KCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udmVydGVyRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogQ29udmVydGVyIHtcbiAgZm9yIChjb25zdCBbbWF0Y2hlciwgY29udmVydGVyXSBvZiBjb252ZXJ0ZXJzKSB7XG4gICAgaWYgKHR5cGVvZiBtYXRjaGVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAobWF0Y2hlciA9PT0gdHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlci50ZXN0KHR5cGVOYW1lKSkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRlcjtcbiAgICB9XG4gIH1cbiAgaWYgKCF3YXJuZWQuaGFzKHR5cGVOYW1lKSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBObyBjb252ZXJ0ZXIgZm9yICR7SlNPTi5zdHJpbmdpZnkodHlwZU5hbWUpfSwgdXNpbmcgcGFzcy10aHJvdWdoYFxuICAgICk7XG4gICAgd2FybmVkLmFkZCh0eXBlTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHsgYXNjVG9Kczogbm9wLCBqc1RvQXNjOiBub3AgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY1RvSnNDb252ZXJ0ZXJGb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGdldENvbnZlcnRlckZvclR5cGUodHlwZU5hbWUpLmFzY1RvSnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKc1RvQXNjQ29udmVydGVyRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDb252ZXJ0ZXJGb3JUeXBlKHR5cGVOYW1lKS5qc1RvQXNjO1xufVxuIiwiaW1wb3J0IHsgVHlwZURlZkZuIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQXNiaW5kSW5zdGFuY2UgZnJvbSBcIi4vYXNiaW5kLWluc3RhbmNlXCI7XG5cbmltcG9ydCB7XG4gIGdldEFzY1RvSnNDb252ZXJ0ZXJGb3JUeXBlLFxuICBnZXRKc1RvQXNjQ29udmVydGVyRm9yVHlwZVxufSBmcm9tIFwiLi90eXBlLWNvbnZlcnRlcnNcIjtcblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25Gcm9tS2V5UGF0aChiYXNlT2JqZWN0LCBrZXlzKSB7XG4gIGxldCByZXN1bHQgPSBiYXNlT2JqZWN0O1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0Py5ba2V5XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZEltcG9ydEZ1bmN0aW9uKFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIGltcG9ydGVkRnVuY3Rpb246IEZ1bmN0aW9uLFxuICBpbXBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvcjogVHlwZURlZkZuXG4pIHtcbiAgLy8gR3JhYiB0eXBlIGNvbnZlcnRlciBmdW5jdGlvbnMgYWNjb3JkaW5nIHRvIHRoZSB0eXBlIGRlc2NyaXB0b3JcbiAgY29uc3QgYXJndW1lbnRDb252ZXJ0ZXJGdW5jdGlvbnMgPSBpbXBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5wYXJhbWV0ZXJzLm1hcChcbiAgICBnZXRBc2NUb0pzQ29udmVydGVyRm9yVHlwZVxuICApO1xuICBjb25zdCByZXR1cm5WYWx1ZUNvbnZlcnRlckZ1bmN0aW9uID0gZ2V0SnNUb0FzY0NvbnZlcnRlckZvclR5cGUoXG4gICAgaW1wb3J0ZWRGdW5jdGlvbkRlc2NyaXB0b3IucmV0dXJuVHlwZVxuICApO1xuXG4gIC8vIENyZWF0ZSBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIHRoZSBjb3JyZWN0IGNvbnZlcnRlciBmdW5jdGlvbiB0byBhcmd1bWVudHMgYW5kXG4gIC8vIHJldHVybiB2YWx1ZSByZXNwZWN0aXZlbHkuXG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGlmIChcbiAgICAgIGFzYmluZEluc3RhbmNlLmlzQXN5bmNpZnlNb2R1bGUgJiZcbiAgICAgIChhc2JpbmRJbnN0YW5jZS5leHBvcnRzIGFzIGFueSkuYXN5bmNpZnlfZ2V0X3N0YXRlKCkgPT09IDIgLyogUmV3aW5kaW5nICovXG4gICAgKSB7XG4gICAgICAoYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMgYXMgYW55KS5hc3luY2lmeV9zdG9wX3Jld2luZCgpO1xuICAgICAgYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMuX191bnBpbihcbiAgICAgICAgYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdGF0ZS5wdHJcbiAgICAgICk7XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWVDb252ZXJ0ZXJGdW5jdGlvbihcbiAgICAgICAgYXNiaW5kSW5zdGFuY2UsXG4gICAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUudmFsdWUsXG4gICAgICAgIGltcG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnJldHVyblR5cGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9IGFyZ3VtZW50Q29udmVydGVyRnVuY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBFeHBlY3RlZCAke2FyZ3VtZW50Q29udmVydGVyRnVuY3Rpb25zLmxlbmd0aH0gYXJndW1lbnRzLCBnb3QgJHthcmdzLmxlbmd0aH1gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBuZXdBcmdzID0gYXJncy5tYXAoKHYsIGkpID0+XG4gICAgICBhcmd1bWVudENvbnZlcnRlckZ1bmN0aW9uc1tpXShcbiAgICAgICAgYXNiaW5kSW5zdGFuY2UsXG4gICAgICAgIHYsXG4gICAgICAgIGltcG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnBhcmFtZXRlcnNbaV1cbiAgICAgIClcbiAgICApO1xuICAgIGNvbnN0IHJlc3VsdCA9IGltcG9ydGVkRnVuY3Rpb24oLi4ubmV3QXJncyk7XG5cbiAgICBpZiAoIWFzYmluZEluc3RhbmNlLmlzQXN5bmNpZnlNb2R1bGUgfHwgIShyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlQ29udmVydGVyRnVuY3Rpb24oXG4gICAgICAgIGFzYmluZEluc3RhbmNlLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIGltcG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnJldHVyblR5cGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdGF0ZSA9IHtcbiAgICAgIHB0cjogYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMuX19uZXcoXG4gICAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RvcmFnZVNpemUsXG4gICAgICAgIDBcbiAgICAgIClcbiAgICB9O1xuICAgIGFzYmluZEluc3RhbmNlLmxvYWRlZE1vZHVsZS5leHBvcnRzLl9fcGluKGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUucHRyKTtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhhc2JpbmRJbnN0YW5jZS5sb2FkZWRNb2R1bGUuZXhwb3J0cy5tZW1vcnkuYnVmZmVyKTtcbiAgICBkdi5zZXRVaW50MzIoXG4gICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0cixcbiAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUucHRyICsgOCxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGR2LnNldFVpbnQzMihcbiAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUucHRyICsgNCxcbiAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUucHRyICsgYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdG9yYWdlU2l6ZSxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIChhc2JpbmRJbnN0YW5jZS5sb2FkZWRNb2R1bGUuZXhwb3J0cyBhcyBhbnkpLmFzeW5jaWZ5X3N0YXJ0X3Vud2luZChcbiAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUucHRyXG4gICAgKTtcbiAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnByb21pc2UgPSByZXN1bHQ7XG4gIH07XG59XG5cbi8vIEZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gYW4gYXNiaW5kIGluc3RhbmNlLCBhbmQgdGhlIGtleSB0byB0aGUgZXhwb3J0IGZ1bmN0aW9uIG9uIHRoZVxuLy8gYWJpbmRJbnN0YW5jZS5leHBvcnRzIG9iamVjdCwgdG8gYmUgd3JhcHBlZCBhbmQgdGhlbiByZS1hc3NpZ25lZCB0byB0aGUgYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRXhwb3J0RnVuY3Rpb24oXG4gIGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSxcbiAgZXhwb3J0ZWRGdW5jdGlvbjogRnVuY3Rpb24sXG4gIGV4cG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yOiBUeXBlRGVmRm5cbikge1xuICAvLyBHcmFiIHR5cGUgY29udmVydGVyIGZ1bmN0aW9ucyBhY2NvcmRpbmcgdG8gdGhlIHR5cGUgZGVzY3JpcHRvclxuICBjb25zdCBhcmd1bWVudENvbnZlcnRlckZ1bmN0aW9ucyA9IGV4cG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnBhcmFtZXRlcnMubWFwKFxuICAgIGdldEpzVG9Bc2NDb252ZXJ0ZXJGb3JUeXBlXG4gICk7XG4gIGNvbnN0IHJldHVyblZhbHVlQ29udmVydGVyRnVuY3Rpb24gPSBnZXRBc2NUb0pzQ29udmVydGVyRm9yVHlwZShcbiAgICBleHBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5yZXR1cm5UeXBlXG4gICk7XG5cbiAgLy8gQ3JlYXRlIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgdGhlIGNvcnJlY3QgY29udmVydGVyIGZ1bmN0aW9uIHRvIGFyZ3VtZW50cyBhbmRcbiAgLy8gcmV0dXJuIHZhbHVlIHJlc3BlY3RpdmVseS5cbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9IGFyZ3VtZW50Q29udmVydGVyRnVuY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBFeHBlY3RlZCAke2FyZ3VtZW50Q29udmVydGVyRnVuY3Rpb25zLmxlbmd0aH0gYXJndW1lbnRzLCBnb3QgJHthcmdzLmxlbmd0aH1gXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUaGUgY29udmVyc2lvbiBmdW5jdGlvbiBvZiB0aGUgX25leHRfIHBhcmFtZXRlciBjb3VsZCBwb3RlbnRpYWxseVxuICAgIC8vIHRyaWdnZXIgR0MgYW5kIGNvbGxlY3QgdGhlIHByZXZpb3VzIHBhcmFtZXRlciBiZWZvcmUgd2UgZXZlbiBpbnZva2VcbiAgICAvLyB0aGUgYWN0dWFsIGZ1bmN0aW9uLiBUaGF04oCZcyBiYWQhIFdl4oCZbGwgcGluIGFsbCBub24tcHJpbWl0aXZlIHBhcmFtZXRlcnMgYmVmb3JlIGludm9jYXRpb25cbiAgICAvLyBhbmQgdW5waW4gdGhlbSBhZnRlci5cbiAgICBjb25zdCBwaW5uZWRBcmdzID0gW107XG4gICAgY29uc3QgbmV3QXJncyA9IGFyZ3MubWFwKChvcmlnaW5hbFBhcmFtZXRlciwgaSkgPT4ge1xuICAgICAgY29uc3QgY29udmVydGVkUGFyYW1ldGVyID0gYXJndW1lbnRDb252ZXJ0ZXJGdW5jdGlvbnNbaV0oXG4gICAgICAgIGFzYmluZEluc3RhbmNlLFxuICAgICAgICBvcmlnaW5hbFBhcmFtZXRlcixcbiAgICAgICAgZXhwb3J0ZWRGdW5jdGlvbkRlc2NyaXB0b3IucGFyYW1ldGVyc1tpXVxuICAgICAgKTtcbiAgICAgIGlmIChjb252ZXJ0ZWRQYXJhbWV0ZXIgIT09IG9yaWdpbmFsUGFyYW1ldGVyKSB7XG4gICAgICAgIGFzYmluZEluc3RhbmNlLmV4cG9ydHMuX19waW4oY29udmVydGVkUGFyYW1ldGVyKTtcbiAgICAgICAgcGlubmVkQXJncy5wdXNoKGNvbnZlcnRlZFBhcmFtZXRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udmVydGVkUGFyYW1ldGVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGYoLi4uYXJncykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZXhwb3J0ZWRGdW5jdGlvbiguLi5hcmdzKTtcbiAgICAgIHBpbm5lZEFyZ3MuZm9yRWFjaChhcmcgPT4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX3VucGluKGFyZykpO1xuICAgICAgaWYgKFxuICAgICAgICAhYXNiaW5kSW5zdGFuY2UuaXNBc3luY2lmeU1vZHVsZSB8fFxuICAgICAgICAoYXNiaW5kSW5zdGFuY2UuZXhwb3J0cyBhcyBhbnkpLmFzeW5jaWZ5X2dldF9zdGF0ZSgpID09PSAwXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlQ29udmVydGVyRnVuY3Rpb24oXG4gICAgICAgICAgYXNiaW5kSW5zdGFuY2UsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGV4cG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnJldHVyblR5cGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIChhc2JpbmRJbnN0YW5jZS5sb2FkZWRNb2R1bGUuZXhwb3J0cyBhcyBhbnkpLmFzeW5jaWZ5X3N0b3BfdW53aW5kKCk7XG4gICAgICBsZXQgbG9jYWxBc3luY2lmeVN0YXRlID0gYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdGF0ZTtcbiAgICAgIHJldHVybiBsb2NhbEFzeW5jaWZ5U3RhdGUucHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgbG9jYWxBc3luY2lmeVN0YXRlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUgPSBsb2NhbEFzeW5jaWZ5U3RhdGU7XG4gICAgICAgIChhc2JpbmRJbnN0YW5jZS5sb2FkZWRNb2R1bGUuZXhwb3J0cyBhcyBhbnkpLmFzeW5jaWZ5X3N0YXJ0X3Jld2luZChcbiAgICAgICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0clxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZiguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSguLi5uZXdBcmdzKTtcbiAgfTtcbn1cbiIsIi8vIENsYXNzIGZvciBhc2JpbmQgaW5zdGFuY2VzXG5pbXBvcnQgeyBhc2JpbmRJbnN0YW50aWF0ZSwgYXNiaW5kSW5zdGFudGlhdGVTeW5jIH0gZnJvbSBcIi4vaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGJpbmRJbXBvcnRGdW5jdGlvbiwgYmluZEV4cG9ydEZ1bmN0aW9uIH0gZnJvbSBcIi4vYmluZC1mdW5jdGlvblwiO1xuaW1wb3J0IHtcbiAgVHlwZURlZixcbiAgV2ViQXNzZW1ibHlNb2R1bGVTdHJlYW1pbmcsXG4gIFdlYkFzc2VtYmx5TW9kdWxlU3luYyxcbiAgV2ViQXNzZW1ibHlMb2FkZXJSZXN1bHRcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCB7IEFTVXRpbCB9IGZyb20gXCJAYXNzZW1ibHlzY3JpcHQvbG9hZGVyXCI7XG5cbmNvbnN0IFNFQ1RJT05fTkFNRSA9IFwiYXMtYmluZF9iaW5kaW5nc1wiO1xuXG4vLyBCYXNpY2FsbHkgYSBkZWVwLWNvcHksIGJ1dCBjYW4gYmUgbGltaXRlZCBpbiBsZXZlbHMuXG5mdW5jdGlvbiBjb3B5T2JqZWN0PFQ+KG9iajogVCwgeyBkZXB0aCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSB9ID0ge30pOiBUIHtcbiAgaWYgKGRlcHRoIDw9IDAgfHwgIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChba2V5LCB2YWxdKSA9PiBbXG4gICAgICBrZXksXG4gICAgICBjb3B5T2JqZWN0KHZhbCwgeyBkZXB0aDogZGVwdGggLSAxIH0pXG4gICAgXSlcbiAgKSBhcyBUO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21waWxlU3RyZWFtaW5nKHNvdXJjZTogV2ViQXNzZW1ibHlNb2R1bGVTdHJlYW1pbmcpIHtcbiAgc291cmNlID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHNvdXJjZSk7XG4gIGlmICh0eXBlb2YgUmVzcG9uc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcbiAgICBpZiAoV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZykge1xuICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcoc291cmNlKTtcbiAgICB9XG4gICAgc291cmNlID0gYXdhaXQgc291cmNlLmFycmF5QnVmZmVyKCk7XG4gIH1cblxuICByZXR1cm4gV2ViQXNzZW1ibHkuY29tcGlsZShzb3VyY2UgYXMgQnVmZmVyU291cmNlKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFR5cGVEZXNjcmlwdG9yKG1vZHVsZTogV2ViQXNzZW1ibHkuTW9kdWxlKTogVHlwZURlZiB7XG4gIGNvbnN0IHNlY3Rpb25zID0gV2ViQXNzZW1ibHkuTW9kdWxlLmN1c3RvbVNlY3Rpb25zKG1vZHVsZSwgU0VDVElPTl9OQU1FKTtcbiAgY29uc3Qgc3RyID0gbmV3IFRleHREZWNvZGVyKFwidXRmOFwiKS5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoc2VjdGlvbnNbMF0pKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgRXJyb3IoYENvdWxkbuKAmXQgZGVjb2RlIHR5cGUgZGVzY3JpcHRvcjogJHtlLm1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNiaW5kSW5zdGFuY2Uge1xuICBleHBvcnRzOiBSZWNvcmQ8c3RyaW5nLCBuZXZlcj4gfCBBU1V0aWwgPSB7fTtcbiAgaW1wb3J0T2JqZWN0OiBXZWJBc3NlbWJseS5JbXBvcnRzID0ge307XG4gIHR5cGVEZXNjcmlwdG9yOiBUeXBlRGVmO1xuICBtb2R1bGU6IFdlYkFzc2VtYmx5Lk1vZHVsZTtcbiAgbG9hZGVkTW9kdWxlOiBXZWJBc3NlbWJseUxvYWRlclJlc3VsdDtcbiAgYXN5bmNpZnlTdG9yYWdlU2l6ZTogbnVtYmVyID0gOCAqIDEwMjQ7XG4gIGlzQXN5bmNpZnlNb2R1bGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgYXN5bmNpZnlTdGF0ZTogeyBwdHI6IG51bWJlcjsgdmFsdWU/OiBhbnk7IHByb21pc2U/OiBQcm9taXNlPGFueT4gfTtcblxuICBnZXRUeXBlSWQodHlwZU5hbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlTmFtZSBpbiB0aGlzLnR5cGVEZXNjcmlwdG9yLnR5cGVJZHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVEZXNjcmlwdG9yLnR5cGVJZHNbdHlwZU5hbWVdLmlkO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcihgVW5rbm93biB0eXBlICR7SlNPTi5zdHJpbmdpZnkodHlwZU5hbWUpfWApO1xuICB9XG5cbiAgZ2V0VHlwZVNpemUodHlwZU5hbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlTmFtZSBpbiB0aGlzLnR5cGVEZXNjcmlwdG9yLnR5cGVJZHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVEZXNjcmlwdG9yLnR5cGVJZHNbdHlwZU5hbWVdLmJ5dGVTaXplO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcihgVW5rbm93biB0eXBlICR7SlNPTi5zdHJpbmdpZnkodHlwZU5hbWUpfWApO1xuICB9XG5cbiAgX3ZhbGlkYXRlKCkge1xuICAgIGlmIChcbiAgICAgICFXZWJBc3NlbWJseS5Nb2R1bGUuZXhwb3J0cyh0aGlzLm1vZHVsZSkuZmluZChleHAgPT4gZXhwLm5hbWUgPT09IFwiX19uZXdcIilcbiAgICApIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBcIlRoZSBBc3NlbWJseVNjcmlwdCB3YXNtIG1vZHVsZSB3YXMgbm90IGJ1aWx0IHdpdGggLS1leHBvcnRSdW50aW1lLCB3aGljaCBpcyByZXF1aXJlZC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgV2ViQXNzZW1ibHkuTW9kdWxlLmN1c3RvbVNlY3Rpb25zKHRoaXMubW9kdWxlLCBTRUNUSU9OX05BTUUpLmxlbmd0aCAhPT0gMVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoZSBBc3NlbWJseVNjcmlwdCB3YXNtIG1vZHVsZSB3YXMgbm90IGJ1aWx0IHdpdGggdGhlIGFzLWJpbmQgdHJhbnNmb3JtLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuaXNBc3luY2lmeU1vZHVsZSA9IEJvb2xlYW4oXG4gICAgICBXZWJBc3NlbWJseS5Nb2R1bGUuZXhwb3J0cyh0aGlzLm1vZHVsZSkuZmluZChcbiAgICAgICAgZXhwID0+IGV4cC5uYW1lID09PSBcImFzeW5jaWZ5X3N0YXJ0X3Vud2luZFwiXG4gICAgICApXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5pc0FzeW5jaWZ5TW9kdWxlKSB7XG4gICAgICAvLyBJZiB0aGlzIG1vZHVsZSB3YXNu4oCZdCBidWlsdCB3aXRoIEF5bmNpZnksIHdlIG1vY2tcbiAgICAgIC8vIHRoZSBhc3luY2lmeSBzdGF0ZSBmdW5jdGlvbiB0byByZXR1cm4gdGhhdCB3ZSBhcmUgaW4g4oCcbm9ybWFs4oCdIG1vZGUuXG4gICAgICAodGhpcy5leHBvcnRzIGFzIGFueSkuYXN5bmNpZnlfZ2V0X3N0YXRlID0gKCkgPT4gMDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfaW5zdGFudGlhdGUoXG4gICAgc291cmNlOiBXZWJBc3NlbWJseU1vZHVsZVN0cmVhbWluZyxcbiAgICBpbXBvcnRPYmplY3Q6IFdlYkFzc2VtYmx5LkltcG9ydHNcbiAgKSB7XG4gICAgdGhpcy5tb2R1bGUgPSBhd2FpdCBjb21waWxlU3RyZWFtaW5nKHNvdXJjZSk7XG5cbiAgICB0aGlzLl92YWxpZGF0ZSgpO1xuICAgIHRoaXMudHlwZURlc2NyaXB0b3IgPSBleHRyYWN0VHlwZURlc2NyaXB0b3IodGhpcy5tb2R1bGUpO1xuICAgIHRoaXMuX2luc3RhbnRpYXRlQmluZEltcG9ydEZ1bmN0aW9ucyhpbXBvcnRPYmplY3QpO1xuICAgIC8vIEluc3RhbnRpYXRlIHRoZSBtb2R1bGUgdGhyb3VnaCB0aGUgbG9hZGVyXG4gICAgdGhpcy5sb2FkZWRNb2R1bGUgPSBhd2FpdCBhc2JpbmRJbnN0YW50aWF0ZSh0aGlzLm1vZHVsZSwgdGhpcy5pbXBvcnRPYmplY3QpO1xuICAgIHRoaXMuX2luc3RhbnRpYXRlQmluZFVuYm91bmRFeHBvcnRzKCk7XG4gIH1cblxuICBfaW5zdGFudGlhdGVTeW5jKFxuICAgIHNvdXJjZTogV2ViQXNzZW1ibHlNb2R1bGVTeW5jLFxuICAgIGltcG9ydE9iamVjdDogV2ViQXNzZW1ibHkuSW1wb3J0c1xuICApIHtcbiAgICB0aGlzLm1vZHVsZSA9IG5ldyBXZWJBc3NlbWJseS5Nb2R1bGUoc291cmNlKTtcblxuICAgIHRoaXMuX3ZhbGlkYXRlKCk7XG4gICAgdGhpcy50eXBlRGVzY3JpcHRvciA9IGV4dHJhY3RUeXBlRGVzY3JpcHRvcih0aGlzLm1vZHVsZSk7XG4gICAgdGhpcy5faW5zdGFudGlhdGVCaW5kSW1wb3J0RnVuY3Rpb25zKGltcG9ydE9iamVjdCk7XG4gICAgdGhpcy5sb2FkZWRNb2R1bGUgPSBhc2JpbmRJbnN0YW50aWF0ZVN5bmModGhpcy5tb2R1bGUsIHRoaXMuaW1wb3J0T2JqZWN0KTtcbiAgICB0aGlzLl9pbnN0YW50aWF0ZUJpbmRVbmJvdW5kRXhwb3J0cygpO1xuICB9XG5cbiAgX2luc3RhbnRpYXRlQmluZEltcG9ydEZ1bmN0aW9ucyhpbXBvcnRPYmplY3Q6IFdlYkFzc2VtYmx5LkltcG9ydHMpIHtcbiAgICB0aGlzLmltcG9ydE9iamVjdCA9IGNvcHlPYmplY3QoaW1wb3J0T2JqZWN0LCB7IGRlcHRoOiAyIH0pO1xuXG4gICAgZm9yIChjb25zdCBbbW9kdWxlTmFtZSwgbW9kdWxlRGVzY3JpcHRvcl0gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICB0aGlzLnR5cGVEZXNjcmlwdG9yLmltcG9ydGVkRnVuY3Rpb25zXG4gICAgKSkge1xuICAgICAgZm9yIChjb25zdCBbaW1wb3J0ZWRGdW5jdGlvbk5hbWUsIGRlc2NyaXB0b3JdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgICBtb2R1bGVEZXNjcmlwdG9yXG4gICAgICApKSB7XG4gICAgICAgIHRoaXMuaW1wb3J0T2JqZWN0W21vZHVsZU5hbWVdW1xuICAgICAgICAgIGBfX2FzYmluZF91bmJvdW5kXyR7aW1wb3J0ZWRGdW5jdGlvbk5hbWV9YFxuICAgICAgICBdID0gaW1wb3J0T2JqZWN0W21vZHVsZU5hbWVdW2ltcG9ydGVkRnVuY3Rpb25OYW1lXTtcbiAgICAgICAgdGhpcy5pbXBvcnRPYmplY3RbbW9kdWxlTmFtZV1baW1wb3J0ZWRGdW5jdGlvbk5hbWVdID1cbiAgICAgICAgICBiaW5kSW1wb3J0RnVuY3Rpb24oXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgaW1wb3J0T2JqZWN0W21vZHVsZU5hbWVdW2ltcG9ydGVkRnVuY3Rpb25OYW1lXSBhcyBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlc2NyaXB0b3JcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbnN0YW50aWF0ZUJpbmRVbmJvdW5kRXhwb3J0cygpIHtcbiAgICAvLyBXcmFwIGFwcHJvcHJpYXRlIHRoZSBhcHByb3ByaWF0ZSBleHBvcnQgZnVuY3Rpb25zXG4gICAgY29uc3QgdW5ib3VuZEV4cG9ydHMgPSB0aGlzLmxvYWRlZE1vZHVsZS5leHBvcnRzO1xuICAgIHRoaXMuZXhwb3J0cyA9IGNvcHlPYmplY3QodW5ib3VuZEV4cG9ydHMsIHsgZGVwdGg6IDEgfSk7XG5cbiAgICBmb3IgKGNvbnN0IFtleHBvcnRlZEZ1bmN0aW9uTmFtZSwgZGVzY3JpcHRvcl0gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICB0aGlzLnR5cGVEZXNjcmlwdG9yLmV4cG9ydGVkRnVuY3Rpb25zXG4gICAgKSkge1xuICAgICAgdGhpcy5leHBvcnRzW2V4cG9ydGVkRnVuY3Rpb25OYW1lXSA9IGJpbmRFeHBvcnRGdW5jdGlvbihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdW5ib3VuZEV4cG9ydHNbZXhwb3J0ZWRGdW5jdGlvbk5hbWVdLFxuICAgICAgICBkZXNjcmlwdG9yXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVyc2lvbiBhcyBwYWNrVmVyc2lvbiB9IGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcbmltcG9ydCBBc2JpbmRJbnN0YW5jZSBmcm9tIFwiLi9hc2JpbmQtaW5zdGFuY2UvYXNiaW5kLWluc3RhbmNlXCI7XG5leHBvcnQgeyBjb252ZXJ0ZXJzIH0gZnJvbSBcIi4vYXNiaW5kLWluc3RhbmNlL3R5cGUtY29udmVydGVyc1wiO1xuXG5pbXBvcnQgeyBXZWJBc3NlbWJseU1vZHVsZVN0cmVhbWluZywgV2ViQXNzZW1ibHlNb2R1bGVTeW5jIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHZlcnNpb246IHN0cmluZyA9IHBhY2tWZXJzaW9uO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFudGlhdGUoXG4gIHNvdXJjZTogV2ViQXNzZW1ibHlNb2R1bGVTdHJlYW1pbmcsXG4gIGltcG9ydE9iamVjdDogV2ViQXNzZW1ibHkuSW1wb3J0c1xuKSB7XG4gIGxldCBhc2JpbmRJbnN0YW5jZSA9IG5ldyBBc2JpbmRJbnN0YW5jZSgpO1xuICBhd2FpdCBhc2JpbmRJbnN0YW5jZS5faW5zdGFudGlhdGUoc291cmNlLCBpbXBvcnRPYmplY3QpO1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZVN5bmMoXG4gIHNvdXJjZTogV2ViQXNzZW1ibHlNb2R1bGVTeW5jLFxuICBpbXBvcnRPYmplY3Q6IFdlYkFzc2VtYmx5LkltcG9ydHNcbikge1xuICBsZXQgYXNiaW5kSW5zdGFuY2UgPSBuZXcgQXNiaW5kSW5zdGFuY2UoKTtcbiAgYXNiaW5kSW5zdGFuY2UuX2luc3RhbnRpYXRlU3luYyhzb3VyY2UsIGltcG9ydE9iamVjdCk7XG4gIHJldHVybiBhc2JpbmRJbnN0YW5jZTtcbn1cbiJdLCJuYW1lcyI6WyJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJfX3ZhbHVlcyIsIm8iLCJzIiwibSIsImkiLCJfX3JlYWQiLCJyIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwiYXJndW1lbnRzIiwibCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25jYXQiLCJJRF9PRkZTRVQiLCJTSVpFX09GRlNFVCIsIkFSUkFZQlVGRkVSX0lEIiwiU1RSSU5HX0lEIiwiQVJSQVlCVUZGRVJWSUVXIiwiQVJSQVkiLCJTVEFUSUNBUlJBWSIsIlZBTF9BTElHTl9PRkZTRVQiLCJWQUxfU0lHTkVEIiwiVkFMX0ZMT0FUIiwiVkFMX01BTkFHRUQiLCJBUlJBWUJVRkZFUlZJRVdfQlVGRkVSX09GRlNFVCIsIkFSUkFZQlVGRkVSVklFV19EQVRBU1RBUlRfT0ZGU0VUIiwiQVJSQVlCVUZGRVJWSUVXX0RBVEFMRU5HVEhfT0ZGU0VUIiwiQVJSQVlCVUZGRVJWSUVXX1NJWkUiLCJBUlJBWV9MRU5HVEhfT0ZGU0VUIiwiQVJSQVlfU0laRSIsIkJJR0lOVCIsIkJpZ1VpbnQ2NEFycmF5IiwiVEhJUyIsIlNUUklOR19TTUFMTFNJWkUiLCJTVFJJTkdfQ0hVTktTSVpFIiwidXRmMTYiLCJUZXh0RGVjb2RlciIsImZhdGFsIiwiZ2V0U3RyaW5nSW1wbCIsImJ1ZmZlciIsInB0ciIsImxlbiIsIlVpbnQzMkFycmF5Iiwid3RmMTYiLCJVaW50MTZBcnJheSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImRlY29kZSIsInN0ciIsIm9mZiIsInN1YmFycmF5IiwicHJlSW5zdGFudGlhdGUiLCJpbXBvcnRzIiwiZXh0ZW5kZWRFeHBvcnRzIiwiZ2V0U3RyaW5nIiwibWVtb3J5IiwiZW52IiwiYWJvcnQiLCJtc2ciLCJmaWxlIiwibGluZSIsImNvbG0iLCJFcnJvciIsInRyYWNlIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwic2VlZCIsIkRhdGUiLCJub3ciLCJNYXRoIiwiRV9OT0VYUE9SVFJVTlRJTUUiLCJGX05PRVhQT1JUUlVOVElNRSIsInBvc3RJbnN0YW50aWF0ZSIsImluc3RhbmNlIiwiZXhwb3J0cyIsInRhYmxlIiwiX19uZXciLCJfX3BpbiIsIl9fdW5waW4iLCJfX2NvbGxlY3QiLCJfX3J0dGlfYmFzZSIsImdldFJ0dGlDb3VudCIsImFyciIsImdldEluZm8iLCJpZCIsIlUzMiIsImNvdW50IiwiZ2V0QXJyYXlJbmZvIiwiaW5mbyIsImdldEJhc2UiLCJnZXRWYWx1ZUFsaWduIiwiY2x6MzIiLCJfX25ld1N0cmluZyIsIlUxNiIsInAiLCJjaGFyQ29kZUF0IiwiX19uZXdBcnJheUJ1ZmZlciIsImJ1ZiIsImJ1ZnZpZXciLCJVaW50OEFycmF5IiwiVTgiLCJzZXQiLCJfX2dldFN0cmluZyIsImdldFZpZXciLCJhbGlnbkxvZzIiLCJzaWduZWQiLCJmbG9hdCIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiQmlnSW50NjRBcnJheSIsIl9fbmV3QXJyYXkiLCJ2YWx1ZXMiLCJhbGlnbiIsInZpZXciLCJfX2dldEFycmF5VmlldyIsIl9fZ2V0QXJyYXkiLCJpbnB1dCIsIm91dCIsIl9fZ2V0QXJyYXlCdWZmZXIiLCJnZXRUeXBlZEFycmF5IiwiVHlwZSIsImdldFR5cGVkQXJyYXlWaWV3IiwiYnVmUHRyIiwiYXR0YWNoVHlwZWRBcnJheUZ1bmN0aW9ucyIsImN0b3IiLCJuYW1lIiwiYmluZCIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiZm9yRWFjaCIsIkJZVEVTX1BFUl9FTEVNRU5UIiwiX19pbnN0YW5jZW9mIiwiYmFzZUlkIiwiZGVtYW5nbGUiLCJpc1Jlc3BvbnNlIiwic3JjIiwiUmVzcG9uc2UiLCJpc01vZHVsZSIsIldlYkFzc2VtYmx5IiwiTW9kdWxlIiwiaW5zdGFudGlhdGUiLCJzb3VyY2UiLCJpbnN0YW50aWF0ZVN0cmVhbWluZyIsIm1vZHVsZSIsImNvbXBpbGUiLCJleHRlbmRlZCIsImluc3RhbnRpYXRlU3luYyIsIkluc3RhbmNlIiwiYXJyYXlCdWZmZXIiLCJzZXRBcmd1bWVudHNMZW5ndGgiLCJpbnRlcm5hbE5hbWUiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImVsZW0iLCJwYXJ0cyIsInNwbGl0IiwiY3VyciIsInBhcnQiLCJzaGlmdCIsImhhc2giLCJpbmRleE9mIiwiY2xhc3NOYW1lIiwic3Vic3RyaW5nIiwiY2xhc3NFbGVtIiwid3JhcCIsImNvbnN0cnVjdG9yIiwidmFsdWVPZiIsInRoaXNWYWx1ZSIsImNyZWF0ZSIsIndyaXRhYmxlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidGVzdCIsImdldHRlciIsInJlcGxhY2UiLCJzZXR0ZXIiLCJnZXQiLCJlbnVtZXJhYmxlIiwib3JpZ2luYWwiLCJwYWNrVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3RE8sU0FBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLFVBQTVCLEVBQXdDQyxDQUF4QyxFQUEyQ0MsU0FBM0MsRUFBc0Q7QUFDekQsV0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsV0FBT0EsS0FBSyxZQUFZSCxDQUFqQixHQUFxQkcsS0FBckIsR0FBNkIsSUFBSUgsQ0FBSixDQUFNLFVBQVVJLE9BQVYsRUFBbUI7QUFBRUEsTUFBQUEsT0FBTyxDQUFDRCxLQUFELENBQVA7QUFBaUIsS0FBNUMsQ0FBcEM7QUFBb0Y7O0FBQzVHLFNBQU8sS0FBS0gsQ0FBQyxLQUFLQSxDQUFDLEdBQUdLLE9BQVQsQ0FBTixFQUF5QixVQUFVRCxPQUFWLEVBQW1CRSxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CSixLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUNRLElBQVYsQ0FBZU4sS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBT08sQ0FB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
