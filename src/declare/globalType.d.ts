declare type FuncType = (...args: any[]) => any;

declare type UnwrapArray<T> = T extends Array<infer P> ? P : never;

declare type ItemType<T extends object[]> = {
  [K in keyof UnwrapArray<T>]: UnwrapArray<T>[K];
};
