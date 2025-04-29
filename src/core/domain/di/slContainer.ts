import type ServiceLocator from "@/src/core/domain/model/ServiceLocator";

const provisionsMap: Record<string, any> = {}

const slContainer: ServiceLocator = {
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

export default slContainer;
