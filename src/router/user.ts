import { Context } from "koa";
import Router from "koa-router";

import loggerInstance from "../common/LoggerProvider";

const router = new Router();

router.prefix("/user");

router.get("/getUserInfo/:username", async (ctx: Context) => {
  const { username } = ctx.params;
  ctx.body = {
    username,
    age: 12,
  };
});

router.post("/addUser", async (ctx: Context) => {
  const user = await ctx.request.body;
  loggerInstance.debug(user);
  ctx.body = {
    message: "添加成功",
  };
});

module.exports = router;
