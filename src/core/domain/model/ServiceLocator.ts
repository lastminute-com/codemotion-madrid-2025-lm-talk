type ServiceLocator = {
  /**
   * get a provision of type TOut by key
   * @param key
   */
  get<TOut>(key: string): TOut;
  /**
   * set a provision of a type TIn by key
   * @param key
   * @param value
   */
  set<TIn>(key: string, value: TIn): void;
}

export default ServiceLocator;
