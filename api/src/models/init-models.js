import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tb_matricula from  "./tb_matricula.js";

export default function initModels(sequelize) {
  var tb_matricula = _tb_matricula.init(sequelize, DataTypes);


  return {
    tb_matricula,
  };
}
