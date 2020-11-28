'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  event.init({
    subject: DataTypes.STRING,
    ownerId: DataTypes.UUID,
    deadline: DataTypes.DATE,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    maxpart: DataTypes.INTEGER,
    minpart: DataTypes.INTEGER,
    place: DataTypes.STRING,
    description: DataTypes.STRING,
    hobbyId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};