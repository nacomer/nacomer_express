"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NacomerUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NacomerUser.hasMany(models.Comment, {
        foreignKey: "nacomerUserId",
        as: "Comments",
      });
    }
  }
  NacomerUser.init(
    {
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
      googleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "NacomerUser",
    }
  );
  return NacomerUser;
};
