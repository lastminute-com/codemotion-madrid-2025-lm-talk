import diContainer from "@/src/core/domain/di/diContainer";

type FnType = (...args: any[]) => any;

const withDependencies = <TFunction extends FnType>(
  func: TFunction,
  ...keys: string[]
): ReturnType<TFunction>  => {
  // @ts-ignore
  // Since this is homemade and not a professional DI library,
  // we won't take the time to make this resolve the keys during compilation time
  const injections = keys.map(key => {
    return diContainer.get(key);
  });

  return func(...injections);
}

export default withDependencies;
