import React from "react";
import DIContext from "@/src/core/ui/di/DIContext";

function withDependenciesHOC <TInjectedPropNames extends string, TProps extends Record<TInjectedPropNames, any>>(
  RootComponent: React.FC<TProps>,
  injectPropKeys: Record<TInjectedPropNames, string>,
): React.FC<Omit<TProps,TInjectedPropNames>> {
  return (props: Omit<TProps, TInjectedPropNames>) => {
    const { get } = React.useContext(DIContext);
    // @ts-ignore we will add remaining props later on
    const allProps: TProps = {...props}
    Object.keys(injectPropKeys).forEach((k) => {
      const propName = k as TInjectedPropNames;
      const provisionKey = injectPropKeys[propName] as string;
      allProps[propName] = get(provisionKey) as any;
    })

    return (
      <RootComponent {...allProps} />
    )
  }
}

export default withDependenciesHOC;
