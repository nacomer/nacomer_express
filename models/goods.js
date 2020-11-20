'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Goods.belongsTo(models.Hobby, {
        foreignKey: 'hobbyId',
        onDelete: 'CASCADE',
      })
    }
  };
  Goods.init({
    hobbyId: DataTypes.INTEGER,
    goodsName: DataTypes.STRING,
    goodsPicture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Goods',
  });
  return Goods;
};