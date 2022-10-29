import Koa from "koa";
import register from "./common/RouterAutoRegister";

// koa instance
const app = new Koa();

// regist routes
register.regist(app);
