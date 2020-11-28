"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hobbyGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hobbyGenre.init(
    {
      hobbyId: DataTypes.UUID,
      genreId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "hobbyGenre",
    }
  );
  return hobbyGenre;
};
