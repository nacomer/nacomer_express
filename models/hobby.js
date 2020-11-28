"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hobby extends Model {
    static associate(models) {
      hobby.hasMany(models.event, {
        foreignKey: "hobbyId",
      });
    }
  }
  hobby.init(
    {
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hobby",
    }
  );
  return hobby;
};
