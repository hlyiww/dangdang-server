// 全局异常处理

import Koa from "koa";

const ExceptionMiddelWare = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    await next();
  } catch (err: any) {
    // TODO: 后续可能需要和前端定义规则，这里返回的也要变成一个标准的响应格式，带上约定的状态码
    ctx.body = ctx.fail(`Internal Server Error - ${err.message}`);
  }
};

export default ExceptionMiddelWare;
