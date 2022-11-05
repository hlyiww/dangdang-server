import { Context } from "koa";
import Router from "koa-router";

import loggerInstance from "../common/LoggerProvider";
import {
  addUser,
  getAllUsers,
  getAllUsersOptinal,
  getUsersByUnameOrUpsw,
  getUserByNameLike,
  getUserByUnameAndUpsw,
  countUserInfo,
  findUserWithPager,
} from "../modules/userinfo/dao/UserDao";

const router = new Router();

router.prefix("/user");

router.get("/getUserInfoOpOr/:username/:psw", async (ctx: Context) => {
  const { username, psw } = ctx.params;
  const users = await getUsersByUnameOrUpsw(username, psw);
  ctx.body = ctx.success(users);
});

router.get("/getUserInfoOpAnd/:username/:psw", async (ctx: Context) => {
  const { username, psw } = ctx.params;
  const users = await getUserByUnameAndUpsw(username, psw);
  ctx.body = ctx.success(users);
});

router.get("/getUserByNameLike/:username", async (ctx: Context) => {
  const { username } = ctx.params;
  const users = await getUserByNameLike(username);
  ctx.body = ctx.success(users);
});

router.get("/getAllUsers", async (ctx: Context) => {
  const allUsers = await getAllUsers();
  ctx.body = ctx.success(allUsers);
});

router.get("/getAllUsersOptinal", async (ctx: Context) => {
  const allUsersOptinal = await getAllUsersOptinal();
  console.log(allUsersOptinal);
  ctx.body = ctx.success(allUsersOptinal);
});

router.post("/addUser", async (ctx: Context) => {
  const user = await ctx.request.body;
  loggerInstance.debug(user);
  const res = await addUser(user);
  ctx.body = ctx.success(res);
});

router.get("/countTotal", async (ctx: Context) => {
  const res = await countUserInfo();
  ctx.body = ctx.success(res);
});

router.get("/findUserWithPager/:pageNum/:pageSize", async (ctx: Context) => {
  const { pageNum, pageSize } = ctx.params;
  ctx.body = await findUserWithPager(pageNum, pageSize);
});

module.exports = router;
