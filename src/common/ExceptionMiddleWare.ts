// 全局异常处理

import Koa from "koa";

const ExceptionMiddelWare = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.body = ctx.fail(`Internal Server Error - ${err.message}`);
  }
};

export default ExceptionMiddelWare;
