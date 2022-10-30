import { Context } from "koa";
import Router from "koa-router";

import loggerInstance from "../common/LoggerProvider";
import UserDaoInstance from "../dao/UserDao";

const router = new Router();

router.prefix("/user");

router.get("/findUserInfo/:username/:psw", async (ctx: Context) => {
  const { username, psw } = ctx.params;
  const userinfo = await UserDaoInstance.findUserInfo(username, psw);
  console.log(userinfo[0].username);

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
