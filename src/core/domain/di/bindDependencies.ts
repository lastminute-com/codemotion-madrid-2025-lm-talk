import container from "@/src/core/domain/di/container";

type FnType = (...args: any[]) => any;

const bindDependencies = <TFunc extends FnType>(
  func: TFunc,
  ...dependencyKeys: symbol[]
): ReturnType<FnType> => {
  const injections = dependencyKeys.map(key => container.get(key))
  return func(...injections) as ReturnType<FnType>
}

export default bindDependencies;
