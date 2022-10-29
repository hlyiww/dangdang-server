import { Context } from "koa";
import Router from "koa-router";

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
  console.log(user);
  ctx.body = {
    message: "添加成功",
  };
});

export default router;
