import Koa from "koa";
import body from "koa-body";
import json from "koa-json";
import Router from "koa-router";
import UserRouter from "./router/user";

const app = new Koa();
const router = new Router();
router.prefix("/dangdang");

router.get("/test", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "first page";
});

router.use(json());
router.use(body());
router.use(UserRouter.routes(), UserRouter.allowedMethods());

app.use(router.routes());
app.listen(6008);
console.log("server is running on 6008");
