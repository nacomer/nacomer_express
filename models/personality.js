'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personality.hasMany(models.Hobby, {
        foreignKey: "personalityId",
        as: "Hobbies",
      });
    }
  };
  Personality.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personality',
  });
  return Personality;
};