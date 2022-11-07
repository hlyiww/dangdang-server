import { findSecondThirdCtgyByFirstCtgyId } from "../model/OneToMany";

class CategoryDao {
  static catgoryDao = new CategoryDao();

  async findSecThrdCtgys(firstctgyid: string) {
    return findSecondThirdCtgyByFirstCtgyId(Number(firstctgyid));
  }
}

export default CategoryDao.catgoryDao;
