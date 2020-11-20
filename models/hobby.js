'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hobby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hobby.belongsTo(models.Period, {
        foreignKey: 'periodId'
      });
      Hobby.hasMany(models.Comment, {
        foreignKey: 'hobbyId',
        as: 'Comments',
      });
      Hobby.hasMany(models.Goods, {
        foreignKey: 'hobbyId',
        as: 'Goods',
      });
      Hobby.hasMany(models.Video, {
        foreignKey: 'hobbyId',
        as: 'Videos',
      });
      Hobby.hasMany(models.SubPicture, {
        foreignKey: 'hobbyId',
        as: 'SubPictures',
      });
    }
  };
  Hobby.init({
    name: DataTypes.STRING,
    mainPicture: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    periodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hobby',
  });
  return Hobby;
};