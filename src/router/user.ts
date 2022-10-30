import { Context } from "koa";
import Router from "koa-router";

import loggerInstance from "../common/LoggerProvider";
import { addUser } from "../dao/UserDao";

const router = new Router();

router.prefix("/user");

router.get("/findUserInfo/:username/:psw", async (ctx: Context) => {
  const { username, psw } = ctx.params;

  ctx.body = {
    username,
    age: 12,
  };
});

router.post("/addUser", async (ctx: Context) => {
  const user = await ctx.request.body;
  loggerInstance.debug(user);
  const res = await addUser(user);
  ctx.body = ctx.success(res);
});

module.exports = router;
