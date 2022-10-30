import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
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
}

export const { sequelizeConnection } = BaseDao.baseDaoInstance;
