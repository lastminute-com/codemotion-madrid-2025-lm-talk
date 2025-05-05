import React from "react";
import DIContext from "@/src/core/ui/di/DIContext";

/**
 * useInjection is a custom hook that retrieves a dependency from the DIContext.
 * Please note this hook is not 100% reactive as provisions might change at runtime (although is not the suggested pattern),
 * and this hook won't be able to get those changes.
 * @param key
 */
const useInjection = <TOut,>(key: string): TOut => {
  const { get } = React.useContext(DIContext);
  const dependency = get<TOut>(key);
  if (!dependency) {
    throw new Error(`Dependency not found for key: ${key}`);
  }
  return dependency;
}

export default useInjection;
