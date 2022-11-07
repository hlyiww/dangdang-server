import { Context } from "koa";
import Router from "koa-router";
import categoryDao from "../modules/category/dao/categoryDao";

const router = new Router();
router.prefix("/category");

router.get("/findSTCtgys/:firstctgyid", async (ctx: Context) => {
  const { firstctgyid } = ctx.params;
  ctx.body = ctx.success(await categoryDao.findSecThrdCtgys(firstctgyid));
});

module.exports = router;
