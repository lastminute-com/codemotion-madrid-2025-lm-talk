import type DIContainer from "@/src/core/domain/model/DIContainer";

const provisionsMap: Record<string, any> = {}

const diContainer: DIContainer = {
  get<TOut>(key: string): TOut {
    const value = provisionsMap[key];
    if (!value) {
      throw new Error(`Dependency not found: ${key}`);
    }
    return value as TOut;
  },

  set<TIn>(key: string, value: TIn): void {
    provisionsMap[key] = value;
  },
};

export default diContainer;
