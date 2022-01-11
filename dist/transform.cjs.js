"use strict";

var assemblyscript = require("assemblyscript");
var transform = require("assemblyscript/cli/transform");

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

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({
      __proto__: []
    } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError(
      "Class extends value " + String(b) + " is not a constructor or null"
    );
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
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

function isInternalElement(element) {
  return element.internalName.startsWith("~");
}
function elementHasFlag(el, flag) {
  return (el.flags & flag) != 0;
}
function typeName(type) {
  var _a, _b;
  return (_b =
    (_a = type.getClass()) === null || _a === void 0
      ? void 0
      : _a.internalName) !== null && _b !== void 0
    ? _b
    : type.toString();
}
function containingModule(func) {
  var container = func.parent;
  // Only a module is it’s own parent
  while (container !== container.parent) {
    container = container.parent;
  }
  return container;
}
function getFunctionTypeDescriptor(func) {
  return {
    returnType: typeName(func.signature.returnType),
    parameters: func.signature.parameterTypes.map(function (parameter) {
      return typeName(parameter);
    })
  };
}
function extractTypeIds(type) {
  var e_1, _a;
  var _b;
  var result = {};
  var clazz =
    (_b = type.getClass) === null || _b === void 0 ? void 0 : _b.call(type);
  if (!clazz) {
    return result;
  }
  result[clazz.internalName] = {
    id: clazz.id,
    byteSize: clazz.nextMemoryOffset
  };
  if (clazz.typeArguments) {
    try {
      for (
        var _c = __values(clazz.typeArguments), _d = _c.next();
        !_d.done;
        _d = _c.next()
      ) {
        var subType = _d.value;
        Object.assign(result, extractTypeIds(subType));
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
  }
  return result;
}
function extractTypeIdsFromFunction(func) {
  var result = {};
  Object.assign(result, extractTypeIds(func.signature.returnType));
  func.signature.parameterTypes.forEach(function (paramType) {
    return Object.assign(result, extractTypeIds(paramType));
  });
  return result;
}
var SECTION_NAME = "as-bind_bindings";
var AsBindTransform = /** @class */ (function (_super) {
  __extends(AsBindTransform, _super);
  function AsBindTransform() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AsBindTransform.prototype.afterCompile = function (module) {
    var e_2, _a, e_3, _b, e_4, _c;
    var flatExportedFunctions = __spreadArray(
      [],
      __read(this.program.elementsByDeclaration.values()),
      false
    )
      .filter(function (el) {
        return elementHasFlag(el, assemblyscript.CommonFlags.MODULE_EXPORT);
      })
      .filter(function (el) {
        return !isInternalElement(el);
      })
      .filter(function (el) {
        return (
          el.declaration.kind === assemblyscript.NodeKind.FUNCTIONDECLARATION
        );
      });
    var flatImportedFunctions = __spreadArray(
      [],
      __read(this.program.elementsByDeclaration.values()),
      false
    )
      .filter(function (el) {
        return elementHasFlag(el, assemblyscript.CommonFlags.DECLARE);
      })
      .filter(function (el) {
        return !isInternalElement(el);
      })
      .filter(function (v) {
        return (
          v.declaration.kind === assemblyscript.NodeKind.FUNCTIONDECLARATION
        );
      });
    var typeIds = {};
    var importedFunctions = {};
    try {
      for (
        var flatImportedFunctions_1 = __values(flatImportedFunctions),
          flatImportedFunctions_1_1 = flatImportedFunctions_1.next();
        !flatImportedFunctions_1_1.done;
        flatImportedFunctions_1_1 = flatImportedFunctions_1.next()
      ) {
        var importedFunction = flatImportedFunctions_1_1.value;
        // An imported function with no instances is an unused imported function.
        // Skip it.
        if (!importedFunction.instances) {
          continue;
        }
        if (
          importedFunction.instances.size > 1 ||
          !importedFunction.instances.has("")
        ) {
          throw Error("Can\u2019t import or export generic functions.");
        }
        var iFunction = importedFunction.instances.get("");
        var external_module = void 0;
        var external_name = void 0;
        var decorators = iFunction.declaration.decorators;
        if (decorators) {
          try {
            for (
              var decorators_1 = ((e_3 = void 0), __values(decorators)),
                decorators_1_1 = decorators_1.next();
              !decorators_1_1.done;
              decorators_1_1 = decorators_1.next()
            ) {
              var decorator = decorators_1_1.value;
              if (decorator.name.text !== "external") continue;
              if (!decorator.args) continue; // sanity check
              if (decorator.args.length > 1) {
                external_module = decorator.args[0].value;
                external_name = decorator.args[1].value;
              } else {
                external_name = decorator.args[0].value;
              }
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (
                decorators_1_1 &&
                !decorators_1_1.done &&
                (_b = decorators_1["return"])
              )
                _b.call(decorators_1);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
        // To know under what module name an imported function will be expected,
        // we have to find the containing module of the given function, take the
        // internal name (which is effectively the file path without extension)
        // and only take the part after the last `/`
        // (i.e. the file name without extension).
        var moduleName =
          external_module ||
          containingModule(iFunction).internalName.split("/").slice(-1)[0];
        if (!importedFunctions.hasOwnProperty(moduleName)) {
          importedFunctions[moduleName] = {};
        }
        var importedFunctionName = iFunction.name;
        if (external_name) {
          importedFunctionName = external_name;
        } else if (
          iFunction.parent &&
          iFunction.parent.kind === assemblyscript.ElementKind.NAMESPACE
        ) {
          importedFunctionName = iFunction.parent.name + "." + iFunction.name;
        }
        importedFunctions[moduleName][importedFunctionName] =
          getFunctionTypeDescriptor(iFunction);
        Object.assign(typeIds, extractTypeIdsFromFunction(iFunction));
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (
          flatImportedFunctions_1_1 &&
          !flatImportedFunctions_1_1.done &&
          (_a = flatImportedFunctions_1["return"])
        )
          _a.call(flatImportedFunctions_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    var exportedFunctions = {};
    try {
      for (
        var flatExportedFunctions_1 = __values(flatExportedFunctions),
          flatExportedFunctions_1_1 = flatExportedFunctions_1.next();
        !flatExportedFunctions_1_1.done;
        flatExportedFunctions_1_1 = flatExportedFunctions_1.next()
      ) {
        var exportedFunction = flatExportedFunctions_1_1.value;
        if (
          exportedFunction.instances.size > 1 ||
          !exportedFunction.instances.has("")
        ) {
          throw Error("Can\u2019t import or export generic functions.");
        }
        var eFunction = exportedFunction.instances.get("");
        exportedFunctions[eFunction.name] =
          getFunctionTypeDescriptor(eFunction);
        Object.assign(typeIds, extractTypeIdsFromFunction(eFunction));
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (
          flatExportedFunctions_1_1 &&
          !flatExportedFunctions_1_1.done &&
          (_c = flatExportedFunctions_1["return"])
        )
          _c.call(flatExportedFunctions_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
    module.addCustomSection(
      SECTION_NAME,
      // @ts-ignore
      new TextEncoder("utf8").encode(
        JSON.stringify({
          typeIds: typeIds,
          importedFunctions: importedFunctions,
          exportedFunctions: exportedFunctions
        })
      )
    );
  };
  return AsBindTransform;
})(transform.Transform);

module.exports = AsBindTransform;
