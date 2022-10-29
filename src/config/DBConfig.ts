import { isString } from "../utils/TypeProtector";

interface DBConfig {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
}

enum Env {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

interface EnvConfig {
  [Env.DEVELOPMENT]: DBConfig;
  [Env.PRODUCTION]: DBConfig;
}

class DBConfigProvider {
  static dbConfigInstance = new DBConfigProvider();

  envConfig!: EnvConfig;

  env!: keyof EnvConfig;

  private constructor() {
    this.env =
      process.env.NODE_ENV === Env.DEVELOPMENT
        ? Env.DEVELOPMENT
        : Env.PRODUCTION;

    this.buildDBConfig();
  }

  buildDBConfig() {
    this.envConfig = {
      development: {
        host: "127.0.0.1",
        user: "yiwwhl",
        password: "123456",
        database: "dangdang",
        port: 3306,
      },
      production: {
        host: "127.0.0.1",
        user: "yiwwhl-prod",
        password: "123456",
        database: "dangdang",
        port: 3306,
      },
    };
  }

  getDBConfig(): DBConfig;
  getDBConfig(key: keyof DBConfig): string;
  getDBConfig(key: any = ""): any {
    if (isString(key) && key.length > 0) {
      return this.envConfig[this.env][key as keyof DBConfig];
    }
    return this.envConfig[this.env];
  }
}

export default DBConfigProvider.dbConfigInstance;
