var AsBindIIFE = (function (exports) {
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
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
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
    const module = isModule(source)
      ? source
      : await WebAssembly.compile(source);
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
      if (!Object.prototype.hasOwnProperty.call(exports, internalName))
        continue;
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
      asbindInstance.loadedModule.exports.__pin(
        asbindInstance.asyncifyState.ptr
      );
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
            if (
              !(typeof Response !== "undefined" && source instanceof Response)
            )
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
        WebAssembly.Module.customSections(this.module, SECTION_NAME).length !==
        1
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
    AsbindInstance.prototype._instantiateSync = function (
      source,
      importObject
    ) {
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

  Object.defineProperty(exports, "__esModule", { value: true });

  return exports;
})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXMtYmluZC5paWZlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Bhc3NlbWJseXNjcmlwdC9sb2FkZXIvaW5kZXguanMiLCIuLi9saWIvYXNiaW5kLWluc3RhbmNlL2luc3RhbnRpYXRlLnRzIiwiLi4vbGliL2FzYmluZC1pbnN0YW5jZS90eXBlLWNvbnZlcnRlcnMudHMiLCIuLi9saWIvYXNiaW5kLWluc3RhbmNlL2JpbmQtZnVuY3Rpb24udHMiLCIuLi9saWIvYXNiaW5kLWluc3RhbmNlL2FzYmluZC1pbnN0YW5jZS50cyIsIi4uL2xpYi9saWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvLyBSdW50aW1lIGhlYWRlciBvZmZzZXRzXG5jb25zdCBJRF9PRkZTRVQgPSAtODtcbmNvbnN0IFNJWkVfT0ZGU0VUID0gLTQ7XG5cbi8vIFJ1bnRpbWUgaWRzXG5jb25zdCBBUlJBWUJVRkZFUl9JRCA9IDA7XG5jb25zdCBTVFJJTkdfSUQgPSAxO1xuLy8gY29uc3QgQVJSQVlCVUZGRVJWSUVXX0lEID0gMjtcblxuLy8gUnVudGltZSB0eXBlIGluZm9ybWF0aW9uXG5jb25zdCBBUlJBWUJVRkZFUlZJRVcgPSAxIDw8IDA7XG5jb25zdCBBUlJBWSA9IDEgPDwgMTtcbmNvbnN0IFNUQVRJQ0FSUkFZID0gMSA8PCAyO1xuLy8gY29uc3QgU0VUID0gMSA8PCAzO1xuLy8gY29uc3QgTUFQID0gMSA8PCA0O1xuY29uc3QgVkFMX0FMSUdOX09GRlNFVCA9IDY7XG4vLyBjb25zdCBWQUxfQUxJR04gPSAxIDw8IFZBTF9BTElHTl9PRkZTRVQ7XG5jb25zdCBWQUxfU0lHTkVEID0gMSA8PCAxMTtcbmNvbnN0IFZBTF9GTE9BVCA9IDEgPDwgMTI7XG4vLyBjb25zdCBWQUxfTlVMTEFCTEUgPSAxIDw8IDEzO1xuY29uc3QgVkFMX01BTkFHRUQgPSAxIDw8IDE0O1xuLy8gY29uc3QgS0VZX0FMSUdOX09GRlNFVCA9IDE1O1xuLy8gY29uc3QgS0VZX0FMSUdOID0gMSA8PCBLRVlfQUxJR05fT0ZGU0VUO1xuLy8gY29uc3QgS0VZX1NJR05FRCA9IDEgPDwgMjA7XG4vLyBjb25zdCBLRVlfRkxPQVQgPSAxIDw8IDIxO1xuLy8gY29uc3QgS0VZX05VTExBQkxFID0gMSA8PCAyMjtcbi8vIGNvbnN0IEtFWV9NQU5BR0VEID0gMSA8PCAyMztcblxuLy8gQXJyYXkoQnVmZmVyVmlldykgbGF5b3V0XG5jb25zdCBBUlJBWUJVRkZFUlZJRVdfQlVGRkVSX09GRlNFVCA9IDA7XG5jb25zdCBBUlJBWUJVRkZFUlZJRVdfREFUQVNUQVJUX09GRlNFVCA9IDQ7XG5jb25zdCBBUlJBWUJVRkZFUlZJRVdfREFUQUxFTkdUSF9PRkZTRVQgPSA4O1xuY29uc3QgQVJSQVlCVUZGRVJWSUVXX1NJWkUgPSAxMjtcbmNvbnN0IEFSUkFZX0xFTkdUSF9PRkZTRVQgPSAxMjtcbmNvbnN0IEFSUkFZX1NJWkUgPSAxNjtcblxuY29uc3QgQklHSU5UID0gdHlwZW9mIEJpZ1VpbnQ2NEFycmF5ICE9PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgVEhJUyA9IFN5bWJvbCgpO1xuXG5jb25zdCBTVFJJTkdfU01BTExTSVpFID0gMTkyOyAvLyBicmVhay1ldmVuIHBvaW50IGluIFY4XG5jb25zdCBTVFJJTkdfQ0hVTktTSVpFID0gMTAyNDsgLy8gbWl0aWdhdGUgc3RhY2sgb3ZlcmZsb3dcbmNvbnN0IHV0ZjE2ID0gbmV3IFRleHREZWNvZGVyKFwidXRmLTE2bGVcIiwgeyBmYXRhbDogdHJ1ZSB9KTsgLy8gIT0gd3RmMTZcblxuLyoqIEdldHMgYSBzdHJpbmcgZnJvbSBtZW1vcnkuICovXG5mdW5jdGlvbiBnZXRTdHJpbmdJbXBsKGJ1ZmZlciwgcHRyKSB7XG4gIGxldCBsZW4gPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKVtwdHIgKyBTSVpFX09GRlNFVCA+Pj4gMl0gPj4+IDE7XG4gIGNvbnN0IHd0ZjE2ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlciwgcHRyLCBsZW4pO1xuICBpZiAobGVuIDw9IFNUUklOR19TTUFMTFNJWkUpIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnd0ZjE2KTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdXRmMTYuZGVjb2RlKHd0ZjE2KTtcbiAgfSBjYXRjaCB7XG4gICAgbGV0IHN0ciA9IFwiXCIsIG9mZiA9IDA7XG4gICAgd2hpbGUgKGxlbiAtIG9mZiA+IFNUUklOR19DSFVOS1NJWkUpIHtcbiAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnd0ZjE2LnN1YmFycmF5KG9mZiwgb2ZmICs9IFNUUklOR19DSFVOS1NJWkUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ciArIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ud3RmMTYuc3ViYXJyYXkob2ZmKSk7XG4gIH1cbn1cblxuLyoqIFByZXBhcmVzIHRoZSBiYXNlIG1vZHVsZSBwcmlvciB0byBpbnN0YW50aWF0aW9uLiAqL1xuZnVuY3Rpb24gcHJlSW5zdGFudGlhdGUoaW1wb3J0cykge1xuICBjb25zdCBleHRlbmRlZEV4cG9ydHMgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRTdHJpbmcobWVtb3J5LCBwdHIpIHtcbiAgICBpZiAoIW1lbW9yeSkgcmV0dXJuIFwiPHlldCB1bmtub3duPlwiO1xuICAgIHJldHVybiBnZXRTdHJpbmdJbXBsKG1lbW9yeS5idWZmZXIsIHB0cik7XG4gIH1cblxuICAvLyBhZGQgY29tbW9uIGltcG9ydHMgdXNlZCBieSBzdGRsaWIgZm9yIGNvbnZlbmllbmNlXG4gIGNvbnN0IGVudiA9IChpbXBvcnRzLmVudiA9IGltcG9ydHMuZW52IHx8IHt9KTtcbiAgZW52LmFib3J0ID0gZW52LmFib3J0IHx8IGZ1bmN0aW9uIGFib3J0KG1zZywgZmlsZSwgbGluZSwgY29sbSkge1xuICAgIGNvbnN0IG1lbW9yeSA9IGV4dGVuZGVkRXhwb3J0cy5tZW1vcnkgfHwgZW52Lm1lbW9yeTsgLy8gcHJlZmVyIGV4cG9ydGVkLCBvdGhlcndpc2UgdHJ5IGltcG9ydGVkXG4gICAgdGhyb3cgRXJyb3IoYGFib3J0OiAke2dldFN0cmluZyhtZW1vcnksIG1zZyl9IGF0ICR7Z2V0U3RyaW5nKG1lbW9yeSwgZmlsZSl9OiR7bGluZX06JHtjb2xtfWApO1xuICB9O1xuICBlbnYudHJhY2UgPSBlbnYudHJhY2UgfHwgZnVuY3Rpb24gdHJhY2UobXNnLCBuLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgbWVtb3J5ID0gZXh0ZW5kZWRFeHBvcnRzLm1lbW9yeSB8fCBlbnYubWVtb3J5O1xuICAgIGNvbnNvbGUubG9nKGB0cmFjZTogJHtnZXRTdHJpbmcobWVtb3J5LCBtc2cpfSR7biA/IFwiIFwiIDogXCJcIn0ke2FyZ3Muc2xpY2UoMCwgbikuam9pbihcIiwgXCIpfWApO1xuICB9O1xuICBlbnYuc2VlZCA9IGVudi5zZWVkIHx8IERhdGUubm93O1xuICBpbXBvcnRzLk1hdGggPSBpbXBvcnRzLk1hdGggfHwgTWF0aDtcbiAgaW1wb3J0cy5EYXRlID0gaW1wb3J0cy5EYXRlIHx8IERhdGU7XG5cbiAgcmV0dXJuIGV4dGVuZGVkRXhwb3J0cztcbn1cblxuY29uc3QgRV9OT0VYUE9SVFJVTlRJTUUgPSBcIk9wZXJhdGlvbiByZXF1aXJlcyBjb21waWxpbmcgd2l0aCAtLWV4cG9ydFJ1bnRpbWVcIjtcbmNvbnN0IEZfTk9FWFBPUlRSVU5USU1FID0gZnVuY3Rpb24oKSB7IHRocm93IEVycm9yKEVfTk9FWFBPUlRSVU5USU1FKTsgfTtcblxuLyoqIFByZXBhcmVzIHRoZSBmaW5hbCBtb2R1bGUgb25jZSBpbnN0YW50aWF0aW9uIGlzIGNvbXBsZXRlLiAqL1xuZnVuY3Rpb24gcG9zdEluc3RhbnRpYXRlKGV4dGVuZGVkRXhwb3J0cywgaW5zdGFuY2UpIHtcbiAgY29uc3QgZXhwb3J0cyA9IGluc3RhbmNlLmV4cG9ydHM7XG4gIGNvbnN0IG1lbW9yeSA9IGV4cG9ydHMubWVtb3J5O1xuICBjb25zdCB0YWJsZSA9IGV4cG9ydHMudGFibGU7XG4gIGNvbnN0IF9fbmV3ID0gZXhwb3J0cy5fX25ldyB8fCBGX05PRVhQT1JUUlVOVElNRTtcbiAgY29uc3QgX19waW4gPSBleHBvcnRzLl9fcGluIHx8IEZfTk9FWFBPUlRSVU5USU1FO1xuICBjb25zdCBfX3VucGluID0gZXhwb3J0cy5fX3VucGluIHx8IEZfTk9FWFBPUlRSVU5USU1FO1xuICBjb25zdCBfX2NvbGxlY3QgPSBleHBvcnRzLl9fY29sbGVjdCB8fCBGX05PRVhQT1JUUlVOVElNRTtcbiAgY29uc3QgX19ydHRpX2Jhc2UgPSBleHBvcnRzLl9fcnR0aV9iYXNlO1xuICBjb25zdCBnZXRSdHRpQ291bnQgPSBfX3J0dGlfYmFzZVxuICAgID8gZnVuY3Rpb24gKGFycikgeyByZXR1cm4gYXJyW19fcnR0aV9iYXNlID4+PiAyXTsgfVxuICAgIDogRl9OT0VYUE9SVFJVTlRJTUU7XG5cbiAgZXh0ZW5kZWRFeHBvcnRzLl9fbmV3ID0gX19uZXc7XG4gIGV4dGVuZGVkRXhwb3J0cy5fX3BpbiA9IF9fcGluO1xuICBleHRlbmRlZEV4cG9ydHMuX191bnBpbiA9IF9fdW5waW47XG4gIGV4dGVuZGVkRXhwb3J0cy5fX2NvbGxlY3QgPSBfX2NvbGxlY3Q7XG5cbiAgLyoqIEdldHMgdGhlIHJ1bnRpbWUgdHlwZSBpbmZvIGZvciB0aGUgZ2l2ZW4gaWQuICovXG4gIGZ1bmN0aW9uIGdldEluZm8oaWQpIHtcbiAgICBjb25zdCBVMzIgPSBuZXcgVWludDMyQXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgY29uc3QgY291bnQgPSBnZXRSdHRpQ291bnQoVTMyKTtcbiAgICBpZiAoKGlkID4+Pj0gMCkgPj0gY291bnQpIHRocm93IEVycm9yKGBpbnZhbGlkIGlkOiAke2lkfWApO1xuICAgIHJldHVybiBVMzJbKF9fcnR0aV9iYXNlICsgNCA+Pj4gMikgKyBpZCAqIDJdO1xuICB9XG5cbiAgLyoqIEdldHMgYW5kIHZhbGlkYXRlIHJ1bnRpbWUgdHlwZSBpbmZvIGZvciB0aGUgZ2l2ZW4gaWQgZm9yIGFycmF5IGxpa2Ugb2JqZWN0cyAqL1xuICBmdW5jdGlvbiBnZXRBcnJheUluZm8oaWQpIHtcbiAgICBjb25zdCBpbmZvID0gZ2V0SW5mbyhpZCk7XG4gICAgaWYgKCEoaW5mbyAmIChBUlJBWUJVRkZFUlZJRVcgfCBBUlJBWSB8IFNUQVRJQ0FSUkFZKSkpIHRocm93IEVycm9yKGBub3QgYW4gYXJyYXk6ICR7aWR9LCBmbGFncz0ke2luZm99YCk7XG4gICAgcmV0dXJuIGluZm87XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcnVudGltZSBiYXNlIGlkIGZvciB0aGUgZ2l2ZW4gaWQuICovXG4gIGZ1bmN0aW9uIGdldEJhc2UoaWQpIHtcbiAgICBjb25zdCBVMzIgPSBuZXcgVWludDMyQXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgY29uc3QgY291bnQgPSBnZXRSdHRpQ291bnQoVTMyKTtcbiAgICBpZiAoKGlkID4+Pj0gMCkgPj0gY291bnQpIHRocm93IEVycm9yKGBpbnZhbGlkIGlkOiAke2lkfWApO1xuICAgIHJldHVybiBVMzJbKF9fcnR0aV9iYXNlICsgNCA+Pj4gMikgKyBpZCAqIDIgKyAxXTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBydW50aW1lIGFsaWdubWVudCBvZiBhIGNvbGxlY3Rpb24ncyB2YWx1ZXMuICovXG4gIGZ1bmN0aW9uIGdldFZhbHVlQWxpZ24oaW5mbykge1xuICAgIHJldHVybiAzMSAtIE1hdGguY2x6MzIoKGluZm8gPj4+IFZBTF9BTElHTl9PRkZTRVQpICYgMzEpOyAvLyAtMSBpZiBub25lXG4gIH1cblxuICAvKiogR2V0cyB0aGUgcnVudGltZSBhbGlnbm1lbnQgb2YgYSBjb2xsZWN0aW9uJ3Mga2V5cy4gKi9cbiAgLy8gZnVuY3Rpb24gZ2V0S2V5QWxpZ24oaW5mbykge1xuICAvLyAgIHJldHVybiAzMSAtIE1hdGguY2x6MzIoKGluZm8gPj4+IEtFWV9BTElHTl9PRkZTRVQpICYgMzEpOyAvLyAtMSBpZiBub25lXG4gIC8vIH1cblxuICAvKiogQWxsb2NhdGVzIGEgbmV3IHN0cmluZyBpbiB0aGUgbW9kdWxlJ3MgbWVtb3J5IGFuZCByZXR1cm5zIGl0cyBwb2ludGVyLiAqL1xuICBmdW5jdGlvbiBfX25ld1N0cmluZyhzdHIpIHtcbiAgICBpZiAoc3RyID09IG51bGwpIHJldHVybiAwO1xuICAgIGNvbnN0IGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgY29uc3QgcHRyID0gX19uZXcobGVuZ3RoIDw8IDEsIFNUUklOR19JRCk7XG4gICAgY29uc3QgVTE2ID0gbmV3IFVpbnQxNkFycmF5KG1lbW9yeS5idWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwLCBwID0gcHRyID4+PiAxOyBpIDwgbGVuZ3RoOyArK2kpIFUxNltwICsgaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gcHRyO1xuICB9XG5cbiAgZXh0ZW5kZWRFeHBvcnRzLl9fbmV3U3RyaW5nID0gX19uZXdTdHJpbmc7XG5cbiAgLyoqIEFsbG9jYXRlcyBhIG5ldyBBcnJheUJ1ZmZlciBpbiB0aGUgbW9kdWxlJ3MgbWVtb3J5IGFuZCByZXR1cm5zIGl0cyBwb2ludGVyLiAqL1xuICBmdW5jdGlvbiBfX25ld0FycmF5QnVmZmVyKGJ1Zikge1xuICAgIGlmIChidWYgPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgY29uc3QgYnVmdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgY29uc3QgcHRyID0gX19uZXcoYnVmdmlldy5sZW5ndGgsIEFSUkFZQlVGRkVSX0lEKTtcbiAgICBjb25zdCBVOCA9IG5ldyBVaW50OEFycmF5KG1lbW9yeS5idWZmZXIpO1xuICAgIFU4LnNldChidWZ2aWV3LCBwdHIpO1xuICAgIHJldHVybiBwdHI7XG4gIH1cblxuICBleHRlbmRlZEV4cG9ydHMuX19uZXdBcnJheUJ1ZmZlciA9IF9fbmV3QXJyYXlCdWZmZXI7XG5cbiAgLyoqIFJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIG1vZHVsZSdzIG1lbW9yeSBieSBpdHMgcG9pbnRlci4gKi9cbiAgZnVuY3Rpb24gX19nZXRTdHJpbmcocHRyKSB7XG4gICAgaWYgKCFwdHIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGJ1ZmZlciA9IG1lbW9yeS5idWZmZXI7XG4gICAgY29uc3QgaWQgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKVtwdHIgKyBJRF9PRkZTRVQgPj4+IDJdO1xuICAgIGlmIChpZCAhPT0gU1RSSU5HX0lEKSB0aHJvdyBFcnJvcihgbm90IGEgc3RyaW5nOiAke3B0cn1gKTtcbiAgICByZXR1cm4gZ2V0U3RyaW5nSW1wbChidWZmZXIsIHB0cik7XG4gIH1cblxuICBleHRlbmRlZEV4cG9ydHMuX19nZXRTdHJpbmcgPSBfX2dldFN0cmluZztcblxuICAvKiogR2V0cyB0aGUgdmlldyBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIGFsaWdubWVudCwgc2lnbmVkbmVzcyBhbmQgZmxvYXRuZXNzLiAqL1xuICBmdW5jdGlvbiBnZXRWaWV3KGFsaWduTG9nMiwgc2lnbmVkLCBmbG9hdCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IG1lbW9yeS5idWZmZXI7XG4gICAgaWYgKGZsb2F0KSB7XG4gICAgICBzd2l0Y2ggKGFsaWduTG9nMikge1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkoYnVmZmVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChhbGlnbkxvZzIpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IChzaWduZWQgPyBJbnQ4QXJyYXkgOiBVaW50OEFycmF5KShidWZmZXIpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgKHNpZ25lZCA/IEludDE2QXJyYXkgOiBVaW50MTZBcnJheSkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IChzaWduZWQgPyBJbnQzMkFycmF5IDogVWludDMyQXJyYXkpKGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyAoc2lnbmVkID8gQmlnSW50NjRBcnJheSA6IEJpZ1VpbnQ2NEFycmF5KShidWZmZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBFcnJvcihgdW5zdXBwb3J0ZWQgYWxpZ246ICR7YWxpZ25Mb2cyfWApO1xuICB9XG5cbiAgLyoqIEFsbG9jYXRlcyBhIG5ldyBhcnJheSBpbiB0aGUgbW9kdWxlJ3MgbWVtb3J5IGFuZCByZXR1cm5zIGl0cyBwb2ludGVyLiAqL1xuICBmdW5jdGlvbiBfX25ld0FycmF5KGlkLCB2YWx1ZXMpIHtcbiAgICBjb25zdCBpbmZvID0gZ2V0QXJyYXlJbmZvKGlkKTtcbiAgICBjb25zdCBhbGlnbiA9IGdldFZhbHVlQWxpZ24oaW5mbyk7XG4gICAgY29uc3QgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICBjb25zdCBidWYgPSBfX25ldyhsZW5ndGggPDwgYWxpZ24sIGluZm8gJiBTVEFUSUNBUlJBWSA/IGlkIDogQVJSQVlCVUZGRVJfSUQpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKGluZm8gJiBTVEFUSUNBUlJBWSkge1xuICAgICAgcmVzdWx0ID0gYnVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBfX3BpbihidWYpO1xuICAgICAgY29uc3QgYXJyID0gX19uZXcoaW5mbyAmIEFSUkFZID8gQVJSQVlfU0laRSA6IEFSUkFZQlVGRkVSVklFV19TSVpFLCBpZCk7XG4gICAgICBfX3VucGluKGJ1Zik7XG4gICAgICBjb25zdCBVMzIgPSBuZXcgVWludDMyQXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgICBVMzJbYXJyICsgQVJSQVlCVUZGRVJWSUVXX0JVRkZFUl9PRkZTRVQgPj4+IDJdID0gYnVmO1xuICAgICAgVTMyW2FyciArIEFSUkFZQlVGRkVSVklFV19EQVRBU1RBUlRfT0ZGU0VUID4+PiAyXSA9IGJ1ZjtcbiAgICAgIFUzMlthcnIgKyBBUlJBWUJVRkZFUlZJRVdfREFUQUxFTkdUSF9PRkZTRVQgPj4+IDJdID0gbGVuZ3RoIDw8IGFsaWduO1xuICAgICAgaWYgKGluZm8gJiBBUlJBWSkgVTMyW2FyciArIEFSUkFZX0xFTkdUSF9PRkZTRVQgPj4+IDJdID0gbGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gYXJyO1xuICAgIH1cbiAgICBjb25zdCB2aWV3ID0gZ2V0VmlldyhhbGlnbiwgaW5mbyAmIFZBTF9TSUdORUQsIGluZm8gJiBWQUxfRkxPQVQpO1xuICAgIGlmIChpbmZvICYgVkFMX01BTkFHRUQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIHZpZXdbKGJ1ZiA+Pj4gYWxpZ24pICsgaV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmlldy5zZXQodmFsdWVzLCBidWYgPj4+IGFsaWduKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGV4dGVuZGVkRXhwb3J0cy5fX25ld0FycmF5ID0gX19uZXdBcnJheTtcblxuICAvKiogR2V0cyBhIGxpdmUgdmlldyBvbiBhbiBhcnJheSdzIHZhbHVlcyBpbiB0aGUgbW9kdWxlJ3MgbWVtb3J5LiBJbmZlcnMgdGhlIGFycmF5IHR5cGUgZnJvbSBSVFRJLiAqL1xuICBmdW5jdGlvbiBfX2dldEFycmF5VmlldyhhcnIpIHtcbiAgICBjb25zdCBVMzIgPSBuZXcgVWludDMyQXJyYXkobWVtb3J5LmJ1ZmZlcik7XG4gICAgY29uc3QgaWQgPSBVMzJbYXJyICsgSURfT0ZGU0VUID4+PiAyXTtcbiAgICBjb25zdCBpbmZvID0gZ2V0QXJyYXlJbmZvKGlkKTtcbiAgICBjb25zdCBhbGlnbiA9IGdldFZhbHVlQWxpZ24oaW5mbyk7XG4gICAgbGV0IGJ1ZiA9IGluZm8gJiBTVEFUSUNBUlJBWVxuICAgICAgPyBhcnJcbiAgICAgIDogVTMyW2FyciArIEFSUkFZQlVGRkVSVklFV19EQVRBU1RBUlRfT0ZGU0VUID4+PiAyXTtcbiAgICBjb25zdCBsZW5ndGggPSBpbmZvICYgQVJSQVlcbiAgICAgID8gVTMyW2FyciArIEFSUkFZX0xFTkdUSF9PRkZTRVQgPj4+IDJdXG4gICAgICA6IFUzMltidWYgKyBTSVpFX09GRlNFVCA+Pj4gMl0gPj4+IGFsaWduO1xuICAgIHJldHVybiBnZXRWaWV3KGFsaWduLCBpbmZvICYgVkFMX1NJR05FRCwgaW5mbyAmIFZBTF9GTE9BVCkuc3ViYXJyYXkoYnVmID4+Pj0gYWxpZ24sIGJ1ZiArIGxlbmd0aCk7XG4gIH1cblxuICBleHRlbmRlZEV4cG9ydHMuX19nZXRBcnJheVZpZXcgPSBfX2dldEFycmF5VmlldztcblxuICAvKiogQ29waWVzIGFuIGFycmF5J3MgdmFsdWVzIGZyb20gdGhlIG1vZHVsZSdzIG1lbW9yeS4gSW5mZXJzIHRoZSBhcnJheSB0eXBlIGZyb20gUlRUSS4gKi9cbiAgZnVuY3Rpb24gX19nZXRBcnJheShhcnIpIHtcbiAgICBjb25zdCBpbnB1dCA9IF9fZ2V0QXJyYXlWaWV3KGFycik7XG4gICAgY29uc3QgbGVuID0gaW5wdXQubGVuZ3RoO1xuICAgIGNvbnN0IG91dCA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIG91dFtpXSA9IGlucHV0W2ldO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBleHRlbmRlZEV4cG9ydHMuX19nZXRBcnJheSA9IF9fZ2V0QXJyYXk7XG5cbiAgLyoqIENvcGllcyBhbiBBcnJheUJ1ZmZlcidzIHZhbHVlIGZyb20gdGhlIG1vZHVsZSdzIG1lbW9yeS4gKi9cbiAgZnVuY3Rpb24gX19nZXRBcnJheUJ1ZmZlcihwdHIpIHtcbiAgICBjb25zdCBidWZmZXIgPSBtZW1vcnkuYnVmZmVyO1xuICAgIGNvbnN0IGxlbmd0aCA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpW3B0ciArIFNJWkVfT0ZGU0VUID4+PiAyXTtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKHB0ciwgcHRyICsgbGVuZ3RoKTtcbiAgfVxuXG4gIGV4dGVuZGVkRXhwb3J0cy5fX2dldEFycmF5QnVmZmVyID0gX19nZXRBcnJheUJ1ZmZlcjtcblxuICAvKiogQ29waWVzIGEgdHlwZWQgYXJyYXkncyB2YWx1ZXMgZnJvbSB0aGUgbW9kdWxlJ3MgbWVtb3J5LiAqL1xuICBmdW5jdGlvbiBnZXRUeXBlZEFycmF5KFR5cGUsIGFsaWduTG9nMiwgcHRyKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlKGdldFR5cGVkQXJyYXlWaWV3KFR5cGUsIGFsaWduTG9nMiwgcHRyKSk7XG4gIH1cblxuICAvKiogR2V0cyBhIGxpdmUgdmlldyBvbiBhIHR5cGVkIGFycmF5J3MgdmFsdWVzIGluIHRoZSBtb2R1bGUncyBtZW1vcnkuICovXG4gIGZ1bmN0aW9uIGdldFR5cGVkQXJyYXlWaWV3KFR5cGUsIGFsaWduTG9nMiwgcHRyKSB7XG4gICAgY29uc3QgYnVmZmVyID0gbWVtb3J5LmJ1ZmZlcjtcbiAgICBjb25zdCBVMzIgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICBjb25zdCBidWZQdHIgPSBVMzJbcHRyICsgQVJSQVlCVUZGRVJWSUVXX0RBVEFTVEFSVF9PRkZTRVQgPj4+IDJdO1xuICAgIHJldHVybiBuZXcgVHlwZShidWZmZXIsIGJ1ZlB0ciwgVTMyW2J1ZlB0ciArIFNJWkVfT0ZGU0VUID4+PiAyXSA+Pj4gYWxpZ25Mb2cyKTtcbiAgfVxuXG4gIC8qKiBBdHRhY2ggYSBzZXQgb2YgZ2V0IFR5cGVkQXJyYXkgYW5kIFZpZXcgZnVuY3Rpb25zIHRvIHRoZSBleHBvcnRzLiAqL1xuICBmdW5jdGlvbiBhdHRhY2hUeXBlZEFycmF5RnVuY3Rpb25zKGN0b3IsIG5hbWUsIGFsaWduKSB7XG4gICAgZXh0ZW5kZWRFeHBvcnRzW2BfX2dldCR7bmFtZX1gXSA9IGdldFR5cGVkQXJyYXkuYmluZChudWxsLCBjdG9yLCBhbGlnbik7XG4gICAgZXh0ZW5kZWRFeHBvcnRzW2BfX2dldCR7bmFtZX1WaWV3YF0gPSBnZXRUeXBlZEFycmF5Vmlldy5iaW5kKG51bGwsIGN0b3IsIGFsaWduKTtcbiAgfVxuXG4gIFtcbiAgICBJbnQ4QXJyYXksXG4gICAgVWludDhBcnJheSxcbiAgICBVaW50OENsYW1wZWRBcnJheSxcbiAgICBJbnQxNkFycmF5LFxuICAgIFVpbnQxNkFycmF5LFxuICAgIEludDMyQXJyYXksXG4gICAgVWludDMyQXJyYXksXG4gICAgRmxvYXQzMkFycmF5LFxuICAgIEZsb2F0NjRBcnJheVxuICBdLmZvckVhY2goY3RvciA9PiB7XG4gICAgYXR0YWNoVHlwZWRBcnJheUZ1bmN0aW9ucyhjdG9yLCBjdG9yLm5hbWUsIDMxIC0gTWF0aC5jbHozMihjdG9yLkJZVEVTX1BFUl9FTEVNRU5UKSk7XG4gIH0pO1xuXG4gIGlmIChCSUdJTlQpIHtcbiAgICBbQmlnVWludDY0QXJyYXksIEJpZ0ludDY0QXJyYXldLmZvckVhY2goY3RvciA9PiB7XG4gICAgICBhdHRhY2hUeXBlZEFycmF5RnVuY3Rpb25zKGN0b3IsIGN0b3IubmFtZS5zbGljZSgzKSwgMyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVGVzdHMgd2hldGhlciBhbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIHJlcHJlc2VudGVkIGJ5IHRoZSBzcGVjaWZpZWQgYmFzZSBpZC4gKi9cbiAgZnVuY3Rpb24gX19pbnN0YW5jZW9mKHB0ciwgYmFzZUlkKSB7XG4gICAgY29uc3QgVTMyID0gbmV3IFVpbnQzMkFycmF5KG1lbW9yeS5idWZmZXIpO1xuICAgIGxldCBpZCA9IFUzMltwdHIgKyBJRF9PRkZTRVQgPj4+IDJdO1xuICAgIGlmIChpZCA8PSBnZXRSdHRpQ291bnQoVTMyKSkge1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoaWQgPT0gYmFzZUlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWQgPSBnZXRCYXNlKGlkKTtcbiAgICAgIH0gd2hpbGUgKGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXh0ZW5kZWRFeHBvcnRzLl9faW5zdGFuY2VvZiA9IF9faW5zdGFuY2VvZjtcblxuICAvLyBQdWxsIGJhc2ljIGV4cG9ydHMgdG8gZXh0ZW5kZWRFeHBvcnRzIHNvIGNvZGUgaW4gcHJlSW5zdGFudGlhdGUgY2FuIHVzZSB0aGVtXG4gIGV4dGVuZGVkRXhwb3J0cy5tZW1vcnkgPSBleHRlbmRlZEV4cG9ydHMubWVtb3J5IHx8IG1lbW9yeTtcbiAgZXh0ZW5kZWRFeHBvcnRzLnRhYmxlICA9IGV4dGVuZGVkRXhwb3J0cy50YWJsZSAgfHwgdGFibGU7XG5cbiAgLy8gRGVtYW5nbGUgZXhwb3J0cyBhbmQgcHJvdmlkZSB0aGUgdXN1YWwgdXRpbGl0eSBvbiB0aGUgcHJvdG90eXBlXG4gIHJldHVybiBkZW1hbmdsZShleHBvcnRzLCBleHRlbmRlZEV4cG9ydHMpO1xufVxuXG5mdW5jdGlvbiBpc1Jlc3BvbnNlKHNyYykge1xuICByZXR1cm4gdHlwZW9mIFJlc3BvbnNlICE9PSBcInVuZGVmaW5lZFwiICYmIHNyYyBpbnN0YW5jZW9mIFJlc3BvbnNlO1xufVxuXG5mdW5jdGlvbiBpc01vZHVsZShzcmMpIHtcbiAgcmV0dXJuIHNyYyBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5Lk1vZHVsZTtcbn1cblxuLyoqIEFzeW5jaHJvbm91c2x5IGluc3RhbnRpYXRlcyBhbiBBc3NlbWJseVNjcmlwdCBtb2R1bGUgZnJvbSBhbnl0aGluZyB0aGF0IGNhbiBiZSBpbnN0YW50aWF0ZWQuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFudGlhdGUoc291cmNlLCBpbXBvcnRzID0ge30pIHtcbiAgaWYgKGlzUmVzcG9uc2Uoc291cmNlID0gYXdhaXQgc291cmNlKSkgcmV0dXJuIGluc3RhbnRpYXRlU3RyZWFtaW5nKHNvdXJjZSwgaW1wb3J0cyk7XG4gIGNvbnN0IG1vZHVsZSA9IGlzTW9kdWxlKHNvdXJjZSkgPyBzb3VyY2UgOiBhd2FpdCBXZWJBc3NlbWJseS5jb21waWxlKHNvdXJjZSk7XG4gIGNvbnN0IGV4dGVuZGVkID0gcHJlSW5zdGFudGlhdGUoaW1wb3J0cyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUobW9kdWxlLCBpbXBvcnRzKTtcbiAgY29uc3QgZXhwb3J0cyA9IHBvc3RJbnN0YW50aWF0ZShleHRlbmRlZCwgaW5zdGFuY2UpO1xuICByZXR1cm4geyBtb2R1bGUsIGluc3RhbmNlLCBleHBvcnRzIH07XG59XG5cbi8qKiBTeW5jaHJvbm91c2x5IGluc3RhbnRpYXRlcyBhbiBBc3NlbWJseVNjcmlwdCBtb2R1bGUgZnJvbSBhIFdlYkFzc2VtYmx5Lk1vZHVsZSBvciBiaW5hcnkgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlU3luYyhzb3VyY2UsIGltcG9ydHMgPSB7fSkge1xuICBjb25zdCBtb2R1bGUgPSBpc01vZHVsZShzb3VyY2UpID8gc291cmNlIDogbmV3IFdlYkFzc2VtYmx5Lk1vZHVsZShzb3VyY2UpO1xuICBjb25zdCBleHRlbmRlZCA9IHByZUluc3RhbnRpYXRlKGltcG9ydHMpO1xuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZShtb2R1bGUsIGltcG9ydHMpO1xuICBjb25zdCBleHBvcnRzID0gcG9zdEluc3RhbnRpYXRlKGV4dGVuZGVkLCBpbnN0YW5jZSk7XG4gIHJldHVybiB7IG1vZHVsZSwgaW5zdGFuY2UsIGV4cG9ydHMgfTtcbn1cblxuLyoqIEFzeW5jaHJvbm91c2x5IGluc3RhbnRpYXRlcyBhbiBBc3NlbWJseVNjcmlwdCBtb2R1bGUgZnJvbSBhIHJlc3BvbnNlLCBpLmUuIGFzIG9idGFpbmVkIGJ5IGBmZXRjaGAuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFudGlhdGVTdHJlYW1pbmcoc291cmNlLCBpbXBvcnRzID0ge30pIHtcbiAgaWYgKCFXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZykge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZShcbiAgICAgIGlzUmVzcG9uc2Uoc291cmNlID0gYXdhaXQgc291cmNlKVxuICAgICAgICA/IHNvdXJjZS5hcnJheUJ1ZmZlcigpXG4gICAgICAgIDogc291cmNlLFxuICAgICAgaW1wb3J0c1xuICAgICk7XG4gIH1cbiAgY29uc3QgZXh0ZW5kZWQgPSBwcmVJbnN0YW50aWF0ZShpbXBvcnRzKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcoc291cmNlLCBpbXBvcnRzKTtcbiAgY29uc3QgZXhwb3J0cyA9IHBvc3RJbnN0YW50aWF0ZShleHRlbmRlZCwgcmVzdWx0Lmluc3RhbmNlKTtcbiAgcmV0dXJuIHsgLi4ucmVzdWx0LCBleHBvcnRzIH07XG59XG5cbi8qKiBEZW1hbmdsZXMgYW4gQXNzZW1ibHlTY3JpcHQgbW9kdWxlJ3MgZXhwb3J0cyB0byBhIGZyaWVuZGx5IG9iamVjdCBzdHJ1Y3R1cmUuICovXG5leHBvcnQgZnVuY3Rpb24gZGVtYW5nbGUoZXhwb3J0cywgZXh0ZW5kZWRFeHBvcnRzID0ge30pIHtcbiAgY29uc3Qgc2V0QXJndW1lbnRzTGVuZ3RoID0gZXhwb3J0c1tcIl9fYXJndW1lbnRzTGVuZ3RoXCJdXG4gICAgPyBsZW5ndGggPT4geyBleHBvcnRzW1wiX19hcmd1bWVudHNMZW5ndGhcIl0udmFsdWUgPSBsZW5ndGg7IH1cbiAgICA6IGV4cG9ydHNbXCJfX3NldEFyZ3VtZW50c0xlbmd0aFwiXSB8fCBleHBvcnRzW1wiX19zZXRhcmdjXCJdIHx8ICgoKSA9PiB7IC8qIG5vcCAqLyB9KTtcbiAgZm9yIChsZXQgaW50ZXJuYWxOYW1lIGluIGV4cG9ydHMpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBpbnRlcm5hbE5hbWUpKSBjb250aW51ZTtcbiAgICBjb25zdCBlbGVtID0gZXhwb3J0c1tpbnRlcm5hbE5hbWVdO1xuICAgIGxldCBwYXJ0cyA9IGludGVybmFsTmFtZS5zcGxpdChcIi5cIik7XG4gICAgbGV0IGN1cnIgPSBleHRlbmRlZEV4cG9ydHM7XG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwYXJ0ID0gcGFydHMuc2hpZnQoKTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1cnIsIHBhcnQpKSBjdXJyW3BhcnRdID0ge307XG4gICAgICBjdXJyID0gY3VycltwYXJ0XTtcbiAgICB9XG4gICAgbGV0IG5hbWUgPSBwYXJ0c1swXTtcbiAgICBsZXQgaGFzaCA9IG5hbWUuaW5kZXhPZihcIiNcIik7XG4gICAgaWYgKGhhc2ggPj0gMCkge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgaGFzaCk7XG4gICAgICBjb25zdCBjbGFzc0VsZW0gPSBjdXJyW2NsYXNzTmFtZV07XG4gICAgICBpZiAodHlwZW9mIGNsYXNzRWxlbSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhY2xhc3NFbGVtLnByb3RvdHlwZSkge1xuICAgICAgICBjb25zdCBjdG9yID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICAgIHJldHVybiBjdG9yLndyYXAoY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IoMCwgLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgICAgICBjdG9yLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICB2YWx1ZU9mKCkgeyByZXR1cm4gdGhpc1tUSElTXTsgfVxuICAgICAgICB9O1xuICAgICAgICBjdG9yLndyYXAgPSBmdW5jdGlvbih0aGlzVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShjdG9yLnByb3RvdHlwZSwgeyBbVEhJU106IHsgdmFsdWU6IHRoaXNWYWx1ZSwgd3JpdGFibGU6IGZhbHNlIH0gfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjbGFzc0VsZW0pIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzRWxlbSkuZm9yRWFjaChuYW1lID0+XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0b3IsIG5hbWUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY2xhc3NFbGVtLCBuYW1lKSlcbiAgICAgICAgKTtcbiAgICAgICAgY3VycltjbGFzc05hbWVdID0gY3RvcjtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhoYXNoICsgMSk7XG4gICAgICBjdXJyID0gY3VycltjbGFzc05hbWVdLnByb3RvdHlwZTtcbiAgICAgIGlmICgvXihnZXR8c2V0KTovLnRlc3QobmFtZSkpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3VyciwgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDQpKSkge1xuICAgICAgICAgIGxldCBnZXR0ZXIgPSBleHBvcnRzW2ludGVybmFsTmFtZS5yZXBsYWNlKFwic2V0OlwiLCBcImdldDpcIildO1xuICAgICAgICAgIGxldCBzZXR0ZXIgPSBleHBvcnRzW2ludGVybmFsTmFtZS5yZXBsYWNlKFwiZ2V0OlwiLCBcInNldDpcIildO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdXJyLCBuYW1lLCB7XG4gICAgICAgICAgICBnZXQoKSB7IHJldHVybiBnZXR0ZXIodGhpc1tUSElTXSk7IH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHsgc2V0dGVyKHRoaXNbVEhJU10sIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAoY3VycltuYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBzZXRBcmd1bWVudHNMZW5ndGgoYXJncy5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0oLi4uYXJncyk7XG4gICAgICAgICAgfSkub3JpZ2luYWwgPSBlbGVtO1xuICAgICAgICB9IGVsc2UgeyAvLyBpbnN0YW5jZSBtZXRob2RcbiAgICAgICAgICAoY3VycltuYW1lXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHsgLy8gIVxuICAgICAgICAgICAgc2V0QXJndW1lbnRzTGVuZ3RoKGFyZ3MubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtKHRoaXNbVEhJU10sIC4uLmFyZ3MpO1xuICAgICAgICAgIH0pLm9yaWdpbmFsID0gZWxlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoL14oZ2V0fHNldCk6Ly50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGN1cnIsIG5hbWUgPSBuYW1lLnN1YnN0cmluZyg0KSkpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VyciwgbmFtZSwge1xuICAgICAgICAgICAgZ2V0OiBleHBvcnRzW2ludGVybmFsTmFtZS5yZXBsYWNlKFwic2V0OlwiLCBcImdldDpcIildLFxuICAgICAgICAgICAgc2V0OiBleHBvcnRzW2ludGVybmFsTmFtZS5yZXBsYWNlKFwiZ2V0OlwiLCBcInNldDpcIildLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtID09PSBcImZ1bmN0aW9uXCIgJiYgZWxlbSAhPT0gc2V0QXJndW1lbnRzTGVuZ3RoKSB7XG4gICAgICAgIChjdXJyW25hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBzZXRBcmd1bWVudHNMZW5ndGgoYXJncy5sZW5ndGgpO1xuICAgICAgICAgIHJldHVybiBlbGVtKC4uLmFyZ3MpO1xuICAgICAgICB9KS5vcmlnaW5hbCA9IGVsZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyW25hbWVdID0gZWxlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4dGVuZGVkRXhwb3J0cztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbnN0YW50aWF0ZSxcbiAgaW5zdGFudGlhdGVTeW5jLFxuICBpbnN0YW50aWF0ZVN0cmVhbWluZyxcbiAgZGVtYW5nbGVcbn07XG4iLCIvLyBXcmFwcGVyIGFyb3VuZCB0aGUgbG9hZGVyIGluc3RhbnRpYXRlXG5pbXBvcnQgbG9hZGVyIGZyb20gXCJAYXNzZW1ibHlzY3JpcHQvbG9hZGVyXCI7XG5cbmltcG9ydCB7IFdlYkFzc2VtYmx5TG9hZGVyUmVzdWx0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc2JpbmRJbnN0YW50aWF0ZShcbiAgbW9kdWxlOiBXZWJBc3NlbWJseS5Nb2R1bGUsXG4gIGltcG9ydE9iamVjdDogV2ViQXNzZW1ibHkuSW1wb3J0c1xuKTogUHJvbWlzZTxXZWJBc3NlbWJseUxvYWRlclJlc3VsdD4ge1xuICByZXR1cm4gbG9hZGVyLmluc3RhbnRpYXRlKG1vZHVsZSwgaW1wb3J0T2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzYmluZEluc3RhbnRpYXRlU3luYyhcbiAgbW9kdWxlOiBXZWJBc3NlbWJseS5Nb2R1bGUsXG4gIGltcG9ydE9iamVjdDogV2ViQXNzZW1ibHkuSW1wb3J0c1xuKTogV2ViQXNzZW1ibHlMb2FkZXJSZXN1bHQge1xuICByZXR1cm4gbG9hZGVyLmluc3RhbnRpYXRlU3luYyhtb2R1bGUsIGltcG9ydE9iamVjdCk7XG59XG4iLCJpbXBvcnQgQXNiaW5kSW5zdGFuY2UgZnJvbSBcIi4vYXNiaW5kLWluc3RhbmNlXCI7XG5cbi8vIENvbnZlcnRzIHdlYiBwbGF0Zm9ybSBuYW1lcyBmb3IgdGhlIGRpZmZlcmVudCBBcnJheUJ1ZmZlclZpZXdzXG4vLyB0byB0aGUgbmFtZXMgdGhhdCBBU0MgdW5kZXJzdGFuZHMuIEN1cnJlbnRseSwgdGhhdCBvbmx5IG1lYW5zXG4vLyB0byBjdXQgb2ZmIHRoZSBgQmlnYCBpbiBgQmlnSW50NjRBcnJheWAuXG5jb25zdCBzdGRsaWJUeXBlZEFycmF5UHJlZml4ID0gXCJ+bGliL3R5cGVkYXJyYXkvXCI7XG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUJ1ZmZlclZpZXdUeXBlTmFtZSh0eXBlTmFtZTogc3RyaW5nKSB7XG4gIC8vIERvbuKAmXQgZG8gYW55dGhpbmcgaWYgdGhpcyBpcyBub3QgYSBzdGRsaWIgdHlwZS5cbiAgaWYgKCF0eXBlTmFtZS5zdGFydHNXaXRoKHN0ZGxpYlR5cGVkQXJyYXlQcmVmaXgpKSB7XG4gICAgcmV0dXJuIHR5cGVOYW1lO1xuICB9XG4gIHR5cGVOYW1lID0gdHlwZU5hbWUuc2xpY2Uoc3RkbGliVHlwZWRBcnJheVByZWZpeC5sZW5ndGgpO1xuICBpZiAodHlwZU5hbWUuc3RhcnRzV2l0aChcIkJpZ1wiKSkge1xuICAgIC8vIFNsaWNlIG9mZiBgQmlnYCBhcyB0aGUgbG9hZGVyIGRvZXNu4oCZdCBoYXZlIHRoYXQgcHJlZml4LlxuICAgIHR5cGVOYW1lID0gdHlwZU5hbWUuc2xpY2UoMyk7XG4gIH1cbiAgcmV0dXJuIHR5cGVOYW1lO1xufVxuXG5mdW5jdGlvbiBub3AoYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLCB2YWx1ZTogYW55LCB0eXBlTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nKFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX2dldFN0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHB1dFN0cmluZyhcbiAgYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLFxuICB2YWx1ZTogYW55LFxuICB0eXBlTmFtZTogc3RyaW5nXG4pIHtcbiAgcmV0dXJuIGFzYmluZEluc3RhbmNlLmV4cG9ydHMuX19uZXdTdHJpbmcodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheUJ1ZmZlcihcbiAgYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLFxuICB2YWx1ZTogYW55LFxuICB0eXBlTmFtZTogc3RyaW5nXG4pIHtcbiAgcmV0dXJuIGFzYmluZEluc3RhbmNlLmV4cG9ydHMuX19nZXRBcnJheUJ1ZmZlcih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHB1dEFycmF5QnVmZmVyKFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICBjb25zdCBwdHIgPSBhc2JpbmRJbnN0YW5jZS5leHBvcnRzLl9fbmV3KFxuICAgIHZhbHVlLmJ5dGVMZW5ndGgsXG4gICAgYXNiaW5kSW5zdGFuY2UuZ2V0VHlwZUlkKHR5cGVOYW1lKVxuICApO1xuICBuZXcgVWludDhBcnJheShcbiAgICBhc2JpbmRJbnN0YW5jZS5leHBvcnRzLm1lbW9yeS5idWZmZXIsXG4gICAgcHRyLFxuICAgIHZhbHVlLmJ5dGVMZW5ndGhcbiAgKS5zZXQobmV3IFVpbnQ4QXJyYXkodmFsdWUpKTtcbiAgcmV0dXJuIHB0cjtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlCdWZmZXJWaWV3KFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0c1tcbiAgICBgX19nZXQke25vcm1hbGl6ZUFycmF5QnVmZmVyVmlld1R5cGVOYW1lKHR5cGVOYW1lKX1WaWV3YFxuICBdKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHB1dEFycmF5QnVmZmVyVmlldyhcbiAgYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLFxuICB2YWx1ZTogYW55LFxuICB0eXBlTmFtZTogc3RyaW5nXG4pIHtcbiAgcmV0dXJuIGFzYmluZEluc3RhbmNlLmV4cG9ydHMuX19uZXdBcnJheShcbiAgICBhc2JpbmRJbnN0YW5jZS5nZXRUeXBlSWQodHlwZU5hbWUpLFxuICAgIHZhbHVlXG4gICk7XG59XG5cbmNvbnN0IHN0ZGxpYkFycmF5ID0gXCJ+bGliL2FycmF5L0FycmF5XCI7XG5mdW5jdGlvbiBhcnJheUlubmVyVHlwZSh0eXBlTmFtZTogc3RyaW5nKSB7XG4gIGlmICghdHlwZU5hbWUuc3RhcnRzV2l0aChzdGRsaWJBcnJheSkpIHtcbiAgICB0aHJvdyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeSh0eXBlTmFtZSl9IGlzIG5vdCBhbiBhcnJheSB0eXBlYCk7XG4gIH1cbiAgLy8gQ3V0IG9mZiBzdGRsaWIgcGF0aCArIGdlbmVyaWMgYW5nbGUgYnJhY2tldHMuXG4gIHJldHVybiB0eXBlTmFtZS5zbGljZShgJHtzdGRsaWJBcnJheX08YC5sZW5ndGgsIC0xKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXkoXG4gIGFzYmluZEluc3RhbmNlOiBBc2JpbmRJbnN0YW5jZSxcbiAgdmFsdWU6IGFueSxcbiAgdHlwZU5hbWU6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IGlubmVyVHlwZU5hbWUgPSBhcnJheUlubmVyVHlwZSh0eXBlTmFtZSk7XG4gIGNvbnN0IGlubmVyVHlwZUNvbnZlcnRlciA9IGdldENvbnZlcnRlckZvclR5cGUoaW5uZXJUeXBlTmFtZSk7XG4gIGNvbnN0IHJhd0FycmF5ID0gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX2dldEFycmF5KHZhbHVlKTtcbiAgcmV0dXJuIHJhd0FycmF5Lm1hcCh2ID0+XG4gICAgaW5uZXJUeXBlQ29udmVydGVyLmFzY1RvSnMoYXNiaW5kSW5zdGFuY2UsIHYsIGlubmVyVHlwZU5hbWUpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHB1dEFycmF5KFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIHZhbHVlOiBhbnksXG4gIHR5cGVOYW1lOiBzdHJpbmdcbikge1xuICBjb25zdCBpbm5lclR5cGVOYW1lID0gYXJyYXlJbm5lclR5cGUodHlwZU5hbWUpO1xuICBjb25zdCBpbm5lclR5cGVDb252ZXJ0ZXIgPSBnZXRDb252ZXJ0ZXJGb3JUeXBlKGlubmVyVHlwZU5hbWUpO1xuICBjb25zdCBjb252ZXJ0ZWRWYWx1ZXMgPSB2YWx1ZS5tYXAodiA9PlxuICAgIGlubmVyVHlwZUNvbnZlcnRlci5qc1RvQXNjKGFzYmluZEluc3RhbmNlLCB2LCBpbm5lclR5cGVOYW1lKVxuICApO1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2UuZXhwb3J0cy5fX25ld0FycmF5KFxuICAgIGFzYmluZEluc3RhbmNlLmdldFR5cGVJZCh0eXBlTmFtZSksXG4gICAgY29udmVydGVkVmFsdWVzXG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVydGVyIHtcbiAgYXNjVG9Kcyhhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsIHZhbHVlOiBhbnksIHR5cGVOYW1lOiBzdHJpbmcpOiBhbnk7XG4gIGpzVG9Bc2MoYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLCB2YWx1ZTogYW55LCB0eXBlTmFtZTogc3RyaW5nKTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydGVycyA9IG5ldyBNYXA8c3RyaW5nIHwgUmVnRXhwLCBDb252ZXJ0ZXI+KFtcbiAgW1widm9pZFwiLCB7IGFzY1RvSnM6IG5vcCwganNUb0FzYzogbm9wIH1dLFxuICAvLyBUZWNobmljYWxseSB0aGlzIG1hdGNoZXMgdHlwZXMgdGhhdCBkb27igJkgZXhpc3QgKGxpa2UgZjgpLFxuICAvLyBidXQgc2luY2UgdGhvc2UgY2FuIG9ubHkgYXBwZWFyIGlmIHRoZSBjb21waWxlciBhY2NlcHRzIHRoZW0sXG4gIC8vIGl0IHNlZW1zIHVubGlrZWx5IGZvciB0aGF0IHRvIGJlIGEgcHJvYmxlbS5cbiAgW1xuICAgIC9eKGl8dXxmKSg4fDE2fDMyfDY0KXxbdWldc2l6ZXxib29sfGV4dGVybnJlZiQvLFxuICAgIHsgYXNjVG9Kczogbm9wLCBqc1RvQXNjOiBub3AgfVxuICBdLFxuICBbXCJ+bGliL3N0cmluZy9TdHJpbmdcIiwgeyBhc2NUb0pzOiBnZXRTdHJpbmcsIGpzVG9Bc2M6IHB1dFN0cmluZyB9XSxcbiAgW1xuICAgIFwifmxpYi90eXBlZGFycmF5L0ludDhBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvSW50MTZBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvSW50MzJBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvVWludDhBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvVWludDE2QXJyYXlcIixcbiAgICB7IGFzY1RvSnM6IGdldEFycmF5QnVmZmVyVmlldywganNUb0FzYzogcHV0QXJyYXlCdWZmZXJWaWV3IH1cbiAgXSxcbiAgW1xuICAgIFwifmxpYi90eXBlZGFycmF5L1VpbnQzMkFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9JbnQ2NEFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvdHlwZWRhcnJheS9VaW50NjRBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvVWludDhDbGFtcGVkQXJyYXlcIixcbiAgICB7IGFzY1RvSnM6IGdldEFycmF5QnVmZmVyVmlldywganNUb0FzYzogcHV0QXJyYXlCdWZmZXJWaWV3IH1cbiAgXSxcbiAgW1xuICAgIFwifmxpYi90eXBlZGFycmF5L0Zsb2F0MzJBcnJheVwiLFxuICAgIHsgYXNjVG9KczogZ2V0QXJyYXlCdWZmZXJWaWV3LCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlclZpZXcgfVxuICBdLFxuICBbXG4gICAgXCJ+bGliL3R5cGVkYXJyYXkvRmxvYXQ2NEFycmF5XCIsXG4gICAgeyBhc2NUb0pzOiBnZXRBcnJheUJ1ZmZlclZpZXcsIGpzVG9Bc2M6IHB1dEFycmF5QnVmZmVyVmlldyB9XG4gIF0sXG4gIFtcbiAgICBcIn5saWIvYXJyYXlidWZmZXIvQXJyYXlCdWZmZXJcIixcbiAgICB7IGFzY1RvSnM6IGdldEFycmF5QnVmZmVyLCBqc1RvQXNjOiBwdXRBcnJheUJ1ZmZlciB9XG4gIF0sXG4gIFsvXn5saWJcXC9hcnJheVxcL0FycmF5PC4rPiQvLCB7IGFzY1RvSnM6IGdldEFycmF5LCBqc1RvQXNjOiBwdXRBcnJheSB9XVxuXSk7XG5cbmNvbnN0IHdhcm5lZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnZlcnRlckZvclR5cGUodHlwZU5hbWU6IHN0cmluZyk6IENvbnZlcnRlciB7XG4gIGZvciAoY29uc3QgW21hdGNoZXIsIGNvbnZlcnRlcl0gb2YgY29udmVydGVycykge1xuICAgIGlmICh0eXBlb2YgbWF0Y2hlciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKG1hdGNoZXIgPT09IHR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0ZXI7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXIudGVzdCh0eXBlTmFtZSkpIHtcbiAgICAgIHJldHVybiBjb252ZXJ0ZXI7XG4gICAgfVxuICB9XG4gIGlmICghd2FybmVkLmhhcyh0eXBlTmFtZSkpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgTm8gY29udmVydGVyIGZvciAke0pTT04uc3RyaW5naWZ5KHR5cGVOYW1lKX0sIHVzaW5nIHBhc3MtdGhyb3VnaGBcbiAgICApO1xuICAgIHdhcm5lZC5hZGQodHlwZU5hbWUpO1xuICB9XG4gIHJldHVybiB7IGFzY1RvSnM6IG5vcCwganNUb0FzYzogbm9wIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc2NUb0pzQ29udmVydGVyRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBnZXRDb252ZXJ0ZXJGb3JUeXBlKHR5cGVOYW1lKS5hc2NUb0pzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SnNUb0FzY0NvbnZlcnRlckZvclR5cGUodHlwZU5hbWU6IHN0cmluZykge1xuICByZXR1cm4gZ2V0Q29udmVydGVyRm9yVHlwZSh0eXBlTmFtZSkuanNUb0FzYztcbn1cbiIsImltcG9ydCB7IFR5cGVEZWZGbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEFzYmluZEluc3RhbmNlIGZyb20gXCIuL2FzYmluZC1pbnN0YW5jZVwiO1xuXG5pbXBvcnQge1xuICBnZXRBc2NUb0pzQ29udmVydGVyRm9yVHlwZSxcbiAgZ2V0SnNUb0FzY0NvbnZlcnRlckZvclR5cGVcbn0gZnJvbSBcIi4vdHlwZS1jb252ZXJ0ZXJzXCI7XG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uRnJvbUtleVBhdGgoYmFzZU9iamVjdCwga2V5cykge1xuICBsZXQgcmVzdWx0ID0gYmFzZU9iamVjdDtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIHJlc3VsdCA9IHJlc3VsdD8uW2tleV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRJbXBvcnRGdW5jdGlvbihcbiAgYXNiaW5kSW5zdGFuY2U6IEFzYmluZEluc3RhbmNlLFxuICBpbXBvcnRlZEZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgaW1wb3J0ZWRGdW5jdGlvbkRlc2NyaXB0b3I6IFR5cGVEZWZGblxuKSB7XG4gIC8vIEdyYWIgdHlwZSBjb252ZXJ0ZXIgZnVuY3Rpb25zIGFjY29yZGluZyB0byB0aGUgdHlwZSBkZXNjcmlwdG9yXG4gIGNvbnN0IGFyZ3VtZW50Q29udmVydGVyRnVuY3Rpb25zID0gaW1wb3J0ZWRGdW5jdGlvbkRlc2NyaXB0b3IucGFyYW1ldGVycy5tYXAoXG4gICAgZ2V0QXNjVG9Kc0NvbnZlcnRlckZvclR5cGVcbiAgKTtcbiAgY29uc3QgcmV0dXJuVmFsdWVDb252ZXJ0ZXJGdW5jdGlvbiA9IGdldEpzVG9Bc2NDb252ZXJ0ZXJGb3JUeXBlKFxuICAgIGltcG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnJldHVyblR5cGVcbiAgKTtcblxuICAvLyBDcmVhdGUgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgYXBwbGllcyB0aGUgY29ycmVjdCBjb252ZXJ0ZXIgZnVuY3Rpb24gdG8gYXJndW1lbnRzIGFuZFxuICAvLyByZXR1cm4gdmFsdWUgcmVzcGVjdGl2ZWx5LlxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAoXG4gICAgICBhc2JpbmRJbnN0YW5jZS5pc0FzeW5jaWZ5TW9kdWxlICYmXG4gICAgICAoYXNiaW5kSW5zdGFuY2UuZXhwb3J0cyBhcyBhbnkpLmFzeW5jaWZ5X2dldF9zdGF0ZSgpID09PSAyIC8qIFJld2luZGluZyAqL1xuICAgICkge1xuICAgICAgKGFzYmluZEluc3RhbmNlLmxvYWRlZE1vZHVsZS5leHBvcnRzIGFzIGFueSkuYXN5bmNpZnlfc3RvcF9yZXdpbmQoKTtcbiAgICAgIGFzYmluZEluc3RhbmNlLmxvYWRlZE1vZHVsZS5leHBvcnRzLl9fdW5waW4oXG4gICAgICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUucHRyXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlQ29udmVydGVyRnVuY3Rpb24oXG4gICAgICAgIGFzYmluZEluc3RhbmNlLFxuICAgICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnZhbHVlLFxuICAgICAgICBpbXBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5yZXR1cm5UeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCAhPSBhcmd1bWVudENvbnZlcnRlckZ1bmN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgRXhwZWN0ZWQgJHthcmd1bWVudENvbnZlcnRlckZ1bmN0aW9ucy5sZW5ndGh9IGFyZ3VtZW50cywgZ290ICR7YXJncy5sZW5ndGh9YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgbmV3QXJncyA9IGFyZ3MubWFwKCh2LCBpKSA9PlxuICAgICAgYXJndW1lbnRDb252ZXJ0ZXJGdW5jdGlvbnNbaV0oXG4gICAgICAgIGFzYmluZEluc3RhbmNlLFxuICAgICAgICB2LFxuICAgICAgICBpbXBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5wYXJhbWV0ZXJzW2ldXG4gICAgICApXG4gICAgKTtcbiAgICBjb25zdCByZXN1bHQgPSBpbXBvcnRlZEZ1bmN0aW9uKC4uLm5ld0FyZ3MpO1xuXG4gICAgaWYgKCFhc2JpbmRJbnN0YW5jZS5pc0FzeW5jaWZ5TW9kdWxlIHx8ICEocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZUNvbnZlcnRlckZ1bmN0aW9uKFxuICAgICAgICBhc2JpbmRJbnN0YW5jZSxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBpbXBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5yZXR1cm5UeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGUgPSB7XG4gICAgICBwdHI6IGFzYmluZEluc3RhbmNlLmxvYWRlZE1vZHVsZS5leHBvcnRzLl9fbmV3KFxuICAgICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0b3JhZ2VTaXplLFxuICAgICAgICAwXG4gICAgICApXG4gICAgfTtcbiAgICBhc2JpbmRJbnN0YW5jZS5sb2FkZWRNb2R1bGUuZXhwb3J0cy5fX3Bpbihhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0cik7XG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMubWVtb3J5LmJ1ZmZlcik7XG4gICAgZHYuc2V0VWludDMyKFxuICAgICAgYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdGF0ZS5wdHIsXG4gICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0ciArIDgsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBkdi5zZXRVaW50MzIoXG4gICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0ciArIDQsXG4gICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0ciArIGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RvcmFnZVNpemUsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICAoYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMgYXMgYW55KS5hc3luY2lmeV9zdGFydF91bndpbmQoXG4gICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlLnB0clxuICAgICk7XG4gICAgYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdGF0ZS5wcm9taXNlID0gcmVzdWx0O1xuICB9O1xufVxuXG4vLyBGdW5jdGlvbiB0aGF0IHRha2VzIGluIGFuIGFzYmluZCBpbnN0YW5jZSwgYW5kIHRoZSBrZXkgdG8gdGhlIGV4cG9ydCBmdW5jdGlvbiBvbiB0aGVcbi8vIGFiaW5kSW5zdGFuY2UuZXhwb3J0cyBvYmplY3QsIHRvIGJlIHdyYXBwZWQgYW5kIHRoZW4gcmUtYXNzaWduZWQgdG8gdGhlIGFzYmluZEluc3RhbmNlLmV4cG9ydHMuXG5leHBvcnQgZnVuY3Rpb24gYmluZEV4cG9ydEZ1bmN0aW9uKFxuICBhc2JpbmRJbnN0YW5jZTogQXNiaW5kSW5zdGFuY2UsXG4gIGV4cG9ydGVkRnVuY3Rpb246IEZ1bmN0aW9uLFxuICBleHBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvcjogVHlwZURlZkZuXG4pIHtcbiAgLy8gR3JhYiB0eXBlIGNvbnZlcnRlciBmdW5jdGlvbnMgYWNjb3JkaW5nIHRvIHRoZSB0eXBlIGRlc2NyaXB0b3JcbiAgY29uc3QgYXJndW1lbnRDb252ZXJ0ZXJGdW5jdGlvbnMgPSBleHBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5wYXJhbWV0ZXJzLm1hcChcbiAgICBnZXRKc1RvQXNjQ29udmVydGVyRm9yVHlwZVxuICApO1xuICBjb25zdCByZXR1cm5WYWx1ZUNvbnZlcnRlckZ1bmN0aW9uID0gZ2V0QXNjVG9Kc0NvbnZlcnRlckZvclR5cGUoXG4gICAgZXhwb3J0ZWRGdW5jdGlvbkRlc2NyaXB0b3IucmV0dXJuVHlwZVxuICApO1xuXG4gIC8vIENyZWF0ZSBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIHRoZSBjb3JyZWN0IGNvbnZlcnRlciBmdW5jdGlvbiB0byBhcmd1bWVudHMgYW5kXG4gIC8vIHJldHVybiB2YWx1ZSByZXNwZWN0aXZlbHkuXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGlmIChhcmdzLmxlbmd0aCAhPSBhcmd1bWVudENvbnZlcnRlckZ1bmN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgRXhwZWN0ZWQgJHthcmd1bWVudENvbnZlcnRlckZ1bmN0aW9ucy5sZW5ndGh9IGFyZ3VtZW50cywgZ290ICR7YXJncy5sZW5ndGh9YFxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gVGhlIGNvbnZlcnNpb24gZnVuY3Rpb24gb2YgdGhlIF9uZXh0XyBwYXJhbWV0ZXIgY291bGQgcG90ZW50aWFsbHlcbiAgICAvLyB0cmlnZ2VyIEdDIGFuZCBjb2xsZWN0IHRoZSBwcmV2aW91cyBwYXJhbWV0ZXIgYmVmb3JlIHdlIGV2ZW4gaW52b2tlXG4gICAgLy8gdGhlIGFjdHVhbCBmdW5jdGlvbi4gVGhhdOKAmXMgYmFkISBXZeKAmWxsIHBpbiBhbGwgbm9uLXByaW1pdGl2ZSBwYXJhbWV0ZXJzIGJlZm9yZSBpbnZvY2F0aW9uXG4gICAgLy8gYW5kIHVucGluIHRoZW0gYWZ0ZXIuXG4gICAgY29uc3QgcGlubmVkQXJncyA9IFtdO1xuICAgIGNvbnN0IG5ld0FyZ3MgPSBhcmdzLm1hcCgob3JpZ2luYWxQYXJhbWV0ZXIsIGkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlZFBhcmFtZXRlciA9IGFyZ3VtZW50Q29udmVydGVyRnVuY3Rpb25zW2ldKFxuICAgICAgICBhc2JpbmRJbnN0YW5jZSxcbiAgICAgICAgb3JpZ2luYWxQYXJhbWV0ZXIsXG4gICAgICAgIGV4cG9ydGVkRnVuY3Rpb25EZXNjcmlwdG9yLnBhcmFtZXRlcnNbaV1cbiAgICAgICk7XG4gICAgICBpZiAoY29udmVydGVkUGFyYW1ldGVyICE9PSBvcmlnaW5hbFBhcmFtZXRlcikge1xuICAgICAgICBhc2JpbmRJbnN0YW5jZS5leHBvcnRzLl9fcGluKGNvbnZlcnRlZFBhcmFtZXRlcik7XG4gICAgICAgIHBpbm5lZEFyZ3MucHVzaChjb252ZXJ0ZWRQYXJhbWV0ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnZlcnRlZFBhcmFtZXRlcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBmKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGV4cG9ydGVkRnVuY3Rpb24oLi4uYXJncyk7XG4gICAgICBwaW5uZWRBcmdzLmZvckVhY2goYXJnID0+IGFzYmluZEluc3RhbmNlLmV4cG9ydHMuX191bnBpbihhcmcpKTtcbiAgICAgIGlmIChcbiAgICAgICAgIWFzYmluZEluc3RhbmNlLmlzQXN5bmNpZnlNb2R1bGUgfHxcbiAgICAgICAgKGFzYmluZEluc3RhbmNlLmV4cG9ydHMgYXMgYW55KS5hc3luY2lmeV9nZXRfc3RhdGUoKSA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZUNvbnZlcnRlckZ1bmN0aW9uKFxuICAgICAgICAgIGFzYmluZEluc3RhbmNlLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBleHBvcnRlZEZ1bmN0aW9uRGVzY3JpcHRvci5yZXR1cm5UeXBlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAoYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMgYXMgYW55KS5hc3luY2lmeV9zdG9wX3Vud2luZCgpO1xuICAgICAgbGV0IGxvY2FsQXN5bmNpZnlTdGF0ZSA9IGFzYmluZEluc3RhbmNlLmFzeW5jaWZ5U3RhdGU7XG4gICAgICByZXR1cm4gbG9jYWxBc3luY2lmeVN0YXRlLnByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgIGxvY2FsQXN5bmNpZnlTdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBhc2JpbmRJbnN0YW5jZS5hc3luY2lmeVN0YXRlID0gbG9jYWxBc3luY2lmeVN0YXRlO1xuICAgICAgICAoYXNiaW5kSW5zdGFuY2UubG9hZGVkTW9kdWxlLmV4cG9ydHMgYXMgYW55KS5hc3luY2lmeV9zdGFydF9yZXdpbmQoXG4gICAgICAgICAgYXNiaW5kSW5zdGFuY2UuYXN5bmNpZnlTdGF0ZS5wdHJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGYoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykoLi4ubmV3QXJncyk7XG4gIH07XG59XG4iLCIvLyBDbGFzcyBmb3IgYXNiaW5kIGluc3RhbmNlc1xuaW1wb3J0IHsgYXNiaW5kSW5zdGFudGlhdGUsIGFzYmluZEluc3RhbnRpYXRlU3luYyB9IGZyb20gXCIuL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBiaW5kSW1wb3J0RnVuY3Rpb24sIGJpbmRFeHBvcnRGdW5jdGlvbiB9IGZyb20gXCIuL2JpbmQtZnVuY3Rpb25cIjtcbmltcG9ydCB7XG4gIFR5cGVEZWYsXG4gIFdlYkFzc2VtYmx5TW9kdWxlU3RyZWFtaW5nLFxuICBXZWJBc3NlbWJseU1vZHVsZVN5bmMsXG4gIFdlYkFzc2VtYmx5TG9hZGVyUmVzdWx0XG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgeyBBU1V0aWwgfSBmcm9tIFwiQGFzc2VtYmx5c2NyaXB0L2xvYWRlclwiO1xuXG5jb25zdCBTRUNUSU9OX05BTUUgPSBcImFzLWJpbmRfYmluZGluZ3NcIjtcblxuLy8gQmFzaWNhbGx5IGEgZGVlcC1jb3B5LCBidXQgY2FuIGJlIGxpbWl0ZWQgaW4gbGV2ZWxzLlxuZnVuY3Rpb24gY29weU9iamVjdDxUPihvYmo6IFQsIHsgZGVwdGggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfSA9IHt9KTogVCB7XG4gIGlmIChkZXB0aCA8PSAwIHx8ICFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhvYmopLm1hcCgoW2tleSwgdmFsXSkgPT4gW1xuICAgICAga2V5LFxuICAgICAgY29weU9iamVjdCh2YWwsIHsgZGVwdGg6IGRlcHRoIC0gMSB9KVxuICAgIF0pXG4gICkgYXMgVDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGlsZVN0cmVhbWluZyhzb3VyY2U6IFdlYkFzc2VtYmx5TW9kdWxlU3RyZWFtaW5nKSB7XG4gIHNvdXJjZSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShzb3VyY2UpO1xuICBpZiAodHlwZW9mIFJlc3BvbnNlICE9PSBcInVuZGVmaW5lZFwiICYmIHNvdXJjZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgaWYgKFdlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcpIHtcbiAgICAgIHJldHVybiBXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nKHNvdXJjZSk7XG4gICAgfVxuICAgIHNvdXJjZSA9IGF3YWl0IHNvdXJjZS5hcnJheUJ1ZmZlcigpO1xuICB9XG5cbiAgcmV0dXJuIFdlYkFzc2VtYmx5LmNvbXBpbGUoc291cmNlIGFzIEJ1ZmZlclNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUeXBlRGVzY3JpcHRvcihtb2R1bGU6IFdlYkFzc2VtYmx5Lk1vZHVsZSk6IFR5cGVEZWYge1xuICBjb25zdCBzZWN0aW9ucyA9IFdlYkFzc2VtYmx5Lk1vZHVsZS5jdXN0b21TZWN0aW9ucyhtb2R1bGUsIFNFQ1RJT05fTkFNRSk7XG4gIGNvbnN0IHN0ciA9IG5ldyBUZXh0RGVjb2RlcihcInV0ZjhcIikuZGVjb2RlKG5ldyBVaW50OEFycmF5KHNlY3Rpb25zWzBdKSk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IEVycm9yKGBDb3VsZG7igJl0IGRlY29kZSB0eXBlIGRlc2NyaXB0b3I6ICR7ZS5tZXNzYWdlfWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzYmluZEluc3RhbmNlIHtcbiAgZXhwb3J0czogUmVjb3JkPHN0cmluZywgbmV2ZXI+IHwgQVNVdGlsID0ge307XG4gIGltcG9ydE9iamVjdDogV2ViQXNzZW1ibHkuSW1wb3J0cyA9IHt9O1xuICB0eXBlRGVzY3JpcHRvcjogVHlwZURlZjtcbiAgbW9kdWxlOiBXZWJBc3NlbWJseS5Nb2R1bGU7XG4gIGxvYWRlZE1vZHVsZTogV2ViQXNzZW1ibHlMb2FkZXJSZXN1bHQ7XG4gIGFzeW5jaWZ5U3RvcmFnZVNpemU6IG51bWJlciA9IDggKiAxMDI0O1xuICBpc0FzeW5jaWZ5TW9kdWxlOiBCb29sZWFuID0gZmFsc2U7XG4gIGFzeW5jaWZ5U3RhdGU6IHsgcHRyOiBudW1iZXI7IHZhbHVlPzogYW55OyBwcm9taXNlPzogUHJvbWlzZTxhbnk+IH07XG5cbiAgZ2V0VHlwZUlkKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZU5hbWUgaW4gdGhpcy50eXBlRGVzY3JpcHRvci50eXBlSWRzKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlRGVzY3JpcHRvci50eXBlSWRzW3R5cGVOYW1lXS5pZDtcbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoYFVua25vd24gdHlwZSAke0pTT04uc3RyaW5naWZ5KHR5cGVOYW1lKX1gKTtcbiAgfVxuXG4gIGdldFR5cGVTaXplKHR5cGVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZU5hbWUgaW4gdGhpcy50eXBlRGVzY3JpcHRvci50eXBlSWRzKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlRGVzY3JpcHRvci50eXBlSWRzW3R5cGVOYW1lXS5ieXRlU2l6ZTtcbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoYFVua25vd24gdHlwZSAke0pTT04uc3RyaW5naWZ5KHR5cGVOYW1lKX1gKTtcbiAgfVxuXG4gIF92YWxpZGF0ZSgpIHtcbiAgICBpZiAoXG4gICAgICAhV2ViQXNzZW1ibHkuTW9kdWxlLmV4cG9ydHModGhpcy5tb2R1bGUpLmZpbmQoZXhwID0+IGV4cC5uYW1lID09PSBcIl9fbmV3XCIpXG4gICAgKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJUaGUgQXNzZW1ibHlTY3JpcHQgd2FzbSBtb2R1bGUgd2FzIG5vdCBidWlsdCB3aXRoIC0tZXhwb3J0UnVudGltZSwgd2hpY2ggaXMgcmVxdWlyZWQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIFdlYkFzc2VtYmx5Lk1vZHVsZS5jdXN0b21TZWN0aW9ucyh0aGlzLm1vZHVsZSwgU0VDVElPTl9OQU1FKS5sZW5ndGggIT09IDFcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgQXNzZW1ibHlTY3JpcHQgd2FzbSBtb2R1bGUgd2FzIG5vdCBidWlsdCB3aXRoIHRoZSBhcy1iaW5kIHRyYW5zZm9ybS5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXN5bmNpZnlNb2R1bGUgPSBCb29sZWFuKFxuICAgICAgV2ViQXNzZW1ibHkuTW9kdWxlLmV4cG9ydHModGhpcy5tb2R1bGUpLmZpbmQoXG4gICAgICAgIGV4cCA9PiBleHAubmFtZSA9PT0gXCJhc3luY2lmeV9zdGFydF91bndpbmRcIlxuICAgICAgKVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMuaXNBc3luY2lmeU1vZHVsZSkge1xuICAgICAgLy8gSWYgdGhpcyBtb2R1bGUgd2FzbuKAmXQgYnVpbHQgd2l0aCBBeW5jaWZ5LCB3ZSBtb2NrXG4gICAgICAvLyB0aGUgYXN5bmNpZnkgc3RhdGUgZnVuY3Rpb24gdG8gcmV0dXJuIHRoYXQgd2UgYXJlIGluIOKAnG5vcm1hbOKAnSBtb2RlLlxuICAgICAgKHRoaXMuZXhwb3J0cyBhcyBhbnkpLmFzeW5jaWZ5X2dldF9zdGF0ZSA9ICgpID0+IDA7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2luc3RhbnRpYXRlKFxuICAgIHNvdXJjZTogV2ViQXNzZW1ibHlNb2R1bGVTdHJlYW1pbmcsXG4gICAgaW1wb3J0T2JqZWN0OiBXZWJBc3NlbWJseS5JbXBvcnRzXG4gICkge1xuICAgIHRoaXMubW9kdWxlID0gYXdhaXQgY29tcGlsZVN0cmVhbWluZyhzb3VyY2UpO1xuXG4gICAgdGhpcy5fdmFsaWRhdGUoKTtcbiAgICB0aGlzLnR5cGVEZXNjcmlwdG9yID0gZXh0cmFjdFR5cGVEZXNjcmlwdG9yKHRoaXMubW9kdWxlKTtcbiAgICB0aGlzLl9pbnN0YW50aWF0ZUJpbmRJbXBvcnRGdW5jdGlvbnMoaW1wb3J0T2JqZWN0KTtcbiAgICAvLyBJbnN0YW50aWF0ZSB0aGUgbW9kdWxlIHRocm91Z2ggdGhlIGxvYWRlclxuICAgIHRoaXMubG9hZGVkTW9kdWxlID0gYXdhaXQgYXNiaW5kSW5zdGFudGlhdGUodGhpcy5tb2R1bGUsIHRoaXMuaW1wb3J0T2JqZWN0KTtcbiAgICB0aGlzLl9pbnN0YW50aWF0ZUJpbmRVbmJvdW5kRXhwb3J0cygpO1xuICB9XG5cbiAgX2luc3RhbnRpYXRlU3luYyhcbiAgICBzb3VyY2U6IFdlYkFzc2VtYmx5TW9kdWxlU3luYyxcbiAgICBpbXBvcnRPYmplY3Q6IFdlYkFzc2VtYmx5LkltcG9ydHNcbiAgKSB7XG4gICAgdGhpcy5tb2R1bGUgPSBuZXcgV2ViQXNzZW1ibHkuTW9kdWxlKHNvdXJjZSk7XG5cbiAgICB0aGlzLl92YWxpZGF0ZSgpO1xuICAgIHRoaXMudHlwZURlc2NyaXB0b3IgPSBleHRyYWN0VHlwZURlc2NyaXB0b3IodGhpcy5tb2R1bGUpO1xuICAgIHRoaXMuX2luc3RhbnRpYXRlQmluZEltcG9ydEZ1bmN0aW9ucyhpbXBvcnRPYmplY3QpO1xuICAgIHRoaXMubG9hZGVkTW9kdWxlID0gYXNiaW5kSW5zdGFudGlhdGVTeW5jKHRoaXMubW9kdWxlLCB0aGlzLmltcG9ydE9iamVjdCk7XG4gICAgdGhpcy5faW5zdGFudGlhdGVCaW5kVW5ib3VuZEV4cG9ydHMoKTtcbiAgfVxuXG4gIF9pbnN0YW50aWF0ZUJpbmRJbXBvcnRGdW5jdGlvbnMoaW1wb3J0T2JqZWN0OiBXZWJBc3NlbWJseS5JbXBvcnRzKSB7XG4gICAgdGhpcy5pbXBvcnRPYmplY3QgPSBjb3B5T2JqZWN0KGltcG9ydE9iamVjdCwgeyBkZXB0aDogMiB9KTtcblxuICAgIGZvciAoY29uc3QgW21vZHVsZU5hbWUsIG1vZHVsZURlc2NyaXB0b3JdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy50eXBlRGVzY3JpcHRvci5pbXBvcnRlZEZ1bmN0aW9uc1xuICAgICkpIHtcbiAgICAgIGZvciAoY29uc3QgW2ltcG9ydGVkRnVuY3Rpb25OYW1lLCBkZXNjcmlwdG9yXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgbW9kdWxlRGVzY3JpcHRvclxuICAgICAgKSkge1xuICAgICAgICB0aGlzLmltcG9ydE9iamVjdFttb2R1bGVOYW1lXVtcbiAgICAgICAgICBgX19hc2JpbmRfdW5ib3VuZF8ke2ltcG9ydGVkRnVuY3Rpb25OYW1lfWBcbiAgICAgICAgXSA9IGltcG9ydE9iamVjdFttb2R1bGVOYW1lXVtpbXBvcnRlZEZ1bmN0aW9uTmFtZV07XG4gICAgICAgIHRoaXMuaW1wb3J0T2JqZWN0W21vZHVsZU5hbWVdW2ltcG9ydGVkRnVuY3Rpb25OYW1lXSA9XG4gICAgICAgICAgYmluZEltcG9ydEZ1bmN0aW9uKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGltcG9ydE9iamVjdFttb2R1bGVOYW1lXVtpbXBvcnRlZEZ1bmN0aW9uTmFtZV0gYXMgRnVuY3Rpb24sXG4gICAgICAgICAgICBkZXNjcmlwdG9yXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5zdGFudGlhdGVCaW5kVW5ib3VuZEV4cG9ydHMoKSB7XG4gICAgLy8gV3JhcCBhcHByb3ByaWF0ZSB0aGUgYXBwcm9wcmlhdGUgZXhwb3J0IGZ1bmN0aW9uc1xuICAgIGNvbnN0IHVuYm91bmRFeHBvcnRzID0gdGhpcy5sb2FkZWRNb2R1bGUuZXhwb3J0cztcbiAgICB0aGlzLmV4cG9ydHMgPSBjb3B5T2JqZWN0KHVuYm91bmRFeHBvcnRzLCB7IGRlcHRoOiAxIH0pO1xuXG4gICAgZm9yIChjb25zdCBbZXhwb3J0ZWRGdW5jdGlvbk5hbWUsIGRlc2NyaXB0b3JdIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy50eXBlRGVzY3JpcHRvci5leHBvcnRlZEZ1bmN0aW9uc1xuICAgICkpIHtcbiAgICAgIHRoaXMuZXhwb3J0c1tleHBvcnRlZEZ1bmN0aW9uTmFtZV0gPSBiaW5kRXhwb3J0RnVuY3Rpb24oXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHVuYm91bmRFeHBvcnRzW2V4cG9ydGVkRnVuY3Rpb25OYW1lXSxcbiAgICAgICAgZGVzY3JpcHRvclxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlcnNpb24gYXMgcGFja1ZlcnNpb24gfSBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgQXNiaW5kSW5zdGFuY2UgZnJvbSBcIi4vYXNiaW5kLWluc3RhbmNlL2FzYmluZC1pbnN0YW5jZVwiO1xuZXhwb3J0IHsgY29udmVydGVycyB9IGZyb20gXCIuL2FzYmluZC1pbnN0YW5jZS90eXBlLWNvbnZlcnRlcnNcIjtcblxuaW1wb3J0IHsgV2ViQXNzZW1ibHlNb2R1bGVTdHJlYW1pbmcsIFdlYkFzc2VtYmx5TW9kdWxlU3luYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJzaW9uOiBzdHJpbmcgPSBwYWNrVmVyc2lvbjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbnRpYXRlKFxuICBzb3VyY2U6IFdlYkFzc2VtYmx5TW9kdWxlU3RyZWFtaW5nLFxuICBpbXBvcnRPYmplY3Q6IFdlYkFzc2VtYmx5LkltcG9ydHNcbikge1xuICBsZXQgYXNiaW5kSW5zdGFuY2UgPSBuZXcgQXNiaW5kSW5zdGFuY2UoKTtcbiAgYXdhaXQgYXNiaW5kSW5zdGFuY2UuX2luc3RhbnRpYXRlKHNvdXJjZSwgaW1wb3J0T2JqZWN0KTtcbiAgcmV0dXJuIGFzYmluZEluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVTeW5jKFxuICBzb3VyY2U6IFdlYkFzc2VtYmx5TW9kdWxlU3luYyxcbiAgaW1wb3J0T2JqZWN0OiBXZWJBc3NlbWJseS5JbXBvcnRzXG4pIHtcbiAgbGV0IGFzYmluZEluc3RhbmNlID0gbmV3IEFzYmluZEluc3RhbmNlKCk7XG4gIGFzYmluZEluc3RhbmNlLl9pbnN0YW50aWF0ZVN5bmMoc291cmNlLCBpbXBvcnRPYmplY3QpO1xuICByZXR1cm4gYXNiaW5kSW5zdGFuY2U7XG59XG4iXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiX192YWx1ZXMiLCJvIiwicyIsIm0iLCJpIiwiX19yZWFkIiwiciIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImFyZ3VtZW50cyIsImwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY29uY2F0IiwiSURfT0ZGU0VUIiwiU0laRV9PRkZTRVQiLCJBUlJBWUJVRkZFUl9JRCIsIlNUUklOR19JRCIsIkFSUkFZQlVGRkVSVklFVyIsIkFSUkFZIiwiU1RBVElDQVJSQVkiLCJWQUxfQUxJR05fT0ZGU0VUIiwiVkFMX1NJR05FRCIsIlZBTF9GTE9BVCIsIlZBTF9NQU5BR0VEIiwiQVJSQVlCVUZGRVJWSUVXX0JVRkZFUl9PRkZTRVQiLCJBUlJBWUJVRkZFUlZJRVdfREFUQVNUQVJUX09GRlNFVCIsIkFSUkFZQlVGRkVSVklFV19EQVRBTEVOR1RIX09GRlNFVCIsIkFSUkFZQlVGRkVSVklFV19TSVpFIiwiQVJSQVlfTEVOR1RIX09GRlNFVCIsIkFSUkFZX1NJWkUiLCJCSUdJTlQiLCJCaWdVaW50NjRBcnJheSIsIlRISVMiLCJTVFJJTkdfU01BTExTSVpFIiwiU1RSSU5HX0NIVU5LU0laRSIsInV0ZjE2IiwiVGV4dERlY29kZXIiLCJmYXRhbCIsImdldFN0cmluZ0ltcGwiLCJidWZmZXIiLCJwdHIiLCJsZW4iLCJVaW50MzJBcnJheSIsInd0ZjE2IiwiVWludDE2QXJyYXkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJkZWNvZGUiLCJzdHIiLCJvZmYiLCJzdWJhcnJheSIsInByZUluc3RhbnRpYXRlIiwiaW1wb3J0cyIsImV4dGVuZGVkRXhwb3J0cyIsImdldFN0cmluZyIsIm1lbW9yeSIsImVudiIsImFib3J0IiwibXNnIiwiZmlsZSIsImxpbmUiLCJjb2xtIiwiRXJyb3IiLCJ0cmFjZSIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsInNlZWQiLCJEYXRlIiwibm93IiwiTWF0aCIsIkVfTk9FWFBPUlRSVU5USU1FIiwiRl9OT0VYUE9SVFJVTlRJTUUiLCJwb3N0SW5zdGFudGlhdGUiLCJpbnN0YW5jZSIsImV4cG9ydHMiLCJ0YWJsZSIsIl9fbmV3IiwiX19waW4iLCJfX3VucGluIiwiX19jb2xsZWN0IiwiX19ydHRpX2Jhc2UiLCJnZXRSdHRpQ291bnQiLCJhcnIiLCJnZXRJbmZvIiwiaWQiLCJVMzIiLCJjb3VudCIsImdldEFycmF5SW5mbyIsImluZm8iLCJnZXRCYXNlIiwiZ2V0VmFsdWVBbGlnbiIsImNsejMyIiwiX19uZXdTdHJpbmciLCJVMTYiLCJwIiwiY2hhckNvZGVBdCIsIl9fbmV3QXJyYXlCdWZmZXIiLCJidWYiLCJidWZ2aWV3IiwiVWludDhBcnJheSIsIlU4Iiwic2V0IiwiX19nZXRTdHJpbmciLCJnZXRWaWV3IiwiYWxpZ25Mb2cyIiwic2lnbmVkIiwiZmxvYXQiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIkJpZ0ludDY0QXJyYXkiLCJfX25ld0FycmF5IiwidmFsdWVzIiwiYWxpZ24iLCJ2aWV3IiwiX19nZXRBcnJheVZpZXciLCJfX2dldEFycmF5IiwiaW5wdXQiLCJvdXQiLCJfX2dldEFycmF5QnVmZmVyIiwiZ2V0VHlwZWRBcnJheSIsIlR5cGUiLCJnZXRUeXBlZEFycmF5VmlldyIsImJ1ZlB0ciIsImF0dGFjaFR5cGVkQXJyYXlGdW5jdGlvbnMiLCJjdG9yIiwibmFtZSIsImJpbmQiLCJVaW50OENsYW1wZWRBcnJheSIsImZvckVhY2giLCJCWVRFU19QRVJfRUxFTUVOVCIsIl9faW5zdGFuY2VvZiIsImJhc2VJZCIsImRlbWFuZ2xlIiwiaXNSZXNwb25zZSIsInNyYyIsIlJlc3BvbnNlIiwiaXNNb2R1bGUiLCJXZWJBc3NlbWJseSIsIk1vZHVsZSIsImluc3RhbnRpYXRlIiwic291cmNlIiwiaW5zdGFudGlhdGVTdHJlYW1pbmciLCJtb2R1bGUiLCJjb21waWxlIiwiZXh0ZW5kZWQiLCJpbnN0YW50aWF0ZVN5bmMiLCJJbnN0YW5jZSIsImFycmF5QnVmZmVyIiwic2V0QXJndW1lbnRzTGVuZ3RoIiwiaW50ZXJuYWxOYW1lIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJlbGVtIiwicGFydHMiLCJzcGxpdCIsImN1cnIiLCJwYXJ0Iiwic2hpZnQiLCJoYXNoIiwiaW5kZXhPZiIsImNsYXNzTmFtZSIsInN1YnN0cmluZyIsImNsYXNzRWxlbSIsIndyYXAiLCJjb25zdHJ1Y3RvciIsInZhbHVlT2YiLCJ0aGlzVmFsdWUiLCJjcmVhdGUiLCJ3cml0YWJsZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInRlc3QiLCJnZXR0ZXIiLCJyZXBsYWNlIiwic2V0dGVyIiwiZ2V0IiwiZW51bWVyYWJsZSIsIm9yaWdpbmFsIiwicGFja1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7OztJQUFBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7QUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUF3RE8sU0FBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLFVBQTVCLEVBQXdDQyxDQUF4QyxFQUEyQ0MsU0FBM0MsRUFBc0Q7SUFDekQsV0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0lBQUUsV0FBT0EsS0FBSyxZQUFZSCxDQUFqQixHQUFxQkcsS0FBckIsR0FBNkIsSUFBSUgsQ0FBSixDQUFNLFVBQVVJLE9BQVYsRUFBbUI7SUFBRUEsTUFBQUEsT0FBTyxDQUFDRCxLQUFELENBQVA7SUFBaUIsS0FBNUMsQ0FBcEM7SUFBb0Y7O0lBQzVHLFNBQU8sS0FBS0gsQ0FBQyxLQUFLQSxDQUFDLEdBQUdLLE9BQVQsQ0FBTixFQUF5QixVQUFVRCxPQUFWLEVBQW1CRSxNQUFuQixFQUEyQjtJQUN2RCxhQUFTQyxTQUFULENBQW1CSixLQUFuQixFQUEwQjtJQUFFLFVBQUk7SUFBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUNRLElBQVYsQ0FBZU4sS0FBZixDQUFELENBQUo7SUFBOEIsT0FBcEMsQ0FBcUMsT0FBT08sQ0FBUCxFQUFVO0lBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0lBQVk7SUFBRTs7SUFDM0YsYUFBU0MsUUFBVCxDQUFrQlIsS0FBbEIsRUFBeUI7SUFBRSxVQUFJO0lBQUVLLFFBQUFBLElBQUksQ0FBQ1AsU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQkUsS0FBbkIsQ0FBRCxDQUFKO0lBQWtDLE9BQXhDLENBQXlDLE9BQU9PLENBQVAsRUFBVTtJQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtJQUFZO0lBQUU7O0lBQzlGLGFBQVNGLElBQVQsQ0FBY0ksTUFBZCxFQUFzQjtJQUFFQSxNQUFBQSxNQUFNLENBQUNDLElBQVAsR0FBY1QsT0FBTyxDQUFDUSxNQUFNLENBQUNULEtBQVIsQ0FBckIsR0FBc0NELEtBQUssQ0FBQ1UsTUFBTSxDQUFDVCxLQUFSLENBQUwsQ0FBb0JXLElBQXBCLENBQXlCUCxTQUF6QixFQUFvQ0ksUUFBcEMsQ0FBdEM7SUFBc0Y7O0lBQzlHSCxJQUFBQSxJQUFJLENBQUMsQ0FBQ1AsU0FBUyxHQUFHQSxTQUFTLENBQUNjLEtBQVYsQ0FBZ0JqQixPQUFoQixFQUF5QkMsVUFBVSxJQUFJLEVBQXZDLENBQWIsRUFBeURVLElBQXpELEVBQUQsQ0FBSjtJQUNILEdBTE0sQ0FBUDtJQU1IO0lBRU0sU0FBU08sV0FBVCxDQUFxQmxCLE9BQXJCLEVBQThCbUIsSUFBOUIsRUFBb0M7SUFDdkMsTUFBSUMsQ0FBQyxHQUFHO0lBQUVDLElBQUFBLEtBQUssRUFBRSxDQUFUO0lBQVlDLElBQUFBLElBQUksRUFBRSxZQUFXO0lBQUUsVUFBSUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQVgsRUFBYyxNQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQO0lBQVksYUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUjtJQUFjLEtBQXZFO0lBQXlFQyxJQUFBQSxJQUFJLEVBQUUsRUFBL0U7SUFBbUZDLElBQUFBLEdBQUcsRUFBRTtJQUF4RixHQUFSO0lBQUEsTUFBc0dDLENBQXRHO0lBQUEsTUFBeUdDLENBQXpHO0lBQUEsTUFBNEdKLENBQTVHO0lBQUEsTUFBK0dLLENBQS9HO0lBQ0EsU0FBT0EsQ0FBQyxHQUFHO0lBQUVqQixJQUFBQSxJQUFJLEVBQUVrQixJQUFJLENBQUMsQ0FBRCxDQUFaO0lBQWlCLGFBQVNBLElBQUksQ0FBQyxDQUFELENBQTlCO0lBQW1DLGNBQVVBLElBQUksQ0FBQyxDQUFEO0lBQWpELEdBQUosRUFBNEQsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixLQUFpQ0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVIsQ0FBRCxHQUFxQixZQUFXO0lBQUUsV0FBTyxJQUFQO0lBQWMsR0FBakYsQ0FBNUQsRUFBZ0pILENBQXZKOztJQUNBLFdBQVNDLElBQVQsQ0FBY0csQ0FBZCxFQUFpQjtJQUFFLFdBQU8sVUFBVUMsQ0FBVixFQUFhO0lBQUUsYUFBT3ZCLElBQUksQ0FBQyxDQUFDc0IsQ0FBRCxFQUFJQyxDQUFKLENBQUQsQ0FBWDtJQUFzQixLQUE1QztJQUErQzs7SUFDbEUsV0FBU3ZCLElBQVQsQ0FBY3dCLEVBQWQsRUFBa0I7SUFDZCxRQUFJUixDQUFKLEVBQU8sTUFBTSxJQUFJUyxTQUFKLENBQWMsaUNBQWQsQ0FBTjs7SUFDUCxXQUFPZixDQUFQLEVBQVUsSUFBSTtJQUNWLFVBQUlNLENBQUMsR0FBRyxDQUFKLEVBQU9DLENBQUMsS0FBS0osQ0FBQyxHQUFHVyxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBUixHQUFZUCxDQUFDLENBQUMsUUFBRCxDQUFiLEdBQTBCTyxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFQLENBQUMsQ0FBQyxPQUFELENBQUQsS0FBZSxDQUFDSixDQUFDLEdBQUdJLENBQUMsQ0FBQyxRQUFELENBQU4sS0FBcUJKLENBQUMsQ0FBQ2EsSUFBRixDQUFPVCxDQUFQLENBQXJCLEVBQWdDLENBQS9DLENBQVIsR0FBNERBLENBQUMsQ0FBQ2hCLElBQWpHLENBQUQsSUFBMkcsQ0FBQyxDQUFDWSxDQUFDLEdBQUdBLENBQUMsQ0FBQ2EsSUFBRixDQUFPVCxDQUFQLEVBQVVPLEVBQUUsQ0FBQyxDQUFELENBQVosQ0FBTCxFQUF1Qm5CLElBQTlJLEVBQW9KLE9BQU9RLENBQVA7SUFDcEosVUFBSUksQ0FBQyxHQUFHLENBQUosRUFBT0osQ0FBWCxFQUFjVyxFQUFFLEdBQUcsQ0FBQ0EsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVQsRUFBWVgsQ0FBQyxDQUFDbEIsS0FBZCxDQUFMOztJQUNkLGNBQVE2QixFQUFFLENBQUMsQ0FBRCxDQUFWO0lBQ0ksYUFBSyxDQUFMO0lBQVEsYUFBSyxDQUFMO0lBQVFYLFVBQUFBLENBQUMsR0FBR1csRUFBSjtJQUFROztJQUN4QixhQUFLLENBQUw7SUFBUWQsVUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0lBQVcsaUJBQU87SUFBRWhCLFlBQUFBLEtBQUssRUFBRTZCLEVBQUUsQ0FBQyxDQUFELENBQVg7SUFBZ0JuQixZQUFBQSxJQUFJLEVBQUU7SUFBdEIsV0FBUDs7SUFDbkIsYUFBSyxDQUFMO0lBQVFLLFVBQUFBLENBQUMsQ0FBQ0MsS0FBRjtJQUFXTSxVQUFBQSxDQUFDLEdBQUdPLEVBQUUsQ0FBQyxDQUFELENBQU47SUFBV0EsVUFBQUEsRUFBRSxHQUFHLENBQUMsQ0FBRCxDQUFMO0lBQVU7O0lBQ3hDLGFBQUssQ0FBTDtJQUFRQSxVQUFBQSxFQUFFLEdBQUdkLENBQUMsQ0FBQ0ssR0FBRixDQUFNWSxHQUFOLEVBQUw7O0lBQWtCakIsVUFBQUEsQ0FBQyxDQUFDSSxJQUFGLENBQU9hLEdBQVA7O0lBQWM7O0lBQ3hDO0lBQ0ksY0FBSSxFQUFFZCxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksSUFBTixFQUFZRCxDQUFDLEdBQUdBLENBQUMsQ0FBQ2UsTUFBRixHQUFXLENBQVgsSUFBZ0JmLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDZSxNQUFGLEdBQVcsQ0FBWixDQUFuQyxNQUF1REosRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLENBQVYsSUFBZUEsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLENBQWhGLENBQUosRUFBd0Y7SUFBRWQsWUFBQUEsQ0FBQyxHQUFHLENBQUo7SUFBTztJQUFXOztJQUM1RyxjQUFJYyxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixLQUFnQixDQUFDWCxDQUFELElBQU9XLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVgsQ0FBQyxDQUFDLENBQUQsQ0FBVCxJQUFnQlcsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRWCxDQUFDLENBQUMsQ0FBRCxDQUFoRCxDQUFKLEVBQTJEO0lBQUVILFlBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVYSxFQUFFLENBQUMsQ0FBRCxDQUFaO0lBQWlCO0lBQVE7O0lBQ3RGLGNBQUlBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLElBQWVkLENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUE5QixFQUFtQztJQUFFSCxZQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBWDtJQUFnQkEsWUFBQUEsQ0FBQyxHQUFHVyxFQUFKO0lBQVE7SUFBUTs7SUFDckUsY0FBSVgsQ0FBQyxJQUFJSCxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsRUFBeUI7SUFBRUgsWUFBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQVg7O0lBQWdCSCxZQUFBQSxDQUFDLENBQUNLLEdBQUYsQ0FBTWMsSUFBTixDQUFXTCxFQUFYOztJQUFnQjtJQUFROztJQUNuRSxjQUFJWCxDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVVILENBQUMsQ0FBQ0ssR0FBRixDQUFNWSxHQUFOOztJQUNWakIsVUFBQUEsQ0FBQyxDQUFDSSxJQUFGLENBQU9hLEdBQVA7O0lBQWM7SUFYdEI7O0lBYUFILE1BQUFBLEVBQUUsR0FBR2YsSUFBSSxDQUFDaUIsSUFBTCxDQUFVcEMsT0FBVixFQUFtQm9CLENBQW5CLENBQUw7SUFDSCxLQWpCUyxDQWlCUixPQUFPUixDQUFQLEVBQVU7SUFBRXNCLE1BQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsRUFBSXRCLENBQUosQ0FBTDtJQUFhZSxNQUFBQSxDQUFDLEdBQUcsQ0FBSjtJQUFRLEtBakJ6QixTQWlCa0M7SUFBRUQsTUFBQUEsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBUjtJQUFZOztJQUMxRCxRQUFJVyxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBWixFQUFlLE1BQU1BLEVBQUUsQ0FBQyxDQUFELENBQVI7SUFBYSxXQUFPO0lBQUU3QixNQUFBQSxLQUFLLEVBQUU2QixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQVYsR0FBZ0IsS0FBSyxDQUE5QjtJQUFpQ25CLE1BQUFBLElBQUksRUFBRTtJQUF2QyxLQUFQO0lBQy9CO0lBQ0o7SUFjTSxTQUFTeUIsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7SUFDeEIsTUFBSUMsQ0FBQyxHQUFHLE9BQU9aLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsUUFBL0M7SUFBQSxNQUF5RFksQ0FBQyxHQUFHRCxDQUFDLElBQUlELENBQUMsQ0FBQ0MsQ0FBRCxDQUFuRTtJQUFBLE1BQXdFRSxDQUFDLEdBQUcsQ0FBNUU7SUFDQSxNQUFJRCxDQUFKLEVBQU8sT0FBT0EsQ0FBQyxDQUFDUCxJQUFGLENBQU9LLENBQVAsQ0FBUDtJQUNQLE1BQUlBLENBQUMsSUFBSSxPQUFPQSxDQUFDLENBQUNILE1BQVQsS0FBb0IsUUFBN0IsRUFBdUMsT0FBTztJQUMxQzNCLElBQUFBLElBQUksRUFBRSxZQUFZO0lBQ2QsVUFBSThCLENBQUMsSUFBSUcsQ0FBQyxJQUFJSCxDQUFDLENBQUNILE1BQWhCLEVBQXdCRyxDQUFDLEdBQUcsS0FBSyxDQUFUO0lBQ3hCLGFBQU87SUFBRXBDLFFBQUFBLEtBQUssRUFBRW9DLENBQUMsSUFBSUEsQ0FBQyxDQUFDRyxDQUFDLEVBQUYsQ0FBZjtJQUFzQjdCLFFBQUFBLElBQUksRUFBRSxDQUFDMEI7SUFBN0IsT0FBUDtJQUNIO0lBSnlDLEdBQVA7SUFNdkMsUUFBTSxJQUFJTixTQUFKLENBQWNPLENBQUMsR0FBRyx5QkFBSCxHQUErQixpQ0FBOUMsQ0FBTjtJQUNIO0lBRU0sU0FBU0csTUFBVCxDQUFnQkosQ0FBaEIsRUFBbUJULENBQW5CLEVBQXNCO0lBQ3pCLE1BQUlXLENBQUMsR0FBRyxPQUFPYixNQUFQLEtBQWtCLFVBQWxCLElBQWdDVyxDQUFDLENBQUNYLE1BQU0sQ0FBQ0MsUUFBUixDQUF6QztJQUNBLE1BQUksQ0FBQ1ksQ0FBTCxFQUFRLE9BQU9GLENBQVA7SUFDUixNQUFJRyxDQUFDLEdBQUdELENBQUMsQ0FBQ1AsSUFBRixDQUFPSyxDQUFQLENBQVI7SUFBQSxNQUFtQkssQ0FBbkI7SUFBQSxNQUFzQkMsRUFBRSxHQUFHLEVBQTNCO0lBQUEsTUFBK0JuQyxDQUEvQjs7SUFDQSxNQUFJO0lBQ0EsV0FBTyxDQUFDb0IsQ0FBQyxLQUFLLEtBQUssQ0FBWCxJQUFnQkEsQ0FBQyxLQUFLLENBQXZCLEtBQTZCLENBQUMsQ0FBQ2MsQ0FBQyxHQUFHRixDQUFDLENBQUNqQyxJQUFGLEVBQUwsRUFBZUksSUFBcEQsRUFBMERnQyxFQUFFLENBQUNSLElBQUgsQ0FBUU8sQ0FBQyxDQUFDekMsS0FBVjtJQUM3RCxHQUZELENBR0EsT0FBTzJDLEtBQVAsRUFBYztJQUFFcEMsSUFBQUEsQ0FBQyxHQUFHO0lBQUVvQyxNQUFBQSxLQUFLLEVBQUVBO0lBQVQsS0FBSjtJQUF1QixHQUh2QyxTQUlRO0lBQ0osUUFBSTtJQUNBLFVBQUlGLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUMvQixJQUFSLEtBQWlCNEIsQ0FBQyxHQUFHQyxDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDRCxDQUFDLENBQUNQLElBQUYsQ0FBT1EsQ0FBUDtJQUMxQyxLQUZELFNBR1E7SUFBRSxVQUFJaEMsQ0FBSixFQUFPLE1BQU1BLENBQUMsQ0FBQ29DLEtBQVI7SUFBZ0I7SUFDcEM7O0lBQ0QsU0FBT0QsRUFBUDtJQUNIO0lBa0JNLFNBQVNFLGFBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCQyxJQUEzQixFQUFpQ0MsSUFBakMsRUFBdUM7SUFDMUMsTUFBSUEsSUFBSSxJQUFJQyxTQUFTLENBQUNmLE1BQVYsS0FBcUIsQ0FBakMsRUFBb0MsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBUixFQUFXVSxDQUFDLEdBQUdILElBQUksQ0FBQ2IsTUFBcEIsRUFBNEJTLEVBQWpDLEVBQXFDSCxDQUFDLEdBQUdVLENBQXpDLEVBQTRDVixDQUFDLEVBQTdDLEVBQWlEO0lBQ2pGLFFBQUlHLEVBQUUsSUFBSSxFQUFFSCxDQUFDLElBQUlPLElBQVAsQ0FBVixFQUF3QjtJQUNwQixVQUFJLENBQUNKLEVBQUwsRUFBU0EsRUFBRSxHQUFHUSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCckIsSUFBdEIsQ0FBMkJlLElBQTNCLEVBQWlDLENBQWpDLEVBQW9DUCxDQUFwQyxDQUFMO0lBQ1RHLE1BQUFBLEVBQUUsQ0FBQ0gsQ0FBRCxDQUFGLEdBQVFPLElBQUksQ0FBQ1AsQ0FBRCxDQUFaO0lBQ0g7SUFDSjtJQUNELFNBQU9NLEVBQUUsQ0FBQ1EsTUFBSCxDQUFVWCxFQUFFLElBQUlRLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JyQixJQUF0QixDQUEyQmUsSUFBM0IsQ0FBaEIsQ0FBUDtJQUNIOzs7O0lDNUtEO0lBQ0EsTUFBTVEsU0FBUyxHQUFHLENBQUMsQ0FBbkI7SUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFyQjs7SUFHQSxNQUFNQyxjQUFjLEdBQUcsQ0FBdkI7SUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBbEI7SUFHQTs7SUFDQSxNQUFNQyxlQUFlLEdBQUcsS0FBSyxDQUE3QjtJQUNBLE1BQU1DLEtBQUssR0FBRyxLQUFLLENBQW5CO0lBQ0EsTUFBTUMsV0FBVyxHQUFHLEtBQUssQ0FBekI7SUFFQTs7SUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUF6Qjs7SUFFQSxNQUFNQyxVQUFVLEdBQUcsS0FBSyxFQUF4QjtJQUNBLE1BQU1DLFNBQVMsR0FBRyxLQUFLLEVBQXZCOztJQUVBLE1BQU1DLFdBQVcsR0FBRyxLQUFLLEVBQXpCO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBOztJQUNBLE1BQU1DLDZCQUE2QixHQUFHLENBQXRDO0lBQ0EsTUFBTUMsZ0NBQWdDLEdBQUcsQ0FBekM7SUFDQSxNQUFNQyxpQ0FBaUMsR0FBRyxDQUExQztJQUNBLE1BQU1DLG9CQUFvQixHQUFHLEVBQTdCO0lBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsRUFBNUI7SUFDQSxNQUFNQyxVQUFVLEdBQUcsRUFBbkI7SUFFQSxNQUFNQyxNQUFNLEdBQUcsT0FBT0MsY0FBUCxLQUEwQixXQUF6QztJQUNBLE1BQU1DLElBQUksR0FBR2hELE1BQU0sRUFBbkI7SUFFQSxNQUFNaUQsZ0JBQWdCLEdBQUcsR0FBekI7O0lBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7O0lBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsVUFBaEIsRUFBNEI7SUFBRUMsRUFBQUEsS0FBSyxFQUFFO0lBQVQsQ0FBNUIsQ0FBZDs7SUFFQTs7SUFDQSxTQUFTQyxhQUFULENBQXVCQyxNQUF2QixFQUErQkMsR0FBL0IsRUFBb0M7SUFDbEMsTUFBSUMsR0FBRyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JILE1BQWhCLEVBQXdCQyxHQUFHLEdBQUcxQixXQUFOLEtBQXNCLENBQTlDLE1BQXFELENBQS9EO0lBQ0EsUUFBTTZCLEtBQUssR0FBRyxJQUFJQyxXQUFKLENBQWdCTCxNQUFoQixFQUF3QkMsR0FBeEIsRUFBNkJDLEdBQTdCLENBQWQ7SUFDQSxNQUFJQSxHQUFHLElBQUlSLGdCQUFYLEVBQTZCLE9BQU9ZLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixHQUFHSCxLQUF2QixDQUFQOztJQUM3QixNQUFJO0lBQ0YsV0FBT1IsS0FBSyxDQUFDWSxNQUFOLENBQWFKLEtBQWIsQ0FBUDtJQUNELEdBRkQsQ0FFRSxNQUFNO0lBQ04sUUFBSUssR0FBRyxHQUFHLEVBQVY7SUFBQSxRQUFjQyxHQUFHLEdBQUcsQ0FBcEI7O0lBQ0EsV0FBT1IsR0FBRyxHQUFHUSxHQUFOLEdBQVlmLGdCQUFuQixFQUFxQztJQUNuQ2MsTUFBQUEsR0FBRyxJQUFJSCxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsR0FBR0gsS0FBSyxDQUFDTyxRQUFOLENBQWVELEdBQWYsRUFBb0JBLEdBQUcsSUFBSWYsZ0JBQTNCLENBQXZCLENBQVA7SUFDRDs7SUFDRCxXQUFPYyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixHQUFHSCxLQUFLLENBQUNPLFFBQU4sQ0FBZUQsR0FBZixDQUF2QixDQUFiO0lBQ0Q7SUFDRjtJQUVEOzs7SUFDQSxTQUFTRSxjQUFULENBQXdCQyxPQUF4QixFQUFpQztJQUMvQixRQUFNQyxlQUFlLEdBQUcsRUFBeEI7O0lBRUEsV0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkJmLEdBQTNCLEVBQWdDO0lBQzlCLFFBQUksQ0FBQ2UsTUFBTCxFQUFhLE9BQU8sZUFBUDtJQUNiLFdBQU9qQixhQUFhLENBQUNpQixNQUFNLENBQUNoQixNQUFSLEVBQWdCQyxHQUFoQixDQUFwQjtJQUNELEdBTjhCOzs7SUFTL0IsUUFBTWdCLEdBQUcsR0FBSUosT0FBTyxDQUFDSSxHQUFSLEdBQWNKLE9BQU8sQ0FBQ0ksR0FBUixJQUFlLEVBQTFDOztJQUNBQSxFQUFBQSxHQUFHLENBQUNDLEtBQUosR0FBWUQsR0FBRyxDQUFDQyxLQUFKLElBQWEsU0FBU0EsS0FBVCxDQUFlQyxHQUFmLEVBQW9CQyxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDO0lBQzdELFVBQU1OLE1BQU0sR0FBR0YsZUFBZSxDQUFDRSxNQUFoQixJQUEwQkMsR0FBRyxDQUFDRCxNQUE3QyxDQUQ2RDs7SUFFN0QsVUFBTU8sS0FBSyxDQUFFLFVBQVNSLFNBQVMsQ0FBQ0MsTUFBRCxFQUFTRyxHQUFULENBQWMsT0FBTUosU0FBUyxDQUFDQyxNQUFELEVBQVNJLElBQVQsQ0FBZSxJQUFHQyxJQUFLLElBQUdDLElBQUssRUFBaEYsQ0FBWDtJQUNELEdBSEQ7O0lBSUFMLEVBQUFBLEdBQUcsQ0FBQ08sS0FBSixHQUFZUCxHQUFHLENBQUNPLEtBQUosSUFBYSxTQUFTQSxLQUFULENBQWVMLEdBQWYsRUFBb0J4RSxDQUFwQixFQUF1QixHQUFHOEUsSUFBMUIsRUFBZ0M7SUFDdkQsVUFBTVQsTUFBTSxHQUFHRixlQUFlLENBQUNFLE1BQWhCLElBQTBCQyxHQUFHLENBQUNELE1BQTdDO0lBQ0FVLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNaLFNBQVMsQ0FBQ0MsTUFBRCxFQUFTRyxHQUFULENBQWMsR0FBRXhFLENBQUMsR0FBRyxHQUFILEdBQVMsRUFBRyxHQUFFOEUsSUFBSSxDQUFDckQsS0FBTCxDQUFXLENBQVgsRUFBY3pCLENBQWQsRUFBaUJpRixJQUFqQixDQUFzQixJQUF0QixDQUE0QixFQUExRjtJQUNELEdBSEQ7O0lBSUFYLEVBQUFBLEdBQUcsQ0FBQ1ksSUFBSixHQUFXWixHQUFHLENBQUNZLElBQUosSUFBWUMsSUFBSSxDQUFDQyxHQUE1QjtJQUNBbEIsRUFBQUEsT0FBTyxDQUFDbUIsSUFBUixHQUFlbkIsT0FBTyxDQUFDbUIsSUFBUixJQUFnQkEsSUFBL0I7SUFDQW5CLEVBQUFBLE9BQU8sQ0FBQ2lCLElBQVIsR0FBZWpCLE9BQU8sQ0FBQ2lCLElBQVIsSUFBZ0JBLElBQS9CO0lBRUEsU0FBT2hCLGVBQVA7SUFDRDs7SUFFRCxNQUFNbUIsaUJBQWlCLEdBQUcsbURBQTFCOztJQUNBLE1BQU1DLGlCQUFpQixHQUFHLFlBQVc7SUFBRSxRQUFNWCxLQUFLLENBQUNVLGlCQUFELENBQVg7SUFBaUMsQ0FBeEU7SUFFQTs7O0lBQ0EsU0FBU0UsZUFBVCxDQUF5QnJCLGVBQXpCLEVBQTBDc0IsUUFBMUMsRUFBb0Q7SUFDbEQsUUFBTUMsT0FBTyxHQUFHRCxRQUFRLENBQUNDLE9BQXpCO0lBQ0EsUUFBTXJCLE1BQU0sR0FBR3FCLE9BQU8sQ0FBQ3JCLE1BQXZCO0lBQ0EsUUFBTXNCLEtBQUssR0FBR0QsT0FBTyxDQUFDQyxLQUF0Qjs7SUFDQSxRQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0UsS0FBUixJQUFpQkwsaUJBQS9COztJQUNBLFFBQU1NLEtBQUssR0FBR0gsT0FBTyxDQUFDRyxLQUFSLElBQWlCTixpQkFBL0I7O0lBQ0EsUUFBTU8sT0FBTyxHQUFHSixPQUFPLENBQUNJLE9BQVIsSUFBbUJQLGlCQUFuQzs7SUFDQSxRQUFNUSxTQUFTLEdBQUdMLE9BQU8sQ0FBQ0ssU0FBUixJQUFxQlIsaUJBQXZDOztJQUNBLFFBQU1TLFdBQVcsR0FBR04sT0FBTyxDQUFDTSxXQUE1QjtJQUNBLFFBQU1DLFlBQVksR0FBR0QsV0FBVyxHQUM1QixVQUFVRSxHQUFWLEVBQWU7SUFBRSxXQUFPQSxHQUFHLENBQUNGLFdBQVcsS0FBSyxDQUFqQixDQUFWO0lBQWdDLEdBRHJCLEdBRTVCVCxpQkFGSjtJQUlBcEIsRUFBQUEsZUFBZSxDQUFDeUIsS0FBaEIsR0FBd0JBLEtBQXhCO0lBQ0F6QixFQUFBQSxlQUFlLENBQUMwQixLQUFoQixHQUF3QkEsS0FBeEI7SUFDQTFCLEVBQUFBLGVBQWUsQ0FBQzJCLE9BQWhCLEdBQTBCQSxPQUExQjtJQUNBM0IsRUFBQUEsZUFBZSxDQUFDNEIsU0FBaEIsR0FBNEJBLFNBQTVCO0lBRUE7O0lBQ0EsV0FBU0ksT0FBVCxDQUFpQkMsRUFBakIsRUFBcUI7SUFDbkIsVUFBTUMsR0FBRyxHQUFHLElBQUk3QyxXQUFKLENBQWdCYSxNQUFNLENBQUNoQixNQUF2QixDQUFaO0lBQ0EsVUFBTWlELEtBQUssR0FBR0wsWUFBWSxDQUFDSSxHQUFELENBQTFCO0lBQ0EsUUFBSSxDQUFDRCxFQUFFLE1BQU0sQ0FBVCxLQUFlRSxLQUFuQixFQUEwQixNQUFNMUIsS0FBSyxDQUFFLGVBQWN3QixFQUFHLEVBQW5CLENBQVg7SUFDMUIsV0FBT0MsR0FBRyxDQUFDLENBQUNMLFdBQVcsR0FBRyxDQUFkLEtBQW9CLENBQXJCLElBQTBCSSxFQUFFLEdBQUcsQ0FBaEMsQ0FBVjtJQUNEO0lBRUQ7OztJQUNBLFdBQVNHLFlBQVQsQ0FBc0JILEVBQXRCLEVBQTBCO0lBQ3hCLFVBQU1JLElBQUksR0FBR0wsT0FBTyxDQUFDQyxFQUFELENBQXBCO0lBQ0EsUUFBSSxFQUFFSSxJQUFJLElBQUl6RSxlQUFlLEdBQUdDLEtBQWxCLEdBQTBCQyxXQUE5QixDQUFOLENBQUosRUFBdUQsTUFBTTJDLEtBQUssQ0FBRSxpQkFBZ0J3QixFQUFHLFdBQVVJLElBQUssRUFBcEMsQ0FBWDtJQUN2RCxXQUFPQSxJQUFQO0lBQ0Q7SUFFRDs7O0lBQ0EsV0FBU0MsT0FBVCxDQUFpQkwsRUFBakIsRUFBcUI7SUFDbkIsVUFBTUMsR0FBRyxHQUFHLElBQUk3QyxXQUFKLENBQWdCYSxNQUFNLENBQUNoQixNQUF2QixDQUFaO0lBQ0EsVUFBTWlELEtBQUssR0FBR0wsWUFBWSxDQUFDSSxHQUFELENBQTFCO0lBQ0EsUUFBSSxDQUFDRCxFQUFFLE1BQU0sQ0FBVCxLQUFlRSxLQUFuQixFQUEwQixNQUFNMUIsS0FBSyxDQUFFLGVBQWN3QixFQUFHLEVBQW5CLENBQVg7SUFDMUIsV0FBT0MsR0FBRyxDQUFDLENBQUNMLFdBQVcsR0FBRyxDQUFkLEtBQW9CLENBQXJCLElBQTBCSSxFQUFFLEdBQUcsQ0FBL0IsR0FBbUMsQ0FBcEMsQ0FBVjtJQUNEO0lBRUQ7OztJQUNBLFdBQVNNLGFBQVQsQ0FBdUJGLElBQXZCLEVBQTZCO0lBQzNCLFdBQU8sS0FBS25CLElBQUksQ0FBQ3NCLEtBQUwsQ0FBWUgsSUFBSSxLQUFLdEUsZ0JBQVYsR0FBOEIsRUFBekMsQ0FBWixDQUQyQjtJQUU1QjtJQUVEO0lBQ0E7SUFDQTtJQUNBOztJQUVBOzs7SUFDQSxXQUFTMEUsV0FBVCxDQUFxQjlDLEdBQXJCLEVBQTBCO0lBQ3hCLFFBQUlBLEdBQUcsSUFBSSxJQUFYLEVBQWlCLE9BQU8sQ0FBUDtJQUNqQixVQUFNeEQsTUFBTSxHQUFHd0QsR0FBRyxDQUFDeEQsTUFBbkI7O0lBQ0EsVUFBTWdELEdBQUcsR0FBR3NDLEtBQUssQ0FBQ3RGLE1BQU0sSUFBSSxDQUFYLEVBQWN3QixTQUFkLENBQWpCOztJQUNBLFVBQU0rRSxHQUFHLEdBQUcsSUFBSW5ELFdBQUosQ0FBZ0JXLE1BQU0sQ0FBQ2hCLE1BQXZCLENBQVo7O0lBQ0EsU0FBSyxJQUFJekMsQ0FBQyxHQUFHLENBQVIsRUFBV2tHLENBQUMsR0FBR3hELEdBQUcsS0FBSyxDQUE1QixFQUErQjFDLENBQUMsR0FBR04sTUFBbkMsRUFBMkMsRUFBRU0sQ0FBN0MsRUFBZ0RpRyxHQUFHLENBQUNDLENBQUMsR0FBR2xHLENBQUwsQ0FBSCxHQUFha0QsR0FBRyxDQUFDaUQsVUFBSixDQUFlbkcsQ0FBZixDQUFiOztJQUNoRCxXQUFPMEMsR0FBUDtJQUNEOztJQUVEYSxFQUFBQSxlQUFlLENBQUN5QyxXQUFoQixHQUE4QkEsV0FBOUI7SUFFQTs7SUFDQSxXQUFTSSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBK0I7SUFDN0IsUUFBSUEsR0FBRyxJQUFJLElBQVgsRUFBaUIsT0FBTyxDQUFQO0lBQ2pCLFVBQU1DLE9BQU8sR0FBRyxJQUFJQyxVQUFKLENBQWVGLEdBQWYsQ0FBaEI7O0lBQ0EsVUFBTTNELEdBQUcsR0FBR3NDLEtBQUssQ0FBQ3NCLE9BQU8sQ0FBQzVHLE1BQVQsRUFBaUJ1QixjQUFqQixDQUFqQjs7SUFDQSxVQUFNdUYsRUFBRSxHQUFHLElBQUlELFVBQUosQ0FBZTlDLE1BQU0sQ0FBQ2hCLE1BQXRCLENBQVg7SUFDQStELElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPSCxPQUFQLEVBQWdCNUQsR0FBaEI7SUFDQSxXQUFPQSxHQUFQO0lBQ0Q7O0lBRURhLEVBQUFBLGVBQWUsQ0FBQzZDLGdCQUFoQixHQUFtQ0EsZ0JBQW5DO0lBRUE7O0lBQ0EsV0FBU00sV0FBVCxDQUFxQmhFLEdBQXJCLEVBQTBCO0lBQ3hCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sSUFBUDtJQUNWLFVBQU1ELE1BQU0sR0FBR2dCLE1BQU0sQ0FBQ2hCLE1BQXRCO0lBQ0EsVUFBTStDLEVBQUUsR0FBRyxJQUFJNUMsV0FBSixDQUFnQkgsTUFBaEIsRUFBd0JDLEdBQUcsR0FBRzNCLFNBQU4sS0FBb0IsQ0FBNUMsQ0FBWDtJQUNBLFFBQUl5RSxFQUFFLEtBQUt0RSxTQUFYLEVBQXNCLE1BQU04QyxLQUFLLENBQUUsaUJBQWdCdEIsR0FBSSxFQUF0QixDQUFYO0lBQ3RCLFdBQU9GLGFBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULENBQXBCO0lBQ0Q7O0lBRURhLEVBQUFBLGVBQWUsQ0FBQ21ELFdBQWhCLEdBQThCQSxXQUE5QjtJQUVBOztJQUNBLFdBQVNDLE9BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7SUFDekMsVUFBTXJFLE1BQU0sR0FBR2dCLE1BQU0sQ0FBQ2hCLE1BQXRCOztJQUNBLFFBQUlxRSxLQUFKLEVBQVc7SUFDVCxjQUFRRixTQUFSO0lBQ0UsYUFBSyxDQUFMO0lBQVEsaUJBQU8sSUFBSUcsWUFBSixDQUFpQnRFLE1BQWpCLENBQVA7O0lBQ1IsYUFBSyxDQUFMO0lBQVEsaUJBQU8sSUFBSXVFLFlBQUosQ0FBaUJ2RSxNQUFqQixDQUFQO0lBRlY7SUFJRCxLQUxELE1BS087SUFDTCxjQUFRbUUsU0FBUjtJQUNFLGFBQUssQ0FBTDtJQUFRLGlCQUFPLEtBQUtDLE1BQU0sR0FBR0ksU0FBSCxHQUFlVixVQUExQixFQUFzQzlELE1BQXRDLENBQVA7O0lBQ1IsYUFBSyxDQUFMO0lBQVEsaUJBQU8sS0FBS29FLE1BQU0sR0FBR0ssVUFBSCxHQUFnQnBFLFdBQTNCLEVBQXdDTCxNQUF4QyxDQUFQOztJQUNSLGFBQUssQ0FBTDtJQUFRLGlCQUFPLEtBQUtvRSxNQUFNLEdBQUdNLFVBQUgsR0FBZ0J2RSxXQUEzQixFQUF3Q0gsTUFBeEMsQ0FBUDs7SUFDUixhQUFLLENBQUw7SUFBUSxpQkFBTyxLQUFLb0UsTUFBTSxHQUFHTyxhQUFILEdBQW1CbkYsY0FBOUIsRUFBOENRLE1BQTlDLENBQVA7SUFKVjtJQU1EOztJQUNELFVBQU11QixLQUFLLENBQUUsc0JBQXFCNEMsU0FBVSxFQUFqQyxDQUFYO0lBQ0Q7SUFFRDs7O0lBQ0EsV0FBU1MsVUFBVCxDQUFvQjdCLEVBQXBCLEVBQXdCOEIsTUFBeEIsRUFBZ0M7SUFDOUIsVUFBTTFCLElBQUksR0FBR0QsWUFBWSxDQUFDSCxFQUFELENBQXpCO0lBQ0EsVUFBTStCLEtBQUssR0FBR3pCLGFBQWEsQ0FBQ0YsSUFBRCxDQUEzQjtJQUNBLFVBQU1sRyxNQUFNLEdBQUc0SCxNQUFNLENBQUM1SCxNQUF0Qjs7SUFDQSxVQUFNMkcsR0FBRyxHQUFHckIsS0FBSyxDQUFDdEYsTUFBTSxJQUFJNkgsS0FBWCxFQUFrQjNCLElBQUksR0FBR3ZFLFdBQVAsR0FBcUJtRSxFQUFyQixHQUEwQnZFLGNBQTVDLENBQWpCOztJQUNBLFFBQUkvQyxNQUFKOztJQUNBLFFBQUkwSCxJQUFJLEdBQUd2RSxXQUFYLEVBQXdCO0lBQ3RCbkQsTUFBQUEsTUFBTSxHQUFHbUksR0FBVDtJQUNELEtBRkQsTUFFTztJQUNMcEIsTUFBQUEsS0FBSyxDQUFDb0IsR0FBRCxDQUFMOztJQUNBLFlBQU1mLEdBQUcsR0FBR04sS0FBSyxDQUFDWSxJQUFJLEdBQUd4RSxLQUFQLEdBQWVXLFVBQWYsR0FBNEJGLG9CQUE3QixFQUFtRDJELEVBQW5ELENBQWpCOztJQUNBTixNQUFBQSxPQUFPLENBQUNtQixHQUFELENBQVA7O0lBQ0EsWUFBTVosR0FBRyxHQUFHLElBQUk3QyxXQUFKLENBQWdCYSxNQUFNLENBQUNoQixNQUF2QixDQUFaO0lBQ0FnRCxNQUFBQSxHQUFHLENBQUNILEdBQUcsR0FBRzVELDZCQUFOLEtBQXdDLENBQXpDLENBQUgsR0FBaUQyRSxHQUFqRDtJQUNBWixNQUFBQSxHQUFHLENBQUNILEdBQUcsR0FBRzNELGdDQUFOLEtBQTJDLENBQTVDLENBQUgsR0FBb0QwRSxHQUFwRDtJQUNBWixNQUFBQSxHQUFHLENBQUNILEdBQUcsR0FBRzFELGlDQUFOLEtBQTRDLENBQTdDLENBQUgsR0FBcURsQyxNQUFNLElBQUk2SCxLQUEvRDtJQUNBLFVBQUkzQixJQUFJLEdBQUd4RSxLQUFYLEVBQWtCcUUsR0FBRyxDQUFDSCxHQUFHLEdBQUd4RCxtQkFBTixLQUE4QixDQUEvQixDQUFILEdBQXVDcEMsTUFBdkM7SUFDbEJ4QixNQUFBQSxNQUFNLEdBQUdvSCxHQUFUO0lBQ0Q7O0lBQ0QsVUFBTWtDLElBQUksR0FBR2IsT0FBTyxDQUFDWSxLQUFELEVBQVEzQixJQUFJLEdBQUdyRSxVQUFmLEVBQTJCcUUsSUFBSSxHQUFHcEUsU0FBbEMsQ0FBcEI7O0lBQ0EsUUFBSW9FLElBQUksR0FBR25FLFdBQVgsRUFBd0I7SUFDdEIsV0FBSyxJQUFJekIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sTUFBcEIsRUFBNEIsRUFBRU0sQ0FBOUIsRUFBaUM7SUFDL0IsY0FBTXZDLEtBQUssR0FBRzZKLE1BQU0sQ0FBQ3RILENBQUQsQ0FBcEI7SUFDQXdILFFBQUFBLElBQUksQ0FBQyxDQUFDbkIsR0FBRyxLQUFLa0IsS0FBVCxJQUFrQnZILENBQW5CLENBQUosR0FBNEJ2QyxLQUE1QjtJQUNEO0lBQ0YsS0FMRCxNQUtPO0lBQ0wrSixNQUFBQSxJQUFJLENBQUNmLEdBQUwsQ0FBU2EsTUFBVCxFQUFpQmpCLEdBQUcsS0FBS2tCLEtBQXpCO0lBQ0Q7O0lBQ0QsV0FBT3JKLE1BQVA7SUFDRDs7SUFFRHFGLEVBQUFBLGVBQWUsQ0FBQzhELFVBQWhCLEdBQTZCQSxVQUE3QjtJQUVBOztJQUNBLFdBQVNJLGNBQVQsQ0FBd0JuQyxHQUF4QixFQUE2QjtJQUMzQixVQUFNRyxHQUFHLEdBQUcsSUFBSTdDLFdBQUosQ0FBZ0JhLE1BQU0sQ0FBQ2hCLE1BQXZCLENBQVo7SUFDQSxVQUFNK0MsRUFBRSxHQUFHQyxHQUFHLENBQUNILEdBQUcsR0FBR3ZFLFNBQU4sS0FBb0IsQ0FBckIsQ0FBZDtJQUNBLFVBQU02RSxJQUFJLEdBQUdELFlBQVksQ0FBQ0gsRUFBRCxDQUF6QjtJQUNBLFVBQU0rQixLQUFLLEdBQUd6QixhQUFhLENBQUNGLElBQUQsQ0FBM0I7SUFDQSxRQUFJUyxHQUFHLEdBQUdULElBQUksR0FBR3ZFLFdBQVAsR0FDTmlFLEdBRE0sR0FFTkcsR0FBRyxDQUFDSCxHQUFHLEdBQUczRCxnQ0FBTixLQUEyQyxDQUE1QyxDQUZQO0lBR0EsVUFBTWpDLE1BQU0sR0FBR2tHLElBQUksR0FBR3hFLEtBQVAsR0FDWHFFLEdBQUcsQ0FBQ0gsR0FBRyxHQUFHeEQsbUJBQU4sS0FBOEIsQ0FBL0IsQ0FEUSxHQUVYMkQsR0FBRyxDQUFDWSxHQUFHLEdBQUdyRixXQUFOLEtBQXNCLENBQXZCLENBQUgsS0FBaUN1RyxLQUZyQztJQUdBLFdBQU9aLE9BQU8sQ0FBQ1ksS0FBRCxFQUFRM0IsSUFBSSxHQUFHckUsVUFBZixFQUEyQnFFLElBQUksR0FBR3BFLFNBQWxDLENBQVAsQ0FBb0Q0QixRQUFwRCxDQUE2RGlELEdBQUcsTUFBTWtCLEtBQXRFLEVBQTZFbEIsR0FBRyxHQUFHM0csTUFBbkYsQ0FBUDtJQUNEOztJQUVENkQsRUFBQUEsZUFBZSxDQUFDa0UsY0FBaEIsR0FBaUNBLGNBQWpDO0lBRUE7O0lBQ0EsV0FBU0MsVUFBVCxDQUFvQnBDLEdBQXBCLEVBQXlCO0lBQ3ZCLFVBQU1xQyxLQUFLLEdBQUdGLGNBQWMsQ0FBQ25DLEdBQUQsQ0FBNUI7O0lBQ0EsVUFBTTNDLEdBQUcsR0FBR2dGLEtBQUssQ0FBQ2pJLE1BQWxCO0lBQ0EsVUFBTWtJLEdBQUcsR0FBRyxJQUFJakgsS0FBSixDQUFVZ0MsR0FBVixDQUFaOztJQUNBLFNBQUssSUFBSTNDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyQyxHQUFwQixFQUF5QjNDLENBQUMsRUFBMUIsRUFBOEI0SCxHQUFHLENBQUM1SCxDQUFELENBQUgsR0FBUzJILEtBQUssQ0FBQzNILENBQUQsQ0FBZDs7SUFDOUIsV0FBTzRILEdBQVA7SUFDRDs7SUFFRHJFLEVBQUFBLGVBQWUsQ0FBQ21FLFVBQWhCLEdBQTZCQSxVQUE3QjtJQUVBOztJQUNBLFdBQVNHLGdCQUFULENBQTBCbkYsR0FBMUIsRUFBK0I7SUFDN0IsVUFBTUQsTUFBTSxHQUFHZ0IsTUFBTSxDQUFDaEIsTUFBdEI7SUFDQSxVQUFNL0MsTUFBTSxHQUFHLElBQUlrRCxXQUFKLENBQWdCSCxNQUFoQixFQUF3QkMsR0FBRyxHQUFHMUIsV0FBTixLQUFzQixDQUE5QyxDQUFmO0lBQ0EsV0FBT3lCLE1BQU0sQ0FBQzVCLEtBQVAsQ0FBYTZCLEdBQWIsRUFBa0JBLEdBQUcsR0FBR2hELE1BQXhCLENBQVA7SUFDRDs7SUFFRDZELEVBQUFBLGVBQWUsQ0FBQ3NFLGdCQUFoQixHQUFtQ0EsZ0JBQW5DO0lBRUE7O0lBQ0EsV0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJuQixTQUE3QixFQUF3Q2xFLEdBQXhDLEVBQTZDO0lBQzNDLFdBQU8sSUFBSXFGLElBQUosQ0FBU0MsaUJBQWlCLENBQUNELElBQUQsRUFBT25CLFNBQVAsRUFBa0JsRSxHQUFsQixDQUExQixDQUFQO0lBQ0Q7SUFFRDs7O0lBQ0EsV0FBU3NGLGlCQUFULENBQTJCRCxJQUEzQixFQUFpQ25CLFNBQWpDLEVBQTRDbEUsR0FBNUMsRUFBaUQ7SUFDL0MsVUFBTUQsTUFBTSxHQUFHZ0IsTUFBTSxDQUFDaEIsTUFBdEI7SUFDQSxVQUFNZ0QsR0FBRyxHQUFHLElBQUk3QyxXQUFKLENBQWdCSCxNQUFoQixDQUFaO0lBQ0EsVUFBTXdGLE1BQU0sR0FBR3hDLEdBQUcsQ0FBQy9DLEdBQUcsR0FBR2YsZ0NBQU4sS0FBMkMsQ0FBNUMsQ0FBbEI7SUFDQSxXQUFPLElBQUlvRyxJQUFKLENBQVN0RixNQUFULEVBQWlCd0YsTUFBakIsRUFBeUJ4QyxHQUFHLENBQUN3QyxNQUFNLEdBQUdqSCxXQUFULEtBQXlCLENBQTFCLENBQUgsS0FBb0M0RixTQUE3RCxDQUFQO0lBQ0Q7SUFFRDs7O0lBQ0EsV0FBU3NCLHlCQUFULENBQW1DQyxJQUFuQyxFQUF5Q0MsSUFBekMsRUFBK0NiLEtBQS9DLEVBQXNEO0lBQ3BEaEUsSUFBQUEsZUFBZSxDQUFFLFFBQU82RSxJQUFLLEVBQWQsQ0FBZixHQUFrQ04sYUFBYSxDQUFDTyxJQUFkLENBQW1CLElBQW5CLEVBQXlCRixJQUF6QixFQUErQlosS0FBL0IsQ0FBbEM7SUFDQWhFLElBQUFBLGVBQWUsQ0FBRSxRQUFPNkUsSUFBSyxNQUFkLENBQWYsR0FBc0NKLGlCQUFpQixDQUFDSyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkYsSUFBN0IsRUFBbUNaLEtBQW5DLENBQXRDO0lBQ0Q7O0lBRUQsR0FDRU4sU0FERixFQUVFVixVQUZGLEVBR0UrQixpQkFIRixFQUlFcEIsVUFKRixFQUtFcEUsV0FMRixFQU1FcUUsVUFORixFQU9FdkUsV0FQRixFQVFFbUUsWUFSRixFQVNFQyxZQVRGLEVBVUV1QixPQVZGLENBVVVKLElBQUksSUFBSTtJQUNoQkQsSUFBQUEseUJBQXlCLENBQUNDLElBQUQsRUFBT0EsSUFBSSxDQUFDQyxJQUFaLEVBQWtCLEtBQUszRCxJQUFJLENBQUNzQixLQUFMLENBQVdvQyxJQUFJLENBQUNLLGlCQUFoQixDQUF2QixDQUF6QjtJQUNELEdBWkQ7O0lBY0EsTUFBSXhHLE1BQUosRUFBWTtJQUNWLEtBQUNDLGNBQUQsRUFBaUJtRixhQUFqQixFQUFnQ21CLE9BQWhDLENBQXdDSixJQUFJLElBQUk7SUFDOUNELE1BQUFBLHlCQUF5QixDQUFDQyxJQUFELEVBQU9BLElBQUksQ0FBQ0MsSUFBTCxDQUFVdkgsS0FBVixDQUFnQixDQUFoQixDQUFQLEVBQTJCLENBQTNCLENBQXpCO0lBQ0QsS0FGRDtJQUdEO0lBRUQ7OztJQUNBLFdBQVM0SCxZQUFULENBQXNCL0YsR0FBdEIsRUFBMkJnRyxNQUEzQixFQUFtQztJQUNqQyxVQUFNakQsR0FBRyxHQUFHLElBQUk3QyxXQUFKLENBQWdCYSxNQUFNLENBQUNoQixNQUF2QixDQUFaO0lBQ0EsUUFBSStDLEVBQUUsR0FBR0MsR0FBRyxDQUFDL0MsR0FBRyxHQUFHM0IsU0FBTixLQUFvQixDQUFyQixDQUFaOztJQUNBLFFBQUl5RSxFQUFFLElBQUlILFlBQVksQ0FBQ0ksR0FBRCxDQUF0QixFQUE2QjtJQUMzQixTQUFHO0lBQ0QsWUFBSUQsRUFBRSxJQUFJa0QsTUFBVixFQUFrQixPQUFPLElBQVA7SUFDbEJsRCxRQUFBQSxFQUFFLEdBQUdLLE9BQU8sQ0FBQ0wsRUFBRCxDQUFaO0lBQ0QsT0FIRCxRQUdTQSxFQUhUO0lBSUQ7O0lBQ0QsV0FBTyxLQUFQO0lBQ0Q7O0lBRURqQyxFQUFBQSxlQUFlLENBQUNrRixZQUFoQixHQUErQkEsWUFBL0IsQ0FwT2tEOztJQXVPbERsRixFQUFBQSxlQUFlLENBQUNFLE1BQWhCLEdBQXlCRixlQUFlLENBQUNFLE1BQWhCLElBQTBCQSxNQUFuRDtJQUNBRixFQUFBQSxlQUFlLENBQUN3QixLQUFoQixHQUF5QnhCLGVBQWUsQ0FBQ3dCLEtBQWhCLElBQTBCQSxLQUFuRCxDQXhPa0Q7O0lBMk9sRCxTQUFPNEQsUUFBUSxDQUFDN0QsT0FBRCxFQUFVdkIsZUFBVixDQUFmO0lBQ0Q7O0lBRUQsU0FBU3FGLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0lBQ3ZCLFNBQU8sT0FBT0MsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0QsR0FBRyxZQUFZQyxRQUF6RDtJQUNEOztJQUVELFNBQVNDLFFBQVQsQ0FBa0JGLEdBQWxCLEVBQXVCO0lBQ3JCLFNBQU9BLEdBQUcsWUFBWUcsV0FBVyxDQUFDQyxNQUFsQztJQUNEO0lBRUQ7OztJQUNPLGVBQWVDLGFBQWYsQ0FBMkJDLE1BQTNCLEVBQW1DN0YsT0FBTyxHQUFHLEVBQTdDLEVBQWlEO0lBQ3RELE1BQUlzRixVQUFVLENBQUNPLE1BQU0sR0FBRyxNQUFNQSxNQUFoQixDQUFkLEVBQXVDLE9BQU9DLG9CQUFvQixDQUFDRCxNQUFELEVBQVM3RixPQUFULENBQTNCO0lBQ3ZDLFFBQU0rRixNQUFNLEdBQUdOLFFBQVEsQ0FBQ0ksTUFBRCxDQUFSLEdBQW1CQSxNQUFuQixHQUE0QixNQUFNSCxXQUFXLENBQUNNLE9BQVosQ0FBb0JILE1BQXBCLENBQWpEO0lBQ0EsUUFBTUksUUFBUSxHQUFHbEcsY0FBYyxDQUFDQyxPQUFELENBQS9CO0lBQ0EsUUFBTXVCLFFBQVEsR0FBRyxNQUFNbUUsV0FBVyxDQUFDRSxXQUFaLENBQXdCRyxNQUF4QixFQUFnQy9GLE9BQWhDLENBQXZCO0lBQ0EsUUFBTXdCLE9BQU8sR0FBR0YsZUFBZSxDQUFDMkUsUUFBRCxFQUFXMUUsUUFBWCxDQUEvQjtJQUNBLFNBQU87SUFBRXdFLElBQUFBLE1BQUY7SUFBVXhFLElBQUFBLFFBQVY7SUFBb0JDLElBQUFBO0lBQXBCLEdBQVA7SUFDRDtJQUVEOztJQUNPLFNBQVMwRSxpQkFBVCxDQUF5QkwsTUFBekIsRUFBaUM3RixPQUFPLEdBQUcsRUFBM0MsRUFBK0M7SUFDcEQsUUFBTStGLE1BQU0sR0FBR04sUUFBUSxDQUFDSSxNQUFELENBQVIsR0FBbUJBLE1BQW5CLEdBQTRCLElBQUlILFdBQVcsQ0FBQ0MsTUFBaEIsQ0FBdUJFLE1BQXZCLENBQTNDO0lBQ0EsUUFBTUksUUFBUSxHQUFHbEcsY0FBYyxDQUFDQyxPQUFELENBQS9CO0lBQ0EsUUFBTXVCLFFBQVEsR0FBRyxJQUFJbUUsV0FBVyxDQUFDUyxRQUFoQixDQUF5QkosTUFBekIsRUFBaUMvRixPQUFqQyxDQUFqQjtJQUNBLFFBQU13QixPQUFPLEdBQUdGLGVBQWUsQ0FBQzJFLFFBQUQsRUFBVzFFLFFBQVgsQ0FBL0I7SUFDQSxTQUFPO0lBQUV3RSxJQUFBQSxNQUFGO0lBQVV4RSxJQUFBQSxRQUFWO0lBQW9CQyxJQUFBQTtJQUFwQixHQUFQO0lBQ0Q7SUFFRDs7SUFDTyxlQUFlc0Usb0JBQWYsQ0FBb0NELE1BQXBDLEVBQTRDN0YsT0FBTyxHQUFHLEVBQXRELEVBQTBEO0lBQy9ELE1BQUksQ0FBQzBGLFdBQVcsQ0FBQ0ksb0JBQWpCLEVBQXVDO0lBQ3JDLFdBQU9GLGFBQVcsQ0FDaEJOLFVBQVUsQ0FBQ08sTUFBTSxHQUFHLE1BQU1BLE1BQWhCLENBQVYsR0FDSUEsTUFBTSxDQUFDTyxXQUFQLEVBREosR0FFSVAsTUFIWSxFQUloQjdGLE9BSmdCLENBQWxCO0lBTUQ7O0lBQ0QsUUFBTWlHLFFBQVEsR0FBR2xHLGNBQWMsQ0FBQ0MsT0FBRCxDQUEvQjtJQUNBLFFBQU1wRixNQUFNLEdBQUcsTUFBTThLLFdBQVcsQ0FBQ0ksb0JBQVosQ0FBaUNELE1BQWpDLEVBQXlDN0YsT0FBekMsQ0FBckI7SUFDQSxRQUFNd0IsT0FBTyxHQUFHRixlQUFlLENBQUMyRSxRQUFELEVBQVdyTCxNQUFNLENBQUMyRyxRQUFsQixDQUEvQjtJQUNBLFNBQU8sRUFBRSxHQUFHM0csTUFBTDtJQUFhNEcsSUFBQUE7SUFBYixHQUFQO0lBQ0Q7SUFFRDs7SUFDTyxTQUFTNkQsUUFBVCxDQUFrQjdELE9BQWxCLEVBQTJCdkIsZUFBZSxHQUFHLEVBQTdDLEVBQWlEO0lBQ3RELFFBQU1vRyxrQkFBa0IsR0FBRzdFLE9BQU8sQ0FBQyxtQkFBRCxDQUFQLEdBQ3ZCcEYsTUFBTSxJQUFJO0lBQUVvRixJQUFBQSxPQUFPLENBQUMsbUJBQUQsQ0FBUCxDQUE2QnJILEtBQTdCLEdBQXFDaUMsTUFBckM7SUFBOEMsR0FEbkMsR0FFdkJvRixPQUFPLENBQUMsc0JBQUQsQ0FBUCxJQUFtQ0EsT0FBTyxDQUFDLFdBQUQsQ0FBMUMsS0FBNEQsTUFBTTtJQUFFO0lBQVcsR0FBL0UsQ0FGSjs7SUFHQSxPQUFLLElBQUk4RSxZQUFULElBQXlCOUUsT0FBekIsRUFBa0M7SUFDaEMsUUFBSSxDQUFDK0UsTUFBTSxDQUFDakosU0FBUCxDQUFpQmtKLGNBQWpCLENBQWdDdEssSUFBaEMsQ0FBcUNzRixPQUFyQyxFQUE4QzhFLFlBQTlDLENBQUwsRUFBa0U7SUFDbEUsVUFBTUcsSUFBSSxHQUFHakYsT0FBTyxDQUFDOEUsWUFBRCxDQUFwQjtJQUNBLFFBQUlJLEtBQUssR0FBR0osWUFBWSxDQUFDSyxLQUFiLENBQW1CLEdBQW5CLENBQVo7SUFDQSxRQUFJQyxJQUFJLEdBQUczRyxlQUFYOztJQUNBLFdBQU95RyxLQUFLLENBQUN0SyxNQUFOLEdBQWUsQ0FBdEIsRUFBeUI7SUFDdkIsVUFBSXlLLElBQUksR0FBR0gsS0FBSyxDQUFDSSxLQUFOLEVBQVg7SUFDQSxVQUFJLENBQUNQLE1BQU0sQ0FBQ2pKLFNBQVAsQ0FBaUJrSixjQUFqQixDQUFnQ3RLLElBQWhDLENBQXFDMEssSUFBckMsRUFBMkNDLElBQTNDLENBQUwsRUFBdURELElBQUksQ0FBQ0MsSUFBRCxDQUFKLEdBQWEsRUFBYjtJQUN2REQsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNDLElBQUQsQ0FBWDtJQUNEOztJQUNELFFBQUkvQixJQUFJLEdBQUc0QixLQUFLLENBQUMsQ0FBRCxDQUFoQjtJQUNBLFFBQUlLLElBQUksR0FBR2pDLElBQUksQ0FBQ2tDLE9BQUwsQ0FBYSxHQUFiLENBQVg7O0lBQ0EsUUFBSUQsSUFBSSxJQUFJLENBQVosRUFBZTtJQUNiLFlBQU1FLFNBQVMsR0FBR25DLElBQUksQ0FBQ29DLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSCxJQUFsQixDQUFsQjtJQUNBLFlBQU1JLFNBQVMsR0FBR1AsSUFBSSxDQUFDSyxTQUFELENBQXRCOztJQUNBLFVBQUksT0FBT0UsU0FBUCxLQUFxQixXQUFyQixJQUFvQyxDQUFDQSxTQUFTLENBQUM3SixTQUFuRCxFQUE4RDtJQUM1RCxjQUFNdUgsSUFBSSxHQUFHLFVBQVMsR0FBR2pFLElBQVosRUFBa0I7SUFDN0IsaUJBQU9pRSxJQUFJLENBQUN1QyxJQUFMLENBQVV2QyxJQUFJLENBQUN2SCxTQUFMLENBQWUrSixXQUFmLENBQTJCLENBQTNCLEVBQThCLEdBQUd6RyxJQUFqQyxDQUFWLENBQVA7SUFDRCxTQUZEOztJQUdBaUUsUUFBQUEsSUFBSSxDQUFDdkgsU0FBTCxHQUFpQjtJQUNmZ0ssVUFBQUEsT0FBTyxHQUFHO0lBQUUsbUJBQU8sS0FBSzFJLElBQUwsQ0FBUDtJQUFvQjs7SUFEakIsU0FBakI7O0lBR0FpRyxRQUFBQSxJQUFJLENBQUN1QyxJQUFMLEdBQVksVUFBU0csU0FBVCxFQUFvQjtJQUM5QixpQkFBT2hCLE1BQU0sQ0FBQ2lCLE1BQVAsQ0FBYzNDLElBQUksQ0FBQ3ZILFNBQW5CLEVBQThCO0lBQUUsYUFBQ3NCLElBQUQsR0FBUTtJQUFFekUsY0FBQUEsS0FBSyxFQUFFb04sU0FBVDtJQUFvQkUsY0FBQUEsUUFBUSxFQUFFO0lBQTlCO0lBQVYsV0FBOUIsQ0FBUDtJQUNELFNBRkQ7O0lBR0EsWUFBSU4sU0FBSixFQUFlWixNQUFNLENBQUNtQixtQkFBUCxDQUEyQlAsU0FBM0IsRUFBc0NsQyxPQUF0QyxDQUE4Q0gsSUFBSSxJQUMvRHlCLE1BQU0sQ0FBQ29CLGNBQVAsQ0FBc0I5QyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0N5QixNQUFNLENBQUNxQix3QkFBUCxDQUFnQ1QsU0FBaEMsRUFBMkNyQyxJQUEzQyxDQUFsQyxDQURhO0lBR2Y4QixRQUFBQSxJQUFJLENBQUNLLFNBQUQsQ0FBSixHQUFrQnBDLElBQWxCO0lBQ0Q7O0lBQ0RDLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDb0MsU0FBTCxDQUFlSCxJQUFJLEdBQUcsQ0FBdEIsQ0FBUDtJQUNBSCxNQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ssU0FBRCxDQUFKLENBQWdCM0osU0FBdkI7O0lBQ0EsVUFBSSxjQUFjdUssSUFBZCxDQUFtQi9DLElBQW5CLENBQUosRUFBOEI7SUFDNUIsWUFBSSxDQUFDeUIsTUFBTSxDQUFDakosU0FBUCxDQUFpQmtKLGNBQWpCLENBQWdDdEssSUFBaEMsQ0FBcUMwSyxJQUFyQyxFQUEyQzlCLElBQUksR0FBR0EsSUFBSSxDQUFDb0MsU0FBTCxDQUFlLENBQWYsQ0FBbEQsQ0FBTCxFQUEyRTtJQUN6RSxjQUFJWSxNQUFNLEdBQUd0RyxPQUFPLENBQUM4RSxZQUFZLENBQUN5QixPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLENBQUQsQ0FBcEI7SUFDQSxjQUFJQyxNQUFNLEdBQUd4RyxPQUFPLENBQUM4RSxZQUFZLENBQUN5QixPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLENBQUQsQ0FBcEI7SUFDQXhCLFVBQUFBLE1BQU0sQ0FBQ29CLGNBQVAsQ0FBc0JmLElBQXRCLEVBQTRCOUIsSUFBNUIsRUFBa0M7SUFDaENtRCxZQUFBQSxHQUFHLEdBQUc7SUFBRSxxQkFBT0gsTUFBTSxDQUFDLEtBQUtsSixJQUFMLENBQUQsQ0FBYjtJQUE0QixhQURKOztJQUVoQ3VFLFlBQUFBLEdBQUcsQ0FBQ2hKLEtBQUQsRUFBUTtJQUFFNk4sY0FBQUEsTUFBTSxDQUFDLEtBQUtwSixJQUFMLENBQUQsRUFBYXpFLEtBQWIsQ0FBTjtJQUE0QixhQUZUOztJQUdoQytOLFlBQUFBLFVBQVUsRUFBRTtJQUhvQixXQUFsQztJQUtEO0lBQ0YsT0FWRCxNQVVPO0lBQ0wsWUFBSXBELElBQUksS0FBSyxhQUFiLEVBQTRCO0lBQzFCLFdBQUM4QixJQUFJLENBQUM5QixJQUFELENBQUosR0FBYSxDQUFDLEdBQUdsRSxJQUFKLEtBQWE7SUFDekJ5RixZQUFBQSxrQkFBa0IsQ0FBQ3pGLElBQUksQ0FBQ3hFLE1BQU4sQ0FBbEI7SUFDQSxtQkFBT3FLLElBQUksQ0FBQyxHQUFHN0YsSUFBSixDQUFYO0lBQ0QsV0FIRCxFQUdHdUgsUUFISCxHQUdjMUIsSUFIZDtJQUlELFNBTEQsTUFLTztJQUFFO0lBQ1AsV0FBQ0csSUFBSSxDQUFDOUIsSUFBRCxDQUFKLEdBQWEsVUFBUyxHQUFHbEUsSUFBWixFQUFrQjtJQUFFO0lBQ2hDeUYsWUFBQUEsa0JBQWtCLENBQUN6RixJQUFJLENBQUN4RSxNQUFOLENBQWxCO0lBQ0EsbUJBQU9xSyxJQUFJLENBQUMsS0FBSzdILElBQUwsQ0FBRCxFQUFhLEdBQUdnQyxJQUFoQixDQUFYO0lBQ0QsV0FIRCxFQUdHdUgsUUFISCxHQUdjMUIsSUFIZDtJQUlEO0lBQ0Y7SUFDRixLQTNDRCxNQTJDTztJQUNMLFVBQUksY0FBY29CLElBQWQsQ0FBbUIvQyxJQUFuQixDQUFKLEVBQThCO0lBQzVCLFlBQUksQ0FBQ3lCLE1BQU0sQ0FBQ2pKLFNBQVAsQ0FBaUJrSixjQUFqQixDQUFnQ3RLLElBQWhDLENBQXFDMEssSUFBckMsRUFBMkM5QixJQUFJLEdBQUdBLElBQUksQ0FBQ29DLFNBQUwsQ0FBZSxDQUFmLENBQWxELENBQUwsRUFBMkU7SUFDekVYLFVBQUFBLE1BQU0sQ0FBQ29CLGNBQVAsQ0FBc0JmLElBQXRCLEVBQTRCOUIsSUFBNUIsRUFBa0M7SUFDaENtRCxZQUFBQSxHQUFHLEVBQUV6RyxPQUFPLENBQUM4RSxZQUFZLENBQUN5QixPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLENBQUQsQ0FEb0I7SUFFaEM1RSxZQUFBQSxHQUFHLEVBQUUzQixPQUFPLENBQUM4RSxZQUFZLENBQUN5QixPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLENBQUQsQ0FGb0I7SUFHaENHLFlBQUFBLFVBQVUsRUFBRTtJQUhvQixXQUFsQztJQUtEO0lBQ0YsT0FSRCxNQVFPLElBQUksT0FBT3pCLElBQVAsS0FBZ0IsVUFBaEIsSUFBOEJBLElBQUksS0FBS0osa0JBQTNDLEVBQStEO0lBQ3BFLFNBQUNPLElBQUksQ0FBQzlCLElBQUQsQ0FBSixHQUFhLENBQUMsR0FBR2xFLElBQUosS0FBYTtJQUN6QnlGLFVBQUFBLGtCQUFrQixDQUFDekYsSUFBSSxDQUFDeEUsTUFBTixDQUFsQjtJQUNBLGlCQUFPcUssSUFBSSxDQUFDLEdBQUc3RixJQUFKLENBQVg7SUFDRCxTQUhELEVBR0d1SCxRQUhILEdBR2MxQixJQUhkO0lBSUQsT0FMTSxNQUtBO0lBQ0xHLFFBQUFBLElBQUksQ0FBQzlCLElBQUQsQ0FBSixHQUFhMkIsSUFBYjtJQUNEO0lBQ0Y7SUFDRjs7SUFDRCxTQUFPeEcsZUFBUDtJQUNEO0FBRUQsaUJBQWU7SUFDYjJGLGVBQUFBLGFBRGE7SUFFYk0sbUJBQUFBLGlCQUZhO0lBR2JKLEVBQUFBLG9CQUhhO0lBSWJULEVBQUFBO0lBSmEsQ0FBZjs7YUMvYnNCLGlCQUFpQixDQUNyQyxNQUEwQixFQUMxQixZQUFpQzs7O2dCQUVqQyxzQkFBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsRUFBQzs7O0tBQ2pEO2FBRWUscUJBQXFCLENBQ25DLE1BQTBCLEVBQzFCLFlBQWlDO1FBRWpDLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEQ7O0lDZkE7SUFDQTtJQUNBO0lBQ0EsSUFBTSxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztJQUNsRCxTQUFTLGdDQUFnQyxDQUFDLFFBQWdCOztRQUV4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBQ0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFOztZQUU5QixRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLEdBQUcsQ0FBQyxjQUE4QixFQUFFLEtBQVUsRUFBRSxRQUFnQjtRQUN2RSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FDaEIsY0FBOEIsRUFDOUIsS0FBVSxFQUNWLFFBQWdCO1FBRWhCLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUNoQixjQUE4QixFQUM5QixLQUFVLEVBQ1YsUUFBZ0I7UUFFaEIsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQ3JCLGNBQThCLEVBQzlCLEtBQVUsRUFDVixRQUFnQjtRQUVoQixPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFNBQVMsY0FBYyxDQUNyQixjQUE4QixFQUM5QixLQUFVLEVBQ1YsUUFBZ0I7UUFFaEIsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ3RDLEtBQUssQ0FBQyxVQUFVLEVBQ2hCLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQ25DLENBQUM7UUFDRixJQUFJLFVBQVUsQ0FDWixjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQ3BDLEdBQUcsRUFDSCxLQUFLLENBQUMsVUFBVSxDQUNqQixDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQ3pCLGNBQThCLEVBQzlCLEtBQVUsRUFDVixRQUFnQjtRQUVoQixPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQzNCLFVBQVEsZ0NBQWdDLENBQUMsUUFBUSxDQUFDLFNBQU0sQ0FDekQsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxTQUFTLGtCQUFrQixDQUN6QixjQUE4QixFQUM5QixLQUFVLEVBQ1YsUUFBZ0I7UUFFaEIsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDdEMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFDbEMsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsU0FBUyxjQUFjLENBQUMsUUFBZ0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDckMsTUFBTSxLQUFLLENBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQXVCLENBQUMsQ0FBQztTQUNqRTs7UUFFRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBRyxXQUFXLE1BQUcsRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsU0FBUyxRQUFRLENBQ2YsY0FBOEIsRUFDOUIsS0FBVSxFQUNWLFFBQWdCO1FBRWhCLElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDbkIsT0FBQSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUM7U0FBQSxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsUUFBUSxDQUNmLGNBQThCLEVBQzlCLEtBQVUsRUFDVixRQUFnQjtRQUVoQixJQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBTSxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RCxJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNqQyxPQUFBLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQztTQUFBLENBQzdELENBQUM7UUFDRixPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUN0QyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUNsQyxlQUFlLENBQ2hCLENBQUM7SUFDSixDQUFDO1FBT1ksVUFBVSxHQUFHLElBQUksR0FBRyxDQUE2QjtRQUM1RCxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDOzs7O1FBSXhDO1lBQ0UsK0NBQStDO1lBQy9DLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1NBQy9CO1FBQ0QsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ2xFO1lBQ0UsMkJBQTJCO1lBQzNCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNEJBQTRCO1lBQzVCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNEJBQTRCO1lBQzVCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNEJBQTRCO1lBQzVCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNkJBQTZCO1lBQzdCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNkJBQTZCO1lBQzdCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNEJBQTRCO1lBQzVCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsNkJBQTZCO1lBQzdCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsbUNBQW1DO1lBQ25DLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsOEJBQThCO1lBQzlCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsOEJBQThCO1lBQzlCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtTQUM3RDtRQUNEO1lBQ0UsOEJBQThCO1lBQzlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1NBQ3JEO1FBQ0QsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQ3ZFLEVBQUU7SUFFSCxJQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO2FBQ2pCLG1CQUFtQixDQUFDLFFBQWdCOzs7WUFDbEQsS0FBbUMsSUFBQSxlQUFBLFNBQUEsVUFBVSxDQUFBLHNDQUFBLDhEQUFFO2dCQUFwQyxJQUFBLEtBQUEsK0JBQW9CLEVBQW5CLE9BQU8sUUFBQSxFQUFFLFNBQVMsUUFBQTtnQkFDNUIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7b0JBQy9CLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTt3QkFDeEIsT0FBTyxTQUFTLENBQUM7cUJBQ2xCO29CQUNELFNBQVM7aUJBQ1Y7cUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNqQyxPQUFPLFNBQVMsQ0FBQztpQkFDbEI7YUFDRjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FDVixzQkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMseUJBQXNCLENBQ25FLENBQUM7WUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7YUFFZSwwQkFBMEIsQ0FBQyxRQUFnQjtRQUN6RCxPQUFPLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQyxDQUFDO2FBRWUsMEJBQTBCLENBQUMsUUFBZ0I7UUFDekQsT0FBTyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDL0M7O2FDdk1nQixrQkFBa0IsQ0FDaEMsY0FBOEIsRUFDOUIsZ0JBQTBCLEVBQzFCLDBCQUFxQzs7UUFHckMsSUFBTSwwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUMxRSwwQkFBMEIsQ0FDM0IsQ0FBQztRQUNGLElBQU0sNEJBQTRCLEdBQUcsMEJBQTBCLENBQzdELDBCQUEwQixDQUFDLFVBQVUsQ0FDdEMsQ0FBQzs7O1FBSUYsT0FBTztZQUFVLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDdEIsSUFDRSxjQUFjLENBQUMsZ0JBQWdCO2dCQUM5QixjQUFjLENBQUMsT0FBZSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFDMUQ7Z0JBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDcEUsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUN6QyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDakMsQ0FBQztnQkFDRixPQUFPLDRCQUE0QixDQUNqQyxjQUFjLEVBQ2QsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQ2xDLDBCQUEwQixDQUFDLFVBQVUsQ0FDdEMsQ0FBQzthQUNIO1lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLDBCQUEwQixDQUFDLE1BQU0sRUFBRTtnQkFDcEQsTUFBTSxLQUFLLENBQ1QsY0FBWSwwQkFBMEIsQ0FBQyxNQUFNLHdCQUFtQixJQUFJLENBQUMsTUFBUSxDQUM5RSxDQUFDO2FBQ0g7WUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLE9BQUEsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQzNCLGNBQWMsRUFDZCxDQUFDLEVBQ0QsMEJBQTBCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUN6QzthQUFBLENBQ0YsQ0FBQztZQUNGLElBQU0sTUFBTSxHQUFHLGdCQUFnQix3Q0FBSSxPQUFPLFVBQUMsQ0FBQztZQUU1QyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixJQUFJLEVBQUUsTUFBTSxZQUFZLE9BQU8sQ0FBQyxFQUFFO2dCQUNwRSxPQUFPLDRCQUE0QixDQUNqQyxjQUFjLEVBQ2QsTUFBTSxFQUNOLDBCQUEwQixDQUFDLFVBQVUsQ0FDdEMsQ0FBQzthQUNIO1lBRUQsY0FBYyxDQUFDLGFBQWEsR0FBRztnQkFDN0IsR0FBRyxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDNUMsY0FBYyxDQUFDLG1CQUFtQixFQUNsQyxDQUFDLENBQ0Y7YUFDRixDQUFDO1lBQ0YsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUUsSUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNFLEVBQUUsQ0FBQyxTQUFTLENBQ1YsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQ2hDLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUMsRUFDcEMsSUFBSSxDQUNMLENBQUM7WUFDRixFQUFFLENBQUMsU0FBUyxDQUNWLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUMsRUFDcEMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixFQUNyRSxJQUFJLENBQ0wsQ0FBQztZQUNELGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBZSxDQUFDLHFCQUFxQixDQUNoRSxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDakMsQ0FBQztZQUNGLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVEO0lBQ0E7YUFDZ0Isa0JBQWtCLENBQ2hDLGNBQThCLEVBQzlCLGdCQUEwQixFQUMxQiwwQkFBcUM7UUFIdkMsaUJBZ0VDOztRQTFEQyxJQUFNLDBCQUEwQixHQUFHLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQzFFLDBCQUEwQixDQUMzQixDQUFDO1FBQ0YsSUFBTSw0QkFBNEIsR0FBRywwQkFBMEIsQ0FDN0QsMEJBQTBCLENBQUMsVUFBVSxDQUN0QyxDQUFDOzs7UUFJRixPQUFPO1lBQUMsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLHlCQUFPOztZQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BELE1BQU0sS0FBSyxDQUNULGNBQVksMEJBQTBCLENBQUMsTUFBTSx3QkFBbUIsSUFBSSxDQUFDLE1BQVEsQ0FDOUUsQ0FBQzthQUNIOzs7OztZQUtELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDNUMsSUFBTSxrQkFBa0IsR0FBRywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FDdEQsY0FBYyxFQUNkLGlCQUFpQixFQUNqQiwwQkFBMEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQ3pDLENBQUM7Z0JBQ0YsSUFBSSxrQkFBa0IsS0FBSyxpQkFBaUIsRUFBRTtvQkFDNUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDakQsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUNyQztnQkFDRCxPQUFPLGtCQUFrQixDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUVILE9BQU8sU0FBUyxDQUFDO2dCQUFDLGNBQU87cUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztvQkFBUCx5QkFBTzs7Z0JBQ3ZCLElBQU0sTUFBTSxHQUFHLGdCQUFnQix3Q0FBSSxJQUFJLFVBQUMsQ0FBQztnQkFDekMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFDL0QsSUFDRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0I7b0JBQy9CLGNBQWMsQ0FBQyxPQUFlLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEVBQzFEO29CQUNBLE9BQU8sNEJBQTRCLENBQ2pDLGNBQWMsRUFDZCxNQUFNLEVBQ04sMEJBQTBCLENBQUMsVUFBVSxDQUN0QyxDQUFDO2lCQUNIO2dCQUNBLGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBZSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQ3BFLElBQUksa0JBQWtCLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQztnQkFDdEQsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztvQkFDMUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDakMsY0FBYyxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztvQkFDakQsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFlLENBQUMscUJBQXFCLENBQ2hFLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNqQyxDQUFDO29CQUNGLE9BQU8sQ0FBQyx3Q0FBSSxJQUFJLFdBQUU7aUJBQ25CLENBQUMsQ0FBQzthQUNKLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyx3Q0FBSSxPQUFPLFdBQUU7U0FDMUIsQ0FBQztJQUNKOztJQ3BKQSxJQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztJQUV4QztJQUNBLFNBQVMsVUFBVSxDQUFJLEdBQU0sRUFBRSxFQUF5QztZQUF6QyxxQkFBdUMsRUFBRSxLQUFBLEVBQXZDLGFBQWdDLEVBQWhDLEtBQUssbUJBQUcsTUFBTSxDQUFDLGlCQUFpQixLQUFBO1FBQy9ELElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDakQsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFVO2dCQUFWLEtBQUEsYUFBVSxFQUFULEdBQUcsUUFBQSxFQUFFLEdBQUcsUUFBQTtZQUFNLE9BQUE7Z0JBQ3RDLEdBQUc7Z0JBQ0gsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFDdEM7U0FBQSxDQUFDLENBQ0UsQ0FBQztJQUNULENBQUM7SUFFRCxTQUFlLGdCQUFnQixDQUFDLE1BQWtDOzs7OzRCQUN2RCxxQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCLENBQUM7OEJBQ25DLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxNQUFNLFlBQVksUUFBUSxDQUFBLEVBQTdELHdCQUE2RDt3QkFDL0QsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7NEJBQ2hDLHNCQUFPLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBQzt5QkFDN0M7d0JBQ1EscUJBQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBbkMsTUFBTSxHQUFHLFNBQTBCLENBQUM7OzRCQUd0QyxzQkFBTyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQXNCLENBQUMsRUFBQzs7OztLQUNwRDtJQUVELFNBQVMscUJBQXFCLENBQUMsTUFBMEI7UUFDdkQsSUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLElBQU0sR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE1BQU0sS0FBSyxDQUFDLDJDQUFvQyxDQUFDLENBQUMsT0FBUyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQ7UUFBQTtZQUNFLFlBQU8sR0FBbUMsRUFBRSxDQUFDO1lBQzdDLGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztZQUl2Qyx3QkFBbUIsR0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztTQThHbkM7UUEzR0Msa0NBQVMsR0FBVCxVQUFVLFFBQWdCO1lBQ3hCLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMzQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUNqRDtZQUNELE1BQU0sS0FBSyxDQUFDLGtCQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRyxDQUFDLENBQUM7U0FDekQ7UUFFRCxvQ0FBVyxHQUFYLFVBQVksUUFBZ0I7WUFDMUIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ3ZEO1lBQ0QsTUFBTSxLQUFLLENBQUMsa0JBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztTQUN6RDtRQUVELGtDQUFTLEdBQVQ7WUFDRSxJQUNFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFBLENBQUMsRUFDMUU7Z0JBQ0EsTUFBTSxLQUFLLENBQ1QsdUZBQXVGLENBQ3hGLENBQUM7YUFDSDtZQUNELElBQ0UsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN6RTtnQkFDQSxNQUFNLElBQUksS0FBSyxDQUNiLDBFQUEwRSxDQUMzRSxDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUM3QixXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMxQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssdUJBQXVCLEdBQUEsQ0FDNUMsQ0FDRixDQUFDO1lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7O2dCQUd6QixJQUFJLENBQUMsT0FBZSxDQUFDLGtCQUFrQixHQUFHLGNBQU0sT0FBQSxDQUFDLEdBQUEsQ0FBQzthQUNwRDtTQUNGO1FBRUsscUNBQVksR0FBbEIsVUFDRSxNQUFrQyxFQUNsQyxZQUFpQzs7Ozs7OzRCQUVqQyxLQUFBLElBQUksQ0FBQTs0QkFBVSxxQkFBTSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBQTs7NEJBQTVDLEdBQUssTUFBTSxHQUFHLFNBQThCLENBQUM7NEJBRTdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0QkFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3pELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7NEJBRW5ELEtBQUEsSUFBSSxDQUFBOzRCQUFnQixxQkFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQTs7OzRCQUEzRSxHQUFLLFlBQVksR0FBRyxTQUF1RCxDQUFDOzRCQUM1RSxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQzs7Ozs7U0FDdkM7UUFFRCx5Q0FBZ0IsR0FBaEIsVUFDRSxNQUE2QixFQUM3QixZQUFpQztZQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLCtCQUErQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7U0FDdkM7UUFFRCx3REFBK0IsR0FBL0IsVUFBZ0MsWUFBaUM7O1lBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztnQkFFM0QsS0FBNkMsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLE9BQU8sQ0FDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FDdEMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFGUSxJQUFBLEtBQUEsbUJBQThCLEVBQTdCLFVBQVUsUUFBQSxFQUFFLGdCQUFnQixRQUFBOzt3QkFHdEMsS0FBaUQsSUFBQSxvQkFBQSxTQUFBLE1BQU0sQ0FBQyxPQUFPLENBQzdELGdCQUFnQixDQUNqQixDQUFBLENBQUEsZ0JBQUEsNEJBQUU7NEJBRlEsSUFBQSxLQUFBLG1CQUFrQyxFQUFqQyxvQkFBb0IsUUFBQSxFQUFFLFVBQVUsUUFBQTs0QkFHMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FDM0Isc0JBQW9CLG9CQUFzQixDQUMzQyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzRCQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO2dDQUNqRCxrQkFBa0IsQ0FDaEIsSUFBSSxFQUNKLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQkFBb0IsQ0FBYSxFQUMxRCxVQUFVLENBQ1gsQ0FBQzt5QkFDTDs7Ozs7Ozs7O2lCQUNGOzs7Ozs7Ozs7U0FDRjtRQUVELHVEQUE4QixHQUE5Qjs7O1lBRUUsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7O2dCQUV4RCxLQUFpRCxJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsT0FBTyxDQUM3RCxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUN0QyxDQUFBLGdCQUFBLDRCQUFFO29CQUZRLElBQUEsS0FBQSxtQkFBa0MsRUFBakMsb0JBQW9CLFFBQUEsRUFBRSxVQUFVLFFBQUE7b0JBRzFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FDckQsSUFBSSxFQUNKLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUNwQyxVQUFVLENBQ1gsQ0FBQztpQkFDSDs7Ozs7Ozs7O1NBQ0Y7UUFDSCxxQkFBQztJQUFELENBQUM7O1FDaEtZLE9BQU8sR0FBVytDLFVBQVk7YUFFckIsV0FBVyxDQUMvQixNQUFrQyxFQUNsQyxZQUFpQzs7Ozs7O3dCQUU3QixjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFDMUMscUJBQU0sY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLEVBQUE7O3dCQUF2RCxTQUF1RCxDQUFDO3dCQUN4RCxzQkFBTyxjQUFjLEVBQUM7Ozs7S0FDdkI7YUFFZSxlQUFlLENBQzdCLE1BQTZCLEVBQzdCLFlBQWlDO1FBRWpDLElBQUksY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDMUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0RCxPQUFPLGNBQWMsQ0FBQztJQUN4Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9
