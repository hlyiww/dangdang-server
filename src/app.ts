import Koa from "koa";
import register from "./common/RouterAutoRegister";

const app = new Koa();

register.regist(app);
