import { sequelizeConnection } from "../../BaseDao";

class CategoryDao {
  static catgoryDao = new CategoryDao();

  async findSecThrdCtgys(firstctgyid: number) {
    const sql = `select * from secondctgy as sc inner join thirdctgy as tc on sc.secondctgyid = tc.secondctgyid where sc.firstctgyid = ${firstctgyid}`;
    return (await sequelizeConnection.query(sql))[0];
  }
}

export default CategoryDao.catgoryDao;
