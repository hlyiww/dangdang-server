import log4js from "log4js";
import { LoggerInstanceType } from "LoggerProviderExpand";

enum LoggerLevel {
  trace = "trace",
  debug = "debug",
  info = "info",
  warn = "warn",
  error = "error",
  fatal = "fatal",
}

export class LoggerProvier {
  static loggerInstance = new LoggerProvier() as unknown as LoggerInstanceType;

  logger!: log4js.Logger;

  private constructor() {
    this.initLog4jsConfigure();
  }

  initLog4jsConfigure() {
    log4js.configure({
      appenders: {
        console: {
          type: "console",
        },
        debug_file: {
          type: "file",
          filename: "logs/debug.log",
        },
        info_file: {
          type: "dateFile",
          filename: "logs/info",
          pattern: "yyyy-MM-dd.log",
          encoding: "utf-8",
          alwaysIncludePattern: true,
        },
        warn_file: {
          type: "dateFile",
          filename: "logs/warn",
          pattern: "yyyy-MM-dd.log",
          encoding: "utf-8",
          alwaysIncludePattern: true,
        },
      },
      categories: {
        default: {
          appenders: ["console", "debug_file"],
          level: LoggerLevel.debug,
        },
        info: {
          appenders: ["console", "info_file"],
          level: LoggerLevel.info,
        },
        warn: {
          appenders: ["console", "warn_file"],
          level: LoggerLevel.warn,
        },
      },
    });
  }

  buildLoggerByCategories(level: LoggerLevel) {
    this.logger = log4js.getLogger(level);
  }
}

(["debug", "info", "warn"] as LoggerLevel[]).forEach((level) => {
  LoggerProvier.loggerInstance.buildLoggerByCategories(level);
  LoggerProvier.loggerInstance[level] = (info: any) => {
    LoggerProvier.loggerInstance.buildLoggerByCategories(level);
    LoggerProvier.loggerInstance.logger[level](info);
  };
});

export default LoggerProvier.loggerInstance;
