import { UserInfoModel } from "../model/UserInfo";

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
}

export const { addUser } = UserDao;
