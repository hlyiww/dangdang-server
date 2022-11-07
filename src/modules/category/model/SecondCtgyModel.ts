import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../BaseDao";

class SecondCtgyModel {
  static createModel() {
    const model = sequelizeConnection.define(
      "secondctgy",
      {
        secondctgyid: {
          type: DataTypes.INTEGER,
          field: "secondctgyid",
          primaryKey: true,
          autoIncrement: true,
        },
        secctgyname: {
          type: DataTypes.STRING(20),
          field: "secctgyname",
          allowNull: true,
        },
        firstctgyid: {
          type: DataTypes.INTEGER,
          field: "firstctgyid",
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return model;
  }
}

export const secondCtgyModel = SecondCtgyModel.createModel();
