"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubPicture.belongsTo(models.Hobby, {
        foreignKey: "hobbyId",
        onDelete: "CASCADE",
      });
    }
  }
  SubPicture.init(
    {
      hobbyId: DataTypes.INTEGER,
      subPicture: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SubPicture",
    }
  );
  return SubPicture;
};
