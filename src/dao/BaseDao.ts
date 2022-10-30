import mysql, { Connection } from "mysql";
import DBConfigInstance from "../config/DBConfig";

class BaseDao {
  static baseDaoInstance = new BaseDao();

  connection!: Connection;

  private constructor() {
    this.connectDB();
  }

  async connectDB() {
    this.connection = await mysql.createConnection(
      DBConfigInstance.getDBConfig()
    );
  }

  async query<T>(sql: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err: any, result: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default BaseDao.baseDaoInstance;
