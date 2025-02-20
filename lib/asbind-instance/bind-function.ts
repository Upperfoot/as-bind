import { TypeDefFn } from "../types";
import AsbindInstance from "./asbind-instance";

import {
  getAscToJsConverterForType,
  getJsToAscConverterForType
} from "./type-converters";

function getFunctionFromKeyPath(baseObject, keys) {
  let result = baseObject;
  for (const key of keys) {
    result = result?.[key];
  }
  return result;
}

export function bindImportFunction(
  asbindInstance: AsbindInstance,
  importedFunction: Function,
  importedFunctionDescriptor: TypeDefFn
) {
  // Grab type converter functions according to the type descriptor
  const argumentConverterFunctions = importedFunctionDescriptor.parameters.map(
    getAscToJsConverterForType
  );
  const returnValueConverterFunction = getJsToAscConverterForType(
    importedFunctionDescriptor.returnType
  );

  // Create a wrapper function that applies the correct converter function to arguments and
  // return value respectively.
  return function (...args) {
    if (
      asbindInstance.isAsyncifyModule &&
      (asbindInstance.exports as any).asyncify_get_state() === 2 /* Rewinding */
    ) {
      (asbindInstance.loadedModule.exports as any).asyncify_stop_rewind();
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
        `Expected ${argumentConverterFunctions.length} arguments, got ${args.length}`
      );
    }
    const newArgs = args.map((v, i) =>
      argumentConverterFunctions[i](
        asbindInstance,
        v,
        importedFunctionDescriptor.parameters[i]
      )
    );
    const result = importedFunction(...newArgs);

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
    const dv = new DataView(asbindInstance.loadedModule.exports.memory.buffer);
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
    (asbindInstance.loadedModule.exports as any).asyncify_start_unwind(
      asbindInstance.asyncifyState.ptr
    );
    asbindInstance.asyncifyState.promise = result;
  };
}

// Function that takes in an asbind instance, and the key to the export function on the
// abindInstance.exports object, to be wrapped and then re-assigned to the asbindInstance.exports.
export function bindExportFunction(
  asbindInstance: AsbindInstance,
  exportedFunction: Function,
  exportedFunctionDescriptor: TypeDefFn
) {
  // Grab type converter functions according to the type descriptor
  const argumentConverterFunctions = exportedFunctionDescriptor.parameters.map(
    getJsToAscConverterForType
  );
  const returnValueConverterFunction = getAscToJsConverterForType(
    exportedFunctionDescriptor.returnType
  );

  // Create a wrapper function that applies the correct converter function to arguments and
  // return value respectively.
  return (...args) => {
    if (args.length != argumentConverterFunctions.length) {
      throw Error(
        `Expected ${argumentConverterFunctions.length} arguments, got ${args.length}`
      );
    }
    // The conversion function of the _next_ parameter could potentially
    // trigger GC and collect the previous parameter before we even invoke
    // the actual function. That’s bad! We’ll pin all non-primitive parameters before invocation
    // and unpin them after.
    const pinnedArgs = [];
    const newArgs = args.map((originalParameter, i) => {
      const convertedParameter = argumentConverterFunctions[i](
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

    return function f(...args) {
      const result = exportedFunction(...args);
      pinnedArgs.forEach(arg => asbindInstance.exports.__unpin(arg));
      if (
        !asbindInstance.isAsyncifyModule ||
        (asbindInstance.exports as any).asyncify_get_state() === 0
      ) {
        return returnValueConverterFunction(
          asbindInstance,
          result,
          exportedFunctionDescriptor.returnType
        );
      }
      (asbindInstance.loadedModule.exports as any).asyncify_stop_unwind();
      let localAsyncifyState = asbindInstance.asyncifyState;
      return localAsyncifyState.promise.then(value => {
        localAsyncifyState.value = value;
        asbindInstance.asyncifyState = localAsyncifyState;
        (asbindInstance.loadedModule.exports as any).asyncify_start_rewind(
          asbindInstance.asyncifyState.ptr
        );
        return f(...args);
      });
    }.bind(this)(...newArgs);
  };
}
