import { secondCtgyModel } from "./SecondCtgyModel";
import { thirdCtgyModel } from "./ThirdCtgyModel";

// OneToMany

secondCtgyModel.hasMany(thirdCtgyModel, {
  as: "thirdctgy",
  foreignKey: "secondctgyid",
});

// ManyToOne

thirdCtgyModel.belongsTo(secondCtgyModel, {
  foreignKey: "secondctgyid",
  targetKey: "secondctgyid",
});

export const findSecondThirdCtgyByFirstCtgyId = async (firstctgyid: number) => {
  const result = await secondCtgyModel.findAll({
    // raw: true,
    where: {
      firstctgyid,
    },
    include: [
      {
        model: thirdCtgyModel,
        as: "thirdctgy",
      },
    ],
  });
  return result;
};
