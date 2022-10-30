import UserInfo from "../model/UserInfo";
import { isStringNotEmpty } from "../utils/BaseProtector";
import BaseDao from "./BaseDao";

class UserDao {
  static UserDaoInstance = new UserDao();
  private constructor() {}

  findUserInfo(username: string, psw: string) {
    let sql = "select * from userinfo where 1=1";
    if (isStringNotEmpty(username)) {
      sql += ` and username='${username}'`;
    }
    if (isStringNotEmpty(psw)) {
      sql += ` and psw='${psw}'`;
    }
    return BaseDao.query<UserInfo[]>(sql);
  }
}

export default UserDao.UserDaoInstance;
