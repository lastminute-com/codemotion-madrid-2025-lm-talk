import { Container } from 'inversify'
import type DIContainer from "@/src/core/domain/model/DIContainer";

const container = new Container()

const diContainer: DIContainer = {
  get<TOut>(key: string): TOut {
    const value = container.get<TOut>(key)
    if (!value) {
      throw new Error(`Dependency not found: ${key}`);
    }
    return value as TOut;
  },

  set<TIn>(key: string, value: TIn): void {
    container.bind(key).toConstantValue(value)
  },
};

export default diContainer;
