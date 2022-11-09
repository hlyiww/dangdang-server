import { Context } from "koa";
import Router from "koa-router";
import { test } from "../modules/category/service/categoryService";

const router = new Router();
router.prefix("/category");

router.get("/findSTCtgys/:firstctgyid", async (ctx: Context) => {
  const { firstctgyid } = ctx.params;
  ctx.body = ctx.success(await test(firstctgyid));
});

module.exports = router;
