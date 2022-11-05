import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import path from "path";
import DBConfigInstance from "../config/DBConfig";

class BaseDao {
  static baseDaoInstance = new BaseDao();

  sequelizeConnection!: Sequelize;

  private constructor() {
    this.buildSequelizeConnection("mysql");
  }

  buildSequelizeConnection(dialect: Dialect) {
    const { host, user, password, database, port } =
      DBConfigInstance.getDBConfig();

    this.sequelizeConnection = new Sequelize(database, user, password, {
      host,
      port,
      dialect,
      define: {
        timestamps: false,
        freezeTableName: true,
      },
    });
  }

  addModels() {
    const modelPath = path.join(process.cwd(), "/src/modules/decoratorModels");
    this.sequelizeConnection.addModels([modelPath]);
  }
}

const baseDaoInstance = BaseDao.baseDaoInstance;
baseDaoInstance.addModels();
export const { sequelizeConnection } = baseDaoInstance;
