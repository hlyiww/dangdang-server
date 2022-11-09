import { getSubItemFromArray } from "../../../utils/Array";
import categoryDao from "../dao/categoryDao";

type ResultType = {
  secondctgyid: number;
  secctgyname: string;
  firstctgyid: number;
  thirdctgyid: number;
  thirdctgyname: string;
};

export const test = async (firstctgyid: number) => {
  const result = (await categoryDao.findSecThrdCtgys(
    firstctgyid
  )) as ResultType[];
  const secondctgys = getSubItemFromArray(
    result,
    "secondctgyid",
    "secctgyname"
  );
  return secondctgys;
};
