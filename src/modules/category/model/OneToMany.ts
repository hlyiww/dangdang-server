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
