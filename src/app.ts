import Koa from "koa";
import register from "./common/RouterAutoRegister";
import DBConfigInstance from "./config/DBConfig";

// koa instance
const app = new Koa();
console.log(DBConfigInstance.getDBConfig());
// regist routes
register.regist(app);
