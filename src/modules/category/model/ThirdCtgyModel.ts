import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../BaseDao";

class ThirdCtgyModel {
  static createModel() {
    const model = sequelizeConnection.define(
      "thirdctgy",
      {
        thirdctgyid: {
          type: DataTypes.INTEGER,
          field: "thirdctgyid",
          primaryKey: true,
          autoIncrement: true,
        },
        thirdctgyname: {
          type: DataTypes.STRING(20),
          field: "thirdctgyname",
          allowNull: false,
        },
        secondctgyid: {
          type: DataTypes.INTEGER,
          field: "secondctgyid",
          allowNull: false,
        },
      },
      {
        freezeTableName: true, // true表示使用给定的表名，false表示模型名后加s作为表名
        timestamps: false, //true表示给模型加上时间戳属性(createAt、updateAt),false表示不带时间戳属性
      }
    );
    return model;
  }
}
export const thirdCtgyModel = ThirdCtgyModel.createModel();
