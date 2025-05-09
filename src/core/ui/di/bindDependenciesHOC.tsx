import React from "react";
import container from "@/src/core/domain/di/container";

const bindDependenciesHOC = <
  TInjectedPropNames extends string,
  TProps extends Record<TInjectedPropNames, any>,
>(
  RootComponent: React.FC<TProps>,
  injectPropKeys: Record<TInjectedPropNames, symbol>,
): React.FC<Omit<TProps,TInjectedPropNames>> => {
  return (props: Omit<TProps, TInjectedPropNames>) => {
    // @ts-ignore we will add remaining props later on
    const allProps: TProps = {...props}
    Object.keys(injectPropKeys).forEach((k) => {
      const propName = k as TInjectedPropNames;
      const provisionKey = injectPropKeys[propName];
      allProps[propName] = container.get(provisionKey) as any;
    })

    return (
      <RootComponent {...allProps} />
    )
  }
}

export default bindDependenciesHOC;
