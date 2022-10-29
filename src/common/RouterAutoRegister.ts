import fs from "fs";
import path from "path";
import Router from "koa-router";
import body from "koa-body";
import json from "koa-json";
import Koa from "koa";
import ExceptionMiddleWare from "./ExceptionMiddleWare";

let rootRouter: Router;

class RouterAutoRegister {
  static register = new RouterAutoRegister();

  regist(app: Koa) {
    this.loadAllRouters();
    this.listen(app);
  }

  loadAllRouters() {
    // 1. get root router
    this.utils.getRootRouterInstance();
    // 2. get absolute router path
    const routerAbsolutePathArray = this.utils.getAbsoluteRouterFilePath();
    // 3. get router module by path array
    this.utils.getRouterModuleByPathArray(routerAbsolutePathArray);
  }

  listen(app: Koa) {
    app.use(ExceptionMiddleWare);
    app.use(rootRouter.routes());
    app.listen(6008);
  }

  utils = {
    getRouterFiles(routerDirPath: string) {
      return fs.readdirSync(routerDirPath);
    },
    getAbsoluteRouterFilePath() {
      const routerDirPath = path.join(process.cwd(), "/src/router");
      const allRouterFiles = this.getRouterFiles(routerDirPath);
      return allRouterFiles.map((file) => `${routerDirPath}/${file}`);
    },
    getRouterModuleByPathArray(routerPathAbsArray: string[]) {
      routerPathAbsArray.forEach((absPath) => {
        const routerModule = require(absPath);
        if (this.routerProtector(routerModule)) {
          rootRouter.use(routerModule.routes(), routerModule.allowedMethods());
        }
      });
    },
    routerProtector(data: any): data is Router {
      return data instanceof Router;
    },
    getRootRouterInstance() {
      rootRouter = new Router();
      rootRouter.prefix("/dangdang");
      rootRouter.use(json());
      rootRouter.use(body());
    },
  };
}

export default RouterAutoRegister.register;
