import { Op, Sequelize } from "sequelize";
import { UserInfoModel } from "../model";

export type UserInfo = {
  userid: number;
  username: string;
  psw: string;
  address: string;
  valid: number;
};

class UserDao {
  static addUser(userInfo: UserInfo) {
    return UserInfoModel.create(userInfo);
  }
  static getAllUsers() {
    return UserInfoModel.findAll({
      raw: true,
    });
  }
  static getAllUsersOptinal() {
    // 投影查询
    return UserInfoModel.findAll({
      raw: true,
      attributes: ["username", "psw"],
    });
  }
  static getUsersByUnameOrUpsw(username: string, psw: string) {
    // or 查询
    return UserInfoModel.findAll({
      raw: true,
      where: {
        [Op.or]: [{ username }, { psw }],
      },
    });
  }

  static getUserByNameLike(username: string) {
    return UserInfoModel.findAll({
      raw: true,
      where: {
        username: {
          [Op.like]: `%${username}%`,
        },
      },
    });
  }

  static getUserByUnameAndUpsw(username: string, psw: string) {
    // and 查询
    return UserInfoModel.findAll({
      raw: true,
      where: {
        [Op.and]: [
          {
            username: {
              [Op.like]: `%${username}%`,
            },
          },
          { psw },
        ],
      },
    });
  }
  static countUserInfo() {
    return UserInfoModel.findAll({
      raw: true,
      group: "address",
      attributes: [
        "address",
        [Sequelize.fn("count", Sequelize.col("valid")), "totalCount"],
      ],
      where: {
        valid: 1,
      },
    });
  }

  static findUserWithPager(pageNum: any, pageSize: any) {
    pageNum = pageSize * (pageNum - 1);
    return UserInfoModel.findAll({
      raw: true,
      limit: Number(pageSize),
      offset: Number(pageNum),
    });
  }
}

export const {
  addUser,
  getAllUsers,
  getAllUsersOptinal,
  getUsersByUnameOrUpsw,
  getUserByNameLike,
  getUserByUnameAndUpsw,
  countUserInfo,
  findUserWithPager,
} = UserDao;
