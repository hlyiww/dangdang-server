declare module "LoggerProviderExpand" {
  type LoggerInstanceType = {
    [key: string]: any;
    trace: FuncType;
    debug: FuncType;
    info: FuncType;
    warn: FuncType;
    error: FuncType;
    fatal: FuncType;
  };
}
